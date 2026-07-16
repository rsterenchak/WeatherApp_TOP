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

#locationName {
  font-family: var(--mono);
  font-size: 13px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--muted);
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: 'Roboto';\n  src: url('./Roboto-Regular.ttf');\n  font-weight: 300 400;\n}\n\n/* Palette:\n   ground  #12181F   rules  #26313B\n   text    #EAEEF2 (primary) / #8CA0AE (muted)\n   The temperature colours live in ribbon.js (the curve is coloured by the\n   temperature scalar, not by CSS). */\n:root {\n  --ground: #12181F;\n  --rule: #26313B;\n  --text: #EAEEF2;\n  --muted: #8CA0AE;\n  --mono: 'SFMono-Regular', 'SF Mono', 'Menlo', 'Consolas', 'Liberation Mono', monospace;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  background: var(--ground);\n  color: var(--text);\n  font-family: 'Roboto', system-ui, sans-serif;\n  -webkit-font-smoothing: antialiased;\n}\n\n/* dvh (not vh): on iOS Safari vh resolves to the tall viewport and parks the\n   bottom of the layout under the URL bar. */\n#app {\n  min-height: 100dvh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 28px;\n  max-width: 720px;\n  margin: 0 auto;\n  padding: 32px 20px;\n}\n\n/* Ribbon: the SVG scales to the column width via the viewBox, so all 72 hours\n   are on screen at any width down to 380px without scroll or pan. */\n#ribbonWrap {\n  width: 100%;\n}\n\n#ribbonSvg {\n  display: block;\n  width: 100%;\n  height: auto;\n  overflow: visible;\n}\n\n.ribbon-curve {\n  stroke-width: 2.5;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n\n/* Day boundary hairlines at hours 24 and 48. */\n.ribbon-hairline {\n  stroke: var(--rule);\n  stroke-width: 1;\n}\n\n.ribbon-tick {\n  fill: var(--muted);\n  font-family: var(--mono);\n  font-size: 12px;\n  letter-spacing: 1px;\n}\n\n.ribbon-nowline {\n  stroke: var(--muted);\n  stroke-width: 1;\n  stroke-dasharray: 2 3;\n  opacity: 0.7;\n}\n\n.ribbon-dot {\n  stroke: var(--ground);\n  stroke-width: 2;\n}\n\n/* Readout beneath the curve. */\n#readout {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  text-align: center;\n}\n\n#locationName {\n  font-family: var(--mono);\n  font-size: 13px;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  color: var(--muted);\n}\n\n/* Saved-location navigation: prev/next chevrons flanking the dot row. The whole\n   row is hidden at a count of one (a single location needs no affordance); the\n   arrows are desktop-only and drop out at ≤480px where swipe takes over. */\n.navRow {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  margin: 4px 0 2px;\n}\n\n.navRow.hidden {\n  display: none;\n}\n\n.arrow {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  border: none;\n  background: none;\n  color: var(--muted);\n  cursor: pointer;\n}\n\n.arrow:hover {\n  color: #EAEEF2;\n}\n\n.arrow svg {\n  display: block;\n  width: 20px;\n  height: 14px;\n}\n\n/* Saved-location dots: one per saved location, the active one filled. */\n#dotRow {\n  position: relative; /* offset parent for the desktop remove popover */\n  display: flex;\n  gap: 8px;\n}\n\n.dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #2E3B45;\n  cursor: pointer;\n  touch-action: manipulation;\n}\n\n.dot.active {\n  background: #EAEEF2;\n}\n\n/* Desktop remove-confirmation popover, anchored above the long-pressed dot.\n   Touch keeps the native confirm; this is the mouse/pen path. */\n.removePopover {\n  position: absolute;\n  bottom: calc(100% + 10px);\n  transform: translateX(-50%);\n  z-index: 20;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 12px;\n  background: var(--ground);\n  border: 1px solid var(--rule);\n  border-radius: 8px;\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.45);\n  white-space: nowrap;\n}\n\n/* Downward pointer arrow, bordered: outer triangle in the rule colour with an\n   inner ground-filled triangle laid a pixel higher on top of it. */\n.removePopover::before,\n.removePopover::after {\n  content: '';\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 0;\n  height: 0;\n  border-style: solid;\n}\n\n.removePopover::before {\n  top: 100%;\n  border-width: 7px 7px 0 7px;\n  border-color: var(--rule) transparent transparent transparent;\n}\n\n.removePopover::after {\n  top: calc(100% - 1px);\n  border-width: 6px 6px 0 6px;\n  border-color: var(--ground) transparent transparent transparent;\n}\n\n.removePopover-name {\n  color: var(--text);\n  font-size: 13px;\n}\n\n.removePopover-actions {\n  display: flex;\n  gap: 8px;\n}\n\n.removePopover-cancel,\n.removePopover-delete {\n  font-family: inherit;\n  font-size: 12px;\n  padding: 5px 12px;\n  border: 1px solid var(--rule);\n  border-radius: 8px;\n  cursor: pointer;\n}\n\n.removePopover-cancel {\n  background: none;\n  color: var(--muted);\n}\n\n.removePopover-cancel:hover {\n  color: var(--text);\n}\n\n.removePopover-delete {\n  background: var(--text);\n  color: var(--ground);\n  border-color: var(--text);\n}\n\n.removePopover-delete:hover {\n  filter: brightness(0.92);\n}\n\n/* Roboto Light 40px for the reading. */\n#currentTemp {\n  font-family: 'Roboto', sans-serif;\n  font-weight: 300;\n  font-size: 40px;\n  line-height: 1.1;\n}\n\n#currentCondition {\n  font-size: 15px;\n  color: var(--text);\n}\n\n/* Four-up stat row: text labels, no icons. */\n#statRow {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 10px;\n  width: 100%;\n  margin-top: 14px;\n}\n\n.stat {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  padding: 12px 6px;\n  border: 1px solid var(--rule);\n  border-radius: 8px;\n}\n\n.stat-label {\n  font-family: var(--mono);\n  font-size: 10px;\n  letter-spacing: 1px;\n  color: var(--muted);\n}\n\n.stat-value {\n  font-size: 17px;\n  color: var(--text);\n}\n\n/* Search form. */\n#searchForm {\n  display: flex;\n  gap: 10px;\n  width: 100%;\n}\n\n/* Holds the input and its autocomplete dropdown; position: relative anchors\n   #suggestions beneath the input. flex: 1 so the pair fills the row the way the\n   bare input used to. */\n#searchInputWrap {\n  position: relative;\n  flex: 1;\n  min-width: 0;\n}\n\n#searchInput {\n  width: 100%;\n  padding: 12px 14px;\n  font-family: var(--mono);\n  font-size: 16px; /* 16px so iOS Safari doesn't auto-zoom the input on focus */\n  color: var(--text);\n  background: transparent;\n  border: 1px solid var(--rule);\n  border-radius: 8px;\n}\n\n#searchInput::placeholder {\n  color: var(--muted);\n}\n\n#searchInput:focus {\n  outline: none;\n  border-color: var(--muted);\n}\n\n/* While the dropdown is open the input's bottom corners square off and its\n   bottom edge drops out, so it reads as one attached surface with #suggestions. */\n#searchForm.suggesting #searchInput {\n  border-radius: 8px 8px 0 0;\n  border-bottom-color: transparent;\n}\n\n/* Failed lookup: reddened border, current ribbon left in place. */\n#searchForm.invalid #searchInput {\n  border-color: #C2452D;\n}\n\n/* Autocomplete dropdown: hangs off the bottom of the input, matching its width\n   and continuing its focused border into a bottom-rounded panel. */\n#suggestions {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  z-index: 10;\n  max-height: 240px;\n  overflow-y: auto;\n  background: var(--ground);\n  border: 1px solid var(--muted);\n  border-top: none;\n  border-radius: 0 0 8px 8px;\n}\n\n#suggestions.hidden {\n  display: none;\n}\n\n.suggestion-item {\n  display: flex;\n  align-items: baseline;\n  gap: 8px;\n  padding: 10px 14px;\n  font-family: var(--mono);\n  cursor: pointer;\n}\n\n.suggestion-item:hover,\n.suggestion-item.selected {\n  background: var(--rule);\n}\n\n.suggestion-city {\n  font-size: 14px;\n  color: var(--text);\n}\n\n.suggestion-country {\n  font-size: 12px;\n  color: var(--muted);\n}\n\n#searchButton {\n  padding: 12px 20px;\n  font-family: var(--mono);\n  font-size: 14px;\n  letter-spacing: 1px;\n  color: var(--ground);\n  background: var(--text);\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n}\n\n#searchButton:hover {\n  filter: brightness(0.92);\n}\n\n@media (max-width: 480px) {\n  #app {\n    gap: 22px;\n    padding: 24px 16px;\n  }\n\n  /* Mobile navigates by swipe; drop the arrows but keep the dots. */\n  .arrow {\n    display: none;\n  }\n\n  #statRow {\n    gap: 8px;\n  }\n\n  .stat {\n    padding: 10px 4px;\n  }\n\n  .stat-value {\n    font-size: 15px;\n  }\n}\n"],"sourceRoot":""}]);
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

// Saved location query strings, in order. currentIndex points at the active one.
let locations = [];
let currentIndex = 0;

let dotRow; // #dotRow, cached once by initFavourites()
let navRow; // .navRow wrapping the dots and the prev/next arrows

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

// Rotate through the saved list with wrap. No-op below two locations.
function rotate(dir) {
  const n = locations.length;
  if (n <= 1) { return; }
  currentIndex = (currentIndex + dir + n) % n;
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

// Cached DOM references, populated once by cacheDom() after index.js has built
// and appended the DOM.
let searchForm, searchInput, suggestions, locationName, currentTemp,
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

  locationName.textContent = forecast.location.name;
  currentTemp.textContent = Math.round(now.temp) + '°';
  currentCondition.textContent = now.condition;

  feelsVal.textContent = Math.round(now.feelsLike) + '°';
  humidityVal.textContent = now.humidity + '%';
  rainVal.textContent = now.rain + '%';
  windVal.textContent = Math.round(now.wind) + ' km/h';
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

  const locationName = document.createElement('div');
  locationName.id = 'locationName';
  locationName.textContent = '—';

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

  readout.appendChild(locationName);
  readout.appendChild(navRow);
  readout.appendChild(currentTemp);
  readout.appendChild(currentCondition);
  readout.appendChild(statRow);

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

  app.appendChild(ribbonWrap);
  app.appendChild(readout);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMscUhBQXVDO0FBQ25GLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0RUFBNEU7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxPQUFPLFFBQVEsT0FBTyxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxPQUFPLE1BQU0sVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxZQUFZLE1BQU0sd0JBQXdCLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLE9BQU8sT0FBTyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLE9BQU8sTUFBTSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsdUJBQXVCLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8s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YUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7V0NBQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ0QsQ0FBQztBQUMwQjtBQUNMO0FBQ087O0FBRWpEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBVztBQUNYLDREQUFVO0FBQ1YsOERBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vLi9zcmMvZmF2b3VyaXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vLi9zcmMvaW5kZXhDaGFuZ2VzLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL3NyYy9sb2dpYy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vLi9zcmMvcmliYm9uLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL1JvYm90by1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gIGZvbnQtd2VpZ2h0OiAzMDAgNDAwO1xufVxuXG4vKiBQYWxldHRlOlxuICAgZ3JvdW5kICAjMTIxODFGICAgcnVsZXMgICMyNjMxM0JcbiAgIHRleHQgICAgI0VBRUVGMiAocHJpbWFyeSkgLyAjOENBMEFFIChtdXRlZClcbiAgIFRoZSB0ZW1wZXJhdHVyZSBjb2xvdXJzIGxpdmUgaW4gcmliYm9uLmpzICh0aGUgY3VydmUgaXMgY29sb3VyZWQgYnkgdGhlXG4gICB0ZW1wZXJhdHVyZSBzY2FsYXIsIG5vdCBieSBDU1MpLiAqL1xuOnJvb3Qge1xuICAtLWdyb3VuZDogIzEyMTgxRjtcbiAgLS1ydWxlOiAjMjYzMTNCO1xuICAtLXRleHQ6ICNFQUVFRjI7XG4gIC0tbXV0ZWQ6ICM4Q0EwQUU7XG4gIC0tbW9ubzogJ1NGTW9uby1SZWd1bGFyJywgJ1NGIE1vbm8nLCAnTWVubG8nLCAnQ29uc29sYXMnLCAnTGliZXJhdGlvbiBNb25vJywgbW9ub3NwYWNlO1xufVxuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JvdW5kKTtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIHN5c3RlbS11aSwgc2Fucy1zZXJpZjtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbi8qIGR2aCAobm90IHZoKTogb24gaU9TIFNhZmFyaSB2aCByZXNvbHZlcyB0byB0aGUgdGFsbCB2aWV3cG9ydCBhbmQgcGFya3MgdGhlXG4gICBib3R0b20gb2YgdGhlIGxheW91dCB1bmRlciB0aGUgVVJMIGJhci4gKi9cbiNhcHAge1xuICBtaW4taGVpZ2h0OiAxMDBkdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDI4cHg7XG4gIG1heC13aWR0aDogNzIwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAzMnB4IDIwcHg7XG59XG5cbi8qIFJpYmJvbjogdGhlIFNWRyBzY2FsZXMgdG8gdGhlIGNvbHVtbiB3aWR0aCB2aWEgdGhlIHZpZXdCb3gsIHNvIGFsbCA3MiBob3Vyc1xuICAgYXJlIG9uIHNjcmVlbiBhdCBhbnkgd2lkdGggZG93biB0byAzODBweCB3aXRob3V0IHNjcm9sbCBvciBwYW4uICovXG4jcmliYm9uV3JhcCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jcmliYm9uU3ZnIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG4ucmliYm9uLWN1cnZlIHtcbiAgc3Ryb2tlLXdpZHRoOiAyLjU7XG4gIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcbiAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDtcbn1cblxuLyogRGF5IGJvdW5kYXJ5IGhhaXJsaW5lcyBhdCBob3VycyAyNCBhbmQgNDguICovXG4ucmliYm9uLWhhaXJsaW5lIHtcbiAgc3Ryb2tlOiB2YXIoLS1ydWxlKTtcbiAgc3Ryb2tlLXdpZHRoOiAxO1xufVxuXG4ucmliYm9uLXRpY2sge1xuICBmaWxsOiB2YXIoLS1tdXRlZCk7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tb25vKTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG4ucmliYm9uLW5vd2xpbmUge1xuICBzdHJva2U6IHZhcigtLW11dGVkKTtcbiAgc3Ryb2tlLXdpZHRoOiAxO1xuICBzdHJva2UtZGFzaGFycmF5OiAyIDM7XG4gIG9wYWNpdHk6IDAuNztcbn1cblxuLnJpYmJvbi1kb3Qge1xuICBzdHJva2U6IHZhcigtLWdyb3VuZCk7XG4gIHN0cm9rZS13aWR0aDogMjtcbn1cblxuLyogUmVhZG91dCBiZW5lYXRoIHRoZSBjdXJ2ZS4gKi9cbiNyZWFkb3V0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2xvY2F0aW9uTmFtZSB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tb25vKTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xufVxuXG4vKiBTYXZlZC1sb2NhdGlvbiBuYXZpZ2F0aW9uOiBwcmV2L25leHQgY2hldnJvbnMgZmxhbmtpbmcgdGhlIGRvdCByb3cuIFRoZSB3aG9sZVxuICAgcm93IGlzIGhpZGRlbiBhdCBhIGNvdW50IG9mIG9uZSAoYSBzaW5nbGUgbG9jYXRpb24gbmVlZHMgbm8gYWZmb3JkYW5jZSk7IHRoZVxuICAgYXJyb3dzIGFyZSBkZXNrdG9wLW9ubHkgYW5kIGRyb3Agb3V0IGF0IOKJpDQ4MHB4IHdoZXJlIHN3aXBlIHRha2VzIG92ZXIuICovXG4ubmF2Um93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgbWFyZ2luOiA0cHggMCAycHg7XG59XG5cbi5uYXZSb3cuaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmFycm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYXJyb3c6aG92ZXIge1xuICBjb2xvcjogI0VBRUVGMjtcbn1cblxuLmFycm93IHN2ZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAxNHB4O1xufVxuXG4vKiBTYXZlZC1sb2NhdGlvbiBkb3RzOiBvbmUgcGVyIHNhdmVkIGxvY2F0aW9uLCB0aGUgYWN0aXZlIG9uZSBmaWxsZWQuICovXG4jZG90Um93IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiBvZmZzZXQgcGFyZW50IGZvciB0aGUgZGVza3RvcCByZW1vdmUgcG9wb3ZlciAqL1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDhweDtcbn1cblxuLmRvdCB7XG4gIHdpZHRoOiA4cHg7XG4gIGhlaWdodDogOHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICMyRTNCNDU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XG59XG5cbi5kb3QuYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI0VBRUVGMjtcbn1cblxuLyogRGVza3RvcCByZW1vdmUtY29uZmlybWF0aW9uIHBvcG92ZXIsIGFuY2hvcmVkIGFib3ZlIHRoZSBsb25nLXByZXNzZWQgZG90LlxuICAgVG91Y2gga2VlcHMgdGhlIG5hdGl2ZSBjb25maXJtOyB0aGlzIGlzIHRoZSBtb3VzZS9wZW4gcGF0aC4gKi9cbi5yZW1vdmVQb3BvdmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IGNhbGMoMTAwJSArIDEwcHgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIHotaW5kZXg6IDIwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgcGFkZGluZzogMTBweCAxMnB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncm91bmQpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ydWxlKTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3gtc2hhZG93OiAwIDZweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC40NSk7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi8qIERvd253YXJkIHBvaW50ZXIgYXJyb3csIGJvcmRlcmVkOiBvdXRlciB0cmlhbmdsZSBpbiB0aGUgcnVsZSBjb2xvdXIgd2l0aCBhblxuICAgaW5uZXIgZ3JvdW5kLWZpbGxlZCB0cmlhbmdsZSBsYWlkIGEgcGl4ZWwgaGlnaGVyIG9uIHRvcCBvZiBpdC4gKi9cbi5yZW1vdmVQb3BvdmVyOjpiZWZvcmUsXG4ucmVtb3ZlUG9wb3Zlcjo6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbn1cblxuLnJlbW92ZVBvcG92ZXI6OmJlZm9yZSB7XG4gIHRvcDogMTAwJTtcbiAgYm9yZGVyLXdpZHRoOiA3cHggN3B4IDAgN3B4O1xuICBib3JkZXItY29sb3I6IHZhcigtLXJ1bGUpIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xufVxuXG4ucmVtb3ZlUG9wb3Zlcjo6YWZ0ZXIge1xuICB0b3A6IGNhbGMoMTAwJSAtIDFweCk7XG4gIGJvcmRlci13aWR0aDogNnB4IDZweCAwIDZweDtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ncm91bmQpIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xufVxuXG4ucmVtb3ZlUG9wb3Zlci1uYW1lIHtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5yZW1vdmVQb3BvdmVyLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDhweDtcbn1cblxuLnJlbW92ZVBvcG92ZXItY2FuY2VsLFxuLnJlbW92ZVBvcG92ZXItZGVsZXRlIHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogNXB4IDEycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXJ1bGUpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnJlbW92ZVBvcG92ZXItY2FuY2VsIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcbn1cblxuLnJlbW92ZVBvcG92ZXItY2FuY2VsOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xufVxuXG4ucmVtb3ZlUG9wb3Zlci1kZWxldGUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10ZXh0KTtcbiAgY29sb3I6IHZhcigtLWdyb3VuZCk7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tdGV4dCk7XG59XG5cbi5yZW1vdmVQb3BvdmVyLWRlbGV0ZTpob3ZlciB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjkyKTtcbn1cblxuLyogUm9ib3RvIExpZ2h0IDQwcHggZm9yIHRoZSByZWFkaW5nLiAqL1xuI2N1cnJlbnRUZW1wIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjE7XG59XG5cbiNjdXJyZW50Q29uZGl0aW9uIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG59XG5cbi8qIEZvdXItdXAgc3RhdCByb3c6IHRleHQgbGFiZWxzLCBubyBpY29ucy4gKi9cbiNzdGF0Um93IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgZ2FwOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMTRweDtcbn1cblxuLnN0YXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDRweDtcbiAgcGFkZGluZzogMTJweCA2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXJ1bGUpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5zdGF0LWxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1vbm8pO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XG59XG5cbi5zdGF0LXZhbHVlIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG59XG5cbi8qIFNlYXJjaCBmb3JtLiAqL1xuI3NlYXJjaEZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4vKiBIb2xkcyB0aGUgaW5wdXQgYW5kIGl0cyBhdXRvY29tcGxldGUgZHJvcGRvd247IHBvc2l0aW9uOiByZWxhdGl2ZSBhbmNob3JzXG4gICAjc3VnZ2VzdGlvbnMgYmVuZWF0aCB0aGUgaW5wdXQuIGZsZXg6IDEgc28gdGhlIHBhaXIgZmlsbHMgdGhlIHJvdyB0aGUgd2F5IHRoZVxuICAgYmFyZSBpbnB1dCB1c2VkIHRvLiAqL1xuI3NlYXJjaElucHV0V3JhcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleDogMTtcbiAgbWluLXdpZHRoOiAwO1xufVxuXG4jc2VhcmNoSW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTJweCAxNHB4O1xuICBmb250LWZhbWlseTogdmFyKC0tbW9ubyk7XG4gIGZvbnQtc2l6ZTogMTZweDsgLyogMTZweCBzbyBpT1MgU2FmYXJpIGRvZXNuJ3QgYXV0by16b29tIHRoZSBpbnB1dCBvbiBmb2N1cyAqL1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ydWxlKTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4jc2VhcmNoSW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcbn1cblxuI3NlYXJjaElucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1tdXRlZCk7XG59XG5cbi8qIFdoaWxlIHRoZSBkcm9wZG93biBpcyBvcGVuIHRoZSBpbnB1dCdzIGJvdHRvbSBjb3JuZXJzIHNxdWFyZSBvZmYgYW5kIGl0c1xuICAgYm90dG9tIGVkZ2UgZHJvcHMgb3V0LCBzbyBpdCByZWFkcyBhcyBvbmUgYXR0YWNoZWQgc3VyZmFjZSB3aXRoICNzdWdnZXN0aW9ucy4gKi9cbiNzZWFyY2hGb3JtLnN1Z2dlc3RpbmcgI3NlYXJjaElucHV0IHtcbiAgYm9yZGVyLXJhZGl1czogOHB4IDhweCAwIDA7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4vKiBGYWlsZWQgbG9va3VwOiByZWRkZW5lZCBib3JkZXIsIGN1cnJlbnQgcmliYm9uIGxlZnQgaW4gcGxhY2UuICovXG4jc2VhcmNoRm9ybS5pbnZhbGlkICNzZWFyY2hJbnB1dCB7XG4gIGJvcmRlci1jb2xvcjogI0MyNDUyRDtcbn1cblxuLyogQXV0b2NvbXBsZXRlIGRyb3Bkb3duOiBoYW5ncyBvZmYgdGhlIGJvdHRvbSBvZiB0aGUgaW5wdXQsIG1hdGNoaW5nIGl0cyB3aWR0aFxuICAgYW5kIGNvbnRpbnVpbmcgaXRzIGZvY3VzZWQgYm9yZGVyIGludG8gYSBib3R0b20tcm91bmRlZCBwYW5lbC4gKi9cbiNzdWdnZXN0aW9ucyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDAlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMTA7XG4gIG1heC1oZWlnaHQ6IDI0MHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncm91bmQpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1tdXRlZCk7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCA4cHggOHB4O1xufVxuXG4jc3VnZ2VzdGlvbnMuaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnN1Z2dlc3Rpb24taXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgZ2FwOiA4cHg7XG4gIHBhZGRpbmc6IDEwcHggMTRweDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1vbm8pO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zdWdnZXN0aW9uLWl0ZW06aG92ZXIsXG4uc3VnZ2VzdGlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tcnVsZSk7XG59XG5cbi5zdWdnZXN0aW9uLWNpdHkge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbn1cblxuLnN1Z2dlc3Rpb24tY291bnRyeSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcbn1cblxuI3NlYXJjaEJ1dHRvbiB7XG4gIHBhZGRpbmc6IDEycHggMjBweDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1vbm8pO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGNvbG9yOiB2YXIoLS1ncm91bmQpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10ZXh0KTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI3NlYXJjaEJ1dHRvbjpob3ZlciB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjkyKTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICNhcHAge1xuICAgIGdhcDogMjJweDtcbiAgICBwYWRkaW5nOiAyNHB4IDE2cHg7XG4gIH1cblxuICAvKiBNb2JpbGUgbmF2aWdhdGVzIGJ5IHN3aXBlOyBkcm9wIHRoZSBhcnJvd3MgYnV0IGtlZXAgdGhlIGRvdHMuICovXG4gIC5hcnJvdyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gICNzdGF0Um93IHtcbiAgICBnYXA6IDhweDtcbiAgfVxuXG4gIC5zdGF0IHtcbiAgICBwYWRkaW5nOiAxMHB4IDRweDtcbiAgfVxuXG4gIC5zdGF0LXZhbHVlIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQiw0Q0FBZ0M7RUFDaEMsb0JBQW9CO0FBQ3RCOztBQUVBOzs7O3FDQUlxQztBQUNyQztF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RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6Qiw4QkFBOEI7RUFDOUIsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsUUFBUTtFQUNSLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFO0lBQ0UsU0FBUztJQUNULGtCQUFrQjtFQUNwQjs7RUFFQSxrRUFBa0U7RUFDbEU7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxRQUFRO0VBQ1Y7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICBzcmM6IHVybCgnLi9Sb2JvdG8tUmVndWxhci50dGYnKTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDAgNDAwO1xcbn1cXG5cXG4vKiBQYWxldHRlOlxcbiAgIGdyb3VuZCAgIzEyMTgxRiAgIHJ1bGVzICAjMjYzMTNCXFxuICAgdGV4dCAgICAjRUFFRUYyIChwcmltYXJ5KSAvICM4Q0EwQUUgKG11dGVkKVxcbiAgIFRoZSB0ZW1wZXJhdHVyZSBjb2xvdXJzIGxpdmUgaW4gcmliYm9uLmpzICh0aGUgY3VydmUgaXMgY29sb3VyZWQgYnkgdGhlXFxuICAgdGVtcGVyYXR1cmUgc2NhbGFyLCBub3QgYnkgQ1NTKS4gKi9cXG46cm9vdCB7XFxuICAtLWdyb3VuZDogIzEyMTgxRjtcXG4gIC0tcnVsZTogIzI2MzEzQjtcXG4gIC0tdGV4dDogI0VBRUVGMjtcXG4gIC0tbXV0ZWQ6ICM4Q0EwQUU7XFxuICAtLW1vbm86ICdTRk1vbm8tUmVndWxhcicsICdTRiBNb25vJywgJ01lbmxvJywgJ0NvbnNvbGFzJywgJ0xpYmVyYXRpb24gTW9ubycsIG1vbm9zcGFjZTtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWdyb3VuZCk7XFxuICBjb2xvcjogdmFyKC0tdGV4dCk7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHN5c3RlbS11aSwgc2Fucy1zZXJpZjtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbn1cXG5cXG4vKiBkdmggKG5vdCB2aCk6IG9uIGlPUyBTYWZhcmkgdmggcmVzb2x2ZXMgdG8gdGhlIHRhbGwgdmlld3BvcnQgYW5kIHBhcmtzIHRoZVxcbiAgIGJvdHRvbSBvZiB0aGUgbGF5b3V0IHVuZGVyIHRoZSBVUkwgYmFyLiAqL1xcbiNhcHAge1xcbiAgbWluLWhlaWdodDogMTAwZHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMjhweDtcXG4gIG1heC13aWR0aDogNzIwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDMycHggMjBweDtcXG59XFxuXFxuLyogUmliYm9uOiB0aGUgU1ZHIHNjYWxlcyB0byB0aGUgY29sdW1uIHdpZHRoIHZpYSB0aGUgdmlld0JveCwgc28gYWxsIDcyIGhvdXJzXFxuICAgYXJlIG9uIHNjcmVlbiBhdCBhbnkgd2lkdGggZG93biB0byAzODBweCB3aXRob3V0IHNjcm9sbCBvciBwYW4uICovXFxuI3JpYmJvbldyYXAge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNyaWJib25Tdmcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4ucmliYm9uLWN1cnZlIHtcXG4gIHN0cm9rZS13aWR0aDogMi41O1xcbiAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xcbiAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDtcXG59XFxuXFxuLyogRGF5IGJvdW5kYXJ5IGhhaXJsaW5lcyBhdCBob3VycyAyNCBhbmQgNDguICovXFxuLnJpYmJvbi1oYWlybGluZSB7XFxuICBzdHJva2U6IHZhcigtLXJ1bGUpO1xcbiAgc3Ryb2tlLXdpZHRoOiAxO1xcbn1cXG5cXG4ucmliYm9uLXRpY2sge1xcbiAgZmlsbDogdmFyKC0tbXV0ZWQpO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1vbm8pO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG59XFxuXFxuLnJpYmJvbi1ub3dsaW5lIHtcXG4gIHN0cm9rZTogdmFyKC0tbXV0ZWQpO1xcbiAgc3Ryb2tlLXdpZHRoOiAxO1xcbiAgc3Ryb2tlLWRhc2hhcnJheTogMiAzO1xcbiAgb3BhY2l0eTogMC43O1xcbn1cXG5cXG4ucmliYm9uLWRvdCB7XFxuICBzdHJva2U6IHZhcigtLWdyb3VuZCk7XFxuICBzdHJva2Utd2lkdGg6IDI7XFxufVxcblxcbi8qIFJlYWRvdXQgYmVuZWF0aCB0aGUgY3VydmUuICovXFxuI3JlYWRvdXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA0cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNsb2NhdGlvbk5hbWUge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1vbm8pO1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xcbn1cXG5cXG4vKiBTYXZlZC1sb2NhdGlvbiBuYXZpZ2F0aW9uOiBwcmV2L25leHQgY2hldnJvbnMgZmxhbmtpbmcgdGhlIGRvdCByb3cuIFRoZSB3aG9sZVxcbiAgIHJvdyBpcyBoaWRkZW4gYXQgYSBjb3VudCBvZiBvbmUgKGEgc2luZ2xlIGxvY2F0aW9uIG5lZWRzIG5vIGFmZm9yZGFuY2UpOyB0aGVcXG4gICBhcnJvd3MgYXJlIGRlc2t0b3Atb25seSBhbmQgZHJvcCBvdXQgYXQg4omkNDgwcHggd2hlcmUgc3dpcGUgdGFrZXMgb3Zlci4gKi9cXG4ubmF2Um93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICBtYXJnaW46IDRweCAwIDJweDtcXG59XFxuXFxuLm5hdlJvdy5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmFycm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5hcnJvdzpob3ZlciB7XFxuICBjb2xvcjogI0VBRUVGMjtcXG59XFxuXFxuLmFycm93IHN2ZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAxNHB4O1xcbn1cXG5cXG4vKiBTYXZlZC1sb2NhdGlvbiBkb3RzOiBvbmUgcGVyIHNhdmVkIGxvY2F0aW9uLCB0aGUgYWN0aXZlIG9uZSBmaWxsZWQuICovXFxuI2RvdFJvdyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qIG9mZnNldCBwYXJlbnQgZm9yIHRoZSBkZXNrdG9wIHJlbW92ZSBwb3BvdmVyICovXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA4cHg7XFxufVxcblxcbi5kb3Qge1xcbiAgd2lkdGg6IDhweDtcXG4gIGhlaWdodDogOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZDogIzJFM0I0NTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xcbn1cXG5cXG4uZG90LmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kOiAjRUFFRUYyO1xcbn1cXG5cXG4vKiBEZXNrdG9wIHJlbW92ZS1jb25maXJtYXRpb24gcG9wb3ZlciwgYW5jaG9yZWQgYWJvdmUgdGhlIGxvbmctcHJlc3NlZCBkb3QuXFxuICAgVG91Y2gga2VlcHMgdGhlIG5hdGl2ZSBjb25maXJtOyB0aGlzIGlzIHRoZSBtb3VzZS9wZW4gcGF0aC4gKi9cXG4ucmVtb3ZlUG9wb3ZlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IGNhbGMoMTAwJSArIDEwcHgpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcbiAgei1pbmRleDogMjA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDhweDtcXG4gIHBhZGRpbmc6IDEwcHggMTJweDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWdyb3VuZCk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ydWxlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJveC1zaGFkb3c6IDAgNnB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjQ1KTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi8qIERvd253YXJkIHBvaW50ZXIgYXJyb3csIGJvcmRlcmVkOiBvdXRlciB0cmlhbmdsZSBpbiB0aGUgcnVsZSBjb2xvdXIgd2l0aCBhblxcbiAgIGlubmVyIGdyb3VuZC1maWxsZWQgdHJpYW5nbGUgbGFpZCBhIHBpeGVsIGhpZ2hlciBvbiB0b3Agb2YgaXQuICovXFxuLnJlbW92ZVBvcG92ZXI6OmJlZm9yZSxcXG4ucmVtb3ZlUG9wb3Zlcjo6YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxuICB3aWR0aDogMDtcXG4gIGhlaWdodDogMDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxufVxcblxcbi5yZW1vdmVQb3BvdmVyOjpiZWZvcmUge1xcbiAgdG9wOiAxMDAlO1xcbiAgYm9yZGVyLXdpZHRoOiA3cHggN3B4IDAgN3B4O1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ydWxlKSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnJlbW92ZVBvcG92ZXI6OmFmdGVyIHtcXG4gIHRvcDogY2FsYygxMDAlIC0gMXB4KTtcXG4gIGJvcmRlci13aWR0aDogNnB4IDZweCAwIDZweDtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZ3JvdW5kKSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnJlbW92ZVBvcG92ZXItbmFtZSB7XFxuICBjb2xvcjogdmFyKC0tdGV4dCk7XFxuICBmb250LXNpemU6IDEzcHg7XFxufVxcblxcbi5yZW1vdmVQb3BvdmVyLWFjdGlvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogOHB4O1xcbn1cXG5cXG4ucmVtb3ZlUG9wb3Zlci1jYW5jZWwsXFxuLnJlbW92ZVBvcG92ZXItZGVsZXRlIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgcGFkZGluZzogNXB4IDEycHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ydWxlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnJlbW92ZVBvcG92ZXItY2FuY2VsIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xcbn1cXG5cXG4ucmVtb3ZlUG9wb3Zlci1jYW5jZWw6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLXRleHQpO1xcbn1cXG5cXG4ucmVtb3ZlUG9wb3Zlci1kZWxldGUge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tdGV4dCk7XFxuICBjb2xvcjogdmFyKC0tZ3JvdW5kKTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tdGV4dCk7XFxufVxcblxcbi5yZW1vdmVQb3BvdmVyLWRlbGV0ZTpob3ZlciB7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45Mik7XFxufVxcblxcbi8qIFJvYm90byBMaWdodCA0MHB4IGZvciB0aGUgcmVhZGluZy4gKi9cXG4jY3VycmVudFRlbXAge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE7XFxufVxcblxcbiNjdXJyZW50Q29uZGl0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcXG59XFxuXFxuLyogRm91ci11cCBzdGF0IHJvdzogdGV4dCBsYWJlbHMsIG5vIGljb25zLiAqL1xcbiNzdGF0Um93IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgZ2FwOiAxMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tdG9wOiAxNHB4O1xcbn1cXG5cXG4uc3RhdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDRweDtcXG4gIHBhZGRpbmc6IDEycHggNnB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcnVsZSk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbi5zdGF0LWxhYmVsIHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tb25vKTtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xcbn1cXG5cXG4uc3RhdC12YWx1ZSB7XFxuICBmb250LXNpemU6IDE3cHg7XFxuICBjb2xvcjogdmFyKC0tdGV4dCk7XFxufVxcblxcbi8qIFNlYXJjaCBmb3JtLiAqL1xcbiNzZWFyY2hGb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLyogSG9sZHMgdGhlIGlucHV0IGFuZCBpdHMgYXV0b2NvbXBsZXRlIGRyb3Bkb3duOyBwb3NpdGlvbjogcmVsYXRpdmUgYW5jaG9yc1xcbiAgICNzdWdnZXN0aW9ucyBiZW5lYXRoIHRoZSBpbnB1dC4gZmxleDogMSBzbyB0aGUgcGFpciBmaWxscyB0aGUgcm93IHRoZSB3YXkgdGhlXFxuICAgYmFyZSBpbnB1dCB1c2VkIHRvLiAqL1xcbiNzZWFyY2hJbnB1dFdyYXAge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZmxleDogMTtcXG4gIG1pbi13aWR0aDogMDtcXG59XFxuXFxuI3NlYXJjaElucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTJweCAxNHB4O1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1vbm8pO1xcbiAgZm9udC1zaXplOiAxNnB4OyAvKiAxNnB4IHNvIGlPUyBTYWZhcmkgZG9lc24ndCBhdXRvLXpvb20gdGhlIGlucHV0IG9uIGZvY3VzICovXFxuICBjb2xvcjogdmFyKC0tdGV4dCk7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXJ1bGUpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4jc2VhcmNoSW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XFxufVxcblxcbiNzZWFyY2hJbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1tdXRlZCk7XFxufVxcblxcbi8qIFdoaWxlIHRoZSBkcm9wZG93biBpcyBvcGVuIHRoZSBpbnB1dCdzIGJvdHRvbSBjb3JuZXJzIHNxdWFyZSBvZmYgYW5kIGl0c1xcbiAgIGJvdHRvbSBlZGdlIGRyb3BzIG91dCwgc28gaXQgcmVhZHMgYXMgb25lIGF0dGFjaGVkIHN1cmZhY2Ugd2l0aCAjc3VnZ2VzdGlvbnMuICovXFxuI3NlYXJjaEZvcm0uc3VnZ2VzdGluZyAjc2VhcmNoSW5wdXQge1xcbiAgYm9yZGVyLXJhZGl1czogOHB4IDhweCAwIDA7XFxuICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyogRmFpbGVkIGxvb2t1cDogcmVkZGVuZWQgYm9yZGVyLCBjdXJyZW50IHJpYmJvbiBsZWZ0IGluIHBsYWNlLiAqL1xcbiNzZWFyY2hGb3JtLmludmFsaWQgI3NlYXJjaElucHV0IHtcXG4gIGJvcmRlci1jb2xvcjogI0MyNDUyRDtcXG59XFxuXFxuLyogQXV0b2NvbXBsZXRlIGRyb3Bkb3duOiBoYW5ncyBvZmYgdGhlIGJvdHRvbSBvZiB0aGUgaW5wdXQsIG1hdGNoaW5nIGl0cyB3aWR0aFxcbiAgIGFuZCBjb250aW51aW5nIGl0cyBmb2N1c2VkIGJvcmRlciBpbnRvIGEgYm90dG9tLXJvdW5kZWQgcGFuZWwuICovXFxuI3N1Z2dlc3Rpb25zIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTAwJTtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHotaW5kZXg6IDEwO1xcbiAgbWF4LWhlaWdodDogMjQwcHg7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JvdW5kKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW11dGVkKTtcXG4gIGJvcmRlci10b3A6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgOHB4IDhweDtcXG59XFxuXFxuI3N1Z2dlc3Rpb25zLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc3VnZ2VzdGlvbi1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxuICBnYXA6IDhweDtcXG4gIHBhZGRpbmc6IDEwcHggMTRweDtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tb25vKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnN1Z2dlc3Rpb24taXRlbTpob3ZlcixcXG4uc3VnZ2VzdGlvbi1pdGVtLnNlbGVjdGVkIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXJ1bGUpO1xcbn1cXG5cXG4uc3VnZ2VzdGlvbi1jaXR5IHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcXG59XFxuXFxuLnN1Z2dlc3Rpb24tY291bnRyeSB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xcbn1cXG5cXG4jc2VhcmNoQnV0dG9uIHtcXG4gIHBhZGRpbmc6IDEycHggMjBweDtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tb25vKTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICBjb2xvcjogdmFyKC0tZ3JvdW5kKTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXRleHQpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jc2VhcmNoQnV0dG9uOmhvdmVyIHtcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjkyKTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxuICAjYXBwIHtcXG4gICAgZ2FwOiAyMnB4O1xcbiAgICBwYWRkaW5nOiAyNHB4IDE2cHg7XFxuICB9XFxuXFxuICAvKiBNb2JpbGUgbmF2aWdhdGVzIGJ5IHN3aXBlOyBkcm9wIHRoZSBhcnJvd3MgYnV0IGtlZXAgdGhlIGRvdHMuICovXFxuICAuYXJyb3cge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgI3N0YXRSb3cge1xcbiAgICBnYXA6IDhweDtcXG4gIH1cXG5cXG4gIC5zdGF0IHtcXG4gICAgcGFkZGluZzogMTBweCA0cHg7XFxuICB9XFxuXFxuICAuc3RhdC12YWx1ZSB7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBmYXZvdXJpdGVzLmpzIOKAlCBzYXZlZCBsb2NhdGlvbnMgd2l0aCBzd2lwZS10by1yb3RhdGUuXG4vL1xuLy8gVGhlIHNlYXJjaCBmb3JtIGlzIHRoZSBhZGQgcGF0aDogYSBzdWNjZXNzZnVsIGxvb2t1cCBhcHBlbmRzIHRoZSBxdWVyeSB0byBhXG4vLyBwZXJzaXN0ZWQgbGlzdCBhbmQgc3dpdGNoZXMgdG8gaXQ7IGEgZmFpbGVkIG9uZSBsZWF2ZXMgdGhlIGxpc3QgdW50b3VjaGVkXG4vLyAobG9naWMuanMncyBpbnZhbGlkSW5wdXQoKSBoYXMgYWxyZWFkeSByZWRkZW5lZCB0aGUgaW5wdXQpLiBBIHJvdyBvZiBkb3RzXG4vLyB1bmRlciB0aGUgbG9jYXRpb24gbmFtZSBzaG93cyBob3cgbWFueSBsb2NhdGlvbnMgYXJlIHNhdmVkIGFuZCB3aGljaCBpc1xuLy8gY3VycmVudC4gQSBob3Jpem9udGFsIHN3aXBlIGFueXdoZXJlIG9uIHRoZSBzY3JlZW4gcm90YXRlcyB0aHJvdWdoIHRoZW1cbi8vICh3cmFwcGluZyBhdCBib3RoIGVuZHMpLCBhcyBkbyB0aGUgZGVza3RvcCBwcmV2L25leHQgYXJyb3dzOyBjbGlja2luZyBhIGRvdFxuLy8gb3BlbnMgYSBjb25maXJtYXRpb24gdG8gcmVtb3ZlIHRoYXQgbG9jYXRpb24uXG4vL1xuLy8gU3RhdGUgcGVyc2lzdHMgdG8gbG9jYWxTdG9yYWdlIHVuZGVyIGEgYHdlYXRoZXJhcHBfYCBrZXksIG1hdGNoaW5nIHRoZVxuLy8gY29udmVudGlvbiB1c2VkIGFjcm9zcyB0aGUgb3RoZXIgcmVwb3Mg4oCUIG5vIEluZGV4ZWREQiwgbm8gY29va2llcywgbm8gYmFja2VuZCxcbi8vIG5vIG5ldyBkZXBlbmRlbmNpZXMuIEZldGNoIHN0cmF0ZWd5IGlzIGxhenkgKGZldGNoIG9uIGFycml2YWwpOiBhIHN3aXBlIGxlYXZlc1xuLy8gdGhlIHByZXZpb3VzIHJpYmJvbiBvbiBzY3JlZW4gdW50aWwgdGhlIG5ldyBmb3JlY2FzdCByZXNvbHZlcywgcmV1c2luZyB0aGVcbi8vIHNhbWUga2VlcC1jdXJyZW50LXJpYmJvbiBiZWhhdmlvdXIgYSBzZWFyY2ggYWxyZWFkeSBoYXMsIHNvIGEgc3dpcGUgbmV2ZXJcbi8vIGxhbmRzIG9uIGEgc3Bpbm5lciAodGhlcmUgaXMgbm8gc3Bpbm5lcikgb3IgYSBibGFuayBzY3JlZW4uXG4vL1xuLy8gRXZlcnkgbGlzdGVuZXIgaGVyZSBpcyB3aXJlZCBleGFjdGx5IG9uY2UsIGZyb20gaW5pdEZhdm91cml0ZXMoKSBhdCBib290c3RyYXBcbi8vIOKAlCBuZXZlciBmcm9tIHRoZSByZW5kZXIgcGF0aCDigJQgc28gbm90aGluZyBtdWx0aXBsaWVzIGFjcm9zcyBmZXRjaGVzLlxuXG5pbXBvcnQgeyBmb3JlY2FzdExvZ2ljIH0gZnJvbSAnLi9sb2dpYy5qcyc7XG5cbmNvbnN0IEtFWSA9ICd3ZWF0aGVyYXBwX3NhdmVkTG9jYXRpb25zJztcbmNvbnN0IERFRkFVTFRfUVVFUlkgPSAnOTgwNTInO1xuY29uc3QgU1dJUEVfVEhSRVNIT0xEID0gNTA7IC8vIHB4IG9mIGhvcml6b250YWwgdHJhdmVsIHRvIGNvbW1pdCBhIHJvdGF0aW9uXG5cbi8vIFNhdmVkIGxvY2F0aW9uIHF1ZXJ5IHN0cmluZ3MsIGluIG9yZGVyLiBjdXJyZW50SW5kZXggcG9pbnRzIGF0IHRoZSBhY3RpdmUgb25lLlxubGV0IGxvY2F0aW9ucyA9IFtdO1xubGV0IGN1cnJlbnRJbmRleCA9IDA7XG5cbmxldCBkb3RSb3c7IC8vICNkb3RSb3csIGNhY2hlZCBvbmNlIGJ5IGluaXRGYXZvdXJpdGVzKClcbmxldCBuYXZSb3c7IC8vIC5uYXZSb3cgd3JhcHBpbmcgdGhlIGRvdHMgYW5kIHRoZSBwcmV2L25leHQgYXJyb3dzXG5cbi8vIFN3aXBlIHRyYWNraW5nLlxubGV0IHRvdWNoU3RhcnRYID0gbnVsbDtcbmxldCB0b3VjaFN0YXJ0WSA9IG51bGw7XG5sZXQgc3dpcGVBY3RpdmUgPSBmYWxzZTtcblxuLy8gVGhlIHNpbmdsZSBkZXNrdG9wIHJlbW92ZS1jb25maXJtYXRpb24gcG9wb3Zlciwgb3IgbnVsbC4gT25seSBvbmUgaXMgb3BlbiBhdFxuLy8gYSB0aW1lOyBhIG5ldyBvcGVuIGNsb3NlcyBhbnkgcHJpb3Igb25lIGZpcnN0LlxubGV0IG9wZW5Qb3BvdmVyID0gbnVsbDtcblxuZnVuY3Rpb24gbG9hZCgpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByYXcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShLRVkpO1xuICAgIGlmIChyYXcpIHtcbiAgICAgIGNvbnN0IHBhcnNlZCA9IEpTT04ucGFyc2UocmF3KTtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHBhcnNlZCkpIHtcbiAgICAgICAgbG9jYXRpb25zID0gcGFyc2VkLmZpbHRlcigocSkgPT4gdHlwZW9mIHEgPT09ICdzdHJpbmcnICYmIHEudHJpbSgpLmxlbmd0aCk7XG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgbG9jYXRpb25zID0gW107XG4gIH1cbn1cblxuZnVuY3Rpb24gc2F2ZSgpIHtcbiAgdHJ5IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShLRVksIEpTT04uc3RyaW5naWZ5KGxvY2F0aW9ucykpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgLy8gU3RvcmFnZSBkaXNhYmxlZC9mdWxsIOKAlCB0aGUgaW4tbWVtb3J5IGxpc3Qgc3RpbGwgd29ya3MgZm9yIHRoaXMgc2Vzc2lvbi5cbiAgfVxufVxuXG5mdW5jdGlvbiBjbGVhcihub2RlKSB7XG4gIHdoaWxlIChub2RlLmZpcnN0Q2hpbGQpIHsgbm9kZS5yZW1vdmVDaGlsZChub2RlLmZpcnN0Q2hpbGQpOyB9XG59XG5cbi8vIEZldGNoIHRoZSBhY3RpdmUgbG9jYXRpb24sIG9yIHRoZSBoYXJkIGRlZmF1bHQgd2hlbiB0aGUgbGlzdCBpcyBlbXB0eS4gTGF6eTpcbi8vIHRoZSByZW5kZXIgcGF0aCBrZWVwcyB0aGUgcHJldmlvdXMgcmliYm9uIHVudGlsIHRoaXMgcmVzb2x2ZXMuXG5mdW5jdGlvbiBzaG93Q3VycmVudCgpIHtcbiAgaWYgKGxvY2F0aW9ucy5sZW5ndGgpIHtcbiAgICBmb3JlY2FzdExvZ2ljLmZ1dHVyZUFQSUNhbGxzKGxvY2F0aW9uc1tjdXJyZW50SW5kZXhdKTtcbiAgfSBlbHNlIHtcbiAgICBmb3JlY2FzdExvZ2ljLmZ1dHVyZUFQSUNhbGxzKERFRkFVTFRfUVVFUlkpO1xuICB9XG59XG5cbi8vIFJlZHJhdyB0aGUgZG90IHJvdy4gSGlkZGVuIGF0IGEgY291bnQgb2Ygb25lIChhIHNpbmdsZSBsb2NhdGlvbiBuZWVkcyBub1xuLy8gYWZmb3JkYW5jZSkgYW5kIHdoZW4gZW1wdHkgKHRoZSBkZWZhdWx0IGZhbGxiYWNrIGlzIG5vdCBhIHNhdmVkIGxvY2F0aW9uKS5cbmZ1bmN0aW9uIHJlbmRlckRvdHMoKSB7XG4gIGlmICghZG90Um93KSB7IHJldHVybjsgfVxuICBjbG9zZVBvcG92ZXIoKTsgLy8gYSByZWRyYXcgZHJvcHMgdGhlIGRvdCB0aGUgcG9wb3ZlciB3YXMgYW5jaG9yZWQgdG9cbiAgY2xlYXIoZG90Um93KTtcblxuICAvLyBHYXRlIHRoZSB3aG9sZSAubmF2Um93IChkb3RzICsgYXJyb3dzKSB0b2dldGhlciwgc28gdGhlIGRlc2t0b3AgYXJyb3dzIHNoYXJlXG4gIC8vIHRoZSBkb3RzJyB2aXNpYmlsaXR5IHJ1bGUgYW5kIG5ldmVyIGRhbmdsZSBiZXNpZGUgYW4gZW1wdHkgcm93LlxuICBjb25zdCBnYXRlID0gbmF2Um93IHx8IGRvdFJvdztcbiAgY29uc3QgbiA9IGxvY2F0aW9ucy5sZW5ndGg7XG4gIGlmIChuIDw9IDEpIHtcbiAgICBnYXRlLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIHJldHVybjtcbiAgfVxuICBnYXRlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgY29uc3QgZG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZG90LmNsYXNzTmFtZSA9ICdkb3QnICsgKGkgPT09IGN1cnJlbnRJbmRleCA/ICcgYWN0aXZlJyA6ICcnKTtcbiAgICBkb3Quc2V0QXR0cmlidXRlKCdyb2xlJywgJ2J1dHRvbicpO1xuICAgIGRvdC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCBsb2NhdGlvbnNbaV0pO1xuICAgIHdpcmVEb3QoZG90LCBpKTtcbiAgICBkb3RSb3cuYXBwZW5kQ2hpbGQoZG90KTtcbiAgfVxufVxuXG4vLyBBIHNpbmdsZSBjbGljayBvbiBhIGRvdCBvcGVucyB0aGUgZGVsZXRlIGNvbmZpcm1hdGlvbiBmb3IgdGhhdCBsb2NhdGlvbjpcbi8vIHRoZSBuYXRpdmUgY29uZmlybSBvbiB0b3VjaCwgdGhlIGFuY2hvcmVkIGluLXBhZ2UgcG9wb3ZlciBvbiBkZXNrdG9wL21vdXNlXG4vLyAoY29uZmlybVJlbW92ZSBicmFuY2hlcyBvbiBwb2ludGVyVHlwZSkuIFRhcC10by1zZWxlY3QgaXMgaW50ZW50aW9uYWxseVxuLy8gZHJvcHBlZCDigJQgcm90YXRlKCksIGRyaXZlbiBieSB0aGUgc3dpcGUgZ2VzdHVyZSBhbmQgdGhlIGRlc2t0b3AgcHJldi9uZXh0XG4vLyBhcnJvd3MsIGlzIHRoZSBvbmx5IHdheSB0byBjaGFuZ2UgdGhlIGFjdGl2ZSBsb2NhdGlvbi4gVGhlIGNsaWNrIGV2ZW50IGlzIGFcbi8vIFBvaW50ZXJFdmVudCwgc28gaXRzIHBvaW50ZXJUeXBlIHBpY2tzIHRoZSB0b3VjaCB2cyBkZXNrdG9wIGJyYW5jaCBkaXJlY3RseS5cbmZ1bmN0aW9uIHdpcmVEb3QoZG90LCBpKSB7XG4gIGRvdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uZmlybVJlbW92ZShpLCBkb3QsIGUucG9pbnRlclR5cGUgfHwgJ21vdXNlJyk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjb25maXJtUmVtb3ZlKGksIGRvdCwgcG9pbnRlclR5cGUpIHtcbiAgaWYgKGkgPCAwIHx8IGkgPj0gbG9jYXRpb25zLmxlbmd0aCkgeyByZXR1cm47IH1cbiAgLy8gRGVza3RvcCAobW91c2UvcGVuKSBnZXRzIHRoZSBhbmNob3JlZCBpbi1wYWdlIHBvcG92ZXI7IHRvdWNoIGtlZXBzIHRoZVxuICAvLyBuYXRpdmUgY29uZmlybSB1bnRvdWNoZWQuXG4gIGlmIChwb2ludGVyVHlwZSAmJiBwb2ludGVyVHlwZSAhPT0gJ3RvdWNoJyAmJiBkb3QpIHtcbiAgICBvcGVuUmVtb3ZlUG9wb3ZlcihpLCBkb3QpO1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAod2luZG93LmNvbmZpcm0oJ1JlbW92ZSAnICsgbG9jYXRpb25zW2ldICsgJz8nKSkge1xuICAgIHJlbW92ZUxvY2F0aW9uKGkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG9uUG9wb3ZlcktleWRvd24oZSkge1xuICBpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNsb3NlUG9wb3ZlcigpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG9uT3V0c2lkZVBvaW50ZXIoZSkge1xuICBpZiAob3BlblBvcG92ZXIgJiYgIW9wZW5Qb3BvdmVyLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgIGNsb3NlUG9wb3ZlcigpO1xuICB9XG59XG5cbi8vIFRlYXIgZG93biB0aGUgc2luZ2xlIG9wZW4gcG9wb3ZlciBhbmQgaXRzIGRvY3VtZW50LWxldmVsIGxpc3RlbmVycy4gU2FmZSB0b1xuLy8gY2FsbCB3aGVuIG5vdGhpbmcgaXMgb3Blbi5cbmZ1bmN0aW9uIGNsb3NlUG9wb3ZlcigpIHtcbiAgaWYgKCFvcGVuUG9wb3ZlcikgeyByZXR1cm47IH1cbiAgb3BlblBvcG92ZXIucmVtb3ZlKCk7XG4gIG9wZW5Qb3BvdmVyID0gbnVsbDtcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uUG9wb3ZlcktleWRvd24sIHRydWUpO1xuICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsIG9uT3V0c2lkZVBvaW50ZXIsIHRydWUpO1xufVxuXG4vLyBBIHNtYWxsIGNvbmZpcm1hdGlvbiBwb3BvdmVyIGFuY2hvcmVkIGFib3ZlIHRoZSBjbGlja2VkIGRvdCwgaW5zaWRlXG4vLyAjZG90Um93LiBEZWxldGUgcmVtb3ZlcyB0aGUgbG9jYXRpb247IENhbmNlbCwgRXNjYXBlLCBvciBhbiBvdXRzaWRlIGNsaWNrXG4vLyBkaXNtaXNzZXMgd2l0aG91dCBjaGFuZ2VzLiBPbmx5IG9uZSBpcyBldmVyIG9wZW4gKG9wZW5SZW1vdmVQb3BvdmVyIGNsb3NlcyBhbnlcbi8vIHByaW9yIG9uZSBmaXJzdCkuXG5mdW5jdGlvbiBvcGVuUmVtb3ZlUG9wb3ZlcihpLCBkb3QpIHtcbiAgY2xvc2VQb3BvdmVyKCk7XG5cbiAgY29uc3QgcG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHBvcC5jbGFzc05hbWUgPSAncmVtb3ZlUG9wb3Zlcic7XG4gIHBvcC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnZGlhbG9nJyk7XG4gIHBvcC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCAnUmVtb3ZlICcgKyBsb2NhdGlvbnNbaV0pO1xuXG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbmFtZS5jbGFzc05hbWUgPSAncmVtb3ZlUG9wb3Zlci1uYW1lJztcbiAgbmFtZS50ZXh0Q29udGVudCA9IGxvY2F0aW9uc1tpXTtcblxuICBjb25zdCBhY3Rpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGFjdGlvbnMuY2xhc3NOYW1lID0gJ3JlbW92ZVBvcG92ZXItYWN0aW9ucyc7XG5cbiAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGNhbmNlbEJ0bi50eXBlID0gJ2J1dHRvbic7XG4gIGNhbmNlbEJ0bi5jbGFzc05hbWUgPSAncmVtb3ZlUG9wb3Zlci1jYW5jZWwnO1xuICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcbiAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VQb3BvdmVyKTtcblxuICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgZGVsZXRlQnRuLnR5cGUgPSAnYnV0dG9uJztcbiAgZGVsZXRlQnRuLmNsYXNzTmFtZSA9ICdyZW1vdmVQb3BvdmVyLWRlbGV0ZSc7XG4gIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xuICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgaWR4ID0gaTtcbiAgICBjbG9zZVBvcG92ZXIoKTtcbiAgICByZW1vdmVMb2NhdGlvbihpZHgpO1xuICB9KTtcblxuICBhY3Rpb25zLmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XG4gIGFjdGlvbnMuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcbiAgcG9wLmFwcGVuZENoaWxkKG5hbWUpO1xuICBwb3AuYXBwZW5kQ2hpbGQoYWN0aW9ucyk7XG5cbiAgZG90Um93LmFwcGVuZENoaWxkKHBvcCk7XG4gIG9wZW5Qb3BvdmVyID0gcG9wO1xuXG4gIC8vIEFuY2hvciBob3Jpem9udGFsbHkgb3ZlciB0aGUgdHJpZ2dlcmluZyBkb3QncyBjZW50cmUgKG9mZnNldExlZnQgaXMgcmVsYXRpdmVcbiAgLy8gdG8gI2RvdFJvdywgd2hpY2ggaXMgdGhlIG9mZnNldCBwYXJlbnQg4oCUIHNlZSBpdHMgcG9zaXRpb246IHJlbGF0aXZlIHJ1bGUpLlxuICBwb3Auc3R5bGUubGVmdCA9IChkb3Qub2Zmc2V0TGVmdCArIGRvdC5vZmZzZXRXaWR0aCAvIDIpICsgJ3B4JztcblxuICAvLyBUaGUgY2xpY2sgKGFuZCBpdHMgcG9pbnRlcmRvd24pIHRoYXQgb3BlbmVkIHRoaXMgcG9wb3ZlciBoYXMgYWxyZWFkeSBmaXJlZCxcbiAgLy8gc28gYSBjYXB0dXJlIGxpc3RlbmVyIGZvciB0aGUgbmV4dCBwb2ludGVyZG93biBjbG9zZXMgdGhlIHBvcG92ZXIgb24gYW5cbiAgLy8gb3V0c2lkZSBjbGljayB3aXRob3V0IGltbWVkaWF0ZWx5IHN3YWxsb3dpbmcgaXRzIG93biBvcGVuaW5nIGV2ZW50LlxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25Qb3BvdmVyS2V5ZG93biwgdHJ1ZSk7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgb25PdXRzaWRlUG9pbnRlciwgdHJ1ZSk7XG59XG5cbi8vIFJvdGF0ZSB0aHJvdWdoIHRoZSBzYXZlZCBsaXN0IHdpdGggd3JhcC4gTm8tb3AgYmVsb3cgdHdvIGxvY2F0aW9ucy5cbmZ1bmN0aW9uIHJvdGF0ZShkaXIpIHtcbiAgY29uc3QgbiA9IGxvY2F0aW9ucy5sZW5ndGg7XG4gIGlmIChuIDw9IDEpIHsgcmV0dXJuOyB9XG4gIGN1cnJlbnRJbmRleCA9IChjdXJyZW50SW5kZXggKyBkaXIgKyBuKSAlIG47XG4gIHJlbmRlckRvdHMoKTtcbiAgc2hvd0N1cnJlbnQoKTtcbn1cblxuLy8gUmVtb3ZlIGEgbG9jYXRpb24sIGtlZXBpbmcgYSBjb2hlcmVudCBhY3RpdmUgc2VsZWN0aW9uOiByZW1vdmluZyB0aGUgYWN0aXZlXG4vLyBvbmUgbW92ZXMgdG8gYSBuZWlnaGJvdXIgcmF0aGVyIHRoYW4gbGVhdmluZyBhbiBlbXB0eSB2aWV3OyBlbXB0eWluZyB0aGUgbGlzdFxuLy8gZmFsbHMgYmFjayB0byB0aGUgZGVmYXVsdC5cbmZ1bmN0aW9uIHJlbW92ZUxvY2F0aW9uKGkpIHtcbiAgaWYgKGkgPCAwIHx8IGkgPj0gbG9jYXRpb25zLmxlbmd0aCkgeyByZXR1cm47IH1cbiAgY29uc3Qgd2FzQWN0aXZlID0gKGkgPT09IGN1cnJlbnRJbmRleCk7XG5cbiAgbG9jYXRpb25zLnNwbGljZShpLCAxKTtcbiAgc2F2ZSgpO1xuXG4gIGlmIChsb2NhdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgY3VycmVudEluZGV4ID0gMDtcbiAgICByZW5kZXJEb3RzKCk7XG4gICAgc2hvd0N1cnJlbnQoKTsgLy8gZmFsbHMgYmFjayB0byBERUZBVUxUX1FVRVJZXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGkgPCBjdXJyZW50SW5kZXgpIHtcbiAgICBjdXJyZW50SW5kZXgtLTtcbiAgfSBlbHNlIGlmIChpID09PSBjdXJyZW50SW5kZXggJiYgY3VycmVudEluZGV4ID49IGxvY2F0aW9ucy5sZW5ndGgpIHtcbiAgICBjdXJyZW50SW5kZXggPSBsb2NhdGlvbnMubGVuZ3RoIC0gMTtcbiAgfVxuXG4gIHJlbmRlckRvdHMoKTtcbiAgaWYgKHdhc0FjdGl2ZSkgeyBzaG93Q3VycmVudCgpOyB9XG59XG5cbmZ1bmN0aW9uIG9uVG91Y2hTdGFydChlKSB7XG4gIGlmIChlLnRvdWNoZXMubGVuZ3RoICE9PSAxKSB7IHN3aXBlQWN0aXZlID0gZmFsc2U7IHJldHVybjsgfVxuICAvLyBMZWF2ZSB0aGUgc2VhcmNoIGZpZWxkJ3Mgb3duIHRvdWNoIGhhbmRsaW5nIChjdXJzb3IgcGxhY2VtZW50KSBhbG9uZS5cbiAgaWYgKGUudGFyZ2V0ICYmIGUudGFyZ2V0LmNsb3Nlc3QgJiYgZS50YXJnZXQuY2xvc2VzdCgnI3NlYXJjaEZvcm0nKSkge1xuICAgIHN3aXBlQWN0aXZlID0gZmFsc2U7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRvdWNoU3RhcnRYID0gZS50b3VjaGVzWzBdLmNsaWVudFg7XG4gIHRvdWNoU3RhcnRZID0gZS50b3VjaGVzWzBdLmNsaWVudFk7XG4gIHN3aXBlQWN0aXZlID0gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gb25Ub3VjaEVuZChlKSB7XG4gIGlmICghc3dpcGVBY3RpdmUpIHsgcmV0dXJuOyB9XG4gIHN3aXBlQWN0aXZlID0gZmFsc2U7XG5cbiAgY29uc3QgdCA9IGUuY2hhbmdlZFRvdWNoZXMgJiYgZS5jaGFuZ2VkVG91Y2hlc1swXTtcbiAgaWYgKCF0KSB7IHJldHVybjsgfVxuXG4gIGNvbnN0IGR4ID0gdC5jbGllbnRYIC0gdG91Y2hTdGFydFg7XG4gIGNvbnN0IGR5ID0gdC5jbGllbnRZIC0gdG91Y2hTdGFydFk7XG5cbiAgLy8gQ29tbWl0IG9ubHkgb24gYSBkZWNpc2l2ZWx5IGhvcml6b250YWwgZ2VzdHVyZSwgc28gYSB2ZXJ0aWNhbCBwYWdlIHNjcm9sbFxuICAvLyAofGR5fCA+PSB8ZHh8KSBpcyBuZXZlciBoaWphY2tlZC5cbiAgaWYgKE1hdGguYWJzKGR4KSA+IFNXSVBFX1RIUkVTSE9MRCAmJiBNYXRoLmFicyhkeCkgPiBNYXRoLmFicyhkeSkpIHtcbiAgICByb3RhdGUoZHggPCAwID8gMSA6IC0xKTsgLy8gc3dpcGUgbGVmdCAtPiBuZXh0LCBzd2lwZSByaWdodCAtPiBwcmV2aW91c1xuICB9XG59XG5cbmZ1bmN0aW9uIHdpcmVHZXN0dXJlcygpIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIG9uVG91Y2hTdGFydCwgeyBwYXNzaXZlOiB0cnVlIH0pO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG9uVG91Y2hFbmQsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbn1cblxuLy8gRGVza3RvcCBwcmV2L25leHQgYXJyb3dzIGRyaXZlIHRoZSBzYW1lIHJvdGF0ZSgpIHRoZSBzd2lwZSBnZXN0dXJlIGRvZXMsIHNvXG4vLyBib3RoIHBhdGhzIHNoYXJlIG9uZSBjb3VudGVyLiBXaXJlZCBvbmNlIGZyb20gaW5pdEZhdm91cml0ZXMoKS5cbmZ1bmN0aW9uIHdpcmVBcnJvd3MoKSB7XG4gIGNvbnN0IHByZXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2UHJldicpO1xuICBjb25zdCBuZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdk5leHQnKTtcbiAgaWYgKHByZXYpIHsgcHJldi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHJvdGF0ZSgtMSkpOyB9XG4gIGlmIChuZXh0KSB7IG5leHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiByb3RhdGUoMSkpOyB9XG59XG5cbi8vIEFwcGVuZCBhIHN1Y2Nlc3NmdWxseSBsb29rZWQtdXAgbG9jYXRpb24gYW5kIHN3aXRjaCB0byBpdC4gQ2FsbGVkIGZyb20gdGhlXG4vLyBzZWFyY2ggc3VibWl0IGhhbmRsZXIgQUZURVIgdGhlIGZldGNoIHJlc29sdmVzLCBzbyB0aGUgZm9yZWNhc3QgaXMgYWxyZWFkeVxuLy8gcmVuZGVyZWQg4oCUIHRoaXMgb25seSB1cGRhdGVzIHRoZSBzYXZlZCBsaXN0IGFuZCB0aGUgZG90cywgbmV2ZXIgcmUtZmV0Y2hlcy5cbi8vIEEgZHVwbGljYXRlIHF1ZXJ5IHN3aXRjaGVzIHRvIHRoZSBleGlzdGluZyBlbnRyeSBpbnN0ZWFkIG9mIGFkZGluZyBhIHNlY29uZC5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMb2NhdGlvbihxdWVyeSkge1xuICBjb25zdCBxID0gU3RyaW5nKHF1ZXJ5KS50cmltKCk7XG4gIGlmICghcSkgeyByZXR1cm47IH1cblxuICBjb25zdCBleGlzdGluZyA9IGxvY2F0aW9ucy5pbmRleE9mKHEpO1xuICBpZiAoZXhpc3RpbmcgIT09IC0xKSB7XG4gICAgY3VycmVudEluZGV4ID0gZXhpc3Rpbmc7XG4gIH0gZWxzZSB7XG4gICAgbG9jYXRpb25zLnB1c2gocSk7XG4gICAgY3VycmVudEluZGV4ID0gbG9jYXRpb25zLmxlbmd0aCAtIDE7XG4gICAgc2F2ZSgpO1xuICB9XG4gIHJlbmRlckRvdHMoKTtcbn1cblxuLy8gQm9vdHN0cmFwOiBsb2FkIHRoZSBzYXZlZCBsaXN0LCB3aXJlIHRoZSBzd2lwZSBnZXN0dXJlcyBvbmNlLCBkcmF3IHRoZSBkb3RzLFxuLy8gYW5kIGZpcmUgdGhlIHNpbmdsZSBpbml0aWFsIGZldGNoICh0aGUgZmlyc3Qgc2F2ZWQgbG9jYXRpb24sIG9yIHRoZSBkZWZhdWx0XG4vLyB3aGVuIG5vbmUgYXJlIHNhdmVkKS4gaW5kZXguanMgY2FsbHMgdGhpcyBvbmNlLCBhZnRlciB0aGUgRE9NIGlzIGFwcGVuZGVkLlxuZXhwb3J0IGZ1bmN0aW9uIGluaXRGYXZvdXJpdGVzKCkge1xuICBsb2FkKCk7XG4gIGRvdFJvdyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkb3RSb3cnKTtcbiAgbmF2Um93ID0gZG90Um93ID8gZG90Um93LnBhcmVudEVsZW1lbnQgOiBudWxsO1xuICB3aXJlR2VzdHVyZXMoKTtcbiAgd2lyZUFycm93cygpO1xuICBjdXJyZW50SW5kZXggPSAwO1xuICByZW5kZXJEb3RzKCk7XG4gIHNob3dDdXJyZW50KCk7XG59XG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IHJlbmRlclJpYmJvbiwgY3VycmVudEhvdXJJbmRleCB9IGZyb20gJy4vcmliYm9uLmpzJztcbmltcG9ydCB7IGZvcmVjYXN0TG9naWMgfSBmcm9tICcuL2xvZ2ljLmpzJztcbmltcG9ydCB7IGFkZExvY2F0aW9uIH0gZnJvbSAnLi9mYXZvdXJpdGVzLmpzJztcblxuLy8gR3VhcmQgc28gd2lyZUV2ZW50cygpIG9ubHkgZXZlciByZWdpc3RlcnMgb25lIHNldCBvZiBsaXN0ZW5lcnMuIFRoZSBvbGRcbi8vIGNoYW5nZVdlYXRoZXJJbmZvKCkgcmUtcmVnaXN0ZXJlZCBvbiBldmVyeSBmZXRjaCwgZG91YmxpbmcgdGhlIGhhbmRsZXIgY291bnRcbi8vIHBlciBzZWFyY2g7IHRoZSByZW5kZXIgcGF0aCAocmVuZGVyRm9yZWNhc3QpIGFuZCB0aGUgd2lyaW5nIHBhdGggKHdpcmVFdmVudHMpXG4vLyBhcmUgc3BsaXQgcHJlY2lzZWx5IHNvIHRoYXQgY2FuIG5ldmVyIGhhcHBlbiBhZ2Fpbi5cbmxldCBldmVudHNXaXJlZCA9IGZhbHNlO1xuXG4vLyBEZWJvdW5jZSB3aW5kb3cgZm9yIHRoZSBjaXR5LXN1Z2dlc3Rpb24gbG9va3VwIOKAlCBsb25nIGVub3VnaCB0aGF0IGEgcnVuIG9mXG4vLyBrZXlzdHJva2VzIGZpcmVzIG9uZSByZXF1ZXN0LCBzaG9ydCBlbm91Z2ggdG8gZmVlbCBsaXZlLlxuY29uc3QgU1VHR0VTVF9ERUJPVU5DRV9NUyA9IDMwMDtcblxuLy8gQ2FjaGVkIERPTSByZWZlcmVuY2VzLCBwb3B1bGF0ZWQgb25jZSBieSBjYWNoZURvbSgpIGFmdGVyIGluZGV4LmpzIGhhcyBidWlsdFxuLy8gYW5kIGFwcGVuZGVkIHRoZSBET00uXG5sZXQgc2VhcmNoRm9ybSwgc2VhcmNoSW5wdXQsIHN1Z2dlc3Rpb25zLCBsb2NhdGlvbk5hbWUsIGN1cnJlbnRUZW1wLFxuICBjdXJyZW50Q29uZGl0aW9uLCBmZWVsc1ZhbCwgaHVtaWRpdHlWYWwsIHJhaW5WYWwsIHdpbmRWYWw7XG5cbi8vIEF1dG9jb21wbGV0ZSBzdGF0ZS4gY3VycmVudFN1Z2dlc3Rpb25zIGhvbGRzIHRoZSByZXN1bHRzIGJhY2tpbmcgdGhlIHZpc2libGVcbi8vIGRyb3Bkb3duOyBzZWxlY3RlZEluZGV4IGlzIHRoZSBrZXlib2FyZC1oaWdobGlnaHRlZCByb3cgKC0xID0gbm9uZSkuIHJlcXVlc3RTZXFcbi8vIGRpc2NhcmRzIHN0YWxlIGFzeW5jIHJlc3VsdHMg4oCUIG9ubHkgdGhlIGxhdGVzdCBsb29rdXAgcmVuZGVycyDigJQgYW5kIGlzIGJ1bXBlZFxuLy8gb24gY2xvc2Ugc28gYW4gaW4tZmxpZ2h0IHJlcXVlc3QgY2FuJ3QgcmVvcGVuIHRoZSBkcm9wZG93biBhZnRlciBzZWxlY3Rpb24uXG5sZXQgY3VycmVudFN1Z2dlc3Rpb25zID0gW107XG5sZXQgc2VsZWN0ZWRJbmRleCA9IC0xO1xubGV0IHN1Z2dlc3REZWJvdW5jZSA9IG51bGw7XG5sZXQgcmVxdWVzdFNlcSA9IDA7XG5cbmZ1bmN0aW9uIGNhY2hlRG9tKCkge1xuICBpZiAobG9jYXRpb25OYW1lKSB7IHJldHVybjsgfSAvLyBhbHJlYWR5IGNhY2hlZFxuXG4gIHNlYXJjaEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoRm9ybScpO1xuICBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hJbnB1dCcpO1xuICBzdWdnZXN0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWdnZXN0aW9ucycpO1xuICBsb2NhdGlvbk5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9jYXRpb25OYW1lJyk7XG4gIGN1cnJlbnRUZW1wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnRUZW1wJyk7XG4gIGN1cnJlbnRDb25kaXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudENvbmRpdGlvbicpO1xuICBmZWVsc1ZhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmZWVsc1ZhbCcpO1xuICBodW1pZGl0eVZhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdodW1pZGl0eVZhbCcpO1xuICByYWluVmFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhaW5WYWwnKTtcbiAgd2luZFZhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5kVmFsJyk7XG59XG5cbi8vIFB1cmUgcmVuZGVyIHBhdGguIGZ1bGZpbGxQcm9taXNlKCkgaW4gbG9naWMuanMgY2FsbHMgdGhpcyBvbiBldmVyeSByZXNvbHZlZFxuLy8gcmVzcG9uc2U7IGl0IHJlZ2lzdGVycyBOTyBsaXN0ZW5lcnMsIHNvIGl0IGlzIHNhZmUgdG8gY2FsbCByZXBlYXRlZGx5LiBEcmF3c1xuLy8gdGhlIHJpYmJvbiBhbmQgZmlsbHMgdGhlIHJlYWRvdXQgZnJvbSB0aGUgc2FtZSBcIm5vd1wiIGluZGV4LCBzbyB0aGUgbWFya2VyIG9uXG4vLyB0aGUgY3VydmUgYW5kIHRoZSBzdGF0IHJvdyBjYW4gbmV2ZXIgZGlzYWdyZWUgYWJvdXQgdGhlIGN1cnJlbnQgaG91ci5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJGb3JlY2FzdChmb3JlY2FzdCkge1xuICBjYWNoZURvbSgpO1xuXG4gIHJlbmRlclJpYmJvbihmb3JlY2FzdCk7XG5cbiAgY29uc3QgaSA9IGN1cnJlbnRIb3VySW5kZXgoZm9yZWNhc3QpO1xuICBjb25zdCBub3cgPSBmb3JlY2FzdC5ob3Vyc1tpXTtcbiAgaWYgKCFub3cpIHsgcmV0dXJuOyB9XG5cbiAgbG9jYXRpb25OYW1lLnRleHRDb250ZW50ID0gZm9yZWNhc3QubG9jYXRpb24ubmFtZTtcbiAgY3VycmVudFRlbXAudGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKG5vdy50ZW1wKSArICfCsCc7XG4gIGN1cnJlbnRDb25kaXRpb24udGV4dENvbnRlbnQgPSBub3cuY29uZGl0aW9uO1xuXG4gIGZlZWxzVmFsLnRleHRDb250ZW50ID0gTWF0aC5yb3VuZChub3cuZmVlbHNMaWtlKSArICfCsCc7XG4gIGh1bWlkaXR5VmFsLnRleHRDb250ZW50ID0gbm93Lmh1bWlkaXR5ICsgJyUnO1xuICByYWluVmFsLnRleHRDb250ZW50ID0gbm93LnJhaW4gKyAnJSc7XG4gIHdpbmRWYWwudGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKG5vdy53aW5kKSArICcga20vaCc7XG59XG5cbi8vIFJlZ2lzdGVycyBsaXN0ZW5lcnMgRVhBQ1RMWSBPTkNFIGZvciB0aGUgbGlmZSBvZiB0aGUgcGFnZS4gaW5kZXguanMgY2FsbHMgdGhpc1xuLy8gYXQgYm9vdHN0cmFwLCBhZnRlciB0aGUgRE9NIGlzIGFwcGVuZGVkIOKAlCBuZXZlciBmcm9tIHRoZSByZW5kZXIgcGF0aCDigJQgc28gYVxuLy8gc2VhcmNoIGZpcmVzIGV4YWN0bHkgb25lIGZldGNoIGFuZCBldmVyeSBlbGVtZW50IGNhcnJpZXMgZXhhY3RseSBvbmUgbGlzdGVuZXIuXG5leHBvcnQgZnVuY3Rpb24gd2lyZUV2ZW50cygpIHtcbiAgaWYgKGV2ZW50c1dpcmVkKSB7IHJldHVybjsgfVxuXG4gIGNhY2hlRG9tKCk7XG4gIGV2ZW50c1dpcmVkID0gdHJ1ZTtcblxuICAvLyBUaGUgYnV0dG9uIGlzIGEgcmVhbCBzdWJtaXQgYnV0dG9uLCBzbyB0aGlzIGNhdGNoZXMgYm90aCB0aGUgY2xpY2sgYW5kIHRoZVxuICAvLyBFbnRlciBrZXkgYXMgb25lIHN1Ym1pdCBldmVudC4gcHJldmVudERlZmF1bHQgc3RvcHMgdGhlIGZvcm0gcmVsb2FkaW5nIHRoZVxuICAvLyBwYWdlOyBmdXR1cmVBUElDYWxscyBkb2VzIHRoZSBzaW5nbGUgZmV0Y2guIFRoZSBzZWFyY2ggZm9ybSBpcyBhbHNvIHRoZVxuICAvLyBhZGQgcGF0aCBmb3Igc2F2ZWQgbG9jYXRpb25zOiBvbiBhIHN1Y2Nlc3NmdWwgbG9va3VwIHRoZSBxdWVyeSBpcyBhcHBlbmRlZFxuICAvLyB0byB0aGUgc2F2ZWQgbGlzdCBhbmQgYmVjb21lcyBjdXJyZW50OyBhIGZhaWxlZCBsb29rdXAgcmVzb2x2ZXMgdG8gbnVsbCBhbmRcbiAgLy8gbGVhdmVzIHRoZSBsaXN0IHVudG91Y2hlZCAoaW52YWxpZElucHV0IGhhcyBhbHJlYWR5IHJlZGRlbmVkIHRoZSBpbnB1dCkuXG4gIHNlYXJjaEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY2xvc2VTdWdnZXN0aW9ucygpO1xuICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoSW5wdXQudmFsdWU7XG4gICAgZm9yZWNhc3RMb2dpYy5mdXR1cmVBUElDYWxscyhxdWVyeSkudGhlbihmdW5jdGlvbiAoZm9yZWNhc3QpIHtcbiAgICAgIGlmIChmb3JlY2FzdCkge1xuICAgICAgICBhZGRMb2NhdGlvbihxdWVyeSk7XG4gICAgICAgIHNlYXJjaElucHV0LnZhbHVlID0gJyc7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4gIHdpcmVBdXRvY29tcGxldGUoKTtcbn1cblxuLy8gV2lyZXMgdGhlIGRlYm91bmNlZCBjaXR5LXN1Z2dlc3Rpb24gZHJvcGRvd24uIENhbGxlZCBvbmNlIGZyb20gd2lyZUV2ZW50cygpLFxuLy8gc28g4oCUIGxpa2UgZXZlcnkgb3RoZXIgbGlzdGVuZXIgaW4gdGhlIGFwcCDigJQgbm90aGluZyBtdWx0aXBsaWVzIGFjcm9zcyBmZXRjaGVzLlxuZnVuY3Rpb24gd2lyZUF1dG9jb21wbGV0ZSgpIHtcbiAgLy8gRWFjaCBrZXlzdHJva2Ugc2NoZWR1bGVzIG9uZSBkZWJvdW5jZWQgbG9va3VwOyBhbiBlbXB0eSBib3ggY2xvc2VzIHRoZVxuICAvLyBkcm9wZG93biBvdXRyaWdodC4gU2V0dGluZyBzZWFyY2hJbnB1dC52YWx1ZSBwcm9ncmFtbWF0aWNhbGx5IChvbiBzZWxlY3Qgb3JcbiAgLy8gb24gYSBzdWNjZXNzZnVsIHN1Ym1pdCkgZG9lcyBub3QgZmlyZSAnaW5wdXQnLCBzbyB0aGVyZSBpcyBubyByZWZldGNoIGxvb3AuXG4gIHNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHZhbHVlID0gc2VhcmNoSW5wdXQudmFsdWUudHJpbSgpO1xuICAgIGlmIChzdWdnZXN0RGVib3VuY2UpIHsgY2xlYXJUaW1lb3V0KHN1Z2dlc3REZWJvdW5jZSk7IHN1Z2dlc3REZWJvdW5jZSA9IG51bGw7IH1cbiAgICBpZiAoIXZhbHVlKSB7IGNsb3NlU3VnZ2VzdGlvbnMoKTsgcmV0dXJuOyB9XG5cbiAgICBzdWdnZXN0RGVib3VuY2UgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IHNlcSA9ICsrcmVxdWVzdFNlcTtcbiAgICAgIGZvcmVjYXN0TG9naWMuc2VhcmNoQ2l0aWVzKHZhbHVlKS50aGVuKGZ1bmN0aW9uIChyZXN1bHRzKSB7XG4gICAgICAgIGlmIChzZXEgIT09IHJlcXVlc3RTZXEpIHsgcmV0dXJuOyB9IC8vIGEgbmV3ZXIga2V5c3Ryb2tlIHN1cGVyc2VkZWQgdGhpc1xuICAgICAgICByZW5kZXJTdWdnZXN0aW9ucyhyZXN1bHRzKTtcbiAgICAgIH0pO1xuICAgIH0sIFNVR0dFU1RfREVCT1VOQ0VfTVMpO1xuICB9KTtcblxuICAvLyBBcnJvdyBrZXlzIG1vdmUgdGhlIGhpZ2hsaWdodDsgRW50ZXIgb24gYSBoaWdobGlnaHRlZCByb3cgc2VsZWN0cyBpdCAoYW5kIGlzXG4gIC8vIHN0b3BwZWQgZnJvbSBhbHNvIHN1Ym1pdHRpbmcgdGhlIHJhdyB0ZXh0KTsgRXNjYXBlIGNsb3NlcyB3aXRob3V0IHN1Ym1pdHRpbmcuXG4gIC8vIFdpdGggbm8gZHJvcGRvd24gb3BlbiwgRW50ZXIgc3VibWl0cyB0aGUgdHlwZWQgdGV4dCBleGFjdGx5IGFzIGJlZm9yZS5cbiAgc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKHN1Z2dlc3Rpb25zLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykgfHwgIWN1cnJlbnRTdWdnZXN0aW9ucy5sZW5ndGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGUua2V5ID09PSAnQXJyb3dEb3duJykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbW92ZVNlbGVjdGlvbigxKTtcbiAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnQXJyb3dVcCcpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIG1vdmVTZWxlY3Rpb24oLTEpO1xuICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgIGlmIChzZWxlY3RlZEluZGV4ID49IDApIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjaG9vc2VTdWdnZXN0aW9uKHNlbGVjdGVkSW5kZXgpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjbG9zZVN1Z2dlc3Rpb25zKCk7XG4gICAgfVxuICB9KTtcblxuICAvLyBBIGNsaWNrIGFueXdoZXJlIG91dHNpZGUgdGhlIHNlYXJjaCBmb3JtIGNsb3NlcyB0aGUgZHJvcGRvd24uIENsaWNrcyBpbnNpZGVcbiAgLy8gdGhlIGZvcm0gKHRoZSBpbnB1dCwgYSBzdWdnZXN0aW9uIHJvdywgdGhlIGJ1dHRvbikgYXJlIGhhbmRsZWQgYnkgdGhlaXIgb3duXG4gIC8vIGxpc3RlbmVycyBhbmQgbXVzdCBub3QgY2xvc2UgaXQgaGVyZSBmaXJzdC5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChlLnRhcmdldCAmJiBlLnRhcmdldC5jbG9zZXN0ICYmIGUudGFyZ2V0LmNsb3Nlc3QoJyNzZWFyY2hGb3JtJykpIHsgcmV0dXJuOyB9XG4gICAgY2xvc2VTdWdnZXN0aW9ucygpO1xuICB9KTtcbn1cblxuLy8gUmVidWlsZCB0aGUgZHJvcGRvd24gZnJvbSBhIHJlc3VsdHMgYXJyYXkuIEVtcHR5IHJlc3VsdHMgY2xvc2UgaXQuIEVhY2ggcm93IGlzXG4vLyB0aGUgY2l0eSBuYW1lIHBsdXMgYSBtdXRlZCByZWdpb24vY291bnRyeSBsaW5lOyBjbGlja2luZyBvbmUgc2VsZWN0cyBpdC5cbmZ1bmN0aW9uIHJlbmRlclN1Z2dlc3Rpb25zKHJlc3VsdHMpIHtcbiAgd2hpbGUgKHN1Z2dlc3Rpb25zLmZpcnN0Q2hpbGQpIHsgc3VnZ2VzdGlvbnMucmVtb3ZlQ2hpbGQoc3VnZ2VzdGlvbnMuZmlyc3RDaGlsZCk7IH1cblxuICBjdXJyZW50U3VnZ2VzdGlvbnMgPSByZXN1bHRzO1xuICBzZWxlY3RlZEluZGV4ID0gLTE7XG5cbiAgaWYgKCFyZXN1bHRzLmxlbmd0aCkgeyBjbG9zZVN1Z2dlc3Rpb25zKCk7IHJldHVybjsgfVxuXG4gIHJlc3VsdHMuZm9yRWFjaChmdW5jdGlvbiAociwgaWR4KSB7XG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW0uY2xhc3NOYW1lID0gJ3N1Z2dlc3Rpb24taXRlbSc7XG4gICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnb3B0aW9uJyk7XG5cbiAgICBjb25zdCBjaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNpdHkuY2xhc3NOYW1lID0gJ3N1Z2dlc3Rpb24tY2l0eSc7XG4gICAgY2l0eS50ZXh0Q29udGVudCA9IHIubmFtZTtcblxuICAgIGNvbnN0IHBsYWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHBsYWNlLmNsYXNzTmFtZSA9ICdzdWdnZXN0aW9uLWNvdW50cnknO1xuICAgIHBsYWNlLnRleHRDb250ZW50ID0gW3IucmVnaW9uLCByLmNvdW50cnldLmZpbHRlcihCb29sZWFuKS5qb2luKCcsICcpO1xuXG4gICAgaXRlbS5hcHBlbmRDaGlsZChjaXR5KTtcbiAgICBpdGVtLmFwcGVuZENoaWxkKHBsYWNlKTtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkgeyBjaG9vc2VTdWdnZXN0aW9uKGlkeCk7IH0pO1xuXG4gICAgc3VnZ2VzdGlvbnMuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gIH0pO1xuXG4gIG9wZW5TdWdnZXN0aW9ucygpO1xufVxuXG4vLyBNb3ZlIHRoZSBrZXlib2FyZCBoaWdobGlnaHQsIHdyYXBwaW5nIGF0IGJvdGggZW5kcywgYW5kIG1pcnJvciBpdCBvbnRvIHRoZSBET00uXG5mdW5jdGlvbiBtb3ZlU2VsZWN0aW9uKGRpcikge1xuICBjb25zdCBuID0gY3VycmVudFN1Z2dlc3Rpb25zLmxlbmd0aDtcbiAgaWYgKCFuKSB7IHJldHVybjsgfVxuICBzZWxlY3RlZEluZGV4ID0gKHNlbGVjdGVkSW5kZXggKyBkaXIgKyBuKSAlIG47XG5cbiAgY29uc3QgaXRlbXMgPSBzdWdnZXN0aW9ucy5jaGlsZHJlbjtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgIGl0ZW1zW2ldLmNsYXNzTGlzdC50b2dnbGUoJ3NlbGVjdGVkJywgaSA9PT0gc2VsZWN0ZWRJbmRleCk7XG4gIH1cbn1cblxuLy8gRmlsbCB0aGUgaW5wdXQgd2l0aCB0aGUgY2hvc2VuIGNpdHkgYW5kIHN1Ym1pdCB0aGUgZm9ybSB0aGUgc2FtZSB3YXkgcHJlc3Npbmdcbi8vIEVudGVyIG9yIGNsaWNraW5nIFN1Ym1pdCBkb2VzLCBzbyB0aGUgZmV0Y2ggKyBzYXZlLWxvY2F0aW9uIHBhdGggaXMgdW5jaGFuZ2VkLlxuZnVuY3Rpb24gY2hvb3NlU3VnZ2VzdGlvbihpZHgpIHtcbiAgY29uc3QgciA9IGN1cnJlbnRTdWdnZXN0aW9uc1tpZHhdO1xuICBpZiAoIXIpIHsgcmV0dXJuOyB9XG4gIHNlYXJjaElucHV0LnZhbHVlID0gci5uYW1lO1xuICBjbG9zZVN1Z2dlc3Rpb25zKCk7XG4gIGlmIChzZWFyY2hGb3JtLnJlcXVlc3RTdWJtaXQpIHtcbiAgICBzZWFyY2hGb3JtLnJlcXVlc3RTdWJtaXQoKTtcbiAgfSBlbHNlIHtcbiAgICBzZWFyY2hGb3JtLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdzdWJtaXQnLCB7IGNhbmNlbGFibGU6IHRydWUsIGJ1YmJsZXM6IHRydWUgfSkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG9wZW5TdWdnZXN0aW9ucygpIHtcbiAgc3VnZ2VzdGlvbnMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIHNlYXJjaEZvcm0uY2xhc3NMaXN0LmFkZCgnc3VnZ2VzdGluZycpOyAvLyBmbGF0dGVucyB0aGUgaW5wdXQncyBib3R0b20gY29ybmVyc1xufVxuXG4vLyBDbG9zZSBhbmQgcmVzZXQuIEJ1bXBpbmcgcmVxdWVzdFNlcSBpbnZhbGlkYXRlcyBhbnkgaW4tZmxpZ2h0IGxvb2t1cCBzbyBpdFxuLy8gY2FuJ3QgcmVvcGVuIHRoZSBkcm9wZG93biBhZnRlciBhIHNlbGVjdGlvbiBvciBzdWJtaXQuXG5mdW5jdGlvbiBjbG9zZVN1Z2dlc3Rpb25zKCkge1xuICBpZiAoIXN1Z2dlc3Rpb25zKSB7IHJldHVybjsgfVxuICBpZiAoc3VnZ2VzdERlYm91bmNlKSB7IGNsZWFyVGltZW91dChzdWdnZXN0RGVib3VuY2UpOyBzdWdnZXN0RGVib3VuY2UgPSBudWxsOyB9XG4gIHJlcXVlc3RTZXErKztcbiAgY3VycmVudFN1Z2dlc3Rpb25zID0gW107XG4gIHNlbGVjdGVkSW5kZXggPSAtMTtcbiAgc3VnZ2VzdGlvbnMuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gIHNlYXJjaEZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnc3VnZ2VzdGluZycpO1xufVxuXG4vLyBBIHN1Y2Nlc3NmdWwgbG9va3VwIGNsZWFycyB0aGUgaW52YWxpZCBzdGF0ZTsgYSBmYWlsZWQgb25lIGtlZXBzIHRoZSBjdXJyZW50XG4vLyByaWJib24gYW5kIHJlZGRlbnMgdGhlIGlucHV0IGJvcmRlciAodmlhIHRoZSAuaW52YWxpZCBjbGFzcyBpbiBzdHlsZS5jc3MpLlxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkSW5wdXQoKSB7XG4gIGNhY2hlRG9tKCk7XG4gIGlmIChzZWFyY2hGb3JtKSB7IHNlYXJjaEZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZCcpOyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnZhbGlkSW5wdXQoKSB7XG4gIGNhY2hlRG9tKCk7XG4gIGlmIChzZWFyY2hGb3JtKSB7IHNlYXJjaEZvcm0uY2xhc3NMaXN0LmFkZCgnaW52YWxpZCcpOyB9XG59XG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IHJlbmRlckZvcmVjYXN0LCB2YWxpZElucHV0LCBpbnZhbGlkSW5wdXQgfSBmcm9tICcuL2luZGV4Q2hhbmdlcy5qcyc7XG5cbi8vICAzIGRheSBmb3JlY2FzdCAtIGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9MzljMjhmODVhYjAzNDUyMWI5OTIxNzA1MjMyNzEwJnE9OTgwNTImZGF5cz0zJmFxaT1ubyZhbGVydHM9bm9cblxuLy8gVGhlIGxhc3QgZm9yZWNhc3Qgd2Ugc3VjY2Vzc2Z1bGx5IHJlbmRlcmVkLiBBIGZhaWxlZCBsb29rdXAga2VlcHMgaXQgb24gc2NyZWVuXG4vLyAoc2VlIGZ1bGZpbGxQcm9taXNlKTogdGhlIHNlYXJjaCBqdXN0IHJlZGRlbnMgdGhlIGlucHV0IHJhdGhlciB0aGFuIGJsYW5raW5nXG4vLyB0aGUgcmliYm9uLlxubGV0IGxhc3RGb3JlY2FzdCA9IG51bGw7XG5cbmV4cG9ydCBjb25zdCBmb3JlY2FzdExvZ2ljID0gKGZ1bmN0aW9uICgpIHtcblxuICAvLyBObyBmZXRjaCBmaXJlcyBhdCBtb2R1bGUtZXZhbCB0aW1lLiBUaGUgc2luZ2xlIGluaXRpYWwgZmV0Y2ggKGRlZmF1bHRcbiAgLy8gbG9jYXRpb24sIG9yIHRoZSBmaXJzdCBzYXZlZCBsb2NhdGlvbikgaXMgZHJpdmVuIGZyb20gdGhlIGJvb3RzdHJhcCBpblxuICAvLyBpbmRleC5qcyB2aWEgaW5pdEZhdm91cml0ZXMoKSAtPiBmdXR1cmVBUElDYWxscywgc28gaXQgaGFwcGVucyBleGFjdGx5IG9uY2VcbiAgLy8gaW4gdGhlIGluZGV4IGJ1bmRsZSByYXRoZXIgdGhhbiBvbmNlIHBlciBidW5kbGUgdGhhdCBpbXBvcnRzIHRoaXMgbW9kdWxlLlxuXG4gIC8vIEZpcmVzIG9uZSBmZXRjaCBmb3IgYSBsb2NhdGlvbiBhbmQgcmVuZGVycyBvbiBzdWNjZXNzLiBSZXR1cm5zIGEgcHJvbWlzZVxuICAvLyByZXNvbHZpbmcgdG8gdGhlIGJ1aWx0IGZvcmVjYXN0IG9uIHN1Y2Nlc3MsIG9yIG51bGwgb24gYSBmYWlsZWQgbG9va3VwLCBzb1xuICAvLyB0aGUgc2VhcmNoIHN1Ym1pdCBoYW5kbGVyIGNhbiBhcHBlbmQgdGhlIGxvY2F0aW9uIHRvIHRoZSBzYXZlZCBsaXN0IG9ubHlcbiAgLy8gd2hlbiB0aGUgbG9va3VwIGFjdHVhbGx5IHN1Y2NlZWRlZC5cbiAgZnVuY3Rpb24gZnV0dXJlQVBJQ2FsbHModmFsdWUpIHtcbiAgICByZXR1cm4gZnVsZmlsbFByb21pc2UocHVsbEZvcmVjYXN0KHZhbHVlKSk7XG4gIH1cblxuICBmdW5jdGlvbiBmdWxmaWxsUHJvbWlzZShmb3JlY2FzdEpTT04pIHtcbiAgICByZXR1cm4gZm9yZWNhc3RKU09OLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgLy8gcHVsbEZvcmVjYXN0IHJlc29sdmVzIHRvIG51bGwgb24gYSBmYWlsZWQgbG9va3VwIOKAlCBsZWF2ZSB0aGUgY3VycmVudFxuICAgICAgLy8gcmliYm9uIHVudG91Y2hlZCAoaW52YWxpZElucHV0KCkgaGFzIGFscmVhZHkgcmVkZGVuZWQgdGhlIGlucHV0KS5cbiAgICAgIGlmICghcmVzdWx0KSB7IHJldHVybiBudWxsOyB9XG5cbiAgICAgIGNvbnN0IGZvcmVjYXN0ID0gYnVpbGRGb3JlY2FzdChyZXN1bHQpO1xuICAgICAgbGFzdEZvcmVjYXN0ID0gZm9yZWNhc3Q7XG4gICAgICByZW5kZXJGb3JlY2FzdChmb3JlY2FzdCk7XG4gICAgICByZXR1cm4gZm9yZWNhc3Q7XG4gICAgfSk7XG4gIH1cblxuICAvLyBGbGF0dGVuIHRoZSB0aHJlZS1kYXkgcmVzcG9uc2UgaW50byBhIHNpbmdsZSA3Mi1ob3VyIHNlcmllcyBwbHVzIGEgbG9jYXRpb25cbiAgLy8gb2JqZWN0LiBFdmVyeSBob3VyIGtlZXBzIGl0cyBvd24gZXBvY2gsIHRlbXBlcmF0dXJlLCBjb25kaXRpb24gdGV4dCBhbmQgdGhlXG4gIC8vIHN0YXQgZmllbGRzIHRoZSByZWFkb3V0IHNob3dzIOKAlCBub3RoaW5nIGlzIGNvbGxhcHNlZCB0byBwZXItZGF5IHNjYWxhcnMsIGFuZFxuICAvLyB0aGUgZnVsbCBmb3JlY2FzdGRheVtdLmhvdXJbXSBhcnJheXMgKGFscmVhZHkgaW4gZXZlcnkgcmVzcG9uc2UsIHByZXZpb3VzbHlcbiAgLy8gZGlzY2FyZGVkKSBhcmUgd2hhdCB0aGUgY3VydmUgaXMgZHJhd24gZnJvbS5cbiAgZnVuY3Rpb24gYnVpbGRGb3JlY2FzdChyZXN1bHQpIHtcbiAgICBjb25zdCBmb3JlY2FzdERheXMgPSByZXN1bHQuZm9yZWNhc3QuZm9yZWNhc3RkYXk7XG4gICAgY29uc3QgaG91cnMgPSBbXTtcblxuICAgIGZvcmVjYXN0RGF5cy5mb3JFYWNoKChkYXkpID0+IHtcbiAgICAgIGRheS5ob3VyLmZvckVhY2goKGgpID0+IHtcbiAgICAgICAgaG91cnMucHVzaCh7XG4gICAgICAgICAgZXBvY2g6IGgudGltZV9lcG9jaCxcbiAgICAgICAgICB0ZW1wOiBoLnRlbXBfYyxcbiAgICAgICAgICBmZWVsc0xpa2U6IGguZmVlbHNsaWtlX2MsXG4gICAgICAgICAgaHVtaWRpdHk6IGguaHVtaWRpdHksXG4gICAgICAgICAgcmFpbjogaC5jaGFuY2Vfb2ZfcmFpbixcbiAgICAgICAgICB3aW5kOiBoLndpbmRfa3BoLFxuICAgICAgICAgIGNvbmRpdGlvbjogaC5jb25kaXRpb24udGV4dCxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICBsb2NhdGlvbjoge1xuICAgICAgICBuYW1lOiByZXN1bHQubG9jYXRpb24ubmFtZSxcbiAgICAgICAgLy8gXCJub3dcIiBpcyBpbmRleGVkIG9mZiB0aGUgbG9jYXRpb24ncyByZWFsIGN1cnJlbnQgdGltZSwgbm90IGEgcGFyc2VkXG4gICAgICAgIC8vIGRhdGUgc3RyaW5nLiBTZWUgY3VycmVudEhvdXJJbmRleCgpIGluIHJpYmJvbi5qcy5cbiAgICAgICAgbG9jYWx0aW1lX2Vwb2NoOiByZXN1bHQubG9jYXRpb24ubG9jYWx0aW1lX2Vwb2NoLFxuICAgICAgfSxcbiAgICAgIGhvdXJzOiBob3VycyxcbiAgICAgIC8vIFBlci1kYXkgZGF0ZSArIGhvdXIgY291bnQgZHJpdmUgdGhlIFdFRC9USFUvRlJJIHRpY2tzIGFuZCB0aGUgZGF5XG4gICAgICAvLyBoYWlybGluZXMgYXQgaG91cnMgMjQgYW5kIDQ4LlxuICAgICAgZGF5czogZm9yZWNhc3REYXlzLm1hcCgoZGF5KSA9PiAoeyBkYXRlOiBkYXkuZGF0ZSwgY291bnQ6IGRheS5ob3VyLmxlbmd0aCB9KSksXG4gICAgfTtcbiAgfVxuXG4gIC8vIFRha2VzIGEgbG9jYXRpb24gdmFsdWUgYXBwZW5kZWQgdG8gdGhlIEFQSSBjYWxsLiBSZXNvbHZlcyB0byB0aGUgcmF3IEpTT04gb25cbiAgLy8gc3VjY2Vzcywgb3IgbnVsbCBvbiBmYWlsdXJlIChzbyBmdWxmaWxsUHJvbWlzZSBrZWVwcyB0aGUgY3VycmVudCByaWJib24pLlxuICBhc3luYyBmdW5jdGlvbiBwdWxsRm9yZWNhc3QodmFsdWUpIHtcbiAgICBjb25zdCB1cmwgPSAnaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9MzljMjhmODVhYjAzNDUyMWI5OTIxNzA1MjMyNzEwJnE9JyArIHZhbHVlICsgJyZkYXlzPTMmYXFpPW5vJmFsZXJ0cz1ubyc7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHsgbW9kZTogJ2NvcnMnIH0pO1xuXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgU3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZm9yZWNhc3QgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgIHZhbGlkSW5wdXQoKTtcblxuICAgICAgcmV0dXJuIGZvcmVjYXN0O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gY2F0Y2hlcyBlcnJvcnMgYm90aCBpbiBmZXRjaCBhbmQgcmVzcG9uc2UuanNvblxuICAgICAgaW52YWxpZElucHV0KCk7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvLyBUeXBlYWhlYWQgbG9va3VwIGZvciB0aGUgc2VhcmNoIGJveC4gSGl0cyBXZWF0aGVyQVBJJ3Mgc2VhcmNoL2F1dG9jb21wbGV0ZVxuICAvLyBlbmRwb2ludCAocmV1c2luZyB0aGUgc2FtZSBrZXkgYXMgcHVsbEZvcmVjYXN0KSBhbmQgcmVzb2x2ZXMgdG8gdGhlIHJhd1xuICAvLyByZXN1bHRzIGFycmF5IOKAlCBbeyBuYW1lLCByZWdpb24sIGNvdW50cnksIC4uLiB9LCAuLi5dIOKAlCBvciBbXSBvbiBhbiBlbXB0eVxuICAvLyBxdWVyeSwgbm8gbWF0Y2hlcywgb3IgYW55IG5ldHdvcmsvcGFyc2UgZXJyb3IuIE5ldmVyIHRocm93czogdGhlIGRyb3Bkb3duXG4gIC8vIGp1c3Qgc2hvd3Mgbm90aGluZyBvbiBmYWlsdXJlLlxuICBhc3luYyBmdW5jdGlvbiBzZWFyY2hDaXRpZXModmFsdWUpIHtcbiAgICBjb25zdCBxID0gU3RyaW5nKHZhbHVlKS50cmltKCk7XG4gICAgaWYgKCFxKSB7IHJldHVybiBbXTsgfVxuXG4gICAgY29uc3QgdXJsID0gJ2h0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL3NlYXJjaC5qc29uP2tleT0zOWMyOGY4NWFiMDM0NTIxYjk5MjE3MDUyMzI3MTAmcT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHEpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7IG1vZGU6ICdjb3JzJyB9KTtcblxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIFN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KHJlc3VsdHMpID8gcmVzdWx0cyA6IFtdO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcblxuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcHVsbEZvcmVjYXN0LFxuICAgIGZ1dHVyZUFQSUNhbGxzLFxuICAgIHNlYXJjaENpdGllcyxcbiAgfTtcblxufSkoKTsgLy8gZW5kcyBmb3JlY2FzdExvZ2ljIGZ1bmN0aW9uXG4iLCIvLyByaWJib24uanMg4oCUIHRoZSA3Mi1ob3VyIHRlbXBlcmF0dXJlIHJpYmJvbi5cbi8vXG4vLyBUaGUgZm9yZWNhc3QgaXMgb25lIGNvbnRpbnVvdXMgdGVtcGVyYXR1cmUgY3VydmUgYWNyb3NzIGFsbCB0aHJlZSBkYXlzIHJhdGhlclxuLy8gdGhhbiB0aHJlZSBjYXJkIHN0YXRlcyB5b3UgcGFnZSBiZXR3ZWVuLCBzbyBuYXZpZ2F0aW9uIHN0b3BzIGJlaW5nIGEgY29uY2VwdDpcbi8vIGV2ZXJ5IGhvdXIgaXMgb24gc2NyZWVuIGF0IG9uY2UuIENvbG91ciBpcyBhIGZ1bmN0aW9uIG9mIHRoZSB0ZW1wZXJhdHVyZVxuLy8gc2NhbGFyIChjb2xkIC0+IG1pbGQgLT4gd2FybSAtPiBob3QpLCBOT1QgdGhlIGNvbmRpdGlvbiBjYXRlZ29yeSwgc28gdGhlcmUgaXNcbi8vIG5vIHBlci1jb25kaXRpb24gYnJhbmNoIHRvIHdyaXRlIGFuZCBubyBlaWdodGggY2FzZSB0byBmb3JnZXQuXG4vL1xuLy8gYnVpbGRSaWJib24obW91bnQpIGNyZWF0ZXMgdGhlIFNWRyBzY2FmZm9sZCBvbmNlIGF0IGJvb3RzdHJhcCAoZGVmcywgZ3JhZGllbnRzLFxuLy8gZW1wdHkgZ3JvdXBzKSBhbmQgY2FjaGVzIGVsZW1lbnQgcmVmcy4gcmVuZGVyRm9yZWNhc3QoKSBpbiBpbmRleENoYW5nZXMuanNcbi8vIGNhbGxzIHJlbmRlclJpYmJvbihmb3JlY2FzdCkgb24gZXZlcnkgcmVzb2x2ZWQgcmVzcG9uc2UgdG8gcmVkcmF3IHRoZSBjdXJ2ZSxcbi8vIHRoZSBkYXkgaGFpcmxpbmVzL3RpY2tzIGFuZCB0aGUgY3VycmVudC1ob3VyIG1hcmtlciBmcm9tIGRhdGEuIGN1cnJlbnRIb3VySW5kZXhcbi8vIGlzIHRoZSBzaW5nbGUgc291cmNlIG9mIHRydXRoIGZvciBcIm5vd1wiLCBzaGFyZWQgd2l0aCB0aGUgcmVhZG91dCBzbyB0aGUgbWFya2VyXG4vLyBhbmQgdGhlIHN0YXQgcm93IG5ldmVyIGRpc2FncmVlLlxuLy9cbi8vIEhhbmQtYXV0aG9yZWQgU1ZHLCB2YW5pbGxhIG9ubHkg4oCUIG5vIGNoYXJ0aW5nIGxpYnJhcnksIG5vIGRlcGVuZGVuY2llcy5cblxuY29uc3QgTlMgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnO1xuXG4vLyB2aWV3Qm94IGdlb21ldHJ5LCBpbiB1c2VyIHVuaXRzLiBUaGUgY3VydmUgYmFuZCBzaXRzIGJldHdlZW4gQ0hBUlRfVE9QIGFuZFxuLy8gQ0hBUlRfVE9QK0NIQVJUX0g7IFRJQ0tfSCBiZW5lYXRoIGl0IGNhcnJpZXMgdGhlIFdFRC9USFUvRlJJIGRheSBsYWJlbHMuIEFcbi8vIHNlY29uZCBsYW5lICh0aWRlcywgb3V0IG9mIHNjb3BlIHRvZGF5KSB3b3VsZCBhZGQgTEFORV9IIGJlbG93IHRoYXQg4oCUIHRoZVxuLy8gdmlld0JveCBoZWlnaHQgc3dpdGNoZXMgYmV0d2VlbiB0d28gdmFsdWVzIGRlcGVuZGluZyBvbiB3aGV0aGVyIHRoZSBsYW5lXG4vLyBleGlzdHMsIHNvIHRoZSBsYXlvdXQgaXMgYnVpbHQgbGFuZS1vcHRpb25hbCBldmVuIHRob3VnaCB0aGUgbGFuZSBuZXZlclxuLy8gcmVuZGVycyBmb3Igbm93LlxuY29uc3QgVklFV19XID0gNzIwO1xuY29uc3QgUEFEX0wgPSAxMDtcbmNvbnN0IFBBRF9SID0gMTA7XG5jb25zdCBDSEFSVF9UT1AgPSAxODtcbmNvbnN0IENIQVJUX0ggPSAxNTA7XG5jb25zdCBUSUNLX0ggPSAyNjtcbmNvbnN0IExBTkVfSCA9IDkwO1xuXG4vLyBUZW1wZXJhdHVyZSAtPiBjb2xvdXIgcmFtcC4gRm91ciBhbmNob3JzIHNwYW5uaW5nIGEgZml4ZWQgwrBDIGRvbWFpbiBzbyB0aGVcbi8vIHNhbWUgdGVtcGVyYXR1cmUgYWx3YXlzIHJlYWRzIHRoZSBzYW1lIGNvbG91ciByZWdhcmRsZXNzIG9mIHRoZSBkYXkncyByYW5nZS5cbmNvbnN0IFJBTVAgPSBbXG4gIHsgdDogLTUsIGM6IFsweDNkLCAweDZmLCAweGE4XSB9LCAvLyBjb2xkXG4gIHsgdDogMTAsIGM6IFsweDZmLCAweGE4LCAweGEwXSB9LCAvLyBtaWxkXG4gIHsgdDogMjUsIGM6IFsweGQ5LCAweGE0LCAweDQxXSB9LCAvLyB3YXJtXG4gIHsgdDogNDAsIGM6IFsweGMyLCAweDQ1LCAweDJkXSB9LCAvLyBob3Rcbl07XG5cbmNvbnN0IFdFRUtEQVkgPSBbJ1NVTicsICdNT04nLCAnVFVFJywgJ1dFRCcsICdUSFUnLCAnRlJJJywgJ1NBVCddO1xuXG4vLyBDYWNoZWQgc2NhZmZvbGQgcmVmcywgcG9wdWxhdGVkIG9uY2UgYnkgYnVpbGRSaWJib24oKS5cbmxldCBzdmcsIHRlbXBHcmFkLCBmaWxsUGF0aCwgY3VydmVQYXRoLCBib3VuZGFyeUdyb3VwLCB0aWNrR3JvdXAsIG1hcmtlckdyb3VwLFxuICBsYW5lR3JvdXA7XG5cbmZ1bmN0aW9uIGVsKG5hbWUsIGF0dHJzKSB7XG4gIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoTlMsIG5hbWUpO1xuICBpZiAoYXR0cnMpIHtcbiAgICBmb3IgKGNvbnN0IGsgaW4gYXR0cnMpIHsgbm9kZS5zZXRBdHRyaWJ1dGUoaywgYXR0cnNba10pOyB9XG4gIH1cbiAgcmV0dXJuIG5vZGU7XG59XG5cbmZ1bmN0aW9uIGxlcnAoYSwgYiwgZikgeyByZXR1cm4gYSArIChiIC0gYSkgKiBmOyB9XG5cbi8vIENvbG91ciBmb3IgYSB0ZW1wZXJhdHVyZSwgaW50ZXJwb2xhdGVkIGFjcm9zcyB0aGUgcmFtcCBhbmNob3JzIGFuZCBjbGFtcGVkIHRvXG4vLyB0aGUgZG9tYWluIGVuZHMuXG5mdW5jdGlvbiB0ZW1wQ29sb3VyKHRlbXApIHtcbiAgaWYgKHRlbXAgPD0gUkFNUFswXS50KSB7IHJldHVybiByZ2IoUkFNUFswXS5jKTsgfVxuICBpZiAodGVtcCA+PSBSQU1QW1JBTVAubGVuZ3RoIC0gMV0udCkgeyByZXR1cm4gcmdiKFJBTVBbUkFNUC5sZW5ndGggLSAxXS5jKTsgfVxuICBmb3IgKGxldCBpID0gMTsgaSA8IFJBTVAubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodGVtcCA8PSBSQU1QW2ldLnQpIHtcbiAgICAgIGNvbnN0IGxvID0gUkFNUFtpIC0gMV07XG4gICAgICBjb25zdCBoaSA9IFJBTVBbaV07XG4gICAgICBjb25zdCBmID0gKHRlbXAgLSBsby50KSAvIChoaS50IC0gbG8udCk7XG4gICAgICByZXR1cm4gcmdiKFtcbiAgICAgICAgTWF0aC5yb3VuZChsZXJwKGxvLmNbMF0sIGhpLmNbMF0sIGYpKSxcbiAgICAgICAgTWF0aC5yb3VuZChsZXJwKGxvLmNbMV0sIGhpLmNbMV0sIGYpKSxcbiAgICAgICAgTWF0aC5yb3VuZChsZXJwKGxvLmNbMl0sIGhpLmNbMl0sIGYpKSxcbiAgICAgIF0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmdiKFJBTVBbUkFNUC5sZW5ndGggLSAxXS5jKTtcbn1cblxuZnVuY3Rpb24gcmdiKGMpIHsgcmV0dXJuICdyZ2IoJyArIGNbMF0gKyAnLCcgKyBjWzFdICsgJywnICsgY1syXSArICcpJzsgfVxuXG5mdW5jdGlvbiB3ZWVrZGF5QWJicihkYXRlU3RyKSB7XG4gIC8vIGRhdGVTdHIgaXMgJ1lZWVktTU0tREQnLiBCdWlsZCB0aGUgZGF0ZSBhdCBVVEMgbWlkbmlnaHQgc28gdGhlIHdlZWtkYXkgbmV2ZXJcbiAgLy8gc2hpZnRzIGFjcm9zcyBhIHRpbWV6b25lIGJvdW5kYXJ5LlxuICBjb25zdCBwID0gU3RyaW5nKGRhdGVTdHIpLnNwbGl0KCctJyk7XG4gIGNvbnN0IGQgPSBuZXcgRGF0ZShEYXRlLlVUQygrcFswXSwgKCtwWzFdKSAtIDEsICtwWzJdKSk7XG4gIHJldHVybiBXRUVLREFZW2QuZ2V0VVRDRGF5KCldIHx8ICcnO1xufVxuXG4vLyBJbmRleCBvZiB0aGUgaG91ciBidWNrZXQgbmVhcmVzdCBcIm5vd1wiLiBEcml2ZW4gb2ZmIGxvY2F0aW9uLmxvY2FsdGltZV9lcG9jaCxcbi8vIE5PVCBhIHBhcnNlZCBkYXRlLXN0cmluZyBob3VyIOKAlCB0aGUgb2xkIGdldEN1cnJlbnRUaW1lKCkgcmVhZCB0aGUgaG91ciBvdXQgb2Zcbi8vIGRhdGVfZXBvY2ggKGxvY2FsIG1pZG5pZ2h0KSBhbmQgcmV0dXJuZWQgdGhlIFVUQyBvZmZzZXQsIHNvIFwiZmVlbHMgbGlrZVwiIHdhcyBhXG4vLyBmaXhlZCBhcmJpdHJhcnkgaG91ci4gbG9jYWx0aW1lX2Vwb2NoIGlzIHRoZSBsb2NhdGlvbidzIHJlYWwgY3VycmVudCB0aW1lLlxuZXhwb3J0IGZ1bmN0aW9uIGN1cnJlbnRIb3VySW5kZXgoZm9yZWNhc3QpIHtcbiAgY29uc3QgaG91cnMgPSBmb3JlY2FzdC5ob3VycztcbiAgaWYgKCFob3VycyB8fCAhaG91cnMubGVuZ3RoKSB7IHJldHVybiAwOyB9XG4gIGNvbnN0IG5vdyA9IGZvcmVjYXN0LmxvY2F0aW9uLmxvY2FsdGltZV9lcG9jaDtcbiAgbGV0IGJlc3QgPSAwO1xuICBsZXQgYmVzdERpZmYgPSBJbmZpbml0eTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBob3Vycy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGRpZmYgPSBNYXRoLmFicyhob3Vyc1tpXS5lcG9jaCAtIG5vdyk7XG4gICAgaWYgKGRpZmYgPCBiZXN0RGlmZikgeyBiZXN0RGlmZiA9IGRpZmY7IGJlc3QgPSBpOyB9XG4gIH1cbiAgcmV0dXJuIGJlc3Q7XG59XG5cbi8vIENyZWF0ZSB0aGUgU1ZHIHNjYWZmb2xkIG9uY2UuIENhbGxlZCBmcm9tIGluZGV4LmpzIGF0IGJvb3RzdHJhcCwgYWZ0ZXIgdGhlXG4vLyBtb3VudCBlbGVtZW50IGlzIGluIHRoZSBET00uXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRSaWJib24obW91bnQpIHtcbiAgaWYgKHN2ZykgeyByZXR1cm47IH0gLy8gYnVpbGQgb25jZVxuXG4gIHN2ZyA9IGVsKCdzdmcnLCB7XG4gICAgaWQ6ICdyaWJib25TdmcnLFxuICAgIHZpZXdCb3g6ICcwIDAgJyArIFZJRVdfVyArICcgJyArIChDSEFSVF9UT1AgKyBDSEFSVF9IICsgVElDS19IKSxcbiAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvOiAneE1pZFlNaWQgbWVldCcsXG4gIH0pO1xuXG4gIGNvbnN0IGRlZnMgPSBlbCgnZGVmcycpO1xuXG4gIC8vIEhvcml6b250YWwgc3Ryb2tlIGdyYWRpZW50OiBjb2xvdXJlZCBieSB0ZW1wZXJhdHVyZSBhY3Jvc3MgdGhlIDcyIGhvdXJzLlxuICAvLyBTdG9wcyBhcmUgcmVidWlsdCBlYWNoIHJlbmRlciBmcm9tIHRoZSBhY3R1YWwgc2VyaWVzLlxuICB0ZW1wR3JhZCA9IGVsKCdsaW5lYXJHcmFkaWVudCcsIHtcbiAgICBpZDogJ3RlbXBHcmFkJywgeDE6ICcwJywgeTE6ICcwJywgeDI6ICcxJywgeTI6ICcwJyxcbiAgfSk7XG5cbiAgLy8gVmVydGljYWwgZmFkZSBmaWxsIHVuZGVyIHRoZSBjdXJ2ZS5cbiAgY29uc3QgZmlsbEdyYWQgPSBlbCgnbGluZWFyR3JhZGllbnQnLCB7XG4gICAgaWQ6ICdmaWxsR3JhZCcsIHgxOiAnMCcsIHkxOiAnMCcsIHgyOiAnMCcsIHkyOiAnMScsXG4gIH0pO1xuICBmaWxsR3JhZC5hcHBlbmRDaGlsZChlbCgnc3RvcCcsIHsgb2Zmc2V0OiAnMCcsICdzdG9wLWNvbG9yJzogJyM4Q0EwQUUnLCAnc3RvcC1vcGFjaXR5JzogJzAuMjgnIH0pKTtcbiAgZmlsbEdyYWQuYXBwZW5kQ2hpbGQoZWwoJ3N0b3AnLCB7IG9mZnNldDogJzEnLCAnc3RvcC1jb2xvcic6ICcjOENBMEFFJywgJ3N0b3Atb3BhY2l0eSc6ICcwJyB9KSk7XG5cbiAgZGVmcy5hcHBlbmRDaGlsZCh0ZW1wR3JhZCk7XG4gIGRlZnMuYXBwZW5kQ2hpbGQoZmlsbEdyYWQpO1xuICBzdmcuYXBwZW5kQ2hpbGQoZGVmcyk7XG5cbiAgZmlsbFBhdGggPSBlbCgncGF0aCcsIHsgY2xhc3M6ICdyaWJib24tZmlsbCcsIGZpbGw6ICd1cmwoI2ZpbGxHcmFkKScsIHN0cm9rZTogJ25vbmUnIH0pO1xuICBjdXJ2ZVBhdGggPSBlbCgncGF0aCcsIHsgY2xhc3M6ICdyaWJib24tY3VydmUnLCBmaWxsOiAnbm9uZScsIHN0cm9rZTogJ3VybCgjdGVtcEdyYWQpJyB9KTtcbiAgYm91bmRhcnlHcm91cCA9IGVsKCdnJywgeyBjbGFzczogJ3JpYmJvbi1ib3VuZGFyaWVzJyB9KTtcbiAgdGlja0dyb3VwID0gZWwoJ2cnLCB7IGNsYXNzOiAncmliYm9uLXRpY2tzJyB9KTtcbiAgbWFya2VyR3JvdXAgPSBlbCgnZycsIHsgY2xhc3M6ICdyaWJib24tbWFya2VyJyB9KTtcbiAgbGFuZUdyb3VwID0gZWwoJ2cnLCB7IGNsYXNzOiAncmliYm9uLWxhbmUnIH0pO1xuXG4gIHN2Zy5hcHBlbmRDaGlsZChmaWxsUGF0aCk7XG4gIHN2Zy5hcHBlbmRDaGlsZChjdXJ2ZVBhdGgpO1xuICBzdmcuYXBwZW5kQ2hpbGQoYm91bmRhcnlHcm91cCk7XG4gIHN2Zy5hcHBlbmRDaGlsZCh0aWNrR3JvdXApO1xuICBzdmcuYXBwZW5kQ2hpbGQobGFuZUdyb3VwKTtcbiAgc3ZnLmFwcGVuZENoaWxkKG1hcmtlckdyb3VwKTtcblxuICBtb3VudC5hcHBlbmRDaGlsZChzdmcpO1xufVxuXG5mdW5jdGlvbiBjbGVhcihub2RlKSB7XG4gIHdoaWxlIChub2RlLmZpcnN0Q2hpbGQpIHsgbm9kZS5yZW1vdmVDaGlsZChub2RlLmZpcnN0Q2hpbGQpOyB9XG59XG5cbi8vIFJlZHJhdyB0aGUgd2hvbGUgcmliYm9uIGZyb20gYSBmb3JlY2FzdDogeyBsb2NhdGlvbiwgaG91cnNbXSwgZGF5c1tdLCBsYW5lPyB9LlxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclJpYmJvbihmb3JlY2FzdCkge1xuICBpZiAoIXN2ZykgeyByZXR1cm47IH1cblxuICBjb25zdCBob3VycyA9IGZvcmVjYXN0LmhvdXJzIHx8IFtdO1xuICBjb25zdCBuID0gaG91cnMubGVuZ3RoO1xuICBpZiAoIW4pIHsgcmV0dXJuOyB9XG5cbiAgY29uc3QgbGFuZU9uID0gISFmb3JlY2FzdC5sYW5lO1xuICBjb25zdCB0b3RhbEggPSBDSEFSVF9UT1AgKyBDSEFSVF9IICsgVElDS19IICsgKGxhbmVPbiA/IExBTkVfSCA6IDApO1xuICBzdmcuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgJzAgMCAnICsgVklFV19XICsgJyAnICsgdG90YWxIKTtcblxuICBjb25zdCBpbm5lclcgPSBWSUVXX1cgLSBQQURfTCAtIFBBRF9SO1xuICBjb25zdCBiYXNlbGluZSA9IENIQVJUX1RPUCArIENIQVJUX0g7XG5cbiAgLy8gdGVtcGVyYXR1cmUgZG9tYWluIGZvciB0aGUgeS1zY2FsZSwgcGFkZGVkIHNvIHRoZSBjdXJ2ZSBuZXZlciBodWdzIGFuIGVkZ2UuXG4gIGxldCBtaW4gPSBJbmZpbml0eTtcbiAgbGV0IG1heCA9IC1JbmZpbml0eTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICBpZiAoaG91cnNbaV0udGVtcCA8IG1pbikgeyBtaW4gPSBob3Vyc1tpXS50ZW1wOyB9XG4gICAgaWYgKGhvdXJzW2ldLnRlbXAgPiBtYXgpIHsgbWF4ID0gaG91cnNbaV0udGVtcDsgfVxuICB9XG4gIGlmIChtaW4gPT09IG1heCkgeyBtaW4gLT0gMTsgbWF4ICs9IDE7IH1cbiAgY29uc3Qgc3BhbiA9IG1heCAtIG1pbjtcblxuICBjb25zdCB4ID0gKGkpID0+IFBBRF9MICsgKG4gPD0gMSA/IDAgOiAoaSAvIChuIC0gMSkpICogaW5uZXJXKTtcbiAgY29uc3QgeSA9ICh0KSA9PiBDSEFSVF9UT1AgKyAoMSAtICh0IC0gbWluKSAvIHNwYW4pICogQ0hBUlRfSDtcblxuICAvLyBCdWlsZCB0aGUgcG9pbnRzLCB0aGVuIGEgc21vb3RoIHBhdGggdmlhIHF1YWRyYXRpYyBtaWRwb2ludHMgKG5vIG92ZXJzaG9vdCkuXG4gIGNvbnN0IHB0cyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykgeyBwdHMucHVzaCh7IHg6IHgoaSksIHk6IHkoaG91cnNbaV0udGVtcCkgfSk7IH1cblxuICBsZXQgZCA9ICdNICcgKyBwdHNbMF0ueC50b0ZpeGVkKDIpICsgJyAnICsgcHRzWzBdLnkudG9GaXhlZCgyKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwdHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCB4YyA9IChwdHNbaSAtIDFdLnggKyBwdHNbaV0ueCkgLyAyO1xuICAgIGNvbnN0IHljID0gKHB0c1tpIC0gMV0ueSArIHB0c1tpXS55KSAvIDI7XG4gICAgZCArPSAnIFEgJyArIHB0c1tpIC0gMV0ueC50b0ZpeGVkKDIpICsgJyAnICsgcHRzW2kgLSAxXS55LnRvRml4ZWQoMikgK1xuICAgICAgJyAnICsgeGMudG9GaXhlZCgyKSArICcgJyArIHljLnRvRml4ZWQoMik7XG4gIH1cbiAgZCArPSAnIEwgJyArIHB0c1tuIC0gMV0ueC50b0ZpeGVkKDIpICsgJyAnICsgcHRzW24gLSAxXS55LnRvRml4ZWQoMik7XG5cbiAgY3VydmVQYXRoLnNldEF0dHJpYnV0ZSgnZCcsIGQpO1xuICBmaWxsUGF0aC5zZXRBdHRyaWJ1dGUoJ2QnLCBkICtcbiAgICAnIEwgJyArIHB0c1tuIC0gMV0ueC50b0ZpeGVkKDIpICsgJyAnICsgYmFzZWxpbmUgK1xuICAgICcgTCAnICsgcHRzWzBdLngudG9GaXhlZCgyKSArICcgJyArIGJhc2VsaW5lICsgJyBaJyk7XG5cbiAgLy8gSG9yaXpvbnRhbCB0ZW1wZXJhdHVyZSBncmFkaWVudDogb25lIHN0b3AgcGVyIGhvdXIsIGNvbG91cmVkIGJ5IHRoYXQgaG91cidzXG4gIC8vIHRlbXBlcmF0dXJlLiBvYmplY3RCb3VuZGluZ0JveCBtYXBzIG9mZnNldCBpLyhuLTEpIG9udG8gdGhlIGN1cnZlJ3MgeCwgd2hpY2hcbiAgLy8gc3BhbnMgdGhlIGZ1bGwgaW5uZXIgd2lkdGgsIHNvIGVhY2ggc3RvcCBsYW5kcyB1bmRlciBpdHMgaG91ci5cbiAgY2xlYXIodGVtcEdyYWQpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgIHRlbXBHcmFkLmFwcGVuZENoaWxkKGVsKCdzdG9wJywge1xuICAgICAgb2Zmc2V0OiAobiA8PSAxID8gMCA6IGkgLyAobiAtIDEpKS50b0ZpeGVkKDQpLFxuICAgICAgJ3N0b3AtY29sb3InOiB0ZW1wQ29sb3VyKGhvdXJzW2ldLnRlbXApLFxuICAgIH0pKTtcbiAgfVxuXG4gIC8vIERheSBoYWlybGluZXMgKyBXRUQvVEhVL0ZSSSB0aWNrcywgZGVyaXZlZCBmcm9tIHRoZSBwZXItZGF5IGhvdXIgY291bnRzIHNvIGFcbiAgLy8gc2hvcnQgdHJhaWxpbmcgZGF5IHN0aWxsIGxpbmVzIHVwLlxuICBjbGVhcihib3VuZGFyeUdyb3VwKTtcbiAgY2xlYXIodGlja0dyb3VwKTtcbiAgY29uc3QgZGF5cyA9IGZvcmVjYXN0LmRheXMgfHwgW107XG4gIGxldCBzdGFydCA9IDA7XG4gIGZvciAobGV0IGRpID0gMDsgZGkgPCBkYXlzLmxlbmd0aDsgZGkrKykge1xuICAgIGNvbnN0IGNvdW50ID0gZGF5c1tkaV0uY291bnQgfHwgMDtcbiAgICBpZiAoY291bnQgPD0gMCkgeyBjb250aW51ZTsgfVxuXG4gICAgaWYgKGRpID4gMCAmJiBzdGFydCA8IG4pIHtcbiAgICAgIGNvbnN0IGJ4ID0geChzdGFydCkudG9GaXhlZCgyKTtcbiAgICAgIGJvdW5kYXJ5R3JvdXAuYXBwZW5kQ2hpbGQoZWwoJ2xpbmUnLCB7XG4gICAgICAgIGNsYXNzOiAncmliYm9uLWhhaXJsaW5lJyxcbiAgICAgICAgeDE6IGJ4LCB5MTogQ0hBUlRfVE9QLCB4MjogYngsIHkyOiBiYXNlbGluZSxcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBjb25zdCBjZW50ZXJJZHggPSBzdGFydCArIChjb3VudCAtIDEpIC8gMjtcbiAgICBjb25zdCB0aWNrID0gZWwoJ3RleHQnLCB7XG4gICAgICBjbGFzczogJ3JpYmJvbi10aWNrJyxcbiAgICAgIHg6IHgoY2VudGVySWR4KS50b0ZpeGVkKDIpLFxuICAgICAgeTogKGJhc2VsaW5lICsgVElDS19IICogMC43KS50b0ZpeGVkKDIpLFxuICAgICAgJ3RleHQtYW5jaG9yJzogJ21pZGRsZScsXG4gICAgfSk7XG4gICAgdGljay50ZXh0Q29udGVudCA9IHdlZWtkYXlBYmJyKGRheXNbZGldLmRhdGUpO1xuICAgIHRpY2tHcm91cC5hcHBlbmRDaGlsZCh0aWNrKTtcblxuICAgIHN0YXJ0ICs9IGNvdW50O1xuICB9XG5cbiAgLy8gQ3VycmVudC1ob3VyIG1hcmtlcjogYSBoYWlybGluZSBkcm9wcGVkIHRvIHRoZSBiYXNlbGluZSBwbHVzIGEgZG90IG9uIHRoZVxuICAvLyBjdXJ2ZSwgdGhlIGRvdCBmaWxsZWQgd2l0aCB0aGUgdGVtcGVyYXR1cmUgY29sb3VyIGZvciB0aGF0IGhvdXIuXG4gIGNsZWFyKG1hcmtlckdyb3VwKTtcbiAgY29uc3QgaWR4ID0gY3VycmVudEhvdXJJbmRleChmb3JlY2FzdCk7XG4gIGNvbnN0IG14ID0geChpZHgpO1xuICBjb25zdCBteSA9IHkoaG91cnNbaWR4XS50ZW1wKTtcbiAgbWFya2VyR3JvdXAuYXBwZW5kQ2hpbGQoZWwoJ2xpbmUnLCB7XG4gICAgY2xhc3M6ICdyaWJib24tbm93bGluZScsXG4gICAgeDE6IG14LnRvRml4ZWQoMiksIHkxOiBteS50b0ZpeGVkKDIpLCB4MjogbXgudG9GaXhlZCgyKSwgeTI6IGJhc2VsaW5lLFxuICB9KSk7XG4gIG1hcmtlckdyb3VwLmFwcGVuZENoaWxkKGVsKCdjaXJjbGUnLCB7XG4gICAgY2xhc3M6ICdyaWJib24tZG90JyxcbiAgICBjeDogbXgudG9GaXhlZCgyKSwgY3k6IG15LnRvRml4ZWQoMiksIHI6ICc1LjUnLFxuICAgIGZpbGw6IHRlbXBDb2xvdXIoaG91cnNbaWR4XS50ZW1wKSxcbiAgfSkpO1xuXG4gIC8vIE9wdGlvbmFsIHNlY29uZCBsYW5lLiBObyBkYXRhIGZlZWRzIGl0IHRvZGF5ICh0aWRlcyBhcmUgUHJvKyBhbmQgZW1wdHkgZm9yXG4gIC8vIGlubGFuZCBsb2NhdGlvbnMpLCBzbyBpdCBzdGF5cyBlbXB0eSBhbmQgdGhlIHZpZXdCb3ggdXNlcyB0aGUgc2hvcnRlciBvZiB0aGVcbiAgLy8gdHdvIGhlaWdodHMg4oCUIGJ1dCB0aGUgZ3JvdXAgYW5kIHRoZSBoZWlnaHQgc3dpdGNoIGV4aXN0IHNvIGEgbGFuZSBjYW4gZHJvcCBpblxuICAvLyB3aXRob3V0IGEgbGF5b3V0IHJld3JpdGUuXG4gIGNsZWFyKGxhbmVHcm91cCk7XG4gIGlmIChsYW5lT24gJiYgdHlwZW9mIGZvcmVjYXN0LmxhbmUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBmb3JlY2FzdC5sYW5lKGxhbmVHcm91cCwgeyB4LCBiYXNlbGluZSwgbGFuZVRvcDogYmFzZWxpbmUgKyBUSUNLX0gsIGxhbmVIOiBMQU5FX0ggfSk7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvV2VhdGhlckFwcF9UT1AvXCI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCAnLi9sb2dpYy5qcyc7IC8vIGRlZmluZXMgZm9yZWNhc3RMb2dpYyAobm8gZmV0Y2ggZmlyZXMgYXQgaW1wb3J0IOKAlCBzZWUgaW5pdEZhdm91cml0ZXMpXG5pbXBvcnQgeyB3aXJlRXZlbnRzIH0gZnJvbSAnLi9pbmRleENoYW5nZXMuanMnO1xuaW1wb3J0IHsgYnVpbGRSaWJib24gfSBmcm9tICcuL3JpYmJvbi5qcyc7XG5pbXBvcnQgeyBpbml0RmF2b3VyaXRlcyB9IGZyb20gJy4vZmF2b3VyaXRlcy5qcyc7XG5cbi8vIFRoZSB3aG9sZSBVSSBpcyBidWlsdCBoZXJlIHdpdGggZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAodGhlcmUgaXMgbm8gSFRNTCBzb3VyY2Vcbi8vIGZpbGUg4oCUIGh0bWwtd2VicGFjay1wbHVnaW4gZ2VuZXJhdGVzIGFuIGVtcHR5IGRvY3VtZW50KS4gVGhlIGZvcmVjYXN0IGlzIG9uZVxuLy8gY29udGludW91cyB0ZW1wZXJhdHVyZSByaWJib24gYWNyb3NzIGFsbCB0aHJlZSBkYXlzLCBhIHJlYWRvdXQgYmVuZWF0aCBpdCwgYW5kXG4vLyBhIHNlYXJjaCBib3g6IG5vIGNhcmRzLCBubyBhcnJvd3MsIG5vIHBlci1jb25kaXRpb24gdGhlbWUsIG5vIGRheSBuYXZpZ2F0aW9uLlxuXG4vLyBBIGRlc2t0b3Atb25seSBwcmV2L25leHQgY2hldnJvbiBmbGFua2luZyB0aGUgc2F2ZWQtbG9jYXRpb24gZG90cy4gSW5saW5lIFNWR1xuLy8gc28gQ1NTIGNhbiByZWNvbG91ciB0aGUgc3Ryb2tlIHZpYSBjdXJyZW50Q29sb3IgKGlkbGUgbXV0ZWQsIGJyaWdodGVyIG9uXG4vLyBob3ZlcikuIGZhdm91cml0ZXMuanMgd2lyZXMgdGhlIGNsaWNrcyB0byByb3RhdGUoKTsgdGhlIHBhaXIgaXMgaGlkZGVuIHdpdGhcbi8vIHRoZSBkb3RzIGJlbG93IHR3byBsb2NhdGlvbnMsIGFuZCBoaWRkZW4gZW50aXJlbHkgYXQg4omkNDgwcHggd2hlcmUgc3dpcGUgcnVsZXMuXG5mdW5jdGlvbiBuYXZBcnJvdyhpZCwgZGlyLCBsYWJlbCkge1xuICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnRuLnR5cGUgPSAnYnV0dG9uJztcbiAgYnRuLmlkID0gaWQ7XG4gIGJ0bi5jbGFzc05hbWUgPSAnYXJyb3cnO1xuICBidG4uc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgbGFiZWwpO1xuICBjb25zdCBwb2ludHMgPSBkaXIgPCAwID8gJzEzLDMgNyw3IDEzLDExJyA6ICc3LDMgMTMsNyA3LDExJztcbiAgYnRuLmlubmVySFRNTCA9XG4gICAgJzxzdmcgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjE0XCIgdmlld0JveD1cIjAgMCAyMCAxNFwiIGZpbGw9XCJub25lXCIgJyArXG4gICAgJ3N0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjJcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgJyArXG4gICAgJ3N0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+JyArXG4gICAgJzxwb2x5bGluZSBwb2ludHM9XCInICsgcG9pbnRzICsgJ1wiPjwvcG9seWxpbmU+PC9zdmc+JztcbiAgcmV0dXJuIGJ0bjtcbn1cblxuZnVuY3Rpb24gc3RhdChpZCwgbGFiZWwpIHtcbiAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjZWxsLmNsYXNzTmFtZSA9ICdzdGF0JztcblxuICBjb25zdCBsYWJlbEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxhYmVsRWwuY2xhc3NOYW1lID0gJ3N0YXQtbGFiZWwnO1xuICBsYWJlbEVsLnRleHRDb250ZW50ID0gbGFiZWw7XG5cbiAgY29uc3QgdmFsdWVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB2YWx1ZUVsLmNsYXNzTmFtZSA9ICdzdGF0LXZhbHVlJztcbiAgdmFsdWVFbC5pZCA9IGlkO1xuICB2YWx1ZUVsLnRleHRDb250ZW50ID0gJ+KAlCc7XG5cbiAgY2VsbC5hcHBlbmRDaGlsZChsYWJlbEVsKTtcbiAgY2VsbC5hcHBlbmRDaGlsZCh2YWx1ZUVsKTtcbiAgcmV0dXJuIGNlbGw7XG59XG5cbmZ1bmN0aW9uIGNvbXBvbmVudCgpIHtcbiAgY29uc3QgYXBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGFwcC5pZCA9ICdhcHAnO1xuXG4gIC8vIFJpYmJvbiBwYW5lbCDigJQgdGhlIFNWRyBjdXJ2ZSBpcyBtb3VudGVkIGludG8gI3JpYmJvbldyYXAgYnkgYnVpbGRSaWJib24oKS5cbiAgY29uc3QgcmliYm9uV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICByaWJib25XcmFwLmlkID0gJ3JpYmJvbldyYXAnO1xuXG4gIC8vIFJlYWRvdXQ6IGxvY2F0aW9uLCBjdXJyZW50IHRlbXBlcmF0dXJlLCBjb25kaXRpb24sIGFuZCBhIGZvdXItdXAgc3RhdCByb3cuXG4gIGNvbnN0IHJlYWRvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcmVhZG91dC5pZCA9ICdyZWFkb3V0JztcblxuICBjb25zdCBsb2NhdGlvbk5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbG9jYXRpb25OYW1lLmlkID0gJ2xvY2F0aW9uTmFtZSc7XG4gIGxvY2F0aW9uTmFtZS50ZXh0Q29udGVudCA9ICfigJQnO1xuXG4gIC8vIFNhdmVkLWxvY2F0aW9uIGluZGljYXRvcjogb25lIGRvdCBwZXIgc2F2ZWQgbG9jYXRpb24sIHRoZSBjdXJyZW50IG9uZSBmaWxsZWQuXG4gIC8vIFBvcHVsYXRlZCBieSBmYXZvdXJpdGVzLmpzLiBUaGUgZG90cyBzaXQgaW5zaWRlIGEgLm5hdlJvdyBiZXR3ZWVuIHR3b1xuICAvLyBkZXNrdG9wLW9ubHkgcHJldi9uZXh0IGFycm93czsgZmF2b3VyaXRlcy5qcyBnYXRlcyB0aGUgd2hvbGUgcm93J3NcbiAgLy8gdmlzaWJpbGl0eSAoaGlkZGVuIHVudGlsIHR3byBvciBtb3JlIGxvY2F0aW9ucyBhcmUgc2F2ZWQpLlxuICBjb25zdCBuYXZSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbmF2Um93LmNsYXNzTmFtZSA9ICduYXZSb3cgaGlkZGVuJztcblxuICBjb25zdCBkb3RSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZG90Um93LmlkID0gJ2RvdFJvdyc7XG5cbiAgbmF2Um93LmFwcGVuZENoaWxkKG5hdkFycm93KCduYXZQcmV2JywgLTEsICdQcmV2aW91cyBsb2NhdGlvbicpKTtcbiAgbmF2Um93LmFwcGVuZENoaWxkKGRvdFJvdyk7XG4gIG5hdlJvdy5hcHBlbmRDaGlsZChuYXZBcnJvdygnbmF2TmV4dCcsIDEsICdOZXh0IGxvY2F0aW9uJykpO1xuXG4gIGNvbnN0IGN1cnJlbnRUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGN1cnJlbnRUZW1wLmlkID0gJ2N1cnJlbnRUZW1wJztcbiAgY3VycmVudFRlbXAudGV4dENvbnRlbnQgPSAn4oCUJztcblxuICBjb25zdCBjdXJyZW50Q29uZGl0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGN1cnJlbnRDb25kaXRpb24uaWQgPSAnY3VycmVudENvbmRpdGlvbic7XG4gIGN1cnJlbnRDb25kaXRpb24udGV4dENvbnRlbnQgPSAn4oCUJztcblxuICBjb25zdCBzdGF0Um93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHN0YXRSb3cuaWQgPSAnc3RhdFJvdyc7XG4gIHN0YXRSb3cuYXBwZW5kQ2hpbGQoc3RhdCgnZmVlbHNWYWwnLCAnRkVFTFMgTElLRScpKTtcbiAgc3RhdFJvdy5hcHBlbmRDaGlsZChzdGF0KCdodW1pZGl0eVZhbCcsICdIVU1JRElUWScpKTtcbiAgc3RhdFJvdy5hcHBlbmRDaGlsZChzdGF0KCdyYWluVmFsJywgJ1JBSU4nKSk7XG4gIHN0YXRSb3cuYXBwZW5kQ2hpbGQoc3RhdCgnd2luZFZhbCcsICdXSU5EJykpO1xuXG4gIHJlYWRvdXQuYXBwZW5kQ2hpbGQobG9jYXRpb25OYW1lKTtcbiAgcmVhZG91dC5hcHBlbmRDaGlsZChuYXZSb3cpO1xuICByZWFkb3V0LmFwcGVuZENoaWxkKGN1cnJlbnRUZW1wKTtcbiAgcmVhZG91dC5hcHBlbmRDaGlsZChjdXJyZW50Q29uZGl0aW9uKTtcbiAgcmVhZG91dC5hcHBlbmRDaGlsZChzdGF0Um93KTtcblxuICAvLyBTZWFyY2ggZm9ybS4gQSByZWFsIDxmb3JtPiArIHN1Ym1pdCBidXR0b24gc28gRW50ZXIgYW5kIGNsaWNrIHNoYXJlIG9uZVxuICAvLyBzdWJtaXQgZXZlbnQgKHdpcmVkIG9uY2UgaW4gd2lyZUV2ZW50cygpKS5cbiAgY29uc3Qgc2VhcmNoRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgc2VhcmNoRm9ybS5pZCA9ICdzZWFyY2hGb3JtJztcblxuICAvLyBUaGUgaW5wdXQgYW5kIGl0cyBhdXRvY29tcGxldGUgZHJvcGRvd24gc2hhcmUgYSByZWxhdGl2ZWx5LXBvc2l0aW9uZWQgd3JhcHBlclxuICAvLyBzbyAjc3VnZ2VzdGlvbnMgY2FuIGhhbmcgYmVuZWF0aCAjc2VhcmNoSW5wdXQgKHRvcDogMTAwJSkgYW5kIGFsaWduIHRvIGl0c1xuICAvLyBlZGdlcywgaW5zdGVhZCBvZiBiZWNvbWluZyBhIHRoaXJkIGZsZXggY2hpbGQgb2YgdGhlIHJvdy5cbiAgY29uc3Qgc2VhcmNoSW5wdXRXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNlYXJjaElucHV0V3JhcC5pZCA9ICdzZWFyY2hJbnB1dFdyYXAnO1xuXG4gIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgc2VhcmNoSW5wdXQuaWQgPSAnc2VhcmNoSW5wdXQnO1xuICBzZWFyY2hJbnB1dC50eXBlID0gJ3RleHQnO1xuICBzZWFyY2hJbnB1dC5wbGFjZWhvbGRlciA9ICdTZWFyY2ggbG9jYXRpb24nO1xuICBzZWFyY2hJbnB1dC5zZXRBdHRyaWJ1dGUoJ2F1dG9jb21wbGV0ZScsICdvZmYnKTtcblxuICAvLyBDaXR5LXN1Z2dlc3Rpb24gZHJvcGRvd24uIFBvcHVsYXRlZCBieSBhIGRlYm91bmNlZCBsb29rdXAgd2lyZWQgb25jZSBpblxuICAvLyB3aXJlRXZlbnRzKCk7IGhpZGRlbiB1bnRpbCB0aGVyZSBhcmUgbWF0Y2hlcyB0byBzaG93LlxuICBjb25zdCBzdWdnZXN0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzdWdnZXN0aW9ucy5pZCA9ICdzdWdnZXN0aW9ucyc7XG4gIHN1Z2dlc3Rpb25zLmNsYXNzTmFtZSA9ICdoaWRkZW4nO1xuICBzdWdnZXN0aW9ucy5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnbGlzdGJveCcpO1xuXG4gIGNvbnN0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBzZWFyY2hCdXR0b24uaWQgPSAnc2VhcmNoQnV0dG9uJztcbiAgc2VhcmNoQnV0dG9uLnR5cGUgPSAnc3VibWl0JztcbiAgc2VhcmNoQnV0dG9uLnRleHRDb250ZW50ID0gJ1N1Ym1pdCc7XG5cbiAgc2VhcmNoSW5wdXRXcmFwLmFwcGVuZENoaWxkKHNlYXJjaElucHV0KTtcbiAgc2VhcmNoSW5wdXRXcmFwLmFwcGVuZENoaWxkKHN1Z2dlc3Rpb25zKTtcblxuICBzZWFyY2hGb3JtLmFwcGVuZENoaWxkKHNlYXJjaElucHV0V3JhcCk7XG4gIHNlYXJjaEZvcm0uYXBwZW5kQ2hpbGQoc2VhcmNoQnV0dG9uKTtcblxuICBhcHAuYXBwZW5kQ2hpbGQocmliYm9uV3JhcCk7XG4gIGFwcC5hcHBlbmRDaGlsZChyZWFkb3V0KTtcbiAgYXBwLmFwcGVuZENoaWxkKHNlYXJjaEZvcm0pO1xuXG4gIHJldHVybiBhcHA7XG59XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KCkpO1xuXG4vLyBCdWlsZCB0aGUgU1ZHIHNjYWZmb2xkIG5vdyB0aGF0ICNyaWJib25XcmFwIGV4aXN0cywgdGhlbiByZWdpc3RlciBsaXN0ZW5lcnNcbi8vIGV4YWN0bHkgb25jZS4gQm90aCBydW4gb2ZmIHRoZSByZW5kZXIgcGF0aCwgc28gbm90aGluZyBtdWx0aXBsaWVzIGFjcm9zc1xuLy8gZmV0Y2hlcy4gaW5pdEZhdm91cml0ZXMoKSBsb2FkcyB0aGUgc2F2ZWQgbG9jYXRpb25zLCB3aXJlcyB0aGUgc3dpcGUvZG90XG4vLyBnZXN0dXJlcyBvbmNlLCBkcmF3cyB0aGUgZG90cywgYW5kIGZpcmVzIHRoZSBzaW5nbGUgaW5pdGlhbCBmZXRjaCAodGhlIGZpcnN0XG4vLyBzYXZlZCBsb2NhdGlvbiwgb3IgdGhlIGRlZmF1bHQgd2hlbiBub25lIGFyZSBzYXZlZCksIHdoaWNoIHJlc29sdmVzXG4vLyBhZnRlcndhcmRzIGFuZCByZW5kZXJzIGludG8gdGhpcyBzY2FmZm9sZC5cbmJ1aWxkUmliYm9uKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyaWJib25XcmFwJykpO1xud2lyZUV2ZW50cygpO1xuaW5pdEZhdm91cml0ZXMoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==