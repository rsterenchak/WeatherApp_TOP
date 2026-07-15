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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naWMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMscUhBQXVDO0FBQ25GLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLE9BQU8sUUFBUSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxZQUFZLE1B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a0JBQWtCO0FBQ3JDO0FBQ0Esc0JBQXNCOztBQUV0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isd0RBQXdEO0FBQ3ZGO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNVFBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1dDQUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL3NyYy9pbmRleENoYW5nZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vc3JjL2xvZ2ljLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL3NyYy9yaWJib24uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vUm9ib3RvLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgZm9udC13ZWlnaHQ6IDMwMCA0MDA7XG59XG5cbi8qIFBhbGV0dGU6XG4gICBncm91bmQgICMxMjE4MUYgICBydWxlcyAgIzI2MzEzQlxuICAgdGV4dCAgICAjRUFFRUYyIChwcmltYXJ5KSAvICM4Q0EwQUUgKG11dGVkKVxuICAgVGhlIHRlbXBlcmF0dXJlIGNvbG91cnMgbGl2ZSBpbiByaWJib24uanMgKHRoZSBjdXJ2ZSBpcyBjb2xvdXJlZCBieSB0aGVcbiAgIHRlbXBlcmF0dXJlIHNjYWxhciwgbm90IGJ5IENTUykuICovXG46cm9vdCB7XG4gIC0tZ3JvdW5kOiAjMTIxODFGO1xuICAtLXJ1bGU6ICMyNjMxM0I7XG4gIC0tdGV4dDogI0VBRUVGMjtcbiAgLS1tdXRlZDogIzhDQTBBRTtcbiAgLS1tb25vOiAnU0ZNb25vLVJlZ3VsYXInLCAnU0YgTW9ubycsICdNZW5sbycsICdDb25zb2xhcycsICdMaWJlcmF0aW9uIE1vbm8nLCBtb25vc3BhY2U7XG59XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncm91bmQpO1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuLyogZHZoIChub3QgdmgpOiBvbiBpT1MgU2FmYXJpIHZoIHJlc29sdmVzIHRvIHRoZSB0YWxsIHZpZXdwb3J0IGFuZCBwYXJrcyB0aGVcbiAgIGJvdHRvbSBvZiB0aGUgbGF5b3V0IHVuZGVyIHRoZSBVUkwgYmFyLiAqL1xuI2FwcCB7XG4gIG1pbi1oZWlnaHQ6IDEwMGR2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMjhweDtcbiAgbWF4LXdpZHRoOiA3MjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDMycHggMjBweDtcbn1cblxuLyogUmliYm9uOiB0aGUgU1ZHIHNjYWxlcyB0byB0aGUgY29sdW1uIHdpZHRoIHZpYSB0aGUgdmlld0JveCwgc28gYWxsIDcyIGhvdXJzXG4gICBhcmUgb24gc2NyZWVuIGF0IGFueSB3aWR0aCBkb3duIHRvIDM4MHB4IHdpdGhvdXQgc2Nyb2xsIG9yIHBhbi4gKi9cbiNyaWJib25XcmFwIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbiNyaWJib25Tdmcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG5cbi5yaWJib24tY3VydmUge1xuICBzdHJva2Utd2lkdGg6IDIuNTtcbiAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xuICBzdHJva2UtbGluZWpvaW46IHJvdW5kO1xufVxuXG4vKiBEYXkgYm91bmRhcnkgaGFpcmxpbmVzIGF0IGhvdXJzIDI0IGFuZCA0OC4gKi9cbi5yaWJib24taGFpcmxpbmUge1xuICBzdHJva2U6IHZhcigtLXJ1bGUpO1xuICBzdHJva2Utd2lkdGg6IDE7XG59XG5cbi5yaWJib24tdGljayB7XG4gIGZpbGw6IHZhcigtLW11dGVkKTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1vbm8pO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG5cbi5yaWJib24tbm93bGluZSB7XG4gIHN0cm9rZTogdmFyKC0tbXV0ZWQpO1xuICBzdHJva2Utd2lkdGg6IDE7XG4gIHN0cm9rZS1kYXNoYXJyYXk6IDIgMztcbiAgb3BhY2l0eTogMC43O1xufVxuXG4ucmliYm9uLWRvdCB7XG4gIHN0cm9rZTogdmFyKC0tZ3JvdW5kKTtcbiAgc3Ryb2tlLXdpZHRoOiAyO1xufVxuXG4vKiBSZWFkb3V0IGJlbmVhdGggdGhlIGN1cnZlLiAqL1xuI3JlYWRvdXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jbG9jYXRpb25OYW1lIHtcbiAgZm9udC1mYW1pbHk6IHZhcigtLW1vbm8pO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XG59XG5cbi8qIFJvYm90byBMaWdodCA0MHB4IGZvciB0aGUgcmVhZGluZy4gKi9cbiNjdXJyZW50VGVtcCB7XG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBsaW5lLWhlaWdodDogMS4xO1xufVxuXG4jY3VycmVudENvbmRpdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xufVxuXG4vKiBGb3VyLXVwIHN0YXQgcm93OiB0ZXh0IGxhYmVscywgbm8gaWNvbnMuICovXG4jc3RhdFJvdyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG4gIGdhcDogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDE0cHg7XG59XG5cbi5zdGF0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA0cHg7XG4gIHBhZGRpbmc6IDEycHggNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ydWxlKTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4uc3RhdC1sYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tb25vKTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xufVxuXG4uc3RhdC12YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xufVxuXG4vKiBTZWFyY2ggZm9ybS4gKi9cbiNzZWFyY2hGb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuI3NlYXJjaElucHV0IHtcbiAgZmxleDogMTtcbiAgbWluLXdpZHRoOiAwO1xuICBwYWRkaW5nOiAxMnB4IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tb25vKTtcbiAgZm9udC1zaXplOiAxNnB4OyAvKiAxNnB4IHNvIGlPUyBTYWZhcmkgZG9lc24ndCBhdXRvLXpvb20gdGhlIGlucHV0IG9uIGZvY3VzICovXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXJ1bGUpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbiNzZWFyY2hJbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xufVxuXG4jc2VhcmNoSW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItY29sb3I6IHZhcigtLW11dGVkKTtcbn1cblxuLyogRmFpbGVkIGxvb2t1cDogcmVkZGVuZWQgYm9yZGVyLCBjdXJyZW50IHJpYmJvbiBsZWZ0IGluIHBsYWNlLiAqL1xuI3NlYXJjaEZvcm0uaW52YWxpZCAjc2VhcmNoSW5wdXQge1xuICBib3JkZXItY29sb3I6ICNDMjQ1MkQ7XG59XG5cbiNzZWFyY2hCdXR0b24ge1xuICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tb25vKTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBjb2xvcjogdmFyKC0tZ3JvdW5kKTtcbiAgYmFja2dyb3VuZDogdmFyKC0tdGV4dCk7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNzZWFyY2hCdXR0b246aG92ZXIge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45Mik7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAjYXBwIHtcbiAgICBnYXA6IDIycHg7XG4gICAgcGFkZGluZzogMjRweCAxNnB4O1xuICB9XG5cbiAgI3N0YXRSb3cge1xuICAgIGdhcDogOHB4O1xuICB9XG5cbiAgLnN0YXQge1xuICAgIHBhZGRpbmc6IDEwcHggNHB4O1xuICB9XG5cbiAgLnN0YXQtdmFsdWUge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxc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dC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gIHNyYzogdXJsKCcuL1JvYm90by1SZWd1bGFyLnR0ZicpO1xcbiAgZm9udC13ZWlnaHQ6IDMwMCA0MDA7XFxufVxcblxcbi8qIFBhbGV0dGU6XFxuICAgZ3JvdW5kICAjMTIxODFGICAgcnVsZXMgICMyNjMxM0JcXG4gICB0ZXh0ICAgICNFQUVFRjIgKHByaW1hcnkpIC8gIzhDQTBBRSAobXV0ZWQpXFxuICAgVGhlIHRlbXBlcmF0dXJlIGNvbG91cnMgbGl2ZSBpbiByaWJib24uanMgKHRoZSBjdXJ2ZSBpcyBjb2xvdXJlZCBieSB0aGVcXG4gICB0ZW1wZXJhdHVyZSBzY2FsYXIsIG5vdCBieSBDU1MpLiAqL1xcbjpyb290IHtcXG4gIC0tZ3JvdW5kOiAjMTIxODFGO1xcbiAgLS1ydWxlOiAjMjYzMTNCO1xcbiAgLS10ZXh0OiAjRUFFRUYyO1xcbiAgLS1tdXRlZDogIzhDQTBBRTtcXG4gIC0tbW9ubzogJ1NGTW9uby1SZWd1bGFyJywgJ1NGIE1vbm8nLCAnTWVubG8nLCAnQ29uc29sYXMnLCAnTGliZXJhdGlvbiBNb25vJywgbW9ub3NwYWNlO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JvdW5kKTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc3lzdGVtLXVpLCBzYW5zLXNlcmlmO1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxufVxcblxcbi8qIGR2aCAobm90IHZoKTogb24gaU9TIFNhZmFyaSB2aCByZXNvbHZlcyB0byB0aGUgdGFsbCB2aWV3cG9ydCBhbmQgcGFya3MgdGhlXFxuICAgYm90dG9tIG9mIHRoZSBsYXlvdXQgdW5kZXIgdGhlIFVSTCBiYXIuICovXFxuI2FwcCB7XFxuICBtaW4taGVpZ2h0OiAxMDBkdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAyOHB4O1xcbiAgbWF4LXdpZHRoOiA3MjBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogMzJweCAyMHB4O1xcbn1cXG5cXG4vKiBSaWJib246IHRoZSBTVkcgc2NhbGVzIHRvIHRoZSBjb2x1bW4gd2lkdGggdmlhIHRoZSB2aWV3Qm94LCBzbyBhbGwgNzIgaG91cnNcXG4gICBhcmUgb24gc2NyZWVuIGF0IGFueSB3aWR0aCBkb3duIHRvIDM4MHB4IHdpdGhvdXQgc2Nyb2xsIG9yIHBhbi4gKi9cXG4jcmliYm9uV3JhcCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI3JpYmJvblN2ZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi5yaWJib24tY3VydmUge1xcbiAgc3Ryb2tlLXdpZHRoOiAyLjU7XFxuICBzdHJva2UtbGluZWNhcDogcm91bmQ7XFxuICBzdHJva2UtbGluZWpvaW46IHJvdW5kO1xcbn1cXG5cXG4vKiBEYXkgYm91bmRhcnkgaGFpcmxpbmVzIGF0IGhvdXJzIDI0IGFuZCA0OC4gKi9cXG4ucmliYm9uLWhhaXJsaW5lIHtcXG4gIHN0cm9rZTogdmFyKC0tcnVsZSk7XFxuICBzdHJva2Utd2lkdGg6IDE7XFxufVxcblxcbi5yaWJib24tdGljayB7XFxuICBmaWxsOiB2YXIoLS1tdXRlZCk7XFxuICBmb250LWZhbWlseTogdmFyKC0tbW9ubyk7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbn1cXG5cXG4ucmliYm9uLW5vd2xpbmUge1xcbiAgc3Ryb2tlOiB2YXIoLS1tdXRlZCk7XFxuICBzdHJva2Utd2lkdGg6IDE7XFxuICBzdHJva2UtZGFzaGFycmF5OiAyIDM7XFxuICBvcGFjaXR5OiAwLjc7XFxufVxcblxcbi5yaWJib24tZG90IHtcXG4gIHN0cm9rZTogdmFyKC0tZ3JvdW5kKTtcXG4gIHN0cm9rZS13aWR0aDogMjtcXG59XFxuXFxuLyogUmVhZG91dCBiZW5lYXRoIHRoZSBjdXJ2ZS4gKi9cXG4jcmVhZG91dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDRweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2xvY2F0aW9uTmFtZSB7XFxuICBmb250LWZhbWlseTogdmFyKC0tbW9ubyk7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGNvbG9yOiB2YXIoLS1tdXRlZCk7XFxufVxcblxcbi8qIFJvYm90byBMaWdodCA0MHB4IGZvciB0aGUgcmVhZGluZy4gKi9cXG4jY3VycmVudFRlbXAge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGZvbnQtc2l6ZTogNDBweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE7XFxufVxcblxcbiNjdXJyZW50Q29uZGl0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcXG59XFxuXFxuLyogRm91ci11cCBzdGF0IHJvdzogdGV4dCBsYWJlbHMsIG5vIGljb25zLiAqL1xcbiNzdGF0Um93IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgZ2FwOiAxMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tdG9wOiAxNHB4O1xcbn1cXG5cXG4uc3RhdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDRweDtcXG4gIHBhZGRpbmc6IDEycHggNnB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcnVsZSk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbi5zdGF0LWxhYmVsIHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tb25vKTtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xcbn1cXG5cXG4uc3RhdC12YWx1ZSB7XFxuICBmb250LXNpemU6IDE3cHg7XFxuICBjb2xvcjogdmFyKC0tdGV4dCk7XFxufVxcblxcbi8qIFNlYXJjaCBmb3JtLiAqL1xcbiNzZWFyY2hGb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI3NlYXJjaElucHV0IHtcXG4gIGZsZXg6IDE7XFxuICBtaW4td2lkdGg6IDA7XFxuICBwYWRkaW5nOiAxMnB4IDE0cHg7XFxuICBmb250LWZhbWlseTogdmFyKC0tbW9ubyk7XFxuICBmb250LXNpemU6IDE2cHg7IC8qIDE2cHggc28gaU9TIFNhZmFyaSBkb2Vzbid0IGF1dG8tem9vbSB0aGUgaW5wdXQgb24gZm9jdXMgKi9cXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tcnVsZSk7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbiNzZWFyY2hJbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHZhcigtLW11dGVkKTtcXG59XFxuXFxuI3NlYXJjaElucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItY29sb3I6IHZhcigtLW11dGVkKTtcXG59XFxuXFxuLyogRmFpbGVkIGxvb2t1cDogcmVkZGVuZWQgYm9yZGVyLCBjdXJyZW50IHJpYmJvbiBsZWZ0IGluIHBsYWNlLiAqL1xcbiNzZWFyY2hGb3JtLmludmFsaWQgI3NlYXJjaElucHV0IHtcXG4gIGJvcmRlci1jb2xvcjogI0MyNDUyRDtcXG59XFxuXFxuI3NlYXJjaEJ1dHRvbiB7XFxuICBwYWRkaW5nOiAxMnB4IDIwcHg7XFxuICBmb250LWZhbWlseTogdmFyKC0tbW9ubyk7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcbiAgY29sb3I6IHZhcigtLWdyb3VuZCk7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS10ZXh0KTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3NlYXJjaEJ1dHRvbjpob3ZlciB7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45Mik7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xcbiAgI2FwcCB7XFxuICAgIGdhcDogMjJweDtcXG4gICAgcGFkZGluZzogMjRweCAxNnB4O1xcbiAgfVxcblxcbiAgI3N0YXRSb3cge1xcbiAgICBnYXA6IDhweDtcXG4gIH1cXG5cXG4gIC5zdGF0IHtcXG4gICAgcGFkZGluZzogMTBweCA0cHg7XFxuICB9XFxuXFxuICAuc3RhdC12YWx1ZSB7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IHJlbmRlclJpYmJvbiwgY3VycmVudEhvdXJJbmRleCB9IGZyb20gJy4vcmliYm9uLmpzJztcbmltcG9ydCB7IGZvcmVjYXN0TG9naWMgfSBmcm9tICcuL2xvZ2ljLmpzJztcblxuLy8gR3VhcmQgc28gd2lyZUV2ZW50cygpIG9ubHkgZXZlciByZWdpc3RlcnMgb25lIHNldCBvZiBsaXN0ZW5lcnMuIFRoZSBvbGRcbi8vIGNoYW5nZVdlYXRoZXJJbmZvKCkgcmUtcmVnaXN0ZXJlZCBvbiBldmVyeSBmZXRjaCwgZG91YmxpbmcgdGhlIGhhbmRsZXIgY291bnRcbi8vIHBlciBzZWFyY2g7IHRoZSByZW5kZXIgcGF0aCAocmVuZGVyRm9yZWNhc3QpIGFuZCB0aGUgd2lyaW5nIHBhdGggKHdpcmVFdmVudHMpXG4vLyBhcmUgc3BsaXQgcHJlY2lzZWx5IHNvIHRoYXQgY2FuIG5ldmVyIGhhcHBlbiBhZ2Fpbi5cbmxldCBldmVudHNXaXJlZCA9IGZhbHNlO1xuXG4vLyBDYWNoZWQgRE9NIHJlZmVyZW5jZXMsIHBvcHVsYXRlZCBvbmNlIGJ5IGNhY2hlRG9tKCkgYWZ0ZXIgaW5kZXguanMgaGFzIGJ1aWx0XG4vLyBhbmQgYXBwZW5kZWQgdGhlIERPTS5cbmxldCBzZWFyY2hGb3JtLCBzZWFyY2hJbnB1dCwgbG9jYXRpb25OYW1lLCBjdXJyZW50VGVtcCwgY3VycmVudENvbmRpdGlvbixcbiAgZmVlbHNWYWwsIGh1bWlkaXR5VmFsLCByYWluVmFsLCB3aW5kVmFsO1xuXG5mdW5jdGlvbiBjYWNoZURvbSgpIHtcbiAgaWYgKGxvY2F0aW9uTmFtZSkgeyByZXR1cm47IH0gLy8gYWxyZWFkeSBjYWNoZWRcblxuICBzZWFyY2hGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaEZvcm0nKTtcbiAgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoSW5wdXQnKTtcbiAgbG9jYXRpb25OYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvY2F0aW9uTmFtZScpO1xuICBjdXJyZW50VGVtcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50VGVtcCcpO1xuICBjdXJyZW50Q29uZGl0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJlbnRDb25kaXRpb24nKTtcbiAgZmVlbHNWYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmVlbHNWYWwnKTtcbiAgaHVtaWRpdHlWYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHVtaWRpdHlWYWwnKTtcbiAgcmFpblZhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYWluVmFsJyk7XG4gIHdpbmRWYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2luZFZhbCcpO1xufVxuXG4vLyBQdXJlIHJlbmRlciBwYXRoLiBmdWxmaWxsUHJvbWlzZSgpIGluIGxvZ2ljLmpzIGNhbGxzIHRoaXMgb24gZXZlcnkgcmVzb2x2ZWRcbi8vIHJlc3BvbnNlOyBpdCByZWdpc3RlcnMgTk8gbGlzdGVuZXJzLCBzbyBpdCBpcyBzYWZlIHRvIGNhbGwgcmVwZWF0ZWRseS4gRHJhd3Ncbi8vIHRoZSByaWJib24gYW5kIGZpbGxzIHRoZSByZWFkb3V0IGZyb20gdGhlIHNhbWUgXCJub3dcIiBpbmRleCwgc28gdGhlIG1hcmtlciBvblxuLy8gdGhlIGN1cnZlIGFuZCB0aGUgc3RhdCByb3cgY2FuIG5ldmVyIGRpc2FncmVlIGFib3V0IHRoZSBjdXJyZW50IGhvdXIuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyRm9yZWNhc3QoZm9yZWNhc3QpIHtcbiAgY2FjaGVEb20oKTtcblxuICByZW5kZXJSaWJib24oZm9yZWNhc3QpO1xuXG4gIGNvbnN0IGkgPSBjdXJyZW50SG91ckluZGV4KGZvcmVjYXN0KTtcbiAgY29uc3Qgbm93ID0gZm9yZWNhc3QuaG91cnNbaV07XG4gIGlmICghbm93KSB7IHJldHVybjsgfVxuXG4gIGxvY2F0aW9uTmFtZS50ZXh0Q29udGVudCA9IGZvcmVjYXN0LmxvY2F0aW9uLm5hbWU7XG4gIGN1cnJlbnRUZW1wLnRleHRDb250ZW50ID0gTWF0aC5yb3VuZChub3cudGVtcCkgKyAnwrAnO1xuICBjdXJyZW50Q29uZGl0aW9uLnRleHRDb250ZW50ID0gbm93LmNvbmRpdGlvbjtcblxuICBmZWVsc1ZhbC50ZXh0Q29udGVudCA9IE1hdGgucm91bmQobm93LmZlZWxzTGlrZSkgKyAnwrAnO1xuICBodW1pZGl0eVZhbC50ZXh0Q29udGVudCA9IG5vdy5odW1pZGl0eSArICclJztcbiAgcmFpblZhbC50ZXh0Q29udGVudCA9IG5vdy5yYWluICsgJyUnO1xuICB3aW5kVmFsLnRleHRDb250ZW50ID0gTWF0aC5yb3VuZChub3cud2luZCkgKyAnIGttL2gnO1xufVxuXG4vLyBSZWdpc3RlcnMgbGlzdGVuZXJzIEVYQUNUTFkgT05DRSBmb3IgdGhlIGxpZmUgb2YgdGhlIHBhZ2UuIGluZGV4LmpzIGNhbGxzIHRoaXNcbi8vIGF0IGJvb3RzdHJhcCwgYWZ0ZXIgdGhlIERPTSBpcyBhcHBlbmRlZCDigJQgbmV2ZXIgZnJvbSB0aGUgcmVuZGVyIHBhdGgg4oCUIHNvIGFcbi8vIHNlYXJjaCBmaXJlcyBleGFjdGx5IG9uZSBmZXRjaCBhbmQgZXZlcnkgZWxlbWVudCBjYXJyaWVzIGV4YWN0bHkgb25lIGxpc3RlbmVyLlxuZXhwb3J0IGZ1bmN0aW9uIHdpcmVFdmVudHMoKSB7XG4gIGlmIChldmVudHNXaXJlZCkgeyByZXR1cm47IH1cblxuICBjYWNoZURvbSgpO1xuICBldmVudHNXaXJlZCA9IHRydWU7XG5cbiAgLy8gVGhlIGJ1dHRvbiBpcyBhIHJlYWwgc3VibWl0IGJ1dHRvbiwgc28gdGhpcyBjYXRjaGVzIGJvdGggdGhlIGNsaWNrIGFuZCB0aGVcbiAgLy8gRW50ZXIga2V5IGFzIG9uZSBzdWJtaXQgZXZlbnQuIHByZXZlbnREZWZhdWx0IHN0b3BzIHRoZSBmb3JtIHJlbG9hZGluZyB0aGVcbiAgLy8gcGFnZTsgZnV0dXJlQVBJQ2FsbHMgZG9lcyB0aGUgc2luZ2xlIGZldGNoLlxuICBzZWFyY2hGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGZvcmVjYXN0TG9naWMuZnV0dXJlQVBJQ2FsbHMoc2VhcmNoSW5wdXQudmFsdWUpO1xuICB9KTtcbn1cblxuLy8gQSBzdWNjZXNzZnVsIGxvb2t1cCBjbGVhcnMgdGhlIGludmFsaWQgc3RhdGU7IGEgZmFpbGVkIG9uZSBrZWVwcyB0aGUgY3VycmVudFxuLy8gcmliYm9uIGFuZCByZWRkZW5zIHRoZSBpbnB1dCBib3JkZXIgKHZpYSB0aGUgLmludmFsaWQgY2xhc3MgaW4gc3R5bGUuY3NzKS5cbmV4cG9ydCBmdW5jdGlvbiB2YWxpZElucHV0KCkge1xuICBjYWNoZURvbSgpO1xuICBpZiAoc2VhcmNoRm9ybSkgeyBzZWFyY2hGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmFsaWQnKTsgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW52YWxpZElucHV0KCkge1xuICBjYWNoZURvbSgpO1xuICBpZiAoc2VhcmNoRm9ybSkgeyBzZWFyY2hGb3JtLmNsYXNzTGlzdC5hZGQoJ2ludmFsaWQnKTsgfVxufVxuIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyByZW5kZXJGb3JlY2FzdCwgdmFsaWRJbnB1dCwgaW52YWxpZElucHV0IH0gZnJvbSAnLi9pbmRleENoYW5nZXMuanMnO1xuXG4vLyAgMyBkYXkgZm9yZWNhc3QgLSBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PTM5YzI4Zjg1YWIwMzQ1MjFiOTkyMTcwNTIzMjcxMCZxPTk4MDUyJmRheXM9MyZhcWk9bm8mYWxlcnRzPW5vXG5cbi8vIFRoZSBsYXN0IGZvcmVjYXN0IHdlIHN1Y2Nlc3NmdWxseSByZW5kZXJlZC4gQSBmYWlsZWQgbG9va3VwIGtlZXBzIGl0IG9uIHNjcmVlblxuLy8gKHNlZSBmdWxmaWxsUHJvbWlzZSk6IHRoZSBzZWFyY2gganVzdCByZWRkZW5zIHRoZSBpbnB1dCByYXRoZXIgdGhhbiBibGFua2luZ1xuLy8gdGhlIHJpYmJvbi5cbmxldCBsYXN0Rm9yZWNhc3QgPSBudWxsO1xuXG5leHBvcnQgY29uc3QgZm9yZWNhc3RMb2dpYyA9IChmdW5jdGlvbiAoKSB7XG5cbiAgaW5pdGlhbEFQSUNhbGwoKTsgLy8gQ2FsbHMgZGVmYXVsdCAnUmVkbW9uZCcgKDk4MDUyKSB3ZWF0aGVyXG5cbiAgZnVuY3Rpb24gaW5pdGlhbEFQSUNhbGwoKSB7XG4gICAgZnVsZmlsbFByb21pc2UocHVsbEZvcmVjYXN0KCc5ODA1MicpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZ1dHVyZUFQSUNhbGxzKHZhbHVlKSB7XG4gICAgZnVsZmlsbFByb21pc2UocHVsbEZvcmVjYXN0KHZhbHVlKSk7XG4gIH1cblxuICBmdW5jdGlvbiBmdWxmaWxsUHJvbWlzZShmb3JlY2FzdEpTT04pIHtcbiAgICBmb3JlY2FzdEpTT04udGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAvLyBwdWxsRm9yZWNhc3QgcmVzb2x2ZXMgdG8gbnVsbCBvbiBhIGZhaWxlZCBsb29rdXAg4oCUIGxlYXZlIHRoZSBjdXJyZW50XG4gICAgICAvLyByaWJib24gdW50b3VjaGVkIChpbnZhbGlkSW5wdXQoKSBoYXMgYWxyZWFkeSByZWRkZW5lZCB0aGUgaW5wdXQpLlxuICAgICAgaWYgKCFyZXN1bHQpIHsgcmV0dXJuOyB9XG5cbiAgICAgIGNvbnN0IGZvcmVjYXN0ID0gYnVpbGRGb3JlY2FzdChyZXN1bHQpO1xuICAgICAgbGFzdEZvcmVjYXN0ID0gZm9yZWNhc3Q7XG4gICAgICByZW5kZXJGb3JlY2FzdChmb3JlY2FzdCk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBGbGF0dGVuIHRoZSB0aHJlZS1kYXkgcmVzcG9uc2UgaW50byBhIHNpbmdsZSA3Mi1ob3VyIHNlcmllcyBwbHVzIGEgbG9jYXRpb25cbiAgLy8gb2JqZWN0LiBFdmVyeSBob3VyIGtlZXBzIGl0cyBvd24gZXBvY2gsIHRlbXBlcmF0dXJlLCBjb25kaXRpb24gdGV4dCBhbmQgdGhlXG4gIC8vIHN0YXQgZmllbGRzIHRoZSByZWFkb3V0IHNob3dzIOKAlCBub3RoaW5nIGlzIGNvbGxhcHNlZCB0byBwZXItZGF5IHNjYWxhcnMsIGFuZFxuICAvLyB0aGUgZnVsbCBmb3JlY2FzdGRheVtdLmhvdXJbXSBhcnJheXMgKGFscmVhZHkgaW4gZXZlcnkgcmVzcG9uc2UsIHByZXZpb3VzbHlcbiAgLy8gZGlzY2FyZGVkKSBhcmUgd2hhdCB0aGUgY3VydmUgaXMgZHJhd24gZnJvbS5cbiAgZnVuY3Rpb24gYnVpbGRGb3JlY2FzdChyZXN1bHQpIHtcbiAgICBjb25zdCBmb3JlY2FzdERheXMgPSByZXN1bHQuZm9yZWNhc3QuZm9yZWNhc3RkYXk7XG4gICAgY29uc3QgaG91cnMgPSBbXTtcblxuICAgIGZvcmVjYXN0RGF5cy5mb3JFYWNoKChkYXkpID0+IHtcbiAgICAgIGRheS5ob3VyLmZvckVhY2goKGgpID0+IHtcbiAgICAgICAgaG91cnMucHVzaCh7XG4gICAgICAgICAgZXBvY2g6IGgudGltZV9lcG9jaCxcbiAgICAgICAgICB0ZW1wOiBoLnRlbXBfYyxcbiAgICAgICAgICBmZWVsc0xpa2U6IGguZmVlbHNsaWtlX2MsXG4gICAgICAgICAgaHVtaWRpdHk6IGguaHVtaWRpdHksXG4gICAgICAgICAgcmFpbjogaC5jaGFuY2Vfb2ZfcmFpbixcbiAgICAgICAgICB3aW5kOiBoLndpbmRfa3BoLFxuICAgICAgICAgIGNvbmRpdGlvbjogaC5jb25kaXRpb24udGV4dCxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICBsb2NhdGlvbjoge1xuICAgICAgICBuYW1lOiByZXN1bHQubG9jYXRpb24ubmFtZSxcbiAgICAgICAgLy8gXCJub3dcIiBpcyBpbmRleGVkIG9mZiB0aGUgbG9jYXRpb24ncyByZWFsIGN1cnJlbnQgdGltZSwgbm90IGEgcGFyc2VkXG4gICAgICAgIC8vIGRhdGUgc3RyaW5nLiBTZWUgY3VycmVudEhvdXJJbmRleCgpIGluIHJpYmJvbi5qcy5cbiAgICAgICAgbG9jYWx0aW1lX2Vwb2NoOiByZXN1bHQubG9jYXRpb24ubG9jYWx0aW1lX2Vwb2NoLFxuICAgICAgfSxcbiAgICAgIGhvdXJzOiBob3VycyxcbiAgICAgIC8vIFBlci1kYXkgZGF0ZSArIGhvdXIgY291bnQgZHJpdmUgdGhlIFdFRC9USFUvRlJJIHRpY2tzIGFuZCB0aGUgZGF5XG4gICAgICAvLyBoYWlybGluZXMgYXQgaG91cnMgMjQgYW5kIDQ4LlxuICAgICAgZGF5czogZm9yZWNhc3REYXlzLm1hcCgoZGF5KSA9PiAoeyBkYXRlOiBkYXkuZGF0ZSwgY291bnQ6IGRheS5ob3VyLmxlbmd0aCB9KSksXG4gICAgfTtcbiAgfVxuXG4gIC8vIFRha2VzIGEgbG9jYXRpb24gdmFsdWUgYXBwZW5kZWQgdG8gdGhlIEFQSSBjYWxsLiBSZXNvbHZlcyB0byB0aGUgcmF3IEpTT04gb25cbiAgLy8gc3VjY2Vzcywgb3IgbnVsbCBvbiBmYWlsdXJlIChzbyBmdWxmaWxsUHJvbWlzZSBrZWVwcyB0aGUgY3VycmVudCByaWJib24pLlxuICBhc3luYyBmdW5jdGlvbiBwdWxsRm9yZWNhc3QodmFsdWUpIHtcbiAgICBjb25zdCB1cmwgPSAnaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9MzljMjhmODVhYjAzNDUyMWI5OTIxNzA1MjMyNzEwJnE9JyArIHZhbHVlICsgJyZkYXlzPTMmYXFpPW5vJmFsZXJ0cz1ubyc7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHsgbW9kZTogJ2NvcnMnIH0pO1xuXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgU3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZm9yZWNhc3QgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgIHZhbGlkSW5wdXQoKTtcblxuICAgICAgcmV0dXJuIGZvcmVjYXN0O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gY2F0Y2hlcyBlcnJvcnMgYm90aCBpbiBmZXRjaCBhbmQgcmVzcG9uc2UuanNvblxuICAgICAgaW52YWxpZElucHV0KCk7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHB1bGxGb3JlY2FzdCxcbiAgICBmdXR1cmVBUElDYWxscyxcbiAgfTtcblxufSkoKTsgLy8gZW5kcyBmb3JlY2FzdExvZ2ljIGZ1bmN0aW9uXG4iLCIvLyByaWJib24uanMg4oCUIHRoZSA3Mi1ob3VyIHRlbXBlcmF0dXJlIHJpYmJvbi5cbi8vXG4vLyBUaGUgZm9yZWNhc3QgaXMgb25lIGNvbnRpbnVvdXMgdGVtcGVyYXR1cmUgY3VydmUgYWNyb3NzIGFsbCB0aHJlZSBkYXlzIHJhdGhlclxuLy8gdGhhbiB0aHJlZSBjYXJkIHN0YXRlcyB5b3UgcGFnZSBiZXR3ZWVuLCBzbyBuYXZpZ2F0aW9uIHN0b3BzIGJlaW5nIGEgY29uY2VwdDpcbi8vIGV2ZXJ5IGhvdXIgaXMgb24gc2NyZWVuIGF0IG9uY2UuIENvbG91ciBpcyBhIGZ1bmN0aW9uIG9mIHRoZSB0ZW1wZXJhdHVyZVxuLy8gc2NhbGFyIChjb2xkIC0+IG1pbGQgLT4gd2FybSAtPiBob3QpLCBOT1QgdGhlIGNvbmRpdGlvbiBjYXRlZ29yeSwgc28gdGhlcmUgaXNcbi8vIG5vIHBlci1jb25kaXRpb24gYnJhbmNoIHRvIHdyaXRlIGFuZCBubyBlaWdodGggY2FzZSB0byBmb3JnZXQuXG4vL1xuLy8gYnVpbGRSaWJib24obW91bnQpIGNyZWF0ZXMgdGhlIFNWRyBzY2FmZm9sZCBvbmNlIGF0IGJvb3RzdHJhcCAoZGVmcywgZ3JhZGllbnRzLFxuLy8gZW1wdHkgZ3JvdXBzKSBhbmQgY2FjaGVzIGVsZW1lbnQgcmVmcy4gcmVuZGVyRm9yZWNhc3QoKSBpbiBpbmRleENoYW5nZXMuanNcbi8vIGNhbGxzIHJlbmRlclJpYmJvbihmb3JlY2FzdCkgb24gZXZlcnkgcmVzb2x2ZWQgcmVzcG9uc2UgdG8gcmVkcmF3IHRoZSBjdXJ2ZSxcbi8vIHRoZSBkYXkgaGFpcmxpbmVzL3RpY2tzIGFuZCB0aGUgY3VycmVudC1ob3VyIG1hcmtlciBmcm9tIGRhdGEuIGN1cnJlbnRIb3VySW5kZXhcbi8vIGlzIHRoZSBzaW5nbGUgc291cmNlIG9mIHRydXRoIGZvciBcIm5vd1wiLCBzaGFyZWQgd2l0aCB0aGUgcmVhZG91dCBzbyB0aGUgbWFya2VyXG4vLyBhbmQgdGhlIHN0YXQgcm93IG5ldmVyIGRpc2FncmVlLlxuLy9cbi8vIEhhbmQtYXV0aG9yZWQgU1ZHLCB2YW5pbGxhIG9ubHkg4oCUIG5vIGNoYXJ0aW5nIGxpYnJhcnksIG5vIGRlcGVuZGVuY2llcy5cblxuY29uc3QgTlMgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnO1xuXG4vLyB2aWV3Qm94IGdlb21ldHJ5LCBpbiB1c2VyIHVuaXRzLiBUaGUgY3VydmUgYmFuZCBzaXRzIGJldHdlZW4gQ0hBUlRfVE9QIGFuZFxuLy8gQ0hBUlRfVE9QK0NIQVJUX0g7IFRJQ0tfSCBiZW5lYXRoIGl0IGNhcnJpZXMgdGhlIFdFRC9USFUvRlJJIGRheSBsYWJlbHMuIEFcbi8vIHNlY29uZCBsYW5lICh0aWRlcywgb3V0IG9mIHNjb3BlIHRvZGF5KSB3b3VsZCBhZGQgTEFORV9IIGJlbG93IHRoYXQg4oCUIHRoZVxuLy8gdmlld0JveCBoZWlnaHQgc3dpdGNoZXMgYmV0d2VlbiB0d28gdmFsdWVzIGRlcGVuZGluZyBvbiB3aGV0aGVyIHRoZSBsYW5lXG4vLyBleGlzdHMsIHNvIHRoZSBsYXlvdXQgaXMgYnVpbHQgbGFuZS1vcHRpb25hbCBldmVuIHRob3VnaCB0aGUgbGFuZSBuZXZlclxuLy8gcmVuZGVycyBmb3Igbm93LlxuY29uc3QgVklFV19XID0gNzIwO1xuY29uc3QgUEFEX0wgPSAxMDtcbmNvbnN0IFBBRF9SID0gMTA7XG5jb25zdCBDSEFSVF9UT1AgPSAxODtcbmNvbnN0IENIQVJUX0ggPSAxNTA7XG5jb25zdCBUSUNLX0ggPSAyNjtcbmNvbnN0IExBTkVfSCA9IDkwO1xuXG4vLyBUZW1wZXJhdHVyZSAtPiBjb2xvdXIgcmFtcC4gRm91ciBhbmNob3JzIHNwYW5uaW5nIGEgZml4ZWQgwrBDIGRvbWFpbiBzbyB0aGVcbi8vIHNhbWUgdGVtcGVyYXR1cmUgYWx3YXlzIHJlYWRzIHRoZSBzYW1lIGNvbG91ciByZWdhcmRsZXNzIG9mIHRoZSBkYXkncyByYW5nZS5cbmNvbnN0IFJBTVAgPSBbXG4gIHsgdDogLTUsIGM6IFsweDNkLCAweDZmLCAweGE4XSB9LCAvLyBjb2xkXG4gIHsgdDogMTAsIGM6IFsweDZmLCAweGE4LCAweGEwXSB9LCAvLyBtaWxkXG4gIHsgdDogMjUsIGM6IFsweGQ5LCAweGE0LCAweDQxXSB9LCAvLyB3YXJtXG4gIHsgdDogNDAsIGM6IFsweGMyLCAweDQ1LCAweDJkXSB9LCAvLyBob3Rcbl07XG5cbmNvbnN0IFdFRUtEQVkgPSBbJ1NVTicsICdNT04nLCAnVFVFJywgJ1dFRCcsICdUSFUnLCAnRlJJJywgJ1NBVCddO1xuXG4vLyBDYWNoZWQgc2NhZmZvbGQgcmVmcywgcG9wdWxhdGVkIG9uY2UgYnkgYnVpbGRSaWJib24oKS5cbmxldCBzdmcsIHRlbXBHcmFkLCBmaWxsUGF0aCwgY3VydmVQYXRoLCBib3VuZGFyeUdyb3VwLCB0aWNrR3JvdXAsIG1hcmtlckdyb3VwLFxuICBsYW5lR3JvdXA7XG5cbmZ1bmN0aW9uIGVsKG5hbWUsIGF0dHJzKSB7XG4gIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoTlMsIG5hbWUpO1xuICBpZiAoYXR0cnMpIHtcbiAgICBmb3IgKGNvbnN0IGsgaW4gYXR0cnMpIHsgbm9kZS5zZXRBdHRyaWJ1dGUoaywgYXR0cnNba10pOyB9XG4gIH1cbiAgcmV0dXJuIG5vZGU7XG59XG5cbmZ1bmN0aW9uIGxlcnAoYSwgYiwgZikgeyByZXR1cm4gYSArIChiIC0gYSkgKiBmOyB9XG5cbi8vIENvbG91ciBmb3IgYSB0ZW1wZXJhdHVyZSwgaW50ZXJwb2xhdGVkIGFjcm9zcyB0aGUgcmFtcCBhbmNob3JzIGFuZCBjbGFtcGVkIHRvXG4vLyB0aGUgZG9tYWluIGVuZHMuXG5mdW5jdGlvbiB0ZW1wQ29sb3VyKHRlbXApIHtcbiAgaWYgKHRlbXAgPD0gUkFNUFswXS50KSB7IHJldHVybiByZ2IoUkFNUFswXS5jKTsgfVxuICBpZiAodGVtcCA+PSBSQU1QW1JBTVAubGVuZ3RoIC0gMV0udCkgeyByZXR1cm4gcmdiKFJBTVBbUkFNUC5sZW5ndGggLSAxXS5jKTsgfVxuICBmb3IgKGxldCBpID0gMTsgaSA8IFJBTVAubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodGVtcCA8PSBSQU1QW2ldLnQpIHtcbiAgICAgIGNvbnN0IGxvID0gUkFNUFtpIC0gMV07XG4gICAgICBjb25zdCBoaSA9IFJBTVBbaV07XG4gICAgICBjb25zdCBmID0gKHRlbXAgLSBsby50KSAvIChoaS50IC0gbG8udCk7XG4gICAgICByZXR1cm4gcmdiKFtcbiAgICAgICAgTWF0aC5yb3VuZChsZXJwKGxvLmNbMF0sIGhpLmNbMF0sIGYpKSxcbiAgICAgICAgTWF0aC5yb3VuZChsZXJwKGxvLmNbMV0sIGhpLmNbMV0sIGYpKSxcbiAgICAgICAgTWF0aC5yb3VuZChsZXJwKGxvLmNbMl0sIGhpLmNbMl0sIGYpKSxcbiAgICAgIF0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmdiKFJBTVBbUkFNUC5sZW5ndGggLSAxXS5jKTtcbn1cblxuZnVuY3Rpb24gcmdiKGMpIHsgcmV0dXJuICdyZ2IoJyArIGNbMF0gKyAnLCcgKyBjWzFdICsgJywnICsgY1syXSArICcpJzsgfVxuXG5mdW5jdGlvbiB3ZWVrZGF5QWJicihkYXRlU3RyKSB7XG4gIC8vIGRhdGVTdHIgaXMgJ1lZWVktTU0tREQnLiBCdWlsZCB0aGUgZGF0ZSBhdCBVVEMgbWlkbmlnaHQgc28gdGhlIHdlZWtkYXkgbmV2ZXJcbiAgLy8gc2hpZnRzIGFjcm9zcyBhIHRpbWV6b25lIGJvdW5kYXJ5LlxuICBjb25zdCBwID0gU3RyaW5nKGRhdGVTdHIpLnNwbGl0KCctJyk7XG4gIGNvbnN0IGQgPSBuZXcgRGF0ZShEYXRlLlVUQygrcFswXSwgKCtwWzFdKSAtIDEsICtwWzJdKSk7XG4gIHJldHVybiBXRUVLREFZW2QuZ2V0VVRDRGF5KCldIHx8ICcnO1xufVxuXG4vLyBJbmRleCBvZiB0aGUgaG91ciBidWNrZXQgbmVhcmVzdCBcIm5vd1wiLiBEcml2ZW4gb2ZmIGxvY2F0aW9uLmxvY2FsdGltZV9lcG9jaCxcbi8vIE5PVCBhIHBhcnNlZCBkYXRlLXN0cmluZyBob3VyIOKAlCB0aGUgb2xkIGdldEN1cnJlbnRUaW1lKCkgcmVhZCB0aGUgaG91ciBvdXQgb2Zcbi8vIGRhdGVfZXBvY2ggKGxvY2FsIG1pZG5pZ2h0KSBhbmQgcmV0dXJuZWQgdGhlIFVUQyBvZmZzZXQsIHNvIFwiZmVlbHMgbGlrZVwiIHdhcyBhXG4vLyBmaXhlZCBhcmJpdHJhcnkgaG91ci4gbG9jYWx0aW1lX2Vwb2NoIGlzIHRoZSBsb2NhdGlvbidzIHJlYWwgY3VycmVudCB0aW1lLlxuZXhwb3J0IGZ1bmN0aW9uIGN1cnJlbnRIb3VySW5kZXgoZm9yZWNhc3QpIHtcbiAgY29uc3QgaG91cnMgPSBmb3JlY2FzdC5ob3VycztcbiAgaWYgKCFob3VycyB8fCAhaG91cnMubGVuZ3RoKSB7IHJldHVybiAwOyB9XG4gIGNvbnN0IG5vdyA9IGZvcmVjYXN0LmxvY2F0aW9uLmxvY2FsdGltZV9lcG9jaDtcbiAgbGV0IGJlc3QgPSAwO1xuICBsZXQgYmVzdERpZmYgPSBJbmZpbml0eTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBob3Vycy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGRpZmYgPSBNYXRoLmFicyhob3Vyc1tpXS5lcG9jaCAtIG5vdyk7XG4gICAgaWYgKGRpZmYgPCBiZXN0RGlmZikgeyBiZXN0RGlmZiA9IGRpZmY7IGJlc3QgPSBpOyB9XG4gIH1cbiAgcmV0dXJuIGJlc3Q7XG59XG5cbi8vIENyZWF0ZSB0aGUgU1ZHIHNjYWZmb2xkIG9uY2UuIENhbGxlZCBmcm9tIGluZGV4LmpzIGF0IGJvb3RzdHJhcCwgYWZ0ZXIgdGhlXG4vLyBtb3VudCBlbGVtZW50IGlzIGluIHRoZSBET00uXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRSaWJib24obW91bnQpIHtcbiAgaWYgKHN2ZykgeyByZXR1cm47IH0gLy8gYnVpbGQgb25jZVxuXG4gIHN2ZyA9IGVsKCdzdmcnLCB7XG4gICAgaWQ6ICdyaWJib25TdmcnLFxuICAgIHZpZXdCb3g6ICcwIDAgJyArIFZJRVdfVyArICcgJyArIChDSEFSVF9UT1AgKyBDSEFSVF9IICsgVElDS19IKSxcbiAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvOiAneE1pZFlNaWQgbWVldCcsXG4gIH0pO1xuXG4gIGNvbnN0IGRlZnMgPSBlbCgnZGVmcycpO1xuXG4gIC8vIEhvcml6b250YWwgc3Ryb2tlIGdyYWRpZW50OiBjb2xvdXJlZCBieSB0ZW1wZXJhdHVyZSBhY3Jvc3MgdGhlIDcyIGhvdXJzLlxuICAvLyBTdG9wcyBhcmUgcmVidWlsdCBlYWNoIHJlbmRlciBmcm9tIHRoZSBhY3R1YWwgc2VyaWVzLlxuICB0ZW1wR3JhZCA9IGVsKCdsaW5lYXJHcmFkaWVudCcsIHtcbiAgICBpZDogJ3RlbXBHcmFkJywgeDE6ICcwJywgeTE6ICcwJywgeDI6ICcxJywgeTI6ICcwJyxcbiAgfSk7XG5cbiAgLy8gVmVydGljYWwgZmFkZSBmaWxsIHVuZGVyIHRoZSBjdXJ2ZS5cbiAgY29uc3QgZmlsbEdyYWQgPSBlbCgnbGluZWFyR3JhZGllbnQnLCB7XG4gICAgaWQ6ICdmaWxsR3JhZCcsIHgxOiAnMCcsIHkxOiAnMCcsIHgyOiAnMCcsIHkyOiAnMScsXG4gIH0pO1xuICBmaWxsR3JhZC5hcHBlbmRDaGlsZChlbCgnc3RvcCcsIHsgb2Zmc2V0OiAnMCcsICdzdG9wLWNvbG9yJzogJyM4Q0EwQUUnLCAnc3RvcC1vcGFjaXR5JzogJzAuMjgnIH0pKTtcbiAgZmlsbEdyYWQuYXBwZW5kQ2hpbGQoZWwoJ3N0b3AnLCB7IG9mZnNldDogJzEnLCAnc3RvcC1jb2xvcic6ICcjOENBMEFFJywgJ3N0b3Atb3BhY2l0eSc6ICcwJyB9KSk7XG5cbiAgZGVmcy5hcHBlbmRDaGlsZCh0ZW1wR3JhZCk7XG4gIGRlZnMuYXBwZW5kQ2hpbGQoZmlsbEdyYWQpO1xuICBzdmcuYXBwZW5kQ2hpbGQoZGVmcyk7XG5cbiAgZmlsbFBhdGggPSBlbCgncGF0aCcsIHsgY2xhc3M6ICdyaWJib24tZmlsbCcsIGZpbGw6ICd1cmwoI2ZpbGxHcmFkKScsIHN0cm9rZTogJ25vbmUnIH0pO1xuICBjdXJ2ZVBhdGggPSBlbCgncGF0aCcsIHsgY2xhc3M6ICdyaWJib24tY3VydmUnLCBmaWxsOiAnbm9uZScsIHN0cm9rZTogJ3VybCgjdGVtcEdyYWQpJyB9KTtcbiAgYm91bmRhcnlHcm91cCA9IGVsKCdnJywgeyBjbGFzczogJ3JpYmJvbi1ib3VuZGFyaWVzJyB9KTtcbiAgdGlja0dyb3VwID0gZWwoJ2cnLCB7IGNsYXNzOiAncmliYm9uLXRpY2tzJyB9KTtcbiAgbWFya2VyR3JvdXAgPSBlbCgnZycsIHsgY2xhc3M6ICdyaWJib24tbWFya2VyJyB9KTtcbiAgbGFuZUdyb3VwID0gZWwoJ2cnLCB7IGNsYXNzOiAncmliYm9uLWxhbmUnIH0pO1xuXG4gIHN2Zy5hcHBlbmRDaGlsZChmaWxsUGF0aCk7XG4gIHN2Zy5hcHBlbmRDaGlsZChjdXJ2ZVBhdGgpO1xuICBzdmcuYXBwZW5kQ2hpbGQoYm91bmRhcnlHcm91cCk7XG4gIHN2Zy5hcHBlbmRDaGlsZCh0aWNrR3JvdXApO1xuICBzdmcuYXBwZW5kQ2hpbGQobGFuZUdyb3VwKTtcbiAgc3ZnLmFwcGVuZENoaWxkKG1hcmtlckdyb3VwKTtcblxuICBtb3VudC5hcHBlbmRDaGlsZChzdmcpO1xufVxuXG5mdW5jdGlvbiBjbGVhcihub2RlKSB7XG4gIHdoaWxlIChub2RlLmZpcnN0Q2hpbGQpIHsgbm9kZS5yZW1vdmVDaGlsZChub2RlLmZpcnN0Q2hpbGQpOyB9XG59XG5cbi8vIFJlZHJhdyB0aGUgd2hvbGUgcmliYm9uIGZyb20gYSBmb3JlY2FzdDogeyBsb2NhdGlvbiwgaG91cnNbXSwgZGF5c1tdLCBsYW5lPyB9LlxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclJpYmJvbihmb3JlY2FzdCkge1xuICBpZiAoIXN2ZykgeyByZXR1cm47IH1cblxuICBjb25zdCBob3VycyA9IGZvcmVjYXN0LmhvdXJzIHx8IFtdO1xuICBjb25zdCBuID0gaG91cnMubGVuZ3RoO1xuICBpZiAoIW4pIHsgcmV0dXJuOyB9XG5cbiAgY29uc3QgbGFuZU9uID0gISFmb3JlY2FzdC5sYW5lO1xuICBjb25zdCB0b3RhbEggPSBDSEFSVF9UT1AgKyBDSEFSVF9IICsgVElDS19IICsgKGxhbmVPbiA/IExBTkVfSCA6IDApO1xuICBzdmcuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgJzAgMCAnICsgVklFV19XICsgJyAnICsgdG90YWxIKTtcblxuICBjb25zdCBpbm5lclcgPSBWSUVXX1cgLSBQQURfTCAtIFBBRF9SO1xuICBjb25zdCBiYXNlbGluZSA9IENIQVJUX1RPUCArIENIQVJUX0g7XG5cbiAgLy8gdGVtcGVyYXR1cmUgZG9tYWluIGZvciB0aGUgeS1zY2FsZSwgcGFkZGVkIHNvIHRoZSBjdXJ2ZSBuZXZlciBodWdzIGFuIGVkZ2UuXG4gIGxldCBtaW4gPSBJbmZpbml0eTtcbiAgbGV0IG1heCA9IC1JbmZpbml0eTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICBpZiAoaG91cnNbaV0udGVtcCA8IG1pbikgeyBtaW4gPSBob3Vyc1tpXS50ZW1wOyB9XG4gICAgaWYgKGhvdXJzW2ldLnRlbXAgPiBtYXgpIHsgbWF4ID0gaG91cnNbaV0udGVtcDsgfVxuICB9XG4gIGlmIChtaW4gPT09IG1heCkgeyBtaW4gLT0gMTsgbWF4ICs9IDE7IH1cbiAgY29uc3Qgc3BhbiA9IG1heCAtIG1pbjtcblxuICBjb25zdCB4ID0gKGkpID0+IFBBRF9MICsgKG4gPD0gMSA/IDAgOiAoaSAvIChuIC0gMSkpICogaW5uZXJXKTtcbiAgY29uc3QgeSA9ICh0KSA9PiBDSEFSVF9UT1AgKyAoMSAtICh0IC0gbWluKSAvIHNwYW4pICogQ0hBUlRfSDtcblxuICAvLyBCdWlsZCB0aGUgcG9pbnRzLCB0aGVuIGEgc21vb3RoIHBhdGggdmlhIHF1YWRyYXRpYyBtaWRwb2ludHMgKG5vIG92ZXJzaG9vdCkuXG4gIGNvbnN0IHB0cyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykgeyBwdHMucHVzaCh7IHg6IHgoaSksIHk6IHkoaG91cnNbaV0udGVtcCkgfSk7IH1cblxuICBsZXQgZCA9ICdNICcgKyBwdHNbMF0ueC50b0ZpeGVkKDIpICsgJyAnICsgcHRzWzBdLnkudG9GaXhlZCgyKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwdHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCB4YyA9IChwdHNbaSAtIDFdLnggKyBwdHNbaV0ueCkgLyAyO1xuICAgIGNvbnN0IHljID0gKHB0c1tpIC0gMV0ueSArIHB0c1tpXS55KSAvIDI7XG4gICAgZCArPSAnIFEgJyArIHB0c1tpIC0gMV0ueC50b0ZpeGVkKDIpICsgJyAnICsgcHRzW2kgLSAxXS55LnRvRml4ZWQoMikgK1xuICAgICAgJyAnICsgeGMudG9GaXhlZCgyKSArICcgJyArIHljLnRvRml4ZWQoMik7XG4gIH1cbiAgZCArPSAnIEwgJyArIHB0c1tuIC0gMV0ueC50b0ZpeGVkKDIpICsgJyAnICsgcHRzW24gLSAxXS55LnRvRml4ZWQoMik7XG5cbiAgY3VydmVQYXRoLnNldEF0dHJpYnV0ZSgnZCcsIGQpO1xuICBmaWxsUGF0aC5zZXRBdHRyaWJ1dGUoJ2QnLCBkICtcbiAgICAnIEwgJyArIHB0c1tuIC0gMV0ueC50b0ZpeGVkKDIpICsgJyAnICsgYmFzZWxpbmUgK1xuICAgICcgTCAnICsgcHRzWzBdLngudG9GaXhlZCgyKSArICcgJyArIGJhc2VsaW5lICsgJyBaJyk7XG5cbiAgLy8gSG9yaXpvbnRhbCB0ZW1wZXJhdHVyZSBncmFkaWVudDogb25lIHN0b3AgcGVyIGhvdXIsIGNvbG91cmVkIGJ5IHRoYXQgaG91cidzXG4gIC8vIHRlbXBlcmF0dXJlLiBvYmplY3RCb3VuZGluZ0JveCBtYXBzIG9mZnNldCBpLyhuLTEpIG9udG8gdGhlIGN1cnZlJ3MgeCwgd2hpY2hcbiAgLy8gc3BhbnMgdGhlIGZ1bGwgaW5uZXIgd2lkdGgsIHNvIGVhY2ggc3RvcCBsYW5kcyB1bmRlciBpdHMgaG91ci5cbiAgY2xlYXIodGVtcEdyYWQpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgIHRlbXBHcmFkLmFwcGVuZENoaWxkKGVsKCdzdG9wJywge1xuICAgICAgb2Zmc2V0OiAobiA8PSAxID8gMCA6IGkgLyAobiAtIDEpKS50b0ZpeGVkKDQpLFxuICAgICAgJ3N0b3AtY29sb3InOiB0ZW1wQ29sb3VyKGhvdXJzW2ldLnRlbXApLFxuICAgIH0pKTtcbiAgfVxuXG4gIC8vIERheSBoYWlybGluZXMgKyBXRUQvVEhVL0ZSSSB0aWNrcywgZGVyaXZlZCBmcm9tIHRoZSBwZXItZGF5IGhvdXIgY291bnRzIHNvIGFcbiAgLy8gc2hvcnQgdHJhaWxpbmcgZGF5IHN0aWxsIGxpbmVzIHVwLlxuICBjbGVhcihib3VuZGFyeUdyb3VwKTtcbiAgY2xlYXIodGlja0dyb3VwKTtcbiAgY29uc3QgZGF5cyA9IGZvcmVjYXN0LmRheXMgfHwgW107XG4gIGxldCBzdGFydCA9IDA7XG4gIGZvciAobGV0IGRpID0gMDsgZGkgPCBkYXlzLmxlbmd0aDsgZGkrKykge1xuICAgIGNvbnN0IGNvdW50ID0gZGF5c1tkaV0uY291bnQgfHwgMDtcbiAgICBpZiAoY291bnQgPD0gMCkgeyBjb250aW51ZTsgfVxuXG4gICAgaWYgKGRpID4gMCAmJiBzdGFydCA8IG4pIHtcbiAgICAgIGNvbnN0IGJ4ID0geChzdGFydCkudG9GaXhlZCgyKTtcbiAgICAgIGJvdW5kYXJ5R3JvdXAuYXBwZW5kQ2hpbGQoZWwoJ2xpbmUnLCB7XG4gICAgICAgIGNsYXNzOiAncmliYm9uLWhhaXJsaW5lJyxcbiAgICAgICAgeDE6IGJ4LCB5MTogQ0hBUlRfVE9QLCB4MjogYngsIHkyOiBiYXNlbGluZSxcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBjb25zdCBjZW50ZXJJZHggPSBzdGFydCArIChjb3VudCAtIDEpIC8gMjtcbiAgICBjb25zdCB0aWNrID0gZWwoJ3RleHQnLCB7XG4gICAgICBjbGFzczogJ3JpYmJvbi10aWNrJyxcbiAgICAgIHg6IHgoY2VudGVySWR4KS50b0ZpeGVkKDIpLFxuICAgICAgeTogKGJhc2VsaW5lICsgVElDS19IICogMC43KS50b0ZpeGVkKDIpLFxuICAgICAgJ3RleHQtYW5jaG9yJzogJ21pZGRsZScsXG4gICAgfSk7XG4gICAgdGljay50ZXh0Q29udGVudCA9IHdlZWtkYXlBYmJyKGRheXNbZGldLmRhdGUpO1xuICAgIHRpY2tHcm91cC5hcHBlbmRDaGlsZCh0aWNrKTtcblxuICAgIHN0YXJ0ICs9IGNvdW50O1xuICB9XG5cbiAgLy8gQ3VycmVudC1ob3VyIG1hcmtlcjogYSBoYWlybGluZSBkcm9wcGVkIHRvIHRoZSBiYXNlbGluZSBwbHVzIGEgZG90IG9uIHRoZVxuICAvLyBjdXJ2ZSwgdGhlIGRvdCBmaWxsZWQgd2l0aCB0aGUgdGVtcGVyYXR1cmUgY29sb3VyIGZvciB0aGF0IGhvdXIuXG4gIGNsZWFyKG1hcmtlckdyb3VwKTtcbiAgY29uc3QgaWR4ID0gY3VycmVudEhvdXJJbmRleChmb3JlY2FzdCk7XG4gIGNvbnN0IG14ID0geChpZHgpO1xuICBjb25zdCBteSA9IHkoaG91cnNbaWR4XS50ZW1wKTtcbiAgbWFya2VyR3JvdXAuYXBwZW5kQ2hpbGQoZWwoJ2xpbmUnLCB7XG4gICAgY2xhc3M6ICdyaWJib24tbm93bGluZScsXG4gICAgeDE6IG14LnRvRml4ZWQoMiksIHkxOiBteS50b0ZpeGVkKDIpLCB4MjogbXgudG9GaXhlZCgyKSwgeTI6IGJhc2VsaW5lLFxuICB9KSk7XG4gIG1hcmtlckdyb3VwLmFwcGVuZENoaWxkKGVsKCdjaXJjbGUnLCB7XG4gICAgY2xhc3M6ICdyaWJib24tZG90JyxcbiAgICBjeDogbXgudG9GaXhlZCgyKSwgY3k6IG15LnRvRml4ZWQoMiksIHI6ICc1LjUnLFxuICAgIGZpbGw6IHRlbXBDb2xvdXIoaG91cnNbaWR4XS50ZW1wKSxcbiAgfSkpO1xuXG4gIC8vIE9wdGlvbmFsIHNlY29uZCBsYW5lLiBObyBkYXRhIGZlZWRzIGl0IHRvZGF5ICh0aWRlcyBhcmUgUHJvKyBhbmQgZW1wdHkgZm9yXG4gIC8vIGlubGFuZCBsb2NhdGlvbnMpLCBzbyBpdCBzdGF5cyBlbXB0eSBhbmQgdGhlIHZpZXdCb3ggdXNlcyB0aGUgc2hvcnRlciBvZiB0aGVcbiAgLy8gdHdvIGhlaWdodHMg4oCUIGJ1dCB0aGUgZ3JvdXAgYW5kIHRoZSBoZWlnaHQgc3dpdGNoIGV4aXN0IHNvIGEgbGFuZSBjYW4gZHJvcCBpblxuICAvLyB3aXRob3V0IGEgbGF5b3V0IHJld3JpdGUuXG4gIGNsZWFyKGxhbmVHcm91cCk7XG4gIGlmIChsYW5lT24gJiYgdHlwZW9mIGZvcmVjYXN0LmxhbmUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBmb3JlY2FzdC5sYW5lKGxhbmVHcm91cCwgeyB4LCBiYXNlbGluZSwgbGFuZVRvcDogYmFzZWxpbmUgKyBUSUNLX0gsIGxhbmVIOiBMQU5FX0ggfSk7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvV2VhdGhlckFwcF9UT1AvXCI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJsb2dpY1wiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9sb2dpYy5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==