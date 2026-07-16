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
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 28px;
  max-width: 720px;
  margin: 0 auto;
  padding: 32px 20px;
}

/* The ribbon and its readout share one flex column so a mobile location rotation
   slides them as a single unit. It carries the same 28px gap #app used to put
   between the ribbon and the readout, so wrapping them is layout-transparent. */
#weatherCard {
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: 'Roboto';\n  src: url('./Roboto-Regular.ttf');\n  font-weight: 300 400;\n}\n\n/* Palette:\n   ground  #12181F   rules  #26313B\n   text    #EAEEF2 (primary) / #8CA0AE (muted)\n   The temperature colours live in ribbon.js (the curve is coloured by the\n   temperature scalar, not by CSS). */\n:root {\n  --ground: #12181F;\n  --rule: #26313B;\n  --text: #EAEEF2;\n  --muted: #8CA0AE;\n  --mono: 'SFMono-Regular', 'SF Mono', 'Menlo', 'Consolas', 'Liberation Mono', monospace;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  background: var(--ground);\n  color: var(--text);\n  font-family: 'Roboto', system-ui, sans-serif;\n  -webkit-font-smoothing: antialiased;\n}\n\n/* dvh (not vh): on iOS Safari vh resolves to the tall viewport and parks the\n   bottom of the layout under the URL bar. */\n#app {\n  min-height: 100dvh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 28px;\n  max-width: 720px;\n  margin: 0 auto;\n  padding: 32px 20px;\n}\n\n/* The ribbon and its readout share one flex column so a mobile location rotation\n   slides them as a single unit. It carries the same 28px gap #app used to put\n   between the ribbon and the readout, so wrapping them is layout-transparent. */\n#weatherCard {\n  display: flex;\n  flex-direction: column;\n  gap: 28px;\n}\n\n/* Ribbon: the SVG scales to the column width via the viewBox, so all 72 hours\n   are on screen at any width down to 380px without scroll or pan. */\n#ribbonWrap {\n  width: 100%;\n}\n\n#ribbonSvg {\n  display: block;\n  width: 100%;\n  height: auto;\n  overflow: visible;\n}\n\n.ribbon-curve {\n  stroke-width: 2.5;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n\n/* Day boundary hairlines at hours 24 and 48. */\n.ribbon-hairline {\n  stroke: var(--rule);\n  stroke-width: 1;\n}\n\n.ribbon-tick {\n  fill: var(--muted);\n  font-family: var(--mono);\n  font-size: 12px;\n  letter-spacing: 1px;\n}\n\n.ribbon-nowline {\n  stroke: var(--muted);\n  stroke-width: 1;\n  stroke-dasharray: 2 3;\n  opacity: 0.7;\n}\n\n.ribbon-dot {\n  stroke: var(--ground);\n  stroke-width: 2;\n}\n\n/* Readout beneath the curve. */\n#readout {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  text-align: center;\n}\n\n/* Location name paired with the C/F unit switch on one centered row. */\n#locationRow {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n}\n\n#locationName {\n  font-family: var(--mono);\n  font-size: 13px;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  color: var(--muted);\n}\n\n/* Segmented C/F toggle: a compact pill, the active option filled with the rule\n   colour. Display-only — flips the temperature readouts between °C and °F. */\n#unitSwitch {\n  display: flex;\n  border: 1px solid var(--rule);\n  border-radius: 999px;\n  overflow: hidden;\n}\n\n.unitOpt {\n  font-family: var(--mono);\n  font-size: 11px;\n  letter-spacing: 1px;\n  padding: 3px 9px;\n  border: none;\n  background: transparent;\n  color: var(--muted);\n  cursor: pointer;\n}\n\n.unitOpt.active {\n  background: var(--rule);\n  color: var(--text);\n}\n\n/* Saved-location navigation: prev/next chevrons flanking the dot row. The whole\n   row is hidden at a count of one (a single location needs no affordance); the\n   arrows are desktop-only and drop out at ≤480px where swipe takes over. */\n.navRow {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  margin: 4px 0 2px;\n}\n\n.navRow.hidden {\n  display: none;\n}\n\n.arrow {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  border: none;\n  background: none;\n  color: var(--muted);\n  cursor: pointer;\n}\n\n.arrow:hover {\n  color: #EAEEF2;\n}\n\n.arrow svg {\n  display: block;\n  width: 20px;\n  height: 14px;\n}\n\n/* Saved-location dots: one per saved location, the active one filled. */\n#dotRow {\n  position: relative; /* offset parent for the desktop remove popover */\n  display: flex;\n  gap: 8px;\n}\n\n.dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #2E3B45;\n  cursor: pointer;\n  touch-action: manipulation;\n}\n\n.dot.active {\n  background: #EAEEF2;\n}\n\n/* Desktop remove-confirmation popover, anchored above the long-pressed dot.\n   Touch keeps the native confirm; this is the mouse/pen path. */\n.removePopover {\n  position: absolute;\n  bottom: calc(100% + 10px);\n  transform: translateX(-50%);\n  z-index: 20;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 12px;\n  background: var(--ground);\n  border: 1px solid var(--rule);\n  border-radius: 8px;\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.45);\n  white-space: nowrap;\n}\n\n/* Downward pointer arrow, bordered: outer triangle in the rule colour with an\n   inner ground-filled triangle laid a pixel higher on top of it. */\n.removePopover::before,\n.removePopover::after {\n  content: '';\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 0;\n  height: 0;\n  border-style: solid;\n}\n\n.removePopover::before {\n  top: 100%;\n  border-width: 7px 7px 0 7px;\n  border-color: var(--rule) transparent transparent transparent;\n}\n\n.removePopover::after {\n  top: calc(100% - 1px);\n  border-width: 6px 6px 0 6px;\n  border-color: var(--ground) transparent transparent transparent;\n}\n\n.removePopover-name {\n  color: var(--text);\n  font-size: 13px;\n}\n\n.removePopover-actions {\n  display: flex;\n  gap: 8px;\n}\n\n.removePopover-cancel,\n.removePopover-delete {\n  font-family: inherit;\n  font-size: 12px;\n  padding: 5px 12px;\n  border: 1px solid var(--rule);\n  border-radius: 8px;\n  cursor: pointer;\n}\n\n.removePopover-cancel {\n  background: none;\n  color: var(--muted);\n}\n\n.removePopover-cancel:hover {\n  color: var(--text);\n}\n\n.removePopover-delete {\n  background: var(--text);\n  color: var(--ground);\n  border-color: var(--text);\n}\n\n.removePopover-delete:hover {\n  filter: brightness(0.92);\n}\n\n/* Roboto Light 40px for the reading. */\n#currentTemp {\n  font-family: 'Roboto', sans-serif;\n  font-weight: 300;\n  font-size: 40px;\n  line-height: 1.1;\n}\n\n#currentCondition {\n  font-size: 15px;\n  color: var(--text);\n}\n\n/* Four-up stat row: text labels, no icons. */\n#statRow {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 10px;\n  width: 100%;\n  margin-top: 14px;\n}\n\n.stat {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  padding: 12px 6px;\n  border: 1px solid var(--rule);\n  border-radius: 8px;\n}\n\n.stat-label {\n  font-family: var(--mono);\n  font-size: 10px;\n  letter-spacing: 1px;\n  color: var(--muted);\n}\n\n.stat-value {\n  font-size: 17px;\n  color: var(--text);\n}\n\n/* Search form. */\n#searchForm {\n  display: flex;\n  gap: 10px;\n  width: 100%;\n}\n\n/* Holds the input and its autocomplete dropdown; position: relative anchors\n   #suggestions beneath the input. flex: 1 so the pair fills the row the way the\n   bare input used to. */\n#searchInputWrap {\n  position: relative;\n  flex: 1;\n  min-width: 0;\n}\n\n#searchInput {\n  width: 100%;\n  padding: 12px 14px;\n  font-family: var(--mono);\n  font-size: 16px; /* 16px so iOS Safari doesn't auto-zoom the input on focus */\n  color: var(--text);\n  background: transparent;\n  border: 1px solid var(--rule);\n  border-radius: 8px;\n}\n\n#searchInput::placeholder {\n  color: var(--muted);\n}\n\n#searchInput:focus {\n  outline: none;\n  border-color: var(--muted);\n}\n\n/* While the dropdown is open the input's bottom corners square off and its\n   bottom edge drops out, so it reads as one attached surface with #suggestions. */\n#searchForm.suggesting #searchInput {\n  border-radius: 8px 8px 0 0;\n  border-bottom-color: transparent;\n}\n\n/* Failed lookup: reddened border, current ribbon left in place. */\n#searchForm.invalid #searchInput {\n  border-color: #C2452D;\n}\n\n/* Autocomplete dropdown: hangs off the bottom of the input, matching its width\n   and continuing its focused border into a bottom-rounded panel. */\n#suggestions {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  z-index: 10;\n  max-height: 240px;\n  overflow-y: auto;\n  background: var(--ground);\n  border: 1px solid var(--muted);\n  border-top: none;\n  border-radius: 0 0 8px 8px;\n}\n\n#suggestions.hidden {\n  display: none;\n}\n\n.suggestion-item {\n  display: flex;\n  align-items: baseline;\n  gap: 8px;\n  padding: 10px 14px;\n  font-family: var(--mono);\n  cursor: pointer;\n}\n\n.suggestion-item:hover,\n.suggestion-item.selected {\n  background: var(--rule);\n}\n\n.suggestion-city {\n  font-size: 14px;\n  color: var(--text);\n}\n\n.suggestion-country {\n  font-size: 12px;\n  color: var(--muted);\n}\n\n#searchButton {\n  padding: 12px 20px;\n  font-family: var(--mono);\n  font-size: 14px;\n  letter-spacing: 1px;\n  color: var(--ground);\n  background: var(--text);\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n}\n\n#searchButton:hover {\n  filter: brightness(0.92);\n}\n\n@media (max-width: 480px) {\n  #app {\n    gap: 22px;\n    padding: 24px 16px;\n  }\n\n  #weatherCard {\n    gap: 22px;\n  }\n\n  /* Swipe-direction-aware slide on a committed location rotation. favourites.js\n     adds .slide-next (swipe left -> next) or .slide-prev (swipe right -> prev)\n     to #weatherCard, then rotates. The card fades to nothing at the keyframe's\n     midpoint, which masks the forecast swap: renderRibbon() rebuilds into this\n     same card while it's invisible, so the new curve slides in rather than\n     snapping. Desktop rotates via the arrows and never gets the class. */\n  #weatherCard.slide-next {\n    animation: cardSlideNext 280ms ease-out;\n  }\n\n  #weatherCard.slide-prev {\n    animation: cardSlidePrev 280ms ease-out;\n  }\n\n  @keyframes cardSlideNext {\n    0% { transform: translateX(0); opacity: 1; }\n    40% { transform: translateX(-42px); opacity: 0; }\n    60% { transform: translateX(42px); opacity: 0; }\n    100% { transform: translateX(0); opacity: 1; }\n  }\n\n  @keyframes cardSlidePrev {\n    0% { transform: translateX(0); opacity: 1; }\n    40% { transform: translateX(42px); opacity: 0; }\n    60% { transform: translateX(-42px); opacity: 0; }\n    100% { transform: translateX(0); opacity: 1; }\n  }\n\n  /* Mobile navigates by swipe; drop the arrows but keep the dots. */\n  .arrow {\n    display: none;\n  }\n\n  #statRow {\n    gap: 8px;\n  }\n\n  .stat {\n    padding: 10px 4px;\n  }\n\n  .stat-value {\n    font-size: 15px;\n  }\n}\n\n/* Respect a reduced-motion preference: rotate instantly, no slide. favourites.js\n   still adds the class, but with the animation suppressed animationend never\n   fires, so its setTimeout fallback is what strips the class back off. */\n@media (prefers-reduced-motion: reduce) {\n  #weatherCard.slide-next,\n  #weatherCard.slide-prev {\n    animation: none;\n  }\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMscUhBQXVDO0FBQ25GLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEVBQTRFO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTLDBCQUEwQjtBQUNuQyxVQUFVLDhCQUE4QjtBQUN4QyxVQUFVLDZCQUE2QjtBQUN2QyxXQUFXLDBCQUEwQjtBQUNyQzs7QUFFQTtBQUNBLFNBQVMsMEJBQTBCO0FBQ25DLFVBQVUsNkJBQTZCO0FBQ3ZDLFVBQVUsOEJBQThCO0FBQ3hDLFdBQVcsMEJBQTBCO0FBQ3JDOztBQUVBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxPQUFPLFFBQVEsT0FBTyxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sTUFBTSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLE9BQU8sTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxZQUFZLE1BQU0sd0JBQXdCLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLE9BQU8sT0FBTyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLE9BQU8sTUFBTSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsdUJBQXVCLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLFNBQVMsT0FBTyxNQUFNLFlBQVks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QUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUFXO0FBQ1gsNERBQVU7QUFDViw4REFBYyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL3NyYy9mYXZvdXJpdGVzLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL3NyYy9pbmRleENoYW5nZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vc3JjL2xvZ2ljLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL3NyYy9yaWJib24uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vUm9ib3RvLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgZm9udC13ZWlnaHQ6IDMwMCA0MDA7XG59XG5cbi8qIFBhbGV0dGU6XG4gICBncm91bmQgICMxMjE4MUYgICBydWxlcyAgIzI2MzEzQlxuICAgdGV4dCAgICAjRUFFRUYyIChwcmltYXJ5KSAvICM4Q0EwQUUgKG11dGVkKVxuICAgVGhlIHRlbXBlcmF0dXJlIGNvbG91cnMgbGl2ZSBpbiByaWJib24uanMgKHRoZSBjdXJ2ZSBpcyBjb2xvdXJlZCBieSB0aGVcbiAgIHRlbXBlcmF0dXJlIHNjYWxhciwgbm90IGJ5IENTUykuICovXG46cm9vdCB7XG4gIC0tZ3JvdW5kOiAjMTIxODFGO1xuICAtLXJ1bGU6ICMyNjMxM0I7XG4gIC0tdGV4dDogI0VBRUVGMjtcbiAgLS1tdXRlZDogIzhDQTBBRTtcbiAgLS1tb25vOiAnU0ZNb25vLVJlZ3VsYXInLCAnU0YgTW9ubycsICdNZW5sbycsICdDb25zb2xhcycsICdMaWJlcmF0aW9uIE1vbm8nLCBtb25vc3BhY2U7XG59XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncm91bmQpO1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuLyogZHZoIChub3QgdmgpOiBvbiBpT1MgU2FmYXJpIHZoIHJlc29sdmVzIHRvIHRoZSB0YWxsIHZpZXdwb3J0IGFuZCBwYXJrcyB0aGVcbiAgIGJvdHRvbSBvZiB0aGUgbGF5b3V0IHVuZGVyIHRoZSBVUkwgYmFyLiAqL1xuI2FwcCB7XG4gIG1pbi1oZWlnaHQ6IDEwMGR2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMjhweDtcbiAgbWF4LXdpZHRoOiA3MjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDMycHggMjBweDtcbn1cblxuLyogVGhlIHJpYmJvbiBhbmQgaXRzIHJlYWRvdXQgc2hhcmUgb25lIGZsZXggY29sdW1uIHNvIGEgbW9iaWxlIGxvY2F0aW9uIHJvdGF0aW9uXG4gICBzbGlkZXMgdGhlbSBhcyBhIHNpbmdsZSB1bml0LiBJdCBjYXJyaWVzIHRoZSBzYW1lIDI4cHggZ2FwICNhcHAgdXNlZCB0byBwdXRcbiAgIGJldHdlZW4gdGhlIHJpYmJvbiBhbmQgdGhlIHJlYWRvdXQsIHNvIHdyYXBwaW5nIHRoZW0gaXMgbGF5b3V0LXRyYW5zcGFyZW50LiAqL1xuI3dlYXRoZXJDYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyOHB4O1xufVxuXG4vKiBSaWJib246IHRoZSBTVkcgc2NhbGVzIHRvIHRoZSBjb2x1bW4gd2lkdGggdmlhIHRoZSB2aWV3Qm94LCBzbyBhbGwgNzIgaG91cnNcbiAgIGFyZSBvbiBzY3JlZW4gYXQgYW55IHdpZHRoIGRvd24gdG8gMzgwcHggd2l0aG91dCBzY3JvbGwgb3IgcGFuLiAqL1xuI3JpYmJvbldyYXAge1xuICB3aWR0aDogMTAwJTtcbn1cblxuI3JpYmJvblN2ZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuLnJpYmJvbi1jdXJ2ZSB7XG4gIHN0cm9rZS13aWR0aDogMi41O1xuICBzdHJva2UtbGluZWNhcDogcm91bmQ7XG4gIHN0cm9rZS1saW5lam9pbjogcm91bmQ7XG59XG5cbi8qIERheSBib3VuZGFyeSBoYWlybGluZXMgYXQgaG91cnMgMjQgYW5kIDQ4LiAqL1xuLnJpYmJvbi1oYWlybGluZSB7XG4gIHN0cm9rZTogdmFyKC0tcnVsZSk7XG4gIHN0cm9rZS13aWR0aDogMTtcbn1cblxuLnJpYmJvbi10aWNrIHtcbiAgZmlsbDogdmFyKC0tbXV0ZWQpO1xuICBmb250LWZhbWlseTogdmFyKC0tbW9ubyk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cblxuLnJpYmJvbi1ub3dsaW5lIHtcbiAgc3Ryb2tlOiB2YXIoLS1tdXRlZCk7XG4gIHN0cm9rZS13aWR0aDogMTtcbiAgc3Ryb2tlLWRhc2hhcnJheTogMiAzO1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbi5yaWJib24tZG90IHtcbiAgc3Ryb2tlOiB2YXIoLS1ncm91bmQpO1xuICBzdHJva2Utd2lkdGg6IDI7XG59XG5cbi8qIFJlYWRvdXQgYmVuZWF0aCB0aGUgY3VydmUuICovXG4jcmVhZG91dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qIExvY2F0aW9uIG5hbWUgcGFpcmVkIHdpdGggdGhlIEMvRiB1bml0IHN3aXRjaCBvbiBvbmUgY2VudGVyZWQgcm93LiAqL1xuI2xvY2F0aW9uUm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbn1cblxuI2xvY2F0aW9uTmFtZSB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tb25vKTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xufVxuXG4vKiBTZWdtZW50ZWQgQy9GIHRvZ2dsZTogYSBjb21wYWN0IHBpbGwsIHRoZSBhY3RpdmUgb3B0aW9uIGZpbGxlZCB3aXRoIHRoZSBydWxlXG4gICBjb2xvdXIuIERpc3BsYXktb25seSDigJQgZmxpcHMgdGhlIHRlbXBlcmF0dXJlIHJlYWRvdXRzIGJldHdlZW4gwrBDIGFuZCDCsEYuICovXG4jdW5pdFN3aXRjaCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXJ1bGUpO1xuICBib3JkZXItcmFkaXVzOiA5OTlweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnVuaXRPcHQge1xuICBmb250LWZhbWlseTogdmFyKC0tbW9ubyk7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgcGFkZGluZzogM3B4IDlweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udW5pdE9wdC5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ydWxlKTtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xufVxuXG4vKiBTYXZlZC1sb2NhdGlvbiBuYXZpZ2F0aW9uOiBwcmV2L25leHQgY2hldnJvbnMgZmxhbmtpbmcgdGhlIGRvdCByb3cuIFRoZSB3aG9sZVxuICAgcm93IGlzIGhpZGRlbiBhdCBhIGNvdW50IG9mIG9uZSAoYSBzaW5nbGUgbG9jYXRpb24gbmVlZHMgbm8gYWZmb3JkYW5jZSk7IHRoZVxuICAgYXJyb3dzIGFyZSBkZXNrdG9wLW9ubHkgYW5kIGRyb3Agb3V0IGF0IOKJpDQ4MHB4IHdoZXJlIHN3aXBlIHRha2VzIG92ZXIuICovXG4ubmF2Um93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgbWFyZ2luOiA0cHggMCAycHg7XG59XG5cbi5uYXZSb3cuaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmFycm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYXJyb3c6aG92ZXIge1xuICBjb2xvcjogI0VBRUVGMjtcbn1cblxuLmFycm93IHN2ZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAxNHB4O1xufVxuXG4vKiBTYXZlZC1sb2NhdGlvbiBkb3RzOiBvbmUgcGVyIHNhdmVkIGxvY2F0aW9uLCB0aGUgYWN0aXZlIG9uZSBmaWxsZWQuICovXG4jZG90Um93IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiBvZmZzZXQgcGFyZW50IGZvciB0aGUgZGVza3RvcCByZW1vdmUgcG9wb3ZlciAqL1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDhweDtcbn1cblxuLmRvdCB7XG4gIHdpZHRoOiA4cHg7XG4gIGhlaWdodDogOHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICMyRTNCNDU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XG59XG5cbi5kb3QuYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI0VBRUVGMjtcbn1cblxuLyogRGVza3RvcCByZW1vdmUtY29uZmlybWF0aW9uIHBvcG92ZXIsIGFuY2hvcmVkIGFib3ZlIHRoZSBsb25nLXByZXNzZWQgZG90LlxuICAgVG91Y2gga2VlcHMgdGhlIG5hdGl2ZSBjb25maXJtOyB0aGlzIGlzIHRoZSBtb3VzZS9wZW4gcGF0aC4gKi9cbi5yZW1vdmVQb3BvdmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IGNhbGMoMTAwJSArIDEwcHgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIHotaW5kZXg6IDIwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgcGFkZGluZzogMTBweCAxMnB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncm91bmQpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ydWxlKTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3gtc2hhZG93OiAwIDZweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC40NSk7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi8qIERvd253YXJkIHBvaW50ZXIgYXJyb3csIGJvcmRlcmVkOiBvdXRlciB0cmlhbmdsZSBpbiB0aGUgcnVsZSBjb2xvdXIgd2l0aCBhblxuICAgaW5uZXIgZ3JvdW5kLWZpbGxlZCB0cmlhbmdsZSBsYWlkIGEgcGl4ZWwgaGlnaGVyIG9uIHRvcCBvZiBpdC4gKi9cbi5yZW1vdmVQb3BvdmVyOjpiZWZvcmUsXG4ucmVtb3ZlUG9wb3Zlcjo6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbn1cblxuLnJlbW92ZVBvcG92ZXI6OmJlZm9yZSB7XG4gIHRvcDogMTAwJTtcbiAgYm9yZGVyLXdpZHRoOiA3cHggN3B4IDAgN3B4O1xuICBib3JkZXItY29sb3I6IHZhcigtLXJ1bGUpIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xufVxuXG4ucmVtb3ZlUG9wb3Zlcjo6YWZ0ZXIge1xuICB0b3A6IGNhbGMoMTAwJSAtIDFweCk7XG4gIGJvcmRlci13aWR0aDogNnB4IDZweCAwIDZweDtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ncm91bmQpIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xufVxuXG4ucmVtb3ZlUG9wb3Zlci1uYW1lIHtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5yZW1vdmVQb3BvdmVyLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDhweDtcbn1cblxuLnJlbW92ZVBvcG92ZXItY2FuY2VsLFxuLnJlbW92ZVBvcG92ZXItZGVsZXRlIHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogNXB4IDEycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXJ1bGUpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnJlbW92ZVBvcG92ZXItY2FuY2VsIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcbn1cblxuLnJlbW92ZVBvcG92ZXItY2FuY2VsOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xufVxuXG4ucmVtb3ZlUG9wb3Zlci1kZWxldGUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10ZXh0KTtcbiAgY29sb3I6IHZhcigtLWdyb3VuZCk7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tdGV4dCk7XG59XG5cbi5yZW1vdmVQb3BvdmVyLWRlbGV0ZTpob3ZlciB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjkyKTtcbn1cblxuLyogUm9ib3RvIExpZ2h0IDQwcHggZm9yIHRoZSByZWFkaW5nLiAqL1xuI2N1cnJlbnRUZW1wIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjE7XG59XG5cbiNjdXJyZW50Q29uZGl0aW9uIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG59XG5cbi8qIEZvdXItdXAgc3RhdCByb3c6IHRleHQgbGFiZWxzLCBubyBpY29ucy4gKi9cbiNzdGF0Um93IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgZ2FwOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMTRweDtcbn1cblxuLnN0YXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDRweDtcbiAgcGFkZGluZzogMTJweCA2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXJ1bGUpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5zdGF0LWxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1vbm8pO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XG59XG5cbi5zdGF0LXZhbHVlIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG59XG5cbi8qIFNlYXJjaCBmb3JtLiAqL1xuI3NlYXJjaEZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4vKiBIb2xkcyB0aGUgaW5wdXQgYW5kIGl0cyBhdXRvY29tcGxldGUgZHJvcGRvd247IHBvc2l0aW9uOiByZWxhdGl2ZSBhbmNob3JzXG4gICAjc3VnZ2VzdGlvbnMgYmVuZWF0aCB0aGUgaW5wdXQuIGZsZXg6IDEgc28gdGhlIHBhaXIgZmlsbHMgdGhlIHJvdyB0aGUgd2F5IHRoZVxuICAgYmFyZSBpbnB1dCB1c2VkIHRvLiAqL1xuI3NlYXJjaElucHV0V3JhcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleDogMTtcbiAgbWluLXdpZHRoOiAwO1xufVxuXG4jc2VhcmNoSW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTJweCAxNHB4O1xuICBmb250LWZhbWlseTogdmFyKC0tbW9ubyk7XG4gIGZvbnQtc2l6ZTogMTZweDsgLyogMTZweCBzbyBpT1MgU2FmYXJpIGRvZXNuJ3QgYXV0by16b29tIHRoZSBpbnB1dCBvbiBmb2N1cyAqL1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ydWxlKTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4jc2VhcmNoSW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcbn1cblxuI3NlYXJjaElucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1tdXRlZCk7XG59XG5cbi8qIFdoaWxlIHRoZSBkcm9wZG93biBpcyBvcGVuIHRoZSBpbnB1dCdzIGJvdHRvbSBjb3JuZXJzIHNxdWFyZSBvZmYgYW5kIGl0c1xuICAgYm90dG9tIGVkZ2UgZHJvcHMgb3V0LCBzbyBpdCByZWFkcyBhcyBvbmUgYXR0YWNoZWQgc3VyZmFjZSB3aXRoICNzdWdnZXN0aW9ucy4gKi9cbiNzZWFyY2hGb3JtLnN1Z2dlc3RpbmcgI3NlYXJjaElucHV0IHtcbiAgYm9yZGVyLXJhZGl1czogOHB4IDhweCAwIDA7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4vKiBGYWlsZWQgbG9va3VwOiByZWRkZW5lZCBib3JkZXIsIGN1cnJlbnQgcmliYm9uIGxlZnQgaW4gcGxhY2UuICovXG4jc2VhcmNoRm9ybS5pbnZhbGlkICNzZWFyY2hJbnB1dCB7XG4gIGJvcmRlci1jb2xvcjogI0MyNDUyRDtcbn1cblxuLyogQXV0b2NvbXBsZXRlIGRyb3Bkb3duOiBoYW5ncyBvZmYgdGhlIGJvdHRvbSBvZiB0aGUgaW5wdXQsIG1hdGNoaW5nIGl0cyB3aWR0aFxuICAgYW5kIGNvbnRpbnVpbmcgaXRzIGZvY3VzZWQgYm9yZGVyIGludG8gYSBib3R0b20tcm91bmRlZCBwYW5lbC4gKi9cbiNzdWdnZXN0aW9ucyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDAlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMTA7XG4gIG1heC1oZWlnaHQ6IDI0MHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncm91bmQpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1tdXRlZCk7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCA4cHggOHB4O1xufVxuXG4jc3VnZ2VzdGlvbnMuaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnN1Z2dlc3Rpb24taXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgZ2FwOiA4cHg7XG4gIHBhZGRpbmc6IDEwcHggMTRweDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1vbm8pO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zdWdnZXN0aW9uLWl0ZW06aG92ZXIsXG4uc3VnZ2VzdGlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tcnVsZSk7XG59XG5cbi5zdWdnZXN0aW9uLWNpdHkge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbn1cblxuLnN1Z2dlc3Rpb24tY291bnRyeSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcbn1cblxuI3NlYXJjaEJ1dHRvbiB7XG4gIHBhZGRpbmc6IDEycHggMjBweDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1vbm8pO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGNvbG9yOiB2YXIoLS1ncm91bmQpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10ZXh0KTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI3NlYXJjaEJ1dHRvbjpob3ZlciB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjkyKTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICNhcHAge1xuICAgIGdhcDogMjJweDtcbiAgICBwYWRkaW5nOiAyNHB4IDE2cHg7XG4gIH1cblxuICAjd2VhdGhlckNhcmQge1xuICAgIGdhcDogMjJweDtcbiAgfVxuXG4gIC8qIFN3aXBlLWRpcmVjdGlvbi1hd2FyZSBzbGlkZSBvbiBhIGNvbW1pdHRlZCBsb2NhdGlvbiByb3RhdGlvbi4gZmF2b3VyaXRlcy5qc1xuICAgICBhZGRzIC5zbGlkZS1uZXh0IChzd2lwZSBsZWZ0IC0+IG5leHQpIG9yIC5zbGlkZS1wcmV2IChzd2lwZSByaWdodCAtPiBwcmV2KVxuICAgICB0byAjd2VhdGhlckNhcmQsIHRoZW4gcm90YXRlcy4gVGhlIGNhcmQgZmFkZXMgdG8gbm90aGluZyBhdCB0aGUga2V5ZnJhbWUnc1xuICAgICBtaWRwb2ludCwgd2hpY2ggbWFza3MgdGhlIGZvcmVjYXN0IHN3YXA6IHJlbmRlclJpYmJvbigpIHJlYnVpbGRzIGludG8gdGhpc1xuICAgICBzYW1lIGNhcmQgd2hpbGUgaXQncyBpbnZpc2libGUsIHNvIHRoZSBuZXcgY3VydmUgc2xpZGVzIGluIHJhdGhlciB0aGFuXG4gICAgIHNuYXBwaW5nLiBEZXNrdG9wIHJvdGF0ZXMgdmlhIHRoZSBhcnJvd3MgYW5kIG5ldmVyIGdldHMgdGhlIGNsYXNzLiAqL1xuICAjd2VhdGhlckNhcmQuc2xpZGUtbmV4dCB7XG4gICAgYW5pbWF0aW9uOiBjYXJkU2xpZGVOZXh0IDI4MG1zIGVhc2Utb3V0O1xuICB9XG5cbiAgI3dlYXRoZXJDYXJkLnNsaWRlLXByZXYge1xuICAgIGFuaW1hdGlvbjogY2FyZFNsaWRlUHJldiAyODBtcyBlYXNlLW91dDtcbiAgfVxuXG4gIEBrZXlmcmFtZXMgY2FyZFNsaWRlTmV4dCB7XG4gICAgMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IG9wYWNpdHk6IDE7IH1cbiAgICA0MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTQycHgpOyBvcGFjaXR5OiAwOyB9XG4gICAgNjAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDQycHgpOyBvcGFjaXR5OiAwOyB9XG4gICAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgb3BhY2l0eTogMTsgfVxuICB9XG5cbiAgQGtleWZyYW1lcyBjYXJkU2xpZGVQcmV2IHtcbiAgICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgb3BhY2l0eTogMTsgfVxuICAgIDQwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0MnB4KTsgb3BhY2l0eTogMDsgfVxuICAgIDYwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNDJweCk7IG9wYWNpdHk6IDA7IH1cbiAgICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyBvcGFjaXR5OiAxOyB9XG4gIH1cblxuICAvKiBNb2JpbGUgbmF2aWdhdGVzIGJ5IHN3aXBlOyBkcm9wIHRoZSBhcnJvd3MgYnV0IGtlZXAgdGhlIGRvdHMuICovXG4gIC5hcnJvdyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gICNzdGF0Um93IHtcbiAgICBnYXA6IDhweDtcbiAgfVxuXG4gIC5zdGF0IHtcbiAgICBwYWRkaW5nOiAxMHB4IDRweDtcbiAgfVxuXG4gIC5zdGF0LXZhbHVlIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbn1cblxuLyogUmVzcGVjdCBhIHJlZHVjZWQtbW90aW9uIHByZWZlcmVuY2U6IHJvdGF0ZSBpbnN0YW50bHksIG5vIHNsaWRlLiBmYXZvdXJpdGVzLmpzXG4gICBzdGlsbCBhZGRzIHRoZSBjbGFzcywgYnV0IHdpdGggdGhlIGFuaW1hdGlvbiBzdXBwcmVzc2VkIGFuaW1hdGlvbmVuZCBuZXZlclxuICAgZmlyZXMsIHNvIGl0cyBzZXRUaW1lb3V0IGZhbGxiYWNrIGlzIHdoYXQgc3RyaXBzIHRoZSBjbGFzcyBiYWNrIG9mZi4gKi9cbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XG4gICN3ZWF0aGVyQ2FyZC5zbGlkZS1uZXh0LFxuICAjd2VhdGhlckNhcmQuc2xpZGUtcHJldiB7XG4gICAgYW5pbWF0aW9uOiBub25lO1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsNENBQWdDO0VBQ2hDLG9CQUFvQjtBQUN0Qjs7QUFFQTs7OztxQ0FJcUM7QUFDckM7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsc0ZBQXNGO0FBQ3hGOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsU0FBUztFQUNULHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsNENBQTRDO0VBQzVDLG1DQUFtQztBQUNyQzs7QUFFQTs0Q0FDNEM7QUFDNUM7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsU0FBUztFQUNULGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBOztnRkFFZ0Y7QUFDaEY7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtvRUFDb0U7QUFDcEU7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLHNCQUFzQjtBQUN4Qjs7QUFFQSwrQ0FBK0M7QUFDL0M7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBLCtCQUErQjtB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LGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRTtJQUNFLFNBQVM7SUFDVCxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxTQUFTO0VBQ1g7O0VBRUE7Ozs7O3lFQUt1RTtFQUN2RTtJQUNFLHVDQUF1QztFQUN6Qzs7RUFFQTtJQUNFLHVDQUF1QztFQUN6Qzs7RUFFQTtJQUNFLEtBQUssd0JBQXdCLEVBQUUsVUFBVSxFQUFFO0lBQzNDLE1BQU0sNEJBQTRCLEVBQUUsVUFBVSxFQUFFO0lBQ2hELE1BQU0sMkJBQTJCLEVBQUUsVUFBVSxFQUFFO0lBQy9DLE9BQU8sd0JBQXdCLEVBQUUsVUFBVSxFQUFFO0VBQy9DOztFQUVBO0lBQ0UsS0FBSyx3QkFBd0IsRUFBRSxVQUFVLEVBQUU7SUFDM0MsTUFBTSwyQkFBMkIsRUFBRSxVQUFVLEVBQUU7SUFDL0MsTUFBTSw0QkFBNEIsRUFBRSxVQUFVLEVBQUU7SUFDaEQsT0FBTyx3QkFBd0IsRUFBRSxVQUFVLEVBQUU7RUFDL0M7O0VBRUEsa0VBQWtFO0VBQ2xFO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsUUFBUTtFQUNWOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBOzt5RUFFeUU7QUFDekU7RUFDRTs7SUFFRSxlQUFlO0VBQ2pCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICBzcmM6IHVybCgnLi9Sb2JvdG8tUmVndWxhci50dGYnKTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDAgNDAwO1xcbn1cXG5cXG4vKiBQYWxldHRlOlxcbiAgIGdyb3VuZCAgIzEyMTgxRiAgIHJ1bGVzICAjMjYzMTNCXFxuICAgdGV4dCAgICAjRUFFRUYyIChwcmltYXJ5KSAvICM4Q0EwQUUgKG11dGVkKVxcbiAgIFRoZSB0ZW1wZXJhdHVyZSBjb2xvdXJzIGxpdmUgaW4gcmliYm9uLmpzICh0aGUgY3VydmUgaXMgY29sb3VyZWQgYnkgdGhlXFxuICAgdGVtcGVyYXR1cmUgc2NhbGFyLCBub3QgYnkgQ1NTKS4gKi9cXG46cm9vdCB7XFxuICAtLWdyb3VuZDogIzEyMTgxRjtcXG4gIC0tcnVsZTogIzI2MzEzQjtcXG4gIC0tdGV4dDogI0VBRUVGMjtcXG4gIC0tbXV0ZWQ6ICM4Q0EwQUU7XFxuICAtLW1vbm86ICdTRk1vbm8tUmVndWxhcicsICdTRiBNb25vJywgJ01lbmxvJywgJ0NvbnNvbGFzJywgJ0xpYmVyYXRpb24gTW9ubycsIG1vbm9zcGFjZTtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWdyb3VuZCk7XFxuICBjb2xvcjogdmFyKC0tdGV4dCk7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHN5c3RlbS11aSwgc2Fucy1zZXJpZjtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbn1cXG5cXG4vKiBkdmggKG5vdCB2aCk6IG9uIGlPUyBTYWZhcmkgdmggcmVzb2x2ZXMgdG8gdGhlIHRhbGwgdmlld3BvcnQgYW5kIHBhcmtzIHRoZVxcbiAgIGJvdHRvbSBvZiB0aGUgbGF5b3V0IHVuZGVyIHRoZSBVUkwgYmFyLiAqL1xcbiNhcHAge1xcbiAgbWluLWhlaWdodDogMTAwZHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMjhweDtcXG4gIG1heC13aWR0aDogNzIwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDMycHggMjBweDtcXG59XFxuXFxuLyogVGhlIHJpYmJvbiBhbmQgaXRzIHJlYWRvdXQgc2hhcmUgb25lIGZsZXggY29sdW1uIHNvIGEgbW9iaWxlIGxvY2F0aW9uIHJvdGF0aW9uXFxuICAgc2xpZGVzIHRoZW0gYXMgYSBzaW5nbGUgdW5pdC4gSXQgY2FycmllcyB0aGUgc2FtZSAyOHB4IGdhcCAjYXBwIHVzZWQgdG8gcHV0XFxuICAgYmV0d2VlbiB0aGUgcmliYm9uIGFuZCB0aGUgcmVhZG91dCwgc28gd3JhcHBpbmcgdGhlbSBpcyBsYXlvdXQtdHJhbnNwYXJlbnQuICovXFxuI3dlYXRoZXJDYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAyOHB4O1xcbn1cXG5cXG4vKiBSaWJib246IHRoZSBTVkcgc2NhbGVzIHRvIHRoZSBjb2x1bW4gd2lkdGggdmlhIHRoZSB2aWV3Qm94LCBzbyBhbGwgNzIgaG91cnNcXG4gICBhcmUgb24gc2NyZWVuIGF0IGFueSB3aWR0aCBkb3duIHRvIDM4MHB4IHdpdGhvdXQgc2Nyb2xsIG9yIHBhbi4gKi9cXG4jcmliYm9uV3JhcCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI3JpYmJvblN2ZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi5yaWJib24tY3VydmUge1xcbiAgc3Ryb2tlLXdpZHRoOiAyLjU7XFxuICBzdHJva2UtbGluZWNhcDogcm91bmQ7XFxuICBzdHJva2UtbGluZWpvaW46IHJvdW5kO1xcbn1cXG5cXG4vKiBEYXkgYm91bmRhcnkgaGFpcmxpbmVzIGF0IGhvdXJzIDI0IGFuZCA0OC4gKi9cXG4ucmliYm9uLWhhaXJsaW5lIHtcXG4gIHN0cm9rZTogdmFyKC0tcnVsZSk7XFxuICBzdHJva2Utd2lkdGg6IDE7XFxufVxcblxcbi5yaWJib24tdGljayB7XFxuICBmaWxsOiB2YXIoLS1tdXRlZCk7XFxuICBmb250LWZhbWlseTogdmFyKC0tbW9ubyk7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbn1cXG5cXG4ucmliYm9uLW5vd2xpbmUge1xcbiAgc3Ryb2tlOiB2YXIoLS1tdXRlZCk7XFxuICBzdHJva2Utd2lkdGg6IDE7XFxuICBzdHJva2UtZGFzaGFycmF5OiAyIDM7XFxuICBvcGFjaXR5OiAwLjc7XFxufVxcblxcbi5yaWJib24tZG90IHtcXG4gIHN0cm9rZTogdmFyKC0tZ3JvdW5kKTtcXG4gIHN0cm9rZS13aWR0aDogMjtcXG59XFxuXFxuLyogUmVhZG91dCBiZW5lYXRoIHRoZSBjdXJ2ZS4gKi9cXG4jcmVhZG91dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDRweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLyogTG9jYXRpb24gbmFtZSBwYWlyZWQgd2l0aCB0aGUgQy9GIHVuaXQgc3dpdGNoIG9uIG9uZSBjZW50ZXJlZCByb3cuICovXFxuI2xvY2F0aW9uUm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbiNsb2NhdGlvbk5hbWUge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1vbm8pO1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xcbn1cXG5cXG4vKiBTZWdtZW50ZWQgQy9GIHRvZ2dsZTogYSBjb21wYWN0IHBpbGwsIHRoZSBhY3RpdmUgb3B0aW9uIGZpbGxlZCB3aXRoIHRoZSBydWxlXFxuICAgY29sb3VyLiBEaXNwbGF5LW9ubHkg4oCUIGZsaXBzIHRoZSB0ZW1wZXJhdHVyZSByZWFkb3V0cyBiZXR3ZWVuIMKwQyBhbmQgwrBGLiAqL1xcbiN1bml0U3dpdGNoIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ydWxlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnVuaXRPcHQge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1vbm8pO1xcbiAgZm9udC1zaXplOiAxMXB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gIHBhZGRpbmc6IDNweCA5cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi51bml0T3B0LmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ydWxlKTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcXG59XFxuXFxuLyogU2F2ZWQtbG9jYXRpb24gbmF2aWdhdGlvbjogcHJldi9uZXh0IGNoZXZyb25zIGZsYW5raW5nIHRoZSBkb3Qgcm93LiBUaGUgd2hvbGVcXG4gICByb3cgaXMgaGlkZGVuIGF0IGEgY291bnQgb2Ygb25lIChhIHNpbmdsZSBsb2NhdGlvbiBuZWVkcyBubyBhZmZvcmRhbmNlKTsgdGhlXFxuICAgYXJyb3dzIGFyZSBkZXNrdG9wLW9ubHkgYW5kIGRyb3Agb3V0IGF0IOKJpDQ4MHB4IHdoZXJlIHN3aXBlIHRha2VzIG92ZXIuICovXFxuLm5hdlJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgbWFyZ2luOiA0cHggMCAycHg7XFxufVxcblxcbi5uYXZSb3cuaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5hcnJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYXJyb3c6aG92ZXIge1xcbiAgY29sb3I6ICNFQUVFRjI7XFxufVxcblxcbi5hcnJvdyBzdmcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMTRweDtcXG59XFxuXFxuLyogU2F2ZWQtbG9jYXRpb24gZG90czogb25lIHBlciBzYXZlZCBsb2NhdGlvbiwgdGhlIGFjdGl2ZSBvbmUgZmlsbGVkLiAqL1xcbiNkb3RSb3cge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiBvZmZzZXQgcGFyZW50IGZvciB0aGUgZGVza3RvcCByZW1vdmUgcG9wb3ZlciAqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogOHB4O1xcbn1cXG5cXG4uZG90IHtcXG4gIHdpZHRoOiA4cHg7XFxuICBoZWlnaHQ6IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQ6ICMyRTNCNDU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcXG59XFxuXFxuLmRvdC5hY3RpdmUge1xcbiAgYmFja2dyb3VuZDogI0VBRUVGMjtcXG59XFxuXFxuLyogRGVza3RvcCByZW1vdmUtY29uZmlybWF0aW9uIHBvcG92ZXIsIGFuY2hvcmVkIGFib3ZlIHRoZSBsb25nLXByZXNzZWQgZG90LlxcbiAgIFRvdWNoIGtlZXBzIHRoZSBuYXRpdmUgY29uZmlybTsgdGhpcyBpcyB0aGUgbW91c2UvcGVuIHBhdGguICovXFxuLnJlbW92ZVBvcG92ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiBjYWxjKDEwMCUgKyAxMHB4KTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXG4gIHotaW5kZXg6IDIwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA4cHg7XFxuICBwYWRkaW5nOiAxMHB4IDEycHg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncm91bmQpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcnVsZSk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBib3gtc2hhZG93OiAwIDZweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC40NSk7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4vKiBEb3dud2FyZCBwb2ludGVyIGFycm93LCBib3JkZXJlZDogb3V0ZXIgdHJpYW5nbGUgaW4gdGhlIHJ1bGUgY29sb3VyIHdpdGggYW5cXG4gICBpbm5lciBncm91bmQtZmlsbGVkIHRyaWFuZ2xlIGxhaWQgYSBwaXhlbCBoaWdoZXIgb24gdG9wIG9mIGl0LiAqL1xcbi5yZW1vdmVQb3BvdmVyOjpiZWZvcmUsXFxuLnJlbW92ZVBvcG92ZXI6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgd2lkdGg6IDA7XFxuICBoZWlnaHQ6IDA7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbn1cXG5cXG4ucmVtb3ZlUG9wb3Zlcjo6YmVmb3JlIHtcXG4gIHRvcDogMTAwJTtcXG4gIGJvcmRlci13aWR0aDogN3B4IDdweCAwIDdweDtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcnVsZSkgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5yZW1vdmVQb3BvdmVyOjphZnRlciB7XFxuICB0b3A6IGNhbGMoMTAwJSAtIDFweCk7XFxuICBib3JkZXItd2lkdGg6IDZweCA2cHggMCA2cHg7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWdyb3VuZCkgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5yZW1vdmVQb3BvdmVyLW5hbWUge1xcbiAgY29sb3I6IHZhcigtLXRleHQpO1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbn1cXG5cXG4ucmVtb3ZlUG9wb3Zlci1hY3Rpb25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDhweDtcXG59XFxuXFxuLnJlbW92ZVBvcG92ZXItY2FuY2VsLFxcbi5yZW1vdmVQb3BvdmVyLWRlbGV0ZSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIHBhZGRpbmc6IDVweCAxMnB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcnVsZSk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5yZW1vdmVQb3BvdmVyLWNhbmNlbCB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcXG59XFxuXFxuLnJlbW92ZVBvcG92ZXItY2FuY2VsOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcXG59XFxuXFxuLnJlbW92ZVBvcG92ZXItZGVsZXRlIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXRleHQpO1xcbiAgY29sb3I6IHZhcigtLWdyb3VuZCk7XFxuICBib3JkZXItY29sb3I6IHZhcigtLXRleHQpO1xcbn1cXG5cXG4ucmVtb3ZlUG9wb3Zlci1kZWxldGU6aG92ZXIge1xcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOTIpO1xcbn1cXG5cXG4vKiBSb2JvdG8gTGlnaHQgNDBweCBmb3IgdGhlIHJlYWRpbmcuICovXFxuI2N1cnJlbnRUZW1wIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBsaW5lLWhlaWdodDogMS4xO1xcbn1cXG5cXG4jY3VycmVudENvbmRpdGlvbiB7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBjb2xvcjogdmFyKC0tdGV4dCk7XFxufVxcblxcbi8qIEZvdXItdXAgc3RhdCByb3c6IHRleHQgbGFiZWxzLCBubyBpY29ucy4gKi9cXG4jc3RhdFJvdyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gIGdhcDogMTBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luLXRvcDogMTRweDtcXG59XFxuXFxuLnN0YXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA0cHg7XFxuICBwYWRkaW5nOiAxMnB4IDZweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXJ1bGUpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4uc3RhdC1sYWJlbCB7XFxuICBmb250LWZhbWlseTogdmFyKC0tbW9ubyk7XFxuICBmb250LXNpemU6IDEwcHg7XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcXG59XFxuXFxuLnN0YXQtdmFsdWUge1xcbiAgZm9udC1zaXplOiAxN3B4O1xcbiAgY29sb3I6IHZhcigtLXRleHQpO1xcbn1cXG5cXG4vKiBTZWFyY2ggZm9ybS4gKi9cXG4jc2VhcmNoRm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi8qIEhvbGRzIHRoZSBpbnB1dCBhbmQgaXRzIGF1dG9jb21wbGV0ZSBkcm9wZG93bjsgcG9zaXRpb246IHJlbGF0aXZlIGFuY2hvcnNcXG4gICAjc3VnZ2VzdGlvbnMgYmVuZWF0aCB0aGUgaW5wdXQuIGZsZXg6IDEgc28gdGhlIHBhaXIgZmlsbHMgdGhlIHJvdyB0aGUgd2F5IHRoZVxcbiAgIGJhcmUgaW5wdXQgdXNlZCB0by4gKi9cXG4jc2VhcmNoSW5wdXRXcmFwIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGZsZXg6IDE7XFxuICBtaW4td2lkdGg6IDA7XFxufVxcblxcbiNzZWFyY2hJbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDEycHggMTRweDtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tb25vKTtcXG4gIGZvbnQtc2l6ZTogMTZweDsgLyogMTZweCBzbyBpT1MgU2FmYXJpIGRvZXNuJ3QgYXV0by16b29tIHRoZSBpbnB1dCBvbiBmb2N1cyAqL1xcbiAgY29sb3I6IHZhcigtLXRleHQpO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ydWxlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuI3NlYXJjaElucHV0OjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xcbn1cXG5cXG4jc2VhcmNoSW5wdXQ6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tbXV0ZWQpO1xcbn1cXG5cXG4vKiBXaGlsZSB0aGUgZHJvcGRvd24gaXMgb3BlbiB0aGUgaW5wdXQncyBib3R0b20gY29ybmVycyBzcXVhcmUgb2ZmIGFuZCBpdHNcXG4gICBib3R0b20gZWRnZSBkcm9wcyBvdXQsIHNvIGl0IHJlYWRzIGFzIG9uZSBhdHRhY2hlZCBzdXJmYWNlIHdpdGggI3N1Z2dlc3Rpb25zLiAqL1xcbiNzZWFyY2hGb3JtLnN1Z2dlc3RpbmcgI3NlYXJjaElucHV0IHtcXG4gIGJvcmRlci1yYWRpdXM6IDhweCA4cHggMCAwO1xcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi8qIEZhaWxlZCBsb29rdXA6IHJlZGRlbmVkIGJvcmRlciwgY3VycmVudCByaWJib24gbGVmdCBpbiBwbGFjZS4gKi9cXG4jc2VhcmNoRm9ybS5pbnZhbGlkICNzZWFyY2hJbnB1dCB7XFxuICBib3JkZXItY29sb3I6ICNDMjQ1MkQ7XFxufVxcblxcbi8qIEF1dG9jb21wbGV0ZSBkcm9wZG93bjogaGFuZ3Mgb2ZmIHRoZSBib3R0b20gb2YgdGhlIGlucHV0LCBtYXRjaGluZyBpdHMgd2lkdGhcXG4gICBhbmQgY29udGludWluZyBpdHMgZm9jdXNlZCBib3JkZXIgaW50byBhIGJvdHRvbS1yb3VuZGVkIHBhbmVsLiAqL1xcbiNzdWdnZXN0aW9ucyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEwMCU7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB6LWluZGV4OiAxMDtcXG4gIG1heC1oZWlnaHQ6IDI0MHB4O1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIGJhY2tncm91bmQ6IHZhcigtLWdyb3VuZCk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1tdXRlZCk7XFxuICBib3JkZXItdG9wOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMCAwIDhweCA4cHg7XFxufVxcblxcbiNzdWdnZXN0aW9ucy5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnN1Z2dlc3Rpb24taXRlbSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcbiAgZ2FwOiA4cHg7XFxuICBwYWRkaW5nOiAxMHB4IDE0cHg7XFxuICBmb250LWZhbWlseTogdmFyKC0tbW9ubyk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zdWdnZXN0aW9uLWl0ZW06aG92ZXIsXFxuLnN1Z2dlc3Rpb24taXRlbS5zZWxlY3RlZCB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ydWxlKTtcXG59XFxuXFxuLnN1Z2dlc3Rpb24tY2l0eSB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjb2xvcjogdmFyKC0tdGV4dCk7XFxufVxcblxcbi5zdWdnZXN0aW9uLWNvdW50cnkge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcXG59XFxuXFxuI3NlYXJjaEJ1dHRvbiB7XFxuICBwYWRkaW5nOiAxMnB4IDIwcHg7XFxuICBmb250LWZhbWlseTogdmFyKC0tbW9ubyk7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgY29sb3I6IHZhcigtLWdyb3VuZCk7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS10ZXh0KTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3NlYXJjaEJ1dHRvbjpob3ZlciB7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45Mik7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xcbiAgI2FwcCB7XFxuICAgIGdhcDogMjJweDtcXG4gICAgcGFkZGluZzogMjRweCAxNnB4O1xcbiAgfVxcblxcbiAgI3dlYXRoZXJDYXJkIHtcXG4gICAgZ2FwOiAyMnB4O1xcbiAgfVxcblxcbiAgLyogU3dpcGUtZGlyZWN0aW9uLWF3YXJlIHNsaWRlIG9uIGEgY29tbWl0dGVkIGxvY2F0aW9uIHJvdGF0aW9uLiBmYXZvdXJpdGVzLmpzXFxuICAgICBhZGRzIC5zbGlkZS1uZXh0IChzd2lwZSBsZWZ0IC0+IG5leHQpIG9yIC5zbGlkZS1wcmV2IChzd2lwZSByaWdodCAtPiBwcmV2KVxcbiAgICAgdG8gI3dlYXRoZXJDYXJkLCB0aGVuIHJvdGF0ZXMuIFRoZSBjYXJkIGZhZGVzIHRvIG5vdGhpbmcgYXQgdGhlIGtleWZyYW1lJ3NcXG4gICAgIG1pZHBvaW50LCB3aGljaCBtYXNrcyB0aGUgZm9yZWNhc3Qgc3dhcDogcmVuZGVyUmliYm9uKCkgcmVidWlsZHMgaW50byB0aGlzXFxuICAgICBzYW1lIGNhcmQgd2hpbGUgaXQncyBpbnZpc2libGUsIHNvIHRoZSBuZXcgY3VydmUgc2xpZGVzIGluIHJhdGhlciB0aGFuXFxuICAgICBzbmFwcGluZy4gRGVza3RvcCByb3RhdGVzIHZpYSB0aGUgYXJyb3dzIGFuZCBuZXZlciBnZXRzIHRoZSBjbGFzcy4gKi9cXG4gICN3ZWF0aGVyQ2FyZC5zbGlkZS1uZXh0IHtcXG4gICAgYW5pbWF0aW9uOiBjYXJkU2xpZGVOZXh0IDI4MG1zIGVhc2Utb3V0O1xcbiAgfVxcblxcbiAgI3dlYXRoZXJDYXJkLnNsaWRlLXByZXYge1xcbiAgICBhbmltYXRpb246IGNhcmRTbGlkZVByZXYgMjgwbXMgZWFzZS1vdXQ7XFxuICB9XFxuXFxuICBAa2V5ZnJhbWVzIGNhcmRTbGlkZU5leHQge1xcbiAgICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgb3BhY2l0eTogMTsgfVxcbiAgICA0MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTQycHgpOyBvcGFjaXR5OiAwOyB9XFxuICAgIDYwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0MnB4KTsgb3BhY2l0eTogMDsgfVxcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyBvcGFjaXR5OiAxOyB9XFxuICB9XFxuXFxuICBAa2V5ZnJhbWVzIGNhcmRTbGlkZVByZXYge1xcbiAgICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgb3BhY2l0eTogMTsgfVxcbiAgICA0MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNDJweCk7IG9wYWNpdHk6IDA7IH1cXG4gICAgNjAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC00MnB4KTsgb3BhY2l0eTogMDsgfVxcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyBvcGFjaXR5OiAxOyB9XFxuICB9XFxuXFxuICAvKiBNb2JpbGUgbmF2aWdhdGVzIGJ5IHN3aXBlOyBkcm9wIHRoZSBhcnJvd3MgYnV0IGtlZXAgdGhlIGRvdHMuICovXFxuICAuYXJyb3cge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgI3N0YXRSb3cge1xcbiAgICBnYXA6IDhweDtcXG4gIH1cXG5cXG4gIC5zdGF0IHtcXG4gICAgcGFkZGluZzogMTBweCA0cHg7XFxuICB9XFxuXFxuICAuc3RhdC12YWx1ZSB7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gIH1cXG59XFxuXFxuLyogUmVzcGVjdCBhIHJlZHVjZWQtbW90aW9uIHByZWZlcmVuY2U6IHJvdGF0ZSBpbnN0YW50bHksIG5vIHNsaWRlLiBmYXZvdXJpdGVzLmpzXFxuICAgc3RpbGwgYWRkcyB0aGUgY2xhc3MsIGJ1dCB3aXRoIHRoZSBhbmltYXRpb24gc3VwcHJlc3NlZCBhbmltYXRpb25lbmQgbmV2ZXJcXG4gICBmaXJlcywgc28gaXRzIHNldFRpbWVvdXQgZmFsbGJhY2sgaXMgd2hhdCBzdHJpcHMgdGhlIGNsYXNzIGJhY2sgb2ZmLiAqL1xcbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XFxuICAjd2VhdGhlckNhcmQuc2xpZGUtbmV4dCxcXG4gICN3ZWF0aGVyQ2FyZC5zbGlkZS1wcmV2IHtcXG4gICAgYW5pbWF0aW9uOiBub25lO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIGZhdm91cml0ZXMuanMg4oCUIHNhdmVkIGxvY2F0aW9ucyB3aXRoIHN3aXBlLXRvLXJvdGF0ZS5cbi8vXG4vLyBUaGUgc2VhcmNoIGZvcm0gaXMgdGhlIGFkZCBwYXRoOiBhIHN1Y2Nlc3NmdWwgbG9va3VwIGFwcGVuZHMgdGhlIHF1ZXJ5IHRvIGFcbi8vIHBlcnNpc3RlZCBsaXN0IGFuZCBzd2l0Y2hlcyB0byBpdDsgYSBmYWlsZWQgb25lIGxlYXZlcyB0aGUgbGlzdCB1bnRvdWNoZWRcbi8vIChsb2dpYy5qcydzIGludmFsaWRJbnB1dCgpIGhhcyBhbHJlYWR5IHJlZGRlbmVkIHRoZSBpbnB1dCkuIEEgcm93IG9mIGRvdHNcbi8vIHVuZGVyIHRoZSBsb2NhdGlvbiBuYW1lIHNob3dzIGhvdyBtYW55IGxvY2F0aW9ucyBhcmUgc2F2ZWQgYW5kIHdoaWNoIGlzXG4vLyBjdXJyZW50LiBBIGhvcml6b250YWwgc3dpcGUgYW55d2hlcmUgb24gdGhlIHNjcmVlbiByb3RhdGVzIHRocm91Z2ggdGhlbVxuLy8gKHdyYXBwaW5nIGF0IGJvdGggZW5kcyksIGFzIGRvIHRoZSBkZXNrdG9wIHByZXYvbmV4dCBhcnJvd3M7IGNsaWNraW5nIGEgZG90XG4vLyBvcGVucyBhIGNvbmZpcm1hdGlvbiB0byByZW1vdmUgdGhhdCBsb2NhdGlvbi5cbi8vXG4vLyBTdGF0ZSBwZXJzaXN0cyB0byBsb2NhbFN0b3JhZ2UgdW5kZXIgYSBgd2VhdGhlcmFwcF9gIGtleSwgbWF0Y2hpbmcgdGhlXG4vLyBjb252ZW50aW9uIHVzZWQgYWNyb3NzIHRoZSBvdGhlciByZXBvcyDigJQgbm8gSW5kZXhlZERCLCBubyBjb29raWVzLCBubyBiYWNrZW5kLFxuLy8gbm8gbmV3IGRlcGVuZGVuY2llcy4gRmV0Y2ggc3RyYXRlZ3kgaXMgbGF6eSAoZmV0Y2ggb24gYXJyaXZhbCk6IGEgc3dpcGUgbGVhdmVzXG4vLyB0aGUgcHJldmlvdXMgcmliYm9uIG9uIHNjcmVlbiB1bnRpbCB0aGUgbmV3IGZvcmVjYXN0IHJlc29sdmVzLCByZXVzaW5nIHRoZVxuLy8gc2FtZSBrZWVwLWN1cnJlbnQtcmliYm9uIGJlaGF2aW91ciBhIHNlYXJjaCBhbHJlYWR5IGhhcywgc28gYSBzd2lwZSBuZXZlclxuLy8gbGFuZHMgb24gYSBzcGlubmVyICh0aGVyZSBpcyBubyBzcGlubmVyKSBvciBhIGJsYW5rIHNjcmVlbi5cbi8vXG4vLyBFdmVyeSBsaXN0ZW5lciBoZXJlIGlzIHdpcmVkIGV4YWN0bHkgb25jZSwgZnJvbSBpbml0RmF2b3VyaXRlcygpIGF0IGJvb3RzdHJhcFxuLy8g4oCUIG5ldmVyIGZyb20gdGhlIHJlbmRlciBwYXRoIOKAlCBzbyBub3RoaW5nIG11bHRpcGxpZXMgYWNyb3NzIGZldGNoZXMuXG5cbmltcG9ydCB7IGZvcmVjYXN0TG9naWMgfSBmcm9tICcuL2xvZ2ljLmpzJztcblxuY29uc3QgS0VZID0gJ3dlYXRoZXJhcHBfc2F2ZWRMb2NhdGlvbnMnO1xuY29uc3QgREVGQVVMVF9RVUVSWSA9ICc5ODA1Mic7XG5jb25zdCBTV0lQRV9USFJFU0hPTEQgPSA1MDsgLy8gcHggb2YgaG9yaXpvbnRhbCB0cmF2ZWwgdG8gY29tbWl0IGEgcm90YXRpb25cbmNvbnN0IFNMSURFX01TID0gMjgwOyAvLyBjYXJkIHNsaWRlIGR1cmF0aW9uIOKAlCBtaXJyb3Igb2YgdGhlIENTUyBrZXlmcmFtZVxuXG4vLyBTYXZlZCBsb2NhdGlvbiBxdWVyeSBzdHJpbmdzLCBpbiBvcmRlci4gY3VycmVudEluZGV4IHBvaW50cyBhdCB0aGUgYWN0aXZlIG9uZS5cbmxldCBsb2NhdGlvbnMgPSBbXTtcbmxldCBjdXJyZW50SW5kZXggPSAwO1xuXG5sZXQgZG90Um93OyAvLyAjZG90Um93LCBjYWNoZWQgb25jZSBieSBpbml0RmF2b3VyaXRlcygpXG5sZXQgbmF2Um93OyAvLyAubmF2Um93IHdyYXBwaW5nIHRoZSBkb3RzIGFuZCB0aGUgcHJldi9uZXh0IGFycm93c1xubGV0IGNhcmQ7IC8vICN3ZWF0aGVyQ2FyZCDigJQgdGhlIHJpYmJvbityZWFkb3V0IHVuaXQgdGhhdCBzbGlkZXMgb24gcm90YXRpb25cbmxldCBzbGlkZVRpbWVvdXQgPSBudWxsO1xuXG4vLyBTd2lwZSB0cmFja2luZy5cbmxldCB0b3VjaFN0YXJ0WCA9IG51bGw7XG5sZXQgdG91Y2hTdGFydFkgPSBudWxsO1xubGV0IHN3aXBlQWN0aXZlID0gZmFsc2U7XG5cbi8vIFRoZSBzaW5nbGUgZGVza3RvcCByZW1vdmUtY29uZmlybWF0aW9uIHBvcG92ZXIsIG9yIG51bGwuIE9ubHkgb25lIGlzIG9wZW4gYXRcbi8vIGEgdGltZTsgYSBuZXcgb3BlbiBjbG9zZXMgYW55IHByaW9yIG9uZSBmaXJzdC5cbmxldCBvcGVuUG9wb3ZlciA9IG51bGw7XG5cbmZ1bmN0aW9uIGxvYWQoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmF3ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oS0VZKTtcbiAgICBpZiAocmF3KSB7XG4gICAgICBjb25zdCBwYXJzZWQgPSBKU09OLnBhcnNlKHJhdyk7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShwYXJzZWQpKSB7XG4gICAgICAgIGxvY2F0aW9ucyA9IHBhcnNlZC5maWx0ZXIoKHEpID0+IHR5cGVvZiBxID09PSAnc3RyaW5nJyAmJiBxLnRyaW0oKS5sZW5ndGgpO1xuICAgICAgfVxuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIGxvY2F0aW9ucyA9IFtdO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNhdmUoKSB7XG4gIHRyeSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oS0VZLCBKU09OLnN0cmluZ2lmeShsb2NhdGlvbnMpKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIFN0b3JhZ2UgZGlzYWJsZWQvZnVsbCDigJQgdGhlIGluLW1lbW9yeSBsaXN0IHN0aWxsIHdvcmtzIGZvciB0aGlzIHNlc3Npb24uXG4gIH1cbn1cblxuZnVuY3Rpb24gY2xlYXIobm9kZSkge1xuICB3aGlsZSAobm9kZS5maXJzdENoaWxkKSB7IG5vZGUucmVtb3ZlQ2hpbGQobm9kZS5maXJzdENoaWxkKTsgfVxufVxuXG4vLyBGZXRjaCB0aGUgYWN0aXZlIGxvY2F0aW9uLCBvciB0aGUgaGFyZCBkZWZhdWx0IHdoZW4gdGhlIGxpc3QgaXMgZW1wdHkuIExhenk6XG4vLyB0aGUgcmVuZGVyIHBhdGgga2VlcHMgdGhlIHByZXZpb3VzIHJpYmJvbiB1bnRpbCB0aGlzIHJlc29sdmVzLlxuZnVuY3Rpb24gc2hvd0N1cnJlbnQoKSB7XG4gIGlmIChsb2NhdGlvbnMubGVuZ3RoKSB7XG4gICAgZm9yZWNhc3RMb2dpYy5mdXR1cmVBUElDYWxscyhsb2NhdGlvbnNbY3VycmVudEluZGV4XSk7XG4gIH0gZWxzZSB7XG4gICAgZm9yZWNhc3RMb2dpYy5mdXR1cmVBUElDYWxscyhERUZBVUxUX1FVRVJZKTtcbiAgfVxufVxuXG4vLyBSZWRyYXcgdGhlIGRvdCByb3cuIEhpZGRlbiBhdCBhIGNvdW50IG9mIG9uZSAoYSBzaW5nbGUgbG9jYXRpb24gbmVlZHMgbm9cbi8vIGFmZm9yZGFuY2UpIGFuZCB3aGVuIGVtcHR5ICh0aGUgZGVmYXVsdCBmYWxsYmFjayBpcyBub3QgYSBzYXZlZCBsb2NhdGlvbikuXG5mdW5jdGlvbiByZW5kZXJEb3RzKCkge1xuICBpZiAoIWRvdFJvdykgeyByZXR1cm47IH1cbiAgY2xvc2VQb3BvdmVyKCk7IC8vIGEgcmVkcmF3IGRyb3BzIHRoZSBkb3QgdGhlIHBvcG92ZXIgd2FzIGFuY2hvcmVkIHRvXG4gIGNsZWFyKGRvdFJvdyk7XG5cbiAgLy8gR2F0ZSB0aGUgd2hvbGUgLm5hdlJvdyAoZG90cyArIGFycm93cykgdG9nZXRoZXIsIHNvIHRoZSBkZXNrdG9wIGFycm93cyBzaGFyZVxuICAvLyB0aGUgZG90cycgdmlzaWJpbGl0eSBydWxlIGFuZCBuZXZlciBkYW5nbGUgYmVzaWRlIGFuIGVtcHR5IHJvdy5cbiAgY29uc3QgZ2F0ZSA9IG5hdlJvdyB8fCBkb3RSb3c7XG4gIGNvbnN0IG4gPSBsb2NhdGlvbnMubGVuZ3RoO1xuICBpZiAobiA8PSAxKSB7XG4gICAgZ2F0ZS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICByZXR1cm47XG4gIH1cbiAgZ2F0ZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgIGNvbnN0IGRvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRvdC5jbGFzc05hbWUgPSAnZG90JyArIChpID09PSBjdXJyZW50SW5kZXggPyAnIGFjdGl2ZScgOiAnJyk7XG4gICAgZG90LnNldEF0dHJpYnV0ZSgncm9sZScsICdidXR0b24nKTtcbiAgICBkb3Quc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgbG9jYXRpb25zW2ldKTtcbiAgICB3aXJlRG90KGRvdCwgaSk7XG4gICAgZG90Um93LmFwcGVuZENoaWxkKGRvdCk7XG4gIH1cbn1cblxuLy8gQSBzaW5nbGUgY2xpY2sgb24gYSBkb3Qgb3BlbnMgdGhlIGRlbGV0ZSBjb25maXJtYXRpb24gZm9yIHRoYXQgbG9jYXRpb246XG4vLyB0aGUgbmF0aXZlIGNvbmZpcm0gb24gdG91Y2gsIHRoZSBhbmNob3JlZCBpbi1wYWdlIHBvcG92ZXIgb24gZGVza3RvcC9tb3VzZVxuLy8gKGNvbmZpcm1SZW1vdmUgYnJhbmNoZXMgb24gcG9pbnRlclR5cGUpLiBUYXAtdG8tc2VsZWN0IGlzIGludGVudGlvbmFsbHlcbi8vIGRyb3BwZWQg4oCUIHJvdGF0ZSgpLCBkcml2ZW4gYnkgdGhlIHN3aXBlIGdlc3R1cmUgYW5kIHRoZSBkZXNrdG9wIHByZXYvbmV4dFxuLy8gYXJyb3dzLCBpcyB0aGUgb25seSB3YXkgdG8gY2hhbmdlIHRoZSBhY3RpdmUgbG9jYXRpb24uIFRoZSBjbGljayBldmVudCBpcyBhXG4vLyBQb2ludGVyRXZlbnQsIHNvIGl0cyBwb2ludGVyVHlwZSBwaWNrcyB0aGUgdG91Y2ggdnMgZGVza3RvcCBicmFuY2ggZGlyZWN0bHkuXG5mdW5jdGlvbiB3aXJlRG90KGRvdCwgaSkge1xuICBkb3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNvbmZpcm1SZW1vdmUoaSwgZG90LCBlLnBvaW50ZXJUeXBlIHx8ICdtb3VzZScpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY29uZmlybVJlbW92ZShpLCBkb3QsIHBvaW50ZXJUeXBlKSB7XG4gIGlmIChpIDwgMCB8fCBpID49IGxvY2F0aW9ucy5sZW5ndGgpIHsgcmV0dXJuOyB9XG4gIC8vIERlc2t0b3AgKG1vdXNlL3BlbikgZ2V0cyB0aGUgYW5jaG9yZWQgaW4tcGFnZSBwb3BvdmVyOyB0b3VjaCBrZWVwcyB0aGVcbiAgLy8gbmF0aXZlIGNvbmZpcm0gdW50b3VjaGVkLlxuICBpZiAocG9pbnRlclR5cGUgJiYgcG9pbnRlclR5cGUgIT09ICd0b3VjaCcgJiYgZG90KSB7XG4gICAgb3BlblJlbW92ZVBvcG92ZXIoaSwgZG90KTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHdpbmRvdy5jb25maXJtKCdSZW1vdmUgJyArIGxvY2F0aW9uc1tpXSArICc/JykpIHtcbiAgICByZW1vdmVMb2NhdGlvbihpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBvblBvcG92ZXJLZXlkb3duKGUpIHtcbiAgaWYgKGUua2V5ID09PSAnRXNjYXBlJykge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjbG9zZVBvcG92ZXIoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBvbk91dHNpZGVQb2ludGVyKGUpIHtcbiAgaWYgKG9wZW5Qb3BvdmVyICYmICFvcGVuUG9wb3Zlci5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICBjbG9zZVBvcG92ZXIoKTtcbiAgfVxufVxuXG4vLyBUZWFyIGRvd24gdGhlIHNpbmdsZSBvcGVuIHBvcG92ZXIgYW5kIGl0cyBkb2N1bWVudC1sZXZlbCBsaXN0ZW5lcnMuIFNhZmUgdG9cbi8vIGNhbGwgd2hlbiBub3RoaW5nIGlzIG9wZW4uXG5mdW5jdGlvbiBjbG9zZVBvcG92ZXIoKSB7XG4gIGlmICghb3BlblBvcG92ZXIpIHsgcmV0dXJuOyB9XG4gIG9wZW5Qb3BvdmVyLnJlbW92ZSgpO1xuICBvcGVuUG9wb3ZlciA9IG51bGw7XG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvblBvcG92ZXJLZXlkb3duLCB0cnVlKTtcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCBvbk91dHNpZGVQb2ludGVyLCB0cnVlKTtcbn1cblxuLy8gQSBzbWFsbCBjb25maXJtYXRpb24gcG9wb3ZlciBhbmNob3JlZCBhYm92ZSB0aGUgY2xpY2tlZCBkb3QsIGluc2lkZVxuLy8gI2RvdFJvdy4gRGVsZXRlIHJlbW92ZXMgdGhlIGxvY2F0aW9uOyBDYW5jZWwsIEVzY2FwZSwgb3IgYW4gb3V0c2lkZSBjbGlja1xuLy8gZGlzbWlzc2VzIHdpdGhvdXQgY2hhbmdlcy4gT25seSBvbmUgaXMgZXZlciBvcGVuIChvcGVuUmVtb3ZlUG9wb3ZlciBjbG9zZXMgYW55XG4vLyBwcmlvciBvbmUgZmlyc3QpLlxuZnVuY3Rpb24gb3BlblJlbW92ZVBvcG92ZXIoaSwgZG90KSB7XG4gIGNsb3NlUG9wb3ZlcigpO1xuXG4gIGNvbnN0IHBvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwb3AuY2xhc3NOYW1lID0gJ3JlbW92ZVBvcG92ZXInO1xuICBwb3Auc2V0QXR0cmlidXRlKCdyb2xlJywgJ2RpYWxvZycpO1xuICBwb3Auc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgJ1JlbW92ZSAnICsgbG9jYXRpb25zW2ldKTtcblxuICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5hbWUuY2xhc3NOYW1lID0gJ3JlbW92ZVBvcG92ZXItbmFtZSc7XG4gIG5hbWUudGV4dENvbnRlbnQgPSBsb2NhdGlvbnNbaV07XG5cbiAgY29uc3QgYWN0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBhY3Rpb25zLmNsYXNzTmFtZSA9ICdyZW1vdmVQb3BvdmVyLWFjdGlvbnMnO1xuXG4gIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBjYW5jZWxCdG4udHlwZSA9ICdidXR0b24nO1xuICBjYW5jZWxCdG4uY2xhc3NOYW1lID0gJ3JlbW92ZVBvcG92ZXItY2FuY2VsJztcbiAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG4gIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlUG9wb3Zlcik7XG5cbiAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGRlbGV0ZUJ0bi50eXBlID0gJ2J1dHRvbic7XG4gIGRlbGV0ZUJ0bi5jbGFzc05hbWUgPSAncmVtb3ZlUG9wb3Zlci1kZWxldGUnO1xuICBkZWxldGVCdG4udGV4dENvbnRlbnQgPSAnRGVsZXRlJztcbiAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGlkeCA9IGk7XG4gICAgY2xvc2VQb3BvdmVyKCk7XG4gICAgcmVtb3ZlTG9jYXRpb24oaWR4KTtcbiAgfSk7XG5cbiAgYWN0aW9ucy5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xuICBhY3Rpb25zLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG4gIHBvcC5hcHBlbmRDaGlsZChuYW1lKTtcbiAgcG9wLmFwcGVuZENoaWxkKGFjdGlvbnMpO1xuXG4gIGRvdFJvdy5hcHBlbmRDaGlsZChwb3ApO1xuICBvcGVuUG9wb3ZlciA9IHBvcDtcblxuICAvLyBBbmNob3IgaG9yaXpvbnRhbGx5IG92ZXIgdGhlIHRyaWdnZXJpbmcgZG90J3MgY2VudHJlIChvZmZzZXRMZWZ0IGlzIHJlbGF0aXZlXG4gIC8vIHRvICNkb3RSb3csIHdoaWNoIGlzIHRoZSBvZmZzZXQgcGFyZW50IOKAlCBzZWUgaXRzIHBvc2l0aW9uOiByZWxhdGl2ZSBydWxlKS5cbiAgcG9wLnN0eWxlLmxlZnQgPSAoZG90Lm9mZnNldExlZnQgKyBkb3Qub2Zmc2V0V2lkdGggLyAyKSArICdweCc7XG5cbiAgLy8gVGhlIGNsaWNrIChhbmQgaXRzIHBvaW50ZXJkb3duKSB0aGF0IG9wZW5lZCB0aGlzIHBvcG92ZXIgaGFzIGFscmVhZHkgZmlyZWQsXG4gIC8vIHNvIGEgY2FwdHVyZSBsaXN0ZW5lciBmb3IgdGhlIG5leHQgcG9pbnRlcmRvd24gY2xvc2VzIHRoZSBwb3BvdmVyIG9uIGFuXG4gIC8vIG91dHNpZGUgY2xpY2sgd2l0aG91dCBpbW1lZGlhdGVseSBzd2FsbG93aW5nIGl0cyBvd24gb3BlbmluZyBldmVudC5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uUG9wb3ZlcktleWRvd24sIHRydWUpO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIG9uT3V0c2lkZVBvaW50ZXIsIHRydWUpO1xufVxuXG4vLyBTbGlkZSB0aGUgcmliYm9uK3JlYWRvdXQgY2FyZCBpbiB0aGUgc3dpcGUgZGlyZWN0aW9uIG9uIGEgY29tbWl0dGVkIHJvdGF0aW9uLlxuLy8gTW9iaWxlIG9ubHkg4oCUIHRoZSBkZXNrdG9wIHByZXYvbmV4dCBhcnJvd3MgdXBkYXRlIGluc3RhbnRseSwgc28gdGhlIGNsYXNzIGlzXG4vLyBhZGRlZCBvbmx5IHdoZW4gdGhlIOKJpDQ4MHB4IGJyZWFrcG9pbnQgaXMgYWN0aXZlLiBUaGUga2V5ZnJhbWUgZmFkZXMgdGhlIGNhcmRcbi8vIHRvIG5vdGhpbmcgYXQgaXRzIG1pZHBvaW50IChzZWUgI3dlYXRoZXJDYXJkLnNsaWRlLSogaW4gc3R5bGUuY3NzKSwgd2hpY2hcbi8vIG1hc2tzIHRoZSBmb3JlY2FzdCBzd2FwOiBzaG93Q3VycmVudCgpJ3MgZmV0Y2ggcmVzb2x2ZXMgYW5kIHJlbmRlclJpYmJvbigpXG4vLyByZWJ1aWxkcyBpbnRvIHRoaXMgc2FtZSBjYXJkLCBzbyB0aGUgbmV3IGN1cnZlIHNsaWRlcyBiYWNrIGluIHJhdGhlciB0aGFuXG4vLyBzbmFwcGluZy4gRGlyZWN0aW9uLWF3YXJlOiBvdXRnb2luZyBjb250ZW50IGxlYXZlcyB0b3dhcmQgdGhlIHN3aXBlLCBpbmNvbWluZ1xuLy8gZW50ZXJzIGZyb20gdGhlIG9wcG9zaXRlIGVkZ2UuXG5mdW5jdGlvbiBwbGF5U2xpZGUoZGlyKSB7XG4gIGlmICghY2FyZCkgeyByZXR1cm47IH1cbiAgaWYgKCF3aW5kb3cubWF0Y2hNZWRpYSB8fCAhd2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDQ4MHB4KScpLm1hdGNoZXMpIHtcbiAgICByZXR1cm47IC8vIGRlc2t0b3Agcm90YXRlcyB2aWEgdGhlIGFycm93cywgd2l0aG91dCB0aGUgc2xpZGVcbiAgfVxuICBjYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ3NsaWRlLW5leHQnLCAnc2xpZGUtcHJldicpO1xuICB2b2lkIGNhcmQub2Zmc2V0V2lkdGg7IC8vIHJlZmxvdyBzbyBhIHJhcGlkIHNlY29uZCBzd2lwZSByZXN0YXJ0cyB0aGUgYW5pbWF0aW9uXG4gIGNhcmQuY2xhc3NMaXN0LmFkZChkaXIgPCAwID8gJ3NsaWRlLXByZXYnIDogJ3NsaWRlLW5leHQnKTtcblxuICAvLyBvbkNhcmRBbmltRW5kIHN0cmlwcyB0aGUgY2xhc3Mgd2hlbiB0aGUga2V5ZnJhbWUgZmluaXNoZXM7IHRoaXMgaXMgdGhlXG4gIC8vIGZhbGxiYWNrIGZvciB0aGUgcmVkdWNlZC1tb3Rpb24gcGF0aCwgd2hlcmUgdGhlIGFuaW1hdGlvbiBpcyBzdXBwcmVzc2VkIGFuZFxuICAvLyBhbmltYXRpb25lbmQgbmV2ZXIgZmlyZXMuXG4gIGlmIChzbGlkZVRpbWVvdXQpIHsgY2xlYXJUaW1lb3V0KHNsaWRlVGltZW91dCk7IH1cbiAgc2xpZGVUaW1lb3V0ID0gc2V0VGltZW91dChjbGVhclNsaWRlLCBTTElERV9NUyArIDgwKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJTbGlkZSgpIHtcbiAgaWYgKHNsaWRlVGltZW91dCkgeyBjbGVhclRpbWVvdXQoc2xpZGVUaW1lb3V0KTsgc2xpZGVUaW1lb3V0ID0gbnVsbDsgfVxuICBpZiAoY2FyZCkgeyBjYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ3NsaWRlLW5leHQnLCAnc2xpZGUtcHJldicpOyB9XG59XG5cbmZ1bmN0aW9uIG9uQ2FyZEFuaW1FbmQoZSkge1xuICBpZiAoZS50YXJnZXQgIT09IGNhcmQpIHsgcmV0dXJuOyB9IC8vIGlnbm9yZSBhbnkgYnViYmxlZCBkZXNjZW5kYW50IGFuaW1hdGlvblxuICBjbGVhclNsaWRlKCk7XG59XG5cbi8vIFJvdGF0ZSB0aHJvdWdoIHRoZSBzYXZlZCBsaXN0IHdpdGggd3JhcC4gTm8tb3AgYmVsb3cgdHdvIGxvY2F0aW9ucy4gVGhlIHNsaWRlXG4vLyBjbGFzcyBnb2VzIG9uIGJlZm9yZSB0aGUgcmVkcmF3L2ZldGNoIHNvIHRoZSBvdXRnb2luZyBjb250ZW50IGlzIGFscmVhZHlcbi8vIG1vdmluZyBhcyB0aGUgbmV3IGZvcmVjYXN0IGlzIHJlcXVlc3RlZCAocGxheVNsaWRlIGlzIGEgbm8tb3Agb2ZmIG1vYmlsZSkuXG5mdW5jdGlvbiByb3RhdGUoZGlyKSB7XG4gIGNvbnN0IG4gPSBsb2NhdGlvbnMubGVuZ3RoO1xuICBpZiAobiA8PSAxKSB7IHJldHVybjsgfVxuICBjdXJyZW50SW5kZXggPSAoY3VycmVudEluZGV4ICsgZGlyICsgbikgJSBuO1xuICBwbGF5U2xpZGUoZGlyKTtcbiAgcmVuZGVyRG90cygpO1xuICBzaG93Q3VycmVudCgpO1xufVxuXG4vLyBSZW1vdmUgYSBsb2NhdGlvbiwga2VlcGluZyBhIGNvaGVyZW50IGFjdGl2ZSBzZWxlY3Rpb246IHJlbW92aW5nIHRoZSBhY3RpdmVcbi8vIG9uZSBtb3ZlcyB0byBhIG5laWdoYm91ciByYXRoZXIgdGhhbiBsZWF2aW5nIGFuIGVtcHR5IHZpZXc7IGVtcHR5aW5nIHRoZSBsaXN0XG4vLyBmYWxscyBiYWNrIHRvIHRoZSBkZWZhdWx0LlxuZnVuY3Rpb24gcmVtb3ZlTG9jYXRpb24oaSkge1xuICBpZiAoaSA8IDAgfHwgaSA+PSBsb2NhdGlvbnMubGVuZ3RoKSB7IHJldHVybjsgfVxuICBjb25zdCB3YXNBY3RpdmUgPSAoaSA9PT0gY3VycmVudEluZGV4KTtcblxuICBsb2NhdGlvbnMuc3BsaWNlKGksIDEpO1xuICBzYXZlKCk7XG5cbiAgaWYgKGxvY2F0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICBjdXJyZW50SW5kZXggPSAwO1xuICAgIHJlbmRlckRvdHMoKTtcbiAgICBzaG93Q3VycmVudCgpOyAvLyBmYWxscyBiYWNrIHRvIERFRkFVTFRfUVVFUllcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaSA8IGN1cnJlbnRJbmRleCkge1xuICAgIGN1cnJlbnRJbmRleC0tO1xuICB9IGVsc2UgaWYgKGkgPT09IGN1cnJlbnRJbmRleCAmJiBjdXJyZW50SW5kZXggPj0gbG9jYXRpb25zLmxlbmd0aCkge1xuICAgIGN1cnJlbnRJbmRleCA9IGxvY2F0aW9ucy5sZW5ndGggLSAxO1xuICB9XG5cbiAgcmVuZGVyRG90cygpO1xuICBpZiAod2FzQWN0aXZlKSB7IHNob3dDdXJyZW50KCk7IH1cbn1cblxuZnVuY3Rpb24gb25Ub3VjaFN0YXJ0KGUpIHtcbiAgaWYgKGUudG91Y2hlcy5sZW5ndGggIT09IDEpIHsgc3dpcGVBY3RpdmUgPSBmYWxzZTsgcmV0dXJuOyB9XG4gIC8vIExlYXZlIHRoZSBzZWFyY2ggZmllbGQncyBvd24gdG91Y2ggaGFuZGxpbmcgKGN1cnNvciBwbGFjZW1lbnQpIGFsb25lLlxuICBpZiAoZS50YXJnZXQgJiYgZS50YXJnZXQuY2xvc2VzdCAmJiBlLnRhcmdldC5jbG9zZXN0KCcjc2VhcmNoRm9ybScpKSB7XG4gICAgc3dpcGVBY3RpdmUgPSBmYWxzZTtcbiAgICByZXR1cm47XG4gIH1cbiAgdG91Y2hTdGFydFggPSBlLnRvdWNoZXNbMF0uY2xpZW50WDtcbiAgdG91Y2hTdGFydFkgPSBlLnRvdWNoZXNbMF0uY2xpZW50WTtcbiAgc3dpcGVBY3RpdmUgPSB0cnVlO1xufVxuXG5mdW5jdGlvbiBvblRvdWNoRW5kKGUpIHtcbiAgaWYgKCFzd2lwZUFjdGl2ZSkgeyByZXR1cm47IH1cbiAgc3dpcGVBY3RpdmUgPSBmYWxzZTtcblxuICBjb25zdCB0ID0gZS5jaGFuZ2VkVG91Y2hlcyAmJiBlLmNoYW5nZWRUb3VjaGVzWzBdO1xuICBpZiAoIXQpIHsgcmV0dXJuOyB9XG5cbiAgY29uc3QgZHggPSB0LmNsaWVudFggLSB0b3VjaFN0YXJ0WDtcbiAgY29uc3QgZHkgPSB0LmNsaWVudFkgLSB0b3VjaFN0YXJ0WTtcblxuICAvLyBDb21taXQgb25seSBvbiBhIGRlY2lzaXZlbHkgaG9yaXpvbnRhbCBnZXN0dXJlLCBzbyBhIHZlcnRpY2FsIHBhZ2Ugc2Nyb2xsXG4gIC8vICh8ZHl8ID49IHxkeHwpIGlzIG5ldmVyIGhpamFja2VkLlxuICBpZiAoTWF0aC5hYnMoZHgpID4gU1dJUEVfVEhSRVNIT0xEICYmIE1hdGguYWJzKGR4KSA+IE1hdGguYWJzKGR5KSkge1xuICAgIHJvdGF0ZShkeCA8IDAgPyAxIDogLTEpOyAvLyBzd2lwZSBsZWZ0IC0+IG5leHQsIHN3aXBlIHJpZ2h0IC0+IHByZXZpb3VzXG4gIH1cbn1cblxuZnVuY3Rpb24gd2lyZUdlc3R1cmVzKCkge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgb25Ub3VjaFN0YXJ0LCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgb25Ub3VjaEVuZCwgeyBwYXNzaXZlOiB0cnVlIH0pO1xufVxuXG4vLyBEZXNrdG9wIHByZXYvbmV4dCBhcnJvd3MgZHJpdmUgdGhlIHNhbWUgcm90YXRlKCkgdGhlIHN3aXBlIGdlc3R1cmUgZG9lcywgc29cbi8vIGJvdGggcGF0aHMgc2hhcmUgb25lIGNvdW50ZXIuIFdpcmVkIG9uY2UgZnJvbSBpbml0RmF2b3VyaXRlcygpLlxuZnVuY3Rpb24gd2lyZUFycm93cygpIHtcbiAgY29uc3QgcHJldiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZQcmV2Jyk7XG4gIGNvbnN0IG5leHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2TmV4dCcpO1xuICBpZiAocHJldikgeyBwcmV2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcm90YXRlKC0xKSk7IH1cbiAgaWYgKG5leHQpIHsgbmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHJvdGF0ZSgxKSk7IH1cbn1cblxuLy8gQXBwZW5kIGEgc3VjY2Vzc2Z1bGx5IGxvb2tlZC11cCBsb2NhdGlvbiBhbmQgc3dpdGNoIHRvIGl0LiBDYWxsZWQgZnJvbSB0aGVcbi8vIHNlYXJjaCBzdWJtaXQgaGFuZGxlciBBRlRFUiB0aGUgZmV0Y2ggcmVzb2x2ZXMsIHNvIHRoZSBmb3JlY2FzdCBpcyBhbHJlYWR5XG4vLyByZW5kZXJlZCDigJQgdGhpcyBvbmx5IHVwZGF0ZXMgdGhlIHNhdmVkIGxpc3QgYW5kIHRoZSBkb3RzLCBuZXZlciByZS1mZXRjaGVzLlxuLy8gQSBkdXBsaWNhdGUgcXVlcnkgc3dpdGNoZXMgdG8gdGhlIGV4aXN0aW5nIGVudHJ5IGluc3RlYWQgb2YgYWRkaW5nIGEgc2Vjb25kLlxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2F0aW9uKHF1ZXJ5KSB7XG4gIGNvbnN0IHEgPSBTdHJpbmcocXVlcnkpLnRyaW0oKTtcbiAgaWYgKCFxKSB7IHJldHVybjsgfVxuXG4gIGNvbnN0IGV4aXN0aW5nID0gbG9jYXRpb25zLmluZGV4T2YocSk7XG4gIGlmIChleGlzdGluZyAhPT0gLTEpIHtcbiAgICBjdXJyZW50SW5kZXggPSBleGlzdGluZztcbiAgfSBlbHNlIHtcbiAgICBsb2NhdGlvbnMucHVzaChxKTtcbiAgICBjdXJyZW50SW5kZXggPSBsb2NhdGlvbnMubGVuZ3RoIC0gMTtcbiAgICBzYXZlKCk7XG4gIH1cbiAgcmVuZGVyRG90cygpO1xufVxuXG4vLyBCb290c3RyYXA6IGxvYWQgdGhlIHNhdmVkIGxpc3QsIHdpcmUgdGhlIHN3aXBlIGdlc3R1cmVzIG9uY2UsIGRyYXcgdGhlIGRvdHMsXG4vLyBhbmQgZmlyZSB0aGUgc2luZ2xlIGluaXRpYWwgZmV0Y2ggKHRoZSBmaXJzdCBzYXZlZCBsb2NhdGlvbiwgb3IgdGhlIGRlZmF1bHRcbi8vIHdoZW4gbm9uZSBhcmUgc2F2ZWQpLiBpbmRleC5qcyBjYWxscyB0aGlzIG9uY2UsIGFmdGVyIHRoZSBET00gaXMgYXBwZW5kZWQuXG5leHBvcnQgZnVuY3Rpb24gaW5pdEZhdm91cml0ZXMoKSB7XG4gIGxvYWQoKTtcbiAgZG90Um93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RvdFJvdycpO1xuICBuYXZSb3cgPSBkb3RSb3cgPyBkb3RSb3cucGFyZW50RWxlbWVudCA6IG51bGw7XG4gIGNhcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VhdGhlckNhcmQnKTtcbiAgaWYgKGNhcmQpIHsgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBvbkNhcmRBbmltRW5kKTsgfVxuICB3aXJlR2VzdHVyZXMoKTtcbiAgd2lyZUFycm93cygpO1xuICBjdXJyZW50SW5kZXggPSAwO1xuICByZW5kZXJEb3RzKCk7XG4gIHNob3dDdXJyZW50KCk7XG59XG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IHJlbmRlclJpYmJvbiwgY3VycmVudEhvdXJJbmRleCB9IGZyb20gJy4vcmliYm9uLmpzJztcbmltcG9ydCB7IGZvcmVjYXN0TG9naWMgfSBmcm9tICcuL2xvZ2ljLmpzJztcbmltcG9ydCB7IGFkZExvY2F0aW9uIH0gZnJvbSAnLi9mYXZvdXJpdGVzLmpzJztcblxuLy8gR3VhcmQgc28gd2lyZUV2ZW50cygpIG9ubHkgZXZlciByZWdpc3RlcnMgb25lIHNldCBvZiBsaXN0ZW5lcnMuIFRoZSBvbGRcbi8vIGNoYW5nZVdlYXRoZXJJbmZvKCkgcmUtcmVnaXN0ZXJlZCBvbiBldmVyeSBmZXRjaCwgZG91YmxpbmcgdGhlIGhhbmRsZXIgY291bnRcbi8vIHBlciBzZWFyY2g7IHRoZSByZW5kZXIgcGF0aCAocmVuZGVyRm9yZWNhc3QpIGFuZCB0aGUgd2lyaW5nIHBhdGggKHdpcmVFdmVudHMpXG4vLyBhcmUgc3BsaXQgcHJlY2lzZWx5IHNvIHRoYXQgY2FuIG5ldmVyIGhhcHBlbiBhZ2Fpbi5cbmxldCBldmVudHNXaXJlZCA9IGZhbHNlO1xuXG4vLyBEZWJvdW5jZSB3aW5kb3cgZm9yIHRoZSBjaXR5LXN1Z2dlc3Rpb24gbG9va3VwIOKAlCBsb25nIGVub3VnaCB0aGF0IGEgcnVuIG9mXG4vLyBrZXlzdHJva2VzIGZpcmVzIG9uZSByZXF1ZXN0LCBzaG9ydCBlbm91Z2ggdG8gZmVlbCBsaXZlLlxuY29uc3QgU1VHR0VTVF9ERUJPVU5DRV9NUyA9IDMwMDtcblxuLy8gQy9GIGRpc3BsYXkgdW5pdCwgcGVyc2lzdGVkIHVuZGVyIHRoZSBzaGFyZWQgd2VhdGhlcmFwcF8gbG9jYWxTdG9yYWdlIHByZWZpeC5cbi8vIFRoaXMgaXMgZGlzcGxheS1vbmx5OiByZW5kZXJSaWJib24oKSBzdGlsbCByZWNlaXZlcyByYXcgQ2Vsc2l1cywgc28gdGhlIGN1cnZlXG4vLyBjb2xvdXJzICh0ZW1wQ29sb3VyKSBhbmQgdGhlIHktc2NhbGUgbmV2ZXIgc2hpZnQgd2hlbiB0aGUgcmVhZG91dCB1bml0IGZsaXBzLlxuY29uc3QgVU5JVF9LRVkgPSAnd2VhdGhlcmFwcF91bml0JztcbmxldCBjdXJyZW50VW5pdCA9IGxvYWRVbml0KCk7XG5cbi8vIFRoZSBsYXN0IHJlbmRlcmVkIFwibm93XCIsIGtlcHQgaW4gQ2Vsc2l1cyBzbyB0aGUgdW5pdCB0b2dnbGUgY2FuIHJlLXJlbmRlciB0aGVcbi8vIHRlbXBlcmF0dXJlIHJlYWRvdXRzIHdpdGhvdXQgd2FpdGluZyBmb3IgYW5vdGhlciBmZXRjaC5cbmxldCBsYXN0Tm93ID0gbnVsbDtcblxuLy8gQ2FjaGVkIERPTSByZWZlcmVuY2VzLCBwb3B1bGF0ZWQgb25jZSBieSBjYWNoZURvbSgpIGFmdGVyIGluZGV4LmpzIGhhcyBidWlsdFxuLy8gYW5kIGFwcGVuZGVkIHRoZSBET00uXG5sZXQgc2VhcmNoRm9ybSwgc2VhcmNoSW5wdXQsIHN1Z2dlc3Rpb25zLCBsb2NhdGlvbk5hbWUsIHVuaXRTd2l0Y2gsIGN1cnJlbnRUZW1wLFxuICBjdXJyZW50Q29uZGl0aW9uLCBmZWVsc1ZhbCwgaHVtaWRpdHlWYWwsIHJhaW5WYWwsIHdpbmRWYWw7XG5cbi8vIEF1dG9jb21wbGV0ZSBzdGF0ZS4gY3VycmVudFN1Z2dlc3Rpb25zIGhvbGRzIHRoZSByZXN1bHRzIGJhY2tpbmcgdGhlIHZpc2libGVcbi8vIGRyb3Bkb3duOyBzZWxlY3RlZEluZGV4IGlzIHRoZSBrZXlib2FyZC1oaWdobGlnaHRlZCByb3cgKC0xID0gbm9uZSkuIHJlcXVlc3RTZXFcbi8vIGRpc2NhcmRzIHN0YWxlIGFzeW5jIHJlc3VsdHMg4oCUIG9ubHkgdGhlIGxhdGVzdCBsb29rdXAgcmVuZGVycyDigJQgYW5kIGlzIGJ1bXBlZFxuLy8gb24gY2xvc2Ugc28gYW4gaW4tZmxpZ2h0IHJlcXVlc3QgY2FuJ3QgcmVvcGVuIHRoZSBkcm9wZG93biBhZnRlciBzZWxlY3Rpb24uXG5sZXQgY3VycmVudFN1Z2dlc3Rpb25zID0gW107XG5sZXQgc2VsZWN0ZWRJbmRleCA9IC0xO1xubGV0IHN1Z2dlc3REZWJvdW5jZSA9IG51bGw7XG5sZXQgcmVxdWVzdFNlcSA9IDA7XG5cbmZ1bmN0aW9uIGNhY2hlRG9tKCkge1xuICBpZiAobG9jYXRpb25OYW1lKSB7IHJldHVybjsgfSAvLyBhbHJlYWR5IGNhY2hlZFxuXG4gIHNlYXJjaEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoRm9ybScpO1xuICBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hJbnB1dCcpO1xuICBzdWdnZXN0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWdnZXN0aW9ucycpO1xuICBsb2NhdGlvbk5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9jYXRpb25OYW1lJyk7XG4gIHVuaXRTd2l0Y2ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW5pdFN3aXRjaCcpO1xuICBjdXJyZW50VGVtcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50VGVtcCcpO1xuICBjdXJyZW50Q29uZGl0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnRDb25kaXRpb24nKTtcbiAgZmVlbHNWYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmVlbHNWYWwnKTtcbiAgaHVtaWRpdHlWYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHVtaWRpdHlWYWwnKTtcbiAgcmFpblZhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYWluVmFsJyk7XG4gIHdpbmRWYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2luZFZhbCcpO1xufVxuXG4vLyBQdXJlIHJlbmRlciBwYXRoLiBmdWxmaWxsUHJvbWlzZSgpIGluIGxvZ2ljLmpzIGNhbGxzIHRoaXMgb24gZXZlcnkgcmVzb2x2ZWRcbi8vIHJlc3BvbnNlOyBpdCByZWdpc3RlcnMgTk8gbGlzdGVuZXJzLCBzbyBpdCBpcyBzYWZlIHRvIGNhbGwgcmVwZWF0ZWRseS4gRHJhd3Ncbi8vIHRoZSByaWJib24gYW5kIGZpbGxzIHRoZSByZWFkb3V0IGZyb20gdGhlIHNhbWUgXCJub3dcIiBpbmRleCwgc28gdGhlIG1hcmtlciBvblxuLy8gdGhlIGN1cnZlIGFuZCB0aGUgc3RhdCByb3cgY2FuIG5ldmVyIGRpc2FncmVlIGFib3V0IHRoZSBjdXJyZW50IGhvdXIuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyRm9yZWNhc3QoZm9yZWNhc3QpIHtcbiAgY2FjaGVEb20oKTtcblxuICByZW5kZXJSaWJib24oZm9yZWNhc3QpO1xuXG4gIGNvbnN0IGkgPSBjdXJyZW50SG91ckluZGV4KGZvcmVjYXN0KTtcbiAgY29uc3Qgbm93ID0gZm9yZWNhc3QuaG91cnNbaV07XG4gIGlmICghbm93KSB7IHJldHVybjsgfVxuXG4gIGxhc3ROb3cgPSBub3c7XG4gIGxvY2F0aW9uTmFtZS50ZXh0Q29udGVudCA9IGZvcmVjYXN0LmxvY2F0aW9uLm5hbWU7XG4gIGN1cnJlbnRDb25kaXRpb24udGV4dENvbnRlbnQgPSBub3cuY29uZGl0aW9uO1xuXG4gIGh1bWlkaXR5VmFsLnRleHRDb250ZW50ID0gbm93Lmh1bWlkaXR5ICsgJyUnO1xuICByYWluVmFsLnRleHRDb250ZW50ID0gbm93LnJhaW4gKyAnJSc7XG4gIHdpbmRWYWwudGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKG5vdy53aW5kKSArICcga20vaCc7XG5cbiAgLy8gVGVtcGVyYXR1cmUgcmVhZG91dHMgYW5kIHRoZSBhY3RpdmUgYnV0dG9uIHN0YXRlIGJvdGggY29tZSBmcm9tIHJlbmRlclRlbXBzLFxuICAvLyBzbyBhIGZldGNoIGFuZCBhIHVuaXQgdG9nZ2xlIGNhbiBuZXZlciBmb3JtYXQgdGhlIHR3byB0ZW1wZXJhdHVyZXMgZGlmZmVyZW50bHkuXG4gIHJlbmRlclRlbXBzKCk7XG59XG5cbi8vIFJlYWQgdGhlIHBlcnNpc3RlZCB1bml0LCBkZWZhdWx0aW5nIHRvIENlbHNpdXMuIEd1YXJkZWQgc28gYSBsb2NrZWQtZG93blxuLy8gbG9jYWxTdG9yYWdlIChwcml2YXRlIG1vZGUsIGRpc2FibGVkIHN0b3JhZ2UpIGZhbGxzIGJhY2sgcmF0aGVyIHRoYW4gdGhyb3dpbmcuXG5mdW5jdGlvbiBsb2FkVW5pdCgpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oVU5JVF9LRVkpID09PSAnRicgPyAnRicgOiAnQyc7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gJ0MnO1xuICB9XG59XG5cbi8vIEZvcm1hdCBhIENlbHNpdXMgc2NhbGFyIGluIHRoZSBhY3RpdmUgZGlzcGxheSB1bml0IOKAlCByb3VuZGVkLCB3aXRoIHRoZSBtYXRjaGluZ1xuLy8gwrBDL8KwRiBzdWZmaXguIENvbnZlcnNpb24gaXMgZGlzcGxheS1vbmx5OyBjYWxsZXJzIGFsd2F5cyBwYXNzIHJhdyBDZWxzaXVzLlxuZnVuY3Rpb24gZm9ybWF0VGVtcChjZWxzaXVzKSB7XG4gIGNvbnN0IHZhbHVlID0gY3VycmVudFVuaXQgPT09ICdGJyA/IGNlbHNpdXMgKiA5IC8gNSArIDMyIDogY2Vsc2l1cztcbiAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUpICsgJ8KwJyArIGN1cnJlbnRVbml0O1xufVxuXG4vLyBSZS1yZW5kZXIgdGhlIHR3byB0ZW1wZXJhdHVyZSByZWFkb3V0cyBmcm9tIHRoZSBjYWNoZWQgQ2Vsc2l1cyBcIm5vd1wiIGFuZCBzeW5jXG4vLyB0aGUgYWN0aXZlIHN0YXRlIG9uIHRoZSBDL0YgYnV0dG9ucy4gQ2FsbGVkIG9uIGV2ZXJ5IGZldGNoIGFuZCBldmVyeSB0b2dnbGUuXG5mdW5jdGlvbiByZW5kZXJUZW1wcygpIHtcbiAgaWYgKHVuaXRTd2l0Y2gpIHtcbiAgICBjb25zdCBvcHRzID0gdW5pdFN3aXRjaC5xdWVyeVNlbGVjdG9yQWxsKCcudW5pdE9wdCcpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0cy5sZW5ndGg7IGkrKykge1xuICAgICAgb3B0c1tpXS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnLCBvcHRzW2ldLmRhdGFzZXQudW5pdCA9PT0gY3VycmVudFVuaXQpO1xuICAgIH1cbiAgfVxuICBpZiAoIWxhc3ROb3cpIHsgcmV0dXJuOyB9XG4gIGN1cnJlbnRUZW1wLnRleHRDb250ZW50ID0gZm9ybWF0VGVtcChsYXN0Tm93LnRlbXApO1xuICBmZWVsc1ZhbC50ZXh0Q29udGVudCA9IGZvcm1hdFRlbXAobGFzdE5vdy5mZWVsc0xpa2UpO1xufVxuXG4vLyBTd2l0Y2ggdGhlIGRpc3BsYXkgdW5pdCwgcGVyc2lzdCBpdCwgYW5kIHJlLXJlbmRlciDigJQgbm8gcmVmZXRjaCwgdGhlIHN0b3JlZFxuLy8gQ2Vsc2l1cyBpcyBjb252ZXJ0ZWQgaW4gcGxhY2UuXG5mdW5jdGlvbiBzZXRVbml0KHVuaXQpIHtcbiAgY3VycmVudFVuaXQgPSB1bml0ID09PSAnRicgPyAnRicgOiAnQyc7XG4gIHRyeSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oVU5JVF9LRVksIGN1cnJlbnRVbml0KTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBzdG9yYWdlIHVuYXZhaWxhYmxlIOKAlCB0aGUgaW4tbWVtb3J5IHVuaXQgc3RpbGwgYXBwbGllcyAqLyB9XG4gIHJlbmRlclRlbXBzKCk7XG59XG5cbi8vIFJlZ2lzdGVycyBsaXN0ZW5lcnMgRVhBQ1RMWSBPTkNFIGZvciB0aGUgbGlmZSBvZiB0aGUgcGFnZS4gaW5kZXguanMgY2FsbHMgdGhpc1xuLy8gYXQgYm9vdHN0cmFwLCBhZnRlciB0aGUgRE9NIGlzIGFwcGVuZGVkIOKAlCBuZXZlciBmcm9tIHRoZSByZW5kZXIgcGF0aCDigJQgc28gYVxuLy8gc2VhcmNoIGZpcmVzIGV4YWN0bHkgb25lIGZldGNoIGFuZCBldmVyeSBlbGVtZW50IGNhcnJpZXMgZXhhY3RseSBvbmUgbGlzdGVuZXIuXG5leHBvcnQgZnVuY3Rpb24gd2lyZUV2ZW50cygpIHtcbiAgaWYgKGV2ZW50c1dpcmVkKSB7IHJldHVybjsgfVxuXG4gIGNhY2hlRG9tKCk7XG4gIGV2ZW50c1dpcmVkID0gdHJ1ZTtcblxuICAvLyBUaGUgYnV0dG9uIGlzIGEgcmVhbCBzdWJtaXQgYnV0dG9uLCBzbyB0aGlzIGNhdGNoZXMgYm90aCB0aGUgY2xpY2sgYW5kIHRoZVxuICAvLyBFbnRlciBrZXkgYXMgb25lIHN1Ym1pdCBldmVudC4gcHJldmVudERlZmF1bHQgc3RvcHMgdGhlIGZvcm0gcmVsb2FkaW5nIHRoZVxuICAvLyBwYWdlOyBmdXR1cmVBUElDYWxscyBkb2VzIHRoZSBzaW5nbGUgZmV0Y2guIFRoZSBzZWFyY2ggZm9ybSBpcyBhbHNvIHRoZVxuICAvLyBhZGQgcGF0aCBmb3Igc2F2ZWQgbG9jYXRpb25zOiBvbiBhIHN1Y2Nlc3NmdWwgbG9va3VwIHRoZSBxdWVyeSBpcyBhcHBlbmRlZFxuICAvLyB0byB0aGUgc2F2ZWQgbGlzdCBhbmQgYmVjb21lcyBjdXJyZW50OyBhIGZhaWxlZCBsb29rdXAgcmVzb2x2ZXMgdG8gbnVsbCBhbmRcbiAgLy8gbGVhdmVzIHRoZSBsaXN0IHVudG91Y2hlZCAoaW52YWxpZElucHV0IGhhcyBhbHJlYWR5IHJlZGRlbmVkIHRoZSBpbnB1dCkuXG4gIHNlYXJjaEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY2xvc2VTdWdnZXN0aW9ucygpO1xuICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoSW5wdXQudmFsdWU7XG4gICAgZm9yZWNhc3RMb2dpYy5mdXR1cmVBUElDYWxscyhxdWVyeSkudGhlbihmdW5jdGlvbiAoZm9yZWNhc3QpIHtcbiAgICAgIGlmIChmb3JlY2FzdCkge1xuICAgICAgICBhZGRMb2NhdGlvbihxdWVyeSk7XG4gICAgICAgIHNlYXJjaElucHV0LnZhbHVlID0gJyc7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4gIHdpcmVBdXRvY29tcGxldGUoKTtcbiAgd2lyZVVuaXRUb2dnbGUoKTtcbn1cblxuLy8gT25lIGRlbGVnYXRlZCBjbGljayBsaXN0ZW5lciBvbiB0aGUgc3dpdGNoIGRyaXZlcyBib3RoIGJ1dHRvbnMuIFdpcmVkIG9uY2UgZnJvbVxuLy8gd2lyZUV2ZW50cygpLCBzbyDigJQgbGlrZSBldmVyeSBvdGhlciBsaXN0ZW5lciDigJQgbm90aGluZyBtdWx0aXBsaWVzIGFjcm9zcyBmZXRjaGVzLlxuLy8gcmVuZGVyVGVtcHMoKSBydW5zIGltbWVkaWF0ZWx5IHRvIHJlZmxlY3QgdGhlIHBlcnNpc3RlZCB1bml0IG9uIHRoZSBidXR0b25zXG4vLyBiZWZvcmUgdGhlIGZpcnN0IGZldGNoIHJlc29sdmVzLlxuZnVuY3Rpb24gd2lyZVVuaXRUb2dnbGUoKSB7XG4gIGlmICghdW5pdFN3aXRjaCkgeyByZXR1cm47IH1cbiAgdW5pdFN3aXRjaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgY29uc3QgYnRuID0gZS50YXJnZXQgJiYgZS50YXJnZXQuY2xvc2VzdCA/IGUudGFyZ2V0LmNsb3Nlc3QoJy51bml0T3B0JykgOiBudWxsO1xuICAgIGlmICghYnRuIHx8ICF1bml0U3dpdGNoLmNvbnRhaW5zKGJ0bikpIHsgcmV0dXJuOyB9XG4gICAgc2V0VW5pdChidG4uZGF0YXNldC51bml0KTtcbiAgfSk7XG4gIHJlbmRlclRlbXBzKCk7XG59XG5cbi8vIFdpcmVzIHRoZSBkZWJvdW5jZWQgY2l0eS1zdWdnZXN0aW9uIGRyb3Bkb3duLiBDYWxsZWQgb25jZSBmcm9tIHdpcmVFdmVudHMoKSxcbi8vIHNvIOKAlCBsaWtlIGV2ZXJ5IG90aGVyIGxpc3RlbmVyIGluIHRoZSBhcHAg4oCUIG5vdGhpbmcgbXVsdGlwbGllcyBhY3Jvc3MgZmV0Y2hlcy5cbmZ1bmN0aW9uIHdpcmVBdXRvY29tcGxldGUoKSB7XG4gIC8vIEVhY2gga2V5c3Ryb2tlIHNjaGVkdWxlcyBvbmUgZGVib3VuY2VkIGxvb2t1cDsgYW4gZW1wdHkgYm94IGNsb3NlcyB0aGVcbiAgLy8gZHJvcGRvd24gb3V0cmlnaHQuIFNldHRpbmcgc2VhcmNoSW5wdXQudmFsdWUgcHJvZ3JhbW1hdGljYWxseSAob24gc2VsZWN0IG9yXG4gIC8vIG9uIGEgc3VjY2Vzc2Z1bCBzdWJtaXQpIGRvZXMgbm90IGZpcmUgJ2lucHV0Jywgc28gdGhlcmUgaXMgbm8gcmVmZXRjaCBsb29wLlxuICBzZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHNlYXJjaElucHV0LnZhbHVlLnRyaW0oKTtcbiAgICBpZiAoc3VnZ2VzdERlYm91bmNlKSB7IGNsZWFyVGltZW91dChzdWdnZXN0RGVib3VuY2UpOyBzdWdnZXN0RGVib3VuY2UgPSBudWxsOyB9XG4gICAgaWYgKCF2YWx1ZSkgeyBjbG9zZVN1Z2dlc3Rpb25zKCk7IHJldHVybjsgfVxuXG4gICAgc3VnZ2VzdERlYm91bmNlID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBzZXEgPSArK3JlcXVlc3RTZXE7XG4gICAgICBmb3JlY2FzdExvZ2ljLnNlYXJjaENpdGllcyh2YWx1ZSkudGhlbihmdW5jdGlvbiAocmVzdWx0cykge1xuICAgICAgICBpZiAoc2VxICE9PSByZXF1ZXN0U2VxKSB7IHJldHVybjsgfSAvLyBhIG5ld2VyIGtleXN0cm9rZSBzdXBlcnNlZGVkIHRoaXNcbiAgICAgICAgcmVuZGVyU3VnZ2VzdGlvbnMocmVzdWx0cyk7XG4gICAgICB9KTtcbiAgICB9LCBTVUdHRVNUX0RFQk9VTkNFX01TKTtcbiAgfSk7XG5cbiAgLy8gQXJyb3cga2V5cyBtb3ZlIHRoZSBoaWdobGlnaHQ7IEVudGVyIG9uIGEgaGlnaGxpZ2h0ZWQgcm93IHNlbGVjdHMgaXQgKGFuZCBpc1xuICAvLyBzdG9wcGVkIGZyb20gYWxzbyBzdWJtaXR0aW5nIHRoZSByYXcgdGV4dCk7IEVzY2FwZSBjbG9zZXMgd2l0aG91dCBzdWJtaXR0aW5nLlxuICAvLyBXaXRoIG5vIGRyb3Bkb3duIG9wZW4sIEVudGVyIHN1Ym1pdHMgdGhlIHR5cGVkIHRleHQgZXhhY3RseSBhcyBiZWZvcmUuXG4gIHNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChzdWdnZXN0aW9ucy5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpIHx8ICFjdXJyZW50U3VnZ2VzdGlvbnMubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChlLmtleSA9PT0gJ0Fycm93RG93bicpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIG1vdmVTZWxlY3Rpb24oMSk7XG4gICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ0Fycm93VXAnKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBtb3ZlU2VsZWN0aW9uKC0xKTtcbiAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICBpZiAoc2VsZWN0ZWRJbmRleCA+PSAwKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY2hvb3NlU3VnZ2VzdGlvbihzZWxlY3RlZEluZGV4KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY2xvc2VTdWdnZXN0aW9ucygpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gQSBjbGljayBhbnl3aGVyZSBvdXRzaWRlIHRoZSBzZWFyY2ggZm9ybSBjbG9zZXMgdGhlIGRyb3Bkb3duLiBDbGlja3MgaW5zaWRlXG4gIC8vIHRoZSBmb3JtICh0aGUgaW5wdXQsIGEgc3VnZ2VzdGlvbiByb3csIHRoZSBidXR0b24pIGFyZSBoYW5kbGVkIGJ5IHRoZWlyIG93blxuICAvLyBsaXN0ZW5lcnMgYW5kIG11c3Qgbm90IGNsb3NlIGl0IGhlcmUgZmlyc3QuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoZS50YXJnZXQgJiYgZS50YXJnZXQuY2xvc2VzdCAmJiBlLnRhcmdldC5jbG9zZXN0KCcjc2VhcmNoRm9ybScpKSB7IHJldHVybjsgfVxuICAgIGNsb3NlU3VnZ2VzdGlvbnMoKTtcbiAgfSk7XG59XG5cbi8vIFJlYnVpbGQgdGhlIGRyb3Bkb3duIGZyb20gYSByZXN1bHRzIGFycmF5LiBFbXB0eSByZXN1bHRzIGNsb3NlIGl0LiBFYWNoIHJvdyBpc1xuLy8gdGhlIGNpdHkgbmFtZSBwbHVzIGEgbXV0ZWQgcmVnaW9uL2NvdW50cnkgbGluZTsgY2xpY2tpbmcgb25lIHNlbGVjdHMgaXQuXG5mdW5jdGlvbiByZW5kZXJTdWdnZXN0aW9ucyhyZXN1bHRzKSB7XG4gIHdoaWxlIChzdWdnZXN0aW9ucy5maXJzdENoaWxkKSB7IHN1Z2dlc3Rpb25zLnJlbW92ZUNoaWxkKHN1Z2dlc3Rpb25zLmZpcnN0Q2hpbGQpOyB9XG5cbiAgY3VycmVudFN1Z2dlc3Rpb25zID0gcmVzdWx0cztcbiAgc2VsZWN0ZWRJbmRleCA9IC0xO1xuXG4gIGlmICghcmVzdWx0cy5sZW5ndGgpIHsgY2xvc2VTdWdnZXN0aW9ucygpOyByZXR1cm47IH1cblxuICByZXN1bHRzLmZvckVhY2goZnVuY3Rpb24gKHIsIGlkeCkge1xuICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtLmNsYXNzTmFtZSA9ICdzdWdnZXN0aW9uLWl0ZW0nO1xuICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdyb2xlJywgJ29wdGlvbicpO1xuXG4gICAgY29uc3QgY2l0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjaXR5LmNsYXNzTmFtZSA9ICdzdWdnZXN0aW9uLWNpdHknO1xuICAgIGNpdHkudGV4dENvbnRlbnQgPSByLm5hbWU7XG5cbiAgICBjb25zdCBwbGFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBwbGFjZS5jbGFzc05hbWUgPSAnc3VnZ2VzdGlvbi1jb3VudHJ5JztcbiAgICBwbGFjZS50ZXh0Q29udGVudCA9IFtyLnJlZ2lvbiwgci5jb3VudHJ5XS5maWx0ZXIoQm9vbGVhbikuam9pbignLCAnKTtcblxuICAgIGl0ZW0uYXBwZW5kQ2hpbGQoY2l0eSk7XG4gICAgaXRlbS5hcHBlbmRDaGlsZChwbGFjZSk7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHsgY2hvb3NlU3VnZ2VzdGlvbihpZHgpOyB9KTtcblxuICAgIHN1Z2dlc3Rpb25zLmFwcGVuZENoaWxkKGl0ZW0pO1xuICB9KTtcblxuICBvcGVuU3VnZ2VzdGlvbnMoKTtcbn1cblxuLy8gTW92ZSB0aGUga2V5Ym9hcmQgaGlnaGxpZ2h0LCB3cmFwcGluZyBhdCBib3RoIGVuZHMsIGFuZCBtaXJyb3IgaXQgb250byB0aGUgRE9NLlxuZnVuY3Rpb24gbW92ZVNlbGVjdGlvbihkaXIpIHtcbiAgY29uc3QgbiA9IGN1cnJlbnRTdWdnZXN0aW9ucy5sZW5ndGg7XG4gIGlmICghbikgeyByZXR1cm47IH1cbiAgc2VsZWN0ZWRJbmRleCA9IChzZWxlY3RlZEluZGV4ICsgZGlyICsgbikgJSBuO1xuXG4gIGNvbnN0IGl0ZW1zID0gc3VnZ2VzdGlvbnMuY2hpbGRyZW47XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICBpdGVtc1tpXS5jbGFzc0xpc3QudG9nZ2xlKCdzZWxlY3RlZCcsIGkgPT09IHNlbGVjdGVkSW5kZXgpO1xuICB9XG59XG5cbi8vIEZpbGwgdGhlIGlucHV0IHdpdGggdGhlIGNob3NlbiBjaXR5IGFuZCBzdWJtaXQgdGhlIGZvcm0gdGhlIHNhbWUgd2F5IHByZXNzaW5nXG4vLyBFbnRlciBvciBjbGlja2luZyBTdWJtaXQgZG9lcywgc28gdGhlIGZldGNoICsgc2F2ZS1sb2NhdGlvbiBwYXRoIGlzIHVuY2hhbmdlZC5cbmZ1bmN0aW9uIGNob29zZVN1Z2dlc3Rpb24oaWR4KSB7XG4gIGNvbnN0IHIgPSBjdXJyZW50U3VnZ2VzdGlvbnNbaWR4XTtcbiAgaWYgKCFyKSB7IHJldHVybjsgfVxuICBzZWFyY2hJbnB1dC52YWx1ZSA9IHIubmFtZTtcbiAgY2xvc2VTdWdnZXN0aW9ucygpO1xuICBpZiAoc2VhcmNoRm9ybS5yZXF1ZXN0U3VibWl0KSB7XG4gICAgc2VhcmNoRm9ybS5yZXF1ZXN0U3VibWl0KCk7XG4gIH0gZWxzZSB7XG4gICAgc2VhcmNoRm9ybS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnc3VibWl0JywgeyBjYW5jZWxhYmxlOiB0cnVlLCBidWJibGVzOiB0cnVlIH0pKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBvcGVuU3VnZ2VzdGlvbnMoKSB7XG4gIHN1Z2dlc3Rpb25zLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICBzZWFyY2hGb3JtLmNsYXNzTGlzdC5hZGQoJ3N1Z2dlc3RpbmcnKTsgLy8gZmxhdHRlbnMgdGhlIGlucHV0J3MgYm90dG9tIGNvcm5lcnNcbn1cblxuLy8gQ2xvc2UgYW5kIHJlc2V0LiBCdW1waW5nIHJlcXVlc3RTZXEgaW52YWxpZGF0ZXMgYW55IGluLWZsaWdodCBsb29rdXAgc28gaXRcbi8vIGNhbid0IHJlb3BlbiB0aGUgZHJvcGRvd24gYWZ0ZXIgYSBzZWxlY3Rpb24gb3Igc3VibWl0LlxuZnVuY3Rpb24gY2xvc2VTdWdnZXN0aW9ucygpIHtcbiAgaWYgKCFzdWdnZXN0aW9ucykgeyByZXR1cm47IH1cbiAgaWYgKHN1Z2dlc3REZWJvdW5jZSkgeyBjbGVhclRpbWVvdXQoc3VnZ2VzdERlYm91bmNlKTsgc3VnZ2VzdERlYm91bmNlID0gbnVsbDsgfVxuICByZXF1ZXN0U2VxKys7XG4gIGN1cnJlbnRTdWdnZXN0aW9ucyA9IFtdO1xuICBzZWxlY3RlZEluZGV4ID0gLTE7XG4gIHN1Z2dlc3Rpb25zLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICBzZWFyY2hGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ3N1Z2dlc3RpbmcnKTtcbn1cblxuLy8gQSBzdWNjZXNzZnVsIGxvb2t1cCBjbGVhcnMgdGhlIGludmFsaWQgc3RhdGU7IGEgZmFpbGVkIG9uZSBrZWVwcyB0aGUgY3VycmVudFxuLy8gcmliYm9uIGFuZCByZWRkZW5zIHRoZSBpbnB1dCBib3JkZXIgKHZpYSB0aGUgLmludmFsaWQgY2xhc3MgaW4gc3R5bGUuY3NzKS5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZElucHV0KCkge1xuICBjYWNoZURvbSgpO1xuICBpZiAoc2VhcmNoRm9ybSkgeyBzZWFyY2hGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmFsaWQnKTsgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW52YWxpZElucHV0KCkge1xuICBjYWNoZURvbSgpO1xuICBpZiAoc2VhcmNoRm9ybSkgeyBzZWFyY2hGb3JtLmNsYXNzTGlzdC5hZGQoJ2ludmFsaWQnKTsgfVxufVxuIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyByZW5kZXJGb3JlY2FzdCwgdmFsaWRJbnB1dCwgaW52YWxpZElucHV0IH0gZnJvbSAnLi9pbmRleENoYW5nZXMuanMnO1xuXG4vLyAgMyBkYXkgZm9yZWNhc3QgLSBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PTM5YzI4Zjg1YWIwMzQ1MjFiOTkyMTcwNTIzMjcxMCZxPTk4MDUyJmRheXM9MyZhcWk9bm8mYWxlcnRzPW5vXG5cbi8vIFRoZSBsYXN0IGZvcmVjYXN0IHdlIHN1Y2Nlc3NmdWxseSByZW5kZXJlZC4gQSBmYWlsZWQgbG9va3VwIGtlZXBzIGl0IG9uIHNjcmVlblxuLy8gKHNlZSBmdWxmaWxsUHJvbWlzZSk6IHRoZSBzZWFyY2gganVzdCByZWRkZW5zIHRoZSBpbnB1dCByYXRoZXIgdGhhbiBibGFua2luZ1xuLy8gdGhlIHJpYmJvbi5cbmxldCBsYXN0Rm9yZWNhc3QgPSBudWxsO1xuXG5leHBvcnQgY29uc3QgZm9yZWNhc3RMb2dpYyA9IChmdW5jdGlvbiAoKSB7XG5cbiAgLy8gTm8gZmV0Y2ggZmlyZXMgYXQgbW9kdWxlLWV2YWwgdGltZS4gVGhlIHNpbmdsZSBpbml0aWFsIGZldGNoIChkZWZhdWx0XG4gIC8vIGxvY2F0aW9uLCBvciB0aGUgZmlyc3Qgc2F2ZWQgbG9jYXRpb24pIGlzIGRyaXZlbiBmcm9tIHRoZSBib290c3RyYXAgaW5cbiAgLy8gaW5kZXguanMgdmlhIGluaXRGYXZvdXJpdGVzKCkgLT4gZnV0dXJlQVBJQ2FsbHMsIHNvIGl0IGhhcHBlbnMgZXhhY3RseSBvbmNlXG4gIC8vIGluIHRoZSBpbmRleCBidW5kbGUgcmF0aGVyIHRoYW4gb25jZSBwZXIgYnVuZGxlIHRoYXQgaW1wb3J0cyB0aGlzIG1vZHVsZS5cblxuICAvLyBGaXJlcyBvbmUgZmV0Y2ggZm9yIGEgbG9jYXRpb24gYW5kIHJlbmRlcnMgb24gc3VjY2Vzcy4gUmV0dXJucyBhIHByb21pc2VcbiAgLy8gcmVzb2x2aW5nIHRvIHRoZSBidWlsdCBmb3JlY2FzdCBvbiBzdWNjZXNzLCBvciBudWxsIG9uIGEgZmFpbGVkIGxvb2t1cCwgc29cbiAgLy8gdGhlIHNlYXJjaCBzdWJtaXQgaGFuZGxlciBjYW4gYXBwZW5kIHRoZSBsb2NhdGlvbiB0byB0aGUgc2F2ZWQgbGlzdCBvbmx5XG4gIC8vIHdoZW4gdGhlIGxvb2t1cCBhY3R1YWxseSBzdWNjZWVkZWQuXG4gIGZ1bmN0aW9uIGZ1dHVyZUFQSUNhbGxzKHZhbHVlKSB7XG4gICAgcmV0dXJuIGZ1bGZpbGxQcm9taXNlKHB1bGxGb3JlY2FzdCh2YWx1ZSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZnVsZmlsbFByb21pc2UoZm9yZWNhc3RKU09OKSB7XG4gICAgcmV0dXJuIGZvcmVjYXN0SlNPTi50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgIC8vIHB1bGxGb3JlY2FzdCByZXNvbHZlcyB0byBudWxsIG9uIGEgZmFpbGVkIGxvb2t1cCDigJQgbGVhdmUgdGhlIGN1cnJlbnRcbiAgICAgIC8vIHJpYmJvbiB1bnRvdWNoZWQgKGludmFsaWRJbnB1dCgpIGhhcyBhbHJlYWR5IHJlZGRlbmVkIHRoZSBpbnB1dCkuXG4gICAgICBpZiAoIXJlc3VsdCkgeyByZXR1cm4gbnVsbDsgfVxuXG4gICAgICBjb25zdCBmb3JlY2FzdCA9IGJ1aWxkRm9yZWNhc3QocmVzdWx0KTtcbiAgICAgIGxhc3RGb3JlY2FzdCA9IGZvcmVjYXN0O1xuICAgICAgcmVuZGVyRm9yZWNhc3QoZm9yZWNhc3QpO1xuICAgICAgcmV0dXJuIGZvcmVjYXN0O1xuICAgIH0pO1xuICB9XG5cbiAgLy8gRmxhdHRlbiB0aGUgdGhyZWUtZGF5IHJlc3BvbnNlIGludG8gYSBzaW5nbGUgNzItaG91ciBzZXJpZXMgcGx1cyBhIGxvY2F0aW9uXG4gIC8vIG9iamVjdC4gRXZlcnkgaG91ciBrZWVwcyBpdHMgb3duIGVwb2NoLCB0ZW1wZXJhdHVyZSwgY29uZGl0aW9uIHRleHQgYW5kIHRoZVxuICAvLyBzdGF0IGZpZWxkcyB0aGUgcmVhZG91dCBzaG93cyDigJQgbm90aGluZyBpcyBjb2xsYXBzZWQgdG8gcGVyLWRheSBzY2FsYXJzLCBhbmRcbiAgLy8gdGhlIGZ1bGwgZm9yZWNhc3RkYXlbXS5ob3VyW10gYXJyYXlzIChhbHJlYWR5IGluIGV2ZXJ5IHJlc3BvbnNlLCBwcmV2aW91c2x5XG4gIC8vIGRpc2NhcmRlZCkgYXJlIHdoYXQgdGhlIGN1cnZlIGlzIGRyYXduIGZyb20uXG4gIGZ1bmN0aW9uIGJ1aWxkRm9yZWNhc3QocmVzdWx0KSB7XG4gICAgY29uc3QgZm9yZWNhc3REYXlzID0gcmVzdWx0LmZvcmVjYXN0LmZvcmVjYXN0ZGF5O1xuICAgIGNvbnN0IGhvdXJzID0gW107XG5cbiAgICBmb3JlY2FzdERheXMuZm9yRWFjaCgoZGF5KSA9PiB7XG4gICAgICBkYXkuaG91ci5mb3JFYWNoKChoKSA9PiB7XG4gICAgICAgIGhvdXJzLnB1c2goe1xuICAgICAgICAgIGVwb2NoOiBoLnRpbWVfZXBvY2gsXG4gICAgICAgICAgdGVtcDogaC50ZW1wX2MsXG4gICAgICAgICAgZmVlbHNMaWtlOiBoLmZlZWxzbGlrZV9jLFxuICAgICAgICAgIGh1bWlkaXR5OiBoLmh1bWlkaXR5LFxuICAgICAgICAgIHJhaW46IGguY2hhbmNlX29mX3JhaW4sXG4gICAgICAgICAgd2luZDogaC53aW5kX2twaCxcbiAgICAgICAgICBjb25kaXRpb246IGguY29uZGl0aW9uLnRleHQsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgbG9jYXRpb246IHtcbiAgICAgICAgbmFtZTogcmVzdWx0LmxvY2F0aW9uLm5hbWUsXG4gICAgICAgIC8vIFwibm93XCIgaXMgaW5kZXhlZCBvZmYgdGhlIGxvY2F0aW9uJ3MgcmVhbCBjdXJyZW50IHRpbWUsIG5vdCBhIHBhcnNlZFxuICAgICAgICAvLyBkYXRlIHN0cmluZy4gU2VlIGN1cnJlbnRIb3VySW5kZXgoKSBpbiByaWJib24uanMuXG4gICAgICAgIGxvY2FsdGltZV9lcG9jaDogcmVzdWx0LmxvY2F0aW9uLmxvY2FsdGltZV9lcG9jaCxcbiAgICAgIH0sXG4gICAgICBob3VyczogaG91cnMsXG4gICAgICAvLyBQZXItZGF5IGRhdGUgKyBob3VyIGNvdW50IGRyaXZlIHRoZSBXRUQvVEhVL0ZSSSB0aWNrcyBhbmQgdGhlIGRheVxuICAgICAgLy8gaGFpcmxpbmVzIGF0IGhvdXJzIDI0IGFuZCA0OC5cbiAgICAgIGRheXM6IGZvcmVjYXN0RGF5cy5tYXAoKGRheSkgPT4gKHsgZGF0ZTogZGF5LmRhdGUsIGNvdW50OiBkYXkuaG91ci5sZW5ndGggfSkpLFxuICAgIH07XG4gIH1cblxuICAvLyBUYWtlcyBhIGxvY2F0aW9uIHZhbHVlIGFwcGVuZGVkIHRvIHRoZSBBUEkgY2FsbC4gUmVzb2x2ZXMgdG8gdGhlIHJhdyBKU09OIG9uXG4gIC8vIHN1Y2Nlc3MsIG9yIG51bGwgb24gZmFpbHVyZSAoc28gZnVsZmlsbFByb21pc2Uga2VlcHMgdGhlIGN1cnJlbnQgcmliYm9uKS5cbiAgYXN5bmMgZnVuY3Rpb24gcHVsbEZvcmVjYXN0KHZhbHVlKSB7XG4gICAgY29uc3QgdXJsID0gJ2h0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PTM5YzI4Zjg1YWIwMzQ1MjFiOTkyMTcwNTIzMjcxMCZxPScgKyB2YWx1ZSArICcmZGF5cz0zJmFxaT1ubyZhbGVydHM9bm8nO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7IG1vZGU6ICdjb3JzJyB9KTtcblxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIFN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGZvcmVjYXN0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICB2YWxpZElucHV0KCk7XG5cbiAgICAgIHJldHVybiBmb3JlY2FzdDtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIGNhdGNoZXMgZXJyb3JzIGJvdGggaW4gZmV0Y2ggYW5kIHJlc3BvbnNlLmpzb25cbiAgICAgIGludmFsaWRJbnB1dCgpO1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgLy8gVHlwZWFoZWFkIGxvb2t1cCBmb3IgdGhlIHNlYXJjaCBib3guIEhpdHMgV2VhdGhlckFQSSdzIHNlYXJjaC9hdXRvY29tcGxldGVcbiAgLy8gZW5kcG9pbnQgKHJldXNpbmcgdGhlIHNhbWUga2V5IGFzIHB1bGxGb3JlY2FzdCkgYW5kIHJlc29sdmVzIHRvIHRoZSByYXdcbiAgLy8gcmVzdWx0cyBhcnJheSDigJQgW3sgbmFtZSwgcmVnaW9uLCBjb3VudHJ5LCAuLi4gfSwgLi4uXSDigJQgb3IgW10gb24gYW4gZW1wdHlcbiAgLy8gcXVlcnksIG5vIG1hdGNoZXMsIG9yIGFueSBuZXR3b3JrL3BhcnNlIGVycm9yLiBOZXZlciB0aHJvd3M6IHRoZSBkcm9wZG93blxuICAvLyBqdXN0IHNob3dzIG5vdGhpbmcgb24gZmFpbHVyZS5cbiAgYXN5bmMgZnVuY3Rpb24gc2VhcmNoQ2l0aWVzKHZhbHVlKSB7XG4gICAgY29uc3QgcSA9IFN0cmluZyh2YWx1ZSkudHJpbSgpO1xuICAgIGlmICghcSkgeyByZXR1cm4gW107IH1cblxuICAgIGNvbnN0IHVybCA9ICdodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9zZWFyY2guanNvbj9rZXk9MzljMjhmODVhYjAzNDUyMWI5OTIxNzA1MjMyNzEwJnE9JyArIGVuY29kZVVSSUNvbXBvbmVudChxKTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgeyBtb2RlOiAnY29ycycgfSk7XG5cbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBTdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgfVxuXG4gICAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShyZXN1bHRzKSA/IHJlc3VsdHMgOiBbXTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG5cbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHB1bGxGb3JlY2FzdCxcbiAgICBmdXR1cmVBUElDYWxscyxcbiAgICBzZWFyY2hDaXRpZXMsXG4gIH07XG5cbn0pKCk7IC8vIGVuZHMgZm9yZWNhc3RMb2dpYyBmdW5jdGlvblxuIiwiLy8gcmliYm9uLmpzIOKAlCB0aGUgNzItaG91ciB0ZW1wZXJhdHVyZSByaWJib24uXG4vL1xuLy8gVGhlIGZvcmVjYXN0IGlzIG9uZSBjb250aW51b3VzIHRlbXBlcmF0dXJlIGN1cnZlIGFjcm9zcyBhbGwgdGhyZWUgZGF5cyByYXRoZXJcbi8vIHRoYW4gdGhyZWUgY2FyZCBzdGF0ZXMgeW91IHBhZ2UgYmV0d2Vlbiwgc28gbmF2aWdhdGlvbiBzdG9wcyBiZWluZyBhIGNvbmNlcHQ6XG4vLyBldmVyeSBob3VyIGlzIG9uIHNjcmVlbiBhdCBvbmNlLiBDb2xvdXIgaXMgYSBmdW5jdGlvbiBvZiB0aGUgdGVtcGVyYXR1cmVcbi8vIHNjYWxhciAoY29sZCAtPiBtaWxkIC0+IHdhcm0gLT4gaG90KSwgTk9UIHRoZSBjb25kaXRpb24gY2F0ZWdvcnksIHNvIHRoZXJlIGlzXG4vLyBubyBwZXItY29uZGl0aW9uIGJyYW5jaCB0byB3cml0ZSBhbmQgbm8gZWlnaHRoIGNhc2UgdG8gZm9yZ2V0LlxuLy9cbi8vIGJ1aWxkUmliYm9uKG1vdW50KSBjcmVhdGVzIHRoZSBTVkcgc2NhZmZvbGQgb25jZSBhdCBib290c3RyYXAgKGRlZnMsIGdyYWRpZW50cyxcbi8vIGVtcHR5IGdyb3VwcykgYW5kIGNhY2hlcyBlbGVtZW50IHJlZnMuIHJlbmRlckZvcmVjYXN0KCkgaW4gaW5kZXhDaGFuZ2VzLmpzXG4vLyBjYWxscyByZW5kZXJSaWJib24oZm9yZWNhc3QpIG9uIGV2ZXJ5IHJlc29sdmVkIHJlc3BvbnNlIHRvIHJlZHJhdyB0aGUgY3VydmUsXG4vLyB0aGUgZGF5IGhhaXJsaW5lcy90aWNrcyBhbmQgdGhlIGN1cnJlbnQtaG91ciBtYXJrZXIgZnJvbSBkYXRhLiBjdXJyZW50SG91ckluZGV4XG4vLyBpcyB0aGUgc2luZ2xlIHNvdXJjZSBvZiB0cnV0aCBmb3IgXCJub3dcIiwgc2hhcmVkIHdpdGggdGhlIHJlYWRvdXQgc28gdGhlIG1hcmtlclxuLy8gYW5kIHRoZSBzdGF0IHJvdyBuZXZlciBkaXNhZ3JlZS5cbi8vXG4vLyBIYW5kLWF1dGhvcmVkIFNWRywgdmFuaWxsYSBvbmx5IOKAlCBubyBjaGFydGluZyBsaWJyYXJ5LCBubyBkZXBlbmRlbmNpZXMuXG5cbmNvbnN0IE5TID0gJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJztcblxuLy8gdmlld0JveCBnZW9tZXRyeSwgaW4gdXNlciB1bml0cy4gVGhlIGN1cnZlIGJhbmQgc2l0cyBiZXR3ZWVuIENIQVJUX1RPUCBhbmRcbi8vIENIQVJUX1RPUCtDSEFSVF9IOyBUSUNLX0ggYmVuZWF0aCBpdCBjYXJyaWVzIHRoZSBXRUQvVEhVL0ZSSSBkYXkgbGFiZWxzLiBBXG4vLyBzZWNvbmQgbGFuZSAodGlkZXMsIG91dCBvZiBzY29wZSB0b2RheSkgd291bGQgYWRkIExBTkVfSCBiZWxvdyB0aGF0IOKAlCB0aGVcbi8vIHZpZXdCb3ggaGVpZ2h0IHN3aXRjaGVzIGJldHdlZW4gdHdvIHZhbHVlcyBkZXBlbmRpbmcgb24gd2hldGhlciB0aGUgbGFuZVxuLy8gZXhpc3RzLCBzbyB0aGUgbGF5b3V0IGlzIGJ1aWx0IGxhbmUtb3B0aW9uYWwgZXZlbiB0aG91Z2ggdGhlIGxhbmUgbmV2ZXJcbi8vIHJlbmRlcnMgZm9yIG5vdy5cbmNvbnN0IFZJRVdfVyA9IDcyMDtcbmNvbnN0IFBBRF9MID0gMTA7XG5jb25zdCBQQURfUiA9IDEwO1xuY29uc3QgQ0hBUlRfVE9QID0gMTg7XG5jb25zdCBDSEFSVF9IID0gMTUwO1xuY29uc3QgVElDS19IID0gMjY7XG5jb25zdCBMQU5FX0ggPSA5MDtcblxuLy8gVGVtcGVyYXR1cmUgLT4gY29sb3VyIHJhbXAuIEZvdXIgYW5jaG9ycyBzcGFubmluZyBhIGZpeGVkIMKwQyBkb21haW4gc28gdGhlXG4vLyBzYW1lIHRlbXBlcmF0dXJlIGFsd2F5cyByZWFkcyB0aGUgc2FtZSBjb2xvdXIgcmVnYXJkbGVzcyBvZiB0aGUgZGF5J3MgcmFuZ2UuXG5jb25zdCBSQU1QID0gW1xuICB7IHQ6IC01LCBjOiBbMHgzZCwgMHg2ZiwgMHhhOF0gfSwgLy8gY29sZFxuICB7IHQ6IDEwLCBjOiBbMHg2ZiwgMHhhOCwgMHhhMF0gfSwgLy8gbWlsZFxuICB7IHQ6IDI1LCBjOiBbMHhkOSwgMHhhNCwgMHg0MV0gfSwgLy8gd2FybVxuICB7IHQ6IDQwLCBjOiBbMHhjMiwgMHg0NSwgMHgyZF0gfSwgLy8gaG90XG5dO1xuXG5jb25zdCBXRUVLREFZID0gWydTVU4nLCAnTU9OJywgJ1RVRScsICdXRUQnLCAnVEhVJywgJ0ZSSScsICdTQVQnXTtcblxuLy8gQ2FjaGVkIHNjYWZmb2xkIHJlZnMsIHBvcHVsYXRlZCBvbmNlIGJ5IGJ1aWxkUmliYm9uKCkuXG5sZXQgc3ZnLCB0ZW1wR3JhZCwgZmlsbFBhdGgsIGN1cnZlUGF0aCwgYm91bmRhcnlHcm91cCwgdGlja0dyb3VwLCBtYXJrZXJHcm91cCxcbiAgbGFuZUdyb3VwO1xuXG5mdW5jdGlvbiBlbChuYW1lLCBhdHRycykge1xuICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKE5TLCBuYW1lKTtcbiAgaWYgKGF0dHJzKSB7XG4gICAgZm9yIChjb25zdCBrIGluIGF0dHJzKSB7IG5vZGUuc2V0QXR0cmlidXRlKGssIGF0dHJzW2tdKTsgfVxuICB9XG4gIHJldHVybiBub2RlO1xufVxuXG5mdW5jdGlvbiBsZXJwKGEsIGIsIGYpIHsgcmV0dXJuIGEgKyAoYiAtIGEpICogZjsgfVxuXG4vLyBDb2xvdXIgZm9yIGEgdGVtcGVyYXR1cmUsIGludGVycG9sYXRlZCBhY3Jvc3MgdGhlIHJhbXAgYW5jaG9ycyBhbmQgY2xhbXBlZCB0b1xuLy8gdGhlIGRvbWFpbiBlbmRzLlxuZnVuY3Rpb24gdGVtcENvbG91cih0ZW1wKSB7XG4gIGlmICh0ZW1wIDw9IFJBTVBbMF0udCkgeyByZXR1cm4gcmdiKFJBTVBbMF0uYyk7IH1cbiAgaWYgKHRlbXAgPj0gUkFNUFtSQU1QLmxlbmd0aCAtIDFdLnQpIHsgcmV0dXJuIHJnYihSQU1QW1JBTVAubGVuZ3RoIC0gMV0uYyk7IH1cbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBSQU1QLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHRlbXAgPD0gUkFNUFtpXS50KSB7XG4gICAgICBjb25zdCBsbyA9IFJBTVBbaSAtIDFdO1xuICAgICAgY29uc3QgaGkgPSBSQU1QW2ldO1xuICAgICAgY29uc3QgZiA9ICh0ZW1wIC0gbG8udCkgLyAoaGkudCAtIGxvLnQpO1xuICAgICAgcmV0dXJuIHJnYihbXG4gICAgICAgIE1hdGgucm91bmQobGVycChsby5jWzBdLCBoaS5jWzBdLCBmKSksXG4gICAgICAgIE1hdGgucm91bmQobGVycChsby5jWzFdLCBoaS5jWzFdLCBmKSksXG4gICAgICAgIE1hdGgucm91bmQobGVycChsby5jWzJdLCBoaS5jWzJdLCBmKSksXG4gICAgICBdKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJnYihSQU1QW1JBTVAubGVuZ3RoIC0gMV0uYyk7XG59XG5cbmZ1bmN0aW9uIHJnYihjKSB7IHJldHVybiAncmdiKCcgKyBjWzBdICsgJywnICsgY1sxXSArICcsJyArIGNbMl0gKyAnKSc7IH1cblxuZnVuY3Rpb24gd2Vla2RheUFiYnIoZGF0ZVN0cikge1xuICAvLyBkYXRlU3RyIGlzICdZWVlZLU1NLUREJy4gQnVpbGQgdGhlIGRhdGUgYXQgVVRDIG1pZG5pZ2h0IHNvIHRoZSB3ZWVrZGF5IG5ldmVyXG4gIC8vIHNoaWZ0cyBhY3Jvc3MgYSB0aW1lem9uZSBib3VuZGFyeS5cbiAgY29uc3QgcCA9IFN0cmluZyhkYXRlU3RyKS5zcGxpdCgnLScpO1xuICBjb25zdCBkID0gbmV3IERhdGUoRGF0ZS5VVEMoK3BbMF0sICgrcFsxXSkgLSAxLCArcFsyXSkpO1xuICByZXR1cm4gV0VFS0RBWVtkLmdldFVUQ0RheSgpXSB8fCAnJztcbn1cblxuLy8gSW5kZXggb2YgdGhlIGhvdXIgYnVja2V0IG5lYXJlc3QgXCJub3dcIi4gRHJpdmVuIG9mZiBsb2NhdGlvbi5sb2NhbHRpbWVfZXBvY2gsXG4vLyBOT1QgYSBwYXJzZWQgZGF0ZS1zdHJpbmcgaG91ciDigJQgdGhlIG9sZCBnZXRDdXJyZW50VGltZSgpIHJlYWQgdGhlIGhvdXIgb3V0IG9mXG4vLyBkYXRlX2Vwb2NoIChsb2NhbCBtaWRuaWdodCkgYW5kIHJldHVybmVkIHRoZSBVVEMgb2Zmc2V0LCBzbyBcImZlZWxzIGxpa2VcIiB3YXMgYVxuLy8gZml4ZWQgYXJiaXRyYXJ5IGhvdXIuIGxvY2FsdGltZV9lcG9jaCBpcyB0aGUgbG9jYXRpb24ncyByZWFsIGN1cnJlbnQgdGltZS5cbmV4cG9ydCBmdW5jdGlvbiBjdXJyZW50SG91ckluZGV4KGZvcmVjYXN0KSB7XG4gIGNvbnN0IGhvdXJzID0gZm9yZWNhc3QuaG91cnM7XG4gIGlmICghaG91cnMgfHwgIWhvdXJzLmxlbmd0aCkgeyByZXR1cm4gMDsgfVxuICBjb25zdCBub3cgPSBmb3JlY2FzdC5sb2NhdGlvbi5sb2NhbHRpbWVfZXBvY2g7XG4gIGxldCBiZXN0ID0gMDtcbiAgbGV0IGJlc3REaWZmID0gSW5maW5pdHk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaG91cnMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBkaWZmID0gTWF0aC5hYnMoaG91cnNbaV0uZXBvY2ggLSBub3cpO1xuICAgIGlmIChkaWZmIDwgYmVzdERpZmYpIHsgYmVzdERpZmYgPSBkaWZmOyBiZXN0ID0gaTsgfVxuICB9XG4gIHJldHVybiBiZXN0O1xufVxuXG4vLyBDcmVhdGUgdGhlIFNWRyBzY2FmZm9sZCBvbmNlLiBDYWxsZWQgZnJvbSBpbmRleC5qcyBhdCBib290c3RyYXAsIGFmdGVyIHRoZVxuLy8gbW91bnQgZWxlbWVudCBpcyBpbiB0aGUgRE9NLlxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkUmliYm9uKG1vdW50KSB7XG4gIGlmIChzdmcpIHsgcmV0dXJuOyB9IC8vIGJ1aWxkIG9uY2VcblxuICBzdmcgPSBlbCgnc3ZnJywge1xuICAgIGlkOiAncmliYm9uU3ZnJyxcbiAgICB2aWV3Qm94OiAnMCAwICcgKyBWSUVXX1cgKyAnICcgKyAoQ0hBUlRfVE9QICsgQ0hBUlRfSCArIFRJQ0tfSCksXG4gICAgcHJlc2VydmVBc3BlY3RSYXRpbzogJ3hNaWRZTWlkIG1lZXQnLFxuICB9KTtcblxuICBjb25zdCBkZWZzID0gZWwoJ2RlZnMnKTtcblxuICAvLyBIb3Jpem9udGFsIHN0cm9rZSBncmFkaWVudDogY29sb3VyZWQgYnkgdGVtcGVyYXR1cmUgYWNyb3NzIHRoZSA3MiBob3Vycy5cbiAgLy8gU3RvcHMgYXJlIHJlYnVpbHQgZWFjaCByZW5kZXIgZnJvbSB0aGUgYWN0dWFsIHNlcmllcy5cbiAgdGVtcEdyYWQgPSBlbCgnbGluZWFyR3JhZGllbnQnLCB7XG4gICAgaWQ6ICd0ZW1wR3JhZCcsIHgxOiAnMCcsIHkxOiAnMCcsIHgyOiAnMScsIHkyOiAnMCcsXG4gIH0pO1xuXG4gIC8vIFZlcnRpY2FsIGZhZGUgZmlsbCB1bmRlciB0aGUgY3VydmUuXG4gIGNvbnN0IGZpbGxHcmFkID0gZWwoJ2xpbmVhckdyYWRpZW50Jywge1xuICAgIGlkOiAnZmlsbEdyYWQnLCB4MTogJzAnLCB5MTogJzAnLCB4MjogJzAnLCB5MjogJzEnLFxuICB9KTtcbiAgZmlsbEdyYWQuYXBwZW5kQ2hpbGQoZWwoJ3N0b3AnLCB7IG9mZnNldDogJzAnLCAnc3RvcC1jb2xvcic6ICcjOENBMEFFJywgJ3N0b3Atb3BhY2l0eSc6ICcwLjI4JyB9KSk7XG4gIGZpbGxHcmFkLmFwcGVuZENoaWxkKGVsKCdzdG9wJywgeyBvZmZzZXQ6ICcxJywgJ3N0b3AtY29sb3InOiAnIzhDQTBBRScsICdzdG9wLW9wYWNpdHknOiAnMCcgfSkpO1xuXG4gIGRlZnMuYXBwZW5kQ2hpbGQodGVtcEdyYWQpO1xuICBkZWZzLmFwcGVuZENoaWxkKGZpbGxHcmFkKTtcbiAgc3ZnLmFwcGVuZENoaWxkKGRlZnMpO1xuXG4gIGZpbGxQYXRoID0gZWwoJ3BhdGgnLCB7IGNsYXNzOiAncmliYm9uLWZpbGwnLCBmaWxsOiAndXJsKCNmaWxsR3JhZCknLCBzdHJva2U6ICdub25lJyB9KTtcbiAgY3VydmVQYXRoID0gZWwoJ3BhdGgnLCB7IGNsYXNzOiAncmliYm9uLWN1cnZlJywgZmlsbDogJ25vbmUnLCBzdHJva2U6ICd1cmwoI3RlbXBHcmFkKScgfSk7XG4gIGJvdW5kYXJ5R3JvdXAgPSBlbCgnZycsIHsgY2xhc3M6ICdyaWJib24tYm91bmRhcmllcycgfSk7XG4gIHRpY2tHcm91cCA9IGVsKCdnJywgeyBjbGFzczogJ3JpYmJvbi10aWNrcycgfSk7XG4gIG1hcmtlckdyb3VwID0gZWwoJ2cnLCB7IGNsYXNzOiAncmliYm9uLW1hcmtlcicgfSk7XG4gIGxhbmVHcm91cCA9IGVsKCdnJywgeyBjbGFzczogJ3JpYmJvbi1sYW5lJyB9KTtcblxuICBzdmcuYXBwZW5kQ2hpbGQoZmlsbFBhdGgpO1xuICBzdmcuYXBwZW5kQ2hpbGQoY3VydmVQYXRoKTtcbiAgc3ZnLmFwcGVuZENoaWxkKGJvdW5kYXJ5R3JvdXApO1xuICBzdmcuYXBwZW5kQ2hpbGQodGlja0dyb3VwKTtcbiAgc3ZnLmFwcGVuZENoaWxkKGxhbmVHcm91cCk7XG4gIHN2Zy5hcHBlbmRDaGlsZChtYXJrZXJHcm91cCk7XG5cbiAgbW91bnQuYXBwZW5kQ2hpbGQoc3ZnKTtcbn1cblxuZnVuY3Rpb24gY2xlYXIobm9kZSkge1xuICB3aGlsZSAobm9kZS5maXJzdENoaWxkKSB7IG5vZGUucmVtb3ZlQ2hpbGQobm9kZS5maXJzdENoaWxkKTsgfVxufVxuXG4vLyBSZWRyYXcgdGhlIHdob2xlIHJpYmJvbiBmcm9tIGEgZm9yZWNhc3Q6IHsgbG9jYXRpb24sIGhvdXJzW10sIGRheXNbXSwgbGFuZT8gfS5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJSaWJib24oZm9yZWNhc3QpIHtcbiAgaWYgKCFzdmcpIHsgcmV0dXJuOyB9XG5cbiAgY29uc3QgaG91cnMgPSBmb3JlY2FzdC5ob3VycyB8fCBbXTtcbiAgY29uc3QgbiA9IGhvdXJzLmxlbmd0aDtcbiAgaWYgKCFuKSB7IHJldHVybjsgfVxuXG4gIGNvbnN0IGxhbmVPbiA9ICEhZm9yZWNhc3QubGFuZTtcbiAgY29uc3QgdG90YWxIID0gQ0hBUlRfVE9QICsgQ0hBUlRfSCArIFRJQ0tfSCArIChsYW5lT24gPyBMQU5FX0ggOiAwKTtcbiAgc3ZnLnNldEF0dHJpYnV0ZSgndmlld0JveCcsICcwIDAgJyArIFZJRVdfVyArICcgJyArIHRvdGFsSCk7XG5cbiAgY29uc3QgaW5uZXJXID0gVklFV19XIC0gUEFEX0wgLSBQQURfUjtcbiAgY29uc3QgYmFzZWxpbmUgPSBDSEFSVF9UT1AgKyBDSEFSVF9IO1xuXG4gIC8vIHRlbXBlcmF0dXJlIGRvbWFpbiBmb3IgdGhlIHktc2NhbGUsIHBhZGRlZCBzbyB0aGUgY3VydmUgbmV2ZXIgaHVncyBhbiBlZGdlLlxuICBsZXQgbWluID0gSW5maW5pdHk7XG4gIGxldCBtYXggPSAtSW5maW5pdHk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgaWYgKGhvdXJzW2ldLnRlbXAgPCBtaW4pIHsgbWluID0gaG91cnNbaV0udGVtcDsgfVxuICAgIGlmIChob3Vyc1tpXS50ZW1wID4gbWF4KSB7IG1heCA9IGhvdXJzW2ldLnRlbXA7IH1cbiAgfVxuICBpZiAobWluID09PSBtYXgpIHsgbWluIC09IDE7IG1heCArPSAxOyB9XG4gIGNvbnN0IHNwYW4gPSBtYXggLSBtaW47XG5cbiAgY29uc3QgeCA9IChpKSA9PiBQQURfTCArIChuIDw9IDEgPyAwIDogKGkgLyAobiAtIDEpKSAqIGlubmVyVyk7XG4gIGNvbnN0IHkgPSAodCkgPT4gQ0hBUlRfVE9QICsgKDEgLSAodCAtIG1pbikgLyBzcGFuKSAqIENIQVJUX0g7XG5cbiAgLy8gQnVpbGQgdGhlIHBvaW50cywgdGhlbiBhIHNtb290aCBwYXRoIHZpYSBxdWFkcmF0aWMgbWlkcG9pbnRzIChubyBvdmVyc2hvb3QpLlxuICBjb25zdCBwdHMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHsgcHRzLnB1c2goeyB4OiB4KGkpLCB5OiB5KGhvdXJzW2ldLnRlbXApIH0pOyB9XG5cbiAgbGV0IGQgPSAnTSAnICsgcHRzWzBdLngudG9GaXhlZCgyKSArICcgJyArIHB0c1swXS55LnRvRml4ZWQoMik7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgeGMgPSAocHRzW2kgLSAxXS54ICsgcHRzW2ldLngpIC8gMjtcbiAgICBjb25zdCB5YyA9IChwdHNbaSAtIDFdLnkgKyBwdHNbaV0ueSkgLyAyO1xuICAgIGQgKz0gJyBRICcgKyBwdHNbaSAtIDFdLngudG9GaXhlZCgyKSArICcgJyArIHB0c1tpIC0gMV0ueS50b0ZpeGVkKDIpICtcbiAgICAgICcgJyArIHhjLnRvRml4ZWQoMikgKyAnICcgKyB5Yy50b0ZpeGVkKDIpO1xuICB9XG4gIGQgKz0gJyBMICcgKyBwdHNbbiAtIDFdLngudG9GaXhlZCgyKSArICcgJyArIHB0c1tuIC0gMV0ueS50b0ZpeGVkKDIpO1xuXG4gIGN1cnZlUGF0aC5zZXRBdHRyaWJ1dGUoJ2QnLCBkKTtcbiAgZmlsbFBhdGguc2V0QXR0cmlidXRlKCdkJywgZCArXG4gICAgJyBMICcgKyBwdHNbbiAtIDFdLngudG9GaXhlZCgyKSArICcgJyArIGJhc2VsaW5lICtcbiAgICAnIEwgJyArIHB0c1swXS54LnRvRml4ZWQoMikgKyAnICcgKyBiYXNlbGluZSArICcgWicpO1xuXG4gIC8vIEhvcml6b250YWwgdGVtcGVyYXR1cmUgZ3JhZGllbnQ6IG9uZSBzdG9wIHBlciBob3VyLCBjb2xvdXJlZCBieSB0aGF0IGhvdXInc1xuICAvLyB0ZW1wZXJhdHVyZS4gb2JqZWN0Qm91bmRpbmdCb3ggbWFwcyBvZmZzZXQgaS8obi0xKSBvbnRvIHRoZSBjdXJ2ZSdzIHgsIHdoaWNoXG4gIC8vIHNwYW5zIHRoZSBmdWxsIGlubmVyIHdpZHRoLCBzbyBlYWNoIHN0b3AgbGFuZHMgdW5kZXIgaXRzIGhvdXIuXG4gIGNsZWFyKHRlbXBHcmFkKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICB0ZW1wR3JhZC5hcHBlbmRDaGlsZChlbCgnc3RvcCcsIHtcbiAgICAgIG9mZnNldDogKG4gPD0gMSA/IDAgOiBpIC8gKG4gLSAxKSkudG9GaXhlZCg0KSxcbiAgICAgICdzdG9wLWNvbG9yJzogdGVtcENvbG91cihob3Vyc1tpXS50ZW1wKSxcbiAgICB9KSk7XG4gIH1cblxuICAvLyBEYXkgaGFpcmxpbmVzICsgV0VEL1RIVS9GUkkgdGlja3MsIGRlcml2ZWQgZnJvbSB0aGUgcGVyLWRheSBob3VyIGNvdW50cyBzbyBhXG4gIC8vIHNob3J0IHRyYWlsaW5nIGRheSBzdGlsbCBsaW5lcyB1cC5cbiAgY2xlYXIoYm91bmRhcnlHcm91cCk7XG4gIGNsZWFyKHRpY2tHcm91cCk7XG4gIGNvbnN0IGRheXMgPSBmb3JlY2FzdC5kYXlzIHx8IFtdO1xuICBsZXQgc3RhcnQgPSAwO1xuICBmb3IgKGxldCBkaSA9IDA7IGRpIDwgZGF5cy5sZW5ndGg7IGRpKyspIHtcbiAgICBjb25zdCBjb3VudCA9IGRheXNbZGldLmNvdW50IHx8IDA7XG4gICAgaWYgKGNvdW50IDw9IDApIHsgY29udGludWU7IH1cblxuICAgIGlmIChkaSA+IDAgJiYgc3RhcnQgPCBuKSB7XG4gICAgICBjb25zdCBieCA9IHgoc3RhcnQpLnRvRml4ZWQoMik7XG4gICAgICBib3VuZGFyeUdyb3VwLmFwcGVuZENoaWxkKGVsKCdsaW5lJywge1xuICAgICAgICBjbGFzczogJ3JpYmJvbi1oYWlybGluZScsXG4gICAgICAgIHgxOiBieCwgeTE6IENIQVJUX1RPUCwgeDI6IGJ4LCB5MjogYmFzZWxpbmUsXG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgY29uc3QgY2VudGVySWR4ID0gc3RhcnQgKyAoY291bnQgLSAxKSAvIDI7XG4gICAgY29uc3QgdGljayA9IGVsKCd0ZXh0Jywge1xuICAgICAgY2xhc3M6ICdyaWJib24tdGljaycsXG4gICAgICB4OiB4KGNlbnRlcklkeCkudG9GaXhlZCgyKSxcbiAgICAgIHk6IChiYXNlbGluZSArIFRJQ0tfSCAqIDAuNykudG9GaXhlZCgyKSxcbiAgICAgICd0ZXh0LWFuY2hvcic6ICdtaWRkbGUnLFxuICAgIH0pO1xuICAgIHRpY2sudGV4dENvbnRlbnQgPSB3ZWVrZGF5QWJicihkYXlzW2RpXS5kYXRlKTtcbiAgICB0aWNrR3JvdXAuYXBwZW5kQ2hpbGQodGljayk7XG5cbiAgICBzdGFydCArPSBjb3VudDtcbiAgfVxuXG4gIC8vIEN1cnJlbnQtaG91ciBtYXJrZXI6IGEgaGFpcmxpbmUgZHJvcHBlZCB0byB0aGUgYmFzZWxpbmUgcGx1cyBhIGRvdCBvbiB0aGVcbiAgLy8gY3VydmUsIHRoZSBkb3QgZmlsbGVkIHdpdGggdGhlIHRlbXBlcmF0dXJlIGNvbG91ciBmb3IgdGhhdCBob3VyLlxuICBjbGVhcihtYXJrZXJHcm91cCk7XG4gIGNvbnN0IGlkeCA9IGN1cnJlbnRIb3VySW5kZXgoZm9yZWNhc3QpO1xuICBjb25zdCBteCA9IHgoaWR4KTtcbiAgY29uc3QgbXkgPSB5KGhvdXJzW2lkeF0udGVtcCk7XG4gIG1hcmtlckdyb3VwLmFwcGVuZENoaWxkKGVsKCdsaW5lJywge1xuICAgIGNsYXNzOiAncmliYm9uLW5vd2xpbmUnLFxuICAgIHgxOiBteC50b0ZpeGVkKDIpLCB5MTogbXkudG9GaXhlZCgyKSwgeDI6IG14LnRvRml4ZWQoMiksIHkyOiBiYXNlbGluZSxcbiAgfSkpO1xuICBtYXJrZXJHcm91cC5hcHBlbmRDaGlsZChlbCgnY2lyY2xlJywge1xuICAgIGNsYXNzOiAncmliYm9uLWRvdCcsXG4gICAgY3g6IG14LnRvRml4ZWQoMiksIGN5OiBteS50b0ZpeGVkKDIpLCByOiAnNS41JyxcbiAgICBmaWxsOiB0ZW1wQ29sb3VyKGhvdXJzW2lkeF0udGVtcCksXG4gIH0pKTtcblxuICAvLyBPcHRpb25hbCBzZWNvbmQgbGFuZS4gTm8gZGF0YSBmZWVkcyBpdCB0b2RheSAodGlkZXMgYXJlIFBybysgYW5kIGVtcHR5IGZvclxuICAvLyBpbmxhbmQgbG9jYXRpb25zKSwgc28gaXQgc3RheXMgZW1wdHkgYW5kIHRoZSB2aWV3Qm94IHVzZXMgdGhlIHNob3J0ZXIgb2YgdGhlXG4gIC8vIHR3byBoZWlnaHRzIOKAlCBidXQgdGhlIGdyb3VwIGFuZCB0aGUgaGVpZ2h0IHN3aXRjaCBleGlzdCBzbyBhIGxhbmUgY2FuIGRyb3AgaW5cbiAgLy8gd2l0aG91dCBhIGxheW91dCByZXdyaXRlLlxuICBjbGVhcihsYW5lR3JvdXApO1xuICBpZiAobGFuZU9uICYmIHR5cGVvZiBmb3JlY2FzdC5sYW5lID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm9yZWNhc3QubGFuZShsYW5lR3JvdXAsIHsgeCwgYmFzZWxpbmUsIGxhbmVUb3A6IGJhc2VsaW5lICsgVElDS19ILCBsYW5lSDogTEFORV9IIH0pO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1dlYXRoZXJBcHBfVE9QL1wiOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgJy4vbG9naWMuanMnOyAvLyBkZWZpbmVzIGZvcmVjYXN0TG9naWMgKG5vIGZldGNoIGZpcmVzIGF0IGltcG9ydCDigJQgc2VlIGluaXRGYXZvdXJpdGVzKVxuaW1wb3J0IHsgd2lyZUV2ZW50cyB9IGZyb20gJy4vaW5kZXhDaGFuZ2VzLmpzJztcbmltcG9ydCB7IGJ1aWxkUmliYm9uIH0gZnJvbSAnLi9yaWJib24uanMnO1xuaW1wb3J0IHsgaW5pdEZhdm91cml0ZXMgfSBmcm9tICcuL2Zhdm91cml0ZXMuanMnO1xuXG4vLyBUaGUgd2hvbGUgVUkgaXMgYnVpbHQgaGVyZSB3aXRoIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgKHRoZXJlIGlzIG5vIEhUTUwgc291cmNlXG4vLyBmaWxlIOKAlCBodG1sLXdlYnBhY2stcGx1Z2luIGdlbmVyYXRlcyBhbiBlbXB0eSBkb2N1bWVudCkuIFRoZSBmb3JlY2FzdCBpcyBvbmVcbi8vIGNvbnRpbnVvdXMgdGVtcGVyYXR1cmUgcmliYm9uIGFjcm9zcyBhbGwgdGhyZWUgZGF5cywgYSByZWFkb3V0IGJlbmVhdGggaXQsIGFuZFxuLy8gYSBzZWFyY2ggYm94OiBubyBjYXJkcywgbm8gYXJyb3dzLCBubyBwZXItY29uZGl0aW9uIHRoZW1lLCBubyBkYXkgbmF2aWdhdGlvbi5cblxuLy8gQSBkZXNrdG9wLW9ubHkgcHJldi9uZXh0IGNoZXZyb24gZmxhbmtpbmcgdGhlIHNhdmVkLWxvY2F0aW9uIGRvdHMuIElubGluZSBTVkdcbi8vIHNvIENTUyBjYW4gcmVjb2xvdXIgdGhlIHN0cm9rZSB2aWEgY3VycmVudENvbG9yIChpZGxlIG11dGVkLCBicmlnaHRlciBvblxuLy8gaG92ZXIpLiBmYXZvdXJpdGVzLmpzIHdpcmVzIHRoZSBjbGlja3MgdG8gcm90YXRlKCk7IHRoZSBwYWlyIGlzIGhpZGRlbiB3aXRoXG4vLyB0aGUgZG90cyBiZWxvdyB0d28gbG9jYXRpb25zLCBhbmQgaGlkZGVuIGVudGlyZWx5IGF0IOKJpDQ4MHB4IHdoZXJlIHN3aXBlIHJ1bGVzLlxuZnVuY3Rpb24gbmF2QXJyb3coaWQsIGRpciwgbGFiZWwpIHtcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ0bi50eXBlID0gJ2J1dHRvbic7XG4gIGJ0bi5pZCA9IGlkO1xuICBidG4uY2xhc3NOYW1lID0gJ2Fycm93JztcbiAgYnRuLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIGxhYmVsKTtcbiAgY29uc3QgcG9pbnRzID0gZGlyIDwgMCA/ICcxMywzIDcsNyAxMywxMScgOiAnNywzIDEzLDcgNywxMSc7XG4gIGJ0bi5pbm5lckhUTUwgPVxuICAgICc8c3ZnIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIxNFwiIHZpZXdCb3g9XCIwIDAgMjAgMTRcIiBmaWxsPVwibm9uZVwiICcgK1xuICAgICdzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiICcgK1xuICAgICdzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPicgK1xuICAgICc8cG9seWxpbmUgcG9pbnRzPVwiJyArIHBvaW50cyArICdcIj48L3BvbHlsaW5lPjwvc3ZnPic7XG4gIHJldHVybiBidG47XG59XG5cbi8vIE9uZSBvcHRpb24gaW4gdGhlIHNlZ21lbnRlZCBDL0YgdW5pdCBzd2l0Y2guIFRoZSBidXR0b25zIGNhcnJ5IG5vIGxvZ2ljIGhlcmUg4oCUXG4vLyBpbmRleENoYW5nZXMuanMgd2lyZXMgdGhlIGNsaWNrcyBvbmNlIGluIHdpcmVFdmVudHMoKSBhbmQgb3ducyBib3RoIHRoZSBhY3RpdmVcbi8vIHN0YXRlIGFuZCB0aGUgZGlzcGxheS1vbmx5IENlbHNpdXPihpJGYWhyZW5oZWl0IGNvbnZlcnNpb24uXG5mdW5jdGlvbiB1bml0T3B0KHVuaXQpIHtcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ0bi50eXBlID0gJ2J1dHRvbic7XG4gIGJ0bi5jbGFzc05hbWUgPSAndW5pdE9wdCc7XG4gIGJ0bi5kYXRhc2V0LnVuaXQgPSB1bml0O1xuICBidG4udGV4dENvbnRlbnQgPSAnwrAnICsgdW5pdDtcbiAgcmV0dXJuIGJ0bjtcbn1cblxuZnVuY3Rpb24gc3RhdChpZCwgbGFiZWwpIHtcbiAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjZWxsLmNsYXNzTmFtZSA9ICdzdGF0JztcblxuICBjb25zdCBsYWJlbEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxhYmVsRWwuY2xhc3NOYW1lID0gJ3N0YXQtbGFiZWwnO1xuICBsYWJlbEVsLnRleHRDb250ZW50ID0gbGFiZWw7XG5cbiAgY29uc3QgdmFsdWVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB2YWx1ZUVsLmNsYXNzTmFtZSA9ICdzdGF0LXZhbHVlJztcbiAgdmFsdWVFbC5pZCA9IGlkO1xuICB2YWx1ZUVsLnRleHRDb250ZW50ID0gJ+KAlCc7XG5cbiAgY2VsbC5hcHBlbmRDaGlsZChsYWJlbEVsKTtcbiAgY2VsbC5hcHBlbmRDaGlsZCh2YWx1ZUVsKTtcbiAgcmV0dXJuIGNlbGw7XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudCgpIHtcbiAgY29uc3QgYXBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGFwcC5pZCA9ICdhcHAnO1xuXG4gIC8vIFJpYmJvbiBwYW5lbCDigJQgdGhlIFNWRyBjdXJ2ZSBpcyBtb3VudGVkIGludG8gI3JpYmJvbldyYXAgYnkgYnVpbGRSaWJib24oKS5cbiAgY29uc3QgcmliYm9uV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICByaWJib25XcmFwLmlkID0gJ3JpYmJvbldyYXAnO1xuXG4gIC8vIFJlYWRvdXQ6IGxvY2F0aW9uLCBjdXJyZW50IHRlbXBlcmF0dXJlLCBjb25kaXRpb24sIGFuZCBhIGZvdXItdXAgc3RhdCByb3cuXG4gIGNvbnN0IHJlYWRvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcmVhZG91dC5pZCA9ICdyZWFkb3V0JztcblxuICAvLyBMb2NhdGlvbiBuYW1lIHBhaXJlZCB3aXRoIGEgY29tcGFjdCBDL0YgdW5pdCBzd2l0Y2ggb24gb25lIHJvdy4gVGhlIHN3aXRjaFxuICAvLyBmbGlwcyB0aGUgdGVtcGVyYXR1cmUgcmVhZG91dHMgKGN1cnJlbnQgKyBmZWVscyBsaWtlKSBiZXR3ZWVuIMKwQyBhbmQgwrBGIGZvclxuICAvLyBkaXNwbGF5IG9ubHk7IHRoZSByYXcgQ2Vsc2l1cyBzdGlsbCBmbG93cyB0byByaWJib24uanMgdW5jaGFuZ2VkLlxuICBjb25zdCBsb2NhdGlvblJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsb2NhdGlvblJvdy5pZCA9ICdsb2NhdGlvblJvdyc7XG5cbiAgY29uc3QgbG9jYXRpb25OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxvY2F0aW9uTmFtZS5pZCA9ICdsb2NhdGlvbk5hbWUnO1xuICBsb2NhdGlvbk5hbWUudGV4dENvbnRlbnQgPSAn4oCUJztcblxuICBjb25zdCB1bml0U3dpdGNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHVuaXRTd2l0Y2guaWQgPSAndW5pdFN3aXRjaCc7XG4gIHVuaXRTd2l0Y2guYXBwZW5kQ2hpbGQodW5pdE9wdCgnQycpKTtcbiAgdW5pdFN3aXRjaC5hcHBlbmRDaGlsZCh1bml0T3B0KCdGJykpO1xuXG4gIGxvY2F0aW9uUm93LmFwcGVuZENoaWxkKGxvY2F0aW9uTmFtZSk7XG4gIGxvY2F0aW9uUm93LmFwcGVuZENoaWxkKHVuaXRTd2l0Y2gpO1xuXG4gIC8vIFNhdmVkLWxvY2F0aW9uIGluZGljYXRvcjogb25lIGRvdCBwZXIgc2F2ZWQgbG9jYXRpb24sIHRoZSBjdXJyZW50IG9uZSBmaWxsZWQuXG4gIC8vIFBvcHVsYXRlZCBieSBmYXZvdXJpdGVzLmpzLiBUaGUgZG90cyBzaXQgaW5zaWRlIGEgLm5hdlJvdyBiZXR3ZWVuIHR3b1xuICAvLyBkZXNrdG9wLW9ubHkgcHJldi9uZXh0IGFycm93czsgZmF2b3VyaXRlcy5qcyBnYXRlcyB0aGUgd2hvbGUgcm93J3NcbiAgLy8gdmlzaWJpbGl0eSAoaGlkZGVuIHVudGlsIHR3byBvciBtb3JlIGxvY2F0aW9ucyBhcmUgc2F2ZWQpLlxuICBjb25zdCBuYXZSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbmF2Um93LmNsYXNzTmFtZSA9ICduYXZSb3cgaGlkZGVuJztcblxuICBjb25zdCBkb3RSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZG90Um93LmlkID0gJ2RvdFJvdyc7XG5cbiAgbmF2Um93LmFwcGVuZENoaWxkKG5hdkFycm93KCduYXZQcmV2JywgLTEsICdQcmV2aW91cyBsb2NhdGlvbicpKTtcbiAgbmF2Um93LmFwcGVuZENoaWxkKGRvdFJvdyk7XG4gIG5hdlJvdy5hcHBlbmRDaGlsZChuYXZBcnJvdygnbmF2TmV4dCcsIDEsICdOZXh0IGxvY2F0aW9uJykpO1xuXG4gIGNvbnN0IGN1cnJlbnRUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGN1cnJlbnRUZW1wLmlkID0gJ2N1cnJlbnRUZW1wJztcbiAgY3VycmVudFRlbXAudGV4dENvbnRlbnQgPSAn4oCUJztcblxuICBjb25zdCBjdXJyZW50Q29uZGl0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGN1cnJlbnRDb25kaXRpb24uaWQgPSAnY3VycmVudENvbmRpdGlvbic7XG4gIGN1cnJlbnRDb25kaXRpb24udGV4dENvbnRlbnQgPSAn4oCUJztcblxuICBjb25zdCBzdGF0Um93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHN0YXRSb3cuaWQgPSAnc3RhdFJvdyc7XG4gIHN0YXRSb3cuYXBwZW5kQ2hpbGQoc3RhdCgnZmVlbHNWYWwnLCAnRkVFTFMgTElLRScpKTtcbiAgc3RhdFJvdy5hcHBlbmRDaGlsZChzdGF0KCdodW1pZGl0eVZhbCcsICdIVU1JRElUWScpKTtcbiAgc3RhdFJvdy5hcHBlbmRDaGlsZChzdGF0KCdyYWluVmFsJywgJ1JBSU4nKSk7XG4gIHN0YXRSb3cuYXBwZW5kQ2hpbGQoc3RhdCgnd2luZFZhbCcsICdXSU5EJykpO1xuXG4gIHJlYWRvdXQuYXBwZW5kQ2hpbGQobG9jYXRpb25Sb3cpO1xuICByZWFkb3V0LmFwcGVuZENoaWxkKG5hdlJvdyk7XG4gIHJlYWRvdXQuYXBwZW5kQ2hpbGQoY3VycmVudFRlbXApO1xuICByZWFkb3V0LmFwcGVuZENoaWxkKGN1cnJlbnRDb25kaXRpb24pO1xuICByZWFkb3V0LmFwcGVuZENoaWxkKHN0YXRSb3cpO1xuXG4gIC8vIFRoZSByaWJib24gYW5kIGl0cyByZWFkb3V0IGFyZSB3cmFwcGVkIGluIG9uZSBjYXJkIHNvIHRoZXkgc2xpZGUgdG9nZXRoZXIgYXNcbiAgLy8gYSBzaW5nbGUgdW5pdCBvbiBhIGNvbW1pdHRlZCBtb2JpbGUgc3dpcGUgKGZhdm91cml0ZXMuanMgZHJpdmVzIHRoZVxuICAvLyBkaXJlY3Rpb24tYXdhcmUgc2xpZGUgdmlhICN3ZWF0aGVyQ2FyZC5zbGlkZS0qIGluIHN0eWxlLmNzcykuIEl0J3MgYSBwbGFpblxuICAvLyBmbGV4IGNvbHVtbiBhdCBldmVyeSB3aWR0aCDigJQgdGhlIHdyYXBwaW5nIGlzIHRyYW5zcGFyZW50IHRvIHRoZSBsYXlvdXQuXG4gIGNvbnN0IHdlYXRoZXJDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHdlYXRoZXJDYXJkLmlkID0gJ3dlYXRoZXJDYXJkJztcbiAgd2VhdGhlckNhcmQuYXBwZW5kQ2hpbGQocmliYm9uV3JhcCk7XG4gIHdlYXRoZXJDYXJkLmFwcGVuZENoaWxkKHJlYWRvdXQpO1xuXG4gIC8vIFNlYXJjaCBmb3JtLiBBIHJlYWwgPGZvcm0+ICsgc3VibWl0IGJ1dHRvbiBzbyBFbnRlciBhbmQgY2xpY2sgc2hhcmUgb25lXG4gIC8vIHN1Ym1pdCBldmVudCAod2lyZWQgb25jZSBpbiB3aXJlRXZlbnRzKCkpLlxuICBjb25zdCBzZWFyY2hGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBzZWFyY2hGb3JtLmlkID0gJ3NlYXJjaEZvcm0nO1xuXG4gIC8vIFRoZSBpbnB1dCBhbmQgaXRzIGF1dG9jb21wbGV0ZSBkcm9wZG93biBzaGFyZSBhIHJlbGF0aXZlbHktcG9zaXRpb25lZCB3cmFwcGVyXG4gIC8vIHNvICNzdWdnZXN0aW9ucyBjYW4gaGFuZyBiZW5lYXRoICNzZWFyY2hJbnB1dCAodG9wOiAxMDAlKSBhbmQgYWxpZ24gdG8gaXRzXG4gIC8vIGVkZ2VzLCBpbnN0ZWFkIG9mIGJlY29taW5nIGEgdGhpcmQgZmxleCBjaGlsZCBvZiB0aGUgcm93LlxuICBjb25zdCBzZWFyY2hJbnB1dFdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2VhcmNoSW5wdXRXcmFwLmlkID0gJ3NlYXJjaElucHV0V3JhcCc7XG5cbiAgY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBzZWFyY2hJbnB1dC5pZCA9ICdzZWFyY2hJbnB1dCc7XG4gIHNlYXJjaElucHV0LnR5cGUgPSAndGV4dCc7XG4gIHNlYXJjaElucHV0LnBsYWNlaG9sZGVyID0gJ1NlYXJjaCBsb2NhdGlvbic7XG4gIHNlYXJjaElucHV0LnNldEF0dHJpYnV0ZSgnYXV0b2NvbXBsZXRlJywgJ29mZicpO1xuXG4gIC8vIENpdHktc3VnZ2VzdGlvbiBkcm9wZG93bi4gUG9wdWxhdGVkIGJ5IGEgZGVib3VuY2VkIGxvb2t1cCB3aXJlZCBvbmNlIGluXG4gIC8vIHdpcmVFdmVudHMoKTsgaGlkZGVuIHVudGlsIHRoZXJlIGFyZSBtYXRjaGVzIHRvIHNob3cuXG4gIGNvbnN0IHN1Z2dlc3Rpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHN1Z2dlc3Rpb25zLmlkID0gJ3N1Z2dlc3Rpb25zJztcbiAgc3VnZ2VzdGlvbnMuY2xhc3NOYW1lID0gJ2hpZGRlbic7XG4gIHN1Z2dlc3Rpb25zLnNldEF0dHJpYnV0ZSgncm9sZScsICdsaXN0Ym94Jyk7XG5cbiAgY29uc3Qgc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHNlYXJjaEJ1dHRvbi5pZCA9ICdzZWFyY2hCdXR0b24nO1xuICBzZWFyY2hCdXR0b24udHlwZSA9ICdzdWJtaXQnO1xuICBzZWFyY2hCdXR0b24udGV4dENvbnRlbnQgPSAnU3VibWl0JztcblxuICBzZWFyY2hJbnB1dFdyYXAuYXBwZW5kQ2hpbGQoc2VhcmNoSW5wdXQpO1xuICBzZWFyY2hJbnB1dFdyYXAuYXBwZW5kQ2hpbGQoc3VnZ2VzdGlvbnMpO1xuXG4gIHNlYXJjaEZvcm0uYXBwZW5kQ2hpbGQoc2VhcmNoSW5wdXRXcmFwKTtcbiAgc2VhcmNoRm9ybS5hcHBlbmRDaGlsZChzZWFyY2hCdXR0b24pO1xuXG4gIGFwcC5hcHBlbmRDaGlsZCh3ZWF0aGVyQ2FyZCk7XG4gIGFwcC5hcHBlbmRDaGlsZChzZWFyY2hGb3JtKTtcblxuICByZXR1cm4gYXBwO1xufVxuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudCgpKTtcblxuLy8gQnVpbGQgdGhlIFNWRyBzY2FmZm9sZCBub3cgdGhhdCAjcmliYm9uV3JhcCBleGlzdHMsIHRoZW4gcmVnaXN0ZXIgbGlzdGVuZXJzXG4vLyBleGFjdGx5IG9uY2UuIEJvdGggcnVuIG9mZiB0aGUgcmVuZGVyIHBhdGgsIHNvIG5vdGhpbmcgbXVsdGlwbGllcyBhY3Jvc3Ncbi8vIGZldGNoZXMuIGluaXRGYXZvdXJpdGVzKCkgbG9hZHMgdGhlIHNhdmVkIGxvY2F0aW9ucywgd2lyZXMgdGhlIHN3aXBlL2RvdFxuLy8gZ2VzdHVyZXMgb25jZSwgZHJhd3MgdGhlIGRvdHMsIGFuZCBmaXJlcyB0aGUgc2luZ2xlIGluaXRpYWwgZmV0Y2ggKHRoZSBmaXJzdFxuLy8gc2F2ZWQgbG9jYXRpb24sIG9yIHRoZSBkZWZhdWx0IHdoZW4gbm9uZSBhcmUgc2F2ZWQpLCB3aGljaCByZXNvbHZlc1xuLy8gYWZ0ZXJ3YXJkcyBhbmQgcmVuZGVycyBpbnRvIHRoaXMgc2NhZmZvbGQuXG5idWlsZFJpYmJvbihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmliYm9uV3JhcCcpKTtcbndpcmVFdmVudHMoKTtcbmluaXRGYXZvdXJpdGVzKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=