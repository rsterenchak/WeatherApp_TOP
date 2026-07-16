/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Roboto-Regular.ttf */ "./src/Roboto-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: 'Roboto';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  font-weight: 300 400;
}

/* Palette:
   ground  #12181F   rules  #26313B
   text    #EAEEF2 (primary) / #8CA0AE (muted)
   The temperature colours live in ribbon.js (the curve is coloured by the
   temperature scalar, not by CSS). */
:root {
  --ground: #12181F;
  --rule: #26313B;
  --text: #EAEEF2;
  --muted: #8CA0AE;
  --mono: 'SFMono-Regular', 'SF Mono', 'Menlo', 'Consolas', 'Liberation Mono', monospace;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: var(--ground);
  color: var(--text);
  font-family: 'Roboto', system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
}

/* dvh (not vh): on iOS Safari vh resolves to the tall viewport and parks the
   bottom of the layout under the URL bar. */
#app {
  position: relative; /* stacks the constrained column above the fixed .weatherBg */
  z-index: 1;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 28px;
  max-width: 720px;
  margin: 0 auto;
  padding: 32px 20px;
}

/* Condition-based background. sky.js mounts a single \`.weatherBg\` as the first
   child of #app and swaps a \`bg-<category>\` class onto it per fetch, keyed off
   the current condition text (categoryFor() in sky.js). It is \`fixed\` so it
   spans the whole browser window on desktop while #app stays a constrained
   centred column above it (z-index). Each category paints a gradient base on the
   element plus decorative layers (sun, moon + stars, drifting clouds, flakes,
   haze) on the two pseudo-elements. overflow: hidden clips those layers to the
   viewport so an oversized cloud can't spill a scrollbar. The gradients cross-
   fade (transition: background) when the category changes; the decorative
   motion lives in the per-category keyframes below. */
.weatherBg {
  position: fixed;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
  background: linear-gradient(180deg, #1b2836 0%, #141d29 55%, var(--ground) 100%);
  transition: background 600ms ease;
}

.weatherBg::before,
.weatherBg::after {
  content: '';
  position: absolute;
  pointer-events: none;
}

/* Depth planes mounted by sky.js as child divs (far, mid, near, ground). They
   give each category more than the two pseudo-elements can hold: a category
   stacks a subset of them — a blurred far plane, a mid plane, a sharp near plane
   with a glow, and a ground-lighting accent at the bottom — so the imagery reads
   as depth rather than a single flat wash. Any plane a category doesn't paint
   stays transparent. They sit between ::before (behind) and ::after (in front)
   in paint order; per-category rules layer them explicitly where it matters. */
.weatherBg > .bgLayer {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-repeat: no-repeat;
}

/* Ground accent shared shape: a soft band of light hugging the bottom edge.
   Each category tints it via --ground-glow. */
.weatherBg > .bgLayer--ground {
  top: auto;
  height: 34%;
  bottom: 0;
}

/* SUNNY — warm daytime sky with a soft sun glow that slowly breathes. */
.weatherBg.bg-sunny {
  background: linear-gradient(180deg, #2c4c72 0%, #1a2c40 55%, var(--ground) 100%);
}
.weatherBg.bg-sunny::before {
  top: -12%;
  right: -6%;
  width: 46vmax;
  height: 46vmax;
  border-radius: 50%;
  background: radial-gradient(circle at center, rgba(217, 164, 65, 0.45), rgba(217, 164, 65, 0) 68%);
  animation: bgSun 14s ease-in-out infinite alternate;
}
.weatherBg.bg-sunny::after {
  bottom: -18%;
  left: -12%;
  width: 40vmax;
  height: 40vmax;
  border-radius: 50%;
  background: radial-gradient(circle at center, rgba(111, 168, 160, 0.18), rgba(111, 168, 160, 0) 70%);
  animation: bgSun 18s ease-in-out infinite alternate-reverse;
}
/* far: a high, blurred warm haze band that slowly breathes behind the sun. */
.weatherBg.bg-sunny > .bgLayer--far {
  background: radial-gradient(120% 60% at 78% 4%, rgba(217, 164, 65, 0.22), rgba(217, 164, 65, 0) 60%);
  filter: blur(6px);
  animation: bgSun 22s ease-in-out infinite alternate;
}
/* mid: faint diagonal light shafts spilling from the sun. */
.weatherBg.bg-sunny > .bgLayer--mid {
  background: repeating-linear-gradient(64deg, rgba(217, 164, 65, 0.05) 0 2px, rgba(217, 164, 65, 0) 2px 26px);
  opacity: 0.7;
  animation: bgSun 16s ease-in-out infinite alternate-reverse;
}
/* ground: warm light pooling along the bottom of the scene. */
.weatherBg.bg-sunny > .bgLayer--ground {
  background: linear-gradient(0deg, rgba(217, 164, 65, 0.16), rgba(217, 164, 65, 0) 100%);
  animation: bgGround 12s ease-in-out infinite alternate;
}

/* CLEAR NIGHT — deep sky, a low moon glow, and a field of twinkling stars. */
.weatherBg.bg-clear-night {
  background: linear-gradient(180deg, #101a2c 0%, #0d1420 55%, var(--ground) 100%);
}
.weatherBg.bg-clear-night::before {
  inset: 0;
  background-image:
    radial-gradient(1.6px 1.6px at 18% 24%, rgba(234, 238, 242, 0.9), transparent 60%),
    radial-gradient(1.2px 1.2px at 72% 16%, rgba(234, 238, 242, 0.8), transparent 60%),
    radial-gradient(1.4px 1.4px at 42% 62%, rgba(234, 238, 242, 0.75), transparent 60%),
    radial-gradient(1px 1px at 86% 46%, rgba(234, 238, 242, 0.7), transparent 60%),
    radial-gradient(1.3px 1.3px at 30% 82%, rgba(234, 238, 242, 0.7), transparent 60%),
    radial-gradient(1px 1px at 60% 74%, rgba(234, 238, 242, 0.6), transparent 60%),
    radial-gradient(1.5px 1.5px at 8% 54%, rgba(234, 238, 242, 0.8), transparent 60%),
    radial-gradient(1px 1px at 92% 78%, rgba(234, 238, 242, 0.65), transparent 60%);
  animation: bgTwinkle 5s ease-in-out infinite alternate;
}
.weatherBg.bg-clear-night::after {
  top: 12%;
  right: 14%;
  width: 92px;
  height: 92px;
  border-radius: 50%;
  background: radial-gradient(circle at 38% 38%, rgba(234, 238, 242, 0.85), rgba(140, 160, 174, 0.35) 62%, rgba(140, 160, 174, 0) 72%);
}
/* far: a dense field of tiny, dim, slightly blurred stars — the deep sky. */
.weatherBg.bg-clear-night > .bgLayer--far {
  background-image:
    radial-gradient(0.8px 0.8px at 12% 30%, rgba(234, 238, 242, 0.5), transparent 60%),
    radial-gradient(0.7px 0.7px at 34% 12%, rgba(234, 238, 242, 0.45), transparent 60%),
    radial-gradient(0.8px 0.8px at 52% 40%, rgba(234, 238, 242, 0.5), transparent 60%),
    radial-gradient(0.6px 0.6px at 68% 26%, rgba(234, 238, 242, 0.4), transparent 60%),
    radial-gradient(0.8px 0.8px at 80% 52%, rgba(234, 238, 242, 0.45), transparent 60%),
    radial-gradient(0.7px 0.7px at 24% 66%, rgba(234, 238, 242, 0.4), transparent 60%),
    radial-gradient(0.8px 0.8px at 46% 84%, rgba(234, 238, 242, 0.45), transparent 60%),
    radial-gradient(0.6px 0.6px at 74% 78%, rgba(234, 238, 242, 0.4), transparent 60%);
  filter: blur(0.5px);
  opacity: 0.7;
  animation: bgTwinkle 7s ease-in-out infinite alternate-reverse;
}
/* near: a few large foreground stars, each with a soft drop-shadow glow. */
.weatherBg.bg-clear-night > .bgLayer--near {
  background-image:
    radial-gradient(2.4px 2.4px at 22% 20%, rgba(234, 238, 242, 1), transparent 62%),
    radial-gradient(2px 2px at 64% 58%, rgba(234, 238, 242, 0.95), transparent 62%),
    radial-gradient(2.6px 2.6px at 84% 32%, rgba(234, 238, 242, 1), transparent 62%);
  filter: drop-shadow(0 0 4px rgba(234, 238, 242, 0.7));
  animation: bgTwinkle 3.4s ease-in-out infinite alternate;
}
/* ground: cool moonlight pooling faintly along the horizon. */
.weatherBg.bg-clear-night > .bgLayer--ground {
  background: linear-gradient(0deg, rgba(140, 160, 174, 0.14), rgba(140, 160, 174, 0) 100%);
  animation: bgGround 14s ease-in-out infinite alternate;
}

/* CLOUDY (also overcast, partly, and the neutral fallback) — cool grey-blue with
   two soft cloud masses drifting laterally. */
.weatherBg.bg-cloudy {
  background: linear-gradient(180deg, #23303f 0%, #172230 55%, var(--ground) 100%);
}
.weatherBg.bg-cloudy::before {
  top: 14%;
  left: -20%;
  width: 55vmax;
  height: 24vmax;
  border-radius: 50%;
  background: radial-gradient(circle at center, rgba(140, 160, 174, 0.2), rgba(140, 160, 174, 0) 70%);
  animation: bgCloud 40s ease-in-out infinite alternate;
}
.weatherBg.bg-cloudy::after {
  bottom: 10%;
  right: -24%;
  width: 60vmax;
  height: 26vmax;
  border-radius: 50%;
  background: radial-gradient(circle at center, rgba(111, 130, 148, 0.16), rgba(111, 130, 148, 0) 70%);
  animation: bgCloud 52s ease-in-out infinite alternate-reverse;
}
/* far: a wide, heavily blurred cloud band high in the scene, barely moving. */
.weatherBg.bg-cloudy > .bgLayer--far {
  background: radial-gradient(80% 40% at 30% 22%, rgba(140, 160, 174, 0.16), rgba(140, 160, 174, 0) 70%);
  filter: blur(10px);
  animation: bgCloud 70s ease-in-out infinite alternate-reverse;
}
/* near: a smaller, sharper cloud drifting faster across the foreground. */
.weatherBg.bg-cloudy > .bgLayer--near {
  background: radial-gradient(34% 26% at 62% 40%, rgba(176, 192, 204, 0.2), rgba(176, 192, 204, 0) 68%);
  filter: blur(2px);
  animation: bgCloud 30s ease-in-out infinite alternate;
}
/* ground: dim horizon light under the overcast. */
.weatherBg.bg-cloudy > .bgLayer--ground {
  background: linear-gradient(0deg, rgba(140, 160, 174, 0.12), rgba(140, 160, 174, 0) 100%);
  animation: bgGround 16s ease-in-out infinite alternate;
}

/* RAIN (also drizzle, showers, thunder) — darker sky, a heavy drifting cloud,
   and a faint diagonal rain sheen sliding down. */
.weatherBg.bg-rain {
  background: linear-gradient(180deg, #1c2734 0%, #121b26 55%, var(--ground) 100%);
}
.weatherBg.bg-rain::before {
  top: -8%;
  left: -18%;
  width: 62vmax;
  height: 30vmax;
  border-radius: 50%;
  background: radial-gradient(circle at center, rgba(120, 140, 158, 0.22), rgba(120, 140, 158, 0) 70%);
  animation: bgCloud 46s ease-in-out infinite alternate;
}
.weatherBg.bg-rain::after {
  inset: 0;
  background-image: repeating-linear-gradient(74deg, rgba(160, 190, 214, 0.07) 0 1px, rgba(160, 190, 214, 0) 1px 9px);
  animation: bgRain 0.9s linear infinite;
}
/* far: a broad, blurred storm cloud drifting slowly high overhead. */
.weatherBg.bg-rain > .bgLayer--far {
  background: radial-gradient(90% 44% at 66% 12%, rgba(120, 140, 158, 0.2), rgba(120, 140, 158, 0) 70%);
  filter: blur(9px);
  animation: bgCloud 60s ease-in-out infinite alternate-reverse;
}
/* near: coarser, faster rain streaks at a steeper angle for foreground depth. */
.weatherBg.bg-rain > .bgLayer--near {
  background-image: repeating-linear-gradient(78deg, rgba(180, 206, 226, 0.11) 0 2px, rgba(180, 206, 226, 0) 2px 15px);
  animation: bgRainNear 0.55s linear infinite;
}
/* ground: a wet sheen catching the light at the bottom of the scene. */
.weatherBg.bg-rain > .bgLayer--ground {
  background: linear-gradient(0deg, rgba(120, 140, 158, 0.18), rgba(120, 140, 158, 0) 100%);
  animation: bgGround 9s ease-in-out infinite alternate;
}

/* SNOW — cool light sky with slowly drifting flakes. */
.weatherBg.bg-snow {
  background: linear-gradient(180deg, #2a3949 0%, #1a2634 55%, var(--ground) 100%);
}
.weatherBg.bg-snow::before,
.weatherBg.bg-snow::after {
  inset: 0;
  background-image:
    radial-gradient(2px 2px at 20% 10%, rgba(255, 255, 255, 0.8), transparent 60%),
    radial-gradient(2.4px 2.4px at 66% 22%, rgba(255, 255, 255, 0.7), transparent 60%),
    radial-gradient(1.8px 1.8px at 40% 40%, rgba(255, 255, 255, 0.75), transparent 60%),
    radial-gradient(2px 2px at 84% 54%, rgba(255, 255, 255, 0.7), transparent 60%),
    radial-gradient(2.2px 2.2px at 12% 70%, rgba(255, 255, 255, 0.7), transparent 60%),
    radial-gradient(1.8px 1.8px at 54% 86%, rgba(255, 255, 255, 0.65), transparent 60%);
  background-size: 100% 50%;
}
.weatherBg.bg-snow::before {
  animation: bgSnow 14s linear infinite;
}
.weatherBg.bg-snow::after {
  opacity: 0.6;
  animation: bgSnow 22s linear infinite;
}
/* far: tiny, faint, blurred flakes falling slowly in the deep background. */
.weatherBg.bg-snow > .bgLayer--far {
  background-image:
    radial-gradient(1px 1px at 16% 12%, rgba(255, 255, 255, 0.55), transparent 60%),
    radial-gradient(1.2px 1.2px at 48% 26%, rgba(255, 255, 255, 0.5), transparent 60%),
    radial-gradient(1px 1px at 72% 18%, rgba(255, 255, 255, 0.5), transparent 60%),
    radial-gradient(1.1px 1.1px at 30% 44%, rgba(255, 255, 255, 0.5), transparent 60%),
    radial-gradient(1px 1px at 88% 40%, rgba(255, 255, 255, 0.45), transparent 60%),
    radial-gradient(1.2px 1.2px at 60% 62%, rgba(255, 255, 255, 0.5), transparent 60%),
    radial-gradient(1px 1px at 22% 78%, rgba(255, 255, 255, 0.45), transparent 60%),
    radial-gradient(1.1px 1.1px at 78% 84%, rgba(255, 255, 255, 0.45), transparent 60%);
  background-size: 100% 50%;
  filter: blur(1px);
  opacity: 0.7;
  animation: bgSnow 30s linear infinite;
}
/* near: large foreground flakes with a soft glow, falling fast. */
.weatherBg.bg-snow > .bgLayer--near {
  background-image:
    radial-gradient(3.4px 3.4px at 26% 16%, rgba(255, 255, 255, 0.95), transparent 62%),
    radial-gradient(3px 3px at 62% 34%, rgba(255, 255, 255, 0.9), transparent 62%),
    radial-gradient(3.6px 3.6px at 84% 60%, rgba(255, 255, 255, 0.95), transparent 62%),
    radial-gradient(3.2px 3.2px at 14% 68%, rgba(255, 255, 255, 0.9), transparent 62%);
  background-size: 100% 50%;
  filter: drop-shadow(0 0 3px rgba(255, 255, 255, 0.7));
  animation: bgSnow 8s linear infinite;
}
/* ground: a lit band of settled snow glowing at the bottom of the scene. */
.weatherBg.bg-snow > .bgLayer--ground {
  height: 30%;
  background: linear-gradient(0deg, rgba(234, 240, 246, 0.28), rgba(234, 240, 246, 0.05) 60%, rgba(234, 240, 246, 0) 100%);
  animation: bgGround 11s ease-in-out infinite alternate;
}

/* FOG (also mist, haze) — muted sky with slow horizontal haze bands. */
.weatherBg.bg-fog {
  background: linear-gradient(180deg, #232c35 0%, #182029 55%, var(--ground) 100%);
}
.weatherBg.bg-fog::before {
  inset: 0;
  background-image:
    linear-gradient(0deg, rgba(140, 160, 174, 0) 0%, rgba(140, 160, 174, 0.12) 30%, rgba(140, 160, 174, 0) 46%),
    linear-gradient(0deg, rgba(140, 160, 174, 0) 54%, rgba(140, 160, 174, 0.1) 72%, rgba(140, 160, 174, 0) 88%);
  animation: bgFog 24s ease-in-out infinite alternate;
}
/* far: a thin, high haze band drifting the other way, slower. */
.weatherBg.bg-fog > .bgLayer--far {
  background-image: linear-gradient(0deg, rgba(140, 160, 174, 0) 8%, rgba(140, 160, 174, 0.08) 22%, rgba(140, 160, 174, 0) 38%);
  filter: blur(3px);
  opacity: 0.8;
  animation: bgFog 34s ease-in-out infinite alternate-reverse;
}
/* near: a soft, heavily blurred haze mass low in the scene. */
.weatherBg.bg-fog > .bgLayer--near {
  background-image: linear-gradient(0deg, rgba(176, 192, 204, 0.14) 0%, rgba(176, 192, 204, 0.06) 40%, rgba(176, 192, 204, 0) 68%);
  filter: blur(8px);
  animation: bgFog 18s ease-in-out infinite alternate;
}
/* ground: a dense fog pool settling along the bottom. */
.weatherBg.bg-fog > .bgLayer--ground {
  height: 42%;
  background: linear-gradient(0deg, rgba(176, 192, 204, 0.22), rgba(176, 192, 204, 0) 100%);
  animation: bgGround 15s ease-in-out infinite alternate;
}

@keyframes bgSun {
  0%   { transform: translate(0, 0) scale(1);        opacity: 0.7; }
  100% { transform: translate(-4%, 3%) scale(1.12);  opacity: 1; }
}

@keyframes bgTwinkle {
  0%   { opacity: 0.4; }
  100% { opacity: 1; }
}

@keyframes bgCloud {
  0%   { transform: translateX(0); }
  100% { transform: translateX(10%); }
}

@keyframes bgRain {
  0%   { background-position: 0 0; }
  100% { background-position: -9px 32px; }
}

@keyframes bgSnow {
  0%   { transform: translateY(-50%); }
  100% { transform: translateY(0); }
}

@keyframes bgFog {
  0%   { transform: translateY(-4%); opacity: 0.7; }
  100% { transform: translateY(4%);  opacity: 1; }
}

/* A steeper, faster fall for the near rain plane so it reads ahead of ::after. */
@keyframes bgRainNear {
  0%   { background-position: 0 0; }
  100% { background-position: -15px 44px; }
}

/* A gentle breathe for the ground-lighting accent across every category. */
@keyframes bgGround {
  0%   { opacity: 0.65; }
  100% { opacity: 1; }
}

/* Frozen while the tab is hidden (sky.js toggles .paused on visibilitychange). */
.weatherBg.paused::before,
.weatherBg.paused::after,
.weatherBg.paused > .bgLayer {
  animation-play-state: paused;
}

/* Halt every treatment's motion under a reduced-motion preference — one static
   frame per category. */
@media (prefers-reduced-motion: reduce) {
  .weatherBg::before,
  .weatherBg::after,
  .weatherBg > .bgLayer {
    animation: none;
  }
}

/* The ribbon and its readout share one flex column so a mobile location rotation
   slides them as a single unit. It carries the same 28px gap #app used to put
   between the ribbon and the readout, so wrapping them is layout-transparent. */
#weatherCard {
  position: relative; /* stacks above the .weatherBg drift layer */
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 28px;
}

/* Ribbon: the SVG scales to the column width via the viewBox, so all 72 hours
   are on screen at any width down to 380px without scroll or pan. */
#ribbonWrap {
  width: 100%;
}

#ribbonSvg {
  display: block;
  width: 100%;
  height: auto;
  overflow: visible;
}

.ribbon-curve {
  stroke-width: 2.5;
  stroke-linecap: round;
  stroke-linejoin: round;
}

/* Day boundary hairlines at hours 24 and 48. */
.ribbon-hairline {
  stroke: var(--rule);
  stroke-width: 1;
}

.ribbon-tick {
  fill: var(--muted);
  font-family: var(--mono);
  font-size: 12px;
  letter-spacing: 1px;
}

.ribbon-nowline {
  stroke: var(--muted);
  stroke-width: 1;
  stroke-dasharray: 2 3;
  opacity: 0.7;
}

.ribbon-dot {
  stroke: var(--ground);
  stroke-width: 2;
}

/* Readout beneath the curve. */
#readout {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  text-align: center;
}

/* Location name paired with the C/F unit switch on one centered row. */
#locationRow {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

#locationName {
  font-family: var(--mono);
  font-size: 13px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--muted);
}

/* Segmented C/F toggle: a compact pill, the active option filled with the rule
   colour. Display-only — flips the temperature readouts between °C and °F. */
#unitSwitch {
  display: flex;
  border: 1px solid var(--rule);
  border-radius: 999px;
  overflow: hidden;
}

.unitOpt {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 1px;
  padding: 3px 9px;
  border: none;
  background: transparent;
  color: var(--muted);
  cursor: pointer;
}

.unitOpt.active {
  background: var(--rule);
  color: var(--text);
}

/* Saved-location navigation: prev/next chevrons flanking the dot row. The whole
   row is hidden at a count of one (a single location needs no affordance); the
   arrows are desktop-only and drop out at ≤480px where swipe takes over. */
.navRow {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 4px 0 2px;
}

.navRow.hidden {
  display: none;
}

.arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  background: none;
  color: var(--muted);
  cursor: pointer;
}

.arrow:hover {
  color: #EAEEF2;
}

.arrow svg {
  display: block;
  width: 20px;
  height: 14px;
}

/* Saved-location dots: one per saved location, the active one filled. */
#dotRow {
  position: relative; /* offset parent for the desktop remove popover */
  display: flex;
  gap: 8px;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #2E3B45;
  cursor: pointer;
  touch-action: manipulation;
}

.dot.active {
  background: #EAEEF2;
}

/* Desktop remove-confirmation popover, anchored above the long-pressed dot.
   Touch keeps the native confirm; this is the mouse/pen path. */
.removePopover {
  position: absolute;
  bottom: calc(100% + 10px);
  transform: translateX(-50%);
  z-index: 20;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  background: var(--ground);
  border: 1px solid var(--rule);
  border-radius: 8px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.45);
  white-space: nowrap;
}

/* Downward pointer arrow, bordered: outer triangle in the rule colour with an
   inner ground-filled triangle laid a pixel higher on top of it. */
.removePopover::before,
.removePopover::after {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-style: solid;
}

.removePopover::before {
  top: 100%;
  border-width: 7px 7px 0 7px;
  border-color: var(--rule) transparent transparent transparent;
}

.removePopover::after {
  top: calc(100% - 1px);
  border-width: 6px 6px 0 6px;
  border-color: var(--ground) transparent transparent transparent;
}

.removePopover-name {
  color: var(--text);
  font-size: 13px;
}

.removePopover-actions {
  display: flex;
  gap: 8px;
}

.removePopover-cancel,
.removePopover-delete {
  font-family: inherit;
  font-size: 12px;
  padding: 5px 12px;
  border: 1px solid var(--rule);
  border-radius: 8px;
  cursor: pointer;
}

.removePopover-cancel {
  background: none;
  color: var(--muted);
}

.removePopover-cancel:hover {
  color: var(--text);
}

.removePopover-delete {
  background: var(--text);
  color: var(--ground);
  border-color: var(--text);
}

.removePopover-delete:hover {
  filter: brightness(0.92);
}

/* Roboto Light 40px for the reading. */
#currentTemp {
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 40px;
  line-height: 1.1;
}

#currentCondition {
  font-size: 15px;
  color: var(--text);
}

/* Four-up stat row: text labels, no icons. */
#statRow {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  width: 100%;
  margin-top: 14px;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 12px 6px;
  border: 1px solid var(--rule);
  border-radius: 8px;
}

.stat-label {
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: 1px;
  color: var(--muted);
}

.stat-value {
  font-size: 17px;
  color: var(--text);
}

/* Search form. */
#searchForm {
  position: relative; /* stacks above the .weatherBg drift layer */
  z-index: 1;
  display: flex;
  gap: 10px;
  width: 100%;
}

/* Holds the input and its autocomplete dropdown; position: relative anchors
   #suggestions beneath the input. flex: 1 so the pair fills the row the way the
   bare input used to. */
#searchInputWrap {
  position: relative;
  flex: 1;
  min-width: 0;
}

#searchInput {
  width: 100%;
  padding: 12px 14px;
  font-family: var(--mono);
  font-size: 16px; /* 16px so iOS Safari doesn't auto-zoom the input on focus */
  color: var(--text);
  background: transparent;
  border: 1px solid var(--rule);
  border-radius: 8px;
}

#searchInput::placeholder {
  color: var(--muted);
}

#searchInput:focus {
  outline: none;
  border-color: var(--muted);
}

/* While the dropdown is open the input's bottom corners square off and its
   bottom edge drops out, so it reads as one attached surface with #suggestions. */
#searchForm.suggesting #searchInput {
  border-radius: 8px 8px 0 0;
  border-bottom-color: transparent;
}

/* Failed lookup: reddened border, current ribbon left in place. */
#searchForm.invalid #searchInput {
  border-color: #C2452D;
}

/* Autocomplete dropdown: hangs off the bottom of the input, matching its width
   and continuing its focused border into a bottom-rounded panel. */
#suggestions {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 10;
  max-height: 240px;
  overflow-y: auto;
  background: var(--ground);
  border: 1px solid var(--muted);
  border-top: none;
  border-radius: 0 0 8px 8px;
}

#suggestions.hidden {
  display: none;
}

.suggestion-item {
  display: flex;
  align-items: baseline;
  gap: 8px;
  padding: 10px 14px;
  font-family: var(--mono);
  cursor: pointer;
}

.suggestion-item:hover,
.suggestion-item.selected {
  background: var(--rule);
}

.suggestion-city {
  font-size: 14px;
  color: var(--text);
}

.suggestion-country {
  font-size: 12px;
  color: var(--muted);
}

#searchButton {
  padding: 12px 20px;
  font-family: var(--mono);
  font-size: 14px;
  letter-spacing: 1px;
  color: var(--ground);
  background: var(--text);
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

#searchButton:hover {
  filter: brightness(0.92);
}

@media (max-width: 480px) {
  #app {
    gap: 22px;
    padding: 24px 16px;
  }

  #weatherCard {
    gap: 22px;
  }

  /* Swipe-direction-aware slide on a committed location rotation. favourites.js
     adds .slide-next (swipe left -> next) or .slide-prev (swipe right -> prev)
     to #weatherCard, then rotates. The card fades to nothing at the keyframe's
     midpoint, which masks the forecast swap: renderRibbon() rebuilds into this
     same card while it's invisible, so the new curve slides in rather than
     snapping. Desktop rotates via the arrows and never gets the class. */
  #weatherCard.slide-next {
    animation: cardSlideNext 280ms ease-out;
  }

  #weatherCard.slide-prev {
    animation: cardSlidePrev 280ms ease-out;
  }

  @keyframes cardSlideNext {
    0% { transform: translateX(0); opacity: 1; }
    40% { transform: translateX(-42px); opacity: 0; }
    60% { transform: translateX(42px); opacity: 0; }
    100% { transform: translateX(0); opacity: 1; }
  }

  @keyframes cardSlidePrev {
    0% { transform: translateX(0); opacity: 1; }
    40% { transform: translateX(42px); opacity: 0; }
    60% { transform: translateX(-42px); opacity: 0; }
    100% { transform: translateX(0); opacity: 1; }
  }

  /* Mobile navigates by swipe; drop the arrows but keep the dots. */
  .arrow {
    display: none;
  }

  #statRow {
    gap: 8px;
  }

  .stat {
    padding: 10px 4px;
  }

  .stat-value {
    font-size: 15px;
  }
}

/* Respect a reduced-motion preference: rotate instantly, no slide. favourites.js
   still adds the class, but with the animation suppressed animationend never
   fires, so its setTimeout fallback is what strips the class back off. */
@media (prefers-reduced-motion: reduce) {
  #weatherCard.slide-next,
  #weatherCard.slide-prev {
    animation: none;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: 'Roboto';\n  src: url('./Roboto-Regular.ttf');\n  font-weight: 300 400;\n}\n\n/* Palette:\n   ground  #12181F   rules  #26313B\n   text    #EAEEF2 (primary) / #8CA0AE (muted)\n   The temperature colours live in ribbon.js (the curve is coloured by the\n   temperature scalar, not by CSS). */\n:root {\n  --ground: #12181F;\n  --rule: #26313B;\n  --text: #EAEEF2;\n  --muted: #8CA0AE;\n  --mono: 'SFMono-Regular', 'SF Mono', 'Menlo', 'Consolas', 'Liberation Mono', monospace;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  background: var(--ground);\n  color: var(--text);\n  font-family: 'Roboto', system-ui, sans-serif;\n  -webkit-font-smoothing: antialiased;\n}\n\n/* dvh (not vh): on iOS Safari vh resolves to the tall viewport and parks the\n   bottom of the layout under the URL bar. */\n#app {\n  position: relative; /* stacks the constrained column above the fixed .weatherBg */\n  z-index: 1;\n  min-height: 100dvh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 28px;\n  max-width: 720px;\n  margin: 0 auto;\n  padding: 32px 20px;\n}\n\n/* Condition-based background. sky.js mounts a single `.weatherBg` as the first\n   child of #app and swaps a `bg-<category>` class onto it per fetch, keyed off\n   the current condition text (categoryFor() in sky.js). It is `fixed` so it\n   spans the whole browser window on desktop while #app stays a constrained\n   centred column above it (z-index). Each category paints a gradient base on the\n   element plus decorative layers (sun, moon + stars, drifting clouds, flakes,\n   haze) on the two pseudo-elements. overflow: hidden clips those layers to the\n   viewport so an oversized cloud can't spill a scrollbar. The gradients cross-\n   fade (transition: background) when the category changes; the decorative\n   motion lives in the per-category keyframes below. */\n.weatherBg {\n  position: fixed;\n  inset: 0;\n  z-index: 0;\n  overflow: hidden;\n  pointer-events: none;\n  background: linear-gradient(180deg, #1b2836 0%, #141d29 55%, var(--ground) 100%);\n  transition: background 600ms ease;\n}\n\n.weatherBg::before,\n.weatherBg::after {\n  content: '';\n  position: absolute;\n  pointer-events: none;\n}\n\n/* Depth planes mounted by sky.js as child divs (far, mid, near, ground). They\n   give each category more than the two pseudo-elements can hold: a category\n   stacks a subset of them — a blurred far plane, a mid plane, a sharp near plane\n   with a glow, and a ground-lighting accent at the bottom — so the imagery reads\n   as depth rather than a single flat wash. Any plane a category doesn't paint\n   stays transparent. They sit between ::before (behind) and ::after (in front)\n   in paint order; per-category rules layer them explicitly where it matters. */\n.weatherBg > .bgLayer {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  background-repeat: no-repeat;\n}\n\n/* Ground accent shared shape: a soft band of light hugging the bottom edge.\n   Each category tints it via --ground-glow. */\n.weatherBg > .bgLayer--ground {\n  top: auto;\n  height: 34%;\n  bottom: 0;\n}\n\n/* SUNNY — warm daytime sky with a soft sun glow that slowly breathes. */\n.weatherBg.bg-sunny {\n  background: linear-gradient(180deg, #2c4c72 0%, #1a2c40 55%, var(--ground) 100%);\n}\n.weatherBg.bg-sunny::before {\n  top: -12%;\n  right: -6%;\n  width: 46vmax;\n  height: 46vmax;\n  border-radius: 50%;\n  background: radial-gradient(circle at center, rgba(217, 164, 65, 0.45), rgba(217, 164, 65, 0) 68%);\n  animation: bgSun 14s ease-in-out infinite alternate;\n}\n.weatherBg.bg-sunny::after {\n  bottom: -18%;\n  left: -12%;\n  width: 40vmax;\n  height: 40vmax;\n  border-radius: 50%;\n  background: radial-gradient(circle at center, rgba(111, 168, 160, 0.18), rgba(111, 168, 160, 0) 70%);\n  animation: bgSun 18s ease-in-out infinite alternate-reverse;\n}\n/* far: a high, blurred warm haze band that slowly breathes behind the sun. */\n.weatherBg.bg-sunny > .bgLayer--far {\n  background: radial-gradient(120% 60% at 78% 4%, rgba(217, 164, 65, 0.22), rgba(217, 164, 65, 0) 60%);\n  filter: blur(6px);\n  animation: bgSun 22s ease-in-out infinite alternate;\n}\n/* mid: faint diagonal light shafts spilling from the sun. */\n.weatherBg.bg-sunny > .bgLayer--mid {\n  background: repeating-linear-gradient(64deg, rgba(217, 164, 65, 0.05) 0 2px, rgba(217, 164, 65, 0) 2px 26px);\n  opacity: 0.7;\n  animation: bgSun 16s ease-in-out infinite alternate-reverse;\n}\n/* ground: warm light pooling along the bottom of the scene. */\n.weatherBg.bg-sunny > .bgLayer--ground {\n  background: linear-gradient(0deg, rgba(217, 164, 65, 0.16), rgba(217, 164, 65, 0) 100%);\n  animation: bgGround 12s ease-in-out infinite alternate;\n}\n\n/* CLEAR NIGHT — deep sky, a low moon glow, and a field of twinkling stars. */\n.weatherBg.bg-clear-night {\n  background: linear-gradient(180deg, #101a2c 0%, #0d1420 55%, var(--ground) 100%);\n}\n.weatherBg.bg-clear-night::before {\n  inset: 0;\n  background-image:\n    radial-gradient(1.6px 1.6px at 18% 24%, rgba(234, 238, 242, 0.9), transparent 60%),\n    radial-gradient(1.2px 1.2px at 72% 16%, rgba(234, 238, 242, 0.8), transparent 60%),\n    radial-gradient(1.4px 1.4px at 42% 62%, rgba(234, 238, 242, 0.75), transparent 60%),\n    radial-gradient(1px 1px at 86% 46%, rgba(234, 238, 242, 0.7), transparent 60%),\n    radial-gradient(1.3px 1.3px at 30% 82%, rgba(234, 238, 242, 0.7), transparent 60%),\n    radial-gradient(1px 1px at 60% 74%, rgba(234, 238, 242, 0.6), transparent 60%),\n    radial-gradient(1.5px 1.5px at 8% 54%, rgba(234, 238, 242, 0.8), transparent 60%),\n    radial-gradient(1px 1px at 92% 78%, rgba(234, 238, 242, 0.65), transparent 60%);\n  animation: bgTwinkle 5s ease-in-out infinite alternate;\n}\n.weatherBg.bg-clear-night::after {\n  top: 12%;\n  right: 14%;\n  width: 92px;\n  height: 92px;\n  border-radius: 50%;\n  background: radial-gradient(circle at 38% 38%, rgba(234, 238, 242, 0.85), rgba(140, 160, 174, 0.35) 62%, rgba(140, 160, 174, 0) 72%);\n}\n/* far: a dense field of tiny, dim, slightly blurred stars — the deep sky. */\n.weatherBg.bg-clear-night > .bgLayer--far {\n  background-image:\n    radial-gradient(0.8px 0.8px at 12% 30%, rgba(234, 238, 242, 0.5), transparent 60%),\n    radial-gradient(0.7px 0.7px at 34% 12%, rgba(234, 238, 242, 0.45), transparent 60%),\n    radial-gradient(0.8px 0.8px at 52% 40%, rgba(234, 238, 242, 0.5), transparent 60%),\n    radial-gradient(0.6px 0.6px at 68% 26%, rgba(234, 238, 242, 0.4), transparent 60%),\n    radial-gradient(0.8px 0.8px at 80% 52%, rgba(234, 238, 242, 0.45), transparent 60%),\n    radial-gradient(0.7px 0.7px at 24% 66%, rgba(234, 238, 242, 0.4), transparent 60%),\n    radial-gradient(0.8px 0.8px at 46% 84%, rgba(234, 238, 242, 0.45), transparent 60%),\n    radial-gradient(0.6px 0.6px at 74% 78%, rgba(234, 238, 242, 0.4), transparent 60%);\n  filter: blur(0.5px);\n  opacity: 0.7;\n  animation: bgTwinkle 7s ease-in-out infinite alternate-reverse;\n}\n/* near: a few large foreground stars, each with a soft drop-shadow glow. */\n.weatherBg.bg-clear-night > .bgLayer--near {\n  background-image:\n    radial-gradient(2.4px 2.4px at 22% 20%, rgba(234, 238, 242, 1), transparent 62%),\n    radial-gradient(2px 2px at 64% 58%, rgba(234, 238, 242, 0.95), transparent 62%),\n    radial-gradient(2.6px 2.6px at 84% 32%, rgba(234, 238, 242, 1), transparent 62%);\n  filter: drop-shadow(0 0 4px rgba(234, 238, 242, 0.7));\n  animation: bgTwinkle 3.4s ease-in-out infinite alternate;\n}\n/* ground: cool moonlight pooling faintly along the horizon. */\n.weatherBg.bg-clear-night > .bgLayer--ground {\n  background: linear-gradient(0deg, rgba(140, 160, 174, 0.14), rgba(140, 160, 174, 0) 100%);\n  animation: bgGround 14s ease-in-out infinite alternate;\n}\n\n/* CLOUDY (also overcast, partly, and the neutral fallback) — cool grey-blue with\n   two soft cloud masses drifting laterally. */\n.weatherBg.bg-cloudy {\n  background: linear-gradient(180deg, #23303f 0%, #172230 55%, var(--ground) 100%);\n}\n.weatherBg.bg-cloudy::before {\n  top: 14%;\n  left: -20%;\n  width: 55vmax;\n  height: 24vmax;\n  border-radius: 50%;\n  background: radial-gradient(circle at center, rgba(140, 160, 174, 0.2), rgba(140, 160, 174, 0) 70%);\n  animation: bgCloud 40s ease-in-out infinite alternate;\n}\n.weatherBg.bg-cloudy::after {\n  bottom: 10%;\n  right: -24%;\n  width: 60vmax;\n  height: 26vmax;\n  border-radius: 50%;\n  background: radial-gradient(circle at center, rgba(111, 130, 148, 0.16), rgba(111, 130, 148, 0) 70%);\n  animation: bgCloud 52s ease-in-out infinite alternate-reverse;\n}\n/* far: a wide, heavily blurred cloud band high in the scene, barely moving. */\n.weatherBg.bg-cloudy > .bgLayer--far {\n  background: radial-gradient(80% 40% at 30% 22%, rgba(140, 160, 174, 0.16), rgba(140, 160, 174, 0) 70%);\n  filter: blur(10px);\n  animation: bgCloud 70s ease-in-out infinite alternate-reverse;\n}\n/* near: a smaller, sharper cloud drifting faster across the foreground. */\n.weatherBg.bg-cloudy > .bgLayer--near {\n  background: radial-gradient(34% 26% at 62% 40%, rgba(176, 192, 204, 0.2), rgba(176, 192, 204, 0) 68%);\n  filter: blur(2px);\n  animation: bgCloud 30s ease-in-out infinite alternate;\n}\n/* ground: dim horizon light under the overcast. */\n.weatherBg.bg-cloudy > .bgLayer--ground {\n  background: linear-gradient(0deg, rgba(140, 160, 174, 0.12), rgba(140, 160, 174, 0) 100%);\n  animation: bgGround 16s ease-in-out infinite alternate;\n}\n\n/* RAIN (also drizzle, showers, thunder) — darker sky, a heavy drifting cloud,\n   and a faint diagonal rain sheen sliding down. */\n.weatherBg.bg-rain {\n  background: linear-gradient(180deg, #1c2734 0%, #121b26 55%, var(--ground) 100%);\n}\n.weatherBg.bg-rain::before {\n  top: -8%;\n  left: -18%;\n  width: 62vmax;\n  height: 30vmax;\n  border-radius: 50%;\n  background: radial-gradient(circle at center, rgba(120, 140, 158, 0.22), rgba(120, 140, 158, 0) 70%);\n  animation: bgCloud 46s ease-in-out infinite alternate;\n}\n.weatherBg.bg-rain::after {\n  inset: 0;\n  background-image: repeating-linear-gradient(74deg, rgba(160, 190, 214, 0.07) 0 1px, rgba(160, 190, 214, 0) 1px 9px);\n  animation: bgRain 0.9s linear infinite;\n}\n/* far: a broad, blurred storm cloud drifting slowly high overhead. */\n.weatherBg.bg-rain > .bgLayer--far {\n  background: radial-gradient(90% 44% at 66% 12%, rgba(120, 140, 158, 0.2), rgba(120, 140, 158, 0) 70%);\n  filter: blur(9px);\n  animation: bgCloud 60s ease-in-out infinite alternate-reverse;\n}\n/* near: coarser, faster rain streaks at a steeper angle for foreground depth. */\n.weatherBg.bg-rain > .bgLayer--near {\n  background-image: repeating-linear-gradient(78deg, rgba(180, 206, 226, 0.11) 0 2px, rgba(180, 206, 226, 0) 2px 15px);\n  animation: bgRainNear 0.55s linear infinite;\n}\n/* ground: a wet sheen catching the light at the bottom of the scene. */\n.weatherBg.bg-rain > .bgLayer--ground {\n  background: linear-gradient(0deg, rgba(120, 140, 158, 0.18), rgba(120, 140, 158, 0) 100%);\n  animation: bgGround 9s ease-in-out infinite alternate;\n}\n\n/* SNOW — cool light sky with slowly drifting flakes. */\n.weatherBg.bg-snow {\n  background: linear-gradient(180deg, #2a3949 0%, #1a2634 55%, var(--ground) 100%);\n}\n.weatherBg.bg-snow::before,\n.weatherBg.bg-snow::after {\n  inset: 0;\n  background-image:\n    radial-gradient(2px 2px at 20% 10%, rgba(255, 255, 255, 0.8), transparent 60%),\n    radial-gradient(2.4px 2.4px at 66% 22%, rgba(255, 255, 255, 0.7), transparent 60%),\n    radial-gradient(1.8px 1.8px at 40% 40%, rgba(255, 255, 255, 0.75), transparent 60%),\n    radial-gradient(2px 2px at 84% 54%, rgba(255, 255, 255, 0.7), transparent 60%),\n    radial-gradient(2.2px 2.2px at 12% 70%, rgba(255, 255, 255, 0.7), transparent 60%),\n    radial-gradient(1.8px 1.8px at 54% 86%, rgba(255, 255, 255, 0.65), transparent 60%);\n  background-size: 100% 50%;\n}\n.weatherBg.bg-snow::before {\n  animation: bgSnow 14s linear infinite;\n}\n.weatherBg.bg-snow::after {\n  opacity: 0.6;\n  animation: bgSnow 22s linear infinite;\n}\n/* far: tiny, faint, blurred flakes falling slowly in the deep background. */\n.weatherBg.bg-snow > .bgLayer--far {\n  background-image:\n    radial-gradient(1px 1px at 16% 12%, rgba(255, 255, 255, 0.55), transparent 60%),\n    radial-gradient(1.2px 1.2px at 48% 26%, rgba(255, 255, 255, 0.5), transparent 60%),\n    radial-gradient(1px 1px at 72% 18%, rgba(255, 255, 255, 0.5), transparent 60%),\n    radial-gradient(1.1px 1.1px at 30% 44%, rgba(255, 255, 255, 0.5), transparent 60%),\n    radial-gradient(1px 1px at 88% 40%, rgba(255, 255, 255, 0.45), transparent 60%),\n    radial-gradient(1.2px 1.2px at 60% 62%, rgba(255, 255, 255, 0.5), transparent 60%),\n    radial-gradient(1px 1px at 22% 78%, rgba(255, 255, 255, 0.45), transparent 60%),\n    radial-gradient(1.1px 1.1px at 78% 84%, rgba(255, 255, 255, 0.45), transparent 60%);\n  background-size: 100% 50%;\n  filter: blur(1px);\n  opacity: 0.7;\n  animation: bgSnow 30s linear infinite;\n}\n/* near: large foreground flakes with a soft glow, falling fast. */\n.weatherBg.bg-snow > .bgLayer--near {\n  background-image:\n    radial-gradient(3.4px 3.4px at 26% 16%, rgba(255, 255, 255, 0.95), transparent 62%),\n    radial-gradient(3px 3px at 62% 34%, rgba(255, 255, 255, 0.9), transparent 62%),\n    radial-gradient(3.6px 3.6px at 84% 60%, rgba(255, 255, 255, 0.95), transparent 62%),\n    radial-gradient(3.2px 3.2px at 14% 68%, rgba(255, 255, 255, 0.9), transparent 62%);\n  background-size: 100% 50%;\n  filter: drop-shadow(0 0 3px rgba(255, 255, 255, 0.7));\n  animation: bgSnow 8s linear infinite;\n}\n/* ground: a lit band of settled snow glowing at the bottom of the scene. */\n.weatherBg.bg-snow > .bgLayer--ground {\n  height: 30%;\n  background: linear-gradient(0deg, rgba(234, 240, 246, 0.28), rgba(234, 240, 246, 0.05) 60%, rgba(234, 240, 246, 0) 100%);\n  animation: bgGround 11s ease-in-out infinite alternate;\n}\n\n/* FOG (also mist, haze) — muted sky with slow horizontal haze bands. */\n.weatherBg.bg-fog {\n  background: linear-gradient(180deg, #232c35 0%, #182029 55%, var(--ground) 100%);\n}\n.weatherBg.bg-fog::before {\n  inset: 0;\n  background-image:\n    linear-gradient(0deg, rgba(140, 160, 174, 0) 0%, rgba(140, 160, 174, 0.12) 30%, rgba(140, 160, 174, 0) 46%),\n    linear-gradient(0deg, rgba(140, 160, 174, 0) 54%, rgba(140, 160, 174, 0.1) 72%, rgba(140, 160, 174, 0) 88%);\n  animation: bgFog 24s ease-in-out infinite alternate;\n}\n/* far: a thin, high haze band drifting the other way, slower. */\n.weatherBg.bg-fog > .bgLayer--far {\n  background-image: linear-gradient(0deg, rgba(140, 160, 174, 0) 8%, rgba(140, 160, 174, 0.08) 22%, rgba(140, 160, 174, 0) 38%);\n  filter: blur(3px);\n  opacity: 0.8;\n  animation: bgFog 34s ease-in-out infinite alternate-reverse;\n}\n/* near: a soft, heavily blurred haze mass low in the scene. */\n.weatherBg.bg-fog > .bgLayer--near {\n  background-image: linear-gradient(0deg, rgba(176, 192, 204, 0.14) 0%, rgba(176, 192, 204, 0.06) 40%, rgba(176, 192, 204, 0) 68%);\n  filter: blur(8px);\n  animation: bgFog 18s ease-in-out infinite alternate;\n}\n/* ground: a dense fog pool settling along the bottom. */\n.weatherBg.bg-fog > .bgLayer--ground {\n  height: 42%;\n  background: linear-gradient(0deg, rgba(176, 192, 204, 0.22), rgba(176, 192, 204, 0) 100%);\n  animation: bgGround 15s ease-in-out infinite alternate;\n}\n\n@keyframes bgSun {\n  0%   { transform: translate(0, 0) scale(1);        opacity: 0.7; }\n  100% { transform: translate(-4%, 3%) scale(1.12);  opacity: 1; }\n}\n\n@keyframes bgTwinkle {\n  0%   { opacity: 0.4; }\n  100% { opacity: 1; }\n}\n\n@keyframes bgCloud {\n  0%   { transform: translateX(0); }\n  100% { transform: translateX(10%); }\n}\n\n@keyframes bgRain {\n  0%   { background-position: 0 0; }\n  100% { background-position: -9px 32px; }\n}\n\n@keyframes bgSnow {\n  0%   { transform: translateY(-50%); }\n  100% { transform: translateY(0); }\n}\n\n@keyframes bgFog {\n  0%   { transform: translateY(-4%); opacity: 0.7; }\n  100% { transform: translateY(4%);  opacity: 1; }\n}\n\n/* A steeper, faster fall for the near rain plane so it reads ahead of ::after. */\n@keyframes bgRainNear {\n  0%   { background-position: 0 0; }\n  100% { background-position: -15px 44px; }\n}\n\n/* A gentle breathe for the ground-lighting accent across every category. */\n@keyframes bgGround {\n  0%   { opacity: 0.65; }\n  100% { opacity: 1; }\n}\n\n/* Frozen while the tab is hidden (sky.js toggles .paused on visibilitychange). */\n.weatherBg.paused::before,\n.weatherBg.paused::after,\n.weatherBg.paused > .bgLayer {\n  animation-play-state: paused;\n}\n\n/* Halt every treatment's motion under a reduced-motion preference — one static\n   frame per category. */\n@media (prefers-reduced-motion: reduce) {\n  .weatherBg::before,\n  .weatherBg::after,\n  .weatherBg > .bgLayer {\n    animation: none;\n  }\n}\n\n/* The ribbon and its readout share one flex column so a mobile location rotation\n   slides them as a single unit. It carries the same 28px gap #app used to put\n   between the ribbon and the readout, so wrapping them is layout-transparent. */\n#weatherCard {\n  position: relative; /* stacks above the .weatherBg drift layer */\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 28px;\n}\n\n/* Ribbon: the SVG scales to the column width via the viewBox, so all 72 hours\n   are on screen at any width down to 380px without scroll or pan. */\n#ribbonWrap {\n  width: 100%;\n}\n\n#ribbonSvg {\n  display: block;\n  width: 100%;\n  height: auto;\n  overflow: visible;\n}\n\n.ribbon-curve {\n  stroke-width: 2.5;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n\n/* Day boundary hairlines at hours 24 and 48. */\n.ribbon-hairline {\n  stroke: var(--rule);\n  stroke-width: 1;\n}\n\n.ribbon-tick {\n  fill: var(--muted);\n  font-family: var(--mono);\n  font-size: 12px;\n  letter-spacing: 1px;\n}\n\n.ribbon-nowline {\n  stroke: var(--muted);\n  stroke-width: 1;\n  stroke-dasharray: 2 3;\n  opacity: 0.7;\n}\n\n.ribbon-dot {\n  stroke: var(--ground);\n  stroke-width: 2;\n}\n\n/* Readout beneath the curve. */\n#readout {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  text-align: center;\n}\n\n/* Location name paired with the C/F unit switch on one centered row. */\n#locationRow {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n\n#locationName {\n  font-family: var(--mono);\n  font-size: 13px;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  color: var(--muted);\n}\n\n/* Segmented C/F toggle: a compact pill, the active option filled with the rule\n   colour. Display-only — flips the temperature readouts between °C and °F. */\n#unitSwitch {\n  display: flex;\n  border: 1px solid var(--rule);\n  border-radius: 999px;\n  overflow: hidden;\n}\n\n.unitOpt {\n  font-family: var(--mono);\n  font-size: 11px;\n  letter-spacing: 1px;\n  padding: 3px 9px;\n  border: none;\n  background: transparent;\n  color: var(--muted);\n  cursor: pointer;\n}\n\n.unitOpt.active {\n  background: var(--rule);\n  color: var(--text);\n}\n\n/* Saved-location navigation: prev/next chevrons flanking the dot row. The whole\n   row is hidden at a count of one (a single location needs no affordance); the\n   arrows are desktop-only and drop out at ≤480px where swipe takes over. */\n.navRow {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  margin: 4px 0 2px;\n}\n\n.navRow.hidden {\n  display: none;\n}\n\n.arrow {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  border: none;\n  background: none;\n  color: var(--muted);\n  cursor: pointer;\n}\n\n.arrow:hover {\n  color: #EAEEF2;\n}\n\n.arrow svg {\n  display: block;\n  width: 20px;\n  height: 14px;\n}\n\n/* Saved-location dots: one per saved location, the active one filled. */\n#dotRow {\n  position: relative; /* offset parent for the desktop remove popover */\n  display: flex;\n  gap: 8px;\n}\n\n.dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #2E3B45;\n  cursor: pointer;\n  touch-action: manipulation;\n}\n\n.dot.active {\n  background: #EAEEF2;\n}\n\n/* Desktop remove-confirmation popover, anchored above the long-pressed dot.\n   Touch keeps the native confirm; this is the mouse/pen path. */\n.removePopover {\n  position: absolute;\n  bottom: calc(100% + 10px);\n  transform: translateX(-50%);\n  z-index: 20;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 12px;\n  background: var(--ground);\n  border: 1px solid var(--rule);\n  border-radius: 8px;\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.45);\n  white-space: nowrap;\n}\n\n/* Downward pointer arrow, bordered: outer triangle in the rule colour with an\n   inner ground-filled triangle laid a pixel higher on top of it. */\n.removePopover::before,\n.removePopover::after {\n  content: '';\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 0;\n  height: 0;\n  border-style: solid;\n}\n\n.removePopover::before {\n  top: 100%;\n  border-width: 7px 7px 0 7px;\n  border-color: var(--rule) transparent transparent transparent;\n}\n\n.removePopover::after {\n  top: calc(100% - 1px);\n  border-width: 6px 6px 0 6px;\n  border-color: var(--ground) transparent transparent transparent;\n}\n\n.removePopover-name {\n  color: var(--text);\n  font-size: 13px;\n}\n\n.removePopover-actions {\n  display: flex;\n  gap: 8px;\n}\n\n.removePopover-cancel,\n.removePopover-delete {\n  font-family: inherit;\n  font-size: 12px;\n  padding: 5px 12px;\n  border: 1px solid var(--rule);\n  border-radius: 8px;\n  cursor: pointer;\n}\n\n.removePopover-cancel {\n  background: none;\n  color: var(--muted);\n}\n\n.removePopover-cancel:hover {\n  color: var(--text);\n}\n\n.removePopover-delete {\n  background: var(--text);\n  color: var(--ground);\n  border-color: var(--text);\n}\n\n.removePopover-delete:hover {\n  filter: brightness(0.92);\n}\n\n/* Roboto Light 40px for the reading. */\n#currentTemp {\n  font-family: 'Roboto', sans-serif;\n  font-weight: 300;\n  font-size: 40px;\n  line-height: 1.1;\n}\n\n#currentCondition {\n  font-size: 15px;\n  color: var(--text);\n}\n\n/* Four-up stat row: text labels, no icons. */\n#statRow {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 10px;\n  width: 100%;\n  margin-top: 14px;\n}\n\n.stat {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  padding: 12px 6px;\n  border: 1px solid var(--rule);\n  border-radius: 8px;\n}\n\n.stat-label {\n  font-family: var(--mono);\n  font-size: 10px;\n  letter-spacing: 1px;\n  color: var(--muted);\n}\n\n.stat-value {\n  font-size: 17px;\n  color: var(--text);\n}\n\n/* Search form. */\n#searchForm {\n  position: relative; /* stacks above the .weatherBg drift layer */\n  z-index: 1;\n  display: flex;\n  gap: 10px;\n  width: 100%;\n}\n\n/* Holds the input and its autocomplete dropdown; position: relative anchors\n   #suggestions beneath the input. flex: 1 so the pair fills the row the way the\n   bare input used to. */\n#searchInputWrap {\n  position: relative;\n  flex: 1;\n  min-width: 0;\n}\n\n#searchInput {\n  width: 100%;\n  padding: 12px 14px;\n  font-family: var(--mono);\n  font-size: 16px; /* 16px so iOS Safari doesn't auto-zoom the input on focus */\n  color: var(--text);\n  background: transparent;\n  border: 1px solid var(--rule);\n  border-radius: 8px;\n}\n\n#searchInput::placeholder {\n  color: var(--muted);\n}\n\n#searchInput:focus {\n  outline: none;\n  border-color: var(--muted);\n}\n\n/* While the dropdown is open the input's bottom corners square off and its\n   bottom edge drops out, so it reads as one attached surface with #suggestions. */\n#searchForm.suggesting #searchInput {\n  border-radius: 8px 8px 0 0;\n  border-bottom-color: transparent;\n}\n\n/* Failed lookup: reddened border, current ribbon left in place. */\n#searchForm.invalid #searchInput {\n  border-color: #C2452D;\n}\n\n/* Autocomplete dropdown: hangs off the bottom of the input, matching its width\n   and continuing its focused border into a bottom-rounded panel. */\n#suggestions {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  z-index: 10;\n  max-height: 240px;\n  overflow-y: auto;\n  background: var(--ground);\n  border: 1px solid var(--muted);\n  border-top: none;\n  border-radius: 0 0 8px 8px;\n}\n\n#suggestions.hidden {\n  display: none;\n}\n\n.suggestion-item {\n  display: flex;\n  align-items: baseline;\n  gap: 8px;\n  padding: 10px 14px;\n  font-family: var(--mono);\n  cursor: pointer;\n}\n\n.suggestion-item:hover,\n.suggestion-item.selected {\n  background: var(--rule);\n}\n\n.suggestion-city {\n  font-size: 14px;\n  color: var(--text);\n}\n\n.suggestion-country {\n  font-size: 12px;\n  color: var(--muted);\n}\n\n#searchButton {\n  padding: 12px 20px;\n  font-family: var(--mono);\n  font-size: 14px;\n  letter-spacing: 1px;\n  color: var(--ground);\n  background: var(--text);\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n}\n\n#searchButton:hover {\n  filter: brightness(0.92);\n}\n\n@media (max-width: 480px) {\n  #app {\n    gap: 22px;\n    padding: 24px 16px;\n  }\n\n  #weatherCard {\n    gap: 22px;\n  }\n\n  /* Swipe-direction-aware slide on a committed location rotation. favourites.js\n     adds .slide-next (swipe left -> next) or .slide-prev (swipe right -> prev)\n     to #weatherCard, then rotates. The card fades to nothing at the keyframe's\n     midpoint, which masks the forecast swap: renderRibbon() rebuilds into this\n     same card while it's invisible, so the new curve slides in rather than\n     snapping. Desktop rotates via the arrows and never gets the class. */\n  #weatherCard.slide-next {\n    animation: cardSlideNext 280ms ease-out;\n  }\n\n  #weatherCard.slide-prev {\n    animation: cardSlidePrev 280ms ease-out;\n  }\n\n  @keyframes cardSlideNext {\n    0% { transform: translateX(0); opacity: 1; }\n    40% { transform: translateX(-42px); opacity: 0; }\n    60% { transform: translateX(42px); opacity: 0; }\n    100% { transform: translateX(0); opacity: 1; }\n  }\n\n  @keyframes cardSlidePrev {\n    0% { transform: translateX(0); opacity: 1; }\n    40% { transform: translateX(42px); opacity: 0; }\n    60% { transform: translateX(-42px); opacity: 0; }\n    100% { transform: translateX(0); opacity: 1; }\n  }\n\n  /* Mobile navigates by swipe; drop the arrows but keep the dots. */\n  .arrow {\n    display: none;\n  }\n\n  #statRow {\n    gap: 8px;\n  }\n\n  .stat {\n    padding: 10px 4px;\n  }\n\n  .stat-value {\n    font-size: 15px;\n  }\n}\n\n/* Respect a reduced-motion preference: rotate instantly, no slide. favourites.js\n   still adds the class, but with the animation suppressed animationend never\n   fires, so its setTimeout fallback is what strips the class back off. */\n@media (prefers-reduced-motion: reduce) {\n  #weatherCard.slide-next,\n  #weatherCard.slide-prev {\n    animation: none;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/favourites.js":
/*!***************************!*\
  !*** ./src/favourites.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addLocation: () => (/* binding */ addLocation),
/* harmony export */   initFavourites: () => (/* binding */ initFavourites)
/* harmony export */ });
/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic.js */ "./src/logic.js");
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
    _logic_js__WEBPACK_IMPORTED_MODULE_0__.forecastLogic.futureAPICalls(locations[currentIndex]);
  } else {
    _logic_js__WEBPACK_IMPORTED_MODULE_0__.forecastLogic.futureAPICalls(DEFAULT_QUERY);
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
function addLocation(query) {
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
function initFavourites() {
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


/***/ }),

/***/ "./src/indexChanges.js":
/*!*****************************!*\
  !*** ./src/indexChanges.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   invalidInput: () => (/* binding */ invalidInput),
/* harmony export */   renderForecast: () => (/* binding */ renderForecast),
/* harmony export */   validInput: () => (/* binding */ validInput),
/* harmony export */   wireEvents: () => (/* binding */ wireEvents)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _ribbon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ribbon.js */ "./src/ribbon.js");
/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logic.js */ "./src/logic.js");
/* harmony import */ var _favourites_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./favourites.js */ "./src/favourites.js");
/* harmony import */ var _sky_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sky.js */ "./src/sky.js");






// Guard so wireEvents() only ever registers one set of listeners. The old
// changeWeatherInfo() re-registered on every fetch, doubling the handler count
// per search; the render path (renderForecast) and the wiring path (wireEvents)
// are split precisely so that can never happen again.
let eventsWired = false;

// Debounce window for the city-suggestion lookup — long enough that a run of
// keystrokes fires one request, short enough to feel live.
const SUGGEST_DEBOUNCE_MS = 300;

// C/F display unit, persisted under the shared weatherapp_ localStorage prefix.
// This is display-only: renderRibbon() still receives raw Celsius, so the curve
// colours (tempColour) and the y-scale never shift when the readout unit flips.
const UNIT_KEY = 'weatherapp_unit';
let currentUnit = loadUnit();

// The last rendered "now", kept in Celsius so the unit toggle can re-render the
// temperature readouts without waiting for another fetch.
let lastNow = null;

// Cached DOM references, populated once by cacheDom() after index.js has built
// and appended the DOM.
let searchForm, searchInput, suggestions, locationName, unitSwitch, currentTemp,
  currentCondition, feelsVal, humidityVal, rainVal, windVal;

// Autocomplete state. currentSuggestions holds the results backing the visible
// dropdown; selectedIndex is the keyboard-highlighted row (-1 = none). requestSeq
// discards stale async results — only the latest lookup renders — and is bumped
// on close so an in-flight request can't reopen the dropdown after selection.
let currentSuggestions = [];
let selectedIndex = -1;
let suggestDebounce = null;
let requestSeq = 0;

function cacheDom() {
  if (locationName) { return; } // already cached

  searchForm = document.getElementById('searchForm');
  searchInput = document.getElementById('searchInput');
  suggestions = document.getElementById('suggestions');
  locationName = document.getElementById('locationName');
  unitSwitch = document.getElementById('unitSwitch');
  currentTemp = document.getElementById('currentTemp');
  currentCondition = document.getElementById('currentCondition');
  feelsVal = document.getElementById('feelsVal');
  humidityVal = document.getElementById('humidityVal');
  rainVal = document.getElementById('rainVal');
  windVal = document.getElementById('windVal');
}

// Pure render path. fulfillPromise() in logic.js calls this on every resolved
// response; it registers NO listeners, so it is safe to call repeatedly. Draws
// the ribbon and fills the readout from the same "now" index, so the marker on
// the curve and the stat row can never disagree about the current hour.
function renderForecast(forecast) {
  cacheDom();

  (0,_ribbon_js__WEBPACK_IMPORTED_MODULE_1__.renderRibbon)(forecast);

  const i = (0,_ribbon_js__WEBPACK_IMPORTED_MODULE_1__.currentHourIndex)(forecast);
  const now = forecast.hours[i];
  if (!now) { return; }

  lastNow = now;
  locationName.textContent = forecast.location.name;
  currentCondition.textContent = now.condition;

  // Repaint the full-viewport background to match the current condition. Off the
  // curve's data path — it only swaps a class, and no-ops when the category is
  // unchanged, so paging locations or flipping the unit doesn't restart it.
  (0,_sky_js__WEBPACK_IMPORTED_MODULE_4__.setWeatherBg)(now.condition);

  humidityVal.textContent = now.humidity + '%';
  rainVal.textContent = now.rain + '%';
  windVal.textContent = Math.round(now.wind) + ' km/h';

  // Temperature readouts and the active button state both come from renderTemps,
  // so a fetch and a unit toggle can never format the two temperatures differently.
  renderTemps();
}

// Read the persisted unit, defaulting to Celsius. Guarded so a locked-down
// localStorage (private mode, disabled storage) falls back rather than throwing.
function loadUnit() {
  try {
    return localStorage.getItem(UNIT_KEY) === 'F' ? 'F' : 'C';
  } catch (e) {
    return 'C';
  }
}

// Format a Celsius scalar in the active display unit — rounded, with the matching
// °C/°F suffix. Conversion is display-only; callers always pass raw Celsius.
function formatTemp(celsius) {
  const value = currentUnit === 'F' ? celsius * 9 / 5 + 32 : celsius;
  return Math.round(value) + '°' + currentUnit;
}

// Re-render the two temperature readouts from the cached Celsius "now" and sync
// the active state on the C/F buttons. Called on every fetch and every toggle.
function renderTemps() {
  if (unitSwitch) {
    const opts = unitSwitch.querySelectorAll('.unitOpt');
    for (let i = 0; i < opts.length; i++) {
      opts[i].classList.toggle('active', opts[i].dataset.unit === currentUnit);
    }
  }
  if (!lastNow) { return; }
  currentTemp.textContent = formatTemp(lastNow.temp);
  feelsVal.textContent = formatTemp(lastNow.feelsLike);
}

// Switch the display unit, persist it, and re-render — no refetch, the stored
// Celsius is converted in place.
function setUnit(unit) {
  currentUnit = unit === 'F' ? 'F' : 'C';
  try {
    localStorage.setItem(UNIT_KEY, currentUnit);
  } catch (e) { /* storage unavailable — the in-memory unit still applies */ }
  renderTemps();
}

// Registers listeners EXACTLY ONCE for the life of the page. index.js calls this
// at bootstrap, after the DOM is appended — never from the render path — so a
// search fires exactly one fetch and every element carries exactly one listener.
function wireEvents() {
  if (eventsWired) { return; }

  cacheDom();
  eventsWired = true;

  // The button is a real submit button, so this catches both the click and the
  // Enter key as one submit event. preventDefault stops the form reloading the
  // page; futureAPICalls does the single fetch. The search form is also the
  // add path for saved locations: on a successful lookup the query is appended
  // to the saved list and becomes current; a failed lookup resolves to null and
  // leaves the list untouched (invalidInput has already reddened the input).
  searchForm.addEventListener('submit', function (e) {
    e.preventDefault();
    closeSuggestions();
    const query = searchInput.value;
    _logic_js__WEBPACK_IMPORTED_MODULE_2__.forecastLogic.futureAPICalls(query).then(function (forecast) {
      if (forecast) {
        (0,_favourites_js__WEBPACK_IMPORTED_MODULE_3__.addLocation)(query);
        searchInput.value = '';
      }
    });
  });

  wireAutocomplete();
  wireUnitToggle();
}

// One delegated click listener on the switch drives both buttons. Wired once from
// wireEvents(), so — like every other listener — nothing multiplies across fetches.
// renderTemps() runs immediately to reflect the persisted unit on the buttons
// before the first fetch resolves.
function wireUnitToggle() {
  if (!unitSwitch) { return; }
  unitSwitch.addEventListener('click', function (e) {
    const btn = e.target && e.target.closest ? e.target.closest('.unitOpt') : null;
    if (!btn || !unitSwitch.contains(btn)) { return; }
    setUnit(btn.dataset.unit);
  });
  renderTemps();
}

// Wires the debounced city-suggestion dropdown. Called once from wireEvents(),
// so — like every other listener in the app — nothing multiplies across fetches.
function wireAutocomplete() {
  // Each keystroke schedules one debounced lookup; an empty box closes the
  // dropdown outright. Setting searchInput.value programmatically (on select or
  // on a successful submit) does not fire 'input', so there is no refetch loop.
  searchInput.addEventListener('input', function () {
    const value = searchInput.value.trim();
    if (suggestDebounce) { clearTimeout(suggestDebounce); suggestDebounce = null; }
    if (!value) { closeSuggestions(); return; }

    suggestDebounce = setTimeout(function () {
      const seq = ++requestSeq;
      _logic_js__WEBPACK_IMPORTED_MODULE_2__.forecastLogic.searchCities(value).then(function (results) {
        if (seq !== requestSeq) { return; } // a newer keystroke superseded this
        renderSuggestions(results);
      });
    }, SUGGEST_DEBOUNCE_MS);
  });

  // Arrow keys move the highlight; Enter on a highlighted row selects it (and is
  // stopped from also submitting the raw text); Escape closes without submitting.
  // With no dropdown open, Enter submits the typed text exactly as before.
  searchInput.addEventListener('keydown', function (e) {
    if (suggestions.classList.contains('hidden') || !currentSuggestions.length) {
      return;
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      moveSelection(1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      moveSelection(-1);
    } else if (e.key === 'Enter') {
      if (selectedIndex >= 0) {
        e.preventDefault();
        chooseSuggestion(selectedIndex);
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      closeSuggestions();
    }
  });

  // A click anywhere outside the search form closes the dropdown. Clicks inside
  // the form (the input, a suggestion row, the button) are handled by their own
  // listeners and must not close it here first.
  document.addEventListener('click', function (e) {
    if (e.target && e.target.closest && e.target.closest('#searchForm')) { return; }
    closeSuggestions();
  });
}

// Rebuild the dropdown from a results array. Empty results close it. Each row is
// the city name plus a muted region/country line; clicking one selects it.
function renderSuggestions(results) {
  while (suggestions.firstChild) { suggestions.removeChild(suggestions.firstChild); }

  currentSuggestions = results;
  selectedIndex = -1;

  if (!results.length) { closeSuggestions(); return; }

  results.forEach(function (r, idx) {
    const item = document.createElement('div');
    item.className = 'suggestion-item';
    item.setAttribute('role', 'option');

    const city = document.createElement('span');
    city.className = 'suggestion-city';
    city.textContent = r.name;

    const place = document.createElement('span');
    place.className = 'suggestion-country';
    place.textContent = [r.region, r.country].filter(Boolean).join(', ');

    item.appendChild(city);
    item.appendChild(place);
    item.addEventListener('click', function () { chooseSuggestion(idx); });

    suggestions.appendChild(item);
  });

  openSuggestions();
}

// Move the keyboard highlight, wrapping at both ends, and mirror it onto the DOM.
function moveSelection(dir) {
  const n = currentSuggestions.length;
  if (!n) { return; }
  selectedIndex = (selectedIndex + dir + n) % n;

  const items = suggestions.children;
  for (let i = 0; i < items.length; i++) {
    items[i].classList.toggle('selected', i === selectedIndex);
  }
}

// Fill the input with the chosen city and submit the form the same way pressing
// Enter or clicking Submit does, so the fetch + save-location path is unchanged.
function chooseSuggestion(idx) {
  const r = currentSuggestions[idx];
  if (!r) { return; }
  searchInput.value = r.name;
  closeSuggestions();
  if (searchForm.requestSubmit) {
    searchForm.requestSubmit();
  } else {
    searchForm.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
  }
}

function openSuggestions() {
  suggestions.classList.remove('hidden');
  searchForm.classList.add('suggesting'); // flattens the input's bottom corners
}

// Close and reset. Bumping requestSeq invalidates any in-flight lookup so it
// can't reopen the dropdown after a selection or submit.
function closeSuggestions() {
  if (!suggestions) { return; }
  if (suggestDebounce) { clearTimeout(suggestDebounce); suggestDebounce = null; }
  requestSeq++;
  currentSuggestions = [];
  selectedIndex = -1;
  suggestions.classList.add('hidden');
  searchForm.classList.remove('suggesting');
}

// A successful lookup clears the invalid state; a failed one keeps the current
// ribbon and reddens the input border (via the .invalid class in style.css).
function validInput() {
  cacheDom();
  if (searchForm) { searchForm.classList.remove('invalid'); }
}

function invalidInput() {
  cacheDom();
  if (searchForm) { searchForm.classList.add('invalid'); }
}


/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   forecastLogic: () => (/* binding */ forecastLogic)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _indexChanges_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./indexChanges.js */ "./src/indexChanges.js");



//  3 day forecast - http://api.weatherapi.com/v1/forecast.json?key=39c28f85ab034521b9921705232710&q=98052&days=3&aqi=no&alerts=no

// The last forecast we successfully rendered. A failed lookup keeps it on screen
// (see fulfillPromise): the search just reddens the input rather than blanking
// the ribbon.
let lastForecast = null;

const forecastLogic = (function () {

  // No fetch fires at module-eval time. The single initial fetch (default
  // location, or the first saved location) is driven from the bootstrap in
  // index.js via initFavourites() -> futureAPICalls, so it happens exactly once
  // in the index bundle rather than once per bundle that imports this module.

  // Fires one fetch for a location and renders on success. Returns a promise
  // resolving to the built forecast on success, or null on a failed lookup, so
  // the search submit handler can append the location to the saved list only
  // when the lookup actually succeeded.
  function futureAPICalls(value) {
    return fulfillPromise(pullForecast(value));
  }

  function fulfillPromise(forecastJSON) {
    return forecastJSON.then((result) => {
      // pullForecast resolves to null on a failed lookup — leave the current
      // ribbon untouched (invalidInput() has already reddened the input).
      if (!result) { return null; }

      const forecast = buildForecast(result);
      lastForecast = forecast;
      (0,_indexChanges_js__WEBPACK_IMPORTED_MODULE_1__.renderForecast)(forecast);
      return forecast;
    });
  }

  // Flatten the three-day response into a single 72-hour series plus a location
  // object. Every hour keeps its own epoch, temperature, condition text and the
  // stat fields the readout shows — nothing is collapsed to per-day scalars, and
  // the full forecastday[].hour[] arrays (already in every response, previously
  // discarded) are what the curve is drawn from.
  function buildForecast(result) {
    const forecastDays = result.forecast.forecastday;
    const hours = [];

    forecastDays.forEach((day) => {
      day.hour.forEach((h) => {
        hours.push({
          epoch: h.time_epoch,
          temp: h.temp_c,
          feelsLike: h.feelslike_c,
          humidity: h.humidity,
          rain: h.chance_of_rain,
          wind: h.wind_kph,
          condition: h.condition.text,
        });
      });
    });

    return {
      location: {
        name: result.location.name,
        // "now" is indexed off the location's real current time, not a parsed
        // date string. See currentHourIndex() in ribbon.js.
        localtime_epoch: result.location.localtime_epoch,
      },
      hours: hours,
      // Per-day date + hour count drive the WED/THU/FRI ticks and the day
      // hairlines at hours 24 and 48.
      days: forecastDays.map((day) => ({ date: day.date, count: day.hour.length })),
    };
  }

  // Takes a location value appended to the API call. Resolves to the raw JSON on
  // success, or null on failure (so fulfillPromise keeps the current ribbon).
  async function pullForecast(value) {
    const url = 'https://api.weatherapi.com/v1/forecast.json?key=39c28f85ab034521b9921705232710&q=' + value + '&days=3&aqi=no&alerts=no';

    try {
      const response = await fetch(url, { mode: 'cors' });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const forecast = await response.json();

      (0,_indexChanges_js__WEBPACK_IMPORTED_MODULE_1__.validInput)();

      return forecast;
    } catch (err) {
      // catches errors both in fetch and response.json
      (0,_indexChanges_js__WEBPACK_IMPORTED_MODULE_1__.invalidInput)();
      console.log(err);

      return null;
    }
  }

  // Typeahead lookup for the search box. Hits WeatherAPI's search/autocomplete
  // endpoint (reusing the same key as pullForecast) and resolves to the raw
  // results array — [{ name, region, country, ... }, ...] — or [] on an empty
  // query, no matches, or any network/parse error. Never throws: the dropdown
  // just shows nothing on failure.
  async function searchCities(value) {
    const q = String(value).trim();
    if (!q) { return []; }

    const url = 'https://api.weatherapi.com/v1/search.json?key=39c28f85ab034521b9921705232710&q=' + encodeURIComponent(q);

    try {
      const response = await fetch(url, { mode: 'cors' });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const results = await response.json();

      return Array.isArray(results) ? results : [];
    } catch (err) {
      console.log(err);

      return [];
    }
  }

  return {
    pullForecast,
    futureAPICalls,
    searchCities,
  };

})(); // ends forecastLogic function


/***/ }),

/***/ "./src/ribbon.js":
/*!***********************!*\
  !*** ./src/ribbon.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildRibbon: () => (/* binding */ buildRibbon),
/* harmony export */   currentHourIndex: () => (/* binding */ currentHourIndex),
/* harmony export */   renderRibbon: () => (/* binding */ renderRibbon)
/* harmony export */ });
// ribbon.js — the 72-hour temperature ribbon.
//
// The forecast is one continuous temperature curve across all three days rather
// than three card states you page between, so navigation stops being a concept:
// every hour is on screen at once. Colour is a function of the temperature
// scalar (cold -> mild -> warm -> hot), NOT the condition category, so there is
// no per-condition branch to write and no eighth case to forget.
//
// buildRibbon(mount) creates the SVG scaffold once at bootstrap (defs, gradients,
// empty groups) and caches element refs. renderForecast() in indexChanges.js
// calls renderRibbon(forecast) on every resolved response to redraw the curve,
// the day hairlines/ticks and the current-hour marker from data. currentHourIndex
// is the single source of truth for "now", shared with the readout so the marker
// and the stat row never disagree.
//
// Hand-authored SVG, vanilla only — no charting library, no dependencies.

const NS = 'http://www.w3.org/2000/svg';

// viewBox geometry, in user units. The curve band sits between CHART_TOP and
// CHART_TOP+CHART_H; TICK_H beneath it carries the WED/THU/FRI day labels. A
// second lane (tides, out of scope today) would add LANE_H below that — the
// viewBox height switches between two values depending on whether the lane
// exists, so the layout is built lane-optional even though the lane never
// renders for now.
const VIEW_W = 720;
const PAD_L = 10;
const PAD_R = 10;
const CHART_TOP = 18;
const CHART_H = 150;
const TICK_H = 26;
const LANE_H = 90;

// Temperature -> colour ramp. Four anchors spanning a fixed °C domain so the
// same temperature always reads the same colour regardless of the day's range.
const RAMP = [
  { t: -5, c: [0x3d, 0x6f, 0xa8] }, // cold
  { t: 10, c: [0x6f, 0xa8, 0xa0] }, // mild
  { t: 25, c: [0xd9, 0xa4, 0x41] }, // warm
  { t: 40, c: [0xc2, 0x45, 0x2d] }, // hot
];

const WEEKDAY = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

// Cached scaffold refs, populated once by buildRibbon().
let svg, tempGrad, fillPath, curvePath, boundaryGroup, tickGroup, markerGroup,
  laneGroup;

function el(name, attrs) {
  const node = document.createElementNS(NS, name);
  if (attrs) {
    for (const k in attrs) { node.setAttribute(k, attrs[k]); }
  }
  return node;
}

function lerp(a, b, f) { return a + (b - a) * f; }

// Colour for a temperature, interpolated across the ramp anchors and clamped to
// the domain ends.
function tempColour(temp) {
  if (temp <= RAMP[0].t) { return rgb(RAMP[0].c); }
  if (temp >= RAMP[RAMP.length - 1].t) { return rgb(RAMP[RAMP.length - 1].c); }
  for (let i = 1; i < RAMP.length; i++) {
    if (temp <= RAMP[i].t) {
      const lo = RAMP[i - 1];
      const hi = RAMP[i];
      const f = (temp - lo.t) / (hi.t - lo.t);
      return rgb([
        Math.round(lerp(lo.c[0], hi.c[0], f)),
        Math.round(lerp(lo.c[1], hi.c[1], f)),
        Math.round(lerp(lo.c[2], hi.c[2], f)),
      ]);
    }
  }
  return rgb(RAMP[RAMP.length - 1].c);
}

function rgb(c) { return 'rgb(' + c[0] + ',' + c[1] + ',' + c[2] + ')'; }

function weekdayAbbr(dateStr) {
  // dateStr is 'YYYY-MM-DD'. Build the date at UTC midnight so the weekday never
  // shifts across a timezone boundary.
  const p = String(dateStr).split('-');
  const d = new Date(Date.UTC(+p[0], (+p[1]) - 1, +p[2]));
  return WEEKDAY[d.getUTCDay()] || '';
}

// Index of the hour bucket nearest "now". Driven off location.localtime_epoch,
// NOT a parsed date-string hour — the old getCurrentTime() read the hour out of
// date_epoch (local midnight) and returned the UTC offset, so "feels like" was a
// fixed arbitrary hour. localtime_epoch is the location's real current time.
function currentHourIndex(forecast) {
  const hours = forecast.hours;
  if (!hours || !hours.length) { return 0; }
  const now = forecast.location.localtime_epoch;
  let best = 0;
  let bestDiff = Infinity;
  for (let i = 0; i < hours.length; i++) {
    const diff = Math.abs(hours[i].epoch - now);
    if (diff < bestDiff) { bestDiff = diff; best = i; }
  }
  return best;
}

// Create the SVG scaffold once. Called from index.js at bootstrap, after the
// mount element is in the DOM.
function buildRibbon(mount) {
  if (svg) { return; } // build once

  svg = el('svg', {
    id: 'ribbonSvg',
    viewBox: '0 0 ' + VIEW_W + ' ' + (CHART_TOP + CHART_H + TICK_H),
    preserveAspectRatio: 'xMidYMid meet',
  });

  const defs = el('defs');

  // Horizontal stroke gradient: coloured by temperature across the 72 hours.
  // Stops are rebuilt each render from the actual series.
  tempGrad = el('linearGradient', {
    id: 'tempGrad', x1: '0', y1: '0', x2: '1', y2: '0',
  });

  // Vertical fade fill under the curve.
  const fillGrad = el('linearGradient', {
    id: 'fillGrad', x1: '0', y1: '0', x2: '0', y2: '1',
  });
  fillGrad.appendChild(el('stop', { offset: '0', 'stop-color': '#8CA0AE', 'stop-opacity': '0.28' }));
  fillGrad.appendChild(el('stop', { offset: '1', 'stop-color': '#8CA0AE', 'stop-opacity': '0' }));

  defs.appendChild(tempGrad);
  defs.appendChild(fillGrad);
  svg.appendChild(defs);

  fillPath = el('path', { class: 'ribbon-fill', fill: 'url(#fillGrad)', stroke: 'none' });
  curvePath = el('path', { class: 'ribbon-curve', fill: 'none', stroke: 'url(#tempGrad)' });
  boundaryGroup = el('g', { class: 'ribbon-boundaries' });
  tickGroup = el('g', { class: 'ribbon-ticks' });
  markerGroup = el('g', { class: 'ribbon-marker' });
  laneGroup = el('g', { class: 'ribbon-lane' });

  svg.appendChild(fillPath);
  svg.appendChild(curvePath);
  svg.appendChild(boundaryGroup);
  svg.appendChild(tickGroup);
  svg.appendChild(laneGroup);
  svg.appendChild(markerGroup);

  mount.appendChild(svg);
}

function clear(node) {
  while (node.firstChild) { node.removeChild(node.firstChild); }
}

// Redraw the whole ribbon from a forecast: { location, hours[], days[], lane? }.
function renderRibbon(forecast) {
  if (!svg) { return; }

  const hours = forecast.hours || [];
  const n = hours.length;
  if (!n) { return; }

  const laneOn = !!forecast.lane;
  const totalH = CHART_TOP + CHART_H + TICK_H + (laneOn ? LANE_H : 0);
  svg.setAttribute('viewBox', '0 0 ' + VIEW_W + ' ' + totalH);

  const innerW = VIEW_W - PAD_L - PAD_R;
  const baseline = CHART_TOP + CHART_H;

  // temperature domain for the y-scale, padded so the curve never hugs an edge.
  let min = Infinity;
  let max = -Infinity;
  for (let i = 0; i < n; i++) {
    if (hours[i].temp < min) { min = hours[i].temp; }
    if (hours[i].temp > max) { max = hours[i].temp; }
  }
  if (min === max) { min -= 1; max += 1; }
  const span = max - min;

  const x = (i) => PAD_L + (n <= 1 ? 0 : (i / (n - 1)) * innerW);
  const y = (t) => CHART_TOP + (1 - (t - min) / span) * CHART_H;

  // Build the points, then a smooth path via quadratic midpoints (no overshoot).
  const pts = [];
  for (let i = 0; i < n; i++) { pts.push({ x: x(i), y: y(hours[i].temp) }); }

  let d = 'M ' + pts[0].x.toFixed(2) + ' ' + pts[0].y.toFixed(2);
  for (let i = 1; i < pts.length; i++) {
    const xc = (pts[i - 1].x + pts[i].x) / 2;
    const yc = (pts[i - 1].y + pts[i].y) / 2;
    d += ' Q ' + pts[i - 1].x.toFixed(2) + ' ' + pts[i - 1].y.toFixed(2) +
      ' ' + xc.toFixed(2) + ' ' + yc.toFixed(2);
  }
  d += ' L ' + pts[n - 1].x.toFixed(2) + ' ' + pts[n - 1].y.toFixed(2);

  curvePath.setAttribute('d', d);
  fillPath.setAttribute('d', d +
    ' L ' + pts[n - 1].x.toFixed(2) + ' ' + baseline +
    ' L ' + pts[0].x.toFixed(2) + ' ' + baseline + ' Z');

  // Horizontal temperature gradient: one stop per hour, coloured by that hour's
  // temperature. objectBoundingBox maps offset i/(n-1) onto the curve's x, which
  // spans the full inner width, so each stop lands under its hour.
  clear(tempGrad);
  for (let i = 0; i < n; i++) {
    tempGrad.appendChild(el('stop', {
      offset: (n <= 1 ? 0 : i / (n - 1)).toFixed(4),
      'stop-color': tempColour(hours[i].temp),
    }));
  }

  // Day hairlines + WED/THU/FRI ticks, derived from the per-day hour counts so a
  // short trailing day still lines up.
  clear(boundaryGroup);
  clear(tickGroup);
  const days = forecast.days || [];
  let start = 0;
  for (let di = 0; di < days.length; di++) {
    const count = days[di].count || 0;
    if (count <= 0) { continue; }

    if (di > 0 && start < n) {
      const bx = x(start).toFixed(2);
      boundaryGroup.appendChild(el('line', {
        class: 'ribbon-hairline',
        x1: bx, y1: CHART_TOP, x2: bx, y2: baseline,
      }));
    }

    const centerIdx = start + (count - 1) / 2;
    const tick = el('text', {
      class: 'ribbon-tick',
      x: x(centerIdx).toFixed(2),
      y: (baseline + TICK_H * 0.7).toFixed(2),
      'text-anchor': 'middle',
    });
    tick.textContent = weekdayAbbr(days[di].date);
    tickGroup.appendChild(tick);

    start += count;
  }

  // Current-hour marker: a hairline dropped to the baseline plus a dot on the
  // curve, the dot filled with the temperature colour for that hour.
  clear(markerGroup);
  const idx = currentHourIndex(forecast);
  const mx = x(idx);
  const my = y(hours[idx].temp);
  markerGroup.appendChild(el('line', {
    class: 'ribbon-nowline',
    x1: mx.toFixed(2), y1: my.toFixed(2), x2: mx.toFixed(2), y2: baseline,
  }));
  markerGroup.appendChild(el('circle', {
    class: 'ribbon-dot',
    cx: mx.toFixed(2), cy: my.toFixed(2), r: '5.5',
    fill: tempColour(hours[idx].temp),
  }));

  // Optional second lane. No data feeds it today (tides are Pro+ and empty for
  // inland locations), so it stays empty and the viewBox uses the shorter of the
  // two heights — but the group and the height switch exist so a lane can drop in
  // without a layout rewrite.
  clear(laneGroup);
  if (laneOn && typeof forecast.lane === 'function') {
    forecast.lane(laneGroup, { x, baseline, laneTop: baseline + TICK_H, laneH: LANE_H });
  }
}


/***/ }),

/***/ "./src/sky.js":
/*!********************!*\
  !*** ./src/sky.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initWeatherBg: () => (/* binding */ initWeatherBg),
/* harmony export */   setWeatherBg: () => (/* binding */ setWeatherBg)
/* harmony export */ });
// sky.js — a condition-based background mounted behind the app.
//
// Pure vanilla, no dependencies. A single `.weatherBg` element is inserted as
// the FIRST child of `#app` and positioned `fixed` (see style.css), so it spans
// the whole browser window on desktop while `#app` stays a constrained centred
// column above it (z-index). The element carries a `bg-<category>` class that
// selects a per-condition treatment in style.css — a gradient base plus
// depth-layered decorative imagery (sun, moon + twinkling stars, drifting
// clouds, flakes, haze) painted across the two pseudo-elements AND a set of
// `.bgLayer` child divs mounted below. The children add the far/mid/near depth
// planes and the ground-lighting accent that two pseudo-elements alone can't
// hold; every category composes a subset of them (unused ones stay transparent).
// All imagery and motion live in style.css.
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

// The depth planes each category composes from. Mounted once as child divs of
// `.weatherBg` so a category can stack far/mid/near imagery plus a ground-light
// accent — more paint surfaces than the two pseudo-elements provide. A category
// styles only the planes it needs; the rest stay transparent. Order is
// back-to-front so later planes paint over earlier ones.
const DEPTH_LAYERS = ['far', 'mid', 'near', 'ground'];

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
function setWeatherBg(conditionText) {
  const category = categoryFor(conditionText);
  if (category === currentCategory) { return; }
  if (currentCategory) { bgEl && bgEl.classList.remove('bg-' + currentCategory); }
  currentCategory = category;
  if (bgEl) { bgEl.classList.add('bg-' + category); }
}

// Mount the background layer once, as the first child of the given host (`#app`).
// Safe to call again — it only ever mounts a single element. Applies whatever
// category has been set so far, or a neutral default until the first fetch.
function initWeatherBg(hostEl) {
  if (bgEl) { return; } // mount once
  const host = hostEl || document.getElementById('app');
  if (!host) { return; }

  bgEl = document.createElement('div');
  bgEl.className = 'weatherBg';
  bgEl.setAttribute('aria-hidden', 'true');
  bgEl.classList.add('bg-' + (currentCategory || DEFAULT_CATEGORY));
  if (!currentCategory) { currentCategory = DEFAULT_CATEGORY; }

  // Mount the depth planes once. They are generic and shared across categories;
  // the active `bg-<category>` class decides what each plane paints in CSS.
  for (const name of DEPTH_LAYERS) {
    const layer = document.createElement('div');
    layer.className = 'bgLayer bgLayer--' + name;
    bgEl.appendChild(layer);
  }

  host.insertBefore(bgEl, host.firstChild);

  // Nothing drifts under reduced motion (the CSS media query disables the
  // animations), so there is nothing to pause — skip the listener in that case.
  if (!reduceMotion()) {
    document.addEventListener('visibilitychange', onVisibility);
  }
}


/***/ }),

/***/ "./src/Roboto-Regular.ttf":
/*!********************************!*\
  !*** ./src/Roboto-Regular.ttf ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc2b5060f7accec5cf74.ttf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/WeatherApp_TOP/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"changes": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/indexChanges.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QyxxSEFBdUM7QUFDbkYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RDtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTLDRDQUE0QztBQUNyRCxTQUFTLDRDQUE0QztBQUNyRDs7QUFFQTtBQUNBLFNBQVM7QUFDVCxTQUFTO0FBQ1Q7O0FBRUE7QUFDQSxTQUFTO0FBQ1QsU0FBUztBQUNUOztBQUVBO0FBQ0EsU0FBUztBQUNULFNBQVM7QUFDVDs7QUFFQTtBQUNBLFNBQVM7QUFDVCxTQUFTO0FBQ1Q7O0FBRUE7QUFDQSxTQUFTLDRCQUE0QjtBQUNyQyxTQUFTLDRCQUE0QjtBQUNyQzs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNULFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNULFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEVBQTRFO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTLDBCQUEwQjtBQUNuQyxVQUFVLDhCQUE4QjtBQUN4QyxVQUFVLDZCQUE2QjtBQUN2QyxXQUFXLDBCQUEwQjtBQUNyQzs7QUFFQTtBQUNBLFNBQVMsMEJBQTBCO0FBQ25DLFVBQVUsNkJBQTZCO0FBQ3ZDLFVBQVUsOEJBQThCO0FBQ3hDLFdBQVcsMEJBQTBCO0FBQ3JDOztBQUVBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxPQUFPLFFBQVEsT0FBTyxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sd0JBQXdCLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sYUFBYSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxVQUFVLE9BQU8sTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxZQUFZLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxNQUFNLFlBQVksTUFBTSxZQUFZLFdBQVcsWUFBWSxNQUFNLFlBQVksTUFBTSxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxZQUFZLE1BQU0sWUFBWSxPQUFPLGFBQWEsV0FBVyxZQUFZLE1BQU0sWUFBWSxNQUFNLE9BQU8sT0FBTyxhQUFhLGFBQWEsTUFBTSxZQUFZLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxNQUFNLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxNQUFNLFlBQVksTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxNQUFNLFlBQVksTUFBTSxZQUFZLGFBQWEsTUFBTSxZQUFZLE1BQU0sWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksTUFBTSxNQUFNLFVBQVUsVUFBVSxPQUFPLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLFlBQVksTUFBTSxZQUFZLE9BQU8sYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLFlBQVksTUFBTSxRQUFRLE9BQU8sYUFBYSxhQUFhLGFBQWEsTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLE9BQU8sYUFBYSxNQUFNLFlBQVksTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLE1BQU0sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxnQ0FBZ0MsaUNBQWlDLE9BQU8sS0FBSyxvQkFBb0IscUJBQXFCLE9BQU8sS0FBSyxzQkFBc0IsdUJBQXVCLE9BQU8sS0FBSyxzQkFBc0IsdUJBQXVCLE9BQU8sS0FBSyxzQkFBc0IsdUJBQXVCLE9BQU8sS0FBSyxnQ0FBZ0MsaUNBQWlDLE9BQU8sWUFBWSxNQUFNLHNCQUFzQix1QkFBdUIsT0FBTyxZQUFZLE1BQU0sb0JBQW9CLHFCQUFxQixPQUFPLFlBQVksUUFBUSxZQUFZLE9BQU8sS0FBSyxPQUFPLE1BQU0sT0FBTyxVQUFVLE1BQU0sTUFBTSxNQUFNLE9BQU8sTUFBTSx3QkFBd0IsV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssT0FBTyxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLFlBQVksTUFBTSx3QkFBd0IsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssT0FBTyxPQUFPLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLFlBQVksTUFBTSx3QkFBd0IsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sT0FBTyxNQUFNLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSx1QkFBdUIsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sU0FBUyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssZ0NBQWdDLGlDQUFpQyxpQ0FBaUMsaUNBQWlDLE9BQU8sS0FBSyxnQ0FBZ0MsaUNBQWlDLGlDQUFpQyxpQ0FBaUMsT0FBTyxZQUFZLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxPQUFPLE1BQU0sTUFBTSxVQUFVLE1BQU0scUNBQXFDLDBCQUEwQixxQ0FBcUMseUJBQXlCLEdBQUcsaU9BQWlPLHNCQUFzQixvQkFBb0Isb0JBQW9CLHFCQUFxQiwyRkFBMkYsR0FBRyxPQUFPLDJCQUEyQixHQUFHLFVBQVUsY0FBYyw4QkFBOEIsdUJBQXVCLGlEQUFpRCx3Q0FBd0MsR0FBRyx3SUFBd0ksd0JBQXdCLDZFQUE2RSx1QkFBdUIsa0JBQWtCLDJCQUEyQiw0QkFBNEIsY0FBYyxxQkFBcUIsbUJBQW1CLHVCQUF1QixHQUFHLGtzQkFBa3NCLHFGQUFxRixvQkFBb0IsYUFBYSxlQUFlLHFCQUFxQix5QkFBeUIscUZBQXFGLHNDQUFzQyxHQUFHLDRDQUE0QyxnQkFBZ0IsdUJBQXVCLHlCQUF5QixHQUFHLDRmQUE0ZixzRkFBc0YsdUJBQXVCLGFBQWEseUJBQXlCLGlDQUFpQyxHQUFHLGtLQUFrSyxjQUFjLGdCQUFnQixjQUFjLEdBQUcsb0dBQW9HLHFGQUFxRixHQUFHLCtCQUErQixjQUFjLGVBQWUsa0JBQWtCLG1CQUFtQix1QkFBdUIsdUdBQXVHLHdEQUF3RCxHQUFHLDhCQUE4QixpQkFBaUIsZUFBZSxrQkFBa0IsbUJBQW1CLHVCQUF1Qix5R0FBeUcsZ0VBQWdFLEdBQUcsdUhBQXVILHlHQUF5RyxzQkFBc0Isd0RBQXdELEdBQUcsc0dBQXNHLGlIQUFpSCxpQkFBaUIsZ0VBQWdFLEdBQUcsMkdBQTJHLDRGQUE0RiwyREFBMkQsR0FBRywrR0FBK0cscUZBQXFGLEdBQUcscUNBQXFDLGFBQWEsa3RCQUFrdEIsMkRBQTJELEdBQUcsb0NBQW9DLGFBQWEsZUFBZSxnQkFBZ0IsaUJBQWlCLHVCQUF1Qix5SUFBeUksR0FBRyw0SEFBNEgsZ3VCQUFndUIsd0JBQXdCLGlCQUFpQixtRUFBbUUsR0FBRyw0SEFBNEgseVJBQXlSLDBEQUEwRCw2REFBNkQsR0FBRyxpSEFBaUgsOEZBQThGLDJEQUEyRCxHQUFHLDhKQUE4SixxRkFBcUYsR0FBRyxnQ0FBZ0MsYUFBYSxlQUFlLGtCQUFrQixtQkFBbUIsdUJBQXVCLHdHQUF3RywwREFBMEQsR0FBRywrQkFBK0IsZ0JBQWdCLGdCQUFnQixrQkFBa0IsbUJBQW1CLHVCQUF1Qix5R0FBeUcsa0VBQWtFLEdBQUcseUhBQXlILDJHQUEyRyx1QkFBdUIsa0VBQWtFLEdBQUcsc0hBQXNILDBHQUEwRyxzQkFBc0IsMERBQTBELEdBQUcsZ0dBQWdHLDhGQUE4RiwyREFBMkQsR0FBRyw2SkFBNkoscUZBQXFGLEdBQUcsOEJBQThCLGFBQWEsZUFBZSxrQkFBa0IsbUJBQW1CLHVCQUF1Qix5R0FBeUcsMERBQTBELEdBQUcsNkJBQTZCLGFBQWEsd0hBQXdILDJDQUEyQyxHQUFHLDhHQUE4RywwR0FBMEcsc0JBQXNCLGtFQUFrRSxHQUFHLDBIQUEwSCx5SEFBeUgsZ0RBQWdELEdBQUcsbUhBQW1ILDhGQUE4RiwwREFBMEQsR0FBRyxrRkFBa0YscUZBQXFGLEdBQUcsMERBQTBELGFBQWEscWlCQUFxaUIsOEJBQThCLEdBQUcsOEJBQThCLDBDQUEwQyxHQUFHLDZCQUE2QixpQkFBaUIsMENBQTBDLEdBQUcscUhBQXFILGl0QkFBaXRCLDhCQUE4QixzQkFBc0IsaUJBQWlCLDBDQUEwQyxHQUFHLDRHQUE0Ryx1WEFBdVgsOEJBQThCLDBEQUEwRCx5Q0FBeUMsR0FBRyx1SEFBdUgsZ0JBQWdCLDZIQUE2SCwyREFBMkQsR0FBRyxpR0FBaUcscUZBQXFGLEdBQUcsNkJBQTZCLGFBQWEseVBBQXlQLHdEQUF3RCxHQUFHLHdHQUF3RyxrSUFBa0ksc0JBQXNCLGlCQUFpQixnRUFBZ0UsR0FBRyx1R0FBdUcscUlBQXFJLHNCQUFzQix3REFBd0QsR0FBRyxtR0FBbUcsZ0JBQWdCLDhGQUE4RiwyREFBMkQsR0FBRyxzQkFBc0IsV0FBVyw0Q0FBNEMsZUFBZSxXQUFXLDRDQUE0QyxhQUFhLEdBQUcsMEJBQTBCLFdBQVcsZUFBZSxXQUFXLGFBQWEsR0FBRyx3QkFBd0IsV0FBVywyQkFBMkIsV0FBVyw2QkFBNkIsR0FBRyx1QkFBdUIsV0FBVywyQkFBMkIsV0FBVyxpQ0FBaUMsR0FBRyx1QkFBdUIsV0FBVyw4QkFBOEIsV0FBVywyQkFBMkIsR0FBRyxzQkFBc0IsV0FBVyw0QkFBNEIsZUFBZSxXQUFXLDRCQUE0QixhQUFhLEdBQUcsK0dBQStHLFdBQVcsMkJBQTJCLFdBQVcsa0NBQWtDLEdBQUcsdUdBQXVHLFdBQVcsZ0JBQWdCLFdBQVcsYUFBYSxHQUFHLDZLQUE2SyxpQ0FBaUMsR0FBRyx5SkFBeUosd0VBQXdFLHNCQUFzQixLQUFLLEdBQUcsd1FBQXdRLHdCQUF3Qiw0REFBNEQsa0JBQWtCLDJCQUEyQixjQUFjLEdBQUcsd0tBQXdLLGdCQUFnQixHQUFHLGdCQUFnQixtQkFBbUIsZ0JBQWdCLGlCQUFpQixzQkFBc0IsR0FBRyxtQkFBbUIsc0JBQXNCLDBCQUEwQiwyQkFBMkIsR0FBRyx3RUFBd0Usd0JBQXdCLG9CQUFvQixHQUFHLGtCQUFrQix1QkFBdUIsNkJBQTZCLG9CQUFvQix3QkFBd0IsR0FBRyxxQkFBcUIseUJBQXlCLG9CQUFvQiwwQkFBMEIsaUJBQWlCLEdBQUcsaUJBQWlCLDBCQUEwQixvQkFBb0IsR0FBRyxnREFBZ0Qsa0JBQWtCLDJCQUEyQix3QkFBd0IsYUFBYSx1QkFBdUIsR0FBRyw0RkFBNEYsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsY0FBYyxHQUFHLG1CQUFtQiw2QkFBNkIsb0JBQW9CLHdCQUF3Qiw4QkFBOEIsd0JBQXdCLEdBQUcsa0xBQWtMLGtCQUFrQixrQ0FBa0MseUJBQXlCLHFCQUFxQixHQUFHLGNBQWMsNkJBQTZCLG9CQUFvQix3QkFBd0IscUJBQXFCLGlCQUFpQiw0QkFBNEIsd0JBQXdCLG9CQUFvQixHQUFHLHFCQUFxQiw0QkFBNEIsdUJBQXVCLEdBQUcsa0tBQWtLLDRGQUE0RixrQkFBa0Isd0JBQXdCLDRCQUE0QixjQUFjLHNCQUFzQixHQUFHLG9CQUFvQixrQkFBa0IsR0FBRyxZQUFZLGtCQUFrQix3QkFBd0IsNEJBQTRCLGVBQWUsaUJBQWlCLHFCQUFxQix3QkFBd0Isb0JBQW9CLEdBQUcsa0JBQWtCLG1CQUFtQixHQUFHLGdCQUFnQixtQkFBbUIsZ0JBQWdCLGlCQUFpQixHQUFHLHdGQUF3Rix3QkFBd0Isb0VBQW9FLGFBQWEsR0FBRyxVQUFVLGVBQWUsZ0JBQWdCLHVCQUF1Qix3QkFBd0Isb0JBQW9CLCtCQUErQixHQUFHLGlCQUFpQix3QkFBd0IsR0FBRyxxSEFBcUgsZ0RBQWdELHVCQUF1Qiw4QkFBOEIsZ0NBQWdDLGdCQUFnQixrQkFBa0IsMkJBQTJCLHdCQUF3QixhQUFhLHVCQUF1Qiw4QkFBOEIsa0NBQWtDLHVCQUF1QiwrQ0FBK0Msd0JBQXdCLEdBQUcsME1BQTBNLGdCQUFnQix1QkFBdUIsY0FBYyxnQ0FBZ0MsYUFBYSxjQUFjLHdCQUF3QixHQUFHLDRCQUE0QixjQUFjLGdDQUFnQyxrRUFBa0UsR0FBRywyQkFBMkIsMEJBQTBCLGdDQUFnQyxvRUFBb0UsR0FBRyx5QkFBeUIsdUJBQXVCLG9CQUFvQixHQUFHLDRCQUE0QixrQkFBa0IsYUFBYSxHQUFHLG1EQUFtRCx5QkFBeUIsb0JBQW9CLHNCQUFzQixrQ0FBa0MsdUJBQXVCLG9CQUFvQixHQUFHLDJCQUEyQixxQkFBcUIsd0JBQXdCLEdBQUcsaUNBQWlDLHVCQUF1QixHQUFHLDJCQUEyQiw0QkFBNEIseUJBQXlCLDhCQUE4QixHQUFHLGlDQUFpQyw2QkFBNkIsR0FBRyw0REFBNEQsc0NBQXNDLHFCQUFxQixvQkFBb0IscUJBQXFCLEdBQUcsdUJBQXVCLG9CQUFvQix1QkFBdUIsR0FBRyw4REFBOEQsa0JBQWtCLDBDQUEwQyxjQUFjLGdCQUFnQixxQkFBcUIsR0FBRyxXQUFXLGtCQUFrQiwyQkFBMkIsd0JBQXdCLGFBQWEsc0JBQXNCLGtDQUFrQyx1QkFBdUIsR0FBRyxpQkFBaUIsNkJBQTZCLG9CQUFvQix3QkFBd0Isd0JBQXdCLEdBQUcsaUJBQWlCLG9CQUFvQix1QkFBdUIsR0FBRyxxQ0FBcUMsd0JBQXdCLDREQUE0RCxrQkFBa0IsY0FBYyxnQkFBZ0IsR0FBRyxzREFBc0QsMkpBQTJKLHVCQUF1QixZQUFZLGlCQUFpQixHQUFHLGtCQUFrQixnQkFBZ0IsdUJBQXVCLDZCQUE2QixxQkFBcUIsb0ZBQW9GLDRCQUE0QixrQ0FBa0MsdUJBQXVCLEdBQUcsK0JBQStCLHdCQUF3QixHQUFHLHdCQUF3QixrQkFBa0IsK0JBQStCLEdBQUcsMk1BQTJNLCtCQUErQixxQ0FBcUMsR0FBRywyR0FBMkcsMEJBQTBCLEdBQUcseUtBQXlLLHVCQUF1QixjQUFjLFlBQVksYUFBYSxnQkFBZ0Isc0JBQXNCLHFCQUFxQiw4QkFBOEIsbUNBQW1DLHFCQUFxQiwrQkFBK0IsR0FBRyx5QkFBeUIsa0JBQWtCLEdBQUcsc0JBQXNCLGtCQUFrQiwwQkFBMEIsYUFBYSx1QkFBdUIsNkJBQTZCLG9CQUFvQixHQUFHLHdEQUF3RCw0QkFBNEIsR0FBRyxzQkFBc0Isb0JBQW9CLHVCQUF1QixHQUFHLHlCQUF5QixvQkFBb0Isd0JBQXdCLEdBQUcsbUJBQW1CLHVCQUF1Qiw2QkFBNkIsb0JBQW9CLHdCQUF3Qix5QkFBeUIsNEJBQTRCLGlCQUFpQix1QkFBdUIsb0JBQW9CLEdBQUcseUJBQXlCLDZCQUE2QixHQUFHLCtCQUErQixVQUFVLGdCQUFnQix5QkFBeUIsS0FBSyxvQkFBb0IsZ0JBQWdCLEtBQUssNmZBQTZmLDhDQUE4QyxLQUFLLCtCQUErQiw4Q0FBOEMsS0FBSyxnQ0FBZ0MsV0FBVywwQkFBMEIsYUFBYSxZQUFZLDhCQUE4QixhQUFhLFlBQVksNkJBQTZCLGFBQWEsYUFBYSwwQkFBMEIsYUFBYSxLQUFLLGdDQUFnQyxXQUFXLDBCQUEwQixhQUFhLFlBQVksNkJBQTZCLGFBQWEsWUFBWSw4QkFBOEIsYUFBYSxhQUFhLDBCQUEwQixhQUFhLEtBQUssb0NBQW9DLGlEQUFpRCxvQkFBb0IsS0FBSyxnQkFBZ0IsZUFBZSxLQUFLLGFBQWEsd0JBQXdCLEtBQUssbUJBQW1CLHNCQUFzQixLQUFLLEdBQUcsMlJBQTJSLHlEQUF5RCxzQkFBc0IsS0FBSyxHQUFHLHFCQUFxQjtBQUMxdGpDO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDdjNCMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDekJhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQSxnRUFBZ0U7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFMkM7O0FBRTNDO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsc0JBQXNCOztBQUV0QjtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaLFlBQVk7QUFDWixVQUFVO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCO0FBQzVCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxvREFBYTtBQUNqQixJQUFJO0FBQ0osSUFBSSxvREFBYTtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixPQUFPO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0Esd0NBQXdDO0FBQ3hDLDREQUE0RDtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7O0FBRUEsZ0VBQWdFO0FBQ2hFO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQiw0QkFBNEI7QUFDbEQsY0FBYztBQUNkOztBQUVBO0FBQ0EsMkJBQTJCLFVBQVU7QUFDckM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrREFBK0Q7QUFDL0Q7QUFDQTtBQUNBLHdDQUF3QztBQUN4Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQjtBQUNuQjs7QUFFQTtBQUNBLGdDQUFnQyxxQkFBcUI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCO0FBQ3RCOztBQUVBO0FBQ0EsWUFBWTs7QUFFWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBOztBQUVBO0FBQ0EsMERBQTBELGVBQWU7QUFDekUsc0RBQXNELGVBQWU7QUFDckU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZCxjQUFjO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0EsWUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZXcUI7QUFDd0M7QUFDbEI7QUFDRztBQUNOOztBQUV4QztBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixVQUFVOztBQUVoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNPO0FBQ1A7O0FBRUEsRUFBRSx3REFBWTs7QUFFZCxZQUFZLDREQUFnQjtBQUM1QjtBQUNBLGNBQWM7O0FBRWQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUUscURBQVk7O0FBRWQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsaUJBQWlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxZQUFZO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ087QUFDUCxxQkFBcUI7O0FBRXJCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxvREFBYTtBQUNqQjtBQUNBLFFBQVEsMkRBQVc7QUFDbkI7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0Q7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsK0JBQStCO0FBQzFELGtCQUFrQixvQkFBb0I7O0FBRXRDO0FBQ0E7QUFDQSxNQUFNLG9EQUFhO0FBQ25CLGtDQUFrQyxVQUFVO0FBQzVDO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHOztBQUVILG9DQUFvQztBQUNwQyxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkU7QUFDM0U7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQSxtQ0FBbUM7O0FBRW5DO0FBQ0E7O0FBRUEseUJBQXlCLG9CQUFvQjs7QUFFN0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaURBQWlELHdCQUF3Qjs7QUFFekU7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0Esa0JBQWtCLGtCQUFrQjtBQUNwQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osbURBQW1ELGlDQUFpQztBQUNwRjtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCLHlCQUF5QiwrQkFBK0I7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlEQUFpRDtBQUNqRDtBQUNPO0FBQ1A7QUFDQSxvQkFBb0I7QUFDcEI7O0FBRU87QUFDUDtBQUNBLG9CQUFvQjtBQUNwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4VHFCO0FBQ3dEOztBQUU3RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjs7QUFFckI7QUFDQTtBQUNBLE1BQU0sZ0VBQWM7QUFDcEI7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLHdDQUF3QztBQUNqRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMENBQTBDLGNBQWM7O0FBRXhEO0FBQ0EsK0NBQStDLGdCQUFnQjtBQUMvRDs7QUFFQTs7QUFFQSxNQUFNLDREQUFVOztBQUVoQjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU0sOERBQVk7QUFDbEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0IsNEJBQTRCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYzs7QUFFZDs7QUFFQTtBQUNBLDBDQUEwQyxjQUFjOztBQUV4RDtBQUNBLCtDQUErQyxnQkFBZ0I7QUFDL0Q7O0FBRUE7O0FBRUE7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZJTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksOEJBQThCO0FBQ2xDLElBQUksOEJBQThCO0FBQ2xDLElBQUksOEJBQThCO0FBQ2xDLElBQUksOEJBQThCO0FBQ2xDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBOztBQUVBLHlCQUF5Qjs7QUFFekI7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCLHlDQUF5QztBQUN6QyxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQjs7QUFFbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixrQkFBa0I7QUFDcEM7QUFDQSwyQkFBMkIsaUJBQWlCO0FBQzVDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ087QUFDUCxhQUFhLFVBQVU7O0FBRXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILG9DQUFvQyw4REFBOEQ7QUFDbEcsb0NBQW9DLDJEQUEyRDs7QUFFL0Y7QUFDQTtBQUNBOztBQUVBLDBCQUEwQiw4REFBOEQ7QUFDeEYsMkJBQTJCLCtEQUErRDtBQUMxRiw0QkFBNEIsNEJBQTRCO0FBQ3hELHdCQUF3Qix1QkFBdUI7QUFDL0MsMEJBQTBCLHdCQUF3QjtBQUNsRCx3QkFBd0Isc0JBQXNCOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QjtBQUM1Qjs7QUFFQSw4Q0FBOEMsa0NBQWtDO0FBQ3pFO0FBQ1AsY0FBYzs7QUFFZDtBQUNBO0FBQ0EsWUFBWTs7QUFFWjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsT0FBTztBQUN6QiwrQkFBK0I7QUFDL0IsK0JBQStCO0FBQy9CO0FBQ0EscUJBQXFCLFVBQVU7QUFDL0I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLE9BQU8sT0FBTyxXQUFXLDhCQUE4Qjs7QUFFekU7QUFDQSxrQkFBa0IsZ0JBQWdCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsa0JBQWtCO0FBQ3JDO0FBQ0Esc0JBQXNCOztBQUV0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isd0RBQXdEO0FBQ3ZGO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1UUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRCwrQ0FBK0M7QUFDL0MsaUNBQWlDO0FBQ2pDLHlCQUF5QjtBQUN6Qix5QkFBeUI7QUFDekIsbUJBQW1CO0FBQ25COztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ087QUFDUDtBQUNBLHNDQUFzQztBQUN0Qyx5QkFBeUI7QUFDekI7QUFDQSxjQUFjO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBO0FBQ087QUFDUCxjQUFjLFVBQVU7QUFDeEI7QUFDQSxlQUFlOztBQUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCOztBQUUxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDN0dBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1dDQUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL3NyYy9mYXZvdXJpdGVzLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL3NyYy9pbmRleENoYW5nZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vc3JjL2xvZ2ljLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL3NyYy9yaWJib24uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vc3JjL3NreS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9Sb2JvdG8tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICBmb250LXdlaWdodDogMzAwIDQwMDtcbn1cblxuLyogUGFsZXR0ZTpcbiAgIGdyb3VuZCAgIzEyMTgxRiAgIHJ1bGVzICAjMjYzMTNCXG4gICB0ZXh0ICAgICNFQUVFRjIgKHByaW1hcnkpIC8gIzhDQTBBRSAobXV0ZWQpXG4gICBUaGUgdGVtcGVyYXR1cmUgY29sb3VycyBsaXZlIGluIHJpYmJvbi5qcyAodGhlIGN1cnZlIGlzIGNvbG91cmVkIGJ5IHRoZVxuICAgdGVtcGVyYXR1cmUgc2NhbGFyLCBub3QgYnkgQ1NTKS4gKi9cbjpyb290IHtcbiAgLS1ncm91bmQ6ICMxMjE4MUY7XG4gIC0tcnVsZTogIzI2MzEzQjtcbiAgLS10ZXh0OiAjRUFFRUYyO1xuICAtLW11dGVkOiAjOENBMEFFO1xuICAtLW1vbm86ICdTRk1vbm8tUmVndWxhcicsICdTRiBNb25vJywgJ01lbmxvJywgJ0NvbnNvbGFzJywgJ0xpYmVyYXRpb24gTW9ubycsIG1vbm9zcGFjZTtcbn1cblxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdyb3VuZCk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWY7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG4vKiBkdmggKG5vdCB2aCk6IG9uIGlPUyBTYWZhcmkgdmggcmVzb2x2ZXMgdG8gdGhlIHRhbGwgdmlld3BvcnQgYW5kIHBhcmtzIHRoZVxuICAgYm90dG9tIG9mIHRoZSBsYXlvdXQgdW5kZXIgdGhlIFVSTCBiYXIuICovXG4jYXBwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiBzdGFja3MgdGhlIGNvbnN0cmFpbmVkIGNvbHVtbiBhYm92ZSB0aGUgZml4ZWQgLndlYXRoZXJCZyAqL1xuICB6LWluZGV4OiAxO1xuICBtaW4taGVpZ2h0OiAxMDBkdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDI4cHg7XG4gIG1heC13aWR0aDogNzIwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAzMnB4IDIwcHg7XG59XG5cbi8qIENvbmRpdGlvbi1iYXNlZCBiYWNrZ3JvdW5kLiBza3kuanMgbW91bnRzIGEgc2luZ2xlIFxcYC53ZWF0aGVyQmdcXGAgYXMgdGhlIGZpcnN0XG4gICBjaGlsZCBvZiAjYXBwIGFuZCBzd2FwcyBhIFxcYGJnLTxjYXRlZ29yeT5cXGAgY2xhc3Mgb250byBpdCBwZXIgZmV0Y2gsIGtleWVkIG9mZlxuICAgdGhlIGN1cnJlbnQgY29uZGl0aW9uIHRleHQgKGNhdGVnb3J5Rm9yKCkgaW4gc2t5LmpzKS4gSXQgaXMgXFxgZml4ZWRcXGAgc28gaXRcbiAgIHNwYW5zIHRoZSB3aG9sZSBicm93c2VyIHdpbmRvdyBvbiBkZXNrdG9wIHdoaWxlICNhcHAgc3RheXMgYSBjb25zdHJhaW5lZFxuICAgY2VudHJlZCBjb2x1bW4gYWJvdmUgaXQgKHotaW5kZXgpLiBFYWNoIGNhdGVnb3J5IHBhaW50cyBhIGdyYWRpZW50IGJhc2Ugb24gdGhlXG4gICBlbGVtZW50IHBsdXMgZGVjb3JhdGl2ZSBsYXllcnMgKHN1biwgbW9vbiArIHN0YXJzLCBkcmlmdGluZyBjbG91ZHMsIGZsYWtlcyxcbiAgIGhhemUpIG9uIHRoZSB0d28gcHNldWRvLWVsZW1lbnRzLiBvdmVyZmxvdzogaGlkZGVuIGNsaXBzIHRob3NlIGxheWVycyB0byB0aGVcbiAgIHZpZXdwb3J0IHNvIGFuIG92ZXJzaXplZCBjbG91ZCBjYW4ndCBzcGlsbCBhIHNjcm9sbGJhci4gVGhlIGdyYWRpZW50cyBjcm9zcy1cbiAgIGZhZGUgKHRyYW5zaXRpb246IGJhY2tncm91bmQpIHdoZW4gdGhlIGNhdGVnb3J5IGNoYW5nZXM7IHRoZSBkZWNvcmF0aXZlXG4gICBtb3Rpb24gbGl2ZXMgaW4gdGhlIHBlci1jYXRlZ29yeSBrZXlmcmFtZXMgYmVsb3cuICovXG4ud2VhdGhlckJnIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBpbnNldDogMDtcbiAgei1pbmRleDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMxYjI4MzYgMCUsICMxNDFkMjkgNTUlLCB2YXIoLS1ncm91bmQpIDEwMCUpO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDYwMG1zIGVhc2U7XG59XG5cbi53ZWF0aGVyQmc6OmJlZm9yZSxcbi53ZWF0aGVyQmc6OmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi8qIERlcHRoIHBsYW5lcyBtb3VudGVkIGJ5IHNreS5qcyBhcyBjaGlsZCBkaXZzIChmYXIsIG1pZCwgbmVhciwgZ3JvdW5kKS4gVGhleVxuICAgZ2l2ZSBlYWNoIGNhdGVnb3J5IG1vcmUgdGhhbiB0aGUgdHdvIHBzZXVkby1lbGVtZW50cyBjYW4gaG9sZDogYSBjYXRlZ29yeVxuICAgc3RhY2tzIGEgc3Vic2V0IG9mIHRoZW0g4oCUIGEgYmx1cnJlZCBmYXIgcGxhbmUsIGEgbWlkIHBsYW5lLCBhIHNoYXJwIG5lYXIgcGxhbmVcbiAgIHdpdGggYSBnbG93LCBhbmQgYSBncm91bmQtbGlnaHRpbmcgYWNjZW50IGF0IHRoZSBib3R0b20g4oCUIHNvIHRoZSBpbWFnZXJ5IHJlYWRzXG4gICBhcyBkZXB0aCByYXRoZXIgdGhhbiBhIHNpbmdsZSBmbGF0IHdhc2guIEFueSBwbGFuZSBhIGNhdGVnb3J5IGRvZXNuJ3QgcGFpbnRcbiAgIHN0YXlzIHRyYW5zcGFyZW50LiBUaGV5IHNpdCBiZXR3ZWVuIDo6YmVmb3JlIChiZWhpbmQpIGFuZCA6OmFmdGVyIChpbiBmcm9udClcbiAgIGluIHBhaW50IG9yZGVyOyBwZXItY2F0ZWdvcnkgcnVsZXMgbGF5ZXIgdGhlbSBleHBsaWNpdGx5IHdoZXJlIGl0IG1hdHRlcnMuICovXG4ud2VhdGhlckJnID4gLmJnTGF5ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGluc2V0OiAwO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLyogR3JvdW5kIGFjY2VudCBzaGFyZWQgc2hhcGU6IGEgc29mdCBiYW5kIG9mIGxpZ2h0IGh1Z2dpbmcgdGhlIGJvdHRvbSBlZGdlLlxuICAgRWFjaCBjYXRlZ29yeSB0aW50cyBpdCB2aWEgLS1ncm91bmQtZ2xvdy4gKi9cbi53ZWF0aGVyQmcgPiAuYmdMYXllci0tZ3JvdW5kIHtcbiAgdG9wOiBhdXRvO1xuICBoZWlnaHQ6IDM0JTtcbiAgYm90dG9tOiAwO1xufVxuXG4vKiBTVU5OWSDigJQgd2FybSBkYXl0aW1lIHNreSB3aXRoIGEgc29mdCBzdW4gZ2xvdyB0aGF0IHNsb3dseSBicmVhdGhlcy4gKi9cbi53ZWF0aGVyQmcuYmctc3Vubnkge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMmM0YzcyIDAlLCAjMWEyYzQwIDU1JSwgdmFyKC0tZ3JvdW5kKSAxMDAlKTtcbn1cbi53ZWF0aGVyQmcuYmctc3Vubnk6OmJlZm9yZSB7XG4gIHRvcDogLTEyJTtcbiAgcmlnaHQ6IC02JTtcbiAgd2lkdGg6IDQ2dm1heDtcbiAgaGVpZ2h0OiA0NnZtYXg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCBjZW50ZXIsIHJnYmEoMjE3LCAxNjQsIDY1LCAwLjQ1KSwgcmdiYSgyMTcsIDE2NCwgNjUsIDApIDY4JSk7XG4gIGFuaW1hdGlvbjogYmdTdW4gMTRzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcbn1cbi53ZWF0aGVyQmcuYmctc3Vubnk6OmFmdGVyIHtcbiAgYm90dG9tOiAtMTglO1xuICBsZWZ0OiAtMTIlO1xuICB3aWR0aDogNDB2bWF4O1xuICBoZWlnaHQ6IDQwdm1heDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IGNlbnRlciwgcmdiYSgxMTEsIDE2OCwgMTYwLCAwLjE4KSwgcmdiYSgxMTEsIDE2OCwgMTYwLCAwKSA3MCUpO1xuICBhbmltYXRpb246IGJnU3VuIDE4cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGUtcmV2ZXJzZTtcbn1cbi8qIGZhcjogYSBoaWdoLCBibHVycmVkIHdhcm0gaGF6ZSBiYW5kIHRoYXQgc2xvd2x5IGJyZWF0aGVzIGJlaGluZCB0aGUgc3VuLiAqL1xuLndlYXRoZXJCZy5iZy1zdW5ueSA+IC5iZ0xheWVyLS1mYXIge1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoMTIwJSA2MCUgYXQgNzglIDQlLCByZ2JhKDIxNywgMTY0LCA2NSwgMC4yMiksIHJnYmEoMjE3LCAxNjQsIDY1LCAwKSA2MCUpO1xuICBmaWx0ZXI6IGJsdXIoNnB4KTtcbiAgYW5pbWF0aW9uOiBiZ1N1biAyMnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xufVxuLyogbWlkOiBmYWludCBkaWFnb25hbCBsaWdodCBzaGFmdHMgc3BpbGxpbmcgZnJvbSB0aGUgc3VuLiAqL1xuLndlYXRoZXJCZy5iZy1zdW5ueSA+IC5iZ0xheWVyLS1taWQge1xuICBiYWNrZ3JvdW5kOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KDY0ZGVnLCByZ2JhKDIxNywgMTY0LCA2NSwgMC4wNSkgMCAycHgsIHJnYmEoMjE3LCAxNjQsIDY1LCAwKSAycHggMjZweCk7XG4gIG9wYWNpdHk6IDAuNztcbiAgYW5pbWF0aW9uOiBiZ1N1biAxNnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlLXJldmVyc2U7XG59XG4vKiBncm91bmQ6IHdhcm0gbGlnaHQgcG9vbGluZyBhbG9uZyB0aGUgYm90dG9tIG9mIHRoZSBzY2VuZS4gKi9cbi53ZWF0aGVyQmcuYmctc3VubnkgPiAuYmdMYXllci0tZ3JvdW5kIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMjE3LCAxNjQsIDY1LCAwLjE2KSwgcmdiYSgyMTcsIDE2NCwgNjUsIDApIDEwMCUpO1xuICBhbmltYXRpb246IGJnR3JvdW5kIDEycyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG5cbi8qIENMRUFSIE5JR0hUIOKAlCBkZWVwIHNreSwgYSBsb3cgbW9vbiBnbG93LCBhbmQgYSBmaWVsZCBvZiB0d2lua2xpbmcgc3RhcnMuICovXG4ud2VhdGhlckJnLmJnLWNsZWFyLW5pZ2h0IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzEwMWEyYyAwJSwgIzBkMTQyMCA1NSUsIHZhcigtLWdyb3VuZCkgMTAwJSk7XG59XG4ud2VhdGhlckJnLmJnLWNsZWFyLW5pZ2h0OjpiZWZvcmUge1xuICBpbnNldDogMDtcbiAgYmFja2dyb3VuZC1pbWFnZTpcbiAgICByYWRpYWwtZ3JhZGllbnQoMS42cHggMS42cHggYXQgMTglIDI0JSwgcmdiYSgyMzQsIDIzOCwgMjQyLCAwLjkpLCB0cmFuc3BhcmVudCA2MCUpLFxuICAgIHJhZGlhbC1ncmFkaWVudCgxLjJweCAxLjJweCBhdCA3MiUgMTYlLCByZ2JhKDIzNCwgMjM4LCAyNDIsIDAuOCksIHRyYW5zcGFyZW50IDYwJSksXG4gICAgcmFkaWFsLWdyYWRpZW50KDEuNHB4IDEuNHB4IGF0IDQyJSA2MiUsIHJnYmEoMjM0LCAyMzgsIDI0MiwgMC43NSksIHRyYW5zcGFyZW50IDYwJSksXG4gICAgcmFkaWFsLWdyYWRpZW50KDFweCAxcHggYXQgODYlIDQ2JSwgcmdiYSgyMzQsIDIzOCwgMjQyLCAwLjcpLCB0cmFuc3BhcmVudCA2MCUpLFxuICAgIHJhZGlhbC1ncmFkaWVudCgxLjNweCAxLjNweCBhdCAzMCUgODIlLCByZ2JhKDIzNCwgMjM4LCAyNDIsIDAuNyksIHRyYW5zcGFyZW50IDYwJSksXG4gICAgcmFkaWFsLWdyYWRpZW50KDFweCAxcHggYXQgNjAlIDc0JSwgcmdiYSgyMzQsIDIzOCwgMjQyLCAwLjYpLCB0cmFuc3BhcmVudCA2MCUpLFxuICAgIHJhZGlhbC1ncmFkaWVudCgxLjVweCAxLjVweCBhdCA4JSA1NCUsIHJnYmEoMjM0LCAyMzgsIDI0MiwgMC44KSwgdHJhbnNwYXJlbnQgNjAlKSxcbiAgICByYWRpYWwtZ3JhZGllbnQoMXB4IDFweCBhdCA5MiUgNzglLCByZ2JhKDIzNCwgMjM4LCAyNDIsIDAuNjUpLCB0cmFuc3BhcmVudCA2MCUpO1xuICBhbmltYXRpb246IGJnVHdpbmtsZSA1cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG4ud2VhdGhlckJnLmJnLWNsZWFyLW5pZ2h0OjphZnRlciB7XG4gIHRvcDogMTIlO1xuICByaWdodDogMTQlO1xuICB3aWR0aDogOTJweDtcbiAgaGVpZ2h0OiA5MnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMzglIDM4JSwgcmdiYSgyMzQsIDIzOCwgMjQyLCAwLjg1KSwgcmdiYSgxNDAsIDE2MCwgMTc0LCAwLjM1KSA2MiUsIHJnYmEoMTQwLCAxNjAsIDE3NCwgMCkgNzIlKTtcbn1cbi8qIGZhcjogYSBkZW5zZSBmaWVsZCBvZiB0aW55LCBkaW0sIHNsaWdodGx5IGJsdXJyZWQgc3RhcnMg4oCUIHRoZSBkZWVwIHNreS4gKi9cbi53ZWF0aGVyQmcuYmctY2xlYXItbmlnaHQgPiAuYmdMYXllci0tZmFyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTpcbiAgICByYWRpYWwtZ3JhZGllbnQoMC44cHggMC44cHggYXQgMTIlIDMwJSwgcmdiYSgyMzQsIDIzOCwgMjQyLCAwLjUpLCB0cmFuc3BhcmVudCA2MCUpLFxuICAgIHJhZGlhbC1ncmFkaWVudCgwLjdweCAwLjdweCBhdCAzNCUgMTIlLCByZ2JhKDIzNCwgMjM4LCAyNDIsIDAuNDUpLCB0cmFuc3BhcmVudCA2MCUpLFxuICAgIHJhZGlhbC1ncmFkaWVudCgwLjhweCAwLjhweCBhdCA1MiUgNDAlLCByZ2JhKDIzNCwgMjM4LCAyNDIsIDAuNSksIHRyYW5zcGFyZW50IDYwJSksXG4gICAgcmFkaWFsLWdyYWRpZW50KDAuNnB4IDAuNnB4IGF0IDY4JSAyNiUsIHJnYmEoMjM0LCAyMzgsIDI0MiwgMC40KSwgdHJhbnNwYXJlbnQgNjAlKSxcbiAgICByYWRpYWwtZ3JhZGllbnQoMC44cHggMC44cHggYXQgODAlIDUyJSwgcmdiYSgyMzQsIDIzOCwgMjQyLCAwLjQ1KSwgdHJhbnNwYXJlbnQgNjAlKSxcbiAgICByYWRpYWwtZ3JhZGllbnQoMC43cHggMC43cHggYXQgMjQlIDY2JSwgcmdiYSgyMzQsIDIzOCwgMjQyLCAwLjQpLCB0cmFuc3BhcmVudCA2MCUpLFxuICAgIHJhZGlhbC1ncmFkaWVudCgwLjhweCAwLjhweCBhdCA0NiUgODQlLCByZ2JhKDIzNCwgMjM4LCAyNDIsIDAuNDUpLCB0cmFuc3BhcmVudCA2MCUpLFxuICAgIHJhZGlhbC1ncmFkaWVudCgwLjZweCAwLjZweCBhdCA3NCUgNzglLCByZ2JhKDIzNCwgMjM4LCAyNDIsIDAuNCksIHRyYW5zcGFyZW50IDYwJSk7XG4gIGZpbHRlcjogYmx1cigwLjVweCk7XG4gIG9wYWNpdHk6IDAuNztcbiAgYW5pbWF0aW9uOiBiZ1R3aW5rbGUgN3MgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlLXJldmVyc2U7XG59XG4vKiBuZWFyOiBhIGZldyBsYXJnZSBmb3JlZ3JvdW5kIHN0YXJzLCBlYWNoIHdpdGggYSBzb2Z0IGRyb3Atc2hhZG93IGdsb3cuICovXG4ud2VhdGhlckJnLmJnLWNsZWFyLW5pZ2h0ID4gLmJnTGF5ZXItLW5lYXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOlxuICAgIHJhZGlhbC1ncmFkaWVudCgyLjRweCAyLjRweCBhdCAyMiUgMjAlLCByZ2JhKDIzNCwgMjM4LCAyNDIsIDEpLCB0cmFuc3BhcmVudCA2MiUpLFxuICAgIHJhZGlhbC1ncmFkaWVudCgycHggMnB4IGF0IDY0JSA1OCUsIHJnYmEoMjM0LCAyMzgsIDI0MiwgMC45NSksIHRyYW5zcGFyZW50IDYyJSksXG4gICAgcmFkaWFsLWdyYWRpZW50KDIuNnB4IDIuNnB4IGF0IDg0JSAzMiUsIHJnYmEoMjM0LCAyMzgsIDI0MiwgMSksIHRyYW5zcGFyZW50IDYyJSk7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDRweCByZ2JhKDIzNCwgMjM4LCAyNDIsIDAuNykpO1xuICBhbmltYXRpb246IGJnVHdpbmtsZSAzLjRzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcbn1cbi8qIGdyb3VuZDogY29vbCBtb29ubGlnaHQgcG9vbGluZyBmYWludGx5IGFsb25nIHRoZSBob3Jpem9uLiAqL1xuLndlYXRoZXJCZy5iZy1jbGVhci1uaWdodCA+IC5iZ0xheWVyLS1ncm91bmQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgxNDAsIDE2MCwgMTc0LCAwLjE0KSwgcmdiYSgxNDAsIDE2MCwgMTc0LCAwKSAxMDAlKTtcbiAgYW5pbWF0aW9uOiBiZ0dyb3VuZCAxNHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xufVxuXG4vKiBDTE9VRFkgKGFsc28gb3ZlcmNhc3QsIHBhcnRseSwgYW5kIHRoZSBuZXV0cmFsIGZhbGxiYWNrKSDigJQgY29vbCBncmV5LWJsdWUgd2l0aFxuICAgdHdvIHNvZnQgY2xvdWQgbWFzc2VzIGRyaWZ0aW5nIGxhdGVyYWxseS4gKi9cbi53ZWF0aGVyQmcuYmctY2xvdWR5IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzIzMzAzZiAwJSwgIzE3MjIzMCA1NSUsIHZhcigtLWdyb3VuZCkgMTAwJSk7XG59XG4ud2VhdGhlckJnLmJnLWNsb3VkeTo6YmVmb3JlIHtcbiAgdG9wOiAxNCU7XG4gIGxlZnQ6IC0yMCU7XG4gIHdpZHRoOiA1NXZtYXg7XG4gIGhlaWdodDogMjR2bWF4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgY2VudGVyLCByZ2JhKDE0MCwgMTYwLCAxNzQsIDAuMiksIHJnYmEoMTQwLCAxNjAsIDE3NCwgMCkgNzAlKTtcbiAgYW5pbWF0aW9uOiBiZ0Nsb3VkIDQwcyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG4ud2VhdGhlckJnLmJnLWNsb3VkeTo6YWZ0ZXIge1xuICBib3R0b206IDEwJTtcbiAgcmlnaHQ6IC0yNCU7XG4gIHdpZHRoOiA2MHZtYXg7XG4gIGhlaWdodDogMjZ2bWF4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgY2VudGVyLCByZ2JhKDExMSwgMTMwLCAxNDgsIDAuMTYpLCByZ2JhKDExMSwgMTMwLCAxNDgsIDApIDcwJSk7XG4gIGFuaW1hdGlvbjogYmdDbG91ZCA1MnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlLXJldmVyc2U7XG59XG4vKiBmYXI6IGEgd2lkZSwgaGVhdmlseSBibHVycmVkIGNsb3VkIGJhbmQgaGlnaCBpbiB0aGUgc2NlbmUsIGJhcmVseSBtb3ZpbmcuICovXG4ud2VhdGhlckJnLmJnLWNsb3VkeSA+IC5iZ0xheWVyLS1mYXIge1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoODAlIDQwJSBhdCAzMCUgMjIlLCByZ2JhKDE0MCwgMTYwLCAxNzQsIDAuMTYpLCByZ2JhKDE0MCwgMTYwLCAxNzQsIDApIDcwJSk7XG4gIGZpbHRlcjogYmx1cigxMHB4KTtcbiAgYW5pbWF0aW9uOiBiZ0Nsb3VkIDcwcyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGUtcmV2ZXJzZTtcbn1cbi8qIG5lYXI6IGEgc21hbGxlciwgc2hhcnBlciBjbG91ZCBkcmlmdGluZyBmYXN0ZXIgYWNyb3NzIHRoZSBmb3JlZ3JvdW5kLiAqL1xuLndlYXRoZXJCZy5iZy1jbG91ZHkgPiAuYmdMYXllci0tbmVhciB7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgzNCUgMjYlIGF0IDYyJSA0MCUsIHJnYmEoMTc2LCAxOTIsIDIwNCwgMC4yKSwgcmdiYSgxNzYsIDE5MiwgMjA0LCAwKSA2OCUpO1xuICBmaWx0ZXI6IGJsdXIoMnB4KTtcbiAgYW5pbWF0aW9uOiBiZ0Nsb3VkIDMwcyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG4vKiBncm91bmQ6IGRpbSBob3Jpem9uIGxpZ2h0IHVuZGVyIHRoZSBvdmVyY2FzdC4gKi9cbi53ZWF0aGVyQmcuYmctY2xvdWR5ID4gLmJnTGF5ZXItLWdyb3VuZCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDE0MCwgMTYwLCAxNzQsIDAuMTIpLCByZ2JhKDE0MCwgMTYwLCAxNzQsIDApIDEwMCUpO1xuICBhbmltYXRpb246IGJnR3JvdW5kIDE2cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG5cbi8qIFJBSU4gKGFsc28gZHJpenpsZSwgc2hvd2VycywgdGh1bmRlcikg4oCUIGRhcmtlciBza3ksIGEgaGVhdnkgZHJpZnRpbmcgY2xvdWQsXG4gICBhbmQgYSBmYWludCBkaWFnb25hbCByYWluIHNoZWVuIHNsaWRpbmcgZG93bi4gKi9cbi53ZWF0aGVyQmcuYmctcmFpbiB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMxYzI3MzQgMCUsICMxMjFiMjYgNTUlLCB2YXIoLS1ncm91bmQpIDEwMCUpO1xufVxuLndlYXRoZXJCZy5iZy1yYWluOjpiZWZvcmUge1xuICB0b3A6IC04JTtcbiAgbGVmdDogLTE4JTtcbiAgd2lkdGg6IDYydm1heDtcbiAgaGVpZ2h0OiAzMHZtYXg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCBjZW50ZXIsIHJnYmEoMTIwLCAxNDAsIDE1OCwgMC4yMiksIHJnYmEoMTIwLCAxNDAsIDE1OCwgMCkgNzAlKTtcbiAgYW5pbWF0aW9uOiBiZ0Nsb3VkIDQ2cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG4ud2VhdGhlckJnLmJnLXJhaW46OmFmdGVyIHtcbiAgaW5zZXQ6IDA7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoNzRkZWcsIHJnYmEoMTYwLCAxOTAsIDIxNCwgMC4wNykgMCAxcHgsIHJnYmEoMTYwLCAxOTAsIDIxNCwgMCkgMXB4IDlweCk7XG4gIGFuaW1hdGlvbjogYmdSYWluIDAuOXMgbGluZWFyIGluZmluaXRlO1xufVxuLyogZmFyOiBhIGJyb2FkLCBibHVycmVkIHN0b3JtIGNsb3VkIGRyaWZ0aW5nIHNsb3dseSBoaWdoIG92ZXJoZWFkLiAqL1xuLndlYXRoZXJCZy5iZy1yYWluID4gLmJnTGF5ZXItLWZhciB7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCg5MCUgNDQlIGF0IDY2JSAxMiUsIHJnYmEoMTIwLCAxNDAsIDE1OCwgMC4yKSwgcmdiYSgxMjAsIDE0MCwgMTU4LCAwKSA3MCUpO1xuICBmaWx0ZXI6IGJsdXIoOXB4KTtcbiAgYW5pbWF0aW9uOiBiZ0Nsb3VkIDYwcyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGUtcmV2ZXJzZTtcbn1cbi8qIG5lYXI6IGNvYXJzZXIsIGZhc3RlciByYWluIHN0cmVha3MgYXQgYSBzdGVlcGVyIGFuZ2xlIGZvciBmb3JlZ3JvdW5kIGRlcHRoLiAqL1xuLndlYXRoZXJCZy5iZy1yYWluID4gLmJnTGF5ZXItLW5lYXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KDc4ZGVnLCByZ2JhKDE4MCwgMjA2LCAyMjYsIDAuMTEpIDAgMnB4LCByZ2JhKDE4MCwgMjA2LCAyMjYsIDApIDJweCAxNXB4KTtcbiAgYW5pbWF0aW9uOiBiZ1JhaW5OZWFyIDAuNTVzIGxpbmVhciBpbmZpbml0ZTtcbn1cbi8qIGdyb3VuZDogYSB3ZXQgc2hlZW4gY2F0Y2hpbmcgdGhlIGxpZ2h0IGF0IHRoZSBib3R0b20gb2YgdGhlIHNjZW5lLiAqL1xuLndlYXRoZXJCZy5iZy1yYWluID4gLmJnTGF5ZXItLWdyb3VuZCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDEyMCwgMTQwLCAxNTgsIDAuMTgpLCByZ2JhKDEyMCwgMTQwLCAxNTgsIDApIDEwMCUpO1xuICBhbmltYXRpb246IGJnR3JvdW5kIDlzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcbn1cblxuLyogU05PVyDigJQgY29vbCBsaWdodCBza3kgd2l0aCBzbG93bHkgZHJpZnRpbmcgZmxha2VzLiAqL1xuLndlYXRoZXJCZy5iZy1zbm93IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzJhMzk0OSAwJSwgIzFhMjYzNCA1NSUsIHZhcigtLWdyb3VuZCkgMTAwJSk7XG59XG4ud2VhdGhlckJnLmJnLXNub3c6OmJlZm9yZSxcbi53ZWF0aGVyQmcuYmctc25vdzo6YWZ0ZXIge1xuICBpbnNldDogMDtcbiAgYmFja2dyb3VuZC1pbWFnZTpcbiAgICByYWRpYWwtZ3JhZGllbnQoMnB4IDJweCBhdCAyMCUgMTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCksIHRyYW5zcGFyZW50IDYwJSksXG4gICAgcmFkaWFsLWdyYWRpZW50KDIuNHB4IDIuNHB4IGF0IDY2JSAyMiUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSwgdHJhbnNwYXJlbnQgNjAlKSxcbiAgICByYWRpYWwtZ3JhZGllbnQoMS44cHggMS44cHggYXQgNDAlIDQwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KSwgdHJhbnNwYXJlbnQgNjAlKSxcbiAgICByYWRpYWwtZ3JhZGllbnQoMnB4IDJweCBhdCA4NCUgNTQlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyksIHRyYW5zcGFyZW50IDYwJSksXG4gICAgcmFkaWFsLWdyYWRpZW50KDIuMnB4IDIuMnB4IGF0IDEyJSA3MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSwgdHJhbnNwYXJlbnQgNjAlKSxcbiAgICByYWRpYWwtZ3JhZGllbnQoMS44cHggMS44cHggYXQgNTQlIDg2JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY1KSwgdHJhbnNwYXJlbnQgNjAlKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDUwJTtcbn1cbi53ZWF0aGVyQmcuYmctc25vdzo6YmVmb3JlIHtcbiAgYW5pbWF0aW9uOiBiZ1Nub3cgMTRzIGxpbmVhciBpbmZpbml0ZTtcbn1cbi53ZWF0aGVyQmcuYmctc25vdzo6YWZ0ZXIge1xuICBvcGFjaXR5OiAwLjY7XG4gIGFuaW1hdGlvbjogYmdTbm93IDIycyBsaW5lYXIgaW5maW5pdGU7XG59XG4vKiBmYXI6IHRpbnksIGZhaW50LCBibHVycmVkIGZsYWtlcyBmYWxsaW5nIHNsb3dseSBpbiB0aGUgZGVlcCBiYWNrZ3JvdW5kLiAqL1xuLndlYXRoZXJCZy5iZy1zbm93ID4gLmJnTGF5ZXItLWZhciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6XG4gICAgcmFkaWFsLWdyYWRpZW50KDFweCAxcHggYXQgMTYlIDEyJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU1KSwgdHJhbnNwYXJlbnQgNjAlKSxcbiAgICByYWRpYWwtZ3JhZGllbnQoMS4ycHggMS4ycHggYXQgNDglIDI2JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLCB0cmFuc3BhcmVudCA2MCUpLFxuICAgIHJhZGlhbC1ncmFkaWVudCgxcHggMXB4IGF0IDcyJSAxOCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSwgdHJhbnNwYXJlbnQgNjAlKSxcbiAgICByYWRpYWwtZ3JhZGllbnQoMS4xcHggMS4xcHggYXQgMzAlIDQ0JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLCB0cmFuc3BhcmVudCA2MCUpLFxuICAgIHJhZGlhbC1ncmFkaWVudCgxcHggMXB4IGF0IDg4JSA0MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSksIHRyYW5zcGFyZW50IDYwJSksXG4gICAgcmFkaWFsLWdyYWRpZW50KDEuMnB4IDEuMnB4IGF0IDYwJSA2MiUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSwgdHJhbnNwYXJlbnQgNjAlKSxcbiAgICByYWRpYWwtZ3JhZGllbnQoMXB4IDFweCBhdCAyMiUgNzglLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpLCB0cmFuc3BhcmVudCA2MCUpLFxuICAgIHJhZGlhbC1ncmFkaWVudCgxLjFweCAxLjFweCBhdCA3OCUgODQlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpLCB0cmFuc3BhcmVudCA2MCUpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgNTAlO1xuICBmaWx0ZXI6IGJsdXIoMXB4KTtcbiAgb3BhY2l0eTogMC43O1xuICBhbmltYXRpb246IGJnU25vdyAzMHMgbGluZWFyIGluZmluaXRlO1xufVxuLyogbmVhcjogbGFyZ2UgZm9yZWdyb3VuZCBmbGFrZXMgd2l0aCBhIHNvZnQgZ2xvdywgZmFsbGluZyBmYXN0LiAqL1xuLndlYXRoZXJCZy5iZy1zbm93ID4gLmJnTGF5ZXItLW5lYXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOlxuICAgIHJhZGlhbC1ncmFkaWVudCgzLjRweCAzLjRweCBhdCAyNiUgMTYlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTUpLCB0cmFuc3BhcmVudCA2MiUpLFxuICAgIHJhZGlhbC1ncmFkaWVudCgzcHggM3B4IGF0IDYyJSAzNCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KSwgdHJhbnNwYXJlbnQgNjIlKSxcbiAgICByYWRpYWwtZ3JhZGllbnQoMy42cHggMy42cHggYXQgODQlIDYwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk1KSwgdHJhbnNwYXJlbnQgNjIlKSxcbiAgICByYWRpYWwtZ3JhZGllbnQoMy4ycHggMy4ycHggYXQgMTQlIDY4JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpLCB0cmFuc3BhcmVudCA2MiUpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgNTAlO1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCAzcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpKTtcbiAgYW5pbWF0aW9uOiBiZ1Nub3cgOHMgbGluZWFyIGluZmluaXRlO1xufVxuLyogZ3JvdW5kOiBhIGxpdCBiYW5kIG9mIHNldHRsZWQgc25vdyBnbG93aW5nIGF0IHRoZSBib3R0b20gb2YgdGhlIHNjZW5lLiAqL1xuLndlYXRoZXJCZy5iZy1zbm93ID4gLmJnTGF5ZXItLWdyb3VuZCB7XG4gIGhlaWdodDogMzAlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgyMzQsIDI0MCwgMjQ2LCAwLjI4KSwgcmdiYSgyMzQsIDI0MCwgMjQ2LCAwLjA1KSA2MCUsIHJnYmEoMjM0LCAyNDAsIDI0NiwgMCkgMTAwJSk7XG4gIGFuaW1hdGlvbjogYmdHcm91bmQgMTFzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcbn1cblxuLyogRk9HIChhbHNvIG1pc3QsIGhhemUpIOKAlCBtdXRlZCBza3kgd2l0aCBzbG93IGhvcml6b250YWwgaGF6ZSBiYW5kcy4gKi9cbi53ZWF0aGVyQmcuYmctZm9nIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzIzMmMzNSAwJSwgIzE4MjAyOSA1NSUsIHZhcigtLWdyb3VuZCkgMTAwJSk7XG59XG4ud2VhdGhlckJnLmJnLWZvZzo6YmVmb3JlIHtcbiAgaW5zZXQ6IDA7XG4gIGJhY2tncm91bmQtaW1hZ2U6XG4gICAgbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMTQwLCAxNjAsIDE3NCwgMCkgMCUsIHJnYmEoMTQwLCAxNjAsIDE3NCwgMC4xMikgMzAlLCByZ2JhKDE0MCwgMTYwLCAxNzQsIDApIDQ2JSksXG4gICAgbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMTQwLCAxNjAsIDE3NCwgMCkgNTQlLCByZ2JhKDE0MCwgMTYwLCAxNzQsIDAuMSkgNzIlLCByZ2JhKDE0MCwgMTYwLCAxNzQsIDApIDg4JSk7XG4gIGFuaW1hdGlvbjogYmdGb2cgMjRzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcbn1cbi8qIGZhcjogYSB0aGluLCBoaWdoIGhhemUgYmFuZCBkcmlmdGluZyB0aGUgb3RoZXIgd2F5LCBzbG93ZXIuICovXG4ud2VhdGhlckJnLmJnLWZvZyA+IC5iZ0xheWVyLS1mYXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgxNDAsIDE2MCwgMTc0LCAwKSA4JSwgcmdiYSgxNDAsIDE2MCwgMTc0LCAwLjA4KSAyMiUsIHJnYmEoMTQwLCAxNjAsIDE3NCwgMCkgMzglKTtcbiAgZmlsdGVyOiBibHVyKDNweCk7XG4gIG9wYWNpdHk6IDAuODtcbiAgYW5pbWF0aW9uOiBiZ0ZvZyAzNHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlLXJldmVyc2U7XG59XG4vKiBuZWFyOiBhIHNvZnQsIGhlYXZpbHkgYmx1cnJlZCBoYXplIG1hc3MgbG93IGluIHRoZSBzY2VuZS4gKi9cbi53ZWF0aGVyQmcuYmctZm9nID4gLmJnTGF5ZXItLW5lYXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgxNzYsIDE5MiwgMjA0LCAwLjE0KSAwJSwgcmdiYSgxNzYsIDE5MiwgMjA0LCAwLjA2KSA0MCUsIHJnYmEoMTc2LCAxOTIsIDIwNCwgMCkgNjglKTtcbiAgZmlsdGVyOiBibHVyKDhweCk7XG4gIGFuaW1hdGlvbjogYmdGb2cgMThzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcbn1cbi8qIGdyb3VuZDogYSBkZW5zZSBmb2cgcG9vbCBzZXR0bGluZyBhbG9uZyB0aGUgYm90dG9tLiAqL1xuLndlYXRoZXJCZy5iZy1mb2cgPiAuYmdMYXllci0tZ3JvdW5kIHtcbiAgaGVpZ2h0OiA0MiU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDE3NiwgMTkyLCAyMDQsIDAuMjIpLCByZ2JhKDE3NiwgMTkyLCAyMDQsIDApIDEwMCUpO1xuICBhbmltYXRpb246IGJnR3JvdW5kIDE1cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG5cbkBrZXlmcmFtZXMgYmdTdW4ge1xuICAwJSAgIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMSk7ICAgICAgICBvcGFjaXR5OiAwLjc7IH1cbiAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC00JSwgMyUpIHNjYWxlKDEuMTIpOyAgb3BhY2l0eTogMTsgfVxufVxuXG5Aa2V5ZnJhbWVzIGJnVHdpbmtsZSB7XG4gIDAlICAgeyBvcGFjaXR5OiAwLjQ7IH1cbiAgMTAwJSB7IG9wYWNpdHk6IDE7IH1cbn1cblxuQGtleWZyYW1lcyBiZ0Nsb3VkIHtcbiAgMCUgICB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfVxuICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwJSk7IH1cbn1cblxuQGtleWZyYW1lcyBiZ1JhaW4ge1xuICAwJSAgIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwOyB9XG4gIDEwMCUgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOXB4IDMycHg7IH1cbn1cblxuQGtleWZyYW1lcyBiZ1Nub3cge1xuICAwJSAgIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpOyB9XG4gIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cbn1cblxuQGtleWZyYW1lcyBiZ0ZvZyB7XG4gIDAlICAgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTQlKTsgb3BhY2l0eTogMC43OyB9XG4gIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNCUpOyAgb3BhY2l0eTogMTsgfVxufVxuXG4vKiBBIHN0ZWVwZXIsIGZhc3RlciBmYWxsIGZvciB0aGUgbmVhciByYWluIHBsYW5lIHNvIGl0IHJlYWRzIGFoZWFkIG9mIDo6YWZ0ZXIuICovXG5Aa2V5ZnJhbWVzIGJnUmFpbk5lYXIge1xuICAwJSAgIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwOyB9XG4gIDEwMCUgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTVweCA0NHB4OyB9XG59XG5cbi8qIEEgZ2VudGxlIGJyZWF0aGUgZm9yIHRoZSBncm91bmQtbGlnaHRpbmcgYWNjZW50IGFjcm9zcyBldmVyeSBjYXRlZ29yeS4gKi9cbkBrZXlmcmFtZXMgYmdHcm91bmQge1xuICAwJSAgIHsgb3BhY2l0eTogMC42NTsgfVxuICAxMDAlIHsgb3BhY2l0eTogMTsgfVxufVxuXG4vKiBGcm96ZW4gd2hpbGUgdGhlIHRhYiBpcyBoaWRkZW4gKHNreS5qcyB0b2dnbGVzIC5wYXVzZWQgb24gdmlzaWJpbGl0eWNoYW5nZSkuICovXG4ud2VhdGhlckJnLnBhdXNlZDo6YmVmb3JlLFxuLndlYXRoZXJCZy5wYXVzZWQ6OmFmdGVyLFxuLndlYXRoZXJCZy5wYXVzZWQgPiAuYmdMYXllciB7XG4gIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XG59XG5cbi8qIEhhbHQgZXZlcnkgdHJlYXRtZW50J3MgbW90aW9uIHVuZGVyIGEgcmVkdWNlZC1tb3Rpb24gcHJlZmVyZW5jZSDigJQgb25lIHN0YXRpY1xuICAgZnJhbWUgcGVyIGNhdGVnb3J5LiAqL1xuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcbiAgLndlYXRoZXJCZzo6YmVmb3JlLFxuICAud2VhdGhlckJnOjphZnRlcixcbiAgLndlYXRoZXJCZyA+IC5iZ0xheWVyIHtcbiAgICBhbmltYXRpb246IG5vbmU7XG4gIH1cbn1cblxuLyogVGhlIHJpYmJvbiBhbmQgaXRzIHJlYWRvdXQgc2hhcmUgb25lIGZsZXggY29sdW1uIHNvIGEgbW9iaWxlIGxvY2F0aW9uIHJvdGF0aW9uXG4gICBzbGlkZXMgdGhlbSBhcyBhIHNpbmdsZSB1bml0LiBJdCBjYXJyaWVzIHRoZSBzYW1lIDI4cHggZ2FwICNhcHAgdXNlZCB0byBwdXRcbiAgIGJldHdlZW4gdGhlIHJpYmJvbiBhbmQgdGhlIHJlYWRvdXQsIHNvIHdyYXBwaW5nIHRoZW0gaXMgbGF5b3V0LXRyYW5zcGFyZW50LiAqL1xuI3dlYXRoZXJDYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiBzdGFja3MgYWJvdmUgdGhlIC53ZWF0aGVyQmcgZHJpZnQgbGF5ZXIgKi9cbiAgei1pbmRleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyOHB4O1xufVxuXG4vKiBSaWJib246IHRoZSBTVkcgc2NhbGVzIHRvIHRoZSBjb2x1bW4gd2lkdGggdmlhIHRoZSB2aWV3Qm94LCBzbyBhbGwgNzIgaG91cnNcbiAgIGFyZSBvbiBzY3JlZW4gYXQgYW55IHdpZHRoIGRvd24gdG8gMzgwcHggd2l0aG91dCBzY3JvbGwgb3IgcGFuLiAqL1xuI3JpYmJvbldyYXAge1xuICB3aWR0aDogMTAwJTtcbn1cblxuI3JpYmJvblN2ZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuLnJpYmJvbi1jdXJ2ZSB7XG4gIHN0cm9rZS13aWR0aDogMi41O1xuICBzdHJva2UtbGluZWNhcDogcm91bmQ7XG4gIHN0cm9rZS1saW5lam9pbjogcm91bmQ7XG59XG5cbi8qIERheSBib3VuZGFyeSBoYWlybGluZXMgYXQgaG91cnMgMjQgYW5kIDQ4LiAqL1xuLnJpYmJvbi1oYWlybGluZSB7XG4gIHN0cm9rZTogdmFyKC0tcnVsZSk7XG4gIHN0cm9rZS13aWR0aDogMTtcbn1cblxuLnJpYmJvbi10aWNrIHtcbiAgZmlsbDogdmFyKC0tbXV0ZWQpO1xuICBmb250LWZhbWlseTogdmFyKC0tbW9ubyk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cblxuLnJpYmJvbi1ub3dsaW5lIHtcbiAgc3Ryb2tlOiB2YXIoLS1tdXRlZCk7XG4gIHN0cm9rZS13aWR0aDogMTtcbiAgc3Ryb2tlLWRhc2hhcnJheTogMiAzO1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbi5yaWJib24tZG90IHtcbiAgc3Ryb2tlOiB2YXIoLS1ncm91bmQpO1xuICBzdHJva2Utd2lkdGg6IDI7XG59XG5cbi8qIFJlYWRvdXQgYmVuZWF0aCB0aGUgY3VydmUuICovXG4jcmVhZG91dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qIExvY2F0aW9uIG5hbWUgcGFpcmVkIHdpdGggdGhlIEMvRiB1bml0IHN3aXRjaCBvbiBvbmUgY2VudGVyZWQgcm93LiAqL1xuI2xvY2F0aW9uUm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbn1cblxuI2xvY2F0aW9uTmFtZSB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tb25vKTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xufVxuXG4vKiBTZWdtZW50ZWQgQy9GIHRvZ2dsZTogYSBjb21wYWN0IHBpbGwsIHRoZSBhY3RpdmUgb3B0aW9uIGZpbGxlZCB3aXRoIHRoZSBydWxlXG4gICBjb2xvdXIuIERpc3BsYXktb25seSDigJQgZmxpcHMgdGhlIHRlbXBlcmF0dXJlIHJlYWRvdXRzIGJldHdlZW4gwrBDIGFuZCDCsEYuICovXG4jdW5pdFN3aXRjaCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXJ1bGUpO1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnVuaXRPcHQge1xuICBmb250LWZhbWlseTogdmFyKC0tbW9ubyk7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgcGFkZGluZzogM3B4IDlweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udW5pdE9wdC5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ydWxlKTtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xufVxuXG4vKiBTYXZlZC1sb2NhdGlvbiBuYXZpZ2F0aW9uOiBwcmV2L25leHQgY2hldnJvbnMgZmxhbmtpbmcgdGhlIGRvdCByb3cuIFRoZSB3aG9sZVxuICAgcm93IGlzIGhpZGRlbiBhdCBhIGNvdW50IG9mIG9uZSAoYSBzaW5nbGUgbG9jYXRpb24gbmVlZHMgbm8gYWZmb3JkYW5jZSk7IHRoZVxuICAgYXJyb3dzIGFyZSBkZXNrdG9wLW9ubHkgYW5kIGRyb3Agb3V0IGF0IOKJpDQ4MHB4IHdoZXJlIHN3aXBlIHRha2VzIG92ZXIuICovXG4ubmF2Um93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgbWFyZ2luOiA0cHggMCAycHg7XG59XG5cbi5uYXZSb3cuaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmFycm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYXJyb3c6aG92ZXIge1xuICBjb2xvcjogI0VBRUVGMjtcbn1cblxuLmFycm93IHN2ZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAxNHB4O1xufVxuXG4vKiBTYXZlZC1sb2NhdGlvbiBkb3RzOiBvbmUgcGVyIHNhdmVkIGxvY2F0aW9uLCB0aGUgYWN0aXZlIG9uZSBmaWxsZWQuICovXG4jZG90Um93IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiBvZmZzZXQgcGFyZW50IGZvciB0aGUgZGVza3RvcCByZW1vdmUgcG9wb3ZlciAqL1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDhweDtcbn1cblxuLmRvdCB7XG4gIHdpZHRoOiA4cHg7XG4gIGhlaWdodDogOHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICMyRTNCNDU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XG59XG5cbi5kb3QuYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI0VBRUVGMjtcbn1cblxuLyogRGVza3RvcCByZW1vdmUtY29uZmlybWF0aW9uIHBvcG92ZXIsIGFuY2hvcmVkIGFib3ZlIHRoZSBsb25nLXByZXNzZWQgZG90LlxuICAgVG91Y2gga2VlcHMgdGhlIG5hdGl2ZSBjb25maXJtOyB0aGlzIGlzIHRoZSBtb3VzZS9wZW4gcGF0aC4gKi9cbi5yZW1vdmVQb3BvdmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IGNhbGMoMTAwJSArIDEwcHgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIHotaW5kZXg6IDIwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgcGFkZGluZzogMTBweCAxMnB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncm91bmQpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ydWxlKTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3gtc2hhZG93OiAwIDZweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC40NSk7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi8qIERvd253YXJkIHBvaW50ZXIgYXJyb3csIGJvcmRlcmVkOiBvdXRlciB0cmlhbmdsZSBpbiB0aGUgcnVsZSBjb2xvdXIgd2l0aCBhblxuICAgaW5uZXIgZ3JvdW5kLWZpbGxlZCB0cmlhbmdsZSBsYWlkIGEgcGl4ZWwgaGlnaGVyIG9uIHRvcCBvZiBpdC4gKi9cbi5yZW1vdmVQb3BvdmVyOjpiZWZvcmUsXG4ucmVtb3ZlUG9wb3Zlcjo6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbn1cblxuLnJlbW92ZVBvcG92ZXI6OmJlZm9yZSB7XG4gIHRvcDogMTAwJTtcbiAgYm9yZGVyLXdpZHRoOiA3cHggN3B4IDAgN3B4O1xuICBib3JkZXItY29sb3I6IHZhcigtLXJ1bGUpIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xufVxuXG4ucmVtb3ZlUG9wb3Zlcjo6YWZ0ZXIge1xuICB0b3A6IGNhbGMoMTAwJSAtIDFweCk7XG4gIGJvcmRlci13aWR0aDogNnB4IDZweCAwIDZweDtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ncm91bmQpIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xufVxuXG4ucmVtb3ZlUG9wb3Zlci1uYW1lIHtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5yZW1vdmVQb3BvdmVyLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDhweDtcbn1cblxuLnJlbW92ZVBvcG92ZXItY2FuY2VsLFxuLnJlbW92ZVBvcG92ZXItZGVsZXRlIHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogNXB4IDEycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXJ1bGUpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnJlbW92ZVBvcG92ZXItY2FuY2VsIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcbn1cblxuLnJlbW92ZVBvcG92ZXItY2FuY2VsOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xufVxuXG4ucmVtb3ZlUG9wb3Zlci1kZWxldGUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10ZXh0KTtcbiAgY29sb3I6IHZhcigtLWdyb3VuZCk7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tdGV4dCk7XG59XG5cbi5yZW1vdmVQb3BvdmVyLWRlbGV0ZTpob3ZlciB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjkyKTtcbn1cblxuLyogUm9ib3RvIExpZ2h0IDQwcHggZm9yIHRoZSByZWFkaW5nLiAqL1xuI2N1cnJlbnRUZW1wIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjE7XG59XG5cbiNjdXJyZW50Q29uZGl0aW9uIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG59XG5cbi8qIEZvdXItdXAgc3RhdCByb3c6IHRleHQgbGFiZWxzLCBubyBpY29ucy4gKi9cbiNzdGF0Um93IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgZ2FwOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMTRweDtcbn1cblxuLnN0YXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDRweDtcbiAgcGFkZGluZzogMTJweCA2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXJ1bGUpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5zdGF0LWxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1vbm8pO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XG59XG5cbi5zdGF0LXZhbHVlIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG59XG5cbi8qIFNlYXJjaCBmb3JtLiAqL1xuI3NlYXJjaEZvcm0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qIHN0YWNrcyBhYm92ZSB0aGUgLndlYXRoZXJCZyBkcmlmdCBsYXllciAqL1xuICB6LWluZGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4vKiBIb2xkcyB0aGUgaW5wdXQgYW5kIGl0cyBhdXRvY29tcGxldGUgZHJvcGRvd247IHBvc2l0aW9uOiByZWxhdGl2ZSBhbmNob3JzXG4gICAjc3VnZ2VzdGlvbnMgYmVuZWF0aCB0aGUgaW5wdXQuIGZsZXg6IDEgc28gdGhlIHBhaXIgZmlsbHMgdGhlIHJvdyB0aGUgd2F5IHRoZVxuICAgYmFyZSBpbnB1dCB1c2VkIHRvLiAqL1xuI3NlYXJjaElucHV0V3JhcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleDogMTtcbiAgbWluLXdpZHRoOiAwO1xufVxuXG4jc2VhcmNoSW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTJweCAxNHB4O1xuICBmb250LWZhbWlseTogdmFyKC0tbW9ubyk7XG4gIGZvbnQtc2l6ZTogMTZweDsgLyogMTZweCBzbyBpT1MgU2FmYXJpIGRvZXNuJ3QgYXV0by16b29tIHRoZSBpbnB1dCBvbiBmb2N1cyAqL1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ydWxlKTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4jc2VhcmNoSW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcbn1cblxuI3NlYXJjaElucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1tdXRlZCk7XG59XG5cbi8qIFdoaWxlIHRoZSBkcm9wZG93biBpcyBvcGVuIHRoZSBpbnB1dCdzIGJvdHRvbSBjb3JuZXJzIHNxdWFyZSBvZmYgYW5kIGl0c1xuICAgYm90dG9tIGVkZ2UgZHJvcHMgb3V0LCBzbyBpdCByZWFkcyBhcyBvbmUgYXR0YWNoZWQgc3VyZmFjZSB3aXRoICNzdWdnZXN0aW9ucy4gKi9cbiNzZWFyY2hGb3JtLnN1Z2dlc3RpbmcgI3NlYXJjaElucHV0IHtcbiAgYm9yZGVyLXJhZGl1czogOHB4IDhweCAwIDA7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4vKiBGYWlsZWQgbG9va3VwOiByZWRkZW5lZCBib3JkZXIsIGN1cnJlbnQgcmliYm9uIGxlZnQgaW4gcGxhY2UuICovXG4jc2VhcmNoRm9ybS5pbnZhbGlkICNzZWFyY2hJbnB1dCB7XG4gIGJvcmRlci1jb2xvcjogI0MyNDUyRDtcbn1cblxuLyogQXV0b2NvbXBsZXRlIGRyb3Bkb3duOiBoYW5ncyBvZmYgdGhlIGJvdHRvbSBvZiB0aGUgaW5wdXQsIG1hdGNoaW5nIGl0cyB3aWR0aFxuICAgYW5kIGNvbnRpbnVpbmcgaXRzIGZvY3VzZWQgYm9yZGVyIGludG8gYSBib3R0b20tcm91bmRlZCBwYW5lbC4gKi9cbiNzdWdnZXN0aW9ucyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDAlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMTA7XG4gIG1heC1oZWlnaHQ6IDI0MHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncm91bmQpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1tdXRlZCk7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCA4cHggOHB4O1xufVxuXG4jc3VnZ2VzdGlvbnMuaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnN1Z2dlc3Rpb24taXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgZ2FwOiA4cHg7XG4gIHBhZGRpbmc6IDEwcHggMTRweDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1vbm8pO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zdWdnZXN0aW9uLWl0ZW06aG92ZXIsXG4uc3VnZ2VzdGlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tcnVsZSk7XG59XG5cbi5zdWdnZXN0aW9uLWNpdHkge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbn1cblxuLnN1Z2dlc3Rpb24tY291bnRyeSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcbn1cblxuI3NlYXJjaEJ1dHRvbiB7XG4gIHBhZGRpbmc6IDEycHggMjBweDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1vbm8pO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGNvbG9yOiB2YXIoLS1ncm91bmQpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10ZXh0KTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI3NlYXJjaEJ1dHRvbjpob3ZlciB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjkyKTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICNhcHAge1xuICAgIGdhcDogMjJweDtcbiAgICBwYWRkaW5nOiAyNHB4IDE2cHg7XG4gIH1cblxuICAjd2VhdGhlckNhcmQge1xuICAgIGdhcDogMjJweDtcbiAgfVxuXG4gIC8qIFN3aXBlLWRpcmVjdGlvbi1hd2FyZSBzbGlkZSBvbiBhIGNvbW1pdHRlZCBsb2NhdGlvbiByb3RhdGlvbi4gZmF2b3VyaXRlcy5qc1xuICAgICBhZGRzIC5zbGlkZS1uZXh0IChzd2lwZSBsZWZ0IC0+IG5leHQpIG9yIC5zbGlkZS1wcmV2IChzd2lwZSByaWdodCAtPiBwcmV2KVxuICAgICB0byAjd2VhdGhlckNhcmQsIHRoZW4gcm90YXRlcy4gVGhlIGNhcmQgZmFkZXMgdG8gbm90aGluZyBhdCB0aGUga2V5ZnJhbWUnc1xuICAgICBtaWRwb2ludCwgd2hpY2ggbWFza3MgdGhlIGZvcmVjYXN0IHN3YXA6IHJlbmRlclJpYmJvbigpIHJlYnVpbGRzIGludG8gdGhpc1xuICAgICBzYW1lIGNhcmQgd2hpbGUgaXQncyBpbnZpc2libGUsIHNvIHRoZSBuZXcgY3VydmUgc2xpZGVzIGluIHJhdGhlciB0aGFuXG4gICAgIHNuYXBwaW5nLiBEZXNrdG9wIHJvdGF0ZXMgdmlhIHRoZSBhcnJvd3MgYW5kIG5ldmVyIGdldHMgdGhlIGNsYXNzLiAqL1xuICAjd2VhdGhlckNhcmQuc2xpZGUtbmV4dCB7XG4gICAgYW5pbWF0aW9uOiBjYXJkU2xpZGVOZXh0IDI4MG1zIGVhc2Utb3V0O1xuICB9XG5cbiAgI3dlYXRoZXJDYXJkLnNsaWRlLXByZXYge1xuICAgIGFuaW1hdGlvbjogY2FyZFNsaWRlUHJldiAyODBtcyBlYXNlLW91dDtcbiAgfVxuXG4gIEBrZXlmcmFtZXMgY2FyZFNsaWRlTmV4dCB7XG4gICAgMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IG9wYWNpdHk6IDE7IH1cbiAgICA0MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTQycHgpOyBvcGFjaXR5OiAwOyB9XG4gICAgNjAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQycHgpOyBvcGFjaXR5OiAwOyB9XG4gICAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgb3BhY2l0eTogMTsgfVxuICB9XG5cbiAgQGtleWZyYW1lcyBjYXJkU2xpZGVQcmV2IHtcbiAgICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgb3BhY2l0eTogMTsgfVxuICAgIDQwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0MnB4KTsgb3BhY2l0eTogMDsgfVxuICAgIDYwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNDJweCk7IG9wYWNpdHk6IDA7IH1cbiAgICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyBvcGFjaXR5OiAxOyB9XG4gIH1cblxuICAvKiBNb2JpbGUgbmF2aWdhdGVzIGJ5IHN3aXBlOyBkcm9wIHRoZSBhcnJvd3MgYnV0IGtlZXAgdGhlIGRvdHMuICovXG4gIC5hcnJvdyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gICNzdGF0Um93IHtcbiAgICBnYXA6IDhweDtcbiAgfVxuXG4gIC5zdGF0IHtcbiAgICBwYWRkaW5nOiAxMHB4IDRweDtcbiAgfVxuXG4gIC5zdGF0LXZhbHVlIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbn1cblxuLyogUmVzcGVjdCBhIHJlZHVjZWQtbW90aW9uIHByZWZlcmVuY2U6IHJvdGF0ZSBpbnN0YW50bHksIG5vIHNsaWRlLiBmYXZvdXJpdGVzLmpzXG4gICBzdGlsbCBhZGRzIHRoZSBjbGFzcywgYnV0IHdpdGggdGhlIGFuaW1hdGlvbiBzdXBwcmVzc2VkIGFuaW1hdGlvbmVuZCBuZXZlclxuICAgZmlyZXMsIHNvIGl0cyBzZXRUaW1lb3V0IGZhbGxiYWNrIGlzIHdoYXQgc3RyaXBzIHRoZSBjbGFzcyBiYWNrIG9mZi4gKi9cbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XG4gICN3ZWF0aGVyQ2FyZC5zbGlkZS1uZXh0LFxuICAjd2VhdGhlckNhcmQuc2xpZGUtcHJldiB7XG4gICAgYW5pbWF0aW9uOiBub25lO1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxxQkFBcUI7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RTtFQUNFOztJQUVFLGVBQWU7RUFDakI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gIHNyYzogdXJsKCcuL1JvYm90by1SZWd1bGFyLnR0ZicpO1xcbiAgZm9udC13ZWlnaHQ6IDMwMCA0MDA7XFxufVxcblxcbi8qIFBhbGV0dGU6XFxuICAgZ3JvdW5kICAjMTIxODFGICAgcnVsZXMgICMyNjMxM0JcXG4gICB0ZXh0ICAgICNFQUVFRjIgKHByaW1hcnkpIC8gIzhDQTBBRSAobXV0ZWQpXFxuICAgVGhlIHRlbXBlcmF0dXJlIGNvbG91cnMgbGl2ZSBpbiByaWJib24uanMgKHRoZSBjdXJ2ZSBpcyBjb2xvdXJlZCBieSB0aGVcXG4gICB0ZW1wZXJhdHVyZSBzY2FsYXIsIG5vdCBieSBDU1MpLiAqL1xcbjpyb290IHtcXG4gIC0tZ3JvdW5kOiAjMTIxODFGO1xcbiAgLS1ydWxlOiAjMjYzMTNCO1xcbiAgLS10ZXh0OiAjRUFFRUYyO1xcbiAgLS1tdXRlZDogIzhDQTBBRTtcXG4gIC0tbW9ubzogJ1NGTW9uby1SZWd1bGFyJywgJ1NGIE1vbm8nLCAnTWVubG8nLCAnQ29uc29sYXMnLCAnTGliZXJhdGlvbiBNb25vJywgbW9ub3NwYWNlO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JvdW5kKTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmO1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxufVxcblxcbi8qIGR2aCAobm90IHZoKTogb24gaU9TIFNhZmFyaSB2aCByZXNvbHZlcyB0byB0aGUgdGFsbCB2aWV3cG9ydCBhbmQgcGFya3MgdGhlXFxuICAgYm90dG9tIG9mIHRoZSBsYXlvdXQgdW5kZXIgdGhlIFVSTCBiYXIuICovXFxuI2FwcCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qIHN0YWNrcyB0aGUgY29uc3RyYWluZWQgY29sdW1uIGFib3ZlIHRoZSBmaXhlZCAud2VhdGhlckJnICovXFxuICB6LWluZGV4OiAxO1xcbiAgbWluLWhlaWdodDogMTAwZHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMjhweDtcXG4gIG1heC13aWR0aDogNzIwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDMycHggMjBweDtcXG59XFxuXFxuLyogQ29uZGl0aW9uLWJhc2VkIGJhY2tncm91bmQuIHNreS5qcyBtb3VudHMgYSBzaW5nbGUgYC53ZWF0aGVyQmdgIGFzIHRoZSBmaXJzdFxcbiAgIGNoaWxkIG9mICNhcHAgYW5kIHN3YXBzIGEgYGJnLTxjYXRlZ29yeT5gIGNsYXNzIG9udG8gaXQgcGVyIGZldGNoLCBrZXllZCBvZmZcXG4gICB0aGUgY3VycmVudCBjb25kaXRpb24gdGV4dCAoY2F0ZWdvcnlGb3IoKSBpbiBza3kuanMpLiBJdCBpcyBgZml4ZWRgIHNvIGl0XFxuICAgc3BhbnMgdGhlIHdob2xlIGJyb3dzZXIgd2luZG93IG9uIGRlc2t0b3Agd2hpbGUgI2FwcCBzdGF5cyBhIGNvbnN0cmFpbmVkXFxuICAgY2VudHJlZCBjb2x1bW4gYWJvdmUgaXQgKHotaW5kZXgpLiBFYWNoIGNhdGVnb3J5IHBhaW50cyBhIGdyYWRpZW50IGJhc2Ugb24gdGhlXFxuICAgZWxlbWVudCBwbHVzIGRlY29yYXRpdmUgbGF5ZXJzIChzdW4sIG1vb24gKyBzdGFycywgZHJpZnRpbmcgY2xvdWRzLCBmbGFrZXMsXFxuICAgaGF6ZSkgb24gdGhlIHR3byBwc2V1ZG8tZWxlbWVudHMuIG92ZXJmbG93OiBoaWRkZW4gY2xpcHMgdGhvc2UgbGF5ZXJzIHRvIHRoZVxcbiAgIHZpZXdwb3J0IHNvIGFuIG92ZXJzaXplZCBjbG91ZCBjYW4ndCBzcGlsbCBhIHNjcm9sbGJhci4gVGhlIGdyYWRpZW50cyBjcm9zcy1cXG4gICBmYWRlICh0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kKSB3aGVuIHRoZSBjYXRlZ29yeSBjaGFuZ2VzOyB0aGUgZGVjb3JhdGl2ZVxcbiAgIG1vdGlvbiBsaXZlcyBpbiB0aGUgcGVyLWNhdGVnb3J5IGtleWZyYW1lcyBiZWxvdy4gKi9cXG4ud2VhdGhlckJnIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGluc2V0OiAwO1xcbiAgei1pbmRleDogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMxYjI4MzYgMCUsICMxNDFkMjkgNTUlLCB2YXIoLS1ncm91bmQpIDEwMCUpO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCA2MDBtcyBlYXNlO1xcbn1cXG5cXG4ud2VhdGhlckJnOjpiZWZvcmUsXFxuLndlYXRoZXJCZzo6YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLyogRGVwdGggcGxhbmVzIG1vdW50ZWQgYnkgc2t5LmpzIGFzIGNoaWxkIGRpdnMgKGZhciwgbWlkLCBuZWFyLCBncm91bmQpLiBUaGV5XFxuICAgZ2l2ZSBlYWNoIGNhdGVnb3J5IG1vcmUgdGhhbiB0aGUgdHdvIHBzZXVkby1lbGVtZW50cyBjYW4gaG9sZDogYSBjYXRlZ29yeVxcbiAgIHN0YWNrcyBhIHN1YnNldCBvZiB0aGVtIOKAlCBhIGJsdXJyZWQgZmFyIHBsYW5lLCBhIG1pZCBwbGFuZSwgYSBzaGFycCBuZWFyIHBsYW5lXFxuICAgd2l0aCBhIGdsb3csIGFuZCBhIGdyb3VuZC1saWdodGluZyBhY2NlbnQgYXQgdGhlIGJvdHRvbSDigJQgc28gdGhlIGltYWdlcnkgcmVhZHNcXG4gICBhcyBkZXB0aCByYXRoZXIgdGhhbiBhIHNpbmdsZSBmbGF0IHdhc2guIEFueSBwbGFuZSBhIGNhdGVnb3J5IGRvZXNuJ3QgcGFpbnRcXG4gICBzdGF5cyB0cmFuc3BhcmVudC4gVGhleSBzaXQgYmV0d2VlbiA6OmJlZm9yZSAoYmVoaW5kKSBhbmQgOjphZnRlciAoaW4gZnJvbnQpXFxuICAgaW4gcGFpbnQgb3JkZXI7IHBlci1jYXRlZ29yeSBydWxlcyBsYXllciB0aGVtIGV4cGxpY2l0bHkgd2hlcmUgaXQgbWF0dGVycy4gKi9cXG4ud2VhdGhlckJnID4gLmJnTGF5ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaW5zZXQ6IDA7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcblxcbi8qIEdyb3VuZCBhY2NlbnQgc2hhcmVkIHNoYXBlOiBhIHNvZnQgYmFuZCBvZiBsaWdodCBodWdnaW5nIHRoZSBib3R0b20gZWRnZS5cXG4gICBFYWNoIGNhdGVnb3J5IHRpbnRzIGl0IHZpYSAtLWdyb3VuZC1nbG93LiAqL1xcbi53ZWF0aGVyQmcgPiAuYmdMYXllci0tZ3JvdW5kIHtcXG4gIHRvcDogYXV0bztcXG4gIGhlaWdodDogMzQlO1xcbiAgYm90dG9tOiAwO1xcbn1cXG5cXG4vKiBTVU5OWSDigJQgd2FybSBkYXl0aW1lIHNreSB3aXRoIGEgc29mdCBzdW4gZ2xvdyB0aGF0IHNsb3dseSBicmVhdGhlcy4gKi9cXG4ud2VhdGhlckJnLmJnLXN1bm55IHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMyYzRjNzIgMCUsICMxYTJjNDAgNTUlLCB2YXIoLS1ncm91bmQpIDEwMCUpO1xcbn1cXG4ud2VhdGhlckJnLmJnLXN1bm55OjpiZWZvcmUge1xcbiAgdG9wOiAtMTIlO1xcbiAgcmlnaHQ6IC02JTtcXG4gIHdpZHRoOiA0NnZtYXg7XFxuICBoZWlnaHQ6IDQ2dm1heDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgY2VudGVyLCByZ2JhKDIxNywgMTY0LCA2NSwgMC40NSksIHJnYmEoMjE3LCAxNjQsIDY1LCAwKSA2OCUpO1xcbiAgYW5pbWF0aW9uOiBiZ1N1biAxNHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xcbn1cXG4ud2VhdGhlckJnLmJnLXN1bm55OjphZnRlciB7XFxuICBib3R0b206IC0xOCU7XFxuICBsZWZ0OiAtMTIlO1xcbiAgd2lkdGg6IDQwdm1heDtcXG4gIGhlaWdodDogNDB2bWF4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCBjZW50ZXIsIHJnYmEoMTExLCAxNjgsIDE2MCwgMC4xOCksIHJnYmEoMTExLCAxNjgsIDE2MCwgMCkgNzAlKTtcXG4gIGFuaW1hdGlvbjogYmdTdW4gMThzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZS1yZXZlcnNlO1xcbn1cXG4vKiBmYXI6IGEgaGlnaCwgYmx1cnJlZCB3YXJtIGhhemUgYmFuZCB0aGF0IHNsb3dseSBicmVhdGhlcyBiZWhpbmQgdGhlIHN1bi4gKi9cXG4ud2VhdGhlckJnLmJnLXN1bm55ID4gLmJnTGF5ZXItLWZhciB7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoMTIwJSA2MCUgYXQgNzglIDQlLCByZ2JhKDIxNywgMTY0LCA2NSwgMC4yMiksIHJnYmEoMjE3LCAxNjQsIDY1LCAwKSA2MCUpO1xcbiAgZmlsdGVyOiBibHVyKDZweCk7XFxuICBhbmltYXRpb246IGJnU3VuIDIycyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XFxufVxcbi8qIG1pZDogZmFpbnQgZGlhZ29uYWwgbGlnaHQgc2hhZnRzIHNwaWxsaW5nIGZyb20gdGhlIHN1bi4gKi9cXG4ud2VhdGhlckJnLmJnLXN1bm55ID4gLmJnTGF5ZXItLW1pZCB7XFxuICBiYWNrZ3JvdW5kOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KDY0ZGVnLCByZ2JhKDIxNywgMTY0LCA2NSwgMC4wNSkgMCAycHgsIHJnYmEoMjE3LCAxNjQsIDY1LCAwKSAycHggMjZweCk7XFxuICBvcGFjaXR5OiAwLjc7XFxuICBhbmltYXRpb246IGJnU3VuIDE2cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGUtcmV2ZXJzZTtcXG59XFxuLyogZ3JvdW5kOiB3YXJtIGxpZ2h0IHBvb2xpbmcgYWxvbmcgdGhlIGJvdHRvbSBvZiB0aGUgc2NlbmUuICovXFxuLndlYXRoZXJCZy5iZy1zdW5ueSA+IC5iZ0xheWVyLS1ncm91bmQge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMjE3LCAxNjQsIDY1LCAwLjE2KSwgcmdiYSgyMTcsIDE2NCwgNjUsIDApIDEwMCUpO1xcbiAgYW5pbWF0aW9uOiBiZ0dyb3VuZCAxMnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xcbn1cXG5cXG4vKiBDTEVBUiBOSUdIVCDigJQgZGVlcCBza3ksIGEgbG93IG1vb24gZ2xvdywgYW5kIGEgZmllbGQgb2YgdHdpbmtsaW5nIHN0YXJzLiAqL1xcbi53ZWF0aGVyQmcuYmctY2xlYXItbmlnaHQge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzEwMWEyYyAwJSwgIzBkMTQyMCA1NSUsIHZhcigtLWdyb3VuZCkgMTAwJSk7XFxufVxcbi53ZWF0aGVyQmcuYmctY2xlYXItbmlnaHQ6OmJlZm9yZSB7XFxuICBpbnNldDogMDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6XFxuICAgIHJhZGlhbC1ncmFkaWVudCgxLjZweCAxLjZweCBhdCAxOCUgMjQlLCByZ2JhKDIzNCwgMjM4LCAyNDIsIDAuOSksIHRyYW5zcGFyZW50IDYwJSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgxLjJweCAxLjJweCBhdCA3MiUgMTYlLCByZ2JhKDIzNCwgMjM4LCAyNDIsIDAuOCksIHRyYW5zcGFyZW50IDYwJSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgxLjRweCAxLjRweCBhdCA0MiUgNjIlLCByZ2JhKDIzNCwgMjM4LCAyNDIsIDAuNzUpLCB0cmFuc3BhcmVudCA2MCUpLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMXB4IDFweCBhdCA4NiUgNDYlLCByZ2JhKDIzNCwgMjM4LCAyNDIsIDAuNyksIHRyYW5zcGFyZW50IDYwJSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgxLjNweCAxLjNweCBhdCAzMCUgODIlLCByZ2JhKDIzNCwgMjM4LCAyNDIsIDAuNyksIHRyYW5zcGFyZW50IDYwJSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgxcHggMXB4IGF0IDYwJSA3NCUsIHJnYmEoMjM0LCAyMzgsIDI0MiwgMC42KSwgdHJhbnNwYXJlbnQgNjAlKSxcXG4gICAgcmFkaWFsLWdyYWRpZW50KDEuNXB4IDEuNXB4IGF0IDglIDU0JSwgcmdiYSgyMzQsIDIzOCwgMjQyLCAwLjgpLCB0cmFuc3BhcmVudCA2MCUpLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMXB4IDFweCBhdCA5MiUgNzglLCByZ2JhKDIzNCwgMjM4LCAyNDIsIDAuNjUpLCB0cmFuc3BhcmVudCA2MCUpO1xcbiAgYW5pbWF0aW9uOiBiZ1R3aW5rbGUgNXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xcbn1cXG4ud2VhdGhlckJnLmJnLWNsZWFyLW5pZ2h0OjphZnRlciB7XFxuICB0b3A6IDEyJTtcXG4gIHJpZ2h0OiAxNCU7XFxuICB3aWR0aDogOTJweDtcXG4gIGhlaWdodDogOTJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMzglIDM4JSwgcmdiYSgyMzQsIDIzOCwgMjQyLCAwLjg1KSwgcmdiYSgxNDAsIDE2MCwgMTc0LCAwLjM1KSA2MiUsIHJnYmEoMTQwLCAxNjAsIDE3NCwgMCkgNzIlKTtcXG59XFxuLyogZmFyOiBhIGRlbnNlIGZpZWxkIG9mIHRpbnksIGRpbSwgc2xpZ2h0bHkgYmx1cnJlZCBzdGFycyDigJQgdGhlIGRlZXAgc2t5LiAqL1xcbi53ZWF0aGVyQmcuYmctY2xlYXItbmlnaHQgPiAuYmdMYXllci0tZmFyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6XFxuICAgIHJhZGlhbC1ncmFkaWVudCgwLjhweCAwLjhweCBhdCAxMiUgMzAlLCByZ2JhKDIzNCwgMjM4LCAyNDIsIDAuNSksIHRyYW5zcGFyZW50IDYwJSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgwLjdweCAwLjdweCBhdCAzNCUgMTIlLCByZ2JhKDIzNCwgMjM4LCAyNDIsIDAuNDUpLCB0cmFuc3BhcmVudCA2MCUpLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMC44cHggMC44cHggYXQgNTIlIDQwJSwgcmdiYSgyMzQsIDIzOCwgMjQyLCAwLjUpLCB0cmFuc3BhcmVudCA2MCUpLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMC42cHggMC42cHggYXQgNjglIDI2JSwgcmdiYSgyMzQsIDIzOCwgMjQyLCAwLjQpLCB0cmFuc3BhcmVudCA2MCUpLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMC44cHggMC44cHggYXQgODAlIDUyJSwgcmdiYSgyMzQsIDIzOCwgMjQyLCAwLjQ1KSwgdHJhbnNwYXJlbnQgNjAlKSxcXG4gICAgcmFkaWFsLWdyYWRpZW50KDAuN3B4IDAuN3B4IGF0IDI0JSA2NiUsIHJnYmEoMjM0LCAyMzgsIDI0MiwgMC40KSwgdHJhbnNwYXJlbnQgNjAlKSxcXG4gICAgcmFkaWFsLWdyYWRpZW50KDAuOHB4IDAuOHB4IGF0IDQ2JSA4NCUsIHJnYmEoMjM0LCAyMzgsIDI0MiwgMC40NSksIHRyYW5zcGFyZW50IDYwJSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgwLjZweCAwLjZweCBhdCA3NCUgNzglLCByZ2JhKDIzNCwgMjM4LCAyNDIsIDAuNCksIHRyYW5zcGFyZW50IDYwJSk7XFxuICBmaWx0ZXI6IGJsdXIoMC41cHgpO1xcbiAgb3BhY2l0eTogMC43O1xcbiAgYW5pbWF0aW9uOiBiZ1R3aW5rbGUgN3MgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlLXJldmVyc2U7XFxufVxcbi8qIG5lYXI6IGEgZmV3IGxhcmdlIGZvcmVncm91bmQgc3RhcnMsIGVhY2ggd2l0aCBhIHNvZnQgZHJvcC1zaGFkb3cgZ2xvdy4gKi9cXG4ud2VhdGhlckJnLmJnLWNsZWFyLW5pZ2h0ID4gLmJnTGF5ZXItLW5lYXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTpcXG4gICAgcmFkaWFsLWdyYWRpZW50KDIuNHB4IDIuNHB4IGF0IDIyJSAyMCUsIHJnYmEoMjM0LCAyMzgsIDI0MiwgMSksIHRyYW5zcGFyZW50IDYyJSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgycHggMnB4IGF0IDY0JSA1OCUsIHJnYmEoMjM0LCAyMzgsIDI0MiwgMC45NSksIHRyYW5zcGFyZW50IDYyJSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgyLjZweCAyLjZweCBhdCA4NCUgMzIlLCByZ2JhKDIzNCwgMjM4LCAyNDIsIDEpLCB0cmFuc3BhcmVudCA2MiUpO1xcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgNHB4IHJnYmEoMjM0LCAyMzgsIDI0MiwgMC43KSk7XFxuICBhbmltYXRpb246IGJnVHdpbmtsZSAzLjRzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcXG59XFxuLyogZ3JvdW5kOiBjb29sIG1vb25saWdodCBwb29saW5nIGZhaW50bHkgYWxvbmcgdGhlIGhvcml6b24uICovXFxuLndlYXRoZXJCZy5iZy1jbGVhci1uaWdodCA+IC5iZ0xheWVyLS1ncm91bmQge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMTQwLCAxNjAsIDE3NCwgMC4xNCksIHJnYmEoMTQwLCAxNjAsIDE3NCwgMCkgMTAwJSk7XFxuICBhbmltYXRpb246IGJnR3JvdW5kIDE0cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XFxufVxcblxcbi8qIENMT1VEWSAoYWxzbyBvdmVyY2FzdCwgcGFydGx5LCBhbmQgdGhlIG5ldXRyYWwgZmFsbGJhY2spIOKAlCBjb29sIGdyZXktYmx1ZSB3aXRoXFxuICAgdHdvIHNvZnQgY2xvdWQgbWFzc2VzIGRyaWZ0aW5nIGxhdGVyYWxseS4gKi9cXG4ud2VhdGhlckJnLmJnLWNsb3VkeSB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMjMzMDNmIDAlLCAjMTcyMjMwIDU1JSwgdmFyKC0tZ3JvdW5kKSAxMDAlKTtcXG59XFxuLndlYXRoZXJCZy5iZy1jbG91ZHk6OmJlZm9yZSB7XFxuICB0b3A6IDE0JTtcXG4gIGxlZnQ6IC0yMCU7XFxuICB3aWR0aDogNTV2bWF4O1xcbiAgaGVpZ2h0OiAyNHZtYXg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IGNlbnRlciwgcmdiYSgxNDAsIDE2MCwgMTc0LCAwLjIpLCByZ2JhKDE0MCwgMTYwLCAxNzQsIDApIDcwJSk7XFxuICBhbmltYXRpb246IGJnQ2xvdWQgNDBzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcXG59XFxuLndlYXRoZXJCZy5iZy1jbG91ZHk6OmFmdGVyIHtcXG4gIGJvdHRvbTogMTAlO1xcbiAgcmlnaHQ6IC0yNCU7XFxuICB3aWR0aDogNjB2bWF4O1xcbiAgaGVpZ2h0OiAyNnZtYXg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IGNlbnRlciwgcmdiYSgxMTEsIDEzMCwgMTQ4LCAwLjE2KSwgcmdiYSgxMTEsIDEzMCwgMTQ4LCAwKSA3MCUpO1xcbiAgYW5pbWF0aW9uOiBiZ0Nsb3VkIDUycyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGUtcmV2ZXJzZTtcXG59XFxuLyogZmFyOiBhIHdpZGUsIGhlYXZpbHkgYmx1cnJlZCBjbG91ZCBiYW5kIGhpZ2ggaW4gdGhlIHNjZW5lLCBiYXJlbHkgbW92aW5nLiAqL1xcbi53ZWF0aGVyQmcuYmctY2xvdWR5ID4gLmJnTGF5ZXItLWZhciB7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoODAlIDQwJSBhdCAzMCUgMjIlLCByZ2JhKDE0MCwgMTYwLCAxNzQsIDAuMTYpLCByZ2JhKDE0MCwgMTYwLCAxNzQsIDApIDcwJSk7XFxuICBmaWx0ZXI6IGJsdXIoMTBweCk7XFxuICBhbmltYXRpb246IGJnQ2xvdWQgNzBzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZS1yZXZlcnNlO1xcbn1cXG4vKiBuZWFyOiBhIHNtYWxsZXIsIHNoYXJwZXIgY2xvdWQgZHJpZnRpbmcgZmFzdGVyIGFjcm9zcyB0aGUgZm9yZWdyb3VuZC4gKi9cXG4ud2VhdGhlckJnLmJnLWNsb3VkeSA+IC5iZ0xheWVyLS1uZWFyIHtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgzNCUgMjYlIGF0IDYyJSA0MCUsIHJnYmEoMTc2LCAxOTIsIDIwNCwgMC4yKSwgcmdiYSgxNzYsIDE5MiwgMjA0LCAwKSA2OCUpO1xcbiAgZmlsdGVyOiBibHVyKDJweCk7XFxuICBhbmltYXRpb246IGJnQ2xvdWQgMzBzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcXG59XFxuLyogZ3JvdW5kOiBkaW0gaG9yaXpvbiBsaWdodCB1bmRlciB0aGUgb3ZlcmNhc3QuICovXFxuLndlYXRoZXJCZy5iZy1jbG91ZHkgPiAuYmdMYXllci0tZ3JvdW5kIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDE0MCwgMTYwLCAxNzQsIDAuMTIpLCByZ2JhKDE0MCwgMTYwLCAxNzQsIDApIDEwMCUpO1xcbiAgYW5pbWF0aW9uOiBiZ0dyb3VuZCAxNnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xcbn1cXG5cXG4vKiBSQUlOIChhbHNvIGRyaXp6bGUsIHNob3dlcnMsIHRodW5kZXIpIOKAlCBkYXJrZXIgc2t5LCBhIGhlYXZ5IGRyaWZ0aW5nIGNsb3VkLFxcbiAgIGFuZCBhIGZhaW50IGRpYWdvbmFsIHJhaW4gc2hlZW4gc2xpZGluZyBkb3duLiAqL1xcbi53ZWF0aGVyQmcuYmctcmFpbiB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMWMyNzM0IDAlLCAjMTIxYjI2IDU1JSwgdmFyKC0tZ3JvdW5kKSAxMDAlKTtcXG59XFxuLndlYXRoZXJCZy5iZy1yYWluOjpiZWZvcmUge1xcbiAgdG9wOiAtOCU7XFxuICBsZWZ0OiAtMTglO1xcbiAgd2lkdGg6IDYydm1heDtcXG4gIGhlaWdodDogMzB2bWF4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCBjZW50ZXIsIHJnYmEoMTIwLCAxNDAsIDE1OCwgMC4yMiksIHJnYmEoMTIwLCAxNDAsIDE1OCwgMCkgNzAlKTtcXG4gIGFuaW1hdGlvbjogYmdDbG91ZCA0NnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xcbn1cXG4ud2VhdGhlckJnLmJnLXJhaW46OmFmdGVyIHtcXG4gIGluc2V0OiAwO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCg3NGRlZywgcmdiYSgxNjAsIDE5MCwgMjE0LCAwLjA3KSAwIDFweCwgcmdiYSgxNjAsIDE5MCwgMjE0LCAwKSAxcHggOXB4KTtcXG4gIGFuaW1hdGlvbjogYmdSYWluIDAuOXMgbGluZWFyIGluZmluaXRlO1xcbn1cXG4vKiBmYXI6IGEgYnJvYWQsIGJsdXJyZWQgc3Rvcm0gY2xvdWQgZHJpZnRpbmcgc2xvd2x5IGhpZ2ggb3ZlcmhlYWQuICovXFxuLndlYXRoZXJCZy5iZy1yYWluID4gLmJnTGF5ZXItLWZhciB7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoOTAlIDQ0JSBhdCA2NiUgMTIlLCByZ2JhKDEyMCwgMTQwLCAxNTgsIDAuMiksIHJnYmEoMTIwLCAxNDAsIDE1OCwgMCkgNzAlKTtcXG4gIGZpbHRlcjogYmx1cig5cHgpO1xcbiAgYW5pbWF0aW9uOiBiZ0Nsb3VkIDYwcyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGUtcmV2ZXJzZTtcXG59XFxuLyogbmVhcjogY29hcnNlciwgZmFzdGVyIHJhaW4gc3RyZWFrcyBhdCBhIHN0ZWVwZXIgYW5nbGUgZm9yIGZvcmVncm91bmQgZGVwdGguICovXFxuLndlYXRoZXJCZy5iZy1yYWluID4gLmJnTGF5ZXItLW5lYXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCg3OGRlZywgcmdiYSgxODAsIDIwNiwgMjI2LCAwLjExKSAwIDJweCwgcmdiYSgxODAsIDIwNiwgMjI2LCAwKSAycHggMTVweCk7XFxuICBhbmltYXRpb246IGJnUmFpbk5lYXIgMC41NXMgbGluZWFyIGluZmluaXRlO1xcbn1cXG4vKiBncm91bmQ6IGEgd2V0IHNoZWVuIGNhdGNoaW5nIHRoZSBsaWdodCBhdCB0aGUgYm90dG9tIG9mIHRoZSBzY2VuZS4gKi9cXG4ud2VhdGhlckJnLmJnLXJhaW4gPiAuYmdMYXllci0tZ3JvdW5kIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDEyMCwgMTQwLCAxNTgsIDAuMTgpLCByZ2JhKDEyMCwgMTQwLCAxNTgsIDApIDEwMCUpO1xcbiAgYW5pbWF0aW9uOiBiZ0dyb3VuZCA5cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XFxufVxcblxcbi8qIFNOT1cg4oCUIGNvb2wgbGlnaHQgc2t5IHdpdGggc2xvd2x5IGRyaWZ0aW5nIGZsYWtlcy4gKi9cXG4ud2VhdGhlckJnLmJnLXNub3cge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzJhMzk0OSAwJSwgIzFhMjYzNCA1NSUsIHZhcigtLWdyb3VuZCkgMTAwJSk7XFxufVxcbi53ZWF0aGVyQmcuYmctc25vdzo6YmVmb3JlLFxcbi53ZWF0aGVyQmcuYmctc25vdzo6YWZ0ZXIge1xcbiAgaW5zZXQ6IDA7XFxuICBiYWNrZ3JvdW5kLWltYWdlOlxcbiAgICByYWRpYWwtZ3JhZGllbnQoMnB4IDJweCBhdCAyMCUgMTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCksIHRyYW5zcGFyZW50IDYwJSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgyLjRweCAyLjRweCBhdCA2NiUgMjIlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyksIHRyYW5zcGFyZW50IDYwJSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgxLjhweCAxLjhweCBhdCA0MCUgNDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpLCB0cmFuc3BhcmVudCA2MCUpLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMnB4IDJweCBhdCA4NCUgNTQlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyksIHRyYW5zcGFyZW50IDYwJSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgyLjJweCAyLjJweCBhdCAxMiUgNzAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyksIHRyYW5zcGFyZW50IDYwJSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgxLjhweCAxLjhweCBhdCA1NCUgODYlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjUpLCB0cmFuc3BhcmVudCA2MCUpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDUwJTtcXG59XFxuLndlYXRoZXJCZy5iZy1zbm93OjpiZWZvcmUge1xcbiAgYW5pbWF0aW9uOiBiZ1Nub3cgMTRzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuLndlYXRoZXJCZy5iZy1zbm93OjphZnRlciB7XFxuICBvcGFjaXR5OiAwLjY7XFxuICBhbmltYXRpb246IGJnU25vdyAyMnMgbGluZWFyIGluZmluaXRlO1xcbn1cXG4vKiBmYXI6IHRpbnksIGZhaW50LCBibHVycmVkIGZsYWtlcyBmYWxsaW5nIHNsb3dseSBpbiB0aGUgZGVlcCBiYWNrZ3JvdW5kLiAqL1xcbi53ZWF0aGVyQmcuYmctc25vdyA+IC5iZ0xheWVyLS1mYXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTpcXG4gICAgcmFkaWFsLWdyYWRpZW50KDFweCAxcHggYXQgMTYlIDEyJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU1KSwgdHJhbnNwYXJlbnQgNjAlKSxcXG4gICAgcmFkaWFsLWdyYWRpZW50KDEuMnB4IDEuMnB4IGF0IDQ4JSAyNiUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSwgdHJhbnNwYXJlbnQgNjAlKSxcXG4gICAgcmFkaWFsLWdyYWRpZW50KDFweCAxcHggYXQgNzIlIDE4JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLCB0cmFuc3BhcmVudCA2MCUpLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMS4xcHggMS4xcHggYXQgMzAlIDQ0JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLCB0cmFuc3BhcmVudCA2MCUpLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMXB4IDFweCBhdCA4OCUgNDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpLCB0cmFuc3BhcmVudCA2MCUpLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMS4ycHggMS4ycHggYXQgNjAlIDYyJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLCB0cmFuc3BhcmVudCA2MCUpLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMXB4IDFweCBhdCAyMiUgNzglLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpLCB0cmFuc3BhcmVudCA2MCUpLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMS4xcHggMS4xcHggYXQgNzglIDg0JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KSwgdHJhbnNwYXJlbnQgNjAlKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSA1MCU7XFxuICBmaWx0ZXI6IGJsdXIoMXB4KTtcXG4gIG9wYWNpdHk6IDAuNztcXG4gIGFuaW1hdGlvbjogYmdTbm93IDMwcyBsaW5lYXIgaW5maW5pdGU7XFxufVxcbi8qIG5lYXI6IGxhcmdlIGZvcmVncm91bmQgZmxha2VzIHdpdGggYSBzb2Z0IGdsb3csIGZhbGxpbmcgZmFzdC4gKi9cXG4ud2VhdGhlckJnLmJnLXNub3cgPiAuYmdMYXllci0tbmVhciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOlxcbiAgICByYWRpYWwtZ3JhZGllbnQoMy40cHggMy40cHggYXQgMjYlIDE2JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk1KSwgdHJhbnNwYXJlbnQgNjIlKSxcXG4gICAgcmFkaWFsLWdyYWRpZW50KDNweCAzcHggYXQgNjIlIDM0JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpLCB0cmFuc3BhcmVudCA2MiUpLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMy42cHggMy42cHggYXQgODQlIDYwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk1KSwgdHJhbnNwYXJlbnQgNjIlKSxcXG4gICAgcmFkaWFsLWdyYWRpZW50KDMuMnB4IDMuMnB4IGF0IDE0JSA2OCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KSwgdHJhbnNwYXJlbnQgNjIlKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSA1MCU7XFxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCAzcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpKTtcXG4gIGFuaW1hdGlvbjogYmdTbm93IDhzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuLyogZ3JvdW5kOiBhIGxpdCBiYW5kIG9mIHNldHRsZWQgc25vdyBnbG93aW5nIGF0IHRoZSBib3R0b20gb2YgdGhlIHNjZW5lLiAqL1xcbi53ZWF0aGVyQmcuYmctc25vdyA+IC5iZ0xheWVyLS1ncm91bmQge1xcbiAgaGVpZ2h0OiAzMCU7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgyMzQsIDI0MCwgMjQ2LCAwLjI4KSwgcmdiYSgyMzQsIDI0MCwgMjQ2LCAwLjA1KSA2MCUsIHJnYmEoMjM0LCAyNDAsIDI0NiwgMCkgMTAwJSk7XFxuICBhbmltYXRpb246IGJnR3JvdW5kIDExcyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XFxufVxcblxcbi8qIEZPRyAoYWxzbyBtaXN0LCBoYXplKSDigJQgbXV0ZWQgc2t5IHdpdGggc2xvdyBob3Jpem9udGFsIGhhemUgYmFuZHMuICovXFxuLndlYXRoZXJCZy5iZy1mb2cge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzIzMmMzNSAwJSwgIzE4MjAyOSA1NSUsIHZhcigtLWdyb3VuZCkgMTAwJSk7XFxufVxcbi53ZWF0aGVyQmcuYmctZm9nOjpiZWZvcmUge1xcbiAgaW5zZXQ6IDA7XFxuICBiYWNrZ3JvdW5kLWltYWdlOlxcbiAgICBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgxNDAsIDE2MCwgMTc0LCAwKSAwJSwgcmdiYSgxNDAsIDE2MCwgMTc0LCAwLjEyKSAzMCUsIHJnYmEoMTQwLCAxNjAsIDE3NCwgMCkgNDYlKSxcXG4gICAgbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMTQwLCAxNjAsIDE3NCwgMCkgNTQlLCByZ2JhKDE0MCwgMTYwLCAxNzQsIDAuMSkgNzIlLCByZ2JhKDE0MCwgMTYwLCAxNzQsIDApIDg4JSk7XFxuICBhbmltYXRpb246IGJnRm9nIDI0cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XFxufVxcbi8qIGZhcjogYSB0aGluLCBoaWdoIGhhemUgYmFuZCBkcmlmdGluZyB0aGUgb3RoZXIgd2F5LCBzbG93ZXIuICovXFxuLndlYXRoZXJCZy5iZy1mb2cgPiAuYmdMYXllci0tZmFyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDE0MCwgMTYwLCAxNzQsIDApIDglLCByZ2JhKDE0MCwgMTYwLCAxNzQsIDAuMDgpIDIyJSwgcmdiYSgxNDAsIDE2MCwgMTc0LCAwKSAzOCUpO1xcbiAgZmlsdGVyOiBibHVyKDNweCk7XFxuICBvcGFjaXR5OiAwLjg7XFxuICBhbmltYXRpb246IGJnRm9nIDM0cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGUtcmV2ZXJzZTtcXG59XFxuLyogbmVhcjogYSBzb2Z0LCBoZWF2aWx5IGJsdXJyZWQgaGF6ZSBtYXNzIGxvdyBpbiB0aGUgc2NlbmUuICovXFxuLndlYXRoZXJCZy5iZy1mb2cgPiAuYmdMYXllci0tbmVhciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgxNzYsIDE5MiwgMjA0LCAwLjE0KSAwJSwgcmdiYSgxNzYsIDE5MiwgMjA0LCAwLjA2KSA0MCUsIHJnYmEoMTc2LCAxOTIsIDIwNCwgMCkgNjglKTtcXG4gIGZpbHRlcjogYmx1cig4cHgpO1xcbiAgYW5pbWF0aW9uOiBiZ0ZvZyAxOHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xcbn1cXG4vKiBncm91bmQ6IGEgZGVuc2UgZm9nIHBvb2wgc2V0dGxpbmcgYWxvbmcgdGhlIGJvdHRvbS4gKi9cXG4ud2VhdGhlckJnLmJnLWZvZyA+IC5iZ0xheWVyLS1ncm91bmQge1xcbiAgaGVpZ2h0OiA0MiU7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgxNzYsIDE5MiwgMjA0LCAwLjIyKSwgcmdiYSgxNzYsIDE5MiwgMjA0LCAwKSAxMDAlKTtcXG4gIGFuaW1hdGlvbjogYmdHcm91bmQgMTVzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBiZ1N1biB7XFxuICAwJSAgIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMSk7ICAgICAgICBvcGFjaXR5OiAwLjc7IH1cXG4gIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNCUsIDMlKSBzY2FsZSgxLjEyKTsgIG9wYWNpdHk6IDE7IH1cXG59XFxuXFxuQGtleWZyYW1lcyBiZ1R3aW5rbGUge1xcbiAgMCUgICB7IG9wYWNpdHk6IDAuNDsgfVxcbiAgMTAwJSB7IG9wYWNpdHk6IDE7IH1cXG59XFxuXFxuQGtleWZyYW1lcyBiZ0Nsb3VkIHtcXG4gIDAlICAgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH1cXG4gIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAlKTsgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJnUmFpbiB7XFxuICAwJSAgIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwOyB9XFxuICAxMDAlIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogLTlweCAzMnB4OyB9XFxufVxcblxcbkBrZXlmcmFtZXMgYmdTbm93IHtcXG4gIDAlICAgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7IH1cXG4gIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cXG59XFxuXFxuQGtleWZyYW1lcyBiZ0ZvZyB7XFxuICAwJSAgIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00JSk7IG9wYWNpdHk6IDAuNzsgfVxcbiAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0JSk7ICBvcGFjaXR5OiAxOyB9XFxufVxcblxcbi8qIEEgc3RlZXBlciwgZmFzdGVyIGZhbGwgZm9yIHRoZSBuZWFyIHJhaW4gcGxhbmUgc28gaXQgcmVhZHMgYWhlYWQgb2YgOjphZnRlci4gKi9cXG5Aa2V5ZnJhbWVzIGJnUmFpbk5lYXIge1xcbiAgMCUgICB7IGJhY2tncm91bmQtcG9zaXRpb246IDAgMDsgfVxcbiAgMTAwJSB7IGJhY2tncm91bmQtcG9zaXRpb246IC0xNXB4IDQ0cHg7IH1cXG59XFxuXFxuLyogQSBnZW50bGUgYnJlYXRoZSBmb3IgdGhlIGdyb3VuZC1saWdodGluZyBhY2NlbnQgYWNyb3NzIGV2ZXJ5IGNhdGVnb3J5LiAqL1xcbkBrZXlmcmFtZXMgYmdHcm91bmQge1xcbiAgMCUgICB7IG9wYWNpdHk6IDAuNjU7IH1cXG4gIDEwMCUgeyBvcGFjaXR5OiAxOyB9XFxufVxcblxcbi8qIEZyb3plbiB3aGlsZSB0aGUgdGFiIGlzIGhpZGRlbiAoc2t5LmpzIHRvZ2dsZXMgLnBhdXNlZCBvbiB2aXNpYmlsaXR5Y2hhbmdlKS4gKi9cXG4ud2VhdGhlckJnLnBhdXNlZDo6YmVmb3JlLFxcbi53ZWF0aGVyQmcucGF1c2VkOjphZnRlcixcXG4ud2VhdGhlckJnLnBhdXNlZCA+IC5iZ0xheWVyIHtcXG4gIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XFxufVxcblxcbi8qIEhhbHQgZXZlcnkgdHJlYXRtZW50J3MgbW90aW9uIHVuZGVyIGEgcmVkdWNlZC1tb3Rpb24gcHJlZmVyZW5jZSDigJQgb25lIHN0YXRpY1xcbiAgIGZyYW1lIHBlciBjYXRlZ29yeS4gKi9cXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xcbiAgLndlYXRoZXJCZzo6YmVmb3JlLFxcbiAgLndlYXRoZXJCZzo6YWZ0ZXIsXFxuICAud2VhdGhlckJnID4gLmJnTGF5ZXIge1xcbiAgICBhbmltYXRpb246IG5vbmU7XFxuICB9XFxufVxcblxcbi8qIFRoZSByaWJib24gYW5kIGl0cyByZWFkb3V0IHNoYXJlIG9uZSBmbGV4IGNvbHVtbiBzbyBhIG1vYmlsZSBsb2NhdGlvbiByb3RhdGlvblxcbiAgIHNsaWRlcyB0aGVtIGFzIGEgc2luZ2xlIHVuaXQuIEl0IGNhcnJpZXMgdGhlIHNhbWUgMjhweCBnYXAgI2FwcCB1c2VkIHRvIHB1dFxcbiAgIGJldHdlZW4gdGhlIHJpYmJvbiBhbmQgdGhlIHJlYWRvdXQsIHNvIHdyYXBwaW5nIHRoZW0gaXMgbGF5b3V0LXRyYW5zcGFyZW50LiAqL1xcbiN3ZWF0aGVyQ2FyZCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qIHN0YWNrcyBhYm92ZSB0aGUgLndlYXRoZXJCZyBkcmlmdCBsYXllciAqL1xcbiAgei1pbmRleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyOHB4O1xcbn1cXG5cXG4vKiBSaWJib246IHRoZSBTVkcgc2NhbGVzIHRvIHRoZSBjb2x1bW4gd2lkdGggdmlhIHRoZSB2aWV3Qm94LCBzbyBhbGwgNzIgaG91cnNcXG4gICBhcmUgb24gc2NyZWVuIGF0IGFueSB3aWR0aCBkb3duIHRvIDM4MHB4IHdpdGhvdXQgc2Nyb2xsIG9yIHBhbi4gKi9cXG4jcmliYm9uV3JhcCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI3JpYmJvblN2ZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi5yaWJib24tY3VydmUge1xcbiAgc3Ryb2tlLXdpZHRoOiAyLjU7XFxuICBzdHJva2UtbGluZWNhcDogcm91bmQ7XFxuICBzdHJva2UtbGluZWpvaW46IHJvdW5kO1xcbn1cXG5cXG4vKiBEYXkgYm91bmRhcnkgaGFpcmxpbmVzIGF0IGhvdXJzIDI0IGFuZCA0OC4gKi9cXG4ucmliYm9uLWhhaXJsaW5lIHtcXG4gIHN0cm9rZTogdmFyKC0tcnVsZSk7XFxuICBzdHJva2Utd2lkdGg6IDE7XFxufVxcblxcbi5yaWJib24tdGljayB7XFxuICBmaWxsOiB2YXIoLS1tdXRlZCk7XFxuICBmb250LWZhbWlseTogdmFyKC0tbW9ubyk7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbn1cXG5cXG4ucmliYm9uLW5vd2xpbmUge1xcbiAgc3Ryb2tlOiB2YXIoLS1tdXRlZCk7XFxuICBzdHJva2Utd2lkdGg6IDE7XFxuICBzdHJva2UtZGFzaGFycmF5OiAyIDM7XFxuICBvcGFjaXR5OiAwLjc7XFxufVxcblxcbi5yaWJib24tZG90IHtcXG4gIHN0cm9rZTogdmFyKC0tZ3JvdW5kKTtcXG4gIHN0cm9rZS13aWR0aDogMjtcXG59XFxuXFxuLyogUmVhZG91dCBiZW5lYXRoIHRoZSBjdXJ2ZS4gKi9cXG4jcmVhZG91dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDRweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLyogTG9jYXRpb24gbmFtZSBwYWlyZWQgd2l0aCB0aGUgQy9GIHVuaXQgc3dpdGNoIG9uIG9uZSBjZW50ZXJlZCByb3cuICovXFxuI2xvY2F0aW9uUm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbiNsb2NhdGlvbk5hbWUge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1vbm8pO1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xcbn1cXG5cXG4vKiBTZWdtZW50ZWQgQy9GIHRvZ2dsZTogYSBjb21wYWN0IHBpbGwsIHRoZSBhY3RpdmUgb3B0aW9uIGZpbGxlZCB3aXRoIHRoZSBydWxlXFxuICAgY29sb3VyLiBEaXNwbGF5LW9ubHkg4oCUIGZsaXBzIHRoZSB0ZW1wZXJhdHVyZSByZWFkb3V0cyBiZXR3ZWVuIMKwQyBhbmQgwrBGLiAqL1xcbiN1bml0U3dpdGNoIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ydWxlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnVuaXRPcHQge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1vbm8pO1xcbiAgZm9udC1zaXplOiAxMXB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gIHBhZGRpbmc6IDNweCA5cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi51bml0T3B0LmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ydWxlKTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcXG59XFxuXFxuLyogU2F2ZWQtbG9jYXRpb24gbmF2aWdhdGlvbjogcHJldi9uZXh0IGNoZXZyb25zIGZsYW5raW5nIHRoZSBkb3Qgcm93LiBUaGUgd2hvbGVcXG4gICByb3cgaXMgaGlkZGVuIGF0IGEgY291bnQgb2Ygb25lIChhIHNpbmdsZSBsb2NhdGlvbiBuZWVkcyBubyBhZmZvcmRhbmNlKTsgdGhlXFxuICAgYXJyb3dzIGFyZSBkZXNrdG9wLW9ubHkgYW5kIGRyb3Agb3V0IGF0IOKJpDQ4MHB4IHdoZXJlIHN3aXBlIHRha2VzIG92ZXIuICovXFxuLm5hdlJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgbWFyZ2luOiA0cHggMCAycHg7XFxufVxcblxcbi5uYXZSb3cuaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5hcnJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYXJyb3c6aG92ZXIge1xcbiAgY29sb3I6ICNFQUVFRjI7XFxufVxcblxcbi5hcnJvdyBzdmcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMTRweDtcXG59XFxuXFxuLyogU2F2ZWQtbG9jYXRpb24gZG90czogb25lIHBlciBzYXZlZCBsb2NhdGlvbiwgdGhlIGFjdGl2ZSBvbmUgZmlsbGVkLiAqL1xcbiNkb3RSb3cge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiBvZmZzZXQgcGFyZW50IGZvciB0aGUgZGVza3RvcCByZW1vdmUgcG9wb3ZlciAqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogOHB4O1xcbn1cXG5cXG4uZG90IHtcXG4gIHdpZHRoOiA4cHg7XFxuICBoZWlnaHQ6IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQ6ICMyRTNCNDU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcXG59XFxuXFxuLmRvdC5hY3RpdmUge1xcbiAgYmFja2dyb3VuZDogI0VBRUVGMjtcXG59XFxuXFxuLyogRGVza3RvcCByZW1vdmUtY29uZmlybWF0aW9uIHBvcG92ZXIsIGFuY2hvcmVkIGFib3ZlIHRoZSBsb25nLXByZXNzZWQgZG90LlxcbiAgIFRvdWNoIGtlZXBzIHRoZSBuYXRpdmUgY29uZmlybTsgdGhpcyBpcyB0aGUgbW91c2UvcGVuIHBhdGguICovXFxuLnJlbW92ZVBvcG92ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiBjYWxjKDEwMCUgKyAxMHB4KTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIHotaW5kZXg6IDIwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA4cHg7XFxuICBwYWRkaW5nOiAxMHB4IDEycHg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncm91bmQpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcnVsZSk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBib3gtc2hhZG93OiAwIDZweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC40NSk7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4vKiBEb3dud2FyZCBwb2ludGVyIGFycm93LCBib3JkZXJlZDogb3V0ZXIgdHJpYW5nbGUgaW4gdGhlIHJ1bGUgY29sb3VyIHdpdGggYW5cXG4gICBpbm5lciBncm91bmQtZmlsbGVkIHRyaWFuZ2xlIGxhaWQgYSBwaXhlbCBoaWdoZXIgb24gdG9wIG9mIGl0LiAqL1xcbi5yZW1vdmVQb3BvdmVyOjpiZWZvcmUsXFxuLnJlbW92ZVBvcG92ZXI6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgd2lkdGg6IDA7XFxuICBoZWlnaHQ6IDA7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbn1cXG5cXG4ucmVtb3ZlUG9wb3Zlcjo6YmVmb3JlIHtcXG4gIHRvcDogMTAwJTtcXG4gIGJvcmRlci13aWR0aDogN3B4IDdweCAwIDdweDtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcnVsZSkgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5yZW1vdmVQb3BvdmVyOjphZnRlciB7XFxuICB0b3A6IGNhbGMoMTAwJSAtIDFweCk7XFxuICBib3JkZXItd2lkdGg6IDZweCA2cHggMCA2cHg7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWdyb3VuZCkgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5yZW1vdmVQb3BvdmVyLW5hbWUge1xcbiAgY29sb3I6IHZhcigtLXRleHQpO1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbn1cXG5cXG4ucmVtb3ZlUG9wb3Zlci1hY3Rpb25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDhweDtcXG59XFxuXFxuLnJlbW92ZVBvcG92ZXItY2FuY2VsLFxcbi5yZW1vdmVQb3BvdmVyLWRlbGV0ZSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIHBhZGRpbmc6IDVweCAxMnB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcnVsZSk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5yZW1vdmVQb3BvdmVyLWNhbmNlbCB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcXG59XFxuXFxuLnJlbW92ZVBvcG92ZXItY2FuY2VsOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcXG59XFxuXFxuLnJlbW92ZVBvcG92ZXItZGVsZXRlIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXRleHQpO1xcbiAgY29sb3I6IHZhcigtLWdyb3VuZCk7XFxuICBib3JkZXItY29sb3I6IHZhcigtLXRleHQpO1xcbn1cXG5cXG4ucmVtb3ZlUG9wb3Zlci1kZWxldGU6aG92ZXIge1xcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOTIpO1xcbn1cXG5cXG4vKiBSb2JvdG8gTGlnaHQgNDBweCBmb3IgdGhlIHJlYWRpbmcuICovXFxuI2N1cnJlbnRUZW1wIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBsaW5lLWhlaWdodDogMS4xO1xcbn1cXG5cXG4jY3VycmVudENvbmRpdGlvbiB7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBjb2xvcjogdmFyKC0tdGV4dCk7XFxufVxcblxcbi8qIEZvdXItdXAgc3RhdCByb3c6IHRleHQgbGFiZWxzLCBubyBpY29ucy4gKi9cXG4jc3RhdFJvdyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gIGdhcDogMTBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLXRvcDogMTRweDtcXG59XFxuXFxuLnN0YXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA0cHg7XFxuICBwYWRkaW5nOiAxMnB4IDZweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXJ1bGUpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4uc3RhdC1sYWJlbCB7XFxuICBmb250LWZhbWlseTogdmFyKC0tbW9ubyk7XFxuICBmb250LXNpemU6IDEwcHg7XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcXG59XFxuXFxuLnN0YXQtdmFsdWUge1xcbiAgZm9udC1zaXplOiAxN3B4O1xcbiAgY29sb3I6IHZhcigtLXRleHQpO1xcbn1cXG5cXG4vKiBTZWFyY2ggZm9ybS4gKi9cXG4jc2VhcmNoRm9ybSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qIHN0YWNrcyBhYm92ZSB0aGUgLndlYXRoZXJCZyBkcmlmdCBsYXllciAqL1xcbiAgei1pbmRleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLyogSG9sZHMgdGhlIGlucHV0IGFuZCBpdHMgYXV0b2NvbXBsZXRlIGRyb3Bkb3duOyBwb3NpdGlvbjogcmVsYXRpdmUgYW5jaG9yc1xcbiAgICNzdWdnZXN0aW9ucyBiZW5lYXRoIHRoZSBpbnB1dC4gZmxleDogMSBzbyB0aGUgcGFpciBmaWxscyB0aGUgcm93IHRoZSB3YXkgdGhlXFxuICAgYmFyZSBpbnB1dCB1c2VkIHRvLiAqL1xcbiNzZWFyY2hJbnB1dFdyYXAge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZmxleDogMTtcXG4gIG1pbi13aWR0aDogMDtcXG59XFxuXFxuI3NlYXJjaElucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTJweCAxNHB4O1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1vbm8pO1xcbiAgZm9udC1zaXplOiAxNnB4OyAvKiAxNnB4IHNvIGlPUyBTYWZhcmkgZG9lc24ndCBhdXRvLXpvb20gdGhlIGlucHV0IG9uIGZvY3VzICovXFxuICBjb2xvcjogdmFyKC0tdGV4dCk7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXJ1bGUpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4jc2VhcmNoSW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XFxufVxcblxcbiNzZWFyY2hJbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1tdXRlZCk7XFxufVxcblxcbi8qIFdoaWxlIHRoZSBkcm9wZG93biBpcyBvcGVuIHRoZSBpbnB1dCdzIGJvdHRvbSBjb3JuZXJzIHNxdWFyZSBvZmYgYW5kIGl0c1xcbiAgIGJvdHRvbSBlZGdlIGRyb3BzIG91dCwgc28gaXQgcmVhZHMgYXMgb25lIGF0dGFjaGVkIHN1cmZhY2Ugd2l0aCAjc3VnZ2VzdGlvbnMuICovXFxuI3NlYXJjaEZvcm0uc3VnZ2VzdGluZyAjc2VhcmNoSW5wdXQge1xcbiAgYm9yZGVyLXJhZGl1czogOHB4IDhweCAwIDA7XFxuICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyogRmFpbGVkIGxvb2t1cDogcmVkZGVuZWQgYm9yZGVyLCBjdXJyZW50IHJpYmJvbiBsZWZ0IGluIHBsYWNlLiAqL1xcbiNzZWFyY2hGb3JtLmludmFsaWQgI3NlYXJjaElucHV0IHtcXG4gIGJvcmRlci1jb2xvcjogI0MyNDUyRDtcXG59XFxuXFxuLyogQXV0b2NvbXBsZXRlIGRyb3Bkb3duOiBoYW5ncyBvZmYgdGhlIGJvdHRvbSBvZiB0aGUgaW5wdXQsIG1hdGNoaW5nIGl0cyB3aWR0aFxcbiAgIGFuZCBjb250aW51aW5nIGl0cyBmb2N1c2VkIGJvcmRlciBpbnRvIGEgYm90dG9tLXJvdW5kZWQgcGFuZWwuICovXFxuI3N1Z2dlc3Rpb25zIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTAwJTtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHotaW5kZXg6IDEwO1xcbiAgbWF4LWhlaWdodDogMjQwcHg7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JvdW5kKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW11dGVkKTtcXG4gIGJvcmRlci10b3A6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgOHB4IDhweDtcXG59XFxuXFxuI3N1Z2dlc3Rpb25zLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc3VnZ2VzdGlvbi1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxuICBnYXA6IDhweDtcXG4gIHBhZGRpbmc6IDEwcHggMTRweDtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tb25vKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnN1Z2dlc3Rpb24taXRlbTpob3ZlcixcXG4uc3VnZ2VzdGlvbi1pdGVtLnNlbGVjdGVkIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXJ1bGUpO1xcbn1cXG5cXG4uc3VnZ2VzdGlvbi1jaXR5IHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcXG59XFxuXFxuLnN1Z2dlc3Rpb24tY291bnRyeSB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xcbn1cXG5cXG4jc2VhcmNoQnV0dG9uIHtcXG4gIHBhZGRpbmc6IDEycHggMjBweDtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tb25vKTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICBjb2xvcjogdmFyKC0tZ3JvdW5kKTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXRleHQpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jc2VhcmNoQnV0dG9uOmhvdmVyIHtcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjkyKTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxuICAjYXBwIHtcXG4gICAgZ2FwOiAyMnB4O1xcbiAgICBwYWRkaW5nOiAyNHB4IDE2cHg7XFxuICB9XFxuXFxuICAjd2VhdGhlckNhcmQge1xcbiAgICBnYXA6IDIycHg7XFxuICB9XFxuXFxuICAvKiBTd2lwZS1kaXJlY3Rpb24tYXdhcmUgc2xpZGUgb24gYSBjb21taXR0ZWQgbG9jYXRpb24gcm90YXRpb24uIGZhdm91cml0ZXMuanNcXG4gICAgIGFkZHMgLnNsaWRlLW5leHQgKHN3aXBlIGxlZnQgLT4gbmV4dCkgb3IgLnNsaWRlLXByZXYgKHN3aXBlIHJpZ2h0IC0+IHByZXYpXFxuICAgICB0byAjd2VhdGhlckNhcmQsIHRoZW4gcm90YXRlcy4gVGhlIGNhcmQgZmFkZXMgdG8gbm90aGluZyBhdCB0aGUga2V5ZnJhbWUnc1xcbiAgICAgbWlkcG9pbnQsIHdoaWNoIG1hc2tzIHRoZSBmb3JlY2FzdCBzd2FwOiByZW5kZXJSaWJib24oKSByZWJ1aWxkcyBpbnRvIHRoaXNcXG4gICAgIHNhbWUgY2FyZCB3aGlsZSBpdCdzIGludmlzaWJsZSwgc28gdGhlIG5ldyBjdXJ2ZSBzbGlkZXMgaW4gcmF0aGVyIHRoYW5cXG4gICAgIHNuYXBwaW5nLiBEZXNrdG9wIHJvdGF0ZXMgdmlhIHRoZSBhcnJvd3MgYW5kIG5ldmVyIGdldHMgdGhlIGNsYXNzLiAqL1xcbiAgI3dlYXRoZXJDYXJkLnNsaWRlLW5leHQge1xcbiAgICBhbmltYXRpb246IGNhcmRTbGlkZU5leHQgMjgwbXMgZWFzZS1vdXQ7XFxuICB9XFxuXFxuICAjd2VhdGhlckNhcmQuc2xpZGUtcHJldiB7XFxuICAgIGFuaW1hdGlvbjogY2FyZFNsaWRlUHJldiAyODBtcyBlYXNlLW91dDtcXG4gIH1cXG5cXG4gIEBrZXlmcmFtZXMgY2FyZFNsaWRlTmV4dCB7XFxuICAgIDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyBvcGFjaXR5OiAxOyB9XFxuICAgIDQwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNDJweCk7IG9wYWNpdHk6IDA7IH1cXG4gICAgNjAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQycHgpOyBvcGFjaXR5OiAwOyB9XFxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IG9wYWNpdHk6IDE7IH1cXG4gIH1cXG5cXG4gIEBrZXlmcmFtZXMgY2FyZFNsaWRlUHJldiB7XFxuICAgIDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyBvcGFjaXR5OiAxOyB9XFxuICAgIDQwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0MnB4KTsgb3BhY2l0eTogMDsgfVxcbiAgICA2MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTQycHgpOyBvcGFjaXR5OiAwOyB9XFxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IG9wYWNpdHk6IDE7IH1cXG4gIH1cXG5cXG4gIC8qIE1vYmlsZSBuYXZpZ2F0ZXMgYnkgc3dpcGU7IGRyb3AgdGhlIGFycm93cyBidXQga2VlcCB0aGUgZG90cy4gKi9cXG4gIC5hcnJvdyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAjc3RhdFJvdyB7XFxuICAgIGdhcDogOHB4O1xcbiAgfVxcblxcbiAgLnN0YXQge1xcbiAgICBwYWRkaW5nOiAxMHB4IDRweDtcXG4gIH1cXG5cXG4gIC5zdGF0LXZhbHVlIHtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgfVxcbn1cXG5cXG4vKiBSZXNwZWN0IGEgcmVkdWNlZC1tb3Rpb24gcHJlZmVyZW5jZTogcm90YXRlIGluc3RhbnRseSwgbm8gc2xpZGUuIGZhdm91cml0ZXMuanNcXG4gICBzdGlsbCBhZGRzIHRoZSBjbGFzcywgYnV0IHdpdGggdGhlIGFuaW1hdGlvbiBzdXBwcmVzc2VkIGFuaW1hdGlvbmVuZCBuZXZlclxcbiAgIGZpcmVzLCBzbyBpdHMgc2V0VGltZW91dCBmYWxsYmFjayBpcyB3aGF0IHN0cmlwcyB0aGUgY2xhc3MgYmFjayBvZmYuICovXFxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcXG4gICN3ZWF0aGVyQ2FyZC5zbGlkZS1uZXh0LFxcbiAgI3dlYXRoZXJDYXJkLnNsaWRlLXByZXYge1xcbiAgICBhbmltYXRpb246IG5vbmU7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gZmF2b3VyaXRlcy5qcyDigJQgc2F2ZWQgbG9jYXRpb25zIHdpdGggc3dpcGUtdG8tcm90YXRlLlxuLy9cbi8vIFRoZSBzZWFyY2ggZm9ybSBpcyB0aGUgYWRkIHBhdGg6IGEgc3VjY2Vzc2Z1bCBsb29rdXAgYXBwZW5kcyB0aGUgcXVlcnkgdG8gYVxuLy8gcGVyc2lzdGVkIGxpc3QgYW5kIHN3aXRjaGVzIHRvIGl0OyBhIGZhaWxlZCBvbmUgbGVhdmVzIHRoZSBsaXN0IHVudG91Y2hlZFxuLy8gKGxvZ2ljLmpzJ3MgaW52YWxpZElucHV0KCkgaGFzIGFscmVhZHkgcmVkZGVuZWQgdGhlIGlucHV0KS4gQSByb3cgb2YgZG90c1xuLy8gdW5kZXIgdGhlIGxvY2F0aW9uIG5hbWUgc2hvd3MgaG93IG1hbnkgbG9jYXRpb25zIGFyZSBzYXZlZCBhbmQgd2hpY2ggaXNcbi8vIGN1cnJlbnQuIEEgaG9yaXpvbnRhbCBzd2lwZSBhbnl3aGVyZSBvbiB0aGUgc2NyZWVuIHJvdGF0ZXMgdGhyb3VnaCB0aGVtXG4vLyAod3JhcHBpbmcgYXQgYm90aCBlbmRzKSwgYXMgZG8gdGhlIGRlc2t0b3AgcHJldi9uZXh0IGFycm93czsgY2xpY2tpbmcgYSBkb3Rcbi8vIG9wZW5zIGEgY29uZmlybWF0aW9uIHRvIHJlbW92ZSB0aGF0IGxvY2F0aW9uLlxuLy9cbi8vIFN0YXRlIHBlcnNpc3RzIHRvIGxvY2FsU3RvcmFnZSB1bmRlciBhIGB3ZWF0aGVyYXBwX2Aga2V5LCBtYXRjaGluZyB0aGVcbi8vIGNvbnZlbnRpb24gdXNlZCBhY3Jvc3MgdGhlIG90aGVyIHJlcG9zIOKAlCBubyBJbmRleGVkREIsIG5vIGNvb2tpZXMsIG5vIGJhY2tlbmQsXG4vLyBubyBuZXcgZGVwZW5kZW5jaWVzLiBGZXRjaCBzdHJhdGVneSBpcyBsYXp5IChmZXRjaCBvbiBhcnJpdmFsKTogYSBzd2lwZSBsZWF2ZXNcbi8vIHRoZSBwcmV2aW91cyByaWJib24gb24gc2NyZWVuIHVudGlsIHRoZSBuZXcgZm9yZWNhc3QgcmVzb2x2ZXMsIHJldXNpbmcgdGhlXG4vLyBzYW1lIGtlZXAtY3VycmVudC1yaWJib24gYmVoYXZpb3VyIGEgc2VhcmNoIGFscmVhZHkgaGFzLCBzbyBhIHN3aXBlIG5ldmVyXG4vLyBsYW5kcyBvbiBhIHNwaW5uZXIgKHRoZXJlIGlzIG5vIHNwaW5uZXIpIG9yIGEgYmxhbmsgc2NyZWVuLlxuLy9cbi8vIEV2ZXJ5IGxpc3RlbmVyIGhlcmUgaXMgd2lyZWQgZXhhY3RseSBvbmNlLCBmcm9tIGluaXRGYXZvdXJpdGVzKCkgYXQgYm9vdHN0cmFwXG4vLyDigJQgbmV2ZXIgZnJvbSB0aGUgcmVuZGVyIHBhdGgg4oCUIHNvIG5vdGhpbmcgbXVsdGlwbGllcyBhY3Jvc3MgZmV0Y2hlcy5cblxuaW1wb3J0IHsgZm9yZWNhc3RMb2dpYyB9IGZyb20gJy4vbG9naWMuanMnO1xuXG5jb25zdCBLRVkgPSAnd2VhdGhlcmFwcF9zYXZlZExvY2F0aW9ucyc7XG5jb25zdCBERUZBVUxUX1FVRVJZID0gJzk4MDUyJztcbmNvbnN0IFNXSVBFX1RIUkVTSE9MRCA9IDUwOyAvLyBweCBvZiBob3Jpem9udGFsIHRyYXZlbCB0byBjb21taXQgYSByb3RhdGlvblxuY29uc3QgU0xJREVfTVMgPSAyODA7IC8vIGNhcmQgc2xpZGUgZHVyYXRpb24g4oCUIG1pcnJvciBvZiB0aGUgQ1NTIGtleWZyYW1lXG5cbi8vIFNhdmVkIGxvY2F0aW9uIHF1ZXJ5IHN0cmluZ3MsIGluIG9yZGVyLiBjdXJyZW50SW5kZXggcG9pbnRzIGF0IHRoZSBhY3RpdmUgb25lLlxubGV0IGxvY2F0aW9ucyA9IFtdO1xubGV0IGN1cnJlbnRJbmRleCA9IDA7XG5cbmxldCBkb3RSb3c7IC8vICNkb3RSb3csIGNhY2hlZCBvbmNlIGJ5IGluaXRGYXZvdXJpdGVzKClcbmxldCBuYXZSb3c7IC8vIC5uYXZSb3cgd3JhcHBpbmcgdGhlIGRvdHMgYW5kIHRoZSBwcmV2L25leHQgYXJyb3dzXG5sZXQgY2FyZDsgLy8gI3dlYXRoZXJDYXJkIOKAlCB0aGUgcmliYm9uK3JlYWRvdXQgdW5pdCB0aGF0IHNsaWRlcyBvbiByb3RhdGlvblxubGV0IHNsaWRlVGltZW91dCA9IG51bGw7XG5cbi8vIFN3aXBlIHRyYWNraW5nLlxubGV0IHRvdWNoU3RhcnRYID0gbnVsbDtcbmxldCB0b3VjaFN0YXJ0WSA9IG51bGw7XG5sZXQgc3dpcGVBY3RpdmUgPSBmYWxzZTtcblxuLy8gVGhlIHNpbmdsZSBkZXNrdG9wIHJlbW92ZS1jb25maXJtYXRpb24gcG9wb3Zlciwgb3IgbnVsbC4gT25seSBvbmUgaXMgb3BlbiBhdFxuLy8gYSB0aW1lOyBhIG5ldyBvcGVuIGNsb3NlcyBhbnkgcHJpb3Igb25lIGZpcnN0LlxubGV0IG9wZW5Qb3BvdmVyID0gbnVsbDtcblxuZnVuY3Rpb24gbG9hZCgpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByYXcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShLRVkpO1xuICAgIGlmIChyYXcpIHtcbiAgICAgIGNvbnN0IHBhcnNlZCA9IEpTT04ucGFyc2UocmF3KTtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHBhcnNlZCkpIHtcbiAgICAgICAgbG9jYXRpb25zID0gcGFyc2VkLmZpbHRlcigocSkgPT4gdHlwZW9mIHEgPT09ICdzdHJpbmcnICYmIHEudHJpbSgpLmxlbmd0aCk7XG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgbG9jYXRpb25zID0gW107XG4gIH1cbn1cblxuZnVuY3Rpb24gc2F2ZSgpIHtcbiAgdHJ5IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShLRVksIEpTT04uc3RyaW5naWZ5KGxvY2F0aW9ucykpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgLy8gU3RvcmFnZSBkaXNhYmxlZC9mdWxsIOKAlCB0aGUgaW4tbWVtb3J5IGxpc3Qgc3RpbGwgd29ya3MgZm9yIHRoaXMgc2Vzc2lvbi5cbiAgfVxufVxuXG5mdW5jdGlvbiBjbGVhcihub2RlKSB7XG4gIHdoaWxlIChub2RlLmZpcnN0Q2hpbGQpIHsgbm9kZS5yZW1vdmVDaGlsZChub2RlLmZpcnN0Q2hpbGQpOyB9XG59XG5cbi8vIEZldGNoIHRoZSBhY3RpdmUgbG9jYXRpb24sIG9yIHRoZSBoYXJkIGRlZmF1bHQgd2hlbiB0aGUgbGlzdCBpcyBlbXB0eS4gTGF6eTpcbi8vIHRoZSByZW5kZXIgcGF0aCBrZWVwcyB0aGUgcHJldmlvdXMgcmliYm9uIHVudGlsIHRoaXMgcmVzb2x2ZXMuXG5mdW5jdGlvbiBzaG93Q3VycmVudCgpIHtcbiAgaWYgKGxvY2F0aW9ucy5sZW5ndGgpIHtcbiAgICBmb3JlY2FzdExvZ2ljLmZ1dHVyZUFQSUNhbGxzKGxvY2F0aW9uc1tjdXJyZW50SW5kZXhdKTtcbiAgfSBlbHNlIHtcbiAgICBmb3JlY2FzdExvZ2ljLmZ1dHVyZUFQSUNhbGxzKERFRkFVTFRfUVVFUlkpO1xuICB9XG59XG5cbi8vIFJlZHJhdyB0aGUgZG90IHJvdy4gSGlkZGVuIGF0IGEgY291bnQgb2Ygb25lIChhIHNpbmdsZSBsb2NhdGlvbiBuZWVkcyBub1xuLy8gYWZmb3JkYW5jZSkgYW5kIHdoZW4gZW1wdHkgKHRoZSBkZWZhdWx0IGZhbGxiYWNrIGlzIG5vdCBhIHNhdmVkIGxvY2F0aW9uKS5cbmZ1bmN0aW9uIHJlbmRlckRvdHMoKSB7XG4gIGlmICghZG90Um93KSB7IHJldHVybjsgfVxuICBjbG9zZVBvcG92ZXIoKTsgLy8gYSByZWRyYXcgZHJvcHMgdGhlIGRvdCB0aGUgcG9wb3ZlciB3YXMgYW5jaG9yZWQgdG9cbiAgY2xlYXIoZG90Um93KTtcblxuICAvLyBHYXRlIHRoZSB3aG9sZSAubmF2Um93IChkb3RzICsgYXJyb3dzKSB0b2dldGhlciwgc28gdGhlIGRlc2t0b3AgYXJyb3dzIHNoYXJlXG4gIC8vIHRoZSBkb3RzJyB2aXNpYmlsaXR5IHJ1bGUgYW5kIG5ldmVyIGRhbmdsZSBiZXNpZGUgYW4gZW1wdHkgcm93LlxuICBjb25zdCBnYXRlID0gbmF2Um93IHx8IGRvdFJvdztcbiAgY29uc3QgbiA9IGxvY2F0aW9ucy5sZW5ndGg7XG4gIGlmIChuIDw9IDEpIHtcbiAgICBnYXRlLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIHJldHVybjtcbiAgfVxuICBnYXRlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgY29uc3QgZG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZG90LmNsYXNzTmFtZSA9ICdkb3QnICsgKGkgPT09IGN1cnJlbnRJbmRleCA/ICcgYWN0aXZlJyA6ICcnKTtcbiAgICBkb3Quc2V0QXR0cmlidXRlKCdyb2xlJywgJ2J1dHRvbicpO1xuICAgIGRvdC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCBsb2NhdGlvbnNbaV0pO1xuICAgIHdpcmVEb3QoZG90LCBpKTtcbiAgICBkb3RSb3cuYXBwZW5kQ2hpbGQoZG90KTtcbiAgfVxufVxuXG4vLyBBIHNpbmdsZSBjbGljayBvbiBhIGRvdCBvcGVucyB0aGUgZGVsZXRlIGNvbmZpcm1hdGlvbiBmb3IgdGhhdCBsb2NhdGlvbjpcbi8vIHRoZSBuYXRpdmUgY29uZmlybSBvbiB0b3VjaCwgdGhlIGFuY2hvcmVkIGluLXBhZ2UgcG9wb3ZlciBvbiBkZXNrdG9wL21vdXNlXG4vLyAoY29uZmlybVJlbW92ZSBicmFuY2hlcyBvbiBwb2ludGVyVHlwZSkuIFRhcC10by1zZWxlY3QgaXMgaW50ZW50aW9uYWxseVxuLy8gZHJvcHBlZCDigJQgcm90YXRlKCksIGRyaXZlbiBieSB0aGUgc3dpcGUgZ2VzdHVyZSBhbmQgdGhlIGRlc2t0b3AgcHJldi9uZXh0XG4vLyBhcnJvd3MsIGlzIHRoZSBvbmx5IHdheSB0byBjaGFuZ2UgdGhlIGFjdGl2ZSBsb2NhdGlvbi4gVGhlIGNsaWNrIGV2ZW50IGlzIGFcbi8vIFBvaW50ZXJFdmVudCwgc28gaXRzIHBvaW50ZXJUeXBlIHBpY2tzIHRoZSB0b3VjaCB2cyBkZXNrdG9wIGJyYW5jaCBkaXJlY3RseS5cbmZ1bmN0aW9uIHdpcmVEb3QoZG90LCBpKSB7XG4gIGRvdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uZmlybVJlbW92ZShpLCBkb3QsIGUucG9pbnRlclR5cGUgfHwgJ21vdXNlJyk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjb25maXJtUmVtb3ZlKGksIGRvdCwgcG9pbnRlclR5cGUpIHtcbiAgaWYgKGkgPCAwIHx8IGkgPj0gbG9jYXRpb25zLmxlbmd0aCkgeyByZXR1cm47IH1cbiAgLy8gRGVza3RvcCAobW91c2UvcGVuKSBnZXRzIHRoZSBhbmNob3JlZCBpbi1wYWdlIHBvcG92ZXI7IHRvdWNoIGtlZXBzIHRoZVxuICAvLyBuYXRpdmUgY29uZmlybSB1bnRvdWNoZWQuXG4gIGlmIChwb2ludGVyVHlwZSAmJiBwb2ludGVyVHlwZSAhPT0gJ3RvdWNoJyAmJiBkb3QpIHtcbiAgICBvcGVuUmVtb3ZlUG9wb3ZlcihpLCBkb3QpO1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAod2luZG93LmNvbmZpcm0oJ1JlbW92ZSAnICsgbG9jYXRpb25zW2ldICsgJz8nKSkge1xuICAgIHJlbW92ZUxvY2F0aW9uKGkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG9uUG9wb3ZlcktleWRvd24oZSkge1xuICBpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNsb3NlUG9wb3ZlcigpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG9uT3V0c2lkZVBvaW50ZXIoZSkge1xuICBpZiAob3BlblBvcG92ZXIgJiYgIW9wZW5Qb3BvdmVyLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgIGNsb3NlUG9wb3ZlcigpO1xuICB9XG59XG5cbi8vIFRlYXIgZG93biB0aGUgc2luZ2xlIG9wZW4gcG9wb3ZlciBhbmQgaXRzIGRvY3VtZW50LWxldmVsIGxpc3RlbmVycy4gU2FmZSB0b1xuLy8gY2FsbCB3aGVuIG5vdGhpbmcgaXMgb3Blbi5cbmZ1bmN0aW9uIGNsb3NlUG9wb3ZlcigpIHtcbiAgaWYgKCFvcGVuUG9wb3ZlcikgeyByZXR1cm47IH1cbiAgb3BlblBvcG92ZXIucmVtb3ZlKCk7XG4gIG9wZW5Qb3BvdmVyID0gbnVsbDtcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uUG9wb3ZlcktleWRvd24sIHRydWUpO1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIG9uT3V0c2lkZVBvaW50ZXIsIHRydWUpO1xufVxuXG4vLyBBIHNtYWxsIGNvbmZpcm1hdGlvbiBwb3BvdmVyIGFuY2hvcmVkIGFib3ZlIHRoZSBjbGlja2VkIGRvdCwgaW5zaWRlXG4vLyAjZG90Um93LiBEZWxldGUgcmVtb3ZlcyB0aGUgbG9jYXRpb247IENhbmNlbCwgRXNjYXBlLCBvciBhbiBvdXRzaWRlIGNsaWNrXG4vLyBkaXNtaXNzZXMgd2l0aG91dCBjaGFuZ2VzLiBPbmx5IG9uZSBpcyBldmVyIG9wZW4gKG9wZW5SZW1vdmVQb3BvdmVyIGNsb3NlcyBhbnlcbi8vIHByaW9yIG9uZSBmaXJzdCkuXG5mdW5jdGlvbiBvcGVuUmVtb3ZlUG9wb3ZlcihpLCBkb3QpIHtcbiAgY2xvc2VQb3BvdmVyKCk7XG5cbiAgY29uc3QgcG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHBvcC5jbGFzc05hbWUgPSAncmVtb3ZlUG9wb3Zlcic7XG4gIHBvcC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnZGlhbG9nJyk7XG4gIHBvcC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCAnUmVtb3ZlICcgKyBsb2NhdGlvbnNbaV0pO1xuXG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbmFtZS5jbGFzc05hbWUgPSAncmVtb3ZlUG9wb3Zlci1uYW1lJztcbiAgbmFtZS50ZXh0Q29udGVudCA9IGxvY2F0aW9uc1tpXTtcblxuICBjb25zdCBhY3Rpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGFjdGlvbnMuY2xhc3NOYW1lID0gJ3JlbW92ZVBvcG92ZXItYWN0aW9ucyc7XG5cbiAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNhbmNlbEJ0bi50eXBlID0gJ2J1dHRvbic7XG4gIGNhbmNlbEJ0bi5jbGFzc05hbWUgPSAncmVtb3ZlUG9wb3Zlci1jYW5jZWwnO1xuICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcbiAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VQb3BvdmVyKTtcblxuICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgZGVsZXRlQnRuLnR5cGUgPSAnYnV0dG9uJztcbiAgZGVsZXRlQnRuLmNsYXNzTmFtZSA9ICdyZW1vdmVQb3BvdmVyLWRlbGV0ZSc7XG4gIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xuICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgaWR4ID0gaTtcbiAgICBjbG9zZVBvcG92ZXIoKTtcbiAgICByZW1vdmVMb2NhdGlvbihpZHgpO1xuICB9KTtcblxuICBhY3Rpb25zLmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XG4gIGFjdGlvbnMuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcbiAgcG9wLmFwcGVuZENoaWxkKG5hbWUpO1xuICBwb3AuYXBwZW5kQ2hpbGQoYWN0aW9ucyk7XG5cbiAgZG90Um93LmFwcGVuZENoaWxkKHBvcCk7XG4gIG9wZW5Qb3BvdmVyID0gcG9wO1xuXG4gIC8vIEFuY2hvciBob3Jpem9udGFsbHkgb3ZlciB0aGUgdHJpZ2dlcmluZyBkb3QncyBjZW50cmUgKG9mZnNldExlZnQgaXMgcmVsYXRpdmVcbiAgLy8gdG8gI2RvdFJvdywgd2hpY2ggaXMgdGhlIG9mZnNldCBwYXJlbnQg4oCUIHNlZSBpdHMgcG9zaXRpb246IHJlbGF0aXZlIHJ1bGUpLlxuICBwb3Auc3R5bGUubGVmdCA9IChkb3Qub2Zmc2V0TGVmdCArIGRvdC5vZmZzZXRXaWR0aCAvIDIpICsgJ3B4JztcblxuICAvLyBUaGUgY2xpY2sgKGFuZCBpdHMgcG9pbnRlcmRvd24pIHRoYXQgb3BlbmVkIHRoaXMgcG9wb3ZlciBoYXMgYWxyZWFkeSBmaXJlZCxcbiAgLy8gc28gYSBjYXB0dXJlIGxpc3RlbmVyIGZvciB0aGUgbmV4dCBwb2ludGVyZG93biBjbG9zZXMgdGhlIHBvcG92ZXIgb24gYW5cbiAgLy8gb3V0c2lkZSBjbGljayB3aXRob3V0IGltbWVkaWF0ZWx5IHN3YWxsb3dpbmcgaXRzIG93biBvcGVuaW5nIGV2ZW50LlxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25Qb3BvdmVyS2V5ZG93biwgdHJ1ZSk7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgb25PdXRzaWRlUG9pbnRlciwgdHJ1ZSk7XG59XG5cbi8vIFNsaWRlIHRoZSByaWJib24rcmVhZG91dCBjYXJkIGluIHRoZSBzd2lwZSBkaXJlY3Rpb24gb24gYSBjb21taXR0ZWQgcm90YXRpb24uXG4vLyBNb2JpbGUgb25seSDigJQgdGhlIGRlc2t0b3AgcHJldi9uZXh0IGFycm93cyB1cGRhdGUgaW5zdGFudGx5LCBzbyB0aGUgY2xhc3MgaXNcbi8vIGFkZGVkIG9ubHkgd2hlbiB0aGUg4omkNDgwcHggYnJlYWtwb2ludCBpcyBhY3RpdmUuIFRoZSBrZXlmcmFtZSBmYWRlcyB0aGUgY2FyZFxuLy8gdG8gbm90aGluZyBhdCBpdHMgbWlkcG9pbnQgKHNlZSAjd2VhdGhlckNhcmQuc2xpZGUtKiBpbiBzdHlsZS5jc3MpLCB3aGljaFxuLy8gbWFza3MgdGhlIGZvcmVjYXN0IHN3YXA6IHNob3dDdXJyZW50KCkncyBmZXRjaCByZXNvbHZlcyBhbmQgcmVuZGVyUmliYm9uKClcbi8vIHJlYnVpbGRzIGludG8gdGhpcyBzYW1lIGNhcmQsIHNvIHRoZSBuZXcgY3VydmUgc2xpZGVzIGJhY2sgaW4gcmF0aGVyIHRoYW5cbi8vIHNuYXBwaW5nLiBEaXJlY3Rpb24tYXdhcmU6IG91dGdvaW5nIGNvbnRlbnQgbGVhdmVzIHRvd2FyZCB0aGUgc3dpcGUsIGluY29taW5nXG4vLyBlbnRlcnMgZnJvbSB0aGUgb3Bwb3NpdGUgZWRnZS5cbmZ1bmN0aW9uIHBsYXlTbGlkZShkaXIpIHtcbiAgaWYgKCFjYXJkKSB7IHJldHVybjsgfVxuICBpZiAoIXdpbmRvdy5tYXRjaE1lZGlhIHx8ICF3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogNDgwcHgpJykubWF0Y2hlcykge1xuICAgIHJldHVybjsgLy8gZGVza3RvcCByb3RhdGVzIHZpYSB0aGUgYXJyb3dzLCB3aXRob3V0IHRoZSBzbGlkZVxuICB9XG4gIGNhcmQuY2xhc3NMaXN0LnJlbW92ZSgnc2xpZGUtbmV4dCcsICdzbGlkZS1wcmV2Jyk7XG4gIHZvaWQgY2FyZC5vZmZzZXRXaWR0aDsgLy8gcmVmbG93IHNvIGEgcmFwaWQgc2Vjb25kIHN3aXBlIHJlc3RhcnRzIHRoZSBhbmltYXRpb25cbiAgY2FyZC5jbGFzc0xpc3QuYWRkKGRpciA8IDAgPyAnc2xpZGUtcHJldicgOiAnc2xpZGUtbmV4dCcpO1xuXG4gIC8vIG9uQ2FyZEFuaW1FbmQgc3RyaXBzIHRoZSBjbGFzcyB3aGVuIHRoZSBrZXlmcmFtZSBmaW5pc2hlczsgdGhpcyBpcyB0aGVcbiAgLy8gZmFsbGJhY2sgZm9yIHRoZSByZWR1Y2VkLW1vdGlvbiBwYXRoLCB3aGVyZSB0aGUgYW5pbWF0aW9uIGlzIHN1cHByZXNzZWQgYW5kXG4gIC8vIGFuaW1hdGlvbmVuZCBuZXZlciBmaXJlcy5cbiAgaWYgKHNsaWRlVGltZW91dCkgeyBjbGVhclRpbWVvdXQoc2xpZGVUaW1lb3V0KTsgfVxuICBzbGlkZVRpbWVvdXQgPSBzZXRUaW1lb3V0KGNsZWFyU2xpZGUsIFNMSURFX01TICsgODApO1xufVxuXG5mdW5jdGlvbiBjbGVhclNsaWRlKCkge1xuICBpZiAoc2xpZGVUaW1lb3V0KSB7IGNsZWFyVGltZW91dChzbGlkZVRpbWVvdXQpOyBzbGlkZVRpbWVvdXQgPSBudWxsOyB9XG4gIGlmIChjYXJkKSB7IGNhcmQuY2xhc3NMaXN0LnJlbW92ZSgnc2xpZGUtbmV4dCcsICdzbGlkZS1wcmV2Jyk7IH1cbn1cblxuZnVuY3Rpb24gb25DYXJkQW5pbUVuZChlKSB7XG4gIGlmIChlLnRhcmdldCAhPT0gY2FyZCkgeyByZXR1cm47IH0gLy8gaWdub3JlIGFueSBidWJibGVkIGRlc2NlbmRhbnQgYW5pbWF0aW9uXG4gIGNsZWFyU2xpZGUoKTtcbn1cblxuLy8gUm90YXRlIHRocm91Z2ggdGhlIHNhdmVkIGxpc3Qgd2l0aCB3cmFwLiBOby1vcCBiZWxvdyB0d28gbG9jYXRpb25zLiBUaGUgc2xpZGVcbi8vIGNsYXNzIGdvZXMgb24gYmVmb3JlIHRoZSByZWRyYXcvZmV0Y2ggc28gdGhlIG91dGdvaW5nIGNvbnRlbnQgaXMgYWxyZWFkeVxuLy8gbW92aW5nIGFzIHRoZSBuZXcgZm9yZWNhc3QgaXMgcmVxdWVzdGVkIChwbGF5U2xpZGUgaXMgYSBuby1vcCBvZmYgbW9iaWxlKS5cbmZ1bmN0aW9uIHJvdGF0ZShkaXIpIHtcbiAgY29uc3QgbiA9IGxvY2F0aW9ucy5sZW5ndGg7XG4gIGlmIChuIDw9IDEpIHsgcmV0dXJuOyB9XG4gIGN1cnJlbnRJbmRleCA9IChjdXJyZW50SW5kZXggKyBkaXIgKyBuKSAlIG47XG4gIHBsYXlTbGlkZShkaXIpO1xuICByZW5kZXJEb3RzKCk7XG4gIHNob3dDdXJyZW50KCk7XG59XG5cbi8vIFJlbW92ZSBhIGxvY2F0aW9uLCBrZWVwaW5nIGEgY29oZXJlbnQgYWN0aXZlIHNlbGVjdGlvbjogcmVtb3ZpbmcgdGhlIGFjdGl2ZVxuLy8gb25lIG1vdmVzIHRvIGEgbmVpZ2hib3VyIHJhdGhlciB0aGFuIGxlYXZpbmcgYW4gZW1wdHkgdmlldzsgZW1wdHlpbmcgdGhlIGxpc3Rcbi8vIGZhbGxzIGJhY2sgdG8gdGhlIGRlZmF1bHQuXG5mdW5jdGlvbiByZW1vdmVMb2NhdGlvbihpKSB7XG4gIGlmIChpIDwgMCB8fCBpID49IGxvY2F0aW9ucy5sZW5ndGgpIHsgcmV0dXJuOyB9XG4gIGNvbnN0IHdhc0FjdGl2ZSA9IChpID09PSBjdXJyZW50SW5kZXgpO1xuXG4gIGxvY2F0aW9ucy5zcGxpY2UoaSwgMSk7XG4gIHNhdmUoKTtcblxuICBpZiAobG9jYXRpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgIGN1cnJlbnRJbmRleCA9IDA7XG4gICAgcmVuZGVyRG90cygpO1xuICAgIHNob3dDdXJyZW50KCk7IC8vIGZhbGxzIGJhY2sgdG8gREVGQVVMVF9RVUVSWVxuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpIDwgY3VycmVudEluZGV4KSB7XG4gICAgY3VycmVudEluZGV4LS07XG4gIH0gZWxzZSBpZiAoaSA9PT0gY3VycmVudEluZGV4ICYmIGN1cnJlbnRJbmRleCA+PSBsb2NhdGlvbnMubGVuZ3RoKSB7XG4gICAgY3VycmVudEluZGV4ID0gbG9jYXRpb25zLmxlbmd0aCAtIDE7XG4gIH1cblxuICByZW5kZXJEb3RzKCk7XG4gIGlmICh3YXNBY3RpdmUpIHsgc2hvd0N1cnJlbnQoKTsgfVxufVxuXG5mdW5jdGlvbiBvblRvdWNoU3RhcnQoZSkge1xuICBpZiAoZS50b3VjaGVzLmxlbmd0aCAhPT0gMSkgeyBzd2lwZUFjdGl2ZSA9IGZhbHNlOyByZXR1cm47IH1cbiAgLy8gTGVhdmUgdGhlIHNlYXJjaCBmaWVsZCdzIG93biB0b3VjaCBoYW5kbGluZyAoY3Vyc29yIHBsYWNlbWVudCkgYWxvbmUuXG4gIGlmIChlLnRhcmdldCAmJiBlLnRhcmdldC5jbG9zZXN0ICYmIGUudGFyZ2V0LmNsb3Nlc3QoJyNzZWFyY2hGb3JtJykpIHtcbiAgICBzd2lwZUFjdGl2ZSA9IGZhbHNlO1xuICAgIHJldHVybjtcbiAgfVxuICB0b3VjaFN0YXJ0WCA9IGUudG91Y2hlc1swXS5jbGllbnRYO1xuICB0b3VjaFN0YXJ0WSA9IGUudG91Y2hlc1swXS5jbGllbnRZO1xuICBzd2lwZUFjdGl2ZSA9IHRydWU7XG59XG5cbmZ1bmN0aW9uIG9uVG91Y2hFbmQoZSkge1xuICBpZiAoIXN3aXBlQWN0aXZlKSB7IHJldHVybjsgfVxuICBzd2lwZUFjdGl2ZSA9IGZhbHNlO1xuXG4gIGNvbnN0IHQgPSBlLmNoYW5nZWRUb3VjaGVzICYmIGUuY2hhbmdlZFRvdWNoZXNbMF07XG4gIGlmICghdCkgeyByZXR1cm47IH1cblxuICBjb25zdCBkeCA9IHQuY2xpZW50WCAtIHRvdWNoU3RhcnRYO1xuICBjb25zdCBkeSA9IHQuY2xpZW50WSAtIHRvdWNoU3RhcnRZO1xuXG4gIC8vIENvbW1pdCBvbmx5IG9uIGEgZGVjaXNpdmVseSBob3Jpem9udGFsIGdlc3R1cmUsIHNvIGEgdmVydGljYWwgcGFnZSBzY3JvbGxcbiAgLy8gKHxkeXwgPj0gfGR4fCkgaXMgbmV2ZXIgaGlqYWNrZWQuXG4gIGlmIChNYXRoLmFicyhkeCkgPiBTV0lQRV9USFJFU0hPTEQgJiYgTWF0aC5hYnMoZHgpID4gTWF0aC5hYnMoZHkpKSB7XG4gICAgcm90YXRlKGR4IDwgMCA/IDEgOiAtMSk7IC8vIHN3aXBlIGxlZnQgLT4gbmV4dCwgc3dpcGUgcmlnaHQgLT4gcHJldmlvdXNcbiAgfVxufVxuXG5mdW5jdGlvbiB3aXJlR2VzdHVyZXMoKSB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBvblRvdWNoU3RhcnQsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBvblRvdWNoRW5kLCB7IHBhc3NpdmU6IHRydWUgfSk7XG59XG5cbi8vIERlc2t0b3AgcHJldi9uZXh0IGFycm93cyBkcml2ZSB0aGUgc2FtZSByb3RhdGUoKSB0aGUgc3dpcGUgZ2VzdHVyZSBkb2VzLCBzb1xuLy8gYm90aCBwYXRocyBzaGFyZSBvbmUgY291bnRlci4gV2lyZWQgb25jZSBmcm9tIGluaXRGYXZvdXJpdGVzKCkuXG5mdW5jdGlvbiB3aXJlQXJyb3dzKCkge1xuICBjb25zdCBwcmV2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdlByZXYnKTtcbiAgY29uc3QgbmV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZOZXh0Jyk7XG4gIGlmIChwcmV2KSB7IHByZXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiByb3RhdGUoLTEpKTsgfVxuICBpZiAobmV4dCkgeyBuZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcm90YXRlKDEpKTsgfVxufVxuXG4vLyBBcHBlbmQgYSBzdWNjZXNzZnVsbHkgbG9va2VkLXVwIGxvY2F0aW9uIGFuZCBzd2l0Y2ggdG8gaXQuIENhbGxlZCBmcm9tIHRoZVxuLy8gc2VhcmNoIHN1Ym1pdCBoYW5kbGVyIEFGVEVSIHRoZSBmZXRjaCByZXNvbHZlcywgc28gdGhlIGZvcmVjYXN0IGlzIGFscmVhZHlcbi8vIHJlbmRlcmVkIOKAlCB0aGlzIG9ubHkgdXBkYXRlcyB0aGUgc2F2ZWQgbGlzdCBhbmQgdGhlIGRvdHMsIG5ldmVyIHJlLWZldGNoZXMuXG4vLyBBIGR1cGxpY2F0ZSBxdWVyeSBzd2l0Y2hlcyB0byB0aGUgZXhpc3RpbmcgZW50cnkgaW5zdGVhZCBvZiBhZGRpbmcgYSBzZWNvbmQuXG5leHBvcnQgZnVuY3Rpb24gYWRkTG9jYXRpb24ocXVlcnkpIHtcbiAgY29uc3QgcSA9IFN0cmluZyhxdWVyeSkudHJpbSgpO1xuICBpZiAoIXEpIHsgcmV0dXJuOyB9XG5cbiAgY29uc3QgZXhpc3RpbmcgPSBsb2NhdGlvbnMuaW5kZXhPZihxKTtcbiAgaWYgKGV4aXN0aW5nICE9PSAtMSkge1xuICAgIGN1cnJlbnRJbmRleCA9IGV4aXN0aW5nO1xuICB9IGVsc2Uge1xuICAgIGxvY2F0aW9ucy5wdXNoKHEpO1xuICAgIGN1cnJlbnRJbmRleCA9IGxvY2F0aW9ucy5sZW5ndGggLSAxO1xuICAgIHNhdmUoKTtcbiAgfVxuICByZW5kZXJEb3RzKCk7XG59XG5cbi8vIEJvb3RzdHJhcDogbG9hZCB0aGUgc2F2ZWQgbGlzdCwgd2lyZSB0aGUgc3dpcGUgZ2VzdHVyZXMgb25jZSwgZHJhdyB0aGUgZG90cyxcbi8vIGFuZCBmaXJlIHRoZSBzaW5nbGUgaW5pdGlhbCBmZXRjaCAodGhlIGZpcnN0IHNhdmVkIGxvY2F0aW9uLCBvciB0aGUgZGVmYXVsdFxuLy8gd2hlbiBub25lIGFyZSBzYXZlZCkuIGluZGV4LmpzIGNhbGxzIHRoaXMgb25jZSwgYWZ0ZXIgdGhlIERPTSBpcyBhcHBlbmRlZC5cbmV4cG9ydCBmdW5jdGlvbiBpbml0RmF2b3VyaXRlcygpIHtcbiAgbG9hZCgpO1xuICBkb3RSb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZG90Um93Jyk7XG4gIG5hdlJvdyA9IGRvdFJvdyA/IGRvdFJvdy5wYXJlbnRFbGVtZW50IDogbnVsbDtcbiAgY2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWF0aGVyQ2FyZCcpO1xuICBpZiAoY2FyZCkgeyBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIG9uQ2FyZEFuaW1FbmQpOyB9XG4gIHdpcmVHZXN0dXJlcygpO1xuICB3aXJlQXJyb3dzKCk7XG4gIGN1cnJlbnRJbmRleCA9IDA7XG4gIHJlbmRlckRvdHMoKTtcbiAgc2hvd0N1cnJlbnQoKTtcbn1cbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgcmVuZGVyUmliYm9uLCBjdXJyZW50SG91ckluZGV4IH0gZnJvbSAnLi9yaWJib24uanMnO1xuaW1wb3J0IHsgZm9yZWNhc3RMb2dpYyB9IGZyb20gJy4vbG9naWMuanMnO1xuaW1wb3J0IHsgYWRkTG9jYXRpb24gfSBmcm9tICcuL2Zhdm91cml0ZXMuanMnO1xuaW1wb3J0IHsgc2V0V2VhdGhlckJnIH0gZnJvbSAnLi9za3kuanMnO1xuXG4vLyBHdWFyZCBzbyB3aXJlRXZlbnRzKCkgb25seSBldmVyIHJlZ2lzdGVycyBvbmUgc2V0IG9mIGxpc3RlbmVycy4gVGhlIG9sZFxuLy8gY2hhbmdlV2VhdGhlckluZm8oKSByZS1yZWdpc3RlcmVkIG9uIGV2ZXJ5IGZldGNoLCBkb3VibGluZyB0aGUgaGFuZGxlciBjb3VudFxuLy8gcGVyIHNlYXJjaDsgdGhlIHJlbmRlciBwYXRoIChyZW5kZXJGb3JlY2FzdCkgYW5kIHRoZSB3aXJpbmcgcGF0aCAod2lyZUV2ZW50cylcbi8vIGFyZSBzcGxpdCBwcmVjaXNlbHkgc28gdGhhdCBjYW4gbmV2ZXIgaGFwcGVuIGFnYWluLlxubGV0IGV2ZW50c1dpcmVkID0gZmFsc2U7XG5cbi8vIERlYm91bmNlIHdpbmRvdyBmb3IgdGhlIGNpdHktc3VnZ2VzdGlvbiBsb29rdXAg4oCUIGxvbmcgZW5vdWdoIHRoYXQgYSBydW4gb2Zcbi8vIGtleXN0cm9rZXMgZmlyZXMgb25lIHJlcXVlc3QsIHNob3J0IGVub3VnaCB0byBmZWVsIGxpdmUuXG5jb25zdCBTVUdHRVNUX0RFQk9VTkNFX01TID0gMzAwO1xuXG4vLyBDL0YgZGlzcGxheSB1bml0LCBwZXJzaXN0ZWQgdW5kZXIgdGhlIHNoYXJlZCB3ZWF0aGVyYXBwXyBsb2NhbFN0b3JhZ2UgcHJlZml4LlxuLy8gVGhpcyBpcyBkaXNwbGF5LW9ubHk6IHJlbmRlclJpYmJvbigpIHN0aWxsIHJlY2VpdmVzIHJhdyBDZWxzaXVzLCBzbyB0aGUgY3VydmVcbi8vIGNvbG91cnMgKHRlbXBDb2xvdXIpIGFuZCB0aGUgeS1zY2FsZSBuZXZlciBzaGlmdCB3aGVuIHRoZSByZWFkb3V0IHVuaXQgZmxpcHMuXG5jb25zdCBVTklUX0tFWSA9ICd3ZWF0aGVyYXBwX3VuaXQnO1xubGV0IGN1cnJlbnRVbml0ID0gbG9hZFVuaXQoKTtcblxuLy8gVGhlIGxhc3QgcmVuZGVyZWQgXCJub3dcIiwga2VwdCBpbiBDZWxzaXVzIHNvIHRoZSB1bml0IHRvZ2dsZSBjYW4gcmUtcmVuZGVyIHRoZVxuLy8gdGVtcGVyYXR1cmUgcmVhZG91dHMgd2l0aG91dCB3YWl0aW5nIGZvciBhbm90aGVyIGZldGNoLlxubGV0IGxhc3ROb3cgPSBudWxsO1xuXG4vLyBDYWNoZWQgRE9NIHJlZmVyZW5jZXMsIHBvcHVsYXRlZCBvbmNlIGJ5IGNhY2hlRG9tKCkgYWZ0ZXIgaW5kZXguanMgaGFzIGJ1aWx0XG4vLyBhbmQgYXBwZW5kZWQgdGhlIERPTS5cbmxldCBzZWFyY2hGb3JtLCBzZWFyY2hJbnB1dCwgc3VnZ2VzdGlvbnMsIGxvY2F0aW9uTmFtZSwgdW5pdFN3aXRjaCwgY3VycmVudFRlbXAsXG4gIGN1cnJlbnRDb25kaXRpb24sIGZlZWxzVmFsLCBodW1pZGl0eVZhbCwgcmFpblZhbCwgd2luZFZhbDtcblxuLy8gQXV0b2NvbXBsZXRlIHN0YXRlLiBjdXJyZW50U3VnZ2VzdGlvbnMgaG9sZHMgdGhlIHJlc3VsdHMgYmFja2luZyB0aGUgdmlzaWJsZVxuLy8gZHJvcGRvd247IHNlbGVjdGVkSW5kZXggaXMgdGhlIGtleWJvYXJkLWhpZ2hsaWdodGVkIHJvdyAoLTEgPSBub25lKS4gcmVxdWVzdFNlcVxuLy8gZGlzY2FyZHMgc3RhbGUgYXN5bmMgcmVzdWx0cyDigJQgb25seSB0aGUgbGF0ZXN0IGxvb2t1cCByZW5kZXJzIOKAlCBhbmQgaXMgYnVtcGVkXG4vLyBvbiBjbG9zZSBzbyBhbiBpbi1mbGlnaHQgcmVxdWVzdCBjYW4ndCByZW9wZW4gdGhlIGRyb3Bkb3duIGFmdGVyIHNlbGVjdGlvbi5cbmxldCBjdXJyZW50U3VnZ2VzdGlvbnMgPSBbXTtcbmxldCBzZWxlY3RlZEluZGV4ID0gLTE7XG5sZXQgc3VnZ2VzdERlYm91bmNlID0gbnVsbDtcbmxldCByZXF1ZXN0U2VxID0gMDtcblxuZnVuY3Rpb24gY2FjaGVEb20oKSB7XG4gIGlmIChsb2NhdGlvbk5hbWUpIHsgcmV0dXJuOyB9IC8vIGFscmVhZHkgY2FjaGVkXG5cbiAgc2VhcmNoRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hGb3JtJyk7XG4gIHNlYXJjaElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaElucHV0Jyk7XG4gIHN1Z2dlc3Rpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Z2dlc3Rpb25zJyk7XG4gIGxvY2F0aW9uTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2NhdGlvbk5hbWUnKTtcbiAgdW5pdFN3aXRjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1bml0U3dpdGNoJyk7XG4gIGN1cnJlbnRUZW1wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnRUZW1wJyk7XG4gIGN1cnJlbnRDb25kaXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudENvbmRpdGlvbicpO1xuICBmZWVsc1ZhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmZWVsc1ZhbCcpO1xuICBodW1pZGl0eVZhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdodW1pZGl0eVZhbCcpO1xuICByYWluVmFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhaW5WYWwnKTtcbiAgd2luZFZhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5kVmFsJyk7XG59XG5cbi8vIFB1cmUgcmVuZGVyIHBhdGguIGZ1bGZpbGxQcm9taXNlKCkgaW4gbG9naWMuanMgY2FsbHMgdGhpcyBvbiBldmVyeSByZXNvbHZlZFxuLy8gcmVzcG9uc2U7IGl0IHJlZ2lzdGVycyBOTyBsaXN0ZW5lcnMsIHNvIGl0IGlzIHNhZmUgdG8gY2FsbCByZXBlYXRlZGx5LiBEcmF3c1xuLy8gdGhlIHJpYmJvbiBhbmQgZmlsbHMgdGhlIHJlYWRvdXQgZnJvbSB0aGUgc2FtZSBcIm5vd1wiIGluZGV4LCBzbyB0aGUgbWFya2VyIG9uXG4vLyB0aGUgY3VydmUgYW5kIHRoZSBzdGF0IHJvdyBjYW4gbmV2ZXIgZGlzYWdyZWUgYWJvdXQgdGhlIGN1cnJlbnQgaG91ci5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJGb3JlY2FzdChmb3JlY2FzdCkge1xuICBjYWNoZURvbSgpO1xuXG4gIHJlbmRlclJpYmJvbihmb3JlY2FzdCk7XG5cbiAgY29uc3QgaSA9IGN1cnJlbnRIb3VySW5kZXgoZm9yZWNhc3QpO1xuICBjb25zdCBub3cgPSBmb3JlY2FzdC5ob3Vyc1tpXTtcbiAgaWYgKCFub3cpIHsgcmV0dXJuOyB9XG5cbiAgbGFzdE5vdyA9IG5vdztcbiAgbG9jYXRpb25OYW1lLnRleHRDb250ZW50ID0gZm9yZWNhc3QubG9jYXRpb24ubmFtZTtcbiAgY3VycmVudENvbmRpdGlvbi50ZXh0Q29udGVudCA9IG5vdy5jb25kaXRpb247XG5cbiAgLy8gUmVwYWludCB0aGUgZnVsbC12aWV3cG9ydCBiYWNrZ3JvdW5kIHRvIG1hdGNoIHRoZSBjdXJyZW50IGNvbmRpdGlvbi4gT2ZmIHRoZVxuICAvLyBjdXJ2ZSdzIGRhdGEgcGF0aCDigJQgaXQgb25seSBzd2FwcyBhIGNsYXNzLCBhbmQgbm8tb3BzIHdoZW4gdGhlIGNhdGVnb3J5IGlzXG4gIC8vIHVuY2hhbmdlZCwgc28gcGFnaW5nIGxvY2F0aW9ucyBvciBmbGlwcGluZyB0aGUgdW5pdCBkb2Vzbid0IHJlc3RhcnQgaXQuXG4gIHNldFdlYXRoZXJCZyhub3cuY29uZGl0aW9uKTtcblxuICBodW1pZGl0eVZhbC50ZXh0Q29udGVudCA9IG5vdy5odW1pZGl0eSArICclJztcbiAgcmFpblZhbC50ZXh0Q29udGVudCA9IG5vdy5yYWluICsgJyUnO1xuICB3aW5kVmFsLnRleHRDb250ZW50ID0gTWF0aC5yb3VuZChub3cud2luZCkgKyAnIGttL2gnO1xuXG4gIC8vIFRlbXBlcmF0dXJlIHJlYWRvdXRzIGFuZCB0aGUgYWN0aXZlIGJ1dHRvbiBzdGF0ZSBib3RoIGNvbWUgZnJvbSByZW5kZXJUZW1wcyxcbiAgLy8gc28gYSBmZXRjaCBhbmQgYSB1bml0IHRvZ2dsZSBjYW4gbmV2ZXIgZm9ybWF0IHRoZSB0d28gdGVtcGVyYXR1cmVzIGRpZmZlcmVudGx5LlxuICByZW5kZXJUZW1wcygpO1xufVxuXG4vLyBSZWFkIHRoZSBwZXJzaXN0ZWQgdW5pdCwgZGVmYXVsdGluZyB0byBDZWxzaXVzLiBHdWFyZGVkIHNvIGEgbG9ja2VkLWRvd25cbi8vIGxvY2FsU3RvcmFnZSAocHJpdmF0ZSBtb2RlLCBkaXNhYmxlZCBzdG9yYWdlKSBmYWxscyBiYWNrIHJhdGhlciB0aGFuIHRocm93aW5nLlxuZnVuY3Rpb24gbG9hZFVuaXQoKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFVOSVRfS0VZKSA9PT0gJ0YnID8gJ0YnIDogJ0MnO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuICdDJztcbiAgfVxufVxuXG4vLyBGb3JtYXQgYSBDZWxzaXVzIHNjYWxhciBpbiB0aGUgYWN0aXZlIGRpc3BsYXkgdW5pdCDigJQgcm91bmRlZCwgd2l0aCB0aGUgbWF0Y2hpbmdcbi8vIMKwQy/CsEYgc3VmZml4LiBDb252ZXJzaW9uIGlzIGRpc3BsYXktb25seTsgY2FsbGVycyBhbHdheXMgcGFzcyByYXcgQ2Vsc2l1cy5cbmZ1bmN0aW9uIGZvcm1hdFRlbXAoY2Vsc2l1cykge1xuICBjb25zdCB2YWx1ZSA9IGN1cnJlbnRVbml0ID09PSAnRicgPyBjZWxzaXVzICogOSAvIDUgKyAzMiA6IGNlbHNpdXM7XG4gIHJldHVybiBNYXRoLnJvdW5kKHZhbHVlKSArICfCsCcgKyBjdXJyZW50VW5pdDtcbn1cblxuLy8gUmUtcmVuZGVyIHRoZSB0d28gdGVtcGVyYXR1cmUgcmVhZG91dHMgZnJvbSB0aGUgY2FjaGVkIENlbHNpdXMgXCJub3dcIiBhbmQgc3luY1xuLy8gdGhlIGFjdGl2ZSBzdGF0ZSBvbiB0aGUgQy9GIGJ1dHRvbnMuIENhbGxlZCBvbiBldmVyeSBmZXRjaCBhbmQgZXZlcnkgdG9nZ2xlLlxuZnVuY3Rpb24gcmVuZGVyVGVtcHMoKSB7XG4gIGlmICh1bml0U3dpdGNoKSB7XG4gICAgY29uc3Qgb3B0cyA9IHVuaXRTd2l0Y2gucXVlcnlTZWxlY3RvckFsbCgnLnVuaXRPcHQnKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIG9wdHNbaV0uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJywgb3B0c1tpXS5kYXRhc2V0LnVuaXQgPT09IGN1cnJlbnRVbml0KTtcbiAgICB9XG4gIH1cbiAgaWYgKCFsYXN0Tm93KSB7IHJldHVybjsgfVxuICBjdXJyZW50VGVtcC50ZXh0Q29udGVudCA9IGZvcm1hdFRlbXAobGFzdE5vdy50ZW1wKTtcbiAgZmVlbHNWYWwudGV4dENvbnRlbnQgPSBmb3JtYXRUZW1wKGxhc3ROb3cuZmVlbHNMaWtlKTtcbn1cblxuLy8gU3dpdGNoIHRoZSBkaXNwbGF5IHVuaXQsIHBlcnNpc3QgaXQsIGFuZCByZS1yZW5kZXIg4oCUIG5vIHJlZmV0Y2gsIHRoZSBzdG9yZWRcbi8vIENlbHNpdXMgaXMgY29udmVydGVkIGluIHBsYWNlLlxuZnVuY3Rpb24gc2V0VW5pdCh1bml0KSB7XG4gIGN1cnJlbnRVbml0ID0gdW5pdCA9PT0gJ0YnID8gJ0YnIDogJ0MnO1xuICB0cnkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFVOSVRfS0VZLCBjdXJyZW50VW5pdCk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogc3RvcmFnZSB1bmF2YWlsYWJsZSDigJQgdGhlIGluLW1lbW9yeSB1bml0IHN0aWxsIGFwcGxpZXMgKi8gfVxuICByZW5kZXJUZW1wcygpO1xufVxuXG4vLyBSZWdpc3RlcnMgbGlzdGVuZXJzIEVYQUNUTFkgT05DRSBmb3IgdGhlIGxpZmUgb2YgdGhlIHBhZ2UuIGluZGV4LmpzIGNhbGxzIHRoaXNcbi8vIGF0IGJvb3RzdHJhcCwgYWZ0ZXIgdGhlIERPTSBpcyBhcHBlbmRlZCDigJQgbmV2ZXIgZnJvbSB0aGUgcmVuZGVyIHBhdGgg4oCUIHNvIGFcbi8vIHNlYXJjaCBmaXJlcyBleGFjdGx5IG9uZSBmZXRjaCBhbmQgZXZlcnkgZWxlbWVudCBjYXJyaWVzIGV4YWN0bHkgb25lIGxpc3RlbmVyLlxuZXhwb3J0IGZ1bmN0aW9uIHdpcmVFdmVudHMoKSB7XG4gIGlmIChldmVudHNXaXJlZCkgeyByZXR1cm47IH1cblxuICBjYWNoZURvbSgpO1xuICBldmVudHNXaXJlZCA9IHRydWU7XG5cbiAgLy8gVGhlIGJ1dHRvbiBpcyBhIHJlYWwgc3VibWl0IGJ1dHRvbiwgc28gdGhpcyBjYXRjaGVzIGJvdGggdGhlIGNsaWNrIGFuZCB0aGVcbiAgLy8gRW50ZXIga2V5IGFzIG9uZSBzdWJtaXQgZXZlbnQuIHByZXZlbnREZWZhdWx0IHN0b3BzIHRoZSBmb3JtIHJlbG9hZGluZyB0aGVcbiAgLy8gcGFnZTsgZnV0dXJlQVBJQ2FsbHMgZG9lcyB0aGUgc2luZ2xlIGZldGNoLiBUaGUgc2VhcmNoIGZvcm0gaXMgYWxzbyB0aGVcbiAgLy8gYWRkIHBhdGggZm9yIHNhdmVkIGxvY2F0aW9uczogb24gYSBzdWNjZXNzZnVsIGxvb2t1cCB0aGUgcXVlcnkgaXMgYXBwZW5kZWRcbiAgLy8gdG8gdGhlIHNhdmVkIGxpc3QgYW5kIGJlY29tZXMgY3VycmVudDsgYSBmYWlsZWQgbG9va3VwIHJlc29sdmVzIHRvIG51bGwgYW5kXG4gIC8vIGxlYXZlcyB0aGUgbGlzdCB1bnRvdWNoZWQgKGludmFsaWRJbnB1dCBoYXMgYWxyZWFkeSByZWRkZW5lZCB0aGUgaW5wdXQpLlxuICBzZWFyY2hGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNsb3NlU3VnZ2VzdGlvbnMoKTtcbiAgICBjb25zdCBxdWVyeSA9IHNlYXJjaElucHV0LnZhbHVlO1xuICAgIGZvcmVjYXN0TG9naWMuZnV0dXJlQVBJQ2FsbHMocXVlcnkpLnRoZW4oZnVuY3Rpb24gKGZvcmVjYXN0KSB7XG4gICAgICBpZiAoZm9yZWNhc3QpIHtcbiAgICAgICAgYWRkTG9jYXRpb24ocXVlcnkpO1xuICAgICAgICBzZWFyY2hJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICB3aXJlQXV0b2NvbXBsZXRlKCk7XG4gIHdpcmVVbml0VG9nZ2xlKCk7XG59XG5cbi8vIE9uZSBkZWxlZ2F0ZWQgY2xpY2sgbGlzdGVuZXIgb24gdGhlIHN3aXRjaCBkcml2ZXMgYm90aCBidXR0b25zLiBXaXJlZCBvbmNlIGZyb21cbi8vIHdpcmVFdmVudHMoKSwgc28g4oCUIGxpa2UgZXZlcnkgb3RoZXIgbGlzdGVuZXIg4oCUIG5vdGhpbmcgbXVsdGlwbGllcyBhY3Jvc3MgZmV0Y2hlcy5cbi8vIHJlbmRlclRlbXBzKCkgcnVucyBpbW1lZGlhdGVseSB0byByZWZsZWN0IHRoZSBwZXJzaXN0ZWQgdW5pdCBvbiB0aGUgYnV0dG9uc1xuLy8gYmVmb3JlIHRoZSBmaXJzdCBmZXRjaCByZXNvbHZlcy5cbmZ1bmN0aW9uIHdpcmVVbml0VG9nZ2xlKCkge1xuICBpZiAoIXVuaXRTd2l0Y2gpIHsgcmV0dXJuOyB9XG4gIHVuaXRTd2l0Y2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgIGNvbnN0IGJ0biA9IGUudGFyZ2V0ICYmIGUudGFyZ2V0LmNsb3Nlc3QgPyBlLnRhcmdldC5jbG9zZXN0KCcudW5pdE9wdCcpIDogbnVsbDtcbiAgICBpZiAoIWJ0biB8fCAhdW5pdFN3aXRjaC5jb250YWlucyhidG4pKSB7IHJldHVybjsgfVxuICAgIHNldFVuaXQoYnRuLmRhdGFzZXQudW5pdCk7XG4gIH0pO1xuICByZW5kZXJUZW1wcygpO1xufVxuXG4vLyBXaXJlcyB0aGUgZGVib3VuY2VkIGNpdHktc3VnZ2VzdGlvbiBkcm9wZG93bi4gQ2FsbGVkIG9uY2UgZnJvbSB3aXJlRXZlbnRzKCksXG4vLyBzbyDigJQgbGlrZSBldmVyeSBvdGhlciBsaXN0ZW5lciBpbiB0aGUgYXBwIOKAlCBub3RoaW5nIG11bHRpcGxpZXMgYWNyb3NzIGZldGNoZXMuXG5mdW5jdGlvbiB3aXJlQXV0b2NvbXBsZXRlKCkge1xuICAvLyBFYWNoIGtleXN0cm9rZSBzY2hlZHVsZXMgb25lIGRlYm91bmNlZCBsb29rdXA7IGFuIGVtcHR5IGJveCBjbG9zZXMgdGhlXG4gIC8vIGRyb3Bkb3duIG91dHJpZ2h0LiBTZXR0aW5nIHNlYXJjaElucHV0LnZhbHVlIHByb2dyYW1tYXRpY2FsbHkgKG9uIHNlbGVjdCBvclxuICAvLyBvbiBhIHN1Y2Nlc3NmdWwgc3VibWl0KSBkb2VzIG5vdCBmaXJlICdpbnB1dCcsIHNvIHRoZXJlIGlzIG5vIHJlZmV0Y2ggbG9vcC5cbiAgc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSBzZWFyY2hJbnB1dC52YWx1ZS50cmltKCk7XG4gICAgaWYgKHN1Z2dlc3REZWJvdW5jZSkgeyBjbGVhclRpbWVvdXQoc3VnZ2VzdERlYm91bmNlKTsgc3VnZ2VzdERlYm91bmNlID0gbnVsbDsgfVxuICAgIGlmICghdmFsdWUpIHsgY2xvc2VTdWdnZXN0aW9ucygpOyByZXR1cm47IH1cblxuICAgIHN1Z2dlc3REZWJvdW5jZSA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3Qgc2VxID0gKytyZXF1ZXN0U2VxO1xuICAgICAgZm9yZWNhc3RMb2dpYy5zZWFyY2hDaXRpZXModmFsdWUpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdHMpIHtcbiAgICAgICAgaWYgKHNlcSAhPT0gcmVxdWVzdFNlcSkgeyByZXR1cm47IH0gLy8gYSBuZXdlciBrZXlzdHJva2Ugc3VwZXJzZWRlZCB0aGlzXG4gICAgICAgIHJlbmRlclN1Z2dlc3Rpb25zKHJlc3VsdHMpO1xuICAgICAgfSk7XG4gICAgfSwgU1VHR0VTVF9ERUJPVU5DRV9NUyk7XG4gIH0pO1xuXG4gIC8vIEFycm93IGtleXMgbW92ZSB0aGUgaGlnaGxpZ2h0OyBFbnRlciBvbiBhIGhpZ2hsaWdodGVkIHJvdyBzZWxlY3RzIGl0IChhbmQgaXNcbiAgLy8gc3RvcHBlZCBmcm9tIGFsc28gc3VibWl0dGluZyB0aGUgcmF3IHRleHQpOyBFc2NhcGUgY2xvc2VzIHdpdGhvdXQgc3VibWl0dGluZy5cbiAgLy8gV2l0aCBubyBkcm9wZG93biBvcGVuLCBFbnRlciBzdWJtaXRzIHRoZSB0eXBlZCB0ZXh0IGV4YWN0bHkgYXMgYmVmb3JlLlxuICBzZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoc3VnZ2VzdGlvbnMuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSB8fCAhY3VycmVudFN1Z2dlc3Rpb25zLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZS5rZXkgPT09ICdBcnJvd0Rvd24nKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBtb3ZlU2VsZWN0aW9uKDEpO1xuICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICdBcnJvd1VwJykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbW92ZVNlbGVjdGlvbigtMSk7XG4gICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgaWYgKHNlbGVjdGVkSW5kZXggPj0gMCkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNob29zZVN1Z2dlc3Rpb24oc2VsZWN0ZWRJbmRleCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNsb3NlU3VnZ2VzdGlvbnMoKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIEEgY2xpY2sgYW55d2hlcmUgb3V0c2lkZSB0aGUgc2VhcmNoIGZvcm0gY2xvc2VzIHRoZSBkcm9wZG93bi4gQ2xpY2tzIGluc2lkZVxuICAvLyB0aGUgZm9ybSAodGhlIGlucHV0LCBhIHN1Z2dlc3Rpb24gcm93LCB0aGUgYnV0dG9uKSBhcmUgaGFuZGxlZCBieSB0aGVpciBvd25cbiAgLy8gbGlzdGVuZXJzIGFuZCBtdXN0IG5vdCBjbG9zZSBpdCBoZXJlIGZpcnN0LlxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGUudGFyZ2V0ICYmIGUudGFyZ2V0LmNsb3Nlc3QgJiYgZS50YXJnZXQuY2xvc2VzdCgnI3NlYXJjaEZvcm0nKSkgeyByZXR1cm47IH1cbiAgICBjbG9zZVN1Z2dlc3Rpb25zKCk7XG4gIH0pO1xufVxuXG4vLyBSZWJ1aWxkIHRoZSBkcm9wZG93biBmcm9tIGEgcmVzdWx0cyBhcnJheS4gRW1wdHkgcmVzdWx0cyBjbG9zZSBpdC4gRWFjaCByb3cgaXNcbi8vIHRoZSBjaXR5IG5hbWUgcGx1cyBhIG11dGVkIHJlZ2lvbi9jb3VudHJ5IGxpbmU7IGNsaWNraW5nIG9uZSBzZWxlY3RzIGl0LlxuZnVuY3Rpb24gcmVuZGVyU3VnZ2VzdGlvbnMocmVzdWx0cykge1xuICB3aGlsZSAoc3VnZ2VzdGlvbnMuZmlyc3RDaGlsZCkgeyBzdWdnZXN0aW9ucy5yZW1vdmVDaGlsZChzdWdnZXN0aW9ucy5maXJzdENoaWxkKTsgfVxuXG4gIGN1cnJlbnRTdWdnZXN0aW9ucyA9IHJlc3VsdHM7XG4gIHNlbGVjdGVkSW5kZXggPSAtMTtcblxuICBpZiAoIXJlc3VsdHMubGVuZ3RoKSB7IGNsb3NlU3VnZ2VzdGlvbnMoKTsgcmV0dXJuOyB9XG5cbiAgcmVzdWx0cy5mb3JFYWNoKGZ1bmN0aW9uIChyLCBpZHgpIHtcbiAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbS5jbGFzc05hbWUgPSAnc3VnZ2VzdGlvbi1pdGVtJztcbiAgICBpdGVtLnNldEF0dHJpYnV0ZSgncm9sZScsICdvcHRpb24nKTtcblxuICAgIGNvbnN0IGNpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY2l0eS5jbGFzc05hbWUgPSAnc3VnZ2VzdGlvbi1jaXR5JztcbiAgICBjaXR5LnRleHRDb250ZW50ID0gci5uYW1lO1xuXG4gICAgY29uc3QgcGxhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgcGxhY2UuY2xhc3NOYW1lID0gJ3N1Z2dlc3Rpb24tY291bnRyeSc7XG4gICAgcGxhY2UudGV4dENvbnRlbnQgPSBbci5yZWdpb24sIHIuY291bnRyeV0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJywgJyk7XG5cbiAgICBpdGVtLmFwcGVuZENoaWxkKGNpdHkpO1xuICAgIGl0ZW0uYXBwZW5kQ2hpbGQocGxhY2UpO1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7IGNob29zZVN1Z2dlc3Rpb24oaWR4KTsgfSk7XG5cbiAgICBzdWdnZXN0aW9ucy5hcHBlbmRDaGlsZChpdGVtKTtcbiAgfSk7XG5cbiAgb3BlblN1Z2dlc3Rpb25zKCk7XG59XG5cbi8vIE1vdmUgdGhlIGtleWJvYXJkIGhpZ2hsaWdodCwgd3JhcHBpbmcgYXQgYm90aCBlbmRzLCBhbmQgbWlycm9yIGl0IG9udG8gdGhlIERPTS5cbmZ1bmN0aW9uIG1vdmVTZWxlY3Rpb24oZGlyKSB7XG4gIGNvbnN0IG4gPSBjdXJyZW50U3VnZ2VzdGlvbnMubGVuZ3RoO1xuICBpZiAoIW4pIHsgcmV0dXJuOyB9XG4gIHNlbGVjdGVkSW5kZXggPSAoc2VsZWN0ZWRJbmRleCArIGRpciArIG4pICUgbjtcblxuICBjb25zdCBpdGVtcyA9IHN1Z2dlc3Rpb25zLmNoaWxkcmVuO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgaXRlbXNbaV0uY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0ZWQnLCBpID09PSBzZWxlY3RlZEluZGV4KTtcbiAgfVxufVxuXG4vLyBGaWxsIHRoZSBpbnB1dCB3aXRoIHRoZSBjaG9zZW4gY2l0eSBhbmQgc3VibWl0IHRoZSBmb3JtIHRoZSBzYW1lIHdheSBwcmVzc2luZ1xuLy8gRW50ZXIgb3IgY2xpY2tpbmcgU3VibWl0IGRvZXMsIHNvIHRoZSBmZXRjaCArIHNhdmUtbG9jYXRpb24gcGF0aCBpcyB1bmNoYW5nZWQuXG5mdW5jdGlvbiBjaG9vc2VTdWdnZXN0aW9uKGlkeCkge1xuICBjb25zdCByID0gY3VycmVudFN1Z2dlc3Rpb25zW2lkeF07XG4gIGlmICghcikgeyByZXR1cm47IH1cbiAgc2VhcmNoSW5wdXQudmFsdWUgPSByLm5hbWU7XG4gIGNsb3NlU3VnZ2VzdGlvbnMoKTtcbiAgaWYgKHNlYXJjaEZvcm0ucmVxdWVzdFN1Ym1pdCkge1xuICAgIHNlYXJjaEZvcm0ucmVxdWVzdFN1Ym1pdCgpO1xuICB9IGVsc2Uge1xuICAgIHNlYXJjaEZvcm0uZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ3N1Ym1pdCcsIHsgY2FuY2VsYWJsZTogdHJ1ZSwgYnViYmxlczogdHJ1ZSB9KSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gb3BlblN1Z2dlc3Rpb25zKCkge1xuICBzdWdnZXN0aW9ucy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgc2VhcmNoRm9ybS5jbGFzc0xpc3QuYWRkKCdzdWdnZXN0aW5nJyk7IC8vIGZsYXR0ZW5zIHRoZSBpbnB1dCdzIGJvdHRvbSBjb3JuZXJzXG59XG5cbi8vIENsb3NlIGFuZCByZXNldC4gQnVtcGluZyByZXF1ZXN0U2VxIGludmFsaWRhdGVzIGFueSBpbi1mbGlnaHQgbG9va3VwIHNvIGl0XG4vLyBjYW4ndCByZW9wZW4gdGhlIGRyb3Bkb3duIGFmdGVyIGEgc2VsZWN0aW9uIG9yIHN1Ym1pdC5cbmZ1bmN0aW9uIGNsb3NlU3VnZ2VzdGlvbnMoKSB7XG4gIGlmICghc3VnZ2VzdGlvbnMpIHsgcmV0dXJuOyB9XG4gIGlmIChzdWdnZXN0RGVib3VuY2UpIHsgY2xlYXJUaW1lb3V0KHN1Z2dlc3REZWJvdW5jZSk7IHN1Z2dlc3REZWJvdW5jZSA9IG51bGw7IH1cbiAgcmVxdWVzdFNlcSsrO1xuICBjdXJyZW50U3VnZ2VzdGlvbnMgPSBbXTtcbiAgc2VsZWN0ZWRJbmRleCA9IC0xO1xuICBzdWdnZXN0aW9ucy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgc2VhcmNoRm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdzdWdnZXN0aW5nJyk7XG59XG5cbi8vIEEgc3VjY2Vzc2Z1bCBsb29rdXAgY2xlYXJzIHRoZSBpbnZhbGlkIHN0YXRlOyBhIGZhaWxlZCBvbmUga2VlcHMgdGhlIGN1cnJlbnRcbi8vIHJpYmJvbiBhbmQgcmVkZGVucyB0aGUgaW5wdXQgYm9yZGVyICh2aWEgdGhlIC5pbnZhbGlkIGNsYXNzIGluIHN0eWxlLmNzcykuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRJbnB1dCgpIHtcbiAgY2FjaGVEb20oKTtcbiAgaWYgKHNlYXJjaEZvcm0pIHsgc2VhcmNoRm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdpbnZhbGlkJyk7IH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGludmFsaWRJbnB1dCgpIHtcbiAgY2FjaGVEb20oKTtcbiAgaWYgKHNlYXJjaEZvcm0pIHsgc2VhcmNoRm9ybS5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkJyk7IH1cbn1cbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgcmVuZGVyRm9yZWNhc3QsIHZhbGlkSW5wdXQsIGludmFsaWRJbnB1dCB9IGZyb20gJy4vaW5kZXhDaGFuZ2VzLmpzJztcblxuLy8gIDMgZGF5IGZvcmVjYXN0IC0gaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0zOWMyOGY4NWFiMDM0NTIxYjk5MjE3MDUyMzI3MTAmcT05ODA1MiZkYXlzPTMmYXFpPW5vJmFsZXJ0cz1ub1xuXG4vLyBUaGUgbGFzdCBmb3JlY2FzdCB3ZSBzdWNjZXNzZnVsbHkgcmVuZGVyZWQuIEEgZmFpbGVkIGxvb2t1cCBrZWVwcyBpdCBvbiBzY3JlZW5cbi8vIChzZWUgZnVsZmlsbFByb21pc2UpOiB0aGUgc2VhcmNoIGp1c3QgcmVkZGVucyB0aGUgaW5wdXQgcmF0aGVyIHRoYW4gYmxhbmtpbmdcbi8vIHRoZSByaWJib24uXG5sZXQgbGFzdEZvcmVjYXN0ID0gbnVsbDtcblxuZXhwb3J0IGNvbnN0IGZvcmVjYXN0TG9naWMgPSAoZnVuY3Rpb24gKCkge1xuXG4gIC8vIE5vIGZldGNoIGZpcmVzIGF0IG1vZHVsZS1ldmFsIHRpbWUuIFRoZSBzaW5nbGUgaW5pdGlhbCBmZXRjaCAoZGVmYXVsdFxuICAvLyBsb2NhdGlvbiwgb3IgdGhlIGZpcnN0IHNhdmVkIGxvY2F0aW9uKSBpcyBkcml2ZW4gZnJvbSB0aGUgYm9vdHN0cmFwIGluXG4gIC8vIGluZGV4LmpzIHZpYSBpbml0RmF2b3VyaXRlcygpIC0+IGZ1dHVyZUFQSUNhbGxzLCBzbyBpdCBoYXBwZW5zIGV4YWN0bHkgb25jZVxuICAvLyBpbiB0aGUgaW5kZXggYnVuZGxlIHJhdGhlciB0aGFuIG9uY2UgcGVyIGJ1bmRsZSB0aGF0IGltcG9ydHMgdGhpcyBtb2R1bGUuXG5cbiAgLy8gRmlyZXMgb25lIGZldGNoIGZvciBhIGxvY2F0aW9uIGFuZCByZW5kZXJzIG9uIHN1Y2Nlc3MuIFJldHVybnMgYSBwcm9taXNlXG4gIC8vIHJlc29sdmluZyB0byB0aGUgYnVpbHQgZm9yZWNhc3Qgb24gc3VjY2Vzcywgb3IgbnVsbCBvbiBhIGZhaWxlZCBsb29rdXAsIHNvXG4gIC8vIHRoZSBzZWFyY2ggc3VibWl0IGhhbmRsZXIgY2FuIGFwcGVuZCB0aGUgbG9jYXRpb24gdG8gdGhlIHNhdmVkIGxpc3Qgb25seVxuICAvLyB3aGVuIHRoZSBsb29rdXAgYWN0dWFsbHkgc3VjY2VlZGVkLlxuICBmdW5jdGlvbiBmdXR1cmVBUElDYWxscyh2YWx1ZSkge1xuICAgIHJldHVybiBmdWxmaWxsUHJvbWlzZShwdWxsRm9yZWNhc3QodmFsdWUpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZ1bGZpbGxQcm9taXNlKGZvcmVjYXN0SlNPTikge1xuICAgIHJldHVybiBmb3JlY2FzdEpTT04udGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAvLyBwdWxsRm9yZWNhc3QgcmVzb2x2ZXMgdG8gbnVsbCBvbiBhIGZhaWxlZCBsb29rdXAg4oCUIGxlYXZlIHRoZSBjdXJyZW50XG4gICAgICAvLyByaWJib24gdW50b3VjaGVkIChpbnZhbGlkSW5wdXQoKSBoYXMgYWxyZWFkeSByZWRkZW5lZCB0aGUgaW5wdXQpLlxuICAgICAgaWYgKCFyZXN1bHQpIHsgcmV0dXJuIG51bGw7IH1cblxuICAgICAgY29uc3QgZm9yZWNhc3QgPSBidWlsZEZvcmVjYXN0KHJlc3VsdCk7XG4gICAgICBsYXN0Rm9yZWNhc3QgPSBmb3JlY2FzdDtcbiAgICAgIHJlbmRlckZvcmVjYXN0KGZvcmVjYXN0KTtcbiAgICAgIHJldHVybiBmb3JlY2FzdDtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIEZsYXR0ZW4gdGhlIHRocmVlLWRheSByZXNwb25zZSBpbnRvIGEgc2luZ2xlIDcyLWhvdXIgc2VyaWVzIHBsdXMgYSBsb2NhdGlvblxuICAvLyBvYmplY3QuIEV2ZXJ5IGhvdXIga2VlcHMgaXRzIG93biBlcG9jaCwgdGVtcGVyYXR1cmUsIGNvbmRpdGlvbiB0ZXh0IGFuZCB0aGVcbiAgLy8gc3RhdCBmaWVsZHMgdGhlIHJlYWRvdXQgc2hvd3Mg4oCUIG5vdGhpbmcgaXMgY29sbGFwc2VkIHRvIHBlci1kYXkgc2NhbGFycywgYW5kXG4gIC8vIHRoZSBmdWxsIGZvcmVjYXN0ZGF5W10uaG91cltdIGFycmF5cyAoYWxyZWFkeSBpbiBldmVyeSByZXNwb25zZSwgcHJldmlvdXNseVxuICAvLyBkaXNjYXJkZWQpIGFyZSB3aGF0IHRoZSBjdXJ2ZSBpcyBkcmF3biBmcm9tLlxuICBmdW5jdGlvbiBidWlsZEZvcmVjYXN0KHJlc3VsdCkge1xuICAgIGNvbnN0IGZvcmVjYXN0RGF5cyA9IHJlc3VsdC5mb3JlY2FzdC5mb3JlY2FzdGRheTtcbiAgICBjb25zdCBob3VycyA9IFtdO1xuXG4gICAgZm9yZWNhc3REYXlzLmZvckVhY2goKGRheSkgPT4ge1xuICAgICAgZGF5LmhvdXIuZm9yRWFjaCgoaCkgPT4ge1xuICAgICAgICBob3Vycy5wdXNoKHtcbiAgICAgICAgICBlcG9jaDogaC50aW1lX2Vwb2NoLFxuICAgICAgICAgIHRlbXA6IGgudGVtcF9jLFxuICAgICAgICAgIGZlZWxzTGlrZTogaC5mZWVsc2xpa2VfYyxcbiAgICAgICAgICBodW1pZGl0eTogaC5odW1pZGl0eSxcbiAgICAgICAgICByYWluOiBoLmNoYW5jZV9vZl9yYWluLFxuICAgICAgICAgIHdpbmQ6IGgud2luZF9rcGgsXG4gICAgICAgICAgY29uZGl0aW9uOiBoLmNvbmRpdGlvbi50ZXh0LFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGxvY2F0aW9uOiB7XG4gICAgICAgIG5hbWU6IHJlc3VsdC5sb2NhdGlvbi5uYW1lLFxuICAgICAgICAvLyBcIm5vd1wiIGlzIGluZGV4ZWQgb2ZmIHRoZSBsb2NhdGlvbidzIHJlYWwgY3VycmVudCB0aW1lLCBub3QgYSBwYXJzZWRcbiAgICAgICAgLy8gZGF0ZSBzdHJpbmcuIFNlZSBjdXJyZW50SG91ckluZGV4KCkgaW4gcmliYm9uLmpzLlxuICAgICAgICBsb2NhbHRpbWVfZXBvY2g6IHJlc3VsdC5sb2NhdGlvbi5sb2NhbHRpbWVfZXBvY2gsXG4gICAgICB9LFxuICAgICAgaG91cnM6IGhvdXJzLFxuICAgICAgLy8gUGVyLWRheSBkYXRlICsgaG91ciBjb3VudCBkcml2ZSB0aGUgV0VEL1RIVS9GUkkgdGlja3MgYW5kIHRoZSBkYXlcbiAgICAgIC8vIGhhaXJsaW5lcyBhdCBob3VycyAyNCBhbmQgNDguXG4gICAgICBkYXlzOiBmb3JlY2FzdERheXMubWFwKChkYXkpID0+ICh7IGRhdGU6IGRheS5kYXRlLCBjb3VudDogZGF5LmhvdXIubGVuZ3RoIH0pKSxcbiAgICB9O1xuICB9XG5cbiAgLy8gVGFrZXMgYSBsb2NhdGlvbiB2YWx1ZSBhcHBlbmRlZCB0byB0aGUgQVBJIGNhbGwuIFJlc29sdmVzIHRvIHRoZSByYXcgSlNPTiBvblxuICAvLyBzdWNjZXNzLCBvciBudWxsIG9uIGZhaWx1cmUgKHNvIGZ1bGZpbGxQcm9taXNlIGtlZXBzIHRoZSBjdXJyZW50IHJpYmJvbikuXG4gIGFzeW5jIGZ1bmN0aW9uIHB1bGxGb3JlY2FzdCh2YWx1ZSkge1xuICAgIGNvbnN0IHVybCA9ICdodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0zOWMyOGY4NWFiMDM0NTIxYjk5MjE3MDUyMzI3MTAmcT0nICsgdmFsdWUgKyAnJmRheXM9MyZhcWk9bm8mYWxlcnRzPW5vJztcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgeyBtb2RlOiAnY29ycycgfSk7XG5cbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBTdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBmb3JlY2FzdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgdmFsaWRJbnB1dCgpO1xuXG4gICAgICByZXR1cm4gZm9yZWNhc3Q7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBjYXRjaGVzIGVycm9ycyBib3RoIGluIGZldGNoIGFuZCByZXNwb25zZS5qc29uXG4gICAgICBpbnZhbGlkSW5wdXQoKTtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8vIFR5cGVhaGVhZCBsb29rdXAgZm9yIHRoZSBzZWFyY2ggYm94LiBIaXRzIFdlYXRoZXJBUEkncyBzZWFyY2gvYXV0b2NvbXBsZXRlXG4gIC8vIGVuZHBvaW50IChyZXVzaW5nIHRoZSBzYW1lIGtleSBhcyBwdWxsRm9yZWNhc3QpIGFuZCByZXNvbHZlcyB0byB0aGUgcmF3XG4gIC8vIHJlc3VsdHMgYXJyYXkg4oCUIFt7IG5hbWUsIHJlZ2lvbiwgY291bnRyeSwgLi4uIH0sIC4uLl0g4oCUIG9yIFtdIG9uIGFuIGVtcHR5XG4gIC8vIHF1ZXJ5LCBubyBtYXRjaGVzLCBvciBhbnkgbmV0d29yay9wYXJzZSBlcnJvci4gTmV2ZXIgdGhyb3dzOiB0aGUgZHJvcGRvd25cbiAgLy8ganVzdCBzaG93cyBub3RoaW5nIG9uIGZhaWx1cmUuXG4gIGFzeW5jIGZ1bmN0aW9uIHNlYXJjaENpdGllcyh2YWx1ZSkge1xuICAgIGNvbnN0IHEgPSBTdHJpbmcodmFsdWUpLnRyaW0oKTtcbiAgICBpZiAoIXEpIHsgcmV0dXJuIFtdOyB9XG5cbiAgICBjb25zdCB1cmwgPSAnaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvc2VhcmNoLmpzb24/a2V5PTM5YzI4Zjg1YWIwMzQ1MjFiOTkyMTcwNTIzMjcxMCZxPScgKyBlbmNvZGVVUklDb21wb25lbnQocSk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHsgbW9kZTogJ2NvcnMnIH0pO1xuXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgU3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkocmVzdWx0cykgPyByZXN1bHRzIDogW107XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuXG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwdWxsRm9yZWNhc3QsXG4gICAgZnV0dXJlQVBJQ2FsbHMsXG4gICAgc2VhcmNoQ2l0aWVzLFxuICB9O1xuXG59KSgpOyAvLyBlbmRzIGZvcmVjYXN0TG9naWMgZnVuY3Rpb25cbiIsIi8vIHJpYmJvbi5qcyDigJQgdGhlIDcyLWhvdXIgdGVtcGVyYXR1cmUgcmliYm9uLlxuLy9cbi8vIFRoZSBmb3JlY2FzdCBpcyBvbmUgY29udGludW91cyB0ZW1wZXJhdHVyZSBjdXJ2ZSBhY3Jvc3MgYWxsIHRocmVlIGRheXMgcmF0aGVyXG4vLyB0aGFuIHRocmVlIGNhcmQgc3RhdGVzIHlvdSBwYWdlIGJldHdlZW4sIHNvIG5hdmlnYXRpb24gc3RvcHMgYmVpbmcgYSBjb25jZXB0OlxuLy8gZXZlcnkgaG91ciBpcyBvbiBzY3JlZW4gYXQgb25jZS4gQ29sb3VyIGlzIGEgZnVuY3Rpb24gb2YgdGhlIHRlbXBlcmF0dXJlXG4vLyBzY2FsYXIgKGNvbGQgLT4gbWlsZCAtPiB3YXJtIC0+IGhvdCksIE5PVCB0aGUgY29uZGl0aW9uIGNhdGVnb3J5LCBzbyB0aGVyZSBpc1xuLy8gbm8gcGVyLWNvbmRpdGlvbiBicmFuY2ggdG8gd3JpdGUgYW5kIG5vIGVpZ2h0aCBjYXNlIHRvIGZvcmdldC5cbi8vXG4vLyBidWlsZFJpYmJvbihtb3VudCkgY3JlYXRlcyB0aGUgU1ZHIHNjYWZmb2xkIG9uY2UgYXQgYm9vdHN0cmFwIChkZWZzLCBncmFkaWVudHMsXG4vLyBlbXB0eSBncm91cHMpIGFuZCBjYWNoZXMgZWxlbWVudCByZWZzLiByZW5kZXJGb3JlY2FzdCgpIGluIGluZGV4Q2hhbmdlcy5qc1xuLy8gY2FsbHMgcmVuZGVyUmliYm9uKGZvcmVjYXN0KSBvbiBldmVyeSByZXNvbHZlZCByZXNwb25zZSB0byByZWRyYXcgdGhlIGN1cnZlLFxuLy8gdGhlIGRheSBoYWlybGluZXMvdGlja3MgYW5kIHRoZSBjdXJyZW50LWhvdXIgbWFya2VyIGZyb20gZGF0YS4gY3VycmVudEhvdXJJbmRleFxuLy8gaXMgdGhlIHNpbmdsZSBzb3VyY2Ugb2YgdHJ1dGggZm9yIFwibm93XCIsIHNoYXJlZCB3aXRoIHRoZSByZWFkb3V0IHNvIHRoZSBtYXJrZXJcbi8vIGFuZCB0aGUgc3RhdCByb3cgbmV2ZXIgZGlzYWdyZWUuXG4vL1xuLy8gSGFuZC1hdXRob3JlZCBTVkcsIHZhbmlsbGEgb25seSDigJQgbm8gY2hhcnRpbmcgbGlicmFyeSwgbm8gZGVwZW5kZW5jaWVzLlxuXG5jb25zdCBOUyA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc7XG5cbi8vIHZpZXdCb3ggZ2VvbWV0cnksIGluIHVzZXIgdW5pdHMuIFRoZSBjdXJ2ZSBiYW5kIHNpdHMgYmV0d2VlbiBDSEFSVF9UT1AgYW5kXG4vLyBDSEFSVF9UT1ArQ0hBUlRfSDsgVElDS19IIGJlbmVhdGggaXQgY2FycmllcyB0aGUgV0VEL1RIVS9GUkkgZGF5IGxhYmVscy4gQVxuLy8gc2Vjb25kIGxhbmUgKHRpZGVzLCBvdXQgb2Ygc2NvcGUgdG9kYXkpIHdvdWxkIGFkZCBMQU5FX0ggYmVsb3cgdGhhdCDigJQgdGhlXG4vLyB2aWV3Qm94IGhlaWdodCBzd2l0Y2hlcyBiZXR3ZWVuIHR3byB2YWx1ZXMgZGVwZW5kaW5nIG9uIHdoZXRoZXIgdGhlIGxhbmVcbi8vIGV4aXN0cywgc28gdGhlIGxheW91dCBpcyBidWlsdCBsYW5lLW9wdGlvbmFsIGV2ZW4gdGhvdWdoIHRoZSBsYW5lIG5ldmVyXG4vLyByZW5kZXJzIGZvciBub3cuXG5jb25zdCBWSUVXX1cgPSA3MjA7XG5jb25zdCBQQURfTCA9IDEwO1xuY29uc3QgUEFEX1IgPSAxMDtcbmNvbnN0IENIQVJUX1RPUCA9IDE4O1xuY29uc3QgQ0hBUlRfSCA9IDE1MDtcbmNvbnN0IFRJQ0tfSCA9IDI2O1xuY29uc3QgTEFORV9IID0gOTA7XG5cbi8vIFRlbXBlcmF0dXJlIC0+IGNvbG91ciByYW1wLiBGb3VyIGFuY2hvcnMgc3Bhbm5pbmcgYSBmaXhlZCDCsEMgZG9tYWluIHNvIHRoZVxuLy8gc2FtZSB0ZW1wZXJhdHVyZSBhbHdheXMgcmVhZHMgdGhlIHNhbWUgY29sb3VyIHJlZ2FyZGxlc3Mgb2YgdGhlIGRheSdzIHJhbmdlLlxuY29uc3QgUkFNUCA9IFtcbiAgeyB0OiAtNSwgYzogWzB4M2QsIDB4NmYsIDB4YThdIH0sIC8vIGNvbGRcbiAgeyB0OiAxMCwgYzogWzB4NmYsIDB4YTgsIDB4YTBdIH0sIC8vIG1pbGRcbiAgeyB0OiAyNSwgYzogWzB4ZDksIDB4YTQsIDB4NDFdIH0sIC8vIHdhcm1cbiAgeyB0OiA0MCwgYzogWzB4YzIsIDB4NDUsIDB4MmRdIH0sIC8vIGhvdFxuXTtcblxuY29uc3QgV0VFS0RBWSA9IFsnU1VOJywgJ01PTicsICdUVUUnLCAnV0VEJywgJ1RIVScsICdGUkknLCAnU0FUJ107XG5cbi8vIENhY2hlZCBzY2FmZm9sZCByZWZzLCBwb3B1bGF0ZWQgb25jZSBieSBidWlsZFJpYmJvbigpLlxubGV0IHN2ZywgdGVtcEdyYWQsIGZpbGxQYXRoLCBjdXJ2ZVBhdGgsIGJvdW5kYXJ5R3JvdXAsIHRpY2tHcm91cCwgbWFya2VyR3JvdXAsXG4gIGxhbmVHcm91cDtcblxuZnVuY3Rpb24gZWwobmFtZSwgYXR0cnMpIHtcbiAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhOUywgbmFtZSk7XG4gIGlmIChhdHRycykge1xuICAgIGZvciAoY29uc3QgayBpbiBhdHRycykgeyBub2RlLnNldEF0dHJpYnV0ZShrLCBhdHRyc1trXSk7IH1cbiAgfVxuICByZXR1cm4gbm9kZTtcbn1cblxuZnVuY3Rpb24gbGVycChhLCBiLCBmKSB7IHJldHVybiBhICsgKGIgLSBhKSAqIGY7IH1cblxuLy8gQ29sb3VyIGZvciBhIHRlbXBlcmF0dXJlLCBpbnRlcnBvbGF0ZWQgYWNyb3NzIHRoZSByYW1wIGFuY2hvcnMgYW5kIGNsYW1wZWQgdG9cbi8vIHRoZSBkb21haW4gZW5kcy5cbmZ1bmN0aW9uIHRlbXBDb2xvdXIodGVtcCkge1xuICBpZiAodGVtcCA8PSBSQU1QWzBdLnQpIHsgcmV0dXJuIHJnYihSQU1QWzBdLmMpOyB9XG4gIGlmICh0ZW1wID49IFJBTVBbUkFNUC5sZW5ndGggLSAxXS50KSB7IHJldHVybiByZ2IoUkFNUFtSQU1QLmxlbmd0aCAtIDFdLmMpOyB9XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgUkFNUC5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0ZW1wIDw9IFJBTVBbaV0udCkge1xuICAgICAgY29uc3QgbG8gPSBSQU1QW2kgLSAxXTtcbiAgICAgIGNvbnN0IGhpID0gUkFNUFtpXTtcbiAgICAgIGNvbnN0IGYgPSAodGVtcCAtIGxvLnQpIC8gKGhpLnQgLSBsby50KTtcbiAgICAgIHJldHVybiByZ2IoW1xuICAgICAgICBNYXRoLnJvdW5kKGxlcnAobG8uY1swXSwgaGkuY1swXSwgZikpLFxuICAgICAgICBNYXRoLnJvdW5kKGxlcnAobG8uY1sxXSwgaGkuY1sxXSwgZikpLFxuICAgICAgICBNYXRoLnJvdW5kKGxlcnAobG8uY1syXSwgaGkuY1syXSwgZikpLFxuICAgICAgXSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZ2IoUkFNUFtSQU1QLmxlbmd0aCAtIDFdLmMpO1xufVxuXG5mdW5jdGlvbiByZ2IoYykgeyByZXR1cm4gJ3JnYignICsgY1swXSArICcsJyArIGNbMV0gKyAnLCcgKyBjWzJdICsgJyknOyB9XG5cbmZ1bmN0aW9uIHdlZWtkYXlBYmJyKGRhdGVTdHIpIHtcbiAgLy8gZGF0ZVN0ciBpcyAnWVlZWS1NTS1ERCcuIEJ1aWxkIHRoZSBkYXRlIGF0IFVUQyBtaWRuaWdodCBzbyB0aGUgd2Vla2RheSBuZXZlclxuICAvLyBzaGlmdHMgYWNyb3NzIGEgdGltZXpvbmUgYm91bmRhcnkuXG4gIGNvbnN0IHAgPSBTdHJpbmcoZGF0ZVN0cikuc3BsaXQoJy0nKTtcbiAgY29uc3QgZCA9IG5ldyBEYXRlKERhdGUuVVRDKCtwWzBdLCAoK3BbMV0pIC0gMSwgK3BbMl0pKTtcbiAgcmV0dXJuIFdFRUtEQVlbZC5nZXRVVENEYXkoKV0gfHwgJyc7XG59XG5cbi8vIEluZGV4IG9mIHRoZSBob3VyIGJ1Y2tldCBuZWFyZXN0IFwibm93XCIuIERyaXZlbiBvZmYgbG9jYXRpb24ubG9jYWx0aW1lX2Vwb2NoLFxuLy8gTk9UIGEgcGFyc2VkIGRhdGUtc3RyaW5nIGhvdXIg4oCUIHRoZSBvbGQgZ2V0Q3VycmVudFRpbWUoKSByZWFkIHRoZSBob3VyIG91dCBvZlxuLy8gZGF0ZV9lcG9jaCAobG9jYWwgbWlkbmlnaHQpIGFuZCByZXR1cm5lZCB0aGUgVVRDIG9mZnNldCwgc28gXCJmZWVscyBsaWtlXCIgd2FzIGFcbi8vIGZpeGVkIGFyYml0cmFyeSBob3VyLiBsb2NhbHRpbWVfZXBvY2ggaXMgdGhlIGxvY2F0aW9uJ3MgcmVhbCBjdXJyZW50IHRpbWUuXG5leHBvcnQgZnVuY3Rpb24gY3VycmVudEhvdXJJbmRleChmb3JlY2FzdCkge1xuICBjb25zdCBob3VycyA9IGZvcmVjYXN0LmhvdXJzO1xuICBpZiAoIWhvdXJzIHx8ICFob3Vycy5sZW5ndGgpIHsgcmV0dXJuIDA7IH1cbiAgY29uc3Qgbm93ID0gZm9yZWNhc3QubG9jYXRpb24ubG9jYWx0aW1lX2Vwb2NoO1xuICBsZXQgYmVzdCA9IDA7XG4gIGxldCBiZXN0RGlmZiA9IEluZmluaXR5O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGhvdXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgZGlmZiA9IE1hdGguYWJzKGhvdXJzW2ldLmVwb2NoIC0gbm93KTtcbiAgICBpZiAoZGlmZiA8IGJlc3REaWZmKSB7IGJlc3REaWZmID0gZGlmZjsgYmVzdCA9IGk7IH1cbiAgfVxuICByZXR1cm4gYmVzdDtcbn1cblxuLy8gQ3JlYXRlIHRoZSBTVkcgc2NhZmZvbGQgb25jZS4gQ2FsbGVkIGZyb20gaW5kZXguanMgYXQgYm9vdHN0cmFwLCBhZnRlciB0aGVcbi8vIG1vdW50IGVsZW1lbnQgaXMgaW4gdGhlIERPTS5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFJpYmJvbihtb3VudCkge1xuICBpZiAoc3ZnKSB7IHJldHVybjsgfSAvLyBidWlsZCBvbmNlXG5cbiAgc3ZnID0gZWwoJ3N2ZycsIHtcbiAgICBpZDogJ3JpYmJvblN2ZycsXG4gICAgdmlld0JveDogJzAgMCAnICsgVklFV19XICsgJyAnICsgKENIQVJUX1RPUCArIENIQVJUX0ggKyBUSUNLX0gpLFxuICAgIHByZXNlcnZlQXNwZWN0UmF0aW86ICd4TWlkWU1pZCBtZWV0JyxcbiAgfSk7XG5cbiAgY29uc3QgZGVmcyA9IGVsKCdkZWZzJyk7XG5cbiAgLy8gSG9yaXpvbnRhbCBzdHJva2UgZ3JhZGllbnQ6IGNvbG91cmVkIGJ5IHRlbXBlcmF0dXJlIGFjcm9zcyB0aGUgNzIgaG91cnMuXG4gIC8vIFN0b3BzIGFyZSByZWJ1aWx0IGVhY2ggcmVuZGVyIGZyb20gdGhlIGFjdHVhbCBzZXJpZXMuXG4gIHRlbXBHcmFkID0gZWwoJ2xpbmVhckdyYWRpZW50Jywge1xuICAgIGlkOiAndGVtcEdyYWQnLCB4MTogJzAnLCB5MTogJzAnLCB4MjogJzEnLCB5MjogJzAnLFxuICB9KTtcblxuICAvLyBWZXJ0aWNhbCBmYWRlIGZpbGwgdW5kZXIgdGhlIGN1cnZlLlxuICBjb25zdCBmaWxsR3JhZCA9IGVsKCdsaW5lYXJHcmFkaWVudCcsIHtcbiAgICBpZDogJ2ZpbGxHcmFkJywgeDE6ICcwJywgeTE6ICcwJywgeDI6ICcwJywgeTI6ICcxJyxcbiAgfSk7XG4gIGZpbGxHcmFkLmFwcGVuZENoaWxkKGVsKCdzdG9wJywgeyBvZmZzZXQ6ICcwJywgJ3N0b3AtY29sb3InOiAnIzhDQTBBRScsICdzdG9wLW9wYWNpdHknOiAnMC4yOCcgfSkpO1xuICBmaWxsR3JhZC5hcHBlbmRDaGlsZChlbCgnc3RvcCcsIHsgb2Zmc2V0OiAnMScsICdzdG9wLWNvbG9yJzogJyM4Q0EwQUUnLCAnc3RvcC1vcGFjaXR5JzogJzAnIH0pKTtcblxuICBkZWZzLmFwcGVuZENoaWxkKHRlbXBHcmFkKTtcbiAgZGVmcy5hcHBlbmRDaGlsZChmaWxsR3JhZCk7XG4gIHN2Zy5hcHBlbmRDaGlsZChkZWZzKTtcblxuICBmaWxsUGF0aCA9IGVsKCdwYXRoJywgeyBjbGFzczogJ3JpYmJvbi1maWxsJywgZmlsbDogJ3VybCgjZmlsbEdyYWQpJywgc3Ryb2tlOiAnbm9uZScgfSk7XG4gIGN1cnZlUGF0aCA9IGVsKCdwYXRoJywgeyBjbGFzczogJ3JpYmJvbi1jdXJ2ZScsIGZpbGw6ICdub25lJywgc3Ryb2tlOiAndXJsKCN0ZW1wR3JhZCknIH0pO1xuICBib3VuZGFyeUdyb3VwID0gZWwoJ2cnLCB7IGNsYXNzOiAncmliYm9uLWJvdW5kYXJpZXMnIH0pO1xuICB0aWNrR3JvdXAgPSBlbCgnZycsIHsgY2xhc3M6ICdyaWJib24tdGlja3MnIH0pO1xuICBtYXJrZXJHcm91cCA9IGVsKCdnJywgeyBjbGFzczogJ3JpYmJvbi1tYXJrZXInIH0pO1xuICBsYW5lR3JvdXAgPSBlbCgnZycsIHsgY2xhc3M6ICdyaWJib24tbGFuZScgfSk7XG5cbiAgc3ZnLmFwcGVuZENoaWxkKGZpbGxQYXRoKTtcbiAgc3ZnLmFwcGVuZENoaWxkKGN1cnZlUGF0aCk7XG4gIHN2Zy5hcHBlbmRDaGlsZChib3VuZGFyeUdyb3VwKTtcbiAgc3ZnLmFwcGVuZENoaWxkKHRpY2tHcm91cCk7XG4gIHN2Zy5hcHBlbmRDaGlsZChsYW5lR3JvdXApO1xuICBzdmcuYXBwZW5kQ2hpbGQobWFya2VyR3JvdXApO1xuXG4gIG1vdW50LmFwcGVuZENoaWxkKHN2Zyk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyKG5vZGUpIHtcbiAgd2hpbGUgKG5vZGUuZmlyc3RDaGlsZCkgeyBub2RlLnJlbW92ZUNoaWxkKG5vZGUuZmlyc3RDaGlsZCk7IH1cbn1cblxuLy8gUmVkcmF3IHRoZSB3aG9sZSByaWJib24gZnJvbSBhIGZvcmVjYXN0OiB7IGxvY2F0aW9uLCBob3Vyc1tdLCBkYXlzW10sIGxhbmU/IH0uXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyUmliYm9uKGZvcmVjYXN0KSB7XG4gIGlmICghc3ZnKSB7IHJldHVybjsgfVxuXG4gIGNvbnN0IGhvdXJzID0gZm9yZWNhc3QuaG91cnMgfHwgW107XG4gIGNvbnN0IG4gPSBob3Vycy5sZW5ndGg7XG4gIGlmICghbikgeyByZXR1cm47IH1cblxuICBjb25zdCBsYW5lT24gPSAhIWZvcmVjYXN0LmxhbmU7XG4gIGNvbnN0IHRvdGFsSCA9IENIQVJUX1RPUCArIENIQVJUX0ggKyBUSUNLX0ggKyAobGFuZU9uID8gTEFORV9IIDogMCk7XG4gIHN2Zy5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCAnMCAwICcgKyBWSUVXX1cgKyAnICcgKyB0b3RhbEgpO1xuXG4gIGNvbnN0IGlubmVyVyA9IFZJRVdfVyAtIFBBRF9MIC0gUEFEX1I7XG4gIGNvbnN0IGJhc2VsaW5lID0gQ0hBUlRfVE9QICsgQ0hBUlRfSDtcblxuICAvLyB0ZW1wZXJhdHVyZSBkb21haW4gZm9yIHRoZSB5LXNjYWxlLCBwYWRkZWQgc28gdGhlIGN1cnZlIG5ldmVyIGh1Z3MgYW4gZWRnZS5cbiAgbGV0IG1pbiA9IEluZmluaXR5O1xuICBsZXQgbWF4ID0gLUluZmluaXR5O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgIGlmIChob3Vyc1tpXS50ZW1wIDwgbWluKSB7IG1pbiA9IGhvdXJzW2ldLnRlbXA7IH1cbiAgICBpZiAoaG91cnNbaV0udGVtcCA+IG1heCkgeyBtYXggPSBob3Vyc1tpXS50ZW1wOyB9XG4gIH1cbiAgaWYgKG1pbiA9PT0gbWF4KSB7IG1pbiAtPSAxOyBtYXggKz0gMTsgfVxuICBjb25zdCBzcGFuID0gbWF4IC0gbWluO1xuXG4gIGNvbnN0IHggPSAoaSkgPT4gUEFEX0wgKyAobiA8PSAxID8gMCA6IChpIC8gKG4gLSAxKSkgKiBpbm5lclcpO1xuICBjb25zdCB5ID0gKHQpID0+IENIQVJUX1RPUCArICgxIC0gKHQgLSBtaW4pIC8gc3BhbikgKiBDSEFSVF9IO1xuXG4gIC8vIEJ1aWxkIHRoZSBwb2ludHMsIHRoZW4gYSBzbW9vdGggcGF0aCB2aWEgcXVhZHJhdGljIG1pZHBvaW50cyAobm8gb3ZlcnNob290KS5cbiAgY29uc3QgcHRzID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7IHB0cy5wdXNoKHsgeDogeChpKSwgeTogeShob3Vyc1tpXS50ZW1wKSB9KTsgfVxuXG4gIGxldCBkID0gJ00gJyArIHB0c1swXS54LnRvRml4ZWQoMikgKyAnICcgKyBwdHNbMF0ueS50b0ZpeGVkKDIpO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IHB0cy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHhjID0gKHB0c1tpIC0gMV0ueCArIHB0c1tpXS54KSAvIDI7XG4gICAgY29uc3QgeWMgPSAocHRzW2kgLSAxXS55ICsgcHRzW2ldLnkpIC8gMjtcbiAgICBkICs9ICcgUSAnICsgcHRzW2kgLSAxXS54LnRvRml4ZWQoMikgKyAnICcgKyBwdHNbaSAtIDFdLnkudG9GaXhlZCgyKSArXG4gICAgICAnICcgKyB4Yy50b0ZpeGVkKDIpICsgJyAnICsgeWMudG9GaXhlZCgyKTtcbiAgfVxuICBkICs9ICcgTCAnICsgcHRzW24gLSAxXS54LnRvRml4ZWQoMikgKyAnICcgKyBwdHNbbiAtIDFdLnkudG9GaXhlZCgyKTtcblxuICBjdXJ2ZVBhdGguc2V0QXR0cmlidXRlKCdkJywgZCk7XG4gIGZpbGxQYXRoLnNldEF0dHJpYnV0ZSgnZCcsIGQgK1xuICAgICcgTCAnICsgcHRzW24gLSAxXS54LnRvRml4ZWQoMikgKyAnICcgKyBiYXNlbGluZSArXG4gICAgJyBMICcgKyBwdHNbMF0ueC50b0ZpeGVkKDIpICsgJyAnICsgYmFzZWxpbmUgKyAnIFonKTtcblxuICAvLyBIb3Jpem9udGFsIHRlbXBlcmF0dXJlIGdyYWRpZW50OiBvbmUgc3RvcCBwZXIgaG91ciwgY29sb3VyZWQgYnkgdGhhdCBob3VyJ3NcbiAgLy8gdGVtcGVyYXR1cmUuIG9iamVjdEJvdW5kaW5nQm94IG1hcHMgb2Zmc2V0IGkvKG4tMSkgb250byB0aGUgY3VydmUncyB4LCB3aGljaFxuICAvLyBzcGFucyB0aGUgZnVsbCBpbm5lciB3aWR0aCwgc28gZWFjaCBzdG9wIGxhbmRzIHVuZGVyIGl0cyBob3VyLlxuICBjbGVhcih0ZW1wR3JhZCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgdGVtcEdyYWQuYXBwZW5kQ2hpbGQoZWwoJ3N0b3AnLCB7XG4gICAgICBvZmZzZXQ6IChuIDw9IDEgPyAwIDogaSAvIChuIC0gMSkpLnRvRml4ZWQoNCksXG4gICAgICAnc3RvcC1jb2xvcic6IHRlbXBDb2xvdXIoaG91cnNbaV0udGVtcCksXG4gICAgfSkpO1xuICB9XG5cbiAgLy8gRGF5IGhhaXJsaW5lcyArIFdFRC9USFUvRlJJIHRpY2tzLCBkZXJpdmVkIGZyb20gdGhlIHBlci1kYXkgaG91ciBjb3VudHMgc28gYVxuICAvLyBzaG9ydCB0cmFpbGluZyBkYXkgc3RpbGwgbGluZXMgdXAuXG4gIGNsZWFyKGJvdW5kYXJ5R3JvdXApO1xuICBjbGVhcih0aWNrR3JvdXApO1xuICBjb25zdCBkYXlzID0gZm9yZWNhc3QuZGF5cyB8fCBbXTtcbiAgbGV0IHN0YXJ0ID0gMDtcbiAgZm9yIChsZXQgZGkgPSAwOyBkaSA8IGRheXMubGVuZ3RoOyBkaSsrKSB7XG4gICAgY29uc3QgY291bnQgPSBkYXlzW2RpXS5jb3VudCB8fCAwO1xuICAgIGlmIChjb3VudCA8PSAwKSB7IGNvbnRpbnVlOyB9XG5cbiAgICBpZiAoZGkgPiAwICYmIHN0YXJ0IDwgbikge1xuICAgICAgY29uc3QgYnggPSB4KHN0YXJ0KS50b0ZpeGVkKDIpO1xuICAgICAgYm91bmRhcnlHcm91cC5hcHBlbmRDaGlsZChlbCgnbGluZScsIHtcbiAgICAgICAgY2xhc3M6ICdyaWJib24taGFpcmxpbmUnLFxuICAgICAgICB4MTogYngsIHkxOiBDSEFSVF9UT1AsIHgyOiBieCwgeTI6IGJhc2VsaW5lLFxuICAgICAgfSkpO1xuICAgIH1cblxuICAgIGNvbnN0IGNlbnRlcklkeCA9IHN0YXJ0ICsgKGNvdW50IC0gMSkgLyAyO1xuICAgIGNvbnN0IHRpY2sgPSBlbCgndGV4dCcsIHtcbiAgICAgIGNsYXNzOiAncmliYm9uLXRpY2snLFxuICAgICAgeDogeChjZW50ZXJJZHgpLnRvRml4ZWQoMiksXG4gICAgICB5OiAoYmFzZWxpbmUgKyBUSUNLX0ggKiAwLjcpLnRvRml4ZWQoMiksXG4gICAgICAndGV4dC1hbmNob3InOiAnbWlkZGxlJyxcbiAgICB9KTtcbiAgICB0aWNrLnRleHRDb250ZW50ID0gd2Vla2RheUFiYnIoZGF5c1tkaV0uZGF0ZSk7XG4gICAgdGlja0dyb3VwLmFwcGVuZENoaWxkKHRpY2spO1xuXG4gICAgc3RhcnQgKz0gY291bnQ7XG4gIH1cblxuICAvLyBDdXJyZW50LWhvdXIgbWFya2VyOiBhIGhhaXJsaW5lIGRyb3BwZWQgdG8gdGhlIGJhc2VsaW5lIHBsdXMgYSBkb3Qgb24gdGhlXG4gIC8vIGN1cnZlLCB0aGUgZG90IGZpbGxlZCB3aXRoIHRoZSB0ZW1wZXJhdHVyZSBjb2xvdXIgZm9yIHRoYXQgaG91ci5cbiAgY2xlYXIobWFya2VyR3JvdXApO1xuICBjb25zdCBpZHggPSBjdXJyZW50SG91ckluZGV4KGZvcmVjYXN0KTtcbiAgY29uc3QgbXggPSB4KGlkeCk7XG4gIGNvbnN0IG15ID0geShob3Vyc1tpZHhdLnRlbXApO1xuICBtYXJrZXJHcm91cC5hcHBlbmRDaGlsZChlbCgnbGluZScsIHtcbiAgICBjbGFzczogJ3JpYmJvbi1ub3dsaW5lJyxcbiAgICB4MTogbXgudG9GaXhlZCgyKSwgeTE6IG15LnRvRml4ZWQoMiksIHgyOiBteC50b0ZpeGVkKDIpLCB5MjogYmFzZWxpbmUsXG4gIH0pKTtcbiAgbWFya2VyR3JvdXAuYXBwZW5kQ2hpbGQoZWwoJ2NpcmNsZScsIHtcbiAgICBjbGFzczogJ3JpYmJvbi1kb3QnLFxuICAgIGN4OiBteC50b0ZpeGVkKDIpLCBjeTogbXkudG9GaXhlZCgyKSwgcjogJzUuNScsXG4gICAgZmlsbDogdGVtcENvbG91cihob3Vyc1tpZHhdLnRlbXApLFxuICB9KSk7XG5cbiAgLy8gT3B0aW9uYWwgc2Vjb25kIGxhbmUuIE5vIGRhdGEgZmVlZHMgaXQgdG9kYXkgKHRpZGVzIGFyZSBQcm8rIGFuZCBlbXB0eSBmb3JcbiAgLy8gaW5sYW5kIGxvY2F0aW9ucyksIHNvIGl0IHN0YXlzIGVtcHR5IGFuZCB0aGUgdmlld0JveCB1c2VzIHRoZSBzaG9ydGVyIG9mIHRoZVxuICAvLyB0d28gaGVpZ2h0cyDigJQgYnV0IHRoZSBncm91cCBhbmQgdGhlIGhlaWdodCBzd2l0Y2ggZXhpc3Qgc28gYSBsYW5lIGNhbiBkcm9wIGluXG4gIC8vIHdpdGhvdXQgYSBsYXlvdXQgcmV3cml0ZS5cbiAgY2xlYXIobGFuZUdyb3VwKTtcbiAgaWYgKGxhbmVPbiAmJiB0eXBlb2YgZm9yZWNhc3QubGFuZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZvcmVjYXN0LmxhbmUobGFuZUdyb3VwLCB7IHgsIGJhc2VsaW5lLCBsYW5lVG9wOiBiYXNlbGluZSArIFRJQ0tfSCwgbGFuZUg6IExBTkVfSCB9KTtcbiAgfVxufVxuIiwiLy8gc2t5LmpzIOKAlCBhIGNvbmRpdGlvbi1iYXNlZCBiYWNrZ3JvdW5kIG1vdW50ZWQgYmVoaW5kIHRoZSBhcHAuXG4vL1xuLy8gUHVyZSB2YW5pbGxhLCBubyBkZXBlbmRlbmNpZXMuIEEgc2luZ2xlIGAud2VhdGhlckJnYCBlbGVtZW50IGlzIGluc2VydGVkIGFzXG4vLyB0aGUgRklSU1QgY2hpbGQgb2YgYCNhcHBgIGFuZCBwb3NpdGlvbmVkIGBmaXhlZGAgKHNlZSBzdHlsZS5jc3MpLCBzbyBpdCBzcGFuc1xuLy8gdGhlIHdob2xlIGJyb3dzZXIgd2luZG93IG9uIGRlc2t0b3Agd2hpbGUgYCNhcHBgIHN0YXlzIGEgY29uc3RyYWluZWQgY2VudHJlZFxuLy8gY29sdW1uIGFib3ZlIGl0ICh6LWluZGV4KS4gVGhlIGVsZW1lbnQgY2FycmllcyBhIGBiZy08Y2F0ZWdvcnk+YCBjbGFzcyB0aGF0XG4vLyBzZWxlY3RzIGEgcGVyLWNvbmRpdGlvbiB0cmVhdG1lbnQgaW4gc3R5bGUuY3NzIOKAlCBhIGdyYWRpZW50IGJhc2UgcGx1c1xuLy8gZGVwdGgtbGF5ZXJlZCBkZWNvcmF0aXZlIGltYWdlcnkgKHN1biwgbW9vbiArIHR3aW5rbGluZyBzdGFycywgZHJpZnRpbmdcbi8vIGNsb3VkcywgZmxha2VzLCBoYXplKSBwYWludGVkIGFjcm9zcyB0aGUgdHdvIHBzZXVkby1lbGVtZW50cyBBTkQgYSBzZXQgb2Zcbi8vIGAuYmdMYXllcmAgY2hpbGQgZGl2cyBtb3VudGVkIGJlbG93LiBUaGUgY2hpbGRyZW4gYWRkIHRoZSBmYXIvbWlkL25lYXIgZGVwdGhcbi8vIHBsYW5lcyBhbmQgdGhlIGdyb3VuZC1saWdodGluZyBhY2NlbnQgdGhhdCB0d28gcHNldWRvLWVsZW1lbnRzIGFsb25lIGNhbid0XG4vLyBob2xkOyBldmVyeSBjYXRlZ29yeSBjb21wb3NlcyBhIHN1YnNldCBvZiB0aGVtICh1bnVzZWQgb25lcyBzdGF5IHRyYW5zcGFyZW50KS5cbi8vIEFsbCBpbWFnZXJ5IGFuZCBtb3Rpb24gbGl2ZSBpbiBzdHlsZS5jc3MuXG4vL1xuLy8gVGhlIGNhdGVnb3J5IGlzIHJlc29sdmVkIGZyb20gYG5vdy5jb25kaXRpb25gICh0aGUgV2VhdGhlckFQSSBjb25kaXRpb24gdGV4dClcbi8vIGFuZCByZS1hcHBsaWVkIG9uIGV2ZXJ5IGZldGNoIHZpYSBzZXRXZWF0aGVyQmcoKSwgc28gdGhlIGJhY2tncm91bmQgZm9sbG93c1xuLy8gdGhlIGN1cnJlbnQgbG9jYXRpb24ncyB3ZWF0aGVyLiBPZmYgdGhlIHJlbmRlciBwYXRoIGl0c2VsZjogaW5kZXguanMgbW91bnRzXG4vLyB0aGUgbGF5ZXIgb25jZSBhdCBib290c3RyYXAsIGFuZCBpbmRleENoYW5nZXMuanMgc3dhcHMgb25seSB0aGUgY2xhc3MuXG4vL1xuLy8gVGhlIG1vdGlvbiBpcyBndWFyZGVkIHRoZSBzYW1lIHdheSB0aGUgb2xkIGRyaWZ0IHdhczpcbi8vICAgLSBwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UgLT4gdGhlIENTUyBhbmltYXRpb25zIGFyZSBkaXNhYmxlZCBieSBhXG4vLyAgICAgICBtZWRpYSBxdWVyeSwgc28gZWFjaCB0cmVhdG1lbnQgcmVuZGVycyBhcyBvbmUgc3RhdGljIGZyYW1lLlxuLy8gICAtIHZpc2liaWxpdHljaGFuZ2UgLT4gYWRkIGEgYC5wYXVzZWRgIGNsYXNzIHRoYXQgcGF1c2VzIHRoZSBDU1MgYW5pbWF0aW9uc1xuLy8gICAgICAgd2hpbGUgdGhlIHRhYiBpcyBoaWRkZW4sIHJlbW92ZWQgd2hlbiBpdCBiZWNvbWVzIHZpc2libGUgYWdhaW4uXG5cbmxldCBiZ0VsID0gbnVsbDtcbmxldCBjdXJyZW50Q2F0ZWdvcnkgPSBudWxsO1xuXG4vLyBUaGUgY2F0ZWdvcnkgYXBwbGllZCBiZWZvcmUgdGhlIGZpcnN0IGZldGNoIHJlc29sdmVzIOKAlCBhIGNhbG0sIG5ldXRyYWwgc2t5LlxuY29uc3QgREVGQVVMVF9DQVRFR09SWSA9ICdjbG91ZHknO1xuXG4vLyBUaGUgZGVwdGggcGxhbmVzIGVhY2ggY2F0ZWdvcnkgY29tcG9zZXMgZnJvbS4gTW91bnRlZCBvbmNlIGFzIGNoaWxkIGRpdnMgb2Zcbi8vIGAud2VhdGhlckJnYCBzbyBhIGNhdGVnb3J5IGNhbiBzdGFjayBmYXIvbWlkL25lYXIgaW1hZ2VyeSBwbHVzIGEgZ3JvdW5kLWxpZ2h0XG4vLyBhY2NlbnQg4oCUIG1vcmUgcGFpbnQgc3VyZmFjZXMgdGhhbiB0aGUgdHdvIHBzZXVkby1lbGVtZW50cyBwcm92aWRlLiBBIGNhdGVnb3J5XG4vLyBzdHlsZXMgb25seSB0aGUgcGxhbmVzIGl0IG5lZWRzOyB0aGUgcmVzdCBzdGF5IHRyYW5zcGFyZW50LiBPcmRlciBpc1xuLy8gYmFjay10by1mcm9udCBzbyBsYXRlciBwbGFuZXMgcGFpbnQgb3ZlciBlYXJsaWVyIG9uZXMuXG5jb25zdCBERVBUSF9MQVlFUlMgPSBbJ2ZhcicsICdtaWQnLCAnbmVhcicsICdncm91bmQnXTtcblxuZnVuY3Rpb24gcmVkdWNlTW90aW9uKCkge1xuICByZXR1cm4gISEod2luZG93Lm1hdGNoTWVkaWEgJiYgd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpJykubWF0Y2hlcyk7XG59XG5cbi8vIE1hcCBhIFdlYXRoZXJBUEkgY29uZGl0aW9uIHN0cmluZyB0byBvbmUgb2YgdGhlIGJhY2tncm91bmQgdHJlYXRtZW50cyBkZWZpbmVkXG4vLyBpbiBzdHlsZS5jc3MuIE9yZGVyIG1hdHRlcnM6IHRoZSBtb3JlIHNwZWNpZmljIHByZWNpcGl0YXRpb24gY2hlY2tzIHJ1biBiZWZvcmVcbi8vIHRoZSBicm9hZCBjbG91ZC9jbGVhciBvbmVzIHNvIFwiTGlnaHQgcmFpbiBzaG93ZXJcIiBhbmQgXCJQYXRjaHkgc25vd1wiIHJlc29sdmUgdG9cbi8vIHRoZWlyIHByZWNpcGl0YXRpb24gY2F0ZWdvcnkgcmF0aGVyIHRoYW4gZmFsbGluZyB0aHJvdWdoLiBBbnl0aGluZyB1bm1hdGNoZWRcbi8vIGxhbmRzIG9uIHRoZSBuZXV0cmFsICdjbG91ZHknIHRyZWF0bWVudC5cbmZ1bmN0aW9uIGNhdGVnb3J5Rm9yKHRleHQpIHtcbiAgY29uc3QgdCA9IFN0cmluZyh0ZXh0IHx8ICcnKS50b0xvd2VyQ2FzZSgpO1xuICBpZiAoL3Nub3d8c2xlZXR8YmxpenphcmR8aWNlfGZsdXJyLy50ZXN0KHQpKSB7IHJldHVybiAnc25vdyc7IH1cbiAgaWYgKC9yYWlufGRyaXp6bGV8c2hvd2VyfHRodW5kZXIvLnRlc3QodCkpIHsgcmV0dXJuICdyYWluJzsgfVxuICBpZiAoL2ZvZ3xtaXN0fGhhemUvLnRlc3QodCkpIHsgcmV0dXJuICdmb2cnOyB9XG4gIGlmICgvc3VubnkvLnRlc3QodCkpIHsgcmV0dXJuICdzdW5ueSc7IH1cbiAgaWYgKC9jbGVhci8udGVzdCh0KSkgeyByZXR1cm4gJ2NsZWFyLW5pZ2h0JzsgfVxuICByZXR1cm4gJ2Nsb3VkeSc7IC8vIGNsb3VkeSwgb3ZlcmNhc3QsIHBhcnRseSBjbG91ZHksIGFuZCBhbnkgdW5rbm93biB0ZXh0XG59XG5cbi8vIEZyZWV6ZSB0aGUgZHJpZnQgd2hpbGUgdGhlIHRhYiBpcyBoaWRkZW4sIHJlc3VtZSB3aGVuIGl0IGNvbWVzIGJhY2suIFVuZGVyXG4vLyByZWR1Y2VkIG1vdGlvbiBub3RoaW5nIGlzIGFuaW1hdGluZywgc28gYC5wYXVzZWRgIGlzIGEgaGFybWxlc3Mgbm8tb3AuXG5mdW5jdGlvbiBvblZpc2liaWxpdHkoKSB7XG4gIGlmICghYmdFbCkgeyByZXR1cm47IH1cbiAgaWYgKGRvY3VtZW50LmhpZGRlbikge1xuICAgIGJnRWwuY2xhc3NMaXN0LmFkZCgncGF1c2VkJyk7XG4gIH0gZWxzZSB7XG4gICAgYmdFbC5jbGFzc0xpc3QucmVtb3ZlKCdwYXVzZWQnKTtcbiAgfVxufVxuXG4vLyBTd2FwIHRoZSBiYWNrZ3JvdW5kIHRyZWF0bWVudCB0byBtYXRjaCBhIGNvbmRpdGlvbi4gQ2FsbGVkIGZyb20gdGhlIHJlbmRlclxuLy8gcGF0aCBvbiBldmVyeSBmZXRjaDsgYSBuby1vcCB3aGVuIHRoZSByZXNvbHZlZCBjYXRlZ29yeSBoYXNuJ3QgY2hhbmdlZCwgc28gYVxuLy8gdW5pdCB0b2dnbGUgb3IgYSByZXBlYXQgc2VhcmNoIGRvZXNuJ3QgcmVzdGFydCB0aGUgYW5pbWF0aW9ucy4gU2FmZSB0byBjYWxsXG4vLyBiZWZvcmUgaW5pdFdlYXRoZXJCZygpIGhhcyBydW4g4oCUIHRoZSBjYXRlZ29yeSBpcyByZW1lbWJlcmVkIGFuZCBhcHBsaWVkIHRoZW4uXG5leHBvcnQgZnVuY3Rpb24gc2V0V2VhdGhlckJnKGNvbmRpdGlvblRleHQpIHtcbiAgY29uc3QgY2F0ZWdvcnkgPSBjYXRlZ29yeUZvcihjb25kaXRpb25UZXh0KTtcbiAgaWYgKGNhdGVnb3J5ID09PSBjdXJyZW50Q2F0ZWdvcnkpIHsgcmV0dXJuOyB9XG4gIGlmIChjdXJyZW50Q2F0ZWdvcnkpIHsgYmdFbCAmJiBiZ0VsLmNsYXNzTGlzdC5yZW1vdmUoJ2JnLScgKyBjdXJyZW50Q2F0ZWdvcnkpOyB9XG4gIGN1cnJlbnRDYXRlZ29yeSA9IGNhdGVnb3J5O1xuICBpZiAoYmdFbCkgeyBiZ0VsLmNsYXNzTGlzdC5hZGQoJ2JnLScgKyBjYXRlZ29yeSk7IH1cbn1cblxuLy8gTW91bnQgdGhlIGJhY2tncm91bmQgbGF5ZXIgb25jZSwgYXMgdGhlIGZpcnN0IGNoaWxkIG9mIHRoZSBnaXZlbiBob3N0IChgI2FwcGApLlxuLy8gU2FmZSB0byBjYWxsIGFnYWluIOKAlCBpdCBvbmx5IGV2ZXIgbW91bnRzIGEgc2luZ2xlIGVsZW1lbnQuIEFwcGxpZXMgd2hhdGV2ZXJcbi8vIGNhdGVnb3J5IGhhcyBiZWVuIHNldCBzbyBmYXIsIG9yIGEgbmV1dHJhbCBkZWZhdWx0IHVudGlsIHRoZSBmaXJzdCBmZXRjaC5cbmV4cG9ydCBmdW5jdGlvbiBpbml0V2VhdGhlckJnKGhvc3RFbCkge1xuICBpZiAoYmdFbCkgeyByZXR1cm47IH0gLy8gbW91bnQgb25jZVxuICBjb25zdCBob3N0ID0gaG9zdEVsIHx8IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKTtcbiAgaWYgKCFob3N0KSB7IHJldHVybjsgfVxuXG4gIGJnRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYmdFbC5jbGFzc05hbWUgPSAnd2VhdGhlckJnJztcbiAgYmdFbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgYmdFbC5jbGFzc0xpc3QuYWRkKCdiZy0nICsgKGN1cnJlbnRDYXRlZ29yeSB8fCBERUZBVUxUX0NBVEVHT1JZKSk7XG4gIGlmICghY3VycmVudENhdGVnb3J5KSB7IGN1cnJlbnRDYXRlZ29yeSA9IERFRkFVTFRfQ0FURUdPUlk7IH1cblxuICAvLyBNb3VudCB0aGUgZGVwdGggcGxhbmVzIG9uY2UuIFRoZXkgYXJlIGdlbmVyaWMgYW5kIHNoYXJlZCBhY3Jvc3MgY2F0ZWdvcmllcztcbiAgLy8gdGhlIGFjdGl2ZSBgYmctPGNhdGVnb3J5PmAgY2xhc3MgZGVjaWRlcyB3aGF0IGVhY2ggcGxhbmUgcGFpbnRzIGluIENTUy5cbiAgZm9yIChjb25zdCBuYW1lIG9mIERFUFRIX0xBWUVSUykge1xuICAgIGNvbnN0IGxheWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGF5ZXIuY2xhc3NOYW1lID0gJ2JnTGF5ZXIgYmdMYXllci0tJyArIG5hbWU7XG4gICAgYmdFbC5hcHBlbmRDaGlsZChsYXllcik7XG4gIH1cblxuICBob3N0Lmluc2VydEJlZm9yZShiZ0VsLCBob3N0LmZpcnN0Q2hpbGQpO1xuXG4gIC8vIE5vdGhpbmcgZHJpZnRzIHVuZGVyIHJlZHVjZWQgbW90aW9uICh0aGUgQ1NTIG1lZGlhIHF1ZXJ5IGRpc2FibGVzIHRoZVxuICAvLyBhbmltYXRpb25zKSwgc28gdGhlcmUgaXMgbm90aGluZyB0byBwYXVzZSDigJQgc2tpcCB0aGUgbGlzdGVuZXIgaW4gdGhhdCBjYXNlLlxuICBpZiAoIXJlZHVjZU1vdGlvbigpKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsIG9uVmlzaWJpbGl0eSk7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvV2VhdGhlckFwcF9UT1AvXCI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJjaGFuZ2VzXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4Q2hhbmdlcy5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==