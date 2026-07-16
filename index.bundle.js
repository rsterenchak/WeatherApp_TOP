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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: 'Roboto';\n  src: url('./Roboto-Regular.ttf');\n  font-weight: 300 400;\n}\n\n/* Palette:\n   ground  #12181F   rules  #26313B\n   text    #EAEEF2 (primary) / #8CA0AE (muted)\n   The temperature colours live in ribbon.js (the curve is coloured by the\n   temperature scalar, not by CSS). */\n:root {\n  --ground: #12181F;\n  --rule: #26313B;\n  --text: #EAEEF2;\n  --muted: #8CA0AE;\n  --mono: 'SFMono-Regular', 'SF Mono', 'Menlo', 'Consolas', 'Liberation Mono', monospace;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  background: var(--ground);\n  color: var(--text);\n  font-family: 'Roboto', system-ui, sans-serif;\n  -webkit-font-smoothing: antialiased;\n}\n\n/* dvh (not vh): on iOS Safari vh resolves to the tall viewport and parks the\n   bottom of the layout under the URL bar. */\n#app {\n  min-height: 100dvh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 28px;\n  max-width: 720px;\n  margin: 0 auto;\n  padding: 32px 20px;\n}\n\n/* Ribbon: the SVG scales to the column width via the viewBox, so all 72 hours\n   are on screen at any width down to 380px without scroll or pan. */\n#ribbonWrap {\n  width: 100%;\n}\n\n#ribbonSvg {\n  display: block;\n  width: 100%;\n  height: auto;\n  overflow: visible;\n}\n\n.ribbon-curve {\n  stroke-width: 2.5;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n\n/* Day boundary hairlines at hours 24 and 48. */\n.ribbon-hairline {\n  stroke: var(--rule);\n  stroke-width: 1;\n}\n\n.ribbon-tick {\n  fill: var(--muted);\n  font-family: var(--mono);\n  font-size: 12px;\n  letter-spacing: 1px;\n}\n\n.ribbon-nowline {\n  stroke: var(--muted);\n  stroke-width: 1;\n  stroke-dasharray: 2 3;\n  opacity: 0.7;\n}\n\n.ribbon-dot {\n  stroke: var(--ground);\n  stroke-width: 2;\n}\n\n/* Readout beneath the curve. */\n#readout {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  text-align: center;\n}\n\n#locationName {\n  font-family: var(--mono);\n  font-size: 13px;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  color: var(--muted);\n}\n\n/* Saved-location navigation: prev/next chevrons flanking the dot row. The whole\n   row is hidden at a count of one (a single location needs no affordance); the\n   arrows are desktop-only and drop out at ≤480px where swipe takes over. */\n.navRow {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  margin: 4px 0 2px;\n}\n\n.navRow.hidden {\n  display: none;\n}\n\n.arrow {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  border: none;\n  background: none;\n  color: var(--muted);\n  cursor: pointer;\n}\n\n.arrow:hover {\n  color: #EAEEF2;\n}\n\n.arrow svg {\n  display: block;\n  width: 20px;\n  height: 14px;\n}\n\n/* Saved-location dots: one per saved location, the active one filled. */\n#dotRow {\n  display: flex;\n  gap: 8px;\n}\n\n.dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #2E3B45;\n  cursor: pointer;\n  touch-action: manipulation;\n}\n\n.dot.active {\n  background: #EAEEF2;\n}\n\n/* Roboto Light 40px for the reading. */\n#currentTemp {\n  font-family: 'Roboto', sans-serif;\n  font-weight: 300;\n  font-size: 40px;\n  line-height: 1.1;\n}\n\n#currentCondition {\n  font-size: 15px;\n  color: var(--text);\n}\n\n/* Four-up stat row: text labels, no icons. */\n#statRow {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 10px;\n  width: 100%;\n  margin-top: 14px;\n}\n\n.stat {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  padding: 12px 6px;\n  border: 1px solid var(--rule);\n  border-radius: 8px;\n}\n\n.stat-label {\n  font-family: var(--mono);\n  font-size: 10px;\n  letter-spacing: 1px;\n  color: var(--muted);\n}\n\n.stat-value {\n  font-size: 17px;\n  color: var(--text);\n}\n\n/* Search form. */\n#searchForm {\n  display: flex;\n  gap: 10px;\n  width: 100%;\n}\n\n/* Holds the input and its autocomplete dropdown; position: relative anchors\n   #suggestions beneath the input. flex: 1 so the pair fills the row the way the\n   bare input used to. */\n#searchInputWrap {\n  position: relative;\n  flex: 1;\n  min-width: 0;\n}\n\n#searchInput {\n  width: 100%;\n  padding: 12px 14px;\n  font-family: var(--mono);\n  font-size: 16px; /* 16px so iOS Safari doesn't auto-zoom the input on focus */\n  color: var(--text);\n  background: transparent;\n  border: 1px solid var(--rule);\n  border-radius: 8px;\n}\n\n#searchInput::placeholder {\n  color: var(--muted);\n}\n\n#searchInput:focus {\n  outline: none;\n  border-color: var(--muted);\n}\n\n/* While the dropdown is open the input's bottom corners square off and its\n   bottom edge drops out, so it reads as one attached surface with #suggestions. */\n#searchForm.suggesting #searchInput {\n  border-radius: 8px 8px 0 0;\n  border-bottom-color: transparent;\n}\n\n/* Failed lookup: reddened border, current ribbon left in place. */\n#searchForm.invalid #searchInput {\n  border-color: #C2452D;\n}\n\n/* Autocomplete dropdown: hangs off the bottom of the input, matching its width\n   and continuing its focused border into a bottom-rounded panel. */\n#suggestions {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  z-index: 10;\n  max-height: 240px;\n  overflow-y: auto;\n  background: var(--ground);\n  border: 1px solid var(--muted);\n  border-top: none;\n  border-radius: 0 0 8px 8px;\n}\n\n#suggestions.hidden {\n  display: none;\n}\n\n.suggestion-item {\n  display: flex;\n  align-items: baseline;\n  gap: 8px;\n  padding: 10px 14px;\n  font-family: var(--mono);\n  cursor: pointer;\n}\n\n.suggestion-item:hover,\n.suggestion-item.selected {\n  background: var(--rule);\n}\n\n.suggestion-city {\n  font-size: 14px;\n  color: var(--text);\n}\n\n.suggestion-country {\n  font-size: 12px;\n  color: var(--muted);\n}\n\n#searchButton {\n  padding: 12px 20px;\n  font-family: var(--mono);\n  font-size: 14px;\n  letter-spacing: 1px;\n  color: var(--ground);\n  background: var(--text);\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n}\n\n#searchButton:hover {\n  filter: brightness(0.92);\n}\n\n@media (max-width: 480px) {\n  #app {\n    gap: 22px;\n    padding: 24px 16px;\n  }\n\n  /* Mobile navigates by swipe; drop the arrows but keep the dots. */\n  .arrow {\n    display: none;\n  }\n\n  #statRow {\n    gap: 8px;\n  }\n\n  .stat {\n    padding: 10px 4px;\n  }\n\n  .stat-value {\n    font-size: 15px;\n  }\n}\n"],"sourceRoot":""}]);
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
// (wrapping at both ends); tapping a dot jumps to it; long-pressing a dot
// removes it after a naming confirmation.
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
const LONGPRESS_MS = 500;   // hold to remove a dot

// Saved location query strings, in order. currentIndex points at the active one.
let locations = [];
let currentIndex = 0;

let dotRow; // #dotRow, cached once by initFavourites()
let navRow; // .navRow wrapping the dots and the prev/next arrows

// Swipe tracking.
let touchStartX = null;
let touchStartY = null;
let swipeActive = false;

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

// Tap a dot to jump to it; long-press (~500ms) to remove it after a
// confirmation that names the location.
function wireDot(dot, i) {
  let timer = null;
  let longFired = false;

  const cancel = () => {
    if (timer) { clearTimeout(timer); timer = null; }
  };

  dot.addEventListener('pointerdown', () => {
    // No preventDefault here: it would suppress the follow-up click and break
    // tap-to-select. The long-press branch is disambiguated by the longFired
    // flag instead, and the native long-press menu is stopped via contextmenu.
    longFired = false;
    timer = setTimeout(() => {
      longFired = true;
      timer = null;
      confirmRemove(i);
    }, LONGPRESS_MS);
  });
  dot.addEventListener('pointerup', cancel);
  dot.addEventListener('pointerleave', cancel);
  dot.addEventListener('pointercancel', cancel);
  dot.addEventListener('contextmenu', (e) => e.preventDefault());
  dot.addEventListener('click', () => {
    if (longFired) { longFired = false; return; } // the long-press already acted
    selectIndex(i);
  });
}

function confirmRemove(i) {
  if (i < 0 || i >= locations.length) { return; }
  if (window.confirm('Remove ' + locations[i] + '?')) {
    removeLocation(i);
  }
}

function selectIndex(i) {
  if (i < 0 || i >= locations.length || i === currentIndex) { return; }
  currentIndex = i;
  renderDots();
  showCurrent();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMscUhBQXVDO0FBQ25GLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0RUFBNEU7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsT0FBTyxRQUFRLE9BQU8sTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sWUFBWSxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLHVCQUF1QixhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZ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QUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQVc7QUFDWCw0REFBVTtBQUNWLDhEQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vc3JjL2Zhdm91cml0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vc3JjL2luZGV4Q2hhbmdlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vLi9zcmMvbG9naWMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vc3JjL3JpYmJvbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9Sb2JvdG8tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICBmb250LXdlaWdodDogMzAwIDQwMDtcbn1cblxuLyogUGFsZXR0ZTpcbiAgIGdyb3VuZCAgIzEyMTgxRiAgIHJ1bGVzICAjMjYzMTNCXG4gICB0ZXh0ICAgICNFQUVFRjIgKHByaW1hcnkpIC8gIzhDQTBBRSAobXV0ZWQpXG4gICBUaGUgdGVtcGVyYXR1cmUgY29sb3VycyBsaXZlIGluIHJpYmJvbi5qcyAodGhlIGN1cnZlIGlzIGNvbG91cmVkIGJ5IHRoZVxuICAgdGVtcGVyYXR1cmUgc2NhbGFyLCBub3QgYnkgQ1NTKS4gKi9cbjpyb290IHtcbiAgLS1ncm91bmQ6ICMxMjE4MUY7XG4gIC0tcnVsZTogIzI2MzEzQjtcbiAgLS10ZXh0OiAjRUFFRUYyO1xuICAtLW11dGVkOiAjOENBMEFFO1xuICAtLW1vbm86ICdTRk1vbm8tUmVndWxhcicsICdTRiBNb25vJywgJ01lbmxvJywgJ0NvbnNvbGFzJywgJ0xpYmVyYXRpb24gTW9ubycsIG1vbm9zcGFjZTtcbn1cblxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdyb3VuZCk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWY7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG4vKiBkdmggKG5vdCB2aCk6IG9uIGlPUyBTYWZhcmkgdmggcmVzb2x2ZXMgdG8gdGhlIHRhbGwgdmlld3BvcnQgYW5kIHBhcmtzIHRoZVxuICAgYm90dG9tIG9mIHRoZSBsYXlvdXQgdW5kZXIgdGhlIFVSTCBiYXIuICovXG4jYXBwIHtcbiAgbWluLWhlaWdodDogMTAwZHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAyOHB4O1xuICBtYXgtd2lkdGg6IDcyMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMzJweCAyMHB4O1xufVxuXG4vKiBSaWJib246IHRoZSBTVkcgc2NhbGVzIHRvIHRoZSBjb2x1bW4gd2lkdGggdmlhIHRoZSB2aWV3Qm94LCBzbyBhbGwgNzIgaG91cnNcbiAgIGFyZSBvbiBzY3JlZW4gYXQgYW55IHdpZHRoIGRvd24gdG8gMzgwcHggd2l0aG91dCBzY3JvbGwgb3IgcGFuLiAqL1xuI3JpYmJvbldyYXAge1xuICB3aWR0aDogMTAwJTtcbn1cblxuI3JpYmJvblN2ZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuLnJpYmJvbi1jdXJ2ZSB7XG4gIHN0cm9rZS13aWR0aDogMi41O1xuICBzdHJva2UtbGluZWNhcDogcm91bmQ7XG4gIHN0cm9rZS1saW5lam9pbjogcm91bmQ7XG59XG5cbi8qIERheSBib3VuZGFyeSBoYWlybGluZXMgYXQgaG91cnMgMjQgYW5kIDQ4LiAqL1xuLnJpYmJvbi1oYWlybGluZSB7XG4gIHN0cm9rZTogdmFyKC0tcnVsZSk7XG4gIHN0cm9rZS13aWR0aDogMTtcbn1cblxuLnJpYmJvbi10aWNrIHtcbiAgZmlsbDogdmFyKC0tbXV0ZWQpO1xuICBmb250LWZhbWlseTogdmFyKC0tbW9ubyk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cblxuLnJpYmJvbi1ub3dsaW5lIHtcbiAgc3Ryb2tlOiB2YXIoLS1tdXRlZCk7XG4gIHN0cm9rZS13aWR0aDogMTtcbiAgc3Ryb2tlLWRhc2hhcnJheTogMiAzO1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbi5yaWJib24tZG90IHtcbiAgc3Ryb2tlOiB2YXIoLS1ncm91bmQpO1xuICBzdHJva2Utd2lkdGg6IDI7XG59XG5cbi8qIFJlYWRvdXQgYmVuZWF0aCB0aGUgY3VydmUuICovXG4jcmVhZG91dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNsb2NhdGlvbk5hbWUge1xuICBmb250LWZhbWlseTogdmFyKC0tbW9ubyk7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcbn1cblxuLyogU2F2ZWQtbG9jYXRpb24gbmF2aWdhdGlvbjogcHJldi9uZXh0IGNoZXZyb25zIGZsYW5raW5nIHRoZSBkb3Qgcm93LiBUaGUgd2hvbGVcbiAgIHJvdyBpcyBoaWRkZW4gYXQgYSBjb3VudCBvZiBvbmUgKGEgc2luZ2xlIGxvY2F0aW9uIG5lZWRzIG5vIGFmZm9yZGFuY2UpOyB0aGVcbiAgIGFycm93cyBhcmUgZGVza3RvcC1vbmx5IGFuZCBkcm9wIG91dCBhdCDiiaQ0ODBweCB3aGVyZSBzd2lwZSB0YWtlcyBvdmVyLiAqL1xuLm5hdlJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIG1hcmdpbjogNHB4IDAgMnB4O1xufVxuXG4ubmF2Um93LmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5hcnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFycm93OmhvdmVyIHtcbiAgY29sb3I6ICNFQUVFRjI7XG59XG5cbi5hcnJvdyBzdmcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMTRweDtcbn1cblxuLyogU2F2ZWQtbG9jYXRpb24gZG90czogb25lIHBlciBzYXZlZCBsb2NhdGlvbiwgdGhlIGFjdGl2ZSBvbmUgZmlsbGVkLiAqL1xuI2RvdFJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogOHB4O1xufVxuXG4uZG90IHtcbiAgd2lkdGg6IDhweDtcbiAgaGVpZ2h0OiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogIzJFM0I0NTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcbn1cblxuLmRvdC5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjRUFFRUYyO1xufVxuXG4vKiBSb2JvdG8gTGlnaHQgNDBweCBmb3IgdGhlIHJlYWRpbmcuICovXG4jY3VycmVudFRlbXAge1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDEuMTtcbn1cblxuI2N1cnJlbnRDb25kaXRpb24ge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbn1cblxuLyogRm91ci11cCBzdGF0IHJvdzogdGV4dCBsYWJlbHMsIG5vIGljb25zLiAqL1xuI3N0YXRSb3cge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xuICBnYXA6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAxNHB4O1xufVxuXG4uc3RhdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNHB4O1xuICBwYWRkaW5nOiAxMnB4IDZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcnVsZSk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLnN0YXQtbGFiZWwge1xuICBmb250LWZhbWlseTogdmFyKC0tbW9ubyk7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcbn1cblxuLnN0YXQtdmFsdWUge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbn1cblxuLyogU2VhcmNoIGZvcm0uICovXG4jc2VhcmNoRm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi8qIEhvbGRzIHRoZSBpbnB1dCBhbmQgaXRzIGF1dG9jb21wbGV0ZSBkcm9wZG93bjsgcG9zaXRpb246IHJlbGF0aXZlIGFuY2hvcnNcbiAgICNzdWdnZXN0aW9ucyBiZW5lYXRoIHRoZSBpbnB1dC4gZmxleDogMSBzbyB0aGUgcGFpciBmaWxscyB0aGUgcm93IHRoZSB3YXkgdGhlXG4gICBiYXJlIGlucHV0IHVzZWQgdG8uICovXG4jc2VhcmNoSW5wdXRXcmFwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4OiAxO1xuICBtaW4td2lkdGg6IDA7XG59XG5cbiNzZWFyY2hJbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMnB4IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tb25vKTtcbiAgZm9udC1zaXplOiAxNnB4OyAvKiAxNnB4IHNvIGlPUyBTYWZhcmkgZG9lc24ndCBhdXRvLXpvb20gdGhlIGlucHV0IG9uIGZvY3VzICovXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXJ1bGUpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbiNzZWFyY2hJbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xufVxuXG4jc2VhcmNoSW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItY29sb3I6IHZhcigtLW11dGVkKTtcbn1cblxuLyogV2hpbGUgdGhlIGRyb3Bkb3duIGlzIG9wZW4gdGhlIGlucHV0J3MgYm90dG9tIGNvcm5lcnMgc3F1YXJlIG9mZiBhbmQgaXRzXG4gICBib3R0b20gZWRnZSBkcm9wcyBvdXQsIHNvIGl0IHJlYWRzIGFzIG9uZSBhdHRhY2hlZCBzdXJmYWNlIHdpdGggI3N1Z2dlc3Rpb25zLiAqL1xuI3NlYXJjaEZvcm0uc3VnZ2VzdGluZyAjc2VhcmNoSW5wdXQge1xuICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDAgMDtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi8qIEZhaWxlZCBsb29rdXA6IHJlZGRlbmVkIGJvcmRlciwgY3VycmVudCByaWJib24gbGVmdCBpbiBwbGFjZS4gKi9cbiNzZWFyY2hGb3JtLmludmFsaWQgI3NlYXJjaElucHV0IHtcbiAgYm9yZGVyLWNvbG9yOiAjQzI0NTJEO1xufVxuXG4vKiBBdXRvY29tcGxldGUgZHJvcGRvd246IGhhbmdzIG9mZiB0aGUgYm90dG9tIG9mIHRoZSBpbnB1dCwgbWF0Y2hpbmcgaXRzIHdpZHRoXG4gICBhbmQgY29udGludWluZyBpdHMgZm9jdXNlZCBib3JkZXIgaW50byBhIGJvdHRvbS1yb3VuZGVkIHBhbmVsLiAqL1xuI3N1Z2dlc3Rpb25zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAxMDtcbiAgbWF4LWhlaWdodDogMjQwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGJhY2tncm91bmQ6IHZhcigtLWdyb3VuZCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW11dGVkKTtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDhweCA4cHg7XG59XG5cbiNzdWdnZXN0aW9ucy5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc3VnZ2VzdGlvbi1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICBnYXA6IDhweDtcbiAgcGFkZGluZzogMTBweCAxNHB4O1xuICBmb250LWZhbWlseTogdmFyKC0tbW9ubyk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnN1Z2dlc3Rpb24taXRlbTpob3Zlcixcbi5zdWdnZXN0aW9uLWl0ZW0uc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ydWxlKTtcbn1cblxuLnN1Z2dlc3Rpb24tY2l0eSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xufVxuXG4uc3VnZ2VzdGlvbi1jb3VudHJ5IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xufVxuXG4jc2VhcmNoQnV0dG9uIHtcbiAgcGFkZGluZzogMTJweCAyMHB4O1xuICBmb250LWZhbWlseTogdmFyKC0tbW9ubyk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgY29sb3I6IHZhcigtLWdyb3VuZCk7XG4gIGJhY2tncm91bmQ6IHZhcigtLXRleHQpO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jc2VhcmNoQnV0dG9uOmhvdmVyIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOTIpO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgI2FwcCB7XG4gICAgZ2FwOiAyMnB4O1xuICAgIHBhZGRpbmc6IDI0cHggMTZweDtcbiAgfVxuXG4gIC8qIE1vYmlsZSBuYXZpZ2F0ZXMgYnkgc3dpcGU7IGRyb3AgdGhlIGFycm93cyBidXQga2VlcCB0aGUgZG90cy4gKi9cbiAgLmFycm93IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgI3N0YXRSb3cge1xuICAgIGdhcDogOHB4O1xuICB9XG5cbiAgLnN0YXQge1xuICAgIHBhZGRpbmc6IDEwcHggNHB4O1xuICB9XG5cbiAgLnN0YXQtdmFsdWUge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLDRDQUFnQztFQUNoQyxvQkFBb0I7QUFDdEI7O0FBRUE7Ozs7cUNBSXFDO0FBQ3JDO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHNGQUFzRjtBQUN4Rjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFNBQVM7RUFDVCx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLDRDQUE0QztFQUM1QyxtQ0FBbUM7QUFDckM7O0FBRUE7NENBQzRDO0FBQzVDO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtvRUFDb0U7QUFDcEU7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLHNCQUFzQjtBQUN4Qjs7QUFFQSwrQ0FBK0M7QUFDL0M7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixl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LGVBQWU7QUFDakI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRTtJQUNFLFNBQVM7SUFDVCxrQkFBa0I7RUFDcEI7O0VBRUEsa0VBQWtFO0VBQ2xFO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsUUFBUTtFQUNWOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgc3JjOiB1cmwoJy4vUm9ib3RvLVJlZ3VsYXIudHRmJyk7XFxuICBmb250LXdlaWdodDogMzAwIDQwMDtcXG59XFxuXFxuLyogUGFsZXR0ZTpcXG4gICBncm91bmQgICMxMjE4MUYgICBydWxlcyAgIzI2MzEzQlxcbiAgIHRleHQgICAgI0VBRUVGMiAocHJpbWFyeSkgLyAjOENBMEFFIChtdXRlZClcXG4gICBUaGUgdGVtcGVyYXR1cmUgY29sb3VycyBsaXZlIGluIHJpYmJvbi5qcyAodGhlIGN1cnZlIGlzIGNvbG91cmVkIGJ5IHRoZVxcbiAgIHRlbXBlcmF0dXJlIHNjYWxhciwgbm90IGJ5IENTUykuICovXFxuOnJvb3Qge1xcbiAgLS1ncm91bmQ6ICMxMjE4MUY7XFxuICAtLXJ1bGU6ICMyNjMxM0I7XFxuICAtLXRleHQ6ICNFQUVFRjI7XFxuICAtLW11dGVkOiAjOENBMEFFO1xcbiAgLS1tb25vOiAnU0ZNb25vLVJlZ3VsYXInLCAnU0YgTW9ubycsICdNZW5sbycsICdDb25zb2xhcycsICdMaWJlcmF0aW9uIE1vbm8nLCBtb25vc3BhY2U7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncm91bmQpO1xcbiAgY29sb3I6IHZhcigtLXRleHQpO1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWY7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG59XFxuXFxuLyogZHZoIChub3QgdmgpOiBvbiBpT1MgU2FmYXJpIHZoIHJlc29sdmVzIHRvIHRoZSB0YWxsIHZpZXdwb3J0IGFuZCBwYXJrcyB0aGVcXG4gICBib3R0b20gb2YgdGhlIGxheW91dCB1bmRlciB0aGUgVVJMIGJhci4gKi9cXG4jYXBwIHtcXG4gIG1pbi1oZWlnaHQ6IDEwMGR2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDI4cHg7XFxuICBtYXgtd2lkdGg6IDcyMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwYWRkaW5nOiAzMnB4IDIwcHg7XFxufVxcblxcbi8qIFJpYmJvbjogdGhlIFNWRyBzY2FsZXMgdG8gdGhlIGNvbHVtbiB3aWR0aCB2aWEgdGhlIHZpZXdCb3gsIHNvIGFsbCA3MiBob3Vyc1xcbiAgIGFyZSBvbiBzY3JlZW4gYXQgYW55IHdpZHRoIGRvd24gdG8gMzgwcHggd2l0aG91dCBzY3JvbGwgb3IgcGFuLiAqL1xcbiNyaWJib25XcmFwIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jcmliYm9uU3ZnIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLnJpYmJvbi1jdXJ2ZSB7XFxuICBzdHJva2Utd2lkdGg6IDIuNTtcXG4gIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcXG4gIHN0cm9rZS1saW5lam9pbjogcm91bmQ7XFxufVxcblxcbi8qIERheSBib3VuZGFyeSBoYWlybGluZXMgYXQgaG91cnMgMjQgYW5kIDQ4LiAqL1xcbi5yaWJib24taGFpcmxpbmUge1xcbiAgc3Ryb2tlOiB2YXIoLS1ydWxlKTtcXG4gIHN0cm9rZS13aWR0aDogMTtcXG59XFxuXFxuLnJpYmJvbi10aWNrIHtcXG4gIGZpbGw6IHZhcigtLW11dGVkKTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tb25vKTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxufVxcblxcbi5yaWJib24tbm93bGluZSB7XFxuICBzdHJva2U6IHZhcigtLW11dGVkKTtcXG4gIHN0cm9rZS13aWR0aDogMTtcXG4gIHN0cm9rZS1kYXNoYXJyYXk6IDIgMztcXG4gIG9wYWNpdHk6IDAuNztcXG59XFxuXFxuLnJpYmJvbi1kb3Qge1xcbiAgc3Ryb2tlOiB2YXIoLS1ncm91bmQpO1xcbiAgc3Ryb2tlLXdpZHRoOiAyO1xcbn1cXG5cXG4vKiBSZWFkb3V0IGJlbmVhdGggdGhlIGN1cnZlLiAqL1xcbiNyZWFkb3V0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jbG9jYXRpb25OYW1lIHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tb25vKTtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcXG59XFxuXFxuLyogU2F2ZWQtbG9jYXRpb24gbmF2aWdhdGlvbjogcHJldi9uZXh0IGNoZXZyb25zIGZsYW5raW5nIHRoZSBkb3Qgcm93LiBUaGUgd2hvbGVcXG4gICByb3cgaXMgaGlkZGVuIGF0IGEgY291bnQgb2Ygb25lIChhIHNpbmdsZSBsb2NhdGlvbiBuZWVkcyBubyBhZmZvcmRhbmNlKTsgdGhlXFxuICAgYXJyb3dzIGFyZSBkZXNrdG9wLW9ubHkgYW5kIGRyb3Agb3V0IGF0IOKJpDQ4MHB4IHdoZXJlIHN3aXBlIHRha2VzIG92ZXIuICovXFxuLm5hdlJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbiAgbWFyZ2luOiA0cHggMCAycHg7XFxufVxcblxcbi5uYXZSb3cuaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5hcnJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYXJyb3c6aG92ZXIge1xcbiAgY29sb3I6ICNFQUVFRjI7XFxufVxcblxcbi5hcnJvdyBzdmcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMTRweDtcXG59XFxuXFxuLyogU2F2ZWQtbG9jYXRpb24gZG90czogb25lIHBlciBzYXZlZCBsb2NhdGlvbiwgdGhlIGFjdGl2ZSBvbmUgZmlsbGVkLiAqL1xcbiNkb3RSb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogOHB4O1xcbn1cXG5cXG4uZG90IHtcXG4gIHdpZHRoOiA4cHg7XFxuICBoZWlnaHQ6IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQ6ICMyRTNCNDU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcXG59XFxuXFxuLmRvdC5hY3RpdmUge1xcbiAgYmFja2dyb3VuZDogI0VBRUVGMjtcXG59XFxuXFxuLyogUm9ib3RvIExpZ2h0IDQwcHggZm9yIHRoZSByZWFkaW5nLiAqL1xcbiNjdXJyZW50VGVtcCB7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuMTtcXG59XFxuXFxuI2N1cnJlbnRDb25kaXRpb24ge1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgY29sb3I6IHZhcigtLXRleHQpO1xcbn1cXG5cXG4vKiBGb3VyLXVwIHN0YXQgcm93OiB0ZXh0IGxhYmVscywgbm8gaWNvbnMuICovXFxuI3N0YXRSb3cge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICBnYXA6IDEwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi10b3A6IDE0cHg7XFxufVxcblxcbi5zdGF0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNHB4O1xcbiAgcGFkZGluZzogMTJweCA2cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ydWxlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLnN0YXQtbGFiZWwge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1vbm8pO1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XFxufVxcblxcbi5zdGF0LXZhbHVlIHtcXG4gIGZvbnQtc2l6ZTogMTdweDtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcXG59XFxuXFxuLyogU2VhcmNoIGZvcm0uICovXFxuI3NlYXJjaEZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4vKiBIb2xkcyB0aGUgaW5wdXQgYW5kIGl0cyBhdXRvY29tcGxldGUgZHJvcGRvd247IHBvc2l0aW9uOiByZWxhdGl2ZSBhbmNob3JzXFxuICAgI3N1Z2dlc3Rpb25zIGJlbmVhdGggdGhlIGlucHV0LiBmbGV4OiAxIHNvIHRoZSBwYWlyIGZpbGxzIHRoZSByb3cgdGhlIHdheSB0aGVcXG4gICBiYXJlIGlucHV0IHVzZWQgdG8uICovXFxuI3NlYXJjaElucHV0V3JhcCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmbGV4OiAxO1xcbiAgbWluLXdpZHRoOiAwO1xcbn1cXG5cXG4jc2VhcmNoSW5wdXQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxMnB4IDE0cHg7XFxuICBmb250LWZhbWlseTogdmFyKC0tbW9ubyk7XFxuICBmb250LXNpemU6IDE2cHg7IC8qIDE2cHggc28gaU9TIFNhZmFyaSBkb2Vzbid0IGF1dG8tem9vbSB0aGUgaW5wdXQgb24gZm9jdXMgKi9cXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcnVsZSk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbiNzZWFyY2hJbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcXG59XFxuXFxuI3NlYXJjaElucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItY29sb3I6IHZhcigtLW11dGVkKTtcXG59XFxuXFxuLyogV2hpbGUgdGhlIGRyb3Bkb3duIGlzIG9wZW4gdGhlIGlucHV0J3MgYm90dG9tIGNvcm5lcnMgc3F1YXJlIG9mZiBhbmQgaXRzXFxuICAgYm90dG9tIGVkZ2UgZHJvcHMgb3V0LCBzbyBpdCByZWFkcyBhcyBvbmUgYXR0YWNoZWQgc3VyZmFjZSB3aXRoICNzdWdnZXN0aW9ucy4gKi9cXG4jc2VhcmNoRm9ybS5zdWdnZXN0aW5nICNzZWFyY2hJbnB1dCB7XFxuICBib3JkZXItcmFkaXVzOiA4cHggOHB4IDAgMDtcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKiBGYWlsZWQgbG9va3VwOiByZWRkZW5lZCBib3JkZXIsIGN1cnJlbnQgcmliYm9uIGxlZnQgaW4gcGxhY2UuICovXFxuI3NlYXJjaEZvcm0uaW52YWxpZCAjc2VhcmNoSW5wdXQge1xcbiAgYm9yZGVyLWNvbG9yOiAjQzI0NTJEO1xcbn1cXG5cXG4vKiBBdXRvY29tcGxldGUgZHJvcGRvd246IGhhbmdzIG9mZiB0aGUgYm90dG9tIG9mIHRoZSBpbnB1dCwgbWF0Y2hpbmcgaXRzIHdpZHRoXFxuICAgYW5kIGNvbnRpbnVpbmcgaXRzIGZvY3VzZWQgYm9yZGVyIGludG8gYSBib3R0b20tcm91bmRlZCBwYW5lbC4gKi9cXG4jc3VnZ2VzdGlvbnMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMDAlO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgei1pbmRleDogMTA7XFxuICBtYXgtaGVpZ2h0OiAyNDBweDtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncm91bmQpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbXV0ZWQpO1xcbiAgYm9yZGVyLXRvcDogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCA4cHggOHB4O1xcbn1cXG5cXG4jc3VnZ2VzdGlvbnMuaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5zdWdnZXN0aW9uLWl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG4gIGdhcDogOHB4O1xcbiAgcGFkZGluZzogMTBweCAxNHB4O1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1vbm8pO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc3VnZ2VzdGlvbi1pdGVtOmhvdmVyLFxcbi5zdWdnZXN0aW9uLWl0ZW0uc2VsZWN0ZWQge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcnVsZSk7XFxufVxcblxcbi5zdWdnZXN0aW9uLWNpdHkge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgY29sb3I6IHZhcigtLXRleHQpO1xcbn1cXG5cXG4uc3VnZ2VzdGlvbi1jb3VudHJ5IHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XFxufVxcblxcbiNzZWFyY2hCdXR0b24ge1xcbiAgcGFkZGluZzogMTJweCAyMHB4O1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1vbm8pO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gIGNvbG9yOiB2YXIoLS1ncm91bmQpO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tdGV4dCk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNzZWFyY2hCdXR0b246aG92ZXIge1xcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOTIpO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcXG4gICNhcHAge1xcbiAgICBnYXA6IDIycHg7XFxuICAgIHBhZGRpbmc6IDI0cHggMTZweDtcXG4gIH1cXG5cXG4gIC8qIE1vYmlsZSBuYXZpZ2F0ZXMgYnkgc3dpcGU7IGRyb3AgdGhlIGFycm93cyBidXQga2VlcCB0aGUgZG90cy4gKi9cXG4gIC5hcnJvdyB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAjc3RhdFJvdyB7XFxuICAgIGdhcDogOHB4O1xcbiAgfVxcblxcbiAgLnN0YXQge1xcbiAgICBwYWRkaW5nOiAxMHB4IDRweDtcXG4gIH1cXG5cXG4gIC5zdGF0LXZhbHVlIHtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIGZhdm91cml0ZXMuanMg4oCUIHNhdmVkIGxvY2F0aW9ucyB3aXRoIHN3aXBlLXRvLXJvdGF0ZS5cbi8vXG4vLyBUaGUgc2VhcmNoIGZvcm0gaXMgdGhlIGFkZCBwYXRoOiBhIHN1Y2Nlc3NmdWwgbG9va3VwIGFwcGVuZHMgdGhlIHF1ZXJ5IHRvIGFcbi8vIHBlcnNpc3RlZCBsaXN0IGFuZCBzd2l0Y2hlcyB0byBpdDsgYSBmYWlsZWQgb25lIGxlYXZlcyB0aGUgbGlzdCB1bnRvdWNoZWRcbi8vIChsb2dpYy5qcydzIGludmFsaWRJbnB1dCgpIGhhcyBhbHJlYWR5IHJlZGRlbmVkIHRoZSBpbnB1dCkuIEEgcm93IG9mIGRvdHNcbi8vIHVuZGVyIHRoZSBsb2NhdGlvbiBuYW1lIHNob3dzIGhvdyBtYW55IGxvY2F0aW9ucyBhcmUgc2F2ZWQgYW5kIHdoaWNoIGlzXG4vLyBjdXJyZW50LiBBIGhvcml6b250YWwgc3dpcGUgYW55d2hlcmUgb24gdGhlIHNjcmVlbiByb3RhdGVzIHRocm91Z2ggdGhlbVxuLy8gKHdyYXBwaW5nIGF0IGJvdGggZW5kcyk7IHRhcHBpbmcgYSBkb3QganVtcHMgdG8gaXQ7IGxvbmctcHJlc3NpbmcgYSBkb3Rcbi8vIHJlbW92ZXMgaXQgYWZ0ZXIgYSBuYW1pbmcgY29uZmlybWF0aW9uLlxuLy9cbi8vIFN0YXRlIHBlcnNpc3RzIHRvIGxvY2FsU3RvcmFnZSB1bmRlciBhIGB3ZWF0aGVyYXBwX2Aga2V5LCBtYXRjaGluZyB0aGVcbi8vIGNvbnZlbnRpb24gdXNlZCBhY3Jvc3MgdGhlIG90aGVyIHJlcG9zIOKAlCBubyBJbmRleGVkREIsIG5vIGNvb2tpZXMsIG5vIGJhY2tlbmQsXG4vLyBubyBuZXcgZGVwZW5kZW5jaWVzLiBGZXRjaCBzdHJhdGVneSBpcyBsYXp5IChmZXRjaCBvbiBhcnJpdmFsKTogYSBzd2lwZSBsZWF2ZXNcbi8vIHRoZSBwcmV2aW91cyByaWJib24gb24gc2NyZWVuIHVudGlsIHRoZSBuZXcgZm9yZWNhc3QgcmVzb2x2ZXMsIHJldXNpbmcgdGhlXG4vLyBzYW1lIGtlZXAtY3VycmVudC1yaWJib24gYmVoYXZpb3VyIGEgc2VhcmNoIGFscmVhZHkgaGFzLCBzbyBhIHN3aXBlIG5ldmVyXG4vLyBsYW5kcyBvbiBhIHNwaW5uZXIgKHRoZXJlIGlzIG5vIHNwaW5uZXIpIG9yIGEgYmxhbmsgc2NyZWVuLlxuLy9cbi8vIEV2ZXJ5IGxpc3RlbmVyIGhlcmUgaXMgd2lyZWQgZXhhY3RseSBvbmNlLCBmcm9tIGluaXRGYXZvdXJpdGVzKCkgYXQgYm9vdHN0cmFwXG4vLyDigJQgbmV2ZXIgZnJvbSB0aGUgcmVuZGVyIHBhdGgg4oCUIHNvIG5vdGhpbmcgbXVsdGlwbGllcyBhY3Jvc3MgZmV0Y2hlcy5cblxuaW1wb3J0IHsgZm9yZWNhc3RMb2dpYyB9IGZyb20gJy4vbG9naWMuanMnO1xuXG5jb25zdCBLRVkgPSAnd2VhdGhlcmFwcF9zYXZlZExvY2F0aW9ucyc7XG5jb25zdCBERUZBVUxUX1FVRVJZID0gJzk4MDUyJztcbmNvbnN0IFNXSVBFX1RIUkVTSE9MRCA9IDUwOyAvLyBweCBvZiBob3Jpem9udGFsIHRyYXZlbCB0byBjb21taXQgYSByb3RhdGlvblxuY29uc3QgTE9OR1BSRVNTX01TID0gNTAwOyAgIC8vIGhvbGQgdG8gcmVtb3ZlIGEgZG90XG5cbi8vIFNhdmVkIGxvY2F0aW9uIHF1ZXJ5IHN0cmluZ3MsIGluIG9yZGVyLiBjdXJyZW50SW5kZXggcG9pbnRzIGF0IHRoZSBhY3RpdmUgb25lLlxubGV0IGxvY2F0aW9ucyA9IFtdO1xubGV0IGN1cnJlbnRJbmRleCA9IDA7XG5cbmxldCBkb3RSb3c7IC8vICNkb3RSb3csIGNhY2hlZCBvbmNlIGJ5IGluaXRGYXZvdXJpdGVzKClcbmxldCBuYXZSb3c7IC8vIC5uYXZSb3cgd3JhcHBpbmcgdGhlIGRvdHMgYW5kIHRoZSBwcmV2L25leHQgYXJyb3dzXG5cbi8vIFN3aXBlIHRyYWNraW5nLlxubGV0IHRvdWNoU3RhcnRYID0gbnVsbDtcbmxldCB0b3VjaFN0YXJ0WSA9IG51bGw7XG5sZXQgc3dpcGVBY3RpdmUgPSBmYWxzZTtcblxuZnVuY3Rpb24gbG9hZCgpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByYXcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShLRVkpO1xuICAgIGlmIChyYXcpIHtcbiAgICAgIGNvbnN0IHBhcnNlZCA9IEpTT04ucGFyc2UocmF3KTtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHBhcnNlZCkpIHtcbiAgICAgICAgbG9jYXRpb25zID0gcGFyc2VkLmZpbHRlcigocSkgPT4gdHlwZW9mIHEgPT09ICdzdHJpbmcnICYmIHEudHJpbSgpLmxlbmd0aCk7XG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgbG9jYXRpb25zID0gW107XG4gIH1cbn1cblxuZnVuY3Rpb24gc2F2ZSgpIHtcbiAgdHJ5IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShLRVksIEpTT04uc3RyaW5naWZ5KGxvY2F0aW9ucykpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgLy8gU3RvcmFnZSBkaXNhYmxlZC9mdWxsIOKAlCB0aGUgaW4tbWVtb3J5IGxpc3Qgc3RpbGwgd29ya3MgZm9yIHRoaXMgc2Vzc2lvbi5cbiAgfVxufVxuXG5mdW5jdGlvbiBjbGVhcihub2RlKSB7XG4gIHdoaWxlIChub2RlLmZpcnN0Q2hpbGQpIHsgbm9kZS5yZW1vdmVDaGlsZChub2RlLmZpcnN0Q2hpbGQpOyB9XG59XG5cbi8vIEZldGNoIHRoZSBhY3RpdmUgbG9jYXRpb24sIG9yIHRoZSBoYXJkIGRlZmF1bHQgd2hlbiB0aGUgbGlzdCBpcyBlbXB0eS4gTGF6eTpcbi8vIHRoZSByZW5kZXIgcGF0aCBrZWVwcyB0aGUgcHJldmlvdXMgcmliYm9uIHVudGlsIHRoaXMgcmVzb2x2ZXMuXG5mdW5jdGlvbiBzaG93Q3VycmVudCgpIHtcbiAgaWYgKGxvY2F0aW9ucy5sZW5ndGgpIHtcbiAgICBmb3JlY2FzdExvZ2ljLmZ1dHVyZUFQSUNhbGxzKGxvY2F0aW9uc1tjdXJyZW50SW5kZXhdKTtcbiAgfSBlbHNlIHtcbiAgICBmb3JlY2FzdExvZ2ljLmZ1dHVyZUFQSUNhbGxzKERFRkFVTFRfUVVFUlkpO1xuICB9XG59XG5cbi8vIFJlZHJhdyB0aGUgZG90IHJvdy4gSGlkZGVuIGF0IGEgY291bnQgb2Ygb25lIChhIHNpbmdsZSBsb2NhdGlvbiBuZWVkcyBub1xuLy8gYWZmb3JkYW5jZSkgYW5kIHdoZW4gZW1wdHkgKHRoZSBkZWZhdWx0IGZhbGxiYWNrIGlzIG5vdCBhIHNhdmVkIGxvY2F0aW9uKS5cbmZ1bmN0aW9uIHJlbmRlckRvdHMoKSB7XG4gIGlmICghZG90Um93KSB7IHJldHVybjsgfVxuICBjbGVhcihkb3RSb3cpO1xuXG4gIC8vIEdhdGUgdGhlIHdob2xlIC5uYXZSb3cgKGRvdHMgKyBhcnJvd3MpIHRvZ2V0aGVyLCBzbyB0aGUgZGVza3RvcCBhcnJvd3Mgc2hhcmVcbiAgLy8gdGhlIGRvdHMnIHZpc2liaWxpdHkgcnVsZSBhbmQgbmV2ZXIgZGFuZ2xlIGJlc2lkZSBhbiBlbXB0eSByb3cuXG4gIGNvbnN0IGdhdGUgPSBuYXZSb3cgfHwgZG90Um93O1xuICBjb25zdCBuID0gbG9jYXRpb25zLmxlbmd0aDtcbiAgaWYgKG4gPD0gMSkge1xuICAgIGdhdGUuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGdhdGUuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICBjb25zdCBkb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkb3QuY2xhc3NOYW1lID0gJ2RvdCcgKyAoaSA9PT0gY3VycmVudEluZGV4ID8gJyBhY3RpdmUnIDogJycpO1xuICAgIGRvdC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnYnV0dG9uJyk7XG4gICAgZG90LnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIGxvY2F0aW9uc1tpXSk7XG4gICAgd2lyZURvdChkb3QsIGkpO1xuICAgIGRvdFJvdy5hcHBlbmRDaGlsZChkb3QpO1xuICB9XG59XG5cbi8vIFRhcCBhIGRvdCB0byBqdW1wIHRvIGl0OyBsb25nLXByZXNzICh+NTAwbXMpIHRvIHJlbW92ZSBpdCBhZnRlciBhXG4vLyBjb25maXJtYXRpb24gdGhhdCBuYW1lcyB0aGUgbG9jYXRpb24uXG5mdW5jdGlvbiB3aXJlRG90KGRvdCwgaSkge1xuICBsZXQgdGltZXIgPSBudWxsO1xuICBsZXQgbG9uZ0ZpcmVkID0gZmFsc2U7XG5cbiAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgIGlmICh0aW1lcikgeyBjbGVhclRpbWVvdXQodGltZXIpOyB0aW1lciA9IG51bGw7IH1cbiAgfTtcblxuICBkb3QuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCAoKSA9PiB7XG4gICAgLy8gTm8gcHJldmVudERlZmF1bHQgaGVyZTogaXQgd291bGQgc3VwcHJlc3MgdGhlIGZvbGxvdy11cCBjbGljayBhbmQgYnJlYWtcbiAgICAvLyB0YXAtdG8tc2VsZWN0LiBUaGUgbG9uZy1wcmVzcyBicmFuY2ggaXMgZGlzYW1iaWd1YXRlZCBieSB0aGUgbG9uZ0ZpcmVkXG4gICAgLy8gZmxhZyBpbnN0ZWFkLCBhbmQgdGhlIG5hdGl2ZSBsb25nLXByZXNzIG1lbnUgaXMgc3RvcHBlZCB2aWEgY29udGV4dG1lbnUuXG4gICAgbG9uZ0ZpcmVkID0gZmFsc2U7XG4gICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGxvbmdGaXJlZCA9IHRydWU7XG4gICAgICB0aW1lciA9IG51bGw7XG4gICAgICBjb25maXJtUmVtb3ZlKGkpO1xuICAgIH0sIExPTkdQUkVTU19NUyk7XG4gIH0pO1xuICBkb3QuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcnVwJywgY2FuY2VsKTtcbiAgZG90LmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJsZWF2ZScsIGNhbmNlbCk7XG4gIGRvdC5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyY2FuY2VsJywgY2FuY2VsKTtcbiAgZG90LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHRtZW51JywgKGUpID0+IGUucHJldmVudERlZmF1bHQoKSk7XG4gIGRvdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAobG9uZ0ZpcmVkKSB7IGxvbmdGaXJlZCA9IGZhbHNlOyByZXR1cm47IH0gLy8gdGhlIGxvbmctcHJlc3MgYWxyZWFkeSBhY3RlZFxuICAgIHNlbGVjdEluZGV4KGkpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY29uZmlybVJlbW92ZShpKSB7XG4gIGlmIChpIDwgMCB8fCBpID49IGxvY2F0aW9ucy5sZW5ndGgpIHsgcmV0dXJuOyB9XG4gIGlmICh3aW5kb3cuY29uZmlybSgnUmVtb3ZlICcgKyBsb2NhdGlvbnNbaV0gKyAnPycpKSB7XG4gICAgcmVtb3ZlTG9jYXRpb24oaSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2VsZWN0SW5kZXgoaSkge1xuICBpZiAoaSA8IDAgfHwgaSA+PSBsb2NhdGlvbnMubGVuZ3RoIHx8IGkgPT09IGN1cnJlbnRJbmRleCkgeyByZXR1cm47IH1cbiAgY3VycmVudEluZGV4ID0gaTtcbiAgcmVuZGVyRG90cygpO1xuICBzaG93Q3VycmVudCgpO1xufVxuXG4vLyBSb3RhdGUgdGhyb3VnaCB0aGUgc2F2ZWQgbGlzdCB3aXRoIHdyYXAuIE5vLW9wIGJlbG93IHR3byBsb2NhdGlvbnMuXG5mdW5jdGlvbiByb3RhdGUoZGlyKSB7XG4gIGNvbnN0IG4gPSBsb2NhdGlvbnMubGVuZ3RoO1xuICBpZiAobiA8PSAxKSB7IHJldHVybjsgfVxuICBjdXJyZW50SW5kZXggPSAoY3VycmVudEluZGV4ICsgZGlyICsgbikgJSBuO1xuICByZW5kZXJEb3RzKCk7XG4gIHNob3dDdXJyZW50KCk7XG59XG5cbi8vIFJlbW92ZSBhIGxvY2F0aW9uLCBrZWVwaW5nIGEgY29oZXJlbnQgYWN0aXZlIHNlbGVjdGlvbjogcmVtb3ZpbmcgdGhlIGFjdGl2ZVxuLy8gb25lIG1vdmVzIHRvIGEgbmVpZ2hib3VyIHJhdGhlciB0aGFuIGxlYXZpbmcgYW4gZW1wdHkgdmlldzsgZW1wdHlpbmcgdGhlIGxpc3Rcbi8vIGZhbGxzIGJhY2sgdG8gdGhlIGRlZmF1bHQuXG5mdW5jdGlvbiByZW1vdmVMb2NhdGlvbihpKSB7XG4gIGlmIChpIDwgMCB8fCBpID49IGxvY2F0aW9ucy5sZW5ndGgpIHsgcmV0dXJuOyB9XG4gIGNvbnN0IHdhc0FjdGl2ZSA9IChpID09PSBjdXJyZW50SW5kZXgpO1xuXG4gIGxvY2F0aW9ucy5zcGxpY2UoaSwgMSk7XG4gIHNhdmUoKTtcblxuICBpZiAobG9jYXRpb25zLmxlbmd0aCA9PT0gMCkge1xuICAgIGN1cnJlbnRJbmRleCA9IDA7XG4gICAgcmVuZGVyRG90cygpO1xuICAgIHNob3dDdXJyZW50KCk7IC8vIGZhbGxzIGJhY2sgdG8gREVGQVVMVF9RVUVSWVxuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpIDwgY3VycmVudEluZGV4KSB7XG4gICAgY3VycmVudEluZGV4LS07XG4gIH0gZWxzZSBpZiAoaSA9PT0gY3VycmVudEluZGV4ICYmIGN1cnJlbnRJbmRleCA+PSBsb2NhdGlvbnMubGVuZ3RoKSB7XG4gICAgY3VycmVudEluZGV4ID0gbG9jYXRpb25zLmxlbmd0aCAtIDE7XG4gIH1cblxuICByZW5kZXJEb3RzKCk7XG4gIGlmICh3YXNBY3RpdmUpIHsgc2hvd0N1cnJlbnQoKTsgfVxufVxuXG5mdW5jdGlvbiBvblRvdWNoU3RhcnQoZSkge1xuICBpZiAoZS50b3VjaGVzLmxlbmd0aCAhPT0gMSkgeyBzd2lwZUFjdGl2ZSA9IGZhbHNlOyByZXR1cm47IH1cbiAgLy8gTGVhdmUgdGhlIHNlYXJjaCBmaWVsZCdzIG93biB0b3VjaCBoYW5kbGluZyAoY3Vyc29yIHBsYWNlbWVudCkgYWxvbmUuXG4gIGlmIChlLnRhcmdldCAmJiBlLnRhcmdldC5jbG9zZXN0ICYmIGUudGFyZ2V0LmNsb3Nlc3QoJyNzZWFyY2hGb3JtJykpIHtcbiAgICBzd2lwZUFjdGl2ZSA9IGZhbHNlO1xuICAgIHJldHVybjtcbiAgfVxuICB0b3VjaFN0YXJ0WCA9IGUudG91Y2hlc1swXS5jbGllbnRYO1xuICB0b3VjaFN0YXJ0WSA9IGUudG91Y2hlc1swXS5jbGllbnRZO1xuICBzd2lwZUFjdGl2ZSA9IHRydWU7XG59XG5cbmZ1bmN0aW9uIG9uVG91Y2hFbmQoZSkge1xuICBpZiAoIXN3aXBlQWN0aXZlKSB7IHJldHVybjsgfVxuICBzd2lwZUFjdGl2ZSA9IGZhbHNlO1xuXG4gIGNvbnN0IHQgPSBlLmNoYW5nZWRUb3VjaGVzICYmIGUuY2hhbmdlZFRvdWNoZXNbMF07XG4gIGlmICghdCkgeyByZXR1cm47IH1cblxuICBjb25zdCBkeCA9IHQuY2xpZW50WCAtIHRvdWNoU3RhcnRYO1xuICBjb25zdCBkeSA9IHQuY2xpZW50WSAtIHRvdWNoU3RhcnRZO1xuXG4gIC8vIENvbW1pdCBvbmx5IG9uIGEgZGVjaXNpdmVseSBob3Jpem9udGFsIGdlc3R1cmUsIHNvIGEgdmVydGljYWwgcGFnZSBzY3JvbGxcbiAgLy8gKHxkeXwgPj0gfGR4fCkgaXMgbmV2ZXIgaGlqYWNrZWQuXG4gIGlmIChNYXRoLmFicyhkeCkgPiBTV0lQRV9USFJFU0hPTEQgJiYgTWF0aC5hYnMoZHgpID4gTWF0aC5hYnMoZHkpKSB7XG4gICAgcm90YXRlKGR4IDwgMCA/IDEgOiAtMSk7IC8vIHN3aXBlIGxlZnQgLT4gbmV4dCwgc3dpcGUgcmlnaHQgLT4gcHJldmlvdXNcbiAgfVxufVxuXG5mdW5jdGlvbiB3aXJlR2VzdHVyZXMoKSB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBvblRvdWNoU3RhcnQsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBvblRvdWNoRW5kLCB7IHBhc3NpdmU6IHRydWUgfSk7XG59XG5cbi8vIERlc2t0b3AgcHJldi9uZXh0IGFycm93cyBkcml2ZSB0aGUgc2FtZSByb3RhdGUoKSB0aGUgc3dpcGUgZ2VzdHVyZSBkb2VzLCBzb1xuLy8gYm90aCBwYXRocyBzaGFyZSBvbmUgY291bnRlci4gV2lyZWQgb25jZSBmcm9tIGluaXRGYXZvdXJpdGVzKCkuXG5mdW5jdGlvbiB3aXJlQXJyb3dzKCkge1xuICBjb25zdCBwcmV2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdlByZXYnKTtcbiAgY29uc3QgbmV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZOZXh0Jyk7XG4gIGlmIChwcmV2KSB7IHByZXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiByb3RhdGUoLTEpKTsgfVxuICBpZiAobmV4dCkgeyBuZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcm90YXRlKDEpKTsgfVxufVxuXG4vLyBBcHBlbmQgYSBzdWNjZXNzZnVsbHkgbG9va2VkLXVwIGxvY2F0aW9uIGFuZCBzd2l0Y2ggdG8gaXQuIENhbGxlZCBmcm9tIHRoZVxuLy8gc2VhcmNoIHN1Ym1pdCBoYW5kbGVyIEFGVEVSIHRoZSBmZXRjaCByZXNvbHZlcywgc28gdGhlIGZvcmVjYXN0IGlzIGFscmVhZHlcbi8vIHJlbmRlcmVkIOKAlCB0aGlzIG9ubHkgdXBkYXRlcyB0aGUgc2F2ZWQgbGlzdCBhbmQgdGhlIGRvdHMsIG5ldmVyIHJlLWZldGNoZXMuXG4vLyBBIGR1cGxpY2F0ZSBxdWVyeSBzd2l0Y2hlcyB0byB0aGUgZXhpc3RpbmcgZW50cnkgaW5zdGVhZCBvZiBhZGRpbmcgYSBzZWNvbmQuXG5leHBvcnQgZnVuY3Rpb24gYWRkTG9jYXRpb24ocXVlcnkpIHtcbiAgY29uc3QgcSA9IFN0cmluZyhxdWVyeSkudHJpbSgpO1xuICBpZiAoIXEpIHsgcmV0dXJuOyB9XG5cbiAgY29uc3QgZXhpc3RpbmcgPSBsb2NhdGlvbnMuaW5kZXhPZihxKTtcbiAgaWYgKGV4aXN0aW5nICE9PSAtMSkge1xuICAgIGN1cnJlbnRJbmRleCA9IGV4aXN0aW5nO1xuICB9IGVsc2Uge1xuICAgIGxvY2F0aW9ucy5wdXNoKHEpO1xuICAgIGN1cnJlbnRJbmRleCA9IGxvY2F0aW9ucy5sZW5ndGggLSAxO1xuICAgIHNhdmUoKTtcbiAgfVxuICByZW5kZXJEb3RzKCk7XG59XG5cbi8vIEJvb3RzdHJhcDogbG9hZCB0aGUgc2F2ZWQgbGlzdCwgd2lyZSB0aGUgc3dpcGUgZ2VzdHVyZXMgb25jZSwgZHJhdyB0aGUgZG90cyxcbi8vIGFuZCBmaXJlIHRoZSBzaW5nbGUgaW5pdGlhbCBmZXRjaCAodGhlIGZpcnN0IHNhdmVkIGxvY2F0aW9uLCBvciB0aGUgZGVmYXVsdFxuLy8gd2hlbiBub25lIGFyZSBzYXZlZCkuIGluZGV4LmpzIGNhbGxzIHRoaXMgb25jZSwgYWZ0ZXIgdGhlIERPTSBpcyBhcHBlbmRlZC5cbmV4cG9ydCBmdW5jdGlvbiBpbml0RmF2b3VyaXRlcygpIHtcbiAgbG9hZCgpO1xuICBkb3RSb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZG90Um93Jyk7XG4gIG5hdlJvdyA9IGRvdFJvdyA/IGRvdFJvdy5wYXJlbnRFbGVtZW50IDogbnVsbDtcbiAgd2lyZUdlc3R1cmVzKCk7XG4gIHdpcmVBcnJvd3MoKTtcbiAgY3VycmVudEluZGV4ID0gMDtcbiAgcmVuZGVyRG90cygpO1xuICBzaG93Q3VycmVudCgpO1xufVxuIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyByZW5kZXJSaWJib24sIGN1cnJlbnRIb3VySW5kZXggfSBmcm9tICcuL3JpYmJvbi5qcyc7XG5pbXBvcnQgeyBmb3JlY2FzdExvZ2ljIH0gZnJvbSAnLi9sb2dpYy5qcyc7XG5pbXBvcnQgeyBhZGRMb2NhdGlvbiB9IGZyb20gJy4vZmF2b3VyaXRlcy5qcyc7XG5cbi8vIEd1YXJkIHNvIHdpcmVFdmVudHMoKSBvbmx5IGV2ZXIgcmVnaXN0ZXJzIG9uZSBzZXQgb2YgbGlzdGVuZXJzLiBUaGUgb2xkXG4vLyBjaGFuZ2VXZWF0aGVySW5mbygpIHJlLXJlZ2lzdGVyZWQgb24gZXZlcnkgZmV0Y2gsIGRvdWJsaW5nIHRoZSBoYW5kbGVyIGNvdW50XG4vLyBwZXIgc2VhcmNoOyB0aGUgcmVuZGVyIHBhdGggKHJlbmRlckZvcmVjYXN0KSBhbmQgdGhlIHdpcmluZyBwYXRoICh3aXJlRXZlbnRzKVxuLy8gYXJlIHNwbGl0IHByZWNpc2VseSBzbyB0aGF0IGNhbiBuZXZlciBoYXBwZW4gYWdhaW4uXG5sZXQgZXZlbnRzV2lyZWQgPSBmYWxzZTtcblxuLy8gRGVib3VuY2Ugd2luZG93IGZvciB0aGUgY2l0eS1zdWdnZXN0aW9uIGxvb2t1cCDigJQgbG9uZyBlbm91Z2ggdGhhdCBhIHJ1biBvZlxuLy8ga2V5c3Ryb2tlcyBmaXJlcyBvbmUgcmVxdWVzdCwgc2hvcnQgZW5vdWdoIHRvIGZlZWwgbGl2ZS5cbmNvbnN0IFNVR0dFU1RfREVCT1VOQ0VfTVMgPSAzMDA7XG5cbi8vIENhY2hlZCBET00gcmVmZXJlbmNlcywgcG9wdWxhdGVkIG9uY2UgYnkgY2FjaGVEb20oKSBhZnRlciBpbmRleC5qcyBoYXMgYnVpbHRcbi8vIGFuZCBhcHBlbmRlZCB0aGUgRE9NLlxubGV0IHNlYXJjaEZvcm0sIHNlYXJjaElucHV0LCBzdWdnZXN0aW9ucywgbG9jYXRpb25OYW1lLCBjdXJyZW50VGVtcCxcbiAgY3VycmVudENvbmRpdGlvbiwgZmVlbHNWYWwsIGh1bWlkaXR5VmFsLCByYWluVmFsLCB3aW5kVmFsO1xuXG4vLyBBdXRvY29tcGxldGUgc3RhdGUuIGN1cnJlbnRTdWdnZXN0aW9ucyBob2xkcyB0aGUgcmVzdWx0cyBiYWNraW5nIHRoZSB2aXNpYmxlXG4vLyBkcm9wZG93bjsgc2VsZWN0ZWRJbmRleCBpcyB0aGUga2V5Ym9hcmQtaGlnaGxpZ2h0ZWQgcm93ICgtMSA9IG5vbmUpLiByZXF1ZXN0U2VxXG4vLyBkaXNjYXJkcyBzdGFsZSBhc3luYyByZXN1bHRzIOKAlCBvbmx5IHRoZSBsYXRlc3QgbG9va3VwIHJlbmRlcnMg4oCUIGFuZCBpcyBidW1wZWRcbi8vIG9uIGNsb3NlIHNvIGFuIGluLWZsaWdodCByZXF1ZXN0IGNhbid0IHJlb3BlbiB0aGUgZHJvcGRvd24gYWZ0ZXIgc2VsZWN0aW9uLlxubGV0IGN1cnJlbnRTdWdnZXN0aW9ucyA9IFtdO1xubGV0IHNlbGVjdGVkSW5kZXggPSAtMTtcbmxldCBzdWdnZXN0RGVib3VuY2UgPSBudWxsO1xubGV0IHJlcXVlc3RTZXEgPSAwO1xuXG5mdW5jdGlvbiBjYWNoZURvbSgpIHtcbiAgaWYgKGxvY2F0aW9uTmFtZSkgeyByZXR1cm47IH0gLy8gYWxyZWFkeSBjYWNoZWRcblxuICBzZWFyY2hGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaEZvcm0nKTtcbiAgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoSW5wdXQnKTtcbiAgc3VnZ2VzdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VnZ2VzdGlvbnMnKTtcbiAgbG9jYXRpb25OYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvY2F0aW9uTmFtZScpO1xuICBjdXJyZW50VGVtcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50VGVtcCcpO1xuICBjdXJyZW50Q29uZGl0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnRDb25kaXRpb24nKTtcbiAgZmVlbHNWYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmVlbHNWYWwnKTtcbiAgaHVtaWRpdHlWYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHVtaWRpdHlWYWwnKTtcbiAgcmFpblZhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYWluVmFsJyk7XG4gIHdpbmRWYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2luZFZhbCcpO1xufVxuXG4vLyBQdXJlIHJlbmRlciBwYXRoLiBmdWxmaWxsUHJvbWlzZSgpIGluIGxvZ2ljLmpzIGNhbGxzIHRoaXMgb24gZXZlcnkgcmVzb2x2ZWRcbi8vIHJlc3BvbnNlOyBpdCByZWdpc3RlcnMgTk8gbGlzdGVuZXJzLCBzbyBpdCBpcyBzYWZlIHRvIGNhbGwgcmVwZWF0ZWRseS4gRHJhd3Ncbi8vIHRoZSByaWJib24gYW5kIGZpbGxzIHRoZSByZWFkb3V0IGZyb20gdGhlIHNhbWUgXCJub3dcIiBpbmRleCwgc28gdGhlIG1hcmtlciBvblxuLy8gdGhlIGN1cnZlIGFuZCB0aGUgc3RhdCByb3cgY2FuIG5ldmVyIGRpc2FncmVlIGFib3V0IHRoZSBjdXJyZW50IGhvdXIuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyRm9yZWNhc3QoZm9yZWNhc3QpIHtcbiAgY2FjaGVEb20oKTtcblxuICByZW5kZXJSaWJib24oZm9yZWNhc3QpO1xuXG4gIGNvbnN0IGkgPSBjdXJyZW50SG91ckluZGV4KGZvcmVjYXN0KTtcbiAgY29uc3Qgbm93ID0gZm9yZWNhc3QuaG91cnNbaV07XG4gIGlmICghbm93KSB7IHJldHVybjsgfVxuXG4gIGxvY2F0aW9uTmFtZS50ZXh0Q29udGVudCA9IGZvcmVjYXN0LmxvY2F0aW9uLm5hbWU7XG4gIGN1cnJlbnRUZW1wLnRleHRDb250ZW50ID0gTWF0aC5yb3VuZChub3cudGVtcCkgKyAnwrAnO1xuICBjdXJyZW50Q29uZGl0aW9uLnRleHRDb250ZW50ID0gbm93LmNvbmRpdGlvbjtcblxuICBmZWVsc1ZhbC50ZXh0Q29udGVudCA9IE1hdGgucm91bmQobm93LmZlZWxzTGlrZSkgKyAnwrAnO1xuICBodW1pZGl0eVZhbC50ZXh0Q29udGVudCA9IG5vdy5odW1pZGl0eSArICclJztcbiAgcmFpblZhbC50ZXh0Q29udGVudCA9IG5vdy5yYWluICsgJyUnO1xuICB3aW5kVmFsLnRleHRDb250ZW50ID0gTWF0aC5yb3VuZChub3cud2luZCkgKyAnIGttL2gnO1xufVxuXG4vLyBSZWdpc3RlcnMgbGlzdGVuZXJzIEVYQUNUTFkgT05DRSBmb3IgdGhlIGxpZmUgb2YgdGhlIHBhZ2UuIGluZGV4LmpzIGNhbGxzIHRoaXNcbi8vIGF0IGJvb3RzdHJhcCwgYWZ0ZXIgdGhlIERPTSBpcyBhcHBlbmRlZCDigJQgbmV2ZXIgZnJvbSB0aGUgcmVuZGVyIHBhdGgg4oCUIHNvIGFcbi8vIHNlYXJjaCBmaXJlcyBleGFjdGx5IG9uZSBmZXRjaCBhbmQgZXZlcnkgZWxlbWVudCBjYXJyaWVzIGV4YWN0bHkgb25lIGxpc3RlbmVyLlxuZXhwb3J0IGZ1bmN0aW9uIHdpcmVFdmVudHMoKSB7XG4gIGlmIChldmVudHNXaXJlZCkgeyByZXR1cm47IH1cblxuICBjYWNoZURvbSgpO1xuICBldmVudHNXaXJlZCA9IHRydWU7XG5cbiAgLy8gVGhlIGJ1dHRvbiBpcyBhIHJlYWwgc3VibWl0IGJ1dHRvbiwgc28gdGhpcyBjYXRjaGVzIGJvdGggdGhlIGNsaWNrIGFuZCB0aGVcbiAgLy8gRW50ZXIga2V5IGFzIG9uZSBzdWJtaXQgZXZlbnQuIHByZXZlbnREZWZhdWx0IHN0b3BzIHRoZSBmb3JtIHJlbG9hZGluZyB0aGVcbiAgLy8gcGFnZTsgZnV0dXJlQVBJQ2FsbHMgZG9lcyB0aGUgc2luZ2xlIGZldGNoLiBUaGUgc2VhcmNoIGZvcm0gaXMgYWxzbyB0aGVcbiAgLy8gYWRkIHBhdGggZm9yIHNhdmVkIGxvY2F0aW9uczogb24gYSBzdWNjZXNzZnVsIGxvb2t1cCB0aGUgcXVlcnkgaXMgYXBwZW5kZWRcbiAgLy8gdG8gdGhlIHNhdmVkIGxpc3QgYW5kIGJlY29tZXMgY3VycmVudDsgYSBmYWlsZWQgbG9va3VwIHJlc29sdmVzIHRvIG51bGwgYW5kXG4gIC8vIGxlYXZlcyB0aGUgbGlzdCB1bnRvdWNoZWQgKGludmFsaWRJbnB1dCBoYXMgYWxyZWFkeSByZWRkZW5lZCB0aGUgaW5wdXQpLlxuICBzZWFyY2hGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNsb3NlU3VnZ2VzdGlvbnMoKTtcbiAgICBjb25zdCBxdWVyeSA9IHNlYXJjaElucHV0LnZhbHVlO1xuICAgIGZvcmVjYXN0TG9naWMuZnV0dXJlQVBJQ2FsbHMocXVlcnkpLnRoZW4oZnVuY3Rpb24gKGZvcmVjYXN0KSB7XG4gICAgICBpZiAoZm9yZWNhc3QpIHtcbiAgICAgICAgYWRkTG9jYXRpb24ocXVlcnkpO1xuICAgICAgICBzZWFyY2hJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICB3aXJlQXV0b2NvbXBsZXRlKCk7XG59XG5cbi8vIFdpcmVzIHRoZSBkZWJvdW5jZWQgY2l0eS1zdWdnZXN0aW9uIGRyb3Bkb3duLiBDYWxsZWQgb25jZSBmcm9tIHdpcmVFdmVudHMoKSxcbi8vIHNvIOKAlCBsaWtlIGV2ZXJ5IG90aGVyIGxpc3RlbmVyIGluIHRoZSBhcHAg4oCUIG5vdGhpbmcgbXVsdGlwbGllcyBhY3Jvc3MgZmV0Y2hlcy5cbmZ1bmN0aW9uIHdpcmVBdXRvY29tcGxldGUoKSB7XG4gIC8vIEVhY2gga2V5c3Ryb2tlIHNjaGVkdWxlcyBvbmUgZGVib3VuY2VkIGxvb2t1cDsgYW4gZW1wdHkgYm94IGNsb3NlcyB0aGVcbiAgLy8gZHJvcGRvd24gb3V0cmlnaHQuIFNldHRpbmcgc2VhcmNoSW5wdXQudmFsdWUgcHJvZ3JhbW1hdGljYWxseSAob24gc2VsZWN0IG9yXG4gIC8vIG9uIGEgc3VjY2Vzc2Z1bCBzdWJtaXQpIGRvZXMgbm90IGZpcmUgJ2lucHV0Jywgc28gdGhlcmUgaXMgbm8gcmVmZXRjaCBsb29wLlxuICBzZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHNlYXJjaElucHV0LnZhbHVlLnRyaW0oKTtcbiAgICBpZiAoc3VnZ2VzdERlYm91bmNlKSB7IGNsZWFyVGltZW91dChzdWdnZXN0RGVib3VuY2UpOyBzdWdnZXN0RGVib3VuY2UgPSBudWxsOyB9XG4gICAgaWYgKCF2YWx1ZSkgeyBjbG9zZVN1Z2dlc3Rpb25zKCk7IHJldHVybjsgfVxuXG4gICAgc3VnZ2VzdERlYm91bmNlID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBzZXEgPSArK3JlcXVlc3RTZXE7XG4gICAgICBmb3JlY2FzdExvZ2ljLnNlYXJjaENpdGllcyh2YWx1ZSkudGhlbihmdW5jdGlvbiAocmVzdWx0cykge1xuICAgICAgICBpZiAoc2VxICE9PSByZXF1ZXN0U2VxKSB7IHJldHVybjsgfSAvLyBhIG5ld2VyIGtleXN0cm9rZSBzdXBlcnNlZGVkIHRoaXNcbiAgICAgICAgcmVuZGVyU3VnZ2VzdGlvbnMocmVzdWx0cyk7XG4gICAgICB9KTtcbiAgICB9LCBTVUdHRVNUX0RFQk9VTkNFX01TKTtcbiAgfSk7XG5cbiAgLy8gQXJyb3cga2V5cyBtb3ZlIHRoZSBoaWdobGlnaHQ7IEVudGVyIG9uIGEgaGlnaGxpZ2h0ZWQgcm93IHNlbGVjdHMgaXQgKGFuZCBpc1xuICAvLyBzdG9wcGVkIGZyb20gYWxzbyBzdWJtaXR0aW5nIHRoZSByYXcgdGV4dCk7IEVzY2FwZSBjbG9zZXMgd2l0aG91dCBzdWJtaXR0aW5nLlxuICAvLyBXaXRoIG5vIGRyb3Bkb3duIG9wZW4sIEVudGVyIHN1Ym1pdHMgdGhlIHR5cGVkIHRleHQgZXhhY3RseSBhcyBiZWZvcmUuXG4gIHNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChzdWdnZXN0aW9ucy5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpIHx8ICFjdXJyZW50U3VnZ2VzdGlvbnMubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChlLmtleSA9PT0gJ0Fycm93RG93bicpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIG1vdmVTZWxlY3Rpb24oMSk7XG4gICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ0Fycm93VXAnKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBtb3ZlU2VsZWN0aW9uKC0xKTtcbiAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICBpZiAoc2VsZWN0ZWRJbmRleCA+PSAwKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY2hvb3NlU3VnZ2VzdGlvbihzZWxlY3RlZEluZGV4KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY2xvc2VTdWdnZXN0aW9ucygpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gQSBjbGljayBhbnl3aGVyZSBvdXRzaWRlIHRoZSBzZWFyY2ggZm9ybSBjbG9zZXMgdGhlIGRyb3Bkb3duLiBDbGlja3MgaW5zaWRlXG4gIC8vIHRoZSBmb3JtICh0aGUgaW5wdXQsIGEgc3VnZ2VzdGlvbiByb3csIHRoZSBidXR0b24pIGFyZSBoYW5kbGVkIGJ5IHRoZWlyIG93blxuICAvLyBsaXN0ZW5lcnMgYW5kIG11c3Qgbm90IGNsb3NlIGl0IGhlcmUgZmlyc3QuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoZS50YXJnZXQgJiYgZS50YXJnZXQuY2xvc2VzdCAmJiBlLnRhcmdldC5jbG9zZXN0KCcjc2VhcmNoRm9ybScpKSB7IHJldHVybjsgfVxuICAgIGNsb3NlU3VnZ2VzdGlvbnMoKTtcbiAgfSk7XG59XG5cbi8vIFJlYnVpbGQgdGhlIGRyb3Bkb3duIGZyb20gYSByZXN1bHRzIGFycmF5LiBFbXB0eSByZXN1bHRzIGNsb3NlIGl0LiBFYWNoIHJvdyBpc1xuLy8gdGhlIGNpdHkgbmFtZSBwbHVzIGEgbXV0ZWQgcmVnaW9uL2NvdW50cnkgbGluZTsgY2xpY2tpbmcgb25lIHNlbGVjdHMgaXQuXG5mdW5jdGlvbiByZW5kZXJTdWdnZXN0aW9ucyhyZXN1bHRzKSB7XG4gIHdoaWxlIChzdWdnZXN0aW9ucy5maXJzdENoaWxkKSB7IHN1Z2dlc3Rpb25zLnJlbW92ZUNoaWxkKHN1Z2dlc3Rpb25zLmZpcnN0Q2hpbGQpOyB9XG5cbiAgY3VycmVudFN1Z2dlc3Rpb25zID0gcmVzdWx0cztcbiAgc2VsZWN0ZWRJbmRleCA9IC0xO1xuXG4gIGlmICghcmVzdWx0cy5sZW5ndGgpIHsgY2xvc2VTdWdnZXN0aW9ucygpOyByZXR1cm47IH1cblxuICByZXN1bHRzLmZvckVhY2goZnVuY3Rpb24gKHIsIGlkeCkge1xuICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtLmNsYXNzTmFtZSA9ICdzdWdnZXN0aW9uLWl0ZW0nO1xuICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdyb2xlJywgJ29wdGlvbicpO1xuXG4gICAgY29uc3QgY2l0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjaXR5LmNsYXNzTmFtZSA9ICdzdWdnZXN0aW9uLWNpdHknO1xuICAgIGNpdHkudGV4dENvbnRlbnQgPSByLm5hbWU7XG5cbiAgICBjb25zdCBwbGFjZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBwbGFjZS5jbGFzc05hbWUgPSAnc3VnZ2VzdGlvbi1jb3VudHJ5JztcbiAgICBwbGFjZS50ZXh0Q29udGVudCA9IFtyLnJlZ2lvbiwgci5jb3VudHJ5XS5maWx0ZXIoQm9vbGVhbikuam9pbignLCAnKTtcblxuICAgIGl0ZW0uYXBwZW5kQ2hpbGQoY2l0eSk7XG4gICAgaXRlbS5hcHBlbmRDaGlsZChwbGFjZSk7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHsgY2hvb3NlU3VnZ2VzdGlvbihpZHgpOyB9KTtcblxuICAgIHN1Z2dlc3Rpb25zLmFwcGVuZENoaWxkKGl0ZW0pO1xuICB9KTtcblxuICBvcGVuU3VnZ2VzdGlvbnMoKTtcbn1cblxuLy8gTW92ZSB0aGUga2V5Ym9hcmQgaGlnaGxpZ2h0LCB3cmFwcGluZyBhdCBib3RoIGVuZHMsIGFuZCBtaXJyb3IgaXQgb250byB0aGUgRE9NLlxuZnVuY3Rpb24gbW92ZVNlbGVjdGlvbihkaXIpIHtcbiAgY29uc3QgbiA9IGN1cnJlbnRTdWdnZXN0aW9ucy5sZW5ndGg7XG4gIGlmICghbikgeyByZXR1cm47IH1cbiAgc2VsZWN0ZWRJbmRleCA9IChzZWxlY3RlZEluZGV4ICsgZGlyICsgbikgJSBuO1xuXG4gIGNvbnN0IGl0ZW1zID0gc3VnZ2VzdGlvbnMuY2hpbGRyZW47XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICBpdGVtc1tpXS5jbGFzc0xpc3QudG9nZ2xlKCdzZWxlY3RlZCcsIGkgPT09IHNlbGVjdGVkSW5kZXgpO1xuICB9XG59XG5cbi8vIEZpbGwgdGhlIGlucHV0IHdpdGggdGhlIGNob3NlbiBjaXR5IGFuZCBzdWJtaXQgdGhlIGZvcm0gdGhlIHNhbWUgd2F5IHByZXNzaW5nXG4vLyBFbnRlciBvciBjbGlja2luZyBTdWJtaXQgZG9lcywgc28gdGhlIGZldGNoICsgc2F2ZS1sb2NhdGlvbiBwYXRoIGlzIHVuY2hhbmdlZC5cbmZ1bmN0aW9uIGNob29zZVN1Z2dlc3Rpb24oaWR4KSB7XG4gIGNvbnN0IHIgPSBjdXJyZW50U3VnZ2VzdGlvbnNbaWR4XTtcbiAgaWYgKCFyKSB7IHJldHVybjsgfVxuICBzZWFyY2hJbnB1dC52YWx1ZSA9IHIubmFtZTtcbiAgY2xvc2VTdWdnZXN0aW9ucygpO1xuICBpZiAoc2VhcmNoRm9ybS5yZXF1ZXN0U3VibWl0KSB7XG4gICAgc2VhcmNoRm9ybS5yZXF1ZXN0U3VibWl0KCk7XG4gIH0gZWxzZSB7XG4gICAgc2VhcmNoRm9ybS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnc3VibWl0JywgeyBjYW5jZWxhYmxlOiB0cnVlLCBidWJibGVzOiB0cnVlIH0pKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBvcGVuU3VnZ2VzdGlvbnMoKSB7XG4gIHN1Z2dlc3Rpb25zLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICBzZWFyY2hGb3JtLmNsYXNzTGlzdC5hZGQoJ3N1Z2dlc3RpbmcnKTsgLy8gZmxhdHRlbnMgdGhlIGlucHV0J3MgYm90dG9tIGNvcm5lcnNcbn1cblxuLy8gQ2xvc2UgYW5kIHJlc2V0LiBCdW1waW5nIHJlcXVlc3RTZXEgaW52YWxpZGF0ZXMgYW55IGluLWZsaWdodCBsb29rdXAgc28gaXRcbi8vIGNhbid0IHJlb3BlbiB0aGUgZHJvcGRvd24gYWZ0ZXIgYSBzZWxlY3Rpb24gb3Igc3VibWl0LlxuZnVuY3Rpb24gY2xvc2VTdWdnZXN0aW9ucygpIHtcbiAgaWYgKCFzdWdnZXN0aW9ucykgeyByZXR1cm47IH1cbiAgaWYgKHN1Z2dlc3REZWJvdW5jZSkgeyBjbGVhclRpbWVvdXQoc3VnZ2VzdERlYm91bmNlKTsgc3VnZ2VzdERlYm91bmNlID0gbnVsbDsgfVxuICByZXF1ZXN0U2VxKys7XG4gIGN1cnJlbnRTdWdnZXN0aW9ucyA9IFtdO1xuICBzZWxlY3RlZEluZGV4ID0gLTE7XG4gIHN1Z2dlc3Rpb25zLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICBzZWFyY2hGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ3N1Z2dlc3RpbmcnKTtcbn1cblxuLy8gQSBzdWNjZXNzZnVsIGxvb2t1cCBjbGVhcnMgdGhlIGludmFsaWQgc3RhdGU7IGEgZmFpbGVkIG9uZSBrZWVwcyB0aGUgY3VycmVudFxuLy8gcmliYm9uIGFuZCByZWRkZW5zIHRoZSBpbnB1dCBib3JkZXIgKHZpYSB0aGUgLmludmFsaWQgY2xhc3MgaW4gc3R5bGUuY3NzKS5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZElucHV0KCkge1xuICBjYWNoZURvbSgpO1xuICBpZiAoc2VhcmNoRm9ybSkgeyBzZWFyY2hGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmFsaWQnKTsgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW52YWxpZElucHV0KCkge1xuICBjYWNoZURvbSgpO1xuICBpZiAoc2VhcmNoRm9ybSkgeyBzZWFyY2hGb3JtLmNsYXNzTGlzdC5hZGQoJ2ludmFsaWQnKTsgfVxufVxuIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyByZW5kZXJGb3JlY2FzdCwgdmFsaWRJbnB1dCwgaW52YWxpZElucHV0IH0gZnJvbSAnLi9pbmRleENoYW5nZXMuanMnO1xuXG4vLyAgMyBkYXkgZm9yZWNhc3QgLSBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PTM5YzI4Zjg1YWIwMzQ1MjFiOTkyMTcwNTIzMjcxMCZxPTk4MDUyJmRheXM9MyZhcWk9bm8mYWxlcnRzPW5vXG5cbi8vIFRoZSBsYXN0IGZvcmVjYXN0IHdlIHN1Y2Nlc3NmdWxseSByZW5kZXJlZC4gQSBmYWlsZWQgbG9va3VwIGtlZXBzIGl0IG9uIHNjcmVlblxuLy8gKHNlZSBmdWxmaWxsUHJvbWlzZSk6IHRoZSBzZWFyY2gganVzdCByZWRkZW5zIHRoZSBpbnB1dCByYXRoZXIgdGhhbiBibGFua2luZ1xuLy8gdGhlIHJpYmJvbi5cbmxldCBsYXN0Rm9yZWNhc3QgPSBudWxsO1xuXG5leHBvcnQgY29uc3QgZm9yZWNhc3RMb2dpYyA9IChmdW5jdGlvbiAoKSB7XG5cbiAgLy8gTm8gZmV0Y2ggZmlyZXMgYXQgbW9kdWxlLWV2YWwgdGltZS4gVGhlIHNpbmdsZSBpbml0aWFsIGZldGNoIChkZWZhdWx0XG4gIC8vIGxvY2F0aW9uLCBvciB0aGUgZmlyc3Qgc2F2ZWQgbG9jYXRpb24pIGlzIGRyaXZlbiBmcm9tIHRoZSBib290c3RyYXAgaW5cbiAgLy8gaW5kZXguanMgdmlhIGluaXRGYXZvdXJpdGVzKCkgLT4gZnV0dXJlQVBJQ2FsbHMsIHNvIGl0IGhhcHBlbnMgZXhhY3RseSBvbmNlXG4gIC8vIGluIHRoZSBpbmRleCBidW5kbGUgcmF0aGVyIHRoYW4gb25jZSBwZXIgYnVuZGxlIHRoYXQgaW1wb3J0cyB0aGlzIG1vZHVsZS5cblxuICAvLyBGaXJlcyBvbmUgZmV0Y2ggZm9yIGEgbG9jYXRpb24gYW5kIHJlbmRlcnMgb24gc3VjY2Vzcy4gUmV0dXJucyBhIHByb21pc2VcbiAgLy8gcmVzb2x2aW5nIHRvIHRoZSBidWlsdCBmb3JlY2FzdCBvbiBzdWNjZXNzLCBvciBudWxsIG9uIGEgZmFpbGVkIGxvb2t1cCwgc29cbiAgLy8gdGhlIHNlYXJjaCBzdWJtaXQgaGFuZGxlciBjYW4gYXBwZW5kIHRoZSBsb2NhdGlvbiB0byB0aGUgc2F2ZWQgbGlzdCBvbmx5XG4gIC8vIHdoZW4gdGhlIGxvb2t1cCBhY3R1YWxseSBzdWNjZWVkZWQuXG4gIGZ1bmN0aW9uIGZ1dHVyZUFQSUNhbGxzKHZhbHVlKSB7XG4gICAgcmV0dXJuIGZ1bGZpbGxQcm9taXNlKHB1bGxGb3JlY2FzdCh2YWx1ZSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZnVsZmlsbFByb21pc2UoZm9yZWNhc3RKU09OKSB7XG4gICAgcmV0dXJuIGZvcmVjYXN0SlNPTi50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgIC8vIHB1bGxGb3JlY2FzdCByZXNvbHZlcyB0byBudWxsIG9uIGEgZmFpbGVkIGxvb2t1cCDigJQgbGVhdmUgdGhlIGN1cnJlbnRcbiAgICAgIC8vIHJpYmJvbiB1bnRvdWNoZWQgKGludmFsaWRJbnB1dCgpIGhhcyBhbHJlYWR5IHJlZGRlbmVkIHRoZSBpbnB1dCkuXG4gICAgICBpZiAoIXJlc3VsdCkgeyByZXR1cm4gbnVsbDsgfVxuXG4gICAgICBjb25zdCBmb3JlY2FzdCA9IGJ1aWxkRm9yZWNhc3QocmVzdWx0KTtcbiAgICAgIGxhc3RGb3JlY2FzdCA9IGZvcmVjYXN0O1xuICAgICAgcmVuZGVyRm9yZWNhc3QoZm9yZWNhc3QpO1xuICAgICAgcmV0dXJuIGZvcmVjYXN0O1xuICAgIH0pO1xuICB9XG5cbiAgLy8gRmxhdHRlbiB0aGUgdGhyZWUtZGF5IHJlc3BvbnNlIGludG8gYSBzaW5nbGUgNzItaG91ciBzZXJpZXMgcGx1cyBhIGxvY2F0aW9uXG4gIC8vIG9iamVjdC4gRXZlcnkgaG91ciBrZWVwcyBpdHMgb3duIGVwb2NoLCB0ZW1wZXJhdHVyZSwgY29uZGl0aW9uIHRleHQgYW5kIHRoZVxuICAvLyBzdGF0IGZpZWxkcyB0aGUgcmVhZG91dCBzaG93cyDigJQgbm90aGluZyBpcyBjb2xsYXBzZWQgdG8gcGVyLWRheSBzY2FsYXJzLCBhbmRcbiAgLy8gdGhlIGZ1bGwgZm9yZWNhc3RkYXlbXS5ob3VyW10gYXJyYXlzIChhbHJlYWR5IGluIGV2ZXJ5IHJlc3BvbnNlLCBwcmV2aW91c2x5XG4gIC8vIGRpc2NhcmRlZCkgYXJlIHdoYXQgdGhlIGN1cnZlIGlzIGRyYXduIGZyb20uXG4gIGZ1bmN0aW9uIGJ1aWxkRm9yZWNhc3QocmVzdWx0KSB7XG4gICAgY29uc3QgZm9yZWNhc3REYXlzID0gcmVzdWx0LmZvcmVjYXN0LmZvcmVjYXN0ZGF5O1xuICAgIGNvbnN0IGhvdXJzID0gW107XG5cbiAgICBmb3JlY2FzdERheXMuZm9yRWFjaCgoZGF5KSA9PiB7XG4gICAgICBkYXkuaG91ci5mb3JFYWNoKChoKSA9PiB7XG4gICAgICAgIGhvdXJzLnB1c2goe1xuICAgICAgICAgIGVwb2NoOiBoLnRpbWVfZXBvY2gsXG4gICAgICAgICAgdGVtcDogaC50ZW1wX2MsXG4gICAgICAgICAgZmVlbHNMaWtlOiBoLmZlZWxzbGlrZV9jLFxuICAgICAgICAgIGh1bWlkaXR5OiBoLmh1bWlkaXR5LFxuICAgICAgICAgIHJhaW46IGguY2hhbmNlX29mX3JhaW4sXG4gICAgICAgICAgd2luZDogaC53aW5kX2twaCxcbiAgICAgICAgICBjb25kaXRpb246IGguY29uZGl0aW9uLnRleHQsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgbG9jYXRpb246IHtcbiAgICAgICAgbmFtZTogcmVzdWx0LmxvY2F0aW9uLm5hbWUsXG4gICAgICAgIC8vIFwibm93XCIgaXMgaW5kZXhlZCBvZmYgdGhlIGxvY2F0aW9uJ3MgcmVhbCBjdXJyZW50IHRpbWUsIG5vdCBhIHBhcnNlZFxuICAgICAgICAvLyBkYXRlIHN0cmluZy4gU2VlIGN1cnJlbnRIb3VySW5kZXgoKSBpbiByaWJib24uanMuXG4gICAgICAgIGxvY2FsdGltZV9lcG9jaDogcmVzdWx0LmxvY2F0aW9uLmxvY2FsdGltZV9lcG9jaCxcbiAgICAgIH0sXG4gICAgICBob3VyczogaG91cnMsXG4gICAgICAvLyBQZXItZGF5IGRhdGUgKyBob3VyIGNvdW50IGRyaXZlIHRoZSBXRUQvVEhVL0ZSSSB0aWNrcyBhbmQgdGhlIGRheVxuICAgICAgLy8gaGFpcmxpbmVzIGF0IGhvdXJzIDI0IGFuZCA0OC5cbiAgICAgIGRheXM6IGZvcmVjYXN0RGF5cy5tYXAoKGRheSkgPT4gKHsgZGF0ZTogZGF5LmRhdGUsIGNvdW50OiBkYXkuaG91ci5sZW5ndGggfSkpLFxuICAgIH07XG4gIH1cblxuICAvLyBUYWtlcyBhIGxvY2F0aW9uIHZhbHVlIGFwcGVuZGVkIHRvIHRoZSBBUEkgY2FsbC4gUmVzb2x2ZXMgdG8gdGhlIHJhdyBKU09OIG9uXG4gIC8vIHN1Y2Nlc3MsIG9yIG51bGwgb24gZmFpbHVyZSAoc28gZnVsZmlsbFByb21pc2Uga2VlcHMgdGhlIGN1cnJlbnQgcmliYm9uKS5cbiAgYXN5bmMgZnVuY3Rpb24gcHVsbEZvcmVjYXN0KHZhbHVlKSB7XG4gICAgY29uc3QgdXJsID0gJ2h0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PTM5YzI4Zjg1YWIwMzQ1MjFiOTkyMTcwNTIzMjcxMCZxPScgKyB2YWx1ZSArICcmZGF5cz0zJmFxaT1ubyZhbGVydHM9bm8nO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7IG1vZGU6ICdjb3JzJyB9KTtcblxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIFN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGZvcmVjYXN0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICB2YWxpZElucHV0KCk7XG5cbiAgICAgIHJldHVybiBmb3JlY2FzdDtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIGNhdGNoZXMgZXJyb3JzIGJvdGggaW4gZmV0Y2ggYW5kIHJlc3BvbnNlLmpzb25cbiAgICAgIGludmFsaWRJbnB1dCgpO1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgLy8gVHlwZWFoZWFkIGxvb2t1cCBmb3IgdGhlIHNlYXJjaCBib3guIEhpdHMgV2VhdGhlckFQSSdzIHNlYXJjaC9hdXRvY29tcGxldGVcbiAgLy8gZW5kcG9pbnQgKHJldXNpbmcgdGhlIHNhbWUga2V5IGFzIHB1bGxGb3JlY2FzdCkgYW5kIHJlc29sdmVzIHRvIHRoZSByYXdcbiAgLy8gcmVzdWx0cyBhcnJheSDigJQgW3sgbmFtZSwgcmVnaW9uLCBjb3VudHJ5LCAuLi4gfSwgLi4uXSDigJQgb3IgW10gb24gYW4gZW1wdHlcbiAgLy8gcXVlcnksIG5vIG1hdGNoZXMsIG9yIGFueSBuZXR3b3JrL3BhcnNlIGVycm9yLiBOZXZlciB0aHJvd3M6IHRoZSBkcm9wZG93blxuICAvLyBqdXN0IHNob3dzIG5vdGhpbmcgb24gZmFpbHVyZS5cbiAgYXN5bmMgZnVuY3Rpb24gc2VhcmNoQ2l0aWVzKHZhbHVlKSB7XG4gICAgY29uc3QgcSA9IFN0cmluZyh2YWx1ZSkudHJpbSgpO1xuICAgIGlmICghcSkgeyByZXR1cm4gW107IH1cblxuICAgIGNvbnN0IHVybCA9ICdodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9zZWFyY2guanNvbj9rZXk9MzljMjhmODVhYjAzNDUyMWI5OTIxNzA1MjMyNzEwJnE9JyArIGVuY29kZVVSSUNvbXBvbmVudChxKTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgeyBtb2RlOiAnY29ycycgfSk7XG5cbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBTdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgfVxuXG4gICAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShyZXN1bHRzKSA/IHJlc3VsdHMgOiBbXTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG5cbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHB1bGxGb3JlY2FzdCxcbiAgICBmdXR1cmVBUElDYWxscyxcbiAgICBzZWFyY2hDaXRpZXMsXG4gIH07XG5cbn0pKCk7IC8vIGVuZHMgZm9yZWNhc3RMb2dpYyBmdW5jdGlvblxuIiwiLy8gcmliYm9uLmpzIOKAlCB0aGUgNzItaG91ciB0ZW1wZXJhdHVyZSByaWJib24uXG4vL1xuLy8gVGhlIGZvcmVjYXN0IGlzIG9uZSBjb250aW51b3VzIHRlbXBlcmF0dXJlIGN1cnZlIGFjcm9zcyBhbGwgdGhyZWUgZGF5cyByYXRoZXJcbi8vIHRoYW4gdGhyZWUgY2FyZCBzdGF0ZXMgeW91IHBhZ2UgYmV0d2Vlbiwgc28gbmF2aWdhdGlvbiBzdG9wcyBiZWluZyBhIGNvbmNlcHQ6XG4vLyBldmVyeSBob3VyIGlzIG9uIHNjcmVlbiBhdCBvbmNlLiBDb2xvdXIgaXMgYSBmdW5jdGlvbiBvZiB0aGUgdGVtcGVyYXR1cmVcbi8vIHNjYWxhciAoY29sZCAtPiBtaWxkIC0+IHdhcm0gLT4gaG90KSwgTk9UIHRoZSBjb25kaXRpb24gY2F0ZWdvcnksIHNvIHRoZXJlIGlzXG4vLyBubyBwZXItY29uZGl0aW9uIGJyYW5jaCB0byB3cml0ZSBhbmQgbm8gZWlnaHRoIGNhc2UgdG8gZm9yZ2V0LlxuLy9cbi8vIGJ1aWxkUmliYm9uKG1vdW50KSBjcmVhdGVzIHRoZSBTVkcgc2NhZmZvbGQgb25jZSBhdCBib290c3RyYXAgKGRlZnMsIGdyYWRpZW50cyxcbi8vIGVtcHR5IGdyb3VwcykgYW5kIGNhY2hlcyBlbGVtZW50IHJlZnMuIHJlbmRlckZvcmVjYXN0KCkgaW4gaW5kZXhDaGFuZ2VzLmpzXG4vLyBjYWxscyByZW5kZXJSaWJib24oZm9yZWNhc3QpIG9uIGV2ZXJ5IHJlc29sdmVkIHJlc3BvbnNlIHRvIHJlZHJhdyB0aGUgY3VydmUsXG4vLyB0aGUgZGF5IGhhaXJsaW5lcy90aWNrcyBhbmQgdGhlIGN1cnJlbnQtaG91ciBtYXJrZXIgZnJvbSBkYXRhLiBjdXJyZW50SG91ckluZGV4XG4vLyBpcyB0aGUgc2luZ2xlIHNvdXJjZSBvZiB0cnV0aCBmb3IgXCJub3dcIiwgc2hhcmVkIHdpdGggdGhlIHJlYWRvdXQgc28gdGhlIG1hcmtlclxuLy8gYW5kIHRoZSBzdGF0IHJvdyBuZXZlciBkaXNhZ3JlZS5cbi8vXG4vLyBIYW5kLWF1dGhvcmVkIFNWRywgdmFuaWxsYSBvbmx5IOKAlCBubyBjaGFydGluZyBsaWJyYXJ5LCBubyBkZXBlbmRlbmNpZXMuXG5cbmNvbnN0IE5TID0gJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJztcblxuLy8gdmlld0JveCBnZW9tZXRyeSwgaW4gdXNlciB1bml0cy4gVGhlIGN1cnZlIGJhbmQgc2l0cyBiZXR3ZWVuIENIQVJUX1RPUCBhbmRcbi8vIENIQVJUX1RPUCtDSEFSVF9IOyBUSUNLX0ggYmVuZWF0aCBpdCBjYXJyaWVzIHRoZSBXRUQvVEhVL0ZSSSBkYXkgbGFiZWxzLiBBXG4vLyBzZWNvbmQgbGFuZSAodGlkZXMsIG91dCBvZiBzY29wZSB0b2RheSkgd291bGQgYWRkIExBTkVfSCBiZWxvdyB0aGF0IOKAlCB0aGVcbi8vIHZpZXdCb3ggaGVpZ2h0IHN3aXRjaGVzIGJldHdlZW4gdHdvIHZhbHVlcyBkZXBlbmRpbmcgb24gd2hldGhlciB0aGUgbGFuZVxuLy8gZXhpc3RzLCBzbyB0aGUgbGF5b3V0IGlzIGJ1aWx0IGxhbmUtb3B0aW9uYWwgZXZlbiB0aG91Z2ggdGhlIGxhbmUgbmV2ZXJcbi8vIHJlbmRlcnMgZm9yIG5vdy5cbmNvbnN0IFZJRVdfVyA9IDcyMDtcbmNvbnN0IFBBRF9MID0gMTA7XG5jb25zdCBQQURfUiA9IDEwO1xuY29uc3QgQ0hBUlRfVE9QID0gMTg7XG5jb25zdCBDSEFSVF9IID0gMTUwO1xuY29uc3QgVElDS19IID0gMjY7XG5jb25zdCBMQU5FX0ggPSA5MDtcblxuLy8gVGVtcGVyYXR1cmUgLT4gY29sb3VyIHJhbXAuIEZvdXIgYW5jaG9ycyBzcGFubmluZyBhIGZpeGVkIMKwQyBkb21haW4gc28gdGhlXG4vLyBzYW1lIHRlbXBlcmF0dXJlIGFsd2F5cyByZWFkcyB0aGUgc2FtZSBjb2xvdXIgcmVnYXJkbGVzcyBvZiB0aGUgZGF5J3MgcmFuZ2UuXG5jb25zdCBSQU1QID0gW1xuICB7IHQ6IC01LCBjOiBbMHgzZCwgMHg2ZiwgMHhhOF0gfSwgLy8gY29sZFxuICB7IHQ6IDEwLCBjOiBbMHg2ZiwgMHhhOCwgMHhhMF0gfSwgLy8gbWlsZFxuICB7IHQ6IDI1LCBjOiBbMHhkOSwgMHhhNCwgMHg0MV0gfSwgLy8gd2FybVxuICB7IHQ6IDQwLCBjOiBbMHhjMiwgMHg0NSwgMHgyZF0gfSwgLy8gaG90XG5dO1xuXG5jb25zdCBXRUVLREFZID0gWydTVU4nLCAnTU9OJywgJ1RVRScsICdXRUQnLCAnVEhVJywgJ0ZSSScsICdTQVQnXTtcblxuLy8gQ2FjaGVkIHNjYWZmb2xkIHJlZnMsIHBvcHVsYXRlZCBvbmNlIGJ5IGJ1aWxkUmliYm9uKCkuXG5sZXQgc3ZnLCB0ZW1wR3JhZCwgZmlsbFBhdGgsIGN1cnZlUGF0aCwgYm91bmRhcnlHcm91cCwgdGlja0dyb3VwLCBtYXJrZXJHcm91cCxcbiAgbGFuZUdyb3VwO1xuXG5mdW5jdGlvbiBlbChuYW1lLCBhdHRycykge1xuICBjb25zdCBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKE5TLCBuYW1lKTtcbiAgaWYgKGF0dHJzKSB7XG4gICAgZm9yIChjb25zdCBrIGluIGF0dHJzKSB7IG5vZGUuc2V0QXR0cmlidXRlKGssIGF0dHJzW2tdKTsgfVxuICB9XG4gIHJldHVybiBub2RlO1xufVxuXG5mdW5jdGlvbiBsZXJwKGEsIGIsIGYpIHsgcmV0dXJuIGEgKyAoYiAtIGEpICogZjsgfVxuXG4vLyBDb2xvdXIgZm9yIGEgdGVtcGVyYXR1cmUsIGludGVycG9sYXRlZCBhY3Jvc3MgdGhlIHJhbXAgYW5jaG9ycyBhbmQgY2xhbXBlZCB0b1xuLy8gdGhlIGRvbWFpbiBlbmRzLlxuZnVuY3Rpb24gdGVtcENvbG91cih0ZW1wKSB7XG4gIGlmICh0ZW1wIDw9IFJBTVBbMF0udCkgeyByZXR1cm4gcmdiKFJBTVBbMF0uYyk7IH1cbiAgaWYgKHRlbXAgPj0gUkFNUFtSQU1QLmxlbmd0aCAtIDFdLnQpIHsgcmV0dXJuIHJnYihSQU1QW1JBTVAubGVuZ3RoIC0gMV0uYyk7IH1cbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBSQU1QLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHRlbXAgPD0gUkFNUFtpXS50KSB7XG4gICAgICBjb25zdCBsbyA9IFJBTVBbaSAtIDFdO1xuICAgICAgY29uc3QgaGkgPSBSQU1QW2ldO1xuICAgICAgY29uc3QgZiA9ICh0ZW1wIC0gbG8udCkgLyAoaGkudCAtIGxvLnQpO1xuICAgICAgcmV0dXJuIHJnYihbXG4gICAgICAgIE1hdGgucm91bmQobGVycChsby5jWzBdLCBoaS5jWzBdLCBmKSksXG4gICAgICAgIE1hdGgucm91bmQobGVycChsby5jWzFdLCBoaS5jWzFdLCBmKSksXG4gICAgICAgIE1hdGgucm91bmQobGVycChsby5jWzJdLCBoaS5jWzJdLCBmKSksXG4gICAgICBdKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJnYihSQU1QW1JBTVAubGVuZ3RoIC0gMV0uYyk7XG59XG5cbmZ1bmN0aW9uIHJnYihjKSB7IHJldHVybiAncmdiKCcgKyBjWzBdICsgJywnICsgY1sxXSArICcsJyArIGNbMl0gKyAnKSc7IH1cblxuZnVuY3Rpb24gd2Vla2RheUFiYnIoZGF0ZVN0cikge1xuICAvLyBkYXRlU3RyIGlzICdZWVlZLU1NLUREJy4gQnVpbGQgdGhlIGRhdGUgYXQgVVRDIG1pZG5pZ2h0IHNvIHRoZSB3ZWVrZGF5IG5ldmVyXG4gIC8vIHNoaWZ0cyBhY3Jvc3MgYSB0aW1lem9uZSBib3VuZGFyeS5cbiAgY29uc3QgcCA9IFN0cmluZyhkYXRlU3RyKS5zcGxpdCgnLScpO1xuICBjb25zdCBkID0gbmV3IERhdGUoRGF0ZS5VVEMoK3BbMF0sICgrcFsxXSkgLSAxLCArcFsyXSkpO1xuICByZXR1cm4gV0VFS0RBWVtkLmdldFVUQ0RheSgpXSB8fCAnJztcbn1cblxuLy8gSW5kZXggb2YgdGhlIGhvdXIgYnVja2V0IG5lYXJlc3QgXCJub3dcIi4gRHJpdmVuIG9mZiBsb2NhdGlvbi5sb2NhbHRpbWVfZXBvY2gsXG4vLyBOT1QgYSBwYXJzZWQgZGF0ZS1zdHJpbmcgaG91ciDigJQgdGhlIG9sZCBnZXRDdXJyZW50VGltZSgpIHJlYWQgdGhlIGhvdXIgb3V0IG9mXG4vLyBkYXRlX2Vwb2NoIChsb2NhbCBtaWRuaWdodCkgYW5kIHJldHVybmVkIHRoZSBVVEMgb2Zmc2V0LCBzbyBcImZlZWxzIGxpa2VcIiB3YXMgYVxuLy8gZml4ZWQgYXJiaXRyYXJ5IGhvdXIuIGxvY2FsdGltZV9lcG9jaCBpcyB0aGUgbG9jYXRpb24ncyByZWFsIGN1cnJlbnQgdGltZS5cbmV4cG9ydCBmdW5jdGlvbiBjdXJyZW50SG91ckluZGV4KGZvcmVjYXN0KSB7XG4gIGNvbnN0IGhvdXJzID0gZm9yZWNhc3QuaG91cnM7XG4gIGlmICghaG91cnMgfHwgIWhvdXJzLmxlbmd0aCkgeyByZXR1cm4gMDsgfVxuICBjb25zdCBub3cgPSBmb3JlY2FzdC5sb2NhdGlvbi5sb2NhbHRpbWVfZXBvY2g7XG4gIGxldCBiZXN0ID0gMDtcbiAgbGV0IGJlc3REaWZmID0gSW5maW5pdHk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaG91cnMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBkaWZmID0gTWF0aC5hYnMoaG91cnNbaV0uZXBvY2ggLSBub3cpO1xuICAgIGlmIChkaWZmIDwgYmVzdERpZmYpIHsgYmVzdERpZmYgPSBkaWZmOyBiZXN0ID0gaTsgfVxuICB9XG4gIHJldHVybiBiZXN0O1xufVxuXG4vLyBDcmVhdGUgdGhlIFNWRyBzY2FmZm9sZCBvbmNlLiBDYWxsZWQgZnJvbSBpbmRleC5qcyBhdCBib290c3RyYXAsIGFmdGVyIHRoZVxuLy8gbW91bnQgZWxlbWVudCBpcyBpbiB0aGUgRE9NLlxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkUmliYm9uKG1vdW50KSB7XG4gIGlmIChzdmcpIHsgcmV0dXJuOyB9IC8vIGJ1aWxkIG9uY2VcblxuICBzdmcgPSBlbCgnc3ZnJywge1xuICAgIGlkOiAncmliYm9uU3ZnJyxcbiAgICB2aWV3Qm94OiAnMCAwICcgKyBWSUVXX1cgKyAnICcgKyAoQ0hBUlRfVE9QICsgQ0hBUlRfSCArIFRJQ0tfSCksXG4gICAgcHJlc2VydmVBc3BlY3RSYXRpbzogJ3hNaWRZTWlkIG1lZXQnLFxuICB9KTtcblxuICBjb25zdCBkZWZzID0gZWwoJ2RlZnMnKTtcblxuICAvLyBIb3Jpem9udGFsIHN0cm9rZSBncmFkaWVudDogY29sb3VyZWQgYnkgdGVtcGVyYXR1cmUgYWNyb3NzIHRoZSA3MiBob3Vycy5cbiAgLy8gU3RvcHMgYXJlIHJlYnVpbHQgZWFjaCByZW5kZXIgZnJvbSB0aGUgYWN0dWFsIHNlcmllcy5cbiAgdGVtcEdyYWQgPSBlbCgnbGluZWFyR3JhZGllbnQnLCB7XG4gICAgaWQ6ICd0ZW1wR3JhZCcsIHgxOiAnMCcsIHkxOiAnMCcsIHgyOiAnMScsIHkyOiAnMCcsXG4gIH0pO1xuXG4gIC8vIFZlcnRpY2FsIGZhZGUgZmlsbCB1bmRlciB0aGUgY3VydmUuXG4gIGNvbnN0IGZpbGxHcmFkID0gZWwoJ2xpbmVhckdyYWRpZW50Jywge1xuICAgIGlkOiAnZmlsbEdyYWQnLCB4MTogJzAnLCB5MTogJzAnLCB4MjogJzAnLCB5MjogJzEnLFxuICB9KTtcbiAgZmlsbEdyYWQuYXBwZW5kQ2hpbGQoZWwoJ3N0b3AnLCB7IG9mZnNldDogJzAnLCAnc3RvcC1jb2xvcic6ICcjOENBMEFFJywgJ3N0b3Atb3BhY2l0eSc6ICcwLjI4JyB9KSk7XG4gIGZpbGxHcmFkLmFwcGVuZENoaWxkKGVsKCdzdG9wJywgeyBvZmZzZXQ6ICcxJywgJ3N0b3AtY29sb3InOiAnIzhDQTBBRScsICdzdG9wLW9wYWNpdHknOiAnMCcgfSkpO1xuXG4gIGRlZnMuYXBwZW5kQ2hpbGQodGVtcEdyYWQpO1xuICBkZWZzLmFwcGVuZENoaWxkKGZpbGxHcmFkKTtcbiAgc3ZnLmFwcGVuZENoaWxkKGRlZnMpO1xuXG4gIGZpbGxQYXRoID0gZWwoJ3BhdGgnLCB7IGNsYXNzOiAncmliYm9uLWZpbGwnLCBmaWxsOiAndXJsKCNmaWxsR3JhZCknLCBzdHJva2U6ICdub25lJyB9KTtcbiAgY3VydmVQYXRoID0gZWwoJ3BhdGgnLCB7IGNsYXNzOiAncmliYm9uLWN1cnZlJywgZmlsbDogJ25vbmUnLCBzdHJva2U6ICd1cmwoI3RlbXBHcmFkKScgfSk7XG4gIGJvdW5kYXJ5R3JvdXAgPSBlbCgnZycsIHsgY2xhc3M6ICdyaWJib24tYm91bmRhcmllcycgfSk7XG4gIHRpY2tHcm91cCA9IGVsKCdnJywgeyBjbGFzczogJ3JpYmJvbi10aWNrcycgfSk7XG4gIG1hcmtlckdyb3VwID0gZWwoJ2cnLCB7IGNsYXNzOiAncmliYm9uLW1hcmtlcicgfSk7XG4gIGxhbmVHcm91cCA9IGVsKCdnJywgeyBjbGFzczogJ3JpYmJvbi1sYW5lJyB9KTtcblxuICBzdmcuYXBwZW5kQ2hpbGQoZmlsbFBhdGgpO1xuICBzdmcuYXBwZW5kQ2hpbGQoY3VydmVQYXRoKTtcbiAgc3ZnLmFwcGVuZENoaWxkKGJvdW5kYXJ5R3JvdXApO1xuICBzdmcuYXBwZW5kQ2hpbGQodGlja0dyb3VwKTtcbiAgc3ZnLmFwcGVuZENoaWxkKGxhbmVHcm91cCk7XG4gIHN2Zy5hcHBlbmRDaGlsZChtYXJrZXJHcm91cCk7XG5cbiAgbW91bnQuYXBwZW5kQ2hpbGQoc3ZnKTtcbn1cblxuZnVuY3Rpb24gY2xlYXIobm9kZSkge1xuICB3aGlsZSAobm9kZS5maXJzdENoaWxkKSB7IG5vZGUucmVtb3ZlQ2hpbGQobm9kZS5maXJzdENoaWxkKTsgfVxufVxuXG4vLyBSZWRyYXcgdGhlIHdob2xlIHJpYmJvbiBmcm9tIGEgZm9yZWNhc3Q6IHsgbG9jYXRpb24sIGhvdXJzW10sIGRheXNbXSwgbGFuZT8gfS5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJSaWJib24oZm9yZWNhc3QpIHtcbiAgaWYgKCFzdmcpIHsgcmV0dXJuOyB9XG5cbiAgY29uc3QgaG91cnMgPSBmb3JlY2FzdC5ob3VycyB8fCBbXTtcbiAgY29uc3QgbiA9IGhvdXJzLmxlbmd0aDtcbiAgaWYgKCFuKSB7IHJldHVybjsgfVxuXG4gIGNvbnN0IGxhbmVPbiA9ICEhZm9yZWNhc3QubGFuZTtcbiAgY29uc3QgdG90YWxIID0gQ0hBUlRfVE9QICsgQ0hBUlRfSCArIFRJQ0tfSCArIChsYW5lT24gPyBMQU5FX0ggOiAwKTtcbiAgc3ZnLnNldEF0dHJpYnV0ZSgndmlld0JveCcsICcwIDAgJyArIFZJRVdfVyArICcgJyArIHRvdGFsSCk7XG5cbiAgY29uc3QgaW5uZXJXID0gVklFV19XIC0gUEFEX0wgLSBQQURfUjtcbiAgY29uc3QgYmFzZWxpbmUgPSBDSEFSVF9UT1AgKyBDSEFSVF9IO1xuXG4gIC8vIHRlbXBlcmF0dXJlIGRvbWFpbiBmb3IgdGhlIHktc2NhbGUsIHBhZGRlZCBzbyB0aGUgY3VydmUgbmV2ZXIgaHVncyBhbiBlZGdlLlxuICBsZXQgbWluID0gSW5maW5pdHk7XG4gIGxldCBtYXggPSAtSW5maW5pdHk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgaWYgKGhvdXJzW2ldLnRlbXAgPCBtaW4pIHsgbWluID0gaG91cnNbaV0udGVtcDsgfVxuICAgIGlmIChob3Vyc1tpXS50ZW1wID4gbWF4KSB7IG1heCA9IGhvdXJzW2ldLnRlbXA7IH1cbiAgfVxuICBpZiAobWluID09PSBtYXgpIHsgbWluIC09IDE7IG1heCArPSAxOyB9XG4gIGNvbnN0IHNwYW4gPSBtYXggLSBtaW47XG5cbiAgY29uc3QgeCA9IChpKSA9PiBQQURfTCArIChuIDw9IDEgPyAwIDogKGkgLyAobiAtIDEpKSAqIGlubmVyVyk7XG4gIGNvbnN0IHkgPSAodCkgPT4gQ0hBUlRfVE9QICsgKDEgLSAodCAtIG1pbikgLyBzcGFuKSAqIENIQVJUX0g7XG5cbiAgLy8gQnVpbGQgdGhlIHBvaW50cywgdGhlbiBhIHNtb290aCBwYXRoIHZpYSBxdWFkcmF0aWMgbWlkcG9pbnRzIChubyBvdmVyc2hvb3QpLlxuICBjb25zdCBwdHMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHsgcHRzLnB1c2goeyB4OiB4KGkpLCB5OiB5KGhvdXJzW2ldLnRlbXApIH0pOyB9XG5cbiAgbGV0IGQgPSAnTSAnICsgcHRzWzBdLngudG9GaXhlZCgyKSArICcgJyArIHB0c1swXS55LnRvRml4ZWQoMik7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgeGMgPSAocHRzW2kgLSAxXS54ICsgcHRzW2ldLngpIC8gMjtcbiAgICBjb25zdCB5YyA9IChwdHNbaSAtIDFdLnkgKyBwdHNbaV0ueSkgLyAyO1xuICAgIGQgKz0gJyBRICcgKyBwdHNbaSAtIDFdLngudG9GaXhlZCgyKSArICcgJyArIHB0c1tpIC0gMV0ueS50b0ZpeGVkKDIpICtcbiAgICAgICcgJyArIHhjLnRvRml4ZWQoMikgKyAnICcgKyB5Yy50b0ZpeGVkKDIpO1xuICB9XG4gIGQgKz0gJyBMICcgKyBwdHNbbiAtIDFdLngudG9GaXhlZCgyKSArICcgJyArIHB0c1tuIC0gMV0ueS50b0ZpeGVkKDIpO1xuXG4gIGN1cnZlUGF0aC5zZXRBdHRyaWJ1dGUoJ2QnLCBkKTtcbiAgZmlsbFBhdGguc2V0QXR0cmlidXRlKCdkJywgZCArXG4gICAgJyBMICcgKyBwdHNbbiAtIDFdLngudG9GaXhlZCgyKSArICcgJyArIGJhc2VsaW5lICtcbiAgICAnIEwgJyArIHB0c1swXS54LnRvRml4ZWQoMikgKyAnICcgKyBiYXNlbGluZSArICcgWicpO1xuXG4gIC8vIEhvcml6b250YWwgdGVtcGVyYXR1cmUgZ3JhZGllbnQ6IG9uZSBzdG9wIHBlciBob3VyLCBjb2xvdXJlZCBieSB0aGF0IGhvdXInc1xuICAvLyB0ZW1wZXJhdHVyZS4gb2JqZWN0Qm91bmRpbmdCb3ggbWFwcyBvZmZzZXQgaS8obi0xKSBvbnRvIHRoZSBjdXJ2ZSdzIHgsIHdoaWNoXG4gIC8vIHNwYW5zIHRoZSBmdWxsIGlubmVyIHdpZHRoLCBzbyBlYWNoIHN0b3AgbGFuZHMgdW5kZXIgaXRzIGhvdXIuXG4gIGNsZWFyKHRlbXBHcmFkKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICB0ZW1wR3JhZC5hcHBlbmRDaGlsZChlbCgnc3RvcCcsIHtcbiAgICAgIG9mZnNldDogKG4gPD0gMSA/IDAgOiBpIC8gKG4gLSAxKSkudG9GaXhlZCg0KSxcbiAgICAgICdzdG9wLWNvbG9yJzogdGVtcENvbG91cihob3Vyc1tpXS50ZW1wKSxcbiAgICB9KSk7XG4gIH1cblxuICAvLyBEYXkgaGFpcmxpbmVzICsgV0VEL1RIVS9GUkkgdGlja3MsIGRlcml2ZWQgZnJvbSB0aGUgcGVyLWRheSBob3VyIGNvdW50cyBzbyBhXG4gIC8vIHNob3J0IHRyYWlsaW5nIGRheSBzdGlsbCBsaW5lcyB1cC5cbiAgY2xlYXIoYm91bmRhcnlHcm91cCk7XG4gIGNsZWFyKHRpY2tHcm91cCk7XG4gIGNvbnN0IGRheXMgPSBmb3JlY2FzdC5kYXlzIHx8IFtdO1xuICBsZXQgc3RhcnQgPSAwO1xuICBmb3IgKGxldCBkaSA9IDA7IGRpIDwgZGF5cy5sZW5ndGg7IGRpKyspIHtcbiAgICBjb25zdCBjb3VudCA9IGRheXNbZGldLmNvdW50IHx8IDA7XG4gICAgaWYgKGNvdW50IDw9IDApIHsgY29udGludWU7IH1cblxuICAgIGlmIChkaSA+IDAgJiYgc3RhcnQgPCBuKSB7XG4gICAgICBjb25zdCBieCA9IHgoc3RhcnQpLnRvRml4ZWQoMik7XG4gICAgICBib3VuZGFyeUdyb3VwLmFwcGVuZENoaWxkKGVsKCdsaW5lJywge1xuICAgICAgICBjbGFzczogJ3JpYmJvbi1oYWlybGluZScsXG4gICAgICAgIHgxOiBieCwgeTE6IENIQVJUX1RPUCwgeDI6IGJ4LCB5MjogYmFzZWxpbmUsXG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgY29uc3QgY2VudGVySWR4ID0gc3RhcnQgKyAoY291bnQgLSAxKSAvIDI7XG4gICAgY29uc3QgdGljayA9IGVsKCd0ZXh0Jywge1xuICAgICAgY2xhc3M6ICdyaWJib24tdGljaycsXG4gICAgICB4OiB4KGNlbnRlcklkeCkudG9GaXhlZCgyKSxcbiAgICAgIHk6IChiYXNlbGluZSArIFRJQ0tfSCAqIDAuNykudG9GaXhlZCgyKSxcbiAgICAgICd0ZXh0LWFuY2hvcic6ICdtaWRkbGUnLFxuICAgIH0pO1xuICAgIHRpY2sudGV4dENvbnRlbnQgPSB3ZWVrZGF5QWJicihkYXlzW2RpXS5kYXRlKTtcbiAgICB0aWNrR3JvdXAuYXBwZW5kQ2hpbGQodGljayk7XG5cbiAgICBzdGFydCArPSBjb3VudDtcbiAgfVxuXG4gIC8vIEN1cnJlbnQtaG91ciBtYXJrZXI6IGEgaGFpcmxpbmUgZHJvcHBlZCB0byB0aGUgYmFzZWxpbmUgcGx1cyBhIGRvdCBvbiB0aGVcbiAgLy8gY3VydmUsIHRoZSBkb3QgZmlsbGVkIHdpdGggdGhlIHRlbXBlcmF0dXJlIGNvbG91ciBmb3IgdGhhdCBob3VyLlxuICBjbGVhcihtYXJrZXJHcm91cCk7XG4gIGNvbnN0IGlkeCA9IGN1cnJlbnRIb3VySW5kZXgoZm9yZWNhc3QpO1xuICBjb25zdCBteCA9IHgoaWR4KTtcbiAgY29uc3QgbXkgPSB5KGhvdXJzW2lkeF0udGVtcCk7XG4gIG1hcmtlckdyb3VwLmFwcGVuZENoaWxkKGVsKCdsaW5lJywge1xuICAgIGNsYXNzOiAncmliYm9uLW5vd2xpbmUnLFxuICAgIHgxOiBteC50b0ZpeGVkKDIpLCB5MTogbXkudG9GaXhlZCgyKSwgeDI6IG14LnRvRml4ZWQoMiksIHkyOiBiYXNlbGluZSxcbiAgfSkpO1xuICBtYXJrZXJHcm91cC5hcHBlbmRDaGlsZChlbCgnY2lyY2xlJywge1xuICAgIGNsYXNzOiAncmliYm9uLWRvdCcsXG4gICAgY3g6IG14LnRvRml4ZWQoMiksIGN5OiBteS50b0ZpeGVkKDIpLCByOiAnNS41JyxcbiAgICBmaWxsOiB0ZW1wQ29sb3VyKGhvdXJzW2lkeF0udGVtcCksXG4gIH0pKTtcblxuICAvLyBPcHRpb25hbCBzZWNvbmQgbGFuZS4gTm8gZGF0YSBmZWVkcyBpdCB0b2RheSAodGlkZXMgYXJlIFBybysgYW5kIGVtcHR5IGZvclxuICAvLyBpbmxhbmQgbG9jYXRpb25zKSwgc28gaXQgc3RheXMgZW1wdHkgYW5kIHRoZSB2aWV3Qm94IHVzZXMgdGhlIHNob3J0ZXIgb2YgdGhlXG4gIC8vIHR3byBoZWlnaHRzIOKAlCBidXQgdGhlIGdyb3VwIGFuZCB0aGUgaGVpZ2h0IHN3aXRjaCBleGlzdCBzbyBhIGxhbmUgY2FuIGRyb3AgaW5cbiAgLy8gd2l0aG91dCBhIGxheW91dCByZXdyaXRlLlxuICBjbGVhcihsYW5lR3JvdXApO1xuICBpZiAobGFuZU9uICYmIHR5cGVvZiBmb3JlY2FzdC5sYW5lID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZm9yZWNhc3QubGFuZShsYW5lR3JvdXAsIHsgeCwgYmFzZWxpbmUsIGxhbmVUb3A6IGJhc2VsaW5lICsgVElDS19ILCBsYW5lSDogTEFORV9IIH0pO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1dlYXRoZXJBcHBfVE9QL1wiOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgJy4vbG9naWMuanMnOyAvLyBkZWZpbmVzIGZvcmVjYXN0TG9naWMgKG5vIGZldGNoIGZpcmVzIGF0IGltcG9ydCDigJQgc2VlIGluaXRGYXZvdXJpdGVzKVxuaW1wb3J0IHsgd2lyZUV2ZW50cyB9IGZyb20gJy4vaW5kZXhDaGFuZ2VzLmpzJztcbmltcG9ydCB7IGJ1aWxkUmliYm9uIH0gZnJvbSAnLi9yaWJib24uanMnO1xuaW1wb3J0IHsgaW5pdEZhdm91cml0ZXMgfSBmcm9tICcuL2Zhdm91cml0ZXMuanMnO1xuXG4vLyBUaGUgd2hvbGUgVUkgaXMgYnVpbHQgaGVyZSB3aXRoIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgKHRoZXJlIGlzIG5vIEhUTUwgc291cmNlXG4vLyBmaWxlIOKAlCBodG1sLXdlYnBhY2stcGx1Z2luIGdlbmVyYXRlcyBhbiBlbXB0eSBkb2N1bWVudCkuIFRoZSBmb3JlY2FzdCBpcyBvbmVcbi8vIGNvbnRpbnVvdXMgdGVtcGVyYXR1cmUgcmliYm9uIGFjcm9zcyBhbGwgdGhyZWUgZGF5cywgYSByZWFkb3V0IGJlbmVhdGggaXQsIGFuZFxuLy8gYSBzZWFyY2ggYm94OiBubyBjYXJkcywgbm8gYXJyb3dzLCBubyBwZXItY29uZGl0aW9uIHRoZW1lLCBubyBkYXkgbmF2aWdhdGlvbi5cblxuLy8gQSBkZXNrdG9wLW9ubHkgcHJldi9uZXh0IGNoZXZyb24gZmxhbmtpbmcgdGhlIHNhdmVkLWxvY2F0aW9uIGRvdHMuIElubGluZSBTVkdcbi8vIHNvIENTUyBjYW4gcmVjb2xvdXIgdGhlIHN0cm9rZSB2aWEgY3VycmVudENvbG9yIChpZGxlIG11dGVkLCBicmlnaHRlciBvblxuLy8gaG92ZXIpLiBmYXZvdXJpdGVzLmpzIHdpcmVzIHRoZSBjbGlja3MgdG8gcm90YXRlKCk7IHRoZSBwYWlyIGlzIGhpZGRlbiB3aXRoXG4vLyB0aGUgZG90cyBiZWxvdyB0d28gbG9jYXRpb25zLCBhbmQgaGlkZGVuIGVudGlyZWx5IGF0IOKJpDQ4MHB4IHdoZXJlIHN3aXBlIHJ1bGVzLlxuZnVuY3Rpb24gbmF2QXJyb3coaWQsIGRpciwgbGFiZWwpIHtcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ0bi50eXBlID0gJ2J1dHRvbic7XG4gIGJ0bi5pZCA9IGlkO1xuICBidG4uY2xhc3NOYW1lID0gJ2Fycm93JztcbiAgYnRuLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIGxhYmVsKTtcbiAgY29uc3QgcG9pbnRzID0gZGlyIDwgMCA/ICcxMywzIDcsNyAxMywxMScgOiAnNywzIDEzLDcgNywxMSc7XG4gIGJ0bi5pbm5lckhUTUwgPVxuICAgICc8c3ZnIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIxNFwiIHZpZXdCb3g9XCIwIDAgMjAgMTRcIiBmaWxsPVwibm9uZVwiICcgK1xuICAgICdzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiICcgK1xuICAgICdzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPicgK1xuICAgICc8cG9seWxpbmUgcG9pbnRzPVwiJyArIHBvaW50cyArICdcIj48L3BvbHlsaW5lPjwvc3ZnPic7XG4gIHJldHVybiBidG47XG59XG5cbmZ1bmN0aW9uIHN0YXQoaWQsIGxhYmVsKSB7XG4gIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY2VsbC5jbGFzc05hbWUgPSAnc3RhdCc7XG5cbiAgY29uc3QgbGFiZWxFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsYWJlbEVsLmNsYXNzTmFtZSA9ICdzdGF0LWxhYmVsJztcbiAgbGFiZWxFbC50ZXh0Q29udGVudCA9IGxhYmVsO1xuXG4gIGNvbnN0IHZhbHVlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdmFsdWVFbC5jbGFzc05hbWUgPSAnc3RhdC12YWx1ZSc7XG4gIHZhbHVlRWwuaWQgPSBpZDtcbiAgdmFsdWVFbC50ZXh0Q29udGVudCA9ICfigJQnO1xuXG4gIGNlbGwuYXBwZW5kQ2hpbGQobGFiZWxFbCk7XG4gIGNlbGwuYXBwZW5kQ2hpbGQodmFsdWVFbCk7XG4gIHJldHVybiBjZWxsO1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnQoKSB7XG4gIGNvbnN0IGFwcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBhcHAuaWQgPSAnYXBwJztcblxuICAvLyBSaWJib24gcGFuZWwg4oCUIHRoZSBTVkcgY3VydmUgaXMgbW91bnRlZCBpbnRvICNyaWJib25XcmFwIGJ5IGJ1aWxkUmliYm9uKCkuXG4gIGNvbnN0IHJpYmJvbldyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcmliYm9uV3JhcC5pZCA9ICdyaWJib25XcmFwJztcblxuICAvLyBSZWFkb3V0OiBsb2NhdGlvbiwgY3VycmVudCB0ZW1wZXJhdHVyZSwgY29uZGl0aW9uLCBhbmQgYSBmb3VyLXVwIHN0YXQgcm93LlxuICBjb25zdCByZWFkb3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHJlYWRvdXQuaWQgPSAncmVhZG91dCc7XG5cbiAgY29uc3QgbG9jYXRpb25OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxvY2F0aW9uTmFtZS5pZCA9ICdsb2NhdGlvbk5hbWUnO1xuICBsb2NhdGlvbk5hbWUudGV4dENvbnRlbnQgPSAn4oCUJztcblxuICAvLyBTYXZlZC1sb2NhdGlvbiBpbmRpY2F0b3I6IG9uZSBkb3QgcGVyIHNhdmVkIGxvY2F0aW9uLCB0aGUgY3VycmVudCBvbmUgZmlsbGVkLlxuICAvLyBQb3B1bGF0ZWQgYnkgZmF2b3VyaXRlcy5qcy4gVGhlIGRvdHMgc2l0IGluc2lkZSBhIC5uYXZSb3cgYmV0d2VlbiB0d29cbiAgLy8gZGVza3RvcC1vbmx5IHByZXYvbmV4dCBhcnJvd3M7IGZhdm91cml0ZXMuanMgZ2F0ZXMgdGhlIHdob2xlIHJvdydzXG4gIC8vIHZpc2liaWxpdHkgKGhpZGRlbiB1bnRpbCB0d28gb3IgbW9yZSBsb2NhdGlvbnMgYXJlIHNhdmVkKS5cbiAgY29uc3QgbmF2Um93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5hdlJvdy5jbGFzc05hbWUgPSAnbmF2Um93IGhpZGRlbic7XG5cbiAgY29uc3QgZG90Um93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRvdFJvdy5pZCA9ICdkb3RSb3cnO1xuXG4gIG5hdlJvdy5hcHBlbmRDaGlsZChuYXZBcnJvdygnbmF2UHJldicsIC0xLCAnUHJldmlvdXMgbG9jYXRpb24nKSk7XG4gIG5hdlJvdy5hcHBlbmRDaGlsZChkb3RSb3cpO1xuICBuYXZSb3cuYXBwZW5kQ2hpbGQobmF2QXJyb3coJ25hdk5leHQnLCAxLCAnTmV4dCBsb2NhdGlvbicpKTtcblxuICBjb25zdCBjdXJyZW50VGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjdXJyZW50VGVtcC5pZCA9ICdjdXJyZW50VGVtcCc7XG4gIGN1cnJlbnRUZW1wLnRleHRDb250ZW50ID0gJ+KAlCc7XG5cbiAgY29uc3QgY3VycmVudENvbmRpdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjdXJyZW50Q29uZGl0aW9uLmlkID0gJ2N1cnJlbnRDb25kaXRpb24nO1xuICBjdXJyZW50Q29uZGl0aW9uLnRleHRDb250ZW50ID0gJ+KAlCc7XG5cbiAgY29uc3Qgc3RhdFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzdGF0Um93LmlkID0gJ3N0YXRSb3cnO1xuICBzdGF0Um93LmFwcGVuZENoaWxkKHN0YXQoJ2ZlZWxzVmFsJywgJ0ZFRUxTIExJS0UnKSk7XG4gIHN0YXRSb3cuYXBwZW5kQ2hpbGQoc3RhdCgnaHVtaWRpdHlWYWwnLCAnSFVNSURJVFknKSk7XG4gIHN0YXRSb3cuYXBwZW5kQ2hpbGQoc3RhdCgncmFpblZhbCcsICdSQUlOJykpO1xuICBzdGF0Um93LmFwcGVuZENoaWxkKHN0YXQoJ3dpbmRWYWwnLCAnV0lORCcpKTtcblxuICByZWFkb3V0LmFwcGVuZENoaWxkKGxvY2F0aW9uTmFtZSk7XG4gIHJlYWRvdXQuYXBwZW5kQ2hpbGQobmF2Um93KTtcbiAgcmVhZG91dC5hcHBlbmRDaGlsZChjdXJyZW50VGVtcCk7XG4gIHJlYWRvdXQuYXBwZW5kQ2hpbGQoY3VycmVudENvbmRpdGlvbik7XG4gIHJlYWRvdXQuYXBwZW5kQ2hpbGQoc3RhdFJvdyk7XG5cbiAgLy8gU2VhcmNoIGZvcm0uIEEgcmVhbCA8Zm9ybT4gKyBzdWJtaXQgYnV0dG9uIHNvIEVudGVyIGFuZCBjbGljayBzaGFyZSBvbmVcbiAgLy8gc3VibWl0IGV2ZW50ICh3aXJlZCBvbmNlIGluIHdpcmVFdmVudHMoKSkuXG4gIGNvbnN0IHNlYXJjaEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIHNlYXJjaEZvcm0uaWQgPSAnc2VhcmNoRm9ybSc7XG5cbiAgLy8gVGhlIGlucHV0IGFuZCBpdHMgYXV0b2NvbXBsZXRlIGRyb3Bkb3duIHNoYXJlIGEgcmVsYXRpdmVseS1wb3NpdGlvbmVkIHdyYXBwZXJcbiAgLy8gc28gI3N1Z2dlc3Rpb25zIGNhbiBoYW5nIGJlbmVhdGggI3NlYXJjaElucHV0ICh0b3A6IDEwMCUpIGFuZCBhbGlnbiB0byBpdHNcbiAgLy8gZWRnZXMsIGluc3RlYWQgb2YgYmVjb21pbmcgYSB0aGlyZCBmbGV4IGNoaWxkIG9mIHRoZSByb3cuXG4gIGNvbnN0IHNlYXJjaElucHV0V3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzZWFyY2hJbnB1dFdyYXAuaWQgPSAnc2VhcmNoSW5wdXRXcmFwJztcblxuICBjb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHNlYXJjaElucHV0LmlkID0gJ3NlYXJjaElucHV0JztcbiAgc2VhcmNoSW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgc2VhcmNoSW5wdXQucGxhY2Vob2xkZXIgPSAnU2VhcmNoIGxvY2F0aW9uJztcbiAgc2VhcmNoSW5wdXQuc2V0QXR0cmlidXRlKCdhdXRvY29tcGxldGUnLCAnb2ZmJyk7XG5cbiAgLy8gQ2l0eS1zdWdnZXN0aW9uIGRyb3Bkb3duLiBQb3B1bGF0ZWQgYnkgYSBkZWJvdW5jZWQgbG9va3VwIHdpcmVkIG9uY2UgaW5cbiAgLy8gd2lyZUV2ZW50cygpOyBoaWRkZW4gdW50aWwgdGhlcmUgYXJlIG1hdGNoZXMgdG8gc2hvdy5cbiAgY29uc3Qgc3VnZ2VzdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc3VnZ2VzdGlvbnMuaWQgPSAnc3VnZ2VzdGlvbnMnO1xuICBzdWdnZXN0aW9ucy5jbGFzc05hbWUgPSAnaGlkZGVuJztcbiAgc3VnZ2VzdGlvbnMuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2xpc3Rib3gnKTtcblxuICBjb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgc2VhcmNoQnV0dG9uLmlkID0gJ3NlYXJjaEJ1dHRvbic7XG4gIHNlYXJjaEJ1dHRvbi50eXBlID0gJ3N1Ym1pdCc7XG4gIHNlYXJjaEJ1dHRvbi50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xuXG4gIHNlYXJjaElucHV0V3JhcC5hcHBlbmRDaGlsZChzZWFyY2hJbnB1dCk7XG4gIHNlYXJjaElucHV0V3JhcC5hcHBlbmRDaGlsZChzdWdnZXN0aW9ucyk7XG5cbiAgc2VhcmNoRm9ybS5hcHBlbmRDaGlsZChzZWFyY2hJbnB1dFdyYXApO1xuICBzZWFyY2hGb3JtLmFwcGVuZENoaWxkKHNlYXJjaEJ1dHRvbik7XG5cbiAgYXBwLmFwcGVuZENoaWxkKHJpYmJvbldyYXApO1xuICBhcHAuYXBwZW5kQ2hpbGQocmVhZG91dCk7XG4gIGFwcC5hcHBlbmRDaGlsZChzZWFyY2hGb3JtKTtcblxuICByZXR1cm4gYXBwO1xufVxuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudCgpKTtcblxuLy8gQnVpbGQgdGhlIFNWRyBzY2FmZm9sZCBub3cgdGhhdCAjcmliYm9uV3JhcCBleGlzdHMsIHRoZW4gcmVnaXN0ZXIgbGlzdGVuZXJzXG4vLyBleGFjdGx5IG9uY2UuIEJvdGggcnVuIG9mZiB0aGUgcmVuZGVyIHBhdGgsIHNvIG5vdGhpbmcgbXVsdGlwbGllcyBhY3Jvc3Ncbi8vIGZldGNoZXMuIGluaXRGYXZvdXJpdGVzKCkgbG9hZHMgdGhlIHNhdmVkIGxvY2F0aW9ucywgd2lyZXMgdGhlIHN3aXBlL2RvdFxuLy8gZ2VzdHVyZXMgb25jZSwgZHJhd3MgdGhlIGRvdHMsIGFuZCBmaXJlcyB0aGUgc2luZ2xlIGluaXRpYWwgZmV0Y2ggKHRoZSBmaXJzdFxuLy8gc2F2ZWQgbG9jYXRpb24sIG9yIHRoZSBkZWZhdWx0IHdoZW4gbm9uZSBhcmUgc2F2ZWQpLCB3aGljaCByZXNvbHZlc1xuLy8gYWZ0ZXJ3YXJkcyBhbmQgcmVuZGVycyBpbnRvIHRoaXMgc2NhZmZvbGQuXG5idWlsZFJpYmJvbihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmliYm9uV3JhcCcpKTtcbndpcmVFdmVudHMoKTtcbmluaXRGYXZvdXJpdGVzKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=