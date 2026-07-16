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

/* Frozen while the tab is hidden (sky.js toggles .paused on visibilitychange). */
.weatherBg.paused::before,
.weatherBg.paused::after {
  animation-play-state: paused;
}

/* Halt every treatment's motion under a reduced-motion preference — one static
   frame per category. */
@media (prefers-reduced-motion: reduce) {
  .weatherBg::before,
  .weatherBg::after {
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: 'Roboto';\n  src: url('./Roboto-Regular.ttf');\n  font-weight: 300 400;\n}\n\n/* Palette:\n   ground  #12181F   rules  #26313B\n   text    #EAEEF2 (primary) / #8CA0AE (muted)\n   The temperature colours live in ribbon.js (the curve is coloured by the\n   temperature scalar, not by CSS). */\n:root {\n  --ground: #12181F;\n  --rule: #26313B;\n  --text: #EAEEF2;\n  --muted: #8CA0AE;\n  --mono: 'SFMono-Regular', 'SF Mono', 'Menlo', 'Consolas', 'Liberation Mono', monospace;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  background: var(--ground);\n  color: var(--text);\n  font-family: 'Roboto', system-ui, sans-serif;\n  -webkit-font-smoothing: antialiased;\n}\n\n/* dvh (not vh): on iOS Safari vh resolves to the tall viewport and parks the\n   bottom of the layout under the URL bar. */\n#app {\n  position: relative; /* stacks the constrained column above the fixed .weatherBg */\n  z-index: 1;\n  min-height: 100dvh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 28px;\n  max-width: 720px;\n  margin: 0 auto;\n  padding: 32px 20px;\n}\n\n/* Condition-based background. sky.js mounts a single `.weatherBg` as the first\n   child of #app and swaps a `bg-<category>` class onto it per fetch, keyed off\n   the current condition text (categoryFor() in sky.js). It is `fixed` so it\n   spans the whole browser window on desktop while #app stays a constrained\n   centred column above it (z-index). Each category paints a gradient base on the\n   element plus decorative layers (sun, moon + stars, drifting clouds, flakes,\n   haze) on the two pseudo-elements. overflow: hidden clips those layers to the\n   viewport so an oversized cloud can't spill a scrollbar. The gradients cross-\n   fade (transition: background) when the category changes; the decorative\n   motion lives in the per-category keyframes below. */\n.weatherBg {\n  position: fixed;\n  inset: 0;\n  z-index: 0;\n  overflow: hidden;\n  pointer-events: none;\n  background: linear-gradient(180deg, #1b2836 0%, #141d29 55%, var(--ground) 100%);\n  transition: background 600ms ease;\n}\n\n.weatherBg::before,\n.weatherBg::after {\n  content: '';\n  position: absolute;\n  pointer-events: none;\n}\n\n/* SUNNY — warm daytime sky with a soft sun glow that slowly breathes. */\n.weatherBg.bg-sunny {\n  background: linear-gradient(180deg, #2c4c72 0%, #1a2c40 55%, var(--ground) 100%);\n}\n.weatherBg.bg-sunny::before {\n  top: -12%;\n  right: -6%;\n  width: 46vmax;\n  height: 46vmax;\n  border-radius: 50%;\n  background: radial-gradient(circle at center, rgba(217, 164, 65, 0.45), rgba(217, 164, 65, 0) 68%);\n  animation: bgSun 14s ease-in-out infinite alternate;\n}\n.weatherBg.bg-sunny::after {\n  bottom: -18%;\n  left: -12%;\n  width: 40vmax;\n  height: 40vmax;\n  border-radius: 50%;\n  background: radial-gradient(circle at center, rgba(111, 168, 160, 0.18), rgba(111, 168, 160, 0) 70%);\n  animation: bgSun 18s ease-in-out infinite alternate-reverse;\n}\n\n/* CLEAR NIGHT — deep sky, a low moon glow, and a field of twinkling stars. */\n.weatherBg.bg-clear-night {\n  background: linear-gradient(180deg, #101a2c 0%, #0d1420 55%, var(--ground) 100%);\n}\n.weatherBg.bg-clear-night::before {\n  inset: 0;\n  background-image:\n    radial-gradient(1.6px 1.6px at 18% 24%, rgba(234, 238, 242, 0.9), transparent 60%),\n    radial-gradient(1.2px 1.2px at 72% 16%, rgba(234, 238, 242, 0.8), transparent 60%),\n    radial-gradient(1.4px 1.4px at 42% 62%, rgba(234, 238, 242, 0.75), transparent 60%),\n    radial-gradient(1px 1px at 86% 46%, rgba(234, 238, 242, 0.7), transparent 60%),\n    radial-gradient(1.3px 1.3px at 30% 82%, rgba(234, 238, 242, 0.7), transparent 60%),\n    radial-gradient(1px 1px at 60% 74%, rgba(234, 238, 242, 0.6), transparent 60%),\n    radial-gradient(1.5px 1.5px at 8% 54%, rgba(234, 238, 242, 0.8), transparent 60%),\n    radial-gradient(1px 1px at 92% 78%, rgba(234, 238, 242, 0.65), transparent 60%);\n  animation: bgTwinkle 5s ease-in-out infinite alternate;\n}\n.weatherBg.bg-clear-night::after {\n  top: 12%;\n  right: 14%;\n  width: 92px;\n  height: 92px;\n  border-radius: 50%;\n  background: radial-gradient(circle at 38% 38%, rgba(234, 238, 242, 0.85), rgba(140, 160, 174, 0.35) 62%, rgba(140, 160, 174, 0) 72%);\n}\n\n/* CLOUDY (also overcast, partly, and the neutral fallback) — cool grey-blue with\n   two soft cloud masses drifting laterally. */\n.weatherBg.bg-cloudy {\n  background: linear-gradient(180deg, #23303f 0%, #172230 55%, var(--ground) 100%);\n}\n.weatherBg.bg-cloudy::before {\n  top: 14%;\n  left: -20%;\n  width: 55vmax;\n  height: 24vmax;\n  border-radius: 50%;\n  background: radial-gradient(circle at center, rgba(140, 160, 174, 0.2), rgba(140, 160, 174, 0) 70%);\n  animation: bgCloud 40s ease-in-out infinite alternate;\n}\n.weatherBg.bg-cloudy::after {\n  bottom: 10%;\n  right: -24%;\n  width: 60vmax;\n  height: 26vmax;\n  border-radius: 50%;\n  background: radial-gradient(circle at center, rgba(111, 130, 148, 0.16), rgba(111, 130, 148, 0) 70%);\n  animation: bgCloud 52s ease-in-out infinite alternate-reverse;\n}\n\n/* RAIN (also drizzle, showers, thunder) — darker sky, a heavy drifting cloud,\n   and a faint diagonal rain sheen sliding down. */\n.weatherBg.bg-rain {\n  background: linear-gradient(180deg, #1c2734 0%, #121b26 55%, var(--ground) 100%);\n}\n.weatherBg.bg-rain::before {\n  top: -8%;\n  left: -18%;\n  width: 62vmax;\n  height: 30vmax;\n  border-radius: 50%;\n  background: radial-gradient(circle at center, rgba(120, 140, 158, 0.22), rgba(120, 140, 158, 0) 70%);\n  animation: bgCloud 46s ease-in-out infinite alternate;\n}\n.weatherBg.bg-rain::after {\n  inset: 0;\n  background-image: repeating-linear-gradient(74deg, rgba(160, 190, 214, 0.07) 0 1px, rgba(160, 190, 214, 0) 1px 9px);\n  animation: bgRain 0.9s linear infinite;\n}\n\n/* SNOW — cool light sky with slowly drifting flakes. */\n.weatherBg.bg-snow {\n  background: linear-gradient(180deg, #2a3949 0%, #1a2634 55%, var(--ground) 100%);\n}\n.weatherBg.bg-snow::before,\n.weatherBg.bg-snow::after {\n  inset: 0;\n  background-image:\n    radial-gradient(2px 2px at 20% 10%, rgba(255, 255, 255, 0.8), transparent 60%),\n    radial-gradient(2.4px 2.4px at 66% 22%, rgba(255, 255, 255, 0.7), transparent 60%),\n    radial-gradient(1.8px 1.8px at 40% 40%, rgba(255, 255, 255, 0.75), transparent 60%),\n    radial-gradient(2px 2px at 84% 54%, rgba(255, 255, 255, 0.7), transparent 60%),\n    radial-gradient(2.2px 2.2px at 12% 70%, rgba(255, 255, 255, 0.7), transparent 60%),\n    radial-gradient(1.8px 1.8px at 54% 86%, rgba(255, 255, 255, 0.65), transparent 60%);\n  background-size: 100% 50%;\n}\n.weatherBg.bg-snow::before {\n  animation: bgSnow 14s linear infinite;\n}\n.weatherBg.bg-snow::after {\n  opacity: 0.6;\n  animation: bgSnow 22s linear infinite;\n}\n\n/* FOG (also mist, haze) — muted sky with slow horizontal haze bands. */\n.weatherBg.bg-fog {\n  background: linear-gradient(180deg, #232c35 0%, #182029 55%, var(--ground) 100%);\n}\n.weatherBg.bg-fog::before {\n  inset: 0;\n  background-image:\n    linear-gradient(0deg, rgba(140, 160, 174, 0) 0%, rgba(140, 160, 174, 0.12) 30%, rgba(140, 160, 174, 0) 46%),\n    linear-gradient(0deg, rgba(140, 160, 174, 0) 54%, rgba(140, 160, 174, 0.1) 72%, rgba(140, 160, 174, 0) 88%);\n  animation: bgFog 24s ease-in-out infinite alternate;\n}\n\n@keyframes bgSun {\n  0%   { transform: translate(0, 0) scale(1);        opacity: 0.7; }\n  100% { transform: translate(-4%, 3%) scale(1.12);  opacity: 1; }\n}\n\n@keyframes bgTwinkle {\n  0%   { opacity: 0.4; }\n  100% { opacity: 1; }\n}\n\n@keyframes bgCloud {\n  0%   { transform: translateX(0); }\n  100% { transform: translateX(10%); }\n}\n\n@keyframes bgRain {\n  0%   { background-position: 0 0; }\n  100% { background-position: -9px 32px; }\n}\n\n@keyframes bgSnow {\n  0%   { transform: translateY(-50%); }\n  100% { transform: translateY(0); }\n}\n\n@keyframes bgFog {\n  0%   { transform: translateY(-4%); opacity: 0.7; }\n  100% { transform: translateY(4%);  opacity: 1; }\n}\n\n/* Frozen while the tab is hidden (sky.js toggles .paused on visibilitychange). */\n.weatherBg.paused::before,\n.weatherBg.paused::after {\n  animation-play-state: paused;\n}\n\n/* Halt every treatment's motion under a reduced-motion preference — one static\n   frame per category. */\n@media (prefers-reduced-motion: reduce) {\n  .weatherBg::before,\n  .weatherBg::after {\n    animation: none;\n  }\n}\n\n/* The ribbon and its readout share one flex column so a mobile location rotation\n   slides them as a single unit. It carries the same 28px gap #app used to put\n   between the ribbon and the readout, so wrapping them is layout-transparent. */\n#weatherCard {\n  position: relative; /* stacks above the .weatherBg drift layer */\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 28px;\n}\n\n/* Ribbon: the SVG scales to the column width via the viewBox, so all 72 hours\n   are on screen at any width down to 380px without scroll or pan. */\n#ribbonWrap {\n  width: 100%;\n}\n\n#ribbonSvg {\n  display: block;\n  width: 100%;\n  height: auto;\n  overflow: visible;\n}\n\n.ribbon-curve {\n  stroke-width: 2.5;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n\n/* Day boundary hairlines at hours 24 and 48. */\n.ribbon-hairline {\n  stroke: var(--rule);\n  stroke-width: 1;\n}\n\n.ribbon-tick {\n  fill: var(--muted);\n  font-family: var(--mono);\n  font-size: 12px;\n  letter-spacing: 1px;\n}\n\n.ribbon-nowline {\n  stroke: var(--muted);\n  stroke-width: 1;\n  stroke-dasharray: 2 3;\n  opacity: 0.7;\n}\n\n.ribbon-dot {\n  stroke: var(--ground);\n  stroke-width: 2;\n}\n\n/* Readout beneath the curve. */\n#readout {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  text-align: center;\n}\n\n/* Location name paired with the C/F unit switch on one centered row. */\n#locationRow {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n\n#locationName {\n  font-family: var(--mono);\n  font-size: 13px;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  color: var(--muted);\n}\n\n/* Segmented C/F toggle: a compact pill, the active option filled with the rule\n   colour. Display-only — flips the temperature readouts between °C and °F. */\n#unitSwitch {\n  display: flex;\n  border: 1px solid var(--rule);\n  border-radius: 999px;\n  overflow: hidden;\n}\n\n.unitOpt {\n  font-family: var(--mono);\n  font-size: 11px;\n  letter-spacing: 1px;\n  padding: 3px 9px;\n  border: none;\n  background: transparent;\n  color: var(--muted);\n  cursor: pointer;\n}\n\n.unitOpt.active {\n  background: var(--rule);\n  color: var(--text);\n}\n\n/* Saved-location navigation: prev/next chevrons flanking the dot row. The whole\n   row is hidden at a count of one (a single location needs no affordance); the\n   arrows are desktop-only and drop out at ≤480px where swipe takes over. */\n.navRow {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  margin: 4px 0 2px;\n}\n\n.navRow.hidden {\n  display: none;\n}\n\n.arrow {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  border: none;\n  background: none;\n  color: var(--muted);\n  cursor: pointer;\n}\n\n.arrow:hover {\n  color: #EAEEF2;\n}\n\n.arrow svg {\n  display: block;\n  width: 20px;\n  height: 14px;\n}\n\n/* Saved-location dots: one per saved location, the active one filled. */\n#dotRow {\n  position: relative; /* offset parent for the desktop remove popover */\n  display: flex;\n  gap: 8px;\n}\n\n.dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #2E3B45;\n  cursor: pointer;\n  touch-action: manipulation;\n}\n\n.dot.active {\n  background: #EAEEF2;\n}\n\n/* Desktop remove-confirmation popover, anchored above the long-pressed dot.\n   Touch keeps the native confirm; this is the mouse/pen path. */\n.removePopover {\n  position: absolute;\n  bottom: calc(100% + 10px);\n  transform: translateX(-50%);\n  z-index: 20;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 12px;\n  background: var(--ground);\n  border: 1px solid var(--rule);\n  border-radius: 8px;\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.45);\n  white-space: nowrap;\n}\n\n/* Downward pointer arrow, bordered: outer triangle in the rule colour with an\n   inner ground-filled triangle laid a pixel higher on top of it. */\n.removePopover::before,\n.removePopover::after {\n  content: '';\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 0;\n  height: 0;\n  border-style: solid;\n}\n\n.removePopover::before {\n  top: 100%;\n  border-width: 7px 7px 0 7px;\n  border-color: var(--rule) transparent transparent transparent;\n}\n\n.removePopover::after {\n  top: calc(100% - 1px);\n  border-width: 6px 6px 0 6px;\n  border-color: var(--ground) transparent transparent transparent;\n}\n\n.removePopover-name {\n  color: var(--text);\n  font-size: 13px;\n}\n\n.removePopover-actions {\n  display: flex;\n  gap: 8px;\n}\n\n.removePopover-cancel,\n.removePopover-delete {\n  font-family: inherit;\n  font-size: 12px;\n  padding: 5px 12px;\n  border: 1px solid var(--rule);\n  border-radius: 8px;\n  cursor: pointer;\n}\n\n.removePopover-cancel {\n  background: none;\n  color: var(--muted);\n}\n\n.removePopover-cancel:hover {\n  color: var(--text);\n}\n\n.removePopover-delete {\n  background: var(--text);\n  color: var(--ground);\n  border-color: var(--text);\n}\n\n.removePopover-delete:hover {\n  filter: brightness(0.92);\n}\n\n/* Roboto Light 40px for the reading. */\n#currentTemp {\n  font-family: 'Roboto', sans-serif;\n  font-weight: 300;\n  font-size: 40px;\n  line-height: 1.1;\n}\n\n#currentCondition {\n  font-size: 15px;\n  color: var(--text);\n}\n\n/* Four-up stat row: text labels, no icons. */\n#statRow {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 10px;\n  width: 100%;\n  margin-top: 14px;\n}\n\n.stat {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  padding: 12px 6px;\n  border: 1px solid var(--rule);\n  border-radius: 8px;\n}\n\n.stat-label {\n  font-family: var(--mono);\n  font-size: 10px;\n  letter-spacing: 1px;\n  color: var(--muted);\n}\n\n.stat-value {\n  font-size: 17px;\n  color: var(--text);\n}\n\n/* Search form. */\n#searchForm {\n  position: relative; /* stacks above the .weatherBg drift layer */\n  z-index: 1;\n  display: flex;\n  gap: 10px;\n  width: 100%;\n}\n\n/* Holds the input and its autocomplete dropdown; position: relative anchors\n   #suggestions beneath the input. flex: 1 so the pair fills the row the way the\n   bare input used to. */\n#searchInputWrap {\n  position: relative;\n  flex: 1;\n  min-width: 0;\n}\n\n#searchInput {\n  width: 100%;\n  padding: 12px 14px;\n  font-family: var(--mono);\n  font-size: 16px; /* 16px so iOS Safari doesn't auto-zoom the input on focus */\n  color: var(--text);\n  background: transparent;\n  border: 1px solid var(--rule);\n  border-radius: 8px;\n}\n\n#searchInput::placeholder {\n  color: var(--muted);\n}\n\n#searchInput:focus {\n  outline: none;\n  border-color: var(--muted);\n}\n\n/* While the dropdown is open the input's bottom corners square off and its\n   bottom edge drops out, so it reads as one attached surface with #suggestions. */\n#searchForm.suggesting #searchInput {\n  border-radius: 8px 8px 0 0;\n  border-bottom-color: transparent;\n}\n\n/* Failed lookup: reddened border, current ribbon left in place. */\n#searchForm.invalid #searchInput {\n  border-color: #C2452D;\n}\n\n/* Autocomplete dropdown: hangs off the bottom of the input, matching its width\n   and continuing its focused border into a bottom-rounded panel. */\n#suggestions {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  z-index: 10;\n  max-height: 240px;\n  overflow-y: auto;\n  background: var(--ground);\n  border: 1px solid var(--muted);\n  border-top: none;\n  border-radius: 0 0 8px 8px;\n}\n\n#suggestions.hidden {\n  display: none;\n}\n\n.suggestion-item {\n  display: flex;\n  align-items: baseline;\n  gap: 8px;\n  padding: 10px 14px;\n  font-family: var(--mono);\n  cursor: pointer;\n}\n\n.suggestion-item:hover,\n.suggestion-item.selected {\n  background: var(--rule);\n}\n\n.suggestion-city {\n  font-size: 14px;\n  color: var(--text);\n}\n\n.suggestion-country {\n  font-size: 12px;\n  color: var(--muted);\n}\n\n#searchButton {\n  padding: 12px 20px;\n  font-family: var(--mono);\n  font-size: 14px;\n  letter-spacing: 1px;\n  color: var(--ground);\n  background: var(--text);\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n}\n\n#searchButton:hover {\n  filter: brightness(0.92);\n}\n\n@media (max-width: 480px) {\n  #app {\n    gap: 22px;\n    padding: 24px 16px;\n  }\n\n  #weatherCard {\n    gap: 22px;\n  }\n\n  /* Swipe-direction-aware slide on a committed location rotation. favourites.js\n     adds .slide-next (swipe left -> next) or .slide-prev (swipe right -> prev)\n     to #weatherCard, then rotates. The card fades to nothing at the keyframe's\n     midpoint, which masks the forecast swap: renderRibbon() rebuilds into this\n     same card while it's invisible, so the new curve slides in rather than\n     snapping. Desktop rotates via the arrows and never gets the class. */\n  #weatherCard.slide-next {\n    animation: cardSlideNext 280ms ease-out;\n  }\n\n  #weatherCard.slide-prev {\n    animation: cardSlidePrev 280ms ease-out;\n  }\n\n  @keyframes cardSlideNext {\n    0% { transform: translateX(0); opacity: 1; }\n    40% { transform: translateX(-42px); opacity: 0; }\n    60% { transform: translateX(42px); opacity: 0; }\n    100% { transform: translateX(0); opacity: 1; }\n  }\n\n  @keyframes cardSlidePrev {\n    0% { transform: translateX(0); opacity: 1; }\n    40% { transform: translateX(42px); opacity: 0; }\n    60% { transform: translateX(-42px); opacity: 0; }\n    100% { transform: translateX(0); opacity: 1; }\n  }\n\n  /* Mobile navigates by swipe; drop the arrows but keep the dots. */\n  .arrow {\n    display: none;\n  }\n\n  #statRow {\n    gap: 8px;\n  }\n\n  .stat {\n    padding: 10px 4px;\n  }\n\n  .stat-value {\n    font-size: 15px;\n  }\n}\n\n/* Respect a reduced-motion preference: rotate instantly, no slide. favourites.js\n   still adds the class, but with the animation suppressed animationend never\n   fires, so its setTimeout fallback is what strips the class back off. */\n@media (prefers-reduced-motion: reduce) {\n  #weatherCard.slide-next,\n  #weatherCard.slide-prev {\n    animation: none;\n  }\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QyxxSEFBdUM7QUFDbkYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RDtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTLDRDQUE0QztBQUNyRCxTQUFTLDRDQUE0QztBQUNyRDs7QUFFQTtBQUNBLFNBQVM7QUFDVCxTQUFTO0FBQ1Q7O0FBRUE7QUFDQSxTQUFTO0FBQ1QsU0FBUztBQUNUOztBQUVBO0FBQ0EsU0FBUztBQUNULFNBQVM7QUFDVDs7QUFFQTtBQUNBLFNBQVM7QUFDVCxTQUFTO0FBQ1Q7O0FBRUE7QUFDQSxTQUFTLDRCQUE0QjtBQUNyQyxTQUFTLDRCQUE0QjtBQUNyQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0RUFBNEU7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVMsMEJBQTBCO0FBQ25DLFVBQVUsOEJBQThCO0FBQ3hDLFVBQVUsNkJBQTZCO0FBQ3ZDLFdBQVcsMEJBQTBCO0FBQ3JDOztBQUVBO0FBQ0EsU0FBUywwQkFBMEI7QUFDbkMsVUFBVSw2QkFBNkI7QUFDdkMsVUFBVSw4QkFBOEI7QUFDeEMsV0FBVywwQkFBMEI7QUFDckM7O0FBRUEsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLE9BQU8sUUFBUSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSx3QkFBd0IsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxhQUFhLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksTUFBTSxNQUFNLFVBQVUsVUFBVSxPQUFPLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLE1BQU0sS0FBSyxVQUFVLE1BQU0sT0FBTyxhQUFhLE9BQU8sS0FBSyxnQ0FBZ0MsaUNBQWlDLE9BQU8sS0FBSyxvQkFBb0IscUJBQXFCLE9BQU8sS0FBSyxzQkFBc0IsdUJBQXVCLE9BQU8sS0FBSyxzQkFBc0IsdUJBQXVCLE9BQU8sS0FBSyxzQkFBc0IsdUJBQXVCLE9BQU8sS0FBSyxnQ0FBZ0MsaUNBQWlDLE9BQU8sWUFBWSxPQUFPLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLE1BQU0sT0FBTyxNQUFNLHdCQUF3QixXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxPQUFPLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sWUFBWSxNQUFNLHdCQUF3QixXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxPQUFPLE9BQU8sVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLHdCQUF3QixXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLHVCQUF1QixhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFB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V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7V0NBQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vc3JjL2Zhdm91cml0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vc3JjL2luZGV4Q2hhbmdlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vLi9zcmMvbG9naWMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vc3JjL3JpYmJvbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vLi9zcmMvc2t5LmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL1JvYm90by1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gIGZvbnQtd2VpZ2h0OiAzMDAgNDAwO1xufVxuXG4vKiBQYWxldHRlOlxuICAgZ3JvdW5kICAjMTIxODFGICAgcnVsZXMgICMyNjMxM0JcbiAgIHRleHQgICAgI0VBRUVGMiAocHJpbWFyeSkgLyAjOENBMEFFIChtdXRlZClcbiAgIFRoZSB0ZW1wZXJhdHVyZSBjb2xvdXJzIGxpdmUgaW4gcmliYm9uLmpzICh0aGUgY3VydmUgaXMgY29sb3VyZWQgYnkgdGhlXG4gICB0ZW1wZXJhdHVyZSBzY2FsYXIsIG5vdCBieSBDU1MpLiAqL1xuOnJvb3Qge1xuICAtLWdyb3VuZDogIzEyMTgxRjtcbiAgLS1ydWxlOiAjMjYzMTNCO1xuICAtLXRleHQ6ICNFQUVFRjI7XG4gIC0tbXV0ZWQ6ICM4Q0EwQUU7XG4gIC0tbW9ubzogJ1NGTW9uby1SZWd1bGFyJywgJ1NGIE1vbm8nLCAnTWVubG8nLCAnQ29uc29sYXMnLCAnTGliZXJhdGlvbiBNb25vJywgbW9ub3NwYWNlO1xufVxuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JvdW5kKTtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIHN5c3RlbS11aSwgc2Fucy1zZXJpZjtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbi8qIGR2aCAobm90IHZoKTogb24gaU9TIFNhZmFyaSB2aCByZXNvbHZlcyB0byB0aGUgdGFsbCB2aWV3cG9ydCBhbmQgcGFya3MgdGhlXG4gICBib3R0b20gb2YgdGhlIGxheW91dCB1bmRlciB0aGUgVVJMIGJhci4gKi9cbiNhcHAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qIHN0YWNrcyB0aGUgY29uc3RyYWluZWQgY29sdW1uIGFib3ZlIHRoZSBmaXhlZCAud2VhdGhlckJnICovXG4gIHotaW5kZXg6IDE7XG4gIG1pbi1oZWlnaHQ6IDEwMGR2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMjhweDtcbiAgbWF4LXdpZHRoOiA3MjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDMycHggMjBweDtcbn1cblxuLyogQ29uZGl0aW9uLWJhc2VkIGJhY2tncm91bmQuIHNreS5qcyBtb3VudHMgYSBzaW5nbGUgXFxgLndlYXRoZXJCZ1xcYCBhcyB0aGUgZmlyc3RcbiAgIGNoaWxkIG9mICNhcHAgYW5kIHN3YXBzIGEgXFxgYmctPGNhdGVnb3J5PlxcYCBjbGFzcyBvbnRvIGl0IHBlciBmZXRjaCwga2V5ZWQgb2ZmXG4gICB0aGUgY3VycmVudCBjb25kaXRpb24gdGV4dCAoY2F0ZWdvcnlGb3IoKSBpbiBza3kuanMpLiBJdCBpcyBcXGBmaXhlZFxcYCBzbyBpdFxuICAgc3BhbnMgdGhlIHdob2xlIGJyb3dzZXIgd2luZG93IG9uIGRlc2t0b3Agd2hpbGUgI2FwcCBzdGF5cyBhIGNvbnN0cmFpbmVkXG4gICBjZW50cmVkIGNvbHVtbiBhYm92ZSBpdCAoei1pbmRleCkuIEVhY2ggY2F0ZWdvcnkgcGFpbnRzIGEgZ3JhZGllbnQgYmFzZSBvbiB0aGVcbiAgIGVsZW1lbnQgcGx1cyBkZWNvcmF0aXZlIGxheWVycyAoc3VuLCBtb29uICsgc3RhcnMsIGRyaWZ0aW5nIGNsb3VkcywgZmxha2VzLFxuICAgaGF6ZSkgb24gdGhlIHR3byBwc2V1ZG8tZWxlbWVudHMuIG92ZXJmbG93OiBoaWRkZW4gY2xpcHMgdGhvc2UgbGF5ZXJzIHRvIHRoZVxuICAgdmlld3BvcnQgc28gYW4gb3ZlcnNpemVkIGNsb3VkIGNhbid0IHNwaWxsIGEgc2Nyb2xsYmFyLiBUaGUgZ3JhZGllbnRzIGNyb3NzLVxuICAgZmFkZSAodHJhbnNpdGlvbjogYmFja2dyb3VuZCkgd2hlbiB0aGUgY2F0ZWdvcnkgY2hhbmdlczsgdGhlIGRlY29yYXRpdmVcbiAgIG1vdGlvbiBsaXZlcyBpbiB0aGUgcGVyLWNhdGVnb3J5IGtleWZyYW1lcyBiZWxvdy4gKi9cbi53ZWF0aGVyQmcge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGluc2V0OiAwO1xuICB6LWluZGV4OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzFiMjgzNiAwJSwgIzE0MWQyOSA1NSUsIHZhcigtLWdyb3VuZCkgMTAwJSk7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgNjAwbXMgZWFzZTtcbn1cblxuLndlYXRoZXJCZzo6YmVmb3JlLFxuLndlYXRoZXJCZzo6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLyogU1VOTlkg4oCUIHdhcm0gZGF5dGltZSBza3kgd2l0aCBhIHNvZnQgc3VuIGdsb3cgdGhhdCBzbG93bHkgYnJlYXRoZXMuICovXG4ud2VhdGhlckJnLmJnLXN1bm55IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzJjNGM3MiAwJSwgIzFhMmM0MCA1NSUsIHZhcigtLWdyb3VuZCkgMTAwJSk7XG59XG4ud2VhdGhlckJnLmJnLXN1bm55OjpiZWZvcmUge1xuICB0b3A6IC0xMiU7XG4gIHJpZ2h0OiAtNiU7XG4gIHdpZHRoOiA0NnZtYXg7XG4gIGhlaWdodDogNDZ2bWF4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgY2VudGVyLCByZ2JhKDIxNywgMTY0LCA2NSwgMC40NSksIHJnYmEoMjE3LCAxNjQsIDY1LCAwKSA2OCUpO1xuICBhbmltYXRpb246IGJnU3VuIDE0cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG4ud2VhdGhlckJnLmJnLXN1bm55OjphZnRlciB7XG4gIGJvdHRvbTogLTE4JTtcbiAgbGVmdDogLTEyJTtcbiAgd2lkdGg6IDQwdm1heDtcbiAgaGVpZ2h0OiA0MHZtYXg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCBjZW50ZXIsIHJnYmEoMTExLCAxNjgsIDE2MCwgMC4xOCksIHJnYmEoMTExLCAxNjgsIDE2MCwgMCkgNzAlKTtcbiAgYW5pbWF0aW9uOiBiZ1N1biAxOHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlLXJldmVyc2U7XG59XG5cbi8qIENMRUFSIE5JR0hUIOKAlCBkZWVwIHNreSwgYSBsb3cgbW9vbiBnbG93LCBhbmQgYSBmaWVsZCBvZiB0d2lua2xpbmcgc3RhcnMuICovXG4ud2VhdGhlckJnLmJnLWNsZWFyLW5pZ2h0IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzEwMWEyYyAwJSwgIzBkMTQyMCA1NSUsIHZhcigtLWdyb3VuZCkgMTAwJSk7XG59XG4ud2VhdGhlckJnLmJnLWNsZWFyLW5pZ2h0OjpiZWZvcmUge1xuICBpbnNldDogMDtcbiAgYmFja2dyb3VuZC1pbWFnZTpcbiAgICByYWRpYWwtZ3JhZGllbnQoMS42cHggMS42cHggYXQgMTglIDI0JSwgcmdiYSgyMzQsIDIzOCwgMjQyLCAwLjkpLCB0cmFuc3BhcmVudCA2MCUpLFxuICAgIHJhZGlhbC1ncmFkaWVudCgxLjJweCAxLjJweCBhdCA3MiUgMTYlLCByZ2JhKDIzNCwgMjM4LCAyNDIsIDAuOCksIHRyYW5zcGFyZW50IDYwJSksXG4gICAgcmFkaWFsLWdyYWRpZW50KDEuNHB4IDEuNHB4IGF0IDQyJSA2MiUsIHJnYmEoMjM0LCAyMzgsIDI0MiwgMC43NSksIHRyYW5zcGFyZW50IDYwJSksXG4gICAgcmFkaWFsLWdyYWRpZW50KDFweCAxcHggYXQgODYlIDQ2JSwgcmdiYSgyMzQsIDIzOCwgMjQyLCAwLjcpLCB0cmFuc3BhcmVudCA2MCUpLFxuICAgIHJhZGlhbC1ncmFkaWVudCgxLjNweCAxLjNweCBhdCAzMCUgODIlLCByZ2JhKDIzNCwgMjM4LCAyNDIsIDAuNyksIHRyYW5zcGFyZW50IDYwJSksXG4gICAgcmFkaWFsLWdyYWRpZW50KDFweCAxcHggYXQgNjAlIDc0JSwgcmdiYSgyMzQsIDIzOCwgMjQyLCAwLjYpLCB0cmFuc3BhcmVudCA2MCUpLFxuICAgIHJhZGlhbC1ncmFkaWVudCgxLjVweCAxLjVweCBhdCA4JSA1NCUsIHJnYmEoMjM0LCAyMzgsIDI0MiwgMC44KSwgdHJhbnNwYXJlbnQgNjAlKSxcbiAgICByYWRpYWwtZ3JhZGllbnQoMXB4IDFweCBhdCA5MiUgNzglLCByZ2JhKDIzNCwgMjM4LCAyNDIsIDAuNjUpLCB0cmFuc3BhcmVudCA2MCUpO1xuICBhbmltYXRpb246IGJnVHdpbmtsZSA1cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG4ud2VhdGhlckJnLmJnLWNsZWFyLW5pZ2h0OjphZnRlciB7XG4gIHRvcDogMTIlO1xuICByaWdodDogMTQlO1xuICB3aWR0aDogOTJweDtcbiAgaGVpZ2h0OiA5MnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMzglIDM4JSwgcmdiYSgyMzQsIDIzOCwgMjQyLCAwLjg1KSwgcmdiYSgxNDAsIDE2MCwgMTc0LCAwLjM1KSA2MiUsIHJnYmEoMTQwLCAxNjAsIDE3NCwgMCkgNzIlKTtcbn1cblxuLyogQ0xPVURZIChhbHNvIG92ZXJjYXN0LCBwYXJ0bHksIGFuZCB0aGUgbmV1dHJhbCBmYWxsYmFjaykg4oCUIGNvb2wgZ3JleS1ibHVlIHdpdGhcbiAgIHR3byBzb2Z0IGNsb3VkIG1hc3NlcyBkcmlmdGluZyBsYXRlcmFsbHkuICovXG4ud2VhdGhlckJnLmJnLWNsb3VkeSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMyMzMwM2YgMCUsICMxNzIyMzAgNTUlLCB2YXIoLS1ncm91bmQpIDEwMCUpO1xufVxuLndlYXRoZXJCZy5iZy1jbG91ZHk6OmJlZm9yZSB7XG4gIHRvcDogMTQlO1xuICBsZWZ0OiAtMjAlO1xuICB3aWR0aDogNTV2bWF4O1xuICBoZWlnaHQ6IDI0dm1heDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IGNlbnRlciwgcmdiYSgxNDAsIDE2MCwgMTc0LCAwLjIpLCByZ2JhKDE0MCwgMTYwLCAxNzQsIDApIDcwJSk7XG4gIGFuaW1hdGlvbjogYmdDbG91ZCA0MHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xufVxuLndlYXRoZXJCZy5iZy1jbG91ZHk6OmFmdGVyIHtcbiAgYm90dG9tOiAxMCU7XG4gIHJpZ2h0OiAtMjQlO1xuICB3aWR0aDogNjB2bWF4O1xuICBoZWlnaHQ6IDI2dm1heDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IGNlbnRlciwgcmdiYSgxMTEsIDEzMCwgMTQ4LCAwLjE2KSwgcmdiYSgxMTEsIDEzMCwgMTQ4LCAwKSA3MCUpO1xuICBhbmltYXRpb246IGJnQ2xvdWQgNTJzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZS1yZXZlcnNlO1xufVxuXG4vKiBSQUlOIChhbHNvIGRyaXp6bGUsIHNob3dlcnMsIHRodW5kZXIpIOKAlCBkYXJrZXIgc2t5LCBhIGhlYXZ5IGRyaWZ0aW5nIGNsb3VkLFxuICAgYW5kIGEgZmFpbnQgZGlhZ29uYWwgcmFpbiBzaGVlbiBzbGlkaW5nIGRvd24uICovXG4ud2VhdGhlckJnLmJnLXJhaW4ge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMWMyNzM0IDAlLCAjMTIxYjI2IDU1JSwgdmFyKC0tZ3JvdW5kKSAxMDAlKTtcbn1cbi53ZWF0aGVyQmcuYmctcmFpbjo6YmVmb3JlIHtcbiAgdG9wOiAtOCU7XG4gIGxlZnQ6IC0xOCU7XG4gIHdpZHRoOiA2MnZtYXg7XG4gIGhlaWdodDogMzB2bWF4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgY2VudGVyLCByZ2JhKDEyMCwgMTQwLCAxNTgsIDAuMjIpLCByZ2JhKDEyMCwgMTQwLCAxNTgsIDApIDcwJSk7XG4gIGFuaW1hdGlvbjogYmdDbG91ZCA0NnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xufVxuLndlYXRoZXJCZy5iZy1yYWluOjphZnRlciB7XG4gIGluc2V0OiAwO1xuICBiYWNrZ3JvdW5kLWltYWdlOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KDc0ZGVnLCByZ2JhKDE2MCwgMTkwLCAyMTQsIDAuMDcpIDAgMXB4LCByZ2JhKDE2MCwgMTkwLCAyMTQsIDApIDFweCA5cHgpO1xuICBhbmltYXRpb246IGJnUmFpbiAwLjlzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuLyogU05PVyDigJQgY29vbCBsaWdodCBza3kgd2l0aCBzbG93bHkgZHJpZnRpbmcgZmxha2VzLiAqL1xuLndlYXRoZXJCZy5iZy1zbm93IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzJhMzk0OSAwJSwgIzFhMjYzNCA1NSUsIHZhcigtLWdyb3VuZCkgMTAwJSk7XG59XG4ud2VhdGhlckJnLmJnLXNub3c6OmJlZm9yZSxcbi53ZWF0aGVyQmcuYmctc25vdzo6YWZ0ZXIge1xuICBpbnNldDogMDtcbiAgYmFja2dyb3VuZC1pbWFnZTpcbiAgICByYWRpYWwtZ3JhZGllbnQoMnB4IDJweCBhdCAyMCUgMTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCksIHRyYW5zcGFyZW50IDYwJSksXG4gICAgcmFkaWFsLWdyYWRpZW50KDIuNHB4IDIuNHB4IGF0IDY2JSAyMiUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSwgdHJhbnNwYXJlbnQgNjAlKSxcbiAgICByYWRpYWwtZ3JhZGllbnQoMS44cHggMS44cHggYXQgNDAlIDQwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KSwgdHJhbnNwYXJlbnQgNjAlKSxcbiAgICByYWRpYWwtZ3JhZGllbnQoMnB4IDJweCBhdCA4NCUgNTQlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyksIHRyYW5zcGFyZW50IDYwJSksXG4gICAgcmFkaWFsLWdyYWRpZW50KDIuMnB4IDIuMnB4IGF0IDEyJSA3MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSwgdHJhbnNwYXJlbnQgNjAlKSxcbiAgICByYWRpYWwtZ3JhZGllbnQoMS44cHggMS44cHggYXQgNTQlIDg2JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY1KSwgdHJhbnNwYXJlbnQgNjAlKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDUwJTtcbn1cbi53ZWF0aGVyQmcuYmctc25vdzo6YmVmb3JlIHtcbiAgYW5pbWF0aW9uOiBiZ1Nub3cgMTRzIGxpbmVhciBpbmZpbml0ZTtcbn1cbi53ZWF0aGVyQmcuYmctc25vdzo6YWZ0ZXIge1xuICBvcGFjaXR5OiAwLjY7XG4gIGFuaW1hdGlvbjogYmdTbm93IDIycyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbi8qIEZPRyAoYWxzbyBtaXN0LCBoYXplKSDigJQgbXV0ZWQgc2t5IHdpdGggc2xvdyBob3Jpem9udGFsIGhhemUgYmFuZHMuICovXG4ud2VhdGhlckJnLmJnLWZvZyB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMyMzJjMzUgMCUsICMxODIwMjkgNTUlLCB2YXIoLS1ncm91bmQpIDEwMCUpO1xufVxuLndlYXRoZXJCZy5iZy1mb2c6OmJlZm9yZSB7XG4gIGluc2V0OiAwO1xuICBiYWNrZ3JvdW5kLWltYWdlOlxuICAgIGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDE0MCwgMTYwLCAxNzQsIDApIDAlLCByZ2JhKDE0MCwgMTYwLCAxNzQsIDAuMTIpIDMwJSwgcmdiYSgxNDAsIDE2MCwgMTc0LCAwKSA0NiUpLFxuICAgIGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDE0MCwgMTYwLCAxNzQsIDApIDU0JSwgcmdiYSgxNDAsIDE2MCwgMTc0LCAwLjEpIDcyJSwgcmdiYSgxNDAsIDE2MCwgMTc0LCAwKSA4OCUpO1xuICBhbmltYXRpb246IGJnRm9nIDI0cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG5cbkBrZXlmcmFtZXMgYmdTdW4ge1xuICAwJSAgIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMSk7ICAgICAgICBvcGFjaXR5OiAwLjc7IH1cbiAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC00JSwgMyUpIHNjYWxlKDEuMTIpOyAgb3BhY2l0eTogMTsgfVxufVxuXG5Aa2V5ZnJhbWVzIGJnVHdpbmtsZSB7XG4gIDAlICAgeyBvcGFjaXR5OiAwLjQ7IH1cbiAgMTAwJSB7IG9wYWNpdHk6IDE7IH1cbn1cblxuQGtleWZyYW1lcyBiZ0Nsb3VkIHtcbiAgMCUgICB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfVxuICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwJSk7IH1cbn1cblxuQGtleWZyYW1lcyBiZ1JhaW4ge1xuICAwJSAgIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwOyB9XG4gIDEwMCUgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOXB4IDMycHg7IH1cbn1cblxuQGtleWZyYW1lcyBiZ1Nub3cge1xuICAwJSAgIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpOyB9XG4gIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cbn1cblxuQGtleWZyYW1lcyBiZ0ZvZyB7XG4gIDAlICAgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTQlKTsgb3BhY2l0eTogMC43OyB9XG4gIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNCUpOyAgb3BhY2l0eTogMTsgfVxufVxuXG4vKiBGcm96ZW4gd2hpbGUgdGhlIHRhYiBpcyBoaWRkZW4gKHNreS5qcyB0b2dnbGVzIC5wYXVzZWQgb24gdmlzaWJpbGl0eWNoYW5nZSkuICovXG4ud2VhdGhlckJnLnBhdXNlZDo6YmVmb3JlLFxuLndlYXRoZXJCZy5wYXVzZWQ6OmFmdGVyIHtcbiAgYW5pbWF0aW9uLXBsYXktc3RhdGU6IHBhdXNlZDtcbn1cblxuLyogSGFsdCBldmVyeSB0cmVhdG1lbnQncyBtb3Rpb24gdW5kZXIgYSByZWR1Y2VkLW1vdGlvbiBwcmVmZXJlbmNlIOKAlCBvbmUgc3RhdGljXG4gICBmcmFtZSBwZXIgY2F0ZWdvcnkuICovXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xuICAud2VhdGhlckJnOjpiZWZvcmUsXG4gIC53ZWF0aGVyQmc6OmFmdGVyIHtcbiAgICBhbmltYXRpb246IG5vbmU7XG4gIH1cbn1cblxuLyogVGhlIHJpYmJvbiBhbmQgaXRzIHJlYWRvdXQgc2hhcmUgb25lIGZsZXggY29sdW1uIHNvIGEgbW9iaWxlIGxvY2F0aW9uIHJvdGF0aW9uXG4gICBzbGlkZXMgdGhlbSBhcyBhIHNpbmdsZSB1bml0LiBJdCBjYXJyaWVzIHRoZSBzYW1lIDI4cHggZ2FwICNhcHAgdXNlZCB0byBwdXRcbiAgIGJldHdlZW4gdGhlIHJpYmJvbiBhbmQgdGhlIHJlYWRvdXQsIHNvIHdyYXBwaW5nIHRoZW0gaXMgbGF5b3V0LXRyYW5zcGFyZW50LiAqL1xuI3dlYXRoZXJDYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiBzdGFja3MgYWJvdmUgdGhlIC53ZWF0aGVyQmcgZHJpZnQgbGF5ZXIgKi9cbiAgei1pbmRleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyOHB4O1xufVxuXG4vKiBSaWJib246IHRoZSBTVkcgc2NhbGVzIHRvIHRoZSBjb2x1bW4gd2lkdGggdmlhIHRoZSB2aWV3Qm94LCBzbyBhbGwgNzIgaG91cnNcbiAgIGFyZSBvbiBzY3JlZW4gYXQgYW55IHdpZHRoIGRvd24gdG8gMzgwcHggd2l0aG91dCBzY3JvbGwgb3IgcGFuLiAqL1xuI3JpYmJvbldyYXAge1xuICB3aWR0aDogMTAwJTtcbn1cblxuI3JpYmJvblN2ZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuLnJpYmJvbi1jdXJ2ZSB7XG4gIHN0cm9rZS13aWR0aDogMi41O1xuICBzdHJva2UtbGluZWNhcDogcm91bmQ7XG4gIHN0cm9rZS1saW5lam9pbjogcm91bmQ7XG59XG5cbi8qIERheSBib3VuZGFyeSBoYWlybGluZXMgYXQgaG91cnMgMjQgYW5kIDQ4LiAqL1xuLnJpYmJvbi1oYWlybGluZSB7XG4gIHN0cm9rZTogdmFyKC0tcnVsZSk7XG4gIHN0cm9rZS13aWR0aDogMTtcbn1cblxuLnJpYmJvbi10aWNrIHtcbiAgZmlsbDogdmFyKC0tbXV0ZWQpO1xuICBmb250LWZhbWlseTogdmFyKC0tbW9ubyk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cblxuLnJpYmJvbi1ub3dsaW5lIHtcbiAgc3Ryb2tlOiB2YXIoLS1tdXRlZCk7XG4gIHN0cm9rZS13aWR0aDogMTtcbiAgc3Ryb2tlLWRhc2hhcnJheTogMiAzO1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbi5yaWJib24tZG90IHtcbiAgc3Ryb2tlOiB2YXIoLS1ncm91bmQpO1xuICBzdHJva2Utd2lkdGg6IDI7XG59XG5cbi8qIFJlYWRvdXQgYmVuZWF0aCB0aGUgY3VydmUuICovXG4jcmVhZG91dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qIExvY2F0aW9uIG5hbWUgcGFpcmVkIHdpdGggdGhlIEMvRiB1bml0IHN3aXRjaCBvbiBvbmUgY2VudGVyZWQgcm93LiAqL1xuI2xvY2F0aW9uUm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbn1cblxuI2xvY2F0aW9uTmFtZSB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tb25vKTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xufVxuXG4vKiBTZWdtZW50ZWQgQy9GIHRvZ2dsZTogYSBjb21wYWN0IHBpbGwsIHRoZSBhY3RpdmUgb3B0aW9uIGZpbGxlZCB3aXRoIHRoZSBydWxlXG4gICBjb2xvdXIuIERpc3BsYXktb25seSDigJQgZmxpcHMgdGhlIHRlbXBlcmF0dXJlIHJlYWRvdXRzIGJldHdlZW4gwrBDIGFuZCDCsEYuICovXG4jdW5pdFN3aXRjaCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXJ1bGUpO1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnVuaXRPcHQge1xuICBmb250LWZhbWlseTogdmFyKC0tbW9ubyk7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgcGFkZGluZzogM3B4IDlweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udW5pdE9wdC5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ydWxlKTtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xufVxuXG4vKiBTYXZlZC1sb2NhdGlvbiBuYXZpZ2F0aW9uOiBwcmV2L25leHQgY2hldnJvbnMgZmxhbmtpbmcgdGhlIGRvdCByb3cuIFRoZSB3aG9sZVxuICAgcm93IGlzIGhpZGRlbiBhdCBhIGNvdW50IG9mIG9uZSAoYSBzaW5nbGUgbG9jYXRpb24gbmVlZHMgbm8gYWZmb3JkYW5jZSk7IHRoZVxuICAgYXJyb3dzIGFyZSBkZXNrdG9wLW9ubHkgYW5kIGRyb3Agb3V0IGF0IOKJpDQ4MHB4IHdoZXJlIHN3aXBlIHRha2VzIG92ZXIuICovXG4ubmF2Um93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgbWFyZ2luOiA0cHggMCAycHg7XG59XG5cbi5uYXZSb3cuaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmFycm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYXJyb3c6aG92ZXIge1xuICBjb2xvcjogI0VBRUVGMjtcbn1cblxuLmFycm93IHN2ZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAxNHB4O1xufVxuXG4vKiBTYXZlZC1sb2NhdGlvbiBkb3RzOiBvbmUgcGVyIHNhdmVkIGxvY2F0aW9uLCB0aGUgYWN0aXZlIG9uZSBmaWxsZWQuICovXG4jZG90Um93IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiBvZmZzZXQgcGFyZW50IGZvciB0aGUgZGVza3RvcCByZW1vdmUgcG9wb3ZlciAqL1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDhweDtcbn1cblxuLmRvdCB7XG4gIHdpZHRoOiA4cHg7XG4gIGhlaWdodDogOHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICMyRTNCNDU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XG59XG5cbi5kb3QuYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI0VBRUVGMjtcbn1cblxuLyogRGVza3RvcCByZW1vdmUtY29uZmlybWF0aW9uIHBvcG92ZXIsIGFuY2hvcmVkIGFib3ZlIHRoZSBsb25nLXByZXNzZWQgZG90LlxuICAgVG91Y2gga2VlcHMgdGhlIG5hdGl2ZSBjb25maXJtOyB0aGlzIGlzIHRoZSBtb3VzZS9wZW4gcGF0aC4gKi9cbi5yZW1vdmVQb3BvdmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IGNhbGMoMTAwJSArIDEwcHgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIHotaW5kZXg6IDIwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgcGFkZGluZzogMTBweCAxMnB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncm91bmQpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ydWxlKTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3gtc2hhZG93OiAwIDZweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC40NSk7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi8qIERvd253YXJkIHBvaW50ZXIgYXJyb3csIGJvcmRlcmVkOiBvdXRlciB0cmlhbmdsZSBpbiB0aGUgcnVsZSBjb2xvdXIgd2l0aCBhblxuICAgaW5uZXIgZ3JvdW5kLWZpbGxlZCB0cmlhbmdsZSBsYWlkIGEgcGl4ZWwgaGlnaGVyIG9uIHRvcCBvZiBpdC4gKi9cbi5yZW1vdmVQb3BvdmVyOjpiZWZvcmUsXG4ucmVtb3ZlUG9wb3Zlcjo6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbn1cblxuLnJlbW92ZVBvcG92ZXI6OmJlZm9yZSB7XG4gIHRvcDogMTAwJTtcbiAgYm9yZGVyLXdpZHRoOiA3cHggN3B4IDAgN3B4O1xuICBib3JkZXItY29sb3I6IHZhcigtLXJ1bGUpIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xufVxuXG4ucmVtb3ZlUG9wb3Zlcjo6YWZ0ZXIge1xuICB0b3A6IGNhbGMoMTAwJSAtIDFweCk7XG4gIGJvcmRlci13aWR0aDogNnB4IDZweCAwIDZweDtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ncm91bmQpIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xufVxuXG4ucmVtb3ZlUG9wb3Zlci1uYW1lIHtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5yZW1vdmVQb3BvdmVyLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDhweDtcbn1cblxuLnJlbW92ZVBvcG92ZXItY2FuY2VsLFxuLnJlbW92ZVBvcG92ZXItZGVsZXRlIHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogNXB4IDEycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXJ1bGUpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnJlbW92ZVBvcG92ZXItY2FuY2VsIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcbn1cblxuLnJlbW92ZVBvcG92ZXItY2FuY2VsOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xufVxuXG4ucmVtb3ZlUG9wb3Zlci1kZWxldGUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10ZXh0KTtcbiAgY29sb3I6IHZhcigtLWdyb3VuZCk7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tdGV4dCk7XG59XG5cbi5yZW1vdmVQb3BvdmVyLWRlbGV0ZTpob3ZlciB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjkyKTtcbn1cblxuLyogUm9ib3RvIExpZ2h0IDQwcHggZm9yIHRoZSByZWFkaW5nLiAqL1xuI2N1cnJlbnRUZW1wIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjE7XG59XG5cbiNjdXJyZW50Q29uZGl0aW9uIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG59XG5cbi8qIEZvdXItdXAgc3RhdCByb3c6IHRleHQgbGFiZWxzLCBubyBpY29ucy4gKi9cbiNzdGF0Um93IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgZ2FwOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMTRweDtcbn1cblxuLnN0YXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDRweDtcbiAgcGFkZGluZzogMTJweCA2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXJ1bGUpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5zdGF0LWxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1vbm8pO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XG59XG5cbi5zdGF0LXZhbHVlIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG59XG5cbi8qIFNlYXJjaCBmb3JtLiAqL1xuI3NlYXJjaEZvcm0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qIHN0YWNrcyBhYm92ZSB0aGUgLndlYXRoZXJCZyBkcmlmdCBsYXllciAqL1xuICB6LWluZGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4vKiBIb2xkcyB0aGUgaW5wdXQgYW5kIGl0cyBhdXRvY29tcGxldGUgZHJvcGRvd247IHBvc2l0aW9uOiByZWxhdGl2ZSBhbmNob3JzXG4gICAjc3VnZ2VzdGlvbnMgYmVuZWF0aCB0aGUgaW5wdXQuIGZsZXg6IDEgc28gdGhlIHBhaXIgZmlsbHMgdGhlIHJvdyB0aGUgd2F5IHRoZVxuICAgYmFyZSBpbnB1dCB1c2VkIHRvLiAqL1xuI3NlYXJjaElucHV0V3JhcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleDogMTtcbiAgbWluLXdpZHRoOiAwO1xufVxuXG4jc2VhcmNoSW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTJweCAxNHB4O1xuICBmb250LWZhbWlseTogdmFyKC0tbW9ubyk7XG4gIGZvbnQtc2l6ZTogMTZweDsgLyogMTZweCBzbyBpT1MgU2FmYXJpIGRvZXNuJ3QgYXV0by16b29tIHRoZSBpbnB1dCBvbiBmb2N1cyAqL1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ydWxlKTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4jc2VhcmNoSW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcbn1cblxuI3NlYXJjaElucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1tdXRlZCk7XG59XG5cbi8qIFdoaWxlIHRoZSBkcm9wZG93biBpcyBvcGVuIHRoZSBpbnB1dCdzIGJvdHRvbSBjb3JuZXJzIHNxdWFyZSBvZmYgYW5kIGl0c1xuICAgYm90dG9tIGVkZ2UgZHJvcHMgb3V0LCBzbyBpdCByZWFkcyBhcyBvbmUgYXR0YWNoZWQgc3VyZmFjZSB3aXRoICNzdWdnZXN0aW9ucy4gKi9cbiNzZWFyY2hGb3JtLnN1Z2dlc3RpbmcgI3NlYXJjaElucHV0IHtcbiAgYm9yZGVyLXJhZGl1czogOHB4IDhweCAwIDA7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4vKiBGYWlsZWQgbG9va3VwOiByZWRkZW5lZCBib3JkZXIsIGN1cnJlbnQgcmliYm9uIGxlZnQgaW4gcGxhY2UuICovXG4jc2VhcmNoRm9ybS5pbnZhbGlkICNzZWFyY2hJbnB1dCB7XG4gIGJvcmRlci1jb2xvcjogI0MyNDUyRDtcbn1cblxuLyogQXV0b2NvbXBsZXRlIGRyb3Bkb3duOiBoYW5ncyBvZmYgdGhlIGJvdHRvbSBvZiB0aGUgaW5wdXQsIG1hdGNoaW5nIGl0cyB3aWR0aFxuICAgYW5kIGNvbnRpbnVpbmcgaXRzIGZvY3VzZWQgYm9yZGVyIGludG8gYSBib3R0b20tcm91bmRlZCBwYW5lbC4gKi9cbiNzdWdnZXN0aW9ucyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDAlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMTA7XG4gIG1heC1oZWlnaHQ6IDI0MHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncm91bmQpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1tdXRlZCk7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCA4cHggOHB4O1xufVxuXG4jc3VnZ2VzdGlvbnMuaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnN1Z2dlc3Rpb24taXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgZ2FwOiA4cHg7XG4gIHBhZGRpbmc6IDEwcHggMTRweDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1vbm8pO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zdWdnZXN0aW9uLWl0ZW06aG92ZXIsXG4uc3VnZ2VzdGlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tcnVsZSk7XG59XG5cbi5zdWdnZXN0aW9uLWNpdHkge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbn1cblxuLnN1Z2dlc3Rpb24tY291bnRyeSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcbn1cblxuI3NlYXJjaEJ1dHRvbiB7XG4gIHBhZGRpbmc6IDEycHggMjBweDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1vbm8pO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGNvbG9yOiB2YXIoLS1ncm91bmQpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10ZXh0KTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI3NlYXJjaEJ1dHRvbjpob3ZlciB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjkyKTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICNhcHAge1xuICAgIGdhcDogMjJweDtcbiAgICBwYWRkaW5nOiAyNHB4IDE2cHg7XG4gIH1cblxuICAjd2VhdGhlckNhcmQge1xuICAgIGdhcDogMjJweDtcbiAgfVxuXG4gIC8qIFN3aXBlLWRpcmVjdGlvbi1hd2FyZSBzbGlkZSBvbiBhIGNvbW1pdHRlZCBsb2NhdGlvbiByb3RhdGlvbi4gZmF2b3VyaXRlcy5qc1xuICAgICBhZGRzIC5zbGlkZS1uZXh0IChzd2lwZSBsZWZ0IC0+IG5leHQpIG9yIC5zbGlkZS1wcmV2IChzd2lwZSByaWdodCAtPiBwcmV2KVxuICAgICB0byAjd2VhdGhlckNhcmQsIHRoZW4gcm90YXRlcy4gVGhlIGNhcmQgZmFkZXMgdG8gbm90aGluZyBhdCB0aGUga2V5ZnJhbWUnc1xuICAgICBtaWRwb2ludCwgd2hpY2ggbWFza3MgdGhlIGZvcmVjYXN0IHN3YXA6IHJlbmRlclJpYmJvbigpIHJlYnVpbGRzIGludG8gdGhpc1xuICAgICBzYW1lIGNhcmQgd2hpbGUgaXQncyBpbnZpc2libGUsIHNvIHRoZSBuZXcgY3VydmUgc2xpZGVzIGluIHJhdGhlciB0aGFuXG4gICAgIHNuYXBwaW5nLiBEZXNrdG9wIHJvdGF0ZXMgdmlhIHRoZSBhcnJvd3MgYW5kIG5ldmVyIGdldHMgdGhlIGNsYXNzLiAqL1xuICAjd2VhdGhlckNhcmQuc2xpZGUtbmV4dCB7XG4gICAgYW5pbWF0aW9uOiBjYXJkU2xpZGVOZXh0IDI4MG1zIGVhc2Utb3V0O1xuICB9XG5cbiAgI3dlYXRoZXJDYXJkLnNsaWRlLXByZXYge1xuICAgIGFuaW1hdGlvbjogY2FyZFNsaWRlUHJldiAyODBtcyBlYXNlLW91dDtcbiAgfVxuXG4gIEBrZXlmcmFtZXMgY2FyZFNsaWRlTmV4dCB7XG4gICAgMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IG9wYWNpdHk6IDE7IH1cbiAgICA0MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTQycHgpOyBvcGFjaXR5OiAwOyB9XG4gICAgNjAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQycHgpOyBvcGFjaXR5OiAwOyB9XG4gICAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgb3BhY2l0eTogMTsgfVxuICB9XG5cbiAgQGtleWZyYW1lcyBjYXJkU2xpZGVQcmV2IHtcbiAgICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgb3BhY2l0eTogMTsgfVxuICAgIDQwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0MnB4KTsgb3BhY2l0eTogMDsgfVxuICAgIDYwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNDJweCk7IG9wYWNpdHk6IDA7IH1cbiAgICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyBvcGFjaXR5OiAxOyB9XG4gIH1cblxuICAvKiBNb2JpbGUgbmF2aWdhdGVzIGJ5IHN3aXBlOyBkcm9wIHRoZSBhcnJvd3MgYnV0IGtlZXAgdGhlIGRvdHMuICovXG4gIC5hcnJvdyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gICNzdGF0Um93IHtcbiAgICBnYXA6IDhweDtcbiAgfVxuXG4gIC5zdGF0IHtcbiAgICBwYWRkaW5nOiAxMHB4IDRweDtcbiAgfVxuXG4gIC5zdGF0LXZhbHVlIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbn1cblxuLyogUmVzcGVjdCBhIHJlZHVjZWQtbW90aW9uIHByZWZlcmVuY2U6IHJvdGF0ZSBpbnN0YW50bHksIG5vIHNsaWRlLiBmYXZvdXJpdGVzLmpzXG4gICBzdGlsbCBhZGRzIHRoZSBjbGFzcywgYnV0IHdpdGggdGhlIGFuaW1hdGlvbiBzdXBwcmVzc2VkIGFuaW1hdGlvbmVuZCBuZXZlclxuICAgZmlyZXMsIHNvIGl0cyBzZXRUaW1lb3V0IGZhbGxiYWNrIGlzIHdoYXQgc3RyaXBzIHRoZSBjbGFzcyBiYWNrIG9mZi4gKi9cbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XG4gICN3ZWF0aGVyQ2FyZC5zbGlkZS1uZXh0LFxuICAjd2VhdGhlckNhcmQuc2xpZGUtcHJldiB7XG4gICAgYW5pbWF0aW9uOiBub25lO1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsNENBQWdDO0VBQ2hDLG9CQUFvQjtBQUN0Qjs7QUFFQTs7OztxQ0FJcUM7QUFDckM7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGVBQWU7RUFDZixnQkFBZ0I7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QVUsRUFBRTtJQUMvQyxPQUFPLHdCQUF3QixFQUFFLFVBQVUsRUFBRTtFQUMvQzs7RUFFQTtJQUNFLEtBQUssd0JBQXdCLEVBQUUsVUFBVSxFQUFFO0lBQzNDLE1BQU0sMkJBQTJCLEVBQUUsVUFBVSxFQUFFO0lBQy9DLE1BQU0sNEJBQTRCLEVBQUUsVUFBVSxFQUFFO0lBQ2hELE9BQU8sd0JBQXdCLEVBQUUsVUFBVSxFQUFFO0VBQy9DOztFQUVBLGtFQUFrRTtFQUNsRTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFFBQVE7RUFDVjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQTs7eUVBRXlFO0FBQ3pFO0VBQ0U7O0lBRUUsZUFBZTtFQUNqQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgc3JjOiB1cmwoJy4vUm9ib3RvLVJlZ3VsYXIudHRmJyk7XFxuICBmb250LXdlaWdodDogMzAwIDQwMDtcXG59XFxuXFxuLyogUGFsZXR0ZTpcXG4gICBncm91bmQgICMxMjE4MUYgICBydWxlcyAgIzI2MzEzQlxcbiAgIHRleHQgICAgI0VBRUVGMiAocHJpbWFyeSkgLyAjOENBMEFFIChtdXRlZClcXG4gICBUaGUgdGVtcGVyYXR1cmUgY29sb3VycyBsaXZlIGluIHJpYmJvbi5qcyAodGhlIGN1cnZlIGlzIGNvbG91cmVkIGJ5IHRoZVxcbiAgIHRlbXBlcmF0dXJlIHNjYWxhciwgbm90IGJ5IENTUykuICovXFxuOnJvb3Qge1xcbiAgLS1ncm91bmQ6ICMxMjE4MUY7XFxuICAtLXJ1bGU6ICMyNjMxM0I7XFxuICAtLXRleHQ6ICNFQUVFRjI7XFxuICAtLW11dGVkOiAjOENBMEFFO1xcbiAgLS1tb25vOiAnU0ZNb25vLVJlZ3VsYXInLCAnU0YgTW9ubycsICdNZW5sbycsICdDb25zb2xhcycsICdMaWJlcmF0aW9uIE1vbm8nLCBtb25vc3BhY2U7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncm91bmQpO1xcbiAgY29sb3I6IHZhcigtLXRleHQpO1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWY7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG59XFxuXFxuLyogZHZoIChub3QgdmgpOiBvbiBpT1MgU2FmYXJpIHZoIHJlc29sdmVzIHRvIHRoZSB0YWxsIHZpZXdwb3J0IGFuZCBwYXJrcyB0aGVcXG4gICBib3R0b20gb2YgdGhlIGxheW91dCB1bmRlciB0aGUgVVJMIGJhci4gKi9cXG4jYXBwIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgLyogc3RhY2tzIHRoZSBjb25zdHJhaW5lZCBjb2x1bW4gYWJvdmUgdGhlIGZpeGVkIC53ZWF0aGVyQmcgKi9cXG4gIHotaW5kZXg6IDE7XFxuICBtaW4taGVpZ2h0OiAxMDBkdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAyOHB4O1xcbiAgbWF4LXdpZHRoOiA3MjBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogMzJweCAyMHB4O1xcbn1cXG5cXG4vKiBDb25kaXRpb24tYmFzZWQgYmFja2dyb3VuZC4gc2t5LmpzIG1vdW50cyBhIHNpbmdsZSBgLndlYXRoZXJCZ2AgYXMgdGhlIGZpcnN0XFxuICAgY2hpbGQgb2YgI2FwcCBhbmQgc3dhcHMgYSBgYmctPGNhdGVnb3J5PmAgY2xhc3Mgb250byBpdCBwZXIgZmV0Y2gsIGtleWVkIG9mZlxcbiAgIHRoZSBjdXJyZW50IGNvbmRpdGlvbiB0ZXh0IChjYXRlZ29yeUZvcigpIGluIHNreS5qcykuIEl0IGlzIGBmaXhlZGAgc28gaXRcXG4gICBzcGFucyB0aGUgd2hvbGUgYnJvd3NlciB3aW5kb3cgb24gZGVza3RvcCB3aGlsZSAjYXBwIHN0YXlzIGEgY29uc3RyYWluZWRcXG4gICBjZW50cmVkIGNvbHVtbiBhYm92ZSBpdCAoei1pbmRleCkuIEVhY2ggY2F0ZWdvcnkgcGFpbnRzIGEgZ3JhZGllbnQgYmFzZSBvbiB0aGVcXG4gICBlbGVtZW50IHBsdXMgZGVjb3JhdGl2ZSBsYXllcnMgKHN1biwgbW9vbiArIHN0YXJzLCBkcmlmdGluZyBjbG91ZHMsIGZsYWtlcyxcXG4gICBoYXplKSBvbiB0aGUgdHdvIHBzZXVkby1lbGVtZW50cy4gb3ZlcmZsb3c6IGhpZGRlbiBjbGlwcyB0aG9zZSBsYXllcnMgdG8gdGhlXFxuICAgdmlld3BvcnQgc28gYW4gb3ZlcnNpemVkIGNsb3VkIGNhbid0IHNwaWxsIGEgc2Nyb2xsYmFyLiBUaGUgZ3JhZGllbnRzIGNyb3NzLVxcbiAgIGZhZGUgKHRyYW5zaXRpb246IGJhY2tncm91bmQpIHdoZW4gdGhlIGNhdGVnb3J5IGNoYW5nZXM7IHRoZSBkZWNvcmF0aXZlXFxuICAgbW90aW9uIGxpdmVzIGluIHRoZSBwZXItY2F0ZWdvcnkga2V5ZnJhbWVzIGJlbG93LiAqL1xcbi53ZWF0aGVyQmcge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgaW5zZXQ6IDA7XFxuICB6LWluZGV4OiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzFiMjgzNiAwJSwgIzE0MWQyOSA1NSUsIHZhcigtLWdyb3VuZCkgMTAwJSk7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDYwMG1zIGVhc2U7XFxufVxcblxcbi53ZWF0aGVyQmc6OmJlZm9yZSxcXG4ud2VhdGhlckJnOjphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4vKiBTVU5OWSDigJQgd2FybSBkYXl0aW1lIHNreSB3aXRoIGEgc29mdCBzdW4gZ2xvdyB0aGF0IHNsb3dseSBicmVhdGhlcy4gKi9cXG4ud2VhdGhlckJnLmJnLXN1bm55IHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMyYzRjNzIgMCUsICMxYTJjNDAgNTUlLCB2YXIoLS1ncm91bmQpIDEwMCUpO1xcbn1cXG4ud2VhdGhlckJnLmJnLXN1bm55OjpiZWZvcmUge1xcbiAgdG9wOiAtMTIlO1xcbiAgcmlnaHQ6IC02JTtcXG4gIHdpZHRoOiA0NnZtYXg7XFxuICBoZWlnaHQ6IDQ2dm1heDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgY2VudGVyLCByZ2JhKDIxNywgMTY0LCA2NSwgMC40NSksIHJnYmEoMjE3LCAxNjQsIDY1LCAwKSA2OCUpO1xcbiAgYW5pbWF0aW9uOiBiZ1N1biAxNHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xcbn1cXG4ud2VhdGhlckJnLmJnLXN1bm55OjphZnRlciB7XFxuICBib3R0b206IC0xOCU7XFxuICBsZWZ0OiAtMTIlO1xcbiAgd2lkdGg6IDQwdm1heDtcXG4gIGhlaWdodDogNDB2bWF4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCBjZW50ZXIsIHJnYmEoMTExLCAxNjgsIDE2MCwgMC4xOCksIHJnYmEoMTExLCAxNjgsIDE2MCwgMCkgNzAlKTtcXG4gIGFuaW1hdGlvbjogYmdTdW4gMThzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZS1yZXZlcnNlO1xcbn1cXG5cXG4vKiBDTEVBUiBOSUdIVCDigJQgZGVlcCBza3ksIGEgbG93IG1vb24gZ2xvdywgYW5kIGEgZmllbGQgb2YgdHdpbmtsaW5nIHN0YXJzLiAqL1xcbi53ZWF0aGVyQmcuYmctY2xlYXItbmlnaHQge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzEwMWEyYyAwJSwgIzBkMTQyMCA1NSUsIHZhcigtLWdyb3VuZCkgMTAwJSk7XFxufVxcbi53ZWF0aGVyQmcuYmctY2xlYXItbmlnaHQ6OmJlZm9yZSB7XFxuICBpbnNldDogMDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6XFxuICAgIHJhZGlhbC1ncmFkaWVudCgxLjZweCAxLjZweCBhdCAxOCUgMjQlLCByZ2JhKDIzNCwgMjM4LCAyNDIsIDAuOSksIHRyYW5zcGFyZW50IDYwJSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgxLjJweCAxLjJweCBhdCA3MiUgMTYlLCByZ2JhKDIzNCwgMjM4LCAyNDIsIDAuOCksIHRyYW5zcGFyZW50IDYwJSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgxLjRweCAxLjRweCBhdCA0MiUgNjIlLCByZ2JhKDIzNCwgMjM4LCAyNDIsIDAuNzUpLCB0cmFuc3BhcmVudCA2MCUpLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMXB4IDFweCBhdCA4NiUgNDYlLCByZ2JhKDIzNCwgMjM4LCAyNDIsIDAuNyksIHRyYW5zcGFyZW50IDYwJSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgxLjNweCAxLjNweCBhdCAzMCUgODIlLCByZ2JhKDIzNCwgMjM4LCAyNDIsIDAuNyksIHRyYW5zcGFyZW50IDYwJSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgxcHggMXB4IGF0IDYwJSA3NCUsIHJnYmEoMjM0LCAyMzgsIDI0MiwgMC42KSwgdHJhbnNwYXJlbnQgNjAlKSxcXG4gICAgcmFkaWFsLWdyYWRpZW50KDEuNXB4IDEuNXB4IGF0IDglIDU0JSwgcmdiYSgyMzQsIDIzOCwgMjQyLCAwLjgpLCB0cmFuc3BhcmVudCA2MCUpLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMXB4IDFweCBhdCA5MiUgNzglLCByZ2JhKDIzNCwgMjM4LCAyNDIsIDAuNjUpLCB0cmFuc3BhcmVudCA2MCUpO1xcbiAgYW5pbWF0aW9uOiBiZ1R3aW5rbGUgNXMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xcbn1cXG4ud2VhdGhlckJnLmJnLWNsZWFyLW5pZ2h0OjphZnRlciB7XFxuICB0b3A6IDEyJTtcXG4gIHJpZ2h0OiAxNCU7XFxuICB3aWR0aDogOTJweDtcXG4gIGhlaWdodDogOTJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMzglIDM4JSwgcmdiYSgyMzQsIDIzOCwgMjQyLCAwLjg1KSwgcmdiYSgxNDAsIDE2MCwgMTc0LCAwLjM1KSA2MiUsIHJnYmEoMTQwLCAxNjAsIDE3NCwgMCkgNzIlKTtcXG59XFxuXFxuLyogQ0xPVURZIChhbHNvIG92ZXJjYXN0LCBwYXJ0bHksIGFuZCB0aGUgbmV1dHJhbCBmYWxsYmFjaykg4oCUIGNvb2wgZ3JleS1ibHVlIHdpdGhcXG4gICB0d28gc29mdCBjbG91ZCBtYXNzZXMgZHJpZnRpbmcgbGF0ZXJhbGx5LiAqL1xcbi53ZWF0aGVyQmcuYmctY2xvdWR5IHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMyMzMwM2YgMCUsICMxNzIyMzAgNTUlLCB2YXIoLS1ncm91bmQpIDEwMCUpO1xcbn1cXG4ud2VhdGhlckJnLmJnLWNsb3VkeTo6YmVmb3JlIHtcXG4gIHRvcDogMTQlO1xcbiAgbGVmdDogLTIwJTtcXG4gIHdpZHRoOiA1NXZtYXg7XFxuICBoZWlnaHQ6IDI0dm1heDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgY2VudGVyLCByZ2JhKDE0MCwgMTYwLCAxNzQsIDAuMiksIHJnYmEoMTQwLCAxNjAsIDE3NCwgMCkgNzAlKTtcXG4gIGFuaW1hdGlvbjogYmdDbG91ZCA0MHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xcbn1cXG4ud2VhdGhlckJnLmJnLWNsb3VkeTo6YWZ0ZXIge1xcbiAgYm90dG9tOiAxMCU7XFxuICByaWdodDogLTI0JTtcXG4gIHdpZHRoOiA2MHZtYXg7XFxuICBoZWlnaHQ6IDI2dm1heDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgY2VudGVyLCByZ2JhKDExMSwgMTMwLCAxNDgsIDAuMTYpLCByZ2JhKDExMSwgMTMwLCAxNDgsIDApIDcwJSk7XFxuICBhbmltYXRpb246IGJnQ2xvdWQgNTJzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZS1yZXZlcnNlO1xcbn1cXG5cXG4vKiBSQUlOIChhbHNvIGRyaXp6bGUsIHNob3dlcnMsIHRodW5kZXIpIOKAlCBkYXJrZXIgc2t5LCBhIGhlYXZ5IGRyaWZ0aW5nIGNsb3VkLFxcbiAgIGFuZCBhIGZhaW50IGRpYWdvbmFsIHJhaW4gc2hlZW4gc2xpZGluZyBkb3duLiAqL1xcbi53ZWF0aGVyQmcuYmctcmFpbiB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMWMyNzM0IDAlLCAjMTIxYjI2IDU1JSwgdmFyKC0tZ3JvdW5kKSAxMDAlKTtcXG59XFxuLndlYXRoZXJCZy5iZy1yYWluOjpiZWZvcmUge1xcbiAgdG9wOiAtOCU7XFxuICBsZWZ0OiAtMTglO1xcbiAgd2lkdGg6IDYydm1heDtcXG4gIGhlaWdodDogMzB2bWF4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCBjZW50ZXIsIHJnYmEoMTIwLCAxNDAsIDE1OCwgMC4yMiksIHJnYmEoMTIwLCAxNDAsIDE1OCwgMCkgNzAlKTtcXG4gIGFuaW1hdGlvbjogYmdDbG91ZCA0NnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xcbn1cXG4ud2VhdGhlckJnLmJnLXJhaW46OmFmdGVyIHtcXG4gIGluc2V0OiAwO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCg3NGRlZywgcmdiYSgxNjAsIDE5MCwgMjE0LCAwLjA3KSAwIDFweCwgcmdiYSgxNjAsIDE5MCwgMjE0LCAwKSAxcHggOXB4KTtcXG4gIGFuaW1hdGlvbjogYmdSYWluIDAuOXMgbGluZWFyIGluZmluaXRlO1xcbn1cXG5cXG4vKiBTTk9XIOKAlCBjb29sIGxpZ2h0IHNreSB3aXRoIHNsb3dseSBkcmlmdGluZyBmbGFrZXMuICovXFxuLndlYXRoZXJCZy5iZy1zbm93IHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMyYTM5NDkgMCUsICMxYTI2MzQgNTUlLCB2YXIoLS1ncm91bmQpIDEwMCUpO1xcbn1cXG4ud2VhdGhlckJnLmJnLXNub3c6OmJlZm9yZSxcXG4ud2VhdGhlckJnLmJnLXNub3c6OmFmdGVyIHtcXG4gIGluc2V0OiAwO1xcbiAgYmFja2dyb3VuZC1pbWFnZTpcXG4gICAgcmFkaWFsLWdyYWRpZW50KDJweCAycHggYXQgMjAlIDEwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpLCB0cmFuc3BhcmVudCA2MCUpLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMi40cHggMi40cHggYXQgNjYlIDIyJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpLCB0cmFuc3BhcmVudCA2MCUpLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMS44cHggMS44cHggYXQgNDAlIDQwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KSwgdHJhbnNwYXJlbnQgNjAlKSxcXG4gICAgcmFkaWFsLWdyYWRpZW50KDJweCAycHggYXQgODQlIDU0JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpLCB0cmFuc3BhcmVudCA2MCUpLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMi4ycHggMi4ycHggYXQgMTIlIDcwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpLCB0cmFuc3BhcmVudCA2MCUpLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMS44cHggMS44cHggYXQgNTQlIDg2JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY1KSwgdHJhbnNwYXJlbnQgNjAlKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSA1MCU7XFxufVxcbi53ZWF0aGVyQmcuYmctc25vdzo6YmVmb3JlIHtcXG4gIGFuaW1hdGlvbjogYmdTbm93IDE0cyBsaW5lYXIgaW5maW5pdGU7XFxufVxcbi53ZWF0aGVyQmcuYmctc25vdzo6YWZ0ZXIge1xcbiAgb3BhY2l0eTogMC42O1xcbiAgYW5pbWF0aW9uOiBiZ1Nub3cgMjJzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuXFxuLyogRk9HIChhbHNvIG1pc3QsIGhhemUpIOKAlCBtdXRlZCBza3kgd2l0aCBzbG93IGhvcml6b250YWwgaGF6ZSBiYW5kcy4gKi9cXG4ud2VhdGhlckJnLmJnLWZvZyB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMjMyYzM1IDAlLCAjMTgyMDI5IDU1JSwgdmFyKC0tZ3JvdW5kKSAxMDAlKTtcXG59XFxuLndlYXRoZXJCZy5iZy1mb2c6OmJlZm9yZSB7XFxuICBpbnNldDogMDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6XFxuICAgIGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDE0MCwgMTYwLCAxNzQsIDApIDAlLCByZ2JhKDE0MCwgMTYwLCAxNzQsIDAuMTIpIDMwJSwgcmdiYSgxNDAsIDE2MCwgMTc0LCAwKSA0NiUpLFxcbiAgICBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSgxNDAsIDE2MCwgMTc0LCAwKSA1NCUsIHJnYmEoMTQwLCAxNjAsIDE3NCwgMC4xKSA3MiUsIHJnYmEoMTQwLCAxNjAsIDE3NCwgMCkgODglKTtcXG4gIGFuaW1hdGlvbjogYmdGb2cgMjRzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBiZ1N1biB7XFxuICAwJSAgIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMSk7ICAgICAgICBvcGFjaXR5OiAwLjc7IH1cXG4gIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNCUsIDMlKSBzY2FsZSgxLjEyKTsgIG9wYWNpdHk6IDE7IH1cXG59XFxuXFxuQGtleWZyYW1lcyBiZ1R3aW5rbGUge1xcbiAgMCUgICB7IG9wYWNpdHk6IDAuNDsgfVxcbiAgMTAwJSB7IG9wYWNpdHk6IDE7IH1cXG59XFxuXFxuQGtleWZyYW1lcyBiZ0Nsb3VkIHtcXG4gIDAlICAgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH1cXG4gIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAlKTsgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJnUmFpbiB7XFxuICAwJSAgIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwOyB9XFxuICAxMDAlIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogLTlweCAzMnB4OyB9XFxufVxcblxcbkBrZXlmcmFtZXMgYmdTbm93IHtcXG4gIDAlICAgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7IH1cXG4gIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cXG59XFxuXFxuQGtleWZyYW1lcyBiZ0ZvZyB7XFxuICAwJSAgIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00JSk7IG9wYWNpdHk6IDAuNzsgfVxcbiAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0JSk7ICBvcGFjaXR5OiAxOyB9XFxufVxcblxcbi8qIEZyb3plbiB3aGlsZSB0aGUgdGFiIGlzIGhpZGRlbiAoc2t5LmpzIHRvZ2dsZXMgLnBhdXNlZCBvbiB2aXNpYmlsaXR5Y2hhbmdlKS4gKi9cXG4ud2VhdGhlckJnLnBhdXNlZDo6YmVmb3JlLFxcbi53ZWF0aGVyQmcucGF1c2VkOjphZnRlciB7XFxuICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xcbn1cXG5cXG4vKiBIYWx0IGV2ZXJ5IHRyZWF0bWVudCdzIG1vdGlvbiB1bmRlciBhIHJlZHVjZWQtbW90aW9uIHByZWZlcmVuY2Ug4oCUIG9uZSBzdGF0aWNcXG4gICBmcmFtZSBwZXIgY2F0ZWdvcnkuICovXFxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcXG4gIC53ZWF0aGVyQmc6OmJlZm9yZSxcXG4gIC53ZWF0aGVyQmc6OmFmdGVyIHtcXG4gICAgYW5pbWF0aW9uOiBub25lO1xcbiAgfVxcbn1cXG5cXG4vKiBUaGUgcmliYm9uIGFuZCBpdHMgcmVhZG91dCBzaGFyZSBvbmUgZmxleCBjb2x1bW4gc28gYSBtb2JpbGUgbG9jYXRpb24gcm90YXRpb25cXG4gICBzbGlkZXMgdGhlbSBhcyBhIHNpbmdsZSB1bml0LiBJdCBjYXJyaWVzIHRoZSBzYW1lIDI4cHggZ2FwICNhcHAgdXNlZCB0byBwdXRcXG4gICBiZXR3ZWVuIHRoZSByaWJib24gYW5kIHRoZSByZWFkb3V0LCBzbyB3cmFwcGluZyB0aGVtIGlzIGxheW91dC10cmFuc3BhcmVudC4gKi9cXG4jd2VhdGhlckNhcmQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiBzdGFja3MgYWJvdmUgdGhlIC53ZWF0aGVyQmcgZHJpZnQgbGF5ZXIgKi9cXG4gIHotaW5kZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjhweDtcXG59XFxuXFxuLyogUmliYm9uOiB0aGUgU1ZHIHNjYWxlcyB0byB0aGUgY29sdW1uIHdpZHRoIHZpYSB0aGUgdmlld0JveCwgc28gYWxsIDcyIGhvdXJzXFxuICAgYXJlIG9uIHNjcmVlbiBhdCBhbnkgd2lkdGggZG93biB0byAzODBweCB3aXRob3V0IHNjcm9sbCBvciBwYW4uICovXFxuI3JpYmJvbldyYXAge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNyaWJib25Tdmcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4ucmliYm9uLWN1cnZlIHtcXG4gIHN0cm9rZS13aWR0aDogMi41O1xcbiAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xcbiAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDtcXG59XFxuXFxuLyogRGF5IGJvdW5kYXJ5IGhhaXJsaW5lcyBhdCBob3VycyAyNCBhbmQgNDguICovXFxuLnJpYmJvbi1oYWlybGluZSB7XFxuICBzdHJva2U6IHZhcigtLXJ1bGUpO1xcbiAgc3Ryb2tlLXdpZHRoOiAxO1xcbn1cXG5cXG4ucmliYm9uLXRpY2sge1xcbiAgZmlsbDogdmFyKC0tbXV0ZWQpO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1vbm8pO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG59XFxuXFxuLnJpYmJvbi1ub3dsaW5lIHtcXG4gIHN0cm9rZTogdmFyKC0tbXV0ZWQpO1xcbiAgc3Ryb2tlLXdpZHRoOiAxO1xcbiAgc3Ryb2tlLWRhc2hhcnJheTogMiAzO1xcbiAgb3BhY2l0eTogMC43O1xcbn1cXG5cXG4ucmliYm9uLWRvdCB7XFxuICBzdHJva2U6IHZhcigtLWdyb3VuZCk7XFxuICBzdHJva2Utd2lkdGg6IDI7XFxufVxcblxcbi8qIFJlYWRvdXQgYmVuZWF0aCB0aGUgY3VydmUuICovXFxuI3JlYWRvdXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA0cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi8qIExvY2F0aW9uIG5hbWUgcGFpcmVkIHdpdGggdGhlIEMvRiB1bml0IHN3aXRjaCBvbiBvbmUgY2VudGVyZWQgcm93LiAqL1xcbiNsb2NhdGlvblJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4jbG9jYXRpb25OYW1lIHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tb25vKTtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcXG59XFxuXFxuLyogU2VnbWVudGVkIEMvRiB0b2dnbGU6IGEgY29tcGFjdCBwaWxsLCB0aGUgYWN0aXZlIG9wdGlvbiBmaWxsZWQgd2l0aCB0aGUgcnVsZVxcbiAgIGNvbG91ci4gRGlzcGxheS1vbmx5IOKAlCBmbGlwcyB0aGUgdGVtcGVyYXR1cmUgcmVhZG91dHMgYmV0d2VlbiDCsEMgYW5kIMKwRi4gKi9cXG4jdW5pdFN3aXRjaCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcnVsZSk7XFxuICBib3JkZXItcmFkaXVzOiA5OTlweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi51bml0T3B0IHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tb25vKTtcXG4gIGZvbnQtc2l6ZTogMTFweDtcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICBwYWRkaW5nOiAzcHggOXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udW5pdE9wdC5hY3RpdmUge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcnVsZSk7XFxuICBjb2xvcjogdmFyKC0tdGV4dCk7XFxufVxcblxcbi8qIFNhdmVkLWxvY2F0aW9uIG5hdmlnYXRpb246IHByZXYvbmV4dCBjaGV2cm9ucyBmbGFua2luZyB0aGUgZG90IHJvdy4gVGhlIHdob2xlXFxuICAgcm93IGlzIGhpZGRlbiBhdCBhIGNvdW50IG9mIG9uZSAoYSBzaW5nbGUgbG9jYXRpb24gbmVlZHMgbm8gYWZmb3JkYW5jZSk7IHRoZVxcbiAgIGFycm93cyBhcmUgZGVza3RvcC1vbmx5IGFuZCBkcm9wIG91dCBhdCDiiaQ0ODBweCB3aGVyZSBzd2lwZSB0YWtlcyBvdmVyLiAqL1xcbi5uYXZSb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIG1hcmdpbjogNHB4IDAgMnB4O1xcbn1cXG5cXG4ubmF2Um93LmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uYXJyb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFycm93OmhvdmVyIHtcXG4gIGNvbG9yOiAjRUFFRUYyO1xcbn1cXG5cXG4uYXJyb3cgc3ZnIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDE0cHg7XFxufVxcblxcbi8qIFNhdmVkLWxvY2F0aW9uIGRvdHM6IG9uZSBwZXIgc2F2ZWQgbG9jYXRpb24sIHRoZSBhY3RpdmUgb25lIGZpbGxlZC4gKi9cXG4jZG90Um93IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgLyogb2Zmc2V0IHBhcmVudCBmb3IgdGhlIGRlc2t0b3AgcmVtb3ZlIHBvcG92ZXIgKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDhweDtcXG59XFxuXFxuLmRvdCB7XFxuICB3aWR0aDogOHB4O1xcbiAgaGVpZ2h0OiA4cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kOiAjMkUzQjQ1O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XFxufVxcblxcbi5kb3QuYWN0aXZlIHtcXG4gIGJhY2tncm91bmQ6ICNFQUVFRjI7XFxufVxcblxcbi8qIERlc2t0b3AgcmVtb3ZlLWNvbmZpcm1hdGlvbiBwb3BvdmVyLCBhbmNob3JlZCBhYm92ZSB0aGUgbG9uZy1wcmVzc2VkIGRvdC5cXG4gICBUb3VjaCBrZWVwcyB0aGUgbmF0aXZlIGNvbmZpcm07IHRoaXMgaXMgdGhlIG1vdXNlL3BlbiBwYXRoLiAqL1xcbi5yZW1vdmVQb3BvdmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogY2FsYygxMDAlICsgMTBweCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICB6LWluZGV4OiAyMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogOHB4O1xcbiAgcGFkZGluZzogMTBweCAxMnB4O1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JvdW5kKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXJ1bGUpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgYm94LXNoYWRvdzogMCA2cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuNDUpO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLyogRG93bndhcmQgcG9pbnRlciBhcnJvdywgYm9yZGVyZWQ6IG91dGVyIHRyaWFuZ2xlIGluIHRoZSBydWxlIGNvbG91ciB3aXRoIGFuXFxuICAgaW5uZXIgZ3JvdW5kLWZpbGxlZCB0cmlhbmdsZSBsYWlkIGEgcGl4ZWwgaGlnaGVyIG9uIHRvcCBvZiBpdC4gKi9cXG4ucmVtb3ZlUG9wb3Zlcjo6YmVmb3JlLFxcbi5yZW1vdmVQb3BvdmVyOjphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAwO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG59XFxuXFxuLnJlbW92ZVBvcG92ZXI6OmJlZm9yZSB7XFxuICB0b3A6IDEwMCU7XFxuICBib3JkZXItd2lkdGg6IDdweCA3cHggMCA3cHg7XFxuICBib3JkZXItY29sb3I6IHZhcigtLXJ1bGUpIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4ucmVtb3ZlUG9wb3Zlcjo6YWZ0ZXIge1xcbiAgdG9wOiBjYWxjKDEwMCUgLSAxcHgpO1xcbiAgYm9yZGVyLXdpZHRoOiA2cHggNnB4IDAgNnB4O1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ncm91bmQpIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4ucmVtb3ZlUG9wb3Zlci1uYW1lIHtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG59XFxuXFxuLnJlbW92ZVBvcG92ZXItYWN0aW9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA4cHg7XFxufVxcblxcbi5yZW1vdmVQb3BvdmVyLWNhbmNlbCxcXG4ucmVtb3ZlUG9wb3Zlci1kZWxldGUge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBwYWRkaW5nOiA1cHggMTJweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXJ1bGUpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucmVtb3ZlUG9wb3Zlci1jYW5jZWwge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XFxufVxcblxcbi5yZW1vdmVQb3BvdmVyLWNhbmNlbDpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tdGV4dCk7XFxufVxcblxcbi5yZW1vdmVQb3BvdmVyLWRlbGV0ZSB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS10ZXh0KTtcXG4gIGNvbG9yOiB2YXIoLS1ncm91bmQpO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS10ZXh0KTtcXG59XFxuXFxuLnJlbW92ZVBvcG92ZXItZGVsZXRlOmhvdmVyIHtcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjkyKTtcXG59XFxuXFxuLyogUm9ib3RvIExpZ2h0IDQwcHggZm9yIHRoZSByZWFkaW5nLiAqL1xcbiNjdXJyZW50VGVtcCB7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuMTtcXG59XFxuXFxuI2N1cnJlbnRDb25kaXRpb24ge1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgY29sb3I6IHZhcigtLXRleHQpO1xcbn1cXG5cXG4vKiBGb3VyLXVwIHN0YXQgcm93OiB0ZXh0IGxhYmVscywgbm8gaWNvbnMuICovXFxuI3N0YXRSb3cge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICBnYXA6IDEwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi10b3A6IDE0cHg7XFxufVxcblxcbi5zdGF0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNHB4O1xcbiAgcGFkZGluZzogMTJweCA2cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ydWxlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLnN0YXQtbGFiZWwge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1vbm8pO1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XFxufVxcblxcbi5zdGF0LXZhbHVlIHtcXG4gIGZvbnQtc2l6ZTogMTdweDtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcXG59XFxuXFxuLyogU2VhcmNoIGZvcm0uICovXFxuI3NlYXJjaEZvcm0ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiBzdGFja3MgYWJvdmUgdGhlIC53ZWF0aGVyQmcgZHJpZnQgbGF5ZXIgKi9cXG4gIHotaW5kZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi8qIEhvbGRzIHRoZSBpbnB1dCBhbmQgaXRzIGF1dG9jb21wbGV0ZSBkcm9wZG93bjsgcG9zaXRpb246IHJlbGF0aXZlIGFuY2hvcnNcXG4gICAjc3VnZ2VzdGlvbnMgYmVuZWF0aCB0aGUgaW5wdXQuIGZsZXg6IDEgc28gdGhlIHBhaXIgZmlsbHMgdGhlIHJvdyB0aGUgd2F5IHRoZVxcbiAgIGJhcmUgaW5wdXQgdXNlZCB0by4gKi9cXG4jc2VhcmNoSW5wdXRXcmFwIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGZsZXg6IDE7XFxuICBtaW4td2lkdGg6IDA7XFxufVxcblxcbiNzZWFyY2hJbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDEycHggMTRweDtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tb25vKTtcXG4gIGZvbnQtc2l6ZTogMTZweDsgLyogMTZweCBzbyBpT1MgU2FmYXJpIGRvZXNuJ3QgYXV0by16b29tIHRoZSBpbnB1dCBvbiBmb2N1cyAqL1xcbiAgY29sb3I6IHZhcigtLXRleHQpO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ydWxlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuI3NlYXJjaElucHV0OjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xcbn1cXG5cXG4jc2VhcmNoSW5wdXQ6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tbXV0ZWQpO1xcbn1cXG5cXG4vKiBXaGlsZSB0aGUgZHJvcGRvd24gaXMgb3BlbiB0aGUgaW5wdXQncyBib3R0b20gY29ybmVycyBzcXVhcmUgb2ZmIGFuZCBpdHNcXG4gICBib3R0b20gZWRnZSBkcm9wcyBvdXQsIHNvIGl0IHJlYWRzIGFzIG9uZSBhdHRhY2hlZCBzdXJmYWNlIHdpdGggI3N1Z2dlc3Rpb25zLiAqL1xcbiNzZWFyY2hGb3JtLnN1Z2dlc3RpbmcgI3NlYXJjaElucHV0IHtcXG4gIGJvcmRlci1yYWRpdXM6IDhweCA4cHggMCAwO1xcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi8qIEZhaWxlZCBsb29rdXA6IHJlZGRlbmVkIGJvcmRlciwgY3VycmVudCByaWJib24gbGVmdCBpbiBwbGFjZS4gKi9cXG4jc2VhcmNoRm9ybS5pbnZhbGlkICNzZWFyY2hJbnB1dCB7XFxuICBib3JkZXItY29sb3I6ICNDMjQ1MkQ7XFxufVxcblxcbi8qIEF1dG9jb21wbGV0ZSBkcm9wZG93bjogaGFuZ3Mgb2ZmIHRoZSBib3R0b20gb2YgdGhlIGlucHV0LCBtYXRjaGluZyBpdHMgd2lkdGhcXG4gICBhbmQgY29udGludWluZyBpdHMgZm9jdXNlZCBib3JkZXIgaW50byBhIGJvdHRvbS1yb3VuZGVkIHBhbmVsLiAqL1xcbiNzdWdnZXN0aW9ucyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEwMCU7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB6LWluZGV4OiAxMDtcXG4gIG1heC1oZWlnaHQ6IDI0MHB4O1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIGJhY2tncm91bmQ6IHZhcigtLWdyb3VuZCk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1tdXRlZCk7XFxuICBib3JkZXItdG9wOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMCAwIDhweCA4cHg7XFxufVxcblxcbiNzdWdnZXN0aW9ucy5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnN1Z2dlc3Rpb24taXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcbiAgZ2FwOiA4cHg7XFxuICBwYWRkaW5nOiAxMHB4IDE0cHg7XFxuICBmb250LWZhbWlseTogdmFyKC0tbW9ubyk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zdWdnZXN0aW9uLWl0ZW06aG92ZXIsXFxuLnN1Z2dlc3Rpb24taXRlbS5zZWxlY3RlZCB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ydWxlKTtcXG59XFxuXFxuLnN1Z2dlc3Rpb24tY2l0eSB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjb2xvcjogdmFyKC0tdGV4dCk7XFxufVxcblxcbi5zdWdnZXN0aW9uLWNvdW50cnkge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcXG59XFxuXFxuI3NlYXJjaEJ1dHRvbiB7XFxuICBwYWRkaW5nOiAxMnB4IDIwcHg7XFxuICBmb250LWZhbWlseTogdmFyKC0tbW9ubyk7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgY29sb3I6IHZhcigtLWdyb3VuZCk7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS10ZXh0KTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3NlYXJjaEJ1dHRvbjpob3ZlciB7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45Mik7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xcbiAgI2FwcCB7XFxuICAgIGdhcDogMjJweDtcXG4gICAgcGFkZGluZzogMjRweCAxNnB4O1xcbiAgfVxcblxcbiAgI3dlYXRoZXJDYXJkIHtcXG4gICAgZ2FwOiAyMnB4O1xcbiAgfVxcblxcbiAgLyogU3dpcGUtZGlyZWN0aW9uLWF3YXJlIHNsaWRlIG9uIGEgY29tbWl0dGVkIGxvY2F0aW9uIHJvdGF0aW9uLiBmYXZvdXJpdGVzLmpzXFxuICAgICBhZGRzIC5zbGlkZS1uZXh0IChzd2lwZSBsZWZ0IC0+IG5leHQpIG9yIC5zbGlkZS1wcmV2IChzd2lwZSByaWdodCAtPiBwcmV2KVxcbiAgICAgdG8gI3dlYXRoZXJDYXJkLCB0aGVuIHJvdGF0ZXMuIFRoZSBjYXJkIGZhZGVzIHRvIG5vdGhpbmcgYXQgdGhlIGtleWZyYW1lJ3NcXG4gICAgIG1pZHBvaW50LCB3aGljaCBtYXNrcyB0aGUgZm9yZWNhc3Qgc3dhcDogcmVuZGVyUmliYm9uKCkgcmVidWlsZHMgaW50byB0aGlzXFxuICAgICBzYW1lIGNhcmQgd2hpbGUgaXQncyBpbnZpc2libGUsIHNvIHRoZSBuZXcgY3VydmUgc2xpZGVzIGluIHJhdGhlciB0aGFuXFxuICAgICBzbmFwcGluZy4gRGVza3RvcCByb3RhdGVzIHZpYSB0aGUgYXJyb3dzIGFuZCBuZXZlciBnZXRzIHRoZSBjbGFzcy4gKi9cXG4gICN3ZWF0aGVyQ2FyZC5zbGlkZS1uZXh0IHtcXG4gICAgYW5pbWF0aW9uOiBjYXJkU2xpZGVOZXh0IDI4MG1zIGVhc2Utb3V0O1xcbiAgfVxcblxcbiAgI3dlYXRoZXJDYXJkLnNsaWRlLXByZXYge1xcbiAgICBhbmltYXRpb246IGNhcmRTbGlkZVByZXYgMjgwbXMgZWFzZS1vdXQ7XFxuICB9XFxuXFxuICBAa2V5ZnJhbWVzIGNhcmRTbGlkZU5leHQge1xcbiAgICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgb3BhY2l0eTogMTsgfVxcbiAgICA0MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTQycHgpOyBvcGFjaXR5OiAwOyB9XFxuICAgIDYwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0MnB4KTsgb3BhY2l0eTogMDsgfVxcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyBvcGFjaXR5OiAxOyB9XFxuICB9XFxuXFxuICBAa2V5ZnJhbWVzIGNhcmRTbGlkZVByZXYge1xcbiAgICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgb3BhY2l0eTogMTsgfVxcbiAgICA0MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNDJweCk7IG9wYWNpdHk6IDA7IH1cXG4gICAgNjAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC00MnB4KTsgb3BhY2l0eTogMDsgfVxcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyBvcGFjaXR5OiAxOyB9XFxuICB9XFxuXFxuICAvKiBNb2JpbGUgbmF2aWdhdGVzIGJ5IHN3aXBlOyBkcm9wIHRoZSBhcnJvd3MgYnV0IGtlZXAgdGhlIGRvdHMuICovXFxuICAuYXJyb3cge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgI3N0YXRSb3cge1xcbiAgICBnYXA6IDhweDtcXG4gIH1cXG5cXG4gIC5zdGF0IHtcXG4gICAgcGFkZGluZzogMTBweCA0cHg7XFxuICB9XFxuXFxuICAuc3RhdC12YWx1ZSB7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gIH1cXG59XFxuXFxuLyogUmVzcGVjdCBhIHJlZHVjZWQtbW90aW9uIHByZWZlcmVuY2U6IHJvdGF0ZSBpbnN0YW50bHksIG5vIHNsaWRlLiBmYXZvdXJpdGVzLmpzXFxuICAgc3RpbGwgYWRkcyB0aGUgY2xhc3MsIGJ1dCB3aXRoIHRoZSBhbmltYXRpb24gc3VwcHJlc3NlZCBhbmltYXRpb25lbmQgbmV2ZXJcXG4gICBmaXJlcywgc28gaXRzIHNldFRpbWVvdXQgZmFsbGJhY2sgaXMgd2hhdCBzdHJpcHMgdGhlIGNsYXNzIGJhY2sgb2ZmLiAqL1xcbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XFxuICAjd2VhdGhlckNhcmQuc2xpZGUtbmV4dCxcXG4gICN3ZWF0aGVyQ2FyZC5zbGlkZS1wcmV2IHtcXG4gICAgYW5pbWF0aW9uOiBub25lO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIGZhdm91cml0ZXMuanMg4oCUIHNhdmVkIGxvY2F0aW9ucyB3aXRoIHN3aXBlLXRvLXJvdGF0ZS5cbi8vXG4vLyBUaGUgc2VhcmNoIGZvcm0gaXMgdGhlIGFkZCBwYXRoOiBhIHN1Y2Nlc3NmdWwgbG9va3VwIGFwcGVuZHMgdGhlIHF1ZXJ5IHRvIGFcbi8vIHBlcnNpc3RlZCBsaXN0IGFuZCBzd2l0Y2hlcyB0byBpdDsgYSBmYWlsZWQgb25lIGxlYXZlcyB0aGUgbGlzdCB1bnRvdWNoZWRcbi8vIChsb2dpYy5qcydzIGludmFsaWRJbnB1dCgpIGhhcyBhbHJlYWR5IHJlZGRlbmVkIHRoZSBpbnB1dCkuIEEgcm93IG9mIGRvdHNcbi8vIHVuZGVyIHRoZSBsb2NhdGlvbiBuYW1lIHNob3dzIGhvdyBtYW55IGxvY2F0aW9ucyBhcmUgc2F2ZWQgYW5kIHdoaWNoIGlzXG4vLyBjdXJyZW50LiBBIGhvcml6b250YWwgc3dpcGUgYW55d2hlcmUgb24gdGhlIHNjcmVlbiByb3RhdGVzIHRocm91Z2ggdGhlbVxuLy8gKHdyYXBwaW5nIGF0IGJvdGggZW5kcyksIGFzIGRvIHRoZSBkZXNrdG9wIHByZXYvbmV4dCBhcnJvd3M7IGNsaWNraW5nIGEgZG90XG4vLyBvcGVucyBhIGNvbmZpcm1hdGlvbiB0byByZW1vdmUgdGhhdCBsb2NhdGlvbi5cbi8vXG4vLyBTdGF0ZSBwZXJzaXN0cyB0byBsb2NhbFN0b3JhZ2UgdW5kZXIgYSBgd2VhdGhlcmFwcF9gIGtleSwgbWF0Y2hpbmcgdGhlXG4vLyBjb252ZW50aW9uIHVzZWQgYWNyb3NzIHRoZSBvdGhlciByZXBvcyDigJQgbm8gSW5kZXhlZERCLCBubyBjb29raWVzLCBubyBiYWNrZW5kLFxuLy8gbm8gbmV3IGRlcGVuZGVuY2llcy4gRmV0Y2ggc3RyYXRlZ3kgaXMgbGF6eSAoZmV0Y2ggb24gYXJyaXZhbCk6IGEgc3dpcGUgbGVhdmVzXG4vLyB0aGUgcHJldmlvdXMgcmliYm9uIG9uIHNjcmVlbiB1bnRpbCB0aGUgbmV3IGZvcmVjYXN0IHJlc29sdmVzLCByZXVzaW5nIHRoZVxuLy8gc2FtZSBrZWVwLWN1cnJlbnQtcmliYm9uIGJlaGF2aW91ciBhIHNlYXJjaCBhbHJlYWR5IGhhcywgc28gYSBzd2lwZSBuZXZlclxuLy8gbGFuZHMgb24gYSBzcGlubmVyICh0aGVyZSBpcyBubyBzcGlubmVyKSBvciBhIGJsYW5rIHNjcmVlbi5cbi8vXG4vLyBFdmVyeSBsaXN0ZW5lciBoZXJlIGlzIHdpcmVkIGV4YWN0bHkgb25jZSwgZnJvbSBpbml0RmF2b3VyaXRlcygpIGF0IGJvb3RzdHJhcFxuLy8g4oCUIG5ldmVyIGZyb20gdGhlIHJlbmRlciBwYXRoIOKAlCBzbyBub3RoaW5nIG11bHRpcGxpZXMgYWNyb3NzIGZldGNoZXMuXG5cbmltcG9ydCB7IGZvcmVjYXN0TG9naWMgfSBmcm9tICcuL2xvZ2ljLmpzJztcblxuY29uc3QgS0VZID0gJ3dlYXRoZXJhcHBfc2F2ZWRMb2NhdGlvbnMnO1xuY29uc3QgREVGQVVMVF9RVUVSWSA9ICc5ODA1Mic7XG5jb25zdCBTV0lQRV9USFJFU0hPTEQgPSA1MDsgLy8gcHggb2YgaG9yaXpvbnRhbCB0cmF2ZWwgdG8gY29tbWl0IGEgcm90YXRpb25cbmNvbnN0IFNMSURFX01TID0gMjgwOyAvLyBjYXJkIHNsaWRlIGR1cmF0aW9uIOKAlCBtaXJyb3Igb2YgdGhlIENTUyBrZXlmcmFtZVxuXG4vLyBTYXZlZCBsb2NhdGlvbiBxdWVyeSBzdHJpbmdzLCBpbiBvcmRlci4gY3VycmVudEluZGV4IHBvaW50cyBhdCB0aGUgYWN0aXZlIG9uZS5cbmxldCBsb2NhdGlvbnMgPSBbXTtcbmxldCBjdXJyZW50SW5kZXggPSAwO1xuXG5sZXQgZG90Um93OyAvLyAjZG90Um93LCBjYWNoZWQgb25jZSBieSBpbml0RmF2b3VyaXRlcygpXG5sZXQgbmF2Um93OyAvLyAubmF2Um93IHdyYXBwaW5nIHRoZSBkb3RzIGFuZCB0aGUgcHJldi9uZXh0IGFycm93c1xubGV0IGNhcmQ7IC8vICN3ZWF0aGVyQ2FyZCDigJQgdGhlIHJpYmJvbityZWFkb3V0IHVuaXQgdGhhdCBzbGlkZXMgb24gcm90YXRpb25cbmxldCBzbGlkZVRpbWVvdXQgPSBudWxsO1xuXG4vLyBTd2lwZSB0cmFja2luZy5cbmxldCB0b3VjaFN0YXJ0WCA9IG51bGw7XG5sZXQgdG91Y2hTdGFydFkgPSBudWxsO1xubGV0IHN3aXBlQWN0aXZlID0gZmFsc2U7XG5cbi8vIFRoZSBzaW5nbGUgZGVza3RvcCByZW1vdmUtY29uZmlybWF0aW9uIHBvcG92ZXIsIG9yIG51bGwuIE9ubHkgb25lIGlzIG9wZW4gYXRcbi8vIGEgdGltZTsgYSBuZXcgb3BlbiBjbG9zZXMgYW55IHByaW9yIG9uZSBmaXJzdC5cbmxldCBvcGVuUG9wb3ZlciA9IG51bGw7XG5cbmZ1bmN0aW9uIGxvYWQoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmF3ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oS0VZKTtcbiAgICBpZiAocmF3KSB7XG4gICAgICBjb25zdCBwYXJzZWQgPSBKU09OLnBhcnNlKHJhdyk7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShwYXJzZWQpKSB7XG4gICAgICAgIGxvY2F0aW9ucyA9IHBhcnNlZC5maWx0ZXIoKHEpID0+IHR5cGVvZiBxID09PSAnc3RyaW5nJyAmJiBxLnRyaW0oKS5sZW5ndGgpO1xuICAgICAgfVxuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIGxvY2F0aW9ucyA9IFtdO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNhdmUoKSB7XG4gIHRyeSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oS0VZLCBKU09OLnN0cmluZ2lmeShsb2NhdGlvbnMpKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIFN0b3JhZ2UgZGlzYWJsZWQvZnVsbCDigJQgdGhlIGluLW1lbW9yeSBsaXN0IHN0aWxsIHdvcmtzIGZvciB0aGlzIHNlc3Npb24uXG4gIH1cbn1cblxuZnVuY3Rpb24gY2xlYXIobm9kZSkge1xuICB3aGlsZSAobm9kZS5maXJzdENoaWxkKSB7IG5vZGUucmVtb3ZlQ2hpbGQobm9kZS5maXJzdENoaWxkKTsgfVxufVxuXG4vLyBGZXRjaCB0aGUgYWN0aXZlIGxvY2F0aW9uLCBvciB0aGUgaGFyZCBkZWZhdWx0IHdoZW4gdGhlIGxpc3QgaXMgZW1wdHkuIExhenk6XG4vLyB0aGUgcmVuZGVyIHBhdGgga2VlcHMgdGhlIHByZXZpb3VzIHJpYmJvbiB1bnRpbCB0aGlzIHJlc29sdmVzLlxuZnVuY3Rpb24gc2hvd0N1cnJlbnQoKSB7XG4gIGlmIChsb2NhdGlvbnMubGVuZ3RoKSB7XG4gICAgZm9yZWNhc3RMb2dpYy5mdXR1cmVBUElDYWxscyhsb2NhdGlvbnNbY3VycmVudEluZGV4XSk7XG4gIH0gZWxzZSB7XG4gICAgZm9yZWNhc3RMb2dpYy5mdXR1cmVBUElDYWxscyhERUZBVUxUX1FVRVJZKTtcbiAgfVxufVxuXG4vLyBSZWRyYXcgdGhlIGRvdCByb3cuIEhpZGRlbiBhdCBhIGNvdW50IG9mIG9uZSAoYSBzaW5nbGUgbG9jYXRpb24gbmVlZHMgbm9cbi8vIGFmZm9yZGFuY2UpIGFuZCB3aGVuIGVtcHR5ICh0aGUgZGVmYXVsdCBmYWxsYmFjayBpcyBub3QgYSBzYXZlZCBsb2NhdGlvbikuXG5mdW5jdGlvbiByZW5kZXJEb3RzKCkge1xuICBpZiAoIWRvdFJvdykgeyByZXR1cm47IH1cbiAgY2xvc2VQb3BvdmVyKCk7IC8vIGEgcmVkcmF3IGRyb3BzIHRoZSBkb3QgdGhlIHBvcG92ZXIgd2FzIGFuY2hvcmVkIHRvXG4gIGNsZWFyKGRvdFJvdyk7XG5cbiAgLy8gR2F0ZSB0aGUgd2hvbGUgLm5hdlJvdyAoZG90cyArIGFycm93cykgdG9nZXRoZXIsIHNvIHRoZSBkZXNrdG9wIGFycm93cyBzaGFyZVxuICAvLyB0aGUgZG90cycgdmlzaWJpbGl0eSBydWxlIGFuZCBuZXZlciBkYW5nbGUgYmVzaWRlIGFuIGVtcHR5IHJvdy5cbiAgY29uc3QgZ2F0ZSA9IG5hdlJvdyB8fCBkb3RSb3c7XG4gIGNvbnN0IG4gPSBsb2NhdGlvbnMubGVuZ3RoO1xuICBpZiAobiA8PSAxKSB7XG4gICAgZ2F0ZS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICByZXR1cm47XG4gIH1cbiAgZ2F0ZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgIGNvbnN0IGRvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRvdC5jbGFzc05hbWUgPSAnZG90JyArIChpID09PSBjdXJyZW50SW5kZXggPyAnIGFjdGl2ZScgOiAnJyk7XG4gICAgZG90LnNldEF0dHJpYnV0ZSgncm9sZScsICdidXR0b24nKTtcbiAgICBkb3Quc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgbG9jYXRpb25zW2ldKTtcbiAgICB3aXJlRG90KGRvdCwgaSk7XG4gICAgZG90Um93LmFwcGVuZENoaWxkKGRvdCk7XG4gIH1cbn1cblxuLy8gQSBzaW5nbGUgY2xpY2sgb24gYSBkb3Qgb3BlbnMgdGhlIGRlbGV0ZSBjb25maXJtYXRpb24gZm9yIHRoYXQgbG9jYXRpb246XG4vLyB0aGUgbmF0aXZlIGNvbmZpcm0gb24gdG91Y2gsIHRoZSBhbmNob3JlZCBpbi1wYWdlIHBvcG92ZXIgb24gZGVza3RvcC9tb3VzZVxuLy8gKGNvbmZpcm1SZW1vdmUgYnJhbmNoZXMgb24gcG9pbnRlclR5cGUpLiBUYXAtdG8tc2VsZWN0IGlzIGludGVudGlvbmFsbHlcbi8vIGRyb3BwZWQg4oCUIHJvdGF0ZSgpLCBkcml2ZW4gYnkgdGhlIHN3aXBlIGdlc3R1cmUgYW5kIHRoZSBkZXNrdG9wIHByZXYvbmV4dFxuLy8gYXJyb3dzLCBpcyB0aGUgb25seSB3YXkgdG8gY2hhbmdlIHRoZSBhY3RpdmUgbG9jYXRpb24uIFRoZSBjbGljayBldmVudCBpcyBhXG4vLyBQb2ludGVyRXZlbnQsIHNvIGl0cyBwb2ludGVyVHlwZSBwaWNrcyB0aGUgdG91Y2ggdnMgZGVza3RvcCBicmFuY2ggZGlyZWN0bHkuXG5mdW5jdGlvbiB3aXJlRG90KGRvdCwgaSkge1xuICBkb3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNvbmZpcm1SZW1vdmUoaSwgZG90LCBlLnBvaW50ZXJUeXBlIHx8ICdtb3VzZScpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY29uZmlybVJlbW92ZShpLCBkb3QsIHBvaW50ZXJUeXBlKSB7XG4gIGlmIChpIDwgMCB8fCBpID49IGxvY2F0aW9ucy5sZW5ndGgpIHsgcmV0dXJuOyB9XG4gIC8vIERlc2t0b3AgKG1vdXNlL3BlbikgZ2V0cyB0aGUgYW5jaG9yZWQgaW4tcGFnZSBwb3BvdmVyOyB0b3VjaCBrZWVwcyB0aGVcbiAgLy8gbmF0aXZlIGNvbmZpcm0gdW50b3VjaGVkLlxuICBpZiAocG9pbnRlclR5cGUgJiYgcG9pbnRlclR5cGUgIT09ICd0b3VjaCcgJiYgZG90KSB7XG4gICAgb3BlblJlbW92ZVBvcG92ZXIoaSwgZG90KTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHdpbmRvdy5jb25maXJtKCdSZW1vdmUgJyArIGxvY2F0aW9uc1tpXSArICc/JykpIHtcbiAgICByZW1vdmVMb2NhdGlvbihpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBvblBvcG92ZXJLZXlkb3duKGUpIHtcbiAgaWYgKGUua2V5ID09PSAnRXNjYXBlJykge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjbG9zZVBvcG92ZXIoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBvbk91dHNpZGVQb2ludGVyKGUpIHtcbiAgaWYgKG9wZW5Qb3BvdmVyICYmICFvcGVuUG9wb3Zlci5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICBjbG9zZVBvcG92ZXIoKTtcbiAgfVxufVxuXG4vLyBUZWFyIGRvd24gdGhlIHNpbmdsZSBvcGVuIHBvcG92ZXIgYW5kIGl0cyBkb2N1bWVudC1sZXZlbCBsaXN0ZW5lcnMuIFNhZmUgdG9cbi8vIGNhbGwgd2hlbiBub3RoaW5nIGlzIG9wZW4uXG5mdW5jdGlvbiBjbG9zZVBvcG92ZXIoKSB7XG4gIGlmICghb3BlblBvcG92ZXIpIHsgcmV0dXJuOyB9XG4gIG9wZW5Qb3BvdmVyLnJlbW92ZSgpO1xuICBvcGVuUG9wb3ZlciA9IG51bGw7XG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvblBvcG92ZXJLZXlkb3duLCB0cnVlKTtcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCBvbk91dHNpZGVQb2ludGVyLCB0cnVlKTtcbn1cblxuLy8gQSBzbWFsbCBjb25maXJtYXRpb24gcG9wb3ZlciBhbmNob3JlZCBhYm92ZSB0aGUgY2xpY2tlZCBkb3QsIGluc2lkZVxuLy8gI2RvdFJvdy4gRGVsZXRlIHJlbW92ZXMgdGhlIGxvY2F0aW9uOyBDYW5jZWwsIEVzY2FwZSwgb3IgYW4gb3V0c2lkZSBjbGlja1xuLy8gZGlzbWlzc2VzIHdpdGhvdXQgY2hhbmdlcy4gT25seSBvbmUgaXMgZXZlciBvcGVuIChvcGVuUmVtb3ZlUG9wb3ZlciBjbG9zZXMgYW55XG4vLyBwcmlvciBvbmUgZmlyc3QpLlxuZnVuY3Rpb24gb3BlblJlbW92ZVBvcG92ZXIoaSwgZG90KSB7XG4gIGNsb3NlUG9wb3ZlcigpO1xuXG4gIGNvbnN0IHBvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwb3AuY2xhc3NOYW1lID0gJ3JlbW92ZVBvcG92ZXInO1xuICBwb3Auc2V0QXR0cmlidXRlKCdyb2xlJywgJ2RpYWxvZycpO1xuICBwb3Auc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgJ1JlbW92ZSAnICsgbG9jYXRpb25zW2ldKTtcblxuICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5hbWUuY2xhc3NOYW1lID0gJ3JlbW92ZVBvcG92ZXItbmFtZSc7XG4gIG5hbWUudGV4dENvbnRlbnQgPSBsb2NhdGlvbnNbaV07XG5cbiAgY29uc3QgYWN0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBhY3Rpb25zLmNsYXNzTmFtZSA9ICdyZW1vdmVQb3BvdmVyLWFjdGlvbnMnO1xuXG4gIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjYW5jZWxCdG4udHlwZSA9ICdidXR0b24nO1xuICBjYW5jZWxCdG4uY2xhc3NOYW1lID0gJ3JlbW92ZVBvcG92ZXItY2FuY2VsJztcbiAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG4gIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlUG9wb3Zlcik7XG5cbiAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGRlbGV0ZUJ0bi50eXBlID0gJ2J1dHRvbic7XG4gIGRlbGV0ZUJ0bi5jbGFzc05hbWUgPSAncmVtb3ZlUG9wb3Zlci1kZWxldGUnO1xuICBkZWxldGVCdG4udGV4dENvbnRlbnQgPSAnRGVsZXRlJztcbiAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGlkeCA9IGk7XG4gICAgY2xvc2VQb3BvdmVyKCk7XG4gICAgcmVtb3ZlTG9jYXRpb24oaWR4KTtcbiAgfSk7XG5cbiAgYWN0aW9ucy5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xuICBhY3Rpb25zLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG4gIHBvcC5hcHBlbmRDaGlsZChuYW1lKTtcbiAgcG9wLmFwcGVuZENoaWxkKGFjdGlvbnMpO1xuXG4gIGRvdFJvdy5hcHBlbmRDaGlsZChwb3ApO1xuICBvcGVuUG9wb3ZlciA9IHBvcDtcblxuICAvLyBBbmNob3IgaG9yaXpvbnRhbGx5IG92ZXIgdGhlIHRyaWdnZXJpbmcgZG90J3MgY2VudHJlIChvZmZzZXRMZWZ0IGlzIHJlbGF0aXZlXG4gIC8vIHRvICNkb3RSb3csIHdoaWNoIGlzIHRoZSBvZmZzZXQgcGFyZW50IOKAlCBzZWUgaXRzIHBvc2l0aW9uOiByZWxhdGl2ZSBydWxlKS5cbiAgcG9wLnN0eWxlLmxlZnQgPSAoZG90Lm9mZnNldExlZnQgKyBkb3Qub2Zmc2V0V2lkdGggLyAyKSArICdweCc7XG5cbiAgLy8gVGhlIGNsaWNrIChhbmQgaXRzIHBvaW50ZXJkb3duKSB0aGF0IG9wZW5lZCB0aGlzIHBvcG92ZXIgaGFzIGFscmVhZHkgZmlyZWQsXG4gIC8vIHNvIGEgY2FwdHVyZSBsaXN0ZW5lciBmb3IgdGhlIG5leHQgcG9pbnRlcmRvd24gY2xvc2VzIHRoZSBwb3BvdmVyIG9uIGFuXG4gIC8vIG91dHNpZGUgY2xpY2sgd2l0aG91dCBpbW1lZGlhdGVseSBzd2FsbG93aW5nIGl0cyBvd24gb3BlbmluZyBldmVudC5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uUG9wb3ZlcktleWRvd24sIHRydWUpO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIG9uT3V0c2lkZVBvaW50ZXIsIHRydWUpO1xufVxuXG4vLyBTbGlkZSB0aGUgcmliYm9uK3JlYWRvdXQgY2FyZCBpbiB0aGUgc3dpcGUgZGlyZWN0aW9uIG9uIGEgY29tbWl0dGVkIHJvdGF0aW9uLlxuLy8gTW9iaWxlIG9ubHkg4oCUIHRoZSBkZXNrdG9wIHByZXYvbmV4dCBhcnJvd3MgdXBkYXRlIGluc3RhbnRseSwgc28gdGhlIGNsYXNzIGlzXG4vLyBhZGRlZCBvbmx5IHdoZW4gdGhlIOKJpDQ4MHB4IGJyZWFrcG9pbnQgaXMgYWN0aXZlLiBUaGUga2V5ZnJhbWUgZmFkZXMgdGhlIGNhcmRcbi8vIHRvIG5vdGhpbmcgYXQgaXRzIG1pZHBvaW50IChzZWUgI3dlYXRoZXJDYXJkLnNsaWRlLSogaW4gc3R5bGUuY3NzKSwgd2hpY2hcbi8vIG1hc2tzIHRoZSBmb3JlY2FzdCBzd2FwOiBzaG93Q3VycmVudCgpJ3MgZmV0Y2ggcmVzb2x2ZXMgYW5kIHJlbmRlclJpYmJvbigpXG4vLyByZWJ1aWxkcyBpbnRvIHRoaXMgc2FtZSBjYXJkLCBzbyB0aGUgbmV3IGN1cnZlIHNsaWRlcyBiYWNrIGluIHJhdGhlciB0aGFuXG4vLyBzbmFwcGluZy4gRGlyZWN0aW9uLWF3YXJlOiBvdXRnb2luZyBjb250ZW50IGxlYXZlcyB0b3dhcmQgdGhlIHN3aXBlLCBpbmNvbWluZ1xuLy8gZW50ZXJzIGZyb20gdGhlIG9wcG9zaXRlIGVkZ2UuXG5mdW5jdGlvbiBwbGF5U2xpZGUoZGlyKSB7XG4gIGlmICghY2FyZCkgeyByZXR1cm47IH1cbiAgaWYgKCF3aW5kb3cubWF0Y2hNZWRpYSB8fCAhd2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDQ4MHB4KScpLm1hdGNoZXMpIHtcbiAgICByZXR1cm47IC8vIGRlc2t0b3Agcm90YXRlcyB2aWEgdGhlIGFycm93cywgd2l0aG91dCB0aGUgc2xpZGVcbiAgfVxuICBjYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ3NsaWRlLW5leHQnLCAnc2xpZGUtcHJldicpO1xuICB2b2lkIGNhcmQub2Zmc2V0V2lkdGg7IC8vIHJlZmxvdyBzbyBhIHJhcGlkIHNlY29uZCBzd2lwZSByZXN0YXJ0cyB0aGUgYW5pbWF0aW9uXG4gIGNhcmQuY2xhc3NMaXN0LmFkZChkaXIgPCAwID8gJ3NsaWRlLXByZXYnIDogJ3NsaWRlLW5leHQnKTtcblxuICAvLyBvbkNhcmRBbmltRW5kIHN0cmlwcyB0aGUgY2xhc3Mgd2hlbiB0aGUga2V5ZnJhbWUgZmluaXNoZXM7IHRoaXMgaXMgdGhlXG4gIC8vIGZhbGxiYWNrIGZvciB0aGUgcmVkdWNlZC1tb3Rpb24gcGF0aCwgd2hlcmUgdGhlIGFuaW1hdGlvbiBpcyBzdXBwcmVzc2VkIGFuZFxuICAvLyBhbmltYXRpb25lbmQgbmV2ZXIgZmlyZXMuXG4gIGlmIChzbGlkZVRpbWVvdXQpIHsgY2xlYXJUaW1lb3V0KHNsaWRlVGltZW91dCk7IH1cbiAgc2xpZGVUaW1lb3V0ID0gc2V0VGltZW91dChjbGVhclNsaWRlLCBTTElERV9NUyArIDgwKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJTbGlkZSgpIHtcbiAgaWYgKHNsaWRlVGltZW91dCkgeyBjbGVhclRpbWVvdXQoc2xpZGVUaW1lb3V0KTsgc2xpZGVUaW1lb3V0ID0gbnVsbDsgfVxuICBpZiAoY2FyZCkgeyBjYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ3NsaWRlLW5leHQnLCAnc2xpZGUtcHJldicpOyB9XG59XG5cbmZ1bmN0aW9uIG9uQ2FyZEFuaW1FbmQoZSkge1xuICBpZiAoZS50YXJnZXQgIT09IGNhcmQpIHsgcmV0dXJuOyB9IC8vIGlnbm9yZSBhbnkgYnViYmxlZCBkZXNjZW5kYW50IGFuaW1hdGlvblxuICBjbGVhclNsaWRlKCk7XG59XG5cbi8vIFJvdGF0ZSB0aHJvdWdoIHRoZSBzYXZlZCBsaXN0IHdpdGggd3JhcC4gTm8tb3AgYmVsb3cgdHdvIGxvY2F0aW9ucy4gVGhlIHNsaWRlXG4vLyBjbGFzcyBnb2VzIG9uIGJlZm9yZSB0aGUgcmVkcmF3L2ZldGNoIHNvIHRoZSBvdXRnb2luZyBjb250ZW50IGlzIGFscmVhZHlcbi8vIG1vdmluZyBhcyB0aGUgbmV3IGZvcmVjYXN0IGlzIHJlcXVlc3RlZCAocGxheVNsaWRlIGlzIGEgbm8tb3Agb2ZmIG1vYmlsZSkuXG5mdW5jdGlvbiByb3RhdGUoZGlyKSB7XG4gIGNvbnN0IG4gPSBsb2NhdGlvbnMubGVuZ3RoO1xuICBpZiAobiA8PSAxKSB7IHJldHVybjsgfVxuICBjdXJyZW50SW5kZXggPSAoY3VycmVudEluZGV4ICsgZGlyICsgbikgJSBuO1xuICBwbGF5U2xpZGUoZGlyKTtcbiAgcmVuZGVyRG90cygpO1xuICBzaG93Q3VycmVudCgpO1xufVxuXG4vLyBSZW1vdmUgYSBsb2NhdGlvbiwga2VlcGluZyBhIGNvaGVyZW50IGFjdGl2ZSBzZWxlY3Rpb246IHJlbW92aW5nIHRoZSBhY3RpdmVcbi8vIG9uZSBtb3ZlcyB0byBhIG5laWdoYm91ciByYXRoZXIgdGhhbiBsZWF2aW5nIGFuIGVtcHR5IHZpZXc7IGVtcHR5aW5nIHRoZSBsaXN0XG4vLyBmYWxscyBiYWNrIHRvIHRoZSBkZWZhdWx0LlxuZnVuY3Rpb24gcmVtb3ZlTG9jYXRpb24oaSkge1xuICBpZiAoaSA8IDAgfHwgaSA+PSBsb2NhdGlvbnMubGVuZ3RoKSB7IHJldHVybjsgfVxuICBjb25zdCB3YXNBY3RpdmUgPSAoaSA9PT0gY3VycmVudEluZGV4KTtcblxuICBsb2NhdGlvbnMuc3BsaWNlKGksIDEpO1xuICBzYXZlKCk7XG5cbiAgaWYgKGxvY2F0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICBjdXJyZW50SW5kZXggPSAwO1xuICAgIHJlbmRlckRvdHMoKTtcbiAgICBzaG93Q3VycmVudCgpOyAvLyBmYWxscyBiYWNrIHRvIERFRkFVTFRfUVVFUllcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaSA8IGN1cnJlbnRJbmRleCkge1xuICAgIGN1cnJlbnRJbmRleC0tO1xuICB9IGVsc2UgaWYgKGkgPT09IGN1cnJlbnRJbmRleCAmJiBjdXJyZW50SW5kZXggPj0gbG9jYXRpb25zLmxlbmd0aCkge1xuICAgIGN1cnJlbnRJbmRleCA9IGxvY2F0aW9ucy5sZW5ndGggLSAxO1xuICB9XG5cbiAgcmVuZGVyRG90cygpO1xuICBpZiAod2FzQWN0aXZlKSB7IHNob3dDdXJyZW50KCk7IH1cbn1cblxuZnVuY3Rpb24gb25Ub3VjaFN0YXJ0KGUpIHtcbiAgaWYgKGUudG91Y2hlcy5sZW5ndGggIT09IDEpIHsgc3dpcGVBY3RpdmUgPSBmYWxzZTsgcmV0dXJuOyB9XG4gIC8vIExlYXZlIHRoZSBzZWFyY2ggZmllbGQncyBvd24gdG91Y2ggaGFuZGxpbmcgKGN1cnNvciBwbGFjZW1lbnQpIGFsb25lLlxuICBpZiAoZS50YXJnZXQgJiYgZS50YXJnZXQuY2xvc2VzdCAmJiBlLnRhcmdldC5jbG9zZXN0KCcjc2VhcmNoRm9ybScpKSB7XG4gICAgc3dpcGVBY3RpdmUgPSBmYWxzZTtcbiAgICByZXR1cm47XG4gIH1cbiAgdG91Y2hTdGFydFggPSBlLnRvdWNoZXNbMF0uY2xpZW50WDtcbiAgdG91Y2hTdGFydFkgPSBlLnRvdWNoZXNbMF0uY2xpZW50WTtcbiAgc3dpcGVBY3RpdmUgPSB0cnVlO1xufVxuXG5mdW5jdGlvbiBvblRvdWNoRW5kKGUpIHtcbiAgaWYgKCFzd2lwZUFjdGl2ZSkgeyByZXR1cm47IH1cbiAgc3dpcGVBY3RpdmUgPSBmYWxzZTtcblxuICBjb25zdCB0ID0gZS5jaGFuZ2VkVG91Y2hlcyAmJiBlLmNoYW5nZWRUb3VjaGVzWzBdO1xuICBpZiAoIXQpIHsgcmV0dXJuOyB9XG5cbiAgY29uc3QgZHggPSB0LmNsaWVudFggLSB0b3VjaFN0YXJ0WDtcbiAgY29uc3QgZHkgPSB0LmNsaWVudFkgLSB0b3VjaFN0YXJ0WTtcblxuICAvLyBDb21taXQgb25seSBvbiBhIGRlY2lzaXZlbHkgaG9yaXpvbnRhbCBnZXN0dXJlLCBzbyBhIHZlcnRpY2FsIHBhZ2Ugc2Nyb2xsXG4gIC8vICh8ZHl8ID49IHxkeHwpIGlzIG5ldmVyIGhpamFja2VkLlxuICBpZiAoTWF0aC5hYnMoZHgpID4gU1dJUEVfVEhSRVNIT0xEICYmIE1hdGguYWJzKGR4KSA+IE1hdGguYWJzKGR5KSkge1xuICAgIHJvdGF0ZShkeCA8IDAgPyAxIDogLTEpOyAvLyBzd2lwZSBsZWZ0IC0+IG5leHQsIHN3aXBlIHJpZ2h0IC0+IHByZXZpb3VzXG4gIH1cbn1cblxuZnVuY3Rpb24gd2lyZUdlc3R1cmVzKCkge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgb25Ub3VjaFN0YXJ0LCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgb25Ub3VjaEVuZCwgeyBwYXNzaXZlOiB0cnVlIH0pO1xufVxuXG4vLyBEZXNrdG9wIHByZXYvbmV4dCBhcnJvd3MgZHJpdmUgdGhlIHNhbWUgcm90YXRlKCkgdGhlIHN3aXBlIGdlc3R1cmUgZG9lcywgc29cbi8vIGJvdGggcGF0aHMgc2hhcmUgb25lIGNvdW50ZXIuIFdpcmVkIG9uY2UgZnJvbSBpbml0RmF2b3VyaXRlcygpLlxuZnVuY3Rpb24gd2lyZUFycm93cygpIHtcbiAgY29uc3QgcHJldiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZQcmV2Jyk7XG4gIGNvbnN0IG5leHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2TmV4dCcpO1xuICBpZiAocHJldikgeyBwcmV2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcm90YXRlKC0xKSk7IH1cbiAgaWYgKG5leHQpIHsgbmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHJvdGF0ZSgxKSk7IH1cbn1cblxuLy8gQXBwZW5kIGEgc3VjY2Vzc2Z1bGx5IGxvb2tlZC11cCBsb2NhdGlvbiBhbmQgc3dpdGNoIHRvIGl0LiBDYWxsZWQgZnJvbSB0aGVcbi8vIHNlYXJjaCBzdWJtaXQgaGFuZGxlciBBRlRFUiB0aGUgZmV0Y2ggcmVzb2x2ZXMsIHNvIHRoZSBmb3JlY2FzdCBpcyBhbHJlYWR5XG4vLyByZW5kZXJlZCDigJQgdGhpcyBvbmx5IHVwZGF0ZXMgdGhlIHNhdmVkIGxpc3QgYW5kIHRoZSBkb3RzLCBuZXZlciByZS1mZXRjaGVzLlxuLy8gQSBkdXBsaWNhdGUgcXVlcnkgc3dpdGNoZXMgdG8gdGhlIGV4aXN0aW5nIGVudHJ5IGluc3RlYWQgb2YgYWRkaW5nIGEgc2Vjb25kLlxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2F0aW9uKHF1ZXJ5KSB7XG4gIGNvbnN0IHEgPSBTdHJpbmcocXVlcnkpLnRyaW0oKTtcbiAgaWYgKCFxKSB7IHJldHVybjsgfVxuXG4gIGNvbnN0IGV4aXN0aW5nID0gbG9jYXRpb25zLmluZGV4T2YocSk7XG4gIGlmIChleGlzdGluZyAhPT0gLTEpIHtcbiAgICBjdXJyZW50SW5kZXggPSBleGlzdGluZztcbiAgfSBlbHNlIHtcbiAgICBsb2NhdGlvbnMucHVzaChxKTtcbiAgICBjdXJyZW50SW5kZXggPSBsb2NhdGlvbnMubGVuZ3RoIC0gMTtcbiAgICBzYXZlKCk7XG4gIH1cbiAgcmVuZGVyRG90cygpO1xufVxuXG4vLyBCb290c3RyYXA6IGxvYWQgdGhlIHNhdmVkIGxpc3QsIHdpcmUgdGhlIHN3aXBlIGdlc3R1cmVzIG9uY2UsIGRyYXcgdGhlIGRvdHMsXG4vLyBhbmQgZmlyZSB0aGUgc2luZ2xlIGluaXRpYWwgZmV0Y2ggKHRoZSBmaXJzdCBzYXZlZCBsb2NhdGlvbiwgb3IgdGhlIGRlZmF1bHRcbi8vIHdoZW4gbm9uZSBhcmUgc2F2ZWQpLiBpbmRleC5qcyBjYWxscyB0aGlzIG9uY2UsIGFmdGVyIHRoZSBET00gaXMgYXBwZW5kZWQuXG5leHBvcnQgZnVuY3Rpb24gaW5pdEZhdm91cml0ZXMoKSB7XG4gIGxvYWQoKTtcbiAgZG90Um93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RvdFJvdycpO1xuICBuYXZSb3cgPSBkb3RSb3cgPyBkb3RSb3cucGFyZW50RWxlbWVudCA6IG51bGw7XG4gIGNhcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VhdGhlckNhcmQnKTtcbiAgaWYgKGNhcmQpIHsgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBvbkNhcmRBbmltRW5kKTsgfVxuICB3aXJlR2VzdHVyZXMoKTtcbiAgd2lyZUFycm93cygpO1xuICBjdXJyZW50SW5kZXggPSAwO1xuICByZW5kZXJEb3RzKCk7XG4gIHNob3dDdXJyZW50KCk7XG59XG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IHJlbmRlclJpYmJvbiwgY3VycmVudEhvdXJJbmRleCB9IGZyb20gJy4vcmliYm9uLmpzJztcbmltcG9ydCB7IGZvcmVjYXN0TG9naWMgfSBmcm9tICcuL2xvZ2ljLmpzJztcbmltcG9ydCB7IGFkZExvY2F0aW9uIH0gZnJvbSAnLi9mYXZvdXJpdGVzLmpzJztcbmltcG9ydCB7IHNldFdlYXRoZXJCZyB9IGZyb20gJy4vc2t5LmpzJztcblxuLy8gR3VhcmQgc28gd2lyZUV2ZW50cygpIG9ubHkgZXZlciByZWdpc3RlcnMgb25lIHNldCBvZiBsaXN0ZW5lcnMuIFRoZSBvbGRcbi8vIGNoYW5nZVdlYXRoZXJJbmZvKCkgcmUtcmVnaXN0ZXJlZCBvbiBldmVyeSBmZXRjaCwgZG91YmxpbmcgdGhlIGhhbmRsZXIgY291bnRcbi8vIHBlciBzZWFyY2g7IHRoZSByZW5kZXIgcGF0aCAocmVuZGVyRm9yZWNhc3QpIGFuZCB0aGUgd2lyaW5nIHBhdGggKHdpcmVFdmVudHMpXG4vLyBhcmUgc3BsaXQgcHJlY2lzZWx5IHNvIHRoYXQgY2FuIG5ldmVyIGhhcHBlbiBhZ2Fpbi5cbmxldCBldmVudHNXaXJlZCA9IGZhbHNlO1xuXG4vLyBEZWJvdW5jZSB3aW5kb3cgZm9yIHRoZSBjaXR5LXN1Z2dlc3Rpb24gbG9va3VwIOKAlCBsb25nIGVub3VnaCB0aGF0IGEgcnVuIG9mXG4vLyBrZXlzdHJva2VzIGZpcmVzIG9uZSByZXF1ZXN0LCBzaG9ydCBlbm91Z2ggdG8gZmVlbCBsaXZlLlxuY29uc3QgU1VHR0VTVF9ERUJPVU5DRV9NUyA9IDMwMDtcblxuLy8gQy9GIGRpc3BsYXkgdW5pdCwgcGVyc2lzdGVkIHVuZGVyIHRoZSBzaGFyZWQgd2VhdGhlcmFwcF8gbG9jYWxTdG9yYWdlIHByZWZpeC5cbi8vIFRoaXMgaXMgZGlzcGxheS1vbmx5OiByZW5kZXJSaWJib24oKSBzdGlsbCByZWNlaXZlcyByYXcgQ2Vsc2l1cywgc28gdGhlIGN1cnZlXG4vLyBjb2xvdXJzICh0ZW1wQ29sb3VyKSBhbmQgdGhlIHktc2NhbGUgbmV2ZXIgc2hpZnQgd2hlbiB0aGUgcmVhZG91dCB1bml0IGZsaXBzLlxuY29uc3QgVU5JVF9LRVkgPSAnd2VhdGhlcmFwcF91bml0JztcbmxldCBjdXJyZW50VW5pdCA9IGxvYWRVbml0KCk7XG5cbi8vIFRoZSBsYXN0IHJlbmRlcmVkIFwibm93XCIsIGtlcHQgaW4gQ2Vsc2l1cyBzbyB0aGUgdW5pdCB0b2dnbGUgY2FuIHJlLXJlbmRlciB0aGVcbi8vIHRlbXBlcmF0dXJlIHJlYWRvdXRzIHdpdGhvdXQgd2FpdGluZyBmb3IgYW5vdGhlciBmZXRjaC5cbmxldCBsYXN0Tm93ID0gbnVsbDtcblxuLy8gQ2FjaGVkIERPTSByZWZlcmVuY2VzLCBwb3B1bGF0ZWQgb25jZSBieSBjYWNoZURvbSgpIGFmdGVyIGluZGV4LmpzIGhhcyBidWlsdFxuLy8gYW5kIGFwcGVuZGVkIHRoZSBET00uXG5sZXQgc2VhcmNoRm9ybSwgc2VhcmNoSW5wdXQsIHN1Z2dlc3Rpb25zLCBsb2NhdGlvbk5hbWUsIHVuaXRTd2l0Y2gsIGN1cnJlbnRUZW1wLFxuICBjdXJyZW50Q29uZGl0aW9uLCBmZWVsc1ZhbCwgaHVtaWRpdHlWYWwsIHJhaW5WYWwsIHdpbmRWYWw7XG5cbi8vIEF1dG9jb21wbGV0ZSBzdGF0ZS4gY3VycmVudFN1Z2dlc3Rpb25zIGhvbGRzIHRoZSByZXN1bHRzIGJhY2tpbmcgdGhlIHZpc2libGVcbi8vIGRyb3Bkb3duOyBzZWxlY3RlZEluZGV4IGlzIHRoZSBrZXlib2FyZC1oaWdobGlnaHRlZCByb3cgKC0xID0gbm9uZSkuIHJlcXVlc3RTZXFcbi8vIGRpc2NhcmRzIHN0YWxlIGFzeW5jIHJlc3VsdHMg4oCUIG9ubHkgdGhlIGxhdGVzdCBsb29rdXAgcmVuZGVycyDigJQgYW5kIGlzIGJ1bXBlZFxuLy8gb24gY2xvc2Ugc28gYW4gaW4tZmxpZ2h0IHJlcXVlc3QgY2FuJ3QgcmVvcGVuIHRoZSBkcm9wZG93biBhZnRlciBzZWxlY3Rpb24uXG5sZXQgY3VycmVudFN1Z2dlc3Rpb25zID0gW107XG5sZXQgc2VsZWN0ZWRJbmRleCA9IC0xO1xubGV0IHN1Z2dlc3REZWJvdW5jZSA9IG51bGw7XG5sZXQgcmVxdWVzdFNlcSA9IDA7XG5cbmZ1bmN0aW9uIGNhY2hlRG9tKCkge1xuICBpZiAobG9jYXRpb25OYW1lKSB7IHJldHVybjsgfSAvLyBhbHJlYWR5IGNhY2hlZFxuXG4gIHNlYXJjaEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoRm9ybScpO1xuICBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hJbnB1dCcpO1xuICBzdWdnZXN0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWdnZXN0aW9ucycpO1xuICBsb2NhdGlvbk5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9jYXRpb25OYW1lJyk7XG4gIHVuaXRTd2l0Y2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW5pdFN3aXRjaCcpO1xuICBjdXJyZW50VGVtcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50VGVtcCcpO1xuICBjdXJyZW50Q29uZGl0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnRDb25kaXRpb24nKTtcbiAgZmVlbHNWYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmVlbHNWYWwnKTtcbiAgaHVtaWRpdHlWYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHVtaWRpdHlWYWwnKTtcbiAgcmFpblZhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYWluVmFsJyk7XG4gIHdpbmRWYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2luZFZhbCcpO1xufVxuXG4vLyBQdXJlIHJlbmRlciBwYXRoLiBmdWxmaWxsUHJvbWlzZSgpIGluIGxvZ2ljLmpzIGNhbGxzIHRoaXMgb24gZXZlcnkgcmVzb2x2ZWRcbi8vIHJlc3BvbnNlOyBpdCByZWdpc3RlcnMgTk8gbGlzdGVuZXJzLCBzbyBpdCBpcyBzYWZlIHRvIGNhbGwgcmVwZWF0ZWRseS4gRHJhd3Ncbi8vIHRoZSByaWJib24gYW5kIGZpbGxzIHRoZSByZWFkb3V0IGZyb20gdGhlIHNhbWUgXCJub3dcIiBpbmRleCwgc28gdGhlIG1hcmtlciBvblxuLy8gdGhlIGN1cnZlIGFuZCB0aGUgc3RhdCByb3cgY2FuIG5ldmVyIGRpc2FncmVlIGFib3V0IHRoZSBjdXJyZW50IGhvdXIuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyRm9yZWNhc3QoZm9yZWNhc3QpIHtcbiAgY2FjaGVEb20oKTtcblxuICByZW5kZXJSaWJib24oZm9yZWNhc3QpO1xuXG4gIGNvbnN0IGkgPSBjdXJyZW50SG91ckluZGV4KGZvcmVjYXN0KTtcbiAgY29uc3Qgbm93ID0gZm9yZWNhc3QuaG91cnNbaV07XG4gIGlmICghbm93KSB7IHJldHVybjsgfVxuXG4gIGxhc3ROb3cgPSBub3c7XG4gIGxvY2F0aW9uTmFtZS50ZXh0Q29udGVudCA9IGZvcmVjYXN0LmxvY2F0aW9uLm5hbWU7XG4gIGN1cnJlbnRDb25kaXRpb24udGV4dENvbnRlbnQgPSBub3cuY29uZGl0aW9uO1xuXG4gIC8vIFJlcGFpbnQgdGhlIGZ1bGwtdmlld3BvcnQgYmFja2dyb3VuZCB0byBtYXRjaCB0aGUgY3VycmVudCBjb25kaXRpb24uIE9mZiB0aGVcbiAgLy8gY3VydmUncyBkYXRhIHBhdGgg4oCUIGl0IG9ubHkgc3dhcHMgYSBjbGFzcywgYW5kIG5vLW9wcyB3aGVuIHRoZSBjYXRlZ29yeSBpc1xuICAvLyB1bmNoYW5nZWQsIHNvIHBhZ2luZyBsb2NhdGlvbnMgb3IgZmxpcHBpbmcgdGhlIHVuaXQgZG9lc24ndCByZXN0YXJ0IGl0LlxuICBzZXRXZWF0aGVyQmcobm93LmNvbmRpdGlvbik7XG5cbiAgaHVtaWRpdHlWYWwudGV4dENvbnRlbnQgPSBub3cuaHVtaWRpdHkgKyAnJSc7XG4gIHJhaW5WYWwudGV4dENvbnRlbnQgPSBub3cucmFpbiArICclJztcbiAgd2luZFZhbC50ZXh0Q29udGVudCA9IE1hdGgucm91bmQobm93LndpbmQpICsgJyBrbS9oJztcblxuICAvLyBUZW1wZXJhdHVyZSByZWFkb3V0cyBhbmQgdGhlIGFjdGl2ZSBidXR0b24gc3RhdGUgYm90aCBjb21lIGZyb20gcmVuZGVyVGVtcHMsXG4gIC8vIHNvIGEgZmV0Y2ggYW5kIGEgdW5pdCB0b2dnbGUgY2FuIG5ldmVyIGZvcm1hdCB0aGUgdHdvIHRlbXBlcmF0dXJlcyBkaWZmZXJlbnRseS5cbiAgcmVuZGVyVGVtcHMoKTtcbn1cblxuLy8gUmVhZCB0aGUgcGVyc2lzdGVkIHVuaXQsIGRlZmF1bHRpbmcgdG8gQ2Vsc2l1cy4gR3VhcmRlZCBzbyBhIGxvY2tlZC1kb3duXG4vLyBsb2NhbFN0b3JhZ2UgKHByaXZhdGUgbW9kZSwgZGlzYWJsZWQgc3RvcmFnZSkgZmFsbHMgYmFjayByYXRoZXIgdGhhbiB0aHJvd2luZy5cbmZ1bmN0aW9uIGxvYWRVbml0KCkge1xuICB0cnkge1xuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShVTklUX0tFWSkgPT09ICdGJyA/ICdGJyA6ICdDJztcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiAnQyc7XG4gIH1cbn1cblxuLy8gRm9ybWF0IGEgQ2Vsc2l1cyBzY2FsYXIgaW4gdGhlIGFjdGl2ZSBkaXNwbGF5IHVuaXQg4oCUIHJvdW5kZWQsIHdpdGggdGhlIG1hdGNoaW5nXG4vLyDCsEMvwrBGIHN1ZmZpeC4gQ29udmVyc2lvbiBpcyBkaXNwbGF5LW9ubHk7IGNhbGxlcnMgYWx3YXlzIHBhc3MgcmF3IENlbHNpdXMuXG5mdW5jdGlvbiBmb3JtYXRUZW1wKGNlbHNpdXMpIHtcbiAgY29uc3QgdmFsdWUgPSBjdXJyZW50VW5pdCA9PT0gJ0YnID8gY2Vsc2l1cyAqIDkgLyA1ICsgMzIgOiBjZWxzaXVzO1xuICByZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSkgKyAnwrAnICsgY3VycmVudFVuaXQ7XG59XG5cbi8vIFJlLXJlbmRlciB0aGUgdHdvIHRlbXBlcmF0dXJlIHJlYWRvdXRzIGZyb20gdGhlIGNhY2hlZCBDZWxzaXVzIFwibm93XCIgYW5kIHN5bmNcbi8vIHRoZSBhY3RpdmUgc3RhdGUgb24gdGhlIEMvRiBidXR0b25zLiBDYWxsZWQgb24gZXZlcnkgZmV0Y2ggYW5kIGV2ZXJ5IHRvZ2dsZS5cbmZ1bmN0aW9uIHJlbmRlclRlbXBzKCkge1xuICBpZiAodW5pdFN3aXRjaCkge1xuICAgIGNvbnN0IG9wdHMgPSB1bml0U3dpdGNoLnF1ZXJ5U2VsZWN0b3JBbGwoJy51bml0T3B0Jyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBvcHRzW2ldLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScsIG9wdHNbaV0uZGF0YXNldC51bml0ID09PSBjdXJyZW50VW5pdCk7XG4gICAgfVxuICB9XG4gIGlmICghbGFzdE5vdykgeyByZXR1cm47IH1cbiAgY3VycmVudFRlbXAudGV4dENvbnRlbnQgPSBmb3JtYXRUZW1wKGxhc3ROb3cudGVtcCk7XG4gIGZlZWxzVmFsLnRleHRDb250ZW50ID0gZm9ybWF0VGVtcChsYXN0Tm93LmZlZWxzTGlrZSk7XG59XG5cbi8vIFN3aXRjaCB0aGUgZGlzcGxheSB1bml0LCBwZXJzaXN0IGl0LCBhbmQgcmUtcmVuZGVyIOKAlCBubyByZWZldGNoLCB0aGUgc3RvcmVkXG4vLyBDZWxzaXVzIGlzIGNvbnZlcnRlZCBpbiBwbGFjZS5cbmZ1bmN0aW9uIHNldFVuaXQodW5pdCkge1xuICBjdXJyZW50VW5pdCA9IHVuaXQgPT09ICdGJyA/ICdGJyA6ICdDJztcbiAgdHJ5IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShVTklUX0tFWSwgY3VycmVudFVuaXQpO1xuICB9IGNhdGNoIChlKSB7IC8qIHN0b3JhZ2UgdW5hdmFpbGFibGUg4oCUIHRoZSBpbi1tZW1vcnkgdW5pdCBzdGlsbCBhcHBsaWVzICovIH1cbiAgcmVuZGVyVGVtcHMoKTtcbn1cblxuLy8gUmVnaXN0ZXJzIGxpc3RlbmVycyBFWEFDVExZIE9OQ0UgZm9yIHRoZSBsaWZlIG9mIHRoZSBwYWdlLiBpbmRleC5qcyBjYWxscyB0aGlzXG4vLyBhdCBib290c3RyYXAsIGFmdGVyIHRoZSBET00gaXMgYXBwZW5kZWQg4oCUIG5ldmVyIGZyb20gdGhlIHJlbmRlciBwYXRoIOKAlCBzbyBhXG4vLyBzZWFyY2ggZmlyZXMgZXhhY3RseSBvbmUgZmV0Y2ggYW5kIGV2ZXJ5IGVsZW1lbnQgY2FycmllcyBleGFjdGx5IG9uZSBsaXN0ZW5lci5cbmV4cG9ydCBmdW5jdGlvbiB3aXJlRXZlbnRzKCkge1xuICBpZiAoZXZlbnRzV2lyZWQpIHsgcmV0dXJuOyB9XG5cbiAgY2FjaGVEb20oKTtcbiAgZXZlbnRzV2lyZWQgPSB0cnVlO1xuXG4gIC8vIFRoZSBidXR0b24gaXMgYSByZWFsIHN1Ym1pdCBidXR0b24sIHNvIHRoaXMgY2F0Y2hlcyBib3RoIHRoZSBjbGljayBhbmQgdGhlXG4gIC8vIEVudGVyIGtleSBhcyBvbmUgc3VibWl0IGV2ZW50LiBwcmV2ZW50RGVmYXVsdCBzdG9wcyB0aGUgZm9ybSByZWxvYWRpbmcgdGhlXG4gIC8vIHBhZ2U7IGZ1dHVyZUFQSUNhbGxzIGRvZXMgdGhlIHNpbmdsZSBmZXRjaC4gVGhlIHNlYXJjaCBmb3JtIGlzIGFsc28gdGhlXG4gIC8vIGFkZCBwYXRoIGZvciBzYXZlZCBsb2NhdGlvbnM6IG9uIGEgc3VjY2Vzc2Z1bCBsb29rdXAgdGhlIHF1ZXJ5IGlzIGFwcGVuZGVkXG4gIC8vIHRvIHRoZSBzYXZlZCBsaXN0IGFuZCBiZWNvbWVzIGN1cnJlbnQ7IGEgZmFpbGVkIGxvb2t1cCByZXNvbHZlcyB0byBudWxsIGFuZFxuICAvLyBsZWF2ZXMgdGhlIGxpc3QgdW50b3VjaGVkIChpbnZhbGlkSW5wdXQgaGFzIGFscmVhZHkgcmVkZGVuZWQgdGhlIGlucHV0KS5cbiAgc2VhcmNoRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjbG9zZVN1Z2dlc3Rpb25zKCk7XG4gICAgY29uc3QgcXVlcnkgPSBzZWFyY2hJbnB1dC52YWx1ZTtcbiAgICBmb3JlY2FzdExvZ2ljLmZ1dHVyZUFQSUNhbGxzKHF1ZXJ5KS50aGVuKGZ1bmN0aW9uIChmb3JlY2FzdCkge1xuICAgICAgaWYgKGZvcmVjYXN0KSB7XG4gICAgICAgIGFkZExvY2F0aW9uKHF1ZXJ5KTtcbiAgICAgICAgc2VhcmNoSW5wdXQudmFsdWUgPSAnJztcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgd2lyZUF1dG9jb21wbGV0ZSgpO1xuICB3aXJlVW5pdFRvZ2dsZSgpO1xufVxuXG4vLyBPbmUgZGVsZWdhdGVkIGNsaWNrIGxpc3RlbmVyIG9uIHRoZSBzd2l0Y2ggZHJpdmVzIGJvdGggYnV0dG9ucy4gV2lyZWQgb25jZSBmcm9tXG4vLyB3aXJlRXZlbnRzKCksIHNvIOKAlCBsaWtlIGV2ZXJ5IG90aGVyIGxpc3RlbmVyIOKAlCBub3RoaW5nIG11bHRpcGxpZXMgYWNyb3NzIGZldGNoZXMuXG4vLyByZW5kZXJUZW1wcygpIHJ1bnMgaW1tZWRpYXRlbHkgdG8gcmVmbGVjdCB0aGUgcGVyc2lzdGVkIHVuaXQgb24gdGhlIGJ1dHRvbnNcbi8vIGJlZm9yZSB0aGUgZmlyc3QgZmV0Y2ggcmVzb2x2ZXMuXG5mdW5jdGlvbiB3aXJlVW5pdFRvZ2dsZSgpIHtcbiAgaWYgKCF1bml0U3dpdGNoKSB7IHJldHVybjsgfVxuICB1bml0U3dpdGNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICBjb25zdCBidG4gPSBlLnRhcmdldCAmJiBlLnRhcmdldC5jbG9zZXN0ID8gZS50YXJnZXQuY2xvc2VzdCgnLnVuaXRPcHQnKSA6IG51bGw7XG4gICAgaWYgKCFidG4gfHwgIXVuaXRTd2l0Y2guY29udGFpbnMoYnRuKSkgeyByZXR1cm47IH1cbiAgICBzZXRVbml0KGJ0bi5kYXRhc2V0LnVuaXQpO1xuICB9KTtcbiAgcmVuZGVyVGVtcHMoKTtcbn1cblxuLy8gV2lyZXMgdGhlIGRlYm91bmNlZCBjaXR5LXN1Z2dlc3Rpb24gZHJvcGRvd24uIENhbGxlZCBvbmNlIGZyb20gd2lyZUV2ZW50cygpLFxuLy8gc28g4oCUIGxpa2UgZXZlcnkgb3RoZXIgbGlzdGVuZXIgaW4gdGhlIGFwcCDigJQgbm90aGluZyBtdWx0aXBsaWVzIGFjcm9zcyBmZXRjaGVzLlxuZnVuY3Rpb24gd2lyZUF1dG9jb21wbGV0ZSgpIHtcbiAgLy8gRWFjaCBrZXlzdHJva2Ugc2NoZWR1bGVzIG9uZSBkZWJvdW5jZWQgbG9va3VwOyBhbiBlbXB0eSBib3ggY2xvc2VzIHRoZVxuICAvLyBkcm9wZG93biBvdXRyaWdodC4gU2V0dGluZyBzZWFyY2hJbnB1dC52YWx1ZSBwcm9ncmFtbWF0aWNhbGx5IChvbiBzZWxlY3Qgb3JcbiAgLy8gb24gYSBzdWNjZXNzZnVsIHN1Ym1pdCkgZG9lcyBub3QgZmlyZSAnaW5wdXQnLCBzbyB0aGVyZSBpcyBubyByZWZldGNoIGxvb3AuXG4gIHNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHZhbHVlID0gc2VhcmNoSW5wdXQudmFsdWUudHJpbSgpO1xuICAgIGlmIChzdWdnZXN0RGVib3VuY2UpIHsgY2xlYXJUaW1lb3V0KHN1Z2dlc3REZWJvdW5jZSk7IHN1Z2dlc3REZWJvdW5jZSA9IG51bGw7IH1cbiAgICBpZiAoIXZhbHVlKSB7IGNsb3NlU3VnZ2VzdGlvbnMoKTsgcmV0dXJuOyB9XG5cbiAgICBzdWdnZXN0RGVib3VuY2UgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IHNlcSA9ICsrcmVxdWVzdFNlcTtcbiAgICAgIGZvcmVjYXN0TG9naWMuc2VhcmNoQ2l0aWVzKHZhbHVlKS50aGVuKGZ1bmN0aW9uIChyZXN1bHRzKSB7XG4gICAgICAgIGlmIChzZXEgIT09IHJlcXVlc3RTZXEpIHsgcmV0dXJuOyB9IC8vIGEgbmV3ZXIga2V5c3Ryb2tlIHN1cGVyc2VkZWQgdGhpc1xuICAgICAgICByZW5kZXJTdWdnZXN0aW9ucyhyZXN1bHRzKTtcbiAgICAgIH0pO1xuICAgIH0sIFNVR0dFU1RfREVCT1VOQ0VfTVMpO1xuICB9KTtcblxuICAvLyBBcnJvdyBrZXlzIG1vdmUgdGhlIGhpZ2hsaWdodDsgRW50ZXIgb24gYSBoaWdobGlnaHRlZCByb3cgc2VsZWN0cyBpdCAoYW5kIGlzXG4gIC8vIHN0b3BwZWQgZnJvbSBhbHNvIHN1Ym1pdHRpbmcgdGhlIHJhdyB0ZXh0KTsgRXNjYXBlIGNsb3NlcyB3aXRob3V0IHN1Ym1pdHRpbmcuXG4gIC8vIFdpdGggbm8gZHJvcGRvd24gb3BlbiwgRW50ZXIgc3VibWl0cyB0aGUgdHlwZWQgdGV4dCBleGFjdGx5IGFzIGJlZm9yZS5cbiAgc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKHN1Z2dlc3Rpb25zLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykgfHwgIWN1cnJlbnRTdWdnZXN0aW9ucy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGUua2V5ID09PSAnQXJyb3dEb3duJykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbW92ZVNlbGVjdGlvbigxKTtcbiAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnQXJyb3dVcCcpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIG1vdmVTZWxlY3Rpb24oLTEpO1xuICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIGlmIChzZWxlY3RlZEluZGV4ID49IDApIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjaG9vc2VTdWdnZXN0aW9uKHNlbGVjdGVkSW5kZXgpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjbG9zZVN1Z2dlc3Rpb25zKCk7XG4gICAgfVxuICB9KTtcblxuICAvLyBBIGNsaWNrIGFueXdoZXJlIG91dHNpZGUgdGhlIHNlYXJjaCBmb3JtIGNsb3NlcyB0aGUgZHJvcGRvd24uIENsaWNrcyBpbnNpZGVcbiAgLy8gdGhlIGZvcm0gKHRoZSBpbnB1dCwgYSBzdWdnZXN0aW9uIHJvdywgdGhlIGJ1dHRvbikgYXJlIGhhbmRsZWQgYnkgdGhlaXIgb3duXG4gIC8vIGxpc3RlbmVycyBhbmQgbXVzdCBub3QgY2xvc2UgaXQgaGVyZSBmaXJzdC5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChlLnRhcmdldCAmJiBlLnRhcmdldC5jbG9zZXN0ICYmIGUudGFyZ2V0LmNsb3Nlc3QoJyNzZWFyY2hGb3JtJykpIHsgcmV0dXJuOyB9XG4gICAgY2xvc2VTdWdnZXN0aW9ucygpO1xuICB9KTtcbn1cblxuLy8gUmVidWlsZCB0aGUgZHJvcGRvd24gZnJvbSBhIHJlc3VsdHMgYXJyYXkuIEVtcHR5IHJlc3VsdHMgY2xvc2UgaXQuIEVhY2ggcm93IGlzXG4vLyB0aGUgY2l0eSBuYW1lIHBsdXMgYSBtdXRlZCByZWdpb24vY291bnRyeSBsaW5lOyBjbGlja2luZyBvbmUgc2VsZWN0cyBpdC5cbmZ1bmN0aW9uIHJlbmRlclN1Z2dlc3Rpb25zKHJlc3VsdHMpIHtcbiAgd2hpbGUgKHN1Z2dlc3Rpb25zLmZpcnN0Q2hpbGQpIHsgc3VnZ2VzdGlvbnMucmVtb3ZlQ2hpbGQoc3VnZ2VzdGlvbnMuZmlyc3RDaGlsZCk7IH1cblxuICBjdXJyZW50U3VnZ2VzdGlvbnMgPSByZXN1bHRzO1xuICBzZWxlY3RlZEluZGV4ID0gLTE7XG5cbiAgaWYgKCFyZXN1bHRzLmxlbmd0aCkgeyBjbG9zZVN1Z2dlc3Rpb25zKCk7IHJldHVybjsgfVxuXG4gIHJlc3VsdHMuZm9yRWFjaChmdW5jdGlvbiAociwgaWR4KSB7XG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW0uY2xhc3NOYW1lID0gJ3N1Z2dlc3Rpb24taXRlbSc7XG4gICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnb3B0aW9uJyk7XG5cbiAgICBjb25zdCBjaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNpdHkuY2xhc3NOYW1lID0gJ3N1Z2dlc3Rpb24tY2l0eSc7XG4gICAgY2l0eS50ZXh0Q29udGVudCA9IHIubmFtZTtcblxuICAgIGNvbnN0IHBsYWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHBsYWNlLmNsYXNzTmFtZSA9ICdzdWdnZXN0aW9uLWNvdW50cnknO1xuICAgIHBsYWNlLnRleHRDb250ZW50ID0gW3IucmVnaW9uLCByLmNvdW50cnldLmZpbHRlcihCb29sZWFuKS5qb2luKCcsICcpO1xuXG4gICAgaXRlbS5hcHBlbmRDaGlsZChjaXR5KTtcbiAgICBpdGVtLmFwcGVuZENoaWxkKHBsYWNlKTtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkgeyBjaG9vc2VTdWdnZXN0aW9uKGlkeCk7IH0pO1xuXG4gICAgc3VnZ2VzdGlvbnMuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gIH0pO1xuXG4gIG9wZW5TdWdnZXN0aW9ucygpO1xufVxuXG4vLyBNb3ZlIHRoZSBrZXlib2FyZCBoaWdobGlnaHQsIHdyYXBwaW5nIGF0IGJvdGggZW5kcywgYW5kIG1pcnJvciBpdCBvbnRvIHRoZSBET00uXG5mdW5jdGlvbiBtb3ZlU2VsZWN0aW9uKGRpcikge1xuICBjb25zdCBuID0gY3VycmVudFN1Z2dlc3Rpb25zLmxlbmd0aDtcbiAgaWYgKCFuKSB7IHJldHVybjsgfVxuICBzZWxlY3RlZEluZGV4ID0gKHNlbGVjdGVkSW5kZXggKyBkaXIgKyBuKSAlIG47XG5cbiAgY29uc3QgaXRlbXMgPSBzdWdnZXN0aW9ucy5jaGlsZHJlbjtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgIGl0ZW1zW2ldLmNsYXNzTGlzdC50b2dnbGUoJ3NlbGVjdGVkJywgaSA9PT0gc2VsZWN0ZWRJbmRleCk7XG4gIH1cbn1cblxuLy8gRmlsbCB0aGUgaW5wdXQgd2l0aCB0aGUgY2hvc2VuIGNpdHkgYW5kIHN1Ym1pdCB0aGUgZm9ybSB0aGUgc2FtZSB3YXkgcHJlc3Npbmdcbi8vIEVudGVyIG9yIGNsaWNraW5nIFN1Ym1pdCBkb2VzLCBzbyB0aGUgZmV0Y2ggKyBzYXZlLWxvY2F0aW9uIHBhdGggaXMgdW5jaGFuZ2VkLlxuZnVuY3Rpb24gY2hvb3NlU3VnZ2VzdGlvbihpZHgpIHtcbiAgY29uc3QgciA9IGN1cnJlbnRTdWdnZXN0aW9uc1tpZHhdO1xuICBpZiAoIXIpIHsgcmV0dXJuOyB9XG4gIHNlYXJjaElucHV0LnZhbHVlID0gci5uYW1lO1xuICBjbG9zZVN1Z2dlc3Rpb25zKCk7XG4gIGlmIChzZWFyY2hGb3JtLnJlcXVlc3RTdWJtaXQpIHtcbiAgICBzZWFyY2hGb3JtLnJlcXVlc3RTdWJtaXQoKTtcbiAgfSBlbHNlIHtcbiAgICBzZWFyY2hGb3JtLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdzdWJtaXQnLCB7IGNhbmNlbGFibGU6IHRydWUsIGJ1YmJsZXM6IHRydWUgfSkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG9wZW5TdWdnZXN0aW9ucygpIHtcbiAgc3VnZ2VzdGlvbnMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIHNlYXJjaEZvcm0uY2xhc3NMaXN0LmFkZCgnc3VnZ2VzdGluZycpOyAvLyBmbGF0dGVucyB0aGUgaW5wdXQncyBib3R0b20gY29ybmVyc1xufVxuXG4vLyBDbG9zZSBhbmQgcmVzZXQuIEJ1bXBpbmcgcmVxdWVzdFNlcSBpbnZhbGlkYXRlcyBhbnkgaW4tZmxpZ2h0IGxvb2t1cCBzbyBpdFxuLy8gY2FuJ3QgcmVvcGVuIHRoZSBkcm9wZG93biBhZnRlciBhIHNlbGVjdGlvbiBvciBzdWJtaXQuXG5mdW5jdGlvbiBjbG9zZVN1Z2dlc3Rpb25zKCkge1xuICBpZiAoIXN1Z2dlc3Rpb25zKSB7IHJldHVybjsgfVxuICBpZiAoc3VnZ2VzdERlYm91bmNlKSB7IGNsZWFyVGltZW91dChzdWdnZXN0RGVib3VuY2UpOyBzdWdnZXN0RGVib3VuY2UgPSBudWxsOyB9XG4gIHJlcXVlc3RTZXErKztcbiAgY3VycmVudFN1Z2dlc3Rpb25zID0gW107XG4gIHNlbGVjdGVkSW5kZXggPSAtMTtcbiAgc3VnZ2VzdGlvbnMuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gIHNlYXJjaEZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnc3VnZ2VzdGluZycpO1xufVxuXG4vLyBBIHN1Y2Nlc3NmdWwgbG9va3VwIGNsZWFycyB0aGUgaW52YWxpZCBzdGF0ZTsgYSBmYWlsZWQgb25lIGtlZXBzIHRoZSBjdXJyZW50XG4vLyByaWJib24gYW5kIHJlZGRlbnMgdGhlIGlucHV0IGJvcmRlciAodmlhIHRoZSAuaW52YWxpZCBjbGFzcyBpbiBzdHlsZS5jc3MpLlxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkSW5wdXQoKSB7XG4gIGNhY2hlRG9tKCk7XG4gIGlmIChzZWFyY2hGb3JtKSB7IHNlYXJjaEZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZCcpOyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnZhbGlkSW5wdXQoKSB7XG4gIGNhY2hlRG9tKCk7XG4gIGlmIChzZWFyY2hGb3JtKSB7IHNlYXJjaEZvcm0uY2xhc3NMaXN0LmFkZCgnaW52YWxpZCcpOyB9XG59XG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IHJlbmRlckZvcmVjYXN0LCB2YWxpZElucHV0LCBpbnZhbGlkSW5wdXQgfSBmcm9tICcuL2luZGV4Q2hhbmdlcy5qcyc7XG5cbi8vICAzIGRheSBmb3JlY2FzdCAtIGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9MzljMjhmODVhYjAzNDUyMWI5OTIxNzA1MjMyNzEwJnE9OTgwNTImZGF5cz0zJmFxaT1ubyZhbGVydHM9bm9cblxuLy8gVGhlIGxhc3QgZm9yZWNhc3Qgd2Ugc3VjY2Vzc2Z1bGx5IHJlbmRlcmVkLiBBIGZhaWxlZCBsb29rdXAga2VlcHMgaXQgb24gc2NyZWVuXG4vLyAoc2VlIGZ1bGZpbGxQcm9taXNlKTogdGhlIHNlYXJjaCBqdXN0IHJlZGRlbnMgdGhlIGlucHV0IHJhdGhlciB0aGFuIGJsYW5raW5nXG4vLyB0aGUgcmliYm9uLlxubGV0IGxhc3RGb3JlY2FzdCA9IG51bGw7XG5cbmV4cG9ydCBjb25zdCBmb3JlY2FzdExvZ2ljID0gKGZ1bmN0aW9uICgpIHtcblxuICAvLyBObyBmZXRjaCBmaXJlcyBhdCBtb2R1bGUtZXZhbCB0aW1lLiBUaGUgc2luZ2xlIGluaXRpYWwgZmV0Y2ggKGRlZmF1bHRcbiAgLy8gbG9jYXRpb24sIG9yIHRoZSBmaXJzdCBzYXZlZCBsb2NhdGlvbikgaXMgZHJpdmVuIGZyb20gdGhlIGJvb3RzdHJhcCBpblxuICAvLyBpbmRleC5qcyB2aWEgaW5pdEZhdm91cml0ZXMoKSAtPiBmdXR1cmVBUElDYWxscywgc28gaXQgaGFwcGVucyBleGFjdGx5IG9uY2VcbiAgLy8gaW4gdGhlIGluZGV4IGJ1bmRsZSByYXRoZXIgdGhhbiBvbmNlIHBlciBidW5kbGUgdGhhdCBpbXBvcnRzIHRoaXMgbW9kdWxlLlxuXG4gIC8vIEZpcmVzIG9uZSBmZXRjaCBmb3IgYSBsb2NhdGlvbiBhbmQgcmVuZGVycyBvbiBzdWNjZXNzLiBSZXR1cm5zIGEgcHJvbWlzZVxuICAvLyByZXNvbHZpbmcgdG8gdGhlIGJ1aWx0IGZvcmVjYXN0IG9uIHN1Y2Nlc3MsIG9yIG51bGwgb24gYSBmYWlsZWQgbG9va3VwLCBzb1xuICAvLyB0aGUgc2VhcmNoIHN1Ym1pdCBoYW5kbGVyIGNhbiBhcHBlbmQgdGhlIGxvY2F0aW9uIHRvIHRoZSBzYXZlZCBsaXN0IG9ubHlcbiAgLy8gd2hlbiB0aGUgbG9va3VwIGFjdHVhbGx5IHN1Y2NlZWRlZC5cbiAgZnVuY3Rpb24gZnV0dXJlQVBJQ2FsbHModmFsdWUpIHtcbiAgICByZXR1cm4gZnVsZmlsbFByb21pc2UocHVsbEZvcmVjYXN0KHZhbHVlKSk7XG4gIH1cblxuICBmdW5jdGlvbiBmdWxmaWxsUHJvbWlzZShmb3JlY2FzdEpTT04pIHtcbiAgICByZXR1cm4gZm9yZWNhc3RKU09OLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgLy8gcHVsbEZvcmVjYXN0IHJlc29sdmVzIHRvIG51bGwgb24gYSBmYWlsZWQgbG9va3VwIOKAlCBsZWF2ZSB0aGUgY3VycmVudFxuICAgICAgLy8gcmliYm9uIHVudG91Y2hlZCAoaW52YWxpZElucHV0KCkgaGFzIGFscmVhZHkgcmVkZGVuZWQgdGhlIGlucHV0KS5cbiAgICAgIGlmICghcmVzdWx0KSB7IHJldHVybiBudWxsOyB9XG5cbiAgICAgIGNvbnN0IGZvcmVjYXN0ID0gYnVpbGRGb3JlY2FzdChyZXN1bHQpO1xuICAgICAgbGFzdEZvcmVjYXN0ID0gZm9yZWNhc3Q7XG4gICAgICByZW5kZXJGb3JlY2FzdChmb3JlY2FzdCk7XG4gICAgICByZXR1cm4gZm9yZWNhc3Q7XG4gICAgfSk7XG4gIH1cblxuICAvLyBGbGF0dGVuIHRoZSB0aHJlZS1kYXkgcmVzcG9uc2UgaW50byBhIHNpbmdsZSA3Mi1ob3VyIHNlcmllcyBwbHVzIGEgbG9jYXRpb25cbiAgLy8gb2JqZWN0LiBFdmVyeSBob3VyIGtlZXBzIGl0cyBvd24gZXBvY2gsIHRlbXBlcmF0dXJlLCBjb25kaXRpb24gdGV4dCBhbmQgdGhlXG4gIC8vIHN0YXQgZmllbGRzIHRoZSByZWFkb3V0IHNob3dzIOKAlCBub3RoaW5nIGlzIGNvbGxhcHNlZCB0byBwZXItZGF5IHNjYWxhcnMsIGFuZFxuICAvLyB0aGUgZnVsbCBmb3JlY2FzdGRheVtdLmhvdXJbXSBhcnJheXMgKGFscmVhZHkgaW4gZXZlcnkgcmVzcG9uc2UsIHByZXZpb3VzbHlcbiAgLy8gZGlzY2FyZGVkKSBhcmUgd2hhdCB0aGUgY3VydmUgaXMgZHJhd24gZnJvbS5cbiAgZnVuY3Rpb24gYnVpbGRGb3JlY2FzdChyZXN1bHQpIHtcbiAgICBjb25zdCBmb3JlY2FzdERheXMgPSByZXN1bHQuZm9yZWNhc3QuZm9yZWNhc3RkYXk7XG4gICAgY29uc3QgaG91cnMgPSBbXTtcblxuICAgIGZvcmVjYXN0RGF5cy5mb3JFYWNoKChkYXkpID0+IHtcbiAgICAgIGRheS5ob3VyLmZvckVhY2goKGgpID0+IHtcbiAgICAgICAgaG91cnMucHVzaCh7XG4gICAgICAgICAgZXBvY2g6IGgudGltZV9lcG9jaCxcbiAgICAgICAgICB0ZW1wOiBoLnRlbXBfYyxcbiAgICAgICAgICBmZWVsc0xpa2U6IGguZmVlbHNsaWtlX2MsXG4gICAgICAgICAgaHVtaWRpdHk6IGguaHVtaWRpdHksXG4gICAgICAgICAgcmFpbjogaC5jaGFuY2Vfb2ZfcmFpbixcbiAgICAgICAgICB3aW5kOiBoLndpbmRfa3BoLFxuICAgICAgICAgIGNvbmRpdGlvbjogaC5jb25kaXRpb24udGV4dCxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICBsb2NhdGlvbjoge1xuICAgICAgICBuYW1lOiByZXN1bHQubG9jYXRpb24ubmFtZSxcbiAgICAgICAgLy8gXCJub3dcIiBpcyBpbmRleGVkIG9mZiB0aGUgbG9jYXRpb24ncyByZWFsIGN1cnJlbnQgdGltZSwgbm90IGEgcGFyc2VkXG4gICAgICAgIC8vIGRhdGUgc3RyaW5nLiBTZWUgY3VycmVudEhvdXJJbmRleCgpIGluIHJpYmJvbi5qcy5cbiAgICAgICAgbG9jYWx0aW1lX2Vwb2NoOiByZXN1bHQubG9jYXRpb24ubG9jYWx0aW1lX2Vwb2NoLFxuICAgICAgfSxcbiAgICAgIGhvdXJzOiBob3VycyxcbiAgICAgIC8vIFBlci1kYXkgZGF0ZSArIGhvdXIgY291bnQgZHJpdmUgdGhlIFdFRC9USFUvRlJJIHRpY2tzIGFuZCB0aGUgZGF5XG4gICAgICAvLyBoYWlybGluZXMgYXQgaG91cnMgMjQgYW5kIDQ4LlxuICAgICAgZGF5czogZm9yZWNhc3REYXlzLm1hcCgoZGF5KSA9PiAoeyBkYXRlOiBkYXkuZGF0ZSwgY291bnQ6IGRheS5ob3VyLmxlbmd0aCB9KSksXG4gICAgfTtcbiAgfVxuXG4gIC8vIFRha2VzIGEgbG9jYXRpb24gdmFsdWUgYXBwZW5kZWQgdG8gdGhlIEFQSSBjYWxsLiBSZXNvbHZlcyB0byB0aGUgcmF3IEpTT04gb25cbiAgLy8gc3VjY2Vzcywgb3IgbnVsbCBvbiBmYWlsdXJlIChzbyBmdWxmaWxsUHJvbWlzZSBrZWVwcyB0aGUgY3VycmVudCByaWJib24pLlxuICBhc3luYyBmdW5jdGlvbiBwdWxsRm9yZWNhc3QodmFsdWUpIHtcbiAgICBjb25zdCB1cmwgPSAnaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9MzljMjhmODVhYjAzNDUyMWI5OTIxNzA1MjMyNzEwJnE9JyArIHZhbHVlICsgJyZkYXlzPTMmYXFpPW5vJmFsZXJ0cz1ubyc7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHsgbW9kZTogJ2NvcnMnIH0pO1xuXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgU3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZm9yZWNhc3QgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgIHZhbGlkSW5wdXQoKTtcblxuICAgICAgcmV0dXJuIGZvcmVjYXN0O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gY2F0Y2hlcyBlcnJvcnMgYm90aCBpbiBmZXRjaCBhbmQgcmVzcG9uc2UuanNvblxuICAgICAgaW52YWxpZElucHV0KCk7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvLyBUeXBlYWhlYWQgbG9va3VwIGZvciB0aGUgc2VhcmNoIGJveC4gSGl0cyBXZWF0aGVyQVBJJ3Mgc2VhcmNoL2F1dG9jb21wbGV0ZVxuICAvLyBlbmRwb2ludCAocmV1c2luZyB0aGUgc2FtZSBrZXkgYXMgcHVsbEZvcmVjYXN0KSBhbmQgcmVzb2x2ZXMgdG8gdGhlIHJhd1xuICAvLyByZXN1bHRzIGFycmF5IOKAlCBbeyBuYW1lLCByZWdpb24sIGNvdW50cnksIC4uLiB9LCAuLi5dIOKAlCBvciBbXSBvbiBhbiBlbXB0eVxuICAvLyBxdWVyeSwgbm8gbWF0Y2hlcywgb3IgYW55IG5ldHdvcmsvcGFyc2UgZXJyb3IuIE5ldmVyIHRocm93czogdGhlIGRyb3Bkb3duXG4gIC8vIGp1c3Qgc2hvd3Mgbm90aGluZyBvbiBmYWlsdXJlLlxuICBhc3luYyBmdW5jdGlvbiBzZWFyY2hDaXRpZXModmFsdWUpIHtcbiAgICBjb25zdCBxID0gU3RyaW5nKHZhbHVlKS50cmltKCk7XG4gICAgaWYgKCFxKSB7IHJldHVybiBbXTsgfVxuXG4gICAgY29uc3QgdXJsID0gJ2h0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL3NlYXJjaC5qc29uP2tleT0zOWMyOGY4NWFiMDM0NTIxYjk5MjE3MDUyMzI3MTAmcT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHEpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7IG1vZGU6ICdjb3JzJyB9KTtcblxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIFN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KHJlc3VsdHMpID8gcmVzdWx0cyA6IFtdO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcblxuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcHVsbEZvcmVjYXN0LFxuICAgIGZ1dHVyZUFQSUNhbGxzLFxuICAgIHNlYXJjaENpdGllcyxcbiAgfTtcblxufSkoKTsgLy8gZW5kcyBmb3JlY2FzdExvZ2ljIGZ1bmN0aW9uXG4iLCIvLyByaWJib24uanMg4oCUIHRoZSA3Mi1ob3VyIHRlbXBlcmF0dXJlIHJpYmJvbi5cbi8vXG4vLyBUaGUgZm9yZWNhc3QgaXMgb25lIGNvbnRpbnVvdXMgdGVtcGVyYXR1cmUgY3VydmUgYWNyb3NzIGFsbCB0aHJlZSBkYXlzIHJhdGhlclxuLy8gdGhhbiB0aHJlZSBjYXJkIHN0YXRlcyB5b3UgcGFnZSBiZXR3ZWVuLCBzbyBuYXZpZ2F0aW9uIHN0b3BzIGJlaW5nIGEgY29uY2VwdDpcbi8vIGV2ZXJ5IGhvdXIgaXMgb24gc2NyZWVuIGF0IG9uY2UuIENvbG91ciBpcyBhIGZ1bmN0aW9uIG9mIHRoZSB0ZW1wZXJhdHVyZVxuLy8gc2NhbGFyIChjb2xkIC0+IG1pbGQgLT4gd2FybSAtPiBob3QpLCBOT1QgdGhlIGNvbmRpdGlvbiBjYXRlZ29yeSwgc28gdGhlcmUgaXNcbi8vIG5vIHBlci1jb25kaXRpb24gYnJhbmNoIHRvIHdyaXRlIGFuZCBubyBlaWdodGggY2FzZSB0byBmb3JnZXQuXG4vL1xuLy8gYnVpbGRSaWJib24obW91bnQpIGNyZWF0ZXMgdGhlIFNWRyBzY2FmZm9sZCBvbmNlIGF0IGJvb3RzdHJhcCAoZGVmcywgZ3JhZGllbnRzLFxuLy8gZW1wdHkgZ3JvdXBzKSBhbmQgY2FjaGVzIGVsZW1lbnQgcmVmcy4gcmVuZGVyRm9yZWNhc3QoKSBpbiBpbmRleENoYW5nZXMuanNcbi8vIGNhbGxzIHJlbmRlclJpYmJvbihmb3JlY2FzdCkgb24gZXZlcnkgcmVzb2x2ZWQgcmVzcG9uc2UgdG8gcmVkcmF3IHRoZSBjdXJ2ZSxcbi8vIHRoZSBkYXkgaGFpcmxpbmVzL3RpY2tzIGFuZCB0aGUgY3VycmVudC1ob3VyIG1hcmtlciBmcm9tIGRhdGEuIGN1cnJlbnRIb3VySW5kZXhcbi8vIGlzIHRoZSBzaW5nbGUgc291cmNlIG9mIHRydXRoIGZvciBcIm5vd1wiLCBzaGFyZWQgd2l0aCB0aGUgcmVhZG91dCBzbyB0aGUgbWFya2VyXG4vLyBhbmQgdGhlIHN0YXQgcm93IG5ldmVyIGRpc2FncmVlLlxuLy9cbi8vIEhhbmQtYXV0aG9yZWQgU1ZHLCB2YW5pbGxhIG9ubHkg4oCUIG5vIGNoYXJ0aW5nIGxpYnJhcnksIG5vIGRlcGVuZGVuY2llcy5cblxuY29uc3QgTlMgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnO1xuXG4vLyB2aWV3Qm94IGdlb21ldHJ5LCBpbiB1c2VyIHVuaXRzLiBUaGUgY3VydmUgYmFuZCBzaXRzIGJldHdlZW4gQ0hBUlRfVE9QIGFuZFxuLy8gQ0hBUlRfVE9QK0NIQVJUX0g7IFRJQ0tfSCBiZW5lYXRoIGl0IGNhcnJpZXMgdGhlIFdFRC9USFUvRlJJIGRheSBsYWJlbHMuIEFcbi8vIHNlY29uZCBsYW5lICh0aWRlcywgb3V0IG9mIHNjb3BlIHRvZGF5KSB3b3VsZCBhZGQgTEFORV9IIGJlbG93IHRoYXQg4oCUIHRoZVxuLy8gdmlld0JveCBoZWlnaHQgc3dpdGNoZXMgYmV0d2VlbiB0d28gdmFsdWVzIGRlcGVuZGluZyBvbiB3aGV0aGVyIHRoZSBsYW5lXG4vLyBleGlzdHMsIHNvIHRoZSBsYXlvdXQgaXMgYnVpbHQgbGFuZS1vcHRpb25hbCBldmVuIHRob3VnaCB0aGUgbGFuZSBuZXZlclxuLy8gcmVuZGVycyBmb3Igbm93LlxuY29uc3QgVklFV19XID0gNzIwO1xuY29uc3QgUEFEX0wgPSAxMDtcbmNvbnN0IFBBRF9SID0gMTA7XG5jb25zdCBDSEFSVF9UT1AgPSAxODtcbmNvbnN0IENIQVJUX0ggPSAxNTA7XG5jb25zdCBUSUNLX0ggPSAyNjtcbmNvbnN0IExBTkVfSCA9IDkwO1xuXG4vLyBUZW1wZXJhdHVyZSAtPiBjb2xvdXIgcmFtcC4gRm91ciBhbmNob3JzIHNwYW5uaW5nIGEgZml4ZWQgwrBDIGRvbWFpbiBzbyB0aGVcbi8vIHNhbWUgdGVtcGVyYXR1cmUgYWx3YXlzIHJlYWRzIHRoZSBzYW1lIGNvbG91ciByZWdhcmRsZXNzIG9mIHRoZSBkYXkncyByYW5nZS5cbmNvbnN0IFJBTVAgPSBbXG4gIHsgdDogLTUsIGM6IFsweDNkLCAweDZmLCAweGE4XSB9LCAvLyBjb2xkXG4gIHsgdDogMTAsIGM6IFsweDZmLCAweGE4LCAweGEwXSB9LCAvLyBtaWxkXG4gIHsgdDogMjUsIGM6IFsweGQ5LCAweGE0LCAweDQxXSB9LCAvLyB3YXJtXG4gIHsgdDogNDAsIGM6IFsweGMyLCAweDQ1LCAweDJkXSB9LCAvLyBob3Rcbl07XG5cbmNvbnN0IFdFRUtEQVkgPSBbJ1NVTicsICdNT04nLCAnVFVFJywgJ1dFRCcsICdUSFUnLCAnRlJJJywgJ1NBVCddO1xuXG4vLyBDYWNoZWQgc2NhZmZvbGQgcmVmcywgcG9wdWxhdGVkIG9uY2UgYnkgYnVpbGRSaWJib24oKS5cbmxldCBzdmcsIHRlbXBHcmFkLCBmaWxsUGF0aCwgY3VydmVQYXRoLCBib3VuZGFyeUdyb3VwLCB0aWNrR3JvdXAsIG1hcmtlckdyb3VwLFxuICBsYW5lR3JvdXA7XG5cbmZ1bmN0aW9uIGVsKG5hbWUsIGF0dHJzKSB7XG4gIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoTlMsIG5hbWUpO1xuICBpZiAoYXR0cnMpIHtcbiAgICBmb3IgKGNvbnN0IGsgaW4gYXR0cnMpIHsgbm9kZS5zZXRBdHRyaWJ1dGUoaywgYXR0cnNba10pOyB9XG4gIH1cbiAgcmV0dXJuIG5vZGU7XG59XG5cbmZ1bmN0aW9uIGxlcnAoYSwgYiwgZikgeyByZXR1cm4gYSArIChiIC0gYSkgKiBmOyB9XG5cbi8vIENvbG91ciBmb3IgYSB0ZW1wZXJhdHVyZSwgaW50ZXJwb2xhdGVkIGFjcm9zcyB0aGUgcmFtcCBhbmNob3JzIGFuZCBjbGFtcGVkIHRvXG4vLyB0aGUgZG9tYWluIGVuZHMuXG5mdW5jdGlvbiB0ZW1wQ29sb3VyKHRlbXApIHtcbiAgaWYgKHRlbXAgPD0gUkFNUFswXS50KSB7IHJldHVybiByZ2IoUkFNUFswXS5jKTsgfVxuICBpZiAodGVtcCA+PSBSQU1QW1JBTVAubGVuZ3RoIC0gMV0udCkgeyByZXR1cm4gcmdiKFJBTVBbUkFNUC5sZW5ndGggLSAxXS5jKTsgfVxuICBmb3IgKGxldCBpID0gMTsgaSA8IFJBTVAubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodGVtcCA8PSBSQU1QW2ldLnQpIHtcbiAgICAgIGNvbnN0IGxvID0gUkFNUFtpIC0gMV07XG4gICAgICBjb25zdCBoaSA9IFJBTVBbaV07XG4gICAgICBjb25zdCBmID0gKHRlbXAgLSBsby50KSAvIChoaS50IC0gbG8udCk7XG4gICAgICByZXR1cm4gcmdiKFtcbiAgICAgICAgTWF0aC5yb3VuZChsZXJwKGxvLmNbMF0sIGhpLmNbMF0sIGYpKSxcbiAgICAgICAgTWF0aC5yb3VuZChsZXJwKGxvLmNbMV0sIGhpLmNbMV0sIGYpKSxcbiAgICAgICAgTWF0aC5yb3VuZChsZXJwKGxvLmNbMl0sIGhpLmNbMl0sIGYpKSxcbiAgICAgIF0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmdiKFJBTVBbUkFNUC5sZW5ndGggLSAxXS5jKTtcbn1cblxuZnVuY3Rpb24gcmdiKGMpIHsgcmV0dXJuICdyZ2IoJyArIGNbMF0gKyAnLCcgKyBjWzFdICsgJywnICsgY1syXSArICcpJzsgfVxuXG5mdW5jdGlvbiB3ZWVrZGF5QWJicihkYXRlU3RyKSB7XG4gIC8vIGRhdGVTdHIgaXMgJ1lZWVktTU0tREQnLiBCdWlsZCB0aGUgZGF0ZSBhdCBVVEMgbWlkbmlnaHQgc28gdGhlIHdlZWtkYXkgbmV2ZXJcbiAgLy8gc2hpZnRzIGFjcm9zcyBhIHRpbWV6b25lIGJvdW5kYXJ5LlxuICBjb25zdCBwID0gU3RyaW5nKGRhdGVTdHIpLnNwbGl0KCctJyk7XG4gIGNvbnN0IGQgPSBuZXcgRGF0ZShEYXRlLlVUQygrcFswXSwgKCtwWzFdKSAtIDEsICtwWzJdKSk7XG4gIHJldHVybiBXRUVLREFZW2QuZ2V0VVRDRGF5KCldIHx8ICcnO1xufVxuXG4vLyBJbmRleCBvZiB0aGUgaG91ciBidWNrZXQgbmVhcmVzdCBcIm5vd1wiLiBEcml2ZW4gb2ZmIGxvY2F0aW9uLmxvY2FsdGltZV9lcG9jaCxcbi8vIE5PVCBhIHBhcnNlZCBkYXRlLXN0cmluZyBob3VyIOKAlCB0aGUgb2xkIGdldEN1cnJlbnRUaW1lKCkgcmVhZCB0aGUgaG91ciBvdXQgb2Zcbi8vIGRhdGVfZXBvY2ggKGxvY2FsIG1pZG5pZ2h0KSBhbmQgcmV0dXJuZWQgdGhlIFVUQyBvZmZzZXQsIHNvIFwiZmVlbHMgbGlrZVwiIHdhcyBhXG4vLyBmaXhlZCBhcmJpdHJhcnkgaG91ci4gbG9jYWx0aW1lX2Vwb2NoIGlzIHRoZSBsb2NhdGlvbidzIHJlYWwgY3VycmVudCB0aW1lLlxuZXhwb3J0IGZ1bmN0aW9uIGN1cnJlbnRIb3VySW5kZXgoZm9yZWNhc3QpIHtcbiAgY29uc3QgaG91cnMgPSBmb3JlY2FzdC5ob3VycztcbiAgaWYgKCFob3VycyB8fCAhaG91cnMubGVuZ3RoKSB7IHJldHVybiAwOyB9XG4gIGNvbnN0IG5vdyA9IGZvcmVjYXN0LmxvY2F0aW9uLmxvY2FsdGltZV9lcG9jaDtcbiAgbGV0IGJlc3QgPSAwO1xuICBsZXQgYmVzdERpZmYgPSBJbmZpbml0eTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBob3Vycy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGRpZmYgPSBNYXRoLmFicyhob3Vyc1tpXS5lcG9jaCAtIG5vdyk7XG4gICAgaWYgKGRpZmYgPCBiZXN0RGlmZikgeyBiZXN0RGlmZiA9IGRpZmY7IGJlc3QgPSBpOyB9XG4gIH1cbiAgcmV0dXJuIGJlc3Q7XG59XG5cbi8vIENyZWF0ZSB0aGUgU1ZHIHNjYWZmb2xkIG9uY2UuIENhbGxlZCBmcm9tIGluZGV4LmpzIGF0IGJvb3RzdHJhcCwgYWZ0ZXIgdGhlXG4vLyBtb3VudCBlbGVtZW50IGlzIGluIHRoZSBET00uXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRSaWJib24obW91bnQpIHtcbiAgaWYgKHN2ZykgeyByZXR1cm47IH0gLy8gYnVpbGQgb25jZVxuXG4gIHN2ZyA9IGVsKCdzdmcnLCB7XG4gICAgaWQ6ICdyaWJib25TdmcnLFxuICAgIHZpZXdCb3g6ICcwIDAgJyArIFZJRVdfVyArICcgJyArIChDSEFSVF9UT1AgKyBDSEFSVF9IICsgVElDS19IKSxcbiAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvOiAneE1pZFlNaWQgbWVldCcsXG4gIH0pO1xuXG4gIGNvbnN0IGRlZnMgPSBlbCgnZGVmcycpO1xuXG4gIC8vIEhvcml6b250YWwgc3Ryb2tlIGdyYWRpZW50OiBjb2xvdXJlZCBieSB0ZW1wZXJhdHVyZSBhY3Jvc3MgdGhlIDcyIGhvdXJzLlxuICAvLyBTdG9wcyBhcmUgcmVidWlsdCBlYWNoIHJlbmRlciBmcm9tIHRoZSBhY3R1YWwgc2VyaWVzLlxuICB0ZW1wR3JhZCA9IGVsKCdsaW5lYXJHcmFkaWVudCcsIHtcbiAgICBpZDogJ3RlbXBHcmFkJywgeDE6ICcwJywgeTE6ICcwJywgeDI6ICcxJywgeTI6ICcwJyxcbiAgfSk7XG5cbiAgLy8gVmVydGljYWwgZmFkZSBmaWxsIHVuZGVyIHRoZSBjdXJ2ZS5cbiAgY29uc3QgZmlsbEdyYWQgPSBlbCgnbGluZWFyR3JhZGllbnQnLCB7XG4gICAgaWQ6ICdmaWxsR3JhZCcsIHgxOiAnMCcsIHkxOiAnMCcsIHgyOiAnMCcsIHkyOiAnMScsXG4gIH0pO1xuICBmaWxsR3JhZC5hcHBlbmRDaGlsZChlbCgnc3RvcCcsIHsgb2Zmc2V0OiAnMCcsICdzdG9wLWNvbG9yJzogJyM4Q0EwQUUnLCAnc3RvcC1vcGFjaXR5JzogJzAuMjgnIH0pKTtcbiAgZmlsbEdyYWQuYXBwZW5kQ2hpbGQoZWwoJ3N0b3AnLCB7IG9mZnNldDogJzEnLCAnc3RvcC1jb2xvcic6ICcjOENBMEFFJywgJ3N0b3Atb3BhY2l0eSc6ICcwJyB9KSk7XG5cbiAgZGVmcy5hcHBlbmRDaGlsZCh0ZW1wR3JhZCk7XG4gIGRlZnMuYXBwZW5kQ2hpbGQoZmlsbEdyYWQpO1xuICBzdmcuYXBwZW5kQ2hpbGQoZGVmcyk7XG5cbiAgZmlsbFBhdGggPSBlbCgncGF0aCcsIHsgY2xhc3M6ICdyaWJib24tZmlsbCcsIGZpbGw6ICd1cmwoI2ZpbGxHcmFkKScsIHN0cm9rZTogJ25vbmUnIH0pO1xuICBjdXJ2ZVBhdGggPSBlbCgncGF0aCcsIHsgY2xhc3M6ICdyaWJib24tY3VydmUnLCBmaWxsOiAnbm9uZScsIHN0cm9rZTogJ3VybCgjdGVtcEdyYWQpJyB9KTtcbiAgYm91bmRhcnlHcm91cCA9IGVsKCdnJywgeyBjbGFzczogJ3JpYmJvbi1ib3VuZGFyaWVzJyB9KTtcbiAgdGlja0dyb3VwID0gZWwoJ2cnLCB7IGNsYXNzOiAncmliYm9uLXRpY2tzJyB9KTtcbiAgbWFya2VyR3JvdXAgPSBlbCgnZycsIHsgY2xhc3M6ICdyaWJib24tbWFya2VyJyB9KTtcbiAgbGFuZUdyb3VwID0gZWwoJ2cnLCB7IGNsYXNzOiAncmliYm9uLWxhbmUnIH0pO1xuXG4gIHN2Zy5hcHBlbmRDaGlsZChmaWxsUGF0aCk7XG4gIHN2Zy5hcHBlbmRDaGlsZChjdXJ2ZVBhdGgpO1xuICBzdmcuYXBwZW5kQ2hpbGQoYm91bmRhcnlHcm91cCk7XG4gIHN2Zy5hcHBlbmRDaGlsZCh0aWNrR3JvdXApO1xuICBzdmcuYXBwZW5kQ2hpbGQobGFuZUdyb3VwKTtcbiAgc3ZnLmFwcGVuZENoaWxkKG1hcmtlckdyb3VwKTtcblxuICBtb3VudC5hcHBlbmRDaGlsZChzdmcpO1xufVxuXG5mdW5jdGlvbiBjbGVhcihub2RlKSB7XG4gIHdoaWxlIChub2RlLmZpcnN0Q2hpbGQpIHsgbm9kZS5yZW1vdmVDaGlsZChub2RlLmZpcnN0Q2hpbGQpOyB9XG59XG5cbi8vIFJlZHJhdyB0aGUgd2hvbGUgcmliYm9uIGZyb20gYSBmb3JlY2FzdDogeyBsb2NhdGlvbiwgaG91cnNbXSwgZGF5c1tdLCBsYW5lPyB9LlxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclJpYmJvbihmb3JlY2FzdCkge1xuICBpZiAoIXN2ZykgeyByZXR1cm47IH1cblxuICBjb25zdCBob3VycyA9IGZvcmVjYXN0LmhvdXJzIHx8IFtdO1xuICBjb25zdCBuID0gaG91cnMubGVuZ3RoO1xuICBpZiAoIW4pIHsgcmV0dXJuOyB9XG5cbiAgY29uc3QgbGFuZU9uID0gISFmb3JlY2FzdC5sYW5lO1xuICBjb25zdCB0b3RhbEggPSBDSEFSVF9UT1AgKyBDSEFSVF9IICsgVElDS19IICsgKGxhbmVPbiA/IExBTkVfSCA6IDApO1xuICBzdmcuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgJzAgMCAnICsgVklFV19XICsgJyAnICsgdG90YWxIKTtcblxuICBjb25zdCBpbm5lclcgPSBWSUVXX1cgLSBQQURfTCAtIFBBRF9SO1xuICBjb25zdCBiYXNlbGluZSA9IENIQVJUX1RPUCArIENIQVJUX0g7XG5cbiAgLy8gdGVtcGVyYXR1cmUgZG9tYWluIGZvciB0aGUgeS1zY2FsZSwgcGFkZGVkIHNvIHRoZSBjdXJ2ZSBuZXZlciBodWdzIGFuIGVkZ2UuXG4gIGxldCBtaW4gPSBJbmZpbml0eTtcbiAgbGV0IG1heCA9IC1JbmZpbml0eTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICBpZiAoaG91cnNbaV0udGVtcCA8IG1pbikgeyBtaW4gPSBob3Vyc1tpXS50ZW1wOyB9XG4gICAgaWYgKGhvdXJzW2ldLnRlbXAgPiBtYXgpIHsgbWF4ID0gaG91cnNbaV0udGVtcDsgfVxuICB9XG4gIGlmIChtaW4gPT09IG1heCkgeyBtaW4gLT0gMTsgbWF4ICs9IDE7IH1cbiAgY29uc3Qgc3BhbiA9IG1heCAtIG1pbjtcblxuICBjb25zdCB4ID0gKGkpID0+IFBBRF9MICsgKG4gPD0gMSA/IDAgOiAoaSAvIChuIC0gMSkpICogaW5uZXJXKTtcbiAgY29uc3QgeSA9ICh0KSA9PiBDSEFSVF9UT1AgKyAoMSAtICh0IC0gbWluKSAvIHNwYW4pICogQ0hBUlRfSDtcblxuICAvLyBCdWlsZCB0aGUgcG9pbnRzLCB0aGVuIGEgc21vb3RoIHBhdGggdmlhIHF1YWRyYXRpYyBtaWRwb2ludHMgKG5vIG92ZXJzaG9vdCkuXG4gIGNvbnN0IHB0cyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykgeyBwdHMucHVzaCh7IHg6IHgoaSksIHk6IHkoaG91cnNbaV0udGVtcCkgfSk7IH1cblxuICBsZXQgZCA9ICdNICcgKyBwdHNbMF0ueC50b0ZpeGVkKDIpICsgJyAnICsgcHRzWzBdLnkudG9GaXhlZCgyKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwdHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCB4YyA9IChwdHNbaSAtIDFdLnggKyBwdHNbaV0ueCkgLyAyO1xuICAgIGNvbnN0IHljID0gKHB0c1tpIC0gMV0ueSArIHB0c1tpXS55KSAvIDI7XG4gICAgZCArPSAnIFEgJyArIHB0c1tpIC0gMV0ueC50b0ZpeGVkKDIpICsgJyAnICsgcHRzW2kgLSAxXS55LnRvRml4ZWQoMikgK1xuICAgICAgJyAnICsgeGMudG9GaXhlZCgyKSArICcgJyArIHljLnRvRml4ZWQoMik7XG4gIH1cbiAgZCArPSAnIEwgJyArIHB0c1tuIC0gMV0ueC50b0ZpeGVkKDIpICsgJyAnICsgcHRzW24gLSAxXS55LnRvRml4ZWQoMik7XG5cbiAgY3VydmVQYXRoLnNldEF0dHJpYnV0ZSgnZCcsIGQpO1xuICBmaWxsUGF0aC5zZXRBdHRyaWJ1dGUoJ2QnLCBkICtcbiAgICAnIEwgJyArIHB0c1tuIC0gMV0ueC50b0ZpeGVkKDIpICsgJyAnICsgYmFzZWxpbmUgK1xuICAgICcgTCAnICsgcHRzWzBdLngudG9GaXhlZCgyKSArICcgJyArIGJhc2VsaW5lICsgJyBaJyk7XG5cbiAgLy8gSG9yaXpvbnRhbCB0ZW1wZXJhdHVyZSBncmFkaWVudDogb25lIHN0b3AgcGVyIGhvdXIsIGNvbG91cmVkIGJ5IHRoYXQgaG91cidzXG4gIC8vIHRlbXBlcmF0dXJlLiBvYmplY3RCb3VuZGluZ0JveCBtYXBzIG9mZnNldCBpLyhuLTEpIG9udG8gdGhlIGN1cnZlJ3MgeCwgd2hpY2hcbiAgLy8gc3BhbnMgdGhlIGZ1bGwgaW5uZXIgd2lkdGgsIHNvIGVhY2ggc3RvcCBsYW5kcyB1bmRlciBpdHMgaG91ci5cbiAgY2xlYXIodGVtcEdyYWQpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgIHRlbXBHcmFkLmFwcGVuZENoaWxkKGVsKCdzdG9wJywge1xuICAgICAgb2Zmc2V0OiAobiA8PSAxID8gMCA6IGkgLyAobiAtIDEpKS50b0ZpeGVkKDQpLFxuICAgICAgJ3N0b3AtY29sb3InOiB0ZW1wQ29sb3VyKGhvdXJzW2ldLnRlbXApLFxuICAgIH0pKTtcbiAgfVxuXG4gIC8vIERheSBoYWlybGluZXMgKyBXRUQvVEhVL0ZSSSB0aWNrcywgZGVyaXZlZCBmcm9tIHRoZSBwZXItZGF5IGhvdXIgY291bnRzIHNvIGFcbiAgLy8gc2hvcnQgdHJhaWxpbmcgZGF5IHN0aWxsIGxpbmVzIHVwLlxuICBjbGVhcihib3VuZGFyeUdyb3VwKTtcbiAgY2xlYXIodGlja0dyb3VwKTtcbiAgY29uc3QgZGF5cyA9IGZvcmVjYXN0LmRheXMgfHwgW107XG4gIGxldCBzdGFydCA9IDA7XG4gIGZvciAobGV0IGRpID0gMDsgZGkgPCBkYXlzLmxlbmd0aDsgZGkrKykge1xuICAgIGNvbnN0IGNvdW50ID0gZGF5c1tkaV0uY291bnQgfHwgMDtcbiAgICBpZiAoY291bnQgPD0gMCkgeyBjb250aW51ZTsgfVxuXG4gICAgaWYgKGRpID4gMCAmJiBzdGFydCA8IG4pIHtcbiAgICAgIGNvbnN0IGJ4ID0geChzdGFydCkudG9GaXhlZCgyKTtcbiAgICAgIGJvdW5kYXJ5R3JvdXAuYXBwZW5kQ2hpbGQoZWwoJ2xpbmUnLCB7XG4gICAgICAgIGNsYXNzOiAncmliYm9uLWhhaXJsaW5lJyxcbiAgICAgICAgeDE6IGJ4LCB5MTogQ0hBUlRfVE9QLCB4MjogYngsIHkyOiBiYXNlbGluZSxcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBjb25zdCBjZW50ZXJJZHggPSBzdGFydCArIChjb3VudCAtIDEpIC8gMjtcbiAgICBjb25zdCB0aWNrID0gZWwoJ3RleHQnLCB7XG4gICAgICBjbGFzczogJ3JpYmJvbi10aWNrJyxcbiAgICAgIHg6IHgoY2VudGVySWR4KS50b0ZpeGVkKDIpLFxuICAgICAgeTogKGJhc2VsaW5lICsgVElDS19IICogMC43KS50b0ZpeGVkKDIpLFxuICAgICAgJ3RleHQtYW5jaG9yJzogJ21pZGRsZScsXG4gICAgfSk7XG4gICAgdGljay50ZXh0Q29udGVudCA9IHdlZWtkYXlBYmJyKGRheXNbZGldLmRhdGUpO1xuICAgIHRpY2tHcm91cC5hcHBlbmRDaGlsZCh0aWNrKTtcblxuICAgIHN0YXJ0ICs9IGNvdW50O1xuICB9XG5cbiAgLy8gQ3VycmVudC1ob3VyIG1hcmtlcjogYSBoYWlybGluZSBkcm9wcGVkIHRvIHRoZSBiYXNlbGluZSBwbHVzIGEgZG90IG9uIHRoZVxuICAvLyBjdXJ2ZSwgdGhlIGRvdCBmaWxsZWQgd2l0aCB0aGUgdGVtcGVyYXR1cmUgY29sb3VyIGZvciB0aGF0IGhvdXIuXG4gIGNsZWFyKG1hcmtlckdyb3VwKTtcbiAgY29uc3QgaWR4ID0gY3VycmVudEhvdXJJbmRleChmb3JlY2FzdCk7XG4gIGNvbnN0IG14ID0geChpZHgpO1xuICBjb25zdCBteSA9IHkoaG91cnNbaWR4XS50ZW1wKTtcbiAgbWFya2VyR3JvdXAuYXBwZW5kQ2hpbGQoZWwoJ2xpbmUnLCB7XG4gICAgY2xhc3M6ICdyaWJib24tbm93bGluZScsXG4gICAgeDE6IG14LnRvRml4ZWQoMiksIHkxOiBteS50b0ZpeGVkKDIpLCB4MjogbXgudG9GaXhlZCgyKSwgeTI6IGJhc2VsaW5lLFxuICB9KSk7XG4gIG1hcmtlckdyb3VwLmFwcGVuZENoaWxkKGVsKCdjaXJjbGUnLCB7XG4gICAgY2xhc3M6ICdyaWJib24tZG90JyxcbiAgICBjeDogbXgudG9GaXhlZCgyKSwgY3k6IG15LnRvRml4ZWQoMiksIHI6ICc1LjUnLFxuICAgIGZpbGw6IHRlbXBDb2xvdXIoaG91cnNbaWR4XS50ZW1wKSxcbiAgfSkpO1xuXG4gIC8vIE9wdGlvbmFsIHNlY29uZCBsYW5lLiBObyBkYXRhIGZlZWRzIGl0IHRvZGF5ICh0aWRlcyBhcmUgUHJvKyBhbmQgZW1wdHkgZm9yXG4gIC8vIGlubGFuZCBsb2NhdGlvbnMpLCBzbyBpdCBzdGF5cyBlbXB0eSBhbmQgdGhlIHZpZXdCb3ggdXNlcyB0aGUgc2hvcnRlciBvZiB0aGVcbiAgLy8gdHdvIGhlaWdodHMg4oCUIGJ1dCB0aGUgZ3JvdXAgYW5kIHRoZSBoZWlnaHQgc3dpdGNoIGV4aXN0IHNvIGEgbGFuZSBjYW4gZHJvcCBpblxuICAvLyB3aXRob3V0IGEgbGF5b3V0IHJld3JpdGUuXG4gIGNsZWFyKGxhbmVHcm91cCk7XG4gIGlmIChsYW5lT24gJiYgdHlwZW9mIGZvcmVjYXN0LmxhbmUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBmb3JlY2FzdC5sYW5lKGxhbmVHcm91cCwgeyB4LCBiYXNlbGluZSwgbGFuZVRvcDogYmFzZWxpbmUgKyBUSUNLX0gsIGxhbmVIOiBMQU5FX0ggfSk7XG4gIH1cbn1cbiIsIi8vIHNreS5qcyDigJQgYSBjb25kaXRpb24tYmFzZWQgYmFja2dyb3VuZCBtb3VudGVkIGJlaGluZCB0aGUgYXBwLlxuLy9cbi8vIFB1cmUgdmFuaWxsYSwgbm8gZGVwZW5kZW5jaWVzLiBBIHNpbmdsZSBgLndlYXRoZXJCZ2AgZWxlbWVudCBpcyBpbnNlcnRlZCBhc1xuLy8gdGhlIEZJUlNUIGNoaWxkIG9mIGAjYXBwYCBhbmQgcG9zaXRpb25lZCBgZml4ZWRgIChzZWUgc3R5bGUuY3NzKSwgc28gaXQgc3BhbnNcbi8vIHRoZSB3aG9sZSBicm93c2VyIHdpbmRvdyBvbiBkZXNrdG9wIHdoaWxlIGAjYXBwYCBzdGF5cyBhIGNvbnN0cmFpbmVkIGNlbnRyZWRcbi8vIGNvbHVtbiBhYm92ZSBpdCAoei1pbmRleCkuIFRoZSBlbGVtZW50IGNhcnJpZXMgYSBgYmctPGNhdGVnb3J5PmAgY2xhc3MgdGhhdFxuLy8gc2VsZWN0cyBhIHBlci1jb25kaXRpb24gdHJlYXRtZW50IGluIHN0eWxlLmNzcyDigJQgYSBncmFkaWVudCBiYXNlIHBsdXNcbi8vIGRlY29yYXRpdmUgbGF5ZXJzIChzdW4sIG1vb24gKyB0d2lua2xpbmcgc3RhcnMsIGRyaWZ0aW5nIGNsb3VkcywgZmxha2VzLCBoYXplKVxuLy8gb24gdGhlIHR3byBwc2V1ZG8tZWxlbWVudHMuIEFsbCBpbWFnZXJ5IGFuZCBtb3Rpb24gbGl2ZSBpbiBzdHlsZS5jc3MuXG4vL1xuLy8gVGhlIGNhdGVnb3J5IGlzIHJlc29sdmVkIGZyb20gYG5vdy5jb25kaXRpb25gICh0aGUgV2VhdGhlckFQSSBjb25kaXRpb24gdGV4dClcbi8vIGFuZCByZS1hcHBsaWVkIG9uIGV2ZXJ5IGZldGNoIHZpYSBzZXRXZWF0aGVyQmcoKSwgc28gdGhlIGJhY2tncm91bmQgZm9sbG93c1xuLy8gdGhlIGN1cnJlbnQgbG9jYXRpb24ncyB3ZWF0aGVyLiBPZmYgdGhlIHJlbmRlciBwYXRoIGl0c2VsZjogaW5kZXguanMgbW91bnRzXG4vLyB0aGUgbGF5ZXIgb25jZSBhdCBib290c3RyYXAsIGFuZCBpbmRleENoYW5nZXMuanMgc3dhcHMgb25seSB0aGUgY2xhc3MuXG4vL1xuLy8gVGhlIG1vdGlvbiBpcyBndWFyZGVkIHRoZSBzYW1lIHdheSB0aGUgb2xkIGRyaWZ0IHdhczpcbi8vICAgLSBwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UgLT4gdGhlIENTUyBhbmltYXRpb25zIGFyZSBkaXNhYmxlZCBieSBhXG4vLyAgICAgICBtZWRpYSBxdWVyeSwgc28gZWFjaCB0cmVhdG1lbnQgcmVuZGVycyBhcyBvbmUgc3RhdGljIGZyYW1lLlxuLy8gICAtIHZpc2liaWxpdHljaGFuZ2UgLT4gYWRkIGEgYC5wYXVzZWRgIGNsYXNzIHRoYXQgcGF1c2VzIHRoZSBDU1MgYW5pbWF0aW9uc1xuLy8gICAgICAgd2hpbGUgdGhlIHRhYiBpcyBoaWRkZW4sIHJlbW92ZWQgd2hlbiBpdCBiZWNvbWVzIHZpc2libGUgYWdhaW4uXG5cbmxldCBiZ0VsID0gbnVsbDtcbmxldCBjdXJyZW50Q2F0ZWdvcnkgPSBudWxsO1xuXG4vLyBUaGUgY2F0ZWdvcnkgYXBwbGllZCBiZWZvcmUgdGhlIGZpcnN0IGZldGNoIHJlc29sdmVzIOKAlCBhIGNhbG0sIG5ldXRyYWwgc2t5LlxuY29uc3QgREVGQVVMVF9DQVRFR09SWSA9ICdjbG91ZHknO1xuXG5mdW5jdGlvbiByZWR1Y2VNb3Rpb24oKSB7XG4gIHJldHVybiAhISh3aW5kb3cubWF0Y2hNZWRpYSAmJiB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSknKS5tYXRjaGVzKTtcbn1cblxuLy8gTWFwIGEgV2VhdGhlckFQSSBjb25kaXRpb24gc3RyaW5nIHRvIG9uZSBvZiB0aGUgYmFja2dyb3VuZCB0cmVhdG1lbnRzIGRlZmluZWRcbi8vIGluIHN0eWxlLmNzcy4gT3JkZXIgbWF0dGVyczogdGhlIG1vcmUgc3BlY2lmaWMgcHJlY2lwaXRhdGlvbiBjaGVja3MgcnVuIGJlZm9yZVxuLy8gdGhlIGJyb2FkIGNsb3VkL2NsZWFyIG9uZXMgc28gXCJMaWdodCByYWluIHNob3dlclwiIGFuZCBcIlBhdGNoeSBzbm93XCIgcmVzb2x2ZSB0b1xuLy8gdGhlaXIgcHJlY2lwaXRhdGlvbiBjYXRlZ29yeSByYXRoZXIgdGhhbiBmYWxsaW5nIHRocm91Z2guIEFueXRoaW5nIHVubWF0Y2hlZFxuLy8gbGFuZHMgb24gdGhlIG5ldXRyYWwgJ2Nsb3VkeScgdHJlYXRtZW50LlxuZnVuY3Rpb24gY2F0ZWdvcnlGb3IodGV4dCkge1xuICBjb25zdCB0ID0gU3RyaW5nKHRleHQgfHwgJycpLnRvTG93ZXJDYXNlKCk7XG4gIGlmICgvc25vd3xzbGVldHxibGl6emFyZHxpY2V8Zmx1cnIvLnRlc3QodCkpIHsgcmV0dXJuICdzbm93JzsgfVxuICBpZiAoL3JhaW58ZHJpenpsZXxzaG93ZXJ8dGh1bmRlci8udGVzdCh0KSkgeyByZXR1cm4gJ3JhaW4nOyB9XG4gIGlmICgvZm9nfG1pc3R8aGF6ZS8udGVzdCh0KSkgeyByZXR1cm4gJ2ZvZyc7IH1cbiAgaWYgKC9zdW5ueS8udGVzdCh0KSkgeyByZXR1cm4gJ3N1bm55JzsgfVxuICBpZiAoL2NsZWFyLy50ZXN0KHQpKSB7IHJldHVybiAnY2xlYXItbmlnaHQnOyB9XG4gIHJldHVybiAnY2xvdWR5JzsgLy8gY2xvdWR5LCBvdmVyY2FzdCwgcGFydGx5IGNsb3VkeSwgYW5kIGFueSB1bmtub3duIHRleHRcbn1cblxuLy8gRnJlZXplIHRoZSBkcmlmdCB3aGlsZSB0aGUgdGFiIGlzIGhpZGRlbiwgcmVzdW1lIHdoZW4gaXQgY29tZXMgYmFjay4gVW5kZXJcbi8vIHJlZHVjZWQgbW90aW9uIG5vdGhpbmcgaXMgYW5pbWF0aW5nLCBzbyBgLnBhdXNlZGAgaXMgYSBoYXJtbGVzcyBuby1vcC5cbmZ1bmN0aW9uIG9uVmlzaWJpbGl0eSgpIHtcbiAgaWYgKCFiZ0VsKSB7IHJldHVybjsgfVxuICBpZiAoZG9jdW1lbnQuaGlkZGVuKSB7XG4gICAgYmdFbC5jbGFzc0xpc3QuYWRkKCdwYXVzZWQnKTtcbiAgfSBlbHNlIHtcbiAgICBiZ0VsLmNsYXNzTGlzdC5yZW1vdmUoJ3BhdXNlZCcpO1xuICB9XG59XG5cbi8vIFN3YXAgdGhlIGJhY2tncm91bmQgdHJlYXRtZW50IHRvIG1hdGNoIGEgY29uZGl0aW9uLiBDYWxsZWQgZnJvbSB0aGUgcmVuZGVyXG4vLyBwYXRoIG9uIGV2ZXJ5IGZldGNoOyBhIG5vLW9wIHdoZW4gdGhlIHJlc29sdmVkIGNhdGVnb3J5IGhhc24ndCBjaGFuZ2VkLCBzbyBhXG4vLyB1bml0IHRvZ2dsZSBvciBhIHJlcGVhdCBzZWFyY2ggZG9lc24ndCByZXN0YXJ0IHRoZSBhbmltYXRpb25zLiBTYWZlIHRvIGNhbGxcbi8vIGJlZm9yZSBpbml0V2VhdGhlckJnKCkgaGFzIHJ1biDigJQgdGhlIGNhdGVnb3J5IGlzIHJlbWVtYmVyZWQgYW5kIGFwcGxpZWQgdGhlbi5cbmV4cG9ydCBmdW5jdGlvbiBzZXRXZWF0aGVyQmcoY29uZGl0aW9uVGV4dCkge1xuICBjb25zdCBjYXRlZ29yeSA9IGNhdGVnb3J5Rm9yKGNvbmRpdGlvblRleHQpO1xuICBpZiAoY2F0ZWdvcnkgPT09IGN1cnJlbnRDYXRlZ29yeSkgeyByZXR1cm47IH1cbiAgaWYgKGN1cnJlbnRDYXRlZ29yeSkgeyBiZ0VsICYmIGJnRWwuY2xhc3NMaXN0LnJlbW92ZSgnYmctJyArIGN1cnJlbnRDYXRlZ29yeSk7IH1cbiAgY3VycmVudENhdGVnb3J5ID0gY2F0ZWdvcnk7XG4gIGlmIChiZ0VsKSB7IGJnRWwuY2xhc3NMaXN0LmFkZCgnYmctJyArIGNhdGVnb3J5KTsgfVxufVxuXG4vLyBNb3VudCB0aGUgYmFja2dyb3VuZCBsYXllciBvbmNlLCBhcyB0aGUgZmlyc3QgY2hpbGQgb2YgdGhlIGdpdmVuIGhvc3QgKGAjYXBwYCkuXG4vLyBTYWZlIHRvIGNhbGwgYWdhaW4g4oCUIGl0IG9ubHkgZXZlciBtb3VudHMgYSBzaW5nbGUgZWxlbWVudC4gQXBwbGllcyB3aGF0ZXZlclxuLy8gY2F0ZWdvcnkgaGFzIGJlZW4gc2V0IHNvIGZhciwgb3IgYSBuZXV0cmFsIGRlZmF1bHQgdW50aWwgdGhlIGZpcnN0IGZldGNoLlxuZXhwb3J0IGZ1bmN0aW9uIGluaXRXZWF0aGVyQmcoaG9zdEVsKSB7XG4gIGlmIChiZ0VsKSB7IHJldHVybjsgfSAvLyBtb3VudCBvbmNlXG4gIGNvbnN0IGhvc3QgPSBob3N0RWwgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpO1xuICBpZiAoIWhvc3QpIHsgcmV0dXJuOyB9XG5cbiAgYmdFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBiZ0VsLmNsYXNzTmFtZSA9ICd3ZWF0aGVyQmcnO1xuICBiZ0VsLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICBiZ0VsLmNsYXNzTGlzdC5hZGQoJ2JnLScgKyAoY3VycmVudENhdGVnb3J5IHx8IERFRkFVTFRfQ0FURUdPUlkpKTtcbiAgaWYgKCFjdXJyZW50Q2F0ZWdvcnkpIHsgY3VycmVudENhdGVnb3J5ID0gREVGQVVMVF9DQVRFR09SWTsgfVxuICBob3N0Lmluc2VydEJlZm9yZShiZ0VsLCBob3N0LmZpcnN0Q2hpbGQpO1xuXG4gIC8vIE5vdGhpbmcgZHJpZnRzIHVuZGVyIHJlZHVjZWQgbW90aW9uICh0aGUgQ1NTIG1lZGlhIHF1ZXJ5IGRpc2FibGVzIHRoZVxuICAvLyBhbmltYXRpb25zKSwgc28gdGhlcmUgaXMgbm90aGluZyB0byBwYXVzZSDigJQgc2tpcCB0aGUgbGlzdGVuZXIgaW4gdGhhdCBjYXNlLlxuICBpZiAoIXJlZHVjZU1vdGlvbigpKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsIG9uVmlzaWJpbGl0eSk7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvV2VhdGhlckFwcF9UT1AvXCI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJjaGFuZ2VzXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4Q2hhbmdlcy5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==