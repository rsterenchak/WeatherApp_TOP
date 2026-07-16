// favourites.js — saved locations with swipe-to-rotate.
//
// The search form is the add path: a successful lookup appends the query to a
// persisted list and switches to it; a failed one leaves the list untouched
// (logic.js's invalidInput() has already reddened the input). A row of dots
// under the location name shows how many locations are saved and which is
// current. A horizontal swipe anywhere on the screen rotates through them
// (wrapping at both ends); tapping a dot jumps to it; long-pressing a dot
// removes it after a naming confirmation.
//
// State persists to localStorage under a `weatherapp_` key, matching the
// convention used across the other repos — no IndexedDB, no cookies, no backend,
// no new dependencies. Fetch strategy is lazy (fetch on arrival): a swipe leaves
// the previous ribbon on screen until the new forecast resolves, reusing the
// same keep-current-ribbon behaviour a search already has, so a swipe never
// lands on a spinner (there is no spinner) or a blank screen.
//
// Every listener here is wired exactly once, from initFavourites() at bootstrap
// — never from the render path — so nothing multiplies across fetches.

import { forecastLogic } from './logic.js';

const KEY = 'weatherapp_savedLocations';
const DEFAULT_QUERY = '98052';
const SWIPE_THRESHOLD = 50; // px of horizontal travel to commit a rotation
const LONGPRESS_MS = 500;   // hold to remove a dot

// Saved location query strings, in order. currentIndex points at the active one.
let locations = [];
let currentIndex = 0;

let dotRow; // #dotRow, cached once by initFavourites()
let navRow; // .navRow wrapping the dots and the prev/next arrows

// Swipe tracking.
let touchStartX = null;
let touchStartY = null;
let swipeActive = false;

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        locations = parsed.filter((q) => typeof q === 'string' && q.trim().length);
      }
    }
  } catch (e) {
    locations = [];
  }
}

function save() {
  try {
    localStorage.setItem(KEY, JSON.stringify(locations));
  } catch (e) {
    // Storage disabled/full — the in-memory list still works for this session.
  }
}

function clear(node) {
  while (node.firstChild) { node.removeChild(node.firstChild); }
}

// Fetch the active location, or the hard default when the list is empty. Lazy:
// the render path keeps the previous ribbon until this resolves.
function showCurrent() {
  if (locations.length) {
    forecastLogic.futureAPICalls(locations[currentIndex]);
  } else {
    forecastLogic.futureAPICalls(DEFAULT_QUERY);
  }
}

// Redraw the dot row. Hidden at a count of one (a single location needs no
// affordance) and when empty (the default fallback is not a saved location).
function renderDots() {
  if (!dotRow) { return; }
  clear(dotRow);

  // Gate the whole .navRow (dots + arrows) together, so the desktop arrows share
  // the dots' visibility rule and never dangle beside an empty row.
  const gate = navRow || dotRow;
  const n = locations.length;
  if (n <= 1) {
    gate.classList.add('hidden');
    return;
  }
  gate.classList.remove('hidden');

  for (let i = 0; i < n; i++) {
    const dot = document.createElement('div');
    dot.className = 'dot' + (i === currentIndex ? ' active' : '');
    dot.setAttribute('role', 'button');
    dot.setAttribute('aria-label', locations[i]);
    wireDot(dot, i);
    dotRow.appendChild(dot);
  }
}

// Tap a dot to jump to it; long-press (~500ms) to remove it after a
// confirmation that names the location.
function wireDot(dot, i) {
  let timer = null;
  let longFired = false;

  const cancel = () => {
    if (timer) { clearTimeout(timer); timer = null; }
  };

  dot.addEventListener('pointerdown', () => {
    // No preventDefault here: it would suppress the follow-up click and break
    // tap-to-select. The long-press branch is disambiguated by the longFired
    // flag instead, and the native long-press menu is stopped via contextmenu.
    longFired = false;
    timer = setTimeout(() => {
      longFired = true;
      timer = null;
      confirmRemove(i);
    }, LONGPRESS_MS);
  });
  dot.addEventListener('pointerup', cancel);
  dot.addEventListener('pointerleave', cancel);
  dot.addEventListener('pointercancel', cancel);
  dot.addEventListener('contextmenu', (e) => e.preventDefault());
  dot.addEventListener('click', () => {
    if (longFired) { longFired = false; return; } // the long-press already acted
    selectIndex(i);
  });
}

function confirmRemove(i) {
  if (i < 0 || i >= locations.length) { return; }
  if (window.confirm('Remove ' + locations[i] + '?')) {
    removeLocation(i);
  }
}

function selectIndex(i) {
  if (i < 0 || i >= locations.length || i === currentIndex) { return; }
  currentIndex = i;
  renderDots();
  showCurrent();
}

// Rotate through the saved list with wrap. No-op below two locations.
function rotate(dir) {
  const n = locations.length;
  if (n <= 1) { return; }
  currentIndex = (currentIndex + dir + n) % n;
  renderDots();
  showCurrent();
}

// Remove a location, keeping a coherent active selection: removing the active
// one moves to a neighbour rather than leaving an empty view; emptying the list
// falls back to the default.
function removeLocation(i) {
  if (i < 0 || i >= locations.length) { return; }
  const wasActive = (i === currentIndex);

  locations.splice(i, 1);
  save();

  if (locations.length === 0) {
    currentIndex = 0;
    renderDots();
    showCurrent(); // falls back to DEFAULT_QUERY
    return;
  }

  if (i < currentIndex) {
    currentIndex--;
  } else if (i === currentIndex && currentIndex >= locations.length) {
    currentIndex = locations.length - 1;
  }

  renderDots();
  if (wasActive) { showCurrent(); }
}

function onTouchStart(e) {
  if (e.touches.length !== 1) { swipeActive = false; return; }
  // Leave the search field's own touch handling (cursor placement) alone.
  if (e.target && e.target.closest && e.target.closest('#searchForm')) {
    swipeActive = false;
    return;
  }
  touchStartX = e.touches[0].clientX;
  touchStartY = e.touches[0].clientY;
  swipeActive = true;
}

function onTouchEnd(e) {
  if (!swipeActive) { return; }
  swipeActive = false;

  const t = e.changedTouches && e.changedTouches[0];
  if (!t) { return; }

  const dx = t.clientX - touchStartX;
  const dy = t.clientY - touchStartY;

  // Commit only on a decisively horizontal gesture, so a vertical page scroll
  // (|dy| >= |dx|) is never hijacked.
  if (Math.abs(dx) > SWIPE_THRESHOLD && Math.abs(dx) > Math.abs(dy)) {
    rotate(dx < 0 ? 1 : -1); // swipe left -> next, swipe right -> previous
  }
}

function wireGestures() {
  document.addEventListener('touchstart', onTouchStart, { passive: true });
  document.addEventListener('touchend', onTouchEnd, { passive: true });
}

// Desktop prev/next arrows drive the same rotate() the swipe gesture does, so
// both paths share one counter. Wired once from initFavourites().
function wireArrows() {
  const prev = document.getElementById('navPrev');
  const next = document.getElementById('navNext');
  if (prev) { prev.addEventListener('click', () => rotate(-1)); }
  if (next) { next.addEventListener('click', () => rotate(1)); }
}

// Append a successfully looked-up location and switch to it. Called from the
// search submit handler AFTER the fetch resolves, so the forecast is already
// rendered — this only updates the saved list and the dots, never re-fetches.
// A duplicate query switches to the existing entry instead of adding a second.
export function addLocation(query) {
  const q = String(query).trim();
  if (!q) { return; }

  const existing = locations.indexOf(q);
  if (existing !== -1) {
    currentIndex = existing;
  } else {
    locations.push(q);
    currentIndex = locations.length - 1;
    save();
  }
  renderDots();
}

// Bootstrap: load the saved list, wire the swipe gestures once, draw the dots,
// and fire the single initial fetch (the first saved location, or the default
// when none are saved). index.js calls this once, after the DOM is appended.
export function initFavourites() {
  load();
  dotRow = document.getElementById('dotRow');
  navRow = dotRow ? dotRow.parentElement : null;
  wireGestures();
  wireArrows();
  currentIndex = 0;
  renderDots();
  showCurrent();
}
