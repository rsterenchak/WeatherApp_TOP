// favourites.js — saved locations with swipe-to-rotate.
//
// The search form is the add path: a successful lookup appends the query to a
// persisted list and switches to it; a failed one leaves the list untouched
// (logic.js's invalidInput() has already reddened the input). A row of dots
// under the location name shows how many locations are saved and which is
// current. A horizontal swipe anywhere on the screen rotates through them
// (wrapping at both ends), as do the desktop prev/next arrows; clicking a dot
// opens a confirmation to remove that location.
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
const SLIDE_MS = 280; // card slide duration — mirror of the CSS keyframe

// Saved location query strings, in order. currentIndex points at the active one.
let locations = [];
let currentIndex = 0;

let dotRow; // #dotRow, cached once by initFavourites()
let navRow; // .navRow wrapping the dots and the prev/next arrows
let card; // #weatherCard — the ribbon+readout unit that slides on rotation
let slideTimeout = null;

// Swipe tracking.
let touchStartX = null;
let touchStartY = null;
let swipeActive = false;

// The single desktop remove-confirmation popover, or null. Only one is open at
// a time; a new open closes any prior one first.
let openPopover = null;

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
  closePopover(); // a redraw drops the dot the popover was anchored to
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

// A single click on a dot opens the delete confirmation for that location:
// the native confirm on touch, the anchored in-page popover on desktop/mouse
// (confirmRemove branches on pointerType). Tap-to-select is intentionally
// dropped — rotate(), driven by the swipe gesture and the desktop prev/next
// arrows, is the only way to change the active location. The click event is a
// PointerEvent, so its pointerType picks the touch vs desktop branch directly.
function wireDot(dot, i) {
  dot.addEventListener('click', (e) => {
    confirmRemove(i, dot, e.pointerType || 'mouse');
  });
}

function confirmRemove(i, dot, pointerType) {
  if (i < 0 || i >= locations.length) { return; }
  // Desktop (mouse/pen) gets the anchored in-page popover; touch keeps the
  // native confirm untouched.
  if (pointerType && pointerType !== 'touch' && dot) {
    openRemovePopover(i, dot);
    return;
  }
  if (window.confirm('Remove ' + locations[i] + '?')) {
    removeLocation(i);
  }
}

function onPopoverKeydown(e) {
  if (e.key === 'Escape') {
    e.preventDefault();
    closePopover();
  }
}

function onOutsidePointer(e) {
  if (openPopover && !openPopover.contains(e.target)) {
    closePopover();
  }
}

// Tear down the single open popover and its document-level listeners. Safe to
// call when nothing is open.
function closePopover() {
  if (!openPopover) { return; }
  openPopover.remove();
  openPopover = null;
  document.removeEventListener('keydown', onPopoverKeydown, true);
  document.removeEventListener('pointerdown', onOutsidePointer, true);
}

// A small confirmation popover anchored above the clicked dot, inside
// #dotRow. Delete removes the location; Cancel, Escape, or an outside click
// dismisses without changes. Only one is ever open (openRemovePopover closes any
// prior one first).
function openRemovePopover(i, dot) {
  closePopover();

  const pop = document.createElement('div');
  pop.className = 'removePopover';
  pop.setAttribute('role', 'dialog');
  pop.setAttribute('aria-label', 'Remove ' + locations[i]);

  const name = document.createElement('div');
  name.className = 'removePopover-name';
  name.textContent = locations[i];

  const actions = document.createElement('div');
  actions.className = 'removePopover-actions';

  const cancelBtn = document.createElement('button');
  cancelBtn.type = 'button';
  cancelBtn.className = 'removePopover-cancel';
  cancelBtn.textContent = 'Cancel';
  cancelBtn.addEventListener('click', closePopover);

  const deleteBtn = document.createElement('button');
  deleteBtn.type = 'button';
  deleteBtn.className = 'removePopover-delete';
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', () => {
    const idx = i;
    closePopover();
    removeLocation(idx);
  });

  actions.appendChild(cancelBtn);
  actions.appendChild(deleteBtn);
  pop.appendChild(name);
  pop.appendChild(actions);

  dotRow.appendChild(pop);
  openPopover = pop;

  // Anchor horizontally over the triggering dot's centre (offsetLeft is relative
  // to #dotRow, which is the offset parent — see its position: relative rule).
  pop.style.left = (dot.offsetLeft + dot.offsetWidth / 2) + 'px';

  // The click (and its pointerdown) that opened this popover has already fired,
  // so a capture listener for the next pointerdown closes the popover on an
  // outside click without immediately swallowing its own opening event.
  document.addEventListener('keydown', onPopoverKeydown, true);
  document.addEventListener('pointerdown', onOutsidePointer, true);
}

// Slide the ribbon+readout card in the swipe direction on a committed rotation.
// Mobile only — the desktop prev/next arrows update instantly, so the class is
// added only when the ≤480px breakpoint is active. The keyframe fades the card
// to nothing at its midpoint (see #weatherCard.slide-* in style.css), which
// masks the forecast swap: showCurrent()'s fetch resolves and renderRibbon()
// rebuilds into this same card, so the new curve slides back in rather than
// snapping. Direction-aware: outgoing content leaves toward the swipe, incoming
// enters from the opposite edge.
function playSlide(dir) {
  if (!card) { return; }
  if (!window.matchMedia || !window.matchMedia('(max-width: 480px)').matches) {
    return; // desktop rotates via the arrows, without the slide
  }
  card.classList.remove('slide-next', 'slide-prev');
  void card.offsetWidth; // reflow so a rapid second swipe restarts the animation
  card.classList.add(dir < 0 ? 'slide-prev' : 'slide-next');

  // onCardAnimEnd strips the class when the keyframe finishes; this is the
  // fallback for the reduced-motion path, where the animation is suppressed and
  // animationend never fires.
  if (slideTimeout) { clearTimeout(slideTimeout); }
  slideTimeout = setTimeout(clearSlide, SLIDE_MS + 80);
}

function clearSlide() {
  if (slideTimeout) { clearTimeout(slideTimeout); slideTimeout = null; }
  if (card) { card.classList.remove('slide-next', 'slide-prev'); }
}

function onCardAnimEnd(e) {
  if (e.target !== card) { return; } // ignore any bubbled descendant animation
  clearSlide();
}

// Rotate through the saved list with wrap. No-op below two locations. The slide
// class goes on before the redraw/fetch so the outgoing content is already
// moving as the new forecast is requested (playSlide is a no-op off mobile).
function rotate(dir) {
  const n = locations.length;
  if (n <= 1) { return; }
  currentIndex = (currentIndex + dir + n) % n;
  playSlide(dir);
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
  card = document.getElementById('weatherCard');
  if (card) { card.addEventListener('animationend', onCardAnimEnd); }
  wireGestures();
  wireArrows();
  currentIndex = 0;
  renderDots();
  showCurrent();
}
