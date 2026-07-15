// sky.js — per-condition sky renderer mounted behind #outerContainer.
//
// Pure vanilla, no dependencies. The renderer is chosen by KIND, not by one
// emitter with per-condition knobs, so a condition with no weather renders
// nothing rather than drifting motes on a clear day:
//
//   - kind 'particles' (rain, snow, hail): a <canvas> + rAF particle field.
//       Differs per condition in drop shape, speed, drift and density.
//   - kind 'layer' (fog, overcast, partly): CSS drift layers on a <div>, no
//       canvas and no rAF. A haze band for fog, a slow cloud mass for overcast,
//       a few slow clouds for partly. Motion lives entirely in style.css.
//   - kind 'none' (sunny, neutral fallback): no renderer at all. The rAF loop
//       is cancelled, the canvas cleared once, and the sky is the gradient
//       alone. Stillness is the point — motion only reads as weather when it's
//       absent without weather.
//
// Both surfaces are inserted as the first children of #outerContainer
// (position:absolute, z-index:-1) so they paint over the container's sky
// gradient but under the app content, and the frosted #mainMiddle card blurs
// them via backdrop-filter.
//
// The guards apply to EVERY kind, not just particles:
//   - prefers-reduced-motion: reduce -> particles draw ONE static frame and
//       never loop; layers freeze via a CSS media query. No rAF either way.
//   - visibilitychange -> pause the rAF loop AND the CSS layer animations while
//       the tab is hidden.
//   - resize -> resize the buffer and, for particles, re-seed the field.
//   - devicePixelRatio clamped at 2 so retina phones don't allocate a 3x buffer.

let canvas, ctx, host, layerEl;
let particles = [];
let category = 'neutral';
let kind = 'none';
let rafId = null;
let running = false;
let width = 0, height = 0, dpr = 1;

// Which renderer each resolved category maps to. adjustWeather() resolves the
// category from its i-flagged regexes and hands it here, so the icon, the
// .weather-* theme class and the sky renderer all derive from one resolution —
// there is no second classifier that could disagree with the first.
const KIND = {
  rain: 'particles', snow: 'particles', hail: 'particles',
  fog: 'layer', overcast: 'layer', partly: 'layer',
  sunny: 'none', neutral: 'none',
};

// Particle recipe for the three 'particles' conditions only. `rgb` is the
// colour body; each particle picks its own alpha so the field has depth.
// `shape` is 'line' (rain streaks) or 'dot' (flakes / hail pellets). Rain falls
// fast in drifting streaks, snow drifts slowly and laterally, hail drops as
// short fast pellets.
const CONFIG = {
  rain: { count: 140, shape: 'line', rgb: '200,220,235', vx: [-2.2, -1.2], vy: [8, 14],   size: [1, 1.6],   len: [9, 17], alpha: [0.30, 0.55] },
  snow: { count: 90,  shape: 'dot',  rgb: '255,255,255', vx: [-0.6, 0.6],  vy: [0.6, 1.7], size: [1.5, 3.5],              alpha: [0.55, 0.95] },
  hail: { count: 110, shape: 'dot',  rgb: '225,235,245', vx: [-1, 1],      vy: [9, 15],    size: [1.5, 3],                alpha: [0.45, 0.85] },
};

function rand(min, max) {
  return min + Math.random() * (max - min);
}

function reduceMotion() {
  return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
}

// Mount the canvas + layer once, size them, and apply whatever category has
// been set so far. Safe to call before the first weather category arrives.
export function initSky(hostEl) {
  if (canvas) { return; } // mount once
  host = hostEl || document.getElementById('outerContainer');
  if (!host) { return; }

  canvas = document.createElement('canvas');
  canvas.id = 'skyCanvas';
  host.insertBefore(canvas, host.firstChild);
  ctx = canvas.getContext('2d');

  // The CSS-driven drift surface for the 'layer' kind. Empty and inert until a
  // layer category applies a sky-* class; carries no canvas.
  layerEl = document.createElement('div');
  layerEl.id = 'skyLayer';
  host.insertBefore(layerEl, host.firstChild);

  resize();

  window.addEventListener('resize', onResize);
  document.addEventListener('visibilitychange', onVisibility);

  applyCategory(); // seed + start, or clear, depending on the current kind
}

// Called from adjustWeather() with the resolved category (rain, snow, hail,
// partly, sunny, fog, overcast, neutral). Records it and switches renderer; if
// the canvas isn't mounted yet, the category is remembered for initSky().
export function setSkyCategory(cat) {
  category = cat || 'neutral';
  kind = KIND[category] || 'none';
  if (!canvas) { return; }
  applyCategory();
}

// Switch to the renderer for the current kind. Mutually exclusive: only one of
// the canvas field / CSS layer is ever live, and 'none' runs neither.
function applyCategory() {
  if (!canvas) { return; }

  updateLayerClass();

  if (kind === 'particles') {
    seed();
    if (reduceMotion()) {
      stop();
      drawFrame(); // one static frame, then stay put
    } else {
      start();
    }
  } else {
    // 'layer' motion lives in CSS; 'none' has no motion at all. Either way the
    // canvas field must not run — cancel the loop and clear it once so a
    // none-kind sky is the gradient alone, not an idle loop over zero particles.
    stop();
    clearCanvas();
  }
}

// Reflect the current kind onto the layer element: exactly one sky-* class for
// the 'layer' kind, none otherwise.
function updateLayerClass() {
  if (!layerEl) { return; }
  layerEl.classList.remove('sky-fog', 'sky-overcast', 'sky-partly');
  if (kind === 'layer') {
    layerEl.classList.add('sky-' + category);
  }
}

function spawn(cfg, anywhere) {
  const size = rand(cfg.size[0], cfg.size[1]);
  return {
    x: rand(0, width),
    y: anywhere ? rand(0, height) : -size,
    vx: rand(cfg.vx[0], cfg.vx[1]),
    vy: rand(cfg.vy[0], cfg.vy[1]),
    size: size,
    len: cfg.len ? rand(cfg.len[0], cfg.len[1]) : 0,
    alpha: rand(cfg.alpha[0], cfg.alpha[1]),
    rgb: cfg.rgb,
    shape: cfg.shape,
  };
}

function seed() {
  particles = [];
  if (kind !== 'particles') { return; }
  if (!width || !height) { return; }
  const cfg = CONFIG[category];
  if (!cfg) { return; }
  for (let i = 0; i < cfg.count; i++) {
    particles.push(spawn(cfg, true));
  }
}

function wrap(p) {
  const margin = p.len ? p.len : p.size;
  if (p.x < -margin) { p.x = width + margin; }
  else if (p.x > width + margin) { p.x = -margin; }
  if (p.y < -margin) { p.y = height + margin; }
  else if (p.y > height + margin) { p.y = -margin; }
}

function paint(p) {
  const style = 'rgba(' + p.rgb + ',' + p.alpha.toFixed(3) + ')';
  if (p.shape === 'line') {
    ctx.strokeStyle = style;
    ctx.lineWidth = p.size;
    ctx.beginPath();
    ctx.moveTo(p.x, p.y);
    ctx.lineTo(p.x - p.vx * 0.6, p.y - p.len);
    ctx.stroke();
  } else {
    ctx.fillStyle = style;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function step() {
  if (!ctx) { return; }
  ctx.clearRect(0, 0, width, height);
  for (let i = 0; i < particles.length; i++) {
    const p = particles[i];
    p.x += p.vx;
    p.y += p.vy;
    wrap(p);
    paint(p);
  }
}

function clearCanvas() {
  if (ctx && width && height) { ctx.clearRect(0, 0, width, height); }
}

function drawFrame() {
  if (width && height) { step(); }
}

function loop() {
  if (!running) { return; }
  step();
  rafId = window.requestAnimationFrame(loop);
}

function start() {
  if (running || kind !== 'particles' || reduceMotion()) { return; }
  running = true;
  rafId = window.requestAnimationFrame(loop);
}

function stop() {
  running = false;
  if (rafId) { window.cancelAnimationFrame(rafId); rafId = null; }
}

function resize() {
  if (!canvas || !host) { return; }
  width = host.clientWidth;
  height = host.clientHeight;
  dpr = Math.min(2, window.devicePixelRatio || 1); // clamp so retina stays 2x max
  canvas.width = Math.floor(width * dpr);
  canvas.height = Math.floor(height * dpr);
  canvas.style.width = width + 'px';
  canvas.style.height = height + 'px';
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0); // draw in CSS pixels
}

function onResize() {
  resize();
  if (kind === 'particles') {
    seed();
    if (reduceMotion()) { drawFrame(); }
  }
  // 'layer' reflows via CSS; 'none' has nothing to redraw.
}

function onVisibility() {
  if (document.hidden) {
    stop();
    if (layerEl) { layerEl.classList.add('sky-paused'); } // freeze CSS layers too
  } else {
    if (layerEl) { layerEl.classList.remove('sky-paused'); }
    if (kind === 'particles' && !reduceMotion()) { start(); }
  }
}
