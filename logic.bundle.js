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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naWMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMscUhBQXVDO0FBQ25GLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0RUFBNEU7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsT0FBTyxRQUFRLE9BQU8sTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sWUFBWSxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLHVCQUF1QixhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZ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Q0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isd0RBQXdEO0FBQ3ZGO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNVFBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1dDQUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL3NyYy9mYXZvdXJpdGVzLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL3NyYy9pbmRleENoYW5nZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vc3JjL2xvZ2ljLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL3NyYy9yaWJib24uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vUm9ib3RvLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgZm9udC13ZWlnaHQ6IDMwMCA0MDA7XG59XG5cbi8qIFBhbGV0dGU6XG4gICBncm91bmQgICMxMjE4MUYgICBydWxlcyAgIzI2MzEzQlxuICAgdGV4dCAgICAjRUFFRUYyIChwcmltYXJ5KSAvICM4Q0EwQUUgKG11dGVkKVxuICAgVGhlIHRlbXBlcmF0dXJlIGNvbG91cnMgbGl2ZSBpbiByaWJib24uanMgKHRoZSBjdXJ2ZSBpcyBjb2xvdXJlZCBieSB0aGVcbiAgIHRlbXBlcmF0dXJlIHNjYWxhciwgbm90IGJ5IENTUykuICovXG46cm9vdCB7XG4gIC0tZ3JvdW5kOiAjMTIxODFGO1xuICAtLXJ1bGU6ICMyNjMxM0I7XG4gIC0tdGV4dDogI0VBRUVGMjtcbiAgLS1tdXRlZDogIzhDQTBBRTtcbiAgLS1tb25vOiAnU0ZNb25vLVJlZ3VsYXInLCAnU0YgTW9ubycsICdNZW5sbycsICdDb25zb2xhcycsICdMaWJlcmF0aW9uIE1vbm8nLCBtb25vc3BhY2U7XG59XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncm91bmQpO1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuLyogZHZoIChub3QgdmgpOiBvbiBpT1MgU2FmYXJpIHZoIHJlc29sdmVzIHRvIHRoZSB0YWxsIHZpZXdwb3J0IGFuZCBwYXJrcyB0aGVcbiAgIGJvdHRvbSBvZiB0aGUgbGF5b3V0IHVuZGVyIHRoZSBVUkwgYmFyLiAqL1xuI2FwcCB7XG4gIG1pbi1oZWlnaHQ6IDEwMGR2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMjhweDtcbiAgbWF4LXdpZHRoOiA3MjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDMycHggMjBweDtcbn1cblxuLyogUmliYm9uOiB0aGUgU1ZHIHNjYWxlcyB0byB0aGUgY29sdW1uIHdpZHRoIHZpYSB0aGUgdmlld0JveCwgc28gYWxsIDcyIGhvdXJzXG4gICBhcmUgb24gc2NyZWVuIGF0IGFueSB3aWR0aCBkb3duIHRvIDM4MHB4IHdpdGhvdXQgc2Nyb2xsIG9yIHBhbi4gKi9cbiNyaWJib25XcmFwIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbiNyaWJib25Tdmcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG5cbi5yaWJib24tY3VydmUge1xuICBzdHJva2Utd2lkdGg6IDIuNTtcbiAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xuICBzdHJva2UtbGluZWpvaW46IHJvdW5kO1xufVxuXG4vKiBEYXkgYm91bmRhcnkgaGFpcmxpbmVzIGF0IGhvdXJzIDI0IGFuZCA0OC4gKi9cbi5yaWJib24taGFpcmxpbmUge1xuICBzdHJva2U6IHZhcigtLXJ1bGUpO1xuICBzdHJva2Utd2lkdGg6IDE7XG59XG5cbi5yaWJib24tdGljayB7XG4gIGZpbGw6IHZhcigtLW11dGVkKTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1vbm8pO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG5cbi5yaWJib24tbm93bGluZSB7XG4gIHN0cm9rZTogdmFyKC0tbXV0ZWQpO1xuICBzdHJva2Utd2lkdGg6IDE7XG4gIHN0cm9rZS1kYXNoYXJyYXk6IDIgMztcbiAgb3BhY2l0eTogMC43O1xufVxuXG4ucmliYm9uLWRvdCB7XG4gIHN0cm9rZTogdmFyKC0tZ3JvdW5kKTtcbiAgc3Ryb2tlLXdpZHRoOiAyO1xufVxuXG4vKiBSZWFkb3V0IGJlbmVhdGggdGhlIGN1cnZlLiAqL1xuI3JlYWRvdXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jbG9jYXRpb25OYW1lIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1vbm8pO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XG59XG5cbi8qIFNhdmVkLWxvY2F0aW9uIG5hdmlnYXRpb246IHByZXYvbmV4dCBjaGV2cm9ucyBmbGFua2luZyB0aGUgZG90IHJvdy4gVGhlIHdob2xlXG4gICByb3cgaXMgaGlkZGVuIGF0IGEgY291bnQgb2Ygb25lIChhIHNpbmdsZSBsb2NhdGlvbiBuZWVkcyBubyBhZmZvcmRhbmNlKTsgdGhlXG4gICBhcnJvd3MgYXJlIGRlc2t0b3Atb25seSBhbmQgZHJvcCBvdXQgYXQg4omkNDgwcHggd2hlcmUgc3dpcGUgdGFrZXMgb3Zlci4gKi9cbi5uYXZSb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBtYXJnaW46IDRweCAwIDJweDtcbn1cblxuLm5hdlJvdy5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uYXJyb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5hcnJvdzpob3ZlciB7XG4gIGNvbG9yOiAjRUFFRUYyO1xufVxuXG4uYXJyb3cgc3ZnIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDE0cHg7XG59XG5cbi8qIFNhdmVkLWxvY2F0aW9uIGRvdHM6IG9uZSBwZXIgc2F2ZWQgbG9jYXRpb24sIHRoZSBhY3RpdmUgb25lIGZpbGxlZC4gKi9cbiNkb3RSb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDhweDtcbn1cblxuLmRvdCB7XG4gIHdpZHRoOiA4cHg7XG4gIGhlaWdodDogOHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICMyRTNCNDU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XG59XG5cbi5kb3QuYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI0VBRUVGMjtcbn1cblxuLyogUm9ib3RvIExpZ2h0IDQwcHggZm9yIHRoZSByZWFkaW5nLiAqL1xuI2N1cnJlbnRUZW1wIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjE7XG59XG5cbiNjdXJyZW50Q29uZGl0aW9uIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG59XG5cbi8qIEZvdXItdXAgc3RhdCByb3c6IHRleHQgbGFiZWxzLCBubyBpY29ucy4gKi9cbiNzdGF0Um93IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgZ2FwOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMTRweDtcbn1cblxuLnN0YXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDRweDtcbiAgcGFkZGluZzogMTJweCA2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXJ1bGUpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5zdGF0LWxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1vbm8pO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XG59XG5cbi5zdGF0LXZhbHVlIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG59XG5cbi8qIFNlYXJjaCBmb3JtLiAqL1xuI3NlYXJjaEZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4vKiBIb2xkcyB0aGUgaW5wdXQgYW5kIGl0cyBhdXRvY29tcGxldGUgZHJvcGRvd247IHBvc2l0aW9uOiByZWxhdGl2ZSBhbmNob3JzXG4gICAjc3VnZ2VzdGlvbnMgYmVuZWF0aCB0aGUgaW5wdXQuIGZsZXg6IDEgc28gdGhlIHBhaXIgZmlsbHMgdGhlIHJvdyB0aGUgd2F5IHRoZVxuICAgYmFyZSBpbnB1dCB1c2VkIHRvLiAqL1xuI3NlYXJjaElucHV0V3JhcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleDogMTtcbiAgbWluLXdpZHRoOiAwO1xufVxuXG4jc2VhcmNoSW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTJweCAxNHB4O1xuICBmb250LWZhbWlseTogdmFyKC0tbW9ubyk7XG4gIGZvbnQtc2l6ZTogMTZweDsgLyogMTZweCBzbyBpT1MgU2FmYXJpIGRvZXNuJ3QgYXV0by16b29tIHRoZSBpbnB1dCBvbiBmb2N1cyAqL1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ydWxlKTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4jc2VhcmNoSW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcbn1cblxuI3NlYXJjaElucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1tdXRlZCk7XG59XG5cbi8qIFdoaWxlIHRoZSBkcm9wZG93biBpcyBvcGVuIHRoZSBpbnB1dCdzIGJvdHRvbSBjb3JuZXJzIHNxdWFyZSBvZmYgYW5kIGl0c1xuICAgYm90dG9tIGVkZ2UgZHJvcHMgb3V0LCBzbyBpdCByZWFkcyBhcyBvbmUgYXR0YWNoZWQgc3VyZmFjZSB3aXRoICNzdWdnZXN0aW9ucy4gKi9cbiNzZWFyY2hGb3JtLnN1Z2dlc3RpbmcgI3NlYXJjaElucHV0IHtcbiAgYm9yZGVyLXJhZGl1czogOHB4IDhweCAwIDA7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4vKiBGYWlsZWQgbG9va3VwOiByZWRkZW5lZCBib3JkZXIsIGN1cnJlbnQgcmliYm9uIGxlZnQgaW4gcGxhY2UuICovXG4jc2VhcmNoRm9ybS5pbnZhbGlkICNzZWFyY2hJbnB1dCB7XG4gIGJvcmRlci1jb2xvcjogI0MyNDUyRDtcbn1cblxuLyogQXV0b2NvbXBsZXRlIGRyb3Bkb3duOiBoYW5ncyBvZmYgdGhlIGJvdHRvbSBvZiB0aGUgaW5wdXQsIG1hdGNoaW5nIGl0cyB3aWR0aFxuICAgYW5kIGNvbnRpbnVpbmcgaXRzIGZvY3VzZWQgYm9yZGVyIGludG8gYSBib3R0b20tcm91bmRlZCBwYW5lbC4gKi9cbiNzdWdnZXN0aW9ucyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDAlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMTA7XG4gIG1heC1oZWlnaHQ6IDI0MHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncm91bmQpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1tdXRlZCk7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCA4cHggOHB4O1xufVxuXG4jc3VnZ2VzdGlvbnMuaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnN1Z2dlc3Rpb24taXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgZ2FwOiA4cHg7XG4gIHBhZGRpbmc6IDEwcHggMTRweDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1vbm8pO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zdWdnZXN0aW9uLWl0ZW06aG92ZXIsXG4uc3VnZ2VzdGlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tcnVsZSk7XG59XG5cbi5zdWdnZXN0aW9uLWNpdHkge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbn1cblxuLnN1Z2dlc3Rpb24tY291bnRyeSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcbn1cblxuI3NlYXJjaEJ1dHRvbiB7XG4gIHBhZGRpbmc6IDEycHggMjBweDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1vbm8pO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGNvbG9yOiB2YXIoLS1ncm91bmQpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10ZXh0KTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI3NlYXJjaEJ1dHRvbjpob3ZlciB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjkyKTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICNhcHAge1xuICAgIGdhcDogMjJweDtcbiAgICBwYWRkaW5nOiAyNHB4IDE2cHg7XG4gIH1cblxuICAvKiBNb2JpbGUgbmF2aWdhdGVzIGJ5IHN3aXBlOyBkcm9wIHRoZSBhcnJvd3MgYnV0IGtlZXAgdGhlIGRvdHMuICovXG4gIC5hcnJvdyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gICNzdGF0Um93IHtcbiAgICBnYXA6IDhweDtcbiAgfVxuXG4gIC5zdGF0IHtcbiAgICBwYWRkaW5nOiAxMHB4IDRweDtcbiAgfVxuXG4gIC5zdGF0LXZhbHVlIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQiw0Q0FBZ0M7RUFDaEMsb0JBQW9CO0FBQ3RCOztBQUVBOzs7O3FDQUlxQztBQUNyQztFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixzRkFBc0Y7QUFDeEY7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQiw0Q0FBNEM7RUFDNUMsbUNBQW1DO0FBQ3JDOztBQUVBOzRDQUM0QztBQUM1QztFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7b0VBQ29FO0FB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QTBCO0FBQzVCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixRQUFRO0VBQ1Isa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QixlQUFlO0FBQ2pCOztBQUVBOztFQUVFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0U7SUFDRSxTQUFTO0lBQ1Qsa0JBQWtCO0VBQ3BCOztFQUVBLGtFQUFrRTtFQUNsRTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFFBQVE7RUFDVjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gIHNyYzogdXJsKCcuL1JvYm90by1SZWd1bGFyLnR0ZicpO1xcbiAgZm9udC13ZWlnaHQ6IDMwMCA0MDA7XFxufVxcblxcbi8qIFBhbGV0dGU6XFxuICAgZ3JvdW5kICAjMTIxODFGICAgcnVsZXMgICMyNjMxM0JcXG4gICB0ZXh0ICAgICNFQUVFRjIgKHByaW1hcnkpIC8gIzhDQTBBRSAobXV0ZWQpXFxuICAgVGhlIHRlbXBlcmF0dXJlIGNvbG91cnMgbGl2ZSBpbiByaWJib24uanMgKHRoZSBjdXJ2ZSBpcyBjb2xvdXJlZCBieSB0aGVcXG4gICB0ZW1wZXJhdHVyZSBzY2FsYXIsIG5vdCBieSBDU1MpLiAqL1xcbjpyb290IHtcXG4gIC0tZ3JvdW5kOiAjMTIxODFGO1xcbiAgLS1ydWxlOiAjMjYzMTNCO1xcbiAgLS10ZXh0OiAjRUFFRUYyO1xcbiAgLS1tdXRlZDogIzhDQTBBRTtcXG4gIC0tbW9ubzogJ1NGTW9uby1SZWd1bGFyJywgJ1NGIE1vbm8nLCAnTWVubG8nLCAnQ29uc29sYXMnLCAnTGliZXJhdGlvbiBNb25vJywgbW9ub3NwYWNlO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JvdW5kKTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmO1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxufVxcblxcbi8qIGR2aCAobm90IHZoKTogb24gaU9TIFNhZmFyaSB2aCByZXNvbHZlcyB0byB0aGUgdGFsbCB2aWV3cG9ydCBhbmQgcGFya3MgdGhlXFxuICAgYm90dG9tIG9mIHRoZSBsYXlvdXQgdW5kZXIgdGhlIFVSTCBiYXIuICovXFxuI2FwcCB7XFxuICBtaW4taGVpZ2h0OiAxMDBkdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAyOHB4O1xcbiAgbWF4LXdpZHRoOiA3MjBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogMzJweCAyMHB4O1xcbn1cXG5cXG4vKiBSaWJib246IHRoZSBTVkcgc2NhbGVzIHRvIHRoZSBjb2x1bW4gd2lkdGggdmlhIHRoZSB2aWV3Qm94LCBzbyBhbGwgNzIgaG91cnNcXG4gICBhcmUgb24gc2NyZWVuIGF0IGFueSB3aWR0aCBkb3duIHRvIDM4MHB4IHdpdGhvdXQgc2Nyb2xsIG9yIHBhbi4gKi9cXG4jcmliYm9uV3JhcCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI3JpYmJvblN2ZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi5yaWJib24tY3VydmUge1xcbiAgc3Ryb2tlLXdpZHRoOiAyLjU7XFxuICBzdHJva2UtbGluZWNhcDogcm91bmQ7XFxuICBzdHJva2UtbGluZWpvaW46IHJvdW5kO1xcbn1cXG5cXG4vKiBEYXkgYm91bmRhcnkgaGFpcmxpbmVzIGF0IGhvdXJzIDI0IGFuZCA0OC4gKi9cXG4ucmliYm9uLWhhaXJsaW5lIHtcXG4gIHN0cm9rZTogdmFyKC0tcnVsZSk7XFxuICBzdHJva2Utd2lkdGg6IDE7XFxufVxcblxcbi5yaWJib24tdGljayB7XFxuICBmaWxsOiB2YXIoLS1tdXRlZCk7XFxuICBmb250LWZhbWlseTogdmFyKC0tbW9ubyk7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbn1cXG5cXG4ucmliYm9uLW5vd2xpbmUge1xcbiAgc3Ryb2tlOiB2YXIoLS1tdXRlZCk7XFxuICBzdHJva2Utd2lkdGg6IDE7XFxuICBzdHJva2UtZGFzaGFycmF5OiAyIDM7XFxuICBvcGFjaXR5OiAwLjc7XFxufVxcblxcbi5yaWJib24tZG90IHtcXG4gIHN0cm9rZTogdmFyKC0tZ3JvdW5kKTtcXG4gIHN0cm9rZS13aWR0aDogMjtcXG59XFxuXFxuLyogUmVhZG91dCBiZW5lYXRoIHRoZSBjdXJ2ZS4gKi9cXG4jcmVhZG91dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDRweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2xvY2F0aW9uTmFtZSB7XFxuICBmb250LWZhbWlseTogdmFyKC0tbW9ubyk7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XFxufVxcblxcbi8qIFNhdmVkLWxvY2F0aW9uIG5hdmlnYXRpb246IHByZXYvbmV4dCBjaGV2cm9ucyBmbGFua2luZyB0aGUgZG90IHJvdy4gVGhlIHdob2xlXFxuICAgcm93IGlzIGhpZGRlbiBhdCBhIGNvdW50IG9mIG9uZSAoYSBzaW5nbGUgbG9jYXRpb24gbmVlZHMgbm8gYWZmb3JkYW5jZSk7IHRoZVxcbiAgIGFycm93cyBhcmUgZGVza3RvcC1vbmx5IGFuZCBkcm9wIG91dCBhdCDiiaQ0ODBweCB3aGVyZSBzd2lwZSB0YWtlcyBvdmVyLiAqL1xcbi5uYXZSb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIG1hcmdpbjogNHB4IDAgMnB4O1xcbn1cXG5cXG4ubmF2Um93LmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uYXJyb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmFycm93OmhvdmVyIHtcXG4gIGNvbG9yOiAjRUFFRUYyO1xcbn1cXG5cXG4uYXJyb3cgc3ZnIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDE0cHg7XFxufVxcblxcbi8qIFNhdmVkLWxvY2F0aW9uIGRvdHM6IG9uZSBwZXIgc2F2ZWQgbG9jYXRpb24sIHRoZSBhY3RpdmUgb25lIGZpbGxlZC4gKi9cXG4jZG90Um93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDhweDtcXG59XFxuXFxuLmRvdCB7XFxuICB3aWR0aDogOHB4O1xcbiAgaGVpZ2h0OiA4cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kOiAjMkUzQjQ1O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XFxufVxcblxcbi5kb3QuYWN0aXZlIHtcXG4gIGJhY2tncm91bmQ6ICNFQUVFRjI7XFxufVxcblxcbi8qIFJvYm90byBMaWdodCA0MHB4IGZvciB0aGUgcmVhZGluZy4gKi9cXG4jY3VycmVudFRlbXAge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE7XFxufVxcblxcbiNjdXJyZW50Q29uZGl0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcXG59XFxuXFxuLyogRm91ci11cCBzdGF0IHJvdzogdGV4dCBsYWJlbHMsIG5vIGljb25zLiAqL1xcbiNzdGF0Um93IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgZ2FwOiAxMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tdG9wOiAxNHB4O1xcbn1cXG5cXG4uc3RhdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDRweDtcXG4gIHBhZGRpbmc6IDEycHggNnB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcnVsZSk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbi5zdGF0LWxhYmVsIHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tb25vKTtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xcbn1cXG5cXG4uc3RhdC12YWx1ZSB7XFxuICBmb250LXNpemU6IDE3cHg7XFxuICBjb2xvcjogdmFyKC0tdGV4dCk7XFxufVxcblxcbi8qIFNlYXJjaCBmb3JtLiAqL1xcbiNzZWFyY2hGb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLyogSG9sZHMgdGhlIGlucHV0IGFuZCBpdHMgYXV0b2NvbXBsZXRlIGRyb3Bkb3duOyBwb3NpdGlvbjogcmVsYXRpdmUgYW5jaG9yc1xcbiAgICNzdWdnZXN0aW9ucyBiZW5lYXRoIHRoZSBpbnB1dC4gZmxleDogMSBzbyB0aGUgcGFpciBmaWxscyB0aGUgcm93IHRoZSB3YXkgdGhlXFxuICAgYmFyZSBpbnB1dCB1c2VkIHRvLiAqL1xcbiNzZWFyY2hJbnB1dFdyYXAge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZmxleDogMTtcXG4gIG1pbi13aWR0aDogMDtcXG59XFxuXFxuI3NlYXJjaElucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTJweCAxNHB4O1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1vbm8pO1xcbiAgZm9udC1zaXplOiAxNnB4OyAvKiAxNnB4IHNvIGlPUyBTYWZhcmkgZG9lc24ndCBhdXRvLXpvb20gdGhlIGlucHV0IG9uIGZvY3VzICovXFxuICBjb2xvcjogdmFyKC0tdGV4dCk7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXJ1bGUpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4jc2VhcmNoSW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XFxufVxcblxcbiNzZWFyY2hJbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1tdXRlZCk7XFxufVxcblxcbi8qIFdoaWxlIHRoZSBkcm9wZG93biBpcyBvcGVuIHRoZSBpbnB1dCdzIGJvdHRvbSBjb3JuZXJzIHNxdWFyZSBvZmYgYW5kIGl0c1xcbiAgIGJvdHRvbSBlZGdlIGRyb3BzIG91dCwgc28gaXQgcmVhZHMgYXMgb25lIGF0dGFjaGVkIHN1cmZhY2Ugd2l0aCAjc3VnZ2VzdGlvbnMuICovXFxuI3NlYXJjaEZvcm0uc3VnZ2VzdGluZyAjc2VhcmNoSW5wdXQge1xcbiAgYm9yZGVyLXJhZGl1czogOHB4IDhweCAwIDA7XFxuICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyogRmFpbGVkIGxvb2t1cDogcmVkZGVuZWQgYm9yZGVyLCBjdXJyZW50IHJpYmJvbiBsZWZ0IGluIHBsYWNlLiAqL1xcbiNzZWFyY2hGb3JtLmludmFsaWQgI3NlYXJjaElucHV0IHtcXG4gIGJvcmRlci1jb2xvcjogI0MyNDUyRDtcXG59XFxuXFxuLyogQXV0b2NvbXBsZXRlIGRyb3Bkb3duOiBoYW5ncyBvZmYgdGhlIGJvdHRvbSBvZiB0aGUgaW5wdXQsIG1hdGNoaW5nIGl0cyB3aWR0aFxcbiAgIGFuZCBjb250aW51aW5nIGl0cyBmb2N1c2VkIGJvcmRlciBpbnRvIGEgYm90dG9tLXJvdW5kZWQgcGFuZWwuICovXFxuI3N1Z2dlc3Rpb25zIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTAwJTtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHotaW5kZXg6IDEwO1xcbiAgbWF4LWhlaWdodDogMjQwcHg7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JvdW5kKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW11dGVkKTtcXG4gIGJvcmRlci10b3A6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgOHB4IDhweDtcXG59XFxuXFxuI3N1Z2dlc3Rpb25zLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc3VnZ2VzdGlvbi1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxuICBnYXA6IDhweDtcXG4gIHBhZGRpbmc6IDEwcHggMTRweDtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tb25vKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnN1Z2dlc3Rpb24taXRlbTpob3ZlcixcXG4uc3VnZ2VzdGlvbi1pdGVtLnNlbGVjdGVkIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXJ1bGUpO1xcbn1cXG5cXG4uc3VnZ2VzdGlvbi1jaXR5IHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcXG59XFxuXFxuLnN1Z2dlc3Rpb24tY291bnRyeSB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xcbn1cXG5cXG4jc2VhcmNoQnV0dG9uIHtcXG4gIHBhZGRpbmc6IDEycHggMjBweDtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tb25vKTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICBjb2xvcjogdmFyKC0tZ3JvdW5kKTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXRleHQpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jc2VhcmNoQnV0dG9uOmhvdmVyIHtcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjkyKTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxuICAjYXBwIHtcXG4gICAgZ2FwOiAyMnB4O1xcbiAgICBwYWRkaW5nOiAyNHB4IDE2cHg7XFxuICB9XFxuXFxuICAvKiBNb2JpbGUgbmF2aWdhdGVzIGJ5IHN3aXBlOyBkcm9wIHRoZSBhcnJvd3MgYnV0IGtlZXAgdGhlIGRvdHMuICovXFxuICAuYXJyb3cge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgI3N0YXRSb3cge1xcbiAgICBnYXA6IDhweDtcXG4gIH1cXG5cXG4gIC5zdGF0IHtcXG4gICAgcGFkZGluZzogMTBweCA0cHg7XFxuICB9XFxuXFxuICAuc3RhdC12YWx1ZSB7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBmYXZvdXJpdGVzLmpzIOKAlCBzYXZlZCBsb2NhdGlvbnMgd2l0aCBzd2lwZS10by1yb3RhdGUuXG4vL1xuLy8gVGhlIHNlYXJjaCBmb3JtIGlzIHRoZSBhZGQgcGF0aDogYSBzdWNjZXNzZnVsIGxvb2t1cCBhcHBlbmRzIHRoZSBxdWVyeSB0byBhXG4vLyBwZXJzaXN0ZWQgbGlzdCBhbmQgc3dpdGNoZXMgdG8gaXQ7IGEgZmFpbGVkIG9uZSBsZWF2ZXMgdGhlIGxpc3QgdW50b3VjaGVkXG4vLyAobG9naWMuanMncyBpbnZhbGlkSW5wdXQoKSBoYXMgYWxyZWFkeSByZWRkZW5lZCB0aGUgaW5wdXQpLiBBIHJvdyBvZiBkb3RzXG4vLyB1bmRlciB0aGUgbG9jYXRpb24gbmFtZSBzaG93cyBob3cgbWFueSBsb2NhdGlvbnMgYXJlIHNhdmVkIGFuZCB3aGljaCBpc1xuLy8gY3VycmVudC4gQSBob3Jpem9udGFsIHN3aXBlIGFueXdoZXJlIG9uIHRoZSBzY3JlZW4gcm90YXRlcyB0aHJvdWdoIHRoZW1cbi8vICh3cmFwcGluZyBhdCBib3RoIGVuZHMpOyB0YXBwaW5nIGEgZG90IGp1bXBzIHRvIGl0OyBsb25nLXByZXNzaW5nIGEgZG90XG4vLyByZW1vdmVzIGl0IGFmdGVyIGEgbmFtaW5nIGNvbmZpcm1hdGlvbi5cbi8vXG4vLyBTdGF0ZSBwZXJzaXN0cyB0byBsb2NhbFN0b3JhZ2UgdW5kZXIgYSBgd2VhdGhlcmFwcF9gIGtleSwgbWF0Y2hpbmcgdGhlXG4vLyBjb252ZW50aW9uIHVzZWQgYWNyb3NzIHRoZSBvdGhlciByZXBvcyDigJQgbm8gSW5kZXhlZERCLCBubyBjb29raWVzLCBubyBiYWNrZW5kLFxuLy8gbm8gbmV3IGRlcGVuZGVuY2llcy4gRmV0Y2ggc3RyYXRlZ3kgaXMgbGF6eSAoZmV0Y2ggb24gYXJyaXZhbCk6IGEgc3dpcGUgbGVhdmVzXG4vLyB0aGUgcHJldmlvdXMgcmliYm9uIG9uIHNjcmVlbiB1bnRpbCB0aGUgbmV3IGZvcmVjYXN0IHJlc29sdmVzLCByZXVzaW5nIHRoZVxuLy8gc2FtZSBrZWVwLWN1cnJlbnQtcmliYm9uIGJlaGF2aW91ciBhIHNlYXJjaCBhbHJlYWR5IGhhcywgc28gYSBzd2lwZSBuZXZlclxuLy8gbGFuZHMgb24gYSBzcGlubmVyICh0aGVyZSBpcyBubyBzcGlubmVyKSBvciBhIGJsYW5rIHNjcmVlbi5cbi8vXG4vLyBFdmVyeSBsaXN0ZW5lciBoZXJlIGlzIHdpcmVkIGV4YWN0bHkgb25jZSwgZnJvbSBpbml0RmF2b3VyaXRlcygpIGF0IGJvb3RzdHJhcFxuLy8g4oCUIG5ldmVyIGZyb20gdGhlIHJlbmRlciBwYXRoIOKAlCBzbyBub3RoaW5nIG11bHRpcGxpZXMgYWNyb3NzIGZldGNoZXMuXG5cbmltcG9ydCB7IGZvcmVjYXN0TG9naWMgfSBmcm9tICcuL2xvZ2ljLmpzJztcblxuY29uc3QgS0VZID0gJ3dlYXRoZXJhcHBfc2F2ZWRMb2NhdGlvbnMnO1xuY29uc3QgREVGQVVMVF9RVUVSWSA9ICc5ODA1Mic7XG5jb25zdCBTV0lQRV9USFJFU0hPTEQgPSA1MDsgLy8gcHggb2YgaG9yaXpvbnRhbCB0cmF2ZWwgdG8gY29tbWl0IGEgcm90YXRpb25cbmNvbnN0IExPTkdQUkVTU19NUyA9IDUwMDsgICAvLyBob2xkIHRvIHJlbW92ZSBhIGRvdFxuXG4vLyBTYXZlZCBsb2NhdGlvbiBxdWVyeSBzdHJpbmdzLCBpbiBvcmRlci4gY3VycmVudEluZGV4IHBvaW50cyBhdCB0aGUgYWN0aXZlIG9uZS5cbmxldCBsb2NhdGlvbnMgPSBbXTtcbmxldCBjdXJyZW50SW5kZXggPSAwO1xuXG5sZXQgZG90Um93OyAvLyAjZG90Um93LCBjYWNoZWQgb25jZSBieSBpbml0RmF2b3VyaXRlcygpXG5sZXQgbmF2Um93OyAvLyAubmF2Um93IHdyYXBwaW5nIHRoZSBkb3RzIGFuZCB0aGUgcHJldi9uZXh0IGFycm93c1xuXG4vLyBTd2lwZSB0cmFja2luZy5cbmxldCB0b3VjaFN0YXJ0WCA9IG51bGw7XG5sZXQgdG91Y2hTdGFydFkgPSBudWxsO1xubGV0IHN3aXBlQWN0aXZlID0gZmFsc2U7XG5cbmZ1bmN0aW9uIGxvYWQoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmF3ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oS0VZKTtcbiAgICBpZiAocmF3KSB7XG4gICAgICBjb25zdCBwYXJzZWQgPSBKU09OLnBhcnNlKHJhdyk7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShwYXJzZWQpKSB7XG4gICAgICAgIGxvY2F0aW9ucyA9IHBhcnNlZC5maWx0ZXIoKHEpID0+IHR5cGVvZiBxID09PSAnc3RyaW5nJyAmJiBxLnRyaW0oKS5sZW5ndGgpO1xuICAgICAgfVxuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIGxvY2F0aW9ucyA9IFtdO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNhdmUoKSB7XG4gIHRyeSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oS0VZLCBKU09OLnN0cmluZ2lmeShsb2NhdGlvbnMpKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIFN0b3JhZ2UgZGlzYWJsZWQvZnVsbCDigJQgdGhlIGluLW1lbW9yeSBsaXN0IHN0aWxsIHdvcmtzIGZvciB0aGlzIHNlc3Npb24uXG4gIH1cbn1cblxuZnVuY3Rpb24gY2xlYXIobm9kZSkge1xuICB3aGlsZSAobm9kZS5maXJzdENoaWxkKSB7IG5vZGUucmVtb3ZlQ2hpbGQobm9kZS5maXJzdENoaWxkKTsgfVxufVxuXG4vLyBGZXRjaCB0aGUgYWN0aXZlIGxvY2F0aW9uLCBvciB0aGUgaGFyZCBkZWZhdWx0IHdoZW4gdGhlIGxpc3QgaXMgZW1wdHkuIExhenk6XG4vLyB0aGUgcmVuZGVyIHBhdGgga2VlcHMgdGhlIHByZXZpb3VzIHJpYmJvbiB1bnRpbCB0aGlzIHJlc29sdmVzLlxuZnVuY3Rpb24gc2hvd0N1cnJlbnQoKSB7XG4gIGlmIChsb2NhdGlvbnMubGVuZ3RoKSB7XG4gICAgZm9yZWNhc3RMb2dpYy5mdXR1cmVBUElDYWxscyhsb2NhdGlvbnNbY3VycmVudEluZGV4XSk7XG4gIH0gZWxzZSB7XG4gICAgZm9yZWNhc3RMb2dpYy5mdXR1cmVBUElDYWxscyhERUZBVUxUX1FVRVJZKTtcbiAgfVxufVxuXG4vLyBSZWRyYXcgdGhlIGRvdCByb3cuIEhpZGRlbiBhdCBhIGNvdW50IG9mIG9uZSAoYSBzaW5nbGUgbG9jYXRpb24gbmVlZHMgbm9cbi8vIGFmZm9yZGFuY2UpIGFuZCB3aGVuIGVtcHR5ICh0aGUgZGVmYXVsdCBmYWxsYmFjayBpcyBub3QgYSBzYXZlZCBsb2NhdGlvbikuXG5mdW5jdGlvbiByZW5kZXJEb3RzKCkge1xuICBpZiAoIWRvdFJvdykgeyByZXR1cm47IH1cbiAgY2xlYXIoZG90Um93KTtcblxuICAvLyBHYXRlIHRoZSB3aG9sZSAubmF2Um93IChkb3RzICsgYXJyb3dzKSB0b2dldGhlciwgc28gdGhlIGRlc2t0b3AgYXJyb3dzIHNoYXJlXG4gIC8vIHRoZSBkb3RzJyB2aXNpYmlsaXR5IHJ1bGUgYW5kIG5ldmVyIGRhbmdsZSBiZXNpZGUgYW4gZW1wdHkgcm93LlxuICBjb25zdCBnYXRlID0gbmF2Um93IHx8IGRvdFJvdztcbiAgY29uc3QgbiA9IGxvY2F0aW9ucy5sZW5ndGg7XG4gIGlmIChuIDw9IDEpIHtcbiAgICBnYXRlLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIHJldHVybjtcbiAgfVxuICBnYXRlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgY29uc3QgZG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZG90LmNsYXNzTmFtZSA9ICdkb3QnICsgKGkgPT09IGN1cnJlbnRJbmRleCA/ICcgYWN0aXZlJyA6ICcnKTtcbiAgICBkb3Quc2V0QXR0cmlidXRlKCdyb2xlJywgJ2J1dHRvbicpO1xuICAgIGRvdC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCBsb2NhdGlvbnNbaV0pO1xuICAgIHdpcmVEb3QoZG90LCBpKTtcbiAgICBkb3RSb3cuYXBwZW5kQ2hpbGQoZG90KTtcbiAgfVxufVxuXG4vLyBUYXAgYSBkb3QgdG8ganVtcCB0byBpdDsgbG9uZy1wcmVzcyAofjUwMG1zKSB0byByZW1vdmUgaXQgYWZ0ZXIgYVxuLy8gY29uZmlybWF0aW9uIHRoYXQgbmFtZXMgdGhlIGxvY2F0aW9uLlxuZnVuY3Rpb24gd2lyZURvdChkb3QsIGkpIHtcbiAgbGV0IHRpbWVyID0gbnVsbDtcbiAgbGV0IGxvbmdGaXJlZCA9IGZhbHNlO1xuXG4gIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICBpZiAodGltZXIpIHsgY2xlYXJUaW1lb3V0KHRpbWVyKTsgdGltZXIgPSBudWxsOyB9XG4gIH07XG5cbiAgZG90LmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xuICAgIC8vIE5vIHByZXZlbnREZWZhdWx0IGhlcmU6IGl0IHdvdWxkIHN1cHByZXNzIHRoZSBmb2xsb3ctdXAgY2xpY2sgYW5kIGJyZWFrXG4gICAgLy8gdGFwLXRvLXNlbGVjdC4gVGhlIGxvbmctcHJlc3MgYnJhbmNoIGlzIGRpc2FtYmlndWF0ZWQgYnkgdGhlIGxvbmdGaXJlZFxuICAgIC8vIGZsYWcgaW5zdGVhZCwgYW5kIHRoZSBuYXRpdmUgbG9uZy1wcmVzcyBtZW51IGlzIHN0b3BwZWQgdmlhIGNvbnRleHRtZW51LlxuICAgIGxvbmdGaXJlZCA9IGZhbHNlO1xuICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBsb25nRmlyZWQgPSB0cnVlO1xuICAgICAgdGltZXIgPSBudWxsO1xuICAgICAgY29uZmlybVJlbW92ZShpKTtcbiAgICB9LCBMT05HUFJFU1NfTVMpO1xuICB9KTtcbiAgZG90LmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJ1cCcsIGNhbmNlbCk7XG4gIGRvdC5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVybGVhdmUnLCBjYW5jZWwpO1xuICBkb3QuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmNhbmNlbCcsIGNhbmNlbCk7XG4gIGRvdC5hZGRFdmVudExpc3RlbmVyKCdjb250ZXh0bWVudScsIChlKSA9PiBlLnByZXZlbnREZWZhdWx0KCkpO1xuICBkb3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKGxvbmdGaXJlZCkgeyBsb25nRmlyZWQgPSBmYWxzZTsgcmV0dXJuOyB9IC8vIHRoZSBsb25nLXByZXNzIGFscmVhZHkgYWN0ZWRcbiAgICBzZWxlY3RJbmRleChpKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNvbmZpcm1SZW1vdmUoaSkge1xuICBpZiAoaSA8IDAgfHwgaSA+PSBsb2NhdGlvbnMubGVuZ3RoKSB7IHJldHVybjsgfVxuICBpZiAod2luZG93LmNvbmZpcm0oJ1JlbW92ZSAnICsgbG9jYXRpb25zW2ldICsgJz8nKSkge1xuICAgIHJlbW92ZUxvY2F0aW9uKGkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNlbGVjdEluZGV4KGkpIHtcbiAgaWYgKGkgPCAwIHx8IGkgPj0gbG9jYXRpb25zLmxlbmd0aCB8fCBpID09PSBjdXJyZW50SW5kZXgpIHsgcmV0dXJuOyB9XG4gIGN1cnJlbnRJbmRleCA9IGk7XG4gIHJlbmRlckRvdHMoKTtcbiAgc2hvd0N1cnJlbnQoKTtcbn1cblxuLy8gUm90YXRlIHRocm91Z2ggdGhlIHNhdmVkIGxpc3Qgd2l0aCB3cmFwLiBOby1vcCBiZWxvdyB0d28gbG9jYXRpb25zLlxuZnVuY3Rpb24gcm90YXRlKGRpcikge1xuICBjb25zdCBuID0gbG9jYXRpb25zLmxlbmd0aDtcbiAgaWYgKG4gPD0gMSkgeyByZXR1cm47IH1cbiAgY3VycmVudEluZGV4ID0gKGN1cnJlbnRJbmRleCArIGRpciArIG4pICUgbjtcbiAgcmVuZGVyRG90cygpO1xuICBzaG93Q3VycmVudCgpO1xufVxuXG4vLyBSZW1vdmUgYSBsb2NhdGlvbiwga2VlcGluZyBhIGNvaGVyZW50IGFjdGl2ZSBzZWxlY3Rpb246IHJlbW92aW5nIHRoZSBhY3RpdmVcbi8vIG9uZSBtb3ZlcyB0byBhIG5laWdoYm91ciByYXRoZXIgdGhhbiBsZWF2aW5nIGFuIGVtcHR5IHZpZXc7IGVtcHR5aW5nIHRoZSBsaXN0XG4vLyBmYWxscyBiYWNrIHRvIHRoZSBkZWZhdWx0LlxuZnVuY3Rpb24gcmVtb3ZlTG9jYXRpb24oaSkge1xuICBpZiAoaSA8IDAgfHwgaSA+PSBsb2NhdGlvbnMubGVuZ3RoKSB7IHJldHVybjsgfVxuICBjb25zdCB3YXNBY3RpdmUgPSAoaSA9PT0gY3VycmVudEluZGV4KTtcblxuICBsb2NhdGlvbnMuc3BsaWNlKGksIDEpO1xuICBzYXZlKCk7XG5cbiAgaWYgKGxvY2F0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICBjdXJyZW50SW5kZXggPSAwO1xuICAgIHJlbmRlckRvdHMoKTtcbiAgICBzaG93Q3VycmVudCgpOyAvLyBmYWxscyBiYWNrIHRvIERFRkFVTFRfUVVFUllcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaSA8IGN1cnJlbnRJbmRleCkge1xuICAgIGN1cnJlbnRJbmRleC0tO1xuICB9IGVsc2UgaWYgKGkgPT09IGN1cnJlbnRJbmRleCAmJiBjdXJyZW50SW5kZXggPj0gbG9jYXRpb25zLmxlbmd0aCkge1xuICAgIGN1cnJlbnRJbmRleCA9IGxvY2F0aW9ucy5sZW5ndGggLSAxO1xuICB9XG5cbiAgcmVuZGVyRG90cygpO1xuICBpZiAod2FzQWN0aXZlKSB7IHNob3dDdXJyZW50KCk7IH1cbn1cblxuZnVuY3Rpb24gb25Ub3VjaFN0YXJ0KGUpIHtcbiAgaWYgKGUudG91Y2hlcy5sZW5ndGggIT09IDEpIHsgc3dpcGVBY3RpdmUgPSBmYWxzZTsgcmV0dXJuOyB9XG4gIC8vIExlYXZlIHRoZSBzZWFyY2ggZmllbGQncyBvd24gdG91Y2ggaGFuZGxpbmcgKGN1cnNvciBwbGFjZW1lbnQpIGFsb25lLlxuICBpZiAoZS50YXJnZXQgJiYgZS50YXJnZXQuY2xvc2VzdCAmJiBlLnRhcmdldC5jbG9zZXN0KCcjc2VhcmNoRm9ybScpKSB7XG4gICAgc3dpcGVBY3RpdmUgPSBmYWxzZTtcbiAgICByZXR1cm47XG4gIH1cbiAgdG91Y2hTdGFydFggPSBlLnRvdWNoZXNbMF0uY2xpZW50WDtcbiAgdG91Y2hTdGFydFkgPSBlLnRvdWNoZXNbMF0uY2xpZW50WTtcbiAgc3dpcGVBY3RpdmUgPSB0cnVlO1xufVxuXG5mdW5jdGlvbiBvblRvdWNoRW5kKGUpIHtcbiAgaWYgKCFzd2lwZUFjdGl2ZSkgeyByZXR1cm47IH1cbiAgc3dpcGVBY3RpdmUgPSBmYWxzZTtcblxuICBjb25zdCB0ID0gZS5jaGFuZ2VkVG91Y2hlcyAmJiBlLmNoYW5nZWRUb3VjaGVzWzBdO1xuICBpZiAoIXQpIHsgcmV0dXJuOyB9XG5cbiAgY29uc3QgZHggPSB0LmNsaWVudFggLSB0b3VjaFN0YXJ0WDtcbiAgY29uc3QgZHkgPSB0LmNsaWVudFkgLSB0b3VjaFN0YXJ0WTtcblxuICAvLyBDb21taXQgb25seSBvbiBhIGRlY2lzaXZlbHkgaG9yaXpvbnRhbCBnZXN0dXJlLCBzbyBhIHZlcnRpY2FsIHBhZ2Ugc2Nyb2xsXG4gIC8vICh8ZHl8ID49IHxkeHwpIGlzIG5ldmVyIGhpamFja2VkLlxuICBpZiAoTWF0aC5hYnMoZHgpID4gU1dJUEVfVEhSRVNIT0xEICYmIE1hdGguYWJzKGR4KSA+IE1hdGguYWJzKGR5KSkge1xuICAgIHJvdGF0ZShkeCA8IDAgPyAxIDogLTEpOyAvLyBzd2lwZSBsZWZ0IC0+IG5leHQsIHN3aXBlIHJpZ2h0IC0+IHByZXZpb3VzXG4gIH1cbn1cblxuZnVuY3Rpb24gd2lyZUdlc3R1cmVzKCkge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgb25Ub3VjaFN0YXJ0LCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgb25Ub3VjaEVuZCwgeyBwYXNzaXZlOiB0cnVlIH0pO1xufVxuXG4vLyBEZXNrdG9wIHByZXYvbmV4dCBhcnJvd3MgZHJpdmUgdGhlIHNhbWUgcm90YXRlKCkgdGhlIHN3aXBlIGdlc3R1cmUgZG9lcywgc29cbi8vIGJvdGggcGF0aHMgc2hhcmUgb25lIGNvdW50ZXIuIFdpcmVkIG9uY2UgZnJvbSBpbml0RmF2b3VyaXRlcygpLlxuZnVuY3Rpb24gd2lyZUFycm93cygpIHtcbiAgY29uc3QgcHJldiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZQcmV2Jyk7XG4gIGNvbnN0IG5leHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2TmV4dCcpO1xuICBpZiAocHJldikgeyBwcmV2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcm90YXRlKC0xKSk7IH1cbiAgaWYgKG5leHQpIHsgbmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHJvdGF0ZSgxKSk7IH1cbn1cblxuLy8gQXBwZW5kIGEgc3VjY2Vzc2Z1bGx5IGxvb2tlZC11cCBsb2NhdGlvbiBhbmQgc3dpdGNoIHRvIGl0LiBDYWxsZWQgZnJvbSB0aGVcbi8vIHNlYXJjaCBzdWJtaXQgaGFuZGxlciBBRlRFUiB0aGUgZmV0Y2ggcmVzb2x2ZXMsIHNvIHRoZSBmb3JlY2FzdCBpcyBhbHJlYWR5XG4vLyByZW5kZXJlZCDigJQgdGhpcyBvbmx5IHVwZGF0ZXMgdGhlIHNhdmVkIGxpc3QgYW5kIHRoZSBkb3RzLCBuZXZlciByZS1mZXRjaGVzLlxuLy8gQSBkdXBsaWNhdGUgcXVlcnkgc3dpdGNoZXMgdG8gdGhlIGV4aXN0aW5nIGVudHJ5IGluc3RlYWQgb2YgYWRkaW5nIGEgc2Vjb25kLlxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2F0aW9uKHF1ZXJ5KSB7XG4gIGNvbnN0IHEgPSBTdHJpbmcocXVlcnkpLnRyaW0oKTtcbiAgaWYgKCFxKSB7IHJldHVybjsgfVxuXG4gIGNvbnN0IGV4aXN0aW5nID0gbG9jYXRpb25zLmluZGV4T2YocSk7XG4gIGlmIChleGlzdGluZyAhPT0gLTEpIHtcbiAgICBjdXJyZW50SW5kZXggPSBleGlzdGluZztcbiAgfSBlbHNlIHtcbiAgICBsb2NhdGlvbnMucHVzaChxKTtcbiAgICBjdXJyZW50SW5kZXggPSBsb2NhdGlvbnMubGVuZ3RoIC0gMTtcbiAgICBzYXZlKCk7XG4gIH1cbiAgcmVuZGVyRG90cygpO1xufVxuXG4vLyBCb290c3RyYXA6IGxvYWQgdGhlIHNhdmVkIGxpc3QsIHdpcmUgdGhlIHN3aXBlIGdlc3R1cmVzIG9uY2UsIGRyYXcgdGhlIGRvdHMsXG4vLyBhbmQgZmlyZSB0aGUgc2luZ2xlIGluaXRpYWwgZmV0Y2ggKHRoZSBmaXJzdCBzYXZlZCBsb2NhdGlvbiwgb3IgdGhlIGRlZmF1bHRcbi8vIHdoZW4gbm9uZSBhcmUgc2F2ZWQpLiBpbmRleC5qcyBjYWxscyB0aGlzIG9uY2UsIGFmdGVyIHRoZSBET00gaXMgYXBwZW5kZWQuXG5leHBvcnQgZnVuY3Rpb24gaW5pdEZhdm91cml0ZXMoKSB7XG4gIGxvYWQoKTtcbiAgZG90Um93ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RvdFJvdycpO1xuICBuYXZSb3cgPSBkb3RSb3cgPyBkb3RSb3cucGFyZW50RWxlbWVudCA6IG51bGw7XG4gIHdpcmVHZXN0dXJlcygpO1xuICB3aXJlQXJyb3dzKCk7XG4gIGN1cnJlbnRJbmRleCA9IDA7XG4gIHJlbmRlckRvdHMoKTtcbiAgc2hvd0N1cnJlbnQoKTtcbn1cbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgcmVuZGVyUmliYm9uLCBjdXJyZW50SG91ckluZGV4IH0gZnJvbSAnLi9yaWJib24uanMnO1xuaW1wb3J0IHsgZm9yZWNhc3RMb2dpYyB9IGZyb20gJy4vbG9naWMuanMnO1xuaW1wb3J0IHsgYWRkTG9jYXRpb24gfSBmcm9tICcuL2Zhdm91cml0ZXMuanMnO1xuXG4vLyBHdWFyZCBzbyB3aXJlRXZlbnRzKCkgb25seSBldmVyIHJlZ2lzdGVycyBvbmUgc2V0IG9mIGxpc3RlbmVycy4gVGhlIG9sZFxuLy8gY2hhbmdlV2VhdGhlckluZm8oKSByZS1yZWdpc3RlcmVkIG9uIGV2ZXJ5IGZldGNoLCBkb3VibGluZyB0aGUgaGFuZGxlciBjb3VudFxuLy8gcGVyIHNlYXJjaDsgdGhlIHJlbmRlciBwYXRoIChyZW5kZXJGb3JlY2FzdCkgYW5kIHRoZSB3aXJpbmcgcGF0aCAod2lyZUV2ZW50cylcbi8vIGFyZSBzcGxpdCBwcmVjaXNlbHkgc28gdGhhdCBjYW4gbmV2ZXIgaGFwcGVuIGFnYWluLlxubGV0IGV2ZW50c1dpcmVkID0gZmFsc2U7XG5cbi8vIERlYm91bmNlIHdpbmRvdyBmb3IgdGhlIGNpdHktc3VnZ2VzdGlvbiBsb29rdXAg4oCUIGxvbmcgZW5vdWdoIHRoYXQgYSBydW4gb2Zcbi8vIGtleXN0cm9rZXMgZmlyZXMgb25lIHJlcXVlc3QsIHNob3J0IGVub3VnaCB0byBmZWVsIGxpdmUuXG5jb25zdCBTVUdHRVNUX0RFQk9VTkNFX01TID0gMzAwO1xuXG4vLyBDYWNoZWQgRE9NIHJlZmVyZW5jZXMsIHBvcHVsYXRlZCBvbmNlIGJ5IGNhY2hlRG9tKCkgYWZ0ZXIgaW5kZXguanMgaGFzIGJ1aWx0XG4vLyBhbmQgYXBwZW5kZWQgdGhlIERPTS5cbmxldCBzZWFyY2hGb3JtLCBzZWFyY2hJbnB1dCwgc3VnZ2VzdGlvbnMsIGxvY2F0aW9uTmFtZSwgY3VycmVudFRlbXAsXG4gIGN1cnJlbnRDb25kaXRpb24sIGZlZWxzVmFsLCBodW1pZGl0eVZhbCwgcmFpblZhbCwgd2luZFZhbDtcblxuLy8gQXV0b2NvbXBsZXRlIHN0YXRlLiBjdXJyZW50U3VnZ2VzdGlvbnMgaG9sZHMgdGhlIHJlc3VsdHMgYmFja2luZyB0aGUgdmlzaWJsZVxuLy8gZHJvcGRvd247IHNlbGVjdGVkSW5kZXggaXMgdGhlIGtleWJvYXJkLWhpZ2hsaWdodGVkIHJvdyAoLTEgPSBub25lKS4gcmVxdWVzdFNlcVxuLy8gZGlzY2FyZHMgc3RhbGUgYXN5bmMgcmVzdWx0cyDigJQgb25seSB0aGUgbGF0ZXN0IGxvb2t1cCByZW5kZXJzIOKAlCBhbmQgaXMgYnVtcGVkXG4vLyBvbiBjbG9zZSBzbyBhbiBpbi1mbGlnaHQgcmVxdWVzdCBjYW4ndCByZW9wZW4gdGhlIGRyb3Bkb3duIGFmdGVyIHNlbGVjdGlvbi5cbmxldCBjdXJyZW50U3VnZ2VzdGlvbnMgPSBbXTtcbmxldCBzZWxlY3RlZEluZGV4ID0gLTE7XG5sZXQgc3VnZ2VzdERlYm91bmNlID0gbnVsbDtcbmxldCByZXF1ZXN0U2VxID0gMDtcblxuZnVuY3Rpb24gY2FjaGVEb20oKSB7XG4gIGlmIChsb2NhdGlvbk5hbWUpIHsgcmV0dXJuOyB9IC8vIGFscmVhZHkgY2FjaGVkXG5cbiAgc2VhcmNoRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hGb3JtJyk7XG4gIHNlYXJjaElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaElucHV0Jyk7XG4gIHN1Z2dlc3Rpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Z2dlc3Rpb25zJyk7XG4gIGxvY2F0aW9uTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2NhdGlvbk5hbWUnKTtcbiAgY3VycmVudFRlbXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudFRlbXAnKTtcbiAgY3VycmVudENvbmRpdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50Q29uZGl0aW9uJyk7XG4gIGZlZWxzVmFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZlZWxzVmFsJyk7XG4gIGh1bWlkaXR5VmFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2h1bWlkaXR5VmFsJyk7XG4gIHJhaW5WYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFpblZhbCcpO1xuICB3aW5kVmFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpbmRWYWwnKTtcbn1cblxuLy8gUHVyZSByZW5kZXIgcGF0aC4gZnVsZmlsbFByb21pc2UoKSBpbiBsb2dpYy5qcyBjYWxscyB0aGlzIG9uIGV2ZXJ5IHJlc29sdmVkXG4vLyByZXNwb25zZTsgaXQgcmVnaXN0ZXJzIE5PIGxpc3RlbmVycywgc28gaXQgaXMgc2FmZSB0byBjYWxsIHJlcGVhdGVkbHkuIERyYXdzXG4vLyB0aGUgcmliYm9uIGFuZCBmaWxscyB0aGUgcmVhZG91dCBmcm9tIHRoZSBzYW1lIFwibm93XCIgaW5kZXgsIHNvIHRoZSBtYXJrZXIgb25cbi8vIHRoZSBjdXJ2ZSBhbmQgdGhlIHN0YXQgcm93IGNhbiBuZXZlciBkaXNhZ3JlZSBhYm91dCB0aGUgY3VycmVudCBob3VyLlxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckZvcmVjYXN0KGZvcmVjYXN0KSB7XG4gIGNhY2hlRG9tKCk7XG5cbiAgcmVuZGVyUmliYm9uKGZvcmVjYXN0KTtcblxuICBjb25zdCBpID0gY3VycmVudEhvdXJJbmRleChmb3JlY2FzdCk7XG4gIGNvbnN0IG5vdyA9IGZvcmVjYXN0LmhvdXJzW2ldO1xuICBpZiAoIW5vdykgeyByZXR1cm47IH1cblxuICBsb2NhdGlvbk5hbWUudGV4dENvbnRlbnQgPSBmb3JlY2FzdC5sb2NhdGlvbi5uYW1lO1xuICBjdXJyZW50VGVtcC50ZXh0Q29udGVudCA9IE1hdGgucm91bmQobm93LnRlbXApICsgJ8KwJztcbiAgY3VycmVudENvbmRpdGlvbi50ZXh0Q29udGVudCA9IG5vdy5jb25kaXRpb247XG5cbiAgZmVlbHNWYWwudGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKG5vdy5mZWVsc0xpa2UpICsgJ8KwJztcbiAgaHVtaWRpdHlWYWwudGV4dENvbnRlbnQgPSBub3cuaHVtaWRpdHkgKyAnJSc7XG4gIHJhaW5WYWwudGV4dENvbnRlbnQgPSBub3cucmFpbiArICclJztcbiAgd2luZFZhbC50ZXh0Q29udGVudCA9IE1hdGgucm91bmQobm93LndpbmQpICsgJyBrbS9oJztcbn1cblxuLy8gUmVnaXN0ZXJzIGxpc3RlbmVycyBFWEFDVExZIE9OQ0UgZm9yIHRoZSBsaWZlIG9mIHRoZSBwYWdlLiBpbmRleC5qcyBjYWxscyB0aGlzXG4vLyBhdCBib290c3RyYXAsIGFmdGVyIHRoZSBET00gaXMgYXBwZW5kZWQg4oCUIG5ldmVyIGZyb20gdGhlIHJlbmRlciBwYXRoIOKAlCBzbyBhXG4vLyBzZWFyY2ggZmlyZXMgZXhhY3RseSBvbmUgZmV0Y2ggYW5kIGV2ZXJ5IGVsZW1lbnQgY2FycmllcyBleGFjdGx5IG9uZSBsaXN0ZW5lci5cbmV4cG9ydCBmdW5jdGlvbiB3aXJlRXZlbnRzKCkge1xuICBpZiAoZXZlbnRzV2lyZWQpIHsgcmV0dXJuOyB9XG5cbiAgY2FjaGVEb20oKTtcbiAgZXZlbnRzV2lyZWQgPSB0cnVlO1xuXG4gIC8vIFRoZSBidXR0b24gaXMgYSByZWFsIHN1Ym1pdCBidXR0b24sIHNvIHRoaXMgY2F0Y2hlcyBib3RoIHRoZSBjbGljayBhbmQgdGhlXG4gIC8vIEVudGVyIGtleSBhcyBvbmUgc3VibWl0IGV2ZW50LiBwcmV2ZW50RGVmYXVsdCBzdG9wcyB0aGUgZm9ybSByZWxvYWRpbmcgdGhlXG4gIC8vIHBhZ2U7IGZ1dHVyZUFQSUNhbGxzIGRvZXMgdGhlIHNpbmdsZSBmZXRjaC4gVGhlIHNlYXJjaCBmb3JtIGlzIGFsc28gdGhlXG4gIC8vIGFkZCBwYXRoIGZvciBzYXZlZCBsb2NhdGlvbnM6IG9uIGEgc3VjY2Vzc2Z1bCBsb29rdXAgdGhlIHF1ZXJ5IGlzIGFwcGVuZGVkXG4gIC8vIHRvIHRoZSBzYXZlZCBsaXN0IGFuZCBiZWNvbWVzIGN1cnJlbnQ7IGEgZmFpbGVkIGxvb2t1cCByZXNvbHZlcyB0byBudWxsIGFuZFxuICAvLyBsZWF2ZXMgdGhlIGxpc3QgdW50b3VjaGVkIChpbnZhbGlkSW5wdXQgaGFzIGFscmVhZHkgcmVkZGVuZWQgdGhlIGlucHV0KS5cbiAgc2VhcmNoRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjbG9zZVN1Z2dlc3Rpb25zKCk7XG4gICAgY29uc3QgcXVlcnkgPSBzZWFyY2hJbnB1dC52YWx1ZTtcbiAgICBmb3JlY2FzdExvZ2ljLmZ1dHVyZUFQSUNhbGxzKHF1ZXJ5KS50aGVuKGZ1bmN0aW9uIChmb3JlY2FzdCkge1xuICAgICAgaWYgKGZvcmVjYXN0KSB7XG4gICAgICAgIGFkZExvY2F0aW9uKHF1ZXJ5KTtcbiAgICAgICAgc2VhcmNoSW5wdXQudmFsdWUgPSAnJztcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgd2lyZUF1dG9jb21wbGV0ZSgpO1xufVxuXG4vLyBXaXJlcyB0aGUgZGVib3VuY2VkIGNpdHktc3VnZ2VzdGlvbiBkcm9wZG93bi4gQ2FsbGVkIG9uY2UgZnJvbSB3aXJlRXZlbnRzKCksXG4vLyBzbyDigJQgbGlrZSBldmVyeSBvdGhlciBsaXN0ZW5lciBpbiB0aGUgYXBwIOKAlCBub3RoaW5nIG11bHRpcGxpZXMgYWNyb3NzIGZldGNoZXMuXG5mdW5jdGlvbiB3aXJlQXV0b2NvbXBsZXRlKCkge1xuICAvLyBFYWNoIGtleXN0cm9rZSBzY2hlZHVsZXMgb25lIGRlYm91bmNlZCBsb29rdXA7IGFuIGVtcHR5IGJveCBjbG9zZXMgdGhlXG4gIC8vIGRyb3Bkb3duIG91dHJpZ2h0LiBTZXR0aW5nIHNlYXJjaElucHV0LnZhbHVlIHByb2dyYW1tYXRpY2FsbHkgKG9uIHNlbGVjdCBvclxuICAvLyBvbiBhIHN1Y2Nlc3NmdWwgc3VibWl0KSBkb2VzIG5vdCBmaXJlICdpbnB1dCcsIHNvIHRoZXJlIGlzIG5vIHJlZmV0Y2ggbG9vcC5cbiAgc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSBzZWFyY2hJbnB1dC52YWx1ZS50cmltKCk7XG4gICAgaWYgKHN1Z2dlc3REZWJvdW5jZSkgeyBjbGVhclRpbWVvdXQoc3VnZ2VzdERlYm91bmNlKTsgc3VnZ2VzdERlYm91bmNlID0gbnVsbDsgfVxuICAgIGlmICghdmFsdWUpIHsgY2xvc2VTdWdnZXN0aW9ucygpOyByZXR1cm47IH1cblxuICAgIHN1Z2dlc3REZWJvdW5jZSA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3Qgc2VxID0gKytyZXF1ZXN0U2VxO1xuICAgICAgZm9yZWNhc3RMb2dpYy5zZWFyY2hDaXRpZXModmFsdWUpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdHMpIHtcbiAgICAgICAgaWYgKHNlcSAhPT0gcmVxdWVzdFNlcSkgeyByZXR1cm47IH0gLy8gYSBuZXdlciBrZXlzdHJva2Ugc3VwZXJzZWRlZCB0aGlzXG4gICAgICAgIHJlbmRlclN1Z2dlc3Rpb25zKHJlc3VsdHMpO1xuICAgICAgfSk7XG4gICAgfSwgU1VHR0VTVF9ERUJPVU5DRV9NUyk7XG4gIH0pO1xuXG4gIC8vIEFycm93IGtleXMgbW92ZSB0aGUgaGlnaGxpZ2h0OyBFbnRlciBvbiBhIGhpZ2hsaWdodGVkIHJvdyBzZWxlY3RzIGl0IChhbmQgaXNcbiAgLy8gc3RvcHBlZCBmcm9tIGFsc28gc3VibWl0dGluZyB0aGUgcmF3IHRleHQpOyBFc2NhcGUgY2xvc2VzIHdpdGhvdXQgc3VibWl0dGluZy5cbiAgLy8gV2l0aCBubyBkcm9wZG93biBvcGVuLCBFbnRlciBzdWJtaXRzIHRoZSB0eXBlZCB0ZXh0IGV4YWN0bHkgYXMgYmVmb3JlLlxuICBzZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoc3VnZ2VzdGlvbnMuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSB8fCAhY3VycmVudFN1Z2dlc3Rpb25zLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZS5rZXkgPT09ICdBcnJvd0Rvd24nKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBtb3ZlU2VsZWN0aW9uKDEpO1xuICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICdBcnJvd1VwJykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbW92ZVNlbGVjdGlvbigtMSk7XG4gICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgaWYgKHNlbGVjdGVkSW5kZXggPj0gMCkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNob29zZVN1Z2dlc3Rpb24oc2VsZWN0ZWRJbmRleCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNsb3NlU3VnZ2VzdGlvbnMoKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIEEgY2xpY2sgYW55d2hlcmUgb3V0c2lkZSB0aGUgc2VhcmNoIGZvcm0gY2xvc2VzIHRoZSBkcm9wZG93bi4gQ2xpY2tzIGluc2lkZVxuICAvLyB0aGUgZm9ybSAodGhlIGlucHV0LCBhIHN1Z2dlc3Rpb24gcm93LCB0aGUgYnV0dG9uKSBhcmUgaGFuZGxlZCBieSB0aGVpciBvd25cbiAgLy8gbGlzdGVuZXJzIGFuZCBtdXN0IG5vdCBjbG9zZSBpdCBoZXJlIGZpcnN0LlxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGUudGFyZ2V0ICYmIGUudGFyZ2V0LmNsb3Nlc3QgJiYgZS50YXJnZXQuY2xvc2VzdCgnI3NlYXJjaEZvcm0nKSkgeyByZXR1cm47IH1cbiAgICBjbG9zZVN1Z2dlc3Rpb25zKCk7XG4gIH0pO1xufVxuXG4vLyBSZWJ1aWxkIHRoZSBkcm9wZG93biBmcm9tIGEgcmVzdWx0cyBhcnJheS4gRW1wdHkgcmVzdWx0cyBjbG9zZSBpdC4gRWFjaCByb3cgaXNcbi8vIHRoZSBjaXR5IG5hbWUgcGx1cyBhIG11dGVkIHJlZ2lvbi9jb3VudHJ5IGxpbmU7IGNsaWNraW5nIG9uZSBzZWxlY3RzIGl0LlxuZnVuY3Rpb24gcmVuZGVyU3VnZ2VzdGlvbnMocmVzdWx0cykge1xuICB3aGlsZSAoc3VnZ2VzdGlvbnMuZmlyc3RDaGlsZCkgeyBzdWdnZXN0aW9ucy5yZW1vdmVDaGlsZChzdWdnZXN0aW9ucy5maXJzdENoaWxkKTsgfVxuXG4gIGN1cnJlbnRTdWdnZXN0aW9ucyA9IHJlc3VsdHM7XG4gIHNlbGVjdGVkSW5kZXggPSAtMTtcblxuICBpZiAoIXJlc3VsdHMubGVuZ3RoKSB7IGNsb3NlU3VnZ2VzdGlvbnMoKTsgcmV0dXJuOyB9XG5cbiAgcmVzdWx0cy5mb3JFYWNoKGZ1bmN0aW9uIChyLCBpZHgpIHtcbiAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaXRlbS5jbGFzc05hbWUgPSAnc3VnZ2VzdGlvbi1pdGVtJztcbiAgICBpdGVtLnNldEF0dHJpYnV0ZSgncm9sZScsICdvcHRpb24nKTtcblxuICAgIGNvbnN0IGNpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY2l0eS5jbGFzc05hbWUgPSAnc3VnZ2VzdGlvbi1jaXR5JztcbiAgICBjaXR5LnRleHRDb250ZW50ID0gci5uYW1lO1xuXG4gICAgY29uc3QgcGxhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgcGxhY2UuY2xhc3NOYW1lID0gJ3N1Z2dlc3Rpb24tY291bnRyeSc7XG4gICAgcGxhY2UudGV4dENvbnRlbnQgPSBbci5yZWdpb24sIHIuY291bnRyeV0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oJywgJyk7XG5cbiAgICBpdGVtLmFwcGVuZENoaWxkKGNpdHkpO1xuICAgIGl0ZW0uYXBwZW5kQ2hpbGQocGxhY2UpO1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7IGNob29zZVN1Z2dlc3Rpb24oaWR4KTsgfSk7XG5cbiAgICBzdWdnZXN0aW9ucy5hcHBlbmRDaGlsZChpdGVtKTtcbiAgfSk7XG5cbiAgb3BlblN1Z2dlc3Rpb25zKCk7XG59XG5cbi8vIE1vdmUgdGhlIGtleWJvYXJkIGhpZ2hsaWdodCwgd3JhcHBpbmcgYXQgYm90aCBlbmRzLCBhbmQgbWlycm9yIGl0IG9udG8gdGhlIERPTS5cbmZ1bmN0aW9uIG1vdmVTZWxlY3Rpb24oZGlyKSB7XG4gIGNvbnN0IG4gPSBjdXJyZW50U3VnZ2VzdGlvbnMubGVuZ3RoO1xuICBpZiAoIW4pIHsgcmV0dXJuOyB9XG4gIHNlbGVjdGVkSW5kZXggPSAoc2VsZWN0ZWRJbmRleCArIGRpciArIG4pICUgbjtcblxuICBjb25zdCBpdGVtcyA9IHN1Z2dlc3Rpb25zLmNoaWxkcmVuO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgaXRlbXNbaV0uY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0ZWQnLCBpID09PSBzZWxlY3RlZEluZGV4KTtcbiAgfVxufVxuXG4vLyBGaWxsIHRoZSBpbnB1dCB3aXRoIHRoZSBjaG9zZW4gY2l0eSBhbmQgc3VibWl0IHRoZSBmb3JtIHRoZSBzYW1lIHdheSBwcmVzc2luZ1xuLy8gRW50ZXIgb3IgY2xpY2tpbmcgU3VibWl0IGRvZXMsIHNvIHRoZSBmZXRjaCArIHNhdmUtbG9jYXRpb24gcGF0aCBpcyB1bmNoYW5nZWQuXG5mdW5jdGlvbiBjaG9vc2VTdWdnZXN0aW9uKGlkeCkge1xuICBjb25zdCByID0gY3VycmVudFN1Z2dlc3Rpb25zW2lkeF07XG4gIGlmICghcikgeyByZXR1cm47IH1cbiAgc2VhcmNoSW5wdXQudmFsdWUgPSByLm5hbWU7XG4gIGNsb3NlU3VnZ2VzdGlvbnMoKTtcbiAgaWYgKHNlYXJjaEZvcm0ucmVxdWVzdFN1Ym1pdCkge1xuICAgIHNlYXJjaEZvcm0ucmVxdWVzdFN1Ym1pdCgpO1xuICB9IGVsc2Uge1xuICAgIHNlYXJjaEZvcm0uZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ3N1Ym1pdCcsIHsgY2FuY2VsYWJsZTogdHJ1ZSwgYnViYmxlczogdHJ1ZSB9KSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gb3BlblN1Z2dlc3Rpb25zKCkge1xuICBzdWdnZXN0aW9ucy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgc2VhcmNoRm9ybS5jbGFzc0xpc3QuYWRkKCdzdWdnZXN0aW5nJyk7IC8vIGZsYXR0ZW5zIHRoZSBpbnB1dCdzIGJvdHRvbSBjb3JuZXJzXG59XG5cbi8vIENsb3NlIGFuZCByZXNldC4gQnVtcGluZyByZXF1ZXN0U2VxIGludmFsaWRhdGVzIGFueSBpbi1mbGlnaHQgbG9va3VwIHNvIGl0XG4vLyBjYW4ndCByZW9wZW4gdGhlIGRyb3Bkb3duIGFmdGVyIGEgc2VsZWN0aW9uIG9yIHN1Ym1pdC5cbmZ1bmN0aW9uIGNsb3NlU3VnZ2VzdGlvbnMoKSB7XG4gIGlmICghc3VnZ2VzdGlvbnMpIHsgcmV0dXJuOyB9XG4gIGlmIChzdWdnZXN0RGVib3VuY2UpIHsgY2xlYXJUaW1lb3V0KHN1Z2dlc3REZWJvdW5jZSk7IHN1Z2dlc3REZWJvdW5jZSA9IG51bGw7IH1cbiAgcmVxdWVzdFNlcSsrO1xuICBjdXJyZW50U3VnZ2VzdGlvbnMgPSBbXTtcbiAgc2VsZWN0ZWRJbmRleCA9IC0xO1xuICBzdWdnZXN0aW9ucy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgc2VhcmNoRm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdzdWdnZXN0aW5nJyk7XG59XG5cbi8vIEEgc3VjY2Vzc2Z1bCBsb29rdXAgY2xlYXJzIHRoZSBpbnZhbGlkIHN0YXRlOyBhIGZhaWxlZCBvbmUga2VlcHMgdGhlIGN1cnJlbnRcbi8vIHJpYmJvbiBhbmQgcmVkZGVucyB0aGUgaW5wdXQgYm9yZGVyICh2aWEgdGhlIC5pbnZhbGlkIGNsYXNzIGluIHN0eWxlLmNzcykuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRJbnB1dCgpIHtcbiAgY2FjaGVEb20oKTtcbiAgaWYgKHNlYXJjaEZvcm0pIHsgc2VhcmNoRm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdpbnZhbGlkJyk7IH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGludmFsaWRJbnB1dCgpIHtcbiAgY2FjaGVEb20oKTtcbiAgaWYgKHNlYXJjaEZvcm0pIHsgc2VhcmNoRm9ybS5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkJyk7IH1cbn1cbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgcmVuZGVyRm9yZWNhc3QsIHZhbGlkSW5wdXQsIGludmFsaWRJbnB1dCB9IGZyb20gJy4vaW5kZXhDaGFuZ2VzLmpzJztcblxuLy8gIDMgZGF5IGZvcmVjYXN0IC0gaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0zOWMyOGY4NWFiMDM0NTIxYjk5MjE3MDUyMzI3MTAmcT05ODA1MiZkYXlzPTMmYXFpPW5vJmFsZXJ0cz1ub1xuXG4vLyBUaGUgbGFzdCBmb3JlY2FzdCB3ZSBzdWNjZXNzZnVsbHkgcmVuZGVyZWQuIEEgZmFpbGVkIGxvb2t1cCBrZWVwcyBpdCBvbiBzY3JlZW5cbi8vIChzZWUgZnVsZmlsbFByb21pc2UpOiB0aGUgc2VhcmNoIGp1c3QgcmVkZGVucyB0aGUgaW5wdXQgcmF0aGVyIHRoYW4gYmxhbmtpbmdcbi8vIHRoZSByaWJib24uXG5sZXQgbGFzdEZvcmVjYXN0ID0gbnVsbDtcblxuZXhwb3J0IGNvbnN0IGZvcmVjYXN0TG9naWMgPSAoZnVuY3Rpb24gKCkge1xuXG4gIC8vIE5vIGZldGNoIGZpcmVzIGF0IG1vZHVsZS1ldmFsIHRpbWUuIFRoZSBzaW5nbGUgaW5pdGlhbCBmZXRjaCAoZGVmYXVsdFxuICAvLyBsb2NhdGlvbiwgb3IgdGhlIGZpcnN0IHNhdmVkIGxvY2F0aW9uKSBpcyBkcml2ZW4gZnJvbSB0aGUgYm9vdHN0cmFwIGluXG4gIC8vIGluZGV4LmpzIHZpYSBpbml0RmF2b3VyaXRlcygpIC0+IGZ1dHVyZUFQSUNhbGxzLCBzbyBpdCBoYXBwZW5zIGV4YWN0bHkgb25jZVxuICAvLyBpbiB0aGUgaW5kZXggYnVuZGxlIHJhdGhlciB0aGFuIG9uY2UgcGVyIGJ1bmRsZSB0aGF0IGltcG9ydHMgdGhpcyBtb2R1bGUuXG5cbiAgLy8gRmlyZXMgb25lIGZldGNoIGZvciBhIGxvY2F0aW9uIGFuZCByZW5kZXJzIG9uIHN1Y2Nlc3MuIFJldHVybnMgYSBwcm9taXNlXG4gIC8vIHJlc29sdmluZyB0byB0aGUgYnVpbHQgZm9yZWNhc3Qgb24gc3VjY2Vzcywgb3IgbnVsbCBvbiBhIGZhaWxlZCBsb29rdXAsIHNvXG4gIC8vIHRoZSBzZWFyY2ggc3VibWl0IGhhbmRsZXIgY2FuIGFwcGVuZCB0aGUgbG9jYXRpb24gdG8gdGhlIHNhdmVkIGxpc3Qgb25seVxuICAvLyB3aGVuIHRoZSBsb29rdXAgYWN0dWFsbHkgc3VjY2VlZGVkLlxuICBmdW5jdGlvbiBmdXR1cmVBUElDYWxscyh2YWx1ZSkge1xuICAgIHJldHVybiBmdWxmaWxsUHJvbWlzZShwdWxsRm9yZWNhc3QodmFsdWUpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZ1bGZpbGxQcm9taXNlKGZvcmVjYXN0SlNPTikge1xuICAgIHJldHVybiBmb3JlY2FzdEpTT04udGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAvLyBwdWxsRm9yZWNhc3QgcmVzb2x2ZXMgdG8gbnVsbCBvbiBhIGZhaWxlZCBsb29rdXAg4oCUIGxlYXZlIHRoZSBjdXJyZW50XG4gICAgICAvLyByaWJib24gdW50b3VjaGVkIChpbnZhbGlkSW5wdXQoKSBoYXMgYWxyZWFkeSByZWRkZW5lZCB0aGUgaW5wdXQpLlxuICAgICAgaWYgKCFyZXN1bHQpIHsgcmV0dXJuIG51bGw7IH1cblxuICAgICAgY29uc3QgZm9yZWNhc3QgPSBidWlsZEZvcmVjYXN0KHJlc3VsdCk7XG4gICAgICBsYXN0Rm9yZWNhc3QgPSBmb3JlY2FzdDtcbiAgICAgIHJlbmRlckZvcmVjYXN0KGZvcmVjYXN0KTtcbiAgICAgIHJldHVybiBmb3JlY2FzdDtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIEZsYXR0ZW4gdGhlIHRocmVlLWRheSByZXNwb25zZSBpbnRvIGEgc2luZ2xlIDcyLWhvdXIgc2VyaWVzIHBsdXMgYSBsb2NhdGlvblxuICAvLyBvYmplY3QuIEV2ZXJ5IGhvdXIga2VlcHMgaXRzIG93biBlcG9jaCwgdGVtcGVyYXR1cmUsIGNvbmRpdGlvbiB0ZXh0IGFuZCB0aGVcbiAgLy8gc3RhdCBmaWVsZHMgdGhlIHJlYWRvdXQgc2hvd3Mg4oCUIG5vdGhpbmcgaXMgY29sbGFwc2VkIHRvIHBlci1kYXkgc2NhbGFycywgYW5kXG4gIC8vIHRoZSBmdWxsIGZvcmVjYXN0ZGF5W10uaG91cltdIGFycmF5cyAoYWxyZWFkeSBpbiBldmVyeSByZXNwb25zZSwgcHJldmlvdXNseVxuICAvLyBkaXNjYXJkZWQpIGFyZSB3aGF0IHRoZSBjdXJ2ZSBpcyBkcmF3biBmcm9tLlxuICBmdW5jdGlvbiBidWlsZEZvcmVjYXN0KHJlc3VsdCkge1xuICAgIGNvbnN0IGZvcmVjYXN0RGF5cyA9IHJlc3VsdC5mb3JlY2FzdC5mb3JlY2FzdGRheTtcbiAgICBjb25zdCBob3VycyA9IFtdO1xuXG4gICAgZm9yZWNhc3REYXlzLmZvckVhY2goKGRheSkgPT4ge1xuICAgICAgZGF5LmhvdXIuZm9yRWFjaCgoaCkgPT4ge1xuICAgICAgICBob3Vycy5wdXNoKHtcbiAgICAgICAgICBlcG9jaDogaC50aW1lX2Vwb2NoLFxuICAgICAgICAgIHRlbXA6IGgudGVtcF9jLFxuICAgICAgICAgIGZlZWxzTGlrZTogaC5mZWVsc2xpa2VfYyxcbiAgICAgICAgICBodW1pZGl0eTogaC5odW1pZGl0eSxcbiAgICAgICAgICByYWluOiBoLmNoYW5jZV9vZl9yYWluLFxuICAgICAgICAgIHdpbmQ6IGgud2luZF9rcGgsXG4gICAgICAgICAgY29uZGl0aW9uOiBoLmNvbmRpdGlvbi50ZXh0LFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGxvY2F0aW9uOiB7XG4gICAgICAgIG5hbWU6IHJlc3VsdC5sb2NhdGlvbi5uYW1lLFxuICAgICAgICAvLyBcIm5vd1wiIGlzIGluZGV4ZWQgb2ZmIHRoZSBsb2NhdGlvbidzIHJlYWwgY3VycmVudCB0aW1lLCBub3QgYSBwYXJzZWRcbiAgICAgICAgLy8gZGF0ZSBzdHJpbmcuIFNlZSBjdXJyZW50SG91ckluZGV4KCkgaW4gcmliYm9uLmpzLlxuICAgICAgICBsb2NhbHRpbWVfZXBvY2g6IHJlc3VsdC5sb2NhdGlvbi5sb2NhbHRpbWVfZXBvY2gsXG4gICAgICB9LFxuICAgICAgaG91cnM6IGhvdXJzLFxuICAgICAgLy8gUGVyLWRheSBkYXRlICsgaG91ciBjb3VudCBkcml2ZSB0aGUgV0VEL1RIVS9GUkkgdGlja3MgYW5kIHRoZSBkYXlcbiAgICAgIC8vIGhhaXJsaW5lcyBhdCBob3VycyAyNCBhbmQgNDguXG4gICAgICBkYXlzOiBmb3JlY2FzdERheXMubWFwKChkYXkpID0+ICh7IGRhdGU6IGRheS5kYXRlLCBjb3VudDogZGF5LmhvdXIubGVuZ3RoIH0pKSxcbiAgICB9O1xuICB9XG5cbiAgLy8gVGFrZXMgYSBsb2NhdGlvbiB2YWx1ZSBhcHBlbmRlZCB0byB0aGUgQVBJIGNhbGwuIFJlc29sdmVzIHRvIHRoZSByYXcgSlNPTiBvblxuICAvLyBzdWNjZXNzLCBvciBudWxsIG9uIGZhaWx1cmUgKHNvIGZ1bGZpbGxQcm9taXNlIGtlZXBzIHRoZSBjdXJyZW50IHJpYmJvbikuXG4gIGFzeW5jIGZ1bmN0aW9uIHB1bGxGb3JlY2FzdCh2YWx1ZSkge1xuICAgIGNvbnN0IHVybCA9ICdodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0zOWMyOGY4NWFiMDM0NTIxYjk5MjE3MDUyMzI3MTAmcT0nICsgdmFsdWUgKyAnJmRheXM9MyZhcWk9bm8mYWxlcnRzPW5vJztcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgeyBtb2RlOiAnY29ycycgfSk7XG5cbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBTdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBmb3JlY2FzdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgdmFsaWRJbnB1dCgpO1xuXG4gICAgICByZXR1cm4gZm9yZWNhc3Q7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBjYXRjaGVzIGVycm9ycyBib3RoIGluIGZldGNoIGFuZCByZXNwb25zZS5qc29uXG4gICAgICBpbnZhbGlkSW5wdXQoKTtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8vIFR5cGVhaGVhZCBsb29rdXAgZm9yIHRoZSBzZWFyY2ggYm94LiBIaXRzIFdlYXRoZXJBUEkncyBzZWFyY2gvYXV0b2NvbXBsZXRlXG4gIC8vIGVuZHBvaW50IChyZXVzaW5nIHRoZSBzYW1lIGtleSBhcyBwdWxsRm9yZWNhc3QpIGFuZCByZXNvbHZlcyB0byB0aGUgcmF3XG4gIC8vIHJlc3VsdHMgYXJyYXkg4oCUIFt7IG5hbWUsIHJlZ2lvbiwgY291bnRyeSwgLi4uIH0sIC4uLl0g4oCUIG9yIFtdIG9uIGFuIGVtcHR5XG4gIC8vIHF1ZXJ5LCBubyBtYXRjaGVzLCBvciBhbnkgbmV0d29yay9wYXJzZSBlcnJvci4gTmV2ZXIgdGhyb3dzOiB0aGUgZHJvcGRvd25cbiAgLy8ganVzdCBzaG93cyBub3RoaW5nIG9uIGZhaWx1cmUuXG4gIGFzeW5jIGZ1bmN0aW9uIHNlYXJjaENpdGllcyh2YWx1ZSkge1xuICAgIGNvbnN0IHEgPSBTdHJpbmcodmFsdWUpLnRyaW0oKTtcbiAgICBpZiAoIXEpIHsgcmV0dXJuIFtdOyB9XG5cbiAgICBjb25zdCB1cmwgPSAnaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvc2VhcmNoLmpzb24/a2V5PTM5YzI4Zjg1YWIwMzQ1MjFiOTkyMTcwNTIzMjcxMCZxPScgKyBlbmNvZGVVUklDb21wb25lbnQocSk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHsgbW9kZTogJ2NvcnMnIH0pO1xuXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgU3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkocmVzdWx0cykgPyByZXN1bHRzIDogW107XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuXG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwdWxsRm9yZWNhc3QsXG4gICAgZnV0dXJlQVBJQ2FsbHMsXG4gICAgc2VhcmNoQ2l0aWVzLFxuICB9O1xuXG59KSgpOyAvLyBlbmRzIGZvcmVjYXN0TG9naWMgZnVuY3Rpb25cbiIsIi8vIHJpYmJvbi5qcyDigJQgdGhlIDcyLWhvdXIgdGVtcGVyYXR1cmUgcmliYm9uLlxuLy9cbi8vIFRoZSBmb3JlY2FzdCBpcyBvbmUgY29udGludW91cyB0ZW1wZXJhdHVyZSBjdXJ2ZSBhY3Jvc3MgYWxsIHRocmVlIGRheXMgcmF0aGVyXG4vLyB0aGFuIHRocmVlIGNhcmQgc3RhdGVzIHlvdSBwYWdlIGJldHdlZW4sIHNvIG5hdmlnYXRpb24gc3RvcHMgYmVpbmcgYSBjb25jZXB0OlxuLy8gZXZlcnkgaG91ciBpcyBvbiBzY3JlZW4gYXQgb25jZS4gQ29sb3VyIGlzIGEgZnVuY3Rpb24gb2YgdGhlIHRlbXBlcmF0dXJlXG4vLyBzY2FsYXIgKGNvbGQgLT4gbWlsZCAtPiB3YXJtIC0+IGhvdCksIE5PVCB0aGUgY29uZGl0aW9uIGNhdGVnb3J5LCBzbyB0aGVyZSBpc1xuLy8gbm8gcGVyLWNvbmRpdGlvbiBicmFuY2ggdG8gd3JpdGUgYW5kIG5vIGVpZ2h0aCBjYXNlIHRvIGZvcmdldC5cbi8vXG4vLyBidWlsZFJpYmJvbihtb3VudCkgY3JlYXRlcyB0aGUgU1ZHIHNjYWZmb2xkIG9uY2UgYXQgYm9vdHN0cmFwIChkZWZzLCBncmFkaWVudHMsXG4vLyBlbXB0eSBncm91cHMpIGFuZCBjYWNoZXMgZWxlbWVudCByZWZzLiByZW5kZXJGb3JlY2FzdCgpIGluIGluZGV4Q2hhbmdlcy5qc1xuLy8gY2FsbHMgcmVuZGVyUmliYm9uKGZvcmVjYXN0KSBvbiBldmVyeSByZXNvbHZlZCByZXNwb25zZSB0byByZWRyYXcgdGhlIGN1cnZlLFxuLy8gdGhlIGRheSBoYWlybGluZXMvdGlja3MgYW5kIHRoZSBjdXJyZW50LWhvdXIgbWFya2VyIGZyb20gZGF0YS4gY3VycmVudEhvdXJJbmRleFxuLy8gaXMgdGhlIHNpbmdsZSBzb3VyY2Ugb2YgdHJ1dGggZm9yIFwibm93XCIsIHNoYXJlZCB3aXRoIHRoZSByZWFkb3V0IHNvIHRoZSBtYXJrZXJcbi8vIGFuZCB0aGUgc3RhdCByb3cgbmV2ZXIgZGlzYWdyZWUuXG4vL1xuLy8gSGFuZC1hdXRob3JlZCBTVkcsIHZhbmlsbGEgb25seSDigJQgbm8gY2hhcnRpbmcgbGlicmFyeSwgbm8gZGVwZW5kZW5jaWVzLlxuXG5jb25zdCBOUyA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc7XG5cbi8vIHZpZXdCb3ggZ2VvbWV0cnksIGluIHVzZXIgdW5pdHMuIFRoZSBjdXJ2ZSBiYW5kIHNpdHMgYmV0d2VlbiBDSEFSVF9UT1AgYW5kXG4vLyBDSEFSVF9UT1ArQ0hBUlRfSDsgVElDS19IIGJlbmVhdGggaXQgY2FycmllcyB0aGUgV0VEL1RIVS9GUkkgZGF5IGxhYmVscy4gQVxuLy8gc2Vjb25kIGxhbmUgKHRpZGVzLCBvdXQgb2Ygc2NvcGUgdG9kYXkpIHdvdWxkIGFkZCBMQU5FX0ggYmVsb3cgdGhhdCDigJQgdGhlXG4vLyB2aWV3Qm94IGhlaWdodCBzd2l0Y2hlcyBiZXR3ZWVuIHR3byB2YWx1ZXMgZGVwZW5kaW5nIG9uIHdoZXRoZXIgdGhlIGxhbmVcbi8vIGV4aXN0cywgc28gdGhlIGxheW91dCBpcyBidWlsdCBsYW5lLW9wdGlvbmFsIGV2ZW4gdGhvdWdoIHRoZSBsYW5lIG5ldmVyXG4vLyByZW5kZXJzIGZvciBub3cuXG5jb25zdCBWSUVXX1cgPSA3MjA7XG5jb25zdCBQQURfTCA9IDEwO1xuY29uc3QgUEFEX1IgPSAxMDtcbmNvbnN0IENIQVJUX1RPUCA9IDE4O1xuY29uc3QgQ0hBUlRfSCA9IDE1MDtcbmNvbnN0IFRJQ0tfSCA9IDI2O1xuY29uc3QgTEFORV9IID0gOTA7XG5cbi8vIFRlbXBlcmF0dXJlIC0+IGNvbG91ciByYW1wLiBGb3VyIGFuY2hvcnMgc3Bhbm5pbmcgYSBmaXhlZCDCsEMgZG9tYWluIHNvIHRoZVxuLy8gc2FtZSB0ZW1wZXJhdHVyZSBhbHdheXMgcmVhZHMgdGhlIHNhbWUgY29sb3VyIHJlZ2FyZGxlc3Mgb2YgdGhlIGRheSdzIHJhbmdlLlxuY29uc3QgUkFNUCA9IFtcbiAgeyB0OiAtNSwgYzogWzB4M2QsIDB4NmYsIDB4YThdIH0sIC8vIGNvbGRcbiAgeyB0OiAxMCwgYzogWzB4NmYsIDB4YTgsIDB4YTBdIH0sIC8vIG1pbGRcbiAgeyB0OiAyNSwgYzogWzB4ZDksIDB4YTQsIDB4NDFdIH0sIC8vIHdhcm1cbiAgeyB0OiA0MCwgYzogWzB4YzIsIDB4NDUsIDB4MmRdIH0sIC8vIGhvdFxuXTtcblxuY29uc3QgV0VFS0RBWSA9IFsnU1VOJywgJ01PTicsICdUVUUnLCAnV0VEJywgJ1RIVScsICdGUkknLCAnU0FUJ107XG5cbi8vIENhY2hlZCBzY2FmZm9sZCByZWZzLCBwb3B1bGF0ZWQgb25jZSBieSBidWlsZFJpYmJvbigpLlxubGV0IHN2ZywgdGVtcEdyYWQsIGZpbGxQYXRoLCBjdXJ2ZVBhdGgsIGJvdW5kYXJ5R3JvdXAsIHRpY2tHcm91cCwgbWFya2VyR3JvdXAsXG4gIGxhbmVHcm91cDtcblxuZnVuY3Rpb24gZWwobmFtZSwgYXR0cnMpIHtcbiAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhOUywgbmFtZSk7XG4gIGlmIChhdHRycykge1xuICAgIGZvciAoY29uc3QgayBpbiBhdHRycykgeyBub2RlLnNldEF0dHJpYnV0ZShrLCBhdHRyc1trXSk7IH1cbiAgfVxuICByZXR1cm4gbm9kZTtcbn1cblxuZnVuY3Rpb24gbGVycChhLCBiLCBmKSB7IHJldHVybiBhICsgKGIgLSBhKSAqIGY7IH1cblxuLy8gQ29sb3VyIGZvciBhIHRlbXBlcmF0dXJlLCBpbnRlcnBvbGF0ZWQgYWNyb3NzIHRoZSByYW1wIGFuY2hvcnMgYW5kIGNsYW1wZWQgdG9cbi8vIHRoZSBkb21haW4gZW5kcy5cbmZ1bmN0aW9uIHRlbXBDb2xvdXIodGVtcCkge1xuICBpZiAodGVtcCA8PSBSQU1QWzBdLnQpIHsgcmV0dXJuIHJnYihSQU1QWzBdLmMpOyB9XG4gIGlmICh0ZW1wID49IFJBTVBbUkFNUC5sZW5ndGggLSAxXS50KSB7IHJldHVybiByZ2IoUkFNUFtSQU1QLmxlbmd0aCAtIDFdLmMpOyB9XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgUkFNUC5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0ZW1wIDw9IFJBTVBbaV0udCkge1xuICAgICAgY29uc3QgbG8gPSBSQU1QW2kgLSAxXTtcbiAgICAgIGNvbnN0IGhpID0gUkFNUFtpXTtcbiAgICAgIGNvbnN0IGYgPSAodGVtcCAtIGxvLnQpIC8gKGhpLnQgLSBsby50KTtcbiAgICAgIHJldHVybiByZ2IoW1xuICAgICAgICBNYXRoLnJvdW5kKGxlcnAobG8uY1swXSwgaGkuY1swXSwgZikpLFxuICAgICAgICBNYXRoLnJvdW5kKGxlcnAobG8uY1sxXSwgaGkuY1sxXSwgZikpLFxuICAgICAgICBNYXRoLnJvdW5kKGxlcnAobG8uY1syXSwgaGkuY1syXSwgZikpLFxuICAgICAgXSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZ2IoUkFNUFtSQU1QLmxlbmd0aCAtIDFdLmMpO1xufVxuXG5mdW5jdGlvbiByZ2IoYykgeyByZXR1cm4gJ3JnYignICsgY1swXSArICcsJyArIGNbMV0gKyAnLCcgKyBjWzJdICsgJyknOyB9XG5cbmZ1bmN0aW9uIHdlZWtkYXlBYmJyKGRhdGVTdHIpIHtcbiAgLy8gZGF0ZVN0ciBpcyAnWVlZWS1NTS1ERCcuIEJ1aWxkIHRoZSBkYXRlIGF0IFVUQyBtaWRuaWdodCBzbyB0aGUgd2Vla2RheSBuZXZlclxuICAvLyBzaGlmdHMgYWNyb3NzIGEgdGltZXpvbmUgYm91bmRhcnkuXG4gIGNvbnN0IHAgPSBTdHJpbmcoZGF0ZVN0cikuc3BsaXQoJy0nKTtcbiAgY29uc3QgZCA9IG5ldyBEYXRlKERhdGUuVVRDKCtwWzBdLCAoK3BbMV0pIC0gMSwgK3BbMl0pKTtcbiAgcmV0dXJuIFdFRUtEQVlbZC5nZXRVVENEYXkoKV0gfHwgJyc7XG59XG5cbi8vIEluZGV4IG9mIHRoZSBob3VyIGJ1Y2tldCBuZWFyZXN0IFwibm93XCIuIERyaXZlbiBvZmYgbG9jYXRpb24ubG9jYWx0aW1lX2Vwb2NoLFxuLy8gTk9UIGEgcGFyc2VkIGRhdGUtc3RyaW5nIGhvdXIg4oCUIHRoZSBvbGQgZ2V0Q3VycmVudFRpbWUoKSByZWFkIHRoZSBob3VyIG91dCBvZlxuLy8gZGF0ZV9lcG9jaCAobG9jYWwgbWlkbmlnaHQpIGFuZCByZXR1cm5lZCB0aGUgVVRDIG9mZnNldCwgc28gXCJmZWVscyBsaWtlXCIgd2FzIGFcbi8vIGZpeGVkIGFyYml0cmFyeSBob3VyLiBsb2NhbHRpbWVfZXBvY2ggaXMgdGhlIGxvY2F0aW9uJ3MgcmVhbCBjdXJyZW50IHRpbWUuXG5leHBvcnQgZnVuY3Rpb24gY3VycmVudEhvdXJJbmRleChmb3JlY2FzdCkge1xuICBjb25zdCBob3VycyA9IGZvcmVjYXN0LmhvdXJzO1xuICBpZiAoIWhvdXJzIHx8ICFob3Vycy5sZW5ndGgpIHsgcmV0dXJuIDA7IH1cbiAgY29uc3Qgbm93ID0gZm9yZWNhc3QubG9jYXRpb24ubG9jYWx0aW1lX2Vwb2NoO1xuICBsZXQgYmVzdCA9IDA7XG4gIGxldCBiZXN0RGlmZiA9IEluZmluaXR5O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGhvdXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgZGlmZiA9IE1hdGguYWJzKGhvdXJzW2ldLmVwb2NoIC0gbm93KTtcbiAgICBpZiAoZGlmZiA8IGJlc3REaWZmKSB7IGJlc3REaWZmID0gZGlmZjsgYmVzdCA9IGk7IH1cbiAgfVxuICByZXR1cm4gYmVzdDtcbn1cblxuLy8gQ3JlYXRlIHRoZSBTVkcgc2NhZmZvbGQgb25jZS4gQ2FsbGVkIGZyb20gaW5kZXguanMgYXQgYm9vdHN0cmFwLCBhZnRlciB0aGVcbi8vIG1vdW50IGVsZW1lbnQgaXMgaW4gdGhlIERPTS5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFJpYmJvbihtb3VudCkge1xuICBpZiAoc3ZnKSB7IHJldHVybjsgfSAvLyBidWlsZCBvbmNlXG5cbiAgc3ZnID0gZWwoJ3N2ZycsIHtcbiAgICBpZDogJ3JpYmJvblN2ZycsXG4gICAgdmlld0JveDogJzAgMCAnICsgVklFV19XICsgJyAnICsgKENIQVJUX1RPUCArIENIQVJUX0ggKyBUSUNLX0gpLFxuICAgIHByZXNlcnZlQXNwZWN0UmF0aW86ICd4TWlkWU1pZCBtZWV0JyxcbiAgfSk7XG5cbiAgY29uc3QgZGVmcyA9IGVsKCdkZWZzJyk7XG5cbiAgLy8gSG9yaXpvbnRhbCBzdHJva2UgZ3JhZGllbnQ6IGNvbG91cmVkIGJ5IHRlbXBlcmF0dXJlIGFjcm9zcyB0aGUgNzIgaG91cnMuXG4gIC8vIFN0b3BzIGFyZSByZWJ1aWx0IGVhY2ggcmVuZGVyIGZyb20gdGhlIGFjdHVhbCBzZXJpZXMuXG4gIHRlbXBHcmFkID0gZWwoJ2xpbmVhckdyYWRpZW50Jywge1xuICAgIGlkOiAndGVtcEdyYWQnLCB4MTogJzAnLCB5MTogJzAnLCB4MjogJzEnLCB5MjogJzAnLFxuICB9KTtcblxuICAvLyBWZXJ0aWNhbCBmYWRlIGZpbGwgdW5kZXIgdGhlIGN1cnZlLlxuICBjb25zdCBmaWxsR3JhZCA9IGVsKCdsaW5lYXJHcmFkaWVudCcsIHtcbiAgICBpZDogJ2ZpbGxHcmFkJywgeDE6ICcwJywgeTE6ICcwJywgeDI6ICcwJywgeTI6ICcxJyxcbiAgfSk7XG4gIGZpbGxHcmFkLmFwcGVuZENoaWxkKGVsKCdzdG9wJywgeyBvZmZzZXQ6ICcwJywgJ3N0b3AtY29sb3InOiAnIzhDQTBBRScsICdzdG9wLW9wYWNpdHknOiAnMC4yOCcgfSkpO1xuICBmaWxsR3JhZC5hcHBlbmRDaGlsZChlbCgnc3RvcCcsIHsgb2Zmc2V0OiAnMScsICdzdG9wLWNvbG9yJzogJyM4Q0EwQUUnLCAnc3RvcC1vcGFjaXR5JzogJzAnIH0pKTtcblxuICBkZWZzLmFwcGVuZENoaWxkKHRlbXBHcmFkKTtcbiAgZGVmcy5hcHBlbmRDaGlsZChmaWxsR3JhZCk7XG4gIHN2Zy5hcHBlbmRDaGlsZChkZWZzKTtcblxuICBmaWxsUGF0aCA9IGVsKCdwYXRoJywgeyBjbGFzczogJ3JpYmJvbi1maWxsJywgZmlsbDogJ3VybCgjZmlsbEdyYWQpJywgc3Ryb2tlOiAnbm9uZScgfSk7XG4gIGN1cnZlUGF0aCA9IGVsKCdwYXRoJywgeyBjbGFzczogJ3JpYmJvbi1jdXJ2ZScsIGZpbGw6ICdub25lJywgc3Ryb2tlOiAndXJsKCN0ZW1wR3JhZCknIH0pO1xuICBib3VuZGFyeUdyb3VwID0gZWwoJ2cnLCB7IGNsYXNzOiAncmliYm9uLWJvdW5kYXJpZXMnIH0pO1xuICB0aWNrR3JvdXAgPSBlbCgnZycsIHsgY2xhc3M6ICdyaWJib24tdGlja3MnIH0pO1xuICBtYXJrZXJHcm91cCA9IGVsKCdnJywgeyBjbGFzczogJ3JpYmJvbi1tYXJrZXInIH0pO1xuICBsYW5lR3JvdXAgPSBlbCgnZycsIHsgY2xhc3M6ICdyaWJib24tbGFuZScgfSk7XG5cbiAgc3ZnLmFwcGVuZENoaWxkKGZpbGxQYXRoKTtcbiAgc3ZnLmFwcGVuZENoaWxkKGN1cnZlUGF0aCk7XG4gIHN2Zy5hcHBlbmRDaGlsZChib3VuZGFyeUdyb3VwKTtcbiAgc3ZnLmFwcGVuZENoaWxkKHRpY2tHcm91cCk7XG4gIHN2Zy5hcHBlbmRDaGlsZChsYW5lR3JvdXApO1xuICBzdmcuYXBwZW5kQ2hpbGQobWFya2VyR3JvdXApO1xuXG4gIG1vdW50LmFwcGVuZENoaWxkKHN2Zyk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyKG5vZGUpIHtcbiAgd2hpbGUgKG5vZGUuZmlyc3RDaGlsZCkgeyBub2RlLnJlbW92ZUNoaWxkKG5vZGUuZmlyc3RDaGlsZCk7IH1cbn1cblxuLy8gUmVkcmF3IHRoZSB3aG9sZSByaWJib24gZnJvbSBhIGZvcmVjYXN0OiB7IGxvY2F0aW9uLCBob3Vyc1tdLCBkYXlzW10sIGxhbmU/IH0uXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyUmliYm9uKGZvcmVjYXN0KSB7XG4gIGlmICghc3ZnKSB7IHJldHVybjsgfVxuXG4gIGNvbnN0IGhvdXJzID0gZm9yZWNhc3QuaG91cnMgfHwgW107XG4gIGNvbnN0IG4gPSBob3Vycy5sZW5ndGg7XG4gIGlmICghbikgeyByZXR1cm47IH1cblxuICBjb25zdCBsYW5lT24gPSAhIWZvcmVjYXN0LmxhbmU7XG4gIGNvbnN0IHRvdGFsSCA9IENIQVJUX1RPUCArIENIQVJUX0ggKyBUSUNLX0ggKyAobGFuZU9uID8gTEFORV9IIDogMCk7XG4gIHN2Zy5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCAnMCAwICcgKyBWSUVXX1cgKyAnICcgKyB0b3RhbEgpO1xuXG4gIGNvbnN0IGlubmVyVyA9IFZJRVdfVyAtIFBBRF9MIC0gUEFEX1I7XG4gIGNvbnN0IGJhc2VsaW5lID0gQ0hBUlRfVE9QICsgQ0hBUlRfSDtcblxuICAvLyB0ZW1wZXJhdHVyZSBkb21haW4gZm9yIHRoZSB5LXNjYWxlLCBwYWRkZWQgc28gdGhlIGN1cnZlIG5ldmVyIGh1Z3MgYW4gZWRnZS5cbiAgbGV0IG1pbiA9IEluZmluaXR5O1xuICBsZXQgbWF4ID0gLUluZmluaXR5O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgIGlmIChob3Vyc1tpXS50ZW1wIDwgbWluKSB7IG1pbiA9IGhvdXJzW2ldLnRlbXA7IH1cbiAgICBpZiAoaG91cnNbaV0udGVtcCA+IG1heCkgeyBtYXggPSBob3Vyc1tpXS50ZW1wOyB9XG4gIH1cbiAgaWYgKG1pbiA9PT0gbWF4KSB7IG1pbiAtPSAxOyBtYXggKz0gMTsgfVxuICBjb25zdCBzcGFuID0gbWF4IC0gbWluO1xuXG4gIGNvbnN0IHggPSAoaSkgPT4gUEFEX0wgKyAobiA8PSAxID8gMCA6IChpIC8gKG4gLSAxKSkgKiBpbm5lclcpO1xuICBjb25zdCB5ID0gKHQpID0+IENIQVJUX1RPUCArICgxIC0gKHQgLSBtaW4pIC8gc3BhbikgKiBDSEFSVF9IO1xuXG4gIC8vIEJ1aWxkIHRoZSBwb2ludHMsIHRoZW4gYSBzbW9vdGggcGF0aCB2aWEgcXVhZHJhdGljIG1pZHBvaW50cyAobm8gb3ZlcnNob290KS5cbiAgY29uc3QgcHRzID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7IHB0cy5wdXNoKHsgeDogeChpKSwgeTogeShob3Vyc1tpXS50ZW1wKSB9KTsgfVxuXG4gIGxldCBkID0gJ00gJyArIHB0c1swXS54LnRvRml4ZWQoMikgKyAnICcgKyBwdHNbMF0ueS50b0ZpeGVkKDIpO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IHB0cy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHhjID0gKHB0c1tpIC0gMV0ueCArIHB0c1tpXS54KSAvIDI7XG4gICAgY29uc3QgeWMgPSAocHRzW2kgLSAxXS55ICsgcHRzW2ldLnkpIC8gMjtcbiAgICBkICs9ICcgUSAnICsgcHRzW2kgLSAxXS54LnRvRml4ZWQoMikgKyAnICcgKyBwdHNbaSAtIDFdLnkudG9GaXhlZCgyKSArXG4gICAgICAnICcgKyB4Yy50b0ZpeGVkKDIpICsgJyAnICsgeWMudG9GaXhlZCgyKTtcbiAgfVxuICBkICs9ICcgTCAnICsgcHRzW24gLSAxXS54LnRvRml4ZWQoMikgKyAnICcgKyBwdHNbbiAtIDFdLnkudG9GaXhlZCgyKTtcblxuICBjdXJ2ZVBhdGguc2V0QXR0cmlidXRlKCdkJywgZCk7XG4gIGZpbGxQYXRoLnNldEF0dHJpYnV0ZSgnZCcsIGQgK1xuICAgICcgTCAnICsgcHRzW24gLSAxXS54LnRvRml4ZWQoMikgKyAnICcgKyBiYXNlbGluZSArXG4gICAgJyBMICcgKyBwdHNbMF0ueC50b0ZpeGVkKDIpICsgJyAnICsgYmFzZWxpbmUgKyAnIFonKTtcblxuICAvLyBIb3Jpem9udGFsIHRlbXBlcmF0dXJlIGdyYWRpZW50OiBvbmUgc3RvcCBwZXIgaG91ciwgY29sb3VyZWQgYnkgdGhhdCBob3VyJ3NcbiAgLy8gdGVtcGVyYXR1cmUuIG9iamVjdEJvdW5kaW5nQm94IG1hcHMgb2Zmc2V0IGkvKG4tMSkgb250byB0aGUgY3VydmUncyB4LCB3aGljaFxuICAvLyBzcGFucyB0aGUgZnVsbCBpbm5lciB3aWR0aCwgc28gZWFjaCBzdG9wIGxhbmRzIHVuZGVyIGl0cyBob3VyLlxuICBjbGVhcih0ZW1wR3JhZCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgdGVtcEdyYWQuYXBwZW5kQ2hpbGQoZWwoJ3N0b3AnLCB7XG4gICAgICBvZmZzZXQ6IChuIDw9IDEgPyAwIDogaSAvIChuIC0gMSkpLnRvRml4ZWQoNCksXG4gICAgICAnc3RvcC1jb2xvcic6IHRlbXBDb2xvdXIoaG91cnNbaV0udGVtcCksXG4gICAgfSkpO1xuICB9XG5cbiAgLy8gRGF5IGhhaXJsaW5lcyArIFdFRC9USFUvRlJJIHRpY2tzLCBkZXJpdmVkIGZyb20gdGhlIHBlci1kYXkgaG91ciBjb3VudHMgc28gYVxuICAvLyBzaG9ydCB0cmFpbGluZyBkYXkgc3RpbGwgbGluZXMgdXAuXG4gIGNsZWFyKGJvdW5kYXJ5R3JvdXApO1xuICBjbGVhcih0aWNrR3JvdXApO1xuICBjb25zdCBkYXlzID0gZm9yZWNhc3QuZGF5cyB8fCBbXTtcbiAgbGV0IHN0YXJ0ID0gMDtcbiAgZm9yIChsZXQgZGkgPSAwOyBkaSA8IGRheXMubGVuZ3RoOyBkaSsrKSB7XG4gICAgY29uc3QgY291bnQgPSBkYXlzW2RpXS5jb3VudCB8fCAwO1xuICAgIGlmIChjb3VudCA8PSAwKSB7IGNvbnRpbnVlOyB9XG5cbiAgICBpZiAoZGkgPiAwICYmIHN0YXJ0IDwgbikge1xuICAgICAgY29uc3QgYnggPSB4KHN0YXJ0KS50b0ZpeGVkKDIpO1xuICAgICAgYm91bmRhcnlHcm91cC5hcHBlbmRDaGlsZChlbCgnbGluZScsIHtcbiAgICAgICAgY2xhc3M6ICdyaWJib24taGFpcmxpbmUnLFxuICAgICAgICB4MTogYngsIHkxOiBDSEFSVF9UT1AsIHgyOiBieCwgeTI6IGJhc2VsaW5lLFxuICAgICAgfSkpO1xuICAgIH1cblxuICAgIGNvbnN0IGNlbnRlcklkeCA9IHN0YXJ0ICsgKGNvdW50IC0gMSkgLyAyO1xuICAgIGNvbnN0IHRpY2sgPSBlbCgndGV4dCcsIHtcbiAgICAgIGNsYXNzOiAncmliYm9uLXRpY2snLFxuICAgICAgeDogeChjZW50ZXJJZHgpLnRvRml4ZWQoMiksXG4gICAgICB5OiAoYmFzZWxpbmUgKyBUSUNLX0ggKiAwLjcpLnRvRml4ZWQoMiksXG4gICAgICAndGV4dC1hbmNob3InOiAnbWlkZGxlJyxcbiAgICB9KTtcbiAgICB0aWNrLnRleHRDb250ZW50ID0gd2Vla2RheUFiYnIoZGF5c1tkaV0uZGF0ZSk7XG4gICAgdGlja0dyb3VwLmFwcGVuZENoaWxkKHRpY2spO1xuXG4gICAgc3RhcnQgKz0gY291bnQ7XG4gIH1cblxuICAvLyBDdXJyZW50LWhvdXIgbWFya2VyOiBhIGhhaXJsaW5lIGRyb3BwZWQgdG8gdGhlIGJhc2VsaW5lIHBsdXMgYSBkb3Qgb24gdGhlXG4gIC8vIGN1cnZlLCB0aGUgZG90IGZpbGxlZCB3aXRoIHRoZSB0ZW1wZXJhdHVyZSBjb2xvdXIgZm9yIHRoYXQgaG91ci5cbiAgY2xlYXIobWFya2VyR3JvdXApO1xuICBjb25zdCBpZHggPSBjdXJyZW50SG91ckluZGV4KGZvcmVjYXN0KTtcbiAgY29uc3QgbXggPSB4KGlkeCk7XG4gIGNvbnN0IG15ID0geShob3Vyc1tpZHhdLnRlbXApO1xuICBtYXJrZXJHcm91cC5hcHBlbmRDaGlsZChlbCgnbGluZScsIHtcbiAgICBjbGFzczogJ3JpYmJvbi1ub3dsaW5lJyxcbiAgICB4MTogbXgudG9GaXhlZCgyKSwgeTE6IG15LnRvRml4ZWQoMiksIHgyOiBteC50b0ZpeGVkKDIpLCB5MjogYmFzZWxpbmUsXG4gIH0pKTtcbiAgbWFya2VyR3JvdXAuYXBwZW5kQ2hpbGQoZWwoJ2NpcmNsZScsIHtcbiAgICBjbGFzczogJ3JpYmJvbi1kb3QnLFxuICAgIGN4OiBteC50b0ZpeGVkKDIpLCBjeTogbXkudG9GaXhlZCgyKSwgcjogJzUuNScsXG4gICAgZmlsbDogdGVtcENvbG91cihob3Vyc1tpZHhdLnRlbXApLFxuICB9KSk7XG5cbiAgLy8gT3B0aW9uYWwgc2Vjb25kIGxhbmUuIE5vIGRhdGEgZmVlZHMgaXQgdG9kYXkgKHRpZGVzIGFyZSBQcm8rIGFuZCBlbXB0eSBmb3JcbiAgLy8gaW5sYW5kIGxvY2F0aW9ucyksIHNvIGl0IHN0YXlzIGVtcHR5IGFuZCB0aGUgdmlld0JveCB1c2VzIHRoZSBzaG9ydGVyIG9mIHRoZVxuICAvLyB0d28gaGVpZ2h0cyDigJQgYnV0IHRoZSBncm91cCBhbmQgdGhlIGhlaWdodCBzd2l0Y2ggZXhpc3Qgc28gYSBsYW5lIGNhbiBkcm9wIGluXG4gIC8vIHdpdGhvdXQgYSBsYXlvdXQgcmV3cml0ZS5cbiAgY2xlYXIobGFuZUdyb3VwKTtcbiAgaWYgKGxhbmVPbiAmJiB0eXBlb2YgZm9yZWNhc3QubGFuZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZvcmVjYXN0LmxhbmUobGFuZUdyb3VwLCB7IHgsIGJhc2VsaW5lLCBsYW5lVG9wOiBiYXNlbGluZSArIFRJQ0tfSCwgbGFuZUg6IExBTkVfSCB9KTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9XZWF0aGVyQXBwX1RPUC9cIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImxvZ2ljXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2xvZ2ljLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9