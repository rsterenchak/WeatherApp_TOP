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
/******/ 			"index": 0
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic.js */ "./src/logic.js");
/* harmony import */ var _indexChanges_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./indexChanges.js */ "./src/indexChanges.js");
/* harmony import */ var _ribbon_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ribbon.js */ "./src/ribbon.js");
/* harmony import */ var _favourites_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./favourites.js */ "./src/favourites.js");
/* harmony import */ var _sky_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sky.js */ "./src/sky.js");

 // defines forecastLogic (no fetch fires at import — see initFavourites)





// The whole UI is built here with document.createElement (there is no HTML source
// file — html-webpack-plugin generates an empty document). The forecast is one
// continuous temperature ribbon across all three days, a readout beneath it, and
// a search box: no cards, no arrows, no per-condition theme, no day navigation.

// A desktop-only prev/next chevron flanking the saved-location dots. Inline SVG
// so CSS can recolour the stroke via currentColor (idle muted, brighter on
// hover). favourites.js wires the clicks to rotate(); the pair is hidden with
// the dots below two locations, and hidden entirely at ≤480px where swipe rules.
function navArrow(id, dir, label) {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.id = id;
  btn.className = 'arrow';
  btn.setAttribute('aria-label', label);
  const points = dir < 0 ? '13,3 7,7 13,11' : '7,3 13,7 7,11';
  btn.innerHTML =
    '<svg width="20" height="14" viewBox="0 0 20 14" fill="none" ' +
    'stroke="currentColor" stroke-width="2" stroke-linecap="round" ' +
    'stroke-linejoin="round" aria-hidden="true">' +
    '<polyline points="' + points + '"></polyline></svg>';
  return btn;
}

// One option in the segmented C/F unit switch. The buttons carry no logic here —
// indexChanges.js wires the clicks once in wireEvents() and owns both the active
// state and the display-only Celsius→Fahrenheit conversion.
function unitOpt(unit) {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'unitOpt';
  btn.dataset.unit = unit;
  btn.textContent = '°' + unit;
  return btn;
}

function stat(id, label) {
  const cell = document.createElement('div');
  cell.className = 'stat';

  const labelEl = document.createElement('div');
  labelEl.className = 'stat-label';
  labelEl.textContent = label;

  const valueEl = document.createElement('div');
  valueEl.className = 'stat-value';
  valueEl.id = id;
  valueEl.textContent = '—';

  cell.appendChild(labelEl);
  cell.appendChild(valueEl);
  return cell;
}

function component() {
  const app = document.createElement('div');
  app.id = 'app';

  // Ribbon panel — the SVG curve is mounted into #ribbonWrap by buildRibbon().
  const ribbonWrap = document.createElement('div');
  ribbonWrap.id = 'ribbonWrap';

  // Readout: location, current temperature, condition, and a four-up stat row.
  const readout = document.createElement('div');
  readout.id = 'readout';

  // Location name paired with a compact C/F unit switch on one row. The switch
  // flips the temperature readouts (current + feels like) between °C and °F for
  // display only; the raw Celsius still flows to ribbon.js unchanged.
  const locationRow = document.createElement('div');
  locationRow.id = 'locationRow';

  const locationName = document.createElement('div');
  locationName.id = 'locationName';
  locationName.textContent = '—';

  const unitSwitch = document.createElement('div');
  unitSwitch.id = 'unitSwitch';
  unitSwitch.appendChild(unitOpt('C'));
  unitSwitch.appendChild(unitOpt('F'));

  locationRow.appendChild(locationName);
  locationRow.appendChild(unitSwitch);

  // Saved-location indicator: one dot per saved location, the current one filled.
  // Populated by favourites.js. The dots sit inside a .navRow between two
  // desktop-only prev/next arrows; favourites.js gates the whole row's
  // visibility (hidden until two or more locations are saved).
  const navRow = document.createElement('div');
  navRow.className = 'navRow hidden';

  const dotRow = document.createElement('div');
  dotRow.id = 'dotRow';

  navRow.appendChild(navArrow('navPrev', -1, 'Previous location'));
  navRow.appendChild(dotRow);
  navRow.appendChild(navArrow('navNext', 1, 'Next location'));

  const currentTemp = document.createElement('div');
  currentTemp.id = 'currentTemp';
  currentTemp.textContent = '—';

  const currentCondition = document.createElement('div');
  currentCondition.id = 'currentCondition';
  currentCondition.textContent = '—';

  const statRow = document.createElement('div');
  statRow.id = 'statRow';
  statRow.appendChild(stat('feelsVal', 'FEELS LIKE'));
  statRow.appendChild(stat('humidityVal', 'HUMIDITY'));
  statRow.appendChild(stat('rainVal', 'RAIN'));
  statRow.appendChild(stat('windVal', 'WIND'));

  readout.appendChild(locationRow);
  readout.appendChild(navRow);
  readout.appendChild(currentTemp);
  readout.appendChild(currentCondition);
  readout.appendChild(statRow);

  // The ribbon and its readout are wrapped in one card so they slide together as
  // a single unit on a committed mobile swipe (favourites.js drives the
  // direction-aware slide via #weatherCard.slide-* in style.css). It's a plain
  // flex column at every width — the wrapping is transparent to the layout.
  const weatherCard = document.createElement('div');
  weatherCard.id = 'weatherCard';
  weatherCard.appendChild(ribbonWrap);
  weatherCard.appendChild(readout);

  // Search form. A real <form> + submit button so Enter and click share one
  // submit event (wired once in wireEvents()).
  const searchForm = document.createElement('form');
  searchForm.id = 'searchForm';

  // The input and its autocomplete dropdown share a relatively-positioned wrapper
  // so #suggestions can hang beneath #searchInput (top: 100%) and align to its
  // edges, instead of becoming a third flex child of the row.
  const searchInputWrap = document.createElement('div');
  searchInputWrap.id = 'searchInputWrap';

  const searchInput = document.createElement('input');
  searchInput.id = 'searchInput';
  searchInput.type = 'text';
  searchInput.placeholder = 'Search location';
  searchInput.setAttribute('autocomplete', 'off');

  // City-suggestion dropdown. Populated by a debounced lookup wired once in
  // wireEvents(); hidden until there are matches to show.
  const suggestions = document.createElement('div');
  suggestions.id = 'suggestions';
  suggestions.className = 'hidden';
  suggestions.setAttribute('role', 'listbox');

  const searchButton = document.createElement('button');
  searchButton.id = 'searchButton';
  searchButton.type = 'submit';
  searchButton.textContent = 'Submit';

  searchInputWrap.appendChild(searchInput);
  searchInputWrap.appendChild(suggestions);

  searchForm.appendChild(searchInputWrap);
  searchForm.appendChild(searchButton);

  app.appendChild(weatherCard);
  app.appendChild(searchForm);

  return app;
}

document.body.appendChild(component());

// Mount the drifting-gradient background behind the app content (first child of
// #app, under everything via z-index). Off the render path — it never repaints
// on a fetch.
(0,_sky_js__WEBPACK_IMPORTED_MODULE_5__.initWeatherBg)(document.getElementById('app'));

// Build the SVG scaffold now that #ribbonWrap exists, then register listeners
// exactly once. Both run off the render path, so nothing multiplies across
// fetches. initFavourites() loads the saved locations, wires the swipe/dot
// gestures once, draws the dots, and fires the single initial fetch (the first
// saved location, or the default when none are saved), which resolves
// afterwards and renders into this scaffold.
(0,_ribbon_js__WEBPACK_IMPORTED_MODULE_3__.buildRibbon)(document.getElementById('ribbonWrap'));
(0,_indexChanges_js__WEBPACK_IMPORTED_MODULE_2__.wireEvents)();
(0,_favourites_js__WEBPACK_IMPORTED_MODULE_4__.initFavourites)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMscUhBQXVDO0FBQ25GLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQ7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUyw0Q0FBNEM7QUFDckQsU0FBUyw0Q0FBNEM7QUFDckQ7O0FBRUE7QUFDQSxTQUFTO0FBQ1QsU0FBUztBQUNUOztBQUVBO0FBQ0EsU0FBUztBQUNULFNBQVM7QUFDVDs7QUFFQTtBQUNBLFNBQVM7QUFDVCxTQUFTO0FBQ1Q7O0FBRUE7QUFDQSxTQUFTO0FBQ1QsU0FBUztBQUNUOztBQUVBO0FBQ0EsU0FBUyw0QkFBNEI7QUFDckMsU0FBUyw0QkFBNEI7QUFDckM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEVBQTRFO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTLDBCQUEwQjtBQUNuQyxVQUFVLDhCQUE4QjtBQUN4QyxVQUFVLDZCQUE2QjtBQUN2QyxXQUFXLDBCQUEwQjtBQUNyQzs7QUFFQTtBQUNBLFNBQVMsMEJBQTBCO0FBQ25DLFVBQVUsNkJBQTZCO0FBQ3ZDLFVBQVUsOEJBQThCO0FBQ3hDLFdBQVcsMEJBQTBCO0FBQ3JDOztBQUVBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxPQUFPLFFBQVEsT0FBTyxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sd0JBQXdCLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sYUFBYSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLE1BQU0sTUFBTSxVQUFVLFVBQVUsT0FBTyxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFBVSxNQUFNLE9BQU8sYUFBYSxPQUFPLEtBQUssZ0NBQWdDLGlDQUFpQyxPQUFPLEtBQUssb0JBQW9CLHFCQUFxQixPQUFPLEtBQUssc0JBQXNCLHVCQUF1QixPQUFPLEtBQUssc0JBQXNCLHVCQUF1QixPQUFPLEtBQUssc0JBQXNCLHVCQUF1QixPQUFPLEtBQUssZ0NBQWdDLGlDQUFpQyxPQUFPLFlBQVksT0FBTyxZQUFZLE9BQU8sS0FBSyxPQUFPLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxNQUFNLE9BQU8sTUFBTSx3QkFBd0IsV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssT0FBTyxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLFlBQVksTUFBTSx3QkFBd0IsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssT0FBTyxPQUFPLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLFlBQVksTUFBTSx3QkFBd0IsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sT0FBTyxNQUFNLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSx1QkFBdUIsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVks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O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzREFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBVztBQUNYLDREQUFVO0FBQ1YsOERBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vLi9zcmMvZmF2b3VyaXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vLi9zcmMvaW5kZXhDaGFuZ2VzLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL3NyYy9sb2dpYy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vLi9zcmMvcmliYm9uLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL3NyYy9za3kuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vUm9ib3RvLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgZm9udC13ZWlnaHQ6IDMwMCA0MDA7XG59XG5cbi8qIFBhbGV0dGU6XG4gICBncm91bmQgICMxMjE4MUYgICBydWxlcyAgIzI2MzEzQlxuICAgdGV4dCAgICAjRUFFRUYyIChwcmltYXJ5KSAvICM4Q0EwQUUgKG11dGVkKVxuICAgVGhlIHRlbXBlcmF0dXJlIGNvbG91cnMgbGl2ZSBpbiByaWJib24uanMgKHRoZSBjdXJ2ZSBpcyBjb2xvdXJlZCBieSB0aGVcbiAgIHRlbXBlcmF0dXJlIHNjYWxhciwgbm90IGJ5IENTUykuICovXG46cm9vdCB7XG4gIC0tZ3JvdW5kOiAjMTIxODFGO1xuICAtLXJ1bGU6ICMyNjMxM0I7XG4gIC0tdGV4dDogI0VBRUVGMjtcbiAgLS1tdXRlZDogIzhDQTBBRTtcbiAgLS1tb25vOiAnU0ZNb25vLVJlZ3VsYXInLCAnU0YgTW9ubycsICdNZW5sbycsICdDb25zb2xhcycsICdMaWJlcmF0aW9uIE1vbm8nLCBtb25vc3BhY2U7XG59XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncm91bmQpO1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuLyogZHZoIChub3QgdmgpOiBvbiBpT1MgU2FmYXJpIHZoIHJlc29sdmVzIHRvIHRoZSB0YWxsIHZpZXdwb3J0IGFuZCBwYXJrcyB0aGVcbiAgIGJvdHRvbSBvZiB0aGUgbGF5b3V0IHVuZGVyIHRoZSBVUkwgYmFyLiAqL1xuI2FwcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgLyogc3RhY2tzIHRoZSBjb25zdHJhaW5lZCBjb2x1bW4gYWJvdmUgdGhlIGZpeGVkIC53ZWF0aGVyQmcgKi9cbiAgei1pbmRleDogMTtcbiAgbWluLWhlaWdodDogMTAwZHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAyOHB4O1xuICBtYXgtd2lkdGg6IDcyMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMzJweCAyMHB4O1xufVxuXG4vKiBDb25kaXRpb24tYmFzZWQgYmFja2dyb3VuZC4gc2t5LmpzIG1vdW50cyBhIHNpbmdsZSBcXGAud2VhdGhlckJnXFxgIGFzIHRoZSBmaXJzdFxuICAgY2hpbGQgb2YgI2FwcCBhbmQgc3dhcHMgYSBcXGBiZy08Y2F0ZWdvcnk+XFxgIGNsYXNzIG9udG8gaXQgcGVyIGZldGNoLCBrZXllZCBvZmZcbiAgIHRoZSBjdXJyZW50IGNvbmRpdGlvbiB0ZXh0IChjYXRlZ29yeUZvcigpIGluIHNreS5qcykuIEl0IGlzIFxcYGZpeGVkXFxgIHNvIGl0XG4gICBzcGFucyB0aGUgd2hvbGUgYnJvd3NlciB3aW5kb3cgb24gZGVza3RvcCB3aGlsZSAjYXBwIHN0YXlzIGEgY29uc3RyYWluZWRcbiAgIGNlbnRyZWQgY29sdW1uIGFib3ZlIGl0ICh6LWluZGV4KS4gRWFjaCBjYXRlZ29yeSBwYWludHMgYSBncmFkaWVudCBiYXNlIG9uIHRoZVxuICAgZWxlbWVudCBwbHVzIGRlY29yYXRpdmUgbGF5ZXJzIChzdW4sIG1vb24gKyBzdGFycywgZHJpZnRpbmcgY2xvdWRzLCBmbGFrZXMsXG4gICBoYXplKSBvbiB0aGUgdHdvIHBzZXVkby1lbGVtZW50cy4gb3ZlcmZsb3c6IGhpZGRlbiBjbGlwcyB0aG9zZSBsYXllcnMgdG8gdGhlXG4gICB2aWV3cG9ydCBzbyBhbiBvdmVyc2l6ZWQgY2xvdWQgY2FuJ3Qgc3BpbGwgYSBzY3JvbGxiYXIuIFRoZSBncmFkaWVudHMgY3Jvc3MtXG4gICBmYWRlICh0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kKSB3aGVuIHRoZSBjYXRlZ29yeSBjaGFuZ2VzOyB0aGUgZGVjb3JhdGl2ZVxuICAgbW90aW9uIGxpdmVzIGluIHRoZSBwZXItY2F0ZWdvcnkga2V5ZnJhbWVzIGJlbG93LiAqL1xuLndlYXRoZXJCZyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaW5zZXQ6IDA7XG4gIHotaW5kZXg6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMWIyODM2IDAlLCAjMTQxZDI5IDU1JSwgdmFyKC0tZ3JvdW5kKSAxMDAlKTtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCA2MDBtcyBlYXNlO1xufVxuXG4ud2VhdGhlckJnOjpiZWZvcmUsXG4ud2VhdGhlckJnOjphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4vKiBTVU5OWSDigJQgd2FybSBkYXl0aW1lIHNreSB3aXRoIGEgc29mdCBzdW4gZ2xvdyB0aGF0IHNsb3dseSBicmVhdGhlcy4gKi9cbi53ZWF0aGVyQmcuYmctc3Vubnkge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMmM0YzcyIDAlLCAjMWEyYzQwIDU1JSwgdmFyKC0tZ3JvdW5kKSAxMDAlKTtcbn1cbi53ZWF0aGVyQmcuYmctc3Vubnk6OmJlZm9yZSB7XG4gIHRvcDogLTEyJTtcbiAgcmlnaHQ6IC02JTtcbiAgd2lkdGg6IDQ2dm1heDtcbiAgaGVpZ2h0OiA0NnZtYXg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCBjZW50ZXIsIHJnYmEoMjE3LCAxNjQsIDY1LCAwLjQ1KSwgcmdiYSgyMTcsIDE2NCwgNjUsIDApIDY4JSk7XG4gIGFuaW1hdGlvbjogYmdTdW4gMTRzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcbn1cbi53ZWF0aGVyQmcuYmctc3Vubnk6OmFmdGVyIHtcbiAgYm90dG9tOiAtMTglO1xuICBsZWZ0OiAtMTIlO1xuICB3aWR0aDogNDB2bWF4O1xuICBoZWlnaHQ6IDQwdm1heDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IGNlbnRlciwgcmdiYSgxMTEsIDE2OCwgMTYwLCAwLjE4KSwgcmdiYSgxMTEsIDE2OCwgMTYwLCAwKSA3MCUpO1xuICBhbmltYXRpb246IGJnU3VuIDE4cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGUtcmV2ZXJzZTtcbn1cblxuLyogQ0xFQVIgTklHSFQg4oCUIGRlZXAgc2t5LCBhIGxvdyBtb29uIGdsb3csIGFuZCBhIGZpZWxkIG9mIHR3aW5rbGluZyBzdGFycy4gKi9cbi53ZWF0aGVyQmcuYmctY2xlYXItbmlnaHQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMTAxYTJjIDAlLCAjMGQxNDIwIDU1JSwgdmFyKC0tZ3JvdW5kKSAxMDAlKTtcbn1cbi53ZWF0aGVyQmcuYmctY2xlYXItbmlnaHQ6OmJlZm9yZSB7XG4gIGluc2V0OiAwO1xuICBiYWNrZ3JvdW5kLWltYWdlOlxuICAgIHJhZGlhbC1ncmFkaWVudCgxLjZweCAxLjZweCBhdCAxOCUgMjQlLCByZ2JhKDIzNCwgMjM4LCAyNDIsIDAuOSksIHRyYW5zcGFyZW50IDYwJSksXG4gICAgcmFkaWFsLWdyYWRpZW50KDEuMnB4IDEuMnB4IGF0IDcyJSAxNiUsIHJnYmEoMjM0LCAyMzgsIDI0MiwgMC44KSwgdHJhbnNwYXJlbnQgNjAlKSxcbiAgICByYWRpYWwtZ3JhZGllbnQoMS40cHggMS40cHggYXQgNDIlIDYyJSwgcmdiYSgyMzQsIDIzOCwgMjQyLCAwLjc1KSwgdHJhbnNwYXJlbnQgNjAlKSxcbiAgICByYWRpYWwtZ3JhZGllbnQoMXB4IDFweCBhdCA4NiUgNDYlLCByZ2JhKDIzNCwgMjM4LCAyNDIsIDAuNyksIHRyYW5zcGFyZW50IDYwJSksXG4gICAgcmFkaWFsLWdyYWRpZW50KDEuM3B4IDEuM3B4IGF0IDMwJSA4MiUsIHJnYmEoMjM0LCAyMzgsIDI0MiwgMC43KSwgdHJhbnNwYXJlbnQgNjAlKSxcbiAgICByYWRpYWwtZ3JhZGllbnQoMXB4IDFweCBhdCA2MCUgNzQlLCByZ2JhKDIzNCwgMjM4LCAyNDIsIDAuNiksIHRyYW5zcGFyZW50IDYwJSksXG4gICAgcmFkaWFsLWdyYWRpZW50KDEuNXB4IDEuNXB4IGF0IDglIDU0JSwgcmdiYSgyMzQsIDIzOCwgMjQyLCAwLjgpLCB0cmFuc3BhcmVudCA2MCUpLFxuICAgIHJhZGlhbC1ncmFkaWVudCgxcHggMXB4IGF0IDkyJSA3OCUsIHJnYmEoMjM0LCAyMzgsIDI0MiwgMC42NSksIHRyYW5zcGFyZW50IDYwJSk7XG4gIGFuaW1hdGlvbjogYmdUd2lua2xlIDVzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcbn1cbi53ZWF0aGVyQmcuYmctY2xlYXItbmlnaHQ6OmFmdGVyIHtcbiAgdG9wOiAxMiU7XG4gIHJpZ2h0OiAxNCU7XG4gIHdpZHRoOiA5MnB4O1xuICBoZWlnaHQ6IDkycHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAzOCUgMzglLCByZ2JhKDIzNCwgMjM4LCAyNDIsIDAuODUpLCByZ2JhKDE0MCwgMTYwLCAxNzQsIDAuMzUpIDYyJSwgcmdiYSgxNDAsIDE2MCwgMTc0LCAwKSA3MiUpO1xufVxuXG4vKiBDTE9VRFkgKGFsc28gb3ZlcmNhc3QsIHBhcnRseSwgYW5kIHRoZSBuZXV0cmFsIGZhbGxiYWNrKSDigJQgY29vbCBncmV5LWJsdWUgd2l0aFxuICAgdHdvIHNvZnQgY2xvdWQgbWFzc2VzIGRyaWZ0aW5nIGxhdGVyYWxseS4gKi9cbi53ZWF0aGVyQmcuYmctY2xvdWR5IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzIzMzAzZiAwJSwgIzE3MjIzMCA1NSUsIHZhcigtLWdyb3VuZCkgMTAwJSk7XG59XG4ud2VhdGhlckJnLmJnLWNsb3VkeTo6YmVmb3JlIHtcbiAgdG9wOiAxNCU7XG4gIGxlZnQ6IC0yMCU7XG4gIHdpZHRoOiA1NXZtYXg7XG4gIGhlaWdodDogMjR2bWF4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgY2VudGVyLCByZ2JhKDE0MCwgMTYwLCAxNzQsIDAuMiksIHJnYmEoMTQwLCAxNjAsIDE3NCwgMCkgNzAlKTtcbiAgYW5pbWF0aW9uOiBiZ0Nsb3VkIDQwcyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG4ud2VhdGhlckJnLmJnLWNsb3VkeTo6YWZ0ZXIge1xuICBib3R0b206IDEwJTtcbiAgcmlnaHQ6IC0yNCU7XG4gIHdpZHRoOiA2MHZtYXg7XG4gIGhlaWdodDogMjZ2bWF4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgY2VudGVyLCByZ2JhKDExMSwgMTMwLCAxNDgsIDAuMTYpLCByZ2JhKDExMSwgMTMwLCAxNDgsIDApIDcwJSk7XG4gIGFuaW1hdGlvbjogYmdDbG91ZCA1MnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlLXJldmVyc2U7XG59XG5cbi8qIFJBSU4gKGFsc28gZHJpenpsZSwgc2hvd2VycywgdGh1bmRlcikg4oCUIGRhcmtlciBza3ksIGEgaGVhdnkgZHJpZnRpbmcgY2xvdWQsXG4gICBhbmQgYSBmYWludCBkaWFnb25hbCByYWluIHNoZWVuIHNsaWRpbmcgZG93bi4gKi9cbi53ZWF0aGVyQmcuYmctcmFpbiB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMxYzI3MzQgMCUsICMxMjFiMjYgNTUlLCB2YXIoLS1ncm91bmQpIDEwMCUpO1xufVxuLndlYXRoZXJCZy5iZy1yYWluOjpiZWZvcmUge1xuICB0b3A6IC04JTtcbiAgbGVmdDogLTE4JTtcbiAgd2lkdGg6IDYydm1heDtcbiAgaGVpZ2h0OiAzMHZtYXg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCBjZW50ZXIsIHJnYmEoMTIwLCAxNDAsIDE1OCwgMC4yMiksIHJnYmEoMTIwLCAxNDAsIDE1OCwgMCkgNzAlKTtcbiAgYW5pbWF0aW9uOiBiZ0Nsb3VkIDQ2cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG4ud2VhdGhlckJnLmJnLXJhaW46OmFmdGVyIHtcbiAgaW5zZXQ6IDA7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoNzRkZWcsIHJnYmEoMTYwLCAxOTAsIDIxNCwgMC4wNykgMCAxcHgsIHJnYmEoMTYwLCAxOTAsIDIxNCwgMCkgMXB4IDlweCk7XG4gIGFuaW1hdGlvbjogYmdSYWluIDAuOXMgbGluZWFyIGluZmluaXRlO1xufVxuXG4vKiBTTk9XIOKAlCBjb29sIGxpZ2h0IHNreSB3aXRoIHNsb3dseSBkcmlmdGluZyBmbGFrZXMuICovXG4ud2VhdGhlckJnLmJnLXNub3cge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMmEzOTQ5IDAlLCAjMWEyNjM0IDU1JSwgdmFyKC0tZ3JvdW5kKSAxMDAlKTtcbn1cbi53ZWF0aGVyQmcuYmctc25vdzo6YmVmb3JlLFxuLndlYXRoZXJCZy5iZy1zbm93OjphZnRlciB7XG4gIGluc2V0OiAwO1xuICBiYWNrZ3JvdW5kLWltYWdlOlxuICAgIHJhZGlhbC1ncmFkaWVudCgycHggMnB4IGF0IDIwJSAxMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KSwgdHJhbnNwYXJlbnQgNjAlKSxcbiAgICByYWRpYWwtZ3JhZGllbnQoMi40cHggMi40cHggYXQgNjYlIDIyJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpLCB0cmFuc3BhcmVudCA2MCUpLFxuICAgIHJhZGlhbC1ncmFkaWVudCgxLjhweCAxLjhweCBhdCA0MCUgNDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpLCB0cmFuc3BhcmVudCA2MCUpLFxuICAgIHJhZGlhbC1ncmFkaWVudCgycHggMnB4IGF0IDg0JSA1NCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSwgdHJhbnNwYXJlbnQgNjAlKSxcbiAgICByYWRpYWwtZ3JhZGllbnQoMi4ycHggMi4ycHggYXQgMTIlIDcwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpLCB0cmFuc3BhcmVudCA2MCUpLFxuICAgIHJhZGlhbC1ncmFkaWVudCgxLjhweCAxLjhweCBhdCA1NCUgODYlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjUpLCB0cmFuc3BhcmVudCA2MCUpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgNTAlO1xufVxuLndlYXRoZXJCZy5iZy1zbm93OjpiZWZvcmUge1xuICBhbmltYXRpb246IGJnU25vdyAxNHMgbGluZWFyIGluZmluaXRlO1xufVxuLndlYXRoZXJCZy5iZy1zbm93OjphZnRlciB7XG4gIG9wYWNpdHk6IDAuNjtcbiAgYW5pbWF0aW9uOiBiZ1Nub3cgMjJzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuLyogRk9HIChhbHNvIG1pc3QsIGhhemUpIOKAlCBtdXRlZCBza3kgd2l0aCBzbG93IGhvcml6b250YWwgaGF6ZSBiYW5kcy4gKi9cbi53ZWF0aGVyQmcuYmctZm9nIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzIzMmMzNSAwJSwgIzE4MjAyOSA1NSUsIHZhcigtLWdyb3VuZCkgMTAwJSk7XG59XG4ud2VhdGhlckJnLmJnLWZvZzo6YmVmb3JlIHtcbiAgaW5zZXQ6IDA7XG4gIGJhY2tncm91bmQtaW1hZ2U6XG4gICAgbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMTQwLCAxNjAsIDE3NCwgMCkgMCUsIHJnYmEoMTQwLCAxNjAsIDE3NCwgMC4xMikgMzAlLCByZ2JhKDE0MCwgMTYwLCAxNzQsIDApIDQ2JSksXG4gICAgbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMTQwLCAxNjAsIDE3NCwgMCkgNTQlLCByZ2JhKDE0MCwgMTYwLCAxNzQsIDAuMSkgNzIlLCByZ2JhKDE0MCwgMTYwLCAxNzQsIDApIDg4JSk7XG4gIGFuaW1hdGlvbjogYmdGb2cgMjRzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcbn1cblxuQGtleWZyYW1lcyBiZ1N1biB7XG4gIDAlICAgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgxKTsgICAgICAgIG9wYWNpdHk6IDAuNzsgfVxuICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTQlLCAzJSkgc2NhbGUoMS4xMik7ICBvcGFjaXR5OiAxOyB9XG59XG5cbkBrZXlmcmFtZXMgYmdUd2lua2xlIHtcbiAgMCUgICB7IG9wYWNpdHk6IDAuNDsgfVxuICAxMDAlIHsgb3BhY2l0eTogMTsgfVxufVxuXG5Aa2V5ZnJhbWVzIGJnQ2xvdWQge1xuICAwJSAgIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9XG4gIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAlKTsgfVxufVxuXG5Aa2V5ZnJhbWVzIGJnUmFpbiB7XG4gIDAlICAgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7IH1cbiAgMTAwJSB7IGJhY2tncm91bmQtcG9zaXRpb246IC05cHggMzJweDsgfVxufVxuXG5Aa2V5ZnJhbWVzIGJnU25vdyB7XG4gIDAlICAgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7IH1cbiAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxufVxuXG5Aa2V5ZnJhbWVzIGJnRm9nIHtcbiAgMCUgICB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNCUpOyBvcGFjaXR5OiAwLjc7IH1cbiAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0JSk7ICBvcGFjaXR5OiAxOyB9XG59XG5cbi8qIEZyb3plbiB3aGlsZSB0aGUgdGFiIGlzIGhpZGRlbiAoc2t5LmpzIHRvZ2dsZXMgLnBhdXNlZCBvbiB2aXNpYmlsaXR5Y2hhbmdlKS4gKi9cbi53ZWF0aGVyQmcucGF1c2VkOjpiZWZvcmUsXG4ud2VhdGhlckJnLnBhdXNlZDo6YWZ0ZXIge1xuICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xufVxuXG4vKiBIYWx0IGV2ZXJ5IHRyZWF0bWVudCdzIG1vdGlvbiB1bmRlciBhIHJlZHVjZWQtbW90aW9uIHByZWZlcmVuY2Ug4oCUIG9uZSBzdGF0aWNcbiAgIGZyYW1lIHBlciBjYXRlZ29yeS4gKi9cbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XG4gIC53ZWF0aGVyQmc6OmJlZm9yZSxcbiAgLndlYXRoZXJCZzo6YWZ0ZXIge1xuICAgIGFuaW1hdGlvbjogbm9uZTtcbiAgfVxufVxuXG4vKiBUaGUgcmliYm9uIGFuZCBpdHMgcmVhZG91dCBzaGFyZSBvbmUgZmxleCBjb2x1bW4gc28gYSBtb2JpbGUgbG9jYXRpb24gcm90YXRpb25cbiAgIHNsaWRlcyB0aGVtIGFzIGEgc2luZ2xlIHVuaXQuIEl0IGNhcnJpZXMgdGhlIHNhbWUgMjhweCBnYXAgI2FwcCB1c2VkIHRvIHB1dFxuICAgYmV0d2VlbiB0aGUgcmliYm9uIGFuZCB0aGUgcmVhZG91dCwgc28gd3JhcHBpbmcgdGhlbSBpcyBsYXlvdXQtdHJhbnNwYXJlbnQuICovXG4jd2VhdGhlckNhcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qIHN0YWNrcyBhYm92ZSB0aGUgLndlYXRoZXJCZyBkcmlmdCBsYXllciAqL1xuICB6LWluZGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDI4cHg7XG59XG5cbi8qIFJpYmJvbjogdGhlIFNWRyBzY2FsZXMgdG8gdGhlIGNvbHVtbiB3aWR0aCB2aWEgdGhlIHZpZXdCb3gsIHNvIGFsbCA3MiBob3Vyc1xuICAgYXJlIG9uIHNjcmVlbiBhdCBhbnkgd2lkdGggZG93biB0byAzODBweCB3aXRob3V0IHNjcm9sbCBvciBwYW4uICovXG4jcmliYm9uV3JhcCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jcmliYm9uU3ZnIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG4ucmliYm9uLWN1cnZlIHtcbiAgc3Ryb2tlLXdpZHRoOiAyLjU7XG4gIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcbiAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDtcbn1cblxuLyogRGF5IGJvdW5kYXJ5IGhhaXJsaW5lcyBhdCBob3VycyAyNCBhbmQgNDguICovXG4ucmliYm9uLWhhaXJsaW5lIHtcbiAgc3Ryb2tlOiB2YXIoLS1ydWxlKTtcbiAgc3Ryb2tlLXdpZHRoOiAxO1xufVxuXG4ucmliYm9uLXRpY2sge1xuICBmaWxsOiB2YXIoLS1tdXRlZCk7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tb25vKTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG4ucmliYm9uLW5vd2xpbmUge1xuICBzdHJva2U6IHZhcigtLW11dGVkKTtcbiAgc3Ryb2tlLXdpZHRoOiAxO1xuICBzdHJva2UtZGFzaGFycmF5OiAyIDM7XG4gIG9wYWNpdHk6IDAuNztcbn1cblxuLnJpYmJvbi1kb3Qge1xuICBzdHJva2U6IHZhcigtLWdyb3VuZCk7XG4gIHN0cm9rZS13aWR0aDogMjtcbn1cblxuLyogUmVhZG91dCBiZW5lYXRoIHRoZSBjdXJ2ZS4gKi9cbiNyZWFkb3V0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLyogTG9jYXRpb24gbmFtZSBwYWlyZWQgd2l0aCB0aGUgQy9GIHVuaXQgc3dpdGNoIG9uIG9uZSBjZW50ZXJlZCByb3cuICovXG4jbG9jYXRpb25Sb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xufVxuXG4jbG9jYXRpb25OYW1lIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1vbm8pO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XG59XG5cbi8qIFNlZ21lbnRlZCBDL0YgdG9nZ2xlOiBhIGNvbXBhY3QgcGlsbCwgdGhlIGFjdGl2ZSBvcHRpb24gZmlsbGVkIHdpdGggdGhlIHJ1bGVcbiAgIGNvbG91ci4gRGlzcGxheS1vbmx5IOKAlCBmbGlwcyB0aGUgdGVtcGVyYXR1cmUgcmVhZG91dHMgYmV0d2VlbiDCsEMgYW5kIMKwRi4gKi9cbiN1bml0U3dpdGNoIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcnVsZSk7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udW5pdE9wdCB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tb25vKTtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBwYWRkaW5nOiAzcHggOXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi51bml0T3B0LmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXJ1bGUpO1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG59XG5cbi8qIFNhdmVkLWxvY2F0aW9uIG5hdmlnYXRpb246IHByZXYvbmV4dCBjaGV2cm9ucyBmbGFua2luZyB0aGUgZG90IHJvdy4gVGhlIHdob2xlXG4gICByb3cgaXMgaGlkZGVuIGF0IGEgY291bnQgb2Ygb25lIChhIHNpbmdsZSBsb2NhdGlvbiBuZWVkcyBubyBhZmZvcmRhbmNlKTsgdGhlXG4gICBhcnJvd3MgYXJlIGRlc2t0b3Atb25seSBhbmQgZHJvcCBvdXQgYXQg4omkNDgwcHggd2hlcmUgc3dpcGUgdGFrZXMgb3Zlci4gKi9cbi5uYXZSb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBtYXJnaW46IDRweCAwIDJweDtcbn1cblxuLm5hdlJvdy5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uYXJyb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5hcnJvdzpob3ZlciB7XG4gIGNvbG9yOiAjRUFFRUYyO1xufVxuXG4uYXJyb3cgc3ZnIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDE0cHg7XG59XG5cbi8qIFNhdmVkLWxvY2F0aW9uIGRvdHM6IG9uZSBwZXIgc2F2ZWQgbG9jYXRpb24sIHRoZSBhY3RpdmUgb25lIGZpbGxlZC4gKi9cbiNkb3RSb3cge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qIG9mZnNldCBwYXJlbnQgZm9yIHRoZSBkZXNrdG9wIHJlbW92ZSBwb3BvdmVyICovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogOHB4O1xufVxuXG4uZG90IHtcbiAgd2lkdGg6IDhweDtcbiAgaGVpZ2h0OiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogIzJFM0I0NTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcbn1cblxuLmRvdC5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjRUFFRUYyO1xufVxuXG4vKiBEZXNrdG9wIHJlbW92ZS1jb25maXJtYXRpb24gcG9wb3ZlciwgYW5jaG9yZWQgYWJvdmUgdGhlIGxvbmctcHJlc3NlZCBkb3QuXG4gICBUb3VjaCBrZWVwcyB0aGUgbmF0aXZlIGNvbmZpcm07IHRoaXMgaXMgdGhlIG1vdXNlL3BlbiBwYXRoLiAqL1xuLnJlbW92ZVBvcG92ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogY2FsYygxMDAlICsgMTBweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgei1pbmRleDogMjA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBwYWRkaW5nOiAxMHB4IDEycHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdyb3VuZCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXJ1bGUpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJveC1zaGFkb3c6IDAgNnB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjQ1KTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLyogRG93bndhcmQgcG9pbnRlciBhcnJvdywgYm9yZGVyZWQ6IG91dGVyIHRyaWFuZ2xlIGluIHRoZSBydWxlIGNvbG91ciB3aXRoIGFuXG4gICBpbm5lciBncm91bmQtZmlsbGVkIHRyaWFuZ2xlIGxhaWQgYSBwaXhlbCBoaWdoZXIgb24gdG9wIG9mIGl0LiAqL1xuLnJlbW92ZVBvcG92ZXI6OmJlZm9yZSxcbi5yZW1vdmVQb3BvdmVyOjphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xufVxuXG4ucmVtb3ZlUG9wb3Zlcjo6YmVmb3JlIHtcbiAgdG9wOiAxMDAlO1xuICBib3JkZXItd2lkdGg6IDdweCA3cHggMCA3cHg7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcnVsZSkgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG59XG5cbi5yZW1vdmVQb3BvdmVyOjphZnRlciB7XG4gIHRvcDogY2FsYygxMDAlIC0gMXB4KTtcbiAgYm9yZGVyLXdpZHRoOiA2cHggNnB4IDAgNnB4O1xuICBib3JkZXItY29sb3I6IHZhcigtLWdyb3VuZCkgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG59XG5cbi5yZW1vdmVQb3BvdmVyLW5hbWUge1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLnJlbW92ZVBvcG92ZXItYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogOHB4O1xufVxuXG4ucmVtb3ZlUG9wb3Zlci1jYW5jZWwsXG4ucmVtb3ZlUG9wb3Zlci1kZWxldGUge1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nOiA1cHggMTJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcnVsZSk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucmVtb3ZlUG9wb3Zlci1jYW5jZWwge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xufVxuXG4ucmVtb3ZlUG9wb3Zlci1jYW5jZWw6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG59XG5cbi5yZW1vdmVQb3BvdmVyLWRlbGV0ZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXRleHQpO1xuICBjb2xvcjogdmFyKC0tZ3JvdW5kKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS10ZXh0KTtcbn1cblxuLnJlbW92ZVBvcG92ZXItZGVsZXRlOmhvdmVyIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOTIpO1xufVxuXG4vKiBSb2JvdG8gTGlnaHQgNDBweCBmb3IgdGhlIHJlYWRpbmcuICovXG4jY3VycmVudFRlbXAge1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDEuMTtcbn1cblxuI2N1cnJlbnRDb25kaXRpb24ge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbn1cblxuLyogRm91ci11cCBzdGF0IHJvdzogdGV4dCBsYWJlbHMsIG5vIGljb25zLiAqL1xuI3N0YXRSb3cge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xuICBnYXA6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAxNHB4O1xufVxuXG4uc3RhdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNHB4O1xuICBwYWRkaW5nOiAxMnB4IDZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcnVsZSk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLnN0YXQtbGFiZWwge1xuICBmb250LWZhbWlseTogdmFyKC0tbW9ubyk7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcbn1cblxuLnN0YXQtdmFsdWUge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbn1cblxuLyogU2VhcmNoIGZvcm0uICovXG4jc2VhcmNoRm9ybSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgLyogc3RhY2tzIGFib3ZlIHRoZSAud2VhdGhlckJnIGRyaWZ0IGxheWVyICovXG4gIHotaW5kZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi8qIEhvbGRzIHRoZSBpbnB1dCBhbmQgaXRzIGF1dG9jb21wbGV0ZSBkcm9wZG93bjsgcG9zaXRpb246IHJlbGF0aXZlIGFuY2hvcnNcbiAgICNzdWdnZXN0aW9ucyBiZW5lYXRoIHRoZSBpbnB1dC4gZmxleDogMSBzbyB0aGUgcGFpciBmaWxscyB0aGUgcm93IHRoZSB3YXkgdGhlXG4gICBiYXJlIGlucHV0IHVzZWQgdG8uICovXG4jc2VhcmNoSW5wdXRXcmFwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4OiAxO1xuICBtaW4td2lkdGg6IDA7XG59XG5cbiNzZWFyY2hJbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMnB4IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tb25vKTtcbiAgZm9udC1zaXplOiAxNnB4OyAvKiAxNnB4IHNvIGlPUyBTYWZhcmkgZG9lc24ndCBhdXRvLXpvb20gdGhlIGlucHV0IG9uIGZvY3VzICovXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXJ1bGUpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbiNzZWFyY2hJbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xufVxuXG4jc2VhcmNoSW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItY29sb3I6IHZhcigtLW11dGVkKTtcbn1cblxuLyogV2hpbGUgdGhlIGRyb3Bkb3duIGlzIG9wZW4gdGhlIGlucHV0J3MgYm90dG9tIGNvcm5lcnMgc3F1YXJlIG9mZiBhbmQgaXRzXG4gICBib3R0b20gZWRnZSBkcm9wcyBvdXQsIHNvIGl0IHJlYWRzIGFzIG9uZSBhdHRhY2hlZCBzdXJmYWNlIHdpdGggI3N1Z2dlc3Rpb25zLiAqL1xuI3NlYXJjaEZvcm0uc3VnZ2VzdGluZyAjc2VhcmNoSW5wdXQge1xuICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDAgMDtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi8qIEZhaWxlZCBsb29rdXA6IHJlZGRlbmVkIGJvcmRlciwgY3VycmVudCByaWJib24gbGVmdCBpbiBwbGFjZS4gKi9cbiNzZWFyY2hGb3JtLmludmFsaWQgI3NlYXJjaElucHV0IHtcbiAgYm9yZGVyLWNvbG9yOiAjQzI0NTJEO1xufVxuXG4vKiBBdXRvY29tcGxldGUgZHJvcGRvd246IGhhbmdzIG9mZiB0aGUgYm90dG9tIG9mIHRoZSBpbnB1dCwgbWF0Y2hpbmcgaXRzIHdpZHRoXG4gICBhbmQgY29udGludWluZyBpdHMgZm9jdXNlZCBib3JkZXIgaW50byBhIGJvdHRvbS1yb3VuZGVkIHBhbmVsLiAqL1xuI3N1Z2dlc3Rpb25zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAxMDtcbiAgbWF4LWhlaWdodDogMjQwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGJhY2tncm91bmQ6IHZhcigtLWdyb3VuZCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW11dGVkKTtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDhweCA4cHg7XG59XG5cbiNzdWdnZXN0aW9ucy5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc3VnZ2VzdGlvbi1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICBnYXA6IDhweDtcbiAgcGFkZGluZzogMTBweCAxNHB4O1xuICBmb250LWZhbWlseTogdmFyKC0tbW9ubyk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnN1Z2dlc3Rpb24taXRlbTpob3Zlcixcbi5zdWdnZXN0aW9uLWl0ZW0uc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ydWxlKTtcbn1cblxuLnN1Z2dlc3Rpb24tY2l0eSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xufVxuXG4uc3VnZ2VzdGlvbi1jb3VudHJ5IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xufVxuXG4jc2VhcmNoQnV0dG9uIHtcbiAgcGFkZGluZzogMTJweCAyMHB4O1xuICBmb250LWZhbWlseTogdmFyKC0tbW9ubyk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgY29sb3I6IHZhcigtLWdyb3VuZCk7XG4gIGJhY2tncm91bmQ6IHZhcigtLXRleHQpO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jc2VhcmNoQnV0dG9uOmhvdmVyIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOTIpO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgI2FwcCB7XG4gICAgZ2FwOiAyMnB4O1xuICAgIHBhZGRpbmc6IDI0cHggMTZweDtcbiAgfVxuXG4gICN3ZWF0aGVyQ2FyZCB7XG4gICAgZ2FwOiAyMnB4O1xuICB9XG5cbiAgLyogU3dpcGUtZGlyZWN0aW9uLWF3YXJlIHNsaWRlIG9uIGEgY29tbWl0dGVkIGxvY2F0aW9uIHJvdGF0aW9uLiBmYXZvdXJpdGVzLmpzXG4gICAgIGFkZHMgLnNsaWRlLW5leHQgKHN3aXBlIGxlZnQgLT4gbmV4dCkgb3IgLnNsaWRlLXByZXYgKHN3aXBlIHJpZ2h0IC0+IHByZXYpXG4gICAgIHRvICN3ZWF0aGVyQ2FyZCwgdGhlbiByb3RhdGVzLiBUaGUgY2FyZCBmYWRlcyB0byBub3RoaW5nIGF0IHRoZSBrZXlmcmFtZSdzXG4gICAgIG1pZHBvaW50LCB3aGljaCBtYXNrcyB0aGUgZm9yZWNhc3Qgc3dhcDogcmVuZGVyUmliYm9uKCkgcmVidWlsZHMgaW50byB0aGlzXG4gICAgIHNhbWUgY2FyZCB3aGlsZSBpdCdzIGludmlzaWJsZSwgc28gdGhlIG5ldyBjdXJ2ZSBzbGlkZXMgaW4gcmF0aGVyIHRoYW5cbiAgICAgc25hcHBpbmcuIERlc2t0b3Agcm90YXRlcyB2aWEgdGhlIGFycm93cyBhbmQgbmV2ZXIgZ2V0cyB0aGUgY2xhc3MuICovXG4gICN3ZWF0aGVyQ2FyZC5zbGlkZS1uZXh0IHtcbiAgICBhbmltYXRpb246IGNhcmRTbGlkZU5leHQgMjgwbXMgZWFzZS1vdXQ7XG4gIH1cblxuICAjd2VhdGhlckNhcmQuc2xpZGUtcHJldiB7XG4gICAgYW5pbWF0aW9uOiBjYXJkU2xpZGVQcmV2IDI4MG1zIGVhc2Utb3V0O1xuICB9XG5cbiAgQGtleWZyYW1lcyBjYXJkU2xpZGVOZXh0IHtcbiAgICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgb3BhY2l0eTogMTsgfVxuICAgIDQwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNDJweCk7IG9wYWNpdHk6IDA7IH1cbiAgICA2MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNDJweCk7IG9wYWNpdHk6IDA7IH1cbiAgICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyBvcGFjaXR5OiAxOyB9XG4gIH1cblxuICBAa2V5ZnJhbWVzIGNhcmRTbGlkZVByZXYge1xuICAgIDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyBvcGFjaXR5OiAxOyB9XG4gICAgNDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQycHgpOyBvcGFjaXR5OiAwOyB9XG4gICAgNjAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC00MnB4KTsgb3BhY2l0eTogMDsgfVxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IG9wYWNpdHk6IDE7IH1cbiAgfVxuXG4gIC8qIE1vYmlsZSBuYXZpZ2F0ZXMgYnkgc3dpcGU7IGRyb3AgdGhlIGFycm93cyBidXQga2VlcCB0aGUgZG90cy4gKi9cbiAgLmFycm93IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgI3N0YXRSb3cge1xuICAgIGdhcDogOHB4O1xuICB9XG5cbiAgLnN0YXQge1xuICAgIHBhZGRpbmc6IDEwcHggNHB4O1xuICB9XG5cbiAgLnN0YXQtdmFsdWUge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxufVxuXG4vKiBSZXNwZWN0IGEgcmVkdWNlZC1tb3Rpb24gcHJlZmVyZW5jZTogcm90YXRlIGluc3RhbnRseSwgbm8gc2xpZGUuIGZhdm91cml0ZXMuanNcbiAgIHN0aWxsIGFkZHMgdGhlIGNsYXNzLCBidXQgd2l0aCB0aGUgYW5pbWF0aW9uIHN1cHByZXNzZWQgYW5pbWF0aW9uZW5kIG5ldmVyXG4gICBmaXJlcywgc28gaXRzIHNldFRpbWVvdXQgZmFsbGJhY2sgaXMgd2hhdCBzdHJpcHMgdGhlIGNsYXNzIGJhY2sgb2ZmLiAqL1xuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcbiAgI3dlYXRoZXJDYXJkLnNsaWRlLW5leHQsXG4gICN3ZWF0aGVyQ2FyZC5zbGlkZS1wcmV2IHtcbiAgICBhbmltYXRpb246IG5vbmU7XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQiw0Q0FBZ0M7RUFDaEMsb0JBQW9CO0FBQ3RCOztBQUVBOzs7O3FDQUlxQztBQUNyQztFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixzRkFBc0Y7QUFDeEY7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQiw0Q0FBNEM7RUFDNUMsbUNBQW1DO0FBQ3JDOztBQUVBOzRD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TUFBTSw0QkFBNEIsRUFBRSxVQUFVLEVBQUU7SUFDaEQsT0FBTyx3QkFBd0IsRUFBRSxVQUFVLEVBQUU7RUFDL0M7O0VBRUEsa0VBQWtFO0VBQ2xFO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsUUFBUTtFQUNWOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBOzt5RUFFeUU7QUFDekU7RUFDRTs7SUFFRSxlQUFlO0VBQ2pCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICBzcmM6IHVybCgnLi9Sb2JvdG8tUmVndWxhci50dGYnKTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDAgNDAwO1xcbn1cXG5cXG4vKiBQYWxldHRlOlxcbiAgIGdyb3VuZCAgIzEyMTgxRiAgIHJ1bGVzICAjMjYzMTNCXFxuICAgdGV4dCAgICAjRUFFRUYyIChwcmltYXJ5KSAvICM4Q0EwQUUgKG11dGVkKVxcbiAgIFRoZSB0ZW1wZXJhdHVyZSBjb2xvdXJzIGxpdmUgaW4gcmliYm9uLmpzICh0aGUgY3VydmUgaXMgY29sb3VyZWQgYnkgdGhlXFxuICAgdGVtcGVyYXR1cmUgc2NhbGFyLCBub3QgYnkgQ1NTKS4gKi9cXG46cm9vdCB7XFxuICAtLWdyb3VuZDogIzEyMTgxRjtcXG4gIC0tcnVsZTogIzI2MzEzQjtcXG4gIC0tdGV4dDogI0VBRUVGMjtcXG4gIC0tbXV0ZWQ6ICM4Q0EwQUU7XFxuICAtLW1vbm86ICdTRk1vbm8tUmVndWxhcicsICdTRiBNb25vJywgJ01lbmxvJywgJ0NvbnNvbGFzJywgJ0xpYmVyYXRpb24gTW9ubycsIG1vbm9zcGFjZTtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWdyb3VuZCk7XFxuICBjb2xvcjogdmFyKC0tdGV4dCk7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHN5c3RlbS11aSwgc2Fucy1zZXJpZjtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbn1cXG5cXG4vKiBkdmggKG5vdCB2aCk6IG9uIGlPUyBTYWZhcmkgdmggcmVzb2x2ZXMgdG8gdGhlIHRhbGwgdmlld3BvcnQgYW5kIHBhcmtzIHRoZVxcbiAgIGJvdHRvbSBvZiB0aGUgbGF5b3V0IHVuZGVyIHRoZSBVUkwgYmFyLiAqL1xcbiNhcHAge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiBzdGFja3MgdGhlIGNvbnN0cmFpbmVkIGNvbHVtbiBhYm92ZSB0aGUgZml4ZWQgLndlYXRoZXJCZyAqL1xcbiAgei1pbmRleDogMTtcXG4gIG1pbi1oZWlnaHQ6IDEwMGR2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDI4cHg7XFxuICBtYXgtd2lkdGg6IDcyMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwYWRkaW5nOiAzMnB4IDIwcHg7XFxufVxcblxcbi8qIENvbmRpdGlvbi1iYXNlZCBiYWNrZ3JvdW5kLiBza3kuanMgbW91bnRzIGEgc2luZ2xlIGAud2VhdGhlckJnYCBhcyB0aGUgZmlyc3RcXG4gICBjaGlsZCBvZiAjYXBwIGFuZCBzd2FwcyBhIGBiZy08Y2F0ZWdvcnk+YCBjbGFzcyBvbnRvIGl0IHBlciBmZXRjaCwga2V5ZWQgb2ZmXFxuICAgdGhlIGN1cnJlbnQgY29uZGl0aW9uIHRleHQgKGNhdGVnb3J5Rm9yKCkgaW4gc2t5LmpzKS4gSXQgaXMgYGZpeGVkYCBzbyBpdFxcbiAgIHNwYW5zIHRoZSB3aG9sZSBicm93c2VyIHdpbmRvdyBvbiBkZXNrdG9wIHdoaWxlICNhcHAgc3RheXMgYSBjb25zdHJhaW5lZFxcbiAgIGNlbnRyZWQgY29sdW1uIGFib3ZlIGl0ICh6LWluZGV4KS4gRWFjaCBjYXRlZ29yeSBwYWludHMgYSBncmFkaWVudCBiYXNlIG9uIHRoZVxcbiAgIGVsZW1lbnQgcGx1cyBkZWNvcmF0aXZlIGxheWVycyAoc3VuLCBtb29uICsgc3RhcnMsIGRyaWZ0aW5nIGNsb3VkcywgZmxha2VzLFxcbiAgIGhhemUpIG9uIHRoZSB0d28gcHNldWRvLWVsZW1lbnRzLiBvdmVyZmxvdzogaGlkZGVuIGNsaXBzIHRob3NlIGxheWVycyB0byB0aGVcXG4gICB2aWV3cG9ydCBzbyBhbiBvdmVyc2l6ZWQgY2xvdWQgY2FuJ3Qgc3BpbGwgYSBzY3JvbGxiYXIuIFRoZSBncmFkaWVudHMgY3Jvc3MtXFxuICAgZmFkZSAodHJhbnNpdGlvbjogYmFja2dyb3VuZCkgd2hlbiB0aGUgY2F0ZWdvcnkgY2hhbmdlczsgdGhlIGRlY29yYXRpdmVcXG4gICBtb3Rpb24gbGl2ZXMgaW4gdGhlIHBlci1jYXRlZ29yeSBrZXlmcmFtZXMgYmVsb3cuICovXFxuLndlYXRoZXJCZyB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBpbnNldDogMDtcXG4gIHotaW5kZXg6IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMWIyODM2IDAlLCAjMTQxZDI5IDU1JSwgdmFyKC0tZ3JvdW5kKSAxMDAlKTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgNjAwbXMgZWFzZTtcXG59XFxuXFxuLndlYXRoZXJCZzo6YmVmb3JlLFxcbi53ZWF0aGVyQmc6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi8qIFNVTk5ZIOKAlCB3YXJtIGRheXRpbWUgc2t5IHdpdGggYSBzb2Z0IHN1biBnbG93IHRoYXQgc2xvd2x5IGJyZWF0aGVzLiAqL1xcbi53ZWF0aGVyQmcuYmctc3Vubnkge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzJjNGM3MiAwJSwgIzFhMmM0MCA1NSUsIHZhcigtLWdyb3VuZCkgMTAwJSk7XFxufVxcbi53ZWF0aGVyQmcuYmctc3Vubnk6OmJlZm9yZSB7XFxuICB0b3A6IC0xMiU7XFxuICByaWdodDogLTYlO1xcbiAgd2lkdGg6IDQ2dm1heDtcXG4gIGhlaWdodDogNDZ2bWF4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCBjZW50ZXIsIHJnYmEoMjE3LCAxNjQsIDY1LCAwLjQ1KSwgcmdiYSgyMTcsIDE2NCwgNjUsIDApIDY4JSk7XFxuICBhbmltYXRpb246IGJnU3VuIDE0cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XFxufVxcbi53ZWF0aGVyQmcuYmctc3Vubnk6OmFmdGVyIHtcXG4gIGJvdHRvbTogLTE4JTtcXG4gIGxlZnQ6IC0xMiU7XFxuICB3aWR0aDogNDB2bWF4O1xcbiAgaGVpZ2h0OiA0MHZtYXg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IGNlbnRlciwgcmdiYSgxMTEsIDE2OCwgMTYwLCAwLjE4KSwgcmdiYSgxMTEsIDE2OCwgMTYwLCAwKSA3MCUpO1xcbiAgYW5pbWF0aW9uOiBiZ1N1biAxOHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlLXJldmVyc2U7XFxufVxcblxcbi8qIENMRUFSIE5JR0hUIOKAlCBkZWVwIHNreSwgYSBsb3cgbW9vbiBnbG93LCBhbmQgYSBmaWVsZCBvZiB0d2lua2xpbmcgc3RhcnMuICovXFxuLndlYXRoZXJCZy5iZy1jbGVhci1uaWdodCB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMTAxYTJjIDAlLCAjMGQxNDIwIDU1JSwgdmFyKC0tZ3JvdW5kKSAxMDAlKTtcXG59XFxuLndlYXRoZXJCZy5iZy1jbGVhci1uaWdodDo6YmVmb3JlIHtcXG4gIGluc2V0OiAwO1xcbiAgYmFja2dyb3VuZC1pbWFnZTpcXG4gICAgcmFkaWFsLWdyYWRpZW50KDEuNnB4IDEuNnB4IGF0IDE4JSAyNCUsIHJnYmEoMjM0LCAyMzgsIDI0MiwgMC45KSwgdHJhbnNwYXJlbnQgNjAlKSxcXG4gICAgcmFkaWFsLWdyYWRpZW50KDEuMnB4IDEuMnB4IGF0IDcyJSAxNiUsIHJnYmEoMjM0LCAyMzgsIDI0MiwgMC44KSwgdHJhbnNwYXJlbnQgNjAlKSxcXG4gICAgcmFkaWFsLWdyYWRpZW50KDEuNHB4IDEuNHB4IGF0IDQyJSA2MiUsIHJnYmEoMjM0LCAyMzgsIDI0MiwgMC43NSksIHRyYW5zcGFyZW50IDYwJSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgxcHggMXB4IGF0IDg2JSA0NiUsIHJnYmEoMjM0LCAyMzgsIDI0MiwgMC43KSwgdHJhbnNwYXJlbnQgNjAlKSxcXG4gICAgcmFkaWFsLWdyYWRpZW50KDEuM3B4IDEuM3B4IGF0IDMwJSA4MiUsIHJnYmEoMjM0LCAyMzgsIDI0MiwgMC43KSwgdHJhbnNwYXJlbnQgNjAlKSxcXG4gICAgcmFkaWFsLWdyYWRpZW50KDFweCAxcHggYXQgNjAlIDc0JSwgcmdiYSgyMzQsIDIzOCwgMjQyLCAwLjYpLCB0cmFuc3BhcmVudCA2MCUpLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMS41cHggMS41cHggYXQgOCUgNTQlLCByZ2JhKDIzNCwgMjM4LCAyNDIsIDAuOCksIHRyYW5zcGFyZW50IDYwJSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgxcHggMXB4IGF0IDkyJSA3OCUsIHJnYmEoMjM0LCAyMzgsIDI0MiwgMC42NSksIHRyYW5zcGFyZW50IDYwJSk7XFxuICBhbmltYXRpb246IGJnVHdpbmtsZSA1cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XFxufVxcbi53ZWF0aGVyQmcuYmctY2xlYXItbmlnaHQ6OmFmdGVyIHtcXG4gIHRvcDogMTIlO1xcbiAgcmlnaHQ6IDE0JTtcXG4gIHdpZHRoOiA5MnB4O1xcbiAgaGVpZ2h0OiA5MnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAzOCUgMzglLCByZ2JhKDIzNCwgMjM4LCAyNDIsIDAuODUpLCByZ2JhKDE0MCwgMTYwLCAxNzQsIDAuMzUpIDYyJSwgcmdiYSgxNDAsIDE2MCwgMTc0LCAwKSA3MiUpO1xcbn1cXG5cXG4vKiBDTE9VRFkgKGFsc28gb3ZlcmNhc3QsIHBhcnRseSwgYW5kIHRoZSBuZXV0cmFsIGZhbGxiYWNrKSDigJQgY29vbCBncmV5LWJsdWUgd2l0aFxcbiAgIHR3byBzb2Z0IGNsb3VkIG1hc3NlcyBkcmlmdGluZyBsYXRlcmFsbHkuICovXFxuLndlYXRoZXJCZy5iZy1jbG91ZHkge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzIzMzAzZiAwJSwgIzE3MjIzMCA1NSUsIHZhcigtLWdyb3VuZCkgMTAwJSk7XFxufVxcbi53ZWF0aGVyQmcuYmctY2xvdWR5OjpiZWZvcmUge1xcbiAgdG9wOiAxNCU7XFxuICBsZWZ0OiAtMjAlO1xcbiAgd2lkdGg6IDU1dm1heDtcXG4gIGhlaWdodDogMjR2bWF4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCBjZW50ZXIsIHJnYmEoMTQwLCAxNjAsIDE3NCwgMC4yKSwgcmdiYSgxNDAsIDE2MCwgMTc0LCAwKSA3MCUpO1xcbiAgYW5pbWF0aW9uOiBiZ0Nsb3VkIDQwcyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XFxufVxcbi53ZWF0aGVyQmcuYmctY2xvdWR5OjphZnRlciB7XFxuICBib3R0b206IDEwJTtcXG4gIHJpZ2h0OiAtMjQlO1xcbiAgd2lkdGg6IDYwdm1heDtcXG4gIGhlaWdodDogMjZ2bWF4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCBjZW50ZXIsIHJnYmEoMTExLCAxMzAsIDE0OCwgMC4xNiksIHJnYmEoMTExLCAxMzAsIDE0OCwgMCkgNzAlKTtcXG4gIGFuaW1hdGlvbjogYmdDbG91ZCA1MnMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlLXJldmVyc2U7XFxufVxcblxcbi8qIFJBSU4gKGFsc28gZHJpenpsZSwgc2hvd2VycywgdGh1bmRlcikg4oCUIGRhcmtlciBza3ksIGEgaGVhdnkgZHJpZnRpbmcgY2xvdWQsXFxuICAgYW5kIGEgZmFpbnQgZGlhZ29uYWwgcmFpbiBzaGVlbiBzbGlkaW5nIGRvd24uICovXFxuLndlYXRoZXJCZy5iZy1yYWluIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMxYzI3MzQgMCUsICMxMjFiMjYgNTUlLCB2YXIoLS1ncm91bmQpIDEwMCUpO1xcbn1cXG4ud2VhdGhlckJnLmJnLXJhaW46OmJlZm9yZSB7XFxuICB0b3A6IC04JTtcXG4gIGxlZnQ6IC0xOCU7XFxuICB3aWR0aDogNjJ2bWF4O1xcbiAgaGVpZ2h0OiAzMHZtYXg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IGNlbnRlciwgcmdiYSgxMjAsIDE0MCwgMTU4LCAwLjIyKSwgcmdiYSgxMjAsIDE0MCwgMTU4LCAwKSA3MCUpO1xcbiAgYW5pbWF0aW9uOiBiZ0Nsb3VkIDQ2cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XFxufVxcbi53ZWF0aGVyQmcuYmctcmFpbjo6YWZ0ZXIge1xcbiAgaW5zZXQ6IDA7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KDc0ZGVnLCByZ2JhKDE2MCwgMTkwLCAyMTQsIDAuMDcpIDAgMXB4LCByZ2JhKDE2MCwgMTkwLCAyMTQsIDApIDFweCA5cHgpO1xcbiAgYW5pbWF0aW9uOiBiZ1JhaW4gMC45cyBsaW5lYXIgaW5maW5pdGU7XFxufVxcblxcbi8qIFNOT1cg4oCUIGNvb2wgbGlnaHQgc2t5IHdpdGggc2xvd2x5IGRyaWZ0aW5nIGZsYWtlcy4gKi9cXG4ud2VhdGhlckJnLmJnLXNub3cge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzJhMzk0OSAwJSwgIzFhMjYzNCA1NSUsIHZhcigtLWdyb3VuZCkgMTAwJSk7XFxufVxcbi53ZWF0aGVyQmcuYmctc25vdzo6YmVmb3JlLFxcbi53ZWF0aGVyQmcuYmctc25vdzo6YWZ0ZXIge1xcbiAgaW5zZXQ6IDA7XFxuICBiYWNrZ3JvdW5kLWltYWdlOlxcbiAgICByYWRpYWwtZ3JhZGllbnQoMnB4IDJweCBhdCAyMCUgMTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCksIHRyYW5zcGFyZW50IDYwJSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgyLjRweCAyLjRweCBhdCA2NiUgMjIlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyksIHRyYW5zcGFyZW50IDYwJSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgxLjhweCAxLjhweCBhdCA0MCUgNDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpLCB0cmFuc3BhcmVudCA2MCUpLFxcbiAgICByYWRpYWwtZ3JhZGllbnQoMnB4IDJweCBhdCA4NCUgNTQlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyksIHRyYW5zcGFyZW50IDYwJSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgyLjJweCAyLjJweCBhdCAxMiUgNzAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyksIHRyYW5zcGFyZW50IDYwJSksXFxuICAgIHJhZGlhbC1ncmFkaWVudCgxLjhweCAxLjhweCBhdCA1NCUgODYlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjUpLCB0cmFuc3BhcmVudCA2MCUpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDUwJTtcXG59XFxuLndlYXRoZXJCZy5iZy1zbm93OjpiZWZvcmUge1xcbiAgYW5pbWF0aW9uOiBiZ1Nub3cgMTRzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuLndlYXRoZXJCZy5iZy1zbm93OjphZnRlciB7XFxuICBvcGFjaXR5OiAwLjY7XFxuICBhbmltYXRpb246IGJnU25vdyAyMnMgbGluZWFyIGluZmluaXRlO1xcbn1cXG5cXG4vKiBGT0cgKGFsc28gbWlzdCwgaGF6ZSkg4oCUIG11dGVkIHNreSB3aXRoIHNsb3cgaG9yaXpvbnRhbCBoYXplIGJhbmRzLiAqL1xcbi53ZWF0aGVyQmcuYmctZm9nIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICMyMzJjMzUgMCUsICMxODIwMjkgNTUlLCB2YXIoLS1ncm91bmQpIDEwMCUpO1xcbn1cXG4ud2VhdGhlckJnLmJnLWZvZzo6YmVmb3JlIHtcXG4gIGluc2V0OiAwO1xcbiAgYmFja2dyb3VuZC1pbWFnZTpcXG4gICAgbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMTQwLCAxNjAsIDE3NCwgMCkgMCUsIHJnYmEoMTQwLCAxNjAsIDE3NCwgMC4xMikgMzAlLCByZ2JhKDE0MCwgMTYwLCAxNzQsIDApIDQ2JSksXFxuICAgIGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDE0MCwgMTYwLCAxNzQsIDApIDU0JSwgcmdiYSgxNDAsIDE2MCwgMTc0LCAwLjEpIDcyJSwgcmdiYSgxNDAsIDE2MCwgMTc0LCAwKSA4OCUpO1xcbiAgYW5pbWF0aW9uOiBiZ0ZvZyAyNHMgZWFzZS1pbi1vdXQgaW5maW5pdGUgYWx0ZXJuYXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJnU3VuIHtcXG4gIDAlICAgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgxKTsgICAgICAgIG9wYWNpdHk6IDAuNzsgfVxcbiAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKC00JSwgMyUpIHNjYWxlKDEuMTIpOyAgb3BhY2l0eTogMTsgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJnVHdpbmtsZSB7XFxuICAwJSAgIHsgb3BhY2l0eTogMC40OyB9XFxuICAxMDAlIHsgb3BhY2l0eTogMTsgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJnQ2xvdWQge1xcbiAgMCUgICB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfVxcbiAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMCUpOyB9XFxufVxcblxcbkBrZXlmcmFtZXMgYmdSYWluIHtcXG4gIDAlICAgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7IH1cXG4gIDEwMCUgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOXB4IDMycHg7IH1cXG59XFxuXFxuQGtleWZyYW1lcyBiZ1Nub3cge1xcbiAgMCUgICB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTsgfVxcbiAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJnRm9nIHtcXG4gIDAlICAgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTQlKTsgb3BhY2l0eTogMC43OyB9XFxuICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDQlKTsgIG9wYWNpdHk6IDE7IH1cXG59XFxuXFxuLyogRnJvemVuIHdoaWxlIHRoZSB0YWIgaXMgaGlkZGVuIChza3kuanMgdG9nZ2xlcyAucGF1c2VkIG9uIHZpc2liaWxpdHljaGFuZ2UpLiAqL1xcbi53ZWF0aGVyQmcucGF1c2VkOjpiZWZvcmUsXFxuLndlYXRoZXJCZy5wYXVzZWQ6OmFmdGVyIHtcXG4gIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XFxufVxcblxcbi8qIEhhbHQgZXZlcnkgdHJlYXRtZW50J3MgbW90aW9uIHVuZGVyIGEgcmVkdWNlZC1tb3Rpb24gcHJlZmVyZW5jZSDigJQgb25lIHN0YXRpY1xcbiAgIGZyYW1lIHBlciBjYXRlZ29yeS4gKi9cXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xcbiAgLndlYXRoZXJCZzo6YmVmb3JlLFxcbiAgLndlYXRoZXJCZzo6YWZ0ZXIge1xcbiAgICBhbmltYXRpb246IG5vbmU7XFxuICB9XFxufVxcblxcbi8qIFRoZSByaWJib24gYW5kIGl0cyByZWFkb3V0IHNoYXJlIG9uZSBmbGV4IGNvbHVtbiBzbyBhIG1vYmlsZSBsb2NhdGlvbiByb3RhdGlvblxcbiAgIHNsaWRlcyB0aGVtIGFzIGEgc2luZ2xlIHVuaXQuIEl0IGNhcnJpZXMgdGhlIHNhbWUgMjhweCBnYXAgI2FwcCB1c2VkIHRvIHB1dFxcbiAgIGJldHdlZW4gdGhlIHJpYmJvbiBhbmQgdGhlIHJlYWRvdXQsIHNvIHdyYXBwaW5nIHRoZW0gaXMgbGF5b3V0LXRyYW5zcGFyZW50LiAqL1xcbiN3ZWF0aGVyQ2FyZCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qIHN0YWNrcyBhYm92ZSB0aGUgLndlYXRoZXJCZyBkcmlmdCBsYXllciAqL1xcbiAgei1pbmRleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyOHB4O1xcbn1cXG5cXG4vKiBSaWJib246IHRoZSBTVkcgc2NhbGVzIHRvIHRoZSBjb2x1bW4gd2lkdGggdmlhIHRoZSB2aWV3Qm94LCBzbyBhbGwgNzIgaG91cnNcXG4gICBhcmUgb24gc2NyZWVuIGF0IGFueSB3aWR0aCBkb3duIHRvIDM4MHB4IHdpdGhvdXQgc2Nyb2xsIG9yIHBhbi4gKi9cXG4jcmliYm9uV3JhcCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI3JpYmJvblN2ZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi5yaWJib24tY3VydmUge1xcbiAgc3Ryb2tlLXdpZHRoOiAyLjU7XFxuICBzdHJva2UtbGluZWNhcDogcm91bmQ7XFxuICBzdHJva2UtbGluZWpvaW46IHJvdW5kO1xcbn1cXG5cXG4vKiBEYXkgYm91bmRhcnkgaGFpcmxpbmVzIGF0IGhvdXJzIDI0IGFuZCA0OC4gKi9cXG4ucmliYm9uLWhhaXJsaW5lIHtcXG4gIHN0cm9rZTogdmFyKC0tcnVsZSk7XFxuICBzdHJva2Utd2lkdGg6IDE7XFxufVxcblxcbi5yaWJib24tdGljayB7XFxuICBmaWxsOiB2YXIoLS1tdXRlZCk7XFxuICBmb250LWZhbWlseTogdmFyKC0tbW9ubyk7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbn1cXG5cXG4ucmliYm9uLW5vd2xpbmUge1xcbiAgc3Ryb2tlOiB2YXIoLS1tdXRlZCk7XFxuICBzdHJva2Utd2lkdGg6IDE7XFxuICBzdHJva2UtZGFzaGFycmF5OiAyIDM7XFxuICBvcGFjaXR5OiAwLjc7XFxufVxcblxcbi5yaWJib24tZG90IHtcXG4gIHN0cm9rZTogdmFyKC0tZ3JvdW5kKTtcXG4gIHN0cm9rZS13aWR0aDogMjtcXG59XFxuXFxuLyogUmVhZG91dCBiZW5lYXRoIHRoZSBjdXJ2ZS4gKi9cXG4jcmVhZG91dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDRweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLyogTG9jYXRpb24gbmFtZSBwYWlyZWQgd2l0aCB0aGUgQy9GIHVuaXQgc3dpdGNoIG9uIG9uZSBjZW50ZXJlZCByb3cuICovXFxuI2xvY2F0aW9uUm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbiNsb2NhdGlvbk5hbWUge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1vbm8pO1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xcbn1cXG5cXG4vKiBTZWdtZW50ZWQgQy9GIHRvZ2dsZTogYSBjb21wYWN0IHBpbGwsIHRoZSBhY3RpdmUgb3B0aW9uIGZpbGxlZCB3aXRoIHRoZSBydWxlXFxuICAgY29sb3VyLiBEaXNwbGF5LW9ubHkg4oCUIGZsaXBzIHRoZSB0ZW1wZXJhdHVyZSByZWFkb3V0cyBiZXR3ZWVuIMKwQyBhbmQgwrBGLiAqL1xcbiN1bml0U3dpdGNoIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ydWxlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnVuaXRPcHQge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1vbm8pO1xcbiAgZm9udC1zaXplOiAxMXB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gIHBhZGRpbmc6IDNweCA5cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi51bml0T3B0LmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ydWxlKTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcXG59XFxuXFxuLyogU2F2ZWQtbG9jYXRpb24gbmF2aWdhdGlvbjogcHJldi9uZXh0IGNoZXZyb25zIGZsYW5raW5nIHRoZSBkb3Qgcm93LiBUaGUgd2hvbGVcXG4gICByb3cgaXMgaGlkZGVuIGF0IGEgY291bnQgb2Ygb25lIChhIHNpbmdsZSBsb2NhdGlvbiBuZWVkcyBubyBhZmZvcmRhbmNlKTsgdGhlXFxuICAgYXJyb3dzIGFyZSBkZXNrdG9wLW9ubHkgYW5kIGRyb3Agb3V0IGF0IOKJpDQ4MHB4IHdoZXJlIHN3aXBlIHRha2VzIG92ZXIuICovXFxuLm5hdlJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgbWFyZ2luOiA0cHggMCAycHg7XFxufVxcblxcbi5uYXZSb3cuaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5hcnJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYXJyb3c6aG92ZXIge1xcbiAgY29sb3I6ICNFQUVFRjI7XFxufVxcblxcbi5hcnJvdyBzdmcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMTRweDtcXG59XFxuXFxuLyogU2F2ZWQtbG9jYXRpb24gZG90czogb25lIHBlciBzYXZlZCBsb2NhdGlvbiwgdGhlIGFjdGl2ZSBvbmUgZmlsbGVkLiAqL1xcbiNkb3RSb3cge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiBvZmZzZXQgcGFyZW50IGZvciB0aGUgZGVza3RvcCByZW1vdmUgcG9wb3ZlciAqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogOHB4O1xcbn1cXG5cXG4uZG90IHtcXG4gIHdpZHRoOiA4cHg7XFxuICBoZWlnaHQ6IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQ6ICMyRTNCNDU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcXG59XFxuXFxuLmRvdC5hY3RpdmUge1xcbiAgYmFja2dyb3VuZDogI0VBRUVGMjtcXG59XFxuXFxuLyogRGVza3RvcCByZW1vdmUtY29uZmlybWF0aW9uIHBvcG92ZXIsIGFuY2hvcmVkIGFib3ZlIHRoZSBsb25nLXByZXNzZWQgZG90LlxcbiAgIFRvdWNoIGtlZXBzIHRoZSBuYXRpdmUgY29uZmlybTsgdGhpcyBpcyB0aGUgbW91c2UvcGVuIHBhdGguICovXFxuLnJlbW92ZVBvcG92ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiBjYWxjKDEwMCUgKyAxMHB4KTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIHotaW5kZXg6IDIwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA4cHg7XFxuICBwYWRkaW5nOiAxMHB4IDEycHg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncm91bmQpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcnVsZSk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBib3gtc2hhZG93OiAwIDZweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC40NSk7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4vKiBEb3dud2FyZCBwb2ludGVyIGFycm93LCBib3JkZXJlZDogb3V0ZXIgdHJpYW5nbGUgaW4gdGhlIHJ1bGUgY29sb3VyIHdpdGggYW5cXG4gICBpbm5lciBncm91bmQtZmlsbGVkIHRyaWFuZ2xlIGxhaWQgYSBwaXhlbCBoaWdoZXIgb24gdG9wIG9mIGl0LiAqL1xcbi5yZW1vdmVQb3BvdmVyOjpiZWZvcmUsXFxuLnJlbW92ZVBvcG92ZXI6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgd2lkdGg6IDA7XFxuICBoZWlnaHQ6IDA7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbn1cXG5cXG4ucmVtb3ZlUG9wb3Zlcjo6YmVmb3JlIHtcXG4gIHRvcDogMTAwJTtcXG4gIGJvcmRlci13aWR0aDogN3B4IDdweCAwIDdweDtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcnVsZSkgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5yZW1vdmVQb3BvdmVyOjphZnRlciB7XFxuICB0b3A6IGNhbGMoMTAwJSAtIDFweCk7XFxuICBib3JkZXItd2lkdGg6IDZweCA2cHggMCA2cHg7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWdyb3VuZCkgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5yZW1vdmVQb3BvdmVyLW5hbWUge1xcbiAgY29sb3I6IHZhcigtLXRleHQpO1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbn1cXG5cXG4ucmVtb3ZlUG9wb3Zlci1hY3Rpb25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDhweDtcXG59XFxuXFxuLnJlbW92ZVBvcG92ZXItY2FuY2VsLFxcbi5yZW1vdmVQb3BvdmVyLWRlbGV0ZSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIHBhZGRpbmc6IDVweCAxMnB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcnVsZSk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5yZW1vdmVQb3BvdmVyLWNhbmNlbCB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcXG59XFxuXFxuLnJlbW92ZVBvcG92ZXItY2FuY2VsOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcXG59XFxuXFxuLnJlbW92ZVBvcG92ZXItZGVsZXRlIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXRleHQpO1xcbiAgY29sb3I6IHZhcigtLWdyb3VuZCk7XFxuICBib3JkZXItY29sb3I6IHZhcigtLXRleHQpO1xcbn1cXG5cXG4ucmVtb3ZlUG9wb3Zlci1kZWxldGU6aG92ZXIge1xcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOTIpO1xcbn1cXG5cXG4vKiBSb2JvdG8gTGlnaHQgNDBweCBmb3IgdGhlIHJlYWRpbmcuICovXFxuI2N1cnJlbnRUZW1wIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBsaW5lLWhlaWdodDogMS4xO1xcbn1cXG5cXG4jY3VycmVudENvbmRpdGlvbiB7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBjb2xvcjogdmFyKC0tdGV4dCk7XFxufVxcblxcbi8qIEZvdXItdXAgc3RhdCByb3c6IHRleHQgbGFiZWxzLCBubyBpY29ucy4gKi9cXG4jc3RhdFJvdyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gIGdhcDogMTBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLXRvcDogMTRweDtcXG59XFxuXFxuLnN0YXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA0cHg7XFxuICBwYWRkaW5nOiAxMnB4IDZweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXJ1bGUpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4uc3RhdC1sYWJlbCB7XFxuICBmb250LWZhbWlseTogdmFyKC0tbW9ubyk7XFxuICBmb250LXNpemU6IDEwcHg7XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcXG59XFxuXFxuLnN0YXQtdmFsdWUge1xcbiAgZm9udC1zaXplOiAxN3B4O1xcbiAgY29sb3I6IHZhcigtLXRleHQpO1xcbn1cXG5cXG4vKiBTZWFyY2ggZm9ybS4gKi9cXG4jc2VhcmNoRm9ybSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qIHN0YWNrcyBhYm92ZSB0aGUgLndlYXRoZXJCZyBkcmlmdCBsYXllciAqL1xcbiAgei1pbmRleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLyogSG9sZHMgdGhlIGlucHV0IGFuZCBpdHMgYXV0b2NvbXBsZXRlIGRyb3Bkb3duOyBwb3NpdGlvbjogcmVsYXRpdmUgYW5jaG9yc1xcbiAgICNzdWdnZXN0aW9ucyBiZW5lYXRoIHRoZSBpbnB1dC4gZmxleDogMSBzbyB0aGUgcGFpciBmaWxscyB0aGUgcm93IHRoZSB3YXkgdGhlXFxuICAgYmFyZSBpbnB1dCB1c2VkIHRvLiAqL1xcbiNzZWFyY2hJbnB1dFdyYXAge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZmxleDogMTtcXG4gIG1pbi13aWR0aDogMDtcXG59XFxuXFxuI3NlYXJjaElucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTJweCAxNHB4O1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1vbm8pO1xcbiAgZm9udC1zaXplOiAxNnB4OyAvKiAxNnB4IHNvIGlPUyBTYWZhcmkgZG9lc24ndCBhdXRvLXpvb20gdGhlIGlucHV0IG9uIGZvY3VzICovXFxuICBjb2xvcjogdmFyKC0tdGV4dCk7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXJ1bGUpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4jc2VhcmNoSW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XFxufVxcblxcbiNzZWFyY2hJbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1tdXRlZCk7XFxufVxcblxcbi8qIFdoaWxlIHRoZSBkcm9wZG93biBpcyBvcGVuIHRoZSBpbnB1dCdzIGJvdHRvbSBjb3JuZXJzIHNxdWFyZSBvZmYgYW5kIGl0c1xcbiAgIGJvdHRvbSBlZGdlIGRyb3BzIG91dCwgc28gaXQgcmVhZHMgYXMgb25lIGF0dGFjaGVkIHN1cmZhY2Ugd2l0aCAjc3VnZ2VzdGlvbnMuICovXFxuI3NlYXJjaEZvcm0uc3VnZ2VzdGluZyAjc2VhcmNoSW5wdXQge1xcbiAgYm9yZGVyLXJhZGl1czogOHB4IDhweCAwIDA7XFxuICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyogRmFpbGVkIGxvb2t1cDogcmVkZGVuZWQgYm9yZGVyLCBjdXJyZW50IHJpYmJvbiBsZWZ0IGluIHBsYWNlLiAqL1xcbiNzZWFyY2hGb3JtLmludmFsaWQgI3NlYXJjaElucHV0IHtcXG4gIGJvcmRlci1jb2xvcjogI0MyNDUyRDtcXG59XFxuXFxuLyogQXV0b2NvbXBsZXRlIGRyb3Bkb3duOiBoYW5ncyBvZmYgdGhlIGJvdHRvbSBvZiB0aGUgaW5wdXQsIG1hdGNoaW5nIGl0cyB3aWR0aFxcbiAgIGFuZCBjb250aW51aW5nIGl0cyBmb2N1c2VkIGJvcmRlciBpbnRvIGEgYm90dG9tLXJvdW5kZWQgcGFuZWwuICovXFxuI3N1Z2dlc3Rpb25zIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTAwJTtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHotaW5kZXg6IDEwO1xcbiAgbWF4LWhlaWdodDogMjQwcHg7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JvdW5kKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW11dGVkKTtcXG4gIGJvcmRlci10b3A6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgOHB4IDhweDtcXG59XFxuXFxuI3N1Z2dlc3Rpb25zLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc3VnZ2VzdGlvbi1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxuICBnYXA6IDhweDtcXG4gIHBhZGRpbmc6IDEwcHggMTRweDtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tb25vKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnN1Z2dlc3Rpb24taXRlbTpob3ZlcixcXG4uc3VnZ2VzdGlvbi1pdGVtLnNlbGVjdGVkIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXJ1bGUpO1xcbn1cXG5cXG4uc3VnZ2VzdGlvbi1jaXR5IHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcXG59XFxuXFxuLnN1Z2dlc3Rpb24tY291bnRyeSB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xcbn1cXG5cXG4jc2VhcmNoQnV0dG9uIHtcXG4gIHBhZGRpbmc6IDEycHggMjBweDtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tb25vKTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICBjb2xvcjogdmFyKC0tZ3JvdW5kKTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXRleHQpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jc2VhcmNoQnV0dG9uOmhvdmVyIHtcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjkyKTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxuICAjYXBwIHtcXG4gICAgZ2FwOiAyMnB4O1xcbiAgICBwYWRkaW5nOiAyNHB4IDE2cHg7XFxuICB9XFxuXFxuICAjd2VhdGhlckNhcmQge1xcbiAgICBnYXA6IDIycHg7XFxuICB9XFxuXFxuICAvKiBTd2lwZS1kaXJlY3Rpb24tYXdhcmUgc2xpZGUgb24gYSBjb21taXR0ZWQgbG9jYXRpb24gcm90YXRpb24uIGZhdm91cml0ZXMuanNcXG4gICAgIGFkZHMgLnNsaWRlLW5leHQgKHN3aXBlIGxlZnQgLT4gbmV4dCkgb3IgLnNsaWRlLXByZXYgKHN3aXBlIHJpZ2h0IC0+IHByZXYpXFxuICAgICB0byAjd2VhdGhlckNhcmQsIHRoZW4gcm90YXRlcy4gVGhlIGNhcmQgZmFkZXMgdG8gbm90aGluZyBhdCB0aGUga2V5ZnJhbWUnc1xcbiAgICAgbWlkcG9pbnQsIHdoaWNoIG1hc2tzIHRoZSBmb3JlY2FzdCBzd2FwOiByZW5kZXJSaWJib24oKSByZWJ1aWxkcyBpbnRvIHRoaXNcXG4gICAgIHNhbWUgY2FyZCB3aGlsZSBpdCdzIGludmlzaWJsZSwgc28gdGhlIG5ldyBjdXJ2ZSBzbGlkZXMgaW4gcmF0aGVyIHRoYW5cXG4gICAgIHNuYXBwaW5nLiBEZXNrdG9wIHJvdGF0ZXMgdmlhIHRoZSBhcnJvd3MgYW5kIG5ldmVyIGdldHMgdGhlIGNsYXNzLiAqL1xcbiAgI3dlYXRoZXJDYXJkLnNsaWRlLW5leHQge1xcbiAgICBhbmltYXRpb246IGNhcmRTbGlkZU5leHQgMjgwbXMgZWFzZS1vdXQ7XFxuICB9XFxuXFxuICAjd2VhdGhlckNhcmQuc2xpZGUtcHJldiB7XFxuICAgIGFuaW1hdGlvbjogY2FyZFNsaWRlUHJldiAyODBtcyBlYXNlLW91dDtcXG4gIH1cXG5cXG4gIEBrZXlmcmFtZXMgY2FyZFNsaWRlTmV4dCB7XFxuICAgIDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyBvcGFjaXR5OiAxOyB9XFxuICAgIDQwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNDJweCk7IG9wYWNpdHk6IDA7IH1cXG4gICAgNjAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQycHgpOyBvcGFjaXR5OiAwOyB9XFxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IG9wYWNpdHk6IDE7IH1cXG4gIH1cXG5cXG4gIEBrZXlmcmFtZXMgY2FyZFNsaWRlUHJldiB7XFxuICAgIDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyBvcGFjaXR5OiAxOyB9XFxuICAgIDQwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0MnB4KTsgb3BhY2l0eTogMDsgfVxcbiAgICA2MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTQycHgpOyBvcGFjaXR5OiAwOyB9XFxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IG9wYWNpdHk6IDE7IH1cXG4gIH1cXG5cXG4gIC8qIE1vYmlsZSBuYXZpZ2F0ZXMgYnkgc3dpcGU7IGRyb3AgdGhlIGFycm93cyBidXQga2VlcCB0aGUgZG90cy4gKi9cXG4gIC5hcnJvdyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAjc3RhdFJvdyB7XFxuICAgIGdhcDogOHB4O1xcbiAgfVxcblxcbiAgLnN0YXQge1xcbiAgICBwYWRkaW5nOiAxMHB4IDRweDtcXG4gIH1cXG5cXG4gIC5zdGF0LXZhbHVlIHtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgfVxcbn1cXG5cXG4vKiBSZXNwZWN0IGEgcmVkdWNlZC1tb3Rpb24gcHJlZmVyZW5jZTogcm90YXRlIGluc3RhbnRseSwgbm8gc2xpZGUuIGZhdm91cml0ZXMuanNcXG4gICBzdGlsbCBhZGRzIHRoZSBjbGFzcywgYnV0IHdpdGggdGhlIGFuaW1hdGlvbiBzdXBwcmVzc2VkIGFuaW1hdGlvbmVuZCBuZXZlclxcbiAgIGZpcmVzLCBzbyBpdHMgc2V0VGltZW91dCBmYWxsYmFjayBpcyB3aGF0IHN0cmlwcyB0aGUgY2xhc3MgYmFjayBvZmYuICovXFxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcXG4gICN3ZWF0aGVyQ2FyZC5zbGlkZS1uZXh0LFxcbiAgI3dlYXRoZXJDYXJkLnNsaWRlLXByZXYge1xcbiAgICBhbmltYXRpb246IG5vbmU7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gZmF2b3VyaXRlcy5qcyDigJQgc2F2ZWQgbG9jYXRpb25zIHdpdGggc3dpcGUtdG8tcm90YXRlLlxuLy9cbi8vIFRoZSBzZWFyY2ggZm9ybSBpcyB0aGUgYWRkIHBhdGg6IGEgc3VjY2Vzc2Z1bCBsb29rdXAgYXBwZW5kcyB0aGUgcXVlcnkgdG8gYVxuLy8gcGVyc2lzdGVkIGxpc3QgYW5kIHN3aXRjaGVzIHRvIGl0OyBhIGZhaWxlZCBvbmUgbGVhdmVzIHRoZSBsaXN0IHVudG91Y2hlZFxuLy8gKGxvZ2ljLmpzJ3MgaW52YWxpZElucHV0KCkgaGFzIGFscmVhZHkgcmVkZGVuZWQgdGhlIGlucHV0KS4gQSByb3cgb2YgZG90c1xuLy8gdW5kZXIgdGhlIGxvY2F0aW9uIG5hbWUgc2hvd3MgaG93IG1hbnkgbG9jYXRpb25zIGFyZSBzYXZlZCBhbmQgd2hpY2ggaXNcbi8vIGN1cnJlbnQuIEEgaG9yaXpvbnRhbCBzd2lwZSBhbnl3aGVyZSBvbiB0aGUgc2NyZWVuIHJvdGF0ZXMgdGhyb3VnaCB0aGVtXG4vLyAod3JhcHBpbmcgYXQgYm90aCBlbmRzKSwgYXMgZG8gdGhlIGRlc2t0b3AgcHJldi9uZXh0IGFycm93czsgY2xpY2tpbmcgYSBkb3Rcbi8vIG9wZW5zIGEgY29uZmlybWF0aW9uIHRvIHJlbW92ZSB0aGF0IGxvY2F0aW9uLlxuLy9cbi8vIFN0YXRlIHBlcnNpc3RzIHRvIGxvY2FsU3RvcmFnZSB1bmRlciBhIGB3ZWF0aGVyYXBwX2Aga2V5LCBtYXRjaGluZyB0aGVcbi8vIGNvbnZlbnRpb24gdXNlZCBhY3Jvc3MgdGhlIG90aGVyIHJlcG9zIOKAlCBubyBJbmRleGVkREIsIG5vIGNvb2tpZXMsIG5vIGJhY2tlbmQsXG4vLyBubyBuZXcgZGVwZW5kZW5jaWVzLiBGZXRjaCBzdHJhdGVneSBpcyBsYXp5IChmZXRjaCBvbiBhcnJpdmFsKTogYSBzd2lwZSBsZWF2ZXNcbi8vIHRoZSBwcmV2aW91cyByaWJib24gb24gc2NyZWVuIHVudGlsIHRoZSBuZXcgZm9yZWNhc3QgcmVzb2x2ZXMsIHJldXNpbmcgdGhlXG4vLyBzYW1lIGtlZXAtY3VycmVudC1yaWJib24gYmVoYXZpb3VyIGEgc2VhcmNoIGFscmVhZHkgaGFzLCBzbyBhIHN3aXBlIG5ldmVyXG4vLyBsYW5kcyBvbiBhIHNwaW5uZXIgKHRoZXJlIGlzIG5vIHNwaW5uZXIpIG9yIGEgYmxhbmsgc2NyZWVuLlxuLy9cbi8vIEV2ZXJ5IGxpc3RlbmVyIGhlcmUgaXMgd2lyZWQgZXhhY3RseSBvbmNlLCBmcm9tIGluaXRGYXZvdXJpdGVzKCkgYXQgYm9vdHN0cmFwXG4vLyDigJQgbmV2ZXIgZnJvbSB0aGUgcmVuZGVyIHBhdGgg4oCUIHNvIG5vdGhpbmcgbXVsdGlwbGllcyBhY3Jvc3MgZmV0Y2hlcy5cblxuaW1wb3J0IHsgZm9yZWNhc3RMb2dpYyB9IGZyb20gJy4vbG9naWMuanMnO1xuXG5jb25zdCBLRVkgPSAnd2VhdGhlcmFwcF9zYXZlZExvY2F0aW9ucyc7XG5jb25zdCBERUZBVUxUX1FVRVJZID0gJzk4MDUyJztcbmNvbnN0IFNXSVBFX1RIUkVTSE9MRCA9IDUwOyAvLyBweCBvZiBob3Jpem9udGFsIHRyYXZlbCB0byBjb21taXQgYSByb3RhdGlvblxuY29uc3QgU0xJREVfTVMgPSAyODA7IC8vIGNhcmQgc2xpZGUgZHVyYXRpb24g4oCUIG1pcnJvciBvZiB0aGUgQ1NTIGtleWZyYW1lXG5cbi8vIFNhdmVkIGxvY2F0aW9uIHF1ZXJ5IHN0cmluZ3MsIGluIG9yZGVyLiBjdXJyZW50SW5kZXggcG9pbnRzIGF0IHRoZSBhY3RpdmUgb25lLlxubGV0IGxvY2F0aW9ucyA9IFtdO1xubGV0IGN1cnJlbnRJbmRleCA9IDA7XG5cbmxldCBkb3RSb3c7IC8vICNkb3RSb3csIGNhY2hlZCBvbmNlIGJ5IGluaXRGYXZvdXJpdGVzKClcbmxldCBuYXZSb3c7IC8vIC5uYXZSb3cgd3JhcHBpbmcgdGhlIGRvdHMgYW5kIHRoZSBwcmV2L25leHQgYXJyb3dzXG5sZXQgY2FyZDsgLy8gI3dlYXRoZXJDYXJkIOKAlCB0aGUgcmliYm9uK3JlYWRvdXQgdW5pdCB0aGF0IHNsaWRlcyBvbiByb3RhdGlvblxubGV0IHNsaWRlVGltZW91dCA9IG51bGw7XG5cbi8vIFN3aXBlIHRyYWNraW5nLlxubGV0IHRvdWNoU3RhcnRYID0gbnVsbDtcbmxldCB0b3VjaFN0YXJ0WSA9IG51bGw7XG5sZXQgc3dpcGVBY3RpdmUgPSBmYWxzZTtcblxuLy8gVGhlIHNpbmdsZSBkZXNrdG9wIHJlbW92ZS1jb25maXJtYXRpb24gcG9wb3Zlciwgb3IgbnVsbC4gT25seSBvbmUgaXMgb3BlbiBhdFxuLy8gYSB0aW1lOyBhIG5ldyBvcGVuIGNsb3NlcyBhbnkgcHJpb3Igb25lIGZpcnN0LlxubGV0IG9wZW5Qb3BvdmVyID0gbnVsbDtcblxuZnVuY3Rpb24gbG9hZCgpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByYXcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShLRVkpO1xuICAgIGlmIChyYXcpIHtcbiAgICAgIGNvbnN0IHBhcnNlZCA9IEpTT04ucGFyc2UocmF3KTtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHBhcnNlZCkpIHtcbiAgICAgICAgbG9jYXRpb25zID0gcGFyc2VkLmZpbHRlcigocSkgPT4gdHlwZW9mIHEgPT09ICdzdHJpbmcnICYmIHEudHJpbSgpLmxlbmd0aCk7XG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgbG9jYXRpb25zID0gW107XG4gIH1cbn1cblxuZnVuY3Rpb24gc2F2ZSgpIHtcbiAgdHJ5IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShLRVksIEpTT04uc3RyaW5naWZ5KGxvY2F0aW9ucykpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgLy8gU3RvcmFnZSBkaXNhYmxlZC9mdWxsIOKAlCB0aGUgaW4tbWVtb3J5IGxpc3Qgc3RpbGwgd29ya3MgZm9yIHRoaXMgc2Vzc2lvbi5cbiAgfVxufVxuXG5mdW5jdGlvbiBjbGVhcihub2RlKSB7XG4gIHdoaWxlIChub2RlLmZpcnN0Q2hpbGQpIHsgbm9kZS5yZW1vdmVDaGlsZChub2RlLmZpcnN0Q2hpbGQpOyB9XG59XG5cbi8vIEZldGNoIHRoZSBhY3RpdmUgbG9jYXRpb24sIG9yIHRoZSBoYXJkIGRlZmF1bHQgd2hlbiB0aGUgbGlzdCBpcyBlbXB0eS4gTGF6eTpcbi8vIHRoZSByZW5kZXIgcGF0aCBrZWVwcyB0aGUgcHJldmlvdXMgcmliYm9uIHVudGlsIHRoaXMgcmVzb2x2ZXMuXG5mdW5jdGlvbiBzaG93Q3VycmVudCgpIHtcbiAgaWYgKGxvY2F0aW9ucy5sZW5ndGgpIHtcbiAgICBmb3JlY2FzdExvZ2ljLmZ1dHVyZUFQSUNhbGxzKGxvY2F0aW9uc1tjdXJyZW50SW5kZXhdKTtcbiAgfSBlbHNlIHtcbiAgICBmb3JlY2FzdExvZ2ljLmZ1dHVyZUFQSUNhbGxzKERFRkFVTFRfUVVFUlkpO1xuICB9XG59XG5cbi8vIFJlZHJhdyB0aGUgZG90IHJvdy4gSGlkZGVuIGF0IGEgY291bnQgb2Ygb25lIChhIHNpbmdsZSBsb2NhdGlvbiBuZWVkcyBub1xuLy8gYWZmb3JkYW5jZSkgYW5kIHdoZW4gZW1wdHkgKHRoZSBkZWZhdWx0IGZhbGxiYWNrIGlzIG5vdCBhIHNhdmVkIGxvY2F0aW9uKS5cbmZ1bmN0aW9uIHJlbmRlckRvdHMoKSB7XG4gIGlmICghZG90Um93KSB7IHJldHVybjsgfVxuICBjbG9zZVBvcG92ZXIoKTsgLy8gYSByZWRyYXcgZHJvcHMgdGhlIGRvdCB0aGUgcG9wb3ZlciB3YXMgYW5jaG9yZWQgdG9cbiAgY2xlYXIoZG90Um93KTtcblxuICAvLyBHYXRlIHRoZSB3aG9sZSAubmF2Um93IChkb3RzICsgYXJyb3dzKSB0b2dldGhlciwgc28gdGhlIGRlc2t0b3AgYXJyb3dzIHNoYXJlXG4gIC8vIHRoZSBkb3RzJyB2aXNpYmlsaXR5IHJ1bGUgYW5kIG5ldmVyIGRhbmdsZSBiZXNpZGUgYW4gZW1wdHkgcm93LlxuICBjb25zdCBnYXRlID0gbmF2Um93IHx8IGRvdFJvdztcbiAgY29uc3QgbiA9IGxvY2F0aW9ucy5sZW5ndGg7XG4gIGlmIChuIDw9IDEpIHtcbiAgICBnYXRlLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIHJldHVybjtcbiAgfVxuICBnYXRlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgY29uc3QgZG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZG90LmNsYXNzTmFtZSA9ICdkb3QnICsgKGkgPT09IGN1cnJlbnRJbmRleCA/ICcgYWN0aXZlJyA6ICcnKTtcbiAgICBkb3Quc2V0QXR0cmlidXRlKCdyb2xlJywgJ2J1dHRvbicpO1xuICAgIGRvdC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCBsb2NhdGlvbnNbaV0pO1xuICAgIHdpcmVEb3QoZG90LCBpKTtcbiAgICBkb3RSb3cuYXBwZW5kQ2hpbGQoZG90KTtcbiAgfVxufVxuXG4vLyBBIHNpbmdsZSBjbGljayBvbiBhIGRvdCBvcGVucyB0aGUgZGVsZXRlIGNvbmZpcm1hdGlvbiBmb3IgdGhhdCBsb2NhdGlvbjpcbi8vIHRoZSBuYXRpdmUgY29uZmlybSBvbiB0b3VjaCwgdGhlIGFuY2hvcmVkIGluLXBhZ2UgcG9wb3ZlciBvbiBkZXNrdG9wL21vdXNlXG4vLyAoY29uZmlybVJlbW92ZSBicmFuY2hlcyBvbiBwb2ludGVyVHlwZSkuIFRhcC10by1zZWxlY3QgaXMgaW50ZW50aW9uYWxseVxuLy8gZHJvcHBlZCDigJQgcm90YXRlKCksIGRyaXZlbiBieSB0aGUgc3dpcGUgZ2VzdHVyZSBhbmQgdGhlIGRlc2t0b3AgcHJldi9uZXh0XG4vLyBhcnJvd3MsIGlzIHRoZSBvbmx5IHdheSB0byBjaGFuZ2UgdGhlIGFjdGl2ZSBsb2NhdGlvbi4gVGhlIGNsaWNrIGV2ZW50IGlzIGFcbi8vIFBvaW50ZXJFdmVudCwgc28gaXRzIHBvaW50ZXJUeXBlIHBpY2tzIHRoZSB0b3VjaCB2cyBkZXNrdG9wIGJyYW5jaCBkaXJlY3RseS5cbmZ1bmN0aW9uIHdpcmVEb3QoZG90LCBpKSB7XG4gIGRvdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uZmlybVJlbW92ZShpLCBkb3QsIGUucG9pbnRlclR5cGUgfHwgJ21vdXNlJyk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjb25maXJtUmVtb3ZlKGksIGRvdCwgcG9pbnRlclR5cGUpIHtcbiAgaWYgKGkgPCAwIHx8IGkgPj0gbG9jYXRpb25zLmxlbmd0aCkgeyByZXR1cm47IH1cbiAgLy8gRGVza3RvcCAobW91c2UvcGVuKSBnZXRzIHRoZSBhbmNob3JlZCBpbi1wYWdlIHBvcG92ZXI7IHRvdWNoIGtlZXBzIHRoZVxuICAvLyBuYXRpdmUgY29uZmlybSB1bnRvdWNoZWQuXG4gIGlmIChwb2ludGVyVHlwZSAmJiBwb2ludGVyVHlwZSAhPT0gJ3RvdWNoJyAmJiBkb3QpIHtcbiAgICBvcGVuUmVtb3ZlUG9wb3ZlcihpLCBkb3QpO1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAod2luZG93LmNvbmZpcm0oJ1JlbW92ZSAnICsgbG9jYXRpb25zW2ldICsgJz8nKSkge1xuICAgIHJlbW92ZUxvY2F0aW9uKGkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG9uUG9wb3ZlcktleWRvd24oZSkge1xuICBpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNsb3NlUG9wb3ZlcigpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG9uT3V0c2lkZVBvaW50ZXIoZSkge1xuICBpZiAob3BlblBvcG92ZXIgJiYgIW9wZW5Qb3BvdmVyLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgIGNsb3NlUG9wb3ZlcigpO1xuICB9XG59XG5cbi8vIFRlYXIgZG93biB0aGUgc2luZ2xlIG9wZW4gcG9wb3ZlciBhbmQgaXRzIGRvY3VtZW50LWxldmVsIGxpc3RlbmVycy4gU2FmZSB0b1xuLy8gY2FsbCB3aGVuIG5vdGhpbmcgaXMgb3Blbi5cbmZ1bmN0aW9uIGNsb3NlUG9wb3ZlcigpIHtcbiAgaWYgKCFvcGVuUG9wb3ZlcikgeyByZXR1cm47IH1cbiAgb3BlblBvcG92ZXIucmVtb3ZlKCk7XG4gIG9wZW5Qb3BvdmVyID0gbnVsbDtcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uUG9wb3ZlcktleWRvd24sIHRydWUpO1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIG9uT3V0c2lkZVBvaW50ZXIsIHRydWUpO1xufVxuXG4vLyBBIHNtYWxsIGNvbmZpcm1hdGlvbiBwb3BvdmVyIGFuY2hvcmVkIGFib3ZlIHRoZSBjbGlja2VkIGRvdCwgaW5zaWRlXG4vLyAjZG90Um93LiBEZWxldGUgcmVtb3ZlcyB0aGUgbG9jYXRpb247IENhbmNlbCwgRXNjYXBlLCBvciBhbiBvdXRzaWRlIGNsaWNrXG4vLyBkaXNtaXNzZXMgd2l0aG91dCBjaGFuZ2VzLiBPbmx5IG9uZSBpcyBldmVyIG9wZW4gKG9wZW5SZW1vdmVQb3BvdmVyIGNsb3NlcyBhbnlcbi8vIHByaW9yIG9uZSBmaXJzdCkuXG5mdW5jdGlvbiBvcGVuUmVtb3ZlUG9wb3ZlcihpLCBkb3QpIHtcbiAgY2xvc2VQb3BvdmVyKCk7XG5cbiAgY29uc3QgcG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHBvcC5jbGFzc05hbWUgPSAncmVtb3ZlUG9wb3Zlcic7XG4gIHBvcC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnZGlhbG9nJyk7XG4gIHBvcC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCAnUmVtb3ZlICcgKyBsb2NhdGlvbnNbaV0pO1xuXG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbmFtZS5jbGFzc05hbWUgPSAncmVtb3ZlUG9wb3Zlci1uYW1lJztcbiAgbmFtZS50ZXh0Q29udGVudCA9IGxvY2F0aW9uc1tpXTtcblxuICBjb25zdCBhY3Rpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGFjdGlvbnMuY2xhc3NOYW1lID0gJ3JlbW92ZVBvcG92ZXItYWN0aW9ucyc7XG5cbiAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNhbmNlbEJ0bi50eXBlID0gJ2J1dHRvbic7XG4gIGNhbmNlbEJ0bi5jbGFzc05hbWUgPSAncmVtb3ZlUG9wb3Zlci1jYW5jZWwnO1xuICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcbiAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VQb3BvdmVyKTtcblxuICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgZGVsZXRlQnRuLnR5cGUgPSAnYnV0dG9uJztcbiAgZGVsZXRlQnRuLmNsYXNzTmFtZSA9ICdyZW1vdmVQb3BvdmVyLWRlbGV0ZSc7XG4gIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xuICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgaWR4ID0gaTtcbiAgICBjbG9zZVBvcG92ZXIoKTtcbiAgICByZW1vdmVMb2NhdGlvbihpZHgpO1xuICB9KTtcblxuICBhY3Rpb25zLmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XG4gIGFjdGlvbnMuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcbiAgcG9wLmFwcGVuZENoaWxkKG5hbWUpO1xuICBwb3AuYXBwZW5kQ2hpbGQoYWN0aW9ucyk7XG5cbiAgZG90Um93LmFwcGVuZENoaWxkKHBvcCk7XG4gIG9wZW5Qb3BvdmVyID0gcG9wO1xuXG4gIC8vIEFuY2hvciBob3Jpem9udGFsbHkgb3ZlciB0aGUgdHJpZ2dlcmluZyBkb3QncyBjZW50cmUgKG9mZnNldExlZnQgaXMgcmVsYXRpdmVcbiAgLy8gdG8gI2RvdFJvdywgd2hpY2ggaXMgdGhlIG9mZnNldCBwYXJlbnQg4oCUIHNlZSBpdHMgcG9zaXRpb246IHJlbGF0aXZlIHJ1bGUpLlxuICBwb3Auc3R5bGUubGVmdCA9IChkb3Qub2Zmc2V0TGVmdCArIGRvdC5vZmZzZXRXaWR0aCAvIDIpICsgJ3B4JztcblxuICAvLyBUaGUgY2xpY2sgKGFuZCBpdHMgcG9pbnRlcmRvd24pIHRoYXQgb3BlbmVkIHRoaXMgcG9wb3ZlciBoYXMgYWxyZWFkeSBmaXJlZCxcbiAgLy8gc28gYSBjYXB0dXJlIGxpc3RlbmVyIGZvciB0aGUgbmV4dCBwb2ludGVyZG93biBjbG9zZXMgdGhlIHBvcG92ZXIgb24gYW5cbiAgLy8gb3V0c2lkZSBjbGljayB3aXRob3V0IGltbWVkaWF0ZWx5IHN3YWxsb3dpbmcgaXRzIG93biBvcGVuaW5nIGV2ZW50LlxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25Qb3BvdmVyS2V5ZG93biwgdHJ1ZSk7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgb25PdXRzaWRlUG9pbnRlciwgdHJ1ZSk7XG59XG5cbi8vIFNsaWRlIHRoZSByaWJib24rcmVhZG91dCBjYXJkIGluIHRoZSBzd2lwZSBkaXJlY3Rpb24gb24gYSBjb21taXR0ZWQgcm90YXRpb24uXG4vLyBNb2JpbGUgb25seSDigJQgdGhlIGRlc2t0b3AgcHJldi9uZXh0IGFycm93cyB1cGRhdGUgaW5zdGFudGx5LCBzbyB0aGUgY2xhc3MgaXNcbi8vIGFkZGVkIG9ubHkgd2hlbiB0aGUg4omkNDgwcHggYnJlYWtwb2ludCBpcyBhY3RpdmUuIFRoZSBrZXlmcmFtZSBmYWRlcyB0aGUgY2FyZFxuLy8gdG8gbm90aGluZyBhdCBpdHMgbWlkcG9pbnQgKHNlZSAjd2VhdGhlckNhcmQuc2xpZGUtKiBpbiBzdHlsZS5jc3MpLCB3aGljaFxuLy8gbWFza3MgdGhlIGZvcmVjYXN0IHN3YXA6IHNob3dDdXJyZW50KCkncyBmZXRjaCByZXNvbHZlcyBhbmQgcmVuZGVyUmliYm9uKClcbi8vIHJlYnVpbGRzIGludG8gdGhpcyBzYW1lIGNhcmQsIHNvIHRoZSBuZXcgY3VydmUgc2xpZGVzIGJhY2sgaW4gcmF0aGVyIHRoYW5cbi8vIHNuYXBwaW5nLiBEaXJlY3Rpb24tYXdhcmU6IG91dGdvaW5nIGNvbnRlbnQgbGVhdmVzIHRvd2FyZCB0aGUgc3dpcGUsIGluY29taW5nXG4vLyBlbnRlcnMgZnJvbSB0aGUgb3Bwb3NpdGUgZWRnZS5cbmZ1bmN0aW9uIHBsYXlTbGlkZShkaXIpIHtcbiAgaWYgKCFjYXJkKSB7IHJldHVybjsgfVxuICBpZiAoIXdpbmRvdy5tYXRjaE1lZGlhIHx8ICF3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogNDgwcHgpJykubWF0Y2hlcykge1xuICAgIHJldHVybjsgLy8gZGVza3RvcCByb3RhdGVzIHZpYSB0aGUgYXJyb3dzLCB3aXRob3V0IHRoZSBzbGlkZVxuICB9XG4gIGNhcmQuY2xhc3NMaXN0LnJlbW92ZSgnc2xpZGUtbmV4dCcsICdzbGlkZS1wcmV2Jyk7XG4gIHZvaWQgY2FyZC5vZmZzZXRXaWR0aDsgLy8gcmVmbG93IHNvIGEgcmFwaWQgc2Vjb25kIHN3aXBlIHJlc3RhcnRzIHRoZSBhbmltYXRpb25cbiAgY2FyZC5jbGFzc0xpc3QuYWRkKGRpciA8IDAgPyAnc2xpZGUtcHJldicgOiAnc2xpZGUtbmV4dCcpO1xuXG4gIC8vIG9uQ2FyZEFuaW1FbmQgc3RyaXBzIHRoZSBjbGFzcyB3aGVuIHRoZSBrZXlmcmFtZSBmaW5pc2hlczsgdGhpcyBpcyB0aGVcbiAgLy8gZmFsbGJhY2sgZm9yIHRoZSByZWR1Y2VkLW1vdGlvbiBwYXRoLCB3aGVyZSB0aGUgYW5pbWF0aW9uIGlzIHN1cHByZXNzZWQgYW5kXG4gIC8vIGFuaW1hdGlvbmVuZCBuZXZlciBmaXJlcy5cbiAgaWYgKHNsaWRlVGltZW91dCkgeyBjbGVhclRpbWVvdXQoc2xpZGVUaW1lb3V0KTsgfVxuICBzbGlkZVRpbWVvdXQgPSBzZXRUaW1lb3V0KGNsZWFyU2xpZGUsIFNMSURFX01TICsgODApO1xufVxuXG5mdW5jdGlvbiBjbGVhclNsaWRlKCkge1xuICBpZiAoc2xpZGVUaW1lb3V0KSB7IGNsZWFyVGltZW91dChzbGlkZVRpbWVvdXQpOyBzbGlkZVRpbWVvdXQgPSBudWxsOyB9XG4gIGlmIChjYXJkKSB7IGNhcmQuY2xhc3NMaXN0LnJlbW92ZSgnc2xpZGUtbmV4dCcsICdzbGlkZS1wcmV2Jyk7IH1cbn1cblxuZnVuY3Rpb24gb25DYXJkQW5pbUVuZChlKSB7XG4gIGlmIChlLnRhcmdldCAhPT0gY2FyZCkgeyByZXR1cm47IH0gLy8gaWdub3JlIGFueSBidWJibGVkIGRlc2NlbmRhbnQgYW5pbWF0aW9uXG4gIGNsZWFyU2xpZGUoKTtcbn1cblxuLy8gUm90YXRlIHRocm91Z2ggdGhlIHNhdmVkIGxpc3Qgd2l0aCB3cmFwLiBOby1vcCBiZWxvdyB0d28gbG9jYXRpb25zLiBUaGUgc2xpZGVcbi8vIGNsYXNzIGdvZXMgb24gYmVmb3JlIHRoZSByZWRyYXcvZmV0Y2ggc28gdGhlIG91dGdvaW5nIGNvbnRlbnQgaXMgYWxyZWFkeVxuLy8gbW92aW5nIGFzIHRoZSBuZXcgZm9yZWNhc3QgaXMgcmVxdWVzdGVkIChwbGF5U2xpZGUgaXMgYSBuby1vcCBvZmYgbW9iaWxlKS5cbmZ1bmN0aW9uIHJvdGF0ZShkaXIpIHtcbiAgY29uc3QgbiA9IGxvY2F0aW9ucy5sZW5ndGg7XG4gIGlmIChuIDw9IDEpIHsgcmV0dXJuOyB9XG4gIGN1cnJlbnRJbmRleCA9IChjdXJyZW50SW5kZXggKyBkaXIgKyBuKSAlIG47XG4gIHBsYXlTbGlkZShkaXIpO1xuICByZW5kZXJEb3RzKCk7XG4gIHNob3dDdXJyZW50KCk7XG59XG5cbi8vIFJlbW92ZSBhIGxvY2F0aW9uLCBrZWVwaW5nIGEgY29oZXJlbnQgYWN0aXZlIHNlbGVjdGlvbjogcmVtb3ZpbmcgdGhlIGFjdGl2ZVxuLy8gb25lIG1vdmVzIHRvIGEgbmVpZ2hib3VyIHJhdGhlciB0aGFuIGxlYXZpbmcgYW4gZW1wdHkgdmlldzsgZW1wdHlpbmcgdGhlIGxpc3Rcbi8vIGZhbGxzIGJhY2sgdG8gdGhlIGRlZmF1bHQuXG5mdW5jdGlvbiByZW1vdmVMb2NhdGlvbihpKSB7XG4gIGlmIChpIDwgMCB8fCBpID49IGxvY2F0aW9ucy5sZW5ndGgpIHsgcmV0dXJuOyB9XG4gIGNvbnN0IHdhc0FjdGl2ZSA9IChpID09PSBjdXJyZW50SW5kZXgpO1xuXG4gIGxvY2F0aW9ucy5zcGxpY2UoaSwgMSk7XG4gIHNhdmUoKTtcblxuICBpZiAobG9jYXRpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgIGN1cnJlbnRJbmRleCA9IDA7XG4gICAgcmVuZGVyRG90cygpO1xuICAgIHNob3dDdXJyZW50KCk7IC8vIGZhbGxzIGJhY2sgdG8gREVGQVVMVF9RVUVSWVxuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpIDwgY3VycmVudEluZGV4KSB7XG4gICAgY3VycmVudEluZGV4LS07XG4gIH0gZWxzZSBpZiAoaSA9PT0gY3VycmVudEluZGV4ICYmIGN1cnJlbnRJbmRleCA+PSBsb2NhdGlvbnMubGVuZ3RoKSB7XG4gICAgY3VycmVudEluZGV4ID0gbG9jYXRpb25zLmxlbmd0aCAtIDE7XG4gIH1cblxuICByZW5kZXJEb3RzKCk7XG4gIGlmICh3YXNBY3RpdmUpIHsgc2hvd0N1cnJlbnQoKTsgfVxufVxuXG5mdW5jdGlvbiBvblRvdWNoU3RhcnQoZSkge1xuICBpZiAoZS50b3VjaGVzLmxlbmd0aCAhPT0gMSkgeyBzd2lwZUFjdGl2ZSA9IGZhbHNlOyByZXR1cm47IH1cbiAgLy8gTGVhdmUgdGhlIHNlYXJjaCBmaWVsZCdzIG93biB0b3VjaCBoYW5kbGluZyAoY3Vyc29yIHBsYWNlbWVudCkgYWxvbmUuXG4gIGlmIChlLnRhcmdldCAmJiBlLnRhcmdldC5jbG9zZXN0ICYmIGUudGFyZ2V0LmNsb3Nlc3QoJyNzZWFyY2hGb3JtJykpIHtcbiAgICBzd2lwZUFjdGl2ZSA9IGZhbHNlO1xuICAgIHJldHVybjtcbiAgfVxuICB0b3VjaFN0YXJ0WCA9IGUudG91Y2hlc1swXS5jbGllbnRYO1xuICB0b3VjaFN0YXJ0WSA9IGUudG91Y2hlc1swXS5jbGllbnRZO1xuICBzd2lwZUFjdGl2ZSA9IHRydWU7XG59XG5cbmZ1bmN0aW9uIG9uVG91Y2hFbmQoZSkge1xuICBpZiAoIXN3aXBlQWN0aXZlKSB7IHJldHVybjsgfVxuICBzd2lwZUFjdGl2ZSA9IGZhbHNlO1xuXG4gIGNvbnN0IHQgPSBlLmNoYW5nZWRUb3VjaGVzICYmIGUuY2hhbmdlZFRvdWNoZXNbMF07XG4gIGlmICghdCkgeyByZXR1cm47IH1cblxuICBjb25zdCBkeCA9IHQuY2xpZW50WCAtIHRvdWNoU3RhcnRYO1xuICBjb25zdCBkeSA9IHQuY2xpZW50WSAtIHRvdWNoU3RhcnRZO1xuXG4gIC8vIENvbW1pdCBvbmx5IG9uIGEgZGVjaXNpdmVseSBob3Jpem9udGFsIGdlc3R1cmUsIHNvIGEgdmVydGljYWwgcGFnZSBzY3JvbGxcbiAgLy8gKHxkeXwgPj0gfGR4fCkgaXMgbmV2ZXIgaGlqYWNrZWQuXG4gIGlmIChNYXRoLmFicyhkeCkgPiBTV0lQRV9USFJFU0hPTEQgJiYgTWF0aC5hYnMoZHgpID4gTWF0aC5hYnMoZHkpKSB7XG4gICAgcm90YXRlKGR4IDwgMCA/IDEgOiAtMSk7IC8vIHN3aXBlIGxlZnQgLT4gbmV4dCwgc3dpcGUgcmlnaHQgLT4gcHJldmlvdXNcbiAgfVxufVxuXG5mdW5jdGlvbiB3aXJlR2VzdHVyZXMoKSB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBvblRvdWNoU3RhcnQsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBvblRvdWNoRW5kLCB7IHBhc3NpdmU6IHRydWUgfSk7XG59XG5cbi8vIERlc2t0b3AgcHJldi9uZXh0IGFycm93cyBkcml2ZSB0aGUgc2FtZSByb3RhdGUoKSB0aGUgc3dpcGUgZ2VzdHVyZSBkb2VzLCBzb1xuLy8gYm90aCBwYXRocyBzaGFyZSBvbmUgY291bnRlci4gV2lyZWQgb25jZSBmcm9tIGluaXRGYXZvdXJpdGVzKCkuXG5mdW5jdGlvbiB3aXJlQXJyb3dzKCkge1xuICBjb25zdCBwcmV2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdlByZXYnKTtcbiAgY29uc3QgbmV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZOZXh0Jyk7XG4gIGlmIChwcmV2KSB7IHByZXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiByb3RhdGUoLTEpKTsgfVxuICBpZiAobmV4dCkgeyBuZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcm90YXRlKDEpKTsgfVxufVxuXG4vLyBBcHBlbmQgYSBzdWNjZXNzZnVsbHkgbG9va2VkLXVwIGxvY2F0aW9uIGFuZCBzd2l0Y2ggdG8gaXQuIENhbGxlZCBmcm9tIHRoZVxuLy8gc2VhcmNoIHN1Ym1pdCBoYW5kbGVyIEFGVEVSIHRoZSBmZXRjaCByZXNvbHZlcywgc28gdGhlIGZvcmVjYXN0IGlzIGFscmVhZHlcbi8vIHJlbmRlcmVkIOKAlCB0aGlzIG9ubHkgdXBkYXRlcyB0aGUgc2F2ZWQgbGlzdCBhbmQgdGhlIGRvdHMsIG5ldmVyIHJlLWZldGNoZXMuXG4vLyBBIGR1cGxpY2F0ZSBxdWVyeSBzd2l0Y2hlcyB0byB0aGUgZXhpc3RpbmcgZW50cnkgaW5zdGVhZCBvZiBhZGRpbmcgYSBzZWNvbmQuXG5leHBvcnQgZnVuY3Rpb24gYWRkTG9jYXRpb24ocXVlcnkpIHtcbiAgY29uc3QgcSA9IFN0cmluZyhxdWVyeSkudHJpbSgpO1xuICBpZiAoIXEpIHsgcmV0dXJuOyB9XG5cbiAgY29uc3QgZXhpc3RpbmcgPSBsb2NhdGlvbnMuaW5kZXhPZihxKTtcbiAgaWYgKGV4aXN0aW5nICE9PSAtMSkge1xuICAgIGN1cnJlbnRJbmRleCA9IGV4aXN0aW5nO1xuICB9IGVsc2Uge1xuICAgIGxvY2F0aW9ucy5wdXNoKHEpO1xuICAgIGN1cnJlbnRJbmRleCA9IGxvY2F0aW9ucy5sZW5ndGggLSAxO1xuICAgIHNhdmUoKTtcbiAgfVxuICByZW5kZXJEb3RzKCk7XG59XG5cbi8vIEJvb3RzdHJhcDogbG9hZCB0aGUgc2F2ZWQgbGlzdCwgd2lyZSB0aGUgc3dpcGUgZ2VzdHVyZXMgb25jZSwgZHJhdyB0aGUgZG90cyxcbi8vIGFuZCBmaXJlIHRoZSBzaW5nbGUgaW5pdGlhbCBmZXRjaCAodGhlIGZpcnN0IHNhdmVkIGxvY2F0aW9uLCBvciB0aGUgZGVmYXVsdFxuLy8gd2hlbiBub25lIGFyZSBzYXZlZCkuIGluZGV4LmpzIGNhbGxzIHRoaXMgb25jZSwgYWZ0ZXIgdGhlIERPTSBpcyBhcHBlbmRlZC5cbmV4cG9ydCBmdW5jdGlvbiBpbml0RmF2b3VyaXRlcygpIHtcbiAgbG9hZCgpO1xuICBkb3RSb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZG90Um93Jyk7XG4gIG5hdlJvdyA9IGRvdFJvdyA/IGRvdFJvdy5wYXJlbnRFbGVtZW50IDogbnVsbDtcbiAgY2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWF0aGVyQ2FyZCcpO1xuICBpZiAoY2FyZCkgeyBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIG9uQ2FyZEFuaW1FbmQpOyB9XG4gIHdpcmVHZXN0dXJlcygpO1xuICB3aXJlQXJyb3dzKCk7XG4gIGN1cnJlbnRJbmRleCA9IDA7XG4gIHJlbmRlckRvdHMoKTtcbiAgc2hvd0N1cnJlbnQoKTtcbn1cbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgcmVuZGVyUmliYm9uLCBjdXJyZW50SG91ckluZGV4IH0gZnJvbSAnLi9yaWJib24uanMnO1xuaW1wb3J0IHsgZm9yZWNhc3RMb2dpYyB9IGZyb20gJy4vbG9naWMuanMnO1xuaW1wb3J0IHsgYWRkTG9jYXRpb24gfSBmcm9tICcuL2Zhdm91cml0ZXMuanMnO1xuaW1wb3J0IHsgc2V0V2VhdGhlckJnIH0gZnJvbSAnLi9za3kuanMnO1xuXG4vLyBHdWFyZCBzbyB3aXJlRXZlbnRzKCkgb25seSBldmVyIHJlZ2lzdGVycyBvbmUgc2V0IG9mIGxpc3RlbmVycy4gVGhlIG9sZFxuLy8gY2hhbmdlV2VhdGhlckluZm8oKSByZS1yZWdpc3RlcmVkIG9uIGV2ZXJ5IGZldGNoLCBkb3VibGluZyB0aGUgaGFuZGxlciBjb3VudFxuLy8gcGVyIHNlYXJjaDsgdGhlIHJlbmRlciBwYXRoIChyZW5kZXJGb3JlY2FzdCkgYW5kIHRoZSB3aXJpbmcgcGF0aCAod2lyZUV2ZW50cylcbi8vIGFyZSBzcGxpdCBwcmVjaXNlbHkgc28gdGhhdCBjYW4gbmV2ZXIgaGFwcGVuIGFnYWluLlxubGV0IGV2ZW50c1dpcmVkID0gZmFsc2U7XG5cbi8vIERlYm91bmNlIHdpbmRvdyBmb3IgdGhlIGNpdHktc3VnZ2VzdGlvbiBsb29rdXAg4oCUIGxvbmcgZW5vdWdoIHRoYXQgYSBydW4gb2Zcbi8vIGtleXN0cm9rZXMgZmlyZXMgb25lIHJlcXVlc3QsIHNob3J0IGVub3VnaCB0byBmZWVsIGxpdmUuXG5jb25zdCBTVUdHRVNUX0RFQk9VTkNFX01TID0gMzAwO1xuXG4vLyBDL0YgZGlzcGxheSB1bml0LCBwZXJzaXN0ZWQgdW5kZXIgdGhlIHNoYXJlZCB3ZWF0aGVyYXBwXyBsb2NhbFN0b3JhZ2UgcHJlZml4LlxuLy8gVGhpcyBpcyBkaXNwbGF5LW9ubHk6IHJlbmRlclJpYmJvbigpIHN0aWxsIHJlY2VpdmVzIHJhdyBDZWxzaXVzLCBzbyB0aGUgY3VydmVcbi8vIGNvbG91cnMgKHRlbXBDb2xvdXIpIGFuZCB0aGUgeS1zY2FsZSBuZXZlciBzaGlmdCB3aGVuIHRoZSByZWFkb3V0IHVuaXQgZmxpcHMuXG5jb25zdCBVTklUX0tFWSA9ICd3ZWF0aGVyYXBwX3VuaXQnO1xubGV0IGN1cnJlbnRVbml0ID0gbG9hZFVuaXQoKTtcblxuLy8gVGhlIGxhc3QgcmVuZGVyZWQgXCJub3dcIiwga2VwdCBpbiBDZWxzaXVzIHNvIHRoZSB1bml0IHRvZ2dsZSBjYW4gcmUtcmVuZGVyIHRoZVxuLy8gdGVtcGVyYXR1cmUgcmVhZG91dHMgd2l0aG91dCB3YWl0aW5nIGZvciBhbm90aGVyIGZldGNoLlxubGV0IGxhc3ROb3cgPSBudWxsO1xuXG4vLyBDYWNoZWQgRE9NIHJlZmVyZW5jZXMsIHBvcHVsYXRlZCBvbmNlIGJ5IGNhY2hlRG9tKCkgYWZ0ZXIgaW5kZXguanMgaGFzIGJ1aWx0XG4vLyBhbmQgYXBwZW5kZWQgdGhlIERPTS5cbmxldCBzZWFyY2hGb3JtLCBzZWFyY2hJbnB1dCwgc3VnZ2VzdGlvbnMsIGxvY2F0aW9uTmFtZSwgdW5pdFN3aXRjaCwgY3VycmVudFRlbXAsXG4gIGN1cnJlbnRDb25kaXRpb24sIGZlZWxzVmFsLCBodW1pZGl0eVZhbCwgcmFpblZhbCwgd2luZFZhbDtcblxuLy8gQXV0b2NvbXBsZXRlIHN0YXRlLiBjdXJyZW50U3VnZ2VzdGlvbnMgaG9sZHMgdGhlIHJlc3VsdHMgYmFja2luZyB0aGUgdmlzaWJsZVxuLy8gZHJvcGRvd247IHNlbGVjdGVkSW5kZXggaXMgdGhlIGtleWJvYXJkLWhpZ2hsaWdodGVkIHJvdyAoLTEgPSBub25lKS4gcmVxdWVzdFNlcVxuLy8gZGlzY2FyZHMgc3RhbGUgYXN5bmMgcmVzdWx0cyDigJQgb25seSB0aGUgbGF0ZXN0IGxvb2t1cCByZW5kZXJzIOKAlCBhbmQgaXMgYnVtcGVkXG4vLyBvbiBjbG9zZSBzbyBhbiBpbi1mbGlnaHQgcmVxdWVzdCBjYW4ndCByZW9wZW4gdGhlIGRyb3Bkb3duIGFmdGVyIHNlbGVjdGlvbi5cbmxldCBjdXJyZW50U3VnZ2VzdGlvbnMgPSBbXTtcbmxldCBzZWxlY3RlZEluZGV4ID0gLTE7XG5sZXQgc3VnZ2VzdERlYm91bmNlID0gbnVsbDtcbmxldCByZXF1ZXN0U2VxID0gMDtcblxuZnVuY3Rpb24gY2FjaGVEb20oKSB7XG4gIGlmIChsb2NhdGlvbk5hbWUpIHsgcmV0dXJuOyB9IC8vIGFscmVhZHkgY2FjaGVkXG5cbiAgc2VhcmNoRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hGb3JtJyk7XG4gIHNlYXJjaElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaElucHV0Jyk7XG4gIHN1Z2dlc3Rpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Z2dlc3Rpb25zJyk7XG4gIGxvY2F0aW9uTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2NhdGlvbk5hbWUnKTtcbiAgdW5pdFN3aXRjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1bml0U3dpdGNoJyk7XG4gIGN1cnJlbnRUZW1wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnRUZW1wJyk7XG4gIGN1cnJlbnRDb25kaXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudENvbmRpdGlvbicpO1xuICBmZWVsc1ZhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmZWVsc1ZhbCcpO1xuICBodW1pZGl0eVZhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdodW1pZGl0eVZhbCcpO1xuICByYWluVmFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhaW5WYWwnKTtcbiAgd2luZFZhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5kVmFsJyk7XG59XG5cbi8vIFB1cmUgcmVuZGVyIHBhdGguIGZ1bGZpbGxQcm9taXNlKCkgaW4gbG9naWMuanMgY2FsbHMgdGhpcyBvbiBldmVyeSByZXNvbHZlZFxuLy8gcmVzcG9uc2U7IGl0IHJlZ2lzdGVycyBOTyBsaXN0ZW5lcnMsIHNvIGl0IGlzIHNhZmUgdG8gY2FsbCByZXBlYXRlZGx5LiBEcmF3c1xuLy8gdGhlIHJpYmJvbiBhbmQgZmlsbHMgdGhlIHJlYWRvdXQgZnJvbSB0aGUgc2FtZSBcIm5vd1wiIGluZGV4LCBzbyB0aGUgbWFya2VyIG9uXG4vLyB0aGUgY3VydmUgYW5kIHRoZSBzdGF0IHJvdyBjYW4gbmV2ZXIgZGlzYWdyZWUgYWJvdXQgdGhlIGN1cnJlbnQgaG91ci5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJGb3JlY2FzdChmb3JlY2FzdCkge1xuICBjYWNoZURvbSgpO1xuXG4gIHJlbmRlclJpYmJvbihmb3JlY2FzdCk7XG5cbiAgY29uc3QgaSA9IGN1cnJlbnRIb3VySW5kZXgoZm9yZWNhc3QpO1xuICBjb25zdCBub3cgPSBmb3JlY2FzdC5ob3Vyc1tpXTtcbiAgaWYgKCFub3cpIHsgcmV0dXJuOyB9XG5cbiAgbGFzdE5vdyA9IG5vdztcbiAgbG9jYXRpb25OYW1lLnRleHRDb250ZW50ID0gZm9yZWNhc3QubG9jYXRpb24ubmFtZTtcbiAgY3VycmVudENvbmRpdGlvbi50ZXh0Q29udGVudCA9IG5vdy5jb25kaXRpb247XG5cbiAgLy8gUmVwYWludCB0aGUgZnVsbC12aWV3cG9ydCBiYWNrZ3JvdW5kIHRvIG1hdGNoIHRoZSBjdXJyZW50IGNvbmRpdGlvbi4gT2ZmIHRoZVxuICAvLyBjdXJ2ZSdzIGRhdGEgcGF0aCDigJQgaXQgb25seSBzd2FwcyBhIGNsYXNzLCBhbmQgbm8tb3BzIHdoZW4gdGhlIGNhdGVnb3J5IGlzXG4gIC8vIHVuY2hhbmdlZCwgc28gcGFnaW5nIGxvY2F0aW9ucyBvciBmbGlwcGluZyB0aGUgdW5pdCBkb2Vzbid0IHJlc3RhcnQgaXQuXG4gIHNldFdlYXRoZXJCZyhub3cuY29uZGl0aW9uKTtcblxuICBodW1pZGl0eVZhbC50ZXh0Q29udGVudCA9IG5vdy5odW1pZGl0eSArICclJztcbiAgcmFpblZhbC50ZXh0Q29udGVudCA9IG5vdy5yYWluICsgJyUnO1xuICB3aW5kVmFsLnRleHRDb250ZW50ID0gTWF0aC5yb3VuZChub3cud2luZCkgKyAnIGttL2gnO1xuXG4gIC8vIFRlbXBlcmF0dXJlIHJlYWRvdXRzIGFuZCB0aGUgYWN0aXZlIGJ1dHRvbiBzdGF0ZSBib3RoIGNvbWUgZnJvbSByZW5kZXJUZW1wcyxcbiAgLy8gc28gYSBmZXRjaCBhbmQgYSB1bml0IHRvZ2dsZSBjYW4gbmV2ZXIgZm9ybWF0IHRoZSB0d28gdGVtcGVyYXR1cmVzIGRpZmZlcmVudGx5LlxuICByZW5kZXJUZW1wcygpO1xufVxuXG4vLyBSZWFkIHRoZSBwZXJzaXN0ZWQgdW5pdCwgZGVmYXVsdGluZyB0byBDZWxzaXVzLiBHdWFyZGVkIHNvIGEgbG9ja2VkLWRvd25cbi8vIGxvY2FsU3RvcmFnZSAocHJpdmF0ZSBtb2RlLCBkaXNhYmxlZCBzdG9yYWdlKSBmYWxscyBiYWNrIHJhdGhlciB0aGFuIHRocm93aW5nLlxuZnVuY3Rpb24gbG9hZFVuaXQoKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFVOSVRfS0VZKSA9PT0gJ0YnID8gJ0YnIDogJ0MnO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuICdDJztcbiAgfVxufVxuXG4vLyBGb3JtYXQgYSBDZWxzaXVzIHNjYWxhciBpbiB0aGUgYWN0aXZlIGRpc3BsYXkgdW5pdCDigJQgcm91bmRlZCwgd2l0aCB0aGUgbWF0Y2hpbmdcbi8vIMKwQy/CsEYgc3VmZml4LiBDb252ZXJzaW9uIGlzIGRpc3BsYXktb25seTsgY2FsbGVycyBhbHdheXMgcGFzcyByYXcgQ2Vsc2l1cy5cbmZ1bmN0aW9uIGZvcm1hdFRlbXAoY2Vsc2l1cykge1xuICBjb25zdCB2YWx1ZSA9IGN1cnJlbnRVbml0ID09PSAnRicgPyBjZWxzaXVzICogOSAvIDUgKyAzMiA6IGNlbHNpdXM7XG4gIHJldHVybiBNYXRoLnJvdW5kKHZhbHVlKSArICfCsCcgKyBjdXJyZW50VW5pdDtcbn1cblxuLy8gUmUtcmVuZGVyIHRoZSB0d28gdGVtcGVyYXR1cmUgcmVhZG91dHMgZnJvbSB0aGUgY2FjaGVkIENlbHNpdXMgXCJub3dcIiBhbmQgc3luY1xuLy8gdGhlIGFjdGl2ZSBzdGF0ZSBvbiB0aGUgQy9GIGJ1dHRvbnMuIENhbGxlZCBvbiBldmVyeSBmZXRjaCBhbmQgZXZlcnkgdG9nZ2xlLlxuZnVuY3Rpb24gcmVuZGVyVGVtcHMoKSB7XG4gIGlmICh1bml0U3dpdGNoKSB7XG4gICAgY29uc3Qgb3B0cyA9IHVuaXRTd2l0Y2gucXVlcnlTZWxlY3RvckFsbCgnLnVuaXRPcHQnKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIG9wdHNbaV0uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJywgb3B0c1tpXS5kYXRhc2V0LnVuaXQgPT09IGN1cnJlbnRVbml0KTtcbiAgICB9XG4gIH1cbiAgaWYgKCFsYXN0Tm93KSB7IHJldHVybjsgfVxuICBjdXJyZW50VGVtcC50ZXh0Q29udGVudCA9IGZvcm1hdFRlbXAobGFzdE5vdy50ZW1wKTtcbiAgZmVlbHNWYWwudGV4dENvbnRlbnQgPSBmb3JtYXRUZW1wKGxhc3ROb3cuZmVlbHNMaWtlKTtcbn1cblxuLy8gU3dpdGNoIHRoZSBkaXNwbGF5IHVuaXQsIHBlcnNpc3QgaXQsIGFuZCByZS1yZW5kZXIg4oCUIG5vIHJlZmV0Y2gsIHRoZSBzdG9yZWRcbi8vIENlbHNpdXMgaXMgY29udmVydGVkIGluIHBsYWNlLlxuZnVuY3Rpb24gc2V0VW5pdCh1bml0KSB7XG4gIGN1cnJlbnRVbml0ID0gdW5pdCA9PT0gJ0YnID8gJ0YnIDogJ0MnO1xuICB0cnkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFVOSVRfS0VZLCBjdXJyZW50VW5pdCk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogc3RvcmFnZSB1bmF2YWlsYWJsZSDigJQgdGhlIGluLW1lbW9yeSB1bml0IHN0aWxsIGFwcGxpZXMgKi8gfVxuICByZW5kZXJUZW1wcygpO1xufVxuXG4vLyBSZWdpc3RlcnMgbGlzdGVuZXJzIEVYQUNUTFkgT05DRSBmb3IgdGhlIGxpZmUgb2YgdGhlIHBhZ2UuIGluZGV4LmpzIGNhbGxzIHRoaXNcbi8vIGF0IGJvb3RzdHJhcCwgYWZ0ZXIgdGhlIERPTSBpcyBhcHBlbmRlZCDigJQgbmV2ZXIgZnJvbSB0aGUgcmVuZGVyIHBhdGgg4oCUIHNvIGFcbi8vIHNlYXJjaCBmaXJlcyBleGFjdGx5IG9uZSBmZXRjaCBhbmQgZXZlcnkgZWxlbWVudCBjYXJyaWVzIGV4YWN0bHkgb25lIGxpc3RlbmVyLlxuZXhwb3J0IGZ1bmN0aW9uIHdpcmVFdmVudHMoKSB7XG4gIGlmIChldmVudHNXaXJlZCkgeyByZXR1cm47IH1cblxuICBjYWNoZURvbSgpO1xuICBldmVudHNXaXJlZCA9IHRydWU7XG5cbiAgLy8gVGhlIGJ1dHRvbiBpcyBhIHJlYWwgc3VibWl0IGJ1dHRvbiwgc28gdGhpcyBjYXRjaGVzIGJvdGggdGhlIGNsaWNrIGFuZCB0aGVcbiAgLy8gRW50ZXIga2V5IGFzIG9uZSBzdWJtaXQgZXZlbnQuIHByZXZlbnREZWZhdWx0IHN0b3BzIHRoZSBmb3JtIHJlbG9hZGluZyB0aGVcbiAgLy8gcGFnZTsgZnV0dXJlQVBJQ2FsbHMgZG9lcyB0aGUgc2luZ2xlIGZldGNoLiBUaGUgc2VhcmNoIGZvcm0gaXMgYWxzbyB0aGVcbiAgLy8gYWRkIHBhdGggZm9yIHNhdmVkIGxvY2F0aW9uczogb24gYSBzdWNjZXNzZnVsIGxvb2t1cCB0aGUgcXVlcnkgaXMgYXBwZW5kZWRcbiAgLy8gdG8gdGhlIHNhdmVkIGxpc3QgYW5kIGJlY29tZXMgY3VycmVudDsgYSBmYWlsZWQgbG9va3VwIHJlc29sdmVzIHRvIG51bGwgYW5kXG4gIC8vIGxlYXZlcyB0aGUgbGlzdCB1bnRvdWNoZWQgKGludmFsaWRJbnB1dCBoYXMgYWxyZWFkeSByZWRkZW5lZCB0aGUgaW5wdXQpLlxuICBzZWFyY2hGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNsb3NlU3VnZ2VzdGlvbnMoKTtcbiAgICBjb25zdCBxdWVyeSA9IHNlYXJjaElucHV0LnZhbHVlO1xuICAgIGZvcmVjYXN0TG9naWMuZnV0dXJlQVBJQ2FsbHMocXVlcnkpLnRoZW4oZnVuY3Rpb24gKGZvcmVjYXN0KSB7XG4gICAgICBpZiAoZm9yZWNhc3QpIHtcbiAgICAgICAgYWRkTG9jYXRpb24ocXVlcnkpO1xuICAgICAgICBzZWFyY2hJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICB3aXJlQXV0b2NvbXBsZXRlKCk7XG4gIHdpcmVVbml0VG9nZ2xlKCk7XG59XG5cbi8vIE9uZSBkZWxlZ2F0ZWQgY2xpY2sgbGlzdGVuZXIgb24gdGhlIHN3aXRjaCBkcml2ZXMgYm90aCBidXR0b25zLiBXaXJlZCBvbmNlIGZyb21cbi8vIHdpcmVFdmVudHMoKSwgc28g4oCUIGxpa2UgZXZlcnkgb3RoZXIgbGlzdGVuZXIg4oCUIG5vdGhpbmcgbXVsdGlwbGllcyBhY3Jvc3MgZmV0Y2hlcy5cbi8vIHJlbmRlclRlbXBzKCkgcnVucyBpbW1lZGlhdGVseSB0byByZWZsZWN0IHRoZSBwZXJzaXN0ZWQgdW5pdCBvbiB0aGUgYnV0dG9uc1xuLy8gYmVmb3JlIHRoZSBmaXJzdCBmZXRjaCByZXNvbHZlcy5cbmZ1bmN0aW9uIHdpcmVVbml0VG9nZ2xlKCkge1xuICBpZiAoIXVuaXRTd2l0Y2gpIHsgcmV0dXJuOyB9XG4gIHVuaXRTd2l0Y2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgIGNvbnN0IGJ0biA9IGUudGFyZ2V0ICYmIGUudGFyZ2V0LmNsb3Nlc3QgPyBlLnRhcmdldC5jbG9zZXN0KCcudW5pdE9wdCcpIDogbnVsbDtcbiAgICBpZiAoIWJ0biB8fCAhdW5pdFN3aXRjaC5jb250YWlucyhidG4pKSB7IHJldHVybjsgfVxuICAgIHNldFVuaXQoYnRuLmRhdGFzZXQudW5pdCk7XG4gIH0pO1xuICByZW5kZXJUZW1wcygpO1xufVxuXG4vLyBXaXJlcyB0aGUgZGVib3VuY2VkIGNpdHktc3VnZ2VzdGlvbiBkcm9wZG93bi4gQ2FsbGVkIG9uY2UgZnJvbSB3aXJlRXZlbnRzKCksXG4vLyBzbyDigJQgbGlrZSBldmVyeSBvdGhlciBsaXN0ZW5lciBpbiB0aGUgYXBwIOKAlCBub3RoaW5nIG11bHRpcGxpZXMgYWNyb3NzIGZldGNoZXMuXG5mdW5jdGlvbiB3aXJlQXV0b2NvbXBsZXRlKCkge1xuICAvLyBFYWNoIGtleXN0cm9rZSBzY2hlZHVsZXMgb25lIGRlYm91bmNlZCBsb29rdXA7IGFuIGVtcHR5IGJveCBjbG9zZXMgdGhlXG4gIC8vIGRyb3Bkb3duIG91dHJpZ2h0LiBTZXR0aW5nIHNlYXJjaElucHV0LnZhbHVlIHByb2dyYW1tYXRpY2FsbHkgKG9uIHNlbGVjdCBvclxuICAvLyBvbiBhIHN1Y2Nlc3NmdWwgc3VibWl0KSBkb2VzIG5vdCBmaXJlICdpbnB1dCcsIHNvIHRoZXJlIGlzIG5vIHJlZmV0Y2ggbG9vcC5cbiAgc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSBzZWFyY2hJbnB1dC52YWx1ZS50cmltKCk7XG4gICAgaWYgKHN1Z2dlc3REZWJvdW5jZSkgeyBjbGVhclRpbWVvdXQoc3VnZ2VzdERlYm91bmNlKTsgc3VnZ2VzdERlYm91bmNlID0gbnVsbDsgfVxuICAgIGlmICghdmFsdWUpIHsgY2xvc2VTdWdnZXN0aW9ucygpOyByZXR1cm47IH1cblxuICAgIHN1Z2dlc3REZWJvdW5jZSA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3Qgc2VxID0gKytyZXF1ZXN0U2VxO1xuICAgICAgZm9yZWNhc3RMb2dpYy5zZWFyY2hDaXRpZXModmFsdWUpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdHMpIHtcbiAgICAgICAgaWYgKHNlcSAhPT0gcmVxdWVzdFNlcSkgeyByZXR1cm47IH0gLy8gYSBuZXdlciBrZXlzdHJva2Ugc3VwZXJzZWRlZCB0aGlzXG4gICAgICAgIHJlbmRlclN1Z2dlc3Rpb25zKHJlc3VsdHMpO1xuICAgICAgfSk7XG4gICAgfSwgU1VHR0VTVF9ERUJPVU5DRV9NUyk7XG4gIH0pO1xuXG4gIC8vIEFycm93IGtleXMgbW92ZSB0aGUgaGlnaGxpZ2h0OyBFbnRlciBvbiBhIGhpZ2hsaWdodGVkIHJvdyBzZWxlY3RzIGl0IChhbmQgaXNcbiAgLy8gc3RvcHBlZCBmcm9tIGFsc28gc3VibWl0dGluZyB0aGUgcmF3IHRleHQpOyBFc2NhcGUgY2xvc2VzIHdpdGhvdXQgc3VibWl0dGluZy5cbiAgLy8gV2l0aCBubyBkcm9wZG93biBvcGVuLCBFbnRlciBzdWJtaXRzIHRoZSB0eXBlZCB0ZXh0IGV4YWN0bHkgYXMgYmVmb3JlLlxuICBzZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoc3VnZ2VzdGlvbnMuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSB8fCAhY3VycmVudFN1Z2dlc3Rpb25zLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZS5rZXkgPT09ICdBcnJvd0Rvd24nKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBtb3ZlU2VsZWN0aW9uKDEpO1xuICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICdBcnJvd1VwJykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbW92ZVNlbGVjdGlvbigtMSk7XG4gICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgaWYgKHNlbGVjdGVkSW5kZXggPj0gMCkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNob29zZVN1Z2dlc3Rpb24oc2VsZWN0ZWRJbmRleCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNsb3NlU3VnZ2VzdGlvbnMoKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIEEgY2xpY2sgYW55d2hlcmUgb3V0c2lkZSB0aGUgc2VhcmNoIGZvcm0gY2xvc2VzIHRoZSBkcm9wZG93bi4gQ2xpY2tzIGluc2lkZVxuICAvLyB0aGUgZm9ybSAodGhlIGlucHV0LCBhIHN1Z2dlc3Rpb24gcm93LCB0aGUgYnV0dG9uKSBhcmUgaGFuZGxlZCBieSB0aGVpciBvd25cbiAgLy8gbGlzdGVuZXJzIGFuZCBtdXN0IG5vdCBjbG9zZSBpdCBoZXJlIGZpcnN0LlxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGUudGFyZ2V0ICYmIGUudGFyZ2V0LmNsb3Nlc3QgJiYgZS50YXJnZXQuY2xvc2VzdCgnI3NlYXJjaEZvcm0nKSkgeyByZXR1cm47IH1cbiAgICBjbG9zZVN1Z2dlc3Rpb25zKCk7XG4gIH0pO1xufVxuXG4vLyBSZWJ1aWxkIHRoZSBkcm9wZG93biBmcm9tIGEgcmVzdWx0cyBhcnJheS4gRW1wdHkgcmVzdWx0cyBjbG9zZSBpdC4gRWFjaCByb3cgaXNcbi8vIHRoZSBjaXR5IG5hbWUgcGx1cyBhIG11dGVkIHJlZ2lvbi9jb3VudHJ5IGxpbmU7IGNsaWNraW5nIG9uZSBzZWxlY3RzIGl0LlxuZnVuY3Rpb24gcmVuZGVyU3VnZ2VzdGlvbnMocmVzdWx0cykge1xuICB3aGlsZSAoc3VnZ2VzdGlvbnMuZmlyc3RDaGlsZCkgeyBzdWdnZXN0aW9ucy5yZW1vdmVDaGlsZChzdWdnZXN0aW9ucy5maXJzdENoaWxkKTsgfVxuXG4gIGN1cnJlbnRTdWdnZXN0aW9ucyA9IHJlc3VsdHM7XG4gIHNlbGVjdGVkSW5kZXggPSAtMTtcblxuICBpZiAoIXJlc3VsdHMubGVuZ3RoKSB7IGNsb3NlU3VnZ2VzdGlvbnMoKTsgcmV0dXJuOyB9XG5cbiAgcmVzdWx0cy5mb3JFYWNoKGZ1bmN0aW9uIChyLCBpZHgpIHtcbiAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbS5jbGFzc05hbWUgPSAnc3VnZ2VzdGlvbi1pdGVtJztcbiAgICBpdGVtLnNldEF0dHJpYnV0ZSgncm9sZScsICdvcHRpb24nKTtcblxuICAgIGNvbnN0IGNpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY2l0eS5jbGFzc05hbWUgPSAnc3VnZ2VzdGlvbi1jaXR5JztcbiAgICBjaXR5LnRleHRDb250ZW50ID0gci5uYW1lO1xuXG4gICAgY29uc3QgcGxhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgcGxhY2UuY2xhc3NOYW1lID0gJ3N1Z2dlc3Rpb24tY291bnRyeSc7XG4gICAgcGxhY2UudGV4dENvbnRlbnQgPSBbci5yZWdpb24sIHIuY291bnRyeV0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJywgJyk7XG5cbiAgICBpdGVtLmFwcGVuZENoaWxkKGNpdHkpO1xuICAgIGl0ZW0uYXBwZW5kQ2hpbGQocGxhY2UpO1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7IGNob29zZVN1Z2dlc3Rpb24oaWR4KTsgfSk7XG5cbiAgICBzdWdnZXN0aW9ucy5hcHBlbmRDaGlsZChpdGVtKTtcbiAgfSk7XG5cbiAgb3BlblN1Z2dlc3Rpb25zKCk7XG59XG5cbi8vIE1vdmUgdGhlIGtleWJvYXJkIGhpZ2hsaWdodCwgd3JhcHBpbmcgYXQgYm90aCBlbmRzLCBhbmQgbWlycm9yIGl0IG9udG8gdGhlIERPTS5cbmZ1bmN0aW9uIG1vdmVTZWxlY3Rpb24oZGlyKSB7XG4gIGNvbnN0IG4gPSBjdXJyZW50U3VnZ2VzdGlvbnMubGVuZ3RoO1xuICBpZiAoIW4pIHsgcmV0dXJuOyB9XG4gIHNlbGVjdGVkSW5kZXggPSAoc2VsZWN0ZWRJbmRleCArIGRpciArIG4pICUgbjtcblxuICBjb25zdCBpdGVtcyA9IHN1Z2dlc3Rpb25zLmNoaWxkcmVuO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgaXRlbXNbaV0uY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0ZWQnLCBpID09PSBzZWxlY3RlZEluZGV4KTtcbiAgfVxufVxuXG4vLyBGaWxsIHRoZSBpbnB1dCB3aXRoIHRoZSBjaG9zZW4gY2l0eSBhbmQgc3VibWl0IHRoZSBmb3JtIHRoZSBzYW1lIHdheSBwcmVzc2luZ1xuLy8gRW50ZXIgb3IgY2xpY2tpbmcgU3VibWl0IGRvZXMsIHNvIHRoZSBmZXRjaCArIHNhdmUtbG9jYXRpb24gcGF0aCBpcyB1bmNoYW5nZWQuXG5mdW5jdGlvbiBjaG9vc2VTdWdnZXN0aW9uKGlkeCkge1xuICBjb25zdCByID0gY3VycmVudFN1Z2dlc3Rpb25zW2lkeF07XG4gIGlmICghcikgeyByZXR1cm47IH1cbiAgc2VhcmNoSW5wdXQudmFsdWUgPSByLm5hbWU7XG4gIGNsb3NlU3VnZ2VzdGlvbnMoKTtcbiAgaWYgKHNlYXJjaEZvcm0ucmVxdWVzdFN1Ym1pdCkge1xuICAgIHNlYXJjaEZvcm0ucmVxdWVzdFN1Ym1pdCgpO1xuICB9IGVsc2Uge1xuICAgIHNlYXJjaEZvcm0uZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ3N1Ym1pdCcsIHsgY2FuY2VsYWJsZTogdHJ1ZSwgYnViYmxlczogdHJ1ZSB9KSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gb3BlblN1Z2dlc3Rpb25zKCkge1xuICBzdWdnZXN0aW9ucy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgc2VhcmNoRm9ybS5jbGFzc0xpc3QuYWRkKCdzdWdnZXN0aW5nJyk7IC8vIGZsYXR0ZW5zIHRoZSBpbnB1dCdzIGJvdHRvbSBjb3JuZXJzXG59XG5cbi8vIENsb3NlIGFuZCByZXNldC4gQnVtcGluZyByZXF1ZXN0U2VxIGludmFsaWRhdGVzIGFueSBpbi1mbGlnaHQgbG9va3VwIHNvIGl0XG4vLyBjYW4ndCByZW9wZW4gdGhlIGRyb3Bkb3duIGFmdGVyIGEgc2VsZWN0aW9uIG9yIHN1Ym1pdC5cbmZ1bmN0aW9uIGNsb3NlU3VnZ2VzdGlvbnMoKSB7XG4gIGlmICghc3VnZ2VzdGlvbnMpIHsgcmV0dXJuOyB9XG4gIGlmIChzdWdnZXN0RGVib3VuY2UpIHsgY2xlYXJUaW1lb3V0KHN1Z2dlc3REZWJvdW5jZSk7IHN1Z2dlc3REZWJvdW5jZSA9IG51bGw7IH1cbiAgcmVxdWVzdFNlcSsrO1xuICBjdXJyZW50U3VnZ2VzdGlvbnMgPSBbXTtcbiAgc2VsZWN0ZWRJbmRleCA9IC0xO1xuICBzdWdnZXN0aW9ucy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgc2VhcmNoRm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdzdWdnZXN0aW5nJyk7XG59XG5cbi8vIEEgc3VjY2Vzc2Z1bCBsb29rdXAgY2xlYXJzIHRoZSBpbnZhbGlkIHN0YXRlOyBhIGZhaWxlZCBvbmUga2VlcHMgdGhlIGN1cnJlbnRcbi8vIHJpYmJvbiBhbmQgcmVkZGVucyB0aGUgaW5wdXQgYm9yZGVyICh2aWEgdGhlIC5pbnZhbGlkIGNsYXNzIGluIHN0eWxlLmNzcykuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRJbnB1dCgpIHtcbiAgY2FjaGVEb20oKTtcbiAgaWYgKHNlYXJjaEZvcm0pIHsgc2VhcmNoRm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdpbnZhbGlkJyk7IH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGludmFsaWRJbnB1dCgpIHtcbiAgY2FjaGVEb20oKTtcbiAgaWYgKHNlYXJjaEZvcm0pIHsgc2VhcmNoRm9ybS5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkJyk7IH1cbn1cbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgcmVuZGVyRm9yZWNhc3QsIHZhbGlkSW5wdXQsIGludmFsaWRJbnB1dCB9IGZyb20gJy4vaW5kZXhDaGFuZ2VzLmpzJztcblxuLy8gIDMgZGF5IGZvcmVjYXN0IC0gaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0zOWMyOGY4NWFiMDM0NTIxYjk5MjE3MDUyMzI3MTAmcT05ODA1MiZkYXlzPTMmYXFpPW5vJmFsZXJ0cz1ub1xuXG4vLyBUaGUgbGFzdCBmb3JlY2FzdCB3ZSBzdWNjZXNzZnVsbHkgcmVuZGVyZWQuIEEgZmFpbGVkIGxvb2t1cCBrZWVwcyBpdCBvbiBzY3JlZW5cbi8vIChzZWUgZnVsZmlsbFByb21pc2UpOiB0aGUgc2VhcmNoIGp1c3QgcmVkZGVucyB0aGUgaW5wdXQgcmF0aGVyIHRoYW4gYmxhbmtpbmdcbi8vIHRoZSByaWJib24uXG5sZXQgbGFzdEZvcmVjYXN0ID0gbnVsbDtcblxuZXhwb3J0IGNvbnN0IGZvcmVjYXN0TG9naWMgPSAoZnVuY3Rpb24gKCkge1xuXG4gIC8vIE5vIGZldGNoIGZpcmVzIGF0IG1vZHVsZS1ldmFsIHRpbWUuIFRoZSBzaW5nbGUgaW5pdGlhbCBmZXRjaCAoZGVmYXVsdFxuICAvLyBsb2NhdGlvbiwgb3IgdGhlIGZpcnN0IHNhdmVkIGxvY2F0aW9uKSBpcyBkcml2ZW4gZnJvbSB0aGUgYm9vdHN0cmFwIGluXG4gIC8vIGluZGV4LmpzIHZpYSBpbml0RmF2b3VyaXRlcygpIC0+IGZ1dHVyZUFQSUNhbGxzLCBzbyBpdCBoYXBwZW5zIGV4YWN0bHkgb25jZVxuICAvLyBpbiB0aGUgaW5kZXggYnVuZGxlIHJhdGhlciB0aGFuIG9uY2UgcGVyIGJ1bmRsZSB0aGF0IGltcG9ydHMgdGhpcyBtb2R1bGUuXG5cbiAgLy8gRmlyZXMgb25lIGZldGNoIGZvciBhIGxvY2F0aW9uIGFuZCByZW5kZXJzIG9uIHN1Y2Nlc3MuIFJldHVybnMgYSBwcm9taXNlXG4gIC8vIHJlc29sdmluZyB0byB0aGUgYnVpbHQgZm9yZWNhc3Qgb24gc3VjY2Vzcywgb3IgbnVsbCBvbiBhIGZhaWxlZCBsb29rdXAsIHNvXG4gIC8vIHRoZSBzZWFyY2ggc3VibWl0IGhhbmRsZXIgY2FuIGFwcGVuZCB0aGUgbG9jYXRpb24gdG8gdGhlIHNhdmVkIGxpc3Qgb25seVxuICAvLyB3aGVuIHRoZSBsb29rdXAgYWN0dWFsbHkgc3VjY2VlZGVkLlxuICBmdW5jdGlvbiBmdXR1cmVBUElDYWxscyh2YWx1ZSkge1xuICAgIHJldHVybiBmdWxmaWxsUHJvbWlzZShwdWxsRm9yZWNhc3QodmFsdWUpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZ1bGZpbGxQcm9taXNlKGZvcmVjYXN0SlNPTikge1xuICAgIHJldHVybiBmb3JlY2FzdEpTT04udGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAvLyBwdWxsRm9yZWNhc3QgcmVzb2x2ZXMgdG8gbnVsbCBvbiBhIGZhaWxlZCBsb29rdXAg4oCUIGxlYXZlIHRoZSBjdXJyZW50XG4gICAgICAvLyByaWJib24gdW50b3VjaGVkIChpbnZhbGlkSW5wdXQoKSBoYXMgYWxyZWFkeSByZWRkZW5lZCB0aGUgaW5wdXQpLlxuICAgICAgaWYgKCFyZXN1bHQpIHsgcmV0dXJuIG51bGw7IH1cblxuICAgICAgY29uc3QgZm9yZWNhc3QgPSBidWlsZEZvcmVjYXN0KHJlc3VsdCk7XG4gICAgICBsYXN0Rm9yZWNhc3QgPSBmb3JlY2FzdDtcbiAgICAgIHJlbmRlckZvcmVjYXN0KGZvcmVjYXN0KTtcbiAgICAgIHJldHVybiBmb3JlY2FzdDtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIEZsYXR0ZW4gdGhlIHRocmVlLWRheSByZXNwb25zZSBpbnRvIGEgc2luZ2xlIDcyLWhvdXIgc2VyaWVzIHBsdXMgYSBsb2NhdGlvblxuICAvLyBvYmplY3QuIEV2ZXJ5IGhvdXIga2VlcHMgaXRzIG93biBlcG9jaCwgdGVtcGVyYXR1cmUsIGNvbmRpdGlvbiB0ZXh0IGFuZCB0aGVcbiAgLy8gc3RhdCBmaWVsZHMgdGhlIHJlYWRvdXQgc2hvd3Mg4oCUIG5vdGhpbmcgaXMgY29sbGFwc2VkIHRvIHBlci1kYXkgc2NhbGFycywgYW5kXG4gIC8vIHRoZSBmdWxsIGZvcmVjYXN0ZGF5W10uaG91cltdIGFycmF5cyAoYWxyZWFkeSBpbiBldmVyeSByZXNwb25zZSwgcHJldmlvdXNseVxuICAvLyBkaXNjYXJkZWQpIGFyZSB3aGF0IHRoZSBjdXJ2ZSBpcyBkcmF3biBmcm9tLlxuICBmdW5jdGlvbiBidWlsZEZvcmVjYXN0KHJlc3VsdCkge1xuICAgIGNvbnN0IGZvcmVjYXN0RGF5cyA9IHJlc3VsdC5mb3JlY2FzdC5mb3JlY2FzdGRheTtcbiAgICBjb25zdCBob3VycyA9IFtdO1xuXG4gICAgZm9yZWNhc3REYXlzLmZvckVhY2goKGRheSkgPT4ge1xuICAgICAgZGF5LmhvdXIuZm9yRWFjaCgoaCkgPT4ge1xuICAgICAgICBob3Vycy5wdXNoKHtcbiAgICAgICAgICBlcG9jaDogaC50aW1lX2Vwb2NoLFxuICAgICAgICAgIHRlbXA6IGgudGVtcF9jLFxuICAgICAgICAgIGZlZWxzTGlrZTogaC5mZWVsc2xpa2VfYyxcbiAgICAgICAgICBodW1pZGl0eTogaC5odW1pZGl0eSxcbiAgICAgICAgICByYWluOiBoLmNoYW5jZV9vZl9yYWluLFxuICAgICAgICAgIHdpbmQ6IGgud2luZF9rcGgsXG4gICAgICAgICAgY29uZGl0aW9uOiBoLmNvbmRpdGlvbi50ZXh0LFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGxvY2F0aW9uOiB7XG4gICAgICAgIG5hbWU6IHJlc3VsdC5sb2NhdGlvbi5uYW1lLFxuICAgICAgICAvLyBcIm5vd1wiIGlzIGluZGV4ZWQgb2ZmIHRoZSBsb2NhdGlvbidzIHJlYWwgY3VycmVudCB0aW1lLCBub3QgYSBwYXJzZWRcbiAgICAgICAgLy8gZGF0ZSBzdHJpbmcuIFNlZSBjdXJyZW50SG91ckluZGV4KCkgaW4gcmliYm9uLmpzLlxuICAgICAgICBsb2NhbHRpbWVfZXBvY2g6IHJlc3VsdC5sb2NhdGlvbi5sb2NhbHRpbWVfZXBvY2gsXG4gICAgICB9LFxuICAgICAgaG91cnM6IGhvdXJzLFxuICAgICAgLy8gUGVyLWRheSBkYXRlICsgaG91ciBjb3VudCBkcml2ZSB0aGUgV0VEL1RIVS9GUkkgdGlja3MgYW5kIHRoZSBkYXlcbiAgICAgIC8vIGhhaXJsaW5lcyBhdCBob3VycyAyNCBhbmQgNDguXG4gICAgICBkYXlzOiBmb3JlY2FzdERheXMubWFwKChkYXkpID0+ICh7IGRhdGU6IGRheS5kYXRlLCBjb3VudDogZGF5LmhvdXIubGVuZ3RoIH0pKSxcbiAgICB9O1xuICB9XG5cbiAgLy8gVGFrZXMgYSBsb2NhdGlvbiB2YWx1ZSBhcHBlbmRlZCB0byB0aGUgQVBJIGNhbGwuIFJlc29sdmVzIHRvIHRoZSByYXcgSlNPTiBvblxuICAvLyBzdWNjZXNzLCBvciBudWxsIG9uIGZhaWx1cmUgKHNvIGZ1bGZpbGxQcm9taXNlIGtlZXBzIHRoZSBjdXJyZW50IHJpYmJvbikuXG4gIGFzeW5jIGZ1bmN0aW9uIHB1bGxGb3JlY2FzdCh2YWx1ZSkge1xuICAgIGNvbnN0IHVybCA9ICdodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0zOWMyOGY4NWFiMDM0NTIxYjk5MjE3MDUyMzI3MTAmcT0nICsgdmFsdWUgKyAnJmRheXM9MyZhcWk9bm8mYWxlcnRzPW5vJztcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgeyBtb2RlOiAnY29ycycgfSk7XG5cbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBTdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBmb3JlY2FzdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgdmFsaWRJbnB1dCgpO1xuXG4gICAgICByZXR1cm4gZm9yZWNhc3Q7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBjYXRjaGVzIGVycm9ycyBib3RoIGluIGZldGNoIGFuZCByZXNwb25zZS5qc29uXG4gICAgICBpbnZhbGlkSW5wdXQoKTtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8vIFR5cGVhaGVhZCBsb29rdXAgZm9yIHRoZSBzZWFyY2ggYm94LiBIaXRzIFdlYXRoZXJBUEkncyBzZWFyY2gvYXV0b2NvbXBsZXRlXG4gIC8vIGVuZHBvaW50IChyZXVzaW5nIHRoZSBzYW1lIGtleSBhcyBwdWxsRm9yZWNhc3QpIGFuZCByZXNvbHZlcyB0byB0aGUgcmF3XG4gIC8vIHJlc3VsdHMgYXJyYXkg4oCUIFt7IG5hbWUsIHJlZ2lvbiwgY291bnRyeSwgLi4uIH0sIC4uLl0g4oCUIG9yIFtdIG9uIGFuIGVtcHR5XG4gIC8vIHF1ZXJ5LCBubyBtYXRjaGVzLCBvciBhbnkgbmV0d29yay9wYXJzZSBlcnJvci4gTmV2ZXIgdGhyb3dzOiB0aGUgZHJvcGRvd25cbiAgLy8ganVzdCBzaG93cyBub3RoaW5nIG9uIGZhaWx1cmUuXG4gIGFzeW5jIGZ1bmN0aW9uIHNlYXJjaENpdGllcyh2YWx1ZSkge1xuICAgIGNvbnN0IHEgPSBTdHJpbmcodmFsdWUpLnRyaW0oKTtcbiAgICBpZiAoIXEpIHsgcmV0dXJuIFtdOyB9XG5cbiAgICBjb25zdCB1cmwgPSAnaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvc2VhcmNoLmpzb24/a2V5PTM5YzI4Zjg1YWIwMzQ1MjFiOTkyMTcwNTIzMjcxMCZxPScgKyBlbmNvZGVVUklDb21wb25lbnQocSk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHsgbW9kZTogJ2NvcnMnIH0pO1xuXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgU3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkocmVzdWx0cykgPyByZXN1bHRzIDogW107XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuXG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwdWxsRm9yZWNhc3QsXG4gICAgZnV0dXJlQVBJQ2FsbHMsXG4gICAgc2VhcmNoQ2l0aWVzLFxuICB9O1xuXG59KSgpOyAvLyBlbmRzIGZvcmVjYXN0TG9naWMgZnVuY3Rpb25cbiIsIi8vIHJpYmJvbi5qcyDigJQgdGhlIDcyLWhvdXIgdGVtcGVyYXR1cmUgcmliYm9uLlxuLy9cbi8vIFRoZSBmb3JlY2FzdCBpcyBvbmUgY29udGludW91cyB0ZW1wZXJhdHVyZSBjdXJ2ZSBhY3Jvc3MgYWxsIHRocmVlIGRheXMgcmF0aGVyXG4vLyB0aGFuIHRocmVlIGNhcmQgc3RhdGVzIHlvdSBwYWdlIGJldHdlZW4sIHNvIG5hdmlnYXRpb24gc3RvcHMgYmVpbmcgYSBjb25jZXB0OlxuLy8gZXZlcnkgaG91ciBpcyBvbiBzY3JlZW4gYXQgb25jZS4gQ29sb3VyIGlzIGEgZnVuY3Rpb24gb2YgdGhlIHRlbXBlcmF0dXJlXG4vLyBzY2FsYXIgKGNvbGQgLT4gbWlsZCAtPiB3YXJtIC0+IGhvdCksIE5PVCB0aGUgY29uZGl0aW9uIGNhdGVnb3J5LCBzbyB0aGVyZSBpc1xuLy8gbm8gcGVyLWNvbmRpdGlvbiBicmFuY2ggdG8gd3JpdGUgYW5kIG5vIGVpZ2h0aCBjYXNlIHRvIGZvcmdldC5cbi8vXG4vLyBidWlsZFJpYmJvbihtb3VudCkgY3JlYXRlcyB0aGUgU1ZHIHNjYWZmb2xkIG9uY2UgYXQgYm9vdHN0cmFwIChkZWZzLCBncmFkaWVudHMsXG4vLyBlbXB0eSBncm91cHMpIGFuZCBjYWNoZXMgZWxlbWVudCByZWZzLiByZW5kZXJGb3JlY2FzdCgpIGluIGluZGV4Q2hhbmdlcy5qc1xuLy8gY2FsbHMgcmVuZGVyUmliYm9uKGZvcmVjYXN0KSBvbiBldmVyeSByZXNvbHZlZCByZXNwb25zZSB0byByZWRyYXcgdGhlIGN1cnZlLFxuLy8gdGhlIGRheSBoYWlybGluZXMvdGlja3MgYW5kIHRoZSBjdXJyZW50LWhvdXIgbWFya2VyIGZyb20gZGF0YS4gY3VycmVudEhvdXJJbmRleFxuLy8gaXMgdGhlIHNpbmdsZSBzb3VyY2Ugb2YgdHJ1dGggZm9yIFwibm93XCIsIHNoYXJlZCB3aXRoIHRoZSByZWFkb3V0IHNvIHRoZSBtYXJrZXJcbi8vIGFuZCB0aGUgc3RhdCByb3cgbmV2ZXIgZGlzYWdyZWUuXG4vL1xuLy8gSGFuZC1hdXRob3JlZCBTVkcsIHZhbmlsbGEgb25seSDigJQgbm8gY2hhcnRpbmcgbGlicmFyeSwgbm8gZGVwZW5kZW5jaWVzLlxuXG5jb25zdCBOUyA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc7XG5cbi8vIHZpZXdCb3ggZ2VvbWV0cnksIGluIHVzZXIgdW5pdHMuIFRoZSBjdXJ2ZSBiYW5kIHNpdHMgYmV0d2VlbiBDSEFSVF9UT1AgYW5kXG4vLyBDSEFSVF9UT1ArQ0hBUlRfSDsgVElDS19IIGJlbmVhdGggaXQgY2FycmllcyB0aGUgV0VEL1RIVS9GUkkgZGF5IGxhYmVscy4gQVxuLy8gc2Vjb25kIGxhbmUgKHRpZGVzLCBvdXQgb2Ygc2NvcGUgdG9kYXkpIHdvdWxkIGFkZCBMQU5FX0ggYmVsb3cgdGhhdCDigJQgdGhlXG4vLyB2aWV3Qm94IGhlaWdodCBzd2l0Y2hlcyBiZXR3ZWVuIHR3byB2YWx1ZXMgZGVwZW5kaW5nIG9uIHdoZXRoZXIgdGhlIGxhbmVcbi8vIGV4aXN0cywgc28gdGhlIGxheW91dCBpcyBidWlsdCBsYW5lLW9wdGlvbmFsIGV2ZW4gdGhvdWdoIHRoZSBsYW5lIG5ldmVyXG4vLyByZW5kZXJzIGZvciBub3cuXG5jb25zdCBWSUVXX1cgPSA3MjA7XG5jb25zdCBQQURfTCA9IDEwO1xuY29uc3QgUEFEX1IgPSAxMDtcbmNvbnN0IENIQVJUX1RPUCA9IDE4O1xuY29uc3QgQ0hBUlRfSCA9IDE1MDtcbmNvbnN0IFRJQ0tfSCA9IDI2O1xuY29uc3QgTEFORV9IID0gOTA7XG5cbi8vIFRlbXBlcmF0dXJlIC0+IGNvbG91ciByYW1wLiBGb3VyIGFuY2hvcnMgc3Bhbm5pbmcgYSBmaXhlZCDCsEMgZG9tYWluIHNvIHRoZVxuLy8gc2FtZSB0ZW1wZXJhdHVyZSBhbHdheXMgcmVhZHMgdGhlIHNhbWUgY29sb3VyIHJlZ2FyZGxlc3Mgb2YgdGhlIGRheSdzIHJhbmdlLlxuY29uc3QgUkFNUCA9IFtcbiAgeyB0OiAtNSwgYzogWzB4M2QsIDB4NmYsIDB4YThdIH0sIC8vIGNvbGRcbiAgeyB0OiAxMCwgYzogWzB4NmYsIDB4YTgsIDB4YTBdIH0sIC8vIG1pbGRcbiAgeyB0OiAyNSwgYzogWzB4ZDksIDB4YTQsIDB4NDFdIH0sIC8vIHdhcm1cbiAgeyB0OiA0MCwgYzogWzB4YzIsIDB4NDUsIDB4MmRdIH0sIC8vIGhvdFxuXTtcblxuY29uc3QgV0VFS0RBWSA9IFsnU1VOJywgJ01PTicsICdUVUUnLCAnV0VEJywgJ1RIVScsICdGUkknLCAnU0FUJ107XG5cbi8vIENhY2hlZCBzY2FmZm9sZCByZWZzLCBwb3B1bGF0ZWQgb25jZSBieSBidWlsZFJpYmJvbigpLlxubGV0IHN2ZywgdGVtcEdyYWQsIGZpbGxQYXRoLCBjdXJ2ZVBhdGgsIGJvdW5kYXJ5R3JvdXAsIHRpY2tHcm91cCwgbWFya2VyR3JvdXAsXG4gIGxhbmVHcm91cDtcblxuZnVuY3Rpb24gZWwobmFtZSwgYXR0cnMpIHtcbiAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhOUywgbmFtZSk7XG4gIGlmIChhdHRycykge1xuICAgIGZvciAoY29uc3QgayBpbiBhdHRycykgeyBub2RlLnNldEF0dHJpYnV0ZShrLCBhdHRyc1trXSk7IH1cbiAgfVxuICByZXR1cm4gbm9kZTtcbn1cblxuZnVuY3Rpb24gbGVycChhLCBiLCBmKSB7IHJldHVybiBhICsgKGIgLSBhKSAqIGY7IH1cblxuLy8gQ29sb3VyIGZvciBhIHRlbXBlcmF0dXJlLCBpbnRlcnBvbGF0ZWQgYWNyb3NzIHRoZSByYW1wIGFuY2hvcnMgYW5kIGNsYW1wZWQgdG9cbi8vIHRoZSBkb21haW4gZW5kcy5cbmZ1bmN0aW9uIHRlbXBDb2xvdXIodGVtcCkge1xuICBpZiAodGVtcCA8PSBSQU1QWzBdLnQpIHsgcmV0dXJuIHJnYihSQU1QWzBdLmMpOyB9XG4gIGlmICh0ZW1wID49IFJBTVBbUkFNUC5sZW5ndGggLSAxXS50KSB7IHJldHVybiByZ2IoUkFNUFtSQU1QLmxlbmd0aCAtIDFdLmMpOyB9XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgUkFNUC5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0ZW1wIDw9IFJBTVBbaV0udCkge1xuICAgICAgY29uc3QgbG8gPSBSQU1QW2kgLSAxXTtcbiAgICAgIGNvbnN0IGhpID0gUkFNUFtpXTtcbiAgICAgIGNvbnN0IGYgPSAodGVtcCAtIGxvLnQpIC8gKGhpLnQgLSBsby50KTtcbiAgICAgIHJldHVybiByZ2IoW1xuICAgICAgICBNYXRoLnJvdW5kKGxlcnAobG8uY1swXSwgaGkuY1swXSwgZikpLFxuICAgICAgICBNYXRoLnJvdW5kKGxlcnAobG8uY1sxXSwgaGkuY1sxXSwgZikpLFxuICAgICAgICBNYXRoLnJvdW5kKGxlcnAobG8uY1syXSwgaGkuY1syXSwgZikpLFxuICAgICAgXSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZ2IoUkFNUFtSQU1QLmxlbmd0aCAtIDFdLmMpO1xufVxuXG5mdW5jdGlvbiByZ2IoYykgeyByZXR1cm4gJ3JnYignICsgY1swXSArICcsJyArIGNbMV0gKyAnLCcgKyBjWzJdICsgJyknOyB9XG5cbmZ1bmN0aW9uIHdlZWtkYXlBYmJyKGRhdGVTdHIpIHtcbiAgLy8gZGF0ZVN0ciBpcyAnWVlZWS1NTS1ERCcuIEJ1aWxkIHRoZSBkYXRlIGF0IFVUQyBtaWRuaWdodCBzbyB0aGUgd2Vla2RheSBuZXZlclxuICAvLyBzaGlmdHMgYWNyb3NzIGEgdGltZXpvbmUgYm91bmRhcnkuXG4gIGNvbnN0IHAgPSBTdHJpbmcoZGF0ZVN0cikuc3BsaXQoJy0nKTtcbiAgY29uc3QgZCA9IG5ldyBEYXRlKERhdGUuVVRDKCtwWzBdLCAoK3BbMV0pIC0gMSwgK3BbMl0pKTtcbiAgcmV0dXJuIFdFRUtEQVlbZC5nZXRVVENEYXkoKV0gfHwgJyc7XG59XG5cbi8vIEluZGV4IG9mIHRoZSBob3VyIGJ1Y2tldCBuZWFyZXN0IFwibm93XCIuIERyaXZlbiBvZmYgbG9jYXRpb24ubG9jYWx0aW1lX2Vwb2NoLFxuLy8gTk9UIGEgcGFyc2VkIGRhdGUtc3RyaW5nIGhvdXIg4oCUIHRoZSBvbGQgZ2V0Q3VycmVudFRpbWUoKSByZWFkIHRoZSBob3VyIG91dCBvZlxuLy8gZGF0ZV9lcG9jaCAobG9jYWwgbWlkbmlnaHQpIGFuZCByZXR1cm5lZCB0aGUgVVRDIG9mZnNldCwgc28gXCJmZWVscyBsaWtlXCIgd2FzIGFcbi8vIGZpeGVkIGFyYml0cmFyeSBob3VyLiBsb2NhbHRpbWVfZXBvY2ggaXMgdGhlIGxvY2F0aW9uJ3MgcmVhbCBjdXJyZW50IHRpbWUuXG5leHBvcnQgZnVuY3Rpb24gY3VycmVudEhvdXJJbmRleChmb3JlY2FzdCkge1xuICBjb25zdCBob3VycyA9IGZvcmVjYXN0LmhvdXJzO1xuICBpZiAoIWhvdXJzIHx8ICFob3Vycy5sZW5ndGgpIHsgcmV0dXJuIDA7IH1cbiAgY29uc3Qgbm93ID0gZm9yZWNhc3QubG9jYXRpb24ubG9jYWx0aW1lX2Vwb2NoO1xuICBsZXQgYmVzdCA9IDA7XG4gIGxldCBiZXN0RGlmZiA9IEluZmluaXR5O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGhvdXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgZGlmZiA9IE1hdGguYWJzKGhvdXJzW2ldLmVwb2NoIC0gbm93KTtcbiAgICBpZiAoZGlmZiA8IGJlc3REaWZmKSB7IGJlc3REaWZmID0gZGlmZjsgYmVzdCA9IGk7IH1cbiAgfVxuICByZXR1cm4gYmVzdDtcbn1cblxuLy8gQ3JlYXRlIHRoZSBTVkcgc2NhZmZvbGQgb25jZS4gQ2FsbGVkIGZyb20gaW5kZXguanMgYXQgYm9vdHN0cmFwLCBhZnRlciB0aGVcbi8vIG1vdW50IGVsZW1lbnQgaXMgaW4gdGhlIERPTS5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFJpYmJvbihtb3VudCkge1xuICBpZiAoc3ZnKSB7IHJldHVybjsgfSAvLyBidWlsZCBvbmNlXG5cbiAgc3ZnID0gZWwoJ3N2ZycsIHtcbiAgICBpZDogJ3JpYmJvblN2ZycsXG4gICAgdmlld0JveDogJzAgMCAnICsgVklFV19XICsgJyAnICsgKENIQVJUX1RPUCArIENIQVJUX0ggKyBUSUNLX0gpLFxuICAgIHByZXNlcnZlQXNwZWN0UmF0aW86ICd4TWlkWU1pZCBtZWV0JyxcbiAgfSk7XG5cbiAgY29uc3QgZGVmcyA9IGVsKCdkZWZzJyk7XG5cbiAgLy8gSG9yaXpvbnRhbCBzdHJva2UgZ3JhZGllbnQ6IGNvbG91cmVkIGJ5IHRlbXBlcmF0dXJlIGFjcm9zcyB0aGUgNzIgaG91cnMuXG4gIC8vIFN0b3BzIGFyZSByZWJ1aWx0IGVhY2ggcmVuZGVyIGZyb20gdGhlIGFjdHVhbCBzZXJpZXMuXG4gIHRlbXBHcmFkID0gZWwoJ2xpbmVhckdyYWRpZW50Jywge1xuICAgIGlkOiAndGVtcEdyYWQnLCB4MTogJzAnLCB5MTogJzAnLCB4MjogJzEnLCB5MjogJzAnLFxuICB9KTtcblxuICAvLyBWZXJ0aWNhbCBmYWRlIGZpbGwgdW5kZXIgdGhlIGN1cnZlLlxuICBjb25zdCBmaWxsR3JhZCA9IGVsKCdsaW5lYXJHcmFkaWVudCcsIHtcbiAgICBpZDogJ2ZpbGxHcmFkJywgeDE6ICcwJywgeTE6ICcwJywgeDI6ICcwJywgeTI6ICcxJyxcbiAgfSk7XG4gIGZpbGxHcmFkLmFwcGVuZENoaWxkKGVsKCdzdG9wJywgeyBvZmZzZXQ6ICcwJywgJ3N0b3AtY29sb3InOiAnIzhDQTBBRScsICdzdG9wLW9wYWNpdHknOiAnMC4yOCcgfSkpO1xuICBmaWxsR3JhZC5hcHBlbmRDaGlsZChlbCgnc3RvcCcsIHsgb2Zmc2V0OiAnMScsICdzdG9wLWNvbG9yJzogJyM4Q0EwQUUnLCAnc3RvcC1vcGFjaXR5JzogJzAnIH0pKTtcblxuICBkZWZzLmFwcGVuZENoaWxkKHRlbXBHcmFkKTtcbiAgZGVmcy5hcHBlbmRDaGlsZChmaWxsR3JhZCk7XG4gIHN2Zy5hcHBlbmRDaGlsZChkZWZzKTtcblxuICBmaWxsUGF0aCA9IGVsKCdwYXRoJywgeyBjbGFzczogJ3JpYmJvbi1maWxsJywgZmlsbDogJ3VybCgjZmlsbEdyYWQpJywgc3Ryb2tlOiAnbm9uZScgfSk7XG4gIGN1cnZlUGF0aCA9IGVsKCdwYXRoJywgeyBjbGFzczogJ3JpYmJvbi1jdXJ2ZScsIGZpbGw6ICdub25lJywgc3Ryb2tlOiAndXJsKCN0ZW1wR3JhZCknIH0pO1xuICBib3VuZGFyeUdyb3VwID0gZWwoJ2cnLCB7IGNsYXNzOiAncmliYm9uLWJvdW5kYXJpZXMnIH0pO1xuICB0aWNrR3JvdXAgPSBlbCgnZycsIHsgY2xhc3M6ICdyaWJib24tdGlja3MnIH0pO1xuICBtYXJrZXJHcm91cCA9IGVsKCdnJywgeyBjbGFzczogJ3JpYmJvbi1tYXJrZXInIH0pO1xuICBsYW5lR3JvdXAgPSBlbCgnZycsIHsgY2xhc3M6ICdyaWJib24tbGFuZScgfSk7XG5cbiAgc3ZnLmFwcGVuZENoaWxkKGZpbGxQYXRoKTtcbiAgc3ZnLmFwcGVuZENoaWxkKGN1cnZlUGF0aCk7XG4gIHN2Zy5hcHBlbmRDaGlsZChib3VuZGFyeUdyb3VwKTtcbiAgc3ZnLmFwcGVuZENoaWxkKHRpY2tHcm91cCk7XG4gIHN2Zy5hcHBlbmRDaGlsZChsYW5lR3JvdXApO1xuICBzdmcuYXBwZW5kQ2hpbGQobWFya2VyR3JvdXApO1xuXG4gIG1vdW50LmFwcGVuZENoaWxkKHN2Zyk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyKG5vZGUpIHtcbiAgd2hpbGUgKG5vZGUuZmlyc3RDaGlsZCkgeyBub2RlLnJlbW92ZUNoaWxkKG5vZGUuZmlyc3RDaGlsZCk7IH1cbn1cblxuLy8gUmVkcmF3IHRoZSB3aG9sZSByaWJib24gZnJvbSBhIGZvcmVjYXN0OiB7IGxvY2F0aW9uLCBob3Vyc1tdLCBkYXlzW10sIGxhbmU/IH0uXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyUmliYm9uKGZvcmVjYXN0KSB7XG4gIGlmICghc3ZnKSB7IHJldHVybjsgfVxuXG4gIGNvbnN0IGhvdXJzID0gZm9yZWNhc3QuaG91cnMgfHwgW107XG4gIGNvbnN0IG4gPSBob3Vycy5sZW5ndGg7XG4gIGlmICghbikgeyByZXR1cm47IH1cblxuICBjb25zdCBsYW5lT24gPSAhIWZvcmVjYXN0LmxhbmU7XG4gIGNvbnN0IHRvdGFsSCA9IENIQVJUX1RPUCArIENIQVJUX0ggKyBUSUNLX0ggKyAobGFuZU9uID8gTEFORV9IIDogMCk7XG4gIHN2Zy5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCAnMCAwICcgKyBWSUVXX1cgKyAnICcgKyB0b3RhbEgpO1xuXG4gIGNvbnN0IGlubmVyVyA9IFZJRVdfVyAtIFBBRF9MIC0gUEFEX1I7XG4gIGNvbnN0IGJhc2VsaW5lID0gQ0hBUlRfVE9QICsgQ0hBUlRfSDtcblxuICAvLyB0ZW1wZXJhdHVyZSBkb21haW4gZm9yIHRoZSB5LXNjYWxlLCBwYWRkZWQgc28gdGhlIGN1cnZlIG5ldmVyIGh1Z3MgYW4gZWRnZS5cbiAgbGV0IG1pbiA9IEluZmluaXR5O1xuICBsZXQgbWF4ID0gLUluZmluaXR5O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgIGlmIChob3Vyc1tpXS50ZW1wIDwgbWluKSB7IG1pbiA9IGhvdXJzW2ldLnRlbXA7IH1cbiAgICBpZiAoaG91cnNbaV0udGVtcCA+IG1heCkgeyBtYXggPSBob3Vyc1tpXS50ZW1wOyB9XG4gIH1cbiAgaWYgKG1pbiA9PT0gbWF4KSB7IG1pbiAtPSAxOyBtYXggKz0gMTsgfVxuICBjb25zdCBzcGFuID0gbWF4IC0gbWluO1xuXG4gIGNvbnN0IHggPSAoaSkgPT4gUEFEX0wgKyAobiA8PSAxID8gMCA6IChpIC8gKG4gLSAxKSkgKiBpbm5lclcpO1xuICBjb25zdCB5ID0gKHQpID0+IENIQVJUX1RPUCArICgxIC0gKHQgLSBtaW4pIC8gc3BhbikgKiBDSEFSVF9IO1xuXG4gIC8vIEJ1aWxkIHRoZSBwb2ludHMsIHRoZW4gYSBzbW9vdGggcGF0aCB2aWEgcXVhZHJhdGljIG1pZHBvaW50cyAobm8gb3ZlcnNob290KS5cbiAgY29uc3QgcHRzID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7IHB0cy5wdXNoKHsgeDogeChpKSwgeTogeShob3Vyc1tpXS50ZW1wKSB9KTsgfVxuXG4gIGxldCBkID0gJ00gJyArIHB0c1swXS54LnRvRml4ZWQoMikgKyAnICcgKyBwdHNbMF0ueS50b0ZpeGVkKDIpO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IHB0cy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHhjID0gKHB0c1tpIC0gMV0ueCArIHB0c1tpXS54KSAvIDI7XG4gICAgY29uc3QgeWMgPSAocHRzW2kgLSAxXS55ICsgcHRzW2ldLnkpIC8gMjtcbiAgICBkICs9ICcgUSAnICsgcHRzW2kgLSAxXS54LnRvRml4ZWQoMikgKyAnICcgKyBwdHNbaSAtIDFdLnkudG9GaXhlZCgyKSArXG4gICAgICAnICcgKyB4Yy50b0ZpeGVkKDIpICsgJyAnICsgeWMudG9GaXhlZCgyKTtcbiAgfVxuICBkICs9ICcgTCAnICsgcHRzW24gLSAxXS54LnRvRml4ZWQoMikgKyAnICcgKyBwdHNbbiAtIDFdLnkudG9GaXhlZCgyKTtcblxuICBjdXJ2ZVBhdGguc2V0QXR0cmlidXRlKCdkJywgZCk7XG4gIGZpbGxQYXRoLnNldEF0dHJpYnV0ZSgnZCcsIGQgK1xuICAgICcgTCAnICsgcHRzW24gLSAxXS54LnRvRml4ZWQoMikgKyAnICcgKyBiYXNlbGluZSArXG4gICAgJyBMICcgKyBwdHNbMF0ueC50b0ZpeGVkKDIpICsgJyAnICsgYmFzZWxpbmUgKyAnIFonKTtcblxuICAvLyBIb3Jpem9udGFsIHRlbXBlcmF0dXJlIGdyYWRpZW50OiBvbmUgc3RvcCBwZXIgaG91ciwgY29sb3VyZWQgYnkgdGhhdCBob3VyJ3NcbiAgLy8gdGVtcGVyYXR1cmUuIG9iamVjdEJvdW5kaW5nQm94IG1hcHMgb2Zmc2V0IGkvKG4tMSkgb250byB0aGUgY3VydmUncyB4LCB3aGljaFxuICAvLyBzcGFucyB0aGUgZnVsbCBpbm5lciB3aWR0aCwgc28gZWFjaCBzdG9wIGxhbmRzIHVuZGVyIGl0cyBob3VyLlxuICBjbGVhcih0ZW1wR3JhZCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgdGVtcEdyYWQuYXBwZW5kQ2hpbGQoZWwoJ3N0b3AnLCB7XG4gICAgICBvZmZzZXQ6IChuIDw9IDEgPyAwIDogaSAvIChuIC0gMSkpLnRvRml4ZWQoNCksXG4gICAgICAnc3RvcC1jb2xvcic6IHRlbXBDb2xvdXIoaG91cnNbaV0udGVtcCksXG4gICAgfSkpO1xuICB9XG5cbiAgLy8gRGF5IGhhaXJsaW5lcyArIFdFRC9USFUvRlJJIHRpY2tzLCBkZXJpdmVkIGZyb20gdGhlIHBlci1kYXkgaG91ciBjb3VudHMgc28gYVxuICAvLyBzaG9ydCB0cmFpbGluZyBkYXkgc3RpbGwgbGluZXMgdXAuXG4gIGNsZWFyKGJvdW5kYXJ5R3JvdXApO1xuICBjbGVhcih0aWNrR3JvdXApO1xuICBjb25zdCBkYXlzID0gZm9yZWNhc3QuZGF5cyB8fCBbXTtcbiAgbGV0IHN0YXJ0ID0gMDtcbiAgZm9yIChsZXQgZGkgPSAwOyBkaSA8IGRheXMubGVuZ3RoOyBkaSsrKSB7XG4gICAgY29uc3QgY291bnQgPSBkYXlzW2RpXS5jb3VudCB8fCAwO1xuICAgIGlmIChjb3VudCA8PSAwKSB7IGNvbnRpbnVlOyB9XG5cbiAgICBpZiAoZGkgPiAwICYmIHN0YXJ0IDwgbikge1xuICAgICAgY29uc3QgYnggPSB4KHN0YXJ0KS50b0ZpeGVkKDIpO1xuICAgICAgYm91bmRhcnlHcm91cC5hcHBlbmRDaGlsZChlbCgnbGluZScsIHtcbiAgICAgICAgY2xhc3M6ICdyaWJib24taGFpcmxpbmUnLFxuICAgICAgICB4MTogYngsIHkxOiBDSEFSVF9UT1AsIHgyOiBieCwgeTI6IGJhc2VsaW5lLFxuICAgICAgfSkpO1xuICAgIH1cblxuICAgIGNvbnN0IGNlbnRlcklkeCA9IHN0YXJ0ICsgKGNvdW50IC0gMSkgLyAyO1xuICAgIGNvbnN0IHRpY2sgPSBlbCgndGV4dCcsIHtcbiAgICAgIGNsYXNzOiAncmliYm9uLXRpY2snLFxuICAgICAgeDogeChjZW50ZXJJZHgpLnRvRml4ZWQoMiksXG4gICAgICB5OiAoYmFzZWxpbmUgKyBUSUNLX0ggKiAwLjcpLnRvRml4ZWQoMiksXG4gICAgICAndGV4dC1hbmNob3InOiAnbWlkZGxlJyxcbiAgICB9KTtcbiAgICB0aWNrLnRleHRDb250ZW50ID0gd2Vla2RheUFiYnIoZGF5c1tkaV0uZGF0ZSk7XG4gICAgdGlja0dyb3VwLmFwcGVuZENoaWxkKHRpY2spO1xuXG4gICAgc3RhcnQgKz0gY291bnQ7XG4gIH1cblxuICAvLyBDdXJyZW50LWhvdXIgbWFya2VyOiBhIGhhaXJsaW5lIGRyb3BwZWQgdG8gdGhlIGJhc2VsaW5lIHBsdXMgYSBkb3Qgb24gdGhlXG4gIC8vIGN1cnZlLCB0aGUgZG90IGZpbGxlZCB3aXRoIHRoZSB0ZW1wZXJhdHVyZSBjb2xvdXIgZm9yIHRoYXQgaG91ci5cbiAgY2xlYXIobWFya2VyR3JvdXApO1xuICBjb25zdCBpZHggPSBjdXJyZW50SG91ckluZGV4KGZvcmVjYXN0KTtcbiAgY29uc3QgbXggPSB4KGlkeCk7XG4gIGNvbnN0IG15ID0geShob3Vyc1tpZHhdLnRlbXApO1xuICBtYXJrZXJHcm91cC5hcHBlbmRDaGlsZChlbCgnbGluZScsIHtcbiAgICBjbGFzczogJ3JpYmJvbi1ub3dsaW5lJyxcbiAgICB4MTogbXgudG9GaXhlZCgyKSwgeTE6IG15LnRvRml4ZWQoMiksIHgyOiBteC50b0ZpeGVkKDIpLCB5MjogYmFzZWxpbmUsXG4gIH0pKTtcbiAgbWFya2VyR3JvdXAuYXBwZW5kQ2hpbGQoZWwoJ2NpcmNsZScsIHtcbiAgICBjbGFzczogJ3JpYmJvbi1kb3QnLFxuICAgIGN4OiBteC50b0ZpeGVkKDIpLCBjeTogbXkudG9GaXhlZCgyKSwgcjogJzUuNScsXG4gICAgZmlsbDogdGVtcENvbG91cihob3Vyc1tpZHhdLnRlbXApLFxuICB9KSk7XG5cbiAgLy8gT3B0aW9uYWwgc2Vjb25kIGxhbmUuIE5vIGRhdGEgZmVlZHMgaXQgdG9kYXkgKHRpZGVzIGFyZSBQcm8rIGFuZCBlbXB0eSBmb3JcbiAgLy8gaW5sYW5kIGxvY2F0aW9ucyksIHNvIGl0IHN0YXlzIGVtcHR5IGFuZCB0aGUgdmlld0JveCB1c2VzIHRoZSBzaG9ydGVyIG9mIHRoZVxuICAvLyB0d28gaGVpZ2h0cyDigJQgYnV0IHRoZSBncm91cCBhbmQgdGhlIGhlaWdodCBzd2l0Y2ggZXhpc3Qgc28gYSBsYW5lIGNhbiBkcm9wIGluXG4gIC8vIHdpdGhvdXQgYSBsYXlvdXQgcmV3cml0ZS5cbiAgY2xlYXIobGFuZUdyb3VwKTtcbiAgaWYgKGxhbmVPbiAmJiB0eXBlb2YgZm9yZWNhc3QubGFuZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZvcmVjYXN0LmxhbmUobGFuZUdyb3VwLCB7IHgsIGJhc2VsaW5lLCBsYW5lVG9wOiBiYXNlbGluZSArIFRJQ0tfSCwgbGFuZUg6IExBTkVfSCB9KTtcbiAgfVxufVxuIiwiLy8gc2t5LmpzIOKAlCBhIGNvbmRpdGlvbi1iYXNlZCBiYWNrZ3JvdW5kIG1vdW50ZWQgYmVoaW5kIHRoZSBhcHAuXG4vL1xuLy8gUHVyZSB2YW5pbGxhLCBubyBkZXBlbmRlbmNpZXMuIEEgc2luZ2xlIGAud2VhdGhlckJnYCBlbGVtZW50IGlzIGluc2VydGVkIGFzXG4vLyB0aGUgRklSU1QgY2hpbGQgb2YgYCNhcHBgIGFuZCBwb3NpdGlvbmVkIGBmaXhlZGAgKHNlZSBzdHlsZS5jc3MpLCBzbyBpdCBzcGFuc1xuLy8gdGhlIHdob2xlIGJyb3dzZXIgd2luZG93IG9uIGRlc2t0b3Agd2hpbGUgYCNhcHBgIHN0YXlzIGEgY29uc3RyYWluZWQgY2VudHJlZFxuLy8gY29sdW1uIGFib3ZlIGl0ICh6LWluZGV4KS4gVGhlIGVsZW1lbnQgY2FycmllcyBhIGBiZy08Y2F0ZWdvcnk+YCBjbGFzcyB0aGF0XG4vLyBzZWxlY3RzIGEgcGVyLWNvbmRpdGlvbiB0cmVhdG1lbnQgaW4gc3R5bGUuY3NzIOKAlCBhIGdyYWRpZW50IGJhc2UgcGx1c1xuLy8gZGVjb3JhdGl2ZSBsYXllcnMgKHN1biwgbW9vbiArIHR3aW5rbGluZyBzdGFycywgZHJpZnRpbmcgY2xvdWRzLCBmbGFrZXMsIGhhemUpXG4vLyBvbiB0aGUgdHdvIHBzZXVkby1lbGVtZW50cy4gQWxsIGltYWdlcnkgYW5kIG1vdGlvbiBsaXZlIGluIHN0eWxlLmNzcy5cbi8vXG4vLyBUaGUgY2F0ZWdvcnkgaXMgcmVzb2x2ZWQgZnJvbSBgbm93LmNvbmRpdGlvbmAgKHRoZSBXZWF0aGVyQVBJIGNvbmRpdGlvbiB0ZXh0KVxuLy8gYW5kIHJlLWFwcGxpZWQgb24gZXZlcnkgZmV0Y2ggdmlhIHNldFdlYXRoZXJCZygpLCBzbyB0aGUgYmFja2dyb3VuZCBmb2xsb3dzXG4vLyB0aGUgY3VycmVudCBsb2NhdGlvbidzIHdlYXRoZXIuIE9mZiB0aGUgcmVuZGVyIHBhdGggaXRzZWxmOiBpbmRleC5qcyBtb3VudHNcbi8vIHRoZSBsYXllciBvbmNlIGF0IGJvb3RzdHJhcCwgYW5kIGluZGV4Q2hhbmdlcy5qcyBzd2FwcyBvbmx5IHRoZSBjbGFzcy5cbi8vXG4vLyBUaGUgbW90aW9uIGlzIGd1YXJkZWQgdGhlIHNhbWUgd2F5IHRoZSBvbGQgZHJpZnQgd2FzOlxuLy8gICAtIHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSAtPiB0aGUgQ1NTIGFuaW1hdGlvbnMgYXJlIGRpc2FibGVkIGJ5IGFcbi8vICAgICAgIG1lZGlhIHF1ZXJ5LCBzbyBlYWNoIHRyZWF0bWVudCByZW5kZXJzIGFzIG9uZSBzdGF0aWMgZnJhbWUuXG4vLyAgIC0gdmlzaWJpbGl0eWNoYW5nZSAtPiBhZGQgYSBgLnBhdXNlZGAgY2xhc3MgdGhhdCBwYXVzZXMgdGhlIENTUyBhbmltYXRpb25zXG4vLyAgICAgICB3aGlsZSB0aGUgdGFiIGlzIGhpZGRlbiwgcmVtb3ZlZCB3aGVuIGl0IGJlY29tZXMgdmlzaWJsZSBhZ2Fpbi5cblxubGV0IGJnRWwgPSBudWxsO1xubGV0IGN1cnJlbnRDYXRlZ29yeSA9IG51bGw7XG5cbi8vIFRoZSBjYXRlZ29yeSBhcHBsaWVkIGJlZm9yZSB0aGUgZmlyc3QgZmV0Y2ggcmVzb2x2ZXMg4oCUIGEgY2FsbSwgbmV1dHJhbCBza3kuXG5jb25zdCBERUZBVUxUX0NBVEVHT1JZID0gJ2Nsb3VkeSc7XG5cbmZ1bmN0aW9uIHJlZHVjZU1vdGlvbigpIHtcbiAgcmV0dXJuICEhKHdpbmRvdy5tYXRjaE1lZGlhICYmIHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKScpLm1hdGNoZXMpO1xufVxuXG4vLyBNYXAgYSBXZWF0aGVyQVBJIGNvbmRpdGlvbiBzdHJpbmcgdG8gb25lIG9mIHRoZSBiYWNrZ3JvdW5kIHRyZWF0bWVudHMgZGVmaW5lZFxuLy8gaW4gc3R5bGUuY3NzLiBPcmRlciBtYXR0ZXJzOiB0aGUgbW9yZSBzcGVjaWZpYyBwcmVjaXBpdGF0aW9uIGNoZWNrcyBydW4gYmVmb3JlXG4vLyB0aGUgYnJvYWQgY2xvdWQvY2xlYXIgb25lcyBzbyBcIkxpZ2h0IHJhaW4gc2hvd2VyXCIgYW5kIFwiUGF0Y2h5IHNub3dcIiByZXNvbHZlIHRvXG4vLyB0aGVpciBwcmVjaXBpdGF0aW9uIGNhdGVnb3J5IHJhdGhlciB0aGFuIGZhbGxpbmcgdGhyb3VnaC4gQW55dGhpbmcgdW5tYXRjaGVkXG4vLyBsYW5kcyBvbiB0aGUgbmV1dHJhbCAnY2xvdWR5JyB0cmVhdG1lbnQuXG5mdW5jdGlvbiBjYXRlZ29yeUZvcih0ZXh0KSB7XG4gIGNvbnN0IHQgPSBTdHJpbmcodGV4dCB8fCAnJykudG9Mb3dlckNhc2UoKTtcbiAgaWYgKC9zbm93fHNsZWV0fGJsaXp6YXJkfGljZXxmbHVyci8udGVzdCh0KSkgeyByZXR1cm4gJ3Nub3cnOyB9XG4gIGlmICgvcmFpbnxkcml6emxlfHNob3dlcnx0aHVuZGVyLy50ZXN0KHQpKSB7IHJldHVybiAncmFpbic7IH1cbiAgaWYgKC9mb2d8bWlzdHxoYXplLy50ZXN0KHQpKSB7IHJldHVybiAnZm9nJzsgfVxuICBpZiAoL3N1bm55Ly50ZXN0KHQpKSB7IHJldHVybiAnc3VubnknOyB9XG4gIGlmICgvY2xlYXIvLnRlc3QodCkpIHsgcmV0dXJuICdjbGVhci1uaWdodCc7IH1cbiAgcmV0dXJuICdjbG91ZHknOyAvLyBjbG91ZHksIG92ZXJjYXN0LCBwYXJ0bHkgY2xvdWR5LCBhbmQgYW55IHVua25vd24gdGV4dFxufVxuXG4vLyBGcmVlemUgdGhlIGRyaWZ0IHdoaWxlIHRoZSB0YWIgaXMgaGlkZGVuLCByZXN1bWUgd2hlbiBpdCBjb21lcyBiYWNrLiBVbmRlclxuLy8gcmVkdWNlZCBtb3Rpb24gbm90aGluZyBpcyBhbmltYXRpbmcsIHNvIGAucGF1c2VkYCBpcyBhIGhhcm1sZXNzIG5vLW9wLlxuZnVuY3Rpb24gb25WaXNpYmlsaXR5KCkge1xuICBpZiAoIWJnRWwpIHsgcmV0dXJuOyB9XG4gIGlmIChkb2N1bWVudC5oaWRkZW4pIHtcbiAgICBiZ0VsLmNsYXNzTGlzdC5hZGQoJ3BhdXNlZCcpO1xuICB9IGVsc2Uge1xuICAgIGJnRWwuY2xhc3NMaXN0LnJlbW92ZSgncGF1c2VkJyk7XG4gIH1cbn1cblxuLy8gU3dhcCB0aGUgYmFja2dyb3VuZCB0cmVhdG1lbnQgdG8gbWF0Y2ggYSBjb25kaXRpb24uIENhbGxlZCBmcm9tIHRoZSByZW5kZXJcbi8vIHBhdGggb24gZXZlcnkgZmV0Y2g7IGEgbm8tb3Agd2hlbiB0aGUgcmVzb2x2ZWQgY2F0ZWdvcnkgaGFzbid0IGNoYW5nZWQsIHNvIGFcbi8vIHVuaXQgdG9nZ2xlIG9yIGEgcmVwZWF0IHNlYXJjaCBkb2Vzbid0IHJlc3RhcnQgdGhlIGFuaW1hdGlvbnMuIFNhZmUgdG8gY2FsbFxuLy8gYmVmb3JlIGluaXRXZWF0aGVyQmcoKSBoYXMgcnVuIOKAlCB0aGUgY2F0ZWdvcnkgaXMgcmVtZW1iZXJlZCBhbmQgYXBwbGllZCB0aGVuLlxuZXhwb3J0IGZ1bmN0aW9uIHNldFdlYXRoZXJCZyhjb25kaXRpb25UZXh0KSB7XG4gIGNvbnN0IGNhdGVnb3J5ID0gY2F0ZWdvcnlGb3IoY29uZGl0aW9uVGV4dCk7XG4gIGlmIChjYXRlZ29yeSA9PT0gY3VycmVudENhdGVnb3J5KSB7IHJldHVybjsgfVxuICBpZiAoY3VycmVudENhdGVnb3J5KSB7IGJnRWwgJiYgYmdFbC5jbGFzc0xpc3QucmVtb3ZlKCdiZy0nICsgY3VycmVudENhdGVnb3J5KTsgfVxuICBjdXJyZW50Q2F0ZWdvcnkgPSBjYXRlZ29yeTtcbiAgaWYgKGJnRWwpIHsgYmdFbC5jbGFzc0xpc3QuYWRkKCdiZy0nICsgY2F0ZWdvcnkpOyB9XG59XG5cbi8vIE1vdW50IHRoZSBiYWNrZ3JvdW5kIGxheWVyIG9uY2UsIGFzIHRoZSBmaXJzdCBjaGlsZCBvZiB0aGUgZ2l2ZW4gaG9zdCAoYCNhcHBgKS5cbi8vIFNhZmUgdG8gY2FsbCBhZ2FpbiDigJQgaXQgb25seSBldmVyIG1vdW50cyBhIHNpbmdsZSBlbGVtZW50LiBBcHBsaWVzIHdoYXRldmVyXG4vLyBjYXRlZ29yeSBoYXMgYmVlbiBzZXQgc28gZmFyLCBvciBhIG5ldXRyYWwgZGVmYXVsdCB1bnRpbCB0aGUgZmlyc3QgZmV0Y2guXG5leHBvcnQgZnVuY3Rpb24gaW5pdFdlYXRoZXJCZyhob3N0RWwpIHtcbiAgaWYgKGJnRWwpIHsgcmV0dXJuOyB9IC8vIG1vdW50IG9uY2VcbiAgY29uc3QgaG9zdCA9IGhvc3RFbCB8fCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJyk7XG4gIGlmICghaG9zdCkgeyByZXR1cm47IH1cblxuICBiZ0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJnRWwuY2xhc3NOYW1lID0gJ3dlYXRoZXJCZyc7XG4gIGJnRWwuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gIGJnRWwuY2xhc3NMaXN0LmFkZCgnYmctJyArIChjdXJyZW50Q2F0ZWdvcnkgfHwgREVGQVVMVF9DQVRFR09SWSkpO1xuICBpZiAoIWN1cnJlbnRDYXRlZ29yeSkgeyBjdXJyZW50Q2F0ZWdvcnkgPSBERUZBVUxUX0NBVEVHT1JZOyB9XG4gIGhvc3QuaW5zZXJ0QmVmb3JlKGJnRWwsIGhvc3QuZmlyc3RDaGlsZCk7XG5cbiAgLy8gTm90aGluZyBkcmlmdHMgdW5kZXIgcmVkdWNlZCBtb3Rpb24gKHRoZSBDU1MgbWVkaWEgcXVlcnkgZGlzYWJsZXMgdGhlXG4gIC8vIGFuaW1hdGlvbnMpLCBzbyB0aGVyZSBpcyBub3RoaW5nIHRvIHBhdXNlIOKAlCBza2lwIHRoZSBsaXN0ZW5lciBpbiB0aGF0IGNhc2UuXG4gIGlmICghcmVkdWNlTW90aW9uKCkpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgb25WaXNpYmlsaXR5KTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9XZWF0aGVyQXBwX1RPUC9cIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuL2xvZ2ljLmpzJzsgLy8gZGVmaW5lcyBmb3JlY2FzdExvZ2ljIChubyBmZXRjaCBmaXJlcyBhdCBpbXBvcnQg4oCUIHNlZSBpbml0RmF2b3VyaXRlcylcbmltcG9ydCB7IHdpcmVFdmVudHMgfSBmcm9tICcuL2luZGV4Q2hhbmdlcy5qcyc7XG5pbXBvcnQgeyBidWlsZFJpYmJvbiB9IGZyb20gJy4vcmliYm9uLmpzJztcbmltcG9ydCB7IGluaXRGYXZvdXJpdGVzIH0gZnJvbSAnLi9mYXZvdXJpdGVzLmpzJztcbmltcG9ydCB7IGluaXRXZWF0aGVyQmcgfSBmcm9tICcuL3NreS5qcyc7XG5cbi8vIFRoZSB3aG9sZSBVSSBpcyBidWlsdCBoZXJlIHdpdGggZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAodGhlcmUgaXMgbm8gSFRNTCBzb3VyY2Vcbi8vIGZpbGUg4oCUIGh0bWwtd2VicGFjay1wbHVnaW4gZ2VuZXJhdGVzIGFuIGVtcHR5IGRvY3VtZW50KS4gVGhlIGZvcmVjYXN0IGlzIG9uZVxuLy8gY29udGludW91cyB0ZW1wZXJhdHVyZSByaWJib24gYWNyb3NzIGFsbCB0aHJlZSBkYXlzLCBhIHJlYWRvdXQgYmVuZWF0aCBpdCwgYW5kXG4vLyBhIHNlYXJjaCBib3g6IG5vIGNhcmRzLCBubyBhcnJvd3MsIG5vIHBlci1jb25kaXRpb24gdGhlbWUsIG5vIGRheSBuYXZpZ2F0aW9uLlxuXG4vLyBBIGRlc2t0b3Atb25seSBwcmV2L25leHQgY2hldnJvbiBmbGFua2luZyB0aGUgc2F2ZWQtbG9jYXRpb24gZG90cy4gSW5saW5lIFNWR1xuLy8gc28gQ1NTIGNhbiByZWNvbG91ciB0aGUgc3Ryb2tlIHZpYSBjdXJyZW50Q29sb3IgKGlkbGUgbXV0ZWQsIGJyaWdodGVyIG9uXG4vLyBob3ZlcikuIGZhdm91cml0ZXMuanMgd2lyZXMgdGhlIGNsaWNrcyB0byByb3RhdGUoKTsgdGhlIHBhaXIgaXMgaGlkZGVuIHdpdGhcbi8vIHRoZSBkb3RzIGJlbG93IHR3byBsb2NhdGlvbnMsIGFuZCBoaWRkZW4gZW50aXJlbHkgYXQg4omkNDgwcHggd2hlcmUgc3dpcGUgcnVsZXMuXG5mdW5jdGlvbiBuYXZBcnJvdyhpZCwgZGlyLCBsYWJlbCkge1xuICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnRuLnR5cGUgPSAnYnV0dG9uJztcbiAgYnRuLmlkID0gaWQ7XG4gIGJ0bi5jbGFzc05hbWUgPSAnYXJyb3cnO1xuICBidG4uc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgbGFiZWwpO1xuICBjb25zdCBwb2ludHMgPSBkaXIgPCAwID8gJzEzLDMgNyw3IDEzLDExJyA6ICc3LDMgMTMsNyA3LDExJztcbiAgYnRuLmlubmVySFRNTCA9XG4gICAgJzxzdmcgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjE0XCIgdmlld0JveD1cIjAgMCAyMCAxNFwiIGZpbGw9XCJub25lXCIgJyArXG4gICAgJ3N0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgJyArXG4gICAgJ3N0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+JyArXG4gICAgJzxwb2x5bGluZSBwb2ludHM9XCInICsgcG9pbnRzICsgJ1wiPjwvcG9seWxpbmU+PC9zdmc+JztcbiAgcmV0dXJuIGJ0bjtcbn1cblxuLy8gT25lIG9wdGlvbiBpbiB0aGUgc2VnbWVudGVkIEMvRiB1bml0IHN3aXRjaC4gVGhlIGJ1dHRvbnMgY2Fycnkgbm8gbG9naWMgaGVyZSDigJRcbi8vIGluZGV4Q2hhbmdlcy5qcyB3aXJlcyB0aGUgY2xpY2tzIG9uY2UgaW4gd2lyZUV2ZW50cygpIGFuZCBvd25zIGJvdGggdGhlIGFjdGl2ZVxuLy8gc3RhdGUgYW5kIHRoZSBkaXNwbGF5LW9ubHkgQ2Vsc2l1c+KGkkZhaHJlbmhlaXQgY29udmVyc2lvbi5cbmZ1bmN0aW9uIHVuaXRPcHQodW5pdCkge1xuICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnRuLnR5cGUgPSAnYnV0dG9uJztcbiAgYnRuLmNsYXNzTmFtZSA9ICd1bml0T3B0JztcbiAgYnRuLmRhdGFzZXQudW5pdCA9IHVuaXQ7XG4gIGJ0bi50ZXh0Q29udGVudCA9ICfCsCcgKyB1bml0O1xuICByZXR1cm4gYnRuO1xufVxuXG5mdW5jdGlvbiBzdGF0KGlkLCBsYWJlbCkge1xuICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNlbGwuY2xhc3NOYW1lID0gJ3N0YXQnO1xuXG4gIGNvbnN0IGxhYmVsRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGFiZWxFbC5jbGFzc05hbWUgPSAnc3RhdC1sYWJlbCc7XG4gIGxhYmVsRWwudGV4dENvbnRlbnQgPSBsYWJlbDtcblxuICBjb25zdCB2YWx1ZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHZhbHVlRWwuY2xhc3NOYW1lID0gJ3N0YXQtdmFsdWUnO1xuICB2YWx1ZUVsLmlkID0gaWQ7XG4gIHZhbHVlRWwudGV4dENvbnRlbnQgPSAn4oCUJztcblxuICBjZWxsLmFwcGVuZENoaWxkKGxhYmVsRWwpO1xuICBjZWxsLmFwcGVuZENoaWxkKHZhbHVlRWwpO1xuICByZXR1cm4gY2VsbDtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50KCkge1xuICBjb25zdCBhcHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYXBwLmlkID0gJ2FwcCc7XG5cbiAgLy8gUmliYm9uIHBhbmVsIOKAlCB0aGUgU1ZHIGN1cnZlIGlzIG1vdW50ZWQgaW50byAjcmliYm9uV3JhcCBieSBidWlsZFJpYmJvbigpLlxuICBjb25zdCByaWJib25XcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHJpYmJvbldyYXAuaWQgPSAncmliYm9uV3JhcCc7XG5cbiAgLy8gUmVhZG91dDogbG9jYXRpb24sIGN1cnJlbnQgdGVtcGVyYXR1cmUsIGNvbmRpdGlvbiwgYW5kIGEgZm91ci11cCBzdGF0IHJvdy5cbiAgY29uc3QgcmVhZG91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICByZWFkb3V0LmlkID0gJ3JlYWRvdXQnO1xuXG4gIC8vIExvY2F0aW9uIG5hbWUgcGFpcmVkIHdpdGggYSBjb21wYWN0IEMvRiB1bml0IHN3aXRjaCBvbiBvbmUgcm93LiBUaGUgc3dpdGNoXG4gIC8vIGZsaXBzIHRoZSB0ZW1wZXJhdHVyZSByZWFkb3V0cyAoY3VycmVudCArIGZlZWxzIGxpa2UpIGJldHdlZW4gwrBDIGFuZCDCsEYgZm9yXG4gIC8vIGRpc3BsYXkgb25seTsgdGhlIHJhdyBDZWxzaXVzIHN0aWxsIGZsb3dzIHRvIHJpYmJvbi5qcyB1bmNoYW5nZWQuXG4gIGNvbnN0IGxvY2F0aW9uUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxvY2F0aW9uUm93LmlkID0gJ2xvY2F0aW9uUm93JztcblxuICBjb25zdCBsb2NhdGlvbk5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbG9jYXRpb25OYW1lLmlkID0gJ2xvY2F0aW9uTmFtZSc7XG4gIGxvY2F0aW9uTmFtZS50ZXh0Q29udGVudCA9ICfigJQnO1xuXG4gIGNvbnN0IHVuaXRTd2l0Y2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdW5pdFN3aXRjaC5pZCA9ICd1bml0U3dpdGNoJztcbiAgdW5pdFN3aXRjaC5hcHBlbmRDaGlsZCh1bml0T3B0KCdDJykpO1xuICB1bml0U3dpdGNoLmFwcGVuZENoaWxkKHVuaXRPcHQoJ0YnKSk7XG5cbiAgbG9jYXRpb25Sb3cuYXBwZW5kQ2hpbGQobG9jYXRpb25OYW1lKTtcbiAgbG9jYXRpb25Sb3cuYXBwZW5kQ2hpbGQodW5pdFN3aXRjaCk7XG5cbiAgLy8gU2F2ZWQtbG9jYXRpb24gaW5kaWNhdG9yOiBvbmUgZG90IHBlciBzYXZlZCBsb2NhdGlvbiwgdGhlIGN1cnJlbnQgb25lIGZpbGxlZC5cbiAgLy8gUG9wdWxhdGVkIGJ5IGZhdm91cml0ZXMuanMuIFRoZSBkb3RzIHNpdCBpbnNpZGUgYSAubmF2Um93IGJldHdlZW4gdHdvXG4gIC8vIGRlc2t0b3Atb25seSBwcmV2L25leHQgYXJyb3dzOyBmYXZvdXJpdGVzLmpzIGdhdGVzIHRoZSB3aG9sZSByb3cnc1xuICAvLyB2aXNpYmlsaXR5IChoaWRkZW4gdW50aWwgdHdvIG9yIG1vcmUgbG9jYXRpb25zIGFyZSBzYXZlZCkuXG4gIGNvbnN0IG5hdlJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBuYXZSb3cuY2xhc3NOYW1lID0gJ25hdlJvdyBoaWRkZW4nO1xuXG4gIGNvbnN0IGRvdFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkb3RSb3cuaWQgPSAnZG90Um93JztcblxuICBuYXZSb3cuYXBwZW5kQ2hpbGQobmF2QXJyb3coJ25hdlByZXYnLCAtMSwgJ1ByZXZpb3VzIGxvY2F0aW9uJykpO1xuICBuYXZSb3cuYXBwZW5kQ2hpbGQoZG90Um93KTtcbiAgbmF2Um93LmFwcGVuZENoaWxkKG5hdkFycm93KCduYXZOZXh0JywgMSwgJ05leHQgbG9jYXRpb24nKSk7XG5cbiAgY29uc3QgY3VycmVudFRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY3VycmVudFRlbXAuaWQgPSAnY3VycmVudFRlbXAnO1xuICBjdXJyZW50VGVtcC50ZXh0Q29udGVudCA9ICfigJQnO1xuXG4gIGNvbnN0IGN1cnJlbnRDb25kaXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY3VycmVudENvbmRpdGlvbi5pZCA9ICdjdXJyZW50Q29uZGl0aW9uJztcbiAgY3VycmVudENvbmRpdGlvbi50ZXh0Q29udGVudCA9ICfigJQnO1xuXG4gIGNvbnN0IHN0YXRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc3RhdFJvdy5pZCA9ICdzdGF0Um93JztcbiAgc3RhdFJvdy5hcHBlbmRDaGlsZChzdGF0KCdmZWVsc1ZhbCcsICdGRUVMUyBMSUtFJykpO1xuICBzdGF0Um93LmFwcGVuZENoaWxkKHN0YXQoJ2h1bWlkaXR5VmFsJywgJ0hVTUlESVRZJykpO1xuICBzdGF0Um93LmFwcGVuZENoaWxkKHN0YXQoJ3JhaW5WYWwnLCAnUkFJTicpKTtcbiAgc3RhdFJvdy5hcHBlbmRDaGlsZChzdGF0KCd3aW5kVmFsJywgJ1dJTkQnKSk7XG5cbiAgcmVhZG91dC5hcHBlbmRDaGlsZChsb2NhdGlvblJvdyk7XG4gIHJlYWRvdXQuYXBwZW5kQ2hpbGQobmF2Um93KTtcbiAgcmVhZG91dC5hcHBlbmRDaGlsZChjdXJyZW50VGVtcCk7XG4gIHJlYWRvdXQuYXBwZW5kQ2hpbGQoY3VycmVudENvbmRpdGlvbik7XG4gIHJlYWRvdXQuYXBwZW5kQ2hpbGQoc3RhdFJvdyk7XG5cbiAgLy8gVGhlIHJpYmJvbiBhbmQgaXRzIHJlYWRvdXQgYXJlIHdyYXBwZWQgaW4gb25lIGNhcmQgc28gdGhleSBzbGlkZSB0b2dldGhlciBhc1xuICAvLyBhIHNpbmdsZSB1bml0IG9uIGEgY29tbWl0dGVkIG1vYmlsZSBzd2lwZSAoZmF2b3VyaXRlcy5qcyBkcml2ZXMgdGhlXG4gIC8vIGRpcmVjdGlvbi1hd2FyZSBzbGlkZSB2aWEgI3dlYXRoZXJDYXJkLnNsaWRlLSogaW4gc3R5bGUuY3NzKS4gSXQncyBhIHBsYWluXG4gIC8vIGZsZXggY29sdW1uIGF0IGV2ZXJ5IHdpZHRoIOKAlCB0aGUgd3JhcHBpbmcgaXMgdHJhbnNwYXJlbnQgdG8gdGhlIGxheW91dC5cbiAgY29uc3Qgd2VhdGhlckNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgd2VhdGhlckNhcmQuaWQgPSAnd2VhdGhlckNhcmQnO1xuICB3ZWF0aGVyQ2FyZC5hcHBlbmRDaGlsZChyaWJib25XcmFwKTtcbiAgd2VhdGhlckNhcmQuYXBwZW5kQ2hpbGQocmVhZG91dCk7XG5cbiAgLy8gU2VhcmNoIGZvcm0uIEEgcmVhbCA8Zm9ybT4gKyBzdWJtaXQgYnV0dG9uIHNvIEVudGVyIGFuZCBjbGljayBzaGFyZSBvbmVcbiAgLy8gc3VibWl0IGV2ZW50ICh3aXJlZCBvbmNlIGluIHdpcmVFdmVudHMoKSkuXG4gIGNvbnN0IHNlYXJjaEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIHNlYXJjaEZvcm0uaWQgPSAnc2VhcmNoRm9ybSc7XG5cbiAgLy8gVGhlIGlucHV0IGFuZCBpdHMgYXV0b2NvbXBsZXRlIGRyb3Bkb3duIHNoYXJlIGEgcmVsYXRpdmVseS1wb3NpdGlvbmVkIHdyYXBwZXJcbiAgLy8gc28gI3N1Z2dlc3Rpb25zIGNhbiBoYW5nIGJlbmVhdGggI3NlYXJjaElucHV0ICh0b3A6IDEwMCUpIGFuZCBhbGlnbiB0byBpdHNcbiAgLy8gZWRnZXMsIGluc3RlYWQgb2YgYmVjb21pbmcgYSB0aGlyZCBmbGV4IGNoaWxkIG9mIHRoZSByb3cuXG4gIGNvbnN0IHNlYXJjaElucHV0V3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzZWFyY2hJbnB1dFdyYXAuaWQgPSAnc2VhcmNoSW5wdXRXcmFwJztcblxuICBjb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHNlYXJjaElucHV0LmlkID0gJ3NlYXJjaElucHV0JztcbiAgc2VhcmNoSW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgc2VhcmNoSW5wdXQucGxhY2Vob2xkZXIgPSAnU2VhcmNoIGxvY2F0aW9uJztcbiAgc2VhcmNoSW5wdXQuc2V0QXR0cmlidXRlKCdhdXRvY29tcGxldGUnLCAnb2ZmJyk7XG5cbiAgLy8gQ2l0eS1zdWdnZXN0aW9uIGRyb3Bkb3duLiBQb3B1bGF0ZWQgYnkgYSBkZWJvdW5jZWQgbG9va3VwIHdpcmVkIG9uY2UgaW5cbiAgLy8gd2lyZUV2ZW50cygpOyBoaWRkZW4gdW50aWwgdGhlcmUgYXJlIG1hdGNoZXMgdG8gc2hvdy5cbiAgY29uc3Qgc3VnZ2VzdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc3VnZ2VzdGlvbnMuaWQgPSAnc3VnZ2VzdGlvbnMnO1xuICBzdWdnZXN0aW9ucy5jbGFzc05hbWUgPSAnaGlkZGVuJztcbiAgc3VnZ2VzdGlvbnMuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2xpc3Rib3gnKTtcblxuICBjb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgc2VhcmNoQnV0dG9uLmlkID0gJ3NlYXJjaEJ1dHRvbic7XG4gIHNlYXJjaEJ1dHRvbi50eXBlID0gJ3N1Ym1pdCc7XG4gIHNlYXJjaEJ1dHRvbi50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xuXG4gIHNlYXJjaElucHV0V3JhcC5hcHBlbmRDaGlsZChzZWFyY2hJbnB1dCk7XG4gIHNlYXJjaElucHV0V3JhcC5hcHBlbmRDaGlsZChzdWdnZXN0aW9ucyk7XG5cbiAgc2VhcmNoRm9ybS5hcHBlbmRDaGlsZChzZWFyY2hJbnB1dFdyYXApO1xuICBzZWFyY2hGb3JtLmFwcGVuZENoaWxkKHNlYXJjaEJ1dHRvbik7XG5cbiAgYXBwLmFwcGVuZENoaWxkKHdlYXRoZXJDYXJkKTtcbiAgYXBwLmFwcGVuZENoaWxkKHNlYXJjaEZvcm0pO1xuXG4gIHJldHVybiBhcHA7XG59XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KCkpO1xuXG4vLyBNb3VudCB0aGUgZHJpZnRpbmctZ3JhZGllbnQgYmFja2dyb3VuZCBiZWhpbmQgdGhlIGFwcCBjb250ZW50IChmaXJzdCBjaGlsZCBvZlxuLy8gI2FwcCwgdW5kZXIgZXZlcnl0aGluZyB2aWEgei1pbmRleCkuIE9mZiB0aGUgcmVuZGVyIHBhdGgg4oCUIGl0IG5ldmVyIHJlcGFpbnRzXG4vLyBvbiBhIGZldGNoLlxuaW5pdFdlYXRoZXJCZyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuXG4vLyBCdWlsZCB0aGUgU1ZHIHNjYWZmb2xkIG5vdyB0aGF0ICNyaWJib25XcmFwIGV4aXN0cywgdGhlbiByZWdpc3RlciBsaXN0ZW5lcnNcbi8vIGV4YWN0bHkgb25jZS4gQm90aCBydW4gb2ZmIHRoZSByZW5kZXIgcGF0aCwgc28gbm90aGluZyBtdWx0aXBsaWVzIGFjcm9zc1xuLy8gZmV0Y2hlcy4gaW5pdEZhdm91cml0ZXMoKSBsb2FkcyB0aGUgc2F2ZWQgbG9jYXRpb25zLCB3aXJlcyB0aGUgc3dpcGUvZG90XG4vLyBnZXN0dXJlcyBvbmNlLCBkcmF3cyB0aGUgZG90cywgYW5kIGZpcmVzIHRoZSBzaW5nbGUgaW5pdGlhbCBmZXRjaCAodGhlIGZpcnN0XG4vLyBzYXZlZCBsb2NhdGlvbiwgb3IgdGhlIGRlZmF1bHQgd2hlbiBub25lIGFyZSBzYXZlZCksIHdoaWNoIHJlc29sdmVzXG4vLyBhZnRlcndhcmRzIGFuZCByZW5kZXJzIGludG8gdGhpcyBzY2FmZm9sZC5cbmJ1aWxkUmliYm9uKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyaWJib25XcmFwJykpO1xud2lyZUV2ZW50cygpO1xuaW5pdEZhdm91cml0ZXMoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==