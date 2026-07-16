// sky.js — a subtle animated gradient-drift background mounted behind the app.
//
// Pure vanilla, no dependencies. A single absolutely-positioned `.weatherBg`
// element is inserted as the FIRST child of `#app`; its two pseudo-elements each
// paint a soft radial-gradient glow that slowly drifts its position and opacity
// over ~20-30s. All motion lives in style.css. The layer reads through `#app`'s
// transparent background without competing with the readout/ribbon legibility,
// which sit above it via z-index (see `#weatherCard` / `#searchForm` in
// style.css). `.weatherBg` clips its own glow (`overflow: hidden`), so the drift
// stays inside the app column.
//
// The motion is guarded the same way the old per-condition sky was:
//   - prefers-reduced-motion: reduce -> the CSS animations are disabled by a
//       media query, so the glow renders as one static frame and never drifts.
//   - visibilitychange -> add a `.paused` class that pauses the CSS animations
//       while the tab is hidden, removed when it becomes visible again.

let bgEl = null;

function reduceMotion() {
  return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
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

// Mount the drifting-gradient layer once, as the first child of the given host
// (`#app`). Safe to call again — it only ever mounts a single element.
export function initWeatherBg(hostEl) {
  if (bgEl) { return; } // mount once
  const host = hostEl || document.getElementById('app');
  if (!host) { return; }

  bgEl = document.createElement('div');
  bgEl.className = 'weatherBg';
  bgEl.setAttribute('aria-hidden', 'true');
  host.insertBefore(bgEl, host.firstChild);

  // Nothing drifts under reduced motion (the CSS media query disables the
  // animations), so there is nothing to pause — skip the listener in that case.
  if (!reduceMotion()) {
    document.addEventListener('visibilitychange', onVisibility);
  }
}
