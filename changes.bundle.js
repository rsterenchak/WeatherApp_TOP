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
/* mid: a moderate field of stars — brighter than the far plane, no glow yet,
   twinkling on its own offset so the three star planes shimmer independently. */
.weatherBg.bg-clear-night > .bgLayer--mid {
  background-image:
    radial-gradient(1.4px 1.4px at 16% 22%, rgba(234, 238, 242, 0.7), transparent 60%),
    radial-gradient(1.2px 1.2px at 40% 34%, rgba(234, 238, 242, 0.65), transparent 60%),
    radial-gradient(1.5px 1.5px at 58% 18%, rgba(234, 238, 242, 0.7), transparent 60%),
    radial-gradient(1.2px 1.2px at 76% 44%, rgba(234, 238, 242, 0.6), transparent 60%),
    radial-gradient(1.4px 1.4px at 34% 70%, rgba(234, 238, 242, 0.62), transparent 60%),
    radial-gradient(1.2px 1.2px at 88% 66%, rgba(234, 238, 242, 0.6), transparent 60%);
  opacity: 0.85;
  animation: bgTwinkle 6s ease-in-out infinite alternate;
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
/* mid: a moderate cloud mass drifting at a middling pace and blur, sitting
   between the far haze and the sharp near cloud. */
.weatherBg.bg-cloudy > .bgLayer--mid {
  background: radial-gradient(52% 30% at 46% 32%, rgba(158, 176, 190, 0.18), rgba(158, 176, 190, 0) 70%);
  filter: blur(5px);
  animation: bgCloud 48s ease-in-out infinite alternate;
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
/* mid: a middle sheet of rain streaks between the base ::after sheen and the
   coarse near streaks — moderate angle, gauge and speed. */
.weatherBg.bg-rain > .bgLayer--mid {
  background-image: repeating-linear-gradient(76deg, rgba(170, 198, 220, 0.09) 0 1px, rgba(170, 198, 220, 0) 1px 12px);
  animation: bgRain 0.72s linear infinite;
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
/* mid: medium flakes at a moderate pace and a hair of blur — the middle plane
   that fills the gap between the faint far field and the glowing near flakes, so
   snow reads as three depth layers rather than a foreground-and-backdrop pair. */
.weatherBg.bg-snow > .bgLayer--mid {
  background-image:
    radial-gradient(2px 2px at 24% 18%, rgba(255, 255, 255, 0.75), transparent 60%),
    radial-gradient(2.2px 2.2px at 58% 30%, rgba(255, 255, 255, 0.7), transparent 60%),
    radial-gradient(1.9px 1.9px at 82% 24%, rgba(255, 255, 255, 0.72), transparent 60%),
    radial-gradient(2.1px 2.1px at 38% 52%, rgba(255, 255, 255, 0.7), transparent 60%),
    radial-gradient(2px 2px at 70% 66%, rgba(255, 255, 255, 0.68), transparent 60%),
    radial-gradient(2.2px 2.2px at 16% 80%, rgba(255, 255, 255, 0.68), transparent 60%);
  background-size: 100% 50%;
  filter: blur(0.4px);
  opacity: 0.85;
  animation: bgSnow 16s linear infinite;
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
/* mid: a middle haze band drifting between the thin far band and the low near
   mass, moderately blurred. */
.weatherBg.bg-fog > .bgLayer--mid {
  background-image: linear-gradient(0deg, rgba(150, 168, 182, 0) 24%, rgba(150, 168, 182, 0.1) 44%, rgba(150, 168, 182, 0) 62%);
  filter: blur(5px);
  opacity: 0.85;
  animation: bgFog 26s ease-in-out infinite alternate;
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: 'Roboto';\n  src: url('./Roboto-Regular.ttf');\n  font-weight: 300 400;\n}\n\n/* Palette:\n   ground  #12181F   rules  #26313B\n   text    #EAEEF2 (primary) / #8CA0AE (muted)\n   The temperature colours live in ribbon.js (the curve is coloured by the\n   temperature scalar, not by CSS). */\n:root {\n  --ground: #12181F;\n  --rule: #26313B;\n  --text: #EAEEF2;\n  --muted: #8CA0AE;\n  --mono: 'SFMono-Regular', 'SF Mono', 'Menlo', 'Consolas', 'Liberation Mono', monospace;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  background: var(--ground);\n  color: var(--text);\n  font-family: 'Roboto', system-ui, sans-serif;\n  -webkit-font-smoothing: antialiased;\n}\n\n/* dvh (not vh): on iOS Safari vh resolves to the tall viewport and parks the\n   bottom of the layout under the URL bar. */\n#app {\n  position: relative; /* stacks the constrained column above the fixed .weatherBg */\n  z-index: 1;\n  min-height: 100dvh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 28px;\n  max-width: 720px;\n  margin: 0 auto;\n  padding: 32px 20px;\n}\n\n/* Condition-based background. sky.js mounts a single `.weatherBg` as the first\n   child of #app and swaps a `bg-<category>` class onto it per fetch, keyed off\n   the current condition text (categoryFor() in sky.js). It is `fixed` so it\n   spans the whole browser window on desktop while #app stays a constrained\n   centred column above it (z-index). Each category paints a gradient base on the\n   element plus decorative layers (sun, moon + stars, drifting clouds, flakes,\n   haze) on the two pseudo-elements. overflow: hidden clips those layers to the\n   viewport so an oversized cloud can't spill a scrollbar. The gradients cross-\n   fade (transition: background) when the category changes; the decorative\n   motion lives in the per-category keyframes below. */\n.weatherBg {\n  position: fixed;\n  inset: 0;\n  z-index: 0;\n  overflow: hidden;\n  pointer-events: none;\n  background: linear-gradient(180deg, #1b2836 0%, #141d29 55%, var(--ground) 100%);\n  transition: background 600ms ease;\n}\n\n.weatherBg::before,\n.weatherBg::after {\n  content: '';\n  position: absolute;\n  pointer-events: none;\n}\n\n/* Depth planes mounted by sky.js as child divs (far, mid, near, ground). They\n   give each category more than the two pseudo-elements can hold: a category\n   stacks a subset of them — a blurred far plane, a mid plane, a sharp near plane\n   with a glow, and a ground-lighting accent at the bottom — so the imagery reads\n   as depth rather than a single flat wash. Any plane a category doesn't paint\n   stays transparent. They sit between ::before (behind) and ::after (in front)\n   in paint order; per-category rules layer them explicitly where it matters. */\n.weatherBg > .bgLayer {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  background-repeat: no-repeat;\n}\n\n/* Ground accent shared shape: a soft band of light hugging the bottom edge.\n   Each category tints it via --ground-glow. */\n.weatherBg > .bgLayer--ground {\n  top: auto;\n  height: 34%;\n  bottom: 0;\n}\n\n/* SUNNY — warm daytime sky with a soft sun glow that slowly breathes. */\n.weatherBg.bg-sunny {\n  background: linear-gradient(180deg, #2c4c72 0%, #1a2c40 55%, var(--ground) 100%);\n}\n.weatherBg.bg-sunny::before {\n  top: -12%;\n  right: -6%;\n  width: 46vmax;\n  height: 46vmax;\n  border-radius: 50%;\n  background: radial-gradient(circle at center, rgba(217, 164, 65, 0.45), rgba(217, 164, 65, 0) 68%);\n  animation: bgSun 14s ease-in-out infinite alternate;\n}\n.weatherBg.bg-sunny::after {\n  bottom: -18%;\n  left: -12%;\n  width: 40vmax;\n  height: 40vmax;\n  border-radius: 50%;\n  background: radial-gradient(circle at center, rgba(111, 168, 160, 0.18), rgba(111, 168, 160, 0) 70%);\n  animation: bgSun 18s ease-in-out infinite alternate-reverse;\n}\n/* far: a high, blurred warm haze band that slowly breathes behind the sun. */\n.weatherBg.bg-sunny > .bgLayer--far {\n  background: radial-gradient(120% 60% at 78% 4%, rgba(217, 164, 65, 0.22), rgba(217, 164, 65, 0) 60%);\n  filter: blur(6px);\n  animation: bgSun 22s ease-in-out infinite alternate;\n}\n/* mid: faint diagonal light shafts spilling from the sun. */\n.weatherBg.bg-sunny > .bgLayer--mid {\n  background: repeating-linear-gradient(64deg, rgba(217, 164, 65, 0.05) 0 2px, rgba(217, 164, 65, 0) 2px 26px);\n  opacity: 0.7;\n  animation: bgSun 16s ease-in-out infinite alternate-reverse;\n}\n/* ground: warm light pooling along the bottom of the scene. */\n.weatherBg.bg-sunny > .bgLayer--ground {\n  background: linear-gradient(0deg, rgba(217, 164, 65, 0.16), rgba(217, 164, 65, 0) 100%);\n  animation: bgGround 12s ease-in-out infinite alternate;\n}\n\n/* CLEAR NIGHT — deep sky, a low moon glow, and a field of twinkling stars. */\n.weatherBg.bg-clear-night {\n  background: linear-gradient(180deg, #101a2c 0%, #0d1420 55%, var(--ground) 100%);\n}\n.weatherBg.bg-clear-night::before {\n  inset: 0;\n  background-image:\n    radial-gradient(1.6px 1.6px at 18% 24%, rgba(234, 238, 242, 0.9), transparent 60%),\n    radial-gradient(1.2px 1.2px at 72% 16%, rgba(234, 238, 242, 0.8), transparent 60%),\n    radial-gradient(1.4px 1.4px at 42% 62%, rgba(234, 238, 242, 0.75), transparent 60%),\n    radial-gradient(1px 1px at 86% 46%, rgba(234, 238, 242, 0.7), transparent 60%),\n    radial-gradient(1.3px 1.3px at 30% 82%, rgba(234, 238, 242, 0.7), transparent 60%),\n    radial-gradient(1px 1px at 60% 74%, rgba(234, 238, 242, 0.6), transparent 60%),\n    radial-gradient(1.5px 1.5px at 8% 54%, rgba(234, 238, 242, 0.8), transparent 60%),\n    radial-gradient(1px 1px at 92% 78%, rgba(234, 238, 242, 0.65), transparent 60%);\n  animation: bgTwinkle 5s ease-in-out infinite alternate;\n}\n.weatherBg.bg-clear-night::after {\n  top: 12%;\n  right: 14%;\n  width: 92px;\n  height: 92px;\n  border-radius: 50%;\n  background: radial-gradient(circle at 38% 38%, rgba(234, 238, 242, 0.85), rgba(140, 160, 174, 0.35) 62%, rgba(140, 160, 174, 0) 72%);\n}\n/* far: a dense field of tiny, dim, slightly blurred stars — the deep sky. */\n.weatherBg.bg-clear-night > .bgLayer--far {\n  background-image:\n    radial-gradient(0.8px 0.8px at 12% 30%, rgba(234, 238, 242, 0.5), transparent 60%),\n    radial-gradient(0.7px 0.7px at 34% 12%, rgba(234, 238, 242, 0.45), transparent 60%),\n    radial-gradient(0.8px 0.8px at 52% 40%, rgba(234, 238, 242, 0.5), transparent 60%),\n    radial-gradient(0.6px 0.6px at 68% 26%, rgba(234, 238, 242, 0.4), transparent 60%),\n    radial-gradient(0.8px 0.8px at 80% 52%, rgba(234, 238, 242, 0.45), transparent 60%),\n    radial-gradient(0.7px 0.7px at 24% 66%, rgba(234, 238, 242, 0.4), transparent 60%),\n    radial-gradient(0.8px 0.8px at 46% 84%, rgba(234, 238, 242, 0.45), transparent 60%),\n    radial-gradient(0.6px 0.6px at 74% 78%, rgba(234, 238, 242, 0.4), transparent 60%);\n  filter: blur(0.5px);\n  opacity: 0.7;\n  animation: bgTwinkle 7s ease-in-out infinite alternate-reverse;\n}\n/* mid: a moderate field of stars — brighter than the far plane, no glow yet,\n   twinkling on its own offset so the three star planes shimmer independently. */\n.weatherBg.bg-clear-night > .bgLayer--mid {\n  background-image:\n    radial-gradient(1.4px 1.4px at 16% 22%, rgba(234, 238, 242, 0.7), transparent 60%),\n    radial-gradient(1.2px 1.2px at 40% 34%, rgba(234, 238, 242, 0.65), transparent 60%),\n    radial-gradient(1.5px 1.5px at 58% 18%, rgba(234, 238, 242, 0.7), transparent 60%),\n    radial-gradient(1.2px 1.2px at 76% 44%, rgba(234, 238, 242, 0.6), transparent 60%),\n    radial-gradient(1.4px 1.4px at 34% 70%, rgba(234, 238, 242, 0.62), transparent 60%),\n    radial-gradient(1.2px 1.2px at 88% 66%, rgba(234, 238, 242, 0.6), transparent 60%);\n  opacity: 0.85;\n  animation: bgTwinkle 6s ease-in-out infinite alternate;\n}\n/* near: a few large foreground stars, each with a soft drop-shadow glow. */\n.weatherBg.bg-clear-night > .bgLayer--near {\n  background-image:\n    radial-gradient(2.4px 2.4px at 22% 20%, rgba(234, 238, 242, 1), transparent 62%),\n    radial-gradient(2px 2px at 64% 58%, rgba(234, 238, 242, 0.95), transparent 62%),\n    radial-gradient(2.6px 2.6px at 84% 32%, rgba(234, 238, 242, 1), transparent 62%);\n  filter: drop-shadow(0 0 4px rgba(234, 238, 242, 0.7));\n  animation: bgTwinkle 3.4s ease-in-out infinite alternate;\n}\n/* ground: cool moonlight pooling faintly along the horizon. */\n.weatherBg.bg-clear-night > .bgLayer--ground {\n  background: linear-gradient(0deg, rgba(140, 160, 174, 0.14), rgba(140, 160, 174, 0) 100%);\n  animation: bgGround 14s ease-in-out infinite alternate;\n}\n\n/* CLOUDY (also overcast, partly, and the neutral fallback) — cool grey-blue with\n   two soft cloud masses drifting laterally. */\n.weatherBg.bg-cloudy {\n  background: linear-gradient(180deg, #23303f 0%, #172230 55%, var(--ground) 100%);\n}\n.weatherBg.bg-cloudy::before {\n  top: 14%;\n  left: -20%;\n  width: 55vmax;\n  height: 24vmax;\n  border-radius: 50%;\n  background: radial-gradient(circle at center, rgba(140, 160, 174, 0.2), rgba(140, 160, 174, 0) 70%);\n  animation: bgCloud 40s ease-in-out infinite alternate;\n}\n.weatherBg.bg-cloudy::after {\n  bottom: 10%;\n  right: -24%;\n  width: 60vmax;\n  height: 26vmax;\n  border-radius: 50%;\n  background: radial-gradient(circle at center, rgba(111, 130, 148, 0.16), rgba(111, 130, 148, 0) 70%);\n  animation: bgCloud 52s ease-in-out infinite alternate-reverse;\n}\n/* far: a wide, heavily blurred cloud band high in the scene, barely moving. */\n.weatherBg.bg-cloudy > .bgLayer--far {\n  background: radial-gradient(80% 40% at 30% 22%, rgba(140, 160, 174, 0.16), rgba(140, 160, 174, 0) 70%);\n  filter: blur(10px);\n  animation: bgCloud 70s ease-in-out infinite alternate-reverse;\n}\n/* mid: a moderate cloud mass drifting at a middling pace and blur, sitting\n   between the far haze and the sharp near cloud. */\n.weatherBg.bg-cloudy > .bgLayer--mid {\n  background: radial-gradient(52% 30% at 46% 32%, rgba(158, 176, 190, 0.18), rgba(158, 176, 190, 0) 70%);\n  filter: blur(5px);\n  animation: bgCloud 48s ease-in-out infinite alternate;\n}\n/* near: a smaller, sharper cloud drifting faster across the foreground. */\n.weatherBg.bg-cloudy > .bgLayer--near {\n  background: radial-gradient(34% 26% at 62% 40%, rgba(176, 192, 204, 0.2), rgba(176, 192, 204, 0) 68%);\n  filter: blur(2px);\n  animation: bgCloud 30s ease-in-out infinite alternate;\n}\n/* ground: dim horizon light under the overcast. */\n.weatherBg.bg-cloudy > .bgLayer--ground {\n  background: linear-gradient(0deg, rgba(140, 160, 174, 0.12), rgba(140, 160, 174, 0) 100%);\n  animation: bgGround 16s ease-in-out infinite alternate;\n}\n\n/* RAIN (also drizzle, showers, thunder) — darker sky, a heavy drifting cloud,\n   and a faint diagonal rain sheen sliding down. */\n.weatherBg.bg-rain {\n  background: linear-gradient(180deg, #1c2734 0%, #121b26 55%, var(--ground) 100%);\n}\n.weatherBg.bg-rain::before {\n  top: -8%;\n  left: -18%;\n  width: 62vmax;\n  height: 30vmax;\n  border-radius: 50%;\n  background: radial-gradient(circle at center, rgba(120, 140, 158, 0.22), rgba(120, 140, 158, 0) 70%);\n  animation: bgCloud 46s ease-in-out infinite alternate;\n}\n.weatherBg.bg-rain::after {\n  inset: 0;\n  background-image: repeating-linear-gradient(74deg, rgba(160, 190, 214, 0.07) 0 1px, rgba(160, 190, 214, 0) 1px 9px);\n  animation: bgRain 0.9s linear infinite;\n}\n/* far: a broad, blurred storm cloud drifting slowly high overhead. */\n.weatherBg.bg-rain > .bgLayer--far {\n  background: radial-gradient(90% 44% at 66% 12%, rgba(120, 140, 158, 0.2), rgba(120, 140, 158, 0) 70%);\n  filter: blur(9px);\n  animation: bgCloud 60s ease-in-out infinite alternate-reverse;\n}\n/* mid: a middle sheet of rain streaks between the base ::after sheen and the\n   coarse near streaks — moderate angle, gauge and speed. */\n.weatherBg.bg-rain > .bgLayer--mid {\n  background-image: repeating-linear-gradient(76deg, rgba(170, 198, 220, 0.09) 0 1px, rgba(170, 198, 220, 0) 1px 12px);\n  animation: bgRain 0.72s linear infinite;\n}\n/* near: coarser, faster rain streaks at a steeper angle for foreground depth. */\n.weatherBg.bg-rain > .bgLayer--near {\n  background-image: repeating-linear-gradient(78deg, rgba(180, 206, 226, 0.11) 0 2px, rgba(180, 206, 226, 0) 2px 15px);\n  animation: bgRainNear 0.55s linear infinite;\n}\n/* ground: a wet sheen catching the light at the bottom of the scene. */\n.weatherBg.bg-rain > .bgLayer--ground {\n  background: linear-gradient(0deg, rgba(120, 140, 158, 0.18), rgba(120, 140, 158, 0) 100%);\n  animation: bgGround 9s ease-in-out infinite alternate;\n}\n\n/* SNOW — cool light sky with slowly drifting flakes. */\n.weatherBg.bg-snow {\n  background: linear-gradient(180deg, #2a3949 0%, #1a2634 55%, var(--ground) 100%);\n}\n.weatherBg.bg-snow::before,\n.weatherBg.bg-snow::after {\n  inset: 0;\n  background-image:\n    radial-gradient(2px 2px at 20% 10%, rgba(255, 255, 255, 0.8), transparent 60%),\n    radial-gradient(2.4px 2.4px at 66% 22%, rgba(255, 255, 255, 0.7), transparent 60%),\n    radial-gradient(1.8px 1.8px at 40% 40%, rgba(255, 255, 255, 0.75), transparent 60%),\n    radial-gradient(2px 2px at 84% 54%, rgba(255, 255, 255, 0.7), transparent 60%),\n    radial-gradient(2.2px 2.2px at 12% 70%, rgba(255, 255, 255, 0.7), transparent 60%),\n    radial-gradient(1.8px 1.8px at 54% 86%, rgba(255, 255, 255, 0.65), transparent 60%);\n  background-size: 100% 50%;\n}\n.weatherBg.bg-snow::before {\n  animation: bgSnow 14s linear infinite;\n}\n.weatherBg.bg-snow::after {\n  opacity: 0.6;\n  animation: bgSnow 22s linear infinite;\n}\n/* far: tiny, faint, blurred flakes falling slowly in the deep background. */\n.weatherBg.bg-snow > .bgLayer--far {\n  background-image:\n    radial-gradient(1px 1px at 16% 12%, rgba(255, 255, 255, 0.55), transparent 60%),\n    radial-gradient(1.2px 1.2px at 48% 26%, rgba(255, 255, 255, 0.5), transparent 60%),\n    radial-gradient(1px 1px at 72% 18%, rgba(255, 255, 255, 0.5), transparent 60%),\n    radial-gradient(1.1px 1.1px at 30% 44%, rgba(255, 255, 255, 0.5), transparent 60%),\n    radial-gradient(1px 1px at 88% 40%, rgba(255, 255, 255, 0.45), transparent 60%),\n    radial-gradient(1.2px 1.2px at 60% 62%, rgba(255, 255, 255, 0.5), transparent 60%),\n    radial-gradient(1px 1px at 22% 78%, rgba(255, 255, 255, 0.45), transparent 60%),\n    radial-gradient(1.1px 1.1px at 78% 84%, rgba(255, 255, 255, 0.45), transparent 60%);\n  background-size: 100% 50%;\n  filter: blur(1px);\n  opacity: 0.7;\n  animation: bgSnow 30s linear infinite;\n}\n/* mid: medium flakes at a moderate pace and a hair of blur — the middle plane\n   that fills the gap between the faint far field and the glowing near flakes, so\n   snow reads as three depth layers rather than a foreground-and-backdrop pair. */\n.weatherBg.bg-snow > .bgLayer--mid {\n  background-image:\n    radial-gradient(2px 2px at 24% 18%, rgba(255, 255, 255, 0.75), transparent 60%),\n    radial-gradient(2.2px 2.2px at 58% 30%, rgba(255, 255, 255, 0.7), transparent 60%),\n    radial-gradient(1.9px 1.9px at 82% 24%, rgba(255, 255, 255, 0.72), transparent 60%),\n    radial-gradient(2.1px 2.1px at 38% 52%, rgba(255, 255, 255, 0.7), transparent 60%),\n    radial-gradient(2px 2px at 70% 66%, rgba(255, 255, 255, 0.68), transparent 60%),\n    radial-gradient(2.2px 2.2px at 16% 80%, rgba(255, 255, 255, 0.68), transparent 60%);\n  background-size: 100% 50%;\n  filter: blur(0.4px);\n  opacity: 0.85;\n  animation: bgSnow 16s linear infinite;\n}\n/* near: large foreground flakes with a soft glow, falling fast. */\n.weatherBg.bg-snow > .bgLayer--near {\n  background-image:\n    radial-gradient(3.4px 3.4px at 26% 16%, rgba(255, 255, 255, 0.95), transparent 62%),\n    radial-gradient(3px 3px at 62% 34%, rgba(255, 255, 255, 0.9), transparent 62%),\n    radial-gradient(3.6px 3.6px at 84% 60%, rgba(255, 255, 255, 0.95), transparent 62%),\n    radial-gradient(3.2px 3.2px at 14% 68%, rgba(255, 255, 255, 0.9), transparent 62%);\n  background-size: 100% 50%;\n  filter: drop-shadow(0 0 3px rgba(255, 255, 255, 0.7));\n  animation: bgSnow 8s linear infinite;\n}\n/* ground: a lit band of settled snow glowing at the bottom of the scene. */\n.weatherBg.bg-snow > .bgLayer--ground {\n  height: 30%;\n  background: linear-gradient(0deg, rgba(234, 240, 246, 0.28), rgba(234, 240, 246, 0.05) 60%, rgba(234, 240, 246, 0) 100%);\n  animation: bgGround 11s ease-in-out infinite alternate;\n}\n\n/* FOG (also mist, haze) — muted sky with slow horizontal haze bands. */\n.weatherBg.bg-fog {\n  background: linear-gradient(180deg, #232c35 0%, #182029 55%, var(--ground) 100%);\n}\n.weatherBg.bg-fog::before {\n  inset: 0;\n  background-image:\n    linear-gradient(0deg, rgba(140, 160, 174, 0) 0%, rgba(140, 160, 174, 0.12) 30%, rgba(140, 160, 174, 0) 46%),\n    linear-gradient(0deg, rgba(140, 160, 174, 0) 54%, rgba(140, 160, 174, 0.1) 72%, rgba(140, 160, 174, 0) 88%);\n  animation: bgFog 24s ease-in-out infinite alternate;\n}\n/* far: a thin, high haze band drifting the other way, slower. */\n.weatherBg.bg-fog > .bgLayer--far {\n  background-image: linear-gradient(0deg, rgba(140, 160, 174, 0) 8%, rgba(140, 160, 174, 0.08) 22%, rgba(140, 160, 174, 0) 38%);\n  filter: blur(3px);\n  opacity: 0.8;\n  animation: bgFog 34s ease-in-out infinite alternate-reverse;\n}\n/* mid: a middle haze band drifting between the thin far band and the low near\n   mass, moderately blurred. */\n.weatherBg.bg-fog > .bgLayer--mid {\n  background-image: linear-gradient(0deg, rgba(150, 168, 182, 0) 24%, rgba(150, 168, 182, 0.1) 44%, rgba(150, 168, 182, 0) 62%);\n  filter: blur(5px);\n  opacity: 0.85;\n  animation: bgFog 26s ease-in-out infinite alternate;\n}\n/* near: a soft, heavily blurred haze mass low in the scene. */\n.weatherBg.bg-fog > .bgLayer--near {\n  background-image: linear-gradient(0deg, rgba(176, 192, 204, 0.14) 0%, rgba(176, 192, 204, 0.06) 40%, rgba(176, 192, 204, 0) 68%);\n  filter: blur(8px);\n  animation: bgFog 18s ease-in-out infinite alternate;\n}\n/* ground: a dense fog pool settling along the bottom. */\n.weatherBg.bg-fog > .bgLayer--ground {\n  height: 42%;\n  background: linear-gradient(0deg, rgba(176, 192, 204, 0.22), rgba(176, 192, 204, 0) 100%);\n  animation: bgGround 15s ease-in-out infinite alternate;\n}\n\n@keyframes bgSun {\n  0%   { transform: translate(0, 0) scale(1);        opacity: 0.7; }\n  100% { transform: translate(-4%, 3%) scale(1.12);  opacity: 1; }\n}\n\n@keyframes bgTwinkle {\n  0%   { opacity: 0.4; }\n  100% { opacity: 1; }\n}\n\n@keyframes bgCloud {\n  0%   { transform: translateX(0); }\n  100% { transform: translateX(10%); }\n}\n\n@keyframes bgRain {\n  0%   { background-position: 0 0; }\n  100% { background-position: -9px 32px; }\n}\n\n@keyframes bgSnow {\n  0%   { transform: translateY(-50%); }\n  100% { transform: translateY(0); }\n}\n\n@keyframes bgFog {\n  0%   { transform: translateY(-4%); opacity: 0.7; }\n  100% { transform: translateY(4%);  opacity: 1; }\n}\n\n/* A steeper, faster fall for the near rain plane so it reads ahead of ::after. */\n@keyframes bgRainNear {\n  0%   { background-position: 0 0; }\n  100% { background-position: -15px 44px; }\n}\n\n/* A gentle breathe for the ground-lighting accent across every category. */\n@keyframes bgGround {\n  0%   { opacity: 0.65; }\n  100% { opacity: 1; }\n}\n\n/* Frozen while the tab is hidden (sky.js toggles .paused on visibilitychange). */\n.weatherBg.paused::before,\n.weatherBg.paused::after,\n.weatherBg.paused > .bgLayer {\n  animation-play-state: paused;\n}\n\n/* Halt every treatment's motion under a reduced-motion preference — one static\n   frame per category. */\n@media (prefers-reduced-motion: reduce) {\n  .weatherBg::before,\n  .weatherBg::after,\n  .weatherBg > .bgLayer {\n    animation: none;\n  }\n}\n\n/* The ribbon and its readout share one flex column so a mobile location rotation\n   slides them as a single unit. It carries the same 28px gap #app used to put\n   between the ribbon and the readout, so wrapping them is layout-transparent. */\n#weatherCard {\n  position: relative; /* stacks above the .weatherBg drift layer */\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 28px;\n}\n\n/* Ribbon: the SVG scales to the column width via the viewBox, so all 72 hours\n   are on screen at any width down to 380px without scroll or pan. */\n#ribbonWrap {\n  width: 100%;\n}\n\n#ribbonSvg {\n  display: block;\n  width: 100%;\n  height: auto;\n  overflow: visible;\n}\n\n.ribbon-curve {\n  stroke-width: 2.5;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n\n/* Day boundary hairlines at hours 24 and 48. */\n.ribbon-hairline {\n  stroke: var(--rule);\n  stroke-width: 1;\n}\n\n.ribbon-tick {\n  fill: var(--muted);\n  font-family: var(--mono);\n  font-size: 12px;\n  letter-spacing: 1px;\n}\n\n.ribbon-nowline {\n  stroke: var(--muted);\n  stroke-width: 1;\n  stroke-dasharray: 2 3;\n  opacity: 0.7;\n}\n\n.ribbon-dot {\n  stroke: var(--ground);\n  stroke-width: 2;\n}\n\n/* Readout beneath the curve. */\n#readout {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  text-align: center;\n}\n\n/* Location name paired with the C/F unit switch on one centered row. */\n#locationRow {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n\n#locationName {\n  font-family: var(--mono);\n  font-size: 13px;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  color: var(--muted);\n}\n\n/* Segmented C/F toggle: a compact pill, the active option filled with the rule\n   colour. Display-only — flips the temperature readouts between °C and °F. */\n#unitSwitch {\n  display: flex;\n  border: 1px solid var(--rule);\n  border-radius: 999px;\n  overflow: hidden;\n}\n\n.unitOpt {\n  font-family: var(--mono);\n  font-size: 11px;\n  letter-spacing: 1px;\n  padding: 3px 9px;\n  border: none;\n  background: transparent;\n  color: var(--muted);\n  cursor: pointer;\n}\n\n.unitOpt.active {\n  background: var(--rule);\n  color: var(--text);\n}\n\n/* Saved-location navigation: prev/next chevrons flanking the dot row. The whole\n   row is hidden at a count of one (a single location needs no affordance); the\n   arrows are desktop-only and drop out at ≤480px where swipe takes over. */\n.navRow {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  margin: 4px 0 2px;\n}\n\n.navRow.hidden {\n  display: none;\n}\n\n.arrow {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  border: none;\n  background: none;\n  color: var(--muted);\n  cursor: pointer;\n}\n\n.arrow:hover {\n  color: #EAEEF2;\n}\n\n.arrow svg {\n  display: block;\n  width: 20px;\n  height: 14px;\n}\n\n/* Saved-location dots: one per saved location, the active one filled. */\n#dotRow {\n  position: relative; /* offset parent for the desktop remove popover */\n  display: flex;\n  gap: 8px;\n}\n\n.dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #2E3B45;\n  cursor: pointer;\n  touch-action: manipulation;\n}\n\n.dot.active {\n  background: #EAEEF2;\n}\n\n/* Desktop remove-confirmation popover, anchored above the long-pressed dot.\n   Touch keeps the native confirm; this is the mouse/pen path. */\n.removePopover {\n  position: absolute;\n  bottom: calc(100% + 10px);\n  transform: translateX(-50%);\n  z-index: 20;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 12px;\n  background: var(--ground);\n  border: 1px solid var(--rule);\n  border-radius: 8px;\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.45);\n  white-space: nowrap;\n}\n\n/* Downward pointer arrow, bordered: outer triangle in the rule colour with an\n   inner ground-filled triangle laid a pixel higher on top of it. */\n.removePopover::before,\n.removePopover::after {\n  content: '';\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 0;\n  height: 0;\n  border-style: solid;\n}\n\n.removePopover::before {\n  top: 100%;\n  border-width: 7px 7px 0 7px;\n  border-color: var(--rule) transparent transparent transparent;\n}\n\n.removePopover::after {\n  top: calc(100% - 1px);\n  border-width: 6px 6px 0 6px;\n  border-color: var(--ground) transparent transparent transparent;\n}\n\n.removePopover-name {\n  color: var(--text);\n  font-size: 13px;\n}\n\n.removePopover-actions {\n  display: flex;\n  gap: 8px;\n}\n\n.removePopover-cancel,\n.removePopover-delete {\n  font-family: inherit;\n  font-size: 12px;\n  padding: 5px 12px;\n  border: 1px solid var(--rule);\n  border-radius: 8px;\n  cursor: pointer;\n}\n\n.removePopover-cancel {\n  background: none;\n  color: var(--muted);\n}\n\n.removePopover-cancel:hover {\n  color: var(--text);\n}\n\n.removePopover-delete {\n  background: var(--text);\n  color: var(--ground);\n  border-color: var(--text);\n}\n\n.removePopover-delete:hover {\n  filter: brightness(0.92);\n}\n\n/* Roboto Light 40px for the reading. */\n#currentTemp {\n  font-family: 'Roboto', sans-serif;\n  font-weight: 300;\n  font-size: 40px;\n  line-height: 1.1;\n}\n\n#currentCondition {\n  font-size: 15px;\n  color: var(--text);\n}\n\n/* Four-up stat row: text labels, no icons. */\n#statRow {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 10px;\n  width: 100%;\n  margin-top: 14px;\n}\n\n.stat {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  padding: 12px 6px;\n  border: 1px solid var(--rule);\n  border-radius: 8px;\n}\n\n.stat-label {\n  font-family: var(--mono);\n  font-size: 10px;\n  letter-spacing: 1px;\n  color: var(--muted);\n}\n\n.stat-value {\n  font-size: 17px;\n  color: var(--text);\n}\n\n/* Search form. */\n#searchForm {\n  position: relative; /* stacks above the .weatherBg drift layer */\n  z-index: 1;\n  display: flex;\n  gap: 10px;\n  width: 100%;\n}\n\n/* Holds the input and its autocomplete dropdown; position: relative anchors\n   #suggestions beneath the input. flex: 1 so the pair fills the row the way the\n   bare input used to. */\n#searchInputWrap {\n  position: relative;\n  flex: 1;\n  min-width: 0;\n}\n\n#searchInput {\n  width: 100%;\n  padding: 12px 14px;\n  font-family: var(--mono);\n  font-size: 16px; /* 16px so iOS Safari doesn't auto-zoom the input on focus */\n  color: var(--text);\n  background: transparent;\n  border: 1px solid var(--rule);\n  border-radius: 8px;\n}\n\n#searchInput::placeholder {\n  color: var(--muted);\n}\n\n#searchInput:focus {\n  outline: none;\n  border-color: var(--muted);\n}\n\n/* While the dropdown is open the input's bottom corners square off and its\n   bottom edge drops out, so it reads as one attached surface with #suggestions. */\n#searchForm.suggesting #searchInput {\n  border-radius: 8px 8px 0 0;\n  border-bottom-color: transparent;\n}\n\n/* Failed lookup: reddened border, current ribbon left in place. */\n#searchForm.invalid #searchInput {\n  border-color: #C2452D;\n}\n\n/* Autocomplete dropdown: hangs off the bottom of the input, matching its width\n   and continuing its focused border into a bottom-rounded panel. */\n#suggestions {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  z-index: 10;\n  max-height: 240px;\n  overflow-y: auto;\n  background: var(--ground);\n  border: 1px solid var(--muted);\n  border-top: none;\n  border-radius: 0 0 8px 8px;\n}\n\n#suggestions.hidden {\n  display: none;\n}\n\n.suggestion-item {\n  display: flex;\n  align-items: baseline;\n  gap: 8px;\n  padding: 10px 14px;\n  font-family: var(--mono);\n  cursor: pointer;\n}\n\n.suggestion-item:hover,\n.suggestion-item.selected {\n  background: var(--rule);\n}\n\n.suggestion-city {\n  font-size: 14px;\n  color: var(--text);\n}\n\n.suggestion-country {\n  font-size: 12px;\n  color: var(--muted);\n}\n\n#searchButton {\n  padding: 12px 20px;\n  font-family: var(--mono);\n  font-size: 14px;\n  letter-spacing: 1px;\n  color: var(--ground);\n  background: var(--text);\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n}\n\n#searchButton:hover {\n  filter: brightness(0.92);\n}\n\n@media (max-width: 480px) {\n  #app {\n    gap: 22px;\n    padding: 24px 16px;\n  }\n\n  #weatherCard {\n    gap: 22px;\n  }\n\n  /* Swipe-direction-aware slide on a committed location rotation. favourites.js\n     adds .slide-next (swipe left -> next) or .slide-prev (swipe right -> prev)\n     to #weatherCard, then rotates. The card fades to nothing at the keyframe's\n     midpoint, which masks the forecast swap: renderRibbon() rebuilds into this\n     same card while it's invisible, so the new curve slides in rather than\n     snapping. Desktop rotates via the arrows and never gets the class. */\n  #weatherCard.slide-next {\n    animation: cardSlideNext 280ms ease-out;\n  }\n\n  #weatherCard.slide-prev {\n    animation: cardSlidePrev 280ms ease-out;\n  }\n\n  @keyframes cardSlideNext {\n    0% { transform: translateX(0); opacity: 1; }\n    40% { transform: translateX(-42px); opacity: 0; }\n    60% { transform: translateX(42px); opacity: 0; }\n    100% { transform: translateX(0); opacity: 1; }\n  }\n\n  @keyframes cardSlidePrev {\n    0% { transform: translateX(0); opacity: 1; }\n    40% { transform: translateX(42px); opacity: 0; }\n    60% { transform: translateX(-42px); opacity: 0; }\n    100% { transform: translateX(0); opacity: 1; }\n  }\n\n  /* Mobile navigates by swipe; drop the arrows but keep the dots. */\n  .arrow {\n    display: none;\n  }\n\n  #statRow {\n    gap: 8px;\n  }\n\n  .stat {\n    padding: 10px 4px;\n  }\n\n  .stat-value {\n    font-size: 15px;\n  }\n}\n\n/* Respect a reduced-motion preference: rotate instantly, no slide. favourites.js\n   still adds the class, but with the animation suppressed animationend never\n   fires, so its setTimeout fallback is what strips the class back off. */\n@media (prefers-reduced-motion: reduce) {\n  #weatherCard.slide-next,\n  #weatherCard.slide-prev {\n    animation: none;\n  }\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QyxxSEFBdUM7QUFDbkYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RDtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUyw0Q0FBNEM7QUFDckQsU0FBUyw0Q0FBNEM7QUFDckQ7O0FBRUE7QUFDQSxTQUFTO0FBQ1QsU0FBUztBQUNUOztBQUVBO0FBQ0EsU0FBUztBQUNULFNBQVM7QUFDVDs7QUFFQTtBQUNBLFNBQVM7QUFDVCxTQUFTO0FBQ1Q7O0FBRUE7QUFDQSxTQUFTO0FBQ1QsU0FBUztBQUNUOztBQUVBO0FBQ0EsU0FBUyw0QkFBNEI7QUFDckMsU0FBUyw0QkFBNEI7QUFDckM7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVCxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVCxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRFQUE0RTtBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUywwQkFBMEI7QUFDbkMsVUFBVSw4QkFBOEI7QUFDeEMsVUFBVSw2QkFBNkI7QUFDdkMsV0FBVywwQkFBMEI7QUFDckM7O0FBRUE7QUFDQSxTQUFTLDBCQUEwQjtBQUNuQyxVQUFVLDZCQUE2QjtBQUN2QyxVQUFVLDhCQUE4QjtBQUN4QyxXQUFXLDBCQUEwQjtBQUNyQzs7QUFFQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsT0FBTyxRQUFRLE9BQU8sTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLHdCQUF3QixXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLGFBQWEsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sVUFBVSxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLE1BQU0sWUFBWSxNQUFNLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxZQUFZLE1BQU0sWUFBWSxhQUFhLGFBQWEsTUFBTSxZQUFZLE1BQU0sWUFBWSxXQUFXLFlBQVksTUFBTSxZQUFZLE1BQU0sWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sWUFBWSxNQUFNLFlBQVksT0FBTyxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssT0FBTyxNQUFNLFVBQVUsT0FBTyxXQUFXLFlBQVksTUFBTSxZQUFZLE1BQU0sT0FBTyxPQUFPLGFBQWEsYUFBYSxNQUFNLFlBQVksTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsTUFBTSxZQUFZLE1BQU0sWUFBWSxhQUFhLGFBQWEsTUFBTSxZQUFZLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxZQUFZLE1BQU0sWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLE9BQU8sTUFBTSxZQUFZLGFBQWEsTUFBTSxZQUFZLE1BQU0sWUFBWSxhQUFhLE1BQU0sWUFBWSxNQUFNLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLE1BQU0sTUFBTSxVQUFVLFVBQVUsT0FBTyxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxZQUFZLE1BQU0sWUFBWSxPQUFPLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxNQUFNLE9BQU8sTUFBTSxVQUFVLE9BQU8sYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLFlBQVksTUFBTSxRQUFRLE9BQU8sYUFBYSxhQUFhLGFBQWEsTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLE9BQU8sYUFBYSxNQUFNLFlBQVksTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxNQUFNLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssZ0NBQWdDLGlDQUFpQyxPQUFPLEtBQUssb0JBQW9CLHFCQUFxQixPQUFPLEtBQUssc0JBQXNCLHVCQUF1QixPQUFPLEtBQUssc0JBQXNCLHVCQUF1QixPQUFPLEtBQUssc0JBQXNCLHVCQUF1QixPQUFPLEtBQUssZ0NBQWdDLGlDQUFpQyxPQUFPLFlBQVksTUFBTSxzQkFBc0IsdUJBQXVCLE9BQU8sWUFBWSxNQUFNLG9CQUFvQixxQkFBcUIsT0FBTyxZQUFZLFFBQVEsWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLE9BQU8sVUFBVSxNQUFNLE1BQU0sTUFBTSxPQUFPLE1BQU0sd0JBQXdCLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLE9BQU8sTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxZQUFZLE1BQU0sd0JBQXdCLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLE9BQU8sT0FBTyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sd0JBQXdCLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLE9BQU8sTUFBTSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsdUJBQXVCLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksYUFB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QUFVO0FBQ3hCO0FBQ0EsZUFBZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzdHQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7OztXQ0FBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vLi9zcmMvZmF2b3VyaXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vLi9zcmMvaW5kZXhDaGFuZ2VzLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL3NyYy9sb2dpYy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vLi9zcmMvcmliYm9uLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL3NyYy9za3kuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vUm9ib3RvLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgZm9udC13ZWlnaHQ6IDMwMCA0MDA7XG59XG5cbi8qIFBhbGV0dGU6XG4gICBncm91bmQgICMxMjE4MUYgICBydWxlcyAgIzI2MzEzQlxuICAgdGV4dCAgICAjRUFFRUYyIChwcmltYXJ5KSAvICM4Q0EwQUUgKG11dGVkKVxuICAgVGhlIHRlbXBlcmF0dXJlIGNvbG91cnMgbGl2ZSBpbiByaWJib24uanMgKHRoZSBjdXJ2ZSBpcyBjb2xvdXJlZCBieSB0aGVcbiAgIHRlbXBlcmF0dXJlIHNjYWxhciwgbm90IGJ5IENTUykuICovXG46cm9vdCB7XG4gIC0tZ3JvdW5kOiAjMTIxODFGO1xuICAtLXJ1bGU6ICMyNjMxM0I7XG4gIC0tdGV4dDogI0VBRUVGMjtcbiAgLS1tdXRlZDogIzhDQTBBRTtcbiAgLS1tb25vOiAnU0ZNb25vLVJlZ3VsYXInLCAnU0YgTW9ubycsICdNZW5sbycsICdDb25zb2xhcycsICdMaWJlcmF0aW9uIE1vbm8nLCBtb25vc3BhY2U7XG59XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncm91bmQpO1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuLyogZHZoIChub3QgdmgpOiBvbiBpT1MgU2FmYXJpIHZoIHJlc29sdmVzIHRvIHRoZSB0YWxsIHZpZXdwb3J0IGFuZCBwYXJrcyB0aGVcbiAgIGJvdHRvbSBvZiB0aGUgbGF5b3V0IHVuZGVyIHRoZSBVUkwgYmFyLiAqL1xuI2FwcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgLyogc3RhY2tzIHRoZSBjb25zdHJhaW5lZCBjb2x1bW4gYWJvdmUgdGhlIGZpeGVkIC53ZWF0aGVyQmcgKi9cbiAgei1pbmRleDogMTtcbiAgbWluLWhlaWdodDogMTAwZHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAyOHB4O1xuICBtYXgtd2lkdGg6IDcyMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMzJweCAyMHB4O1xufVxuXG4vKiBDb25kaXRpb24tYmFzZWQgYmFja2dyb3VuZC4gc2t5LmpzIG1vdW50cyBhIHNpbmdsZSBcXGAud2VhdGhlckJnXFxgIGFzIHRoZSBmaXJzdFxuICAgY2hpbGQgb2YgI2FwcCBhbmQgc3dhcHMgYSBcXGBiZy08Y2F0ZWdvcnk+XFxgIGNsYXNzIG9udG8gaXQgcGVyIGZldGNoLCBrZXllZCBvZmZcbiAgIHRoZSBjdXJyZW50IGNvbmRpdGlvbiB0ZXh0IChjYXRlZ29yeUZvcigpIGluIHNreS5qcykuIEl0IGlzIFxcYGZpeGVkXFxgIHNvIGl0XG4gICBzcGFucyB0aGUgd2hvbGUgYnJvd3NlciB3aW5kb3cgb24gZGVza3RvcCB3aGlsZSAjYXBwIHN0YXlzIGEgY29uc3RyYWluZWRcbiAgIGNlbnRyZWQgY29sdW1uIGFib3ZlIGl0ICh6LWluZGV4KS4gRWFjaCBjYXRlZ29yeSBwYWludHMgYSBncmFkaWVudCBiYXNlIG9uIHRoZVxuICAgZWxlbWVudCBwbHVzIGRlY29yYXRpdmUgbGF5ZXJzIChzdW4sIG1vb24gKyBzdGFycywgZHJpZnRpbmcgY2xvdWRzLCBmbGFrZXMsXG4gICBoYXplKSBvbiB0aGUgdHdvIHBzZXVkby1lbGVtZW50cy4gb3ZlcmZsb3c6IGhpZGRlbiBjbGlwcyB0aG9zZSBsYXllcnMgdG8gdGhlXG4gICB2aWV3cG9ydCBzbyBhbiBvdmVyc2l6ZWQgY2xvdWQgY2FuJ3Qgc3BpbGwgYSBzY3JvbGxiYXIuIFRoZSBncmFkaWVudHMgY3Jvc3MtXG4gICBmYWRlICh0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kKSB3aGVuIHRoZSBjYXRlZ29yeSBjaGFuZ2VzOyB0aGUgZGVjb3JhdGl2ZVxuICAgbW90aW9uIGxpdmVzIGluIHRoZSBwZXItY2F0ZWdvcnkga2V5ZnJhbWVzIGJlbG93LiAqL1xuLndlYXRoZXJCZyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaW5zZXQ6IDA7XG4gIHotaW5kZXg6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMWIyODM2IDAlLCAjMTQxZDI5IDU1JSwgdmFyKC0tZ3JvdW5kKSAxMDAlKTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCA2MDBtcyBlYXNlO1xufVxuXG4ud2VhdGhlckJnOjpiZWZvcmUsXG4ud2VhdGhlckJnOjphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4vKiBEZXB0aCBwbGFuZXMgbW91bnRlZCBieSBza3kuanMgYXMgY2hpbGQgZGl2cyAoZmFyLCBtaWQsIG5lYXIsIGdyb3VuZCkuIFRoZXlcbiAgIGdpdmUgZWFjaCBjYXRlZ29yeSBtb3JlIHRoYW4gdGhlIHR3byBwc2V1ZG8tZWxlbWVudHMgY2FuIGhvbGQ6IGEgY2F0ZWdvcnlcbiAgIHN0YWNrcyBhIHN1YnNldCBvZiB0aGVtIOKAlCBhIGJsdXJyZWQgZmFyIHBsYW5lLCBhIG1pZCBwbGFuZSwgYSBzaGFycCBuZWFyIHBsYW5lXG4gICB3aXRoIGEgZ2xvdywgYW5kIGEgZ3JvdW5kLWxpZ2h0aW5nIGFjY2VudCBhdCB0aGUgYm90dG9tIOKAlCBzbyB0aGUgaW1hZ2VyeSByZWFkc1xuICAgYXMgZGVwdGggcmF0aGVyIHRoYW4gYSBzaW5nbGUgZmxhdCB3YXNoLiBBbnkgcGxhbmUgYSBjYXRlZ29yeSBkb2Vzbid0IHBhaW50XG4gICBzdGF5cyB0cmFuc3BhcmVudC4gVGhleSBzaXQgYmV0d2VlbiA6OmJlZm9yZSAoYmVoaW5kKSBhbmQgOjphZnRlciAoaW4gZnJvbnQpXG4gICBpbiBwYWludCBvcmRlcjsgcGVyLWNhdGVnb3J5IHJ1bGVzIGxheWVyIHRoZW0gZXhwbGljaXRseSB3aGVyZSBpdCBtYXR0ZXJzLiAqL1xuLndlYXRoZXJCZyA+IC5iZ0xheWVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBpbnNldDogMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi8qIEdyb3VuZCBhY2NlbnQgc2hhcmVkIHNoYXBlOiBhIHNvZnQgYmFuZCBvZiBsaWdodCBodWdnaW5nIHRoZSBib3R0b20gZWRnZS5cbiAgIEVhY2ggY2F0ZWdvcnkgdGludHMgaXQgdmlhIC0tZ3JvdW5kLWdsb3cuICovXG4ud2VhdGhlckJnID4gLmJnTGF5ZXItLWdyb3VuZCB7XG4gIHRvcDogYXV0bztcbiAgaGVpZ2h0OiAzNCU7XG4gIGJvdHRvbTogMDtcbn1cblxuLyogU1VOTlkg4oCUIHdhcm0gZGF5dGltZSBza3kgd2l0aCBhIHNvZnQgc3VuIGdsb3cgdGhhdCBzbG93bHkgYnJlYXRoZXMuICovXG4ud2VhdGhlckJnLmJnLXN1bm55IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzJjNGM3MiAwJSwgIzFhMmM0MCA1NSUsIHZhcigtLWdyb3VuZCkgMTAwJSk7XG59XG4ud2VhdGhlckJnLmJnLXN1bm55OjpiZWZvcmUge1xuICB0b3A6IC0xMiU7XG4gIHJpZ2h0OiAtNiU7XG4gIHdpZHRoOiA0NnZtYXg7XG4gIGhlaWdodDogNDZ2bWF4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgY2VudGVyLCByZ2JhKDIxNywgMTY0LCA2NSwgMC40NSksIHJnYmEoMjE3LCAxNjQsIDY1LCAwKSA2OCUpO1xuICBhbmltYXRpb246IGJnU3VuIDE0cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG4ud2VhdGhlckJnLmJnLXN1bm55OjphZnRlciB7XG4gIGJvdHRvbTogLTE4JTtcbiAgbGVmdDogLTEyJTtcbiAgd2lkdGg6IDQwdm1heDtcbiAgaGVpZ2h0OiA0MHZtYXg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCBjZW50ZXIsIHJnYmEoMTExLCAxNjgsIDE2MCwgMC4xOCksIHJnYmEoMTExLCAxNjgsIDE2MCwgMCkgNzAlKTtcbiAgYW5pbWF0aW9uOiBiZ1N1biAxOHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlLXJldmVyc2U7XG59XG4vKiBmYXI6IGEgaGlnaCwgYmx1cnJlZCB3YXJtIGhhemUgYmFuZCB0aGF0IHNsb3dseSBicmVhdGhlcyBiZWhpbmQgdGhlIHN1bi4gKi9cbi53ZWF0aGVyQmcuYmctc3VubnkgPiAuYmdMYXllci0tZmFyIHtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KDEyMCUgNjAlIGF0IDc4JSA0JSwgcmdiYSgyMTcsIDE2NCwgNjUsIDAuMjIpLCByZ2JhKDIxNywgMTY0LCA2NSwgMCkgNjAlKTtcbiAgZmlsdGVyOiBibHVyKDZweCk7XG4gIGFuaW1hdGlvbjogYmdTdW4gMjJzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcbn1cbi8qIG1pZDogZmFpbnQgZGlhZ29uYWwgbGlnaHQgc2hhZnRzIHNwaWxsaW5nIGZyb20gdGhlIHN1bi4gKi9cbi53ZWF0aGVyQmcuYmctc3VubnkgPiAuYmdMYXllci0tbWlkIHtcbiAgYmFja2dyb3VuZDogcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCg2NGRlZywgcmdiYSgyMTcsIDE2NCwgNjUsIDAuMDUpIDAgMnB4LCByZ2JhKDIxNywgMTY0LCA2NSwgMCkgMnB4IDI2cHgpO1xuICBvcGFjaXR5OiAwLjc7XG4gIGFuaW1hdGlvbjogYmdTdW4gMTZzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZS1yZXZlcnNlO1xufVxuLyogZ3JvdW5kOiB3YXJtIGxpZ2h0IHBvb2xpbmcgYWxvbmcgdGhlIGJvdHRvbSBvZiB0aGUgc2NlbmUuICovXG4ud2VhdGhlckJnLmJnLXN1bm55ID4gLmJnTGF5ZXItLWdyb3VuZCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDIxNywgMTY0LCA2NSwgMC4xNiksIHJnYmEoMjE3LCAxNjQsIDY1LCAwKSAxMDAlKTtcbiAgYW5pbWF0aW9uOiBiZ0dyb3VuZCAxMnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xufVxuXG4vKiBDTEVBUiBOSUdIVCDigJQgZGVlcCBza3ksIGEgbG93IG1vb24gZ2xvdywgYW5kIGEgZmllbGQgb2YgdHdpbmtsaW5nIHN0YXJzLiAqL1xuLndlYXRoZXJCZy5iZy1jbGVhci1uaWdodCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMxMDFhMmMgMCUsICMwZDE0MjAgNTUlLCB2YXIoLS1ncm91bmQpIDEwMCUpO1xufVxuLndlYXRoZXJCZy5iZy1jbGVhci1uaWdodDo6YmVmb3JlIHtcbiAgaW5zZXQ6IDA7XG4gIGJhY2tncm91bmQtaW1hZ2U6XG4gICAgcmFkaWFsLWdyYWRpZW50KDEuNnB4IDEuNnB4IGF0IDE4JSAyNCUsIHJnYmEoMjM0LCAyMzgsIDI0MiwgMC45KSwgdHJhbnNwYXJlbnQgNjAlKSxcbiAgICByYWRpYWwtZ3JhZGllbnQoMS4ycHggMS4ycHggYXQgNzIlIDE2JSwgcmdiYSgyMzQsIDIzOCwgMjQyLCAwLjgpLCB0cmFuc3BhcmVudCA2MCUpLFxuICAgIHJhZGlhbC1ncmFkaWVudCgxLjRweCAxLjRweCBhdCA0MiUgNjIlLCByZ2JhKDIzNCwgMjM4LCAyNDIsIDAuNzUpLCB0cmFuc3BhcmVudCA2MCUpLFxuICAgIHJhZGlhbC1ncmFkaWVudCgxcHggMXB4IGF0IDg2JSA0NiUsIHJnYmEoMjM0LCAyMzgsIDI0MiwgMC43KSwgdHJhbnNwYXJlbnQgNjAlKSxcbiAgICByYWRpYWwtZ3JhZGllbnQoMS4zcHggMS4zcHggYXQgMzAlIDgyJSwgcmdiYSgyMzQsIDIzOCwgMjQyLCAwLjcpLCB0cmFuc3BhcmVudCA2MCUpLFxuICAgIHJhZGlhbC1ncmFkaWVudCgxcHggMXB4IGF0IDYwJSA3NCUsIHJnYmEoMjM0LCAyMzgsIDI0MiwgMC42KSwgdHJhbnNwYXJlbnQgNjAlKSxcbiAgICByYWRpYWwtZ3JhZGllbnQoMS41cHggMS41cHggYXQgOCUgNTQlLCByZ2JhKDIzNCwgMjM4LCAyNDIsIDAuOCksIHRyYW5zcGFyZW50IDYwJSksXG4gICAgcmFkaWFsLWdyYWRpZW50KDFweCAxcHggYXQgOTIlIDc4JSwgcmdiYSgyMzQsIDIzOCwgMjQyLCAwLjY1KSwgdHJhbnNwYXJlbnQgNjAlKTtcbiAgYW5pbWF0aW9uOiBiZ1R3aW5rbGUgNXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xufVxuLndlYXRoZXJCZy5iZy1jbGVhci1uaWdodDo6YWZ0ZXIge1xuICB0b3A6IDEyJTtcbiAgcmlnaHQ6IDE0JTtcbiAgd2lkdGg6IDkycHg7XG4gIGhlaWdodDogOTJweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDM4JSAzOCUsIHJnYmEoMjM0LCAyMzgsIDI0MiwgMC44NSksIHJnYmEoMTQwLCAxNjAsIDE3NCwgMC4zNSkgNjIlLCByZ2JhKDE0MCwgMTYwLCAxNzQsIDApIDcyJSk7XG59XG4vKiBmYXI6IGEgZGVuc2UgZmllbGQgb2YgdGlueSwgZGltLCBzbGlnaHRseSBibHVycmVkIHN0YXJzIOKAlCB0aGUgZGVlcCBza3kuICovXG4ud2VhdGhlckJnLmJnLWNsZWFyLW5pZ2h0ID4gLmJnTGF5ZXItLWZhciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6XG4gICAgcmFkaWFsLWdyYWRpZW50KDAuOHB4IDAuOHB4IGF0IDEyJSAzMCUsIHJnYmEoMjM0LCAyMzgsIDI0MiwgMC41KSwgdHJhbnNwYXJlbnQgNjAlKSxcbiAgICByYWRpYWwtZ3JhZGllbnQoMC43cHggMC43cHggYXQgMzQlIDEyJSwgcmdiYSgyMzQsIDIzOCwgMjQyLCAwLjQ1KSwgdHJhbnNwYXJlbnQgNjAlKSxcbiAgICByYWRpYWwtZ3JhZGllbnQoMC44cHggMC44cHggYXQgNTIlIDQwJSwgcmdiYSgyMzQsIDIzOCwgMjQyLCAwLjUpLCB0cmFuc3BhcmVudCA2MCUpLFxuICAgIHJhZGlhbC1ncmFkaWVudCgwLjZweCAwLjZweCBhdCA2OCUgMjYlLCByZ2JhKDIzNCwgMjM4LCAyNDIsIDAuNCksIHRyYW5zcGFyZW50IDYwJSksXG4gICAgcmFkaWFsLWdyYWRpZW50KDAuOHB4IDAuOHB4IGF0IDgwJSA1MiUsIHJnYmEoMjM0LCAyMzgsIDI0MiwgMC40NSksIHRyYW5zcGFyZW50IDYwJSksXG4gICAgcmFkaWFsLWdyYWRpZW50KDAuN3B4IDAuN3B4IGF0IDI0JSA2NiUsIHJnYmEoMjM0LCAyMzgsIDI0MiwgMC40KSwgdHJhbnNwYXJlbnQgNjAlKSxcbiAgICByYWRpYWwtZ3JhZGllbnQoMC44cHggMC44cHggYXQgNDYlIDg0JSwgcmdiYSgyMzQsIDIzOCwgMjQyLCAwLjQ1KSwgdHJhbnNwYXJlbnQgNjAlKSxcbiAgICByYWRpYWwtZ3JhZGllbnQoMC42cHggMC42cHggYXQgNzQlIDc4JSwgcmdiYSgyMzQsIDIzOCwgMjQyLCAwLjQpLCB0cmFuc3BhcmVudCA2MCUpO1xuICBmaWx0ZXI6IGJsdXIoMC41cHgpO1xuICBvcGFjaXR5OiAwLjc7XG4gIGFuaW1hdGlvbjogYmdUd2lua2xlIDdzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZS1yZXZlcnNlO1xufVxuLyogbWlkOiBhIG1vZGVyYXRlIGZpZWxkIG9mIHN0YXJzIOKAlCBicmlnaHRlciB0aGFuIHRoZSBmYXIgcGxhbmUsIG5vIGdsb3cgeWV0LFxuICAgdHdpbmtsaW5nIG9uIGl0cyBvd24gb2Zmc2V0IHNvIHRoZSB0aHJlZSBzdGFyIHBsYW5lcyBzaGltbWVyIGluZGVwZW5kZW50bHkuICovXG4ud2VhdGhlckJnLmJnLWNsZWFyLW5pZ2h0ID4gLmJnTGF5ZXItLW1pZCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6XG4gICAgcmFkaWFsLWdyYWRpZW50KDEuNHB4IDEuNHB4IGF0IDE2JSAyMiUsIHJnYmEoMjM0LCAyMzgsIDI0MiwgMC43KSwgdHJhbnNwYXJlbnQgNjAlKSxcbiAgICByYWRpYWwtZ3JhZGllbnQoMS4ycHggMS4ycHggYXQgNDAlIDM0JSwgcmdiYSgyMzQsIDIzOCwgMjQyLCAwLjY1KSwgdHJhbnNwYXJlbnQgNjAlKSxcbiAgICByYWRpYWwtZ3JhZGllbnQoMS41cHggMS41cHggYXQgNTglIDE4JSwgcmdiYSgyMzQsIDIzOCwgMjQyLCAwLjcpLCB0cmFuc3BhcmVudCA2MCUpLFxuICAgIHJhZGlhbC1ncmFkaWVudCgxLjJweCAxLjJweCBhdCA3NiUgNDQlLCByZ2JhKDIzNCwgMjM4LCAyNDIsIDAuNiksIHRyYW5zcGFyZW50IDYwJSksXG4gICAgcmFkaWFsLWdyYWRpZW50KDEuNHB4IDEuNHB4IGF0IDM0JSA3MCUsIHJnYmEoMjM0LCAyMzgsIDI0MiwgMC42MiksIHRyYW5zcGFyZW50IDYwJSksXG4gICAgcmFkaWFsLWdyYWRpZW50KDEuMnB4IDEuMnB4IGF0IDg4JSA2NiUsIHJnYmEoMjM0LCAyMzgsIDI0MiwgMC42KSwgdHJhbnNwYXJlbnQgNjAlKTtcbiAgb3BhY2l0eTogMC44NTtcbiAgYW5pbWF0aW9uOiBiZ1R3aW5rbGUgNnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xufVxuLyogbmVhcjogYSBmZXcgbGFyZ2UgZm9yZWdyb3VuZCBzdGFycywgZWFjaCB3aXRoIGEgc29mdCBkcm9wLXNoYWRvdyBnbG93LiAqL1xuLndlYXRoZXJCZy5iZy1jbGVhci1uaWdodCA+IC5iZ0xheWVyLS1uZWFyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTpcbiAgICByYWRpYWwtZ3JhZGllbnQoMi40cHggMi40cHggYXQgMjIlIDIwJSwgcmdiYSgyMzQsIDIzOCwgMjQyLCAxKSwgdHJhbnNwYXJlbnQgNjIlKSxcbiAgICByYWRpYWwtZ3JhZGllbnQoMnB4IDJweCBhdCA2NCUgNTglLCByZ2JhKDIzNCwgMjM4LCAyNDIsIDAuOTUpLCB0cmFuc3BhcmVudCA2MiUpLFxuICAgIHJhZGlhbC1ncmFkaWVudCgyLjZweCAyLjZweCBhdCA4NCUgMzIlLCByZ2JhKDIzNCwgMjM4LCAyNDIsIDEpLCB0cmFuc3BhcmVudCA2MiUpO1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCA0cHggcmdiYSgyMzQsIDIzOCwgMjQyLCAwLjcpKTtcbiAgYW5pbWF0aW9uOiBiZ1R3aW5rbGUgMy40cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG4vKiBncm91bmQ6IGNvb2wgbW9vbmxpZ2h0IHBvb2xpbmcgZmFpbnRseSBhbG9uZyB0aGUgaG9yaXpvbi4gKi9cbi53ZWF0aGVyQmcuYmctY2xlYXItbmlnaHQgPiAuYmdMYXllci0tZ3JvdW5kIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMTQwLCAxNjAsIDE3NCwgMC4xNCksIHJnYmEoMTQwLCAxNjAsIDE3NCwgMCkgMTAwJSk7XG4gIGFuaW1hdGlvbjogYmdHcm91bmQgMTRzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcbn1cblxuLyogQ0xPVURZIChhbHNvIG92ZXJjYXN0LCBwYXJ0bHksIGFuZCB0aGUgbmV1dHJhbCBmYWxsYmFjaykg4oCUIGNvb2wgZ3JleS1ibHVlIHdpdGhcbiAgIHR3byBzb2Z0IGNsb3VkIG1hc3NlcyBkcmlmdGluZyBsYXRlcmFsbHkuICovXG4ud2VhdGhlckJnLmJnLWNsb3VkeSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMyMzMwM2YgMCUsICMxNzIyMzAgNTUlLCB2YXIoLS1ncm91bmQpIDEwMCUpO1xufVxuLndlYXRoZXJCZy5iZy1jbG91ZHk6OmJlZm9yZSB7XG4gIHRvcDogMTQlO1xuICBsZWZ0OiAtMjAlO1xuICB3aWR0aDogNTV2bWF4O1xuICBoZWlnaHQ6IDI0dm1heDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IGNlbnRlciwgcmdiYSgxNDAsIDE2MCwgMTc0LCAwLjIpLCByZ2JhKDE0MCwgMTYwLCAxNzQsIDApIDcwJSk7XG4gIGFuaW1hdGlvbjogYmdDbG91ZCA0MHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xufVxuLndlYXRoZXJCZy5iZy1jbG91ZHk6OmFmdGVyIHtcbiAgYm90dG9tOiAxMCU7XG4gIHJpZ2h0OiAtMjQlO1xuICB3aWR0aDogNjB2bWF4O1xuICBoZWlnaHQ6IDI2dm1heDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IGNlbnRlciwgcmdiYSgxMTEsIDEzMCwgMTQ4LCAwLjE2KSwgcmdiYSgxMTEsIDEzMCwgMTQ4LCAwKSA3MCUpO1xuICBhbmltYXRpb246IGJnQ2xvdWQgNTJzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZS1yZXZlcnNlO1xufVxuLyogZmFyOiBhIHdpZGUsIGhlYXZpbHkgYmx1cnJlZCBjbG91ZCBiYW5kIGhpZ2ggaW4gdGhlIHNjZW5lLCBiYXJlbHkgbW92aW5nLiAqL1xuLndlYXRoZXJCZy5iZy1jbG91ZHkgPiAuYmdMYXllci0tZmFyIHtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KDgwJSA0MCUgYXQgMzAlIDIyJSwgcmdiYSgxNDAsIDE2MCwgMTc0LCAwLjE2KSwgcmdiYSgxNDAsIDE2MCwgMTc0LCAwKSA3MCUpO1xuICBmaWx0ZXI6IGJsdXIoMTBweCk7XG4gIGFuaW1hdGlvbjogYmdDbG91ZCA3MHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlLXJldmVyc2U7XG59XG4vKiBtaWQ6IGEgbW9kZXJhdGUgY2xvdWQgbWFzcyBkcmlmdGluZyBhdCBhIG1pZGRsaW5nIHBhY2UgYW5kIGJsdXIsIHNpdHRpbmdcbiAgIGJldHdlZW4gdGhlIGZhciBoYXplIGFuZCB0aGUgc2hhcnAgbmVhciBjbG91ZC4gKi9cbi53ZWF0aGVyQmcuYmctY2xvdWR5ID4gLmJnTGF5ZXItLW1pZCB7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCg1MiUgMzAlIGF0IDQ2JSAzMiUsIHJnYmEoMTU4LCAxNzYsIDE5MCwgMC4xOCksIHJnYmEoMTU4LCAxNzYsIDE5MCwgMCkgNzAlKTtcbiAgZmlsdGVyOiBibHVyKDVweCk7XG4gIGFuaW1hdGlvbjogYmdDbG91ZCA0OHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xufVxuLyogbmVhcjogYSBzbWFsbGVyLCBzaGFycGVyIGNsb3VkIGRyaWZ0aW5nIGZhc3RlciBhY3Jvc3MgdGhlIGZvcmVncm91bmQuICovXG4ud2VhdGhlckJnLmJnLWNsb3VkeSA+IC5iZ0xheWVyLS1uZWFyIHtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KDM0JSAyNiUgYXQgNjIlIDQwJSwgcmdiYSgxNzYsIDE5MiwgMjA0LCAwLjIpLCByZ2JhKDE3NiwgMTkyLCAyMDQsIDApIDY4JSk7XG4gIGZpbHRlcjogYmx1cigycHgpO1xuICBhbmltYXRpb246IGJnQ2xvdWQgMzBzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcbn1cbi8qIGdyb3VuZDogZGltIGhvcml6b24gbGlnaHQgdW5kZXIgdGhlIG92ZXJjYXN0LiAqL1xuLndlYXRoZXJCZy5iZy1jbG91ZHkgPiAuYmdMYXllci0tZ3JvdW5kIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMTQwLCAxNjAsIDE3NCwgMC4xMiksIHJnYmEoMTQwLCAxNjAsIDE3NCwgMCkgMTAwJSk7XG4gIGFuaW1hdGlvbjogYmdHcm91bmQgMTZzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcbn1cblxuLyogUkFJTiAoYWxzbyBkcml6emxlLCBzaG93ZXJzLCB0aHVuZGVyKSDigJQgZGFya2VyIHNreSwgYSBoZWF2eSBkcmlmdGluZyBjbG91ZCxcbiAgIGFuZCBhIGZhaW50IGRpYWdvbmFsIHJhaW4gc2hlZW4gc2xpZGluZyBkb3duLiAqL1xuLndlYXRoZXJCZy5iZy1yYWluIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzFjMjczNCAwJSwgIzEyMWIyNiA1NSUsIHZhcigtLWdyb3VuZCkgMTAwJSk7XG59XG4ud2VhdGhlckJnLmJnLXJhaW46OmJlZm9yZSB7XG4gIHRvcDogLTglO1xuICBsZWZ0OiAtMTglO1xuICB3aWR0aDogNjJ2bWF4O1xuICBoZWlnaHQ6IDMwdm1heDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IGNlbnRlciwgcmdiYSgxMjAsIDE0MCwgMTU4LCAwLjIyKSwgcmdiYSgxMjAsIDE0MCwgMTU4LCAwKSA3MCUpO1xuICBhbmltYXRpb246IGJnQ2xvdWQgNDZzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcbn1cbi53ZWF0aGVyQmcuYmctcmFpbjo6YWZ0ZXIge1xuICBpbnNldDogMDtcbiAgYmFja2dyb3VuZC1pbWFnZTogcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCg3NGRlZywgcmdiYSgxNjAsIDE5MCwgMjE0LCAwLjA3KSAwIDFweCwgcmdiYSgxNjAsIDE5MCwgMjE0LCAwKSAxcHggOXB4KTtcbiAgYW5pbWF0aW9uOiBiZ1JhaW4gMC45cyBsaW5lYXIgaW5maW5pdGU7XG59XG4vKiBmYXI6IGEgYnJvYWQsIGJsdXJyZWQgc3Rvcm0gY2xvdWQgZHJpZnRpbmcgc2xvd2x5IGhpZ2ggb3ZlcmhlYWQuICovXG4ud2VhdGhlckJnLmJnLXJhaW4gPiAuYmdMYXllci0tZmFyIHtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KDkwJSA0NCUgYXQgNjYlIDEyJSwgcmdiYSgxMjAsIDE0MCwgMTU4LCAwLjIpLCByZ2JhKDEyMCwgMTQwLCAxNTgsIDApIDcwJSk7XG4gIGZpbHRlcjogYmx1cig5cHgpO1xuICBhbmltYXRpb246IGJnQ2xvdWQgNjBzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZS1yZXZlcnNlO1xufVxuLyogbWlkOiBhIG1pZGRsZSBzaGVldCBvZiByYWluIHN0cmVha3MgYmV0d2VlbiB0aGUgYmFzZSA6OmFmdGVyIHNoZWVuIGFuZCB0aGVcbiAgIGNvYXJzZSBuZWFyIHN0cmVha3Mg4oCUIG1vZGVyYXRlIGFuZ2xlLCBnYXVnZSBhbmQgc3BlZWQuICovXG4ud2VhdGhlckJnLmJnLXJhaW4gPiAuYmdMYXllci0tbWlkIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCg3NmRlZywgcmdiYSgxNzAsIDE5OCwgMjIwLCAwLjA5KSAwIDFweCwgcmdiYSgxNzAsIDE5OCwgMjIwLCAwKSAxcHggMTJweCk7XG4gIGFuaW1hdGlvbjogYmdSYWluIDAuNzJzIGxpbmVhciBpbmZpbml0ZTtcbn1cbi8qIG5lYXI6IGNvYXJzZXIsIGZhc3RlciByYWluIHN0cmVha3MgYXQgYSBzdGVlcGVyIGFuZ2xlIGZvciBmb3JlZ3JvdW5kIGRlcHRoLiAqL1xuLndlYXRoZXJCZy5iZy1yYWluID4gLmJnTGF5ZXItLW5lYXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KDc4ZGVnLCByZ2JhKDE4MCwgMjA2LCAyMjYsIDAuMTEpIDAgMnB4LCByZ2JhKDE4MCwgMjA2LCAyMjYsIDApIDJweCAxNXB4KTtcbiAgYW5pbWF0aW9uOiBiZ1JhaW5OZWFyIDAuNTVzIGxpbmVhciBpbmZpbml0ZTtcbn1cbi8qIGdyb3VuZDogYSB3ZXQgc2hlZW4gY2F0Y2hpbmcgdGhlIGxpZ2h0IGF0IHRoZSBib3R0b20gb2YgdGhlIHNjZW5lLiAqL1xuLndlYXRoZXJCZy5iZy1yYWluID4gLmJnTGF5ZXItLWdyb3VuZCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDEyMCwgMTQwLCAxNTgsIDAuMTgpLCByZ2JhKDEyMCwgMTQwLCAxNTgsIDApIDEwMCUpO1xuICBhbmltYXRpb246IGJnR3JvdW5kIDlzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcbn1cblxuLyogU05PVyDigJQgY29vbCBsaWdodCBza3kgd2l0aCBzbG93bHkgZHJpZnRpbmcgZmxha2VzLiAqL1xuLndlYXRoZXJCZy5iZy1zbm93IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzJhMzk0OSAwJSwgIzFhMjYzNCA1NSUsIHZhcigtLWdyb3VuZCkgMTAwJSk7XG59XG4ud2VhdGhlckJnLmJnLXNub3c6OmJlZm9yZSxcbi53ZWF0aGVyQmcuYmctc25vdzo6YWZ0ZXIge1xuICBpbnNldDogMDtcbiAgYmFja2dyb3VuZC1pbWFnZTpcbiAgICByYWRpYWwtZ3JhZGllbnQoMnB4IDJweCBhdCAyMCUgMTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCksIHRyYW5zcGFyZW50IDYwJSksXG4gICAgcmFkaWFsLWdyYWRpZW50KDIuNHB4IDIuNHB4IGF0IDY2JSAyMiUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSwgdHJhbnNwYXJlbnQgNjAlKSxcbiAgICByYWRpYWwtZ3JhZGllbnQoMS44cHggMS44cHggYXQgNDAlIDQwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KSwgdHJhbnNwYXJlbnQgNjAlKSxcbiAgICByYWRpYWwtZ3JhZGllbnQoMnB4IDJweCBhdCA4NCUgNTQlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyksIHRyYW5zcGFyZW50IDYwJSksXG4gICAgcmFkaWFsLWdyYWRpZW50KDIuMnB4IDIuMnB4IGF0IDEyJSA3MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSwgdHJhbnNwYXJlbnQgNjAlKSxcbiAgICByYWRpYWwtZ3JhZGllbnQoMS44cHggMS44cHggYXQgNTQlIDg2JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY1KSwgdHJhbnNwYXJlbnQgNjAlKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDUwJTtcbn1cbi53ZWF0aGVyQmcuYmctc25vdzo6YmVmb3JlIHtcbiAgYW5pbWF0aW9uOiBiZ1Nub3cgMTRzIGxpbmVhciBpbmZpbml0ZTtcbn1cbi53ZWF0aGVyQmcuYmctc25vdzo6YWZ0ZXIge1xuICBvcGFjaXR5OiAwLjY7XG4gIGFuaW1hdGlvbjogYmdTbm93IDIycyBsaW5lYXIgaW5maW5pdGU7XG59XG4vKiBmYXI6IHRpbnksIGZhaW50LCBibHVycmVkIGZsYWtlcyBmYWxsaW5nIHNsb3dseSBpbiB0aGUgZGVlcCBiYWNrZ3JvdW5kLiAqL1xuLndlYXRoZXJCZy5iZy1zbm93ID4gLmJnTGF5ZXItLWZhciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6XG4gICAgcmFkaWFsLWdyYWRpZW50KDFweCAxcHggYXQgMTYlIDEyJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU1KSwgdHJhbnNwYXJlbnQgNjAlKSxcbiAgICByYWRpYWwtZ3JhZGllbnQoMS4ycHggMS4ycHggYXQgNDglIDI2JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLCB0cmFuc3BhcmVudCA2MCUpLFxuICAgIHJhZGlhbC1ncmFkaWVudCgxcHggMXB4IGF0IDcyJSAxOCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSwgdHJhbnNwYXJlbnQgNjAlKSxcbiAgICByYWRpYWwtZ3JhZGllbnQoMS4xcHggMS4xcHggYXQgMzAlIDQ0JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLCB0cmFuc3BhcmVudCA2MCUpLFxuICAgIHJhZGlhbC1ncmFkaWVudCgxcHggMXB4IGF0IDg4JSA0MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSksIHRyYW5zcGFyZW50IDYwJSksXG4gICAgcmFkaWFsLWdyYWRpZW50KDEuMnB4IDEuMnB4IGF0IDYwJSA2MiUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSwgdHJhbnNwYXJlbnQgNjAlKSxcbiAgICByYWRpYWwtZ3JhZGllbnQoMXB4IDFweCBhdCAyMiUgNzglLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpLCB0cmFuc3BhcmVudCA2MCUpLFxuICAgIHJhZGlhbC1ncmFkaWVudCgxLjFweCAxLjFweCBhdCA3OCUgODQlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpLCB0cmFuc3BhcmVudCA2MCUpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgNTAlO1xuICBmaWx0ZXI6IGJsdXIoMXB4KTtcbiAgb3BhY2l0eTogMC43O1xuICBhbmltYXRpb246IGJnU25vdyAzMHMgbGluZWFyIGluZmluaXRlO1xufVxuLyogbWlkOiBtZWRpdW0gZmxha2VzIGF0IGEgbW9kZXJhdGUgcGFjZSBhbmQgYSBoYWlyIG9mIGJsdXIg4oCUIHRoZSBtaWRkbGUgcGxhbmVcbiAgIHRoYXQgZmlsbHMgdGhlIGdhcCBiZXR3ZWVuIHRoZSBmYWludCBmYXIgZmllbGQgYW5kIHRoZSBnbG93aW5nIG5lYXIgZmxha2VzLCBzb1xuICAgc25vdyByZWFkcyBhcyB0aHJlZSBkZXB0aCBsYXllcnMgcmF0aGVyIHRoYW4gYSBmb3JlZ3JvdW5kLWFuZC1iYWNrZHJvcCBwYWlyLiAqL1xuLndlYXRoZXJCZy5iZy1zbm93ID4gLmJnTGF5ZXItLW1pZCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6XG4gICAgcmFkaWFsLWdyYWRpZW50KDJweCAycHggYXQgMjQlIDE4JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KSwgdHJhbnNwYXJlbnQgNjAlKSxcbiAgICByYWRpYWwtZ3JhZGllbnQoMi4ycHggMi4ycHggYXQgNTglIDMwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpLCB0cmFuc3BhcmVudCA2MCUpLFxuICAgIHJhZGlhbC1ncmFkaWVudCgxLjlweCAxLjlweCBhdCA4MiUgMjQlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzIpLCB0cmFuc3BhcmVudCA2MCUpLFxuICAgIHJhZGlhbC1ncmFkaWVudCgyLjFweCAyLjFweCBhdCAzOCUgNTIlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyksIHRyYW5zcGFyZW50IDYwJSksXG4gICAgcmFkaWFsLWdyYWRpZW50KDJweCAycHggYXQgNzAlIDY2JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY4KSwgdHJhbnNwYXJlbnQgNjAlKSxcbiAgICByYWRpYWwtZ3JhZGllbnQoMi4ycHggMi4ycHggYXQgMTYlIDgwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY4KSwgdHJhbnNwYXJlbnQgNjAlKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDUwJTtcbiAgZmlsdGVyOiBibHVyKDAuNHB4KTtcbiAgb3BhY2l0eTogMC44NTtcbiAgYW5pbWF0aW9uOiBiZ1Nub3cgMTZzIGxpbmVhciBpbmZpbml0ZTtcbn1cbi8qIG5lYXI6IGxhcmdlIGZvcmVncm91bmQgZmxha2VzIHdpdGggYSBzb2Z0IGdsb3csIGZhbGxpbmcgZmFzdC4gKi9cbi53ZWF0aGVyQmcuYmctc25vdyA+IC5iZ0xheWVyLS1uZWFyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTpcbiAgICByYWRpYWwtZ3JhZGllbnQoMy40cHggMy40cHggYXQgMjYlIDE2JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk1KSwgdHJhbnNwYXJlbnQgNjIlKSxcbiAgICByYWRpYWwtZ3JhZGllbnQoM3B4IDNweCBhdCA2MiUgMzQlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSksIHRyYW5zcGFyZW50IDYyJSksXG4gICAgcmFkaWFsLWdyYWRpZW50KDMuNnB4IDMuNnB4IGF0IDg0JSA2MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSksIHRyYW5zcGFyZW50IDYyJSksXG4gICAgcmFkaWFsLWdyYWRpZW50KDMuMnB4IDMuMnB4IGF0IDE0JSA2OCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KSwgdHJhbnNwYXJlbnQgNjIlKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDUwJTtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgM3B4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSk7XG4gIGFuaW1hdGlvbjogYmdTbm93IDhzIGxpbmVhciBpbmZpbml0ZTtcbn1cbi8qIGdyb3VuZDogYSBsaXQgYmFuZCBvZiBzZXR0bGVkIHNub3cgZ2xvd2luZyBhdCB0aGUgYm90dG9tIG9mIHRoZSBzY2VuZS4gKi9cbi53ZWF0aGVyQmcuYmctc25vdyA+IC5iZ0xheWVyLS1ncm91bmQge1xuICBoZWlnaHQ6IDMwJTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMjM0LCAyNDAsIDI0NiwgMC4yOCksIHJnYmEoMjM0LCAyNDAsIDI0NiwgMC4wNSkgNjAlLCByZ2JhKDIzNCwgMjQwLCAyNDYsIDApIDEwMCUpO1xuICBhbmltYXRpb246IGJnR3JvdW5kIDExcyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG5cbi8qIEZPRyAoYWxzbyBtaXN0LCBoYXplKSDigJQgbXV0ZWQgc2t5IHdpdGggc2xvdyBob3Jpem9udGFsIGhhemUgYmFuZHMuICovXG4ud2VhdGhlckJnLmJnLWZvZyB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMyMzJjMzUgMCUsICMxODIwMjkgNTUlLCB2YXIoLS1ncm91bmQpIDEwMCUpO1xufVxuLndlYXRoZXJCZy5iZy1mb2c6OmJlZm9yZSB7XG4gIGluc2V0OiAwO1xuICBiYWNrZ3JvdW5kLWltYWdlOlxuICAgIGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDE0MCwgMTYwLCAxNzQsIDApIDAlLCByZ2JhKDE0MCwgMTYwLCAxNzQsIDAuMTIpIDMwJSwgcmdiYSgxNDAsIDE2MCwgMTc0LCAwKSA0NiUpLFxuICAgIGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDE0MCwgMTYwLCAxNzQsIDApIDU0JSwgcmdiYSgxNDAsIDE2MCwgMTc0LCAwLjEpIDcyJSwgcmdiYSgxNDAsIDE2MCwgMTc0LCAwKSA4OCUpO1xuICBhbmltYXRpb246IGJnRm9nIDI0cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG4vKiBmYXI6IGEgdGhpbiwgaGlnaCBoYXplIGJhbmQgZHJpZnRpbmcgdGhlIG90aGVyIHdheSwgc2xvd2VyLiAqL1xuLndlYXRoZXJCZy5iZy1mb2cgPiAuYmdMYXllci0tZmFyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMTQwLCAxNjAsIDE3NCwgMCkgOCUsIHJnYmEoMTQwLCAxNjAsIDE3NCwgMC4wOCkgMjIlLCByZ2JhKDE0MCwgMTYwLCAxNzQsIDApIDM4JSk7XG4gIGZpbHRlcjogYmx1cigzcHgpO1xuICBvcGFjaXR5OiAwLjg7XG4gIGFuaW1hdGlvbjogYmdGb2cgMzRzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZS1yZXZlcnNlO1xufVxuLyogbWlkOiBhIG1pZGRsZSBoYXplIGJhbmQgZHJpZnRpbmcgYmV0d2VlbiB0aGUgdGhpbiBmYXIgYmFuZCBhbmQgdGhlIGxvdyBuZWFyXG4gICBtYXNzLCBtb2RlcmF0ZWx5IGJsdXJyZWQuICovXG4ud2VhdGhlckJnLmJnLWZvZyA+IC5iZ0xheWVyLS1taWQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgxNTAsIDE2OCwgMTgyLCAwKSAyNCUsIHJnYmEoMTUwLCAxNjgsIDE4MiwgMC4xKSA0NCUsIHJnYmEoMTUwLCAxNjgsIDE4MiwgMCkgNjIlKTtcbiAgZmlsdGVyOiBibHVyKDVweCk7XG4gIG9wYWNpdHk6IDAuODU7XG4gIGFuaW1hdGlvbjogYmdGb2cgMjZzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcbn1cbi8qIG5lYXI6IGEgc29mdCwgaGVhdmlseSBibHVycmVkIGhhemUgbWFzcyBsb3cgaW4gdGhlIHNjZW5lLiAqL1xuLndlYXRoZXJCZy5iZy1mb2cgPiAuYmdMYXllci0tbmVhciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDE3NiwgMTkyLCAyMDQsIDAuMTQpIDAlLCByZ2JhKDE3NiwgMTkyLCAyMDQsIDAuMDYpIDQwJSwgcmdiYSgxNzYsIDE5MiwgMjA0LCAwKSA2OCUpO1xuICBmaWx0ZXI6IGJsdXIoOHB4KTtcbiAgYW5pbWF0aW9uOiBiZ0ZvZyAxOHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xufVxuLyogZ3JvdW5kOiBhIGRlbnNlIGZvZyBwb29sIHNldHRsaW5nIGFsb25nIHRoZSBib3R0b20uICovXG4ud2VhdGhlckJnLmJnLWZvZyA+IC5iZ0xheWVyLS1ncm91bmQge1xuICBoZWlnaHQ6IDQyJTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMTc2LCAxOTIsIDIwNCwgMC4yMiksIHJnYmEoMTc2LCAxOTIsIDIwNCwgMCkgMTAwJSk7XG4gIGFuaW1hdGlvbjogYmdHcm91bmQgMTVzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcbn1cblxuQGtleWZyYW1lcyBiZ1N1biB7XG4gIDAlICAgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgxKTsgICAgICAgIG9wYWNpdHk6IDAuNzsgfVxuICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTQlLCAzJSkgc2NhbGUoMS4xMik7ICBvcGFjaXR5OiAxOyB9XG59XG5cbkBrZXlmcmFtZXMgYmdUd2lua2xlIHtcbiAgMCUgICB7IG9wYWNpdHk6IDAuNDsgfVxuICAxMDAlIHsgb3BhY2l0eTogMTsgfVxufVxuXG5Aa2V5ZnJhbWVzIGJnQ2xvdWQge1xuICAwJSAgIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9XG4gIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAlKTsgfVxufVxuXG5Aa2V5ZnJhbWVzIGJnUmFpbiB7XG4gIDAlICAgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7IH1cbiAgMTAwJSB7IGJhY2tncm91bmQtcG9zaXRpb246IC05cHggMzJweDsgfVxufVxuXG5Aa2V5ZnJhbWVzIGJnU25vdyB7XG4gIDAlICAgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7IH1cbiAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxufVxuXG5Aa2V5ZnJhbWVzIGJnRm9nIHtcbiAgMCUgICB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNCUpOyBvcGFjaXR5OiAwLjc7IH1cbiAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0JSk7ICBvcGFjaXR5OiAxOyB9XG59XG5cbi8qIEEgc3RlZXBlciwgZmFzdGVyIGZhbGwgZm9yIHRoZSBuZWFyIHJhaW4gcGxhbmUgc28gaXQgcmVhZHMgYWhlYWQgb2YgOjphZnRlci4gKi9cbkBrZXlmcmFtZXMgYmdSYWluTmVhciB7XG4gIDAlICAgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7IH1cbiAgMTAwJSB7IGJhY2tncm91bmQtcG9zaXRpb246IC0xNXB4IDQ0cHg7IH1cbn1cblxuLyogQSBnZW50bGUgYnJlYXRoZSBmb3IgdGhlIGdyb3VuZC1saWdodGluZyBhY2NlbnQgYWNyb3NzIGV2ZXJ5IGNhdGVnb3J5LiAqL1xuQGtleWZyYW1lcyBiZ0dyb3VuZCB7XG4gIDAlICAgeyBvcGFjaXR5OiAwLjY1OyB9XG4gIDEwMCUgeyBvcGFjaXR5OiAxOyB9XG59XG5cbi8qIEZyb3plbiB3aGlsZSB0aGUgdGFiIGlzIGhpZGRlbiAoc2t5LmpzIHRvZ2dsZXMgLnBhdXNlZCBvbiB2aXNpYmlsaXR5Y2hhbmdlKS4gKi9cbi53ZWF0aGVyQmcucGF1c2VkOjpiZWZvcmUsXG4ud2VhdGhlckJnLnBhdXNlZDo6YWZ0ZXIsXG4ud2VhdGhlckJnLnBhdXNlZCA+IC5iZ0xheWVyIHtcbiAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHBhdXNlZDtcbn1cblxuLyogSGFsdCBldmVyeSB0cmVhdG1lbnQncyBtb3Rpb24gdW5kZXIgYSByZWR1Y2VkLW1vdGlvbiBwcmVmZXJlbmNlIOKAlCBvbmUgc3RhdGljXG4gICBmcmFtZSBwZXIgY2F0ZWdvcnkuICovXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xuICAud2VhdGhlckJnOjpiZWZvcmUsXG4gIC53ZWF0aGVyQmc6OmFmdGVyLFxuICAud2VhdGhlckJnID4gLmJnTGF5ZXIge1xuICAgIGFuaW1hdGlvbjogbm9uZTtcbiAgfVxufVxuXG4vKiBUaGUgcmliYm9uIGFuZCBpdHMgcmVhZG91dCBzaGFyZSBvbmUgZmxleCBjb2x1bW4gc28gYSBtb2JpbGUgbG9jYXRpb24gcm90YXRpb25cbiAgIHNsaWRlcyB0aGVtIGFzIGEgc2luZ2xlIHVuaXQuIEl0IGNhcnJpZXMgdGhlIHNhbWUgMjhweCBnYXAgI2FwcCB1c2VkIHRvIHB1dFxuICAgYmV0d2VlbiB0aGUgcmliYm9uIGFuZCB0aGUgcmVhZG91dCwgc28gd3JhcHBpbmcgdGhlbSBpcyBsYXlvdXQtdHJhbnNwYXJlbnQuICovXG4jd2VhdGhlckNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qIHN0YWNrcyBhYm92ZSB0aGUgLndlYXRoZXJCZyBkcmlmdCBsYXllciAqL1xuICB6LWluZGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDI4cHg7XG59XG5cbi8qIFJpYmJvbjogdGhlIFNWRyBzY2FsZXMgdG8gdGhlIGNvbHVtbiB3aWR0aCB2aWEgdGhlIHZpZXdCb3gsIHNvIGFsbCA3MiBob3Vyc1xuICAgYXJlIG9uIHNjcmVlbiBhdCBhbnkgd2lkdGggZG93biB0byAzODBweCB3aXRob3V0IHNjcm9sbCBvciBwYW4uICovXG4jcmliYm9uV3JhcCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jcmliYm9uU3ZnIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG4ucmliYm9uLWN1cnZlIHtcbiAgc3Ryb2tlLXdpZHRoOiAyLjU7XG4gIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcbiAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDtcbn1cblxuLyogRGF5IGJvdW5kYXJ5IGhhaXJsaW5lcyBhdCBob3VycyAyNCBhbmQgNDguICovXG4ucmliYm9uLWhhaXJsaW5lIHtcbiAgc3Ryb2tlOiB2YXIoLS1ydWxlKTtcbiAgc3Ryb2tlLXdpZHRoOiAxO1xufVxuXG4ucmliYm9uLXRpY2sge1xuICBmaWxsOiB2YXIoLS1tdXRlZCk7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tb25vKTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG4ucmliYm9uLW5vd2xpbmUge1xuICBzdHJva2U6IHZhcigtLW11dGVkKTtcbiAgc3Ryb2tlLXdpZHRoOiAxO1xuICBzdHJva2UtZGFzaGFycmF5OiAyIDM7XG4gIG9wYWNpdHk6IDAuNztcbn1cblxuLnJpYmJvbi1kb3Qge1xuICBzdHJva2U6IHZhcigtLWdyb3VuZCk7XG4gIHN0cm9rZS13aWR0aDogMjtcbn1cblxuLyogUmVhZG91dCBiZW5lYXRoIHRoZSBjdXJ2ZS4gKi9cbiNyZWFkb3V0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLyogTG9jYXRpb24gbmFtZSBwYWlyZWQgd2l0aCB0aGUgQy9GIHVuaXQgc3dpdGNoIG9uIG9uZSBjZW50ZXJlZCByb3cuICovXG4jbG9jYXRpb25Sb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xufVxuXG4jbG9jYXRpb25OYW1lIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1vbm8pO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XG59XG5cbi8qIFNlZ21lbnRlZCBDL0YgdG9nZ2xlOiBhIGNvbXBhY3QgcGlsbCwgdGhlIGFjdGl2ZSBvcHRpb24gZmlsbGVkIHdpdGggdGhlIHJ1bGVcbiAgIGNvbG91ci4gRGlzcGxheS1vbmx5IOKAlCBmbGlwcyB0aGUgdGVtcGVyYXR1cmUgcmVhZG91dHMgYmV0d2VlbiDCsEMgYW5kIMKwRi4gKi9cbiN1bml0U3dpdGNoIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcnVsZSk7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udW5pdE9wdCB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tb25vKTtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBwYWRkaW5nOiAzcHggOXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi51bml0T3B0LmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXJ1bGUpO1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG59XG5cbi8qIFNhdmVkLWxvY2F0aW9uIG5hdmlnYXRpb246IHByZXYvbmV4dCBjaGV2cm9ucyBmbGFua2luZyB0aGUgZG90IHJvdy4gVGhlIHdob2xlXG4gICByb3cgaXMgaGlkZGVuIGF0IGEgY291bnQgb2Ygb25lIChhIHNpbmdsZSBsb2NhdGlvbiBuZWVkcyBubyBhZmZvcmRhbmNlKTsgdGhlXG4gICBhcnJvd3MgYXJlIGRlc2t0b3Atb25seSBhbmQgZHJvcCBvdXQgYXQg4omkNDgwcHggd2hlcmUgc3dpcGUgdGFrZXMgb3Zlci4gKi9cbi5uYXZSb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBtYXJnaW46IDRweCAwIDJweDtcbn1cblxuLm5hdlJvdy5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uYXJyb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5hcnJvdzpob3ZlciB7XG4gIGNvbG9yOiAjRUFFRUYyO1xufVxuXG4uYXJyb3cgc3ZnIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDE0cHg7XG59XG5cbi8qIFNhdmVkLWxvY2F0aW9uIGRvdHM6IG9uZSBwZXIgc2F2ZWQgbG9jYXRpb24sIHRoZSBhY3RpdmUgb25lIGZpbGxlZC4gKi9cbiNkb3RSb3cge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qIG9mZnNldCBwYXJlbnQgZm9yIHRoZSBkZXNrdG9wIHJlbW92ZSBwb3BvdmVyICovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogOHB4O1xufVxuXG4uZG90IHtcbiAgd2lkdGg6IDhweDtcbiAgaGVpZ2h0OiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogIzJFM0I0NTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcbn1cblxuLmRvdC5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjRUFFRUYyO1xufVxuXG4vKiBEZXNrdG9wIHJlbW92ZS1jb25maXJtYXRpb24gcG9wb3ZlciwgYW5jaG9yZWQgYWJvdmUgdGhlIGxvbmctcHJlc3NlZCBkb3QuXG4gICBUb3VjaCBrZWVwcyB0aGUgbmF0aXZlIGNvbmZpcm07IHRoaXMgaXMgdGhlIG1vdXNlL3BlbiBwYXRoLiAqL1xuLnJlbW92ZVBvcG92ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogY2FsYygxMDAlICsgMTBweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgei1pbmRleDogMjA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBwYWRkaW5nOiAxMHB4IDEycHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdyb3VuZCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXJ1bGUpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJveC1zaGFkb3c6IDAgNnB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjQ1KTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLyogRG93bndhcmQgcG9pbnRlciBhcnJvdywgYm9yZGVyZWQ6IG91dGVyIHRyaWFuZ2xlIGluIHRoZSBydWxlIGNvbG91ciB3aXRoIGFuXG4gICBpbm5lciBncm91bmQtZmlsbGVkIHRyaWFuZ2xlIGxhaWQgYSBwaXhlbCBoaWdoZXIgb24gdG9wIG9mIGl0LiAqL1xuLnJlbW92ZVBvcG92ZXI6OmJlZm9yZSxcbi5yZW1vdmVQb3BvdmVyOjphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xufVxuXG4ucmVtb3ZlUG9wb3Zlcjo6YmVmb3JlIHtcbiAgdG9wOiAxMDAlO1xuICBib3JkZXItd2lkdGg6IDdweCA3cHggMCA3cHg7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcnVsZSkgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG59XG5cbi5yZW1vdmVQb3BvdmVyOjphZnRlciB7XG4gIHRvcDogY2FsYygxMDAlIC0gMXB4KTtcbiAgYm9yZGVyLXdpZHRoOiA2cHggNnB4IDAgNnB4O1xuICBib3JkZXItY29sb3I6IHZhcigtLWdyb3VuZCkgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG59XG5cbi5yZW1vdmVQb3BvdmVyLW5hbWUge1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLnJlbW92ZVBvcG92ZXItYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogOHB4O1xufVxuXG4ucmVtb3ZlUG9wb3Zlci1jYW5jZWwsXG4ucmVtb3ZlUG9wb3Zlci1kZWxldGUge1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nOiA1cHggMTJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcnVsZSk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucmVtb3ZlUG9wb3Zlci1jYW5jZWwge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xufVxuXG4ucmVtb3ZlUG9wb3Zlci1jYW5jZWw6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG59XG5cbi5yZW1vdmVQb3BvdmVyLWRlbGV0ZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXRleHQpO1xuICBjb2xvcjogdmFyKC0tZ3JvdW5kKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS10ZXh0KTtcbn1cblxuLnJlbW92ZVBvcG92ZXItZGVsZXRlOmhvdmVyIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOTIpO1xufVxuXG4vKiBSb2JvdG8gTGlnaHQgNDBweCBmb3IgdGhlIHJlYWRpbmcuICovXG4jY3VycmVudFRlbXAge1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDEuMTtcbn1cblxuI2N1cnJlbnRDb25kaXRpb24ge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbn1cblxuLyogRm91ci11cCBzdGF0IHJvdzogdGV4dCBsYWJlbHMsIG5vIGljb25zLiAqL1xuI3N0YXRSb3cge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xuICBnYXA6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAxNHB4O1xufVxuXG4uc3RhdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNHB4O1xuICBwYWRkaW5nOiAxMnB4IDZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcnVsZSk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLnN0YXQtbGFiZWwge1xuICBmb250LWZhbWlseTogdmFyKC0tbW9ubyk7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcbn1cblxuLnN0YXQtdmFsdWUge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbn1cblxuLyogU2VhcmNoIGZvcm0uICovXG4jc2VhcmNoRm9ybSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgLyogc3RhY2tzIGFib3ZlIHRoZSAud2VhdGhlckJnIGRyaWZ0IGxheWVyICovXG4gIHotaW5kZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi8qIEhvbGRzIHRoZSBpbnB1dCBhbmQgaXRzIGF1dG9jb21wbGV0ZSBkcm9wZG93bjsgcG9zaXRpb246IHJlbGF0aXZlIGFuY2hvcnNcbiAgICNzdWdnZXN0aW9ucyBiZW5lYXRoIHRoZSBpbnB1dC4gZmxleDogMSBzbyB0aGUgcGFpciBmaWxscyB0aGUgcm93IHRoZSB3YXkgdGhlXG4gICBiYXJlIGlucHV0IHVzZWQgdG8uICovXG4jc2VhcmNoSW5wdXRXcmFwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4OiAxO1xuICBtaW4td2lkdGg6IDA7XG59XG5cbiNzZWFyY2hJbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMnB4IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tb25vKTtcbiAgZm9udC1zaXplOiAxNnB4OyAvKiAxNnB4IHNvIGlPUyBTYWZhcmkgZG9lc24ndCBhdXRvLXpvb20gdGhlIGlucHV0IG9uIGZvY3VzICovXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXJ1bGUpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbiNzZWFyY2hJbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xufVxuXG4jc2VhcmNoSW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItY29sb3I6IHZhcigtLW11dGVkKTtcbn1cblxuLyogV2hpbGUgdGhlIGRyb3Bkb3duIGlzIG9wZW4gdGhlIGlucHV0J3MgYm90dG9tIGNvcm5lcnMgc3F1YXJlIG9mZiBhbmQgaXRzXG4gICBib3R0b20gZWRnZSBkcm9wcyBvdXQsIHNvIGl0IHJlYWRzIGFzIG9uZSBhdHRhY2hlZCBzdXJmYWNlIHdpdGggI3N1Z2dlc3Rpb25zLiAqL1xuI3NlYXJjaEZvcm0uc3VnZ2VzdGluZyAjc2VhcmNoSW5wdXQge1xuICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDAgMDtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi8qIEZhaWxlZCBsb29rdXA6IHJlZGRlbmVkIGJvcmRlciwgY3VycmVudCByaWJib24gbGVmdCBpbiBwbGFjZS4gKi9cbiNzZWFyY2hGb3JtLmludmFsaWQgI3NlYXJjaElucHV0IHtcbiAgYm9yZGVyLWNvbG9yOiAjQzI0NTJEO1xufVxuXG4vKiBBdXRvY29tcGxldGUgZHJvcGRvd246IGhhbmdzIG9mZiB0aGUgYm90dG9tIG9mIHRoZSBpbnB1dCwgbWF0Y2hpbmcgaXRzIHdpZHRoXG4gICBhbmQgY29udGludWluZyBpdHMgZm9jdXNlZCBib3JkZXIgaW50byBhIGJvdHRvbS1yb3VuZGVkIHBhbmVsLiAqL1xuI3N1Z2dlc3Rpb25zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAxMDtcbiAgbWF4LWhlaWdodDogMjQwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGJhY2tncm91bmQ6IHZhcigtLWdyb3VuZCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW11dGVkKTtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDhweCA4cHg7XG59XG5cbiNzdWdnZXN0aW9ucy5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc3VnZ2VzdGlvbi1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICBnYXA6IDhweDtcbiAgcGFkZGluZzogMTBweCAxNHB4O1xuICBmb250LWZhbWlseTogdmFyKC0tbW9ubyk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnN1Z2dlc3Rpb24taXRlbTpob3Zlcixcbi5zdWdnZXN0aW9uLWl0ZW0uc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ydWxlKTtcbn1cblxuLnN1Z2dlc3Rpb24tY2l0eSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xufVxuXG4uc3VnZ2VzdGlvbi1jb3VudHJ5IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xufVxuXG4jc2VhcmNoQnV0dG9uIHtcbiAgcGFkZGluZzogMTJweCAyMHB4O1xuICBmb250LWZhbWlseTogdmFyKC0tbW9ubyk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgY29sb3I6IHZhcigtLWdyb3VuZCk7XG4gIGJhY2tncm91bmQ6IHZhcigtLXRleHQpO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jc2VhcmNoQnV0dG9uOmhvdmVyIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOTIpO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgI2FwcCB7XG4gICAgZ2FwOiAyMnB4O1xuICAgIHBhZGRpbmc6IDI0cHggMTZweDtcbiAgfVxuXG4gICN3ZWF0aGVyQ2FyZCB7XG4gICAgZ2FwOiAyMnB4O1xuICB9XG5cbiAgLyogU3dpcGUtZGlyZWN0aW9uLWF3YXJlIHNsaWRlIG9uIGEgY29tbWl0dGVkIGxvY2F0aW9uIHJvdGF0aW9uLiBmYXZvdXJpdGVzLmpzXG4gICAgIGFkZHMgLnNsaWRlLW5leHQgKHN3aXBlIGxlZnQgLT4gbmV4dCkgb3IgLnNsaWRlLXByZXYgKHN3aXBlIHJpZ2h0IC0+IHByZXYpXG4gICAgIHRvICN3ZWF0aGVyQ2FyZCwgdGhlbiByb3RhdGVzLiBUaGUgY2FyZCBmYWRlcyB0byBub3RoaW5nIGF0IHRoZSBrZXlmcmFtZSdzXG4gICAgIG1pZHBvaW50LCB3aGljaCBtYXNrcyB0aGUgZm9yZWNhc3Qgc3dhcDogcmVuZGVyUmliYm9uKCkgcmVidWlsZHMgaW50byB0aGlzXG4gICAgIHNhbWUgY2FyZCB3aGlsZSBpdCdzIGludmlzaWJsZSwgc28gdGhlIG5ldyBjdXJ2ZSBzbGlkZXMgaW4gcmF0aGVyIHRoYW5cbiAgICAgc25hcHBpbmcuIERlc2t0b3Agcm90YXRlcyB2aWEgdGhlIGFycm93cyBhbmQgbmV2ZXIgZ2V0cyB0aGUgY2xhc3MuICovXG4gICN3ZWF0aGVyQ2FyZC5zbGlkZS1uZXh0IHtcbiAgICBhbmltYXRpb246IGNhcmRTbGlkZU5leHQgMjgwbXMgZWFzZS1vdXQ7XG4gIH1cblxuICAjd2VhdGhlckNhcmQuc2xpZGUtcHJldiB7XG4gICAgYW5pbWF0aW9uOiBjYXJkU2xpZGVQcmV2IDI4MG1zIGVhc2Utb3V0O1xuICB9XG5cbiAgQGtleWZyYW1lcyBjYXJkU2xpZGVOZXh0IHtcbiAgICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgb3BhY2l0eTogMTsgfVxuICAgIDQwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNDJweCk7IG9wYWNpdHk6IDA7IH1cbiAgICA2MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNDJweCk7IG9wYWNpdHk6IDA7IH1cbiAgICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyBvcGFjaXR5OiAxOyB9XG4gIH1cblxuICBAa2V5ZnJhbWVzIGNhcmRTbGlkZVByZXYge1xuICAgIDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyBvcGFjaXR5OiAxOyB9XG4gICAgNDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQycHgpOyBvcGFjaXR5OiAwOyB9XG4gICAgNjAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC00MnB4KTsgb3BhY2l0eTogMDsgfVxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IG9wYWNpdHk6IDE7IH1cbiAgfVxuXG4gIC8qIE1vYmlsZSBuYXZpZ2F0ZXMgYnkgc3dpcGU7IGRyb3AgdGhlIGFycm93cyBidXQga2VlcCB0aGUgZG90cy4gKi9cbiAgLmFycm93IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgI3N0YXRSb3cge1xuICAgIGdhcDogOHB4O1xuICB9XG5cbiAgLnN0YXQge1xuICAgIHBhZGRpbmc6IDEwcHggNHB4O1xuICB9XG5cbiAgLnN0YXQtdmFsdWUge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxufVxuXG4vKiBSZXNwZWN0IGEgcmVkdWNlZC1tb3Rpb24gcHJlZmVyZW5jZTogcm90YXRlIGluc3RhbnRseSwgbm8gc2xpZGUuIGZhdm91cml0ZXMuanNcbiAgIHN0aWxsIGFkZHMgdGhlIGNsYXNzLCBidXQgd2l0aCB0aGUgYW5pbWF0aW9uIHN1cHByZXNzZWQgYW5pbWF0aW9uZW5kIG5ldmVyXG4gICBmaXJlcywgc28gaXRzIHNldFRpbWVvdXQgZmFsbGJhY2sgaXMgd2hhdCBzdHJpcHMgdGhlIGNsYXNzIGJhY2sgb2ZmLiAqL1xuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcbiAgI3dlYXRoZXJDYXJkLnNsaWRlLW5leHQsXG4gICN3ZWF0aGVyQ2FyZC5zbGlkZS1wcmV2IHtcbiAgICBhbmltYXRpb246IG5vbmU7XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQiw0Q0FBZ0M7RUFDaEMsb0JBQW9CO0FBQ3RCOztBQUVBOzs7O3FDQUlxQztBQUNyQztFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixzRkFBc0Y7QUFDeEY7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQiw0Q0FBNEM7RUFDNUMsbUNBQW1DO0FBQ3JDOztBQUVBOzRDQUM0QztBQUM1QztFQUNFLGtCQUFrQixFQUFFLDZEQUE2RDtFQUNqRixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTs7Ozs7Ozs7O3NEQVNzRDtBQUN0RDtFQUNFLGVBQWU7RUFDZixRQUFRO0VBQ1IsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsZ0ZBQWdGO0VBQ2hGLGlDQUFpQztBQUNuQzs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0Qjs7QUFFQTs7Ozs7OytFQU0rRTtBQUMvRTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1Isb0JBQW9CO0VBQ3BCLDRCQUE0QjtBQUM5Qjs7QUFFQTs4Q0FDOEM7QUFDOUM7RUFDRSxTQUFTO0VBQ1QsV0FBVztFQUNYLFNBQVM7QUFDWDs7QUFFQSx3RUFBd0U7QUFDeEU7RUFDRSxnRkFBZ0Y7QUFDbEY7QUFDQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsYUFBYTtFQUNiLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsa0dBQWtHO0VBQ2xHLG1EQUFtRDtBQUNyRDtBQUNBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixhQUFhO0VBQ2IsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixvR0FBb0c7RUFDcEcsMkRBQTJEO0FBQzdEO0FBQ0EsNkVBQTZFO0FBQzdFO0VBQ0Usb0dBQW9HO0VBQ3BHLGlCQUFpQjtFQUNqQixtREFBbUQ7QUFDckQ7QUFDQSw0REFBNEQ7QUFDNUQ7RUFDRSw0R0FBNEc7RUFDNUcsWUFBWTtFQUNaLDJEQUEyRDtBQUM3RDtBQUNBLDhEQUE4RDtBQUM5RDtFQUNFLHVGQUF1RjtFQUN2RixzREFBc0Q7QUFDeEQ7O0FBRUEsNkVBQTZFO0FBQzdFO0VBQ0UsZ0ZBQWdGO0FBQ2xGO0FBQ0E7RUFDRSxRQUFRO0VBQ1I7Ozs7Ozs7O21GQVFpRjtFQUNqRixzREFBc0Q7QUFDeEQ7QUFDQTtFQUNFLFFBQVE7RUFDUixVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsb0lBQW9JO0FBQ3RJO0FBQ0EsNEVBQTRFO0FBQzVFO0VBQ0U7Ozs7Ozs7O3NGQVFvRjtFQUNwRixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLDhEQUE4RDtBQUNoRTtBQUNBO2dGQUNnRjtBQUNoRjtFQUNFOzs7Ozs7c0ZBTW9GO0VBQ3BGLGFBQWE7RUFDYixzREFBc0Q7QUFDeEQ7QUFDQSwyRUFBMkU7QUFDM0U7RUFDRTs7O29GQUdrRjtFQUNsRixxREFBcUQ7RUFDckQsd0RBQXdEO0FBQzFEO0FBQ0EsOERBQThEO0FBQzlEO0VBQ0UseUZBQXlGO0VBQ3pGLHNEQUFzRDtBQUN4RDs7QUFFQTs4Q0FDOEM7QUFDOUM7RUFDRSxnRkFBZ0Y7QUFDbEY7QUFDQTtFQUNFLFFBQVE7RUFDUixVQUFVO0VBQ1YsYUFBYTtFQUNiLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsbUdBQW1HO0VBQ25HLHFEQUFxRDtBQUN2RDtBQUNBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxhQUFhO0VBQ2IsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixvR0FBb0c7RUFDcEcsNkRBQTZEO0FBQy9EO0FBQ0EsOEVBQThFO0FBQzlFO0VBQ0Usc0dBQXNHO0VBQ3RHLGtCQUFrQjtFQUNsQiw2REFBNkQ7QUFDL0Q7QUFDQTttREFDbUQ7QUFDbkQ7RUFDRSxzR0FBc0c7RUFDdEcsaUJBQWlCO0VBQ2pCLHFEQUFxRDtBQUN2RDtBQUNBLDBFQUEwRTtBQUMxRTtFQUNFLHFHQUFxRztFQUNyRyxpQkFBaUI7RUFDakIscURBQXFEO0FBQ3ZEO0FBQ0Esa0RBQWtEO0FBQ2xEO0VBQ0UseUZBQXlGO0VBQ3pGLHNEQUFzRDtBQUN4RDs7QUFFQTtrREFDa0Q7QUFDbEQ7RUFDRSxnRkFBZ0Y7QUFDbEY7QUFDQTtFQUNFLFFBQVE7RUFDUixVQUFVO0VBQ1YsYUFBYTtFQUNiLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsb0dBQW9HO0VBQ3BHLHFEQUFxRDtBQUN2RDtBQUNBO0VBQ0UsUUFBUTtFQUNSLG1IQUFtSDtFQUNuSCxzQ0FBc0M7QUFDeEM7QUFDQSxxRUFBcUU7QUFDckU7RUFDRSxxR0FBcUc7RUFDckcsaUJBQWlCO0VBQ2pCLDZEQUE2RDtBQUMvRDtBQUNBOzJEQUMyRDtBQUMzRDtFQUNFLG9IQUFvSDtFQUNwSCx1Q0FBdUM7QUFDekM7QUFDQSxnRkFBZ0Y7QUFDaEY7RUFDRSxvSEFBb0g7RUFDcEgsMkNBQTJDO0FBQzdDO0FBQ0EsdUVBQXVFO0FBQ3ZFO0VBQ0UseUZBQXlGO0VBQ3pGLHFEQUFxRDtBQUN2RDs7QUFFQSx1REFBdUQ7QUFDdkQ7RUFDRSxnRkFBZ0Y7QUFDbEY7QUFDQTs7RUFFRSxRQUFRO0VBQ1I7Ozs7Ozt1RkFNcUY7RUFDckYseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxxQ0FBcUM7QUFDdkM7QUFDQTtFQUNFLFlBQVk7RUFDWixxQ0FBcUM7QUFDdkM7QUFDQSw0RUFBNEU7QUFDNUU7RUFDRTs7Ozs7Ozs7dUZBUXFGO0VBQ3JGLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLHFDQUFxQztBQUN2QztBQUNBOztpRkFFaUY7QUFDakY7RUFDRTs7Ozs7O3VGQU1xRjtFQUNyRix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixxQ0FBcUM7QUFDdkM7QUFDQSxrRUFBa0U7QUFDbEU7RUFDRTs7OztzRkFJb0Y7RUFDcEYseUJBQXlCO0VBQ3pCLHFEQUFxRDtFQUNyRCxvQ0FBb0M7QUFDdEM7QUFDQSwyRUFBMkU7QUFDM0U7RUFDRSxXQUFXO0VBQ1gsd0hBQXdIO0VBQ3hILHNEQUFzRDtBQUN4RDs7QUFFQSx1RUFBdUU7QUFDdkU7RUFDRSxnRkFBZ0Y7QUFDbEY7QUFDQTtFQUNFLFFBQVE7RUFDUjs7K0dBRTZHO0VBQzdHLG1EQUFtRDtBQUNyRDtBQUNBLGdFQUFnRTtBQUNoRTtFQUNFLDZIQUE2SDtFQUM3SCxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLDJEQUEyRDtBQUM3RDtBQUNBOzhCQUM4QjtBQUM5QjtFQUNFLDZIQUE2SDtFQUM3SCxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1EQUFtRDtBQUNyRDtBQUNBLDhEQUE4RDtBQUM5RDtFQUNFLGdJQUFnSTtFQUNoSSxpQkFBaUI7RUFDakIsbURBQW1EO0FBQ3JEO0FBQ0Esd0RBQXdEO0FBQ3hEO0VBQ0UsV0FBVztFQUNYLHlGQUF5RjtFQUN6RixzREFBc0Q7QUFDeEQ7O0FBRUE7RUFDRSxPQUFPLG1DQUFtQyxTQUFTLFlBQVksRUFBRTtFQUNqRSxPQUFPLHlDQUF5QyxHQUFHLFVBQVUsRUFBRTtBQUNqRTs7QUFFQTtFQUNFLE9BQU8sWUFBWSxFQUFFO0VBQ3JCLE9BQU8sVUFBVSxFQUFFO0FBQ3JCOztBQUVBO0VBQ0UsT0FBTyx3QkFBd0IsRUFBRTtFQUNqQyxPQUFPLDBCQUEwQixFQUFFO0FBQ3JDOztBQUVBO0VBQ0UsT0FBTyx3QkFBd0IsRUFBRTtFQUNqQyxPQUFPLDhCQUE4QixFQUFFO0FBQ3pDOztBQUVBO0VBQ0UsT0FBTywyQkFBMkIsRUFBRTtFQUNwQyxPQUFPLHdCQUF3QixFQUFFO0FBQ25DOztBQUVBO0VBQ0UsT0FBTywwQkFBMEIsRUFBRSxZQUFZLEVBQUU7RUFDakQsT0FBTyx5QkFBeUIsR0FBRyxVQUFVLEVBQUU7QUFDakQ7O0FBRUEsaUZBQWlGO0FBQ2pGO0VBQ0UsT0FBTyx3QkFBd0IsRUFBRTtFQUNqQyxPQUFPLCtCQUErQixFQUFFO0FBQzFDOztBQUVBLDJFQUEyRTtBQUMzRTtFQUNFLE9BQU8sYUFBYSxFQUFFO0VBQ3RCLE9BQU8sVUFBVSxFQUFFO0FBQ3JCOztBQUVBLGlGQUFpRjtBQUNqRjs7O0VBR0UsNEJBQTRCO0FBQzlCOztBQUVBO3dCQUN3QjtBQUN4QjtFQUNFOzs7SUFHRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUE7O2dGQUVnRjtBQUNoRjtFQUNFLGtCQUFrQixFQUFFLDRDQUE0QztFQUNoRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0FBQ1g7O0FBRUE7b0VBQ29FO0FBQ3BFO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixzQkFBc0I7QUFDeEI7O0FBRUEsK0NBQStDO0FBQy9DO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1Isa0JBQWtCO0FBQ3BCOztBQUVBLHVFQUF1RTtBQUN2RTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7O0FBRUE7NkVBQzZFO0FBQzdFO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixvQkFBb0I7RUFDcEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCOztBQUVBOzsyRUFFMkU7QUFDM0U7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixTQUFTO0VBQ1QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUEsd0VBQXdFO0FBQ3hFO0VBQ0Usa0JBQWtCLEVBQUUsaURBQWlEO0VBQ3JFLGFBQWE7RUFDYixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtnRUFDZ0U7QUFDaEU7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLDJCQUEyQjtFQUMzQixXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsUUFBUTtFQUNSLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQiwwQ0FBMEM7RUFDMUMsbUJBQW1CO0FBQ3JCOztBQUVBO21FQUNtRTtBQUNuRTs7RUFFRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCwyQkFBMkI7RUFDM0IsUUFBUTtFQUNSLFNBQVM7RUFDVCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsMkJBQTJCO0VBQzNCLDZEQUE2RDtBQUMvRDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiwyQkFBMkI7RUFDM0IsK0RBQStEO0FBQ2pFOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsUUFBUTtBQUNWOztBQUVBOztFQUVFLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQSx1Q0FBdUM7QUFDdkM7RUFDRSxpQ0FBaUM7RUFDakMsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBLDZDQUE2QztBQUM3QztFQUNFLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsU0FBUztFQUNULFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1IsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBLGlCQUFpQjtBQUNqQjtFQUNFLGtCQUFrQixFQUFFLDRDQUE0QztFQUNoRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLFNBQVM7RUFDVCxXQUFXO0FBQ2I7O0FBRUE7O3dCQUV3QjtBQUN4QjtFQUNFLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsZUFBZSxFQUFFLDREQUE0RDtFQUM3RSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLDZCQUE2QjtFQUM3QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMEJBQTBCO0FBQzVCOztBQUVBO2tGQUNrRjtBQUNsRjtFQUNFLDBCQUEwQjtFQUMxQixnQ0FBZ0M7QUFDbEM7O0FBRUEsa0VBQWtFO0FBQ2xFO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO21FQUNtRTtBQUNuRTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFDUixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsOEJBQThCO0VBQzlCLGdCQUFnQjtFQUNoQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLFFBQVE7RUFDUixrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRTtJQUNFLFNBQVM7SUFDVCxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxTQUFTO0VBQ1g7O0VBRUE7Ozs7O3lFQUt1RTtFQUN2RTtJQUNFLHVDQUF1QztFQUN6Qzs7RUFFQTtJQUNFLHVDQUF1QztFQUN6Qzs7RUFFQTtJQUNFLEtBQUssd0JBQXdCLEVBQUUsVUFBVSxFQUFFO0lBQzNDLE1BQU0sNEJBQTRCLEVBQUUsVUFBVSxFQUFFO0lBQ2hELE1BQU0sMkJBQTJCLEVBQUUsVUFBVSxFQUFFO0lBQy9DLE9BQU8sd0JBQXdCLEVBQUUsVUFBVSxFQUFFO0VBQy9DOztFQUVBO0lBQ0UsS0FBSyx3QkFBd0IsRUFBRSxVQUFVLEVBQUU7SUFDM0MsTUFBTSwyQkFBMkIsRUFBRSxVQUFVLEVBQUU7SUFDL0MsTUFBTSw0QkFBNEIsRUFBRSxVQUFVLEVBQUU7SUFDaEQsT0FBTyx3QkFBd0IsRUFBRSxVQUFVLEVBQUU7RUFDL0M7O0VBRUEsa0VBQWtFO0VBQ2xFO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsUUFBUTtFQUNWOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBOzt5RUFFeUU7QUFDekU7RUFDRTs7SUFFRSxlQUFlO0VBQ2pCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICBzcmM6IHVybCgnLi9Sb2JvdG8tUmVndWxhci50dGYnKTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDAgNDAwO1xcbn1cXG5cXG4vKiBQYWxldHRlOlxcbiAgIGdyb3VuZCAgIzEyMTgxRiAgIHJ1bGVzICAjMjYzMTNCXFxuICAgdGV4dCAgICAjRUFFRUYyIChwcmltYXJ5KSAvICM4Q0EwQUUgKG11dGVkKVxcbiAgIFRoZSB0ZW1wZXJhdHVyZSBjb2xvdXJzIGxpdmUgaW4gcmliYm9uLmpzICh0aGUgY3VydmUgaXMgY29sb3VyZWQgYnkgdGhlXFxuICAgdGVtcGVyYXR1cmUgc2NhbGFyLCBub3QgYnkgQ1NTKS4gKi9cXG46cm9vdCB7XFxuICAtLWdyb3VuZDogIzEyMTgxRjtcXG4gIC0tcnVsZTogIzI2MzEzQjtcXG4gIC0tdGV4dDogI0VBRUVGMjtcXG4gIC0tbXV0ZWQ6ICM4Q0EwQUU7XFxuICAtLW1vbm86ICdTRk1vbm8tUmVndWxhcicsICdTRiBNb25vJywgJ01lbmxvJywgJ0NvbnNvbGFzJywgJ0xpYmVyYXRpb24gTW9ubycsIG1vbm9zcGFjZTtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWdyb3VuZCk7XFxuICBjb2xvcjogdmFyKC0tdGV4dCk7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHN5c3RlbS11aSwgc2Fucy1zZXJpZjtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbn1cXG5cXG4vKiBkdmggKG5vdCB2aCk6IG9uIGlPUyBTYWZhcmkgdmggcmVzb2x2ZXMgdG8gdGhlIHRhbGwgdmlld3BvcnQgYW5kIHBhcmtzIHRoZVxcbiAgIGJvdHRvbSBvZiB0aGUgbGF5b3V0IHVuZGVyIHRoZSBVUkwgYmFyLiAqL1xcbiNhcHAge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiBzdGFja3MgdGhlIGNvbnN0cmFpbmVkIGNvbHVtbiBhYm92ZSB0aGUgZml4ZWQgLndlYXRoZXJCZyAqL1xcbiAgei1pbmRleDogMTtcXG4gIG1pbi1oZWlnaHQ6IDEwMGR2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDI4cHg7XFxuICBtYXgtd2lkdGg6IDcyMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwYWRkaW5nOiAzMnB4IDIwcHg7XFxufVxcblxcbi8qIENvbmRpdGlvbi1iYXNlZCBiYWNrZ3JvdW5kLiBza3kuanMgbW91bnRzIGEgc2luZ2xlIGAud2VhdGhlckJnYCBhcyB0aGUgZmlyc3RcXG4gICBjaGlsZCBvZiAjYXBwIGFuZCBzd2FwcyBhIGBiZy08Y2F0ZWdvcnk+YCBjbGFzcyBvbnRvIGl0IHBlciBmZXRjaCwga2V5ZWQgb2ZmXFxuICAgdGhlIGN1cnJlbnQgY29uZGl0aW9uIHRleHQgKGNhdGVnb3J5Rm9yKCkgaW4gc2t5LmpzKS4gSXQgaXMgYGZpeGVkYCBzbyBpdFxcbiAgIHNwYW5zIHRoZSB3aG9sZSBicm93c2VyIHdpbmRvdyBvbiBkZXNrdG9wIHdoaWxlICNhcHAgc3RheXMgYSBjb25zdHJhaW5lZFxcbiAgIGNlbnRyZWQgY29sdW1uIGFib3ZlIGl0ICh6LWluZGV4KS4gRWFjaCBjYXRlZ29yeSBwYWludHMgYSBncmFkaWVudCBiYXNlIG9uIHRoZVxcbiAgIGVsZW1lbnQgcGx1cyBkZWNvcmF0aXZlIGxheWVycyAoc3VuLCBtb29uICsgc3RhcnMsIGRyaWZ0aW5nIGNsb3VkcywgZmxha2VzLFxcbiAgIGhhemUpIG9uIHRoZSB0d28gcHNldWRvLWVsZW1lbnRzLiBvdmVyZmxvdzogaGlkZGVuIGNsaXBzIHRob3NlIGxheWVycyB0byB0aGVcXG4gICB2aWV3cG9ydCBzbyBhbiBvdmVyc2l6ZWQgY2xvdWQgY2FuJ3Qgc3BpbGwgYSBzY3JvbGxiYXIuIFRoZSBncmFkaWVudHMgY3Jvc3MtXFxuICAgZmFkZSAodHJhbnNpdGlvbjogYmFja2dyb3VuZCkgd2hlbiB0aGUgY2F0ZWdvcnkgY2hhbmdlczsgdGhlIGRlY29yYXRpdmVcXG4gICBtb3Rpb24gbGl2ZXMgaW4gdGhlIHBlci1jYXRlZ29yeSBrZXlmcmFtZXMgYmVsb3cuICovXFxuLndlYXRoZXJCZyB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBpbnNldDogMDtcXG4gIHotaW5kZXg6IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMWIyODM2IDAlLCAjMTQxZDI5IDU1JSwgdmFyKC0tZ3JvdW5kKSAxMDAlKTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgNjAwbXMgZWFzZTtcXG59XFxuXFxuLndlYXRoZXJCZzo6YmVmb3JlLFxcbi53ZWF0aGVyQmc6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi8qIERlcHRoIHBsYW5lcyBtb3VudGVkIGJ5IHNreS5qcyBhcyBjaGlsZCBkaXZzIChmYXIsIG1pZCwgbmVhciwgZ3JvdW5kKS4gVGhleVxcbiAgIGdpdmUgZWFjaCBjYXRlZ29yeSBtb3JlIHRoYW4gdGhlIHR3byBwc2V1ZG8tZWxlbWVudHMgY2FuIGhvbGQ6IGEgY2F0ZWdvcnlcXG4gICBzdGFja3MgYSBzdWJzZXQgb2YgdGhlbSDigJQgYSBibHVycmVkIGZhciBwbGFuZSwgYSBtaWQgcGxhbmUsIGEgc2hhcnAgbmVhciBwbGFuZVxcbiAgIHdpdGggYSBnbG93LCBhbmQgYSBncm91bmQtbGlnaHRpbmcgYWNjZW50IGF0IHRoZSBib3R0b20g4oCUIHNvIHRoZSBpbWFnZXJ5IHJlYWRzXFxuICAgYXMgZGVwdGggcmF0aGVyIHRoYW4gYSBzaW5nbGUgZmxhdCB3YXNoLiBBbnkgcGxhbmUgYSBjYXRlZ29yeSBkb2Vzbid0IHBhaW50XFxuICAgc3RheXMgdHJhbnNwYXJlbnQuIFRoZXkgc2l0IGJldHdlZW4gOjpiZWZvcmUgKGJlaGluZCkgYW5kIDo6YWZ0ZXIgKGluIGZyb250KVxcbiAgIGluIHBhaW50IG9yZGVyOyBwZXItY2F0ZWdvcnkgcnVsZXMgbGF5ZXIgdGhlbSBleHBsaWNpdGx5IHdoZXJlIGl0IG1hdHRlcnMuICovXFxuLndlYXRoZXJCZyA+IC5iZ0xheWVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGluc2V0OiAwO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG4vKiBHcm91bmQgYWNjZW50IHNoYXJlZCBzaGFwZTogYSBzb2Z0IGJhbmQgb2YgbGlnaHQgaHVnZ2luZyB0aGUgYm90dG9tIGVkZ2UuXFxuICAgRWFjaCBjYXRlZ29yeSB0aW50cyBpdCB2aWEgLS1ncm91bmQtZ2xvdy4gKi9cXG4ud2VhdGhlckJnID4gLmJnTGF5ZXItLWdyb3VuZCB7XFxuICB0b3A6IGF1dG87XFxuICBoZWlnaHQ6IDM0JTtcXG4gIGJvdHRvbTogMDtcXG59XFxuXFxuLyogU1VOTlkg4oCUIHdhcm0gZGF5dGltZSBza3kgd2l0aCBhIHNvZnQgc3VuIGdsb3cgdGhhdCBzbG93bHkgYnJlYXRoZXMuICovXFxuLndlYXRoZXJCZy5iZy1zdW5ueSB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMmM0YzcyIDAlLCAjMWEyYzQwIDU1JSwgdmFyKC0tZ3JvdW5kKSAxMDAlKTtcXG59XFxuLndlYXRoZXJCZy5iZy1zdW5ueTo6YmVmb3JlIHtcXG4gIHRvcDogLTEyJTtcXG4gIHJpZ2h0OiAtNiU7XFxuICB3aWR0aDogNDZ2bWF4O1xcbiAgaGVpZ2h0OiA0NnZtYXg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IGNlbnRlciwgcmdiYSgyMTcsIDE2NCwgNjUsIDAuNDUpLCByZ2JhKDIxNywgMTY0LCA2NSwgMCkgNjglKTtcXG4gIGFuaW1hdGlvbjogYmdTdW4gMTRzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcXG59XFxuLndlYXRoZXJCZy5iZy1zdW5ueTo6YWZ0ZXIge1xcbiAgYm90dG9tOiAtMTglO1xcbiAgbGVmdDogLTEyJTtcXG4gIHdpZHRoOiA0MHZtYXg7XFxuICBoZWlnaHQ6IDQwdm1heDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgY2VudGVyLCByZ2JhKDExMSwgMTY4LCAxNjAsIDAuMTgpLCByZ2JhKDExMSwgMTY4LCAxNjAsIDApIDcwJSk7XFxuICBhbmltYXRpb246IGJnU3VuIDE4cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGUtcmV2ZXJzZTtcXG59XFxuLyogZmFyOiBhIGhpZ2gsIGJsdXJyZWQgd2FybSBoYXplIGJhbmQgdGhhdCBzbG93bHkgYnJlYXRoZXMgYmVoaW5kIHRoZSBzdW4uICovXFxuLndlYXRoZXJCZy5iZy1zdW5ueSA+IC5iZ0xheWVyLS1mYXIge1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KDEyMCUgNjAlIGF0IDc4JSA0JSwgcmdiYSgyMTcsIDE2NCwgNjUsIDAuMjIpLCByZ2JhKDIxNywgMTY0LCA2NSwgMCkgNjAlKTtcXG4gIGZpbHRlcjogYmx1cig2cHgpO1xcbiAgYW5pbWF0aW9uOiBiZ1N1biAyMnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xcbn1cXG4vKiBtaWQ6IGZhaW50IGRpYWdvbmFsIGxpZ2h0IHNoYWZ0cyBzcGlsbGluZyBmcm9tIHRoZSBzdW4uICovXFxuLndlYXRoZXJCZy5iZy1zdW5ueSA+IC5iZ0xheWVyLS1taWQge1xcbiAgYmFja2dyb3VuZDogcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCg2NGRlZywgcmdiYSgyMTcsIDE2NCwgNjUsIDAuMDUpIDAgMnB4LCByZ2JhKDIxNywgMTY0LCA2NSwgMCkgMnB4IDI2cHgpO1xcbiAgb3BhY2l0eTogMC43O1xcbiAgYW5pbWF0aW9uOiBiZ1N1biAxNnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlLXJldmVyc2U7XFxufVxcbi8qIGdyb3VuZDogd2FybSBsaWdodCBwb29saW5nIGFsb25nIHRoZSBib3R0b20gb2YgdGhlIHNjZW5lLiAqL1xcbi53ZWF0aGVyQmcuYmctc3VubnkgPiAuYmdMYXllci0tZ3JvdW5kIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDIxNywgMTY0LCA2NSwgMC4xNiksIHJnYmEoMjE3LCAxNjQsIDY1LCAwKSAxMDAlKTtcXG4gIGFuaW1hdGlvbjogYmdHcm91bmQgMTJzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcXG59XFxuXFxuLyogQ0xFQVIgTklHSFQg4oCUIGRlZXAgc2t5LCBhIGxvdyBtb29uIGdsb3csIGFuZCBhIGZpZWxkIG9mIHR3aW5rbGluZyBzdGFycy4gKi9cXG4ud2VhdGhlckJnLmJnLWNsZWFyLW5pZ2h0IHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMxMDFhMmMgMCUsICMwZDE0MjAgNTUlLCB2YXIoLS1ncm91bmQpIDEwMCUpO1xcbn1cXG4ud2VhdGhlckJnLmJnLWNsZWFyLW5pZ2h0OjpiZWZvcmUge1xcbiAgaW5zZXQ6IDA7XFxuICBiYWNrZ3JvdW5kLWltYWdlOlxcbiAgICByYWRpYWwtZ3JhZGllbnQoMS42cHggMS42cHggYXQgMTglIDI0JSwgcmdiYSgyMzQsIDIzOCwgMjQyLCAwLjkpLCB0cmFuc3BhcmVudCA2MCUpLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMS4ycHggMS4ycHggYXQgNzIlIDE2JSwgcmdiYSgyMzQsIDIzOCwgMjQyLCAwLjgpLCB0cmFuc3BhcmVudCA2MCUpLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMS40cHggMS40cHggYXQgNDIlIDYyJSwgcmdiYSgyMzQsIDIzOCwgMjQyLCAwLjc1KSwgdHJhbnNwYXJlbnQgNjAlKSxcXG4gICAgcmFkaWFsLWdyYWRpZW50KDFweCAxcHggYXQgODYlIDQ2JSwgcmdiYSgyMzQsIDIzOCwgMjQyLCAwLjcpLCB0cmFuc3BhcmVudCA2MCUpLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMS4zcHggMS4zcHggYXQgMzAlIDgyJSwgcmdiYSgyMzQsIDIzOCwgMjQyLCAwLjcpLCB0cmFuc3BhcmVudCA2MCUpLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMXB4IDFweCBhdCA2MCUgNzQlLCByZ2JhKDIzNCwgMjM4LCAyNDIsIDAuNiksIHRyYW5zcGFyZW50IDYwJSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgxLjVweCAxLjVweCBhdCA4JSA1NCUsIHJnYmEoMjM0LCAyMzgsIDI0MiwgMC44KSwgdHJhbnNwYXJlbnQgNjAlKSxcXG4gICAgcmFkaWFsLWdyYWRpZW50KDFweCAxcHggYXQgOTIlIDc4JSwgcmdiYSgyMzQsIDIzOCwgMjQyLCAwLjY1KSwgdHJhbnNwYXJlbnQgNjAlKTtcXG4gIGFuaW1hdGlvbjogYmdUd2lua2xlIDVzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcXG59XFxuLndlYXRoZXJCZy5iZy1jbGVhci1uaWdodDo6YWZ0ZXIge1xcbiAgdG9wOiAxMiU7XFxuICByaWdodDogMTQlO1xcbiAgd2lkdGg6IDkycHg7XFxuICBoZWlnaHQ6IDkycHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDM4JSAzOCUsIHJnYmEoMjM0LCAyMzgsIDI0MiwgMC44NSksIHJnYmEoMTQwLCAxNjAsIDE3NCwgMC4zNSkgNjIlLCByZ2JhKDE0MCwgMTYwLCAxNzQsIDApIDcyJSk7XFxufVxcbi8qIGZhcjogYSBkZW5zZSBmaWVsZCBvZiB0aW55LCBkaW0sIHNsaWdodGx5IGJsdXJyZWQgc3RhcnMg4oCUIHRoZSBkZWVwIHNreS4gKi9cXG4ud2VhdGhlckJnLmJnLWNsZWFyLW5pZ2h0ID4gLmJnTGF5ZXItLWZhciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOlxcbiAgICByYWRpYWwtZ3JhZGllbnQoMC44cHggMC44cHggYXQgMTIlIDMwJSwgcmdiYSgyMzQsIDIzOCwgMjQyLCAwLjUpLCB0cmFuc3BhcmVudCA2MCUpLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMC43cHggMC43cHggYXQgMzQlIDEyJSwgcmdiYSgyMzQsIDIzOCwgMjQyLCAwLjQ1KSwgdHJhbnNwYXJlbnQgNjAlKSxcXG4gICAgcmFkaWFsLWdyYWRpZW50KDAuOHB4IDAuOHB4IGF0IDUyJSA0MCUsIHJnYmEoMjM0LCAyMzgsIDI0MiwgMC41KSwgdHJhbnNwYXJlbnQgNjAlKSxcXG4gICAgcmFkaWFsLWdyYWRpZW50KDAuNnB4IDAuNnB4IGF0IDY4JSAyNiUsIHJnYmEoMjM0LCAyMzgsIDI0MiwgMC40KSwgdHJhbnNwYXJlbnQgNjAlKSxcXG4gICAgcmFkaWFsLWdyYWRpZW50KDAuOHB4IDAuOHB4IGF0IDgwJSA1MiUsIHJnYmEoMjM0LCAyMzgsIDI0MiwgMC40NSksIHRyYW5zcGFyZW50IDYwJSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgwLjdweCAwLjdweCBhdCAyNCUgNjYlLCByZ2JhKDIzNCwgMjM4LCAyNDIsIDAuNCksIHRyYW5zcGFyZW50IDYwJSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgwLjhweCAwLjhweCBhdCA0NiUgODQlLCByZ2JhKDIzNCwgMjM4LCAyNDIsIDAuNDUpLCB0cmFuc3BhcmVudCA2MCUpLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMC42cHggMC42cHggYXQgNzQlIDc4JSwgcmdiYSgyMzQsIDIzOCwgMjQyLCAwLjQpLCB0cmFuc3BhcmVudCA2MCUpO1xcbiAgZmlsdGVyOiBibHVyKDAuNXB4KTtcXG4gIG9wYWNpdHk6IDAuNztcXG4gIGFuaW1hdGlvbjogYmdUd2lua2xlIDdzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZS1yZXZlcnNlO1xcbn1cXG4vKiBtaWQ6IGEgbW9kZXJhdGUgZmllbGQgb2Ygc3RhcnMg4oCUIGJyaWdodGVyIHRoYW4gdGhlIGZhciBwbGFuZSwgbm8gZ2xvdyB5ZXQsXFxuICAgdHdpbmtsaW5nIG9uIGl0cyBvd24gb2Zmc2V0IHNvIHRoZSB0aHJlZSBzdGFyIHBsYW5lcyBzaGltbWVyIGluZGVwZW5kZW50bHkuICovXFxuLndlYXRoZXJCZy5iZy1jbGVhci1uaWdodCA+IC5iZ0xheWVyLS1taWQge1xcbiAgYmFja2dyb3VuZC1pbWFnZTpcXG4gICAgcmFkaWFsLWdyYWRpZW50KDEuNHB4IDEuNHB4IGF0IDE2JSAyMiUsIHJnYmEoMjM0LCAyMzgsIDI0MiwgMC43KSwgdHJhbnNwYXJlbnQgNjAlKSxcXG4gICAgcmFkaWFsLWdyYWRpZW50KDEuMnB4IDEuMnB4IGF0IDQwJSAzNCUsIHJnYmEoMjM0LCAyMzgsIDI0MiwgMC42NSksIHRyYW5zcGFyZW50IDYwJSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgxLjVweCAxLjVweCBhdCA1OCUgMTglLCByZ2JhKDIzNCwgMjM4LCAyNDIsIDAuNyksIHRyYW5zcGFyZW50IDYwJSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgxLjJweCAxLjJweCBhdCA3NiUgNDQlLCByZ2JhKDIzNCwgMjM4LCAyNDIsIDAuNiksIHRyYW5zcGFyZW50IDYwJSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgxLjRweCAxLjRweCBhdCAzNCUgNzAlLCByZ2JhKDIzNCwgMjM4LCAyNDIsIDAuNjIpLCB0cmFuc3BhcmVudCA2MCUpLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMS4ycHggMS4ycHggYXQgODglIDY2JSwgcmdiYSgyMzQsIDIzOCwgMjQyLCAwLjYpLCB0cmFuc3BhcmVudCA2MCUpO1xcbiAgb3BhY2l0eTogMC44NTtcXG4gIGFuaW1hdGlvbjogYmdUd2lua2xlIDZzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcXG59XFxuLyogbmVhcjogYSBmZXcgbGFyZ2UgZm9yZWdyb3VuZCBzdGFycywgZWFjaCB3aXRoIGEgc29mdCBkcm9wLXNoYWRvdyBnbG93LiAqL1xcbi53ZWF0aGVyQmcuYmctY2xlYXItbmlnaHQgPiAuYmdMYXllci0tbmVhciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOlxcbiAgICByYWRpYWwtZ3JhZGllbnQoMi40cHggMi40cHggYXQgMjIlIDIwJSwgcmdiYSgyMzQsIDIzOCwgMjQyLCAxKSwgdHJhbnNwYXJlbnQgNjIlKSxcXG4gICAgcmFkaWFsLWdyYWRpZW50KDJweCAycHggYXQgNjQlIDU4JSwgcmdiYSgyMzQsIDIzOCwgMjQyLCAwLjk1KSwgdHJhbnNwYXJlbnQgNjIlKSxcXG4gICAgcmFkaWFsLWdyYWRpZW50KDIuNnB4IDIuNnB4IGF0IDg0JSAzMiUsIHJnYmEoMjM0LCAyMzgsIDI0MiwgMSksIHRyYW5zcGFyZW50IDYyJSk7XFxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCA0cHggcmdiYSgyMzQsIDIzOCwgMjQyLCAwLjcpKTtcXG4gIGFuaW1hdGlvbjogYmdUd2lua2xlIDMuNHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xcbn1cXG4vKiBncm91bmQ6IGNvb2wgbW9vbmxpZ2h0IHBvb2xpbmcgZmFpbnRseSBhbG9uZyB0aGUgaG9yaXpvbi4gKi9cXG4ud2VhdGhlckJnLmJnLWNsZWFyLW5pZ2h0ID4gLmJnTGF5ZXItLWdyb3VuZCB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgxNDAsIDE2MCwgMTc0LCAwLjE0KSwgcmdiYSgxNDAsIDE2MCwgMTc0LCAwKSAxMDAlKTtcXG4gIGFuaW1hdGlvbjogYmdHcm91bmQgMTRzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcXG59XFxuXFxuLyogQ0xPVURZIChhbHNvIG92ZXJjYXN0LCBwYXJ0bHksIGFuZCB0aGUgbmV1dHJhbCBmYWxsYmFjaykg4oCUIGNvb2wgZ3JleS1ibHVlIHdpdGhcXG4gICB0d28gc29mdCBjbG91ZCBtYXNzZXMgZHJpZnRpbmcgbGF0ZXJhbGx5LiAqL1xcbi53ZWF0aGVyQmcuYmctY2xvdWR5IHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMyMzMwM2YgMCUsICMxNzIyMzAgNTUlLCB2YXIoLS1ncm91bmQpIDEwMCUpO1xcbn1cXG4ud2VhdGhlckJnLmJnLWNsb3VkeTo6YmVmb3JlIHtcXG4gIHRvcDogMTQlO1xcbiAgbGVmdDogLTIwJTtcXG4gIHdpZHRoOiA1NXZtYXg7XFxuICBoZWlnaHQ6IDI0dm1heDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgY2VudGVyLCByZ2JhKDE0MCwgMTYwLCAxNzQsIDAuMiksIHJnYmEoMTQwLCAxNjAsIDE3NCwgMCkgNzAlKTtcXG4gIGFuaW1hdGlvbjogYmdDbG91ZCA0MHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xcbn1cXG4ud2VhdGhlckJnLmJnLWNsb3VkeTo6YWZ0ZXIge1xcbiAgYm90dG9tOiAxMCU7XFxuICByaWdodDogLTI0JTtcXG4gIHdpZHRoOiA2MHZtYXg7XFxuICBoZWlnaHQ6IDI2dm1heDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgY2VudGVyLCByZ2JhKDExMSwgMTMwLCAxNDgsIDAuMTYpLCByZ2JhKDExMSwgMTMwLCAxNDgsIDApIDcwJSk7XFxuICBhbmltYXRpb246IGJnQ2xvdWQgNTJzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZS1yZXZlcnNlO1xcbn1cXG4vKiBmYXI6IGEgd2lkZSwgaGVhdmlseSBibHVycmVkIGNsb3VkIGJhbmQgaGlnaCBpbiB0aGUgc2NlbmUsIGJhcmVseSBtb3ZpbmcuICovXFxuLndlYXRoZXJCZy5iZy1jbG91ZHkgPiAuYmdMYXllci0tZmFyIHtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCg4MCUgNDAlIGF0IDMwJSAyMiUsIHJnYmEoMTQwLCAxNjAsIDE3NCwgMC4xNiksIHJnYmEoMTQwLCAxNjAsIDE3NCwgMCkgNzAlKTtcXG4gIGZpbHRlcjogYmx1cigxMHB4KTtcXG4gIGFuaW1hdGlvbjogYmdDbG91ZCA3MHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlLXJldmVyc2U7XFxufVxcbi8qIG1pZDogYSBtb2RlcmF0ZSBjbG91ZCBtYXNzIGRyaWZ0aW5nIGF0IGEgbWlkZGxpbmcgcGFjZSBhbmQgYmx1ciwgc2l0dGluZ1xcbiAgIGJldHdlZW4gdGhlIGZhciBoYXplIGFuZCB0aGUgc2hhcnAgbmVhciBjbG91ZC4gKi9cXG4ud2VhdGhlckJnLmJnLWNsb3VkeSA+IC5iZ0xheWVyLS1taWQge1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KDUyJSAzMCUgYXQgNDYlIDMyJSwgcmdiYSgxNTgsIDE3NiwgMTkwLCAwLjE4KSwgcmdiYSgxNTgsIDE3NiwgMTkwLCAwKSA3MCUpO1xcbiAgZmlsdGVyOiBibHVyKDVweCk7XFxuICBhbmltYXRpb246IGJnQ2xvdWQgNDhzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcXG59XFxuLyogbmVhcjogYSBzbWFsbGVyLCBzaGFycGVyIGNsb3VkIGRyaWZ0aW5nIGZhc3RlciBhY3Jvc3MgdGhlIGZvcmVncm91bmQuICovXFxuLndlYXRoZXJCZy5iZy1jbG91ZHkgPiAuYmdMYXllci0tbmVhciB7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoMzQlIDI2JSBhdCA2MiUgNDAlLCByZ2JhKDE3NiwgMTkyLCAyMDQsIDAuMiksIHJnYmEoMTc2LCAxOTIsIDIwNCwgMCkgNjglKTtcXG4gIGZpbHRlcjogYmx1cigycHgpO1xcbiAgYW5pbWF0aW9uOiBiZ0Nsb3VkIDMwcyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XFxufVxcbi8qIGdyb3VuZDogZGltIGhvcml6b24gbGlnaHQgdW5kZXIgdGhlIG92ZXJjYXN0LiAqL1xcbi53ZWF0aGVyQmcuYmctY2xvdWR5ID4gLmJnTGF5ZXItLWdyb3VuZCB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgxNDAsIDE2MCwgMTc0LCAwLjEyKSwgcmdiYSgxNDAsIDE2MCwgMTc0LCAwKSAxMDAlKTtcXG4gIGFuaW1hdGlvbjogYmdHcm91bmQgMTZzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcXG59XFxuXFxuLyogUkFJTiAoYWxzbyBkcml6emxlLCBzaG93ZXJzLCB0aHVuZGVyKSDigJQgZGFya2VyIHNreSwgYSBoZWF2eSBkcmlmdGluZyBjbG91ZCxcXG4gICBhbmQgYSBmYWludCBkaWFnb25hbCByYWluIHNoZWVuIHNsaWRpbmcgZG93bi4gKi9cXG4ud2VhdGhlckJnLmJnLXJhaW4ge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzFjMjczNCAwJSwgIzEyMWIyNiA1NSUsIHZhcigtLWdyb3VuZCkgMTAwJSk7XFxufVxcbi53ZWF0aGVyQmcuYmctcmFpbjo6YmVmb3JlIHtcXG4gIHRvcDogLTglO1xcbiAgbGVmdDogLTE4JTtcXG4gIHdpZHRoOiA2MnZtYXg7XFxuICBoZWlnaHQ6IDMwdm1heDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgY2VudGVyLCByZ2JhKDEyMCwgMTQwLCAxNTgsIDAuMjIpLCByZ2JhKDEyMCwgMTQwLCAxNTgsIDApIDcwJSk7XFxuICBhbmltYXRpb246IGJnQ2xvdWQgNDZzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcXG59XFxuLndlYXRoZXJCZy5iZy1yYWluOjphZnRlciB7XFxuICBpbnNldDogMDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoNzRkZWcsIHJnYmEoMTYwLCAxOTAsIDIxNCwgMC4wNykgMCAxcHgsIHJnYmEoMTYwLCAxOTAsIDIxNCwgMCkgMXB4IDlweCk7XFxuICBhbmltYXRpb246IGJnUmFpbiAwLjlzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuLyogZmFyOiBhIGJyb2FkLCBibHVycmVkIHN0b3JtIGNsb3VkIGRyaWZ0aW5nIHNsb3dseSBoaWdoIG92ZXJoZWFkLiAqL1xcbi53ZWF0aGVyQmcuYmctcmFpbiA+IC5iZ0xheWVyLS1mYXIge1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KDkwJSA0NCUgYXQgNjYlIDEyJSwgcmdiYSgxMjAsIDE0MCwgMTU4LCAwLjIpLCByZ2JhKDEyMCwgMTQwLCAxNTgsIDApIDcwJSk7XFxuICBmaWx0ZXI6IGJsdXIoOXB4KTtcXG4gIGFuaW1hdGlvbjogYmdDbG91ZCA2MHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlLXJldmVyc2U7XFxufVxcbi8qIG1pZDogYSBtaWRkbGUgc2hlZXQgb2YgcmFpbiBzdHJlYWtzIGJldHdlZW4gdGhlIGJhc2UgOjphZnRlciBzaGVlbiBhbmQgdGhlXFxuICAgY29hcnNlIG5lYXIgc3RyZWFrcyDigJQgbW9kZXJhdGUgYW5nbGUsIGdhdWdlIGFuZCBzcGVlZC4gKi9cXG4ud2VhdGhlckJnLmJnLXJhaW4gPiAuYmdMYXllci0tbWlkIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoNzZkZWcsIHJnYmEoMTcwLCAxOTgsIDIyMCwgMC4wOSkgMCAxcHgsIHJnYmEoMTcwLCAxOTgsIDIyMCwgMCkgMXB4IDEycHgpO1xcbiAgYW5pbWF0aW9uOiBiZ1JhaW4gMC43MnMgbGluZWFyIGluZmluaXRlO1xcbn1cXG4vKiBuZWFyOiBjb2Fyc2VyLCBmYXN0ZXIgcmFpbiBzdHJlYWtzIGF0IGEgc3RlZXBlciBhbmdsZSBmb3IgZm9yZWdyb3VuZCBkZXB0aC4gKi9cXG4ud2VhdGhlckJnLmJnLXJhaW4gPiAuYmdMYXllci0tbmVhciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KDc4ZGVnLCByZ2JhKDE4MCwgMjA2LCAyMjYsIDAuMTEpIDAgMnB4LCByZ2JhKDE4MCwgMjA2LCAyMjYsIDApIDJweCAxNXB4KTtcXG4gIGFuaW1hdGlvbjogYmdSYWluTmVhciAwLjU1cyBsaW5lYXIgaW5maW5pdGU7XFxufVxcbi8qIGdyb3VuZDogYSB3ZXQgc2hlZW4gY2F0Y2hpbmcgdGhlIGxpZ2h0IGF0IHRoZSBib3R0b20gb2YgdGhlIHNjZW5lLiAqL1xcbi53ZWF0aGVyQmcuYmctcmFpbiA+IC5iZ0xheWVyLS1ncm91bmQge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMTIwLCAxNDAsIDE1OCwgMC4xOCksIHJnYmEoMTIwLCAxNDAsIDE1OCwgMCkgMTAwJSk7XFxuICBhbmltYXRpb246IGJnR3JvdW5kIDlzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcXG59XFxuXFxuLyogU05PVyDigJQgY29vbCBsaWdodCBza3kgd2l0aCBzbG93bHkgZHJpZnRpbmcgZmxha2VzLiAqL1xcbi53ZWF0aGVyQmcuYmctc25vdyB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMmEzOTQ5IDAlLCAjMWEyNjM0IDU1JSwgdmFyKC0tZ3JvdW5kKSAxMDAlKTtcXG59XFxuLndlYXRoZXJCZy5iZy1zbm93OjpiZWZvcmUsXFxuLndlYXRoZXJCZy5iZy1zbm93OjphZnRlciB7XFxuICBpbnNldDogMDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6XFxuICAgIHJhZGlhbC1ncmFkaWVudCgycHggMnB4IGF0IDIwJSAxMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KSwgdHJhbnNwYXJlbnQgNjAlKSxcXG4gICAgcmFkaWFsLWdyYWRpZW50KDIuNHB4IDIuNHB4IGF0IDY2JSAyMiUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSwgdHJhbnNwYXJlbnQgNjAlKSxcXG4gICAgcmFkaWFsLWdyYWRpZW50KDEuOHB4IDEuOHB4IGF0IDQwJSA0MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSksIHRyYW5zcGFyZW50IDYwJSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgycHggMnB4IGF0IDg0JSA1NCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSwgdHJhbnNwYXJlbnQgNjAlKSxcXG4gICAgcmFkaWFsLWdyYWRpZW50KDIuMnB4IDIuMnB4IGF0IDEyJSA3MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSwgdHJhbnNwYXJlbnQgNjAlKSxcXG4gICAgcmFkaWFsLWdyYWRpZW50KDEuOHB4IDEuOHB4IGF0IDU0JSA4NiUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42NSksIHRyYW5zcGFyZW50IDYwJSk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgNTAlO1xcbn1cXG4ud2VhdGhlckJnLmJnLXNub3c6OmJlZm9yZSB7XFxuICBhbmltYXRpb246IGJnU25vdyAxNHMgbGluZWFyIGluZmluaXRlO1xcbn1cXG4ud2VhdGhlckJnLmJnLXNub3c6OmFmdGVyIHtcXG4gIG9wYWNpdHk6IDAuNjtcXG4gIGFuaW1hdGlvbjogYmdTbm93IDIycyBsaW5lYXIgaW5maW5pdGU7XFxufVxcbi8qIGZhcjogdGlueSwgZmFpbnQsIGJsdXJyZWQgZmxha2VzIGZhbGxpbmcgc2xvd2x5IGluIHRoZSBkZWVwIGJhY2tncm91bmQuICovXFxuLndlYXRoZXJCZy5iZy1zbm93ID4gLmJnTGF5ZXItLWZhciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOlxcbiAgICByYWRpYWwtZ3JhZGllbnQoMXB4IDFweCBhdCAxNiUgMTIlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTUpLCB0cmFuc3BhcmVudCA2MCUpLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMS4ycHggMS4ycHggYXQgNDglIDI2JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLCB0cmFuc3BhcmVudCA2MCUpLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMXB4IDFweCBhdCA3MiUgMTglLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksIHRyYW5zcGFyZW50IDYwJSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgxLjFweCAxLjFweCBhdCAzMCUgNDQlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksIHRyYW5zcGFyZW50IDYwJSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgxcHggMXB4IGF0IDg4JSA0MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSksIHRyYW5zcGFyZW50IDYwJSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgxLjJweCAxLjJweCBhdCA2MCUgNjIlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksIHRyYW5zcGFyZW50IDYwJSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgxcHggMXB4IGF0IDIyJSA3OCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSksIHRyYW5zcGFyZW50IDYwJSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgxLjFweCAxLjFweCBhdCA3OCUgODQlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpLCB0cmFuc3BhcmVudCA2MCUpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDUwJTtcXG4gIGZpbHRlcjogYmx1cigxcHgpO1xcbiAgb3BhY2l0eTogMC43O1xcbiAgYW5pbWF0aW9uOiBiZ1Nub3cgMzBzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuLyogbWlkOiBtZWRpdW0gZmxha2VzIGF0IGEgbW9kZXJhdGUgcGFjZSBhbmQgYSBoYWlyIG9mIGJsdXIg4oCUIHRoZSBtaWRkbGUgcGxhbmVcXG4gICB0aGF0IGZpbGxzIHRoZSBnYXAgYmV0d2VlbiB0aGUgZmFpbnQgZmFyIGZpZWxkIGFuZCB0aGUgZ2xvd2luZyBuZWFyIGZsYWtlcywgc29cXG4gICBzbm93IHJlYWRzIGFzIHRocmVlIGRlcHRoIGxheWVycyByYXRoZXIgdGhhbiBhIGZvcmVncm91bmQtYW5kLWJhY2tkcm9wIHBhaXIuICovXFxuLndlYXRoZXJCZy5iZy1zbm93ID4gLmJnTGF5ZXItLW1pZCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOlxcbiAgICByYWRpYWwtZ3JhZGllbnQoMnB4IDJweCBhdCAyNCUgMTglLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpLCB0cmFuc3BhcmVudCA2MCUpLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMi4ycHggMi4ycHggYXQgNTglIDMwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpLCB0cmFuc3BhcmVudCA2MCUpLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMS45cHggMS45cHggYXQgODIlIDI0JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcyKSwgdHJhbnNwYXJlbnQgNjAlKSxcXG4gICAgcmFkaWFsLWdyYWRpZW50KDIuMXB4IDIuMXB4IGF0IDM4JSA1MiUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSwgdHJhbnNwYXJlbnQgNjAlKSxcXG4gICAgcmFkaWFsLWdyYWRpZW50KDJweCAycHggYXQgNzAlIDY2JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY4KSwgdHJhbnNwYXJlbnQgNjAlKSxcXG4gICAgcmFkaWFsLWdyYWRpZW50KDIuMnB4IDIuMnB4IGF0IDE2JSA4MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42OCksIHRyYW5zcGFyZW50IDYwJSk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgNTAlO1xcbiAgZmlsdGVyOiBibHVyKDAuNHB4KTtcXG4gIG9wYWNpdHk6IDAuODU7XFxuICBhbmltYXRpb246IGJnU25vdyAxNnMgbGluZWFyIGluZmluaXRlO1xcbn1cXG4vKiBuZWFyOiBsYXJnZSBmb3JlZ3JvdW5kIGZsYWtlcyB3aXRoIGEgc29mdCBnbG93LCBmYWxsaW5nIGZhc3QuICovXFxuLndlYXRoZXJCZy5iZy1zbm93ID4gLmJnTGF5ZXItLW5lYXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTpcXG4gICAgcmFkaWFsLWdyYWRpZW50KDMuNHB4IDMuNHB4IGF0IDI2JSAxNiUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSksIHRyYW5zcGFyZW50IDYyJSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgzcHggM3B4IGF0IDYyJSAzNCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KSwgdHJhbnNwYXJlbnQgNjIlKSxcXG4gICAgcmFkaWFsLWdyYWRpZW50KDMuNnB4IDMuNnB4IGF0IDg0JSA2MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSksIHRyYW5zcGFyZW50IDYyJSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgzLjJweCAzLjJweCBhdCAxNCUgNjglLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSksIHRyYW5zcGFyZW50IDYyJSk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgNTAlO1xcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgM3B4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSk7XFxuICBhbmltYXRpb246IGJnU25vdyA4cyBsaW5lYXIgaW5maW5pdGU7XFxufVxcbi8qIGdyb3VuZDogYSBsaXQgYmFuZCBvZiBzZXR0bGVkIHNub3cgZ2xvd2luZyBhdCB0aGUgYm90dG9tIG9mIHRoZSBzY2VuZS4gKi9cXG4ud2VhdGhlckJnLmJnLXNub3cgPiAuYmdMYXllci0tZ3JvdW5kIHtcXG4gIGhlaWdodDogMzAlO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMjM0LCAyNDAsIDI0NiwgMC4yOCksIHJnYmEoMjM0LCAyNDAsIDI0NiwgMC4wNSkgNjAlLCByZ2JhKDIzNCwgMjQwLCAyNDYsIDApIDEwMCUpO1xcbiAgYW5pbWF0aW9uOiBiZ0dyb3VuZCAxMXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xcbn1cXG5cXG4vKiBGT0cgKGFsc28gbWlzdCwgaGF6ZSkg4oCUIG11dGVkIHNreSB3aXRoIHNsb3cgaG9yaXpvbnRhbCBoYXplIGJhbmRzLiAqL1xcbi53ZWF0aGVyQmcuYmctZm9nIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMyMzJjMzUgMCUsICMxODIwMjkgNTUlLCB2YXIoLS1ncm91bmQpIDEwMCUpO1xcbn1cXG4ud2VhdGhlckJnLmJnLWZvZzo6YmVmb3JlIHtcXG4gIGluc2V0OiAwO1xcbiAgYmFja2dyb3VuZC1pbWFnZTpcXG4gICAgbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMTQwLCAxNjAsIDE3NCwgMCkgMCUsIHJnYmEoMTQwLCAxNjAsIDE3NCwgMC4xMikgMzAlLCByZ2JhKDE0MCwgMTYwLCAxNzQsIDApIDQ2JSksXFxuICAgIGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDE0MCwgMTYwLCAxNzQsIDApIDU0JSwgcmdiYSgxNDAsIDE2MCwgMTc0LCAwLjEpIDcyJSwgcmdiYSgxNDAsIDE2MCwgMTc0LCAwKSA4OCUpO1xcbiAgYW5pbWF0aW9uOiBiZ0ZvZyAyNHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xcbn1cXG4vKiBmYXI6IGEgdGhpbiwgaGlnaCBoYXplIGJhbmQgZHJpZnRpbmcgdGhlIG90aGVyIHdheSwgc2xvd2VyLiAqL1xcbi53ZWF0aGVyQmcuYmctZm9nID4gLmJnTGF5ZXItLWZhciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgxNDAsIDE2MCwgMTc0LCAwKSA4JSwgcmdiYSgxNDAsIDE2MCwgMTc0LCAwLjA4KSAyMiUsIHJnYmEoMTQwLCAxNjAsIDE3NCwgMCkgMzglKTtcXG4gIGZpbHRlcjogYmx1cigzcHgpO1xcbiAgb3BhY2l0eTogMC44O1xcbiAgYW5pbWF0aW9uOiBiZ0ZvZyAzNHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlLXJldmVyc2U7XFxufVxcbi8qIG1pZDogYSBtaWRkbGUgaGF6ZSBiYW5kIGRyaWZ0aW5nIGJldHdlZW4gdGhlIHRoaW4gZmFyIGJhbmQgYW5kIHRoZSBsb3cgbmVhclxcbiAgIG1hc3MsIG1vZGVyYXRlbHkgYmx1cnJlZC4gKi9cXG4ud2VhdGhlckJnLmJnLWZvZyA+IC5iZ0xheWVyLS1taWQge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMTUwLCAxNjgsIDE4MiwgMCkgMjQlLCByZ2JhKDE1MCwgMTY4LCAxODIsIDAuMSkgNDQlLCByZ2JhKDE1MCwgMTY4LCAxODIsIDApIDYyJSk7XFxuICBmaWx0ZXI6IGJsdXIoNXB4KTtcXG4gIG9wYWNpdHk6IDAuODU7XFxuICBhbmltYXRpb246IGJnRm9nIDI2cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XFxufVxcbi8qIG5lYXI6IGEgc29mdCwgaGVhdmlseSBibHVycmVkIGhhemUgbWFzcyBsb3cgaW4gdGhlIHNjZW5lLiAqL1xcbi53ZWF0aGVyQmcuYmctZm9nID4gLmJnTGF5ZXItLW5lYXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMTc2LCAxOTIsIDIwNCwgMC4xNCkgMCUsIHJnYmEoMTc2LCAxOTIsIDIwNCwgMC4wNikgNDAlLCByZ2JhKDE3NiwgMTkyLCAyMDQsIDApIDY4JSk7XFxuICBmaWx0ZXI6IGJsdXIoOHB4KTtcXG4gIGFuaW1hdGlvbjogYmdGb2cgMThzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcXG59XFxuLyogZ3JvdW5kOiBhIGRlbnNlIGZvZyBwb29sIHNldHRsaW5nIGFsb25nIHRoZSBib3R0b20uICovXFxuLndlYXRoZXJCZy5iZy1mb2cgPiAuYmdMYXllci0tZ3JvdW5kIHtcXG4gIGhlaWdodDogNDIlO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMTc2LCAxOTIsIDIwNCwgMC4yMiksIHJnYmEoMTc2LCAxOTIsIDIwNCwgMCkgMTAwJSk7XFxuICBhbmltYXRpb246IGJnR3JvdW5kIDE1cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XFxufVxcblxcbkBrZXlmcmFtZXMgYmdTdW4ge1xcbiAgMCUgICB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDEpOyAgICAgICAgb3BhY2l0eTogMC43OyB9XFxuICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTQlLCAzJSkgc2NhbGUoMS4xMik7ICBvcGFjaXR5OiAxOyB9XFxufVxcblxcbkBrZXlmcmFtZXMgYmdUd2lua2xlIHtcXG4gIDAlICAgeyBvcGFjaXR5OiAwLjQ7IH1cXG4gIDEwMCUgeyBvcGFjaXR5OiAxOyB9XFxufVxcblxcbkBrZXlmcmFtZXMgYmdDbG91ZCB7XFxuICAwJSAgIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9XFxuICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwJSk7IH1cXG59XFxuXFxuQGtleWZyYW1lcyBiZ1JhaW4ge1xcbiAgMCUgICB7IGJhY2tncm91bmQtcG9zaXRpb246IDAgMDsgfVxcbiAgMTAwJSB7IGJhY2tncm91bmQtcG9zaXRpb246IC05cHggMzJweDsgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJnU25vdyB7XFxuICAwJSAgIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpOyB9XFxuICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XFxufVxcblxcbkBrZXlmcmFtZXMgYmdGb2cge1xcbiAgMCUgICB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNCUpOyBvcGFjaXR5OiAwLjc7IH1cXG4gIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNCUpOyAgb3BhY2l0eTogMTsgfVxcbn1cXG5cXG4vKiBBIHN0ZWVwZXIsIGZhc3RlciBmYWxsIGZvciB0aGUgbmVhciByYWluIHBsYW5lIHNvIGl0IHJlYWRzIGFoZWFkIG9mIDo6YWZ0ZXIuICovXFxuQGtleWZyYW1lcyBiZ1JhaW5OZWFyIHtcXG4gIDAlICAgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7IH1cXG4gIDEwMCUgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTVweCA0NHB4OyB9XFxufVxcblxcbi8qIEEgZ2VudGxlIGJyZWF0aGUgZm9yIHRoZSBncm91bmQtbGlnaHRpbmcgYWNjZW50IGFjcm9zcyBldmVyeSBjYXRlZ29yeS4gKi9cXG5Aa2V5ZnJhbWVzIGJnR3JvdW5kIHtcXG4gIDAlICAgeyBvcGFjaXR5OiAwLjY1OyB9XFxuICAxMDAlIHsgb3BhY2l0eTogMTsgfVxcbn1cXG5cXG4vKiBGcm96ZW4gd2hpbGUgdGhlIHRhYiBpcyBoaWRkZW4gKHNreS5qcyB0b2dnbGVzIC5wYXVzZWQgb24gdmlzaWJpbGl0eWNoYW5nZSkuICovXFxuLndlYXRoZXJCZy5wYXVzZWQ6OmJlZm9yZSxcXG4ud2VhdGhlckJnLnBhdXNlZDo6YWZ0ZXIsXFxuLndlYXRoZXJCZy5wYXVzZWQgPiAuYmdMYXllciB7XFxuICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xcbn1cXG5cXG4vKiBIYWx0IGV2ZXJ5IHRyZWF0bWVudCdzIG1vdGlvbiB1bmRlciBhIHJlZHVjZWQtbW90aW9uIHByZWZlcmVuY2Ug4oCUIG9uZSBzdGF0aWNcXG4gICBmcmFtZSBwZXIgY2F0ZWdvcnkuICovXFxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcXG4gIC53ZWF0aGVyQmc6OmJlZm9yZSxcXG4gIC53ZWF0aGVyQmc6OmFmdGVyLFxcbiAgLndlYXRoZXJCZyA+IC5iZ0xheWVyIHtcXG4gICAgYW5pbWF0aW9uOiBub25lO1xcbiAgfVxcbn1cXG5cXG4vKiBUaGUgcmliYm9uIGFuZCBpdHMgcmVhZG91dCBzaGFyZSBvbmUgZmxleCBjb2x1bW4gc28gYSBtb2JpbGUgbG9jYXRpb24gcm90YXRpb25cXG4gICBzbGlkZXMgdGhlbSBhcyBhIHNpbmdsZSB1bml0LiBJdCBjYXJyaWVzIHRoZSBzYW1lIDI4cHggZ2FwICNhcHAgdXNlZCB0byBwdXRcXG4gICBiZXR3ZWVuIHRoZSByaWJib24gYW5kIHRoZSByZWFkb3V0LCBzbyB3cmFwcGluZyB0aGVtIGlzIGxheW91dC10cmFuc3BhcmVudC4gKi9cXG4jd2VhdGhlckNhcmQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiBzdGFja3MgYWJvdmUgdGhlIC53ZWF0aGVyQmcgZHJpZnQgbGF5ZXIgKi9cXG4gIHotaW5kZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjhweDtcXG59XFxuXFxuLyogUmliYm9uOiB0aGUgU1ZHIHNjYWxlcyB0byB0aGUgY29sdW1uIHdpZHRoIHZpYSB0aGUgdmlld0JveCwgc28gYWxsIDcyIGhvdXJzXFxuICAgYXJlIG9uIHNjcmVlbiBhdCBhbnkgd2lkdGggZG93biB0byAzODBweCB3aXRob3V0IHNjcm9sbCBvciBwYW4uICovXFxuI3JpYmJvbldyYXAge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNyaWJib25Tdmcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4ucmliYm9uLWN1cnZlIHtcXG4gIHN0cm9rZS13aWR0aDogMi41O1xcbiAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xcbiAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDtcXG59XFxuXFxuLyogRGF5IGJvdW5kYXJ5IGhhaXJsaW5lcyBhdCBob3VycyAyNCBhbmQgNDguICovXFxuLnJpYmJvbi1oYWlybGluZSB7XFxuICBzdHJva2U6IHZhcigtLXJ1bGUpO1xcbiAgc3Ryb2tlLXdpZHRoOiAxO1xcbn1cXG5cXG4ucmliYm9uLXRpY2sge1xcbiAgZmlsbDogdmFyKC0tbXV0ZWQpO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1vbm8pO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG59XFxuXFxuLnJpYmJvbi1ub3dsaW5lIHtcXG4gIHN0cm9rZTogdmFyKC0tbXV0ZWQpO1xcbiAgc3Ryb2tlLXdpZHRoOiAxO1xcbiAgc3Ryb2tlLWRhc2hhcnJheTogMiAzO1xcbiAgb3BhY2l0eTogMC43O1xcbn1cXG5cXG4ucmliYm9uLWRvdCB7XFxuICBzdHJva2U6IHZhcigtLWdyb3VuZCk7XFxuICBzdHJva2Utd2lkdGg6IDI7XFxufVxcblxcbi8qIFJlYWRvdXQgYmVuZWF0aCB0aGUgY3VydmUuICovXFxuI3JlYWRvdXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA0cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi8qIExvY2F0aW9uIG5hbWUgcGFpcmVkIHdpdGggdGhlIEMvRiB1bml0IHN3aXRjaCBvbiBvbmUgY2VudGVyZWQgcm93LiAqL1xcbiNsb2NhdGlvblJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4jbG9jYXRpb25OYW1lIHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tb25vKTtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcXG59XFxuXFxuLyogU2VnbWVudGVkIEMvRiB0b2dnbGU6IGEgY29tcGFjdCBwaWxsLCB0aGUgYWN0aXZlIG9wdGlvbiBmaWxsZWQgd2l0aCB0aGUgcnVsZVxcbiAgIGNvbG91ci4gRGlzcGxheS1vbmx5IOKAlCBmbGlwcyB0aGUgdGVtcGVyYXR1cmUgcmVhZG91dHMgYmV0d2VlbiDCsEMgYW5kIMKwRi4gKi9cXG4jdW5pdFN3aXRjaCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcnVsZSk7XFxuICBib3JkZXItcmFkaXVzOiA5OTlweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi51bml0T3B0IHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tb25vKTtcXG4gIGZvbnQtc2l6ZTogMTFweDtcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICBwYWRkaW5nOiAzcHggOXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udW5pdE9wdC5hY3RpdmUge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcnVsZSk7XFxuICBjb2xvcjogdmFyKC0tdGV4dCk7XFxufVxcblxcbi8qIFNhdmVkLWxvY2F0aW9uIG5hdmlnYXRpb246IHByZXYvbmV4dCBjaGV2cm9ucyBmbGFua2luZyB0aGUgZG90IHJvdy4gVGhlIHdob2xlXFxuICAgcm93IGlzIGhpZGRlbiBhdCBhIGNvdW50IG9mIG9uZSAoYSBzaW5nbGUgbG9jYXRpb24gbmVlZHMgbm8gYWZmb3JkYW5jZSk7IHRoZVxcbiAgIGFycm93cyBhcmUgZGVza3RvcC1vbmx5IGFuZCBkcm9wIG91dCBhdCDiiaQ0ODBweCB3aGVyZSBzd2lwZSB0YWtlcyBvdmVyLiAqL1xcbi5uYXZSb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIG1hcmdpbjogNHB4IDAgMnB4O1xcbn1cXG5cXG4ubmF2Um93LmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uYXJyb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFycm93OmhvdmVyIHtcXG4gIGNvbG9yOiAjRUFFRUYyO1xcbn1cXG5cXG4uYXJyb3cgc3ZnIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDE0cHg7XFxufVxcblxcbi8qIFNhdmVkLWxvY2F0aW9uIGRvdHM6IG9uZSBwZXIgc2F2ZWQgbG9jYXRpb24sIHRoZSBhY3RpdmUgb25lIGZpbGxlZC4gKi9cXG4jZG90Um93IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgLyogb2Zmc2V0IHBhcmVudCBmb3IgdGhlIGRlc2t0b3AgcmVtb3ZlIHBvcG92ZXIgKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDhweDtcXG59XFxuXFxuLmRvdCB7XFxuICB3aWR0aDogOHB4O1xcbiAgaGVpZ2h0OiA4cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kOiAjMkUzQjQ1O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XFxufVxcblxcbi5kb3QuYWN0aXZlIHtcXG4gIGJhY2tncm91bmQ6ICNFQUVFRjI7XFxufVxcblxcbi8qIERlc2t0b3AgcmVtb3ZlLWNvbmZpcm1hdGlvbiBwb3BvdmVyLCBhbmNob3JlZCBhYm92ZSB0aGUgbG9uZy1wcmVzc2VkIGRvdC5cXG4gICBUb3VjaCBrZWVwcyB0aGUgbmF0aXZlIGNvbmZpcm07IHRoaXMgaXMgdGhlIG1vdXNlL3BlbiBwYXRoLiAqL1xcbi5yZW1vdmVQb3BvdmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogY2FsYygxMDAlICsgMTBweCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICB6LWluZGV4OiAyMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogOHB4O1xcbiAgcGFkZGluZzogMTBweCAxMnB4O1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JvdW5kKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXJ1bGUpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYm94LXNoYWRvdzogMCA2cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuNDUpO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLyogRG93bndhcmQgcG9pbnRlciBhcnJvdywgYm9yZGVyZWQ6IG91dGVyIHRyaWFuZ2xlIGluIHRoZSBydWxlIGNvbG91ciB3aXRoIGFuXFxuICAgaW5uZXIgZ3JvdW5kLWZpbGxlZCB0cmlhbmdsZSBsYWlkIGEgcGl4ZWwgaGlnaGVyIG9uIHRvcCBvZiBpdC4gKi9cXG4ucmVtb3ZlUG9wb3Zlcjo6YmVmb3JlLFxcbi5yZW1vdmVQb3BvdmVyOjphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAwO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG59XFxuXFxuLnJlbW92ZVBvcG92ZXI6OmJlZm9yZSB7XFxuICB0b3A6IDEwMCU7XFxuICBib3JkZXItd2lkdGg6IDdweCA3cHggMCA3cHg7XFxuICBib3JkZXItY29sb3I6IHZhcigtLXJ1bGUpIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4ucmVtb3ZlUG9wb3Zlcjo6YWZ0ZXIge1xcbiAgdG9wOiBjYWxjKDEwMCUgLSAxcHgpO1xcbiAgYm9yZGVyLXdpZHRoOiA2cHggNnB4IDAgNnB4O1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ncm91bmQpIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4ucmVtb3ZlUG9wb3Zlci1uYW1lIHtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG59XFxuXFxuLnJlbW92ZVBvcG92ZXItYWN0aW9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA4cHg7XFxufVxcblxcbi5yZW1vdmVQb3BvdmVyLWNhbmNlbCxcXG4ucmVtb3ZlUG9wb3Zlci1kZWxldGUge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBwYWRkaW5nOiA1cHggMTJweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXJ1bGUpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucmVtb3ZlUG9wb3Zlci1jYW5jZWwge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XFxufVxcblxcbi5yZW1vdmVQb3BvdmVyLWNhbmNlbDpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tdGV4dCk7XFxufVxcblxcbi5yZW1vdmVQb3BvdmVyLWRlbGV0ZSB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS10ZXh0KTtcXG4gIGNvbG9yOiB2YXIoLS1ncm91bmQpO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS10ZXh0KTtcXG59XFxuXFxuLnJlbW92ZVBvcG92ZXItZGVsZXRlOmhvdmVyIHtcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjkyKTtcXG59XFxuXFxuLyogUm9ib3RvIExpZ2h0IDQwcHggZm9yIHRoZSByZWFkaW5nLiAqL1xcbiNjdXJyZW50VGVtcCB7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuMTtcXG59XFxuXFxuI2N1cnJlbnRDb25kaXRpb24ge1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgY29sb3I6IHZhcigtLXRleHQpO1xcbn1cXG5cXG4vKiBGb3VyLXVwIHN0YXQgcm93OiB0ZXh0IGxhYmVscywgbm8gaWNvbnMuICovXFxuI3N0YXRSb3cge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICBnYXA6IDEwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi10b3A6IDE0cHg7XFxufVxcblxcbi5zdGF0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNHB4O1xcbiAgcGFkZGluZzogMTJweCA2cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ydWxlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLnN0YXQtbGFiZWwge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1vbm8pO1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XFxufVxcblxcbi5zdGF0LXZhbHVlIHtcXG4gIGZvbnQtc2l6ZTogMTdweDtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcXG59XFxuXFxuLyogU2VhcmNoIGZvcm0uICovXFxuI3NlYXJjaEZvcm0ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiBzdGFja3MgYWJvdmUgdGhlIC53ZWF0aGVyQmcgZHJpZnQgbGF5ZXIgKi9cXG4gIHotaW5kZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi8qIEhvbGRzIHRoZSBpbnB1dCBhbmQgaXRzIGF1dG9jb21wbGV0ZSBkcm9wZG93bjsgcG9zaXRpb246IHJlbGF0aXZlIGFuY2hvcnNcXG4gICAjc3VnZ2VzdGlvbnMgYmVuZWF0aCB0aGUgaW5wdXQuIGZsZXg6IDEgc28gdGhlIHBhaXIgZmlsbHMgdGhlIHJvdyB0aGUgd2F5IHRoZVxcbiAgIGJhcmUgaW5wdXQgdXNlZCB0by4gKi9cXG4jc2VhcmNoSW5wdXRXcmFwIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGZsZXg6IDE7XFxuICBtaW4td2lkdGg6IDA7XFxufVxcblxcbiNzZWFyY2hJbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDEycHggMTRweDtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tb25vKTtcXG4gIGZvbnQtc2l6ZTogMTZweDsgLyogMTZweCBzbyBpT1MgU2FmYXJpIGRvZXNuJ3QgYXV0by16b29tIHRoZSBpbnB1dCBvbiBmb2N1cyAqL1xcbiAgY29sb3I6IHZhcigtLXRleHQpO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ydWxlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuI3NlYXJjaElucHV0OjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xcbn1cXG5cXG4jc2VhcmNoSW5wdXQ6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tbXV0ZWQpO1xcbn1cXG5cXG4vKiBXaGlsZSB0aGUgZHJvcGRvd24gaXMgb3BlbiB0aGUgaW5wdXQncyBib3R0b20gY29ybmVycyBzcXVhcmUgb2ZmIGFuZCBpdHNcXG4gICBib3R0b20gZWRnZSBkcm9wcyBvdXQsIHNvIGl0IHJlYWRzIGFzIG9uZSBhdHRhY2hlZCBzdXJmYWNlIHdpdGggI3N1Z2dlc3Rpb25zLiAqL1xcbiNzZWFyY2hGb3JtLnN1Z2dlc3RpbmcgI3NlYXJjaElucHV0IHtcXG4gIGJvcmRlci1yYWRpdXM6IDhweCA4cHggMCAwO1xcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi8qIEZhaWxlZCBsb29rdXA6IHJlZGRlbmVkIGJvcmRlciwgY3VycmVudCByaWJib24gbGVmdCBpbiBwbGFjZS4gKi9cXG4jc2VhcmNoRm9ybS5pbnZhbGlkICNzZWFyY2hJbnB1dCB7XFxuICBib3JkZXItY29sb3I6ICNDMjQ1MkQ7XFxufVxcblxcbi8qIEF1dG9jb21wbGV0ZSBkcm9wZG93bjogaGFuZ3Mgb2ZmIHRoZSBib3R0b20gb2YgdGhlIGlucHV0LCBtYXRjaGluZyBpdHMgd2lkdGhcXG4gICBhbmQgY29udGludWluZyBpdHMgZm9jdXNlZCBib3JkZXIgaW50byBhIGJvdHRvbS1yb3VuZGVkIHBhbmVsLiAqL1xcbiNzdWdnZXN0aW9ucyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEwMCU7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB6LWluZGV4OiAxMDtcXG4gIG1heC1oZWlnaHQ6IDI0MHB4O1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIGJhY2tncm91bmQ6IHZhcigtLWdyb3VuZCk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1tdXRlZCk7XFxuICBib3JkZXItdG9wOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMCAwIDhweCA4cHg7XFxufVxcblxcbiNzdWdnZXN0aW9ucy5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnN1Z2dlc3Rpb24taXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcbiAgZ2FwOiA4cHg7XFxuICBwYWRkaW5nOiAxMHB4IDE0cHg7XFxuICBmb250LWZhbWlseTogdmFyKC0tbW9ubyk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zdWdnZXN0aW9uLWl0ZW06aG92ZXIsXFxuLnN1Z2dlc3Rpb24taXRlbS5zZWxlY3RlZCB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ydWxlKTtcXG59XFxuXFxuLnN1Z2dlc3Rpb24tY2l0eSB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjb2xvcjogdmFyKC0tdGV4dCk7XFxufVxcblxcbi5zdWdnZXN0aW9uLWNvdW50cnkge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcXG59XFxuXFxuI3NlYXJjaEJ1dHRvbiB7XFxuICBwYWRkaW5nOiAxMnB4IDIwcHg7XFxuICBmb250LWZhbWlseTogdmFyKC0tbW9ubyk7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgY29sb3I6IHZhcigtLWdyb3VuZCk7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS10ZXh0KTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3NlYXJjaEJ1dHRvbjpob3ZlciB7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45Mik7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xcbiAgI2FwcCB7XFxuICAgIGdhcDogMjJweDtcXG4gICAgcGFkZGluZzogMjRweCAxNnB4O1xcbiAgfVxcblxcbiAgI3dlYXRoZXJDYXJkIHtcXG4gICAgZ2FwOiAyMnB4O1xcbiAgfVxcblxcbiAgLyogU3dpcGUtZGlyZWN0aW9uLWF3YXJlIHNsaWRlIG9uIGEgY29tbWl0dGVkIGxvY2F0aW9uIHJvdGF0aW9uLiBmYXZvdXJpdGVzLmpzXFxuICAgICBhZGRzIC5zbGlkZS1uZXh0IChzd2lwZSBsZWZ0IC0+IG5leHQpIG9yIC5zbGlkZS1wcmV2IChzd2lwZSByaWdodCAtPiBwcmV2KVxcbiAgICAgdG8gI3dlYXRoZXJDYXJkLCB0aGVuIHJvdGF0ZXMuIFRoZSBjYXJkIGZhZGVzIHRvIG5vdGhpbmcgYXQgdGhlIGtleWZyYW1lJ3NcXG4gICAgIG1pZHBvaW50LCB3aGljaCBtYXNrcyB0aGUgZm9yZWNhc3Qgc3dhcDogcmVuZGVyUmliYm9uKCkgcmVidWlsZHMgaW50byB0aGlzXFxuICAgICBzYW1lIGNhcmQgd2hpbGUgaXQncyBpbnZpc2libGUsIHNvIHRoZSBuZXcgY3VydmUgc2xpZGVzIGluIHJhdGhlciB0aGFuXFxuICAgICBzbmFwcGluZy4gRGVza3RvcCByb3RhdGVzIHZpYSB0aGUgYXJyb3dzIGFuZCBuZXZlciBnZXRzIHRoZSBjbGFzcy4gKi9cXG4gICN3ZWF0aGVyQ2FyZC5zbGlkZS1uZXh0IHtcXG4gICAgYW5pbWF0aW9uOiBjYXJkU2xpZGVOZXh0IDI4MG1zIGVhc2Utb3V0O1xcbiAgfVxcblxcbiAgI3dlYXRoZXJDYXJkLnNsaWRlLXByZXYge1xcbiAgICBhbmltYXRpb246IGNhcmRTbGlkZVByZXYgMjgwbXMgZWFzZS1vdXQ7XFxuICB9XFxuXFxuICBAa2V5ZnJhbWVzIGNhcmRTbGlkZU5leHQge1xcbiAgICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgb3BhY2l0eTogMTsgfVxcbiAgICA0MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTQycHgpOyBvcGFjaXR5OiAwOyB9XFxuICAgIDYwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0MnB4KTsgb3BhY2l0eTogMDsgfVxcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyBvcGFjaXR5OiAxOyB9XFxuICB9XFxuXFxuICBAa2V5ZnJhbWVzIGNhcmRTbGlkZVByZXYge1xcbiAgICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgb3BhY2l0eTogMTsgfVxcbiAgICA0MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNDJweCk7IG9wYWNpdHk6IDA7IH1cXG4gICAgNjAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC00MnB4KTsgb3BhY2l0eTogMDsgfVxcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyBvcGFjaXR5OiAxOyB9XFxuICB9XFxuXFxuICAvKiBNb2JpbGUgbmF2aWdhdGVzIGJ5IHN3aXBlOyBkcm9wIHRoZSBhcnJvd3MgYnV0IGtlZXAgdGhlIGRvdHMuICovXFxuICAuYXJyb3cge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgI3N0YXRSb3cge1xcbiAgICBnYXA6IDhweDtcXG4gIH1cXG5cXG4gIC5zdGF0IHtcXG4gICAgcGFkZGluZzogMTBweCA0cHg7XFxuICB9XFxuXFxuICAuc3RhdC12YWx1ZSB7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gIH1cXG59XFxuXFxuLyogUmVzcGVjdCBhIHJlZHVjZWQtbW90aW9uIHByZWZlcmVuY2U6IHJvdGF0ZSBpbnN0YW50bHksIG5vIHNsaWRlLiBmYXZvdXJpdGVzLmpzXFxuICAgc3RpbGwgYWRkcyB0aGUgY2xhc3MsIGJ1dCB3aXRoIHRoZSBhbmltYXRpb24gc3VwcHJlc3NlZCBhbmltYXRpb25lbmQgbmV2ZXJcXG4gICBmaXJlcywgc28gaXRzIHNldFRpbWVvdXQgZmFsbGJhY2sgaXMgd2hhdCBzdHJpcHMgdGhlIGNsYXNzIGJhY2sgb2ZmLiAqL1xcbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XFxuICAjd2VhdGhlckNhcmQuc2xpZGUtbmV4dCxcXG4gICN3ZWF0aGVyQ2FyZC5zbGlkZS1wcmV2IHtcXG4gICAgYW5pbWF0aW9uOiBub25lO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIGZhdm91cml0ZXMuanMg4oCUIHNhdmVkIGxvY2F0aW9ucyB3aXRoIHN3aXBlLXRvLXJvdGF0ZS5cbi8vXG4vLyBUaGUgc2VhcmNoIGZvcm0gaXMgdGhlIGFkZCBwYXRoOiBhIHN1Y2Nlc3NmdWwgbG9va3VwIGFwcGVuZHMgdGhlIHF1ZXJ5IHRvIGFcbi8vIHBlcnNpc3RlZCBsaXN0IGFuZCBzd2l0Y2hlcyB0byBpdDsgYSBmYWlsZWQgb25lIGxlYXZlcyB0aGUgbGlzdCB1bnRvdWNoZWRcbi8vIChsb2dpYy5qcydzIGludmFsaWRJbnB1dCgpIGhhcyBhbHJlYWR5IHJlZGRlbmVkIHRoZSBpbnB1dCkuIEEgcm93IG9mIGRvdHNcbi8vIHVuZGVyIHRoZSBsb2NhdGlvbiBuYW1lIHNob3dzIGhvdyBtYW55IGxvY2F0aW9ucyBhcmUgc2F2ZWQgYW5kIHdoaWNoIGlzXG4vLyBjdXJyZW50LiBBIGhvcml6b250YWwgc3dpcGUgYW55d2hlcmUgb24gdGhlIHNjcmVlbiByb3RhdGVzIHRocm91Z2ggdGhlbVxuLy8gKHdyYXBwaW5nIGF0IGJvdGggZW5kcyksIGFzIGRvIHRoZSBkZXNrdG9wIHByZXYvbmV4dCBhcnJvd3M7IGNsaWNraW5nIGEgZG90XG4vLyBvcGVucyBhIGNvbmZpcm1hdGlvbiB0byByZW1vdmUgdGhhdCBsb2NhdGlvbi5cbi8vXG4vLyBTdGF0ZSBwZXJzaXN0cyB0byBsb2NhbFN0b3JhZ2UgdW5kZXIgYSBgd2VhdGhlcmFwcF9gIGtleSwgbWF0Y2hpbmcgdGhlXG4vLyBjb252ZW50aW9uIHVzZWQgYWNyb3NzIHRoZSBvdGhlciByZXBvcyDigJQgbm8gSW5kZXhlZERCLCBubyBjb29raWVzLCBubyBiYWNrZW5kLFxuLy8gbm8gbmV3IGRlcGVuZGVuY2llcy4gRmV0Y2ggc3RyYXRlZ3kgaXMgbGF6eSAoZmV0Y2ggb24gYXJyaXZhbCk6IGEgc3dpcGUgbGVhdmVzXG4vLyB0aGUgcHJldmlvdXMgcmliYm9uIG9uIHNjcmVlbiB1bnRpbCB0aGUgbmV3IGZvcmVjYXN0IHJlc29sdmVzLCByZXVzaW5nIHRoZVxuLy8gc2FtZSBrZWVwLWN1cnJlbnQtcmliYm9uIGJlaGF2aW91ciBhIHNlYXJjaCBhbHJlYWR5IGhhcywgc28gYSBzd2lwZSBuZXZlclxuLy8gbGFuZHMgb24gYSBzcGlubmVyICh0aGVyZSBpcyBubyBzcGlubmVyKSBvciBhIGJsYW5rIHNjcmVlbi5cbi8vXG4vLyBFdmVyeSBsaXN0ZW5lciBoZXJlIGlzIHdpcmVkIGV4YWN0bHkgb25jZSwgZnJvbSBpbml0RmF2b3VyaXRlcygpIGF0IGJvb3RzdHJhcFxuLy8g4oCUIG5ldmVyIGZyb20gdGhlIHJlbmRlciBwYXRoIOKAlCBzbyBub3RoaW5nIG11bHRpcGxpZXMgYWNyb3NzIGZldGNoZXMuXG5cbmltcG9ydCB7IGZvcmVjYXN0TG9naWMgfSBmcm9tICcuL2xvZ2ljLmpzJztcblxuY29uc3QgS0VZID0gJ3dlYXRoZXJhcHBfc2F2ZWRMb2NhdGlvbnMnO1xuY29uc3QgREVGQVVMVF9RVUVSWSA9ICc5ODA1Mic7XG5jb25zdCBTV0lQRV9USFJFU0hPTEQgPSA1MDsgLy8gcHggb2YgaG9yaXpvbnRhbCB0cmF2ZWwgdG8gY29tbWl0IGEgcm90YXRpb25cbmNvbnN0IFNMSURFX01TID0gMjgwOyAvLyBjYXJkIHNsaWRlIGR1cmF0aW9uIOKAlCBtaXJyb3Igb2YgdGhlIENTUyBrZXlmcmFtZVxuXG4vLyBTYXZlZCBsb2NhdGlvbiBxdWVyeSBzdHJpbmdzLCBpbiBvcmRlci4gY3VycmVudEluZGV4IHBvaW50cyBhdCB0aGUgYWN0aXZlIG9uZS5cbmxldCBsb2NhdGlvbnMgPSBbXTtcbmxldCBjdXJyZW50SW5kZXggPSAwO1xuXG5sZXQgZG90Um93OyAvLyAjZG90Um93LCBjYWNoZWQgb25jZSBieSBpbml0RmF2b3VyaXRlcygpXG5sZXQgbmF2Um93OyAvLyAubmF2Um93IHdyYXBwaW5nIHRoZSBkb3RzIGFuZCB0aGUgcHJldi9uZXh0IGFycm93c1xubGV0IGNhcmQ7IC8vICN3ZWF0aGVyQ2FyZCDigJQgdGhlIHJpYmJvbityZWFkb3V0IHVuaXQgdGhhdCBzbGlkZXMgb24gcm90YXRpb25cbmxldCBzbGlkZVRpbWVvdXQgPSBudWxsO1xuXG4vLyBTd2lwZSB0cmFja2luZy5cbmxldCB0b3VjaFN0YXJ0WCA9IG51bGw7XG5sZXQgdG91Y2hTdGFydFkgPSBudWxsO1xubGV0IHN3aXBlQWN0aXZlID0gZmFsc2U7XG5cbi8vIFRoZSBzaW5nbGUgZGVza3RvcCByZW1vdmUtY29uZmlybWF0aW9uIHBvcG92ZXIsIG9yIG51bGwuIE9ubHkgb25lIGlzIG9wZW4gYXRcbi8vIGEgdGltZTsgYSBuZXcgb3BlbiBjbG9zZXMgYW55IHByaW9yIG9uZSBmaXJzdC5cbmxldCBvcGVuUG9wb3ZlciA9IG51bGw7XG5cbmZ1bmN0aW9uIGxvYWQoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmF3ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oS0VZKTtcbiAgICBpZiAocmF3KSB7XG4gICAgICBjb25zdCBwYXJzZWQgPSBKU09OLnBhcnNlKHJhdyk7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShwYXJzZWQpKSB7XG4gICAgICAgIGxvY2F0aW9ucyA9IHBhcnNlZC5maWx0ZXIoKHEpID0+IHR5cGVvZiBxID09PSAnc3RyaW5nJyAmJiBxLnRyaW0oKS5sZW5ndGgpO1xuICAgICAgfVxuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIGxvY2F0aW9ucyA9IFtdO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNhdmUoKSB7XG4gIHRyeSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oS0VZLCBKU09OLnN0cmluZ2lmeShsb2NhdGlvbnMpKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIFN0b3JhZ2UgZGlzYWJsZWQvZnVsbCDigJQgdGhlIGluLW1lbW9yeSBsaXN0IHN0aWxsIHdvcmtzIGZvciB0aGlzIHNlc3Npb24uXG4gIH1cbn1cblxuZnVuY3Rpb24gY2xlYXIobm9kZSkge1xuICB3aGlsZSAobm9kZS5maXJzdENoaWxkKSB7IG5vZGUucmVtb3ZlQ2hpbGQobm9kZS5maXJzdENoaWxkKTsgfVxufVxuXG4vLyBGZXRjaCB0aGUgYWN0aXZlIGxvY2F0aW9uLCBvciB0aGUgaGFyZCBkZWZhdWx0IHdoZW4gdGhlIGxpc3QgaXMgZW1wdHkuIExhenk6XG4vLyB0aGUgcmVuZGVyIHBhdGgga2VlcHMgdGhlIHByZXZpb3VzIHJpYmJvbiB1bnRpbCB0aGlzIHJlc29sdmVzLlxuZnVuY3Rpb24gc2hvd0N1cnJlbnQoKSB7XG4gIGlmIChsb2NhdGlvbnMubGVuZ3RoKSB7XG4gICAgZm9yZWNhc3RMb2dpYy5mdXR1cmVBUElDYWxscyhsb2NhdGlvbnNbY3VycmVudEluZGV4XSk7XG4gIH0gZWxzZSB7XG4gICAgZm9yZWNhc3RMb2dpYy5mdXR1cmVBUElDYWxscyhERUZBVUxUX1FVRVJZKTtcbiAgfVxufVxuXG4vLyBSZWRyYXcgdGhlIGRvdCByb3cuIEhpZGRlbiBhdCBhIGNvdW50IG9mIG9uZSAoYSBzaW5nbGUgbG9jYXRpb24gbmVlZHMgbm9cbi8vIGFmZm9yZGFuY2UpIGFuZCB3aGVuIGVtcHR5ICh0aGUgZGVmYXVsdCBmYWxsYmFjayBpcyBub3QgYSBzYXZlZCBsb2NhdGlvbikuXG5mdW5jdGlvbiByZW5kZXJEb3RzKCkge1xuICBpZiAoIWRvdFJvdykgeyByZXR1cm47IH1cbiAgY2xvc2VQb3BvdmVyKCk7IC8vIGEgcmVkcmF3IGRyb3BzIHRoZSBkb3QgdGhlIHBvcG92ZXIgd2FzIGFuY2hvcmVkIHRvXG4gIGNsZWFyKGRvdFJvdyk7XG5cbiAgLy8gR2F0ZSB0aGUgd2hvbGUgLm5hdlJvdyAoZG90cyArIGFycm93cykgdG9nZXRoZXIsIHNvIHRoZSBkZXNrdG9wIGFycm93cyBzaGFyZVxuICAvLyB0aGUgZG90cycgdmlzaWJpbGl0eSBydWxlIGFuZCBuZXZlciBkYW5nbGUgYmVzaWRlIGFuIGVtcHR5IHJvdy5cbiAgY29uc3QgZ2F0ZSA9IG5hdlJvdyB8fCBkb3RSb3c7XG4gIGNvbnN0IG4gPSBsb2NhdGlvbnMubGVuZ3RoO1xuICBpZiAobiA8PSAxKSB7XG4gICAgZ2F0ZS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICByZXR1cm47XG4gIH1cbiAgZ2F0ZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgIGNvbnN0IGRvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRvdC5jbGFzc05hbWUgPSAnZG90JyArIChpID09PSBjdXJyZW50SW5kZXggPyAnIGFjdGl2ZScgOiAnJyk7XG4gICAgZG90LnNldEF0dHJpYnV0ZSgncm9sZScsICdidXR0b24nKTtcbiAgICBkb3Quc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgbG9jYXRpb25zW2ldKTtcbiAgICB3aXJlRG90KGRvdCwgaSk7XG4gICAgZG90Um93LmFwcGVuZENoaWxkKGRvdCk7XG4gIH1cbn1cblxuLy8gQSBzaW5nbGUgY2xpY2sgb24gYSBkb3Qgb3BlbnMgdGhlIGRlbGV0ZSBjb25maXJtYXRpb24gZm9yIHRoYXQgbG9jYXRpb246XG4vLyB0aGUgbmF0aXZlIGNvbmZpcm0gb24gdG91Y2gsIHRoZSBhbmNob3JlZCBpbi1wYWdlIHBvcG92ZXIgb24gZGVza3RvcC9tb3VzZVxuLy8gKGNvbmZpcm1SZW1vdmUgYnJhbmNoZXMgb24gcG9pbnRlclR5cGUpLiBUYXAtdG8tc2VsZWN0IGlzIGludGVudGlvbmFsbHlcbi8vIGRyb3BwZWQg4oCUIHJvdGF0ZSgpLCBkcml2ZW4gYnkgdGhlIHN3aXBlIGdlc3R1cmUgYW5kIHRoZSBkZXNrdG9wIHByZXYvbmV4dFxuLy8gYXJyb3dzLCBpcyB0aGUgb25seSB3YXkgdG8gY2hhbmdlIHRoZSBhY3RpdmUgbG9jYXRpb24uIFRoZSBjbGljayBldmVudCBpcyBhXG4vLyBQb2ludGVyRXZlbnQsIHNvIGl0cyBwb2ludGVyVHlwZSBwaWNrcyB0aGUgdG91Y2ggdnMgZGVza3RvcCBicmFuY2ggZGlyZWN0bHkuXG5mdW5jdGlvbiB3aXJlRG90KGRvdCwgaSkge1xuICBkb3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNvbmZpcm1SZW1vdmUoaSwgZG90LCBlLnBvaW50ZXJUeXBlIHx8ICdtb3VzZScpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY29uZmlybVJlbW92ZShpLCBkb3QsIHBvaW50ZXJUeXBlKSB7XG4gIGlmIChpIDwgMCB8fCBpID49IGxvY2F0aW9ucy5sZW5ndGgpIHsgcmV0dXJuOyB9XG4gIC8vIERlc2t0b3AgKG1vdXNlL3BlbikgZ2V0cyB0aGUgYW5jaG9yZWQgaW4tcGFnZSBwb3BvdmVyOyB0b3VjaCBrZWVwcyB0aGVcbiAgLy8gbmF0aXZlIGNvbmZpcm0gdW50b3VjaGVkLlxuICBpZiAocG9pbnRlclR5cGUgJiYgcG9pbnRlclR5cGUgIT09ICd0b3VjaCcgJiYgZG90KSB7XG4gICAgb3BlblJlbW92ZVBvcG92ZXIoaSwgZG90KTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHdpbmRvdy5jb25maXJtKCdSZW1vdmUgJyArIGxvY2F0aW9uc1tpXSArICc/JykpIHtcbiAgICByZW1vdmVMb2NhdGlvbihpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBvblBvcG92ZXJLZXlkb3duKGUpIHtcbiAgaWYgKGUua2V5ID09PSAnRXNjYXBlJykge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjbG9zZVBvcG92ZXIoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBvbk91dHNpZGVQb2ludGVyKGUpIHtcbiAgaWYgKG9wZW5Qb3BvdmVyICYmICFvcGVuUG9wb3Zlci5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICBjbG9zZVBvcG92ZXIoKTtcbiAgfVxufVxuXG4vLyBUZWFyIGRvd24gdGhlIHNpbmdsZSBvcGVuIHBvcG92ZXIgYW5kIGl0cyBkb2N1bWVudC1sZXZlbCBsaXN0ZW5lcnMuIFNhZmUgdG9cbi8vIGNhbGwgd2hlbiBub3RoaW5nIGlzIG9wZW4uXG5mdW5jdGlvbiBjbG9zZVBvcG92ZXIoKSB7XG4gIGlmICghb3BlblBvcG92ZXIpIHsgcmV0dXJuOyB9XG4gIG9wZW5Qb3BvdmVyLnJlbW92ZSgpO1xuICBvcGVuUG9wb3ZlciA9IG51bGw7XG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvblBvcG92ZXJLZXlkb3duLCB0cnVlKTtcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCBvbk91dHNpZGVQb2ludGVyLCB0cnVlKTtcbn1cblxuLy8gQSBzbWFsbCBjb25maXJtYXRpb24gcG9wb3ZlciBhbmNob3JlZCBhYm92ZSB0aGUgY2xpY2tlZCBkb3QsIGluc2lkZVxuLy8gI2RvdFJvdy4gRGVsZXRlIHJlbW92ZXMgdGhlIGxvY2F0aW9uOyBDYW5jZWwsIEVzY2FwZSwgb3IgYW4gb3V0c2lkZSBjbGlja1xuLy8gZGlzbWlzc2VzIHdpdGhvdXQgY2hhbmdlcy4gT25seSBvbmUgaXMgZXZlciBvcGVuIChvcGVuUmVtb3ZlUG9wb3ZlciBjbG9zZXMgYW55XG4vLyBwcmlvciBvbmUgZmlyc3QpLlxuZnVuY3Rpb24gb3BlblJlbW92ZVBvcG92ZXIoaSwgZG90KSB7XG4gIGNsb3NlUG9wb3ZlcigpO1xuXG4gIGNvbnN0IHBvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwb3AuY2xhc3NOYW1lID0gJ3JlbW92ZVBvcG92ZXInO1xuICBwb3Auc2V0QXR0cmlidXRlKCdyb2xlJywgJ2RpYWxvZycpO1xuICBwb3Auc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgJ1JlbW92ZSAnICsgbG9jYXRpb25zW2ldKTtcblxuICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5hbWUuY2xhc3NOYW1lID0gJ3JlbW92ZVBvcG92ZXItbmFtZSc7XG4gIG5hbWUudGV4dENvbnRlbnQgPSBsb2NhdGlvbnNbaV07XG5cbiAgY29uc3QgYWN0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBhY3Rpb25zLmNsYXNzTmFtZSA9ICdyZW1vdmVQb3BvdmVyLWFjdGlvbnMnO1xuXG4gIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjYW5jZWxCdG4udHlwZSA9ICdidXR0b24nO1xuICBjYW5jZWxCdG4uY2xhc3NOYW1lID0gJ3JlbW92ZVBvcG92ZXItY2FuY2VsJztcbiAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG4gIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlUG9wb3Zlcik7XG5cbiAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGRlbGV0ZUJ0bi50eXBlID0gJ2J1dHRvbic7XG4gIGRlbGV0ZUJ0bi5jbGFzc05hbWUgPSAncmVtb3ZlUG9wb3Zlci1kZWxldGUnO1xuICBkZWxldGVCdG4udGV4dENvbnRlbnQgPSAnRGVsZXRlJztcbiAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGlkeCA9IGk7XG4gICAgY2xvc2VQb3BvdmVyKCk7XG4gICAgcmVtb3ZlTG9jYXRpb24oaWR4KTtcbiAgfSk7XG5cbiAgYWN0aW9ucy5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xuICBhY3Rpb25zLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG4gIHBvcC5hcHBlbmRDaGlsZChuYW1lKTtcbiAgcG9wLmFwcGVuZENoaWxkKGFjdGlvbnMpO1xuXG4gIGRvdFJvdy5hcHBlbmRDaGlsZChwb3ApO1xuICBvcGVuUG9wb3ZlciA9IHBvcDtcblxuICAvLyBBbmNob3IgaG9yaXpvbnRhbGx5IG92ZXIgdGhlIHRyaWdnZXJpbmcgZG90J3MgY2VudHJlIChvZmZzZXRMZWZ0IGlzIHJlbGF0aXZlXG4gIC8vIHRvICNkb3RSb3csIHdoaWNoIGlzIHRoZSBvZmZzZXQgcGFyZW50IOKAlCBzZWUgaXRzIHBvc2l0aW9uOiByZWxhdGl2ZSBydWxlKS5cbiAgcG9wLnN0eWxlLmxlZnQgPSAoZG90Lm9mZnNldExlZnQgKyBkb3Qub2Zmc2V0V2lkdGggLyAyKSArICdweCc7XG5cbiAgLy8gVGhlIGNsaWNrIChhbmQgaXRzIHBvaW50ZXJkb3duKSB0aGF0IG9wZW5lZCB0aGlzIHBvcG92ZXIgaGFzIGFscmVhZHkgZmlyZWQsXG4gIC8vIHNvIGEgY2FwdHVyZSBsaXN0ZW5lciBmb3IgdGhlIG5leHQgcG9pbnRlcmRvd24gY2xvc2VzIHRoZSBwb3BvdmVyIG9uIGFuXG4gIC8vIG91dHNpZGUgY2xpY2sgd2l0aG91dCBpbW1lZGlhdGVseSBzd2FsbG93aW5nIGl0cyBvd24gb3BlbmluZyBldmVudC5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uUG9wb3ZlcktleWRvd24sIHRydWUpO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIG9uT3V0c2lkZVBvaW50ZXIsIHRydWUpO1xufVxuXG4vLyBTbGlkZSB0aGUgcmliYm9uK3JlYWRvdXQgY2FyZCBpbiB0aGUgc3dpcGUgZGlyZWN0aW9uIG9uIGEgY29tbWl0dGVkIHJvdGF0aW9uLlxuLy8gTW9iaWxlIG9ubHkg4oCUIHRoZSBkZXNrdG9wIHByZXYvbmV4dCBhcnJvd3MgdXBkYXRlIGluc3RhbnRseSwgc28gdGhlIGNsYXNzIGlzXG4vLyBhZGRlZCBvbmx5IHdoZW4gdGhlIOKJpDQ4MHB4IGJyZWFrcG9pbnQgaXMgYWN0aXZlLiBUaGUga2V5ZnJhbWUgZmFkZXMgdGhlIGNhcmRcbi8vIHRvIG5vdGhpbmcgYXQgaXRzIG1pZHBvaW50IChzZWUgI3dlYXRoZXJDYXJkLnNsaWRlLSogaW4gc3R5bGUuY3NzKSwgd2hpY2hcbi8vIG1hc2tzIHRoZSBmb3JlY2FzdCBzd2FwOiBzaG93Q3VycmVudCgpJ3MgZmV0Y2ggcmVzb2x2ZXMgYW5kIHJlbmRlclJpYmJvbigpXG4vLyByZWJ1aWxkcyBpbnRvIHRoaXMgc2FtZSBjYXJkLCBzbyB0aGUgbmV3IGN1cnZlIHNsaWRlcyBiYWNrIGluIHJhdGhlciB0aGFuXG4vLyBzbmFwcGluZy4gRGlyZWN0aW9uLWF3YXJlOiBvdXRnb2luZyBjb250ZW50IGxlYXZlcyB0b3dhcmQgdGhlIHN3aXBlLCBpbmNvbWluZ1xuLy8gZW50ZXJzIGZyb20gdGhlIG9wcG9zaXRlIGVkZ2UuXG5mdW5jdGlvbiBwbGF5U2xpZGUoZGlyKSB7XG4gIGlmICghY2FyZCkgeyByZXR1cm47IH1cbiAgaWYgKCF3aW5kb3cubWF0Y2hNZWRpYSB8fCAhd2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDQ4MHB4KScpLm1hdGNoZXMpIHtcbiAgICByZXR1cm47IC8vIGRlc2t0b3Agcm90YXRlcyB2aWEgdGhlIGFycm93cywgd2l0aG91dCB0aGUgc2xpZGVcbiAgfVxuICBjYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ3NsaWRlLW5leHQnLCAnc2xpZGUtcHJldicpO1xuICB2b2lkIGNhcmQub2Zmc2V0V2lkdGg7IC8vIHJlZmxvdyBzbyBhIHJhcGlkIHNlY29uZCBzd2lwZSByZXN0YXJ0cyB0aGUgYW5pbWF0aW9uXG4gIGNhcmQuY2xhc3NMaXN0LmFkZChkaXIgPCAwID8gJ3NsaWRlLXByZXYnIDogJ3NsaWRlLW5leHQnKTtcblxuICAvLyBvbkNhcmRBbmltRW5kIHN0cmlwcyB0aGUgY2xhc3Mgd2hlbiB0aGUga2V5ZnJhbWUgZmluaXNoZXM7IHRoaXMgaXMgdGhlXG4gIC8vIGZhbGxiYWNrIGZvciB0aGUgcmVkdWNlZC1tb3Rpb24gcGF0aCwgd2hlcmUgdGhlIGFuaW1hdGlvbiBpcyBzdXBwcmVzc2VkIGFuZFxuICAvLyBhbmltYXRpb25lbmQgbmV2ZXIgZmlyZXMuXG4gIGlmIChzbGlkZVRpbWVvdXQpIHsgY2xlYXJUaW1lb3V0KHNsaWRlVGltZW91dCk7IH1cbiAgc2xpZGVUaW1lb3V0ID0gc2V0VGltZW91dChjbGVhclNsaWRlLCBTTElERV9NUyArIDgwKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJTbGlkZSgpIHtcbiAgaWYgKHNsaWRlVGltZW91dCkgeyBjbGVhclRpbWVvdXQoc2xpZGVUaW1lb3V0KTsgc2xpZGVUaW1lb3V0ID0gbnVsbDsgfVxuICBpZiAoY2FyZCkgeyBjYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ3NsaWRlLW5leHQnLCAnc2xpZGUtcHJldicpOyB9XG59XG5cbmZ1bmN0aW9uIG9uQ2FyZEFuaW1FbmQoZSkge1xuICBpZiAoZS50YXJnZXQgIT09IGNhcmQpIHsgcmV0dXJuOyB9IC8vIGlnbm9yZSBhbnkgYnViYmxlZCBkZXNjZW5kYW50IGFuaW1hdGlvblxuICBjbGVhclNsaWRlKCk7XG59XG5cbi8vIFJvdGF0ZSB0aHJvdWdoIHRoZSBzYXZlZCBsaXN0IHdpdGggd3JhcC4gTm8tb3AgYmVsb3cgdHdvIGxvY2F0aW9ucy4gVGhlIHNsaWRlXG4vLyBjbGFzcyBnb2VzIG9uIGJlZm9yZSB0aGUgcmVkcmF3L2ZldGNoIHNvIHRoZSBvdXRnb2luZyBjb250ZW50IGlzIGFscmVhZHlcbi8vIG1vdmluZyBhcyB0aGUgbmV3IGZvcmVjYXN0IGlzIHJlcXVlc3RlZCAocGxheVNsaWRlIGlzIGEgbm8tb3Agb2ZmIG1vYmlsZSkuXG5mdW5jdGlvbiByb3RhdGUoZGlyKSB7XG4gIGNvbnN0IG4gPSBsb2NhdGlvbnMubGVuZ3RoO1xuICBpZiAobiA8PSAxKSB7IHJldHVybjsgfVxuICBjdXJyZW50SW5kZXggPSAoY3VycmVudEluZGV4ICsgZGlyICsgbikgJSBuO1xuICBwbGF5U2xpZGUoZGlyKTtcbiAgcmVuZGVyRG90cygpO1xuICBzaG93Q3VycmVudCgpO1xufVxuXG4vLyBSZW1vdmUgYSBsb2NhdGlvbiwga2VlcGluZyBhIGNvaGVyZW50IGFjdGl2ZSBzZWxlY3Rpb246IHJlbW92aW5nIHRoZSBhY3RpdmVcbi8vIG9uZSBtb3ZlcyB0byBhIG5laWdoYm91ciByYXRoZXIgdGhhbiBsZWF2aW5nIGFuIGVtcHR5IHZpZXc7IGVtcHR5aW5nIHRoZSBsaXN0XG4vLyBmYWxscyBiYWNrIHRvIHRoZSBkZWZhdWx0LlxuZnVuY3Rpb24gcmVtb3ZlTG9jYXRpb24oaSkge1xuICBpZiAoaSA8IDAgfHwgaSA+PSBsb2NhdGlvbnMubGVuZ3RoKSB7IHJldHVybjsgfVxuICBjb25zdCB3YXNBY3RpdmUgPSAoaSA9PT0gY3VycmVudEluZGV4KTtcblxuICBsb2NhdGlvbnMuc3BsaWNlKGksIDEpO1xuICBzYXZlKCk7XG5cbiAgaWYgKGxvY2F0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICBjdXJyZW50SW5kZXggPSAwO1xuICAgIHJlbmRlckRvdHMoKTtcbiAgICBzaG93Q3VycmVudCgpOyAvLyBmYWxscyBiYWNrIHRvIERFRkFVTFRfUVVFUllcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaSA8IGN1cnJlbnRJbmRleCkge1xuICAgIGN1cnJlbnRJbmRleC0tO1xuICB9IGVsc2UgaWYgKGkgPT09IGN1cnJlbnRJbmRleCAmJiBjdXJyZW50SW5kZXggPj0gbG9jYXRpb25zLmxlbmd0aCkge1xuICAgIGN1cnJlbnRJbmRleCA9IGxvY2F0aW9ucy5sZW5ndGggLSAxO1xuICB9XG5cbiAgcmVuZGVyRG90cygpO1xuICBpZiAod2FzQWN0aXZlKSB7IHNob3dDdXJyZW50KCk7IH1cbn1cblxuZnVuY3Rpb24gb25Ub3VjaFN0YXJ0KGUpIHtcbiAgaWYgKGUudG91Y2hlcy5sZW5ndGggIT09IDEpIHsgc3dpcGVBY3RpdmUgPSBmYWxzZTsgcmV0dXJuOyB9XG4gIC8vIExlYXZlIHRoZSBzZWFyY2ggZmllbGQncyBvd24gdG91Y2ggaGFuZGxpbmcgKGN1cnNvciBwbGFjZW1lbnQpIGFsb25lLlxuICBpZiAoZS50YXJnZXQgJiYgZS50YXJnZXQuY2xvc2VzdCAmJiBlLnRhcmdldC5jbG9zZXN0KCcjc2VhcmNoRm9ybScpKSB7XG4gICAgc3dpcGVBY3RpdmUgPSBmYWxzZTtcbiAgICByZXR1cm47XG4gIH1cbiAgdG91Y2hTdGFydFggPSBlLnRvdWNoZXNbMF0uY2xpZW50WDtcbiAgdG91Y2hTdGFydFkgPSBlLnRvdWNoZXNbMF0uY2xpZW50WTtcbiAgc3dpcGVBY3RpdmUgPSB0cnVlO1xufVxuXG5mdW5jdGlvbiBvblRvdWNoRW5kKGUpIHtcbiAgaWYgKCFzd2lwZUFjdGl2ZSkgeyByZXR1cm47IH1cbiAgc3dpcGVBY3RpdmUgPSBmYWxzZTtcblxuICBjb25zdCB0ID0gZS5jaGFuZ2VkVG91Y2hlcyAmJiBlLmNoYW5nZWRUb3VjaGVzWzBdO1xuICBpZiAoIXQpIHsgcmV0dXJuOyB9XG5cbiAgY29uc3QgZHggPSB0LmNsaWVudFggLSB0b3VjaFN0YXJ0WDtcbiAgY29uc3QgZHkgPSB0LmNsaWVudFkgLSB0b3VjaFN0YXJ0WTtcblxuICAvLyBDb21taXQgb25seSBvbiBhIGRlY2lzaXZlbHkgaG9yaXpvbnRhbCBnZXN0dXJlLCBzbyBhIHZlcnRpY2FsIHBhZ2Ugc2Nyb2xsXG4gIC8vICh8ZHl8ID49IHxkeHwpIGlzIG5ldmVyIGhpamFja2VkLlxuICBpZiAoTWF0aC5hYnMoZHgpID4gU1dJUEVfVEhSRVNIT0xEICYmIE1hdGguYWJzKGR4KSA+IE1hdGguYWJzKGR5KSkge1xuICAgIHJvdGF0ZShkeCA8IDAgPyAxIDogLTEpOyAvLyBzd2lwZSBsZWZ0IC0+IG5leHQsIHN3aXBlIHJpZ2h0IC0+IHByZXZpb3VzXG4gIH1cbn1cblxuZnVuY3Rpb24gd2lyZUdlc3R1cmVzKCkge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgb25Ub3VjaFN0YXJ0LCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgb25Ub3VjaEVuZCwgeyBwYXNzaXZlOiB0cnVlIH0pO1xufVxuXG4vLyBEZXNrdG9wIHByZXYvbmV4dCBhcnJvd3MgZHJpdmUgdGhlIHNhbWUgcm90YXRlKCkgdGhlIHN3aXBlIGdlc3R1cmUgZG9lcywgc29cbi8vIGJvdGggcGF0aHMgc2hhcmUgb25lIGNvdW50ZXIuIFdpcmVkIG9uY2UgZnJvbSBpbml0RmF2b3VyaXRlcygpLlxuZnVuY3Rpb24gd2lyZUFycm93cygpIHtcbiAgY29uc3QgcHJldiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZQcmV2Jyk7XG4gIGNvbnN0IG5leHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2TmV4dCcpO1xuICBpZiAocHJldikgeyBwcmV2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcm90YXRlKC0xKSk7IH1cbiAgaWYgKG5leHQpIHsgbmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHJvdGF0ZSgxKSk7IH1cbn1cblxuLy8gQXBwZW5kIGEgc3VjY2Vzc2Z1bGx5IGxvb2tlZC11cCBsb2NhdGlvbiBhbmQgc3dpdGNoIHRvIGl0LiBDYWxsZWQgZnJvbSB0aGVcbi8vIHNlYXJjaCBzdWJtaXQgaGFuZGxlciBBRlRFUiB0aGUgZmV0Y2ggcmVzb2x2ZXMsIHNvIHRoZSBmb3JlY2FzdCBpcyBhbHJlYWR5XG4vLyByZW5kZXJlZCDigJQgdGhpcyBvbmx5IHVwZGF0ZXMgdGhlIHNhdmVkIGxpc3QgYW5kIHRoZSBkb3RzLCBuZXZlciByZS1mZXRjaGVzLlxuLy8gQSBkdXBsaWNhdGUgcXVlcnkgc3dpdGNoZXMgdG8gdGhlIGV4aXN0aW5nIGVudHJ5IGluc3RlYWQgb2YgYWRkaW5nIGEgc2Vjb25kLlxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2F0aW9uKHF1ZXJ5KSB7XG4gIGNvbnN0IHEgPSBTdHJpbmcocXVlcnkpLnRyaW0oKTtcbiAgaWYgKCFxKSB7IHJldHVybjsgfVxuXG4gIGNvbnN0IGV4aXN0aW5nID0gbG9jYXRpb25zLmluZGV4T2YocSk7XG4gIGlmIChleGlzdGluZyAhPT0gLTEpIHtcbiAgICBjdXJyZW50SW5kZXggPSBleGlzdGluZztcbiAgfSBlbHNlIHtcbiAgICBsb2NhdGlvbnMucHVzaChxKTtcbiAgICBjdXJyZW50SW5kZXggPSBsb2NhdGlvbnMubGVuZ3RoIC0gMTtcbiAgICBzYXZlKCk7XG4gIH1cbiAgcmVuZGVyRG90cygpO1xufVxuXG4vLyBCb290c3RyYXA6IGxvYWQgdGhlIHNhdmVkIGxpc3QsIHdpcmUgdGhlIHN3aXBlIGdlc3R1cmVzIG9uY2UsIGRyYXcgdGhlIGRvdHMsXG4vLyBhbmQgZmlyZSB0aGUgc2luZ2xlIGluaXRpYWwgZmV0Y2ggKHRoZSBmaXJzdCBzYXZlZCBsb2NhdGlvbiwgb3IgdGhlIGRlZmF1bHRcbi8vIHdoZW4gbm9uZSBhcmUgc2F2ZWQpLiBpbmRleC5qcyBjYWxscyB0aGlzIG9uY2UsIGFmdGVyIHRoZSBET00gaXMgYXBwZW5kZWQuXG5leHBvcnQgZnVuY3Rpb24gaW5pdEZhdm91cml0ZXMoKSB7XG4gIGxvYWQoKTtcbiAgZG90Um93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RvdFJvdycpO1xuICBuYXZSb3cgPSBkb3RSb3cgPyBkb3RSb3cucGFyZW50RWxlbWVudCA6IG51bGw7XG4gIGNhcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VhdGhlckNhcmQnKTtcbiAgaWYgKGNhcmQpIHsgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBvbkNhcmRBbmltRW5kKTsgfVxuICB3aXJlR2VzdHVyZXMoKTtcbiAgd2lyZUFycm93cygpO1xuICBjdXJyZW50SW5kZXggPSAwO1xuICByZW5kZXJEb3RzKCk7XG4gIHNob3dDdXJyZW50KCk7XG59XG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IHJlbmRlclJpYmJvbiwgY3VycmVudEhvdXJJbmRleCB9IGZyb20gJy4vcmliYm9uLmpzJztcbmltcG9ydCB7IGZvcmVjYXN0TG9naWMgfSBmcm9tICcuL2xvZ2ljLmpzJztcbmltcG9ydCB7IGFkZExvY2F0aW9uIH0gZnJvbSAnLi9mYXZvdXJpdGVzLmpzJztcbmltcG9ydCB7IHNldFdlYXRoZXJCZyB9IGZyb20gJy4vc2t5LmpzJztcblxuLy8gR3VhcmQgc28gd2lyZUV2ZW50cygpIG9ubHkgZXZlciByZWdpc3RlcnMgb25lIHNldCBvZiBsaXN0ZW5lcnMuIFRoZSBvbGRcbi8vIGNoYW5nZVdlYXRoZXJJbmZvKCkgcmUtcmVnaXN0ZXJlZCBvbiBldmVyeSBmZXRjaCwgZG91YmxpbmcgdGhlIGhhbmRsZXIgY291bnRcbi8vIHBlciBzZWFyY2g7IHRoZSByZW5kZXIgcGF0aCAocmVuZGVyRm9yZWNhc3QpIGFuZCB0aGUgd2lyaW5nIHBhdGggKHdpcmVFdmVudHMpXG4vLyBhcmUgc3BsaXQgcHJlY2lzZWx5IHNvIHRoYXQgY2FuIG5ldmVyIGhhcHBlbiBhZ2Fpbi5cbmxldCBldmVudHNXaXJlZCA9IGZhbHNlO1xuXG4vLyBEZWJvdW5jZSB3aW5kb3cgZm9yIHRoZSBjaXR5LXN1Z2dlc3Rpb24gbG9va3VwIOKAlCBsb25nIGVub3VnaCB0aGF0IGEgcnVuIG9mXG4vLyBrZXlzdHJva2VzIGZpcmVzIG9uZSByZXF1ZXN0LCBzaG9ydCBlbm91Z2ggdG8gZmVlbCBsaXZlLlxuY29uc3QgU1VHR0VTVF9ERUJPVU5DRV9NUyA9IDMwMDtcblxuLy8gQy9GIGRpc3BsYXkgdW5pdCwgcGVyc2lzdGVkIHVuZGVyIHRoZSBzaGFyZWQgd2VhdGhlcmFwcF8gbG9jYWxTdG9yYWdlIHByZWZpeC5cbi8vIFRoaXMgaXMgZGlzcGxheS1vbmx5OiByZW5kZXJSaWJib24oKSBzdGlsbCByZWNlaXZlcyByYXcgQ2Vsc2l1cywgc28gdGhlIGN1cnZlXG4vLyBjb2xvdXJzICh0ZW1wQ29sb3VyKSBhbmQgdGhlIHktc2NhbGUgbmV2ZXIgc2hpZnQgd2hlbiB0aGUgcmVhZG91dCB1bml0IGZsaXBzLlxuY29uc3QgVU5JVF9LRVkgPSAnd2VhdGhlcmFwcF91bml0JztcbmxldCBjdXJyZW50VW5pdCA9IGxvYWRVbml0KCk7XG5cbi8vIFRoZSBsYXN0IHJlbmRlcmVkIFwibm93XCIsIGtlcHQgaW4gQ2Vsc2l1cyBzbyB0aGUgdW5pdCB0b2dnbGUgY2FuIHJlLXJlbmRlciB0aGVcbi8vIHRlbXBlcmF0dXJlIHJlYWRvdXRzIHdpdGhvdXQgd2FpdGluZyBmb3IgYW5vdGhlciBmZXRjaC5cbmxldCBsYXN0Tm93ID0gbnVsbDtcblxuLy8gQ2FjaGVkIERPTSByZWZlcmVuY2VzLCBwb3B1bGF0ZWQgb25jZSBieSBjYWNoZURvbSgpIGFmdGVyIGluZGV4LmpzIGhhcyBidWlsdFxuLy8gYW5kIGFwcGVuZGVkIHRoZSBET00uXG5sZXQgc2VhcmNoRm9ybSwgc2VhcmNoSW5wdXQsIHN1Z2dlc3Rpb25zLCBsb2NhdGlvbk5hbWUsIHVuaXRTd2l0Y2gsIGN1cnJlbnRUZW1wLFxuICBjdXJyZW50Q29uZGl0aW9uLCBmZWVsc1ZhbCwgaHVtaWRpdHlWYWwsIHJhaW5WYWwsIHdpbmRWYWw7XG5cbi8vIEF1dG9jb21wbGV0ZSBzdGF0ZS4gY3VycmVudFN1Z2dlc3Rpb25zIGhvbGRzIHRoZSByZXN1bHRzIGJhY2tpbmcgdGhlIHZpc2libGVcbi8vIGRyb3Bkb3duOyBzZWxlY3RlZEluZGV4IGlzIHRoZSBrZXlib2FyZC1oaWdobGlnaHRlZCByb3cgKC0xID0gbm9uZSkuIHJlcXVlc3RTZXFcbi8vIGRpc2NhcmRzIHN0YWxlIGFzeW5jIHJlc3VsdHMg4oCUIG9ubHkgdGhlIGxhdGVzdCBsb29rdXAgcmVuZGVycyDigJQgYW5kIGlzIGJ1bXBlZFxuLy8gb24gY2xvc2Ugc28gYW4gaW4tZmxpZ2h0IHJlcXVlc3QgY2FuJ3QgcmVvcGVuIHRoZSBkcm9wZG93biBhZnRlciBzZWxlY3Rpb24uXG5sZXQgY3VycmVudFN1Z2dlc3Rpb25zID0gW107XG5sZXQgc2VsZWN0ZWRJbmRleCA9IC0xO1xubGV0IHN1Z2dlc3REZWJvdW5jZSA9IG51bGw7XG5sZXQgcmVxdWVzdFNlcSA9IDA7XG5cbmZ1bmN0aW9uIGNhY2hlRG9tKCkge1xuICBpZiAobG9jYXRpb25OYW1lKSB7IHJldHVybjsgfSAvLyBhbHJlYWR5IGNhY2hlZFxuXG4gIHNlYXJjaEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoRm9ybScpO1xuICBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hJbnB1dCcpO1xuICBzdWdnZXN0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWdnZXN0aW9ucycpO1xuICBsb2NhdGlvbk5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9jYXRpb25OYW1lJyk7XG4gIHVuaXRTd2l0Y2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW5pdFN3aXRjaCcpO1xuICBjdXJyZW50VGVtcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50VGVtcCcpO1xuICBjdXJyZW50Q29uZGl0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnRDb25kaXRpb24nKTtcbiAgZmVlbHNWYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmVlbHNWYWwnKTtcbiAgaHVtaWRpdHlWYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHVtaWRpdHlWYWwnKTtcbiAgcmFpblZhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYWluVmFsJyk7XG4gIHdpbmRWYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2luZFZhbCcpO1xufVxuXG4vLyBQdXJlIHJlbmRlciBwYXRoLiBmdWxmaWxsUHJvbWlzZSgpIGluIGxvZ2ljLmpzIGNhbGxzIHRoaXMgb24gZXZlcnkgcmVzb2x2ZWRcbi8vIHJlc3BvbnNlOyBpdCByZWdpc3RlcnMgTk8gbGlzdGVuZXJzLCBzbyBpdCBpcyBzYWZlIHRvIGNhbGwgcmVwZWF0ZWRseS4gRHJhd3Ncbi8vIHRoZSByaWJib24gYW5kIGZpbGxzIHRoZSByZWFkb3V0IGZyb20gdGhlIHNhbWUgXCJub3dcIiBpbmRleCwgc28gdGhlIG1hcmtlciBvblxuLy8gdGhlIGN1cnZlIGFuZCB0aGUgc3RhdCByb3cgY2FuIG5ldmVyIGRpc2FncmVlIGFib3V0IHRoZSBjdXJyZW50IGhvdXIuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyRm9yZWNhc3QoZm9yZWNhc3QpIHtcbiAgY2FjaGVEb20oKTtcblxuICByZW5kZXJSaWJib24oZm9yZWNhc3QpO1xuXG4gIGNvbnN0IGkgPSBjdXJyZW50SG91ckluZGV4KGZvcmVjYXN0KTtcbiAgY29uc3Qgbm93ID0gZm9yZWNhc3QuaG91cnNbaV07XG4gIGlmICghbm93KSB7IHJldHVybjsgfVxuXG4gIGxhc3ROb3cgPSBub3c7XG4gIGxvY2F0aW9uTmFtZS50ZXh0Q29udGVudCA9IGZvcmVjYXN0LmxvY2F0aW9uLm5hbWU7XG4gIGN1cnJlbnRDb25kaXRpb24udGV4dENvbnRlbnQgPSBub3cuY29uZGl0aW9uO1xuXG4gIC8vIFJlcGFpbnQgdGhlIGZ1bGwtdmlld3BvcnQgYmFja2dyb3VuZCB0byBtYXRjaCB0aGUgY3VycmVudCBjb25kaXRpb24uIE9mZiB0aGVcbiAgLy8gY3VydmUncyBkYXRhIHBhdGgg4oCUIGl0IG9ubHkgc3dhcHMgYSBjbGFzcywgYW5kIG5vLW9wcyB3aGVuIHRoZSBjYXRlZ29yeSBpc1xuICAvLyB1bmNoYW5nZWQsIHNvIHBhZ2luZyBsb2NhdGlvbnMgb3IgZmxpcHBpbmcgdGhlIHVuaXQgZG9lc24ndCByZXN0YXJ0IGl0LlxuICBzZXRXZWF0aGVyQmcobm93LmNvbmRpdGlvbik7XG5cbiAgaHVtaWRpdHlWYWwudGV4dENvbnRlbnQgPSBub3cuaHVtaWRpdHkgKyAnJSc7XG4gIHJhaW5WYWwudGV4dENvbnRlbnQgPSBub3cucmFpbiArICclJztcbiAgd2luZFZhbC50ZXh0Q29udGVudCA9IE1hdGgucm91bmQobm93LndpbmQpICsgJyBrbS9oJztcblxuICAvLyBUZW1wZXJhdHVyZSByZWFkb3V0cyBhbmQgdGhlIGFjdGl2ZSBidXR0b24gc3RhdGUgYm90aCBjb21lIGZyb20gcmVuZGVyVGVtcHMsXG4gIC8vIHNvIGEgZmV0Y2ggYW5kIGEgdW5pdCB0b2dnbGUgY2FuIG5ldmVyIGZvcm1hdCB0aGUgdHdvIHRlbXBlcmF0dXJlcyBkaWZmZXJlbnRseS5cbiAgcmVuZGVyVGVtcHMoKTtcbn1cblxuLy8gUmVhZCB0aGUgcGVyc2lzdGVkIHVuaXQsIGRlZmF1bHRpbmcgdG8gQ2Vsc2l1cy4gR3VhcmRlZCBzbyBhIGxvY2tlZC1kb3duXG4vLyBsb2NhbFN0b3JhZ2UgKHByaXZhdGUgbW9kZSwgZGlzYWJsZWQgc3RvcmFnZSkgZmFsbHMgYmFjayByYXRoZXIgdGhhbiB0aHJvd2luZy5cbmZ1bmN0aW9uIGxvYWRVbml0KCkge1xuICB0cnkge1xuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShVTklUX0tFWSkgPT09ICdGJyA/ICdGJyA6ICdDJztcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiAnQyc7XG4gIH1cbn1cblxuLy8gRm9ybWF0IGEgQ2Vsc2l1cyBzY2FsYXIgaW4gdGhlIGFjdGl2ZSBkaXNwbGF5IHVuaXQg4oCUIHJvdW5kZWQsIHdpdGggdGhlIG1hdGNoaW5nXG4vLyDCsEMvwrBGIHN1ZmZpeC4gQ29udmVyc2lvbiBpcyBkaXNwbGF5LW9ubHk7IGNhbGxlcnMgYWx3YXlzIHBhc3MgcmF3IENlbHNpdXMuXG5mdW5jdGlvbiBmb3JtYXRUZW1wKGNlbHNpdXMpIHtcbiAgY29uc3QgdmFsdWUgPSBjdXJyZW50VW5pdCA9PT0gJ0YnID8gY2Vsc2l1cyAqIDkgLyA1ICsgMzIgOiBjZWxzaXVzO1xuICByZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSkgKyAnwrAnICsgY3VycmVudFVuaXQ7XG59XG5cbi8vIFJlLXJlbmRlciB0aGUgdHdvIHRlbXBlcmF0dXJlIHJlYWRvdXRzIGZyb20gdGhlIGNhY2hlZCBDZWxzaXVzIFwibm93XCIgYW5kIHN5bmNcbi8vIHRoZSBhY3RpdmUgc3RhdGUgb24gdGhlIEMvRiBidXR0b25zLiBDYWxsZWQgb24gZXZlcnkgZmV0Y2ggYW5kIGV2ZXJ5IHRvZ2dsZS5cbmZ1bmN0aW9uIHJlbmRlclRlbXBzKCkge1xuICBpZiAodW5pdFN3aXRjaCkge1xuICAgIGNvbnN0IG9wdHMgPSB1bml0U3dpdGNoLnF1ZXJ5U2VsZWN0b3JBbGwoJy51bml0T3B0Jyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBvcHRzW2ldLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScsIG9wdHNbaV0uZGF0YXNldC51bml0ID09PSBjdXJyZW50VW5pdCk7XG4gICAgfVxuICB9XG4gIGlmICghbGFzdE5vdykgeyByZXR1cm47IH1cbiAgY3VycmVudFRlbXAudGV4dENvbnRlbnQgPSBmb3JtYXRUZW1wKGxhc3ROb3cudGVtcCk7XG4gIGZlZWxzVmFsLnRleHRDb250ZW50ID0gZm9ybWF0VGVtcChsYXN0Tm93LmZlZWxzTGlrZSk7XG59XG5cbi8vIFN3aXRjaCB0aGUgZGlzcGxheSB1bml0LCBwZXJzaXN0IGl0LCBhbmQgcmUtcmVuZGVyIOKAlCBubyByZWZldGNoLCB0aGUgc3RvcmVkXG4vLyBDZWxzaXVzIGlzIGNvbnZlcnRlZCBpbiBwbGFjZS5cbmZ1bmN0aW9uIHNldFVuaXQodW5pdCkge1xuICBjdXJyZW50VW5pdCA9IHVuaXQgPT09ICdGJyA/ICdGJyA6ICdDJztcbiAgdHJ5IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShVTklUX0tFWSwgY3VycmVudFVuaXQpO1xuICB9IGNhdGNoIChlKSB7IC8qIHN0b3JhZ2UgdW5hdmFpbGFibGUg4oCUIHRoZSBpbi1tZW1vcnkgdW5pdCBzdGlsbCBhcHBsaWVzICovIH1cbiAgcmVuZGVyVGVtcHMoKTtcbn1cblxuLy8gUmVnaXN0ZXJzIGxpc3RlbmVycyBFWEFDVExZIE9OQ0UgZm9yIHRoZSBsaWZlIG9mIHRoZSBwYWdlLiBpbmRleC5qcyBjYWxscyB0aGlzXG4vLyBhdCBib290c3RyYXAsIGFmdGVyIHRoZSBET00gaXMgYXBwZW5kZWQg4oCUIG5ldmVyIGZyb20gdGhlIHJlbmRlciBwYXRoIOKAlCBzbyBhXG4vLyBzZWFyY2ggZmlyZXMgZXhhY3RseSBvbmUgZmV0Y2ggYW5kIGV2ZXJ5IGVsZW1lbnQgY2FycmllcyBleGFjdGx5IG9uZSBsaXN0ZW5lci5cbmV4cG9ydCBmdW5jdGlvbiB3aXJlRXZlbnRzKCkge1xuICBpZiAoZXZlbnRzV2lyZWQpIHsgcmV0dXJuOyB9XG5cbiAgY2FjaGVEb20oKTtcbiAgZXZlbnRzV2lyZWQgPSB0cnVlO1xuXG4gIC8vIFRoZSBidXR0b24gaXMgYSByZWFsIHN1Ym1pdCBidXR0b24sIHNvIHRoaXMgY2F0Y2hlcyBib3RoIHRoZSBjbGljayBhbmQgdGhlXG4gIC8vIEVudGVyIGtleSBhcyBvbmUgc3VibWl0IGV2ZW50LiBwcmV2ZW50RGVmYXVsdCBzdG9wcyB0aGUgZm9ybSByZWxvYWRpbmcgdGhlXG4gIC8vIHBhZ2U7IGZ1dHVyZUFQSUNhbGxzIGRvZXMgdGhlIHNpbmdsZSBmZXRjaC4gVGhlIHNlYXJjaCBmb3JtIGlzIGFsc28gdGhlXG4gIC8vIGFkZCBwYXRoIGZvciBzYXZlZCBsb2NhdGlvbnM6IG9uIGEgc3VjY2Vzc2Z1bCBsb29rdXAgdGhlIHF1ZXJ5IGlzIGFwcGVuZGVkXG4gIC8vIHRvIHRoZSBzYXZlZCBsaXN0IGFuZCBiZWNvbWVzIGN1cnJlbnQ7IGEgZmFpbGVkIGxvb2t1cCByZXNvbHZlcyB0byBudWxsIGFuZFxuICAvLyBsZWF2ZXMgdGhlIGxpc3QgdW50b3VjaGVkIChpbnZhbGlkSW5wdXQgaGFzIGFscmVhZHkgcmVkZGVuZWQgdGhlIGlucHV0KS5cbiAgc2VhcmNoRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjbG9zZVN1Z2dlc3Rpb25zKCk7XG4gICAgY29uc3QgcXVlcnkgPSBzZWFyY2hJbnB1dC52YWx1ZTtcbiAgICBmb3JlY2FzdExvZ2ljLmZ1dHVyZUFQSUNhbGxzKHF1ZXJ5KS50aGVuKGZ1bmN0aW9uIChmb3JlY2FzdCkge1xuICAgICAgaWYgKGZvcmVjYXN0KSB7XG4gICAgICAgIGFkZExvY2F0aW9uKHF1ZXJ5KTtcbiAgICAgICAgc2VhcmNoSW5wdXQudmFsdWUgPSAnJztcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgd2lyZUF1dG9jb21wbGV0ZSgpO1xuICB3aXJlVW5pdFRvZ2dsZSgpO1xufVxuXG4vLyBPbmUgZGVsZWdhdGVkIGNsaWNrIGxpc3RlbmVyIG9uIHRoZSBzd2l0Y2ggZHJpdmVzIGJvdGggYnV0dG9ucy4gV2lyZWQgb25jZSBmcm9tXG4vLyB3aXJlRXZlbnRzKCksIHNvIOKAlCBsaWtlIGV2ZXJ5IG90aGVyIGxpc3RlbmVyIOKAlCBub3RoaW5nIG11bHRpcGxpZXMgYWNyb3NzIGZldGNoZXMuXG4vLyByZW5kZXJUZW1wcygpIHJ1bnMgaW1tZWRpYXRlbHkgdG8gcmVmbGVjdCB0aGUgcGVyc2lzdGVkIHVuaXQgb24gdGhlIGJ1dHRvbnNcbi8vIGJlZm9yZSB0aGUgZmlyc3QgZmV0Y2ggcmVzb2x2ZXMuXG5mdW5jdGlvbiB3aXJlVW5pdFRvZ2dsZSgpIHtcbiAgaWYgKCF1bml0U3dpdGNoKSB7IHJldHVybjsgfVxuICB1bml0U3dpdGNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICBjb25zdCBidG4gPSBlLnRhcmdldCAmJiBlLnRhcmdldC5jbG9zZXN0ID8gZS50YXJnZXQuY2xvc2VzdCgnLnVuaXRPcHQnKSA6IG51bGw7XG4gICAgaWYgKCFidG4gfHwgIXVuaXRTd2l0Y2guY29udGFpbnMoYnRuKSkgeyByZXR1cm47IH1cbiAgICBzZXRVbml0KGJ0bi5kYXRhc2V0LnVuaXQpO1xuICB9KTtcbiAgcmVuZGVyVGVtcHMoKTtcbn1cblxuLy8gV2lyZXMgdGhlIGRlYm91bmNlZCBjaXR5LXN1Z2dlc3Rpb24gZHJvcGRvd24uIENhbGxlZCBvbmNlIGZyb20gd2lyZUV2ZW50cygpLFxuLy8gc28g4oCUIGxpa2UgZXZlcnkgb3RoZXIgbGlzdGVuZXIgaW4gdGhlIGFwcCDigJQgbm90aGluZyBtdWx0aXBsaWVzIGFjcm9zcyBmZXRjaGVzLlxuZnVuY3Rpb24gd2lyZUF1dG9jb21wbGV0ZSgpIHtcbiAgLy8gRWFjaCBrZXlzdHJva2Ugc2NoZWR1bGVzIG9uZSBkZWJvdW5jZWQgbG9va3VwOyBhbiBlbXB0eSBib3ggY2xvc2VzIHRoZVxuICAvLyBkcm9wZG93biBvdXRyaWdodC4gU2V0dGluZyBzZWFyY2hJbnB1dC52YWx1ZSBwcm9ncmFtbWF0aWNhbGx5IChvbiBzZWxlY3Qgb3JcbiAgLy8gb24gYSBzdWNjZXNzZnVsIHN1Ym1pdCkgZG9lcyBub3QgZmlyZSAnaW5wdXQnLCBzbyB0aGVyZSBpcyBubyByZWZldGNoIGxvb3AuXG4gIHNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHZhbHVlID0gc2VhcmNoSW5wdXQudmFsdWUudHJpbSgpO1xuICAgIGlmIChzdWdnZXN0RGVib3VuY2UpIHsgY2xlYXJUaW1lb3V0KHN1Z2dlc3REZWJvdW5jZSk7IHN1Z2dlc3REZWJvdW5jZSA9IG51bGw7IH1cbiAgICBpZiAoIXZhbHVlKSB7IGNsb3NlU3VnZ2VzdGlvbnMoKTsgcmV0dXJuOyB9XG5cbiAgICBzdWdnZXN0RGVib3VuY2UgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IHNlcSA9ICsrcmVxdWVzdFNlcTtcbiAgICAgIGZvcmVjYXN0TG9naWMuc2VhcmNoQ2l0aWVzKHZhbHVlKS50aGVuKGZ1bmN0aW9uIChyZXN1bHRzKSB7XG4gICAgICAgIGlmIChzZXEgIT09IHJlcXVlc3RTZXEpIHsgcmV0dXJuOyB9IC8vIGEgbmV3ZXIga2V5c3Ryb2tlIHN1cGVyc2VkZWQgdGhpc1xuICAgICAgICByZW5kZXJTdWdnZXN0aW9ucyhyZXN1bHRzKTtcbiAgICAgIH0pO1xuICAgIH0sIFNVR0dFU1RfREVCT1VOQ0VfTVMpO1xuICB9KTtcblxuICAvLyBBcnJvdyBrZXlzIG1vdmUgdGhlIGhpZ2hsaWdodDsgRW50ZXIgb24gYSBoaWdobGlnaHRlZCByb3cgc2VsZWN0cyBpdCAoYW5kIGlzXG4gIC8vIHN0b3BwZWQgZnJvbSBhbHNvIHN1Ym1pdHRpbmcgdGhlIHJhdyB0ZXh0KTsgRXNjYXBlIGNsb3NlcyB3aXRob3V0IHN1Ym1pdHRpbmcuXG4gIC8vIFdpdGggbm8gZHJvcGRvd24gb3BlbiwgRW50ZXIgc3VibWl0cyB0aGUgdHlwZWQgdGV4dCBleGFjdGx5IGFzIGJlZm9yZS5cbiAgc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKHN1Z2dlc3Rpb25zLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykgfHwgIWN1cnJlbnRTdWdnZXN0aW9ucy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGUua2V5ID09PSAnQXJyb3dEb3duJykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbW92ZVNlbGVjdGlvbigxKTtcbiAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnQXJyb3dVcCcpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIG1vdmVTZWxlY3Rpb24oLTEpO1xuICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIGlmIChzZWxlY3RlZEluZGV4ID49IDApIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjaG9vc2VTdWdnZXN0aW9uKHNlbGVjdGVkSW5kZXgpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjbG9zZVN1Z2dlc3Rpb25zKCk7XG4gICAgfVxuICB9KTtcblxuICAvLyBBIGNsaWNrIGFueXdoZXJlIG91dHNpZGUgdGhlIHNlYXJjaCBmb3JtIGNsb3NlcyB0aGUgZHJvcGRvd24uIENsaWNrcyBpbnNpZGVcbiAgLy8gdGhlIGZvcm0gKHRoZSBpbnB1dCwgYSBzdWdnZXN0aW9uIHJvdywgdGhlIGJ1dHRvbikgYXJlIGhhbmRsZWQgYnkgdGhlaXIgb3duXG4gIC8vIGxpc3RlbmVycyBhbmQgbXVzdCBub3QgY2xvc2UgaXQgaGVyZSBmaXJzdC5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChlLnRhcmdldCAmJiBlLnRhcmdldC5jbG9zZXN0ICYmIGUudGFyZ2V0LmNsb3Nlc3QoJyNzZWFyY2hGb3JtJykpIHsgcmV0dXJuOyB9XG4gICAgY2xvc2VTdWdnZXN0aW9ucygpO1xuICB9KTtcbn1cblxuLy8gUmVidWlsZCB0aGUgZHJvcGRvd24gZnJvbSBhIHJlc3VsdHMgYXJyYXkuIEVtcHR5IHJlc3VsdHMgY2xvc2UgaXQuIEVhY2ggcm93IGlzXG4vLyB0aGUgY2l0eSBuYW1lIHBsdXMgYSBtdXRlZCByZWdpb24vY291bnRyeSBsaW5lOyBjbGlja2luZyBvbmUgc2VsZWN0cyBpdC5cbmZ1bmN0aW9uIHJlbmRlclN1Z2dlc3Rpb25zKHJlc3VsdHMpIHtcbiAgd2hpbGUgKHN1Z2dlc3Rpb25zLmZpcnN0Q2hpbGQpIHsgc3VnZ2VzdGlvbnMucmVtb3ZlQ2hpbGQoc3VnZ2VzdGlvbnMuZmlyc3RDaGlsZCk7IH1cblxuICBjdXJyZW50U3VnZ2VzdGlvbnMgPSByZXN1bHRzO1xuICBzZWxlY3RlZEluZGV4ID0gLTE7XG5cbiAgaWYgKCFyZXN1bHRzLmxlbmd0aCkgeyBjbG9zZVN1Z2dlc3Rpb25zKCk7IHJldHVybjsgfVxuXG4gIHJlc3VsdHMuZm9yRWFjaChmdW5jdGlvbiAociwgaWR4KSB7XG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW0uY2xhc3NOYW1lID0gJ3N1Z2dlc3Rpb24taXRlbSc7XG4gICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnb3B0aW9uJyk7XG5cbiAgICBjb25zdCBjaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNpdHkuY2xhc3NOYW1lID0gJ3N1Z2dlc3Rpb24tY2l0eSc7XG4gICAgY2l0eS50ZXh0Q29udGVudCA9IHIubmFtZTtcblxuICAgIGNvbnN0IHBsYWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHBsYWNlLmNsYXNzTmFtZSA9ICdzdWdnZXN0aW9uLWNvdW50cnknO1xuICAgIHBsYWNlLnRleHRDb250ZW50ID0gW3IucmVnaW9uLCByLmNvdW50cnldLmZpbHRlcihCb29sZWFuKS5qb2luKCcsICcpO1xuXG4gICAgaXRlbS5hcHBlbmRDaGlsZChjaXR5KTtcbiAgICBpdGVtLmFwcGVuZENoaWxkKHBsYWNlKTtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkgeyBjaG9vc2VTdWdnZXN0aW9uKGlkeCk7IH0pO1xuXG4gICAgc3VnZ2VzdGlvbnMuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gIH0pO1xuXG4gIG9wZW5TdWdnZXN0aW9ucygpO1xufVxuXG4vLyBNb3ZlIHRoZSBrZXlib2FyZCBoaWdobGlnaHQsIHdyYXBwaW5nIGF0IGJvdGggZW5kcywgYW5kIG1pcnJvciBpdCBvbnRvIHRoZSBET00uXG5mdW5jdGlvbiBtb3ZlU2VsZWN0aW9uKGRpcikge1xuICBjb25zdCBuID0gY3VycmVudFN1Z2dlc3Rpb25zLmxlbmd0aDtcbiAgaWYgKCFuKSB7IHJldHVybjsgfVxuICBzZWxlY3RlZEluZGV4ID0gKHNlbGVjdGVkSW5kZXggKyBkaXIgKyBuKSAlIG47XG5cbiAgY29uc3QgaXRlbXMgPSBzdWdnZXN0aW9ucy5jaGlsZHJlbjtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgIGl0ZW1zW2ldLmNsYXNzTGlzdC50b2dnbGUoJ3NlbGVjdGVkJywgaSA9PT0gc2VsZWN0ZWRJbmRleCk7XG4gIH1cbn1cblxuLy8gRmlsbCB0aGUgaW5wdXQgd2l0aCB0aGUgY2hvc2VuIGNpdHkgYW5kIHN1Ym1pdCB0aGUgZm9ybSB0aGUgc2FtZSB3YXkgcHJlc3Npbmdcbi8vIEVudGVyIG9yIGNsaWNraW5nIFN1Ym1pdCBkb2VzLCBzbyB0aGUgZmV0Y2ggKyBzYXZlLWxvY2F0aW9uIHBhdGggaXMgdW5jaGFuZ2VkLlxuZnVuY3Rpb24gY2hvb3NlU3VnZ2VzdGlvbihpZHgpIHtcbiAgY29uc3QgciA9IGN1cnJlbnRTdWdnZXN0aW9uc1tpZHhdO1xuICBpZiAoIXIpIHsgcmV0dXJuOyB9XG4gIHNlYXJjaElucHV0LnZhbHVlID0gci5uYW1lO1xuICBjbG9zZVN1Z2dlc3Rpb25zKCk7XG4gIGlmIChzZWFyY2hGb3JtLnJlcXVlc3RTdWJtaXQpIHtcbiAgICBzZWFyY2hGb3JtLnJlcXVlc3RTdWJtaXQoKTtcbiAgfSBlbHNlIHtcbiAgICBzZWFyY2hGb3JtLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdzdWJtaXQnLCB7IGNhbmNlbGFibGU6IHRydWUsIGJ1YmJsZXM6IHRydWUgfSkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG9wZW5TdWdnZXN0aW9ucygpIHtcbiAgc3VnZ2VzdGlvbnMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIHNlYXJjaEZvcm0uY2xhc3NMaXN0LmFkZCgnc3VnZ2VzdGluZycpOyAvLyBmbGF0dGVucyB0aGUgaW5wdXQncyBib3R0b20gY29ybmVyc1xufVxuXG4vLyBDbG9zZSBhbmQgcmVzZXQuIEJ1bXBpbmcgcmVxdWVzdFNlcSBpbnZhbGlkYXRlcyBhbnkgaW4tZmxpZ2h0IGxvb2t1cCBzbyBpdFxuLy8gY2FuJ3QgcmVvcGVuIHRoZSBkcm9wZG93biBhZnRlciBhIHNlbGVjdGlvbiBvciBzdWJtaXQuXG5mdW5jdGlvbiBjbG9zZVN1Z2dlc3Rpb25zKCkge1xuICBpZiAoIXN1Z2dlc3Rpb25zKSB7IHJldHVybjsgfVxuICBpZiAoc3VnZ2VzdERlYm91bmNlKSB7IGNsZWFyVGltZW91dChzdWdnZXN0RGVib3VuY2UpOyBzdWdnZXN0RGVib3VuY2UgPSBudWxsOyB9XG4gIHJlcXVlc3RTZXErKztcbiAgY3VycmVudFN1Z2dlc3Rpb25zID0gW107XG4gIHNlbGVjdGVkSW5kZXggPSAtMTtcbiAgc3VnZ2VzdGlvbnMuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gIHNlYXJjaEZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnc3VnZ2VzdGluZycpO1xufVxuXG4vLyBBIHN1Y2Nlc3NmdWwgbG9va3VwIGNsZWFycyB0aGUgaW52YWxpZCBzdGF0ZTsgYSBmYWlsZWQgb25lIGtlZXBzIHRoZSBjdXJyZW50XG4vLyByaWJib24gYW5kIHJlZGRlbnMgdGhlIGlucHV0IGJvcmRlciAodmlhIHRoZSAuaW52YWxpZCBjbGFzcyBpbiBzdHlsZS5jc3MpLlxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkSW5wdXQoKSB7XG4gIGNhY2hlRG9tKCk7XG4gIGlmIChzZWFyY2hGb3JtKSB7IHNlYXJjaEZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZCcpOyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnZhbGlkSW5wdXQoKSB7XG4gIGNhY2hlRG9tKCk7XG4gIGlmIChzZWFyY2hGb3JtKSB7IHNlYXJjaEZvcm0uY2xhc3NMaXN0LmFkZCgnaW52YWxpZCcpOyB9XG59XG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IHJlbmRlckZvcmVjYXN0LCB2YWxpZElucHV0LCBpbnZhbGlkSW5wdXQgfSBmcm9tICcuL2luZGV4Q2hhbmdlcy5qcyc7XG5cbi8vICAzIGRheSBmb3JlY2FzdCAtIGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9MzljMjhmODVhYjAzNDUyMWI5OTIxNzA1MjMyNzEwJnE9OTgwNTImZGF5cz0zJmFxaT1ubyZhbGVydHM9bm9cblxuLy8gVGhlIGxhc3QgZm9yZWNhc3Qgd2Ugc3VjY2Vzc2Z1bGx5IHJlbmRlcmVkLiBBIGZhaWxlZCBsb29rdXAga2VlcHMgaXQgb24gc2NyZWVuXG4vLyAoc2VlIGZ1bGZpbGxQcm9taXNlKTogdGhlIHNlYXJjaCBqdXN0IHJlZGRlbnMgdGhlIGlucHV0IHJhdGhlciB0aGFuIGJsYW5raW5nXG4vLyB0aGUgcmliYm9uLlxubGV0IGxhc3RGb3JlY2FzdCA9IG51bGw7XG5cbmV4cG9ydCBjb25zdCBmb3JlY2FzdExvZ2ljID0gKGZ1bmN0aW9uICgpIHtcblxuICAvLyBObyBmZXRjaCBmaXJlcyBhdCBtb2R1bGUtZXZhbCB0aW1lLiBUaGUgc2luZ2xlIGluaXRpYWwgZmV0Y2ggKGRlZmF1bHRcbiAgLy8gbG9jYXRpb24sIG9yIHRoZSBmaXJzdCBzYXZlZCBsb2NhdGlvbikgaXMgZHJpdmVuIGZyb20gdGhlIGJvb3RzdHJhcCBpblxuICAvLyBpbmRleC5qcyB2aWEgaW5pdEZhdm91cml0ZXMoKSAtPiBmdXR1cmVBUElDYWxscywgc28gaXQgaGFwcGVucyBleGFjdGx5IG9uY2VcbiAgLy8gaW4gdGhlIGluZGV4IGJ1bmRsZSByYXRoZXIgdGhhbiBvbmNlIHBlciBidW5kbGUgdGhhdCBpbXBvcnRzIHRoaXMgbW9kdWxlLlxuXG4gIC8vIEZpcmVzIG9uZSBmZXRjaCBmb3IgYSBsb2NhdGlvbiBhbmQgcmVuZGVycyBvbiBzdWNjZXNzLiBSZXR1cm5zIGEgcHJvbWlzZVxuICAvLyByZXNvbHZpbmcgdG8gdGhlIGJ1aWx0IGZvcmVjYXN0IG9uIHN1Y2Nlc3MsIG9yIG51bGwgb24gYSBmYWlsZWQgbG9va3VwLCBzb1xuICAvLyB0aGUgc2VhcmNoIHN1Ym1pdCBoYW5kbGVyIGNhbiBhcHBlbmQgdGhlIGxvY2F0aW9uIHRvIHRoZSBzYXZlZCBsaXN0IG9ubHlcbiAgLy8gd2hlbiB0aGUgbG9va3VwIGFjdHVhbGx5IHN1Y2NlZWRlZC5cbiAgZnVuY3Rpb24gZnV0dXJlQVBJQ2FsbHModmFsdWUpIHtcbiAgICByZXR1cm4gZnVsZmlsbFByb21pc2UocHVsbEZvcmVjYXN0KHZhbHVlKSk7XG4gIH1cblxuICBmdW5jdGlvbiBmdWxmaWxsUHJvbWlzZShmb3JlY2FzdEpTT04pIHtcbiAgICByZXR1cm4gZm9yZWNhc3RKU09OLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgLy8gcHVsbEZvcmVjYXN0IHJlc29sdmVzIHRvIG51bGwgb24gYSBmYWlsZWQgbG9va3VwIOKAlCBsZWF2ZSB0aGUgY3VycmVudFxuICAgICAgLy8gcmliYm9uIHVudG91Y2hlZCAoaW52YWxpZElucHV0KCkgaGFzIGFscmVhZHkgcmVkZGVuZWQgdGhlIGlucHV0KS5cbiAgICAgIGlmICghcmVzdWx0KSB7IHJldHVybiBudWxsOyB9XG5cbiAgICAgIGNvbnN0IGZvcmVjYXN0ID0gYnVpbGRGb3JlY2FzdChyZXN1bHQpO1xuICAgICAgbGFzdEZvcmVjYXN0ID0gZm9yZWNhc3Q7XG4gICAgICByZW5kZXJGb3JlY2FzdChmb3JlY2FzdCk7XG4gICAgICByZXR1cm4gZm9yZWNhc3Q7XG4gICAgfSk7XG4gIH1cblxuICAvLyBGbGF0dGVuIHRoZSB0aHJlZS1kYXkgcmVzcG9uc2UgaW50byBhIHNpbmdsZSA3Mi1ob3VyIHNlcmllcyBwbHVzIGEgbG9jYXRpb25cbiAgLy8gb2JqZWN0LiBFdmVyeSBob3VyIGtlZXBzIGl0cyBvd24gZXBvY2gsIHRlbXBlcmF0dXJlLCBjb25kaXRpb24gdGV4dCBhbmQgdGhlXG4gIC8vIHN0YXQgZmllbGRzIHRoZSByZWFkb3V0IHNob3dzIOKAlCBub3RoaW5nIGlzIGNvbGxhcHNlZCB0byBwZXItZGF5IHNjYWxhcnMsIGFuZFxuICAvLyB0aGUgZnVsbCBmb3JlY2FzdGRheVtdLmhvdXJbXSBhcnJheXMgKGFscmVhZHkgaW4gZXZlcnkgcmVzcG9uc2UsIHByZXZpb3VzbHlcbiAgLy8gZGlzY2FyZGVkKSBhcmUgd2hhdCB0aGUgY3VydmUgaXMgZHJhd24gZnJvbS5cbiAgZnVuY3Rpb24gYnVpbGRGb3JlY2FzdChyZXN1bHQpIHtcbiAgICBjb25zdCBmb3JlY2FzdERheXMgPSByZXN1bHQuZm9yZWNhc3QuZm9yZWNhc3RkYXk7XG4gICAgY29uc3QgaG91cnMgPSBbXTtcblxuICAgIGZvcmVjYXN0RGF5cy5mb3JFYWNoKChkYXkpID0+IHtcbiAgICAgIGRheS5ob3VyLmZvckVhY2goKGgpID0+IHtcbiAgICAgICAgaG91cnMucHVzaCh7XG4gICAgICAgICAgZXBvY2g6IGgudGltZV9lcG9jaCxcbiAgICAgICAgICB0ZW1wOiBoLnRlbXBfYyxcbiAgICAgICAgICBmZWVsc0xpa2U6IGguZmVlbHNsaWtlX2MsXG4gICAgICAgICAgaHVtaWRpdHk6IGguaHVtaWRpdHksXG4gICAgICAgICAgcmFpbjogaC5jaGFuY2Vfb2ZfcmFpbixcbiAgICAgICAgICB3aW5kOiBoLndpbmRfa3BoLFxuICAgICAgICAgIGNvbmRpdGlvbjogaC5jb25kaXRpb24udGV4dCxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICBsb2NhdGlvbjoge1xuICAgICAgICBuYW1lOiByZXN1bHQubG9jYXRpb24ubmFtZSxcbiAgICAgICAgLy8gXCJub3dcIiBpcyBpbmRleGVkIG9mZiB0aGUgbG9jYXRpb24ncyByZWFsIGN1cnJlbnQgdGltZSwgbm90IGEgcGFyc2VkXG4gICAgICAgIC8vIGRhdGUgc3RyaW5nLiBTZWUgY3VycmVudEhvdXJJbmRleCgpIGluIHJpYmJvbi5qcy5cbiAgICAgICAgbG9jYWx0aW1lX2Vwb2NoOiByZXN1bHQubG9jYXRpb24ubG9jYWx0aW1lX2Vwb2NoLFxuICAgICAgfSxcbiAgICAgIGhvdXJzOiBob3VycyxcbiAgICAgIC8vIFBlci1kYXkgZGF0ZSArIGhvdXIgY291bnQgZHJpdmUgdGhlIFdFRC9USFUvRlJJIHRpY2tzIGFuZCB0aGUgZGF5XG4gICAgICAvLyBoYWlybGluZXMgYXQgaG91cnMgMjQgYW5kIDQ4LlxuICAgICAgZGF5czogZm9yZWNhc3REYXlzLm1hcCgoZGF5KSA9PiAoeyBkYXRlOiBkYXkuZGF0ZSwgY291bnQ6IGRheS5ob3VyLmxlbmd0aCB9KSksXG4gICAgfTtcbiAgfVxuXG4gIC8vIFRha2VzIGEgbG9jYXRpb24gdmFsdWUgYXBwZW5kZWQgdG8gdGhlIEFQSSBjYWxsLiBSZXNvbHZlcyB0byB0aGUgcmF3IEpTT04gb25cbiAgLy8gc3VjY2Vzcywgb3IgbnVsbCBvbiBmYWlsdXJlIChzbyBmdWxmaWxsUHJvbWlzZSBrZWVwcyB0aGUgY3VycmVudCByaWJib24pLlxuICBhc3luYyBmdW5jdGlvbiBwdWxsRm9yZWNhc3QodmFsdWUpIHtcbiAgICBjb25zdCB1cmwgPSAnaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9MzljMjhmODVhYjAzNDUyMWI5OTIxNzA1MjMyNzEwJnE9JyArIHZhbHVlICsgJyZkYXlzPTMmYXFpPW5vJmFsZXJ0cz1ubyc7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHsgbW9kZTogJ2NvcnMnIH0pO1xuXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgU3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZm9yZWNhc3QgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgIHZhbGlkSW5wdXQoKTtcblxuICAgICAgcmV0dXJuIGZvcmVjYXN0O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gY2F0Y2hlcyBlcnJvcnMgYm90aCBpbiBmZXRjaCBhbmQgcmVzcG9uc2UuanNvblxuICAgICAgaW52YWxpZElucHV0KCk7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvLyBUeXBlYWhlYWQgbG9va3VwIGZvciB0aGUgc2VhcmNoIGJveC4gSGl0cyBXZWF0aGVyQVBJJ3Mgc2VhcmNoL2F1dG9jb21wbGV0ZVxuICAvLyBlbmRwb2ludCAocmV1c2luZyB0aGUgc2FtZSBrZXkgYXMgcHVsbEZvcmVjYXN0KSBhbmQgcmVzb2x2ZXMgdG8gdGhlIHJhd1xuICAvLyByZXN1bHRzIGFycmF5IOKAlCBbeyBuYW1lLCByZWdpb24sIGNvdW50cnksIC4uLiB9LCAuLi5dIOKAlCBvciBbXSBvbiBhbiBlbXB0eVxuICAvLyBxdWVyeSwgbm8gbWF0Y2hlcywgb3IgYW55IG5ldHdvcmsvcGFyc2UgZXJyb3IuIE5ldmVyIHRocm93czogdGhlIGRyb3Bkb3duXG4gIC8vIGp1c3Qgc2hvd3Mgbm90aGluZyBvbiBmYWlsdXJlLlxuICBhc3luYyBmdW5jdGlvbiBzZWFyY2hDaXRpZXModmFsdWUpIHtcbiAgICBjb25zdCBxID0gU3RyaW5nKHZhbHVlKS50cmltKCk7XG4gICAgaWYgKCFxKSB7IHJldHVybiBbXTsgfVxuXG4gICAgY29uc3QgdXJsID0gJ2h0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL3NlYXJjaC5qc29uP2tleT0zOWMyOGY4NWFiMDM0NTIxYjk5MjE3MDUyMzI3MTAmcT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHEpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7IG1vZGU6ICdjb3JzJyB9KTtcblxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIFN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KHJlc3VsdHMpID8gcmVzdWx0cyA6IFtdO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcblxuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcHVsbEZvcmVjYXN0LFxuICAgIGZ1dHVyZUFQSUNhbGxzLFxuICAgIHNlYXJjaENpdGllcyxcbiAgfTtcblxufSkoKTsgLy8gZW5kcyBmb3JlY2FzdExvZ2ljIGZ1bmN0aW9uXG4iLCIvLyByaWJib24uanMg4oCUIHRoZSA3Mi1ob3VyIHRlbXBlcmF0dXJlIHJpYmJvbi5cbi8vXG4vLyBUaGUgZm9yZWNhc3QgaXMgb25lIGNvbnRpbnVvdXMgdGVtcGVyYXR1cmUgY3VydmUgYWNyb3NzIGFsbCB0aHJlZSBkYXlzIHJhdGhlclxuLy8gdGhhbiB0aHJlZSBjYXJkIHN0YXRlcyB5b3UgcGFnZSBiZXR3ZWVuLCBzbyBuYXZpZ2F0aW9uIHN0b3BzIGJlaW5nIGEgY29uY2VwdDpcbi8vIGV2ZXJ5IGhvdXIgaXMgb24gc2NyZWVuIGF0IG9uY2UuIENvbG91ciBpcyBhIGZ1bmN0aW9uIG9mIHRoZSB0ZW1wZXJhdHVyZVxuLy8gc2NhbGFyIChjb2xkIC0+IG1pbGQgLT4gd2FybSAtPiBob3QpLCBOT1QgdGhlIGNvbmRpdGlvbiBjYXRlZ29yeSwgc28gdGhlcmUgaXNcbi8vIG5vIHBlci1jb25kaXRpb24gYnJhbmNoIHRvIHdyaXRlIGFuZCBubyBlaWdodGggY2FzZSB0byBmb3JnZXQuXG4vL1xuLy8gYnVpbGRSaWJib24obW91bnQpIGNyZWF0ZXMgdGhlIFNWRyBzY2FmZm9sZCBvbmNlIGF0IGJvb3RzdHJhcCAoZGVmcywgZ3JhZGllbnRzLFxuLy8gZW1wdHkgZ3JvdXBzKSBhbmQgY2FjaGVzIGVsZW1lbnQgcmVmcy4gcmVuZGVyRm9yZWNhc3QoKSBpbiBpbmRleENoYW5nZXMuanNcbi8vIGNhbGxzIHJlbmRlclJpYmJvbihmb3JlY2FzdCkgb24gZXZlcnkgcmVzb2x2ZWQgcmVzcG9uc2UgdG8gcmVkcmF3IHRoZSBjdXJ2ZSxcbi8vIHRoZSBkYXkgaGFpcmxpbmVzL3RpY2tzIGFuZCB0aGUgY3VycmVudC1ob3VyIG1hcmtlciBmcm9tIGRhdGEuIGN1cnJlbnRIb3VySW5kZXhcbi8vIGlzIHRoZSBzaW5nbGUgc291cmNlIG9mIHRydXRoIGZvciBcIm5vd1wiLCBzaGFyZWQgd2l0aCB0aGUgcmVhZG91dCBzbyB0aGUgbWFya2VyXG4vLyBhbmQgdGhlIHN0YXQgcm93IG5ldmVyIGRpc2FncmVlLlxuLy9cbi8vIEhhbmQtYXV0aG9yZWQgU1ZHLCB2YW5pbGxhIG9ubHkg4oCUIG5vIGNoYXJ0aW5nIGxpYnJhcnksIG5vIGRlcGVuZGVuY2llcy5cblxuY29uc3QgTlMgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnO1xuXG4vLyB2aWV3Qm94IGdlb21ldHJ5LCBpbiB1c2VyIHVuaXRzLiBUaGUgY3VydmUgYmFuZCBzaXRzIGJldHdlZW4gQ0hBUlRfVE9QIGFuZFxuLy8gQ0hBUlRfVE9QK0NIQVJUX0g7IFRJQ0tfSCBiZW5lYXRoIGl0IGNhcnJpZXMgdGhlIFdFRC9USFUvRlJJIGRheSBsYWJlbHMuIEFcbi8vIHNlY29uZCBsYW5lICh0aWRlcywgb3V0IG9mIHNjb3BlIHRvZGF5KSB3b3VsZCBhZGQgTEFORV9IIGJlbG93IHRoYXQg4oCUIHRoZVxuLy8gdmlld0JveCBoZWlnaHQgc3dpdGNoZXMgYmV0d2VlbiB0d28gdmFsdWVzIGRlcGVuZGluZyBvbiB3aGV0aGVyIHRoZSBsYW5lXG4vLyBleGlzdHMsIHNvIHRoZSBsYXlvdXQgaXMgYnVpbHQgbGFuZS1vcHRpb25hbCBldmVuIHRob3VnaCB0aGUgbGFuZSBuZXZlclxuLy8gcmVuZGVycyBmb3Igbm93LlxuY29uc3QgVklFV19XID0gNzIwO1xuY29uc3QgUEFEX0wgPSAxMDtcbmNvbnN0IFBBRF9SID0gMTA7XG5jb25zdCBDSEFSVF9UT1AgPSAxODtcbmNvbnN0IENIQVJUX0ggPSAxNTA7XG5jb25zdCBUSUNLX0ggPSAyNjtcbmNvbnN0IExBTkVfSCA9IDkwO1xuXG4vLyBUZW1wZXJhdHVyZSAtPiBjb2xvdXIgcmFtcC4gRm91ciBhbmNob3JzIHNwYW5uaW5nIGEgZml4ZWQgwrBDIGRvbWFpbiBzbyB0aGVcbi8vIHNhbWUgdGVtcGVyYXR1cmUgYWx3YXlzIHJlYWRzIHRoZSBzYW1lIGNvbG91ciByZWdhcmRsZXNzIG9mIHRoZSBkYXkncyByYW5nZS5cbmNvbnN0IFJBTVAgPSBbXG4gIHsgdDogLTUsIGM6IFsweDNkLCAweDZmLCAweGE4XSB9LCAvLyBjb2xkXG4gIHsgdDogMTAsIGM6IFsweDZmLCAweGE4LCAweGEwXSB9LCAvLyBtaWxkXG4gIHsgdDogMjUsIGM6IFsweGQ5LCAweGE0LCAweDQxXSB9LCAvLyB3YXJtXG4gIHsgdDogNDAsIGM6IFsweGMyLCAweDQ1LCAweDJkXSB9LCAvLyBob3Rcbl07XG5cbmNvbnN0IFdFRUtEQVkgPSBbJ1NVTicsICdNT04nLCAnVFVFJywgJ1dFRCcsICdUSFUnLCAnRlJJJywgJ1NBVCddO1xuXG4vLyBDYWNoZWQgc2NhZmZvbGQgcmVmcywgcG9wdWxhdGVkIG9uY2UgYnkgYnVpbGRSaWJib24oKS5cbmxldCBzdmcsIHRlbXBHcmFkLCBmaWxsUGF0aCwgY3VydmVQYXRoLCBib3VuZGFyeUdyb3VwLCB0aWNrR3JvdXAsIG1hcmtlckdyb3VwLFxuICBsYW5lR3JvdXA7XG5cbmZ1bmN0aW9uIGVsKG5hbWUsIGF0dHJzKSB7XG4gIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoTlMsIG5hbWUpO1xuICBpZiAoYXR0cnMpIHtcbiAgICBmb3IgKGNvbnN0IGsgaW4gYXR0cnMpIHsgbm9kZS5zZXRBdHRyaWJ1dGUoaywgYXR0cnNba10pOyB9XG4gIH1cbiAgcmV0dXJuIG5vZGU7XG59XG5cbmZ1bmN0aW9uIGxlcnAoYSwgYiwgZikgeyByZXR1cm4gYSArIChiIC0gYSkgKiBmOyB9XG5cbi8vIENvbG91ciBmb3IgYSB0ZW1wZXJhdHVyZSwgaW50ZXJwb2xhdGVkIGFjcm9zcyB0aGUgcmFtcCBhbmNob3JzIGFuZCBjbGFtcGVkIHRvXG4vLyB0aGUgZG9tYWluIGVuZHMuXG5mdW5jdGlvbiB0ZW1wQ29sb3VyKHRlbXApIHtcbiAgaWYgKHRlbXAgPD0gUkFNUFswXS50KSB7IHJldHVybiByZ2IoUkFNUFswXS5jKTsgfVxuICBpZiAodGVtcCA+PSBSQU1QW1JBTVAubGVuZ3RoIC0gMV0udCkgeyByZXR1cm4gcmdiKFJBTVBbUkFNUC5sZW5ndGggLSAxXS5jKTsgfVxuICBmb3IgKGxldCBpID0gMTsgaSA8IFJBTVAubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodGVtcCA8PSBSQU1QW2ldLnQpIHtcbiAgICAgIGNvbnN0IGxvID0gUkFNUFtpIC0gMV07XG4gICAgICBjb25zdCBoaSA9IFJBTVBbaV07XG4gICAgICBjb25zdCBmID0gKHRlbXAgLSBsby50KSAvIChoaS50IC0gbG8udCk7XG4gICAgICByZXR1cm4gcmdiKFtcbiAgICAgICAgTWF0aC5yb3VuZChsZXJwKGxvLmNbMF0sIGhpLmNbMF0sIGYpKSxcbiAgICAgICAgTWF0aC5yb3VuZChsZXJwKGxvLmNbMV0sIGhpLmNbMV0sIGYpKSxcbiAgICAgICAgTWF0aC5yb3VuZChsZXJwKGxvLmNbMl0sIGhpLmNbMl0sIGYpKSxcbiAgICAgIF0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmdiKFJBTVBbUkFNUC5sZW5ndGggLSAxXS5jKTtcbn1cblxuZnVuY3Rpb24gcmdiKGMpIHsgcmV0dXJuICdyZ2IoJyArIGNbMF0gKyAnLCcgKyBjWzFdICsgJywnICsgY1syXSArICcpJzsgfVxuXG5mdW5jdGlvbiB3ZWVrZGF5QWJicihkYXRlU3RyKSB7XG4gIC8vIGRhdGVTdHIgaXMgJ1lZWVktTU0tREQnLiBCdWlsZCB0aGUgZGF0ZSBhdCBVVEMgbWlkbmlnaHQgc28gdGhlIHdlZWtkYXkgbmV2ZXJcbiAgLy8gc2hpZnRzIGFjcm9zcyBhIHRpbWV6b25lIGJvdW5kYXJ5LlxuICBjb25zdCBwID0gU3RyaW5nKGRhdGVTdHIpLnNwbGl0KCctJyk7XG4gIGNvbnN0IGQgPSBuZXcgRGF0ZShEYXRlLlVUQygrcFswXSwgKCtwWzFdKSAtIDEsICtwWzJdKSk7XG4gIHJldHVybiBXRUVLREFZW2QuZ2V0VVRDRGF5KCldIHx8ICcnO1xufVxuXG4vLyBJbmRleCBvZiB0aGUgaG91ciBidWNrZXQgbmVhcmVzdCBcIm5vd1wiLiBEcml2ZW4gb2ZmIGxvY2F0aW9uLmxvY2FsdGltZV9lcG9jaCxcbi8vIE5PVCBhIHBhcnNlZCBkYXRlLXN0cmluZyBob3VyIOKAlCB0aGUgb2xkIGdldEN1cnJlbnRUaW1lKCkgcmVhZCB0aGUgaG91ciBvdXQgb2Zcbi8vIGRhdGVfZXBvY2ggKGxvY2FsIG1pZG5pZ2h0KSBhbmQgcmV0dXJuZWQgdGhlIFVUQyBvZmZzZXQsIHNvIFwiZmVlbHMgbGlrZVwiIHdhcyBhXG4vLyBmaXhlZCBhcmJpdHJhcnkgaG91ci4gbG9jYWx0aW1lX2Vwb2NoIGlzIHRoZSBsb2NhdGlvbidzIHJlYWwgY3VycmVudCB0aW1lLlxuZXhwb3J0IGZ1bmN0aW9uIGN1cnJlbnRIb3VySW5kZXgoZm9yZWNhc3QpIHtcbiAgY29uc3QgaG91cnMgPSBmb3JlY2FzdC5ob3VycztcbiAgaWYgKCFob3VycyB8fCAhaG91cnMubGVuZ3RoKSB7IHJldHVybiAwOyB9XG4gIGNvbnN0IG5vdyA9IGZvcmVjYXN0LmxvY2F0aW9uLmxvY2FsdGltZV9lcG9jaDtcbiAgbGV0IGJlc3QgPSAwO1xuICBsZXQgYmVzdERpZmYgPSBJbmZpbml0eTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBob3Vycy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGRpZmYgPSBNYXRoLmFicyhob3Vyc1tpXS5lcG9jaCAtIG5vdyk7XG4gICAgaWYgKGRpZmYgPCBiZXN0RGlmZikgeyBiZXN0RGlmZiA9IGRpZmY7IGJlc3QgPSBpOyB9XG4gIH1cbiAgcmV0dXJuIGJlc3Q7XG59XG5cbi8vIENyZWF0ZSB0aGUgU1ZHIHNjYWZmb2xkIG9uY2UuIENhbGxlZCBmcm9tIGluZGV4LmpzIGF0IGJvb3RzdHJhcCwgYWZ0ZXIgdGhlXG4vLyBtb3VudCBlbGVtZW50IGlzIGluIHRoZSBET00uXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRSaWJib24obW91bnQpIHtcbiAgaWYgKHN2ZykgeyByZXR1cm47IH0gLy8gYnVpbGQgb25jZVxuXG4gIHN2ZyA9IGVsKCdzdmcnLCB7XG4gICAgaWQ6ICdyaWJib25TdmcnLFxuICAgIHZpZXdCb3g6ICcwIDAgJyArIFZJRVdfVyArICcgJyArIChDSEFSVF9UT1AgKyBDSEFSVF9IICsgVElDS19IKSxcbiAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvOiAneE1pZFlNaWQgbWVldCcsXG4gIH0pO1xuXG4gIGNvbnN0IGRlZnMgPSBlbCgnZGVmcycpO1xuXG4gIC8vIEhvcml6b250YWwgc3Ryb2tlIGdyYWRpZW50OiBjb2xvdXJlZCBieSB0ZW1wZXJhdHVyZSBhY3Jvc3MgdGhlIDcyIGhvdXJzLlxuICAvLyBTdG9wcyBhcmUgcmVidWlsdCBlYWNoIHJlbmRlciBmcm9tIHRoZSBhY3R1YWwgc2VyaWVzLlxuICB0ZW1wR3JhZCA9IGVsKCdsaW5lYXJHcmFkaWVudCcsIHtcbiAgICBpZDogJ3RlbXBHcmFkJywgeDE6ICcwJywgeTE6ICcwJywgeDI6ICcxJywgeTI6ICcwJyxcbiAgfSk7XG5cbiAgLy8gVmVydGljYWwgZmFkZSBmaWxsIHVuZGVyIHRoZSBjdXJ2ZS5cbiAgY29uc3QgZmlsbEdyYWQgPSBlbCgnbGluZWFyR3JhZGllbnQnLCB7XG4gICAgaWQ6ICdmaWxsR3JhZCcsIHgxOiAnMCcsIHkxOiAnMCcsIHgyOiAnMCcsIHkyOiAnMScsXG4gIH0pO1xuICBmaWxsR3JhZC5hcHBlbmRDaGlsZChlbCgnc3RvcCcsIHsgb2Zmc2V0OiAnMCcsICdzdG9wLWNvbG9yJzogJyM4Q0EwQUUnLCAnc3RvcC1vcGFjaXR5JzogJzAuMjgnIH0pKTtcbiAgZmlsbEdyYWQuYXBwZW5kQ2hpbGQoZWwoJ3N0b3AnLCB7IG9mZnNldDogJzEnLCAnc3RvcC1jb2xvcic6ICcjOENBMEFFJywgJ3N0b3Atb3BhY2l0eSc6ICcwJyB9KSk7XG5cbiAgZGVmcy5hcHBlbmRDaGlsZCh0ZW1wR3JhZCk7XG4gIGRlZnMuYXBwZW5kQ2hpbGQoZmlsbEdyYWQpO1xuICBzdmcuYXBwZW5kQ2hpbGQoZGVmcyk7XG5cbiAgZmlsbFBhdGggPSBlbCgncGF0aCcsIHsgY2xhc3M6ICdyaWJib24tZmlsbCcsIGZpbGw6ICd1cmwoI2ZpbGxHcmFkKScsIHN0cm9rZTogJ25vbmUnIH0pO1xuICBjdXJ2ZVBhdGggPSBlbCgncGF0aCcsIHsgY2xhc3M6ICdyaWJib24tY3VydmUnLCBmaWxsOiAnbm9uZScsIHN0cm9rZTogJ3VybCgjdGVtcEdyYWQpJyB9KTtcbiAgYm91bmRhcnlHcm91cCA9IGVsKCdnJywgeyBjbGFzczogJ3JpYmJvbi1ib3VuZGFyaWVzJyB9KTtcbiAgdGlja0dyb3VwID0gZWwoJ2cnLCB7IGNsYXNzOiAncmliYm9uLXRpY2tzJyB9KTtcbiAgbWFya2VyR3JvdXAgPSBlbCgnZycsIHsgY2xhc3M6ICdyaWJib24tbWFya2VyJyB9KTtcbiAgbGFuZUdyb3VwID0gZWwoJ2cnLCB7IGNsYXNzOiAncmliYm9uLWxhbmUnIH0pO1xuXG4gIHN2Zy5hcHBlbmRDaGlsZChmaWxsUGF0aCk7XG4gIHN2Zy5hcHBlbmRDaGlsZChjdXJ2ZVBhdGgpO1xuICBzdmcuYXBwZW5kQ2hpbGQoYm91bmRhcnlHcm91cCk7XG4gIHN2Zy5hcHBlbmRDaGlsZCh0aWNrR3JvdXApO1xuICBzdmcuYXBwZW5kQ2hpbGQobGFuZUdyb3VwKTtcbiAgc3ZnLmFwcGVuZENoaWxkKG1hcmtlckdyb3VwKTtcblxuICBtb3VudC5hcHBlbmRDaGlsZChzdmcpO1xufVxuXG5mdW5jdGlvbiBjbGVhcihub2RlKSB7XG4gIHdoaWxlIChub2RlLmZpcnN0Q2hpbGQpIHsgbm9kZS5yZW1vdmVDaGlsZChub2RlLmZpcnN0Q2hpbGQpOyB9XG59XG5cbi8vIFJlZHJhdyB0aGUgd2hvbGUgcmliYm9uIGZyb20gYSBmb3JlY2FzdDogeyBsb2NhdGlvbiwgaG91cnNbXSwgZGF5c1tdLCBsYW5lPyB9LlxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclJpYmJvbihmb3JlY2FzdCkge1xuICBpZiAoIXN2ZykgeyByZXR1cm47IH1cblxuICBjb25zdCBob3VycyA9IGZvcmVjYXN0LmhvdXJzIHx8IFtdO1xuICBjb25zdCBuID0gaG91cnMubGVuZ3RoO1xuICBpZiAoIW4pIHsgcmV0dXJuOyB9XG5cbiAgY29uc3QgbGFuZU9uID0gISFmb3JlY2FzdC5sYW5lO1xuICBjb25zdCB0b3RhbEggPSBDSEFSVF9UT1AgKyBDSEFSVF9IICsgVElDS19IICsgKGxhbmVPbiA/IExBTkVfSCA6IDApO1xuICBzdmcuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgJzAgMCAnICsgVklFV19XICsgJyAnICsgdG90YWxIKTtcblxuICBjb25zdCBpbm5lclcgPSBWSUVXX1cgLSBQQURfTCAtIFBBRF9SO1xuICBjb25zdCBiYXNlbGluZSA9IENIQVJUX1RPUCArIENIQVJUX0g7XG5cbiAgLy8gdGVtcGVyYXR1cmUgZG9tYWluIGZvciB0aGUgeS1zY2FsZSwgcGFkZGVkIHNvIHRoZSBjdXJ2ZSBuZXZlciBodWdzIGFuIGVkZ2UuXG4gIGxldCBtaW4gPSBJbmZpbml0eTtcbiAgbGV0IG1heCA9IC1JbmZpbml0eTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICBpZiAoaG91cnNbaV0udGVtcCA8IG1pbikgeyBtaW4gPSBob3Vyc1tpXS50ZW1wOyB9XG4gICAgaWYgKGhvdXJzW2ldLnRlbXAgPiBtYXgpIHsgbWF4ID0gaG91cnNbaV0udGVtcDsgfVxuICB9XG4gIGlmIChtaW4gPT09IG1heCkgeyBtaW4gLT0gMTsgbWF4ICs9IDE7IH1cbiAgY29uc3Qgc3BhbiA9IG1heCAtIG1pbjtcblxuICBjb25zdCB4ID0gKGkpID0+IFBBRF9MICsgKG4gPD0gMSA/IDAgOiAoaSAvIChuIC0gMSkpICogaW5uZXJXKTtcbiAgY29uc3QgeSA9ICh0KSA9PiBDSEFSVF9UT1AgKyAoMSAtICh0IC0gbWluKSAvIHNwYW4pICogQ0hBUlRfSDtcblxuICAvLyBCdWlsZCB0aGUgcG9pbnRzLCB0aGVuIGEgc21vb3RoIHBhdGggdmlhIHF1YWRyYXRpYyBtaWRwb2ludHMgKG5vIG92ZXJzaG9vdCkuXG4gIGNvbnN0IHB0cyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykgeyBwdHMucHVzaCh7IHg6IHgoaSksIHk6IHkoaG91cnNbaV0udGVtcCkgfSk7IH1cblxuICBsZXQgZCA9ICdNICcgKyBwdHNbMF0ueC50b0ZpeGVkKDIpICsgJyAnICsgcHRzWzBdLnkudG9GaXhlZCgyKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwdHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCB4YyA9IChwdHNbaSAtIDFdLnggKyBwdHNbaV0ueCkgLyAyO1xuICAgIGNvbnN0IHljID0gKHB0c1tpIC0gMV0ueSArIHB0c1tpXS55KSAvIDI7XG4gICAgZCArPSAnIFEgJyArIHB0c1tpIC0gMV0ueC50b0ZpeGVkKDIpICsgJyAnICsgcHRzW2kgLSAxXS55LnRvRml4ZWQoMikgK1xuICAgICAgJyAnICsgeGMudG9GaXhlZCgyKSArICcgJyArIHljLnRvRml4ZWQoMik7XG4gIH1cbiAgZCArPSAnIEwgJyArIHB0c1tuIC0gMV0ueC50b0ZpeGVkKDIpICsgJyAnICsgcHRzW24gLSAxXS55LnRvRml4ZWQoMik7XG5cbiAgY3VydmVQYXRoLnNldEF0dHJpYnV0ZSgnZCcsIGQpO1xuICBmaWxsUGF0aC5zZXRBdHRyaWJ1dGUoJ2QnLCBkICtcbiAgICAnIEwgJyArIHB0c1tuIC0gMV0ueC50b0ZpeGVkKDIpICsgJyAnICsgYmFzZWxpbmUgK1xuICAgICcgTCAnICsgcHRzWzBdLngudG9GaXhlZCgyKSArICcgJyArIGJhc2VsaW5lICsgJyBaJyk7XG5cbiAgLy8gSG9yaXpvbnRhbCB0ZW1wZXJhdHVyZSBncmFkaWVudDogb25lIHN0b3AgcGVyIGhvdXIsIGNvbG91cmVkIGJ5IHRoYXQgaG91cidzXG4gIC8vIHRlbXBlcmF0dXJlLiBvYmplY3RCb3VuZGluZ0JveCBtYXBzIG9mZnNldCBpLyhuLTEpIG9udG8gdGhlIGN1cnZlJ3MgeCwgd2hpY2hcbiAgLy8gc3BhbnMgdGhlIGZ1bGwgaW5uZXIgd2lkdGgsIHNvIGVhY2ggc3RvcCBsYW5kcyB1bmRlciBpdHMgaG91ci5cbiAgY2xlYXIodGVtcEdyYWQpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgIHRlbXBHcmFkLmFwcGVuZENoaWxkKGVsKCdzdG9wJywge1xuICAgICAgb2Zmc2V0OiAobiA8PSAxID8gMCA6IGkgLyAobiAtIDEpKS50b0ZpeGVkKDQpLFxuICAgICAgJ3N0b3AtY29sb3InOiB0ZW1wQ29sb3VyKGhvdXJzW2ldLnRlbXApLFxuICAgIH0pKTtcbiAgfVxuXG4gIC8vIERheSBoYWlybGluZXMgKyBXRUQvVEhVL0ZSSSB0aWNrcywgZGVyaXZlZCBmcm9tIHRoZSBwZXItZGF5IGhvdXIgY291bnRzIHNvIGFcbiAgLy8gc2hvcnQgdHJhaWxpbmcgZGF5IHN0aWxsIGxpbmVzIHVwLlxuICBjbGVhcihib3VuZGFyeUdyb3VwKTtcbiAgY2xlYXIodGlja0dyb3VwKTtcbiAgY29uc3QgZGF5cyA9IGZvcmVjYXN0LmRheXMgfHwgW107XG4gIGxldCBzdGFydCA9IDA7XG4gIGZvciAobGV0IGRpID0gMDsgZGkgPCBkYXlzLmxlbmd0aDsgZGkrKykge1xuICAgIGNvbnN0IGNvdW50ID0gZGF5c1tkaV0uY291bnQgfHwgMDtcbiAgICBpZiAoY291bnQgPD0gMCkgeyBjb250aW51ZTsgfVxuXG4gICAgaWYgKGRpID4gMCAmJiBzdGFydCA8IG4pIHtcbiAgICAgIGNvbnN0IGJ4ID0geChzdGFydCkudG9GaXhlZCgyKTtcbiAgICAgIGJvdW5kYXJ5R3JvdXAuYXBwZW5kQ2hpbGQoZWwoJ2xpbmUnLCB7XG4gICAgICAgIGNsYXNzOiAncmliYm9uLWhhaXJsaW5lJyxcbiAgICAgICAgeDE6IGJ4LCB5MTogQ0hBUlRfVE9QLCB4MjogYngsIHkyOiBiYXNlbGluZSxcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBjb25zdCBjZW50ZXJJZHggPSBzdGFydCArIChjb3VudCAtIDEpIC8gMjtcbiAgICBjb25zdCB0aWNrID0gZWwoJ3RleHQnLCB7XG4gICAgICBjbGFzczogJ3JpYmJvbi10aWNrJyxcbiAgICAgIHg6IHgoY2VudGVySWR4KS50b0ZpeGVkKDIpLFxuICAgICAgeTogKGJhc2VsaW5lICsgVElDS19IICogMC43KS50b0ZpeGVkKDIpLFxuICAgICAgJ3RleHQtYW5jaG9yJzogJ21pZGRsZScsXG4gICAgfSk7XG4gICAgdGljay50ZXh0Q29udGVudCA9IHdlZWtkYXlBYmJyKGRheXNbZGldLmRhdGUpO1xuICAgIHRpY2tHcm91cC5hcHBlbmRDaGlsZCh0aWNrKTtcblxuICAgIHN0YXJ0ICs9IGNvdW50O1xuICB9XG5cbiAgLy8gQ3VycmVudC1ob3VyIG1hcmtlcjogYSBoYWlybGluZSBkcm9wcGVkIHRvIHRoZSBiYXNlbGluZSBwbHVzIGEgZG90IG9uIHRoZVxuICAvLyBjdXJ2ZSwgdGhlIGRvdCBmaWxsZWQgd2l0aCB0aGUgdGVtcGVyYXR1cmUgY29sb3VyIGZvciB0aGF0IGhvdXIuXG4gIGNsZWFyKG1hcmtlckdyb3VwKTtcbiAgY29uc3QgaWR4ID0gY3VycmVudEhvdXJJbmRleChmb3JlY2FzdCk7XG4gIGNvbnN0IG14ID0geChpZHgpO1xuICBjb25zdCBteSA9IHkoaG91cnNbaWR4XS50ZW1wKTtcbiAgbWFya2VyR3JvdXAuYXBwZW5kQ2hpbGQoZWwoJ2xpbmUnLCB7XG4gICAgY2xhc3M6ICdyaWJib24tbm93bGluZScsXG4gICAgeDE6IG14LnRvRml4ZWQoMiksIHkxOiBteS50b0ZpeGVkKDIpLCB4MjogbXgudG9GaXhlZCgyKSwgeTI6IGJhc2VsaW5lLFxuICB9KSk7XG4gIG1hcmtlckdyb3VwLmFwcGVuZENoaWxkKGVsKCdjaXJjbGUnLCB7XG4gICAgY2xhc3M6ICdyaWJib24tZG90JyxcbiAgICBjeDogbXgudG9GaXhlZCgyKSwgY3k6IG15LnRvRml4ZWQoMiksIHI6ICc1LjUnLFxuICAgIGZpbGw6IHRlbXBDb2xvdXIoaG91cnNbaWR4XS50ZW1wKSxcbiAgfSkpO1xuXG4gIC8vIE9wdGlvbmFsIHNlY29uZCBsYW5lLiBObyBkYXRhIGZlZWRzIGl0IHRvZGF5ICh0aWRlcyBhcmUgUHJvKyBhbmQgZW1wdHkgZm9yXG4gIC8vIGlubGFuZCBsb2NhdGlvbnMpLCBzbyBpdCBzdGF5cyBlbXB0eSBhbmQgdGhlIHZpZXdCb3ggdXNlcyB0aGUgc2hvcnRlciBvZiB0aGVcbiAgLy8gdHdvIGhlaWdodHMg4oCUIGJ1dCB0aGUgZ3JvdXAgYW5kIHRoZSBoZWlnaHQgc3dpdGNoIGV4aXN0IHNvIGEgbGFuZSBjYW4gZHJvcCBpblxuICAvLyB3aXRob3V0IGEgbGF5b3V0IHJld3JpdGUuXG4gIGNsZWFyKGxhbmVHcm91cCk7XG4gIGlmIChsYW5lT24gJiYgdHlwZW9mIGZvcmVjYXN0LmxhbmUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBmb3JlY2FzdC5sYW5lKGxhbmVHcm91cCwgeyB4LCBiYXNlbGluZSwgbGFuZVRvcDogYmFzZWxpbmUgKyBUSUNLX0gsIGxhbmVIOiBMQU5FX0ggfSk7XG4gIH1cbn1cbiIsIi8vIHNreS5qcyDigJQgYSBjb25kaXRpb24tYmFzZWQgYmFja2dyb3VuZCBtb3VudGVkIGJlaGluZCB0aGUgYXBwLlxuLy9cbi8vIFB1cmUgdmFuaWxsYSwgbm8gZGVwZW5kZW5jaWVzLiBBIHNpbmdsZSBgLndlYXRoZXJCZ2AgZWxlbWVudCBpcyBpbnNlcnRlZCBhc1xuLy8gdGhlIEZJUlNUIGNoaWxkIG9mIGAjYXBwYCBhbmQgcG9zaXRpb25lZCBgZml4ZWRgIChzZWUgc3R5bGUuY3NzKSwgc28gaXQgc3BhbnNcbi8vIHRoZSB3aG9sZSBicm93c2VyIHdpbmRvdyBvbiBkZXNrdG9wIHdoaWxlIGAjYXBwYCBzdGF5cyBhIGNvbnN0cmFpbmVkIGNlbnRyZWRcbi8vIGNvbHVtbiBhYm92ZSBpdCAoei1pbmRleCkuIFRoZSBlbGVtZW50IGNhcnJpZXMgYSBgYmctPGNhdGVnb3J5PmAgY2xhc3MgdGhhdFxuLy8gc2VsZWN0cyBhIHBlci1jb25kaXRpb24gdHJlYXRtZW50IGluIHN0eWxlLmNzcyDigJQgYSBncmFkaWVudCBiYXNlIHBsdXNcbi8vIGRlcHRoLWxheWVyZWQgZGVjb3JhdGl2ZSBpbWFnZXJ5IChzdW4sIG1vb24gKyB0d2lua2xpbmcgc3RhcnMsIGRyaWZ0aW5nXG4vLyBjbG91ZHMsIGZsYWtlcywgaGF6ZSkgcGFpbnRlZCBhY3Jvc3MgdGhlIHR3byBwc2V1ZG8tZWxlbWVudHMgQU5EIGEgc2V0IG9mXG4vLyBgLmJnTGF5ZXJgIGNoaWxkIGRpdnMgbW91bnRlZCBiZWxvdy4gVGhlIGNoaWxkcmVuIGFkZCB0aGUgZmFyL21pZC9uZWFyIGRlcHRoXG4vLyBwbGFuZXMgYW5kIHRoZSBncm91bmQtbGlnaHRpbmcgYWNjZW50IHRoYXQgdHdvIHBzZXVkby1lbGVtZW50cyBhbG9uZSBjYW4ndFxuLy8gaG9sZDsgZXZlcnkgY2F0ZWdvcnkgY29tcG9zZXMgYSBzdWJzZXQgb2YgdGhlbSAodW51c2VkIG9uZXMgc3RheSB0cmFuc3BhcmVudCkuXG4vLyBBbGwgaW1hZ2VyeSBhbmQgbW90aW9uIGxpdmUgaW4gc3R5bGUuY3NzLlxuLy9cbi8vIFRoZSBjYXRlZ29yeSBpcyByZXNvbHZlZCBmcm9tIGBub3cuY29uZGl0aW9uYCAodGhlIFdlYXRoZXJBUEkgY29uZGl0aW9uIHRleHQpXG4vLyBhbmQgcmUtYXBwbGllZCBvbiBldmVyeSBmZXRjaCB2aWEgc2V0V2VhdGhlckJnKCksIHNvIHRoZSBiYWNrZ3JvdW5kIGZvbGxvd3Ncbi8vIHRoZSBjdXJyZW50IGxvY2F0aW9uJ3Mgd2VhdGhlci4gT2ZmIHRoZSByZW5kZXIgcGF0aCBpdHNlbGY6IGluZGV4LmpzIG1vdW50c1xuLy8gdGhlIGxheWVyIG9uY2UgYXQgYm9vdHN0cmFwLCBhbmQgaW5kZXhDaGFuZ2VzLmpzIHN3YXBzIG9ubHkgdGhlIGNsYXNzLlxuLy9cbi8vIFRoZSBtb3Rpb24gaXMgZ3VhcmRlZCB0aGUgc2FtZSB3YXkgdGhlIG9sZCBkcmlmdCB3YXM6XG4vLyAgIC0gcHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlIC0+IHRoZSBDU1MgYW5pbWF0aW9ucyBhcmUgZGlzYWJsZWQgYnkgYVxuLy8gICAgICAgbWVkaWEgcXVlcnksIHNvIGVhY2ggdHJlYXRtZW50IHJlbmRlcnMgYXMgb25lIHN0YXRpYyBmcmFtZS5cbi8vICAgLSB2aXNpYmlsaXR5Y2hhbmdlIC0+IGFkZCBhIGAucGF1c2VkYCBjbGFzcyB0aGF0IHBhdXNlcyB0aGUgQ1NTIGFuaW1hdGlvbnNcbi8vICAgICAgIHdoaWxlIHRoZSB0YWIgaXMgaGlkZGVuLCByZW1vdmVkIHdoZW4gaXQgYmVjb21lcyB2aXNpYmxlIGFnYWluLlxuXG5sZXQgYmdFbCA9IG51bGw7XG5sZXQgY3VycmVudENhdGVnb3J5ID0gbnVsbDtcblxuLy8gVGhlIGNhdGVnb3J5IGFwcGxpZWQgYmVmb3JlIHRoZSBmaXJzdCBmZXRjaCByZXNvbHZlcyDigJQgYSBjYWxtLCBuZXV0cmFsIHNreS5cbmNvbnN0IERFRkFVTFRfQ0FURUdPUlkgPSAnY2xvdWR5JztcblxuLy8gVGhlIGRlcHRoIHBsYW5lcyBlYWNoIGNhdGVnb3J5IGNvbXBvc2VzIGZyb20uIE1vdW50ZWQgb25jZSBhcyBjaGlsZCBkaXZzIG9mXG4vLyBgLndlYXRoZXJCZ2Agc28gYSBjYXRlZ29yeSBjYW4gc3RhY2sgZmFyL21pZC9uZWFyIGltYWdlcnkgcGx1cyBhIGdyb3VuZC1saWdodFxuLy8gYWNjZW50IOKAlCBtb3JlIHBhaW50IHN1cmZhY2VzIHRoYW4gdGhlIHR3byBwc2V1ZG8tZWxlbWVudHMgcHJvdmlkZS4gQSBjYXRlZ29yeVxuLy8gc3R5bGVzIG9ubHkgdGhlIHBsYW5lcyBpdCBuZWVkczsgdGhlIHJlc3Qgc3RheSB0cmFuc3BhcmVudC4gT3JkZXIgaXNcbi8vIGJhY2stdG8tZnJvbnQgc28gbGF0ZXIgcGxhbmVzIHBhaW50IG92ZXIgZWFybGllciBvbmVzLlxuY29uc3QgREVQVEhfTEFZRVJTID0gWydmYXInLCAnbWlkJywgJ25lYXInLCAnZ3JvdW5kJ107XG5cbmZ1bmN0aW9uIHJlZHVjZU1vdGlvbigpIHtcbiAgcmV0dXJuICEhKHdpbmRvdy5tYXRjaE1lZGlhICYmIHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKScpLm1hdGNoZXMpO1xufVxuXG4vLyBNYXAgYSBXZWF0aGVyQVBJIGNvbmRpdGlvbiBzdHJpbmcgdG8gb25lIG9mIHRoZSBiYWNrZ3JvdW5kIHRyZWF0bWVudHMgZGVmaW5lZFxuLy8gaW4gc3R5bGUuY3NzLiBPcmRlciBtYXR0ZXJzOiB0aGUgbW9yZSBzcGVjaWZpYyBwcmVjaXBpdGF0aW9uIGNoZWNrcyBydW4gYmVmb3JlXG4vLyB0aGUgYnJvYWQgY2xvdWQvY2xlYXIgb25lcyBzbyBcIkxpZ2h0IHJhaW4gc2hvd2VyXCIgYW5kIFwiUGF0Y2h5IHNub3dcIiByZXNvbHZlIHRvXG4vLyB0aGVpciBwcmVjaXBpdGF0aW9uIGNhdGVnb3J5IHJhdGhlciB0aGFuIGZhbGxpbmcgdGhyb3VnaC4gQW55dGhpbmcgdW5tYXRjaGVkXG4vLyBsYW5kcyBvbiB0aGUgbmV1dHJhbCAnY2xvdWR5JyB0cmVhdG1lbnQuXG5mdW5jdGlvbiBjYXRlZ29yeUZvcih0ZXh0KSB7XG4gIGNvbnN0IHQgPSBTdHJpbmcodGV4dCB8fCAnJykudG9Mb3dlckNhc2UoKTtcbiAgaWYgKC9zbm93fHNsZWV0fGJsaXp6YXJkfGljZXxmbHVyci8udGVzdCh0KSkgeyByZXR1cm4gJ3Nub3cnOyB9XG4gIGlmICgvcmFpbnxkcml6emxlfHNob3dlcnx0aHVuZGVyLy50ZXN0KHQpKSB7IHJldHVybiAncmFpbic7IH1cbiAgaWYgKC9mb2d8bWlzdHxoYXplLy50ZXN0KHQpKSB7IHJldHVybiAnZm9nJzsgfVxuICBpZiAoL3N1bm55Ly50ZXN0KHQpKSB7IHJldHVybiAnc3VubnknOyB9XG4gIGlmICgvY2xlYXIvLnRlc3QodCkpIHsgcmV0dXJuICdjbGVhci1uaWdodCc7IH1cbiAgcmV0dXJuICdjbG91ZHknOyAvLyBjbG91ZHksIG92ZXJjYXN0LCBwYXJ0bHkgY2xvdWR5LCBhbmQgYW55IHVua25vd24gdGV4dFxufVxuXG4vLyBGcmVlemUgdGhlIGRyaWZ0IHdoaWxlIHRoZSB0YWIgaXMgaGlkZGVuLCByZXN1bWUgd2hlbiBpdCBjb21lcyBiYWNrLiBVbmRlclxuLy8gcmVkdWNlZCBtb3Rpb24gbm90aGluZyBpcyBhbmltYXRpbmcsIHNvIGAucGF1c2VkYCBpcyBhIGhhcm1sZXNzIG5vLW9wLlxuZnVuY3Rpb24gb25WaXNpYmlsaXR5KCkge1xuICBpZiAoIWJnRWwpIHsgcmV0dXJuOyB9XG4gIGlmIChkb2N1bWVudC5oaWRkZW4pIHtcbiAgICBiZ0VsLmNsYXNzTGlzdC5hZGQoJ3BhdXNlZCcpO1xuICB9IGVsc2Uge1xuICAgIGJnRWwuY2xhc3NMaXN0LnJlbW92ZSgncGF1c2VkJyk7XG4gIH1cbn1cblxuLy8gU3dhcCB0aGUgYmFja2dyb3VuZCB0cmVhdG1lbnQgdG8gbWF0Y2ggYSBjb25kaXRpb24uIENhbGxlZCBmcm9tIHRoZSByZW5kZXJcbi8vIHBhdGggb24gZXZlcnkgZmV0Y2g7IGEgbm8tb3Agd2hlbiB0aGUgcmVzb2x2ZWQgY2F0ZWdvcnkgaGFzbid0IGNoYW5nZWQsIHNvIGFcbi8vIHVuaXQgdG9nZ2xlIG9yIGEgcmVwZWF0IHNlYXJjaCBkb2Vzbid0IHJlc3RhcnQgdGhlIGFuaW1hdGlvbnMuIFNhZmUgdG8gY2FsbFxuLy8gYmVmb3JlIGluaXRXZWF0aGVyQmcoKSBoYXMgcnVuIOKAlCB0aGUgY2F0ZWdvcnkgaXMgcmVtZW1iZXJlZCBhbmQgYXBwbGllZCB0aGVuLlxuZXhwb3J0IGZ1bmN0aW9uIHNldFdlYXRoZXJCZyhjb25kaXRpb25UZXh0KSB7XG4gIGNvbnN0IGNhdGVnb3J5ID0gY2F0ZWdvcnlGb3IoY29uZGl0aW9uVGV4dCk7XG4gIGlmIChjYXRlZ29yeSA9PT0gY3VycmVudENhdGVnb3J5KSB7IHJldHVybjsgfVxuICBpZiAoY3VycmVudENhdGVnb3J5KSB7IGJnRWwgJiYgYmdFbC5jbGFzc0xpc3QucmVtb3ZlKCdiZy0nICsgY3VycmVudENhdGVnb3J5KTsgfVxuICBjdXJyZW50Q2F0ZWdvcnkgPSBjYXRlZ29yeTtcbiAgaWYgKGJnRWwpIHsgYmdFbC5jbGFzc0xpc3QuYWRkKCdiZy0nICsgY2F0ZWdvcnkpOyB9XG59XG5cbi8vIE1vdW50IHRoZSBiYWNrZ3JvdW5kIGxheWVyIG9uY2UsIGFzIHRoZSBmaXJzdCBjaGlsZCBvZiB0aGUgZ2l2ZW4gaG9zdCAoYCNhcHBgKS5cbi8vIFNhZmUgdG8gY2FsbCBhZ2FpbiDigJQgaXQgb25seSBldmVyIG1vdW50cyBhIHNpbmdsZSBlbGVtZW50LiBBcHBsaWVzIHdoYXRldmVyXG4vLyBjYXRlZ29yeSBoYXMgYmVlbiBzZXQgc28gZmFyLCBvciBhIG5ldXRyYWwgZGVmYXVsdCB1bnRpbCB0aGUgZmlyc3QgZmV0Y2guXG5leHBvcnQgZnVuY3Rpb24gaW5pdFdlYXRoZXJCZyhob3N0RWwpIHtcbiAgaWYgKGJnRWwpIHsgcmV0dXJuOyB9IC8vIG1vdW50IG9uY2VcbiAgY29uc3QgaG9zdCA9IGhvc3RFbCB8fCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJyk7XG4gIGlmICghaG9zdCkgeyByZXR1cm47IH1cblxuICBiZ0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJnRWwuY2xhc3NOYW1lID0gJ3dlYXRoZXJCZyc7XG4gIGJnRWwuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gIGJnRWwuY2xhc3NMaXN0LmFkZCgnYmctJyArIChjdXJyZW50Q2F0ZWdvcnkgfHwgREVGQVVMVF9DQVRFR09SWSkpO1xuICBpZiAoIWN1cnJlbnRDYXRlZ29yeSkgeyBjdXJyZW50Q2F0ZWdvcnkgPSBERUZBVUxUX0NBVEVHT1JZOyB9XG5cbiAgLy8gTW91bnQgdGhlIGRlcHRoIHBsYW5lcyBvbmNlLiBUaGV5IGFyZSBnZW5lcmljIGFuZCBzaGFyZWQgYWNyb3NzIGNhdGVnb3JpZXM7XG4gIC8vIHRoZSBhY3RpdmUgYGJnLTxjYXRlZ29yeT5gIGNsYXNzIGRlY2lkZXMgd2hhdCBlYWNoIHBsYW5lIHBhaW50cyBpbiBDU1MuXG4gIGZvciAoY29uc3QgbmFtZSBvZiBERVBUSF9MQVlFUlMpIHtcbiAgICBjb25zdCBsYXllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxheWVyLmNsYXNzTmFtZSA9ICdiZ0xheWVyIGJnTGF5ZXItLScgKyBuYW1lO1xuICAgIGJnRWwuYXBwZW5kQ2hpbGQobGF5ZXIpO1xuICB9XG5cbiAgaG9zdC5pbnNlcnRCZWZvcmUoYmdFbCwgaG9zdC5maXJzdENoaWxkKTtcblxuICAvLyBOb3RoaW5nIGRyaWZ0cyB1bmRlciByZWR1Y2VkIG1vdGlvbiAodGhlIENTUyBtZWRpYSBxdWVyeSBkaXNhYmxlcyB0aGVcbiAgLy8gYW5pbWF0aW9ucyksIHNvIHRoZXJlIGlzIG5vdGhpbmcgdG8gcGF1c2Ug4oCUIHNraXAgdGhlIGxpc3RlbmVyIGluIHRoYXQgY2FzZS5cbiAgaWYgKCFyZWR1Y2VNb3Rpb24oKSkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Zpc2liaWxpdHljaGFuZ2UnLCBvblZpc2liaWxpdHkpO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1dlYXRoZXJBcHBfVE9QL1wiOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiY2hhbmdlc1wiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleENoYW5nZXMuanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=