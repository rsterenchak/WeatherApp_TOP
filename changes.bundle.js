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

#searchInput {
  flex: 1;
  min-width: 0;
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

/* Failed lookup: reddened border, current ribbon left in place. */
#searchForm.invalid #searchInput {
  border-color: #C2452D;
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,4CAAgC;EAChC,oBAAoB;AACtB;;AAEA;;;;qCAIqC;AACrC;EACE,iBAAiB;EACjB,eAAe;EACf,eAAe;EACf,gBAAgB;EAChB,sFAAsF;AACxF;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,SAAS;EACT,yBAAyB;EACzB,kBAAkB;EAClB,4CAA4C;EAC5C,mCAAmC;AACrC;;AAEA;4CAC4C;AAC5C;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,SAAS;EACT,gBAAgB;EAChB,cAAc;EACd,kBAAkB;AACpB;;AAEA;oEACoE;AACpE;EACE,WAAW;AACb;;AAEA;EACE,cAAc;EACd,WAAW;EACX,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,qBAAqB;EACrB,sBAAsB;AACxB;;AAEA,+CAA+C;AAC/C;EACE,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,wBAAwB;EACxB,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,oBAAoB;EACpB,eAAe;EACf,qBAAqB;EACrB,YAAY;AACd;;AAEA;EACE,qBAAqB;EACrB,eAAe;AACjB;;AAEA,+BAA+B;AAC/B;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,QAAQ;EACR,kBAAkB;AACpB;;AAEA;EACE,wBAAwB;EACxB,eAAe;EACf,mBAAmB;EACnB,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA,uCAAuC;AACvC;EACE,iCAAiC;EACjC,gBAAgB;EAChB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,kBAAkB;AACpB;;AAEA,6CAA6C;AAC7C;EACE,aAAa;EACb,qCAAqC;EACrC,SAAS;EACT,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,QAAQ;EACR,iBAAiB;EACjB,6BAA6B;EAC7B,kBAAkB;AACpB;;AAEA;EACE,wBAAwB;EACxB,eAAe;EACf,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,kBAAkB;AACpB;;AAEA,iBAAiB;AACjB;EACE,aAAa;EACb,SAAS;EACT,WAAW;AACb;;AAEA;EACE,OAAO;EACP,YAAY;EACZ,kBAAkB;EAClB,wBAAwB;EACxB,eAAe,EAAE,4DAA4D;EAC7E,kBAAkB;EAClB,uBAAuB;EACvB,6BAA6B;EAC7B,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,0BAA0B;AAC5B;;AAEA,kEAAkE;AAClE;EACE,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;EAClB,wBAAwB;EACxB,eAAe;EACf,mBAAmB;EACnB,oBAAoB;EACpB,uBAAuB;EACvB,YAAY;EACZ,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE;IACE,SAAS;IACT,kBAAkB;EACpB;;EAEA;IACE,QAAQ;EACV;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,eAAe;EACjB;AACF","sourcesContent":["@font-face {\n  font-family: 'Roboto';\n  src: url('./Roboto-Regular.ttf');\n  font-weight: 300 400;\n}\n\n/* Palette:\n   ground  #12181F   rules  #26313B\n   text    #EAEEF2 (primary) / #8CA0AE (muted)\n   The temperature colours live in ribbon.js (the curve is coloured by the\n   temperature scalar, not by CSS). */\n:root {\n  --ground: #12181F;\n  --rule: #26313B;\n  --text: #EAEEF2;\n  --muted: #8CA0AE;\n  --mono: 'SFMono-Regular', 'SF Mono', 'Menlo', 'Consolas', 'Liberation Mono', monospace;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  background: var(--ground);\n  color: var(--text);\n  font-family: 'Roboto', system-ui, sans-serif;\n  -webkit-font-smoothing: antialiased;\n}\n\n/* dvh (not vh): on iOS Safari vh resolves to the tall viewport and parks the\n   bottom of the layout under the URL bar. */\n#app {\n  min-height: 100dvh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 28px;\n  max-width: 720px;\n  margin: 0 auto;\n  padding: 32px 20px;\n}\n\n/* Ribbon: the SVG scales to the column width via the viewBox, so all 72 hours\n   are on screen at any width down to 380px without scroll or pan. */\n#ribbonWrap {\n  width: 100%;\n}\n\n#ribbonSvg {\n  display: block;\n  width: 100%;\n  height: auto;\n  overflow: visible;\n}\n\n.ribbon-curve {\n  stroke-width: 2.5;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n\n/* Day boundary hairlines at hours 24 and 48. */\n.ribbon-hairline {\n  stroke: var(--rule);\n  stroke-width: 1;\n}\n\n.ribbon-tick {\n  fill: var(--muted);\n  font-family: var(--mono);\n  font-size: 12px;\n  letter-spacing: 1px;\n}\n\n.ribbon-nowline {\n  stroke: var(--muted);\n  stroke-width: 1;\n  stroke-dasharray: 2 3;\n  opacity: 0.7;\n}\n\n.ribbon-dot {\n  stroke: var(--ground);\n  stroke-width: 2;\n}\n\n/* Readout beneath the curve. */\n#readout {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  text-align: center;\n}\n\n#locationName {\n  font-family: var(--mono);\n  font-size: 13px;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  color: var(--muted);\n}\n\n/* Roboto Light 40px for the reading. */\n#currentTemp {\n  font-family: 'Roboto', sans-serif;\n  font-weight: 300;\n  font-size: 40px;\n  line-height: 1.1;\n}\n\n#currentCondition {\n  font-size: 15px;\n  color: var(--text);\n}\n\n/* Four-up stat row: text labels, no icons. */\n#statRow {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 10px;\n  width: 100%;\n  margin-top: 14px;\n}\n\n.stat {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  padding: 12px 6px;\n  border: 1px solid var(--rule);\n  border-radius: 8px;\n}\n\n.stat-label {\n  font-family: var(--mono);\n  font-size: 10px;\n  letter-spacing: 1px;\n  color: var(--muted);\n}\n\n.stat-value {\n  font-size: 17px;\n  color: var(--text);\n}\n\n/* Search form. */\n#searchForm {\n  display: flex;\n  gap: 10px;\n  width: 100%;\n}\n\n#searchInput {\n  flex: 1;\n  min-width: 0;\n  padding: 12px 14px;\n  font-family: var(--mono);\n  font-size: 16px; /* 16px so iOS Safari doesn't auto-zoom the input on focus */\n  color: var(--text);\n  background: transparent;\n  border: 1px solid var(--rule);\n  border-radius: 8px;\n}\n\n#searchInput::placeholder {\n  color: var(--muted);\n}\n\n#searchInput:focus {\n  outline: none;\n  border-color: var(--muted);\n}\n\n/* Failed lookup: reddened border, current ribbon left in place. */\n#searchForm.invalid #searchInput {\n  border-color: #C2452D;\n}\n\n#searchButton {\n  padding: 12px 20px;\n  font-family: var(--mono);\n  font-size: 14px;\n  letter-spacing: 1px;\n  color: var(--ground);\n  background: var(--text);\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n}\n\n#searchButton:hover {\n  filter: brightness(0.92);\n}\n\n@media (max-width: 480px) {\n  #app {\n    gap: 22px;\n    padding: 24px 16px;\n  }\n\n  #statRow {\n    gap: 8px;\n  }\n\n  .stat {\n    padding: 10px 4px;\n  }\n\n  .stat-value {\n    font-size: 15px;\n  }\n}\n"],"sourceRoot":""}]);
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




// Guard so wireEvents() only ever registers one set of listeners. The old
// changeWeatherInfo() re-registered on every fetch, doubling the handler count
// per search; the render path (renderForecast) and the wiring path (wireEvents)
// are split precisely so that can never happen again.
let eventsWired = false;

// Cached DOM references, populated once by cacheDom() after index.js has built
// and appended the DOM.
let searchForm, searchInput, locationName, currentTemp, currentCondition,
  feelsVal, humidityVal, rainVal, windVal;

function cacheDom() {
  if (locationName) { return; } // already cached

  searchForm = document.getElementById('searchForm');
  searchInput = document.getElementById('searchInput');
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
  // page; futureAPICalls does the single fetch.
  searchForm.addEventListener('submit', function (e) {
    e.preventDefault();
    _logic_js__WEBPACK_IMPORTED_MODULE_2__.forecastLogic.futureAPICalls(searchInput.value);
  });
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

  initialAPICall(); // Calls default 'Redmond' (98052) weather

  function initialAPICall() {
    fulfillPromise(pullForecast('98052'));
  }

  function futureAPICalls(value) {
    fulfillPromise(pullForecast(value));
  }

  function fulfillPromise(forecastJSON) {
    forecastJSON.then((result) => {
      // pullForecast resolves to null on a failed lookup — leave the current
      // ribbon untouched (invalidInput() has already reddened the input).
      if (!result) { return; }

      const forecast = buildForecast(result);
      lastForecast = forecast;
      (0,_indexChanges_js__WEBPACK_IMPORTED_MODULE_1__.renderForecast)(forecast);
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

  return {
    pullForecast,
    futureAPICalls,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QyxxSEFBdUM7QUFDbkYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsT0FBTyxRQUFRLE9BQU8sTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLFlBQVks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QixrQkFBa0I7QUFDckM7QUFDQSxzQkFBc0I7O0FBRXRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQix3REFBd0Q7QUFDdkY7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1UUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7V0NBQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vc3JjL2luZGV4Q2hhbmdlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vLi9zcmMvbG9naWMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vc3JjL3JpYmJvbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9Sb2JvdG8tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1JvYm90byc7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICBmb250LXdlaWdodDogMzAwIDQwMDtcbn1cblxuLyogUGFsZXR0ZTpcbiAgIGdyb3VuZCAgIzEyMTgxRiAgIHJ1bGVzICAjMjYzMTNCXG4gICB0ZXh0ICAgICNFQUVFRjIgKHByaW1hcnkpIC8gIzhDQTBBRSAobXV0ZWQpXG4gICBUaGUgdGVtcGVyYXR1cmUgY29sb3VycyBsaXZlIGluIHJpYmJvbi5qcyAodGhlIGN1cnZlIGlzIGNvbG91cmVkIGJ5IHRoZVxuICAgdGVtcGVyYXR1cmUgc2NhbGFyLCBub3QgYnkgQ1NTKS4gKi9cbjpyb290IHtcbiAgLS1ncm91bmQ6ICMxMjE4MUY7XG4gIC0tcnVsZTogIzI2MzEzQjtcbiAgLS10ZXh0OiAjRUFFRUYyO1xuICAtLW11dGVkOiAjOENBMEFFO1xuICAtLW1vbm86ICdTRk1vbm8tUmVndWxhcicsICdTRiBNb25vJywgJ01lbmxvJywgJ0NvbnNvbGFzJywgJ0xpYmVyYXRpb24gTW9ubycsIG1vbm9zcGFjZTtcbn1cblxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdyb3VuZCk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWY7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xufVxuXG4vKiBkdmggKG5vdCB2aCk6IG9uIGlPUyBTYWZhcmkgdmggcmVzb2x2ZXMgdG8gdGhlIHRhbGwgdmlld3BvcnQgYW5kIHBhcmtzIHRoZVxuICAgYm90dG9tIG9mIHRoZSBsYXlvdXQgdW5kZXIgdGhlIFVSTCBiYXIuICovXG4jYXBwIHtcbiAgbWluLWhlaWdodDogMTAwZHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAyOHB4O1xuICBtYXgtd2lkdGg6IDcyMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMzJweCAyMHB4O1xufVxuXG4vKiBSaWJib246IHRoZSBTVkcgc2NhbGVzIHRvIHRoZSBjb2x1bW4gd2lkdGggdmlhIHRoZSB2aWV3Qm94LCBzbyBhbGwgNzIgaG91cnNcbiAgIGFyZSBvbiBzY3JlZW4gYXQgYW55IHdpZHRoIGRvd24gdG8gMzgwcHggd2l0aG91dCBzY3JvbGwgb3IgcGFuLiAqL1xuI3JpYmJvbldyYXAge1xuICB3aWR0aDogMTAwJTtcbn1cblxuI3JpYmJvblN2ZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuLnJpYmJvbi1jdXJ2ZSB7XG4gIHN0cm9rZS13aWR0aDogMi41O1xuICBzdHJva2UtbGluZWNhcDogcm91bmQ7XG4gIHN0cm9rZS1saW5lam9pbjogcm91bmQ7XG59XG5cbi8qIERheSBib3VuZGFyeSBoYWlybGluZXMgYXQgaG91cnMgMjQgYW5kIDQ4LiAqL1xuLnJpYmJvbi1oYWlybGluZSB7XG4gIHN0cm9rZTogdmFyKC0tcnVsZSk7XG4gIHN0cm9rZS13aWR0aDogMTtcbn1cblxuLnJpYmJvbi10aWNrIHtcbiAgZmlsbDogdmFyKC0tbXV0ZWQpO1xuICBmb250LWZhbWlseTogdmFyKC0tbW9ubyk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cblxuLnJpYmJvbi1ub3dsaW5lIHtcbiAgc3Ryb2tlOiB2YXIoLS1tdXRlZCk7XG4gIHN0cm9rZS13aWR0aDogMTtcbiAgc3Ryb2tlLWRhc2hhcnJheTogMiAzO1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbi5yaWJib24tZG90IHtcbiAgc3Ryb2tlOiB2YXIoLS1ncm91bmQpO1xuICBzdHJva2Utd2lkdGg6IDI7XG59XG5cbi8qIFJlYWRvdXQgYmVuZWF0aCB0aGUgY3VydmUuICovXG4jcmVhZG91dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNsb2NhdGlvbk5hbWUge1xuICBmb250LWZhbWlseTogdmFyKC0tbW9ubyk7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcbn1cblxuLyogUm9ib3RvIExpZ2h0IDQwcHggZm9yIHRoZSByZWFkaW5nLiAqL1xuI2N1cnJlbnRUZW1wIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjE7XG59XG5cbiNjdXJyZW50Q29uZGl0aW9uIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG59XG5cbi8qIEZvdXItdXAgc3RhdCByb3c6IHRleHQgbGFiZWxzLCBubyBpY29ucy4gKi9cbiNzdGF0Um93IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcbiAgZ2FwOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMTRweDtcbn1cblxuLnN0YXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDRweDtcbiAgcGFkZGluZzogMTJweCA2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXJ1bGUpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5zdGF0LWxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1vbm8pO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XG59XG5cbi5zdGF0LXZhbHVlIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG59XG5cbi8qIFNlYXJjaCBmb3JtLiAqL1xuI3NlYXJjaEZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jc2VhcmNoSW5wdXQge1xuICBmbGV4OiAxO1xuICBtaW4td2lkdGg6IDA7XG4gIHBhZGRpbmc6IDEycHggMTRweDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1vbm8pO1xuICBmb250LXNpemU6IDE2cHg7IC8qIDE2cHggc28gaU9TIFNhZmFyaSBkb2Vzbid0IGF1dG8tem9vbSB0aGUgaW5wdXQgb24gZm9jdXMgKi9cbiAgY29sb3I6IHZhcigtLXRleHQpO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcnVsZSk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuI3NlYXJjaElucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XG59XG5cbiNzZWFyY2hJbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tbXV0ZWQpO1xufVxuXG4vKiBGYWlsZWQgbG9va3VwOiByZWRkZW5lZCBib3JkZXIsIGN1cnJlbnQgcmliYm9uIGxlZnQgaW4gcGxhY2UuICovXG4jc2VhcmNoRm9ybS5pbnZhbGlkICNzZWFyY2hJbnB1dCB7XG4gIGJvcmRlci1jb2xvcjogI0MyNDUyRDtcbn1cblxuI3NlYXJjaEJ1dHRvbiB7XG4gIHBhZGRpbmc6IDEycHggMjBweDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1vbm8pO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGNvbG9yOiB2YXIoLS1ncm91bmQpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10ZXh0KTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI3NlYXJjaEJ1dHRvbjpob3ZlciB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjkyKTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICNhcHAge1xuICAgIGdhcDogMjJweDtcbiAgICBwYWRkaW5nOiAyNHB4IDE2cHg7XG4gIH1cblxuICAjc3RhdFJvdyB7XG4gICAgZ2FwOiA4cHg7XG4gIH1cblxuICAuc3RhdCB7XG4gICAgcGFkZGluZzogMTBweCA0cHg7XG4gIH1cblxuICAuc3RhdC12YWx1ZSB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltd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b250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgc3JjOiB1cmwoJy4vUm9ib3RvLVJlZ3VsYXIudHRmJyk7XFxuICBmb250LXdlaWdodDogMzAwIDQwMDtcXG59XFxuXFxuLyogUGFsZXR0ZTpcXG4gICBncm91bmQgICMxMjE4MUYgICBydWxlcyAgIzI2MzEzQlxcbiAgIHRleHQgICAgI0VBRUVGMiAocHJpbWFyeSkgLyAjOENBMEFFIChtdXRlZClcXG4gICBUaGUgdGVtcGVyYXR1cmUgY29sb3VycyBsaXZlIGluIHJpYmJvbi5qcyAodGhlIGN1cnZlIGlzIGNvbG91cmVkIGJ5IHRoZVxcbiAgIHRlbXBlcmF0dXJlIHNjYWxhciwgbm90IGJ5IENTUykuICovXFxuOnJvb3Qge1xcbiAgLS1ncm91bmQ6ICMxMjE4MUY7XFxuICAtLXJ1bGU6ICMyNjMxM0I7XFxuICAtLXRleHQ6ICNFQUVFRjI7XFxuICAtLW11dGVkOiAjOENBMEFFO1xcbiAgLS1tb25vOiAnU0ZNb25vLVJlZ3VsYXInLCAnU0YgTW9ubycsICdNZW5sbycsICdDb25zb2xhcycsICdMaWJlcmF0aW9uIE1vbm8nLCBtb25vc3BhY2U7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncm91bmQpO1xcbiAgY29sb3I6IHZhcigtLXRleHQpO1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWY7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG59XFxuXFxuLyogZHZoIChub3QgdmgpOiBvbiBpT1MgU2FmYXJpIHZoIHJlc29sdmVzIHRvIHRoZSB0YWxsIHZpZXdwb3J0IGFuZCBwYXJrcyB0aGVcXG4gICBib3R0b20gb2YgdGhlIGxheW91dCB1bmRlciB0aGUgVVJMIGJhci4gKi9cXG4jYXBwIHtcXG4gIG1pbi1oZWlnaHQ6IDEwMGR2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDI4cHg7XFxuICBtYXgtd2lkdGg6IDcyMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwYWRkaW5nOiAzMnB4IDIwcHg7XFxufVxcblxcbi8qIFJpYmJvbjogdGhlIFNWRyBzY2FsZXMgdG8gdGhlIGNvbHVtbiB3aWR0aCB2aWEgdGhlIHZpZXdCb3gsIHNvIGFsbCA3MiBob3Vyc1xcbiAgIGFyZSBvbiBzY3JlZW4gYXQgYW55IHdpZHRoIGRvd24gdG8gMzgwcHggd2l0aG91dCBzY3JvbGwgb3IgcGFuLiAqL1xcbiNyaWJib25XcmFwIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jcmliYm9uU3ZnIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLnJpYmJvbi1jdXJ2ZSB7XFxuICBzdHJva2Utd2lkdGg6IDIuNTtcXG4gIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcXG4gIHN0cm9rZS1saW5lam9pbjogcm91bmQ7XFxufVxcblxcbi8qIERheSBib3VuZGFyeSBoYWlybGluZXMgYXQgaG91cnMgMjQgYW5kIDQ4LiAqL1xcbi5yaWJib24taGFpcmxpbmUge1xcbiAgc3Ryb2tlOiB2YXIoLS1ydWxlKTtcXG4gIHN0cm9rZS13aWR0aDogMTtcXG59XFxuXFxuLnJpYmJvbi10aWNrIHtcXG4gIGZpbGw6IHZhcigtLW11dGVkKTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tb25vKTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxufVxcblxcbi5yaWJib24tbm93bGluZSB7XFxuICBzdHJva2U6IHZhcigtLW11dGVkKTtcXG4gIHN0cm9rZS13aWR0aDogMTtcXG4gIHN0cm9rZS1kYXNoYXJyYXk6IDIgMztcXG4gIG9wYWNpdHk6IDAuNztcXG59XFxuXFxuLnJpYmJvbi1kb3Qge1xcbiAgc3Ryb2tlOiB2YXIoLS1ncm91bmQpO1xcbiAgc3Ryb2tlLXdpZHRoOiAyO1xcbn1cXG5cXG4vKiBSZWFkb3V0IGJlbmVhdGggdGhlIGN1cnZlLiAqL1xcbiNyZWFkb3V0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jbG9jYXRpb25OYW1lIHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tb25vKTtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcXG59XFxuXFxuLyogUm9ib3RvIExpZ2h0IDQwcHggZm9yIHRoZSByZWFkaW5nLiAqL1xcbiNjdXJyZW50VGVtcCB7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuMTtcXG59XFxuXFxuI2N1cnJlbnRDb25kaXRpb24ge1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgY29sb3I6IHZhcigtLXRleHQpO1xcbn1cXG5cXG4vKiBGb3VyLXVwIHN0YXQgcm93OiB0ZXh0IGxhYmVscywgbm8gaWNvbnMuICovXFxuI3N0YXRSb3cge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICBnYXA6IDEwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi10b3A6IDE0cHg7XFxufVxcblxcbi5zdGF0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNHB4O1xcbiAgcGFkZGluZzogMTJweCA2cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ydWxlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLnN0YXQtbGFiZWwge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1vbm8pO1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XFxufVxcblxcbi5zdGF0LXZhbHVlIHtcXG4gIGZvbnQtc2l6ZTogMTdweDtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcXG59XFxuXFxuLyogU2VhcmNoIGZvcm0uICovXFxuI3NlYXJjaEZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jc2VhcmNoSW5wdXQge1xcbiAgZmxleDogMTtcXG4gIG1pbi13aWR0aDogMDtcXG4gIHBhZGRpbmc6IDEycHggMTRweDtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tb25vKTtcXG4gIGZvbnQtc2l6ZTogMTZweDsgLyogMTZweCBzbyBpT1MgU2FmYXJpIGRvZXNuJ3QgYXV0by16b29tIHRoZSBpbnB1dCBvbiBmb2N1cyAqL1xcbiAgY29sb3I6IHZhcigtLXRleHQpO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ydWxlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuI3NlYXJjaElucHV0OjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xcbn1cXG5cXG4jc2VhcmNoSW5wdXQ6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tbXV0ZWQpO1xcbn1cXG5cXG4vKiBGYWlsZWQgbG9va3VwOiByZWRkZW5lZCBib3JkZXIsIGN1cnJlbnQgcmliYm9uIGxlZnQgaW4gcGxhY2UuICovXFxuI3NlYXJjaEZvcm0uaW52YWxpZCAjc2VhcmNoSW5wdXQge1xcbiAgYm9yZGVyLWNvbG9yOiAjQzI0NTJEO1xcbn1cXG5cXG4jc2VhcmNoQnV0dG9uIHtcXG4gIHBhZGRpbmc6IDEycHggMjBweDtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tb25vKTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICBjb2xvcjogdmFyKC0tZ3JvdW5kKTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXRleHQpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jc2VhcmNoQnV0dG9uOmhvdmVyIHtcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjkyKTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxuICAjYXBwIHtcXG4gICAgZ2FwOiAyMnB4O1xcbiAgICBwYWRkaW5nOiAyNHB4IDE2cHg7XFxuICB9XFxuXFxuICAjc3RhdFJvdyB7XFxuICAgIGdhcDogOHB4O1xcbiAgfVxcblxcbiAgLnN0YXQge1xcbiAgICBwYWRkaW5nOiAxMHB4IDRweDtcXG4gIH1cXG5cXG4gIC5zdGF0LXZhbHVlIHtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgcmVuZGVyUmliYm9uLCBjdXJyZW50SG91ckluZGV4IH0gZnJvbSAnLi9yaWJib24uanMnO1xuaW1wb3J0IHsgZm9yZWNhc3RMb2dpYyB9IGZyb20gJy4vbG9naWMuanMnO1xuXG4vLyBHdWFyZCBzbyB3aXJlRXZlbnRzKCkgb25seSBldmVyIHJlZ2lzdGVycyBvbmUgc2V0IG9mIGxpc3RlbmVycy4gVGhlIG9sZFxuLy8gY2hhbmdlV2VhdGhlckluZm8oKSByZS1yZWdpc3RlcmVkIG9uIGV2ZXJ5IGZldGNoLCBkb3VibGluZyB0aGUgaGFuZGxlciBjb3VudFxuLy8gcGVyIHNlYXJjaDsgdGhlIHJlbmRlciBwYXRoIChyZW5kZXJGb3JlY2FzdCkgYW5kIHRoZSB3aXJpbmcgcGF0aCAod2lyZUV2ZW50cylcbi8vIGFyZSBzcGxpdCBwcmVjaXNlbHkgc28gdGhhdCBjYW4gbmV2ZXIgaGFwcGVuIGFnYWluLlxubGV0IGV2ZW50c1dpcmVkID0gZmFsc2U7XG5cbi8vIENhY2hlZCBET00gcmVmZXJlbmNlcywgcG9wdWxhdGVkIG9uY2UgYnkgY2FjaGVEb20oKSBhZnRlciBpbmRleC5qcyBoYXMgYnVpbHRcbi8vIGFuZCBhcHBlbmRlZCB0aGUgRE9NLlxubGV0IHNlYXJjaEZvcm0sIHNlYXJjaElucHV0LCBsb2NhdGlvbk5hbWUsIGN1cnJlbnRUZW1wLCBjdXJyZW50Q29uZGl0aW9uLFxuICBmZWVsc1ZhbCwgaHVtaWRpdHlWYWwsIHJhaW5WYWwsIHdpbmRWYWw7XG5cbmZ1bmN0aW9uIGNhY2hlRG9tKCkge1xuICBpZiAobG9jYXRpb25OYW1lKSB7IHJldHVybjsgfSAvLyBhbHJlYWR5IGNhY2hlZFxuXG4gIHNlYXJjaEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoRm9ybScpO1xuICBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hJbnB1dCcpO1xuICBsb2NhdGlvbk5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9jYXRpb25OYW1lJyk7XG4gIGN1cnJlbnRUZW1wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnRUZW1wJyk7XG4gIGN1cnJlbnRDb25kaXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VycmVudENvbmRpdGlvbicpO1xuICBmZWVsc1ZhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmZWVsc1ZhbCcpO1xuICBodW1pZGl0eVZhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdodW1pZGl0eVZhbCcpO1xuICByYWluVmFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhaW5WYWwnKTtcbiAgd2luZFZhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5kVmFsJyk7XG59XG5cbi8vIFB1cmUgcmVuZGVyIHBhdGguIGZ1bGZpbGxQcm9taXNlKCkgaW4gbG9naWMuanMgY2FsbHMgdGhpcyBvbiBldmVyeSByZXNvbHZlZFxuLy8gcmVzcG9uc2U7IGl0IHJlZ2lzdGVycyBOTyBsaXN0ZW5lcnMsIHNvIGl0IGlzIHNhZmUgdG8gY2FsbCByZXBlYXRlZGx5LiBEcmF3c1xuLy8gdGhlIHJpYmJvbiBhbmQgZmlsbHMgdGhlIHJlYWRvdXQgZnJvbSB0aGUgc2FtZSBcIm5vd1wiIGluZGV4LCBzbyB0aGUgbWFya2VyIG9uXG4vLyB0aGUgY3VydmUgYW5kIHRoZSBzdGF0IHJvdyBjYW4gbmV2ZXIgZGlzYWdyZWUgYWJvdXQgdGhlIGN1cnJlbnQgaG91ci5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJGb3JlY2FzdChmb3JlY2FzdCkge1xuICBjYWNoZURvbSgpO1xuXG4gIHJlbmRlclJpYmJvbihmb3JlY2FzdCk7XG5cbiAgY29uc3QgaSA9IGN1cnJlbnRIb3VySW5kZXgoZm9yZWNhc3QpO1xuICBjb25zdCBub3cgPSBmb3JlY2FzdC5ob3Vyc1tpXTtcbiAgaWYgKCFub3cpIHsgcmV0dXJuOyB9XG5cbiAgbG9jYXRpb25OYW1lLnRleHRDb250ZW50ID0gZm9yZWNhc3QubG9jYXRpb24ubmFtZTtcbiAgY3VycmVudFRlbXAudGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKG5vdy50ZW1wKSArICfCsCc7XG4gIGN1cnJlbnRDb25kaXRpb24udGV4dENvbnRlbnQgPSBub3cuY29uZGl0aW9uO1xuXG4gIGZlZWxzVmFsLnRleHRDb250ZW50ID0gTWF0aC5yb3VuZChub3cuZmVlbHNMaWtlKSArICfCsCc7XG4gIGh1bWlkaXR5VmFsLnRleHRDb250ZW50ID0gbm93Lmh1bWlkaXR5ICsgJyUnO1xuICByYWluVmFsLnRleHRDb250ZW50ID0gbm93LnJhaW4gKyAnJSc7XG4gIHdpbmRWYWwudGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKG5vdy53aW5kKSArICcga20vaCc7XG59XG5cbi8vIFJlZ2lzdGVycyBsaXN0ZW5lcnMgRVhBQ1RMWSBPTkNFIGZvciB0aGUgbGlmZSBvZiB0aGUgcGFnZS4gaW5kZXguanMgY2FsbHMgdGhpc1xuLy8gYXQgYm9vdHN0cmFwLCBhZnRlciB0aGUgRE9NIGlzIGFwcGVuZGVkIOKAlCBuZXZlciBmcm9tIHRoZSByZW5kZXIgcGF0aCDigJQgc28gYVxuLy8gc2VhcmNoIGZpcmVzIGV4YWN0bHkgb25lIGZldGNoIGFuZCBldmVyeSBlbGVtZW50IGNhcnJpZXMgZXhhY3RseSBvbmUgbGlzdGVuZXIuXG5leHBvcnQgZnVuY3Rpb24gd2lyZUV2ZW50cygpIHtcbiAgaWYgKGV2ZW50c1dpcmVkKSB7IHJldHVybjsgfVxuXG4gIGNhY2hlRG9tKCk7XG4gIGV2ZW50c1dpcmVkID0gdHJ1ZTtcblxuICAvLyBUaGUgYnV0dG9uIGlzIGEgcmVhbCBzdWJtaXQgYnV0dG9uLCBzbyB0aGlzIGNhdGNoZXMgYm90aCB0aGUgY2xpY2sgYW5kIHRoZVxuICAvLyBFbnRlciBrZXkgYXMgb25lIHN1Ym1pdCBldmVudC4gcHJldmVudERlZmF1bHQgc3RvcHMgdGhlIGZvcm0gcmVsb2FkaW5nIHRoZVxuICAvLyBwYWdlOyBmdXR1cmVBUElDYWxscyBkb2VzIHRoZSBzaW5nbGUgZmV0Y2guXG4gIHNlYXJjaEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZm9yZWNhc3RMb2dpYy5mdXR1cmVBUElDYWxscyhzZWFyY2hJbnB1dC52YWx1ZSk7XG4gIH0pO1xufVxuXG4vLyBBIHN1Y2Nlc3NmdWwgbG9va3VwIGNsZWFycyB0aGUgaW52YWxpZCBzdGF0ZTsgYSBmYWlsZWQgb25lIGtlZXBzIHRoZSBjdXJyZW50XG4vLyByaWJib24gYW5kIHJlZGRlbnMgdGhlIGlucHV0IGJvcmRlciAodmlhIHRoZSAuaW52YWxpZCBjbGFzcyBpbiBzdHlsZS5jc3MpLlxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkSW5wdXQoKSB7XG4gIGNhY2hlRG9tKCk7XG4gIGlmIChzZWFyY2hGb3JtKSB7IHNlYXJjaEZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZCcpOyB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnZhbGlkSW5wdXQoKSB7XG4gIGNhY2hlRG9tKCk7XG4gIGlmIChzZWFyY2hGb3JtKSB7IHNlYXJjaEZvcm0uY2xhc3NMaXN0LmFkZCgnaW52YWxpZCcpOyB9XG59XG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IHJlbmRlckZvcmVjYXN0LCB2YWxpZElucHV0LCBpbnZhbGlkSW5wdXQgfSBmcm9tICcuL2luZGV4Q2hhbmdlcy5qcyc7XG5cbi8vICAzIGRheSBmb3JlY2FzdCAtIGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9MzljMjhmODVhYjAzNDUyMWI5OTIxNzA1MjMyNzEwJnE9OTgwNTImZGF5cz0zJmFxaT1ubyZhbGVydHM9bm9cblxuLy8gVGhlIGxhc3QgZm9yZWNhc3Qgd2Ugc3VjY2Vzc2Z1bGx5IHJlbmRlcmVkLiBBIGZhaWxlZCBsb29rdXAga2VlcHMgaXQgb24gc2NyZWVuXG4vLyAoc2VlIGZ1bGZpbGxQcm9taXNlKTogdGhlIHNlYXJjaCBqdXN0IHJlZGRlbnMgdGhlIGlucHV0IHJhdGhlciB0aGFuIGJsYW5raW5nXG4vLyB0aGUgcmliYm9uLlxubGV0IGxhc3RGb3JlY2FzdCA9IG51bGw7XG5cbmV4cG9ydCBjb25zdCBmb3JlY2FzdExvZ2ljID0gKGZ1bmN0aW9uICgpIHtcblxuICBpbml0aWFsQVBJQ2FsbCgpOyAvLyBDYWxscyBkZWZhdWx0ICdSZWRtb25kJyAoOTgwNTIpIHdlYXRoZXJcblxuICBmdW5jdGlvbiBpbml0aWFsQVBJQ2FsbCgpIHtcbiAgICBmdWxmaWxsUHJvbWlzZShwdWxsRm9yZWNhc3QoJzk4MDUyJykpO1xuICB9XG5cbiAgZnVuY3Rpb24gZnV0dXJlQVBJQ2FsbHModmFsdWUpIHtcbiAgICBmdWxmaWxsUHJvbWlzZShwdWxsRm9yZWNhc3QodmFsdWUpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZ1bGZpbGxQcm9taXNlKGZvcmVjYXN0SlNPTikge1xuICAgIGZvcmVjYXN0SlNPTi50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgIC8vIHB1bGxGb3JlY2FzdCByZXNvbHZlcyB0byBudWxsIG9uIGEgZmFpbGVkIGxvb2t1cCDigJQgbGVhdmUgdGhlIGN1cnJlbnRcbiAgICAgIC8vIHJpYmJvbiB1bnRvdWNoZWQgKGludmFsaWRJbnB1dCgpIGhhcyBhbHJlYWR5IHJlZGRlbmVkIHRoZSBpbnB1dCkuXG4gICAgICBpZiAoIXJlc3VsdCkgeyByZXR1cm47IH1cblxuICAgICAgY29uc3QgZm9yZWNhc3QgPSBidWlsZEZvcmVjYXN0KHJlc3VsdCk7XG4gICAgICBsYXN0Rm9yZWNhc3QgPSBmb3JlY2FzdDtcbiAgICAgIHJlbmRlckZvcmVjYXN0KGZvcmVjYXN0KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIEZsYXR0ZW4gdGhlIHRocmVlLWRheSByZXNwb25zZSBpbnRvIGEgc2luZ2xlIDcyLWhvdXIgc2VyaWVzIHBsdXMgYSBsb2NhdGlvblxuICAvLyBvYmplY3QuIEV2ZXJ5IGhvdXIga2VlcHMgaXRzIG93biBlcG9jaCwgdGVtcGVyYXR1cmUsIGNvbmRpdGlvbiB0ZXh0IGFuZCB0aGVcbiAgLy8gc3RhdCBmaWVsZHMgdGhlIHJlYWRvdXQgc2hvd3Mg4oCUIG5vdGhpbmcgaXMgY29sbGFwc2VkIHRvIHBlci1kYXkgc2NhbGFycywgYW5kXG4gIC8vIHRoZSBmdWxsIGZvcmVjYXN0ZGF5W10uaG91cltdIGFycmF5cyAoYWxyZWFkeSBpbiBldmVyeSByZXNwb25zZSwgcHJldmlvdXNseVxuICAvLyBkaXNjYXJkZWQpIGFyZSB3aGF0IHRoZSBjdXJ2ZSBpcyBkcmF3biBmcm9tLlxuICBmdW5jdGlvbiBidWlsZEZvcmVjYXN0KHJlc3VsdCkge1xuICAgIGNvbnN0IGZvcmVjYXN0RGF5cyA9IHJlc3VsdC5mb3JlY2FzdC5mb3JlY2FzdGRheTtcbiAgICBjb25zdCBob3VycyA9IFtdO1xuXG4gICAgZm9yZWNhc3REYXlzLmZvckVhY2goKGRheSkgPT4ge1xuICAgICAgZGF5LmhvdXIuZm9yRWFjaCgoaCkgPT4ge1xuICAgICAgICBob3Vycy5wdXNoKHtcbiAgICAgICAgICBlcG9jaDogaC50aW1lX2Vwb2NoLFxuICAgICAgICAgIHRlbXA6IGgudGVtcF9jLFxuICAgICAgICAgIGZlZWxzTGlrZTogaC5mZWVsc2xpa2VfYyxcbiAgICAgICAgICBodW1pZGl0eTogaC5odW1pZGl0eSxcbiAgICAgICAgICByYWluOiBoLmNoYW5jZV9vZl9yYWluLFxuICAgICAgICAgIHdpbmQ6IGgud2luZF9rcGgsXG4gICAgICAgICAgY29uZGl0aW9uOiBoLmNvbmRpdGlvbi50ZXh0LFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGxvY2F0aW9uOiB7XG4gICAgICAgIG5hbWU6IHJlc3VsdC5sb2NhdGlvbi5uYW1lLFxuICAgICAgICAvLyBcIm5vd1wiIGlzIGluZGV4ZWQgb2ZmIHRoZSBsb2NhdGlvbidzIHJlYWwgY3VycmVudCB0aW1lLCBub3QgYSBwYXJzZWRcbiAgICAgICAgLy8gZGF0ZSBzdHJpbmcuIFNlZSBjdXJyZW50SG91ckluZGV4KCkgaW4gcmliYm9uLmpzLlxuICAgICAgICBsb2NhbHRpbWVfZXBvY2g6IHJlc3VsdC5sb2NhdGlvbi5sb2NhbHRpbWVfZXBvY2gsXG4gICAgICB9LFxuICAgICAgaG91cnM6IGhvdXJzLFxuICAgICAgLy8gUGVyLWRheSBkYXRlICsgaG91ciBjb3VudCBkcml2ZSB0aGUgV0VEL1RIVS9GUkkgdGlja3MgYW5kIHRoZSBkYXlcbiAgICAgIC8vIGhhaXJsaW5lcyBhdCBob3VycyAyNCBhbmQgNDguXG4gICAgICBkYXlzOiBmb3JlY2FzdERheXMubWFwKChkYXkpID0+ICh7IGRhdGU6IGRheS5kYXRlLCBjb3VudDogZGF5LmhvdXIubGVuZ3RoIH0pKSxcbiAgICB9O1xuICB9XG5cbiAgLy8gVGFrZXMgYSBsb2NhdGlvbiB2YWx1ZSBhcHBlbmRlZCB0byB0aGUgQVBJIGNhbGwuIFJlc29sdmVzIHRvIHRoZSByYXcgSlNPTiBvblxuICAvLyBzdWNjZXNzLCBvciBudWxsIG9uIGZhaWx1cmUgKHNvIGZ1bGZpbGxQcm9taXNlIGtlZXBzIHRoZSBjdXJyZW50IHJpYmJvbikuXG4gIGFzeW5jIGZ1bmN0aW9uIHB1bGxGb3JlY2FzdCh2YWx1ZSkge1xuICAgIGNvbnN0IHVybCA9ICdodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0zOWMyOGY4NWFiMDM0NTIxYjk5MjE3MDUyMzI3MTAmcT0nICsgdmFsdWUgKyAnJmRheXM9MyZhcWk9bm8mYWxlcnRzPW5vJztcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgeyBtb2RlOiAnY29ycycgfSk7XG5cbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBTdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBmb3JlY2FzdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgdmFsaWRJbnB1dCgpO1xuXG4gICAgICByZXR1cm4gZm9yZWNhc3Q7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBjYXRjaGVzIGVycm9ycyBib3RoIGluIGZldGNoIGFuZCByZXNwb25zZS5qc29uXG4gICAgICBpbnZhbGlkSW5wdXQoKTtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcHVsbEZvcmVjYXN0LFxuICAgIGZ1dHVyZUFQSUNhbGxzLFxuICB9O1xuXG59KSgpOyAvLyBlbmRzIGZvcmVjYXN0TG9naWMgZnVuY3Rpb25cbiIsIi8vIHJpYmJvbi5qcyDigJQgdGhlIDcyLWhvdXIgdGVtcGVyYXR1cmUgcmliYm9uLlxuLy9cbi8vIFRoZSBmb3JlY2FzdCBpcyBvbmUgY29udGludW91cyB0ZW1wZXJhdHVyZSBjdXJ2ZSBhY3Jvc3MgYWxsIHRocmVlIGRheXMgcmF0aGVyXG4vLyB0aGFuIHRocmVlIGNhcmQgc3RhdGVzIHlvdSBwYWdlIGJldHdlZW4sIHNvIG5hdmlnYXRpb24gc3RvcHMgYmVpbmcgYSBjb25jZXB0OlxuLy8gZXZlcnkgaG91ciBpcyBvbiBzY3JlZW4gYXQgb25jZS4gQ29sb3VyIGlzIGEgZnVuY3Rpb24gb2YgdGhlIHRlbXBlcmF0dXJlXG4vLyBzY2FsYXIgKGNvbGQgLT4gbWlsZCAtPiB3YXJtIC0+IGhvdCksIE5PVCB0aGUgY29uZGl0aW9uIGNhdGVnb3J5LCBzbyB0aGVyZSBpc1xuLy8gbm8gcGVyLWNvbmRpdGlvbiBicmFuY2ggdG8gd3JpdGUgYW5kIG5vIGVpZ2h0aCBjYXNlIHRvIGZvcmdldC5cbi8vXG4vLyBidWlsZFJpYmJvbihtb3VudCkgY3JlYXRlcyB0aGUgU1ZHIHNjYWZmb2xkIG9uY2UgYXQgYm9vdHN0cmFwIChkZWZzLCBncmFkaWVudHMsXG4vLyBlbXB0eSBncm91cHMpIGFuZCBjYWNoZXMgZWxlbWVudCByZWZzLiByZW5kZXJGb3JlY2FzdCgpIGluIGluZGV4Q2hhbmdlcy5qc1xuLy8gY2FsbHMgcmVuZGVyUmliYm9uKGZvcmVjYXN0KSBvbiBldmVyeSByZXNvbHZlZCByZXNwb25zZSB0byByZWRyYXcgdGhlIGN1cnZlLFxuLy8gdGhlIGRheSBoYWlybGluZXMvdGlja3MgYW5kIHRoZSBjdXJyZW50LWhvdXIgbWFya2VyIGZyb20gZGF0YS4gY3VycmVudEhvdXJJbmRleFxuLy8gaXMgdGhlIHNpbmdsZSBzb3VyY2Ugb2YgdHJ1dGggZm9yIFwibm93XCIsIHNoYXJlZCB3aXRoIHRoZSByZWFkb3V0IHNvIHRoZSBtYXJrZXJcbi8vIGFuZCB0aGUgc3RhdCByb3cgbmV2ZXIgZGlzYWdyZWUuXG4vL1xuLy8gSGFuZC1hdXRob3JlZCBTVkcsIHZhbmlsbGEgb25seSDigJQgbm8gY2hhcnRpbmcgbGlicmFyeSwgbm8gZGVwZW5kZW5jaWVzLlxuXG5jb25zdCBOUyA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc7XG5cbi8vIHZpZXdCb3ggZ2VvbWV0cnksIGluIHVzZXIgdW5pdHMuIFRoZSBjdXJ2ZSBiYW5kIHNpdHMgYmV0d2VlbiBDSEFSVF9UT1AgYW5kXG4vLyBDSEFSVF9UT1ArQ0hBUlRfSDsgVElDS19IIGJlbmVhdGggaXQgY2FycmllcyB0aGUgV0VEL1RIVS9GUkkgZGF5IGxhYmVscy4gQVxuLy8gc2Vjb25kIGxhbmUgKHRpZGVzLCBvdXQgb2Ygc2NvcGUgdG9kYXkpIHdvdWxkIGFkZCBMQU5FX0ggYmVsb3cgdGhhdCDigJQgdGhlXG4vLyB2aWV3Qm94IGhlaWdodCBzd2l0Y2hlcyBiZXR3ZWVuIHR3byB2YWx1ZXMgZGVwZW5kaW5nIG9uIHdoZXRoZXIgdGhlIGxhbmVcbi8vIGV4aXN0cywgc28gdGhlIGxheW91dCBpcyBidWlsdCBsYW5lLW9wdGlvbmFsIGV2ZW4gdGhvdWdoIHRoZSBsYW5lIG5ldmVyXG4vLyByZW5kZXJzIGZvciBub3cuXG5jb25zdCBWSUVXX1cgPSA3MjA7XG5jb25zdCBQQURfTCA9IDEwO1xuY29uc3QgUEFEX1IgPSAxMDtcbmNvbnN0IENIQVJUX1RPUCA9IDE4O1xuY29uc3QgQ0hBUlRfSCA9IDE1MDtcbmNvbnN0IFRJQ0tfSCA9IDI2O1xuY29uc3QgTEFORV9IID0gOTA7XG5cbi8vIFRlbXBlcmF0dXJlIC0+IGNvbG91ciByYW1wLiBGb3VyIGFuY2hvcnMgc3Bhbm5pbmcgYSBmaXhlZCDCsEMgZG9tYWluIHNvIHRoZVxuLy8gc2FtZSB0ZW1wZXJhdHVyZSBhbHdheXMgcmVhZHMgdGhlIHNhbWUgY29sb3VyIHJlZ2FyZGxlc3Mgb2YgdGhlIGRheSdzIHJhbmdlLlxuY29uc3QgUkFNUCA9IFtcbiAgeyB0OiAtNSwgYzogWzB4M2QsIDB4NmYsIDB4YThdIH0sIC8vIGNvbGRcbiAgeyB0OiAxMCwgYzogWzB4NmYsIDB4YTgsIDB4YTBdIH0sIC8vIG1pbGRcbiAgeyB0OiAyNSwgYzogWzB4ZDksIDB4YTQsIDB4NDFdIH0sIC8vIHdhcm1cbiAgeyB0OiA0MCwgYzogWzB4YzIsIDB4NDUsIDB4MmRdIH0sIC8vIGhvdFxuXTtcblxuY29uc3QgV0VFS0RBWSA9IFsnU1VOJywgJ01PTicsICdUVUUnLCAnV0VEJywgJ1RIVScsICdGUkknLCAnU0FUJ107XG5cbi8vIENhY2hlZCBzY2FmZm9sZCByZWZzLCBwb3B1bGF0ZWQgb25jZSBieSBidWlsZFJpYmJvbigpLlxubGV0IHN2ZywgdGVtcEdyYWQsIGZpbGxQYXRoLCBjdXJ2ZVBhdGgsIGJvdW5kYXJ5R3JvdXAsIHRpY2tHcm91cCwgbWFya2VyR3JvdXAsXG4gIGxhbmVHcm91cDtcblxuZnVuY3Rpb24gZWwobmFtZSwgYXR0cnMpIHtcbiAgY29uc3Qgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhOUywgbmFtZSk7XG4gIGlmIChhdHRycykge1xuICAgIGZvciAoY29uc3QgayBpbiBhdHRycykgeyBub2RlLnNldEF0dHJpYnV0ZShrLCBhdHRyc1trXSk7IH1cbiAgfVxuICByZXR1cm4gbm9kZTtcbn1cblxuZnVuY3Rpb24gbGVycChhLCBiLCBmKSB7IHJldHVybiBhICsgKGIgLSBhKSAqIGY7IH1cblxuLy8gQ29sb3VyIGZvciBhIHRlbXBlcmF0dXJlLCBpbnRlcnBvbGF0ZWQgYWNyb3NzIHRoZSByYW1wIGFuY2hvcnMgYW5kIGNsYW1wZWQgdG9cbi8vIHRoZSBkb21haW4gZW5kcy5cbmZ1bmN0aW9uIHRlbXBDb2xvdXIodGVtcCkge1xuICBpZiAodGVtcCA8PSBSQU1QWzBdLnQpIHsgcmV0dXJuIHJnYihSQU1QWzBdLmMpOyB9XG4gIGlmICh0ZW1wID49IFJBTVBbUkFNUC5sZW5ndGggLSAxXS50KSB7IHJldHVybiByZ2IoUkFNUFtSQU1QLmxlbmd0aCAtIDFdLmMpOyB9XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgUkFNUC5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0ZW1wIDw9IFJBTVBbaV0udCkge1xuICAgICAgY29uc3QgbG8gPSBSQU1QW2kgLSAxXTtcbiAgICAgIGNvbnN0IGhpID0gUkFNUFtpXTtcbiAgICAgIGNvbnN0IGYgPSAodGVtcCAtIGxvLnQpIC8gKGhpLnQgLSBsby50KTtcbiAgICAgIHJldHVybiByZ2IoW1xuICAgICAgICBNYXRoLnJvdW5kKGxlcnAobG8uY1swXSwgaGkuY1swXSwgZikpLFxuICAgICAgICBNYXRoLnJvdW5kKGxlcnAobG8uY1sxXSwgaGkuY1sxXSwgZikpLFxuICAgICAgICBNYXRoLnJvdW5kKGxlcnAobG8uY1syXSwgaGkuY1syXSwgZikpLFxuICAgICAgXSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZ2IoUkFNUFtSQU1QLmxlbmd0aCAtIDFdLmMpO1xufVxuXG5mdW5jdGlvbiByZ2IoYykgeyByZXR1cm4gJ3JnYignICsgY1swXSArICcsJyArIGNbMV0gKyAnLCcgKyBjWzJdICsgJyknOyB9XG5cbmZ1bmN0aW9uIHdlZWtkYXlBYmJyKGRhdGVTdHIpIHtcbiAgLy8gZGF0ZVN0ciBpcyAnWVlZWS1NTS1ERCcuIEJ1aWxkIHRoZSBkYXRlIGF0IFVUQyBtaWRuaWdodCBzbyB0aGUgd2Vla2RheSBuZXZlclxuICAvLyBzaGlmdHMgYWNyb3NzIGEgdGltZXpvbmUgYm91bmRhcnkuXG4gIGNvbnN0IHAgPSBTdHJpbmcoZGF0ZVN0cikuc3BsaXQoJy0nKTtcbiAgY29uc3QgZCA9IG5ldyBEYXRlKERhdGUuVVRDKCtwWzBdLCAoK3BbMV0pIC0gMSwgK3BbMl0pKTtcbiAgcmV0dXJuIFdFRUtEQVlbZC5nZXRVVENEYXkoKV0gfHwgJyc7XG59XG5cbi8vIEluZGV4IG9mIHRoZSBob3VyIGJ1Y2tldCBuZWFyZXN0IFwibm93XCIuIERyaXZlbiBvZmYgbG9jYXRpb24ubG9jYWx0aW1lX2Vwb2NoLFxuLy8gTk9UIGEgcGFyc2VkIGRhdGUtc3RyaW5nIGhvdXIg4oCUIHRoZSBvbGQgZ2V0Q3VycmVudFRpbWUoKSByZWFkIHRoZSBob3VyIG91dCBvZlxuLy8gZGF0ZV9lcG9jaCAobG9jYWwgbWlkbmlnaHQpIGFuZCByZXR1cm5lZCB0aGUgVVRDIG9mZnNldCwgc28gXCJmZWVscyBsaWtlXCIgd2FzIGFcbi8vIGZpeGVkIGFyYml0cmFyeSBob3VyLiBsb2NhbHRpbWVfZXBvY2ggaXMgdGhlIGxvY2F0aW9uJ3MgcmVhbCBjdXJyZW50IHRpbWUuXG5leHBvcnQgZnVuY3Rpb24gY3VycmVudEhvdXJJbmRleChmb3JlY2FzdCkge1xuICBjb25zdCBob3VycyA9IGZvcmVjYXN0LmhvdXJzO1xuICBpZiAoIWhvdXJzIHx8ICFob3Vycy5sZW5ndGgpIHsgcmV0dXJuIDA7IH1cbiAgY29uc3Qgbm93ID0gZm9yZWNhc3QubG9jYXRpb24ubG9jYWx0aW1lX2Vwb2NoO1xuICBsZXQgYmVzdCA9IDA7XG4gIGxldCBiZXN0RGlmZiA9IEluZmluaXR5O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGhvdXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgZGlmZiA9IE1hdGguYWJzKGhvdXJzW2ldLmVwb2NoIC0gbm93KTtcbiAgICBpZiAoZGlmZiA8IGJlc3REaWZmKSB7IGJlc3REaWZmID0gZGlmZjsgYmVzdCA9IGk7IH1cbiAgfVxuICByZXR1cm4gYmVzdDtcbn1cblxuLy8gQ3JlYXRlIHRoZSBTVkcgc2NhZmZvbGQgb25jZS4gQ2FsbGVkIGZyb20gaW5kZXguanMgYXQgYm9vdHN0cmFwLCBhZnRlciB0aGVcbi8vIG1vdW50IGVsZW1lbnQgaXMgaW4gdGhlIERPTS5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFJpYmJvbihtb3VudCkge1xuICBpZiAoc3ZnKSB7IHJldHVybjsgfSAvLyBidWlsZCBvbmNlXG5cbiAgc3ZnID0gZWwoJ3N2ZycsIHtcbiAgICBpZDogJ3JpYmJvblN2ZycsXG4gICAgdmlld0JveDogJzAgMCAnICsgVklFV19XICsgJyAnICsgKENIQVJUX1RPUCArIENIQVJUX0ggKyBUSUNLX0gpLFxuICAgIHByZXNlcnZlQXNwZWN0UmF0aW86ICd4TWlkWU1pZCBtZWV0JyxcbiAgfSk7XG5cbiAgY29uc3QgZGVmcyA9IGVsKCdkZWZzJyk7XG5cbiAgLy8gSG9yaXpvbnRhbCBzdHJva2UgZ3JhZGllbnQ6IGNvbG91cmVkIGJ5IHRlbXBlcmF0dXJlIGFjcm9zcyB0aGUgNzIgaG91cnMuXG4gIC8vIFN0b3BzIGFyZSByZWJ1aWx0IGVhY2ggcmVuZGVyIGZyb20gdGhlIGFjdHVhbCBzZXJpZXMuXG4gIHRlbXBHcmFkID0gZWwoJ2xpbmVhckdyYWRpZW50Jywge1xuICAgIGlkOiAndGVtcEdyYWQnLCB4MTogJzAnLCB5MTogJzAnLCB4MjogJzEnLCB5MjogJzAnLFxuICB9KTtcblxuICAvLyBWZXJ0aWNhbCBmYWRlIGZpbGwgdW5kZXIgdGhlIGN1cnZlLlxuICBjb25zdCBmaWxsR3JhZCA9IGVsKCdsaW5lYXJHcmFkaWVudCcsIHtcbiAgICBpZDogJ2ZpbGxHcmFkJywgeDE6ICcwJywgeTE6ICcwJywgeDI6ICcwJywgeTI6ICcxJyxcbiAgfSk7XG4gIGZpbGxHcmFkLmFwcGVuZENoaWxkKGVsKCdzdG9wJywgeyBvZmZzZXQ6ICcwJywgJ3N0b3AtY29sb3InOiAnIzhDQTBBRScsICdzdG9wLW9wYWNpdHknOiAnMC4yOCcgfSkpO1xuICBmaWxsR3JhZC5hcHBlbmRDaGlsZChlbCgnc3RvcCcsIHsgb2Zmc2V0OiAnMScsICdzdG9wLWNvbG9yJzogJyM4Q0EwQUUnLCAnc3RvcC1vcGFjaXR5JzogJzAnIH0pKTtcblxuICBkZWZzLmFwcGVuZENoaWxkKHRlbXBHcmFkKTtcbiAgZGVmcy5hcHBlbmRDaGlsZChmaWxsR3JhZCk7XG4gIHN2Zy5hcHBlbmRDaGlsZChkZWZzKTtcblxuICBmaWxsUGF0aCA9IGVsKCdwYXRoJywgeyBjbGFzczogJ3JpYmJvbi1maWxsJywgZmlsbDogJ3VybCgjZmlsbEdyYWQpJywgc3Ryb2tlOiAnbm9uZScgfSk7XG4gIGN1cnZlUGF0aCA9IGVsKCdwYXRoJywgeyBjbGFzczogJ3JpYmJvbi1jdXJ2ZScsIGZpbGw6ICdub25lJywgc3Ryb2tlOiAndXJsKCN0ZW1wR3JhZCknIH0pO1xuICBib3VuZGFyeUdyb3VwID0gZWwoJ2cnLCB7IGNsYXNzOiAncmliYm9uLWJvdW5kYXJpZXMnIH0pO1xuICB0aWNrR3JvdXAgPSBlbCgnZycsIHsgY2xhc3M6ICdyaWJib24tdGlja3MnIH0pO1xuICBtYXJrZXJHcm91cCA9IGVsKCdnJywgeyBjbGFzczogJ3JpYmJvbi1tYXJrZXInIH0pO1xuICBsYW5lR3JvdXAgPSBlbCgnZycsIHsgY2xhc3M6ICdyaWJib24tbGFuZScgfSk7XG5cbiAgc3ZnLmFwcGVuZENoaWxkKGZpbGxQYXRoKTtcbiAgc3ZnLmFwcGVuZENoaWxkKGN1cnZlUGF0aCk7XG4gIHN2Zy5hcHBlbmRDaGlsZChib3VuZGFyeUdyb3VwKTtcbiAgc3ZnLmFwcGVuZENoaWxkKHRpY2tHcm91cCk7XG4gIHN2Zy5hcHBlbmRDaGlsZChsYW5lR3JvdXApO1xuICBzdmcuYXBwZW5kQ2hpbGQobWFya2VyR3JvdXApO1xuXG4gIG1vdW50LmFwcGVuZENoaWxkKHN2Zyk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyKG5vZGUpIHtcbiAgd2hpbGUgKG5vZGUuZmlyc3RDaGlsZCkgeyBub2RlLnJlbW92ZUNoaWxkKG5vZGUuZmlyc3RDaGlsZCk7IH1cbn1cblxuLy8gUmVkcmF3IHRoZSB3aG9sZSByaWJib24gZnJvbSBhIGZvcmVjYXN0OiB7IGxvY2F0aW9uLCBob3Vyc1tdLCBkYXlzW10sIGxhbmU/IH0uXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyUmliYm9uKGZvcmVjYXN0KSB7XG4gIGlmICghc3ZnKSB7IHJldHVybjsgfVxuXG4gIGNvbnN0IGhvdXJzID0gZm9yZWNhc3QuaG91cnMgfHwgW107XG4gIGNvbnN0IG4gPSBob3Vycy5sZW5ndGg7XG4gIGlmICghbikgeyByZXR1cm47IH1cblxuICBjb25zdCBsYW5lT24gPSAhIWZvcmVjYXN0LmxhbmU7XG4gIGNvbnN0IHRvdGFsSCA9IENIQVJUX1RPUCArIENIQVJUX0ggKyBUSUNLX0ggKyAobGFuZU9uID8gTEFORV9IIDogMCk7XG4gIHN2Zy5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCAnMCAwICcgKyBWSUVXX1cgKyAnICcgKyB0b3RhbEgpO1xuXG4gIGNvbnN0IGlubmVyVyA9IFZJRVdfVyAtIFBBRF9MIC0gUEFEX1I7XG4gIGNvbnN0IGJhc2VsaW5lID0gQ0hBUlRfVE9QICsgQ0hBUlRfSDtcblxuICAvLyB0ZW1wZXJhdHVyZSBkb21haW4gZm9yIHRoZSB5LXNjYWxlLCBwYWRkZWQgc28gdGhlIGN1cnZlIG5ldmVyIGh1Z3MgYW4gZWRnZS5cbiAgbGV0IG1pbiA9IEluZmluaXR5O1xuICBsZXQgbWF4ID0gLUluZmluaXR5O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgIGlmIChob3Vyc1tpXS50ZW1wIDwgbWluKSB7IG1pbiA9IGhvdXJzW2ldLnRlbXA7IH1cbiAgICBpZiAoaG91cnNbaV0udGVtcCA+IG1heCkgeyBtYXggPSBob3Vyc1tpXS50ZW1wOyB9XG4gIH1cbiAgaWYgKG1pbiA9PT0gbWF4KSB7IG1pbiAtPSAxOyBtYXggKz0gMTsgfVxuICBjb25zdCBzcGFuID0gbWF4IC0gbWluO1xuXG4gIGNvbnN0IHggPSAoaSkgPT4gUEFEX0wgKyAobiA8PSAxID8gMCA6IChpIC8gKG4gLSAxKSkgKiBpbm5lclcpO1xuICBjb25zdCB5ID0gKHQpID0+IENIQVJUX1RPUCArICgxIC0gKHQgLSBtaW4pIC8gc3BhbikgKiBDSEFSVF9IO1xuXG4gIC8vIEJ1aWxkIHRoZSBwb2ludHMsIHRoZW4gYSBzbW9vdGggcGF0aCB2aWEgcXVhZHJhdGljIG1pZHBvaW50cyAobm8gb3ZlcnNob290KS5cbiAgY29uc3QgcHRzID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7IHB0cy5wdXNoKHsgeDogeChpKSwgeTogeShob3Vyc1tpXS50ZW1wKSB9KTsgfVxuXG4gIGxldCBkID0gJ00gJyArIHB0c1swXS54LnRvRml4ZWQoMikgKyAnICcgKyBwdHNbMF0ueS50b0ZpeGVkKDIpO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IHB0cy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHhjID0gKHB0c1tpIC0gMV0ueCArIHB0c1tpXS54KSAvIDI7XG4gICAgY29uc3QgeWMgPSAocHRzW2kgLSAxXS55ICsgcHRzW2ldLnkpIC8gMjtcbiAgICBkICs9ICcgUSAnICsgcHRzW2kgLSAxXS54LnRvRml4ZWQoMikgKyAnICcgKyBwdHNbaSAtIDFdLnkudG9GaXhlZCgyKSArXG4gICAgICAnICcgKyB4Yy50b0ZpeGVkKDIpICsgJyAnICsgeWMudG9GaXhlZCgyKTtcbiAgfVxuICBkICs9ICcgTCAnICsgcHRzW24gLSAxXS54LnRvRml4ZWQoMikgKyAnICcgKyBwdHNbbiAtIDFdLnkudG9GaXhlZCgyKTtcblxuICBjdXJ2ZVBhdGguc2V0QXR0cmlidXRlKCdkJywgZCk7XG4gIGZpbGxQYXRoLnNldEF0dHJpYnV0ZSgnZCcsIGQgK1xuICAgICcgTCAnICsgcHRzW24gLSAxXS54LnRvRml4ZWQoMikgKyAnICcgKyBiYXNlbGluZSArXG4gICAgJyBMICcgKyBwdHNbMF0ueC50b0ZpeGVkKDIpICsgJyAnICsgYmFzZWxpbmUgKyAnIFonKTtcblxuICAvLyBIb3Jpem9udGFsIHRlbXBlcmF0dXJlIGdyYWRpZW50OiBvbmUgc3RvcCBwZXIgaG91ciwgY29sb3VyZWQgYnkgdGhhdCBob3VyJ3NcbiAgLy8gdGVtcGVyYXR1cmUuIG9iamVjdEJvdW5kaW5nQm94IG1hcHMgb2Zmc2V0IGkvKG4tMSkgb250byB0aGUgY3VydmUncyB4LCB3aGljaFxuICAvLyBzcGFucyB0aGUgZnVsbCBpbm5lciB3aWR0aCwgc28gZWFjaCBzdG9wIGxhbmRzIHVuZGVyIGl0cyBob3VyLlxuICBjbGVhcih0ZW1wR3JhZCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgdGVtcEdyYWQuYXBwZW5kQ2hpbGQoZWwoJ3N0b3AnLCB7XG4gICAgICBvZmZzZXQ6IChuIDw9IDEgPyAwIDogaSAvIChuIC0gMSkpLnRvRml4ZWQoNCksXG4gICAgICAnc3RvcC1jb2xvcic6IHRlbXBDb2xvdXIoaG91cnNbaV0udGVtcCksXG4gICAgfSkpO1xuICB9XG5cbiAgLy8gRGF5IGhhaXJsaW5lcyArIFdFRC9USFUvRlJJIHRpY2tzLCBkZXJpdmVkIGZyb20gdGhlIHBlci1kYXkgaG91ciBjb3VudHMgc28gYVxuICAvLyBzaG9ydCB0cmFpbGluZyBkYXkgc3RpbGwgbGluZXMgdXAuXG4gIGNsZWFyKGJvdW5kYXJ5R3JvdXApO1xuICBjbGVhcih0aWNrR3JvdXApO1xuICBjb25zdCBkYXlzID0gZm9yZWNhc3QuZGF5cyB8fCBbXTtcbiAgbGV0IHN0YXJ0ID0gMDtcbiAgZm9yIChsZXQgZGkgPSAwOyBkaSA8IGRheXMubGVuZ3RoOyBkaSsrKSB7XG4gICAgY29uc3QgY291bnQgPSBkYXlzW2RpXS5jb3VudCB8fCAwO1xuICAgIGlmIChjb3VudCA8PSAwKSB7IGNvbnRpbnVlOyB9XG5cbiAgICBpZiAoZGkgPiAwICYmIHN0YXJ0IDwgbikge1xuICAgICAgY29uc3QgYnggPSB4KHN0YXJ0KS50b0ZpeGVkKDIpO1xuICAgICAgYm91bmRhcnlHcm91cC5hcHBlbmRDaGlsZChlbCgnbGluZScsIHtcbiAgICAgICAgY2xhc3M6ICdyaWJib24taGFpcmxpbmUnLFxuICAgICAgICB4MTogYngsIHkxOiBDSEFSVF9UT1AsIHgyOiBieCwgeTI6IGJhc2VsaW5lLFxuICAgICAgfSkpO1xuICAgIH1cblxuICAgIGNvbnN0IGNlbnRlcklkeCA9IHN0YXJ0ICsgKGNvdW50IC0gMSkgLyAyO1xuICAgIGNvbnN0IHRpY2sgPSBlbCgndGV4dCcsIHtcbiAgICAgIGNsYXNzOiAncmliYm9uLXRpY2snLFxuICAgICAgeDogeChjZW50ZXJJZHgpLnRvRml4ZWQoMiksXG4gICAgICB5OiAoYmFzZWxpbmUgKyBUSUNLX0ggKiAwLjcpLnRvRml4ZWQoMiksXG4gICAgICAndGV4dC1hbmNob3InOiAnbWlkZGxlJyxcbiAgICB9KTtcbiAgICB0aWNrLnRleHRDb250ZW50ID0gd2Vla2RheUFiYnIoZGF5c1tkaV0uZGF0ZSk7XG4gICAgdGlja0dyb3VwLmFwcGVuZENoaWxkKHRpY2spO1xuXG4gICAgc3RhcnQgKz0gY291bnQ7XG4gIH1cblxuICAvLyBDdXJyZW50LWhvdXIgbWFya2VyOiBhIGhhaXJsaW5lIGRyb3BwZWQgdG8gdGhlIGJhc2VsaW5lIHBsdXMgYSBkb3Qgb24gdGhlXG4gIC8vIGN1cnZlLCB0aGUgZG90IGZpbGxlZCB3aXRoIHRoZSB0ZW1wZXJhdHVyZSBjb2xvdXIgZm9yIHRoYXQgaG91ci5cbiAgY2xlYXIobWFya2VyR3JvdXApO1xuICBjb25zdCBpZHggPSBjdXJyZW50SG91ckluZGV4KGZvcmVjYXN0KTtcbiAgY29uc3QgbXggPSB4KGlkeCk7XG4gIGNvbnN0IG15ID0geShob3Vyc1tpZHhdLnRlbXApO1xuICBtYXJrZXJHcm91cC5hcHBlbmRDaGlsZChlbCgnbGluZScsIHtcbiAgICBjbGFzczogJ3JpYmJvbi1ub3dsaW5lJyxcbiAgICB4MTogbXgudG9GaXhlZCgyKSwgeTE6IG15LnRvRml4ZWQoMiksIHgyOiBteC50b0ZpeGVkKDIpLCB5MjogYmFzZWxpbmUsXG4gIH0pKTtcbiAgbWFya2VyR3JvdXAuYXBwZW5kQ2hpbGQoZWwoJ2NpcmNsZScsIHtcbiAgICBjbGFzczogJ3JpYmJvbi1kb3QnLFxuICAgIGN4OiBteC50b0ZpeGVkKDIpLCBjeTogbXkudG9GaXhlZCgyKSwgcjogJzUuNScsXG4gICAgZmlsbDogdGVtcENvbG91cihob3Vyc1tpZHhdLnRlbXApLFxuICB9KSk7XG5cbiAgLy8gT3B0aW9uYWwgc2Vjb25kIGxhbmUuIE5vIGRhdGEgZmVlZHMgaXQgdG9kYXkgKHRpZGVzIGFyZSBQcm8rIGFuZCBlbXB0eSBmb3JcbiAgLy8gaW5sYW5kIGxvY2F0aW9ucyksIHNvIGl0IHN0YXlzIGVtcHR5IGFuZCB0aGUgdmlld0JveCB1c2VzIHRoZSBzaG9ydGVyIG9mIHRoZVxuICAvLyB0d28gaGVpZ2h0cyDigJQgYnV0IHRoZSBncm91cCBhbmQgdGhlIGhlaWdodCBzd2l0Y2ggZXhpc3Qgc28gYSBsYW5lIGNhbiBkcm9wIGluXG4gIC8vIHdpdGhvdXQgYSBsYXlvdXQgcmV3cml0ZS5cbiAgY2xlYXIobGFuZUdyb3VwKTtcbiAgaWYgKGxhbmVPbiAmJiB0eXBlb2YgZm9yZWNhc3QubGFuZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGZvcmVjYXN0LmxhbmUobGFuZUdyb3VwLCB7IHgsIGJhc2VsaW5lLCBsYW5lVG9wOiBiYXNlbGluZSArIFRJQ0tfSCwgbGFuZUg6IExBTkVfSCB9KTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9XZWF0aGVyQXBwX1RPUC9cIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImNoYW5nZXNcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXhDaGFuZ2VzLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9