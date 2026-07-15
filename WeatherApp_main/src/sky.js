// sky.js — animated per-condition particle field mounted behind #outerContainer.
//
// Pure vanilla canvas, no dependencies. A single <canvas> is inserted as the
// first child of #outerContainer (position:absolute, z-index:-1) so it paints
// over the container's sky gradient but under the app content, and the frosted
// #mainMiddle card blurs it via backdrop-filter.
//
// The loop runs on every device that loads the page, so the guards are not
// optional:
//   - prefers-reduced-motion: reduce -> render ONE static frame, then stop.
//   - visibilitychange -> pause the rAF loop while the tab is hidden.
//   - resize -> resize the buffer and re-seed the field.
//   - devicePixelRatio clamped at 2 so retina phones don't allocate a 3x buffer.

let canvas, ctx, host;
let particles = [];
let category = 'neutral';
let rafId = null;
let running = false;
let width = 0, height = 0, dpr = 1;

// Per-category particle recipe. `rgb` is the colour body; each particle picks
// its own alpha so the field has depth. `shape` is 'line' (rain streaks),
// 'dot' (flakes/specks/hail) or 'blob' (soft fog/overcast masses).
const CONFIG = {
  rain:     { count: 140, shape: 'line', rgb: '200,220,235', vx: [-2.2, -1.2], vy: [8, 14],    size: [1, 1.6],   len: [9, 17],  alpha: [0.30, 0.55] },
  snow:     { count: 90,  shape: 'dot',  rgb: '255,255,255', vx: [-0.6, 0.6],  vy: [0.6, 1.7],  size: [1.5, 3.5],               alpha: [0.55, 0.95] },
  hail:     { count: 110, shape: 'dot',  rgb: '225,235,245', vx: [-1, 1],      vy: [9, 15],     size: [1.5, 3],                 alpha: [0.45, 0.85] },
  partly:   { count: 40,  shape: 'dot',  rgb: '255,255,255', vx: [0.2, 0.8],   vy: [-0.4, -0.1], size: [1, 3],                  alpha: [0.18, 0.45] },
  sunny:    { count: 45,  shape: 'dot',  rgb: '255,248,220', vx: [0.2, 0.9],   vy: [-0.5, -0.1], size: [1, 3],                  alpha: [0.15, 0.42] },
  fog:      { count: 22,  shape: 'blob', rgb: '230,232,235', vx: [0.2, 0.6],   vy: [-0.15, 0.15], size: [40, 90],               alpha: [0.05, 0.12] },
  overcast: { count: 22,  shape: 'blob', rgb: '210,214,218', vx: [0.15, 0.5],  vy: [-0.15, 0.15], size: [40, 90],               alpha: [0.05, 0.12] },
  neutral:  { count: 50,  shape: 'dot',  rgb: '255,255,255', vx: [-0.4, 0.4],  vy: [0.3, 1.0],  size: [1, 2.5],                 alpha: [0.22, 0.5] },
};

function rand(min, max) {
  return min + Math.random() * (max - min);
}

function reduceMotion() {
  return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
}

// Mount the canvas once, size it, seed the field and start (or draw one static
// frame under reduced-motion). Safe to call before the first weather category
// arrives — it seeds with whatever category has been set so far.
export function initSky(hostEl) {
  if (canvas) { return; } // mount once
  host = hostEl || document.getElementById('outerContainer');
  if (!host) { return; }

  canvas = document.createElement('canvas');
  canvas.id = 'skyCanvas';
  host.insertBefore(canvas, host.firstChild);
  ctx = canvas.getContext('2d');

  resize();
  seed();

  window.addEventListener('resize', onResize);
  document.addEventListener('visibilitychange', onVisibility);

  if (reduceMotion()) {
    drawFrame(); // one static frame, then stay put
  } else {
    start();
  }
}

// Called from adjustWeather() with the resolved category (rain, snow, hail,
// partly, sunny, fog, overcast, neutral). Records it and re-seeds; if the
// canvas isn't mounted yet, the category is remembered for initSky()'s seed().
export function setSkyCategory(cat) {
  category = cat || 'neutral';
  if (!canvas) { return; }
  seed();
  if (reduceMotion()) {
    drawFrame(); // reduced motion never runs the loop, so repaint the new field
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
  if (!width || !height) { return; }
  const cfg = CONFIG[category] || CONFIG.neutral;
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

function drawFrame() {
  if (width && height) { step(); }
}

function loop() {
  if (!running) { return; }
  step();
  rafId = window.requestAnimationFrame(loop);
}

function start() {
  if (running || reduceMotion()) { return; }
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
  seed();
  if (reduceMotion()) { drawFrame(); }
}

function onVisibility() {
  if (document.hidden) {
    stop();
  } else if (!reduceMotion()) {
    start();
  }
}
