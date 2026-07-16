// sky.js — a condition-based background mounted behind the app.
//
// Pure vanilla, no dependencies. A single `.weatherBg` element is inserted as
// the FIRST child of `#app` and positioned `fixed` (see style.css), so it spans
// the whole browser window on desktop while `#app` stays a constrained centred
// column above it (z-index). The element carries a `bg-<category>` class that
// selects a per-condition treatment in style.css — a gradient base plus
// decorative layers (sun, moon + twinkling stars, drifting clouds, flakes, haze)
// on the two pseudo-elements. All imagery and motion live in style.css.
//
// The category is resolved from `now.condition` (the WeatherAPI condition text)
// and re-applied on every fetch via setWeatherBg(), so the background follows
// the current location's weather. Off the render path itself: index.js mounts
// the layer once at bootstrap, and indexChanges.js swaps only the class.
//
// The motion is guarded the same way the old drift was:
//   - prefers-reduced-motion: reduce -> the CSS animations are disabled by a
//       media query, so each treatment renders as one static frame.
//   - visibilitychange -> add a `.paused` class that pauses the CSS animations
//       while the tab is hidden, removed when it becomes visible again.

let bgEl = null;
let currentCategory = null;

// The category applied before the first fetch resolves — a calm, neutral sky.
const DEFAULT_CATEGORY = 'cloudy';

function reduceMotion() {
  return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
}

// Map a WeatherAPI condition string to one of the background treatments defined
// in style.css. Order matters: the more specific precipitation checks run before
// the broad cloud/clear ones so "Light rain shower" and "Patchy snow" resolve to
// their precipitation category rather than falling through. Anything unmatched
// lands on the neutral 'cloudy' treatment.
function categoryFor(text) {
  const t = String(text || '').toLowerCase();
  if (/snow|sleet|blizzard|ice|flurr/.test(t)) { return 'snow'; }
  if (/rain|drizzle|shower|thunder/.test(t)) { return 'rain'; }
  if (/fog|mist|haze/.test(t)) { return 'fog'; }
  if (/sunny/.test(t)) { return 'sunny'; }
  if (/clear/.test(t)) { return 'clear-night'; }
  return 'cloudy'; // cloudy, overcast, partly cloudy, and any unknown text
}

// Freeze the drift while the tab is hidden, resume when it comes back. Under
// reduced motion nothing is animating, so `.paused` is a harmless no-op.
function onVisibility() {
  if (!bgEl) { return; }
  if (document.hidden) {
    bgEl.classList.add('paused');
  } else {
    bgEl.classList.remove('paused');
  }
}

// Swap the background treatment to match a condition. Called from the render
// path on every fetch; a no-op when the resolved category hasn't changed, so a
// unit toggle or a repeat search doesn't restart the animations. Safe to call
// before initWeatherBg() has run — the category is remembered and applied then.
export function setWeatherBg(conditionText) {
  const category = categoryFor(conditionText);
  if (category === currentCategory) { return; }
  if (currentCategory) { bgEl && bgEl.classList.remove('bg-' + currentCategory); }
  currentCategory = category;
  if (bgEl) { bgEl.classList.add('bg-' + category); }
}

// Mount the background layer once, as the first child of the given host (`#app`).
// Safe to call again — it only ever mounts a single element. Applies whatever
// category has been set so far, or a neutral default until the first fetch.
export function initWeatherBg(hostEl) {
  if (bgEl) { return; } // mount once
  const host = hostEl || document.getElementById('app');
  if (!host) { return; }

  bgEl = document.createElement('div');
  bgEl.className = 'weatherBg';
  bgEl.setAttribute('aria-hidden', 'true');
  bgEl.classList.add('bg-' + (currentCategory || DEFAULT_CATEGORY));
  if (!currentCategory) { currentCategory = DEFAULT_CATEGORY; }
  host.insertBefore(bgEl, host.firstChild);

  // Nothing drifts under reduced motion (the CSS media query disables the
  // animations), so there is nothing to pause — skip the listener in that case.
  if (!reduceMotion()) {
    document.addEventListener('visibilitychange', onVisibility);
  }
}
