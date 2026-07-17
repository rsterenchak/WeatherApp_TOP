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
/******/ 			"logic": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/logic.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naWMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMscUhBQXVDO0FBQ25GLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQ7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVMsNENBQTRDO0FBQ3JELFNBQVMsNENBQTRDO0FBQ3JEOztBQUVBO0FBQ0EsU0FBUztBQUNULFNBQVM7QUFDVDs7QUFFQTtBQUNBLFNBQVM7QUFDVCxTQUFTO0FBQ1Q7O0FBRUE7QUFDQSxTQUFTO0FBQ1QsU0FBUztBQUNUOztBQUVBO0FBQ0EsU0FBUztBQUNULFNBQVM7QUFDVDs7QUFFQTtBQUNBLFNBQVMsNEJBQTRCO0FBQ3JDLFNBQVMsNEJBQTRCO0FBQ3JDOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0RUFBNEU7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVMsMEJBQTBCO0FBQ25DLFVBQVUsOEJBQThCO0FBQ3hDLFVBQVUsNkJBQTZCO0FBQ3ZDLFdBQVcsMEJBQTBCO0FBQ3JDOztBQUVBO0FBQ0EsU0FBUywwQkFBMEI7QUFDbkMsVUFBVSw2QkFBNkI7QUFDdkMsVUFBVSw4QkFBOEI7QUFDeEMsV0FBVywwQkFBMEI7QUFDckM7O0FBRUEsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLE9BQU8sUUFBUSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSx3QkFBd0IsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxhQUFhLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLFVBQVUsT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxNQUFNLFlBQVksTUFBTSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLE1BQU0sWUFBWSxNQUFNLFlBQVksV0FBVyxZQUFZLE1BQU0sWUFBWSxNQUFNLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLFlBQVksTUFBTSxZQUFZLE9BQU8sYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLE9BQU8sTUFBTSxVQUFVLE9BQU8sV0FBVyxZQUFZLE1BQU0sWUFBWSxNQUFNLE9BQU8sT0FBTyxhQUFhLGFBQWEsTUFBTSxZQUFZLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLE1BQU0sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLE1BQU0sWUFBWSxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxPQUFPLE1BQU0sWUFBWSxhQUFhLE1BQU0sWUFBWSxNQUFNLFlBQVksYUFBYSxNQUFNLFlBQVksTUFBTSxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxNQUFNLE1BQU0sVUFBVSxVQUFVLE9BQU8sYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sWUFBWSxNQUFNLFlBQVksT0FBTyxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sTUFBTSxPQUFPLE1BQU0sVUFBVSxPQUFPLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxZQUFZLE1BQU0sUUFBUSxPQUFPLGFBQWEsYUFBYSxhQUFhLE1BQU0sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksTUFBTSxLQUFLLFVBQVUsTUFBTSxPQUFPLGFBQWEsTUFBTSxZQUFZLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxNQUFNLEtBQUssT0FBTyxNQUFNLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxZQUFZLE1BQU0sWUFBWSxhQUFhLGFBQWEsTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLGdDQUFnQyxpQ0FBaUMsT0FBTyxLQUFLLG9CQUFvQixxQkFBcUIsT0FBTyxLQUFLLHNCQUFzQix1QkFBdUIsT0FBTyxLQUFLLHNCQUFzQix1QkFBdUIsT0FBTyxLQUFLLHNCQUFzQix1QkFBdUIsT0FBTyxLQUFLLGdDQUFnQyxpQ0FBaUMsT0FBTyxZQUFZLE1BQU0sc0JBQXNCLHVCQUF1QixPQUFPLFlBQVksTUFBTSxvQkFBb0IscUJBQXFCLE9BQU8sWUFBWSxRQUFRLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxPQUFPLFVBQVUsTUFBTSxNQUFNLE1BQU0sT0FBTyxNQUFNLHdCQUF3QixXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxPQUFPLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sWUFBWSxNQUFNLHdCQUF3QixXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxPQUFPLE9BQU8sVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLHdCQUF3QixXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLHVCQUF1QixhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLGFBQWEs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VTtBQUN4QjtBQUNBLGVBQWU7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3R0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7V0NBQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vc3JjL2Zhdm91cml0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vc3JjL2luZGV4Q2hhbmdlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vLi9zcmMvbG9naWMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vc3JjL3JpYmJvbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vLi9zcmMvc2t5LmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL1JvYm90by1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gIGZvbnQtd2VpZ2h0OiAzMDAgNDAwO1xufVxuXG4vKiBQYWxldHRlOlxuICAgZ3JvdW5kICAjMTIxODFGICAgcnVsZXMgICMyNjMxM0JcbiAgIHRleHQgICAgI0VBRUVGMiAocHJpbWFyeSkgLyAjOENBMEFFIChtdXRlZClcbiAgIFRoZSB0ZW1wZXJhdHVyZSBjb2xvdXJzIGxpdmUgaW4gcmliYm9uLmpzICh0aGUgY3VydmUgaXMgY29sb3VyZWQgYnkgdGhlXG4gICB0ZW1wZXJhdHVyZSBzY2FsYXIsIG5vdCBieSBDU1MpLiAqL1xuOnJvb3Qge1xuICAtLWdyb3VuZDogIzEyMTgxRjtcbiAgLS1ydWxlOiAjMjYzMTNCO1xuICAtLXRleHQ6ICNFQUVFRjI7XG4gIC0tbXV0ZWQ6ICM4Q0EwQUU7XG4gIC0tbW9ubzogJ1NGTW9uby1SZWd1bGFyJywgJ1NGIE1vbm8nLCAnTWVubG8nLCAnQ29uc29sYXMnLCAnTGliZXJhdGlvbiBNb25vJywgbW9ub3NwYWNlO1xufVxuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JvdW5kKTtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIHN5c3RlbS11aSwgc2Fucy1zZXJpZjtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbi8qIGR2aCAobm90IHZoKTogb24gaU9TIFNhZmFyaSB2aCByZXNvbHZlcyB0byB0aGUgdGFsbCB2aWV3cG9ydCBhbmQgcGFya3MgdGhlXG4gICBib3R0b20gb2YgdGhlIGxheW91dCB1bmRlciB0aGUgVVJMIGJhci4gKi9cbiNhcHAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qIHN0YWNrcyB0aGUgY29uc3RyYWluZWQgY29sdW1uIGFib3ZlIHRoZSBmaXhlZCAud2VhdGhlckJnICovXG4gIHotaW5kZXg6IDE7XG4gIG1pbi1oZWlnaHQ6IDEwMGR2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMjhweDtcbiAgbWF4LXdpZHRoOiA3MjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDMycHggMjBweDtcbn1cblxuLyogQ29uZGl0aW9uLWJhc2VkIGJhY2tncm91bmQuIHNreS5qcyBtb3VudHMgYSBzaW5nbGUgXFxgLndlYXRoZXJCZ1xcYCBhcyB0aGUgZmlyc3RcbiAgIGNoaWxkIG9mICNhcHAgYW5kIHN3YXBzIGEgXFxgYmctPGNhdGVnb3J5PlxcYCBjbGFzcyBvbnRvIGl0IHBlciBmZXRjaCwga2V5ZWQgb2ZmXG4gICB0aGUgY3VycmVudCBjb25kaXRpb24gdGV4dCAoY2F0ZWdvcnlGb3IoKSBpbiBza3kuanMpLiBJdCBpcyBcXGBmaXhlZFxcYCBzbyBpdFxuICAgc3BhbnMgdGhlIHdob2xlIGJyb3dzZXIgd2luZG93IG9uIGRlc2t0b3Agd2hpbGUgI2FwcCBzdGF5cyBhIGNvbnN0cmFpbmVkXG4gICBjZW50cmVkIGNvbHVtbiBhYm92ZSBpdCAoei1pbmRleCkuIEVhY2ggY2F0ZWdvcnkgcGFpbnRzIGEgZ3JhZGllbnQgYmFzZSBvbiB0aGVcbiAgIGVsZW1lbnQgcGx1cyBkZWNvcmF0aXZlIGxheWVycyAoc3VuLCBtb29uICsgc3RhcnMsIGRyaWZ0aW5nIGNsb3VkcywgZmxha2VzLFxuICAgaGF6ZSkgb24gdGhlIHR3byBwc2V1ZG8tZWxlbWVudHMuIG92ZXJmbG93OiBoaWRkZW4gY2xpcHMgdGhvc2UgbGF5ZXJzIHRvIHRoZVxuICAgdmlld3BvcnQgc28gYW4gb3ZlcnNpemVkIGNsb3VkIGNhbid0IHNwaWxsIGEgc2Nyb2xsYmFyLiBUaGUgZ3JhZGllbnRzIGNyb3NzLVxuICAgZmFkZSAodHJhbnNpdGlvbjogYmFja2dyb3VuZCkgd2hlbiB0aGUgY2F0ZWdvcnkgY2hhbmdlczsgdGhlIGRlY29yYXRpdmVcbiAgIG1vdGlvbiBsaXZlcyBpbiB0aGUgcGVyLWNhdGVnb3J5IGtleWZyYW1lcyBiZWxvdy4gKi9cbi53ZWF0aGVyQmcge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGluc2V0OiAwO1xuICB6LWluZGV4OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzFiMjgzNiAwJSwgIzE0MWQyOSA1NSUsIHZhcigtLWdyb3VuZCkgMTAwJSk7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgNjAwbXMgZWFzZTtcbn1cblxuLndlYXRoZXJCZzo6YmVmb3JlLFxuLndlYXRoZXJCZzo6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLyogRGVwdGggcGxhbmVzIG1vdW50ZWQgYnkgc2t5LmpzIGFzIGNoaWxkIGRpdnMgKGZhciwgbWlkLCBuZWFyLCBncm91bmQpLiBUaGV5XG4gICBnaXZlIGVhY2ggY2F0ZWdvcnkgbW9yZSB0aGFuIHRoZSB0d28gcHNldWRvLWVsZW1lbnRzIGNhbiBob2xkOiBhIGNhdGVnb3J5XG4gICBzdGFja3MgYSBzdWJzZXQgb2YgdGhlbSDigJQgYSBibHVycmVkIGZhciBwbGFuZSwgYSBtaWQgcGxhbmUsIGEgc2hhcnAgbmVhciBwbGFuZVxuICAgd2l0aCBhIGdsb3csIGFuZCBhIGdyb3VuZC1saWdodGluZyBhY2NlbnQgYXQgdGhlIGJvdHRvbSDigJQgc28gdGhlIGltYWdlcnkgcmVhZHNcbiAgIGFzIGRlcHRoIHJhdGhlciB0aGFuIGEgc2luZ2xlIGZsYXQgd2FzaC4gQW55IHBsYW5lIGEgY2F0ZWdvcnkgZG9lc24ndCBwYWludFxuICAgc3RheXMgdHJhbnNwYXJlbnQuIFRoZXkgc2l0IGJldHdlZW4gOjpiZWZvcmUgKGJlaGluZCkgYW5kIDo6YWZ0ZXIgKGluIGZyb250KVxuICAgaW4gcGFpbnQgb3JkZXI7IHBlci1jYXRlZ29yeSBydWxlcyBsYXllciB0aGVtIGV4cGxpY2l0bHkgd2hlcmUgaXQgbWF0dGVycy4gKi9cbi53ZWF0aGVyQmcgPiAuYmdMYXllciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaW5zZXQ6IDA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4vKiBHcm91bmQgYWNjZW50IHNoYXJlZCBzaGFwZTogYSBzb2Z0IGJhbmQgb2YgbGlnaHQgaHVnZ2luZyB0aGUgYm90dG9tIGVkZ2UuXG4gICBFYWNoIGNhdGVnb3J5IHRpbnRzIGl0IHZpYSAtLWdyb3VuZC1nbG93LiAqL1xuLndlYXRoZXJCZyA+IC5iZ0xheWVyLS1ncm91bmQge1xuICB0b3A6IGF1dG87XG4gIGhlaWdodDogMzQlO1xuICBib3R0b206IDA7XG59XG5cbi8qIFNVTk5ZIOKAlCB3YXJtIGRheXRpbWUgc2t5IHdpdGggYSBzb2Z0IHN1biBnbG93IHRoYXQgc2xvd2x5IGJyZWF0aGVzLiAqL1xuLndlYXRoZXJCZy5iZy1zdW5ueSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMyYzRjNzIgMCUsICMxYTJjNDAgNTUlLCB2YXIoLS1ncm91bmQpIDEwMCUpO1xufVxuLndlYXRoZXJCZy5iZy1zdW5ueTo6YmVmb3JlIHtcbiAgdG9wOiAtMTIlO1xuICByaWdodDogLTYlO1xuICB3aWR0aDogNDZ2bWF4O1xuICBoZWlnaHQ6IDQ2dm1heDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IGNlbnRlciwgcmdiYSgyMTcsIDE2NCwgNjUsIDAuNDUpLCByZ2JhKDIxNywgMTY0LCA2NSwgMCkgNjglKTtcbiAgYW5pbWF0aW9uOiBiZ1N1biAxNHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xufVxuLndlYXRoZXJCZy5iZy1zdW5ueTo6YWZ0ZXIge1xuICBib3R0b206IC0xOCU7XG4gIGxlZnQ6IC0xMiU7XG4gIHdpZHRoOiA0MHZtYXg7XG4gIGhlaWdodDogNDB2bWF4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgY2VudGVyLCByZ2JhKDExMSwgMTY4LCAxNjAsIDAuMTgpLCByZ2JhKDExMSwgMTY4LCAxNjAsIDApIDcwJSk7XG4gIGFuaW1hdGlvbjogYmdTdW4gMThzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZS1yZXZlcnNlO1xufVxuLyogZmFyOiBhIGhpZ2gsIGJsdXJyZWQgd2FybSBoYXplIGJhbmQgdGhhdCBzbG93bHkgYnJlYXRoZXMgYmVoaW5kIHRoZSBzdW4uICovXG4ud2VhdGhlckJnLmJnLXN1bm55ID4gLmJnTGF5ZXItLWZhciB7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgxMjAlIDYwJSBhdCA3OCUgNCUsIHJnYmEoMjE3LCAxNjQsIDY1LCAwLjIyKSwgcmdiYSgyMTcsIDE2NCwgNjUsIDApIDYwJSk7XG4gIGZpbHRlcjogYmx1cig2cHgpO1xuICBhbmltYXRpb246IGJnU3VuIDIycyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG4vKiBtaWQ6IGZhaW50IGRpYWdvbmFsIGxpZ2h0IHNoYWZ0cyBzcGlsbGluZyBmcm9tIHRoZSBzdW4uICovXG4ud2VhdGhlckJnLmJnLXN1bm55ID4gLmJnTGF5ZXItLW1pZCB7XG4gIGJhY2tncm91bmQ6IHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoNjRkZWcsIHJnYmEoMjE3LCAxNjQsIDY1LCAwLjA1KSAwIDJweCwgcmdiYSgyMTcsIDE2NCwgNjUsIDApIDJweCAyNnB4KTtcbiAgb3BhY2l0eTogMC43O1xuICBhbmltYXRpb246IGJnU3VuIDE2cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGUtcmV2ZXJzZTtcbn1cbi8qIGdyb3VuZDogd2FybSBsaWdodCBwb29saW5nIGFsb25nIHRoZSBib3R0b20gb2YgdGhlIHNjZW5lLiAqL1xuLndlYXRoZXJCZy5iZy1zdW5ueSA+IC5iZ0xheWVyLS1ncm91bmQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgyMTcsIDE2NCwgNjUsIDAuMTYpLCByZ2JhKDIxNywgMTY0LCA2NSwgMCkgMTAwJSk7XG4gIGFuaW1hdGlvbjogYmdHcm91bmQgMTJzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcbn1cblxuLyogQ0xFQVIgTklHSFQg4oCUIGRlZXAgc2t5LCBhIGxvdyBtb29uIGdsb3csIGFuZCBhIGZpZWxkIG9mIHR3aW5rbGluZyBzdGFycy4gKi9cbi53ZWF0aGVyQmcuYmctY2xlYXItbmlnaHQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMTAxYTJjIDAlLCAjMGQxNDIwIDU1JSwgdmFyKC0tZ3JvdW5kKSAxMDAlKTtcbn1cbi53ZWF0aGVyQmcuYmctY2xlYXItbmlnaHQ6OmJlZm9yZSB7XG4gIGluc2V0OiAwO1xuICBiYWNrZ3JvdW5kLWltYWdlOlxuICAgIHJhZGlhbC1ncmFkaWVudCgxLjZweCAxLjZweCBhdCAxOCUgMjQlLCByZ2JhKDIzNCwgMjM4LCAyNDIsIDAuOSksIHRyYW5zcGFyZW50IDYwJSksXG4gICAgcmFkaWFsLWdyYWRpZW50KDEuMnB4IDEuMnB4IGF0IDcyJSAxNiUsIHJnYmEoMjM0LCAyMzgsIDI0MiwgMC44KSwgdHJhbnNwYXJlbnQgNjAlKSxcbiAgICByYWRpYWwtZ3JhZGllbnQoMS40cHggMS40cHggYXQgNDIlIDYyJSwgcmdiYSgyMzQsIDIzOCwgMjQyLCAwLjc1KSwgdHJhbnNwYXJlbnQgNjAlKSxcbiAgICByYWRpYWwtZ3JhZGllbnQoMXB4IDFweCBhdCA4NiUgNDYlLCByZ2JhKDIzNCwgMjM4LCAyNDIsIDAuNyksIHRyYW5zcGFyZW50IDYwJSksXG4gICAgcmFkaWFsLWdyYWRpZW50KDEuM3B4IDEuM3B4IGF0IDMwJSA4MiUsIHJnYmEoMjM0LCAyMzgsIDI0MiwgMC43KSwgdHJhbnNwYXJlbnQgNjAlKSxcbiAgICByYWRpYWwtZ3JhZGllbnQoMXB4IDFweCBhdCA2MCUgNzQlLCByZ2JhKDIzNCwgMjM4LCAyNDIsIDAuNiksIHRyYW5zcGFyZW50IDYwJSksXG4gICAgcmFkaWFsLWdyYWRpZW50KDEuNXB4IDEuNXB4IGF0IDglIDU0JSwgcmdiYSgyMzQsIDIzOCwgMjQyLCAwLjgpLCB0cmFuc3BhcmVudCA2MCUpLFxuICAgIHJhZGlhbC1ncmFkaWVudCgxcHggMXB4IGF0IDkyJSA3OCUsIHJnYmEoMjM0LCAyMzgsIDI0MiwgMC42NSksIHRyYW5zcGFyZW50IDYwJSk7XG4gIGFuaW1hdGlvbjogYmdUd2lua2xlIDVzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcbn1cbi53ZWF0aGVyQmcuYmctY2xlYXItbmlnaHQ6OmFmdGVyIHtcbiAgdG9wOiAxMiU7XG4gIHJpZ2h0OiAxNCU7XG4gIHdpZHRoOiA5MnB4O1xuICBoZWlnaHQ6IDkycHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAzOCUgMzglLCByZ2JhKDIzNCwgMjM4LCAyNDIsIDAuODUpLCByZ2JhKDE0MCwgMTYwLCAxNzQsIDAuMzUpIDYyJSwgcmdiYSgxNDAsIDE2MCwgMTc0LCAwKSA3MiUpO1xufVxuLyogZmFyOiBhIGRlbnNlIGZpZWxkIG9mIHRpbnksIGRpbSwgc2xpZ2h0bHkgYmx1cnJlZCBzdGFycyDigJQgdGhlIGRlZXAgc2t5LiAqL1xuLndlYXRoZXJCZy5iZy1jbGVhci1uaWdodCA+IC5iZ0xheWVyLS1mYXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOlxuICAgIHJhZGlhbC1ncmFkaWVudCgwLjhweCAwLjhweCBhdCAxMiUgMzAlLCByZ2JhKDIzNCwgMjM4LCAyNDIsIDAuNSksIHRyYW5zcGFyZW50IDYwJSksXG4gICAgcmFkaWFsLWdyYWRpZW50KDAuN3B4IDAuN3B4IGF0IDM0JSAxMiUsIHJnYmEoMjM0LCAyMzgsIDI0MiwgMC40NSksIHRyYW5zcGFyZW50IDYwJSksXG4gICAgcmFkaWFsLWdyYWRpZW50KDAuOHB4IDAuOHB4IGF0IDUyJSA0MCUsIHJnYmEoMjM0LCAyMzgsIDI0MiwgMC41KSwgdHJhbnNwYXJlbnQgNjAlKSxcbiAgICByYWRpYWwtZ3JhZGllbnQoMC42cHggMC42cHggYXQgNjglIDI2JSwgcmdiYSgyMzQsIDIzOCwgMjQyLCAwLjQpLCB0cmFuc3BhcmVudCA2MCUpLFxuICAgIHJhZGlhbC1ncmFkaWVudCgwLjhweCAwLjhweCBhdCA4MCUgNTIlLCByZ2JhKDIzNCwgMjM4LCAyNDIsIDAuNDUpLCB0cmFuc3BhcmVudCA2MCUpLFxuICAgIHJhZGlhbC1ncmFkaWVudCgwLjdweCAwLjdweCBhdCAyNCUgNjYlLCByZ2JhKDIzNCwgMjM4LCAyNDIsIDAuNCksIHRyYW5zcGFyZW50IDYwJSksXG4gICAgcmFkaWFsLWdyYWRpZW50KDAuOHB4IDAuOHB4IGF0IDQ2JSA4NCUsIHJnYmEoMjM0LCAyMzgsIDI0MiwgMC40NSksIHRyYW5zcGFyZW50IDYwJSksXG4gICAgcmFkaWFsLWdyYWRpZW50KDAuNnB4IDAuNnB4IGF0IDc0JSA3OCUsIHJnYmEoMjM0LCAyMzgsIDI0MiwgMC40KSwgdHJhbnNwYXJlbnQgNjAlKTtcbiAgZmlsdGVyOiBibHVyKDAuNXB4KTtcbiAgb3BhY2l0eTogMC43O1xuICBhbmltYXRpb246IGJnVHdpbmtsZSA3cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGUtcmV2ZXJzZTtcbn1cbi8qIG1pZDogYSBtb2RlcmF0ZSBmaWVsZCBvZiBzdGFycyDigJQgYnJpZ2h0ZXIgdGhhbiB0aGUgZmFyIHBsYW5lLCBubyBnbG93IHlldCxcbiAgIHR3aW5rbGluZyBvbiBpdHMgb3duIG9mZnNldCBzbyB0aGUgdGhyZWUgc3RhciBwbGFuZXMgc2hpbW1lciBpbmRlcGVuZGVudGx5LiAqL1xuLndlYXRoZXJCZy5iZy1jbGVhci1uaWdodCA+IC5iZ0xheWVyLS1taWQge1xuICBiYWNrZ3JvdW5kLWltYWdlOlxuICAgIHJhZGlhbC1ncmFkaWVudCgxLjRweCAxLjRweCBhdCAxNiUgMjIlLCByZ2JhKDIzNCwgMjM4LCAyNDIsIDAuNyksIHRyYW5zcGFyZW50IDYwJSksXG4gICAgcmFkaWFsLWdyYWRpZW50KDEuMnB4IDEuMnB4IGF0IDQwJSAzNCUsIHJnYmEoMjM0LCAyMzgsIDI0MiwgMC42NSksIHRyYW5zcGFyZW50IDYwJSksXG4gICAgcmFkaWFsLWdyYWRpZW50KDEuNXB4IDEuNXB4IGF0IDU4JSAxOCUsIHJnYmEoMjM0LCAyMzgsIDI0MiwgMC43KSwgdHJhbnNwYXJlbnQgNjAlKSxcbiAgICByYWRpYWwtZ3JhZGllbnQoMS4ycHggMS4ycHggYXQgNzYlIDQ0JSwgcmdiYSgyMzQsIDIzOCwgMjQyLCAwLjYpLCB0cmFuc3BhcmVudCA2MCUpLFxuICAgIHJhZGlhbC1ncmFkaWVudCgxLjRweCAxLjRweCBhdCAzNCUgNzAlLCByZ2JhKDIzNCwgMjM4LCAyNDIsIDAuNjIpLCB0cmFuc3BhcmVudCA2MCUpLFxuICAgIHJhZGlhbC1ncmFkaWVudCgxLjJweCAxLjJweCBhdCA4OCUgNjYlLCByZ2JhKDIzNCwgMjM4LCAyNDIsIDAuNiksIHRyYW5zcGFyZW50IDYwJSk7XG4gIG9wYWNpdHk6IDAuODU7XG4gIGFuaW1hdGlvbjogYmdUd2lua2xlIDZzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcbn1cbi8qIG5lYXI6IGEgZmV3IGxhcmdlIGZvcmVncm91bmQgc3RhcnMsIGVhY2ggd2l0aCBhIHNvZnQgZHJvcC1zaGFkb3cgZ2xvdy4gKi9cbi53ZWF0aGVyQmcuYmctY2xlYXItbmlnaHQgPiAuYmdMYXllci0tbmVhciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6XG4gICAgcmFkaWFsLWdyYWRpZW50KDIuNHB4IDIuNHB4IGF0IDIyJSAyMCUsIHJnYmEoMjM0LCAyMzgsIDI0MiwgMSksIHRyYW5zcGFyZW50IDYyJSksXG4gICAgcmFkaWFsLWdyYWRpZW50KDJweCAycHggYXQgNjQlIDU4JSwgcmdiYSgyMzQsIDIzOCwgMjQyLCAwLjk1KSwgdHJhbnNwYXJlbnQgNjIlKSxcbiAgICByYWRpYWwtZ3JhZGllbnQoMi42cHggMi42cHggYXQgODQlIDMyJSwgcmdiYSgyMzQsIDIzOCwgMjQyLCAxKSwgdHJhbnNwYXJlbnQgNjIlKTtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgNHB4IHJnYmEoMjM0LCAyMzgsIDI0MiwgMC43KSk7XG4gIGFuaW1hdGlvbjogYmdUd2lua2xlIDMuNHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xufVxuLyogZ3JvdW5kOiBjb29sIG1vb25saWdodCBwb29saW5nIGZhaW50bHkgYWxvbmcgdGhlIGhvcml6b24uICovXG4ud2VhdGhlckJnLmJnLWNsZWFyLW5pZ2h0ID4gLmJnTGF5ZXItLWdyb3VuZCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDE0MCwgMTYwLCAxNzQsIDAuMTQpLCByZ2JhKDE0MCwgMTYwLCAxNzQsIDApIDEwMCUpO1xuICBhbmltYXRpb246IGJnR3JvdW5kIDE0cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG5cbi8qIENMT1VEWSAoYWxzbyBvdmVyY2FzdCwgcGFydGx5LCBhbmQgdGhlIG5ldXRyYWwgZmFsbGJhY2spIOKAlCBjb29sIGdyZXktYmx1ZSB3aXRoXG4gICB0d28gc29mdCBjbG91ZCBtYXNzZXMgZHJpZnRpbmcgbGF0ZXJhbGx5LiAqL1xuLndlYXRoZXJCZy5iZy1jbG91ZHkge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMjMzMDNmIDAlLCAjMTcyMjMwIDU1JSwgdmFyKC0tZ3JvdW5kKSAxMDAlKTtcbn1cbi53ZWF0aGVyQmcuYmctY2xvdWR5OjpiZWZvcmUge1xuICB0b3A6IDE0JTtcbiAgbGVmdDogLTIwJTtcbiAgd2lkdGg6IDU1dm1heDtcbiAgaGVpZ2h0OiAyNHZtYXg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCBjZW50ZXIsIHJnYmEoMTQwLCAxNjAsIDE3NCwgMC4yKSwgcmdiYSgxNDAsIDE2MCwgMTc0LCAwKSA3MCUpO1xuICBhbmltYXRpb246IGJnQ2xvdWQgNDBzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcbn1cbi53ZWF0aGVyQmcuYmctY2xvdWR5OjphZnRlciB7XG4gIGJvdHRvbTogMTAlO1xuICByaWdodDogLTI0JTtcbiAgd2lkdGg6IDYwdm1heDtcbiAgaGVpZ2h0OiAyNnZtYXg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCBjZW50ZXIsIHJnYmEoMTExLCAxMzAsIDE0OCwgMC4xNiksIHJnYmEoMTExLCAxMzAsIDE0OCwgMCkgNzAlKTtcbiAgYW5pbWF0aW9uOiBiZ0Nsb3VkIDUycyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGUtcmV2ZXJzZTtcbn1cbi8qIGZhcjogYSB3aWRlLCBoZWF2aWx5IGJsdXJyZWQgY2xvdWQgYmFuZCBoaWdoIGluIHRoZSBzY2VuZSwgYmFyZWx5IG1vdmluZy4gKi9cbi53ZWF0aGVyQmcuYmctY2xvdWR5ID4gLmJnTGF5ZXItLWZhciB7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCg4MCUgNDAlIGF0IDMwJSAyMiUsIHJnYmEoMTQwLCAxNjAsIDE3NCwgMC4xNiksIHJnYmEoMTQwLCAxNjAsIDE3NCwgMCkgNzAlKTtcbiAgZmlsdGVyOiBibHVyKDEwcHgpO1xuICBhbmltYXRpb246IGJnQ2xvdWQgNzBzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZS1yZXZlcnNlO1xufVxuLyogbWlkOiBhIG1vZGVyYXRlIGNsb3VkIG1hc3MgZHJpZnRpbmcgYXQgYSBtaWRkbGluZyBwYWNlIGFuZCBibHVyLCBzaXR0aW5nXG4gICBiZXR3ZWVuIHRoZSBmYXIgaGF6ZSBhbmQgdGhlIHNoYXJwIG5lYXIgY2xvdWQuICovXG4ud2VhdGhlckJnLmJnLWNsb3VkeSA+IC5iZ0xheWVyLS1taWQge1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoNTIlIDMwJSBhdCA0NiUgMzIlLCByZ2JhKDE1OCwgMTc2LCAxOTAsIDAuMTgpLCByZ2JhKDE1OCwgMTc2LCAxOTAsIDApIDcwJSk7XG4gIGZpbHRlcjogYmx1cig1cHgpO1xuICBhbmltYXRpb246IGJnQ2xvdWQgNDhzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcbn1cbi8qIG5lYXI6IGEgc21hbGxlciwgc2hhcnBlciBjbG91ZCBkcmlmdGluZyBmYXN0ZXIgYWNyb3NzIHRoZSBmb3JlZ3JvdW5kLiAqL1xuLndlYXRoZXJCZy5iZy1jbG91ZHkgPiAuYmdMYXllci0tbmVhciB7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgzNCUgMjYlIGF0IDYyJSA0MCUsIHJnYmEoMTc2LCAxOTIsIDIwNCwgMC4yKSwgcmdiYSgxNzYsIDE5MiwgMjA0LCAwKSA2OCUpO1xuICBmaWx0ZXI6IGJsdXIoMnB4KTtcbiAgYW5pbWF0aW9uOiBiZ0Nsb3VkIDMwcyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG4vKiBncm91bmQ6IGRpbSBob3Jpem9uIGxpZ2h0IHVuZGVyIHRoZSBvdmVyY2FzdC4gKi9cbi53ZWF0aGVyQmcuYmctY2xvdWR5ID4gLmJnTGF5ZXItLWdyb3VuZCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDE0MCwgMTYwLCAxNzQsIDAuMTIpLCByZ2JhKDE0MCwgMTYwLCAxNzQsIDApIDEwMCUpO1xuICBhbmltYXRpb246IGJnR3JvdW5kIDE2cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG5cbi8qIFJBSU4gKGFsc28gZHJpenpsZSwgc2hvd2VycywgdGh1bmRlcikg4oCUIGRhcmtlciBza3ksIGEgaGVhdnkgZHJpZnRpbmcgY2xvdWQsXG4gICBhbmQgYSBmYWludCBkaWFnb25hbCByYWluIHNoZWVuIHNsaWRpbmcgZG93bi4gKi9cbi53ZWF0aGVyQmcuYmctcmFpbiB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMxYzI3MzQgMCUsICMxMjFiMjYgNTUlLCB2YXIoLS1ncm91bmQpIDEwMCUpO1xufVxuLndlYXRoZXJCZy5iZy1yYWluOjpiZWZvcmUge1xuICB0b3A6IC04JTtcbiAgbGVmdDogLTE4JTtcbiAgd2lkdGg6IDYydm1heDtcbiAgaGVpZ2h0OiAzMHZtYXg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCBjZW50ZXIsIHJnYmEoMTIwLCAxNDAsIDE1OCwgMC4yMiksIHJnYmEoMTIwLCAxNDAsIDE1OCwgMCkgNzAlKTtcbiAgYW5pbWF0aW9uOiBiZ0Nsb3VkIDQ2cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG4ud2VhdGhlckJnLmJnLXJhaW46OmFmdGVyIHtcbiAgaW5zZXQ6IDA7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoNzRkZWcsIHJnYmEoMTYwLCAxOTAsIDIxNCwgMC4wNykgMCAxcHgsIHJnYmEoMTYwLCAxOTAsIDIxNCwgMCkgMXB4IDlweCk7XG4gIGFuaW1hdGlvbjogYmdSYWluIDAuOXMgbGluZWFyIGluZmluaXRlO1xufVxuLyogZmFyOiBhIGJyb2FkLCBibHVycmVkIHN0b3JtIGNsb3VkIGRyaWZ0aW5nIHNsb3dseSBoaWdoIG92ZXJoZWFkLiAqL1xuLndlYXRoZXJCZy5iZy1yYWluID4gLmJnTGF5ZXItLWZhciB7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCg5MCUgNDQlIGF0IDY2JSAxMiUsIHJnYmEoMTIwLCAxNDAsIDE1OCwgMC4yKSwgcmdiYSgxMjAsIDE0MCwgMTU4LCAwKSA3MCUpO1xuICBmaWx0ZXI6IGJsdXIoOXB4KTtcbiAgYW5pbWF0aW9uOiBiZ0Nsb3VkIDYwcyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGUtcmV2ZXJzZTtcbn1cbi8qIG1pZDogYSBtaWRkbGUgc2hlZXQgb2YgcmFpbiBzdHJlYWtzIGJldHdlZW4gdGhlIGJhc2UgOjphZnRlciBzaGVlbiBhbmQgdGhlXG4gICBjb2Fyc2UgbmVhciBzdHJlYWtzIOKAlCBtb2RlcmF0ZSBhbmdsZSwgZ2F1Z2UgYW5kIHNwZWVkLiAqL1xuLndlYXRoZXJCZy5iZy1yYWluID4gLmJnTGF5ZXItLW1pZCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoNzZkZWcsIHJnYmEoMTcwLCAxOTgsIDIyMCwgMC4wOSkgMCAxcHgsIHJnYmEoMTcwLCAxOTgsIDIyMCwgMCkgMXB4IDEycHgpO1xuICBhbmltYXRpb246IGJnUmFpbiAwLjcycyBsaW5lYXIgaW5maW5pdGU7XG59XG4vKiBuZWFyOiBjb2Fyc2VyLCBmYXN0ZXIgcmFpbiBzdHJlYWtzIGF0IGEgc3RlZXBlciBhbmdsZSBmb3IgZm9yZWdyb3VuZCBkZXB0aC4gKi9cbi53ZWF0aGVyQmcuYmctcmFpbiA+IC5iZ0xheWVyLS1uZWFyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCg3OGRlZywgcmdiYSgxODAsIDIwNiwgMjI2LCAwLjExKSAwIDJweCwgcmdiYSgxODAsIDIwNiwgMjI2LCAwKSAycHggMTVweCk7XG4gIGFuaW1hdGlvbjogYmdSYWluTmVhciAwLjU1cyBsaW5lYXIgaW5maW5pdGU7XG59XG4vKiBncm91bmQ6IGEgd2V0IHNoZWVuIGNhdGNoaW5nIHRoZSBsaWdodCBhdCB0aGUgYm90dG9tIG9mIHRoZSBzY2VuZS4gKi9cbi53ZWF0aGVyQmcuYmctcmFpbiA+IC5iZ0xheWVyLS1ncm91bmQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgxMjAsIDE0MCwgMTU4LCAwLjE4KSwgcmdiYSgxMjAsIDE0MCwgMTU4LCAwKSAxMDAlKTtcbiAgYW5pbWF0aW9uOiBiZ0dyb3VuZCA5cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG5cbi8qIFNOT1cg4oCUIGNvb2wgbGlnaHQgc2t5IHdpdGggc2xvd2x5IGRyaWZ0aW5nIGZsYWtlcy4gKi9cbi53ZWF0aGVyQmcuYmctc25vdyB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMyYTM5NDkgMCUsICMxYTI2MzQgNTUlLCB2YXIoLS1ncm91bmQpIDEwMCUpO1xufVxuLndlYXRoZXJCZy5iZy1zbm93OjpiZWZvcmUsXG4ud2VhdGhlckJnLmJnLXNub3c6OmFmdGVyIHtcbiAgaW5zZXQ6IDA7XG4gIGJhY2tncm91bmQtaW1hZ2U6XG4gICAgcmFkaWFsLWdyYWRpZW50KDJweCAycHggYXQgMjAlIDEwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpLCB0cmFuc3BhcmVudCA2MCUpLFxuICAgIHJhZGlhbC1ncmFkaWVudCgyLjRweCAyLjRweCBhdCA2NiUgMjIlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyksIHRyYW5zcGFyZW50IDYwJSksXG4gICAgcmFkaWFsLWdyYWRpZW50KDEuOHB4IDEuOHB4IGF0IDQwJSA0MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSksIHRyYW5zcGFyZW50IDYwJSksXG4gICAgcmFkaWFsLWdyYWRpZW50KDJweCAycHggYXQgODQlIDU0JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpLCB0cmFuc3BhcmVudCA2MCUpLFxuICAgIHJhZGlhbC1ncmFkaWVudCgyLjJweCAyLjJweCBhdCAxMiUgNzAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyksIHRyYW5zcGFyZW50IDYwJSksXG4gICAgcmFkaWFsLWdyYWRpZW50KDEuOHB4IDEuOHB4IGF0IDU0JSA4NiUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42NSksIHRyYW5zcGFyZW50IDYwJSk7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSA1MCU7XG59XG4ud2VhdGhlckJnLmJnLXNub3c6OmJlZm9yZSB7XG4gIGFuaW1hdGlvbjogYmdTbm93IDE0cyBsaW5lYXIgaW5maW5pdGU7XG59XG4ud2VhdGhlckJnLmJnLXNub3c6OmFmdGVyIHtcbiAgb3BhY2l0eTogMC42O1xuICBhbmltYXRpb246IGJnU25vdyAyMnMgbGluZWFyIGluZmluaXRlO1xufVxuLyogZmFyOiB0aW55LCBmYWludCwgYmx1cnJlZCBmbGFrZXMgZmFsbGluZyBzbG93bHkgaW4gdGhlIGRlZXAgYmFja2dyb3VuZC4gKi9cbi53ZWF0aGVyQmcuYmctc25vdyA+IC5iZ0xheWVyLS1mYXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOlxuICAgIHJhZGlhbC1ncmFkaWVudCgxcHggMXB4IGF0IDE2JSAxMiUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NSksIHRyYW5zcGFyZW50IDYwJSksXG4gICAgcmFkaWFsLWdyYWRpZW50KDEuMnB4IDEuMnB4IGF0IDQ4JSAyNiUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSwgdHJhbnNwYXJlbnQgNjAlKSxcbiAgICByYWRpYWwtZ3JhZGllbnQoMXB4IDFweCBhdCA3MiUgMTglLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksIHRyYW5zcGFyZW50IDYwJSksXG4gICAgcmFkaWFsLWdyYWRpZW50KDEuMXB4IDEuMXB4IGF0IDMwJSA0NCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSwgdHJhbnNwYXJlbnQgNjAlKSxcbiAgICByYWRpYWwtZ3JhZGllbnQoMXB4IDFweCBhdCA4OCUgNDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpLCB0cmFuc3BhcmVudCA2MCUpLFxuICAgIHJhZGlhbC1ncmFkaWVudCgxLjJweCAxLjJweCBhdCA2MCUgNjIlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksIHRyYW5zcGFyZW50IDYwJSksXG4gICAgcmFkaWFsLWdyYWRpZW50KDFweCAxcHggYXQgMjIlIDc4JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KSwgdHJhbnNwYXJlbnQgNjAlKSxcbiAgICByYWRpYWwtZ3JhZGllbnQoMS4xcHggMS4xcHggYXQgNzglIDg0JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KSwgdHJhbnNwYXJlbnQgNjAlKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDUwJTtcbiAgZmlsdGVyOiBibHVyKDFweCk7XG4gIG9wYWNpdHk6IDAuNztcbiAgYW5pbWF0aW9uOiBiZ1Nub3cgMzBzIGxpbmVhciBpbmZpbml0ZTtcbn1cbi8qIG1pZDogbWVkaXVtIGZsYWtlcyBhdCBhIG1vZGVyYXRlIHBhY2UgYW5kIGEgaGFpciBvZiBibHVyIOKAlCB0aGUgbWlkZGxlIHBsYW5lXG4gICB0aGF0IGZpbGxzIHRoZSBnYXAgYmV0d2VlbiB0aGUgZmFpbnQgZmFyIGZpZWxkIGFuZCB0aGUgZ2xvd2luZyBuZWFyIGZsYWtlcywgc29cbiAgIHNub3cgcmVhZHMgYXMgdGhyZWUgZGVwdGggbGF5ZXJzIHJhdGhlciB0aGFuIGEgZm9yZWdyb3VuZC1hbmQtYmFja2Ryb3AgcGFpci4gKi9cbi53ZWF0aGVyQmcuYmctc25vdyA+IC5iZ0xheWVyLS1taWQge1xuICBiYWNrZ3JvdW5kLWltYWdlOlxuICAgIHJhZGlhbC1ncmFkaWVudCgycHggMnB4IGF0IDI0JSAxOCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSksIHRyYW5zcGFyZW50IDYwJSksXG4gICAgcmFkaWFsLWdyYWRpZW50KDIuMnB4IDIuMnB4IGF0IDU4JSAzMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSwgdHJhbnNwYXJlbnQgNjAlKSxcbiAgICByYWRpYWwtZ3JhZGllbnQoMS45cHggMS45cHggYXQgODIlIDI0JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcyKSwgdHJhbnNwYXJlbnQgNjAlKSxcbiAgICByYWRpYWwtZ3JhZGllbnQoMi4xcHggMi4xcHggYXQgMzglIDUyJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpLCB0cmFuc3BhcmVudCA2MCUpLFxuICAgIHJhZGlhbC1ncmFkaWVudCgycHggMnB4IGF0IDcwJSA2NiUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42OCksIHRyYW5zcGFyZW50IDYwJSksXG4gICAgcmFkaWFsLWdyYWRpZW50KDIuMnB4IDIuMnB4IGF0IDE2JSA4MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42OCksIHRyYW5zcGFyZW50IDYwJSk7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSA1MCU7XG4gIGZpbHRlcjogYmx1cigwLjRweCk7XG4gIG9wYWNpdHk6IDAuODU7XG4gIGFuaW1hdGlvbjogYmdTbm93IDE2cyBsaW5lYXIgaW5maW5pdGU7XG59XG4vKiBuZWFyOiBsYXJnZSBmb3JlZ3JvdW5kIGZsYWtlcyB3aXRoIGEgc29mdCBnbG93LCBmYWxsaW5nIGZhc3QuICovXG4ud2VhdGhlckJnLmJnLXNub3cgPiAuYmdMYXllci0tbmVhciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6XG4gICAgcmFkaWFsLWdyYWRpZW50KDMuNHB4IDMuNHB4IGF0IDI2JSAxNiUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSksIHRyYW5zcGFyZW50IDYyJSksXG4gICAgcmFkaWFsLWdyYWRpZW50KDNweCAzcHggYXQgNjIlIDM0JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpLCB0cmFuc3BhcmVudCA2MiUpLFxuICAgIHJhZGlhbC1ncmFkaWVudCgzLjZweCAzLjZweCBhdCA4NCUgNjAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTUpLCB0cmFuc3BhcmVudCA2MiUpLFxuICAgIHJhZGlhbC1ncmFkaWVudCgzLjJweCAzLjJweCBhdCAxNCUgNjglLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSksIHRyYW5zcGFyZW50IDYyJSk7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSA1MCU7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDNweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykpO1xuICBhbmltYXRpb246IGJnU25vdyA4cyBsaW5lYXIgaW5maW5pdGU7XG59XG4vKiBncm91bmQ6IGEgbGl0IGJhbmQgb2Ygc2V0dGxlZCBzbm93IGdsb3dpbmcgYXQgdGhlIGJvdHRvbSBvZiB0aGUgc2NlbmUuICovXG4ud2VhdGhlckJnLmJnLXNub3cgPiAuYmdMYXllci0tZ3JvdW5kIHtcbiAgaGVpZ2h0OiAzMCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDIzNCwgMjQwLCAyNDYsIDAuMjgpLCByZ2JhKDIzNCwgMjQwLCAyNDYsIDAuMDUpIDYwJSwgcmdiYSgyMzQsIDI0MCwgMjQ2LCAwKSAxMDAlKTtcbiAgYW5pbWF0aW9uOiBiZ0dyb3VuZCAxMXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xufVxuXG4vKiBGT0cgKGFsc28gbWlzdCwgaGF6ZSkg4oCUIG11dGVkIHNreSB3aXRoIHNsb3cgaG9yaXpvbnRhbCBoYXplIGJhbmRzLiAqL1xuLndlYXRoZXJCZy5iZy1mb2cge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMjMyYzM1IDAlLCAjMTgyMDI5IDU1JSwgdmFyKC0tZ3JvdW5kKSAxMDAlKTtcbn1cbi53ZWF0aGVyQmcuYmctZm9nOjpiZWZvcmUge1xuICBpbnNldDogMDtcbiAgYmFja2dyb3VuZC1pbWFnZTpcbiAgICBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgxNDAsIDE2MCwgMTc0LCAwKSAwJSwgcmdiYSgxNDAsIDE2MCwgMTc0LCAwLjEyKSAzMCUsIHJnYmEoMTQwLCAxNjAsIDE3NCwgMCkgNDYlKSxcbiAgICBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgxNDAsIDE2MCwgMTc0LCAwKSA1NCUsIHJnYmEoMTQwLCAxNjAsIDE3NCwgMC4xKSA3MiUsIHJnYmEoMTQwLCAxNjAsIDE3NCwgMCkgODglKTtcbiAgYW5pbWF0aW9uOiBiZ0ZvZyAyNHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xufVxuLyogZmFyOiBhIHRoaW4sIGhpZ2ggaGF6ZSBiYW5kIGRyaWZ0aW5nIHRoZSBvdGhlciB3YXksIHNsb3dlci4gKi9cbi53ZWF0aGVyQmcuYmctZm9nID4gLmJnTGF5ZXItLWZhciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDE0MCwgMTYwLCAxNzQsIDApIDglLCByZ2JhKDE0MCwgMTYwLCAxNzQsIDAuMDgpIDIyJSwgcmdiYSgxNDAsIDE2MCwgMTc0LCAwKSAzOCUpO1xuICBmaWx0ZXI6IGJsdXIoM3B4KTtcbiAgb3BhY2l0eTogMC44O1xuICBhbmltYXRpb246IGJnRm9nIDM0cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGUtcmV2ZXJzZTtcbn1cbi8qIG1pZDogYSBtaWRkbGUgaGF6ZSBiYW5kIGRyaWZ0aW5nIGJldHdlZW4gdGhlIHRoaW4gZmFyIGJhbmQgYW5kIHRoZSBsb3cgbmVhclxuICAgbWFzcywgbW9kZXJhdGVseSBibHVycmVkLiAqL1xuLndlYXRoZXJCZy5iZy1mb2cgPiAuYmdMYXllci0tbWlkIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMTUwLCAxNjgsIDE4MiwgMCkgMjQlLCByZ2JhKDE1MCwgMTY4LCAxODIsIDAuMSkgNDQlLCByZ2JhKDE1MCwgMTY4LCAxODIsIDApIDYyJSk7XG4gIGZpbHRlcjogYmx1cig1cHgpO1xuICBvcGFjaXR5OiAwLjg1O1xuICBhbmltYXRpb246IGJnRm9nIDI2cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG4vKiBuZWFyOiBhIHNvZnQsIGhlYXZpbHkgYmx1cnJlZCBoYXplIG1hc3MgbG93IGluIHRoZSBzY2VuZS4gKi9cbi53ZWF0aGVyQmcuYmctZm9nID4gLmJnTGF5ZXItLW5lYXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgxNzYsIDE5MiwgMjA0LCAwLjE0KSAwJSwgcmdiYSgxNzYsIDE5MiwgMjA0LCAwLjA2KSA0MCUsIHJnYmEoMTc2LCAxOTIsIDIwNCwgMCkgNjglKTtcbiAgZmlsdGVyOiBibHVyKDhweCk7XG4gIGFuaW1hdGlvbjogYmdGb2cgMThzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcbn1cbi8qIGdyb3VuZDogYSBkZW5zZSBmb2cgcG9vbCBzZXR0bGluZyBhbG9uZyB0aGUgYm90dG9tLiAqL1xuLndlYXRoZXJCZy5iZy1mb2cgPiAuYmdMYXllci0tZ3JvdW5kIHtcbiAgaGVpZ2h0OiA0MiU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDE3NiwgMTkyLCAyMDQsIDAuMjIpLCByZ2JhKDE3NiwgMTkyLCAyMDQsIDApIDEwMCUpO1xuICBhbmltYXRpb246IGJnR3JvdW5kIDE1cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG5cbkBrZXlmcmFtZXMgYmdTdW4ge1xuICAwJSAgIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMSk7ICAgICAgICBvcGFjaXR5OiAwLjc7IH1cbiAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC00JSwgMyUpIHNjYWxlKDEuMTIpOyAgb3BhY2l0eTogMTsgfVxufVxuXG5Aa2V5ZnJhbWVzIGJnVHdpbmtsZSB7XG4gIDAlICAgeyBvcGFjaXR5OiAwLjQ7IH1cbiAgMTAwJSB7IG9wYWNpdHk6IDE7IH1cbn1cblxuQGtleWZyYW1lcyBiZ0Nsb3VkIHtcbiAgMCUgICB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfVxuICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwJSk7IH1cbn1cblxuQGtleWZyYW1lcyBiZ1JhaW4ge1xuICAwJSAgIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwOyB9XG4gIDEwMCUgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOXB4IDMycHg7IH1cbn1cblxuQGtleWZyYW1lcyBiZ1Nub3cge1xuICAwJSAgIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpOyB9XG4gIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cbn1cblxuQGtleWZyYW1lcyBiZ0ZvZyB7XG4gIDAlICAgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTQlKTsgb3BhY2l0eTogMC43OyB9XG4gIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNCUpOyAgb3BhY2l0eTogMTsgfVxufVxuXG4vKiBBIHN0ZWVwZXIsIGZhc3RlciBmYWxsIGZvciB0aGUgbmVhciByYWluIHBsYW5lIHNvIGl0IHJlYWRzIGFoZWFkIG9mIDo6YWZ0ZXIuICovXG5Aa2V5ZnJhbWVzIGJnUmFpbk5lYXIge1xuICAwJSAgIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwOyB9XG4gIDEwMCUgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTVweCA0NHB4OyB9XG59XG5cbi8qIEEgZ2VudGxlIGJyZWF0aGUgZm9yIHRoZSBncm91bmQtbGlnaHRpbmcgYWNjZW50IGFjcm9zcyBldmVyeSBjYXRlZ29yeS4gKi9cbkBrZXlmcmFtZXMgYmdHcm91bmQge1xuICAwJSAgIHsgb3BhY2l0eTogMC42NTsgfVxuICAxMDAlIHsgb3BhY2l0eTogMTsgfVxufVxuXG4vKiBGcm96ZW4gd2hpbGUgdGhlIHRhYiBpcyBoaWRkZW4gKHNreS5qcyB0b2dnbGVzIC5wYXVzZWQgb24gdmlzaWJpbGl0eWNoYW5nZSkuICovXG4ud2VhdGhlckJnLnBhdXNlZDo6YmVmb3JlLFxuLndlYXRoZXJCZy5wYXVzZWQ6OmFmdGVyLFxuLndlYXRoZXJCZy5wYXVzZWQgPiAuYmdMYXllciB7XG4gIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XG59XG5cbi8qIEhhbHQgZXZlcnkgdHJlYXRtZW50J3MgbW90aW9uIHVuZGVyIGEgcmVkdWNlZC1tb3Rpb24gcHJlZmVyZW5jZSDigJQgb25lIHN0YXRpY1xuICAgZnJhbWUgcGVyIGNhdGVnb3J5LiAqL1xuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcbiAgLndlYXRoZXJCZzo6YmVmb3JlLFxuICAud2VhdGhlckJnOjphZnRlcixcbiAgLndlYXRoZXJCZyA+IC5iZ0xheWVyIHtcbiAgICBhbmltYXRpb246IG5vbmU7XG4gIH1cbn1cblxuLyogVGhlIHJpYmJvbiBhbmQgaXRzIHJlYWRvdXQgc2hhcmUgb25lIGZsZXggY29sdW1uIHNvIGEgbW9iaWxlIGxvY2F0aW9uIHJvdGF0aW9uXG4gICBzbGlkZXMgdGhlbSBhcyBhIHNpbmdsZSB1bml0LiBJdCBjYXJyaWVzIHRoZSBzYW1lIDI4cHggZ2FwICNhcHAgdXNlZCB0byBwdXRcbiAgIGJldHdlZW4gdGhlIHJpYmJvbiBhbmQgdGhlIHJlYWRvdXQsIHNvIHdyYXBwaW5nIHRoZW0gaXMgbGF5b3V0LXRyYW5zcGFyZW50LiAqL1xuI3dlYXRoZXJDYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiBzdGFja3MgYWJvdmUgdGhlIC53ZWF0aGVyQmcgZHJpZnQgbGF5ZXIgKi9cbiAgei1pbmRleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyOHB4O1xufVxuXG4vKiBSaWJib246IHRoZSBTVkcgc2NhbGVzIHRvIHRoZSBjb2x1bW4gd2lkdGggdmlhIHRoZSB2aWV3Qm94LCBzbyBhbGwgNzIgaG91cnNcbiAgIGFyZSBvbiBzY3JlZW4gYXQgYW55IHdpZHRoIGRvd24gdG8gMzgwcHggd2l0aG91dCBzY3JvbGwgb3IgcGFuLiAqL1xuI3JpYmJvbldyYXAge1xuICB3aWR0aDogMTAwJTtcbn1cblxuI3JpYmJvblN2ZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuLnJpYmJvbi1jdXJ2ZSB7XG4gIHN0cm9rZS13aWR0aDogMi41O1xuICBzdHJva2UtbGluZWNhcDogcm91bmQ7XG4gIHN0cm9rZS1saW5lam9pbjogcm91bmQ7XG59XG5cbi8qIERheSBib3VuZGFyeSBoYWlybGluZXMgYXQgaG91cnMgMjQgYW5kIDQ4LiAqL1xuLnJpYmJvbi1oYWlybGluZSB7XG4gIHN0cm9rZTogdmFyKC0tcnVsZSk7XG4gIHN0cm9rZS13aWR0aDogMTtcbn1cblxuLnJpYmJvbi10aWNrIHtcbiAgZmlsbDogdmFyKC0tbXV0ZWQpO1xuICBmb250LWZhbWlseTogdmFyKC0tbW9ubyk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cblxuLnJpYmJvbi1ub3dsaW5lIHtcbiAgc3Ryb2tlOiB2YXIoLS1tdXRlZCk7XG4gIHN0cm9rZS13aWR0aDogMTtcbiAgc3Ryb2tlLWRhc2hhcnJheTogMiAzO1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbi5yaWJib24tZG90IHtcbiAgc3Ryb2tlOiB2YXIoLS1ncm91bmQpO1xuICBzdHJva2Utd2lkdGg6IDI7XG59XG5cbi8qIFJlYWRvdXQgYmVuZWF0aCB0aGUgY3VydmUuICovXG4jcmVhZG91dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qIExvY2F0aW9uIG5hbWUgcGFpcmVkIHdpdGggdGhlIEMvRiB1bml0IHN3aXRjaCBvbiBvbmUgY2VudGVyZWQgcm93LiAqL1xuI2xvY2F0aW9uUm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbn1cblxuI2xvY2F0aW9uTmFtZSB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tb25vKTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xufVxuXG4vKiBTZWdtZW50ZWQgQy9GIHRvZ2dsZTogYSBjb21wYWN0IHBpbGwsIHRoZSBhY3RpdmUgb3B0aW9uIGZpbGxlZCB3aXRoIHRoZSBydWxlXG4gICBjb2xvdXIuIERpc3BsYXktb25seSDigJQgZmxpcHMgdGhlIHRlbXBlcmF0dXJlIHJlYWRvdXRzIGJldHdlZW4gwrBDIGFuZCDCsEYuICovXG4jdW5pdFN3aXRjaCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXJ1bGUpO1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnVuaXRPcHQge1xuICBmb250LWZhbWlseTogdmFyKC0tbW9ubyk7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgcGFkZGluZzogM3B4IDlweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udW5pdE9wdC5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ydWxlKTtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xufVxuXG4vKiBTYXZlZC1sb2NhdGlvbiBuYXZpZ2F0aW9uOiBwcmV2L25leHQgY2hldnJvbnMgZmxhbmtpbmcgdGhlIGRvdCByb3cuIFRoZSB3aG9sZVxuICAgcm93IGlzIGhpZGRlbiBhdCBhIGNvdW50IG9mIG9uZSAoYSBzaW5nbGUgbG9jYXRpb24gbmVlZHMgbm8gYWZmb3JkYW5jZSk7IHRoZVxuICAgYXJyb3dzIGFyZSBkZXNrdG9wLW9ubHkgYW5kIGRyb3Agb3V0IGF0IOKJpDQ4MHB4IHdoZXJlIHN3aXBlIHRha2VzIG92ZXIuICovXG4ubmF2Um93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgbWFyZ2luOiA0cHggMCAycHg7XG59XG5cbi5uYXZSb3cuaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmFycm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYXJyb3c6aG92ZXIge1xuICBjb2xvcjogI0VBRUVGMjtcbn1cblxuLmFycm93IHN2ZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAxNHB4O1xufVxuXG4vKiBTYXZlZC1sb2NhdGlvbiBkb3RzOiBvbmUgcGVyIHNhdmVkIGxvY2F0aW9uLCB0aGUgYWN0aXZlIG9uZSBmaWxsZWQuICovXG4jZG90Um93IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiBvZmZzZXQgcGFyZW50IGZvciB0aGUgZGVza3RvcCByZW1vdmUgcG9wb3ZlciAqL1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDhweDtcbn1cblxuLmRvdCB7XG4gIHdpZHRoOiA4cHg7XG4gIGhlaWdodDogOHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICMyRTNCNDU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XG59XG5cbi5kb3QuYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI0VBRUVGMjtcbn1cblxuLyogRGVza3RvcCByZW1vdmUtY29uZmlybWF0aW9uIHBvcG92ZXIsIGFuY2hvcmVkIGFib3ZlIHRoZSBsb25nLXByZXNzZWQgZG90LlxuICAgVG91Y2gga2VlcHMgdGhlIG5hdGl2ZSBjb25maXJtOyB0aGlzIGlzIHRoZSBtb3VzZS9wZW4gcGF0aC4gKi9cbi5yZW1vdmVQb3BvdmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IGNhbGMoMTAwJSArIDEwcHgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIHotaW5kZXg6IDIwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgcGFkZGluZzogMTBweCAxMnB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncm91bmQpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ydWxlKTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3gtc2hhZG93OiAwIDZweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC40NSk7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi8qIERvd253YXJkIHBvaW50ZXIgYXJyb3csIGJvcmRlcmVkOiBvdXRlciB0cmlhbmdsZSBpbiB0aGUgcnVsZSBjb2xvdXIgd2l0aCBhblxuICAgaW5uZXIgZ3JvdW5kLWZpbGxlZCB0cmlhbmdsZSBsYWlkIGEgcGl4ZWwgaGlnaGVyIG9uIHRvcCBvZiBpdC4gKi9cbi5yZW1vdmVQb3BvdmVyOjpiZWZvcmUsXG4ucmVtb3ZlUG9wb3Zlcjo6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbn1cblxuLnJlbW92ZVBvcG92ZXI6OmJlZm9yZSB7XG4gIHRvcDogMTAwJTtcbiAgYm9yZGVyLXdpZHRoOiA3cHggN3B4IDAgN3B4O1xuICBib3JkZXItY29sb3I6IHZhcigtLXJ1bGUpIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xufVxuXG4ucmVtb3ZlUG9wb3Zlcjo6YWZ0ZXIge1xuICB0b3A6IGNhbGMoMTAwJSAtIDFweCk7XG4gIGJvcmRlci13aWR0aDogNnB4IDZweCAwIDZweDtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ncm91bmQpIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xufVxuXG4ucmVtb3ZlUG9wb3Zlci1uYW1lIHtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5yZW1vdmVQb3BvdmVyLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDhweDtcbn1cblxuLnJlbW92ZVBvcG92ZXItY2FuY2VsLFxuLnJlbW92ZVBvcG92ZXItZGVsZXRlIHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogNXB4IDEycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXJ1bGUpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnJlbW92ZVBvcG92ZXItY2FuY2VsIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcbn1cblxuLnJlbW92ZVBvcG92ZXItY2FuY2VsOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xufVxuXG4ucmVtb3ZlUG9wb3Zlci1kZWxldGUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10ZXh0KTtcbiAgY29sb3I6IHZhcigtLWdyb3VuZCk7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tdGV4dCk7XG59XG5cbi5yZW1vdmVQb3BvdmVyLWRlbGV0ZTpob3ZlciB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjkyKTtcbn1cblxuLyogUm9ib3RvIExpZ2h0IDQwcHggZm9yIHRoZSByZWFkaW5nLiAqL1xuI2N1cnJlbnRUZW1wIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjE7XG59XG5cbiNjdXJyZW50Q29uZGl0aW9uIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG59XG5cbi8qIEZvdXItdXAgc3RhdCByb3c6IHRleHQgbGFiZWxzLCBubyBpY29ucy4gKi9cbiNzdGF0Um93IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgZ2FwOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMTRweDtcbn1cblxuLnN0YXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDRweDtcbiAgcGFkZGluZzogMTJweCA2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXJ1bGUpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5zdGF0LWxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1vbm8pO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XG59XG5cbi5zdGF0LXZhbHVlIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG59XG5cbi8qIFNlYXJjaCBmb3JtLiAqL1xuI3NlYXJjaEZvcm0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qIHN0YWNrcyBhYm92ZSB0aGUgLndlYXRoZXJCZyBkcmlmdCBsYXllciAqL1xuICB6LWluZGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4vKiBIb2xkcyB0aGUgaW5wdXQgYW5kIGl0cyBhdXRvY29tcGxldGUgZHJvcGRvd247IHBvc2l0aW9uOiByZWxhdGl2ZSBhbmNob3JzXG4gICAjc3VnZ2VzdGlvbnMgYmVuZWF0aCB0aGUgaW5wdXQuIGZsZXg6IDEgc28gdGhlIHBhaXIgZmlsbHMgdGhlIHJvdyB0aGUgd2F5IHRoZVxuICAgYmFyZSBpbnB1dCB1c2VkIHRvLiAqL1xuI3NlYXJjaElucHV0V3JhcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleDogMTtcbiAgbWluLXdpZHRoOiAwO1xufVxuXG4jc2VhcmNoSW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTJweCAxNHB4O1xuICBmb250LWZhbWlseTogdmFyKC0tbW9ubyk7XG4gIGZvbnQtc2l6ZTogMTZweDsgLyogMTZweCBzbyBpT1MgU2FmYXJpIGRvZXNuJ3QgYXV0by16b29tIHRoZSBpbnB1dCBvbiBmb2N1cyAqL1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ydWxlKTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4jc2VhcmNoSW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcbn1cblxuI3NlYXJjaElucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1tdXRlZCk7XG59XG5cbi8qIFdoaWxlIHRoZSBkcm9wZG93biBpcyBvcGVuIHRoZSBpbnB1dCdzIGJvdHRvbSBjb3JuZXJzIHNxdWFyZSBvZmYgYW5kIGl0c1xuICAgYm90dG9tIGVkZ2UgZHJvcHMgb3V0LCBzbyBpdCByZWFkcyBhcyBvbmUgYXR0YWNoZWQgc3VyZmFjZSB3aXRoICNzdWdnZXN0aW9ucy4gKi9cbiNzZWFyY2hGb3JtLnN1Z2dlc3RpbmcgI3NlYXJjaElucHV0IHtcbiAgYm9yZGVyLXJhZGl1czogOHB4IDhweCAwIDA7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4vKiBGYWlsZWQgbG9va3VwOiByZWRkZW5lZCBib3JkZXIsIGN1cnJlbnQgcmliYm9uIGxlZnQgaW4gcGxhY2UuICovXG4jc2VhcmNoRm9ybS5pbnZhbGlkICNzZWFyY2hJbnB1dCB7XG4gIGJvcmRlci1jb2xvcjogI0MyNDUyRDtcbn1cblxuLyogQXV0b2NvbXBsZXRlIGRyb3Bkb3duOiBoYW5ncyBvZmYgdGhlIGJvdHRvbSBvZiB0aGUgaW5wdXQsIG1hdGNoaW5nIGl0cyB3aWR0aFxuICAgYW5kIGNvbnRpbnVpbmcgaXRzIGZvY3VzZWQgYm9yZGVyIGludG8gYSBib3R0b20tcm91bmRlZCBwYW5lbC4gKi9cbiNzdWdnZXN0aW9ucyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDAlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMTA7XG4gIG1heC1oZWlnaHQ6IDI0MHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncm91bmQpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1tdXRlZCk7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCA4cHggOHB4O1xufVxuXG4jc3VnZ2VzdGlvbnMuaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnN1Z2dlc3Rpb24taXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgZ2FwOiA4cHg7XG4gIHBhZGRpbmc6IDEwcHggMTRweDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1vbm8pO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zdWdnZXN0aW9uLWl0ZW06aG92ZXIsXG4uc3VnZ2VzdGlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tcnVsZSk7XG59XG5cbi5zdWdnZXN0aW9uLWNpdHkge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbn1cblxuLnN1Z2dlc3Rpb24tY291bnRyeSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcbn1cblxuI3NlYXJjaEJ1dHRvbiB7XG4gIHBhZGRpbmc6IDEycHggMjBweDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1vbm8pO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGNvbG9yOiB2YXIoLS1ncm91bmQpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10ZXh0KTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI3NlYXJjaEJ1dHRvbjpob3ZlciB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjkyKTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICNhcHAge1xuICAgIGdhcDogMjJweDtcbiAgICBwYWRkaW5nOiAyNHB4IDE2cHg7XG4gIH1cblxuICAjd2VhdGhlckNhcmQge1xuICAgIGdhcDogMjJweDtcbiAgfVxuXG4gIC8qIFN3aXBlLWRpcmVjdGlvbi1hd2FyZSBzbGlkZSBvbiBhIGNvbW1pdHRlZCBsb2NhdGlvbiByb3RhdGlvbi4gZmF2b3VyaXRlcy5qc1xuICAgICBhZGRzIC5zbGlkZS1uZXh0IChzd2lwZSBsZWZ0IC0+IG5leHQpIG9yIC5zbGlkZS1wcmV2IChzd2lwZSByaWdodCAtPiBwcmV2KVxuICAgICB0byAjd2VhdGhlckNhcmQsIHRoZW4gcm90YXRlcy4gVGhlIGNhcmQgZmFkZXMgdG8gbm90aGluZyBhdCB0aGUga2V5ZnJhbWUnc1xuICAgICBtaWRwb2ludCwgd2hpY2ggbWFza3MgdGhlIGZvcmVjYXN0IHN3YXA6IHJlbmRlclJpYmJvbigpIHJlYnVpbGRzIGludG8gdGhpc1xuICAgICBzYW1lIGNhcmQgd2hpbGUgaXQncyBpbnZpc2libGUsIHNvIHRoZSBuZXcgY3VydmUgc2xpZGVzIGluIHJhdGhlciB0aGFuXG4gICAgIHNuYXBwaW5nLiBEZXNrdG9wIHJvdGF0ZXMgdmlhIHRoZSBhcnJvd3MgYW5kIG5ldmVyIGdldHMgdGhlIGNsYXNzLiAqL1xuICAjd2VhdGhlckNhcmQuc2xpZGUtbmV4dCB7XG4gICAgYW5pbWF0aW9uOiBjYXJkU2xpZGVOZXh0IDI4MG1zIGVhc2Utb3V0O1xuICB9XG5cbiAgI3dlYXRoZXJDYXJkLnNsaWRlLXByZXYge1xuICAgIGFuaW1hdGlvbjogY2FyZFNsaWRlUHJldiAyODBtcyBlYXNlLW91dDtcbiAgfVxuXG4gIEBrZXlmcmFtZXMgY2FyZFNsaWRlTmV4dCB7XG4gICAgMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IG9wYWNpdHk6IDE7IH1cbiAgICA0MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTQycHgpOyBvcGFjaXR5OiAwOyB9XG4gICAgNjAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQycHgpOyBvcGFjaXR5OiAwOyB9XG4gICAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgb3BhY2l0eTogMTsgfVxuICB9XG5cbiAgQGtleWZyYW1lcyBjYXJkU2xpZGVQcmV2IHtcbiAgICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgb3BhY2l0eTogMTsgfVxuICAgIDQwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0MnB4KTsgb3BhY2l0eTogMDsgfVxuICAgIDYwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNDJweCk7IG9wYWNpdHk6IDA7IH1cbiAgICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyBvcGFjaXR5OiAxOyB9XG4gIH1cblxuICAvKiBNb2JpbGUgbmF2aWdhdGVzIGJ5IHN3aXBlOyBkcm9wIHRoZSBhcnJvd3MgYnV0IGtlZXAgdGhlIGRvdHMuICovXG4gIC5hcnJvdyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gICNzdGF0Um93IHtcbiAgICBnYXA6IDhweDtcbiAgfVxuXG4gIC5zdGF0IHtcbiAgICBwYWRkaW5nOiAxMHB4IDRweDtcbiAgfVxuXG4gIC5zdGF0LXZhbHVlIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbn1cblxuLyogUmVzcGVjdCBhIHJlZHVjZWQtbW90aW9uIHByZWZlcmVuY2U6IHJvdGF0ZSBpbnN0YW50bHksIG5vIHNsaWRlLiBmYXZvdXJpdGVzLmpzXG4gICBzdGlsbCBhZGRzIHRoZSBjbGFzcywgYnV0IHdpdGggdGhlIGFuaW1hdGlvbiBzdXBwcmVzc2VkIGFuaW1hdGlvbmVuZCBuZXZlclxuICAgZmlyZXMsIHNvIGl0cyBzZXRUaW1lb3V0IGZhbGxiYWNrIGlzIHdoYXQgc3RyaXBzIHRoZSBjbGFzcyBiYWNrIG9mZi4gKi9cbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XG4gICN3ZWF0aGVyQ2FyZC5zbGlkZS1uZXh0LFxuICAjd2VhdGhlckNhcmQuc2xpZGUtcHJldiB7XG4gICAgYW5pbWF0aW9uOiBub25lO1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsNENBQWdDO0VBQ2hDLG9CQUFvQjtBQUN0Qjs7QUFFQTs7OztxQ0FJcUM7QUFDckM7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGVB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QUssd0JBQXdCLEVBQUUsVUFBVSxFQUFFO0lBQzNDLE1BQU0sMkJBQTJCLEVBQUUsVUFBVSxFQUFFO0lBQy9DLE1BQU0sNEJBQTRCLEVBQUUsVUFBVSxFQUFFO0lBQ2hELE9BQU8sd0JBQXdCLEVBQUUsVUFBVSxFQUFFO0VBQy9DOztFQUVBLGtFQUFrRTtFQUNsRTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFFBQVE7RUFDVjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQTs7eUVBRXlFO0FBQ3pFO0VBQ0U7O0lBRUUsZUFBZTtFQUNqQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgc3JjOiB1cmwoJy4vUm9ib3RvLVJlZ3VsYXIudHRmJyk7XFxuICBmb250LXdlaWdodDogMzAwIDQwMDtcXG59XFxuXFxuLyogUGFsZXR0ZTpcXG4gICBncm91bmQgICMxMjE4MUYgICBydWxlcyAgIzI2MzEzQlxcbiAgIHRleHQgICAgI0VBRUVGMiAocHJpbWFyeSkgLyAjOENBMEFFIChtdXRlZClcXG4gICBUaGUgdGVtcGVyYXR1cmUgY29sb3VycyBsaXZlIGluIHJpYmJvbi5qcyAodGhlIGN1cnZlIGlzIGNvbG91cmVkIGJ5IHRoZVxcbiAgIHRlbXBlcmF0dXJlIHNjYWxhciwgbm90IGJ5IENTUykuICovXFxuOnJvb3Qge1xcbiAgLS1ncm91bmQ6ICMxMjE4MUY7XFxuICAtLXJ1bGU6ICMyNjMxM0I7XFxuICAtLXRleHQ6ICNFQUVFRjI7XFxuICAtLW11dGVkOiAjOENBMEFFO1xcbiAgLS1tb25vOiAnU0ZNb25vLVJlZ3VsYXInLCAnU0YgTW9ubycsICdNZW5sbycsICdDb25zb2xhcycsICdMaWJlcmF0aW9uIE1vbm8nLCBtb25vc3BhY2U7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncm91bmQpO1xcbiAgY29sb3I6IHZhcigtLXRleHQpO1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWY7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG59XFxuXFxuLyogZHZoIChub3QgdmgpOiBvbiBpT1MgU2FmYXJpIHZoIHJlc29sdmVzIHRvIHRoZSB0YWxsIHZpZXdwb3J0IGFuZCBwYXJrcyB0aGVcXG4gICBib3R0b20gb2YgdGhlIGxheW91dCB1bmRlciB0aGUgVVJMIGJhci4gKi9cXG4jYXBwIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgLyogc3RhY2tzIHRoZSBjb25zdHJhaW5lZCBjb2x1bW4gYWJvdmUgdGhlIGZpeGVkIC53ZWF0aGVyQmcgKi9cXG4gIHotaW5kZXg6IDE7XFxuICBtaW4taGVpZ2h0OiAxMDBkdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAyOHB4O1xcbiAgbWF4LXdpZHRoOiA3MjBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogMzJweCAyMHB4O1xcbn1cXG5cXG4vKiBDb25kaXRpb24tYmFzZWQgYmFja2dyb3VuZC4gc2t5LmpzIG1vdW50cyBhIHNpbmdsZSBgLndlYXRoZXJCZ2AgYXMgdGhlIGZpcnN0XFxuICAgY2hpbGQgb2YgI2FwcCBhbmQgc3dhcHMgYSBgYmctPGNhdGVnb3J5PmAgY2xhc3Mgb250byBpdCBwZXIgZmV0Y2gsIGtleWVkIG9mZlxcbiAgIHRoZSBjdXJyZW50IGNvbmRpdGlvbiB0ZXh0IChjYXRlZ29yeUZvcigpIGluIHNreS5qcykuIEl0IGlzIGBmaXhlZGAgc28gaXRcXG4gICBzcGFucyB0aGUgd2hvbGUgYnJvd3NlciB3aW5kb3cgb24gZGVza3RvcCB3aGlsZSAjYXBwIHN0YXlzIGEgY29uc3RyYWluZWRcXG4gICBjZW50cmVkIGNvbHVtbiBhYm92ZSBpdCAoei1pbmRleCkuIEVhY2ggY2F0ZWdvcnkgcGFpbnRzIGEgZ3JhZGllbnQgYmFzZSBvbiB0aGVcXG4gICBlbGVtZW50IHBsdXMgZGVjb3JhdGl2ZSBsYXllcnMgKHN1biwgbW9vbiArIHN0YXJzLCBkcmlmdGluZyBjbG91ZHMsIGZsYWtlcyxcXG4gICBoYXplKSBvbiB0aGUgdHdvIHBzZXVkby1lbGVtZW50cy4gb3ZlcmZsb3c6IGhpZGRlbiBjbGlwcyB0aG9zZSBsYXllcnMgdG8gdGhlXFxuICAgdmlld3BvcnQgc28gYW4gb3ZlcnNpemVkIGNsb3VkIGNhbid0IHNwaWxsIGEgc2Nyb2xsYmFyLiBUaGUgZ3JhZGllbnRzIGNyb3NzLVxcbiAgIGZhZGUgKHRyYW5zaXRpb246IGJhY2tncm91bmQpIHdoZW4gdGhlIGNhdGVnb3J5IGNoYW5nZXM7IHRoZSBkZWNvcmF0aXZlXFxuICAgbW90aW9uIGxpdmVzIGluIHRoZSBwZXItY2F0ZWdvcnkga2V5ZnJhbWVzIGJlbG93LiAqL1xcbi53ZWF0aGVyQmcge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgaW5zZXQ6IDA7XFxuICB6LWluZGV4OiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzFiMjgzNiAwJSwgIzE0MWQyOSA1NSUsIHZhcigtLWdyb3VuZCkgMTAwJSk7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDYwMG1zIGVhc2U7XFxufVxcblxcbi53ZWF0aGVyQmc6OmJlZm9yZSxcXG4ud2VhdGhlckJnOjphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4vKiBEZXB0aCBwbGFuZXMgbW91bnRlZCBieSBza3kuanMgYXMgY2hpbGQgZGl2cyAoZmFyLCBtaWQsIG5lYXIsIGdyb3VuZCkuIFRoZXlcXG4gICBnaXZlIGVhY2ggY2F0ZWdvcnkgbW9yZSB0aGFuIHRoZSB0d28gcHNldWRvLWVsZW1lbnRzIGNhbiBob2xkOiBhIGNhdGVnb3J5XFxuICAgc3RhY2tzIGEgc3Vic2V0IG9mIHRoZW0g4oCUIGEgYmx1cnJlZCBmYXIgcGxhbmUsIGEgbWlkIHBsYW5lLCBhIHNoYXJwIG5lYXIgcGxhbmVcXG4gICB3aXRoIGEgZ2xvdywgYW5kIGEgZ3JvdW5kLWxpZ2h0aW5nIGFjY2VudCBhdCB0aGUgYm90dG9tIOKAlCBzbyB0aGUgaW1hZ2VyeSByZWFkc1xcbiAgIGFzIGRlcHRoIHJhdGhlciB0aGFuIGEgc2luZ2xlIGZsYXQgd2FzaC4gQW55IHBsYW5lIGEgY2F0ZWdvcnkgZG9lc24ndCBwYWludFxcbiAgIHN0YXlzIHRyYW5zcGFyZW50LiBUaGV5IHNpdCBiZXR3ZWVuIDo6YmVmb3JlIChiZWhpbmQpIGFuZCA6OmFmdGVyIChpbiBmcm9udClcXG4gICBpbiBwYWludCBvcmRlcjsgcGVyLWNhdGVnb3J5IHJ1bGVzIGxheWVyIHRoZW0gZXhwbGljaXRseSB3aGVyZSBpdCBtYXR0ZXJzLiAqL1xcbi53ZWF0aGVyQmcgPiAuYmdMYXllciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBpbnNldDogMDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuXFxuLyogR3JvdW5kIGFjY2VudCBzaGFyZWQgc2hhcGU6IGEgc29mdCBiYW5kIG9mIGxpZ2h0IGh1Z2dpbmcgdGhlIGJvdHRvbSBlZGdlLlxcbiAgIEVhY2ggY2F0ZWdvcnkgdGludHMgaXQgdmlhIC0tZ3JvdW5kLWdsb3cuICovXFxuLndlYXRoZXJCZyA+IC5iZ0xheWVyLS1ncm91bmQge1xcbiAgdG9wOiBhdXRvO1xcbiAgaGVpZ2h0OiAzNCU7XFxuICBib3R0b206IDA7XFxufVxcblxcbi8qIFNVTk5ZIOKAlCB3YXJtIGRheXRpbWUgc2t5IHdpdGggYSBzb2Z0IHN1biBnbG93IHRoYXQgc2xvd2x5IGJyZWF0aGVzLiAqL1xcbi53ZWF0aGVyQmcuYmctc3Vubnkge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzJjNGM3MiAwJSwgIzFhMmM0MCA1NSUsIHZhcigtLWdyb3VuZCkgMTAwJSk7XFxufVxcbi53ZWF0aGVyQmcuYmctc3Vubnk6OmJlZm9yZSB7XFxuICB0b3A6IC0xMiU7XFxuICByaWdodDogLTYlO1xcbiAgd2lkdGg6IDQ2dm1heDtcXG4gIGhlaWdodDogNDZ2bWF4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCBjZW50ZXIsIHJnYmEoMjE3LCAxNjQsIDY1LCAwLjQ1KSwgcmdiYSgyMTcsIDE2NCwgNjUsIDApIDY4JSk7XFxuICBhbmltYXRpb246IGJnU3VuIDE0cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XFxufVxcbi53ZWF0aGVyQmcuYmctc3Vubnk6OmFmdGVyIHtcXG4gIGJvdHRvbTogLTE4JTtcXG4gIGxlZnQ6IC0xMiU7XFxuICB3aWR0aDogNDB2bWF4O1xcbiAgaGVpZ2h0OiA0MHZtYXg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IGNlbnRlciwgcmdiYSgxMTEsIDE2OCwgMTYwLCAwLjE4KSwgcmdiYSgxMTEsIDE2OCwgMTYwLCAwKSA3MCUpO1xcbiAgYW5pbWF0aW9uOiBiZ1N1biAxOHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlLXJldmVyc2U7XFxufVxcbi8qIGZhcjogYSBoaWdoLCBibHVycmVkIHdhcm0gaGF6ZSBiYW5kIHRoYXQgc2xvd2x5IGJyZWF0aGVzIGJlaGluZCB0aGUgc3VuLiAqL1xcbi53ZWF0aGVyQmcuYmctc3VubnkgPiAuYmdMYXllci0tZmFyIHtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCgxMjAlIDYwJSBhdCA3OCUgNCUsIHJnYmEoMjE3LCAxNjQsIDY1LCAwLjIyKSwgcmdiYSgyMTcsIDE2NCwgNjUsIDApIDYwJSk7XFxuICBmaWx0ZXI6IGJsdXIoNnB4KTtcXG4gIGFuaW1hdGlvbjogYmdTdW4gMjJzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcXG59XFxuLyogbWlkOiBmYWludCBkaWFnb25hbCBsaWdodCBzaGFmdHMgc3BpbGxpbmcgZnJvbSB0aGUgc3VuLiAqL1xcbi53ZWF0aGVyQmcuYmctc3VubnkgPiAuYmdMYXllci0tbWlkIHtcXG4gIGJhY2tncm91bmQ6IHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoNjRkZWcsIHJnYmEoMjE3LCAxNjQsIDY1LCAwLjA1KSAwIDJweCwgcmdiYSgyMTcsIDE2NCwgNjUsIDApIDJweCAyNnB4KTtcXG4gIG9wYWNpdHk6IDAuNztcXG4gIGFuaW1hdGlvbjogYmdTdW4gMTZzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZS1yZXZlcnNlO1xcbn1cXG4vKiBncm91bmQ6IHdhcm0gbGlnaHQgcG9vbGluZyBhbG9uZyB0aGUgYm90dG9tIG9mIHRoZSBzY2VuZS4gKi9cXG4ud2VhdGhlckJnLmJnLXN1bm55ID4gLmJnTGF5ZXItLWdyb3VuZCB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgyMTcsIDE2NCwgNjUsIDAuMTYpLCByZ2JhKDIxNywgMTY0LCA2NSwgMCkgMTAwJSk7XFxuICBhbmltYXRpb246IGJnR3JvdW5kIDEycyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XFxufVxcblxcbi8qIENMRUFSIE5JR0hUIOKAlCBkZWVwIHNreSwgYSBsb3cgbW9vbiBnbG93LCBhbmQgYSBmaWVsZCBvZiB0d2lua2xpbmcgc3RhcnMuICovXFxuLndlYXRoZXJCZy5iZy1jbGVhci1uaWdodCB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMTAxYTJjIDAlLCAjMGQxNDIwIDU1JSwgdmFyKC0tZ3JvdW5kKSAxMDAlKTtcXG59XFxuLndlYXRoZXJCZy5iZy1jbGVhci1uaWdodDo6YmVmb3JlIHtcXG4gIGluc2V0OiAwO1xcbiAgYmFja2dyb3VuZC1pbWFnZTpcXG4gICAgcmFkaWFsLWdyYWRpZW50KDEuNnB4IDEuNnB4IGF0IDE4JSAyNCUsIHJnYmEoMjM0LCAyMzgsIDI0MiwgMC45KSwgdHJhbnNwYXJlbnQgNjAlKSxcXG4gICAgcmFkaWFsLWdyYWRpZW50KDEuMnB4IDEuMnB4IGF0IDcyJSAxNiUsIHJnYmEoMjM0LCAyMzgsIDI0MiwgMC44KSwgdHJhbnNwYXJlbnQgNjAlKSxcXG4gICAgcmFkaWFsLWdyYWRpZW50KDEuNHB4IDEuNHB4IGF0IDQyJSA2MiUsIHJnYmEoMjM0LCAyMzgsIDI0MiwgMC43NSksIHRyYW5zcGFyZW50IDYwJSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgxcHggMXB4IGF0IDg2JSA0NiUsIHJnYmEoMjM0LCAyMzgsIDI0MiwgMC43KSwgdHJhbnNwYXJlbnQgNjAlKSxcXG4gICAgcmFkaWFsLWdyYWRpZW50KDEuM3B4IDEuM3B4IGF0IDMwJSA4MiUsIHJnYmEoMjM0LCAyMzgsIDI0MiwgMC43KSwgdHJhbnNwYXJlbnQgNjAlKSxcXG4gICAgcmFkaWFsLWdyYWRpZW50KDFweCAxcHggYXQgNjAlIDc0JSwgcmdiYSgyMzQsIDIzOCwgMjQyLCAwLjYpLCB0cmFuc3BhcmVudCA2MCUpLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMS41cHggMS41cHggYXQgOCUgNTQlLCByZ2JhKDIzNCwgMjM4LCAyNDIsIDAuOCksIHRyYW5zcGFyZW50IDYwJSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgxcHggMXB4IGF0IDkyJSA3OCUsIHJnYmEoMjM0LCAyMzgsIDI0MiwgMC42NSksIHRyYW5zcGFyZW50IDYwJSk7XFxuICBhbmltYXRpb246IGJnVHdpbmtsZSA1cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XFxufVxcbi53ZWF0aGVyQmcuYmctY2xlYXItbmlnaHQ6OmFmdGVyIHtcXG4gIHRvcDogMTIlO1xcbiAgcmlnaHQ6IDE0JTtcXG4gIHdpZHRoOiA5MnB4O1xcbiAgaGVpZ2h0OiA5MnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAzOCUgMzglLCByZ2JhKDIzNCwgMjM4LCAyNDIsIDAuODUpLCByZ2JhKDE0MCwgMTYwLCAxNzQsIDAuMzUpIDYyJSwgcmdiYSgxNDAsIDE2MCwgMTc0LCAwKSA3MiUpO1xcbn1cXG4vKiBmYXI6IGEgZGVuc2UgZmllbGQgb2YgdGlueSwgZGltLCBzbGlnaHRseSBibHVycmVkIHN0YXJzIOKAlCB0aGUgZGVlcCBza3kuICovXFxuLndlYXRoZXJCZy5iZy1jbGVhci1uaWdodCA+IC5iZ0xheWVyLS1mYXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTpcXG4gICAgcmFkaWFsLWdyYWRpZW50KDAuOHB4IDAuOHB4IGF0IDEyJSAzMCUsIHJnYmEoMjM0LCAyMzgsIDI0MiwgMC41KSwgdHJhbnNwYXJlbnQgNjAlKSxcXG4gICAgcmFkaWFsLWdyYWRpZW50KDAuN3B4IDAuN3B4IGF0IDM0JSAxMiUsIHJnYmEoMjM0LCAyMzgsIDI0MiwgMC40NSksIHRyYW5zcGFyZW50IDYwJSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgwLjhweCAwLjhweCBhdCA1MiUgNDAlLCByZ2JhKDIzNCwgMjM4LCAyNDIsIDAuNSksIHRyYW5zcGFyZW50IDYwJSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgwLjZweCAwLjZweCBhdCA2OCUgMjYlLCByZ2JhKDIzNCwgMjM4LCAyNDIsIDAuNCksIHRyYW5zcGFyZW50IDYwJSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgwLjhweCAwLjhweCBhdCA4MCUgNTIlLCByZ2JhKDIzNCwgMjM4LCAyNDIsIDAuNDUpLCB0cmFuc3BhcmVudCA2MCUpLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMC43cHggMC43cHggYXQgMjQlIDY2JSwgcmdiYSgyMzQsIDIzOCwgMjQyLCAwLjQpLCB0cmFuc3BhcmVudCA2MCUpLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMC44cHggMC44cHggYXQgNDYlIDg0JSwgcmdiYSgyMzQsIDIzOCwgMjQyLCAwLjQ1KSwgdHJhbnNwYXJlbnQgNjAlKSxcXG4gICAgcmFkaWFsLWdyYWRpZW50KDAuNnB4IDAuNnB4IGF0IDc0JSA3OCUsIHJnYmEoMjM0LCAyMzgsIDI0MiwgMC40KSwgdHJhbnNwYXJlbnQgNjAlKTtcXG4gIGZpbHRlcjogYmx1cigwLjVweCk7XFxuICBvcGFjaXR5OiAwLjc7XFxuICBhbmltYXRpb246IGJnVHdpbmtsZSA3cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGUtcmV2ZXJzZTtcXG59XFxuLyogbWlkOiBhIG1vZGVyYXRlIGZpZWxkIG9mIHN0YXJzIOKAlCBicmlnaHRlciB0aGFuIHRoZSBmYXIgcGxhbmUsIG5vIGdsb3cgeWV0LFxcbiAgIHR3aW5rbGluZyBvbiBpdHMgb3duIG9mZnNldCBzbyB0aGUgdGhyZWUgc3RhciBwbGFuZXMgc2hpbW1lciBpbmRlcGVuZGVudGx5LiAqL1xcbi53ZWF0aGVyQmcuYmctY2xlYXItbmlnaHQgPiAuYmdMYXllci0tbWlkIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6XFxuICAgIHJhZGlhbC1ncmFkaWVudCgxLjRweCAxLjRweCBhdCAxNiUgMjIlLCByZ2JhKDIzNCwgMjM4LCAyNDIsIDAuNyksIHRyYW5zcGFyZW50IDYwJSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgxLjJweCAxLjJweCBhdCA0MCUgMzQlLCByZ2JhKDIzNCwgMjM4LCAyNDIsIDAuNjUpLCB0cmFuc3BhcmVudCA2MCUpLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMS41cHggMS41cHggYXQgNTglIDE4JSwgcmdiYSgyMzQsIDIzOCwgMjQyLCAwLjcpLCB0cmFuc3BhcmVudCA2MCUpLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMS4ycHggMS4ycHggYXQgNzYlIDQ0JSwgcmdiYSgyMzQsIDIzOCwgMjQyLCAwLjYpLCB0cmFuc3BhcmVudCA2MCUpLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMS40cHggMS40cHggYXQgMzQlIDcwJSwgcmdiYSgyMzQsIDIzOCwgMjQyLCAwLjYyKSwgdHJhbnNwYXJlbnQgNjAlKSxcXG4gICAgcmFkaWFsLWdyYWRpZW50KDEuMnB4IDEuMnB4IGF0IDg4JSA2NiUsIHJnYmEoMjM0LCAyMzgsIDI0MiwgMC42KSwgdHJhbnNwYXJlbnQgNjAlKTtcXG4gIG9wYWNpdHk6IDAuODU7XFxuICBhbmltYXRpb246IGJnVHdpbmtsZSA2cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XFxufVxcbi8qIG5lYXI6IGEgZmV3IGxhcmdlIGZvcmVncm91bmQgc3RhcnMsIGVhY2ggd2l0aCBhIHNvZnQgZHJvcC1zaGFkb3cgZ2xvdy4gKi9cXG4ud2VhdGhlckJnLmJnLWNsZWFyLW5pZ2h0ID4gLmJnTGF5ZXItLW5lYXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTpcXG4gICAgcmFkaWFsLWdyYWRpZW50KDIuNHB4IDIuNHB4IGF0IDIyJSAyMCUsIHJnYmEoMjM0LCAyMzgsIDI0MiwgMSksIHRyYW5zcGFyZW50IDYyJSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgycHggMnB4IGF0IDY0JSA1OCUsIHJnYmEoMjM0LCAyMzgsIDI0MiwgMC45NSksIHRyYW5zcGFyZW50IDYyJSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgyLjZweCAyLjZweCBhdCA4NCUgMzIlLCByZ2JhKDIzNCwgMjM4LCAyNDIsIDEpLCB0cmFuc3BhcmVudCA2MiUpO1xcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgNHB4IHJnYmEoMjM0LCAyMzgsIDI0MiwgMC43KSk7XFxuICBhbmltYXRpb246IGJnVHdpbmtsZSAzLjRzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcXG59XFxuLyogZ3JvdW5kOiBjb29sIG1vb25saWdodCBwb29saW5nIGZhaW50bHkgYWxvbmcgdGhlIGhvcml6b24uICovXFxuLndlYXRoZXJCZy5iZy1jbGVhci1uaWdodCA+IC5iZ0xheWVyLS1ncm91bmQge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMTQwLCAxNjAsIDE3NCwgMC4xNCksIHJnYmEoMTQwLCAxNjAsIDE3NCwgMCkgMTAwJSk7XFxuICBhbmltYXRpb246IGJnR3JvdW5kIDE0cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XFxufVxcblxcbi8qIENMT1VEWSAoYWxzbyBvdmVyY2FzdCwgcGFydGx5LCBhbmQgdGhlIG5ldXRyYWwgZmFsbGJhY2spIOKAlCBjb29sIGdyZXktYmx1ZSB3aXRoXFxuICAgdHdvIHNvZnQgY2xvdWQgbWFzc2VzIGRyaWZ0aW5nIGxhdGVyYWxseS4gKi9cXG4ud2VhdGhlckJnLmJnLWNsb3VkeSB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMjMzMDNmIDAlLCAjMTcyMjMwIDU1JSwgdmFyKC0tZ3JvdW5kKSAxMDAlKTtcXG59XFxuLndlYXRoZXJCZy5iZy1jbG91ZHk6OmJlZm9yZSB7XFxuICB0b3A6IDE0JTtcXG4gIGxlZnQ6IC0yMCU7XFxuICB3aWR0aDogNTV2bWF4O1xcbiAgaGVpZ2h0OiAyNHZtYXg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IGNlbnRlciwgcmdiYSgxNDAsIDE2MCwgMTc0LCAwLjIpLCByZ2JhKDE0MCwgMTYwLCAxNzQsIDApIDcwJSk7XFxuICBhbmltYXRpb246IGJnQ2xvdWQgNDBzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcXG59XFxuLndlYXRoZXJCZy5iZy1jbG91ZHk6OmFmdGVyIHtcXG4gIGJvdHRvbTogMTAlO1xcbiAgcmlnaHQ6IC0yNCU7XFxuICB3aWR0aDogNjB2bWF4O1xcbiAgaGVpZ2h0OiAyNnZtYXg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IGNlbnRlciwgcmdiYSgxMTEsIDEzMCwgMTQ4LCAwLjE2KSwgcmdiYSgxMTEsIDEzMCwgMTQ4LCAwKSA3MCUpO1xcbiAgYW5pbWF0aW9uOiBiZ0Nsb3VkIDUycyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGUtcmV2ZXJzZTtcXG59XFxuLyogZmFyOiBhIHdpZGUsIGhlYXZpbHkgYmx1cnJlZCBjbG91ZCBiYW5kIGhpZ2ggaW4gdGhlIHNjZW5lLCBiYXJlbHkgbW92aW5nLiAqL1xcbi53ZWF0aGVyQmcuYmctY2xvdWR5ID4gLmJnTGF5ZXItLWZhciB7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoODAlIDQwJSBhdCAzMCUgMjIlLCByZ2JhKDE0MCwgMTYwLCAxNzQsIDAuMTYpLCByZ2JhKDE0MCwgMTYwLCAxNzQsIDApIDcwJSk7XFxuICBmaWx0ZXI6IGJsdXIoMTBweCk7XFxuICBhbmltYXRpb246IGJnQ2xvdWQgNzBzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZS1yZXZlcnNlO1xcbn1cXG4vKiBtaWQ6IGEgbW9kZXJhdGUgY2xvdWQgbWFzcyBkcmlmdGluZyBhdCBhIG1pZGRsaW5nIHBhY2UgYW5kIGJsdXIsIHNpdHRpbmdcXG4gICBiZXR3ZWVuIHRoZSBmYXIgaGF6ZSBhbmQgdGhlIHNoYXJwIG5lYXIgY2xvdWQuICovXFxuLndlYXRoZXJCZy5iZy1jbG91ZHkgPiAuYmdMYXllci0tbWlkIHtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCg1MiUgMzAlIGF0IDQ2JSAzMiUsIHJnYmEoMTU4LCAxNzYsIDE5MCwgMC4xOCksIHJnYmEoMTU4LCAxNzYsIDE5MCwgMCkgNzAlKTtcXG4gIGZpbHRlcjogYmx1cig1cHgpO1xcbiAgYW5pbWF0aW9uOiBiZ0Nsb3VkIDQ4cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XFxufVxcbi8qIG5lYXI6IGEgc21hbGxlciwgc2hhcnBlciBjbG91ZCBkcmlmdGluZyBmYXN0ZXIgYWNyb3NzIHRoZSBmb3JlZ3JvdW5kLiAqL1xcbi53ZWF0aGVyQmcuYmctY2xvdWR5ID4gLmJnTGF5ZXItLW5lYXIge1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KDM0JSAyNiUgYXQgNjIlIDQwJSwgcmdiYSgxNzYsIDE5MiwgMjA0LCAwLjIpLCByZ2JhKDE3NiwgMTkyLCAyMDQsIDApIDY4JSk7XFxuICBmaWx0ZXI6IGJsdXIoMnB4KTtcXG4gIGFuaW1hdGlvbjogYmdDbG91ZCAzMHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xcbn1cXG4vKiBncm91bmQ6IGRpbSBob3Jpem9uIGxpZ2h0IHVuZGVyIHRoZSBvdmVyY2FzdC4gKi9cXG4ud2VhdGhlckJnLmJnLWNsb3VkeSA+IC5iZ0xheWVyLS1ncm91bmQge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMTQwLCAxNjAsIDE3NCwgMC4xMiksIHJnYmEoMTQwLCAxNjAsIDE3NCwgMCkgMTAwJSk7XFxuICBhbmltYXRpb246IGJnR3JvdW5kIDE2cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XFxufVxcblxcbi8qIFJBSU4gKGFsc28gZHJpenpsZSwgc2hvd2VycywgdGh1bmRlcikg4oCUIGRhcmtlciBza3ksIGEgaGVhdnkgZHJpZnRpbmcgY2xvdWQsXFxuICAgYW5kIGEgZmFpbnQgZGlhZ29uYWwgcmFpbiBzaGVlbiBzbGlkaW5nIGRvd24uICovXFxuLndlYXRoZXJCZy5iZy1yYWluIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMxYzI3MzQgMCUsICMxMjFiMjYgNTUlLCB2YXIoLS1ncm91bmQpIDEwMCUpO1xcbn1cXG4ud2VhdGhlckJnLmJnLXJhaW46OmJlZm9yZSB7XFxuICB0b3A6IC04JTtcXG4gIGxlZnQ6IC0xOCU7XFxuICB3aWR0aDogNjJ2bWF4O1xcbiAgaGVpZ2h0OiAzMHZtYXg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IGNlbnRlciwgcmdiYSgxMjAsIDE0MCwgMTU4LCAwLjIyKSwgcmdiYSgxMjAsIDE0MCwgMTU4LCAwKSA3MCUpO1xcbiAgYW5pbWF0aW9uOiBiZ0Nsb3VkIDQ2cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XFxufVxcbi53ZWF0aGVyQmcuYmctcmFpbjo6YWZ0ZXIge1xcbiAgaW5zZXQ6IDA7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KDc0ZGVnLCByZ2JhKDE2MCwgMTkwLCAyMTQsIDAuMDcpIDAgMXB4LCByZ2JhKDE2MCwgMTkwLCAyMTQsIDApIDFweCA5cHgpO1xcbiAgYW5pbWF0aW9uOiBiZ1JhaW4gMC45cyBsaW5lYXIgaW5maW5pdGU7XFxufVxcbi8qIGZhcjogYSBicm9hZCwgYmx1cnJlZCBzdG9ybSBjbG91ZCBkcmlmdGluZyBzbG93bHkgaGlnaCBvdmVyaGVhZC4gKi9cXG4ud2VhdGhlckJnLmJnLXJhaW4gPiAuYmdMYXllci0tZmFyIHtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudCg5MCUgNDQlIGF0IDY2JSAxMiUsIHJnYmEoMTIwLCAxNDAsIDE1OCwgMC4yKSwgcmdiYSgxMjAsIDE0MCwgMTU4LCAwKSA3MCUpO1xcbiAgZmlsdGVyOiBibHVyKDlweCk7XFxuICBhbmltYXRpb246IGJnQ2xvdWQgNjBzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZS1yZXZlcnNlO1xcbn1cXG4vKiBtaWQ6IGEgbWlkZGxlIHNoZWV0IG9mIHJhaW4gc3RyZWFrcyBiZXR3ZWVuIHRoZSBiYXNlIDo6YWZ0ZXIgc2hlZW4gYW5kIHRoZVxcbiAgIGNvYXJzZSBuZWFyIHN0cmVha3Mg4oCUIG1vZGVyYXRlIGFuZ2xlLCBnYXVnZSBhbmQgc3BlZWQuICovXFxuLndlYXRoZXJCZy5iZy1yYWluID4gLmJnTGF5ZXItLW1pZCB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KDc2ZGVnLCByZ2JhKDE3MCwgMTk4LCAyMjAsIDAuMDkpIDAgMXB4LCByZ2JhKDE3MCwgMTk4LCAyMjAsIDApIDFweCAxMnB4KTtcXG4gIGFuaW1hdGlvbjogYmdSYWluIDAuNzJzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuLyogbmVhcjogY29hcnNlciwgZmFzdGVyIHJhaW4gc3RyZWFrcyBhdCBhIHN0ZWVwZXIgYW5nbGUgZm9yIGZvcmVncm91bmQgZGVwdGguICovXFxuLndlYXRoZXJCZy5iZy1yYWluID4gLmJnTGF5ZXItLW5lYXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCg3OGRlZywgcmdiYSgxODAsIDIwNiwgMjI2LCAwLjExKSAwIDJweCwgcmdiYSgxODAsIDIwNiwgMjI2LCAwKSAycHggMTVweCk7XFxuICBhbmltYXRpb246IGJnUmFpbk5lYXIgMC41NXMgbGluZWFyIGluZmluaXRlO1xcbn1cXG4vKiBncm91bmQ6IGEgd2V0IHNoZWVuIGNhdGNoaW5nIHRoZSBsaWdodCBhdCB0aGUgYm90dG9tIG9mIHRoZSBzY2VuZS4gKi9cXG4ud2VhdGhlckJnLmJnLXJhaW4gPiAuYmdMYXllci0tZ3JvdW5kIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDEyMCwgMTQwLCAxNTgsIDAuMTgpLCByZ2JhKDEyMCwgMTQwLCAxNTgsIDApIDEwMCUpO1xcbiAgYW5pbWF0aW9uOiBiZ0dyb3VuZCA5cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XFxufVxcblxcbi8qIFNOT1cg4oCUIGNvb2wgbGlnaHQgc2t5IHdpdGggc2xvd2x5IGRyaWZ0aW5nIGZsYWtlcy4gKi9cXG4ud2VhdGhlckJnLmJnLXNub3cge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzJhMzk0OSAwJSwgIzFhMjYzNCA1NSUsIHZhcigtLWdyb3VuZCkgMTAwJSk7XFxufVxcbi53ZWF0aGVyQmcuYmctc25vdzo6YmVmb3JlLFxcbi53ZWF0aGVyQmcuYmctc25vdzo6YWZ0ZXIge1xcbiAgaW5zZXQ6IDA7XFxuICBiYWNrZ3JvdW5kLWltYWdlOlxcbiAgICByYWRpYWwtZ3JhZGllbnQoMnB4IDJweCBhdCAyMCUgMTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCksIHRyYW5zcGFyZW50IDYwJSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgyLjRweCAyLjRweCBhdCA2NiUgMjIlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyksIHRyYW5zcGFyZW50IDYwJSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgxLjhweCAxLjhweCBhdCA0MCUgNDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpLCB0cmFuc3BhcmVudCA2MCUpLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMnB4IDJweCBhdCA4NCUgNTQlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyksIHRyYW5zcGFyZW50IDYwJSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgyLjJweCAyLjJweCBhdCAxMiUgNzAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyksIHRyYW5zcGFyZW50IDYwJSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgxLjhweCAxLjhweCBhdCA1NCUgODYlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjUpLCB0cmFuc3BhcmVudCA2MCUpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDUwJTtcXG59XFxuLndlYXRoZXJCZy5iZy1zbm93OjpiZWZvcmUge1xcbiAgYW5pbWF0aW9uOiBiZ1Nub3cgMTRzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuLndlYXRoZXJCZy5iZy1zbm93OjphZnRlciB7XFxuICBvcGFjaXR5OiAwLjY7XFxuICBhbmltYXRpb246IGJnU25vdyAyMnMgbGluZWFyIGluZmluaXRlO1xcbn1cXG4vKiBmYXI6IHRpbnksIGZhaW50LCBibHVycmVkIGZsYWtlcyBmYWxsaW5nIHNsb3dseSBpbiB0aGUgZGVlcCBiYWNrZ3JvdW5kLiAqL1xcbi53ZWF0aGVyQmcuYmctc25vdyA+IC5iZ0xheWVyLS1mYXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTpcXG4gICAgcmFkaWFsLWdyYWRpZW50KDFweCAxcHggYXQgMTYlIDEyJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU1KSwgdHJhbnNwYXJlbnQgNjAlKSxcXG4gICAgcmFkaWFsLWdyYWRpZW50KDEuMnB4IDEuMnB4IGF0IDQ4JSAyNiUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSwgdHJhbnNwYXJlbnQgNjAlKSxcXG4gICAgcmFkaWFsLWdyYWRpZW50KDFweCAxcHggYXQgNzIlIDE4JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLCB0cmFuc3BhcmVudCA2MCUpLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMS4xcHggMS4xcHggYXQgMzAlIDQ0JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLCB0cmFuc3BhcmVudCA2MCUpLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMXB4IDFweCBhdCA4OCUgNDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpLCB0cmFuc3BhcmVudCA2MCUpLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMS4ycHggMS4ycHggYXQgNjAlIDYyJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLCB0cmFuc3BhcmVudCA2MCUpLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMXB4IDFweCBhdCAyMiUgNzglLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpLCB0cmFuc3BhcmVudCA2MCUpLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMS4xcHggMS4xcHggYXQgNzglIDg0JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KSwgdHJhbnNwYXJlbnQgNjAlKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSA1MCU7XFxuICBmaWx0ZXI6IGJsdXIoMXB4KTtcXG4gIG9wYWNpdHk6IDAuNztcXG4gIGFuaW1hdGlvbjogYmdTbm93IDMwcyBsaW5lYXIgaW5maW5pdGU7XFxufVxcbi8qIG1pZDogbWVkaXVtIGZsYWtlcyBhdCBhIG1vZGVyYXRlIHBhY2UgYW5kIGEgaGFpciBvZiBibHVyIOKAlCB0aGUgbWlkZGxlIHBsYW5lXFxuICAgdGhhdCBmaWxscyB0aGUgZ2FwIGJldHdlZW4gdGhlIGZhaW50IGZhciBmaWVsZCBhbmQgdGhlIGdsb3dpbmcgbmVhciBmbGFrZXMsIHNvXFxuICAgc25vdyByZWFkcyBhcyB0aHJlZSBkZXB0aCBsYXllcnMgcmF0aGVyIHRoYW4gYSBmb3JlZ3JvdW5kLWFuZC1iYWNrZHJvcCBwYWlyLiAqL1xcbi53ZWF0aGVyQmcuYmctc25vdyA+IC5iZ0xheWVyLS1taWQge1xcbiAgYmFja2dyb3VuZC1pbWFnZTpcXG4gICAgcmFkaWFsLWdyYWRpZW50KDJweCAycHggYXQgMjQlIDE4JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KSwgdHJhbnNwYXJlbnQgNjAlKSxcXG4gICAgcmFkaWFsLWdyYWRpZW50KDIuMnB4IDIuMnB4IGF0IDU4JSAzMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSwgdHJhbnNwYXJlbnQgNjAlKSxcXG4gICAgcmFkaWFsLWdyYWRpZW50KDEuOXB4IDEuOXB4IGF0IDgyJSAyNCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43MiksIHRyYW5zcGFyZW50IDYwJSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgyLjFweCAyLjFweCBhdCAzOCUgNTIlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyksIHRyYW5zcGFyZW50IDYwJSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgycHggMnB4IGF0IDcwJSA2NiUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42OCksIHRyYW5zcGFyZW50IDYwJSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgyLjJweCAyLjJweCBhdCAxNiUgODAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjgpLCB0cmFuc3BhcmVudCA2MCUpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDUwJTtcXG4gIGZpbHRlcjogYmx1cigwLjRweCk7XFxuICBvcGFjaXR5OiAwLjg1O1xcbiAgYW5pbWF0aW9uOiBiZ1Nub3cgMTZzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuLyogbmVhcjogbGFyZ2UgZm9yZWdyb3VuZCBmbGFrZXMgd2l0aCBhIHNvZnQgZ2xvdywgZmFsbGluZyBmYXN0LiAqL1xcbi53ZWF0aGVyQmcuYmctc25vdyA+IC5iZ0xheWVyLS1uZWFyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6XFxuICAgIHJhZGlhbC1ncmFkaWVudCgzLjRweCAzLjRweCBhdCAyNiUgMTYlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTUpLCB0cmFuc3BhcmVudCA2MiUpLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoM3B4IDNweCBhdCA2MiUgMzQlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSksIHRyYW5zcGFyZW50IDYyJSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgzLjZweCAzLjZweCBhdCA4NCUgNjAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTUpLCB0cmFuc3BhcmVudCA2MiUpLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMy4ycHggMy4ycHggYXQgMTQlIDY4JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpLCB0cmFuc3BhcmVudCA2MiUpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDUwJTtcXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDNweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykpO1xcbiAgYW5pbWF0aW9uOiBiZ1Nub3cgOHMgbGluZWFyIGluZmluaXRlO1xcbn1cXG4vKiBncm91bmQ6IGEgbGl0IGJhbmQgb2Ygc2V0dGxlZCBzbm93IGdsb3dpbmcgYXQgdGhlIGJvdHRvbSBvZiB0aGUgc2NlbmUuICovXFxuLndlYXRoZXJCZy5iZy1zbm93ID4gLmJnTGF5ZXItLWdyb3VuZCB7XFxuICBoZWlnaHQ6IDMwJTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDIzNCwgMjQwLCAyNDYsIDAuMjgpLCByZ2JhKDIzNCwgMjQwLCAyNDYsIDAuMDUpIDYwJSwgcmdiYSgyMzQsIDI0MCwgMjQ2LCAwKSAxMDAlKTtcXG4gIGFuaW1hdGlvbjogYmdHcm91bmQgMTFzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcXG59XFxuXFxuLyogRk9HIChhbHNvIG1pc3QsIGhhemUpIOKAlCBtdXRlZCBza3kgd2l0aCBzbG93IGhvcml6b250YWwgaGF6ZSBiYW5kcy4gKi9cXG4ud2VhdGhlckJnLmJnLWZvZyB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMjMyYzM1IDAlLCAjMTgyMDI5IDU1JSwgdmFyKC0tZ3JvdW5kKSAxMDAlKTtcXG59XFxuLndlYXRoZXJCZy5iZy1mb2c6OmJlZm9yZSB7XFxuICBpbnNldDogMDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6XFxuICAgIGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDE0MCwgMTYwLCAxNzQsIDApIDAlLCByZ2JhKDE0MCwgMTYwLCAxNzQsIDAuMTIpIDMwJSwgcmdiYSgxNDAsIDE2MCwgMTc0LCAwKSA0NiUpLFxcbiAgICBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgxNDAsIDE2MCwgMTc0LCAwKSA1NCUsIHJnYmEoMTQwLCAxNjAsIDE3NCwgMC4xKSA3MiUsIHJnYmEoMTQwLCAxNjAsIDE3NCwgMCkgODglKTtcXG4gIGFuaW1hdGlvbjogYmdGb2cgMjRzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcXG59XFxuLyogZmFyOiBhIHRoaW4sIGhpZ2ggaGF6ZSBiYW5kIGRyaWZ0aW5nIHRoZSBvdGhlciB3YXksIHNsb3dlci4gKi9cXG4ud2VhdGhlckJnLmJnLWZvZyA+IC5iZ0xheWVyLS1mYXIge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMTQwLCAxNjAsIDE3NCwgMCkgOCUsIHJnYmEoMTQwLCAxNjAsIDE3NCwgMC4wOCkgMjIlLCByZ2JhKDE0MCwgMTYwLCAxNzQsIDApIDM4JSk7XFxuICBmaWx0ZXI6IGJsdXIoM3B4KTtcXG4gIG9wYWNpdHk6IDAuODtcXG4gIGFuaW1hdGlvbjogYmdGb2cgMzRzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZS1yZXZlcnNlO1xcbn1cXG4vKiBtaWQ6IGEgbWlkZGxlIGhhemUgYmFuZCBkcmlmdGluZyBiZXR3ZWVuIHRoZSB0aGluIGZhciBiYW5kIGFuZCB0aGUgbG93IG5lYXJcXG4gICBtYXNzLCBtb2RlcmF0ZWx5IGJsdXJyZWQuICovXFxuLndlYXRoZXJCZy5iZy1mb2cgPiAuYmdMYXllci0tbWlkIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDE1MCwgMTY4LCAxODIsIDApIDI0JSwgcmdiYSgxNTAsIDE2OCwgMTgyLCAwLjEpIDQ0JSwgcmdiYSgxNTAsIDE2OCwgMTgyLCAwKSA2MiUpO1xcbiAgZmlsdGVyOiBibHVyKDVweCk7XFxuICBvcGFjaXR5OiAwLjg1O1xcbiAgYW5pbWF0aW9uOiBiZ0ZvZyAyNnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xcbn1cXG4vKiBuZWFyOiBhIHNvZnQsIGhlYXZpbHkgYmx1cnJlZCBoYXplIG1hc3MgbG93IGluIHRoZSBzY2VuZS4gKi9cXG4ud2VhdGhlckJnLmJnLWZvZyA+IC5iZ0xheWVyLS1uZWFyIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDE3NiwgMTkyLCAyMDQsIDAuMTQpIDAlLCByZ2JhKDE3NiwgMTkyLCAyMDQsIDAuMDYpIDQwJSwgcmdiYSgxNzYsIDE5MiwgMjA0LCAwKSA2OCUpO1xcbiAgZmlsdGVyOiBibHVyKDhweCk7XFxuICBhbmltYXRpb246IGJnRm9nIDE4cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XFxufVxcbi8qIGdyb3VuZDogYSBkZW5zZSBmb2cgcG9vbCBzZXR0bGluZyBhbG9uZyB0aGUgYm90dG9tLiAqL1xcbi53ZWF0aGVyQmcuYmctZm9nID4gLmJnTGF5ZXItLWdyb3VuZCB7XFxuICBoZWlnaHQ6IDQyJTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDE3NiwgMTkyLCAyMDQsIDAuMjIpLCByZ2JhKDE3NiwgMTkyLCAyMDQsIDApIDEwMCUpO1xcbiAgYW5pbWF0aW9uOiBiZ0dyb3VuZCAxNXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJnU3VuIHtcXG4gIDAlICAgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgxKTsgICAgICAgIG9wYWNpdHk6IDAuNzsgfVxcbiAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC00JSwgMyUpIHNjYWxlKDEuMTIpOyAgb3BhY2l0eTogMTsgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJnVHdpbmtsZSB7XFxuICAwJSAgIHsgb3BhY2l0eTogMC40OyB9XFxuICAxMDAlIHsgb3BhY2l0eTogMTsgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJnQ2xvdWQge1xcbiAgMCUgICB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfVxcbiAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMCUpOyB9XFxufVxcblxcbkBrZXlmcmFtZXMgYmdSYWluIHtcXG4gIDAlICAgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7IH1cXG4gIDEwMCUgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOXB4IDMycHg7IH1cXG59XFxuXFxuQGtleWZyYW1lcyBiZ1Nub3cge1xcbiAgMCUgICB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTsgfVxcbiAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJnRm9nIHtcXG4gIDAlICAgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTQlKTsgb3BhY2l0eTogMC43OyB9XFxuICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDQlKTsgIG9wYWNpdHk6IDE7IH1cXG59XFxuXFxuLyogQSBzdGVlcGVyLCBmYXN0ZXIgZmFsbCBmb3IgdGhlIG5lYXIgcmFpbiBwbGFuZSBzbyBpdCByZWFkcyBhaGVhZCBvZiA6OmFmdGVyLiAqL1xcbkBrZXlmcmFtZXMgYmdSYWluTmVhciB7XFxuICAwJSAgIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwOyB9XFxuICAxMDAlIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE1cHggNDRweDsgfVxcbn1cXG5cXG4vKiBBIGdlbnRsZSBicmVhdGhlIGZvciB0aGUgZ3JvdW5kLWxpZ2h0aW5nIGFjY2VudCBhY3Jvc3MgZXZlcnkgY2F0ZWdvcnkuICovXFxuQGtleWZyYW1lcyBiZ0dyb3VuZCB7XFxuICAwJSAgIHsgb3BhY2l0eTogMC42NTsgfVxcbiAgMTAwJSB7IG9wYWNpdHk6IDE7IH1cXG59XFxuXFxuLyogRnJvemVuIHdoaWxlIHRoZSB0YWIgaXMgaGlkZGVuIChza3kuanMgdG9nZ2xlcyAucGF1c2VkIG9uIHZpc2liaWxpdHljaGFuZ2UpLiAqL1xcbi53ZWF0aGVyQmcucGF1c2VkOjpiZWZvcmUsXFxuLndlYXRoZXJCZy5wYXVzZWQ6OmFmdGVyLFxcbi53ZWF0aGVyQmcucGF1c2VkID4gLmJnTGF5ZXIge1xcbiAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHBhdXNlZDtcXG59XFxuXFxuLyogSGFsdCBldmVyeSB0cmVhdG1lbnQncyBtb3Rpb24gdW5kZXIgYSByZWR1Y2VkLW1vdGlvbiBwcmVmZXJlbmNlIOKAlCBvbmUgc3RhdGljXFxuICAgZnJhbWUgcGVyIGNhdGVnb3J5LiAqL1xcbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XFxuICAud2VhdGhlckJnOjpiZWZvcmUsXFxuICAud2VhdGhlckJnOjphZnRlcixcXG4gIC53ZWF0aGVyQmcgPiAuYmdMYXllciB7XFxuICAgIGFuaW1hdGlvbjogbm9uZTtcXG4gIH1cXG59XFxuXFxuLyogVGhlIHJpYmJvbiBhbmQgaXRzIHJlYWRvdXQgc2hhcmUgb25lIGZsZXggY29sdW1uIHNvIGEgbW9iaWxlIGxvY2F0aW9uIHJvdGF0aW9uXFxuICAgc2xpZGVzIHRoZW0gYXMgYSBzaW5nbGUgdW5pdC4gSXQgY2FycmllcyB0aGUgc2FtZSAyOHB4IGdhcCAjYXBwIHVzZWQgdG8gcHV0XFxuICAgYmV0d2VlbiB0aGUgcmliYm9uIGFuZCB0aGUgcmVhZG91dCwgc28gd3JhcHBpbmcgdGhlbSBpcyBsYXlvdXQtdHJhbnNwYXJlbnQuICovXFxuI3dlYXRoZXJDYXJkIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgLyogc3RhY2tzIGFib3ZlIHRoZSAud2VhdGhlckJnIGRyaWZ0IGxheWVyICovXFxuICB6LWluZGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDI4cHg7XFxufVxcblxcbi8qIFJpYmJvbjogdGhlIFNWRyBzY2FsZXMgdG8gdGhlIGNvbHVtbiB3aWR0aCB2aWEgdGhlIHZpZXdCb3gsIHNvIGFsbCA3MiBob3Vyc1xcbiAgIGFyZSBvbiBzY3JlZW4gYXQgYW55IHdpZHRoIGRvd24gdG8gMzgwcHggd2l0aG91dCBzY3JvbGwgb3IgcGFuLiAqL1xcbiNyaWJib25XcmFwIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jcmliYm9uU3ZnIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLnJpYmJvbi1jdXJ2ZSB7XFxuICBzdHJva2Utd2lkdGg6IDIuNTtcXG4gIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcXG4gIHN0cm9rZS1saW5lam9pbjogcm91bmQ7XFxufVxcblxcbi8qIERheSBib3VuZGFyeSBoYWlybGluZXMgYXQgaG91cnMgMjQgYW5kIDQ4LiAqL1xcbi5yaWJib24taGFpcmxpbmUge1xcbiAgc3Ryb2tlOiB2YXIoLS1ydWxlKTtcXG4gIHN0cm9rZS13aWR0aDogMTtcXG59XFxuXFxuLnJpYmJvbi10aWNrIHtcXG4gIGZpbGw6IHZhcigtLW11dGVkKTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tb25vKTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxufVxcblxcbi5yaWJib24tbm93bGluZSB7XFxuICBzdHJva2U6IHZhcigtLW11dGVkKTtcXG4gIHN0cm9rZS13aWR0aDogMTtcXG4gIHN0cm9rZS1kYXNoYXJyYXk6IDIgMztcXG4gIG9wYWNpdHk6IDAuNztcXG59XFxuXFxuLnJpYmJvbi1kb3Qge1xcbiAgc3Ryb2tlOiB2YXIoLS1ncm91bmQpO1xcbiAgc3Ryb2tlLXdpZHRoOiAyO1xcbn1cXG5cXG4vKiBSZWFkb3V0IGJlbmVhdGggdGhlIGN1cnZlLiAqL1xcbiNyZWFkb3V0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4vKiBMb2NhdGlvbiBuYW1lIHBhaXJlZCB3aXRoIHRoZSBDL0YgdW5pdCBzd2l0Y2ggb24gb25lIGNlbnRlcmVkIHJvdy4gKi9cXG4jbG9jYXRpb25Sb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuI2xvY2F0aW9uTmFtZSB7XFxuICBmb250LWZhbWlseTogdmFyKC0tbW9ubyk7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XFxufVxcblxcbi8qIFNlZ21lbnRlZCBDL0YgdG9nZ2xlOiBhIGNvbXBhY3QgcGlsbCwgdGhlIGFjdGl2ZSBvcHRpb24gZmlsbGVkIHdpdGggdGhlIHJ1bGVcXG4gICBjb2xvdXIuIERpc3BsYXktb25seSDigJQgZmxpcHMgdGhlIHRlbXBlcmF0dXJlIHJlYWRvdXRzIGJldHdlZW4gwrBDIGFuZCDCsEYuICovXFxuI3VuaXRTd2l0Y2gge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXJ1bGUpO1xcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4udW5pdE9wdCB7XFxuICBmb250LWZhbWlseTogdmFyKC0tbW9ubyk7XFxuICBmb250LXNpemU6IDExcHg7XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgcGFkZGluZzogM3B4IDlweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnVuaXRPcHQuYWN0aXZlIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXJ1bGUpO1xcbiAgY29sb3I6IHZhcigtLXRleHQpO1xcbn1cXG5cXG4vKiBTYXZlZC1sb2NhdGlvbiBuYXZpZ2F0aW9uOiBwcmV2L25leHQgY2hldnJvbnMgZmxhbmtpbmcgdGhlIGRvdCByb3cuIFRoZSB3aG9sZVxcbiAgIHJvdyBpcyBoaWRkZW4gYXQgYSBjb3VudCBvZiBvbmUgKGEgc2luZ2xlIGxvY2F0aW9uIG5lZWRzIG5vIGFmZm9yZGFuY2UpOyB0aGVcXG4gICBhcnJvd3MgYXJlIGRlc2t0b3Atb25seSBhbmQgZHJvcCBvdXQgYXQg4omkNDgwcHggd2hlcmUgc3dpcGUgdGFrZXMgb3Zlci4gKi9cXG4ubmF2Um93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICBtYXJnaW46IDRweCAwIDJweDtcXG59XFxuXFxuLm5hdlJvdy5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmFycm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hcnJvdzpob3ZlciB7XFxuICBjb2xvcjogI0VBRUVGMjtcXG59XFxuXFxuLmFycm93IHN2ZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAxNHB4O1xcbn1cXG5cXG4vKiBTYXZlZC1sb2NhdGlvbiBkb3RzOiBvbmUgcGVyIHNhdmVkIGxvY2F0aW9uLCB0aGUgYWN0aXZlIG9uZSBmaWxsZWQuICovXFxuI2RvdFJvdyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qIG9mZnNldCBwYXJlbnQgZm9yIHRoZSBkZXNrdG9wIHJlbW92ZSBwb3BvdmVyICovXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA4cHg7XFxufVxcblxcbi5kb3Qge1xcbiAgd2lkdGg6IDhweDtcXG4gIGhlaWdodDogOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZDogIzJFM0I0NTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xcbn1cXG5cXG4uZG90LmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kOiAjRUFFRUYyO1xcbn1cXG5cXG4vKiBEZXNrdG9wIHJlbW92ZS1jb25maXJtYXRpb24gcG9wb3ZlciwgYW5jaG9yZWQgYWJvdmUgdGhlIGxvbmctcHJlc3NlZCBkb3QuXFxuICAgVG91Y2gga2VlcHMgdGhlIG5hdGl2ZSBjb25maXJtOyB0aGlzIGlzIHRoZSBtb3VzZS9wZW4gcGF0aC4gKi9cXG4ucmVtb3ZlUG9wb3ZlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IGNhbGMoMTAwJSArIDEwcHgpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgei1pbmRleDogMjA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDhweDtcXG4gIHBhZGRpbmc6IDEwcHggMTJweDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWdyb3VuZCk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ydWxlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJveC1zaGFkb3c6IDAgNnB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjQ1KTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi8qIERvd253YXJkIHBvaW50ZXIgYXJyb3csIGJvcmRlcmVkOiBvdXRlciB0cmlhbmdsZSBpbiB0aGUgcnVsZSBjb2xvdXIgd2l0aCBhblxcbiAgIGlubmVyIGdyb3VuZC1maWxsZWQgdHJpYW5nbGUgbGFpZCBhIHBpeGVsIGhpZ2hlciBvbiB0b3Agb2YgaXQuICovXFxuLnJlbW92ZVBvcG92ZXI6OmJlZm9yZSxcXG4ucmVtb3ZlUG9wb3Zlcjo6YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICB3aWR0aDogMDtcXG4gIGhlaWdodDogMDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxufVxcblxcbi5yZW1vdmVQb3BvdmVyOjpiZWZvcmUge1xcbiAgdG9wOiAxMDAlO1xcbiAgYm9yZGVyLXdpZHRoOiA3cHggN3B4IDAgN3B4O1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ydWxlKSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnJlbW92ZVBvcG92ZXI6OmFmdGVyIHtcXG4gIHRvcDogY2FsYygxMDAlIC0gMXB4KTtcXG4gIGJvcmRlci13aWR0aDogNnB4IDZweCAwIDZweDtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZ3JvdW5kKSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnJlbW92ZVBvcG92ZXItbmFtZSB7XFxuICBjb2xvcjogdmFyKC0tdGV4dCk7XFxuICBmb250LXNpemU6IDEzcHg7XFxufVxcblxcbi5yZW1vdmVQb3BvdmVyLWFjdGlvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogOHB4O1xcbn1cXG5cXG4ucmVtb3ZlUG9wb3Zlci1jYW5jZWwsXFxuLnJlbW92ZVBvcG92ZXItZGVsZXRlIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgcGFkZGluZzogNXB4IDEycHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ydWxlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnJlbW92ZVBvcG92ZXItY2FuY2VsIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xcbn1cXG5cXG4ucmVtb3ZlUG9wb3Zlci1jYW5jZWw6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLXRleHQpO1xcbn1cXG5cXG4ucmVtb3ZlUG9wb3Zlci1kZWxldGUge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tdGV4dCk7XFxuICBjb2xvcjogdmFyKC0tZ3JvdW5kKTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tdGV4dCk7XFxufVxcblxcbi5yZW1vdmVQb3BvdmVyLWRlbGV0ZTpob3ZlciB7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45Mik7XFxufVxcblxcbi8qIFJvYm90byBMaWdodCA0MHB4IGZvciB0aGUgcmVhZGluZy4gKi9cXG4jY3VycmVudFRlbXAge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE7XFxufVxcblxcbiNjdXJyZW50Q29uZGl0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcXG59XFxuXFxuLyogRm91ci11cCBzdGF0IHJvdzogdGV4dCBsYWJlbHMsIG5vIGljb25zLiAqL1xcbiNzdGF0Um93IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgZ2FwOiAxMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tdG9wOiAxNHB4O1xcbn1cXG5cXG4uc3RhdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDRweDtcXG4gIHBhZGRpbmc6IDEycHggNnB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcnVsZSk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbi5zdGF0LWxhYmVsIHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tb25vKTtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xcbn1cXG5cXG4uc3RhdC12YWx1ZSB7XFxuICBmb250LXNpemU6IDE3cHg7XFxuICBjb2xvcjogdmFyKC0tdGV4dCk7XFxufVxcblxcbi8qIFNlYXJjaCBmb3JtLiAqL1xcbiNzZWFyY2hGb3JtIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgLyogc3RhY2tzIGFib3ZlIHRoZSAud2VhdGhlckJnIGRyaWZ0IGxheWVyICovXFxuICB6LWluZGV4OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4vKiBIb2xkcyB0aGUgaW5wdXQgYW5kIGl0cyBhdXRvY29tcGxldGUgZHJvcGRvd247IHBvc2l0aW9uOiByZWxhdGl2ZSBhbmNob3JzXFxuICAgI3N1Z2dlc3Rpb25zIGJlbmVhdGggdGhlIGlucHV0LiBmbGV4OiAxIHNvIHRoZSBwYWlyIGZpbGxzIHRoZSByb3cgdGhlIHdheSB0aGVcXG4gICBiYXJlIGlucHV0IHVzZWQgdG8uICovXFxuI3NlYXJjaElucHV0V3JhcCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmbGV4OiAxO1xcbiAgbWluLXdpZHRoOiAwO1xcbn1cXG5cXG4jc2VhcmNoSW5wdXQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxMnB4IDE0cHg7XFxuICBmb250LWZhbWlseTogdmFyKC0tbW9ubyk7XFxuICBmb250LXNpemU6IDE2cHg7IC8qIDE2cHggc28gaU9TIFNhZmFyaSBkb2Vzbid0IGF1dG8tem9vbSB0aGUgaW5wdXQgb24gZm9jdXMgKi9cXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcnVsZSk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbiNzZWFyY2hJbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcXG59XFxuXFxuI3NlYXJjaElucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItY29sb3I6IHZhcigtLW11dGVkKTtcXG59XFxuXFxuLyogV2hpbGUgdGhlIGRyb3Bkb3duIGlzIG9wZW4gdGhlIGlucHV0J3MgYm90dG9tIGNvcm5lcnMgc3F1YXJlIG9mZiBhbmQgaXRzXFxuICAgYm90dG9tIGVkZ2UgZHJvcHMgb3V0LCBzbyBpdCByZWFkcyBhcyBvbmUgYXR0YWNoZWQgc3VyZmFjZSB3aXRoICNzdWdnZXN0aW9ucy4gKi9cXG4jc2VhcmNoRm9ybS5zdWdnZXN0aW5nICNzZWFyY2hJbnB1dCB7XFxuICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDAgMDtcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKiBGYWlsZWQgbG9va3VwOiByZWRkZW5lZCBib3JkZXIsIGN1cnJlbnQgcmliYm9uIGxlZnQgaW4gcGxhY2UuICovXFxuI3NlYXJjaEZvcm0uaW52YWxpZCAjc2VhcmNoSW5wdXQge1xcbiAgYm9yZGVyLWNvbG9yOiAjQzI0NTJEO1xcbn1cXG5cXG4vKiBBdXRvY29tcGxldGUgZHJvcGRvd246IGhhbmdzIG9mZiB0aGUgYm90dG9tIG9mIHRoZSBpbnB1dCwgbWF0Y2hpbmcgaXRzIHdpZHRoXFxuICAgYW5kIGNvbnRpbnVpbmcgaXRzIGZvY3VzZWQgYm9yZGVyIGludG8gYSBib3R0b20tcm91bmRlZCBwYW5lbC4gKi9cXG4jc3VnZ2VzdGlvbnMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMDAlO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgei1pbmRleDogMTA7XFxuICBtYXgtaGVpZ2h0OiAyNDBweDtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncm91bmQpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbXV0ZWQpO1xcbiAgYm9yZGVyLXRvcDogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCA4cHggOHB4O1xcbn1cXG5cXG4jc3VnZ2VzdGlvbnMuaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5zdWdnZXN0aW9uLWl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG4gIGdhcDogOHB4O1xcbiAgcGFkZGluZzogMTBweCAxNHB4O1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1vbm8pO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc3VnZ2VzdGlvbi1pdGVtOmhvdmVyLFxcbi5zdWdnZXN0aW9uLWl0ZW0uc2VsZWN0ZWQge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcnVsZSk7XFxufVxcblxcbi5zdWdnZXN0aW9uLWNpdHkge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgY29sb3I6IHZhcigtLXRleHQpO1xcbn1cXG5cXG4uc3VnZ2VzdGlvbi1jb3VudHJ5IHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XFxufVxcblxcbiNzZWFyY2hCdXR0b24ge1xcbiAgcGFkZGluZzogMTJweCAyMHB4O1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1vbm8pO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gIGNvbG9yOiB2YXIoLS1ncm91bmQpO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tdGV4dCk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNzZWFyY2hCdXR0b246aG92ZXIge1xcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOTIpO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcXG4gICNhcHAge1xcbiAgICBnYXA6IDIycHg7XFxuICAgIHBhZGRpbmc6IDI0cHggMTZweDtcXG4gIH1cXG5cXG4gICN3ZWF0aGVyQ2FyZCB7XFxuICAgIGdhcDogMjJweDtcXG4gIH1cXG5cXG4gIC8qIFN3aXBlLWRpcmVjdGlvbi1hd2FyZSBzbGlkZSBvbiBhIGNvbW1pdHRlZCBsb2NhdGlvbiByb3RhdGlvbi4gZmF2b3VyaXRlcy5qc1xcbiAgICAgYWRkcyAuc2xpZGUtbmV4dCAoc3dpcGUgbGVmdCAtPiBuZXh0KSBvciAuc2xpZGUtcHJldiAoc3dpcGUgcmlnaHQgLT4gcHJldilcXG4gICAgIHRvICN3ZWF0aGVyQ2FyZCwgdGhlbiByb3RhdGVzLiBUaGUgY2FyZCBmYWRlcyB0byBub3RoaW5nIGF0IHRoZSBrZXlmcmFtZSdzXFxuICAgICBtaWRwb2ludCwgd2hpY2ggbWFza3MgdGhlIGZvcmVjYXN0IHN3YXA6IHJlbmRlclJpYmJvbigpIHJlYnVpbGRzIGludG8gdGhpc1xcbiAgICAgc2FtZSBjYXJkIHdoaWxlIGl0J3MgaW52aXNpYmxlLCBzbyB0aGUgbmV3IGN1cnZlIHNsaWRlcyBpbiByYXRoZXIgdGhhblxcbiAgICAgc25hcHBpbmcuIERlc2t0b3Agcm90YXRlcyB2aWEgdGhlIGFycm93cyBhbmQgbmV2ZXIgZ2V0cyB0aGUgY2xhc3MuICovXFxuICAjd2VhdGhlckNhcmQuc2xpZGUtbmV4dCB7XFxuICAgIGFuaW1hdGlvbjogY2FyZFNsaWRlTmV4dCAyODBtcyBlYXNlLW91dDtcXG4gIH1cXG5cXG4gICN3ZWF0aGVyQ2FyZC5zbGlkZS1wcmV2IHtcXG4gICAgYW5pbWF0aW9uOiBjYXJkU2xpZGVQcmV2IDI4MG1zIGVhc2Utb3V0O1xcbiAgfVxcblxcbiAgQGtleWZyYW1lcyBjYXJkU2xpZGVOZXh0IHtcXG4gICAgMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IG9wYWNpdHk6IDE7IH1cXG4gICAgNDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC00MnB4KTsgb3BhY2l0eTogMDsgfVxcbiAgICA2MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNDJweCk7IG9wYWNpdHk6IDA7IH1cXG4gICAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgb3BhY2l0eTogMTsgfVxcbiAgfVxcblxcbiAgQGtleWZyYW1lcyBjYXJkU2xpZGVQcmV2IHtcXG4gICAgMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IG9wYWNpdHk6IDE7IH1cXG4gICAgNDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQycHgpOyBvcGFjaXR5OiAwOyB9XFxuICAgIDYwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNDJweCk7IG9wYWNpdHk6IDA7IH1cXG4gICAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgb3BhY2l0eTogMTsgfVxcbiAgfVxcblxcbiAgLyogTW9iaWxlIG5hdmlnYXRlcyBieSBzd2lwZTsgZHJvcCB0aGUgYXJyb3dzIGJ1dCBrZWVwIHRoZSBkb3RzLiAqL1xcbiAgLmFycm93IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gICNzdGF0Um93IHtcXG4gICAgZ2FwOiA4cHg7XFxuICB9XFxuXFxuICAuc3RhdCB7XFxuICAgIHBhZGRpbmc6IDEwcHggNHB4O1xcbiAgfVxcblxcbiAgLnN0YXQtdmFsdWUge1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICB9XFxufVxcblxcbi8qIFJlc3BlY3QgYSByZWR1Y2VkLW1vdGlvbiBwcmVmZXJlbmNlOiByb3RhdGUgaW5zdGFudGx5LCBubyBzbGlkZS4gZmF2b3VyaXRlcy5qc1xcbiAgIHN0aWxsIGFkZHMgdGhlIGNsYXNzLCBidXQgd2l0aCB0aGUgYW5pbWF0aW9uIHN1cHByZXNzZWQgYW5pbWF0aW9uZW5kIG5ldmVyXFxuICAgZmlyZXMsIHNvIGl0cyBzZXRUaW1lb3V0IGZhbGxiYWNrIGlzIHdoYXQgc3RyaXBzIHRoZSBjbGFzcyBiYWNrIG9mZi4gKi9cXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xcbiAgI3dlYXRoZXJDYXJkLnNsaWRlLW5leHQsXFxuICAjd2VhdGhlckNhcmQuc2xpZGUtcHJldiB7XFxuICAgIGFuaW1hdGlvbjogbm9uZTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBmYXZvdXJpdGVzLmpzIOKAlCBzYXZlZCBsb2NhdGlvbnMgd2l0aCBzd2lwZS10by1yb3RhdGUuXG4vL1xuLy8gVGhlIHNlYXJjaCBmb3JtIGlzIHRoZSBhZGQgcGF0aDogYSBzdWNjZXNzZnVsIGxvb2t1cCBhcHBlbmRzIHRoZSBxdWVyeSB0byBhXG4vLyBwZXJzaXN0ZWQgbGlzdCBhbmQgc3dpdGNoZXMgdG8gaXQ7IGEgZmFpbGVkIG9uZSBsZWF2ZXMgdGhlIGxpc3QgdW50b3VjaGVkXG4vLyAobG9naWMuanMncyBpbnZhbGlkSW5wdXQoKSBoYXMgYWxyZWFkeSByZWRkZW5lZCB0aGUgaW5wdXQpLiBBIHJvdyBvZiBkb3RzXG4vLyB1bmRlciB0aGUgbG9jYXRpb24gbmFtZSBzaG93cyBob3cgbWFueSBsb2NhdGlvbnMgYXJlIHNhdmVkIGFuZCB3aGljaCBpc1xuLy8gY3VycmVudC4gQSBob3Jpem9udGFsIHN3aXBlIGFueXdoZXJlIG9uIHRoZSBzY3JlZW4gcm90YXRlcyB0aHJvdWdoIHRoZW1cbi8vICh3cmFwcGluZyBhdCBib3RoIGVuZHMpLCBhcyBkbyB0aGUgZGVza3RvcCBwcmV2L25leHQgYXJyb3dzOyBjbGlja2luZyBhIGRvdFxuLy8gb3BlbnMgYSBjb25maXJtYXRpb24gdG8gcmVtb3ZlIHRoYXQgbG9jYXRpb24uXG4vL1xuLy8gU3RhdGUgcGVyc2lzdHMgdG8gbG9jYWxTdG9yYWdlIHVuZGVyIGEgYHdlYXRoZXJhcHBfYCBrZXksIG1hdGNoaW5nIHRoZVxuLy8gY29udmVudGlvbiB1c2VkIGFjcm9zcyB0aGUgb3RoZXIgcmVwb3Mg4oCUIG5vIEluZGV4ZWREQiwgbm8gY29va2llcywgbm8gYmFja2VuZCxcbi8vIG5vIG5ldyBkZXBlbmRlbmNpZXMuIEZldGNoIHN0cmF0ZWd5IGlzIGxhenkgKGZldGNoIG9uIGFycml2YWwpOiBhIHN3aXBlIGxlYXZlc1xuLy8gdGhlIHByZXZpb3VzIHJpYmJvbiBvbiBzY3JlZW4gdW50aWwgdGhlIG5ldyBmb3JlY2FzdCByZXNvbHZlcywgcmV1c2luZyB0aGVcbi8vIHNhbWUga2VlcC1jdXJyZW50LXJpYmJvbiBiZWhhdmlvdXIgYSBzZWFyY2ggYWxyZWFkeSBoYXMsIHNvIGEgc3dpcGUgbmV2ZXJcbi8vIGxhbmRzIG9uIGEgc3Bpbm5lciAodGhlcmUgaXMgbm8gc3Bpbm5lcikgb3IgYSBibGFuayBzY3JlZW4uXG4vL1xuLy8gRXZlcnkgbGlzdGVuZXIgaGVyZSBpcyB3aXJlZCBleGFjdGx5IG9uY2UsIGZyb20gaW5pdEZhdm91cml0ZXMoKSBhdCBib290c3RyYXBcbi8vIOKAlCBuZXZlciBmcm9tIHRoZSByZW5kZXIgcGF0aCDigJQgc28gbm90aGluZyBtdWx0aXBsaWVzIGFjcm9zcyBmZXRjaGVzLlxuXG5pbXBvcnQgeyBmb3JlY2FzdExvZ2ljIH0gZnJvbSAnLi9sb2dpYy5qcyc7XG5cbmNvbnN0IEtFWSA9ICd3ZWF0aGVyYXBwX3NhdmVkTG9jYXRpb25zJztcbmNvbnN0IERFRkFVTFRfUVVFUlkgPSAnOTgwNTInO1xuY29uc3QgU1dJUEVfVEhSRVNIT0xEID0gNTA7IC8vIHB4IG9mIGhvcml6b250YWwgdHJhdmVsIHRvIGNvbW1pdCBhIHJvdGF0aW9uXG5jb25zdCBTTElERV9NUyA9IDI4MDsgLy8gY2FyZCBzbGlkZSBkdXJhdGlvbiDigJQgbWlycm9yIG9mIHRoZSBDU1Mga2V5ZnJhbWVcblxuLy8gU2F2ZWQgbG9jYXRpb24gcXVlcnkgc3RyaW5ncywgaW4gb3JkZXIuIGN1cnJlbnRJbmRleCBwb2ludHMgYXQgdGhlIGFjdGl2ZSBvbmUuXG5sZXQgbG9jYXRpb25zID0gW107XG5sZXQgY3VycmVudEluZGV4ID0gMDtcblxubGV0IGRvdFJvdzsgLy8gI2RvdFJvdywgY2FjaGVkIG9uY2UgYnkgaW5pdEZhdm91cml0ZXMoKVxubGV0IG5hdlJvdzsgLy8gLm5hdlJvdyB3cmFwcGluZyB0aGUgZG90cyBhbmQgdGhlIHByZXYvbmV4dCBhcnJvd3NcbmxldCBjYXJkOyAvLyAjd2VhdGhlckNhcmQg4oCUIHRoZSByaWJib24rcmVhZG91dCB1bml0IHRoYXQgc2xpZGVzIG9uIHJvdGF0aW9uXG5sZXQgc2xpZGVUaW1lb3V0ID0gbnVsbDtcblxuLy8gU3dpcGUgdHJhY2tpbmcuXG5sZXQgdG91Y2hTdGFydFggPSBudWxsO1xubGV0IHRvdWNoU3RhcnRZID0gbnVsbDtcbmxldCBzd2lwZUFjdGl2ZSA9IGZhbHNlO1xuXG4vLyBUaGUgc2luZ2xlIGRlc2t0b3AgcmVtb3ZlLWNvbmZpcm1hdGlvbiBwb3BvdmVyLCBvciBudWxsLiBPbmx5IG9uZSBpcyBvcGVuIGF0XG4vLyBhIHRpbWU7IGEgbmV3IG9wZW4gY2xvc2VzIGFueSBwcmlvciBvbmUgZmlyc3QuXG5sZXQgb3BlblBvcG92ZXIgPSBudWxsO1xuXG5mdW5jdGlvbiBsb2FkKCkge1xuICB0cnkge1xuICAgIGNvbnN0IHJhdyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKEtFWSk7XG4gICAgaWYgKHJhdykge1xuICAgICAgY29uc3QgcGFyc2VkID0gSlNPTi5wYXJzZShyYXcpO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkocGFyc2VkKSkge1xuICAgICAgICBsb2NhdGlvbnMgPSBwYXJzZWQuZmlsdGVyKChxKSA9PiB0eXBlb2YgcSA9PT0gJ3N0cmluZycgJiYgcS50cmltKCkubGVuZ3RoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBsb2NhdGlvbnMgPSBbXTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzYXZlKCkge1xuICB0cnkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKEtFWSwgSlNPTi5zdHJpbmdpZnkobG9jYXRpb25zKSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyBTdG9yYWdlIGRpc2FibGVkL2Z1bGwg4oCUIHRoZSBpbi1tZW1vcnkgbGlzdCBzdGlsbCB3b3JrcyBmb3IgdGhpcyBzZXNzaW9uLlxuICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFyKG5vZGUpIHtcbiAgd2hpbGUgKG5vZGUuZmlyc3RDaGlsZCkgeyBub2RlLnJlbW92ZUNoaWxkKG5vZGUuZmlyc3RDaGlsZCk7IH1cbn1cblxuLy8gRmV0Y2ggdGhlIGFjdGl2ZSBsb2NhdGlvbiwgb3IgdGhlIGhhcmQgZGVmYXVsdCB3aGVuIHRoZSBsaXN0IGlzIGVtcHR5LiBMYXp5OlxuLy8gdGhlIHJlbmRlciBwYXRoIGtlZXBzIHRoZSBwcmV2aW91cyByaWJib24gdW50aWwgdGhpcyByZXNvbHZlcy5cbmZ1bmN0aW9uIHNob3dDdXJyZW50KCkge1xuICBpZiAobG9jYXRpb25zLmxlbmd0aCkge1xuICAgIGZvcmVjYXN0TG9naWMuZnV0dXJlQVBJQ2FsbHMobG9jYXRpb25zW2N1cnJlbnRJbmRleF0pO1xuICB9IGVsc2Uge1xuICAgIGZvcmVjYXN0TG9naWMuZnV0dXJlQVBJQ2FsbHMoREVGQVVMVF9RVUVSWSk7XG4gIH1cbn1cblxuLy8gUmVkcmF3IHRoZSBkb3Qgcm93LiBIaWRkZW4gYXQgYSBjb3VudCBvZiBvbmUgKGEgc2luZ2xlIGxvY2F0aW9uIG5lZWRzIG5vXG4vLyBhZmZvcmRhbmNlKSBhbmQgd2hlbiBlbXB0eSAodGhlIGRlZmF1bHQgZmFsbGJhY2sgaXMgbm90IGEgc2F2ZWQgbG9jYXRpb24pLlxuZnVuY3Rpb24gcmVuZGVyRG90cygpIHtcbiAgaWYgKCFkb3RSb3cpIHsgcmV0dXJuOyB9XG4gIGNsb3NlUG9wb3ZlcigpOyAvLyBhIHJlZHJhdyBkcm9wcyB0aGUgZG90IHRoZSBwb3BvdmVyIHdhcyBhbmNob3JlZCB0b1xuICBjbGVhcihkb3RSb3cpO1xuXG4gIC8vIEdhdGUgdGhlIHdob2xlIC5uYXZSb3cgKGRvdHMgKyBhcnJvd3MpIHRvZ2V0aGVyLCBzbyB0aGUgZGVza3RvcCBhcnJvd3Mgc2hhcmVcbiAgLy8gdGhlIGRvdHMnIHZpc2liaWxpdHkgcnVsZSBhbmQgbmV2ZXIgZGFuZ2xlIGJlc2lkZSBhbiBlbXB0eSByb3cuXG4gIGNvbnN0IGdhdGUgPSBuYXZSb3cgfHwgZG90Um93O1xuICBjb25zdCBuID0gbG9jYXRpb25zLmxlbmd0aDtcbiAgaWYgKG4gPD0gMSkge1xuICAgIGdhdGUuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGdhdGUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICBjb25zdCBkb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkb3QuY2xhc3NOYW1lID0gJ2RvdCcgKyAoaSA9PT0gY3VycmVudEluZGV4ID8gJyBhY3RpdmUnIDogJycpO1xuICAgIGRvdC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnYnV0dG9uJyk7XG4gICAgZG90LnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIGxvY2F0aW9uc1tpXSk7XG4gICAgd2lyZURvdChkb3QsIGkpO1xuICAgIGRvdFJvdy5hcHBlbmRDaGlsZChkb3QpO1xuICB9XG59XG5cbi8vIEEgc2luZ2xlIGNsaWNrIG9uIGEgZG90IG9wZW5zIHRoZSBkZWxldGUgY29uZmlybWF0aW9uIGZvciB0aGF0IGxvY2F0aW9uOlxuLy8gdGhlIG5hdGl2ZSBjb25maXJtIG9uIHRvdWNoLCB0aGUgYW5jaG9yZWQgaW4tcGFnZSBwb3BvdmVyIG9uIGRlc2t0b3AvbW91c2Vcbi8vIChjb25maXJtUmVtb3ZlIGJyYW5jaGVzIG9uIHBvaW50ZXJUeXBlKS4gVGFwLXRvLXNlbGVjdCBpcyBpbnRlbnRpb25hbGx5XG4vLyBkcm9wcGVkIOKAlCByb3RhdGUoKSwgZHJpdmVuIGJ5IHRoZSBzd2lwZSBnZXN0dXJlIGFuZCB0aGUgZGVza3RvcCBwcmV2L25leHRcbi8vIGFycm93cywgaXMgdGhlIG9ubHkgd2F5IHRvIGNoYW5nZSB0aGUgYWN0aXZlIGxvY2F0aW9uLiBUaGUgY2xpY2sgZXZlbnQgaXMgYVxuLy8gUG9pbnRlckV2ZW50LCBzbyBpdHMgcG9pbnRlclR5cGUgcGlja3MgdGhlIHRvdWNoIHZzIGRlc2t0b3AgYnJhbmNoIGRpcmVjdGx5LlxuZnVuY3Rpb24gd2lyZURvdChkb3QsIGkpIHtcbiAgZG90LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjb25maXJtUmVtb3ZlKGksIGRvdCwgZS5wb2ludGVyVHlwZSB8fCAnbW91c2UnKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNvbmZpcm1SZW1vdmUoaSwgZG90LCBwb2ludGVyVHlwZSkge1xuICBpZiAoaSA8IDAgfHwgaSA+PSBsb2NhdGlvbnMubGVuZ3RoKSB7IHJldHVybjsgfVxuICAvLyBEZXNrdG9wIChtb3VzZS9wZW4pIGdldHMgdGhlIGFuY2hvcmVkIGluLXBhZ2UgcG9wb3ZlcjsgdG91Y2gga2VlcHMgdGhlXG4gIC8vIG5hdGl2ZSBjb25maXJtIHVudG91Y2hlZC5cbiAgaWYgKHBvaW50ZXJUeXBlICYmIHBvaW50ZXJUeXBlICE9PSAndG91Y2gnICYmIGRvdCkge1xuICAgIG9wZW5SZW1vdmVQb3BvdmVyKGksIGRvdCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmICh3aW5kb3cuY29uZmlybSgnUmVtb3ZlICcgKyBsb2NhdGlvbnNbaV0gKyAnPycpKSB7XG4gICAgcmVtb3ZlTG9jYXRpb24oaSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gb25Qb3BvdmVyS2V5ZG93bihlKSB7XG4gIGlmIChlLmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY2xvc2VQb3BvdmVyKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gb25PdXRzaWRlUG9pbnRlcihlKSB7XG4gIGlmIChvcGVuUG9wb3ZlciAmJiAhb3BlblBvcG92ZXIuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgY2xvc2VQb3BvdmVyKCk7XG4gIH1cbn1cblxuLy8gVGVhciBkb3duIHRoZSBzaW5nbGUgb3BlbiBwb3BvdmVyIGFuZCBpdHMgZG9jdW1lbnQtbGV2ZWwgbGlzdGVuZXJzLiBTYWZlIHRvXG4vLyBjYWxsIHdoZW4gbm90aGluZyBpcyBvcGVuLlxuZnVuY3Rpb24gY2xvc2VQb3BvdmVyKCkge1xuICBpZiAoIW9wZW5Qb3BvdmVyKSB7IHJldHVybjsgfVxuICBvcGVuUG9wb3Zlci5yZW1vdmUoKTtcbiAgb3BlblBvcG92ZXIgPSBudWxsO1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25Qb3BvdmVyS2V5ZG93biwgdHJ1ZSk7XG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgb25PdXRzaWRlUG9pbnRlciwgdHJ1ZSk7XG59XG5cbi8vIEEgc21hbGwgY29uZmlybWF0aW9uIHBvcG92ZXIgYW5jaG9yZWQgYWJvdmUgdGhlIGNsaWNrZWQgZG90LCBpbnNpZGVcbi8vICNkb3RSb3cuIERlbGV0ZSByZW1vdmVzIHRoZSBsb2NhdGlvbjsgQ2FuY2VsLCBFc2NhcGUsIG9yIGFuIG91dHNpZGUgY2xpY2tcbi8vIGRpc21pc3NlcyB3aXRob3V0IGNoYW5nZXMuIE9ubHkgb25lIGlzIGV2ZXIgb3BlbiAob3BlblJlbW92ZVBvcG92ZXIgY2xvc2VzIGFueVxuLy8gcHJpb3Igb25lIGZpcnN0KS5cbmZ1bmN0aW9uIG9wZW5SZW1vdmVQb3BvdmVyKGksIGRvdCkge1xuICBjbG9zZVBvcG92ZXIoKTtcblxuICBjb25zdCBwb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcG9wLmNsYXNzTmFtZSA9ICdyZW1vdmVQb3BvdmVyJztcbiAgcG9wLnNldEF0dHJpYnV0ZSgncm9sZScsICdkaWFsb2cnKTtcbiAgcG9wLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsICdSZW1vdmUgJyArIGxvY2F0aW9uc1tpXSk7XG5cbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBuYW1lLmNsYXNzTmFtZSA9ICdyZW1vdmVQb3BvdmVyLW5hbWUnO1xuICBuYW1lLnRleHRDb250ZW50ID0gbG9jYXRpb25zW2ldO1xuXG4gIGNvbnN0IGFjdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYWN0aW9ucy5jbGFzc05hbWUgPSAncmVtb3ZlUG9wb3Zlci1hY3Rpb25zJztcblxuICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY2FuY2VsQnRuLnR5cGUgPSAnYnV0dG9uJztcbiAgY2FuY2VsQnRuLmNsYXNzTmFtZSA9ICdyZW1vdmVQb3BvdmVyLWNhbmNlbCc7XG4gIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZVBvcG92ZXIpO1xuXG4gIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBkZWxldGVCdG4udHlwZSA9ICdidXR0b24nO1xuICBkZWxldGVCdG4uY2xhc3NOYW1lID0gJ3JlbW92ZVBvcG92ZXItZGVsZXRlJztcbiAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XG4gIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBpZHggPSBpO1xuICAgIGNsb3NlUG9wb3ZlcigpO1xuICAgIHJlbW92ZUxvY2F0aW9uKGlkeCk7XG4gIH0pO1xuXG4gIGFjdGlvbnMuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcbiAgYWN0aW9ucy5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuICBwb3AuYXBwZW5kQ2hpbGQobmFtZSk7XG4gIHBvcC5hcHBlbmRDaGlsZChhY3Rpb25zKTtcblxuICBkb3RSb3cuYXBwZW5kQ2hpbGQocG9wKTtcbiAgb3BlblBvcG92ZXIgPSBwb3A7XG5cbiAgLy8gQW5jaG9yIGhvcml6b250YWxseSBvdmVyIHRoZSB0cmlnZ2VyaW5nIGRvdCdzIGNlbnRyZSAob2Zmc2V0TGVmdCBpcyByZWxhdGl2ZVxuICAvLyB0byAjZG90Um93LCB3aGljaCBpcyB0aGUgb2Zmc2V0IHBhcmVudCDigJQgc2VlIGl0cyBwb3NpdGlvbjogcmVsYXRpdmUgcnVsZSkuXG4gIHBvcC5zdHlsZS5sZWZ0ID0gKGRvdC5vZmZzZXRMZWZ0ICsgZG90Lm9mZnNldFdpZHRoIC8gMikgKyAncHgnO1xuXG4gIC8vIFRoZSBjbGljayAoYW5kIGl0cyBwb2ludGVyZG93bikgdGhhdCBvcGVuZWQgdGhpcyBwb3BvdmVyIGhhcyBhbHJlYWR5IGZpcmVkLFxuICAvLyBzbyBhIGNhcHR1cmUgbGlzdGVuZXIgZm9yIHRoZSBuZXh0IHBvaW50ZXJkb3duIGNsb3NlcyB0aGUgcG9wb3ZlciBvbiBhblxuICAvLyBvdXRzaWRlIGNsaWNrIHdpdGhvdXQgaW1tZWRpYXRlbHkgc3dhbGxvd2luZyBpdHMgb3duIG9wZW5pbmcgZXZlbnQuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvblBvcG92ZXJLZXlkb3duLCB0cnVlKTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCBvbk91dHNpZGVQb2ludGVyLCB0cnVlKTtcbn1cblxuLy8gU2xpZGUgdGhlIHJpYmJvbityZWFkb3V0IGNhcmQgaW4gdGhlIHN3aXBlIGRpcmVjdGlvbiBvbiBhIGNvbW1pdHRlZCByb3RhdGlvbi5cbi8vIE1vYmlsZSBvbmx5IOKAlCB0aGUgZGVza3RvcCBwcmV2L25leHQgYXJyb3dzIHVwZGF0ZSBpbnN0YW50bHksIHNvIHRoZSBjbGFzcyBpc1xuLy8gYWRkZWQgb25seSB3aGVuIHRoZSDiiaQ0ODBweCBicmVha3BvaW50IGlzIGFjdGl2ZS4gVGhlIGtleWZyYW1lIGZhZGVzIHRoZSBjYXJkXG4vLyB0byBub3RoaW5nIGF0IGl0cyBtaWRwb2ludCAoc2VlICN3ZWF0aGVyQ2FyZC5zbGlkZS0qIGluIHN0eWxlLmNzcyksIHdoaWNoXG4vLyBtYXNrcyB0aGUgZm9yZWNhc3Qgc3dhcDogc2hvd0N1cnJlbnQoKSdzIGZldGNoIHJlc29sdmVzIGFuZCByZW5kZXJSaWJib24oKVxuLy8gcmVidWlsZHMgaW50byB0aGlzIHNhbWUgY2FyZCwgc28gdGhlIG5ldyBjdXJ2ZSBzbGlkZXMgYmFjayBpbiByYXRoZXIgdGhhblxuLy8gc25hcHBpbmcuIERpcmVjdGlvbi1hd2FyZTogb3V0Z29pbmcgY29udGVudCBsZWF2ZXMgdG93YXJkIHRoZSBzd2lwZSwgaW5jb21pbmdcbi8vIGVudGVycyBmcm9tIHRoZSBvcHBvc2l0ZSBlZGdlLlxuZnVuY3Rpb24gcGxheVNsaWRlKGRpcikge1xuICBpZiAoIWNhcmQpIHsgcmV0dXJuOyB9XG4gIGlmICghd2luZG93Lm1hdGNoTWVkaWEgfHwgIXdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA0ODBweCknKS5tYXRjaGVzKSB7XG4gICAgcmV0dXJuOyAvLyBkZXNrdG9wIHJvdGF0ZXMgdmlhIHRoZSBhcnJvd3MsIHdpdGhvdXQgdGhlIHNsaWRlXG4gIH1cbiAgY2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdzbGlkZS1uZXh0JywgJ3NsaWRlLXByZXYnKTtcbiAgdm9pZCBjYXJkLm9mZnNldFdpZHRoOyAvLyByZWZsb3cgc28gYSByYXBpZCBzZWNvbmQgc3dpcGUgcmVzdGFydHMgdGhlIGFuaW1hdGlvblxuICBjYXJkLmNsYXNzTGlzdC5hZGQoZGlyIDwgMCA/ICdzbGlkZS1wcmV2JyA6ICdzbGlkZS1uZXh0Jyk7XG5cbiAgLy8gb25DYXJkQW5pbUVuZCBzdHJpcHMgdGhlIGNsYXNzIHdoZW4gdGhlIGtleWZyYW1lIGZpbmlzaGVzOyB0aGlzIGlzIHRoZVxuICAvLyBmYWxsYmFjayBmb3IgdGhlIHJlZHVjZWQtbW90aW9uIHBhdGgsIHdoZXJlIHRoZSBhbmltYXRpb24gaXMgc3VwcHJlc3NlZCBhbmRcbiAgLy8gYW5pbWF0aW9uZW5kIG5ldmVyIGZpcmVzLlxuICBpZiAoc2xpZGVUaW1lb3V0KSB7IGNsZWFyVGltZW91dChzbGlkZVRpbWVvdXQpOyB9XG4gIHNsaWRlVGltZW91dCA9IHNldFRpbWVvdXQoY2xlYXJTbGlkZSwgU0xJREVfTVMgKyA4MCk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyU2xpZGUoKSB7XG4gIGlmIChzbGlkZVRpbWVvdXQpIHsgY2xlYXJUaW1lb3V0KHNsaWRlVGltZW91dCk7IHNsaWRlVGltZW91dCA9IG51bGw7IH1cbiAgaWYgKGNhcmQpIHsgY2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdzbGlkZS1uZXh0JywgJ3NsaWRlLXByZXYnKTsgfVxufVxuXG5mdW5jdGlvbiBvbkNhcmRBbmltRW5kKGUpIHtcbiAgaWYgKGUudGFyZ2V0ICE9PSBjYXJkKSB7IHJldHVybjsgfSAvLyBpZ25vcmUgYW55IGJ1YmJsZWQgZGVzY2VuZGFudCBhbmltYXRpb25cbiAgY2xlYXJTbGlkZSgpO1xufVxuXG4vLyBSb3RhdGUgdGhyb3VnaCB0aGUgc2F2ZWQgbGlzdCB3aXRoIHdyYXAuIE5vLW9wIGJlbG93IHR3byBsb2NhdGlvbnMuIFRoZSBzbGlkZVxuLy8gY2xhc3MgZ29lcyBvbiBiZWZvcmUgdGhlIHJlZHJhdy9mZXRjaCBzbyB0aGUgb3V0Z29pbmcgY29udGVudCBpcyBhbHJlYWR5XG4vLyBtb3ZpbmcgYXMgdGhlIG5ldyBmb3JlY2FzdCBpcyByZXF1ZXN0ZWQgKHBsYXlTbGlkZSBpcyBhIG5vLW9wIG9mZiBtb2JpbGUpLlxuZnVuY3Rpb24gcm90YXRlKGRpcikge1xuICBjb25zdCBuID0gbG9jYXRpb25zLmxlbmd0aDtcbiAgaWYgKG4gPD0gMSkgeyByZXR1cm47IH1cbiAgY3VycmVudEluZGV4ID0gKGN1cnJlbnRJbmRleCArIGRpciArIG4pICUgbjtcbiAgcGxheVNsaWRlKGRpcik7XG4gIHJlbmRlckRvdHMoKTtcbiAgc2hvd0N1cnJlbnQoKTtcbn1cblxuLy8gUmVtb3ZlIGEgbG9jYXRpb24sIGtlZXBpbmcgYSBjb2hlcmVudCBhY3RpdmUgc2VsZWN0aW9uOiByZW1vdmluZyB0aGUgYWN0aXZlXG4vLyBvbmUgbW92ZXMgdG8gYSBuZWlnaGJvdXIgcmF0aGVyIHRoYW4gbGVhdmluZyBhbiBlbXB0eSB2aWV3OyBlbXB0eWluZyB0aGUgbGlzdFxuLy8gZmFsbHMgYmFjayB0byB0aGUgZGVmYXVsdC5cbmZ1bmN0aW9uIHJlbW92ZUxvY2F0aW9uKGkpIHtcbiAgaWYgKGkgPCAwIHx8IGkgPj0gbG9jYXRpb25zLmxlbmd0aCkgeyByZXR1cm47IH1cbiAgY29uc3Qgd2FzQWN0aXZlID0gKGkgPT09IGN1cnJlbnRJbmRleCk7XG5cbiAgbG9jYXRpb25zLnNwbGljZShpLCAxKTtcbiAgc2F2ZSgpO1xuXG4gIGlmIChsb2NhdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgY3VycmVudEluZGV4ID0gMDtcbiAgICByZW5kZXJEb3RzKCk7XG4gICAgc2hvd0N1cnJlbnQoKTsgLy8gZmFsbHMgYmFjayB0byBERUZBVUxUX1FVRVJZXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGkgPCBjdXJyZW50SW5kZXgpIHtcbiAgICBjdXJyZW50SW5kZXgtLTtcbiAgfSBlbHNlIGlmIChpID09PSBjdXJyZW50SW5kZXggJiYgY3VycmVudEluZGV4ID49IGxvY2F0aW9ucy5sZW5ndGgpIHtcbiAgICBjdXJyZW50SW5kZXggPSBsb2NhdGlvbnMubGVuZ3RoIC0gMTtcbiAgfVxuXG4gIHJlbmRlckRvdHMoKTtcbiAgaWYgKHdhc0FjdGl2ZSkgeyBzaG93Q3VycmVudCgpOyB9XG59XG5cbmZ1bmN0aW9uIG9uVG91Y2hTdGFydChlKSB7XG4gIGlmIChlLnRvdWNoZXMubGVuZ3RoICE9PSAxKSB7IHN3aXBlQWN0aXZlID0gZmFsc2U7IHJldHVybjsgfVxuICAvLyBMZWF2ZSB0aGUgc2VhcmNoIGZpZWxkJ3Mgb3duIHRvdWNoIGhhbmRsaW5nIChjdXJzb3IgcGxhY2VtZW50KSBhbG9uZS5cbiAgaWYgKGUudGFyZ2V0ICYmIGUudGFyZ2V0LmNsb3Nlc3QgJiYgZS50YXJnZXQuY2xvc2VzdCgnI3NlYXJjaEZvcm0nKSkge1xuICAgIHN3aXBlQWN0aXZlID0gZmFsc2U7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRvdWNoU3RhcnRYID0gZS50b3VjaGVzWzBdLmNsaWVudFg7XG4gIHRvdWNoU3RhcnRZID0gZS50b3VjaGVzWzBdLmNsaWVudFk7XG4gIHN3aXBlQWN0aXZlID0gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gb25Ub3VjaEVuZChlKSB7XG4gIGlmICghc3dpcGVBY3RpdmUpIHsgcmV0dXJuOyB9XG4gIHN3aXBlQWN0aXZlID0gZmFsc2U7XG5cbiAgY29uc3QgdCA9IGUuY2hhbmdlZFRvdWNoZXMgJiYgZS5jaGFuZ2VkVG91Y2hlc1swXTtcbiAgaWYgKCF0KSB7IHJldHVybjsgfVxuXG4gIGNvbnN0IGR4ID0gdC5jbGllbnRYIC0gdG91Y2hTdGFydFg7XG4gIGNvbnN0IGR5ID0gdC5jbGllbnRZIC0gdG91Y2hTdGFydFk7XG5cbiAgLy8gQ29tbWl0IG9ubHkgb24gYSBkZWNpc2l2ZWx5IGhvcml6b250YWwgZ2VzdHVyZSwgc28gYSB2ZXJ0aWNhbCBwYWdlIHNjcm9sbFxuICAvLyAofGR5fCA+PSB8ZHh8KSBpcyBuZXZlciBoaWphY2tlZC5cbiAgaWYgKE1hdGguYWJzKGR4KSA+IFNXSVBFX1RIUkVTSE9MRCAmJiBNYXRoLmFicyhkeCkgPiBNYXRoLmFicyhkeSkpIHtcbiAgICByb3RhdGUoZHggPCAwID8gMSA6IC0xKTsgLy8gc3dpcGUgbGVmdCAtPiBuZXh0LCBzd2lwZSByaWdodCAtPiBwcmV2aW91c1xuICB9XG59XG5cbmZ1bmN0aW9uIHdpcmVHZXN0dXJlcygpIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIG9uVG91Y2hTdGFydCwgeyBwYXNzaXZlOiB0cnVlIH0pO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG9uVG91Y2hFbmQsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbn1cblxuLy8gRGVza3RvcCBwcmV2L25leHQgYXJyb3dzIGRyaXZlIHRoZSBzYW1lIHJvdGF0ZSgpIHRoZSBzd2lwZSBnZXN0dXJlIGRvZXMsIHNvXG4vLyBib3RoIHBhdGhzIHNoYXJlIG9uZSBjb3VudGVyLiBXaXJlZCBvbmNlIGZyb20gaW5pdEZhdm91cml0ZXMoKS5cbmZ1bmN0aW9uIHdpcmVBcnJvd3MoKSB7XG4gIGNvbnN0IHByZXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2UHJldicpO1xuICBjb25zdCBuZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdk5leHQnKTtcbiAgaWYgKHByZXYpIHsgcHJldi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHJvdGF0ZSgtMSkpOyB9XG4gIGlmIChuZXh0KSB7IG5leHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiByb3RhdGUoMSkpOyB9XG59XG5cbi8vIEFwcGVuZCBhIHN1Y2Nlc3NmdWxseSBsb29rZWQtdXAgbG9jYXRpb24gYW5kIHN3aXRjaCB0byBpdC4gQ2FsbGVkIGZyb20gdGhlXG4vLyBzZWFyY2ggc3VibWl0IGhhbmRsZXIgQUZURVIgdGhlIGZldGNoIHJlc29sdmVzLCBzbyB0aGUgZm9yZWNhc3QgaXMgYWxyZWFkeVxuLy8gcmVuZGVyZWQg4oCUIHRoaXMgb25seSB1cGRhdGVzIHRoZSBzYXZlZCBsaXN0IGFuZCB0aGUgZG90cywgbmV2ZXIgcmUtZmV0Y2hlcy5cbi8vIEEgZHVwbGljYXRlIHF1ZXJ5IHN3aXRjaGVzIHRvIHRoZSBleGlzdGluZyBlbnRyeSBpbnN0ZWFkIG9mIGFkZGluZyBhIHNlY29uZC5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMb2NhdGlvbihxdWVyeSkge1xuICBjb25zdCBxID0gU3RyaW5nKHF1ZXJ5KS50cmltKCk7XG4gIGlmICghcSkgeyByZXR1cm47IH1cblxuICBjb25zdCBleGlzdGluZyA9IGxvY2F0aW9ucy5pbmRleE9mKHEpO1xuICBpZiAoZXhpc3RpbmcgIT09IC0xKSB7XG4gICAgY3VycmVudEluZGV4ID0gZXhpc3Rpbmc7XG4gIH0gZWxzZSB7XG4gICAgbG9jYXRpb25zLnB1c2gocSk7XG4gICAgY3VycmVudEluZGV4ID0gbG9jYXRpb25zLmxlbmd0aCAtIDE7XG4gICAgc2F2ZSgpO1xuICB9XG4gIHJlbmRlckRvdHMoKTtcbn1cblxuLy8gQm9vdHN0cmFwOiBsb2FkIHRoZSBzYXZlZCBsaXN0LCB3aXJlIHRoZSBzd2lwZSBnZXN0dXJlcyBvbmNlLCBkcmF3IHRoZSBkb3RzLFxuLy8gYW5kIGZpcmUgdGhlIHNpbmdsZSBpbml0aWFsIGZldGNoICh0aGUgZmlyc3Qgc2F2ZWQgbG9jYXRpb24sIG9yIHRoZSBkZWZhdWx0XG4vLyB3aGVuIG5vbmUgYXJlIHNhdmVkKS4gaW5kZXguanMgY2FsbHMgdGhpcyBvbmNlLCBhZnRlciB0aGUgRE9NIGlzIGFwcGVuZGVkLlxuZXhwb3J0IGZ1bmN0aW9uIGluaXRGYXZvdXJpdGVzKCkge1xuICBsb2FkKCk7XG4gIGRvdFJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkb3RSb3cnKTtcbiAgbmF2Um93ID0gZG90Um93ID8gZG90Um93LnBhcmVudEVsZW1lbnQgOiBudWxsO1xuICBjYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlYXRoZXJDYXJkJyk7XG4gIGlmIChjYXJkKSB7IGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgb25DYXJkQW5pbUVuZCk7IH1cbiAgd2lyZUdlc3R1cmVzKCk7XG4gIHdpcmVBcnJvd3MoKTtcbiAgY3VycmVudEluZGV4ID0gMDtcbiAgcmVuZGVyRG90cygpO1xuICBzaG93Q3VycmVudCgpO1xufVxuIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyByZW5kZXJSaWJib24sIGN1cnJlbnRIb3VySW5kZXggfSBmcm9tICcuL3JpYmJvbi5qcyc7XG5pbXBvcnQgeyBmb3JlY2FzdExvZ2ljIH0gZnJvbSAnLi9sb2dpYy5qcyc7XG5pbXBvcnQgeyBhZGRMb2NhdGlvbiB9IGZyb20gJy4vZmF2b3VyaXRlcy5qcyc7XG5pbXBvcnQgeyBzZXRXZWF0aGVyQmcgfSBmcm9tICcuL3NreS5qcyc7XG5cbi8vIEd1YXJkIHNvIHdpcmVFdmVudHMoKSBvbmx5IGV2ZXIgcmVnaXN0ZXJzIG9uZSBzZXQgb2YgbGlzdGVuZXJzLiBUaGUgb2xkXG4vLyBjaGFuZ2VXZWF0aGVySW5mbygpIHJlLXJlZ2lzdGVyZWQgb24gZXZlcnkgZmV0Y2gsIGRvdWJsaW5nIHRoZSBoYW5kbGVyIGNvdW50XG4vLyBwZXIgc2VhcmNoOyB0aGUgcmVuZGVyIHBhdGggKHJlbmRlckZvcmVjYXN0KSBhbmQgdGhlIHdpcmluZyBwYXRoICh3aXJlRXZlbnRzKVxuLy8gYXJlIHNwbGl0IHByZWNpc2VseSBzbyB0aGF0IGNhbiBuZXZlciBoYXBwZW4gYWdhaW4uXG5sZXQgZXZlbnRzV2lyZWQgPSBmYWxzZTtcblxuLy8gRGVib3VuY2Ugd2luZG93IGZvciB0aGUgY2l0eS1zdWdnZXN0aW9uIGxvb2t1cCDigJQgbG9uZyBlbm91Z2ggdGhhdCBhIHJ1biBvZlxuLy8ga2V5c3Ryb2tlcyBmaXJlcyBvbmUgcmVxdWVzdCwgc2hvcnQgZW5vdWdoIHRvIGZlZWwgbGl2ZS5cbmNvbnN0IFNVR0dFU1RfREVCT1VOQ0VfTVMgPSAzMDA7XG5cbi8vIEMvRiBkaXNwbGF5IHVuaXQsIHBlcnNpc3RlZCB1bmRlciB0aGUgc2hhcmVkIHdlYXRoZXJhcHBfIGxvY2FsU3RvcmFnZSBwcmVmaXguXG4vLyBUaGlzIGlzIGRpc3BsYXktb25seTogcmVuZGVyUmliYm9uKCkgc3RpbGwgcmVjZWl2ZXMgcmF3IENlbHNpdXMsIHNvIHRoZSBjdXJ2ZVxuLy8gY29sb3VycyAodGVtcENvbG91cikgYW5kIHRoZSB5LXNjYWxlIG5ldmVyIHNoaWZ0IHdoZW4gdGhlIHJlYWRvdXQgdW5pdCBmbGlwcy5cbmNvbnN0IFVOSVRfS0VZID0gJ3dlYXRoZXJhcHBfdW5pdCc7XG5sZXQgY3VycmVudFVuaXQgPSBsb2FkVW5pdCgpO1xuXG4vLyBUaGUgbGFzdCByZW5kZXJlZCBcIm5vd1wiLCBrZXB0IGluIENlbHNpdXMgc28gdGhlIHVuaXQgdG9nZ2xlIGNhbiByZS1yZW5kZXIgdGhlXG4vLyB0ZW1wZXJhdHVyZSByZWFkb3V0cyB3aXRob3V0IHdhaXRpbmcgZm9yIGFub3RoZXIgZmV0Y2guXG5sZXQgbGFzdE5vdyA9IG51bGw7XG5cbi8vIENhY2hlZCBET00gcmVmZXJlbmNlcywgcG9wdWxhdGVkIG9uY2UgYnkgY2FjaGVEb20oKSBhZnRlciBpbmRleC5qcyBoYXMgYnVpbHRcbi8vIGFuZCBhcHBlbmRlZCB0aGUgRE9NLlxubGV0IHNlYXJjaEZvcm0sIHNlYXJjaElucHV0LCBzdWdnZXN0aW9ucywgbG9jYXRpb25OYW1lLCB1bml0U3dpdGNoLCBjdXJyZW50VGVtcCxcbiAgY3VycmVudENvbmRpdGlvbiwgZmVlbHNWYWwsIGh1bWlkaXR5VmFsLCByYWluVmFsLCB3aW5kVmFsO1xuXG4vLyBBdXRvY29tcGxldGUgc3RhdGUuIGN1cnJlbnRTdWdnZXN0aW9ucyBob2xkcyB0aGUgcmVzdWx0cyBiYWNraW5nIHRoZSB2aXNpYmxlXG4vLyBkcm9wZG93bjsgc2VsZWN0ZWRJbmRleCBpcyB0aGUga2V5Ym9hcmQtaGlnaGxpZ2h0ZWQgcm93ICgtMSA9IG5vbmUpLiByZXF1ZXN0U2VxXG4vLyBkaXNjYXJkcyBzdGFsZSBhc3luYyByZXN1bHRzIOKAlCBvbmx5IHRoZSBsYXRlc3QgbG9va3VwIHJlbmRlcnMg4oCUIGFuZCBpcyBidW1wZWRcbi8vIG9uIGNsb3NlIHNvIGFuIGluLWZsaWdodCByZXF1ZXN0IGNhbid0IHJlb3BlbiB0aGUgZHJvcGRvd24gYWZ0ZXIgc2VsZWN0aW9uLlxubGV0IGN1cnJlbnRTdWdnZXN0aW9ucyA9IFtdO1xubGV0IHNlbGVjdGVkSW5kZXggPSAtMTtcbmxldCBzdWdnZXN0RGVib3VuY2UgPSBudWxsO1xubGV0IHJlcXVlc3RTZXEgPSAwO1xuXG5mdW5jdGlvbiBjYWNoZURvbSgpIHtcbiAgaWYgKGxvY2F0aW9uTmFtZSkgeyByZXR1cm47IH0gLy8gYWxyZWFkeSBjYWNoZWRcblxuICBzZWFyY2hGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaEZvcm0nKTtcbiAgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoSW5wdXQnKTtcbiAgc3VnZ2VzdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VnZ2VzdGlvbnMnKTtcbiAgbG9jYXRpb25OYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvY2F0aW9uTmFtZScpO1xuICB1bml0U3dpdGNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VuaXRTd2l0Y2gnKTtcbiAgY3VycmVudFRlbXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudFRlbXAnKTtcbiAgY3VycmVudENvbmRpdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50Q29uZGl0aW9uJyk7XG4gIGZlZWxzVmFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZlZWxzVmFsJyk7XG4gIGh1bWlkaXR5VmFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2h1bWlkaXR5VmFsJyk7XG4gIHJhaW5WYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFpblZhbCcpO1xuICB3aW5kVmFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbmRWYWwnKTtcbn1cblxuLy8gUHVyZSByZW5kZXIgcGF0aC4gZnVsZmlsbFByb21pc2UoKSBpbiBsb2dpYy5qcyBjYWxscyB0aGlzIG9uIGV2ZXJ5IHJlc29sdmVkXG4vLyByZXNwb25zZTsgaXQgcmVnaXN0ZXJzIE5PIGxpc3RlbmVycywgc28gaXQgaXMgc2FmZSB0byBjYWxsIHJlcGVhdGVkbHkuIERyYXdzXG4vLyB0aGUgcmliYm9uIGFuZCBmaWxscyB0aGUgcmVhZG91dCBmcm9tIHRoZSBzYW1lIFwibm93XCIgaW5kZXgsIHNvIHRoZSBtYXJrZXIgb25cbi8vIHRoZSBjdXJ2ZSBhbmQgdGhlIHN0YXQgcm93IGNhbiBuZXZlciBkaXNhZ3JlZSBhYm91dCB0aGUgY3VycmVudCBob3VyLlxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckZvcmVjYXN0KGZvcmVjYXN0KSB7XG4gIGNhY2hlRG9tKCk7XG5cbiAgcmVuZGVyUmliYm9uKGZvcmVjYXN0KTtcblxuICBjb25zdCBpID0gY3VycmVudEhvdXJJbmRleChmb3JlY2FzdCk7XG4gIGNvbnN0IG5vdyA9IGZvcmVjYXN0LmhvdXJzW2ldO1xuICBpZiAoIW5vdykgeyByZXR1cm47IH1cblxuICBsYXN0Tm93ID0gbm93O1xuICBsb2NhdGlvbk5hbWUudGV4dENvbnRlbnQgPSBmb3JlY2FzdC5sb2NhdGlvbi5uYW1lO1xuICBjdXJyZW50Q29uZGl0aW9uLnRleHRDb250ZW50ID0gbm93LmNvbmRpdGlvbjtcblxuICAvLyBSZXBhaW50IHRoZSBmdWxsLXZpZXdwb3J0IGJhY2tncm91bmQgdG8gbWF0Y2ggdGhlIGN1cnJlbnQgY29uZGl0aW9uLiBPZmYgdGhlXG4gIC8vIGN1cnZlJ3MgZGF0YSBwYXRoIOKAlCBpdCBvbmx5IHN3YXBzIGEgY2xhc3MsIGFuZCBuby1vcHMgd2hlbiB0aGUgY2F0ZWdvcnkgaXNcbiAgLy8gdW5jaGFuZ2VkLCBzbyBwYWdpbmcgbG9jYXRpb25zIG9yIGZsaXBwaW5nIHRoZSB1bml0IGRvZXNuJ3QgcmVzdGFydCBpdC5cbiAgc2V0V2VhdGhlckJnKG5vdy5jb25kaXRpb24pO1xuXG4gIGh1bWlkaXR5VmFsLnRleHRDb250ZW50ID0gbm93Lmh1bWlkaXR5ICsgJyUnO1xuICByYWluVmFsLnRleHRDb250ZW50ID0gbm93LnJhaW4gKyAnJSc7XG4gIHdpbmRWYWwudGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKG5vdy53aW5kKSArICcga20vaCc7XG5cbiAgLy8gVGVtcGVyYXR1cmUgcmVhZG91dHMgYW5kIHRoZSBhY3RpdmUgYnV0dG9uIHN0YXRlIGJvdGggY29tZSBmcm9tIHJlbmRlclRlbXBzLFxuICAvLyBzbyBhIGZldGNoIGFuZCBhIHVuaXQgdG9nZ2xlIGNhbiBuZXZlciBmb3JtYXQgdGhlIHR3byB0ZW1wZXJhdHVyZXMgZGlmZmVyZW50bHkuXG4gIHJlbmRlclRlbXBzKCk7XG59XG5cbi8vIFJlYWQgdGhlIHBlcnNpc3RlZCB1bml0LCBkZWZhdWx0aW5nIHRvIENlbHNpdXMuIEd1YXJkZWQgc28gYSBsb2NrZWQtZG93blxuLy8gbG9jYWxTdG9yYWdlIChwcml2YXRlIG1vZGUsIGRpc2FibGVkIHN0b3JhZ2UpIGZhbGxzIGJhY2sgcmF0aGVyIHRoYW4gdGhyb3dpbmcuXG5mdW5jdGlvbiBsb2FkVW5pdCgpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oVU5JVF9LRVkpID09PSAnRicgPyAnRicgOiAnQyc7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gJ0MnO1xuICB9XG59XG5cbi8vIEZvcm1hdCBhIENlbHNpdXMgc2NhbGFyIGluIHRoZSBhY3RpdmUgZGlzcGxheSB1bml0IOKAlCByb3VuZGVkLCB3aXRoIHRoZSBtYXRjaGluZ1xuLy8gwrBDL8KwRiBzdWZmaXguIENvbnZlcnNpb24gaXMgZGlzcGxheS1vbmx5OyBjYWxsZXJzIGFsd2F5cyBwYXNzIHJhdyBDZWxzaXVzLlxuZnVuY3Rpb24gZm9ybWF0VGVtcChjZWxzaXVzKSB7XG4gIGNvbnN0IHZhbHVlID0gY3VycmVudFVuaXQgPT09ICdGJyA/IGNlbHNpdXMgKiA5IC8gNSArIDMyIDogY2Vsc2l1cztcbiAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUpICsgJ8KwJyArIGN1cnJlbnRVbml0O1xufVxuXG4vLyBSZS1yZW5kZXIgdGhlIHR3byB0ZW1wZXJhdHVyZSByZWFkb3V0cyBmcm9tIHRoZSBjYWNoZWQgQ2Vsc2l1cyBcIm5vd1wiIGFuZCBzeW5jXG4vLyB0aGUgYWN0aXZlIHN0YXRlIG9uIHRoZSBDL0YgYnV0dG9ucy4gQ2FsbGVkIG9uIGV2ZXJ5IGZldGNoIGFuZCBldmVyeSB0b2dnbGUuXG5mdW5jdGlvbiByZW5kZXJUZW1wcygpIHtcbiAgaWYgKHVuaXRTd2l0Y2gpIHtcbiAgICBjb25zdCBvcHRzID0gdW5pdFN3aXRjaC5xdWVyeVNlbGVjdG9yQWxsKCcudW5pdE9wdCcpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0cy5sZW5ndGg7IGkrKykge1xuICAgICAgb3B0c1tpXS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnLCBvcHRzW2ldLmRhdGFzZXQudW5pdCA9PT0gY3VycmVudFVuaXQpO1xuICAgIH1cbiAgfVxuICBpZiAoIWxhc3ROb3cpIHsgcmV0dXJuOyB9XG4gIGN1cnJlbnRUZW1wLnRleHRDb250ZW50ID0gZm9ybWF0VGVtcChsYXN0Tm93LnRlbXApO1xuICBmZWVsc1ZhbC50ZXh0Q29udGVudCA9IGZvcm1hdFRlbXAobGFzdE5vdy5mZWVsc0xpa2UpO1xufVxuXG4vLyBTd2l0Y2ggdGhlIGRpc3BsYXkgdW5pdCwgcGVyc2lzdCBpdCwgYW5kIHJlLXJlbmRlciDigJQgbm8gcmVmZXRjaCwgdGhlIHN0b3JlZFxuLy8gQ2Vsc2l1cyBpcyBjb252ZXJ0ZWQgaW4gcGxhY2UuXG5mdW5jdGlvbiBzZXRVbml0KHVuaXQpIHtcbiAgY3VycmVudFVuaXQgPSB1bml0ID09PSAnRicgPyAnRicgOiAnQyc7XG4gIHRyeSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oVU5JVF9LRVksIGN1cnJlbnRVbml0KTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBzdG9yYWdlIHVuYXZhaWxhYmxlIOKAlCB0aGUgaW4tbWVtb3J5IHVuaXQgc3RpbGwgYXBwbGllcyAqLyB9XG4gIHJlbmRlclRlbXBzKCk7XG59XG5cbi8vIFJlZ2lzdGVycyBsaXN0ZW5lcnMgRVhBQ1RMWSBPTkNFIGZvciB0aGUgbGlmZSBvZiB0aGUgcGFnZS4gaW5kZXguanMgY2FsbHMgdGhpc1xuLy8gYXQgYm9vdHN0cmFwLCBhZnRlciB0aGUgRE9NIGlzIGFwcGVuZGVkIOKAlCBuZXZlciBmcm9tIHRoZSByZW5kZXIgcGF0aCDigJQgc28gYVxuLy8gc2VhcmNoIGZpcmVzIGV4YWN0bHkgb25lIGZldGNoIGFuZCBldmVyeSBlbGVtZW50IGNhcnJpZXMgZXhhY3RseSBvbmUgbGlzdGVuZXIuXG5leHBvcnQgZnVuY3Rpb24gd2lyZUV2ZW50cygpIHtcbiAgaWYgKGV2ZW50c1dpcmVkKSB7IHJldHVybjsgfVxuXG4gIGNhY2hlRG9tKCk7XG4gIGV2ZW50c1dpcmVkID0gdHJ1ZTtcblxuICAvLyBUaGUgYnV0dG9uIGlzIGEgcmVhbCBzdWJtaXQgYnV0dG9uLCBzbyB0aGlzIGNhdGNoZXMgYm90aCB0aGUgY2xpY2sgYW5kIHRoZVxuICAvLyBFbnRlciBrZXkgYXMgb25lIHN1Ym1pdCBldmVudC4gcHJldmVudERlZmF1bHQgc3RvcHMgdGhlIGZvcm0gcmVsb2FkaW5nIHRoZVxuICAvLyBwYWdlOyBmdXR1cmVBUElDYWxscyBkb2VzIHRoZSBzaW5nbGUgZmV0Y2guIFRoZSBzZWFyY2ggZm9ybSBpcyBhbHNvIHRoZVxuICAvLyBhZGQgcGF0aCBmb3Igc2F2ZWQgbG9jYXRpb25zOiBvbiBhIHN1Y2Nlc3NmdWwgbG9va3VwIHRoZSBxdWVyeSBpcyBhcHBlbmRlZFxuICAvLyB0byB0aGUgc2F2ZWQgbGlzdCBhbmQgYmVjb21lcyBjdXJyZW50OyBhIGZhaWxlZCBsb29rdXAgcmVzb2x2ZXMgdG8gbnVsbCBhbmRcbiAgLy8gbGVhdmVzIHRoZSBsaXN0IHVudG91Y2hlZCAoaW52YWxpZElucHV0IGhhcyBhbHJlYWR5IHJlZGRlbmVkIHRoZSBpbnB1dCkuXG4gIHNlYXJjaEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY2xvc2VTdWdnZXN0aW9ucygpO1xuICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoSW5wdXQudmFsdWU7XG4gICAgZm9yZWNhc3RMb2dpYy5mdXR1cmVBUElDYWxscyhxdWVyeSkudGhlbihmdW5jdGlvbiAoZm9yZWNhc3QpIHtcbiAgICAgIGlmIChmb3JlY2FzdCkge1xuICAgICAgICBhZGRMb2NhdGlvbihxdWVyeSk7XG4gICAgICAgIHNlYXJjaElucHV0LnZhbHVlID0gJyc7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4gIHdpcmVBdXRvY29tcGxldGUoKTtcbiAgd2lyZVVuaXRUb2dnbGUoKTtcbn1cblxuLy8gT25lIGRlbGVnYXRlZCBjbGljayBsaXN0ZW5lciBvbiB0aGUgc3dpdGNoIGRyaXZlcyBib3RoIGJ1dHRvbnMuIFdpcmVkIG9uY2UgZnJvbVxuLy8gd2lyZUV2ZW50cygpLCBzbyDigJQgbGlrZSBldmVyeSBvdGhlciBsaXN0ZW5lciDigJQgbm90aGluZyBtdWx0aXBsaWVzIGFjcm9zcyBmZXRjaGVzLlxuLy8gcmVuZGVyVGVtcHMoKSBydW5zIGltbWVkaWF0ZWx5IHRvIHJlZmxlY3QgdGhlIHBlcnNpc3RlZCB1bml0IG9uIHRoZSBidXR0b25zXG4vLyBiZWZvcmUgdGhlIGZpcnN0IGZldGNoIHJlc29sdmVzLlxuZnVuY3Rpb24gd2lyZVVuaXRUb2dnbGUoKSB7XG4gIGlmICghdW5pdFN3aXRjaCkgeyByZXR1cm47IH1cbiAgdW5pdFN3aXRjaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgY29uc3QgYnRuID0gZS50YXJnZXQgJiYgZS50YXJnZXQuY2xvc2VzdCA/IGUudGFyZ2V0LmNsb3Nlc3QoJy51bml0T3B0JykgOiBudWxsO1xuICAgIGlmICghYnRuIHx8ICF1bml0U3dpdGNoLmNvbnRhaW5zKGJ0bikpIHsgcmV0dXJuOyB9XG4gICAgc2V0VW5pdChidG4uZGF0YXNldC51bml0KTtcbiAgfSk7XG4gIHJlbmRlclRlbXBzKCk7XG59XG5cbi8vIFdpcmVzIHRoZSBkZWJvdW5jZWQgY2l0eS1zdWdnZXN0aW9uIGRyb3Bkb3duLiBDYWxsZWQgb25jZSBmcm9tIHdpcmVFdmVudHMoKSxcbi8vIHNvIOKAlCBsaWtlIGV2ZXJ5IG90aGVyIGxpc3RlbmVyIGluIHRoZSBhcHAg4oCUIG5vdGhpbmcgbXVsdGlwbGllcyBhY3Jvc3MgZmV0Y2hlcy5cbmZ1bmN0aW9uIHdpcmVBdXRvY29tcGxldGUoKSB7XG4gIC8vIEVhY2gga2V5c3Ryb2tlIHNjaGVkdWxlcyBvbmUgZGVib3VuY2VkIGxvb2t1cDsgYW4gZW1wdHkgYm94IGNsb3NlcyB0aGVcbiAgLy8gZHJvcGRvd24gb3V0cmlnaHQuIFNldHRpbmcgc2VhcmNoSW5wdXQudmFsdWUgcHJvZ3JhbW1hdGljYWxseSAob24gc2VsZWN0IG9yXG4gIC8vIG9uIGEgc3VjY2Vzc2Z1bCBzdWJtaXQpIGRvZXMgbm90IGZpcmUgJ2lucHV0Jywgc28gdGhlcmUgaXMgbm8gcmVmZXRjaCBsb29wLlxuICBzZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHNlYXJjaElucHV0LnZhbHVlLnRyaW0oKTtcbiAgICBpZiAoc3VnZ2VzdERlYm91bmNlKSB7IGNsZWFyVGltZW91dChzdWdnZXN0RGVib3VuY2UpOyBzdWdnZXN0RGVib3VuY2UgPSBudWxsOyB9XG4gICAgaWYgKCF2YWx1ZSkgeyBjbG9zZVN1Z2dlc3Rpb25zKCk7IHJldHVybjsgfVxuXG4gICAgc3VnZ2VzdERlYm91bmNlID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBzZXEgPSArK3JlcXVlc3RTZXE7XG4gICAgICBmb3JlY2FzdExvZ2ljLnNlYXJjaENpdGllcyh2YWx1ZSkudGhlbihmdW5jdGlvbiAocmVzdWx0cykge1xuICAgICAgICBpZiAoc2VxICE9PSByZXF1ZXN0U2VxKSB7IHJldHVybjsgfSAvLyBhIG5ld2VyIGtleXN0cm9rZSBzdXBlcnNlZGVkIHRoaXNcbiAgICAgICAgcmVuZGVyU3VnZ2VzdGlvbnMocmVzdWx0cyk7XG4gICAgICB9KTtcbiAgICB9LCBTVUdHRVNUX0RFQk9VTkNFX01TKTtcbiAgfSk7XG5cbiAgLy8gQXJyb3cga2V5cyBtb3ZlIHRoZSBoaWdobGlnaHQ7IEVudGVyIG9uIGEgaGlnaGxpZ2h0ZWQgcm93IHNlbGVjdHMgaXQgKGFuZCBpc1xuICAvLyBzdG9wcGVkIGZyb20gYWxzbyBzdWJtaXR0aW5nIHRoZSByYXcgdGV4dCk7IEVzY2FwZSBjbG9zZXMgd2l0aG91dCBzdWJtaXR0aW5nLlxuICAvLyBXaXRoIG5vIGRyb3Bkb3duIG9wZW4sIEVudGVyIHN1Ym1pdHMgdGhlIHR5cGVkIHRleHQgZXhhY3RseSBhcyBiZWZvcmUuXG4gIHNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChzdWdnZXN0aW9ucy5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpIHx8ICFjdXJyZW50U3VnZ2VzdGlvbnMubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChlLmtleSA9PT0gJ0Fycm93RG93bicpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIG1vdmVTZWxlY3Rpb24oMSk7XG4gICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ0Fycm93VXAnKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBtb3ZlU2VsZWN0aW9uKC0xKTtcbiAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICBpZiAoc2VsZWN0ZWRJbmRleCA+PSAwKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY2hvb3NlU3VnZ2VzdGlvbihzZWxlY3RlZEluZGV4KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY2xvc2VTdWdnZXN0aW9ucygpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gQSBjbGljayBhbnl3aGVyZSBvdXRzaWRlIHRoZSBzZWFyY2ggZm9ybSBjbG9zZXMgdGhlIGRyb3Bkb3duLiBDbGlja3MgaW5zaWRlXG4gIC8vIHRoZSBmb3JtICh0aGUgaW5wdXQsIGEgc3VnZ2VzdGlvbiByb3csIHRoZSBidXR0b24pIGFyZSBoYW5kbGVkIGJ5IHRoZWlyIG93blxuICAvLyBsaXN0ZW5lcnMgYW5kIG11c3Qgbm90IGNsb3NlIGl0IGhlcmUgZmlyc3QuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoZS50YXJnZXQgJiYgZS50YXJnZXQuY2xvc2VzdCAmJiBlLnRhcmdldC5jbG9zZXN0KCcjc2VhcmNoRm9ybScpKSB7IHJldHVybjsgfVxuICAgIGNsb3NlU3VnZ2VzdGlvbnMoKTtcbiAgfSk7XG59XG5cbi8vIFJlYnVpbGQgdGhlIGRyb3Bkb3duIGZyb20gYSByZXN1bHRzIGFycmF5LiBFbXB0eSByZXN1bHRzIGNsb3NlIGl0LiBFYWNoIHJvdyBpc1xuLy8gdGhlIGNpdHkgbmFtZSBwbHVzIGEgbXV0ZWQgcmVnaW9uL2NvdW50cnkgbGluZTsgY2xpY2tpbmcgb25lIHNlbGVjdHMgaXQuXG5mdW5jdGlvbiByZW5kZXJTdWdnZXN0aW9ucyhyZXN1bHRzKSB7XG4gIHdoaWxlIChzdWdnZXN0aW9ucy5maXJzdENoaWxkKSB7IHN1Z2dlc3Rpb25zLnJlbW92ZUNoaWxkKHN1Z2dlc3Rpb25zLmZpcnN0Q2hpbGQpOyB9XG5cbiAgY3VycmVudFN1Z2dlc3Rpb25zID0gcmVzdWx0cztcbiAgc2VsZWN0ZWRJbmRleCA9IC0xO1xuXG4gIGlmICghcmVzdWx0cy5sZW5ndGgpIHsgY2xvc2VTdWdnZXN0aW9ucygpOyByZXR1cm47IH1cblxuICByZXN1bHRzLmZvckVhY2goZnVuY3Rpb24gKHIsIGlkeCkge1xuICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtLmNsYXNzTmFtZSA9ICdzdWdnZXN0aW9uLWl0ZW0nO1xuICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdyb2xlJywgJ29wdGlvbicpO1xuXG4gICAgY29uc3QgY2l0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjaXR5LmNsYXNzTmFtZSA9ICdzdWdnZXN0aW9uLWNpdHknO1xuICAgIGNpdHkudGV4dENvbnRlbnQgPSByLm5hbWU7XG5cbiAgICBjb25zdCBwbGFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBwbGFjZS5jbGFzc05hbWUgPSAnc3VnZ2VzdGlvbi1jb3VudHJ5JztcbiAgICBwbGFjZS50ZXh0Q29udGVudCA9IFtyLnJlZ2lvbiwgci5jb3VudHJ5XS5maWx0ZXIoQm9vbGVhbikuam9pbignLCAnKTtcblxuICAgIGl0ZW0uYXBwZW5kQ2hpbGQoY2l0eSk7XG4gICAgaXRlbS5hcHBlbmRDaGlsZChwbGFjZSk7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHsgY2hvb3NlU3VnZ2VzdGlvbihpZHgpOyB9KTtcblxuICAgIHN1Z2dlc3Rpb25zLmFwcGVuZENoaWxkKGl0ZW0pO1xuICB9KTtcblxuICBvcGVuU3VnZ2VzdGlvbnMoKTtcbn1cblxuLy8gTW92ZSB0aGUga2V5Ym9hcmQgaGlnaGxpZ2h0LCB3cmFwcGluZyBhdCBib3RoIGVuZHMsIGFuZCBtaXJyb3IgaXQgb250byB0aGUgRE9NLlxuZnVuY3Rpb24gbW92ZVNlbGVjdGlvbihkaXIpIHtcbiAgY29uc3QgbiA9IGN1cnJlbnRTdWdnZXN0aW9ucy5sZW5ndGg7XG4gIGlmICghbikgeyByZXR1cm47IH1cbiAgc2VsZWN0ZWRJbmRleCA9IChzZWxlY3RlZEluZGV4ICsgZGlyICsgbikgJSBuO1xuXG4gIGNvbnN0IGl0ZW1zID0gc3VnZ2VzdGlvbnMuY2hpbGRyZW47XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICBpdGVtc1tpXS5jbGFzc0xpc3QudG9nZ2xlKCdzZWxlY3RlZCcsIGkgPT09IHNlbGVjdGVkSW5kZXgpO1xuICB9XG59XG5cbi8vIEZpbGwgdGhlIGlucHV0IHdpdGggdGhlIGNob3NlbiBjaXR5IGFuZCBzdWJtaXQgdGhlIGZvcm0gdGhlIHNhbWUgd2F5IHByZXNzaW5nXG4vLyBFbnRlciBvciBjbGlja2luZyBTdWJtaXQgZG9lcywgc28gdGhlIGZldGNoICsgc2F2ZS1sb2NhdGlvbiBwYXRoIGlzIHVuY2hhbmdlZC5cbmZ1bmN0aW9uIGNob29zZVN1Z2dlc3Rpb24oaWR4KSB7XG4gIGNvbnN0IHIgPSBjdXJyZW50U3VnZ2VzdGlvbnNbaWR4XTtcbiAgaWYgKCFyKSB7IHJldHVybjsgfVxuICBzZWFyY2hJbnB1dC52YWx1ZSA9IHIubmFtZTtcbiAgY2xvc2VTdWdnZXN0aW9ucygpO1xuICBpZiAoc2VhcmNoRm9ybS5yZXF1ZXN0U3VibWl0KSB7XG4gICAgc2VhcmNoRm9ybS5yZXF1ZXN0U3VibWl0KCk7XG4gIH0gZWxzZSB7XG4gICAgc2VhcmNoRm9ybS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnc3VibWl0JywgeyBjYW5jZWxhYmxlOiB0cnVlLCBidWJibGVzOiB0cnVlIH0pKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBvcGVuU3VnZ2VzdGlvbnMoKSB7XG4gIHN1Z2dlc3Rpb25zLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICBzZWFyY2hGb3JtLmNsYXNzTGlzdC5hZGQoJ3N1Z2dlc3RpbmcnKTsgLy8gZmxhdHRlbnMgdGhlIGlucHV0J3MgYm90dG9tIGNvcm5lcnNcbn1cblxuLy8gQ2xvc2UgYW5kIHJlc2V0LiBCdW1waW5nIHJlcXVlc3RTZXEgaW52YWxpZGF0ZXMgYW55IGluLWZsaWdodCBsb29rdXAgc28gaXRcbi8vIGNhbid0IHJlb3BlbiB0aGUgZHJvcGRvd24gYWZ0ZXIgYSBzZWxlY3Rpb24gb3Igc3VibWl0LlxuZnVuY3Rpb24gY2xvc2VTdWdnZXN0aW9ucygpIHtcbiAgaWYgKCFzdWdnZXN0aW9ucykgeyByZXR1cm47IH1cbiAgaWYgKHN1Z2dlc3REZWJvdW5jZSkgeyBjbGVhclRpbWVvdXQoc3VnZ2VzdERlYm91bmNlKTsgc3VnZ2VzdERlYm91bmNlID0gbnVsbDsgfVxuICByZXF1ZXN0U2VxKys7XG4gIGN1cnJlbnRTdWdnZXN0aW9ucyA9IFtdO1xuICBzZWxlY3RlZEluZGV4ID0gLTE7XG4gIHN1Z2dlc3Rpb25zLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICBzZWFyY2hGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ3N1Z2dlc3RpbmcnKTtcbn1cblxuLy8gQSBzdWNjZXNzZnVsIGxvb2t1cCBjbGVhcnMgdGhlIGludmFsaWQgc3RhdGU7IGEgZmFpbGVkIG9uZSBrZWVwcyB0aGUgY3VycmVudFxuLy8gcmliYm9uIGFuZCByZWRkZW5zIHRoZSBpbnB1dCBib3JkZXIgKHZpYSB0aGUgLmludmFsaWQgY2xhc3MgaW4gc3R5bGUuY3NzKS5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZElucHV0KCkge1xuICBjYWNoZURvbSgpO1xuICBpZiAoc2VhcmNoRm9ybSkgeyBzZWFyY2hGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmFsaWQnKTsgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW52YWxpZElucHV0KCkge1xuICBjYWNoZURvbSgpO1xuICBpZiAoc2VhcmNoRm9ybSkgeyBzZWFyY2hGb3JtLmNsYXNzTGlzdC5hZGQoJ2ludmFsaWQnKTsgfVxufVxuIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyByZW5kZXJGb3JlY2FzdCwgdmFsaWRJbnB1dCwgaW52YWxpZElucHV0IH0gZnJvbSAnLi9pbmRleENoYW5nZXMuanMnO1xuXG4vLyAgMyBkYXkgZm9yZWNhc3QgLSBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PTM5YzI4Zjg1YWIwMzQ1MjFiOTkyMTcwNTIzMjcxMCZxPTk4MDUyJmRheXM9MyZhcWk9bm8mYWxlcnRzPW5vXG5cbi8vIFRoZSBsYXN0IGZvcmVjYXN0IHdlIHN1Y2Nlc3NmdWxseSByZW5kZXJlZC4gQSBmYWlsZWQgbG9va3VwIGtlZXBzIGl0IG9uIHNjcmVlblxuLy8gKHNlZSBmdWxmaWxsUHJvbWlzZSk6IHRoZSBzZWFyY2gganVzdCByZWRkZW5zIHRoZSBpbnB1dCByYXRoZXIgdGhhbiBibGFua2luZ1xuLy8gdGhlIHJpYmJvbi5cbmxldCBsYXN0Rm9yZWNhc3QgPSBudWxsO1xuXG5leHBvcnQgY29uc3QgZm9yZWNhc3RMb2dpYyA9IChmdW5jdGlvbiAoKSB7XG5cbiAgLy8gTm8gZmV0Y2ggZmlyZXMgYXQgbW9kdWxlLWV2YWwgdGltZS4gVGhlIHNpbmdsZSBpbml0aWFsIGZldGNoIChkZWZhdWx0XG4gIC8vIGxvY2F0aW9uLCBvciB0aGUgZmlyc3Qgc2F2ZWQgbG9jYXRpb24pIGlzIGRyaXZlbiBmcm9tIHRoZSBib290c3RyYXAgaW5cbiAgLy8gaW5kZXguanMgdmlhIGluaXRGYXZvdXJpdGVzKCkgLT4gZnV0dXJlQVBJQ2FsbHMsIHNvIGl0IGhhcHBlbnMgZXhhY3RseSBvbmNlXG4gIC8vIGluIHRoZSBpbmRleCBidW5kbGUgcmF0aGVyIHRoYW4gb25jZSBwZXIgYnVuZGxlIHRoYXQgaW1wb3J0cyB0aGlzIG1vZHVsZS5cblxuICAvLyBGaXJlcyBvbmUgZmV0Y2ggZm9yIGEgbG9jYXRpb24gYW5kIHJlbmRlcnMgb24gc3VjY2Vzcy4gUmV0dXJucyBhIHByb21pc2VcbiAgLy8gcmVzb2x2aW5nIHRvIHRoZSBidWlsdCBmb3JlY2FzdCBvbiBzdWNjZXNzLCBvciBudWxsIG9uIGEgZmFpbGVkIGxvb2t1cCwgc29cbiAgLy8gdGhlIHNlYXJjaCBzdWJtaXQgaGFuZGxlciBjYW4gYXBwZW5kIHRoZSBsb2NhdGlvbiB0byB0aGUgc2F2ZWQgbGlzdCBvbmx5XG4gIC8vIHdoZW4gdGhlIGxvb2t1cCBhY3R1YWxseSBzdWNjZWVkZWQuXG4gIGZ1bmN0aW9uIGZ1dHVyZUFQSUNhbGxzKHZhbHVlKSB7XG4gICAgcmV0dXJuIGZ1bGZpbGxQcm9taXNlKHB1bGxGb3JlY2FzdCh2YWx1ZSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZnVsZmlsbFByb21pc2UoZm9yZWNhc3RKU09OKSB7XG4gICAgcmV0dXJuIGZvcmVjYXN0SlNPTi50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgIC8vIHB1bGxGb3JlY2FzdCByZXNvbHZlcyB0byBudWxsIG9uIGEgZmFpbGVkIGxvb2t1cCDigJQgbGVhdmUgdGhlIGN1cnJlbnRcbiAgICAgIC8vIHJpYmJvbiB1bnRvdWNoZWQgKGludmFsaWRJbnB1dCgpIGhhcyBhbHJlYWR5IHJlZGRlbmVkIHRoZSBpbnB1dCkuXG4gICAgICBpZiAoIXJlc3VsdCkgeyByZXR1cm4gbnVsbDsgfVxuXG4gICAgICBjb25zdCBmb3JlY2FzdCA9IGJ1aWxkRm9yZWNhc3QocmVzdWx0KTtcbiAgICAgIGxhc3RGb3JlY2FzdCA9IGZvcmVjYXN0O1xuICAgICAgcmVuZGVyRm9yZWNhc3QoZm9yZWNhc3QpO1xuICAgICAgcmV0dXJuIGZvcmVjYXN0O1xuICAgIH0pO1xuICB9XG5cbiAgLy8gRmxhdHRlbiB0aGUgdGhyZWUtZGF5IHJlc3BvbnNlIGludG8gYSBzaW5nbGUgNzItaG91ciBzZXJpZXMgcGx1cyBhIGxvY2F0aW9uXG4gIC8vIG9iamVjdC4gRXZlcnkgaG91ciBrZWVwcyBpdHMgb3duIGVwb2NoLCB0ZW1wZXJhdHVyZSwgY29uZGl0aW9uIHRleHQgYW5kIHRoZVxuICAvLyBzdGF0IGZpZWxkcyB0aGUgcmVhZG91dCBzaG93cyDigJQgbm90aGluZyBpcyBjb2xsYXBzZWQgdG8gcGVyLWRheSBzY2FsYXJzLCBhbmRcbiAgLy8gdGhlIGZ1bGwgZm9yZWNhc3RkYXlbXS5ob3VyW10gYXJyYXlzIChhbHJlYWR5IGluIGV2ZXJ5IHJlc3BvbnNlLCBwcmV2aW91c2x5XG4gIC8vIGRpc2NhcmRlZCkgYXJlIHdoYXQgdGhlIGN1cnZlIGlzIGRyYXduIGZyb20uXG4gIGZ1bmN0aW9uIGJ1aWxkRm9yZWNhc3QocmVzdWx0KSB7XG4gICAgY29uc3QgZm9yZWNhc3REYXlzID0gcmVzdWx0LmZvcmVjYXN0LmZvcmVjYXN0ZGF5O1xuICAgIGNvbnN0IGhvdXJzID0gW107XG5cbiAgICBmb3JlY2FzdERheXMuZm9yRWFjaCgoZGF5KSA9PiB7XG4gICAgICBkYXkuaG91ci5mb3JFYWNoKChoKSA9PiB7XG4gICAgICAgIGhvdXJzLnB1c2goe1xuICAgICAgICAgIGVwb2NoOiBoLnRpbWVfZXBvY2gsXG4gICAgICAgICAgdGVtcDogaC50ZW1wX2MsXG4gICAgICAgICAgZmVlbHNMaWtlOiBoLmZlZWxzbGlrZV9jLFxuICAgICAgICAgIGh1bWlkaXR5OiBoLmh1bWlkaXR5LFxuICAgICAgICAgIHJhaW46IGguY2hhbmNlX29mX3JhaW4sXG4gICAgICAgICAgd2luZDogaC53aW5kX2twaCxcbiAgICAgICAgICBjb25kaXRpb246IGguY29uZGl0aW9uLnRleHQsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgbG9jYXRpb246IHtcbiAgICAgICAgbmFtZTogcmVzdWx0LmxvY2F0aW9uLm5hbWUsXG4gICAgICAgIC8vIFwibm93XCIgaXMgaW5kZXhlZCBvZmYgdGhlIGxvY2F0aW9uJ3MgcmVhbCBjdXJyZW50IHRpbWUsIG5vdCBhIHBhcnNlZFxuICAgICAgICAvLyBkYXRlIHN0cmluZy4gU2VlIGN1cnJlbnRIb3VySW5kZXgoKSBpbiByaWJib24uanMuXG4gICAgICAgIGxvY2FsdGltZV9lcG9jaDogcmVzdWx0LmxvY2F0aW9uLmxvY2FsdGltZV9lcG9jaCxcbiAgICAgIH0sXG4gICAgICBob3VyczogaG91cnMsXG4gICAgICAvLyBQZXItZGF5IGRhdGUgKyBob3VyIGNvdW50IGRyaXZlIHRoZSBXRUQvVEhVL0ZSSSB0aWNrcyBhbmQgdGhlIGRheVxuICAgICAgLy8gaGFpcmxpbmVzIGF0IGhvdXJzIDI0IGFuZCA0OC5cbiAgICAgIGRheXM6IGZvcmVjYXN0RGF5cy5tYXAoKGRheSkgPT4gKHsgZGF0ZTogZGF5LmRhdGUsIGNvdW50OiBkYXkuaG91ci5sZW5ndGggfSkpLFxuICAgIH07XG4gIH1cblxuICAvLyBUYWtlcyBhIGxvY2F0aW9uIHZhbHVlIGFwcGVuZGVkIHRvIHRoZSBBUEkgY2FsbC4gUmVzb2x2ZXMgdG8gdGhlIHJhdyBKU09OIG9uXG4gIC8vIHN1Y2Nlc3MsIG9yIG51bGwgb24gZmFpbHVyZSAoc28gZnVsZmlsbFByb21pc2Uga2VlcHMgdGhlIGN1cnJlbnQgcmliYm9uKS5cbiAgYXN5bmMgZnVuY3Rpb24gcHVsbEZvcmVjYXN0KHZhbHVlKSB7XG4gICAgY29uc3QgdXJsID0gJ2h0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PTM5YzI4Zjg1YWIwMzQ1MjFiOTkyMTcwNTIzMjcxMCZxPScgKyB2YWx1ZSArICcmZGF5cz0zJmFxaT1ubyZhbGVydHM9bm8nO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7IG1vZGU6ICdjb3JzJyB9KTtcblxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIFN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGZvcmVjYXN0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICB2YWxpZElucHV0KCk7XG5cbiAgICAgIHJldHVybiBmb3JlY2FzdDtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIGNhdGNoZXMgZXJyb3JzIGJvdGggaW4gZmV0Y2ggYW5kIHJlc3BvbnNlLmpzb25cbiAgICAgIGludmFsaWRJbnB1dCgpO1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgLy8gVHlwZWFoZWFkIGxvb2t1cCBmb3IgdGhlIHNlYXJjaCBib3guIEhpdHMgV2VhdGhlckFQSSdzIHNlYXJjaC9hdXRvY29tcGxldGVcbiAgLy8gZW5kcG9pbnQgKHJldXNpbmcgdGhlIHNhbWUga2V5IGFzIHB1bGxGb3JlY2FzdCkgYW5kIHJlc29sdmVzIHRvIHRoZSByYXdcbiAgLy8gcmVzdWx0cyBhcnJheSDigJQgW3sgbmFtZSwgcmVnaW9uLCBjb3VudHJ5LCAuLi4gfSwgLi4uXSDigJQgb3IgW10gb24gYW4gZW1wdHlcbiAgLy8gcXVlcnksIG5vIG1hdGNoZXMsIG9yIGFueSBuZXR3b3JrL3BhcnNlIGVycm9yLiBOZXZlciB0aHJvd3M6IHRoZSBkcm9wZG93blxuICAvLyBqdXN0IHNob3dzIG5vdGhpbmcgb24gZmFpbHVyZS5cbiAgYXN5bmMgZnVuY3Rpb24gc2VhcmNoQ2l0aWVzKHZhbHVlKSB7XG4gICAgY29uc3QgcSA9IFN0cmluZyh2YWx1ZSkudHJpbSgpO1xuICAgIGlmICghcSkgeyByZXR1cm4gW107IH1cblxuICAgIGNvbnN0IHVybCA9ICdodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9zZWFyY2guanNvbj9rZXk9MzljMjhmODVhYjAzNDUyMWI5OTIxNzA1MjMyNzEwJnE9JyArIGVuY29kZVVSSUNvbXBvbmVudChxKTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgeyBtb2RlOiAnY29ycycgfSk7XG5cbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBTdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgfVxuXG4gICAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShyZXN1bHRzKSA/IHJlc3VsdHMgOiBbXTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG5cbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHB1bGxGb3JlY2FzdCxcbiAgICBmdXR1cmVBUElDYWxscyxcbiAgICBzZWFyY2hDaXRpZXMsXG4gIH07XG5cbn0pKCk7IC8vIGVuZHMgZm9yZWNhc3RMb2dpYyBmdW5jdGlvblxuIiwiLy8gcmliYm9uLmpzIOKAlCB0aGUgNzItaG91ciB0ZW1wZXJhdHVyZSByaWJib24uXG4vL1xuLy8gVGhlIGZvcmVjYXN0IGlzIG9uZSBjb250aW51b3VzIHRlbXBlcmF0dXJlIGN1cnZlIGFjcm9zcyBhbGwgdGhyZWUgZGF5cyByYXRoZXJcbi8vIHRoYW4gdGhyZWUgY2FyZCBzdGF0ZXMgeW91IHBhZ2UgYmV0d2Vlbiwgc28gbmF2aWdhdGlvbiBzdG9wcyBiZWluZyBhIGNvbmNlcHQ6XG4vLyBldmVyeSBob3VyIGlzIG9uIHNjcmVlbiBhdCBvbmNlLiBDb2xvdXIgaXMgYSBmdW5jdGlvbiBvZiB0aGUgdGVtcGVyYXR1cmVcbi8vIHNjYWxhciAoY29sZCAtPiBtaWxkIC0+IHdhcm0gLT4gaG90KSwgTk9UIHRoZSBjb25kaXRpb24gY2F0ZWdvcnksIHNvIHRoZXJlIGlzXG4vLyBubyBwZXItY29uZGl0aW9uIGJyYW5jaCB0byB3cml0ZSBhbmQgbm8gZWlnaHRoIGNhc2UgdG8gZm9yZ2V0LlxuLy9cbi8vIGJ1aWxkUmliYm9uKG1vdW50KSBjcmVhdGVzIHRoZSBTVkcgc2NhZmZvbGQgb25jZSBhdCBib290c3RyYXAgKGRlZnMsIGdyYWRpZW50cyxcbi8vIGVtcHR5IGdyb3VwcykgYW5kIGNhY2hlcyBlbGVtZW50IHJlZnMuIHJlbmRlckZvcmVjYXN0KCkgaW4gaW5kZXhDaGFuZ2VzLmpzXG4vLyBjYWxscyByZW5kZXJSaWJib24oZm9yZWNhc3QpIG9uIGV2ZXJ5IHJlc29sdmVkIHJlc3BvbnNlIHRvIHJlZHJhdyB0aGUgY3VydmUsXG4vLyB0aGUgZGF5IGhhaXJsaW5lcy90aWNrcyBhbmQgdGhlIGN1cnJlbnQtaG91ciBtYXJrZXIgZnJvbSBkYXRhLiBjdXJyZW50SG91ckluZGV4XG4vLyBpcyB0aGUgc2luZ2xlIHNvdXJjZSBvZiB0cnV0aCBmb3IgXCJub3dcIiwgc2hhcmVkIHdpdGggdGhlIHJlYWRvdXQgc28gdGhlIG1hcmtlclxuLy8gYW5kIHRoZSBzdGF0IHJvdyBuZXZlciBkaXNhZ3JlZS5cbi8vXG4vLyBIYW5kLWF1dGhvcmVkIFNWRywgdmFuaWxsYSBvbmx5IOKAlCBubyBjaGFydGluZyBsaWJyYXJ5LCBubyBkZXBlbmRlbmNpZXMuXG5cbmNvbnN0IE5TID0gJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJztcblxuLy8gdmlld0JveCBnZW9tZXRyeSwgaW4gdXNlciB1bml0cy4gVGhlIGN1cnZlIGJhbmQgc2l0cyBiZXR3ZWVuIENIQVJUX1RPUCBhbmRcbi8vIENIQVJUX1RPUCtDSEFSVF9IOyBUSUNLX0ggYmVuZWF0aCBpdCBjYXJyaWVzIHRoZSBXRUQvVEhVL0ZSSSBkYXkgbGFiZWxzLiBBXG4vLyBzZWNvbmQgbGFuZSAodGlkZXMsIG91dCBvZiBzY29wZSB0b2RheSkgd291bGQgYWRkIExBTkVfSCBiZWxvdyB0aGF0IOKAlCB0aGVcbi8vIHZpZXdCb3ggaGVpZ2h0IHN3aXRjaGVzIGJldHdlZW4gdHdvIHZhbHVlcyBkZXBlbmRpbmcgb24gd2hldGhlciB0aGUgbGFuZVxuLy8gZXhpc3RzLCBzbyB0aGUgbGF5b3V0IGlzIGJ1aWx0IGxhbmUtb3B0aW9uYWwgZXZlbiB0aG91Z2ggdGhlIGxhbmUgbmV2ZXJcbi8vIHJlbmRlcnMgZm9yIG5vdy5cbmNvbnN0IFZJRVdfVyA9IDcyMDtcbmNvbnN0IFBBRF9MID0gMTA7XG5jb25zdCBQQURfUiA9IDEwO1xuY29uc3QgQ0hBUlRfVE9QID0gMTg7XG5jb25zdCBDSEFSVF9IID0gMTUwO1xuY29uc3QgVElDS19IID0gMjY7XG5jb25zdCBMQU5FX0ggPSA5MDtcblxuLy8gVGVtcGVyYXR1cmUgLT4gY29sb3VyIHJhbXAuIEZvdXIgYW5jaG9ycyBzcGFubmluZyBhIGZpeGVkIMKwQyBkb21haW4gc28gdGhlXG4vLyBzYW1lIHRlbXBlcmF0dXJlIGFsd2F5cyByZWFkcyB0aGUgc2FtZSBjb2xvdXIgcmVnYXJkbGVzcyBvZiB0aGUgZGF5J3MgcmFuZ2UuXG5jb25zdCBSQU1QID0gW1xuICB7IHQ6IC01LCBjOiBbMHgzZCwgMHg2ZiwgMHhhOF0gfSwgLy8gY29sZFxuICB7IHQ6IDEwLCBjOiBbMHg2ZiwgMHhhOCwgMHhhMF0gfSwgLy8gbWlsZFxuICB7IHQ6IDI1LCBjOiBbMHhkOSwgMHhhNCwgMHg0MV0gfSwgLy8gd2FybVxuICB7IHQ6IDQwLCBjOiBbMHhjMiwgMHg0NSwgMHgyZF0gfSwgLy8gaG90XG5dO1xuXG5jb25zdCBXRUVLREFZID0gWydTVU4nLCAnTU9OJywgJ1RVRScsICdXRUQnLCAnVEhVJywgJ0ZSSScsICdTQVQnXTtcblxuLy8gQ2FjaGVkIHNjYWZmb2xkIHJlZnMsIHBvcHVsYXRlZCBvbmNlIGJ5IGJ1aWxkUmliYm9uKCkuXG5sZXQgc3ZnLCB0ZW1wR3JhZCwgZmlsbFBhdGgsIGN1cnZlUGF0aCwgYm91bmRhcnlHcm91cCwgdGlja0dyb3VwLCBtYXJrZXJHcm91cCxcbiAgbGFuZUdyb3VwO1xuXG5mdW5jdGlvbiBlbChuYW1lLCBhdHRycykge1xuICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKE5TLCBuYW1lKTtcbiAgaWYgKGF0dHJzKSB7XG4gICAgZm9yIChjb25zdCBrIGluIGF0dHJzKSB7IG5vZGUuc2V0QXR0cmlidXRlKGssIGF0dHJzW2tdKTsgfVxuICB9XG4gIHJldHVybiBub2RlO1xufVxuXG5mdW5jdGlvbiBsZXJwKGEsIGIsIGYpIHsgcmV0dXJuIGEgKyAoYiAtIGEpICogZjsgfVxuXG4vLyBDb2xvdXIgZm9yIGEgdGVtcGVyYXR1cmUsIGludGVycG9sYXRlZCBhY3Jvc3MgdGhlIHJhbXAgYW5jaG9ycyBhbmQgY2xhbXBlZCB0b1xuLy8gdGhlIGRvbWFpbiBlbmRzLlxuZnVuY3Rpb24gdGVtcENvbG91cih0ZW1wKSB7XG4gIGlmICh0ZW1wIDw9IFJBTVBbMF0udCkgeyByZXR1cm4gcmdiKFJBTVBbMF0uYyk7IH1cbiAgaWYgKHRlbXAgPj0gUkFNUFtSQU1QLmxlbmd0aCAtIDFdLnQpIHsgcmV0dXJuIHJnYihSQU1QW1JBTVAubGVuZ3RoIC0gMV0uYyk7IH1cbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBSQU1QLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHRlbXAgPD0gUkFNUFtpXS50KSB7XG4gICAgICBjb25zdCBsbyA9IFJBTVBbaSAtIDFdO1xuICAgICAgY29uc3QgaGkgPSBSQU1QW2ldO1xuICAgICAgY29uc3QgZiA9ICh0ZW1wIC0gbG8udCkgLyAoaGkudCAtIGxvLnQpO1xuICAgICAgcmV0dXJuIHJnYihbXG4gICAgICAgIE1hdGgucm91bmQobGVycChsby5jWzBdLCBoaS5jWzBdLCBmKSksXG4gICAgICAgIE1hdGgucm91bmQobGVycChsby5jWzFdLCBoaS5jWzFdLCBmKSksXG4gICAgICAgIE1hdGgucm91bmQobGVycChsby5jWzJdLCBoaS5jWzJdLCBmKSksXG4gICAgICBdKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJnYihSQU1QW1JBTVAubGVuZ3RoIC0gMV0uYyk7XG59XG5cbmZ1bmN0aW9uIHJnYihjKSB7IHJldHVybiAncmdiKCcgKyBjWzBdICsgJywnICsgY1sxXSArICcsJyArIGNbMl0gKyAnKSc7IH1cblxuZnVuY3Rpb24gd2Vla2RheUFiYnIoZGF0ZVN0cikge1xuICAvLyBkYXRlU3RyIGlzICdZWVlZLU1NLUREJy4gQnVpbGQgdGhlIGRhdGUgYXQgVVRDIG1pZG5pZ2h0IHNvIHRoZSB3ZWVrZGF5IG5ldmVyXG4gIC8vIHNoaWZ0cyBhY3Jvc3MgYSB0aW1lem9uZSBib3VuZGFyeS5cbiAgY29uc3QgcCA9IFN0cmluZyhkYXRlU3RyKS5zcGxpdCgnLScpO1xuICBjb25zdCBkID0gbmV3IERhdGUoRGF0ZS5VVEMoK3BbMF0sICgrcFsxXSkgLSAxLCArcFsyXSkpO1xuICByZXR1cm4gV0VFS0RBWVtkLmdldFVUQ0RheSgpXSB8fCAnJztcbn1cblxuLy8gSW5kZXggb2YgdGhlIGhvdXIgYnVja2V0IG5lYXJlc3QgXCJub3dcIi4gRHJpdmVuIG9mZiBsb2NhdGlvbi5sb2NhbHRpbWVfZXBvY2gsXG4vLyBOT1QgYSBwYXJzZWQgZGF0ZS1zdHJpbmcgaG91ciDigJQgdGhlIG9sZCBnZXRDdXJyZW50VGltZSgpIHJlYWQgdGhlIGhvdXIgb3V0IG9mXG4vLyBkYXRlX2Vwb2NoIChsb2NhbCBtaWRuaWdodCkgYW5kIHJldHVybmVkIHRoZSBVVEMgb2Zmc2V0LCBzbyBcImZlZWxzIGxpa2VcIiB3YXMgYVxuLy8gZml4ZWQgYXJiaXRyYXJ5IGhvdXIuIGxvY2FsdGltZV9lcG9jaCBpcyB0aGUgbG9jYXRpb24ncyByZWFsIGN1cnJlbnQgdGltZS5cbmV4cG9ydCBmdW5jdGlvbiBjdXJyZW50SG91ckluZGV4KGZvcmVjYXN0KSB7XG4gIGNvbnN0IGhvdXJzID0gZm9yZWNhc3QuaG91cnM7XG4gIGlmICghaG91cnMgfHwgIWhvdXJzLmxlbmd0aCkgeyByZXR1cm4gMDsgfVxuICBjb25zdCBub3cgPSBmb3JlY2FzdC5sb2NhdGlvbi5sb2NhbHRpbWVfZXBvY2g7XG4gIGxldCBiZXN0ID0gMDtcbiAgbGV0IGJlc3REaWZmID0gSW5maW5pdHk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaG91cnMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBkaWZmID0gTWF0aC5hYnMoaG91cnNbaV0uZXBvY2ggLSBub3cpO1xuICAgIGlmIChkaWZmIDwgYmVzdERpZmYpIHsgYmVzdERpZmYgPSBkaWZmOyBiZXN0ID0gaTsgfVxuICB9XG4gIHJldHVybiBiZXN0O1xufVxuXG4vLyBDcmVhdGUgdGhlIFNWRyBzY2FmZm9sZCBvbmNlLiBDYWxsZWQgZnJvbSBpbmRleC5qcyBhdCBib290c3RyYXAsIGFmdGVyIHRoZVxuLy8gbW91bnQgZWxlbWVudCBpcyBpbiB0aGUgRE9NLlxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkUmliYm9uKG1vdW50KSB7XG4gIGlmIChzdmcpIHsgcmV0dXJuOyB9IC8vIGJ1aWxkIG9uY2VcblxuICBzdmcgPSBlbCgnc3ZnJywge1xuICAgIGlkOiAncmliYm9uU3ZnJyxcbiAgICB2aWV3Qm94OiAnMCAwICcgKyBWSUVXX1cgKyAnICcgKyAoQ0hBUlRfVE9QICsgQ0hBUlRfSCArIFRJQ0tfSCksXG4gICAgcHJlc2VydmVBc3BlY3RSYXRpbzogJ3hNaWRZTWlkIG1lZXQnLFxuICB9KTtcblxuICBjb25zdCBkZWZzID0gZWwoJ2RlZnMnKTtcblxuICAvLyBIb3Jpem9udGFsIHN0cm9rZSBncmFkaWVudDogY29sb3VyZWQgYnkgdGVtcGVyYXR1cmUgYWNyb3NzIHRoZSA3MiBob3Vycy5cbiAgLy8gU3RvcHMgYXJlIHJlYnVpbHQgZWFjaCByZW5kZXIgZnJvbSB0aGUgYWN0dWFsIHNlcmllcy5cbiAgdGVtcEdyYWQgPSBlbCgnbGluZWFyR3JhZGllbnQnLCB7XG4gICAgaWQ6ICd0ZW1wR3JhZCcsIHgxOiAnMCcsIHkxOiAnMCcsIHgyOiAnMScsIHkyOiAnMCcsXG4gIH0pO1xuXG4gIC8vIFZlcnRpY2FsIGZhZGUgZmlsbCB1bmRlciB0aGUgY3VydmUuXG4gIGNvbnN0IGZpbGxHcmFkID0gZWwoJ2xpbmVhckdyYWRpZW50Jywge1xuICAgIGlkOiAnZmlsbEdyYWQnLCB4MTogJzAnLCB5MTogJzAnLCB4MjogJzAnLCB5MjogJzEnLFxuICB9KTtcbiAgZmlsbEdyYWQuYXBwZW5kQ2hpbGQoZWwoJ3N0b3AnLCB7IG9mZnNldDogJzAnLCAnc3RvcC1jb2xvcic6ICcjOENBMEFFJywgJ3N0b3Atb3BhY2l0eSc6ICcwLjI4JyB9KSk7XG4gIGZpbGxHcmFkLmFwcGVuZENoaWxkKGVsKCdzdG9wJywgeyBvZmZzZXQ6ICcxJywgJ3N0b3AtY29sb3InOiAnIzhDQTBBRScsICdzdG9wLW9wYWNpdHknOiAnMCcgfSkpO1xuXG4gIGRlZnMuYXBwZW5kQ2hpbGQodGVtcEdyYWQpO1xuICBkZWZzLmFwcGVuZENoaWxkKGZpbGxHcmFkKTtcbiAgc3ZnLmFwcGVuZENoaWxkKGRlZnMpO1xuXG4gIGZpbGxQYXRoID0gZWwoJ3BhdGgnLCB7IGNsYXNzOiAncmliYm9uLWZpbGwnLCBmaWxsOiAndXJsKCNmaWxsR3JhZCknLCBzdHJva2U6ICdub25lJyB9KTtcbiAgY3VydmVQYXRoID0gZWwoJ3BhdGgnLCB7IGNsYXNzOiAncmliYm9uLWN1cnZlJywgZmlsbDogJ25vbmUnLCBzdHJva2U6ICd1cmwoI3RlbXBHcmFkKScgfSk7XG4gIGJvdW5kYXJ5R3JvdXAgPSBlbCgnZycsIHsgY2xhc3M6ICdyaWJib24tYm91bmRhcmllcycgfSk7XG4gIHRpY2tHcm91cCA9IGVsKCdnJywgeyBjbGFzczogJ3JpYmJvbi10aWNrcycgfSk7XG4gIG1hcmtlckdyb3VwID0gZWwoJ2cnLCB7IGNsYXNzOiAncmliYm9uLW1hcmtlcicgfSk7XG4gIGxhbmVHcm91cCA9IGVsKCdnJywgeyBjbGFzczogJ3JpYmJvbi1sYW5lJyB9KTtcblxuICBzdmcuYXBwZW5kQ2hpbGQoZmlsbFBhdGgpO1xuICBzdmcuYXBwZW5kQ2hpbGQoY3VydmVQYXRoKTtcbiAgc3ZnLmFwcGVuZENoaWxkKGJvdW5kYXJ5R3JvdXApO1xuICBzdmcuYXBwZW5kQ2hpbGQodGlja0dyb3VwKTtcbiAgc3ZnLmFwcGVuZENoaWxkKGxhbmVHcm91cCk7XG4gIHN2Zy5hcHBlbmRDaGlsZChtYXJrZXJHcm91cCk7XG5cbiAgbW91bnQuYXBwZW5kQ2hpbGQoc3ZnKTtcbn1cblxuZnVuY3Rpb24gY2xlYXIobm9kZSkge1xuICB3aGlsZSAobm9kZS5maXJzdENoaWxkKSB7IG5vZGUucmVtb3ZlQ2hpbGQobm9kZS5maXJzdENoaWxkKTsgfVxufVxuXG4vLyBSZWRyYXcgdGhlIHdob2xlIHJpYmJvbiBmcm9tIGEgZm9yZWNhc3Q6IHsgbG9jYXRpb24sIGhvdXJzW10sIGRheXNbXSwgbGFuZT8gfS5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJSaWJib24oZm9yZWNhc3QpIHtcbiAgaWYgKCFzdmcpIHsgcmV0dXJuOyB9XG5cbiAgY29uc3QgaG91cnMgPSBmb3JlY2FzdC5ob3VycyB8fCBbXTtcbiAgY29uc3QgbiA9IGhvdXJzLmxlbmd0aDtcbiAgaWYgKCFuKSB7IHJldHVybjsgfVxuXG4gIGNvbnN0IGxhbmVPbiA9ICEhZm9yZWNhc3QubGFuZTtcbiAgY29uc3QgdG90YWxIID0gQ0hBUlRfVE9QICsgQ0hBUlRfSCArIFRJQ0tfSCArIChsYW5lT24gPyBMQU5FX0ggOiAwKTtcbiAgc3ZnLnNldEF0dHJpYnV0ZSgndmlld0JveCcsICcwIDAgJyArIFZJRVdfVyArICcgJyArIHRvdGFsSCk7XG5cbiAgY29uc3QgaW5uZXJXID0gVklFV19XIC0gUEFEX0wgLSBQQURfUjtcbiAgY29uc3QgYmFzZWxpbmUgPSBDSEFSVF9UT1AgKyBDSEFSVF9IO1xuXG4gIC8vIHRlbXBlcmF0dXJlIGRvbWFpbiBmb3IgdGhlIHktc2NhbGUsIHBhZGRlZCBzbyB0aGUgY3VydmUgbmV2ZXIgaHVncyBhbiBlZGdlLlxuICBsZXQgbWluID0gSW5maW5pdHk7XG4gIGxldCBtYXggPSAtSW5maW5pdHk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgaWYgKGhvdXJzW2ldLnRlbXAgPCBtaW4pIHsgbWluID0gaG91cnNbaV0udGVtcDsgfVxuICAgIGlmIChob3Vyc1tpXS50ZW1wID4gbWF4KSB7IG1heCA9IGhvdXJzW2ldLnRlbXA7IH1cbiAgfVxuICBpZiAobWluID09PSBtYXgpIHsgbWluIC09IDE7IG1heCArPSAxOyB9XG4gIGNvbnN0IHNwYW4gPSBtYXggLSBtaW47XG5cbiAgY29uc3QgeCA9IChpKSA9PiBQQURfTCArIChuIDw9IDEgPyAwIDogKGkgLyAobiAtIDEpKSAqIGlubmVyVyk7XG4gIGNvbnN0IHkgPSAodCkgPT4gQ0hBUlRfVE9QICsgKDEgLSAodCAtIG1pbikgLyBzcGFuKSAqIENIQVJUX0g7XG5cbiAgLy8gQnVpbGQgdGhlIHBvaW50cywgdGhlbiBhIHNtb290aCBwYXRoIHZpYSBxdWFkcmF0aWMgbWlkcG9pbnRzIChubyBvdmVyc2hvb3QpLlxuICBjb25zdCBwdHMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHsgcHRzLnB1c2goeyB4OiB4KGkpLCB5OiB5KGhvdXJzW2ldLnRlbXApIH0pOyB9XG5cbiAgbGV0IGQgPSAnTSAnICsgcHRzWzBdLngudG9GaXhlZCgyKSArICcgJyArIHB0c1swXS55LnRvRml4ZWQoMik7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgeGMgPSAocHRzW2kgLSAxXS54ICsgcHRzW2ldLngpIC8gMjtcbiAgICBjb25zdCB5YyA9IChwdHNbaSAtIDFdLnkgKyBwdHNbaV0ueSkgLyAyO1xuICAgIGQgKz0gJyBRICcgKyBwdHNbaSAtIDFdLngudG9GaXhlZCgyKSArICcgJyArIHB0c1tpIC0gMV0ueS50b0ZpeGVkKDIpICtcbiAgICAgICcgJyArIHhjLnRvRml4ZWQoMikgKyAnICcgKyB5Yy50b0ZpeGVkKDIpO1xuICB9XG4gIGQgKz0gJyBMICcgKyBwdHNbbiAtIDFdLngudG9GaXhlZCgyKSArICcgJyArIHB0c1tuIC0gMV0ueS50b0ZpeGVkKDIpO1xuXG4gIGN1cnZlUGF0aC5zZXRBdHRyaWJ1dGUoJ2QnLCBkKTtcbiAgZmlsbFBhdGguc2V0QXR0cmlidXRlKCdkJywgZCArXG4gICAgJyBMICcgKyBwdHNbbiAtIDFdLngudG9GaXhlZCgyKSArICcgJyArIGJhc2VsaW5lICtcbiAgICAnIEwgJyArIHB0c1swXS54LnRvRml4ZWQoMikgKyAnICcgKyBiYXNlbGluZSArICcgWicpO1xuXG4gIC8vIEhvcml6b250YWwgdGVtcGVyYXR1cmUgZ3JhZGllbnQ6IG9uZSBzdG9wIHBlciBob3VyLCBjb2xvdXJlZCBieSB0aGF0IGhvdXInc1xuICAvLyB0ZW1wZXJhdHVyZS4gb2JqZWN0Qm91bmRpbmdCb3ggbWFwcyBvZmZzZXQgaS8obi0xKSBvbnRvIHRoZSBjdXJ2ZSdzIHgsIHdoaWNoXG4gIC8vIHNwYW5zIHRoZSBmdWxsIGlubmVyIHdpZHRoLCBzbyBlYWNoIHN0b3AgbGFuZHMgdW5kZXIgaXRzIGhvdXIuXG4gIGNsZWFyKHRlbXBHcmFkKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICB0ZW1wR3JhZC5hcHBlbmRDaGlsZChlbCgnc3RvcCcsIHtcbiAgICAgIG9mZnNldDogKG4gPD0gMSA/IDAgOiBpIC8gKG4gLSAxKSkudG9GaXhlZCg0KSxcbiAgICAgICdzdG9wLWNvbG9yJzogdGVtcENvbG91cihob3Vyc1tpXS50ZW1wKSxcbiAgICB9KSk7XG4gIH1cblxuICAvLyBEYXkgaGFpcmxpbmVzICsgV0VEL1RIVS9GUkkgdGlja3MsIGRlcml2ZWQgZnJvbSB0aGUgcGVyLWRheSBob3VyIGNvdW50cyBzbyBhXG4gIC8vIHNob3J0IHRyYWlsaW5nIGRheSBzdGlsbCBsaW5lcyB1cC5cbiAgY2xlYXIoYm91bmRhcnlHcm91cCk7XG4gIGNsZWFyKHRpY2tHcm91cCk7XG4gIGNvbnN0IGRheXMgPSBmb3JlY2FzdC5kYXlzIHx8IFtdO1xuICBsZXQgc3RhcnQgPSAwO1xuICBmb3IgKGxldCBkaSA9IDA7IGRpIDwgZGF5cy5sZW5ndGg7IGRpKyspIHtcbiAgICBjb25zdCBjb3VudCA9IGRheXNbZGldLmNvdW50IHx8IDA7XG4gICAgaWYgKGNvdW50IDw9IDApIHsgY29udGludWU7IH1cblxuICAgIGlmIChkaSA+IDAgJiYgc3RhcnQgPCBuKSB7XG4gICAgICBjb25zdCBieCA9IHgoc3RhcnQpLnRvRml4ZWQoMik7XG4gICAgICBib3VuZGFyeUdyb3VwLmFwcGVuZENoaWxkKGVsKCdsaW5lJywge1xuICAgICAgICBjbGFzczogJ3JpYmJvbi1oYWlybGluZScsXG4gICAgICAgIHgxOiBieCwgeTE6IENIQVJUX1RPUCwgeDI6IGJ4LCB5MjogYmFzZWxpbmUsXG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgY29uc3QgY2VudGVySWR4ID0gc3RhcnQgKyAoY291bnQgLSAxKSAvIDI7XG4gICAgY29uc3QgdGljayA9IGVsKCd0ZXh0Jywge1xuICAgICAgY2xhc3M6ICdyaWJib24tdGljaycsXG4gICAgICB4OiB4KGNlbnRlcklkeCkudG9GaXhlZCgyKSxcbiAgICAgIHk6IChiYXNlbGluZSArIFRJQ0tfSCAqIDAuNykudG9GaXhlZCgyKSxcbiAgICAgICd0ZXh0LWFuY2hvcic6ICdtaWRkbGUnLFxuICAgIH0pO1xuICAgIHRpY2sudGV4dENvbnRlbnQgPSB3ZWVrZGF5QWJicihkYXlzW2RpXS5kYXRlKTtcbiAgICB0aWNrR3JvdXAuYXBwZW5kQ2hpbGQodGljayk7XG5cbiAgICBzdGFydCArPSBjb3VudDtcbiAgfVxuXG4gIC8vIEN1cnJlbnQtaG91ciBtYXJrZXI6IGEgaGFpcmxpbmUgZHJvcHBlZCB0byB0aGUgYmFzZWxpbmUgcGx1cyBhIGRvdCBvbiB0aGVcbiAgLy8gY3VydmUsIHRoZSBkb3QgZmlsbGVkIHdpdGggdGhlIHRlbXBlcmF0dXJlIGNvbG91ciBmb3IgdGhhdCBob3VyLlxuICBjbGVhcihtYXJrZXJHcm91cCk7XG4gIGNvbnN0IGlkeCA9IGN1cnJlbnRIb3VySW5kZXgoZm9yZWNhc3QpO1xuICBjb25zdCBteCA9IHgoaWR4KTtcbiAgY29uc3QgbXkgPSB5KGhvdXJzW2lkeF0udGVtcCk7XG4gIG1hcmtlckdyb3VwLmFwcGVuZENoaWxkKGVsKCdsaW5lJywge1xuICAgIGNsYXNzOiAncmliYm9uLW5vd2xpbmUnLFxuICAgIHgxOiBteC50b0ZpeGVkKDIpLCB5MTogbXkudG9GaXhlZCgyKSwgeDI6IG14LnRvRml4ZWQoMiksIHkyOiBiYXNlbGluZSxcbiAgfSkpO1xuICBtYXJrZXJHcm91cC5hcHBlbmRDaGlsZChlbCgnY2lyY2xlJywge1xuICAgIGNsYXNzOiAncmliYm9uLWRvdCcsXG4gICAgY3g6IG14LnRvRml4ZWQoMiksIGN5OiBteS50b0ZpeGVkKDIpLCByOiAnNS41JyxcbiAgICBmaWxsOiB0ZW1wQ29sb3VyKGhvdXJzW2lkeF0udGVtcCksXG4gIH0pKTtcblxuICAvLyBPcHRpb25hbCBzZWNvbmQgbGFuZS4gTm8gZGF0YSBmZWVkcyBpdCB0b2RheSAodGlkZXMgYXJlIFBybysgYW5kIGVtcHR5IGZvclxuICAvLyBpbmxhbmQgbG9jYXRpb25zKSwgc28gaXQgc3RheXMgZW1wdHkgYW5kIHRoZSB2aWV3Qm94IHVzZXMgdGhlIHNob3J0ZXIgb2YgdGhlXG4gIC8vIHR3byBoZWlnaHRzIOKAlCBidXQgdGhlIGdyb3VwIGFuZCB0aGUgaGVpZ2h0IHN3aXRjaCBleGlzdCBzbyBhIGxhbmUgY2FuIGRyb3AgaW5cbiAgLy8gd2l0aG91dCBhIGxheW91dCByZXdyaXRlLlxuICBjbGVhcihsYW5lR3JvdXApO1xuICBpZiAobGFuZU9uICYmIHR5cGVvZiBmb3JlY2FzdC5sYW5lID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm9yZWNhc3QubGFuZShsYW5lR3JvdXAsIHsgeCwgYmFzZWxpbmUsIGxhbmVUb3A6IGJhc2VsaW5lICsgVElDS19ILCBsYW5lSDogTEFORV9IIH0pO1xuICB9XG59XG4iLCIvLyBza3kuanMg4oCUIGEgY29uZGl0aW9uLWJhc2VkIGJhY2tncm91bmQgbW91bnRlZCBiZWhpbmQgdGhlIGFwcC5cbi8vXG4vLyBQdXJlIHZhbmlsbGEsIG5vIGRlcGVuZGVuY2llcy4gQSBzaW5nbGUgYC53ZWF0aGVyQmdgIGVsZW1lbnQgaXMgaW5zZXJ0ZWQgYXNcbi8vIHRoZSBGSVJTVCBjaGlsZCBvZiBgI2FwcGAgYW5kIHBvc2l0aW9uZWQgYGZpeGVkYCAoc2VlIHN0eWxlLmNzcyksIHNvIGl0IHNwYW5zXG4vLyB0aGUgd2hvbGUgYnJvd3NlciB3aW5kb3cgb24gZGVza3RvcCB3aGlsZSBgI2FwcGAgc3RheXMgYSBjb25zdHJhaW5lZCBjZW50cmVkXG4vLyBjb2x1bW4gYWJvdmUgaXQgKHotaW5kZXgpLiBUaGUgZWxlbWVudCBjYXJyaWVzIGEgYGJnLTxjYXRlZ29yeT5gIGNsYXNzIHRoYXRcbi8vIHNlbGVjdHMgYSBwZXItY29uZGl0aW9uIHRyZWF0bWVudCBpbiBzdHlsZS5jc3Mg4oCUIGEgZ3JhZGllbnQgYmFzZSBwbHVzXG4vLyBkZXB0aC1sYXllcmVkIGRlY29yYXRpdmUgaW1hZ2VyeSAoc3VuLCBtb29uICsgdHdpbmtsaW5nIHN0YXJzLCBkcmlmdGluZ1xuLy8gY2xvdWRzLCBmbGFrZXMsIGhhemUpIHBhaW50ZWQgYWNyb3NzIHRoZSB0d28gcHNldWRvLWVsZW1lbnRzIEFORCBhIHNldCBvZlxuLy8gYC5iZ0xheWVyYCBjaGlsZCBkaXZzIG1vdW50ZWQgYmVsb3cuIFRoZSBjaGlsZHJlbiBhZGQgdGhlIGZhci9taWQvbmVhciBkZXB0aFxuLy8gcGxhbmVzIGFuZCB0aGUgZ3JvdW5kLWxpZ2h0aW5nIGFjY2VudCB0aGF0IHR3byBwc2V1ZG8tZWxlbWVudHMgYWxvbmUgY2FuJ3Rcbi8vIGhvbGQ7IGV2ZXJ5IGNhdGVnb3J5IGNvbXBvc2VzIGEgc3Vic2V0IG9mIHRoZW0gKHVudXNlZCBvbmVzIHN0YXkgdHJhbnNwYXJlbnQpLlxuLy8gQWxsIGltYWdlcnkgYW5kIG1vdGlvbiBsaXZlIGluIHN0eWxlLmNzcy5cbi8vXG4vLyBUaGUgY2F0ZWdvcnkgaXMgcmVzb2x2ZWQgZnJvbSBgbm93LmNvbmRpdGlvbmAgKHRoZSBXZWF0aGVyQVBJIGNvbmRpdGlvbiB0ZXh0KVxuLy8gYW5kIHJlLWFwcGxpZWQgb24gZXZlcnkgZmV0Y2ggdmlhIHNldFdlYXRoZXJCZygpLCBzbyB0aGUgYmFja2dyb3VuZCBmb2xsb3dzXG4vLyB0aGUgY3VycmVudCBsb2NhdGlvbidzIHdlYXRoZXIuIE9mZiB0aGUgcmVuZGVyIHBhdGggaXRzZWxmOiBpbmRleC5qcyBtb3VudHNcbi8vIHRoZSBsYXllciBvbmNlIGF0IGJvb3RzdHJhcCwgYW5kIGluZGV4Q2hhbmdlcy5qcyBzd2FwcyBvbmx5IHRoZSBjbGFzcy5cbi8vXG4vLyBUaGUgbW90aW9uIGlzIGd1YXJkZWQgdGhlIHNhbWUgd2F5IHRoZSBvbGQgZHJpZnQgd2FzOlxuLy8gICAtIHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSAtPiB0aGUgQ1NTIGFuaW1hdGlvbnMgYXJlIGRpc2FibGVkIGJ5IGFcbi8vICAgICAgIG1lZGlhIHF1ZXJ5LCBzbyBlYWNoIHRyZWF0bWVudCByZW5kZXJzIGFzIG9uZSBzdGF0aWMgZnJhbWUuXG4vLyAgIC0gdmlzaWJpbGl0eWNoYW5nZSAtPiBhZGQgYSBgLnBhdXNlZGAgY2xhc3MgdGhhdCBwYXVzZXMgdGhlIENTUyBhbmltYXRpb25zXG4vLyAgICAgICB3aGlsZSB0aGUgdGFiIGlzIGhpZGRlbiwgcmVtb3ZlZCB3aGVuIGl0IGJlY29tZXMgdmlzaWJsZSBhZ2Fpbi5cblxubGV0IGJnRWwgPSBudWxsO1xubGV0IGN1cnJlbnRDYXRlZ29yeSA9IG51bGw7XG5cbi8vIFRoZSBjYXRlZ29yeSBhcHBsaWVkIGJlZm9yZSB0aGUgZmlyc3QgZmV0Y2ggcmVzb2x2ZXMg4oCUIGEgY2FsbSwgbmV1dHJhbCBza3kuXG5jb25zdCBERUZBVUxUX0NBVEVHT1JZID0gJ2Nsb3VkeSc7XG5cbi8vIFRoZSBkZXB0aCBwbGFuZXMgZWFjaCBjYXRlZ29yeSBjb21wb3NlcyBmcm9tLiBNb3VudGVkIG9uY2UgYXMgY2hpbGQgZGl2cyBvZlxuLy8gYC53ZWF0aGVyQmdgIHNvIGEgY2F0ZWdvcnkgY2FuIHN0YWNrIGZhci9taWQvbmVhciBpbWFnZXJ5IHBsdXMgYSBncm91bmQtbGlnaHRcbi8vIGFjY2VudCDigJQgbW9yZSBwYWludCBzdXJmYWNlcyB0aGFuIHRoZSB0d28gcHNldWRvLWVsZW1lbnRzIHByb3ZpZGUuIEEgY2F0ZWdvcnlcbi8vIHN0eWxlcyBvbmx5IHRoZSBwbGFuZXMgaXQgbmVlZHM7IHRoZSByZXN0IHN0YXkgdHJhbnNwYXJlbnQuIE9yZGVyIGlzXG4vLyBiYWNrLXRvLWZyb250IHNvIGxhdGVyIHBsYW5lcyBwYWludCBvdmVyIGVhcmxpZXIgb25lcy5cbmNvbnN0IERFUFRIX0xBWUVSUyA9IFsnZmFyJywgJ21pZCcsICduZWFyJywgJ2dyb3VuZCddO1xuXG5mdW5jdGlvbiByZWR1Y2VNb3Rpb24oKSB7XG4gIHJldHVybiAhISh3aW5kb3cubWF0Y2hNZWRpYSAmJiB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSknKS5tYXRjaGVzKTtcbn1cblxuLy8gTWFwIGEgV2VhdGhlckFQSSBjb25kaXRpb24gc3RyaW5nIHRvIG9uZSBvZiB0aGUgYmFja2dyb3VuZCB0cmVhdG1lbnRzIGRlZmluZWRcbi8vIGluIHN0eWxlLmNzcy4gT3JkZXIgbWF0dGVyczogdGhlIG1vcmUgc3BlY2lmaWMgcHJlY2lwaXRhdGlvbiBjaGVja3MgcnVuIGJlZm9yZVxuLy8gdGhlIGJyb2FkIGNsb3VkL2NsZWFyIG9uZXMgc28gXCJMaWdodCByYWluIHNob3dlclwiIGFuZCBcIlBhdGNoeSBzbm93XCIgcmVzb2x2ZSB0b1xuLy8gdGhlaXIgcHJlY2lwaXRhdGlvbiBjYXRlZ29yeSByYXRoZXIgdGhhbiBmYWxsaW5nIHRocm91Z2guIEFueXRoaW5nIHVubWF0Y2hlZFxuLy8gbGFuZHMgb24gdGhlIG5ldXRyYWwgJ2Nsb3VkeScgdHJlYXRtZW50LlxuZnVuY3Rpb24gY2F0ZWdvcnlGb3IodGV4dCkge1xuICBjb25zdCB0ID0gU3RyaW5nKHRleHQgfHwgJycpLnRvTG93ZXJDYXNlKCk7XG4gIGlmICgvc25vd3xzbGVldHxibGl6emFyZHxpY2V8Zmx1cnIvLnRlc3QodCkpIHsgcmV0dXJuICdzbm93JzsgfVxuICBpZiAoL3JhaW58ZHJpenpsZXxzaG93ZXJ8dGh1bmRlci8udGVzdCh0KSkgeyByZXR1cm4gJ3JhaW4nOyB9XG4gIGlmICgvZm9nfG1pc3R8aGF6ZS8udGVzdCh0KSkgeyByZXR1cm4gJ2ZvZyc7IH1cbiAgaWYgKC9zdW5ueS8udGVzdCh0KSkgeyByZXR1cm4gJ3N1bm55JzsgfVxuICBpZiAoL2NsZWFyLy50ZXN0KHQpKSB7IHJldHVybiAnY2xlYXItbmlnaHQnOyB9XG4gIHJldHVybiAnY2xvdWR5JzsgLy8gY2xvdWR5LCBvdmVyY2FzdCwgcGFydGx5IGNsb3VkeSwgYW5kIGFueSB1bmtub3duIHRleHRcbn1cblxuLy8gRnJlZXplIHRoZSBkcmlmdCB3aGlsZSB0aGUgdGFiIGlzIGhpZGRlbiwgcmVzdW1lIHdoZW4gaXQgY29tZXMgYmFjay4gVW5kZXJcbi8vIHJlZHVjZWQgbW90aW9uIG5vdGhpbmcgaXMgYW5pbWF0aW5nLCBzbyBgLnBhdXNlZGAgaXMgYSBoYXJtbGVzcyBuby1vcC5cbmZ1bmN0aW9uIG9uVmlzaWJpbGl0eSgpIHtcbiAgaWYgKCFiZ0VsKSB7IHJldHVybjsgfVxuICBpZiAoZG9jdW1lbnQuaGlkZGVuKSB7XG4gICAgYmdFbC5jbGFzc0xpc3QuYWRkKCdwYXVzZWQnKTtcbiAgfSBlbHNlIHtcbiAgICBiZ0VsLmNsYXNzTGlzdC5yZW1vdmUoJ3BhdXNlZCcpO1xuICB9XG59XG5cbi8vIFN3YXAgdGhlIGJhY2tncm91bmQgdHJlYXRtZW50IHRvIG1hdGNoIGEgY29uZGl0aW9uLiBDYWxsZWQgZnJvbSB0aGUgcmVuZGVyXG4vLyBwYXRoIG9uIGV2ZXJ5IGZldGNoOyBhIG5vLW9wIHdoZW4gdGhlIHJlc29sdmVkIGNhdGVnb3J5IGhhc24ndCBjaGFuZ2VkLCBzbyBhXG4vLyB1bml0IHRvZ2dsZSBvciBhIHJlcGVhdCBzZWFyY2ggZG9lc24ndCByZXN0YXJ0IHRoZSBhbmltYXRpb25zLiBTYWZlIHRvIGNhbGxcbi8vIGJlZm9yZSBpbml0V2VhdGhlckJnKCkgaGFzIHJ1biDigJQgdGhlIGNhdGVnb3J5IGlzIHJlbWVtYmVyZWQgYW5kIGFwcGxpZWQgdGhlbi5cbmV4cG9ydCBmdW5jdGlvbiBzZXRXZWF0aGVyQmcoY29uZGl0aW9uVGV4dCkge1xuICBjb25zdCBjYXRlZ29yeSA9IGNhdGVnb3J5Rm9yKGNvbmRpdGlvblRleHQpO1xuICBpZiAoY2F0ZWdvcnkgPT09IGN1cnJlbnRDYXRlZ29yeSkgeyByZXR1cm47IH1cbiAgaWYgKGN1cnJlbnRDYXRlZ29yeSkgeyBiZ0VsICYmIGJnRWwuY2xhc3NMaXN0LnJlbW92ZSgnYmctJyArIGN1cnJlbnRDYXRlZ29yeSk7IH1cbiAgY3VycmVudENhdGVnb3J5ID0gY2F0ZWdvcnk7XG4gIGlmIChiZ0VsKSB7IGJnRWwuY2xhc3NMaXN0LmFkZCgnYmctJyArIGNhdGVnb3J5KTsgfVxufVxuXG4vLyBNb3VudCB0aGUgYmFja2dyb3VuZCBsYXllciBvbmNlLCBhcyB0aGUgZmlyc3QgY2hpbGQgb2YgdGhlIGdpdmVuIGhvc3QgKGAjYXBwYCkuXG4vLyBTYWZlIHRvIGNhbGwgYWdhaW4g4oCUIGl0IG9ubHkgZXZlciBtb3VudHMgYSBzaW5nbGUgZWxlbWVudC4gQXBwbGllcyB3aGF0ZXZlclxuLy8gY2F0ZWdvcnkgaGFzIGJlZW4gc2V0IHNvIGZhciwgb3IgYSBuZXV0cmFsIGRlZmF1bHQgdW50aWwgdGhlIGZpcnN0IGZldGNoLlxuZXhwb3J0IGZ1bmN0aW9uIGluaXRXZWF0aGVyQmcoaG9zdEVsKSB7XG4gIGlmIChiZ0VsKSB7IHJldHVybjsgfSAvLyBtb3VudCBvbmNlXG4gIGNvbnN0IGhvc3QgPSBob3N0RWwgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpO1xuICBpZiAoIWhvc3QpIHsgcmV0dXJuOyB9XG5cbiAgYmdFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBiZ0VsLmNsYXNzTmFtZSA9ICd3ZWF0aGVyQmcnO1xuICBiZ0VsLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICBiZ0VsLmNsYXNzTGlzdC5hZGQoJ2JnLScgKyAoY3VycmVudENhdGVnb3J5IHx8IERFRkFVTFRfQ0FURUdPUlkpKTtcbiAgaWYgKCFjdXJyZW50Q2F0ZWdvcnkpIHsgY3VycmVudENhdGVnb3J5ID0gREVGQVVMVF9DQVRFR09SWTsgfVxuXG4gIC8vIE1vdW50IHRoZSBkZXB0aCBwbGFuZXMgb25jZS4gVGhleSBhcmUgZ2VuZXJpYyBhbmQgc2hhcmVkIGFjcm9zcyBjYXRlZ29yaWVzO1xuICAvLyB0aGUgYWN0aXZlIGBiZy08Y2F0ZWdvcnk+YCBjbGFzcyBkZWNpZGVzIHdoYXQgZWFjaCBwbGFuZSBwYWludHMgaW4gQ1NTLlxuICBmb3IgKGNvbnN0IG5hbWUgb2YgREVQVEhfTEFZRVJTKSB7XG4gICAgY29uc3QgbGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsYXllci5jbGFzc05hbWUgPSAnYmdMYXllciBiZ0xheWVyLS0nICsgbmFtZTtcbiAgICBiZ0VsLmFwcGVuZENoaWxkKGxheWVyKTtcbiAgfVxuXG4gIGhvc3QuaW5zZXJ0QmVmb3JlKGJnRWwsIGhvc3QuZmlyc3RDaGlsZCk7XG5cbiAgLy8gTm90aGluZyBkcmlmdHMgdW5kZXIgcmVkdWNlZCBtb3Rpb24gKHRoZSBDU1MgbWVkaWEgcXVlcnkgZGlzYWJsZXMgdGhlXG4gIC8vIGFuaW1hdGlvbnMpLCBzbyB0aGVyZSBpcyBub3RoaW5nIHRvIHBhdXNlIOKAlCBza2lwIHRoZSBsaXN0ZW5lciBpbiB0aGF0IGNhc2UuXG4gIGlmICghcmVkdWNlTW90aW9uKCkpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgb25WaXNpYmlsaXR5KTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9XZWF0aGVyQXBwX1RPUC9cIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImxvZ2ljXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2xvZ2ljLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9