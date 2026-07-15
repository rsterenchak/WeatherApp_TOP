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
  font-family: 'WebFont1';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

body {
  display: grid;
  margin: 0px;
  font-family: 'WebFont1';
  grid-template-columns: 1fr;

}

#outerContainer {
  display: grid;
  height: 110vh;
  grid-template-rows: 10vh 70px 1fr 20px 35px 90px 20vh;
  grid-template-areas: 
  "header"
  "space1"
  "main"
  "space2"
  "spaceForm"
  "space3"
  "footer"
  ;

}

#header {
  grid-area: header;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  
}

#space1 {
  grid-area: space1;
}

#main {
  display: grid;
  grid-area: main;
  grid-template-columns: 1fr 1000px 1fr;
  grid-template-areas: 
  "sideSpace1 weatherOuter sideSpace2"
  ;
}

#sideSpace1 {
  grid-area: sideSpace1;

}

#weatherOuter {
  display: grid;
  grid-area: weatherOuter;
  grid-template-columns: 1fr 4fr 1fr;
  grid-template-areas: 
  "inner1 innerMain inner2"
  ;
  border-radius: 10px;
}

#inner1 {
  display: grid;
  grid-area: inner1;
  grid-template-rows: 3fr 0.5fr 3fr;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-areas: 
  ". upperLeft ."
  ". arrowLeft ."
  ". lowerLeft ."
  ;
}

#upperLeft {
  grid-area: upperLeft;

}

#arrowLeft {
  grid-area: arrowLeft;
  cursor: pointer;
  width: 65px;
}

#lowerLeft {
  grid-area: lowerLeft;

}

#innerMain {
  display: grid;
  grid-template-rows: 1fr 4fr 0.5fr;
  grid-template-areas: 
  "mainTop"
  "mainMiddle"
  "mainBottom"
  ;
  grid-area: innerMain;
}


#mainTop {
  display: grid;
  grid-area: mainTop;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr 3fr 2fr;
  grid-template-areas: 
  "upperSection upperSection upperSection"
  ". dateSection ."
  "lowerSection lowerSection lowerSection"
  ;

}

#upperSection {
  grid-area: upperSection;

}

#dateSection {
  display: grid;
  grid-area: dateSection;
  grid-template-rows: 1fr 3fr 1fr;
  grid-template-areas: 
  "dateSpace1"
  "dateMain"
  "dateSpace2"
  ;
  
}

#dateSpace1 {
  grid-area: dateSpace1;
  
}

#dateMain {
  grid-area: dateMain;
  text-align: center;
  background-color: white;
  border: 0.5px solid black;
  border-left: none;
  
  border-right: none;
  
  font-size: 26px;
}

#dateSpace2 {
  grid-area: dateSpace2;
  
}

#lowerSection {
  grid-area: lowerSection;

}



#mainMiddle {
  display: grid;
  border-radius: 8px;
  grid-area: mainMiddle;
  grid-template-rows: 1fr 6fr 1fr;
  grid-template-columns: 1fr 5fr 1fr 2fr 0.5fr;
  grid-template-areas: 
  "spacer1 spacer1 spacer1 spacer1 spacer1"
  ". weatherSection . weatherData ."
  "spacer2 spacer2 spacer2 spacer2 spacer2"
  ;
  border: 0.5px solid black;
  box-shadow: 0px 2px 11px rgba(0, 0, 0, 0.3);
}

#spacer1 {
  grid-area: spacer1;
  
}

#spacer2 {
  grid-area: spacer2;

}

#weatherSection {
  display: grid;
  grid-template-rows: 3fr 1fr;
  grid-template-areas: 
  "weatherUpper"
  "weatherLower"
  ;
  grid-area: weatherSection;
  
}

#weatherUpper {
  display: grid;
  background-color: white;
  grid-area: weatherUpper;
  grid-template-rows: 0.5fr 2fr 0.5fr 1fr;
  grid-template-columns: 1fr 4fr 1fr 2fr 1fr;
  grid-template-areas: 
  ". . . . . "
  ". weatherIcon . weatherTemps . "
  ". . . . . "
  ". weatherLocation weatherLocation weatherLocation . "
  ;
}

#weatherIcon {
  grid-area: weatherIcon;
  justify-self: end;
  width: 140px;
}

#weatherTemps {
  display: grid;
  grid-area: weatherTemps;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
  "tempUpper"
  "tempLower"
  ;
}

#weatherLocation {
  grid-area: weatherLocation;
  text-align: center;
  font-size: 24px;
}

#tempUpper {
  grid-area: tempUpper;
  align-self: end;
  font-size: 36px;
  
}

#tempLower {
  grid-area: tempLower;
  
}


#weatherLower {
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  grid-template-rows: 1fr 2fr 1fr;
  grid-template-areas: 
  ". typeUpper ."
  ". weatherType ."
  ". typeLower ."
  ;
  grid-area: weatherLower;
}

#typeUpper {
  grid-area: typeUpper;
}

#weatherType {
  grid-area: weatherType;
  background-color: white;
  text-align: center;
  font-size: 24px;
  border: 1px solid black;
  border-left: none;
  border-right: none;
  border-top: none;
}

#typeLower {
  grid-area: typeLower;

}


#weatherData {
  display: grid;
  background-color: white;
  grid-area: weatherData;
  grid-template-rows: 0.5fr 3fr 0.5fr 3fr 0.5fr 3fr 0.5fr 3fr 0.5fr;
  grid-template-columns: 1fr;
  grid-template-areas: 
  "spaced1"
  "block1"
  "spaced2"
  "block2"
  "spaced3"
  "block3"
  "spaced4"
  "block4"
  "spaced5"
  ;
}

#spaced1 {
  grid-area: spaced1;

}
#block1 {
  display: grid;
  grid-area: block1;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 
  "block1Left block1Right"
  ;
}

#block1Left {
  grid-area: block1Left;
  justify-self: end;
  padding-right: 5px;    
  width: 35px;
}

#block1Right {
  display: grid;
  grid-area: block1Right;
  grid-template-rows: 1fr 2fr;
  grid-template-areas: 
  "block1Top"
  "block1Bottom"
  ;
}

#block1Top {
  grid-area: block1Top;
  text-align: start;
  font-size: 12px;
}

#block1Bottom {
  grid-area: block1Bottom;
  font-size: 20px;
}

#spaced2 {
  grid-area: spaced2;
  
}

#block2 {
  display: grid;
  grid-area: block2;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 
  "block2Left block2Right"
  ;
}

#block2Left {
  grid-area: block2Left;
  justify-self: end;
  padding-right: 5px;  
  width: 35px;

}

#block2Right {
  display: grid;
  grid-area: block2Right;
  grid-template-rows: 1fr 2fr;
  grid-template-areas: 
  "block2Top"
  "block2Bottom"
  ;
}

#block2Top {
  grid-area: block2Top;
  text-align: start;
  font-size: 11px;
}

#block2Bottom {
  grid-area: block2Bottom;
  font-size: 24px;
}



#spaced3 {
  grid-area: spaced3;

}

#block3 {
  display: grid;
  grid-area: block3;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 
  "block3Left block3Right"
  ;
}

#block3Left {
  grid-area: block3Left;
  justify-self: end;
  padding-right: 5px;
  width: 35px;
}

#block3Right {
  display: grid;
  grid-area: block3Right;
  grid-template-rows: 1fr 2fr;
  grid-template-areas: 
  "block3Top"
  "block3Bottom"
  ;
}

#block3Top {
  grid-area: block3Top;
  text-align: start;
  font-size: 11px;
}

#block3Bottom {
  grid-area: block3Bottom;
  font-size: 24px;
}


#spaced4 {
  grid-area: spaced4;

}

#block4 {
  display: grid;
  grid-area: block4;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 
  "block4Left block4Right"
  ;
}

#block4Left {
  grid-area: block4Left;
  justify-self: end;
  padding-right: 8px;
  width: 30px;
}

#block4Right {
  display: grid;
  grid-area: block4Right;
  grid-template-rows: 1fr 2fr;
  grid-template-areas: 
  "block4Top"
  "block4Bottom"
  ;
}

#block4Top {
  grid-area: block4Top;
  text-align: start;
  font-size: 11px;
}

#block4Bottom {
  grid-area: block4Bottom;
  font-size: 15px;
}

#spaced5 {
  grid-area: spaced5;

}


#mainBottom {
  grid-area: mainBottom;
}


#inner2 {
  display: grid;
  grid-area: inner2;
  grid-template-rows: 3fr 0.5fr 3fr;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-areas: 
  ". upperRight ."
  ". arrowRight ."
  ". lowerRight ."
  ;
}

#upperRight {
  grid-area: upperRight;

}

#arrowRight {
  grid-area: arrowRight;
  cursor: pointer;
  width: 65px;
}

#lowerRight {
  grid-area: lowerRight;

}

#sideSpace2 {
  grid-area: sideSpace2;

}


#space2 {
  grid-area: space2;

}

#spaceForm {
  display: grid;
  grid-area: spaceForm;
  grid-template-columns: 1fr 1fr 450px 15px 100px 2fr;
  grid-template-areas: 
  "formSpace1 formSpace2 formInput formSpace3 formButton formSpace4"
  ;
}

#formSpace1 {
  grid-area: formSpace1;

}
#formSpace2 {
  grid-area: formSpace2;

}
#formInput {
  display: grid;
  grid-area: formInput;
  grid-template-columns: 1fr 18fr 1fr;
  grid-template-areas: 
  ". inputInner ."
  ;
  border-radius: 6px;
  border: 1px solid black;
}

#inputInner {
  display: grid;
  grid-area: inputInner;
  border: none;
}

#inputInner:focus {
  outline: none;

}

#formButton {
  display: grid;
  grid-area: formButton;
  grid-template-rows: 5px 1fr 5px;
  grid-template-areas: 
  '.'
  'buttonText'
  '.'
  ;
  text-align: center;
  text-justify: center;
  background-color: #ccc;
  cursor: pointer;
  border-radius: 6px;
  font-size: 16px;
  border: 1px solid black;
}

#buttonText {
  grid-area: buttonText;
}

#formSpace3 {
  grid-area: formSpace3;

}
#formSpace4 {
  grid-area: formSpace4;

}


#space3 {
  grid-area: space3;
}

#footer {
  grid-area: footer; 
  background-color: #ccc;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: 'WebFont1';\n  src: url('./Roboto-Regular.ttf');\n}\n\nbody {\n  display: grid;\n  margin: 0px;\n  font-family: 'WebFont1';\n  grid-template-columns: 1fr;\n\n}\n\n#outerContainer {\n  display: grid;\n  height: 110vh;\n  grid-template-rows: 10vh 70px 1fr 20px 35px 90px 20vh;\n  grid-template-areas: \n  \"header\"\n  \"space1\"\n  \"main\"\n  \"space2\"\n  \"spaceForm\"\n  \"space3\"\n  \"footer\"\n  ;\n\n}\n\n#header {\n  grid-area: header;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);\n  \n}\n\n#space1 {\n  grid-area: space1;\n}\n\n#main {\n  display: grid;\n  grid-area: main;\n  grid-template-columns: 1fr 1000px 1fr;\n  grid-template-areas: \n  \"sideSpace1 weatherOuter sideSpace2\"\n  ;\n}\n\n#sideSpace1 {\n  grid-area: sideSpace1;\n\n}\n\n#weatherOuter {\n  display: grid;\n  grid-area: weatherOuter;\n  grid-template-columns: 1fr 4fr 1fr;\n  grid-template-areas: \n  \"inner1 innerMain inner2\"\n  ;\n  border-radius: 10px;\n}\n\n#inner1 {\n  display: grid;\n  grid-area: inner1;\n  grid-template-rows: 3fr 0.5fr 3fr;\n  grid-template-columns: 1fr 2fr 1fr;\n  grid-template-areas: \n  \". upperLeft .\"\n  \". arrowLeft .\"\n  \". lowerLeft .\"\n  ;\n}\n\n#upperLeft {\n  grid-area: upperLeft;\n\n}\n\n#arrowLeft {\n  grid-area: arrowLeft;\n  cursor: pointer;\n  width: 65px;\n}\n\n#lowerLeft {\n  grid-area: lowerLeft;\n\n}\n\n#innerMain {\n  display: grid;\n  grid-template-rows: 1fr 4fr 0.5fr;\n  grid-template-areas: \n  \"mainTop\"\n  \"mainMiddle\"\n  \"mainBottom\"\n  ;\n  grid-area: innerMain;\n}\n\n\n#mainTop {\n  display: grid;\n  grid-area: mainTop;\n  grid-template-columns: 1fr 2fr 1fr;\n  grid-template-rows: 1fr 3fr 2fr;\n  grid-template-areas: \n  \"upperSection upperSection upperSection\"\n  \". dateSection .\"\n  \"lowerSection lowerSection lowerSection\"\n  ;\n\n}\n\n#upperSection {\n  grid-area: upperSection;\n\n}\n\n#dateSection {\n  display: grid;\n  grid-area: dateSection;\n  grid-template-rows: 1fr 3fr 1fr;\n  grid-template-areas: \n  \"dateSpace1\"\n  \"dateMain\"\n  \"dateSpace2\"\n  ;\n  \n}\n\n#dateSpace1 {\n  grid-area: dateSpace1;\n  \n}\n\n#dateMain {\n  grid-area: dateMain;\n  text-align: center;\n  background-color: white;\n  border: 0.5px solid black;\n  border-left: none;\n  \n  border-right: none;\n  \n  font-size: 26px;\n}\n\n#dateSpace2 {\n  grid-area: dateSpace2;\n  \n}\n\n#lowerSection {\n  grid-area: lowerSection;\n\n}\n\n\n\n#mainMiddle {\n  display: grid;\n  border-radius: 8px;\n  grid-area: mainMiddle;\n  grid-template-rows: 1fr 6fr 1fr;\n  grid-template-columns: 1fr 5fr 1fr 2fr 0.5fr;\n  grid-template-areas: \n  \"spacer1 spacer1 spacer1 spacer1 spacer1\"\n  \". weatherSection . weatherData .\"\n  \"spacer2 spacer2 spacer2 spacer2 spacer2\"\n  ;\n  border: 0.5px solid black;\n  box-shadow: 0px 2px 11px rgba(0, 0, 0, 0.3);\n}\n\n#spacer1 {\n  grid-area: spacer1;\n  \n}\n\n#spacer2 {\n  grid-area: spacer2;\n\n}\n\n#weatherSection {\n  display: grid;\n  grid-template-rows: 3fr 1fr;\n  grid-template-areas: \n  \"weatherUpper\"\n  \"weatherLower\"\n  ;\n  grid-area: weatherSection;\n  \n}\n\n#weatherUpper {\n  display: grid;\n  background-color: white;\n  grid-area: weatherUpper;\n  grid-template-rows: 0.5fr 2fr 0.5fr 1fr;\n  grid-template-columns: 1fr 4fr 1fr 2fr 1fr;\n  grid-template-areas: \n  \". . . . . \"\n  \". weatherIcon . weatherTemps . \"\n  \". . . . . \"\n  \". weatherLocation weatherLocation weatherLocation . \"\n  ;\n}\n\n#weatherIcon {\n  grid-area: weatherIcon;\n  justify-self: end;\n  width: 140px;\n}\n\n#weatherTemps {\n  display: grid;\n  grid-area: weatherTemps;\n  grid-template-rows: 1fr 1fr;\n  grid-template-areas:\n  \"tempUpper\"\n  \"tempLower\"\n  ;\n}\n\n#weatherLocation {\n  grid-area: weatherLocation;\n  text-align: center;\n  font-size: 24px;\n}\n\n#tempUpper {\n  grid-area: tempUpper;\n  align-self: end;\n  font-size: 36px;\n  \n}\n\n#tempLower {\n  grid-area: tempLower;\n  \n}\n\n\n#weatherLower {\n  display: grid;\n  grid-template-columns: 1fr 5fr 1fr;\n  grid-template-rows: 1fr 2fr 1fr;\n  grid-template-areas: \n  \". typeUpper .\"\n  \". weatherType .\"\n  \". typeLower .\"\n  ;\n  grid-area: weatherLower;\n}\n\n#typeUpper {\n  grid-area: typeUpper;\n}\n\n#weatherType {\n  grid-area: weatherType;\n  background-color: white;\n  text-align: center;\n  font-size: 24px;\n  border: 1px solid black;\n  border-left: none;\n  border-right: none;\n  border-top: none;\n}\n\n#typeLower {\n  grid-area: typeLower;\n\n}\n\n\n#weatherData {\n  display: grid;\n  background-color: white;\n  grid-area: weatherData;\n  grid-template-rows: 0.5fr 3fr 0.5fr 3fr 0.5fr 3fr 0.5fr 3fr 0.5fr;\n  grid-template-columns: 1fr;\n  grid-template-areas: \n  \"spaced1\"\n  \"block1\"\n  \"spaced2\"\n  \"block2\"\n  \"spaced3\"\n  \"block3\"\n  \"spaced4\"\n  \"block4\"\n  \"spaced5\"\n  ;\n}\n\n#spaced1 {\n  grid-area: spaced1;\n\n}\n#block1 {\n  display: grid;\n  grid-area: block1;\n  grid-template-columns: 1fr 1fr;\n  grid-template-areas: \n  \"block1Left block1Right\"\n  ;\n}\n\n#block1Left {\n  grid-area: block1Left;\n  justify-self: end;\n  padding-right: 5px;    \n  width: 35px;\n}\n\n#block1Right {\n  display: grid;\n  grid-area: block1Right;\n  grid-template-rows: 1fr 2fr;\n  grid-template-areas: \n  \"block1Top\"\n  \"block1Bottom\"\n  ;\n}\n\n#block1Top {\n  grid-area: block1Top;\n  text-align: start;\n  font-size: 12px;\n}\n\n#block1Bottom {\n  grid-area: block1Bottom;\n  font-size: 20px;\n}\n\n#spaced2 {\n  grid-area: spaced2;\n  \n}\n\n#block2 {\n  display: grid;\n  grid-area: block2;\n  grid-template-columns: 1fr 1fr;\n  grid-template-areas: \n  \"block2Left block2Right\"\n  ;\n}\n\n#block2Left {\n  grid-area: block2Left;\n  justify-self: end;\n  padding-right: 5px;  \n  width: 35px;\n\n}\n\n#block2Right {\n  display: grid;\n  grid-area: block2Right;\n  grid-template-rows: 1fr 2fr;\n  grid-template-areas: \n  \"block2Top\"\n  \"block2Bottom\"\n  ;\n}\n\n#block2Top {\n  grid-area: block2Top;\n  text-align: start;\n  font-size: 11px;\n}\n\n#block2Bottom {\n  grid-area: block2Bottom;\n  font-size: 24px;\n}\n\n\n\n#spaced3 {\n  grid-area: spaced3;\n\n}\n\n#block3 {\n  display: grid;\n  grid-area: block3;\n  grid-template-columns: 1fr 1fr;\n  grid-template-areas: \n  \"block3Left block3Right\"\n  ;\n}\n\n#block3Left {\n  grid-area: block3Left;\n  justify-self: end;\n  padding-right: 5px;\n  width: 35px;\n}\n\n#block3Right {\n  display: grid;\n  grid-area: block3Right;\n  grid-template-rows: 1fr 2fr;\n  grid-template-areas: \n  \"block3Top\"\n  \"block3Bottom\"\n  ;\n}\n\n#block3Top {\n  grid-area: block3Top;\n  text-align: start;\n  font-size: 11px;\n}\n\n#block3Bottom {\n  grid-area: block3Bottom;\n  font-size: 24px;\n}\n\n\n#spaced4 {\n  grid-area: spaced4;\n\n}\n\n#block4 {\n  display: grid;\n  grid-area: block4;\n  grid-template-columns: 1fr 1fr;\n  grid-template-areas: \n  \"block4Left block4Right\"\n  ;\n}\n\n#block4Left {\n  grid-area: block4Left;\n  justify-self: end;\n  padding-right: 8px;\n  width: 30px;\n}\n\n#block4Right {\n  display: grid;\n  grid-area: block4Right;\n  grid-template-rows: 1fr 2fr;\n  grid-template-areas: \n  \"block4Top\"\n  \"block4Bottom\"\n  ;\n}\n\n#block4Top {\n  grid-area: block4Top;\n  text-align: start;\n  font-size: 11px;\n}\n\n#block4Bottom {\n  grid-area: block4Bottom;\n  font-size: 15px;\n}\n\n#spaced5 {\n  grid-area: spaced5;\n\n}\n\n\n#mainBottom {\n  grid-area: mainBottom;\n}\n\n\n#inner2 {\n  display: grid;\n  grid-area: inner2;\n  grid-template-rows: 3fr 0.5fr 3fr;\n  grid-template-columns: 1fr 2fr 1fr;\n  grid-template-areas: \n  \". upperRight .\"\n  \". arrowRight .\"\n  \". lowerRight .\"\n  ;\n}\n\n#upperRight {\n  grid-area: upperRight;\n\n}\n\n#arrowRight {\n  grid-area: arrowRight;\n  cursor: pointer;\n  width: 65px;\n}\n\n#lowerRight {\n  grid-area: lowerRight;\n\n}\n\n#sideSpace2 {\n  grid-area: sideSpace2;\n\n}\n\n\n#space2 {\n  grid-area: space2;\n\n}\n\n#spaceForm {\n  display: grid;\n  grid-area: spaceForm;\n  grid-template-columns: 1fr 1fr 450px 15px 100px 2fr;\n  grid-template-areas: \n  \"formSpace1 formSpace2 formInput formSpace3 formButton formSpace4\"\n  ;\n}\n\n#formSpace1 {\n  grid-area: formSpace1;\n\n}\n#formSpace2 {\n  grid-area: formSpace2;\n\n}\n#formInput {\n  display: grid;\n  grid-area: formInput;\n  grid-template-columns: 1fr 18fr 1fr;\n  grid-template-areas: \n  \". inputInner .\"\n  ;\n  border-radius: 6px;\n  border: 1px solid black;\n}\n\n#inputInner {\n  display: grid;\n  grid-area: inputInner;\n  border: none;\n}\n\n#inputInner:focus {\n  outline: none;\n\n}\n\n#formButton {\n  display: grid;\n  grid-area: formButton;\n  grid-template-rows: 5px 1fr 5px;\n  grid-template-areas: \n  '.'\n  'buttonText'\n  '.'\n  ;\n  text-align: center;\n  text-justify: center;\n  background-color: #ccc;\n  cursor: pointer;\n  border-radius: 6px;\n  font-size: 16px;\n  border: 1px solid black;\n}\n\n#buttonText {\n  grid-area: buttonText;\n}\n\n#formSpace3 {\n  grid-area: formSpace3;\n\n}\n#formSpace4 {\n  grid-area: formSpace4;\n\n}\n\n\n#space3 {\n  grid-area: space3;\n}\n\n#footer {\n  grid-area: footer; \n  background-color: #ccc;\n}"],"sourceRoot":""}]);
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
/******/ 			"day": 0
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
/*!********************!*\
  !*** ./src/day.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




// FACTORY FUNCTION: TODO OBJECT
// Store list items in objects
/* const day = (weather, locationName, dayName, dayDate, feelsLike, humidity, highTemp, lowTemp, rainChance, windSpeed) => {
    let wea = weather;
    let locN = locationName;
    let dayNa = dayName;
    let dayNow = dayDate;
    let currentT = feelsLike;
    let hum = humidity;
    let highT = highTemp;
    let lowT = lowTemp;
    let rainC = rainChance;
    let ws = windSpeed;

    

    
    return {wea, locN, dayNa, dayNow, currentT, hum, highT, lowT, rainC, ws};
  };
  

export { day }; */

class Day {
  constructor(weather, locationName, dayName, dayDate, feelsLike, humidity, highTemp, lowTemp, rainChance, windSpeed) {
    this.weather = weather;
    this.locationName = locationName;
    this.dayName = dayName;
    this.dayDate = dayDate;
    this.feelsLike = feelsLike;
    this.humidity = humidity;
    this.highTemp = highTemp;
    this.lowTemp = lowTemp;
    this.rainChance = rainChance;
    this.windSpeed = windSpeed;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Day);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF5LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHFIQUF1QztBQUNuRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGNBQWMsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssWUFBWSxjQUFjLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssTUFBTSxLQUFLLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFNBQVMsS0FBSyxNQUFNLEtBQUssYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxTQUFTLEtBQUssWUFBWSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxTQUFTLE1BQU0sTUFBTSxLQUFLLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFNBQVMsTUFBTSxNQUFNLEtBQUssYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxjQUFjLGNBQWMsV0FBVyxPQUFPLEtBQUssYUFBYSxPQUFPLEtBQUssYUFBYSxTQUFTLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFNBQVMsS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLGFBQWEsT0FBTyxLQUFLLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxRQUFRLEtBQUssYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFVBQVUsS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFFBQVEsS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxXQUFXLE9BQU8sS0FBSyxhQUFhLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxTQUFTLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxhQUFhLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsZUFBZSxLQUFLLE1BQU0sS0FBSyxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFFBQVEsS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxRQUFRLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsU0FBUyxLQUFLLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsUUFBUSxLQUFLLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFFBQVEsS0FBSyxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFFBQVEsS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssYUFBYSxRQUFRLEtBQUssWUFBWSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxTQUFTLEtBQUssTUFBTSxLQUFLLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxhQUFhLE9BQU8sS0FBSyxhQUFhLFFBQVEsS0FBSyxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssTUFBTSxLQUFLLGFBQWEsTUFBTSxLQUFLLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxTQUFTLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssYUFBYSxNQUFNLEtBQUssYUFBYSxRQUFRLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLHNDQUFzQyw0QkFBNEIscUNBQXFDLEdBQUcsVUFBVSxrQkFBa0IsZ0JBQWdCLDRCQUE0QiwrQkFBK0IsS0FBSyxxQkFBcUIsa0JBQWtCLGtCQUFrQiwwREFBMEQsaUlBQWlJLEtBQUssYUFBYSxzQkFBc0IsZ0RBQWdELE9BQU8sYUFBYSxzQkFBc0IsR0FBRyxXQUFXLGtCQUFrQixvQkFBb0IsMENBQTBDLHdFQUF3RSxHQUFHLGlCQUFpQiwwQkFBMEIsS0FBSyxtQkFBbUIsa0JBQWtCLDRCQUE0Qix1Q0FBdUMsNkRBQTZELHdCQUF3QixHQUFHLGFBQWEsa0JBQWtCLHNCQUFzQixzQ0FBc0MsdUNBQXVDLDZGQUE2RixHQUFHLGdCQUFnQix5QkFBeUIsS0FBSyxnQkFBZ0IseUJBQXlCLG9CQUFvQixnQkFBZ0IsR0FBRyxnQkFBZ0IseUJBQXlCLEtBQUssZ0JBQWdCLGtCQUFrQixzQ0FBc0MsaUZBQWlGLHlCQUF5QixHQUFHLGdCQUFnQixrQkFBa0IsdUJBQXVCLHVDQUF1QyxvQ0FBb0MsaUpBQWlKLEtBQUssbUJBQW1CLDRCQUE0QixLQUFLLGtCQUFrQixrQkFBa0IsMkJBQTJCLG9DQUFvQyxrRkFBa0YsT0FBTyxpQkFBaUIsMEJBQTBCLE9BQU8sZUFBZSx3QkFBd0IsdUJBQXVCLDRCQUE0Qiw4QkFBOEIsc0JBQXNCLDJCQUEyQix3QkFBd0IsR0FBRyxpQkFBaUIsMEJBQTBCLE9BQU8sbUJBQW1CLDRCQUE0QixLQUFLLHFCQUFxQixrQkFBa0IsdUJBQXVCLDBCQUEwQixvQ0FBb0MsaURBQWlELG9LQUFvSyw4QkFBOEIsZ0RBQWdELEdBQUcsY0FBYyx1QkFBdUIsT0FBTyxjQUFjLHVCQUF1QixLQUFLLHFCQUFxQixrQkFBa0IsZ0NBQWdDLHNFQUFzRSw4QkFBOEIsT0FBTyxtQkFBbUIsa0JBQWtCLDRCQUE0Qiw0QkFBNEIsNENBQTRDLCtDQUErQyxxS0FBcUssR0FBRyxrQkFBa0IsMkJBQTJCLHNCQUFzQixpQkFBaUIsR0FBRyxtQkFBbUIsa0JBQWtCLDRCQUE0QixnQ0FBZ0MsK0RBQStELEdBQUcsc0JBQXNCLCtCQUErQix1QkFBdUIsb0JBQW9CLEdBQUcsZ0JBQWdCLHlCQUF5QixvQkFBb0Isb0JBQW9CLE9BQU8sZ0JBQWdCLHlCQUF5QixPQUFPLHFCQUFxQixrQkFBa0IsdUNBQXVDLG9DQUFvQywrRkFBK0YsNEJBQTRCLEdBQUcsZ0JBQWdCLHlCQUF5QixHQUFHLGtCQUFrQiwyQkFBMkIsNEJBQTRCLHVCQUF1QixvQkFBb0IsNEJBQTRCLHNCQUFzQix1QkFBdUIscUJBQXFCLEdBQUcsZ0JBQWdCLHlCQUF5QixLQUFLLG9CQUFvQixrQkFBa0IsNEJBQTRCLDJCQUEyQixzRUFBc0UsK0JBQStCLGlLQUFpSyxHQUFHLGNBQWMsdUJBQXVCLEtBQUssV0FBVyxrQkFBa0Isc0JBQXNCLG1DQUFtQyw0REFBNEQsR0FBRyxpQkFBaUIsMEJBQTBCLHNCQUFzQiwyQkFBMkIsZ0JBQWdCLEdBQUcsa0JBQWtCLGtCQUFrQiwyQkFBMkIsZ0NBQWdDLG1FQUFtRSxHQUFHLGdCQUFnQix5QkFBeUIsc0JBQXNCLG9CQUFvQixHQUFHLG1CQUFtQiw0QkFBNEIsb0JBQW9CLEdBQUcsY0FBYyx1QkFBdUIsT0FBTyxhQUFhLGtCQUFrQixzQkFBc0IsbUNBQW1DLDREQUE0RCxHQUFHLGlCQUFpQiwwQkFBMEIsc0JBQXNCLHlCQUF5QixnQkFBZ0IsS0FBSyxrQkFBa0Isa0JBQWtCLDJCQUEyQixnQ0FBZ0MsbUVBQW1FLEdBQUcsZ0JBQWdCLHlCQUF5QixzQkFBc0Isb0JBQW9CLEdBQUcsbUJBQW1CLDRCQUE0QixvQkFBb0IsR0FBRyxrQkFBa0IsdUJBQXVCLEtBQUssYUFBYSxrQkFBa0Isc0JBQXNCLG1DQUFtQyw0REFBNEQsR0FBRyxpQkFBaUIsMEJBQTBCLHNCQUFzQix1QkFBdUIsZ0JBQWdCLEdBQUcsa0JBQWtCLGtCQUFrQiwyQkFBMkIsZ0NBQWdDLG1FQUFtRSxHQUFHLGdCQUFnQix5QkFBeUIsc0JBQXNCLG9CQUFvQixHQUFHLG1CQUFtQiw0QkFBNEIsb0JBQW9CLEdBQUcsZ0JBQWdCLHVCQUF1QixLQUFLLGFBQWEsa0JBQWtCLHNCQUFzQixtQ0FBbUMsNERBQTRELEdBQUcsaUJBQWlCLDBCQUEwQixzQkFBc0IsdUJBQXVCLGdCQUFnQixHQUFHLGtCQUFrQixrQkFBa0IsMkJBQTJCLGdDQUFnQyxtRUFBbUUsR0FBRyxnQkFBZ0IseUJBQXlCLHNCQUFzQixvQkFBb0IsR0FBRyxtQkFBbUIsNEJBQTRCLG9CQUFvQixHQUFHLGNBQWMsdUJBQXVCLEtBQUssbUJBQW1CLDBCQUEwQixHQUFHLGVBQWUsa0JBQWtCLHNCQUFzQixzQ0FBc0MsdUNBQXVDLGdHQUFnRyxHQUFHLGlCQUFpQiwwQkFBMEIsS0FBSyxpQkFBaUIsMEJBQTBCLG9CQUFvQixnQkFBZ0IsR0FBRyxpQkFBaUIsMEJBQTBCLEtBQUssaUJBQWlCLDBCQUEwQixLQUFLLGVBQWUsc0JBQXNCLEtBQUssZ0JBQWdCLGtCQUFrQix5QkFBeUIsd0RBQXdELHNHQUFzRyxHQUFHLGlCQUFpQiwwQkFBMEIsS0FBSyxlQUFlLDBCQUEwQixLQUFLLGNBQWMsa0JBQWtCLHlCQUF5Qix3Q0FBd0Msb0RBQW9ELHVCQUF1Qiw0QkFBNEIsR0FBRyxpQkFBaUIsa0JBQWtCLDBCQUEwQixpQkFBaUIsR0FBRyx1QkFBdUIsa0JBQWtCLEtBQUssaUJBQWlCLGtCQUFrQiwwQkFBMEIsb0NBQW9DLDREQUE0RCx1QkFBdUIseUJBQXlCLDJCQUEyQixvQkFBb0IsdUJBQXVCLG9CQUFvQiw0QkFBNEIsR0FBRyxpQkFBaUIsMEJBQTBCLEdBQUcsaUJBQWlCLDBCQUEwQixLQUFLLGVBQWUsMEJBQTBCLEtBQUssZUFBZSxzQkFBc0IsR0FBRyxhQUFhLHVCQUF1QiwyQkFBMkIsR0FBRyxtQkFBbUI7QUFDbnRaO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDaG1CMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDekJhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztVQ2JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1dDQUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCOzs7O0FBSXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUEsU0FBUyxPQUFPOztBQUVoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLEdBQUcsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vc3JjL2RheS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9Sb2JvdG8tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1dlYkZvbnQxJztcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbmJvZHkge1xuICBkaXNwbGF5OiBncmlkO1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1mYW1pbHk6ICdXZWJGb250MSc7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuXG59XG5cbiNvdXRlckNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGhlaWdodDogMTEwdmg7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTB2aCA3MHB4IDFmciAyMHB4IDM1cHggOTBweCAyMHZoO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgXCJoZWFkZXJcIlxuICBcInNwYWNlMVwiXG4gIFwibWFpblwiXG4gIFwic3BhY2UyXCJcbiAgXCJzcGFjZUZvcm1cIlxuICBcInNwYWNlM1wiXG4gIFwiZm9vdGVyXCJcbiAgO1xuXG59XG5cbiNoZWFkZXIge1xuICBncmlkLWFyZWE6IGhlYWRlcjtcbiAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgXG59XG5cbiNzcGFjZTEge1xuICBncmlkLWFyZWE6IHNwYWNlMTtcbn1cblxuI21haW4ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWFyZWE6IG1haW47XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEwMDBweCAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICBcInNpZGVTcGFjZTEgd2VhdGhlck91dGVyIHNpZGVTcGFjZTJcIlxuICA7XG59XG5cbiNzaWRlU3BhY2UxIHtcbiAgZ3JpZC1hcmVhOiBzaWRlU3BhY2UxO1xuXG59XG5cbiN3ZWF0aGVyT3V0ZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWFyZWE6IHdlYXRoZXJPdXRlcjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gIFwiaW5uZXIxIGlubmVyTWFpbiBpbm5lcjJcIlxuICA7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbiNpbm5lcjEge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWFyZWE6IGlubmVyMTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzZnIgMC41ZnIgM2ZyO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMWZyO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgXCIuIHVwcGVyTGVmdCAuXCJcbiAgXCIuIGFycm93TGVmdCAuXCJcbiAgXCIuIGxvd2VyTGVmdCAuXCJcbiAgO1xufVxuXG4jdXBwZXJMZWZ0IHtcbiAgZ3JpZC1hcmVhOiB1cHBlckxlZnQ7XG5cbn1cblxuI2Fycm93TGVmdCB7XG4gIGdyaWQtYXJlYTogYXJyb3dMZWZ0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiA2NXB4O1xufVxuXG4jbG93ZXJMZWZ0IHtcbiAgZ3JpZC1hcmVhOiBsb3dlckxlZnQ7XG5cbn1cblxuI2lubmVyTWFpbiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDRmciAwLjVmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gIFwibWFpblRvcFwiXG4gIFwibWFpbk1pZGRsZVwiXG4gIFwibWFpbkJvdHRvbVwiXG4gIDtcbiAgZ3JpZC1hcmVhOiBpbm5lck1haW47XG59XG5cblxuI21haW5Ub3Age1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWFyZWE6IG1haW5Ub3A7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDNmciAyZnI7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICBcInVwcGVyU2VjdGlvbiB1cHBlclNlY3Rpb24gdXBwZXJTZWN0aW9uXCJcbiAgXCIuIGRhdGVTZWN0aW9uIC5cIlxuICBcImxvd2VyU2VjdGlvbiBsb3dlclNlY3Rpb24gbG93ZXJTZWN0aW9uXCJcbiAgO1xuXG59XG5cbiN1cHBlclNlY3Rpb24ge1xuICBncmlkLWFyZWE6IHVwcGVyU2VjdGlvbjtcblxufVxuXG4jZGF0ZVNlY3Rpb24ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWFyZWE6IGRhdGVTZWN0aW9uO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAzZnIgMWZyO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgXCJkYXRlU3BhY2UxXCJcbiAgXCJkYXRlTWFpblwiXG4gIFwiZGF0ZVNwYWNlMlwiXG4gIDtcbiAgXG59XG5cbiNkYXRlU3BhY2UxIHtcbiAgZ3JpZC1hcmVhOiBkYXRlU3BhY2UxO1xuICBcbn1cblxuI2RhdGVNYWluIHtcbiAgZ3JpZC1hcmVhOiBkYXRlTWFpbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gIFxuICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIFxuICBmb250LXNpemU6IDI2cHg7XG59XG5cbiNkYXRlU3BhY2UyIHtcbiAgZ3JpZC1hcmVhOiBkYXRlU3BhY2UyO1xuICBcbn1cblxuI2xvd2VyU2VjdGlvbiB7XG4gIGdyaWQtYXJlYTogbG93ZXJTZWN0aW9uO1xuXG59XG5cblxuXG4jbWFpbk1pZGRsZSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZ3JpZC1hcmVhOiBtYWluTWlkZGxlO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA2ZnIgMWZyO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnIgMWZyIDJmciAwLjVmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gIFwic3BhY2VyMSBzcGFjZXIxIHNwYWNlcjEgc3BhY2VyMSBzcGFjZXIxXCJcbiAgXCIuIHdlYXRoZXJTZWN0aW9uIC4gd2VhdGhlckRhdGEgLlwiXG4gIFwic3BhY2VyMiBzcGFjZXIyIHNwYWNlcjIgc3BhY2VyMiBzcGFjZXIyXCJcbiAgO1xuICBib3JkZXI6IDAuNXB4IHNvbGlkIGJsYWNrO1xuICBib3gtc2hhZG93OiAwcHggMnB4IDExcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuXG4jc3BhY2VyMSB7XG4gIGdyaWQtYXJlYTogc3BhY2VyMTtcbiAgXG59XG5cbiNzcGFjZXIyIHtcbiAgZ3JpZC1hcmVhOiBzcGFjZXIyO1xuXG59XG5cbiN3ZWF0aGVyU2VjdGlvbiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogM2ZyIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gIFwid2VhdGhlclVwcGVyXCJcbiAgXCJ3ZWF0aGVyTG93ZXJcIlxuICA7XG4gIGdyaWQtYXJlYTogd2VhdGhlclNlY3Rpb247XG4gIFxufVxuXG4jd2VhdGhlclVwcGVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGdyaWQtYXJlYTogd2VhdGhlclVwcGVyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDJmciAwLjVmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmciAxZnIgMmZyIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gIFwiLiAuIC4gLiAuIFwiXG4gIFwiLiB3ZWF0aGVySWNvbiAuIHdlYXRoZXJUZW1wcyAuIFwiXG4gIFwiLiAuIC4gLiAuIFwiXG4gIFwiLiB3ZWF0aGVyTG9jYXRpb24gd2VhdGhlckxvY2F0aW9uIHdlYXRoZXJMb2NhdGlvbiAuIFwiXG4gIDtcbn1cblxuI3dlYXRoZXJJY29uIHtcbiAgZ3JpZC1hcmVhOiB3ZWF0aGVySWNvbjtcbiAganVzdGlmeS1zZWxmOiBlbmQ7XG4gIHdpZHRoOiAxNDBweDtcbn1cblxuI3dlYXRoZXJUZW1wcyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXJlYTogd2VhdGhlclRlbXBzO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gIFwidGVtcFVwcGVyXCJcbiAgXCJ0ZW1wTG93ZXJcIlxuICA7XG59XG5cbiN3ZWF0aGVyTG9jYXRpb24ge1xuICBncmlkLWFyZWE6IHdlYXRoZXJMb2NhdGlvbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbiN0ZW1wVXBwZXIge1xuICBncmlkLWFyZWE6IHRlbXBVcHBlcjtcbiAgYWxpZ24tc2VsZjogZW5kO1xuICBmb250LXNpemU6IDM2cHg7XG4gIFxufVxuXG4jdGVtcExvd2VyIHtcbiAgZ3JpZC1hcmVhOiB0ZW1wTG93ZXI7XG4gIFxufVxuXG5cbiN3ZWF0aGVyTG93ZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnIgMWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnIgMWZyO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgXCIuIHR5cGVVcHBlciAuXCJcbiAgXCIuIHdlYXRoZXJUeXBlIC5cIlxuICBcIi4gdHlwZUxvd2VyIC5cIlxuICA7XG4gIGdyaWQtYXJlYTogd2VhdGhlckxvd2VyO1xufVxuXG4jdHlwZVVwcGVyIHtcbiAgZ3JpZC1hcmVhOiB0eXBlVXBwZXI7XG59XG5cbiN3ZWF0aGVyVHlwZSB7XG4gIGdyaWQtYXJlYTogd2VhdGhlclR5cGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIGJvcmRlci10b3A6IG5vbmU7XG59XG5cbiN0eXBlTG93ZXIge1xuICBncmlkLWFyZWE6IHR5cGVMb3dlcjtcblxufVxuXG5cbiN3ZWF0aGVyRGF0YSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBncmlkLWFyZWE6IHdlYXRoZXJEYXRhO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDNmciAwLjVmciAzZnIgMC41ZnIgM2ZyIDAuNWZyIDNmciAwLjVmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICBcInNwYWNlZDFcIlxuICBcImJsb2NrMVwiXG4gIFwic3BhY2VkMlwiXG4gIFwiYmxvY2syXCJcbiAgXCJzcGFjZWQzXCJcbiAgXCJibG9jazNcIlxuICBcInNwYWNlZDRcIlxuICBcImJsb2NrNFwiXG4gIFwic3BhY2VkNVwiXG4gIDtcbn1cblxuI3NwYWNlZDEge1xuICBncmlkLWFyZWE6IHNwYWNlZDE7XG5cbn1cbiNibG9jazEge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWFyZWE6IGJsb2NrMTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgXCJibG9jazFMZWZ0IGJsb2NrMVJpZ2h0XCJcbiAgO1xufVxuXG4jYmxvY2sxTGVmdCB7XG4gIGdyaWQtYXJlYTogYmxvY2sxTGVmdDtcbiAganVzdGlmeS1zZWxmOiBlbmQ7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDsgICAgXG4gIHdpZHRoOiAzNXB4O1xufVxuXG4jYmxvY2sxUmlnaHQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWFyZWE6IGJsb2NrMVJpZ2h0O1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnI7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICBcImJsb2NrMVRvcFwiXG4gIFwiYmxvY2sxQm90dG9tXCJcbiAgO1xufVxuXG4jYmxvY2sxVG9wIHtcbiAgZ3JpZC1hcmVhOiBibG9jazFUb3A7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbiNibG9jazFCb3R0b20ge1xuICBncmlkLWFyZWE6IGJsb2NrMUJvdHRvbTtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4jc3BhY2VkMiB7XG4gIGdyaWQtYXJlYTogc3BhY2VkMjtcbiAgXG59XG5cbiNibG9jazIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWFyZWE6IGJsb2NrMjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgXCJibG9jazJMZWZ0IGJsb2NrMlJpZ2h0XCJcbiAgO1xufVxuXG4jYmxvY2syTGVmdCB7XG4gIGdyaWQtYXJlYTogYmxvY2syTGVmdDtcbiAganVzdGlmeS1zZWxmOiBlbmQ7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDsgIFxuICB3aWR0aDogMzVweDtcblxufVxuXG4jYmxvY2syUmlnaHQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWFyZWE6IGJsb2NrMlJpZ2h0O1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnI7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICBcImJsb2NrMlRvcFwiXG4gIFwiYmxvY2syQm90dG9tXCJcbiAgO1xufVxuXG4jYmxvY2syVG9wIHtcbiAgZ3JpZC1hcmVhOiBibG9jazJUb3A7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBmb250LXNpemU6IDExcHg7XG59XG5cbiNibG9jazJCb3R0b20ge1xuICBncmlkLWFyZWE6IGJsb2NrMkJvdHRvbTtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG5cblxuI3NwYWNlZDMge1xuICBncmlkLWFyZWE6IHNwYWNlZDM7XG5cbn1cblxuI2Jsb2NrMyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXJlYTogYmxvY2szO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICBcImJsb2NrM0xlZnQgYmxvY2szUmlnaHRcIlxuICA7XG59XG5cbiNibG9jazNMZWZ0IHtcbiAgZ3JpZC1hcmVhOiBibG9jazNMZWZ0O1xuICBqdXN0aWZ5LXNlbGY6IGVuZDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xuICB3aWR0aDogMzVweDtcbn1cblxuI2Jsb2NrM1JpZ2h0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hcmVhOiBibG9jazNSaWdodDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgXCJibG9jazNUb3BcIlxuICBcImJsb2NrM0JvdHRvbVwiXG4gIDtcbn1cblxuI2Jsb2NrM1RvcCB7XG4gIGdyaWQtYXJlYTogYmxvY2szVG9wO1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuXG4jYmxvY2szQm90dG9tIHtcbiAgZ3JpZC1hcmVhOiBibG9jazNCb3R0b207XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuXG4jc3BhY2VkNCB7XG4gIGdyaWQtYXJlYTogc3BhY2VkNDtcblxufVxuXG4jYmxvY2s0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hcmVhOiBibG9jazQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gIFwiYmxvY2s0TGVmdCBibG9jazRSaWdodFwiXG4gIDtcbn1cblxuI2Jsb2NrNExlZnQge1xuICBncmlkLWFyZWE6IGJsb2NrNExlZnQ7XG4gIGp1c3RpZnktc2VsZjogZW5kO1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gIHdpZHRoOiAzMHB4O1xufVxuXG4jYmxvY2s0UmlnaHQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWFyZWE6IGJsb2NrNFJpZ2h0O1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnI7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICBcImJsb2NrNFRvcFwiXG4gIFwiYmxvY2s0Qm90dG9tXCJcbiAgO1xufVxuXG4jYmxvY2s0VG9wIHtcbiAgZ3JpZC1hcmVhOiBibG9jazRUb3A7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBmb250LXNpemU6IDExcHg7XG59XG5cbiNibG9jazRCb3R0b20ge1xuICBncmlkLWFyZWE6IGJsb2NrNEJvdHRvbTtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4jc3BhY2VkNSB7XG4gIGdyaWQtYXJlYTogc3BhY2VkNTtcblxufVxuXG5cbiNtYWluQm90dG9tIHtcbiAgZ3JpZC1hcmVhOiBtYWluQm90dG9tO1xufVxuXG5cbiNpbm5lcjIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWFyZWE6IGlubmVyMjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzZnIgMC41ZnIgM2ZyO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMWZyO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgXCIuIHVwcGVyUmlnaHQgLlwiXG4gIFwiLiBhcnJvd1JpZ2h0IC5cIlxuICBcIi4gbG93ZXJSaWdodCAuXCJcbiAgO1xufVxuXG4jdXBwZXJSaWdodCB7XG4gIGdyaWQtYXJlYTogdXBwZXJSaWdodDtcblxufVxuXG4jYXJyb3dSaWdodCB7XG4gIGdyaWQtYXJlYTogYXJyb3dSaWdodDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogNjVweDtcbn1cblxuI2xvd2VyUmlnaHQge1xuICBncmlkLWFyZWE6IGxvd2VyUmlnaHQ7XG5cbn1cblxuI3NpZGVTcGFjZTIge1xuICBncmlkLWFyZWE6IHNpZGVTcGFjZTI7XG5cbn1cblxuXG4jc3BhY2UyIHtcbiAgZ3JpZC1hcmVhOiBzcGFjZTI7XG5cbn1cblxuI3NwYWNlRm9ybSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXJlYTogc3BhY2VGb3JtO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgNDUwcHggMTVweCAxMDBweCAyZnI7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICBcImZvcm1TcGFjZTEgZm9ybVNwYWNlMiBmb3JtSW5wdXQgZm9ybVNwYWNlMyBmb3JtQnV0dG9uIGZvcm1TcGFjZTRcIlxuICA7XG59XG5cbiNmb3JtU3BhY2UxIHtcbiAgZ3JpZC1hcmVhOiBmb3JtU3BhY2UxO1xuXG59XG4jZm9ybVNwYWNlMiB7XG4gIGdyaWQtYXJlYTogZm9ybVNwYWNlMjtcblxufVxuI2Zvcm1JbnB1dCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXJlYTogZm9ybUlucHV0O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxOGZyIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gIFwiLiBpbnB1dElubmVyIC5cIlxuICA7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbiNpbnB1dElubmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hcmVhOiBpbnB1dElubmVyO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbiNpbnB1dElubmVyOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcblxufVxuXG4jZm9ybUJ1dHRvbiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXJlYTogZm9ybUJ1dHRvbjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1cHggMWZyIDVweDtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gICcuJ1xuICAnYnV0dG9uVGV4dCdcbiAgJy4nXG4gIDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWp1c3RpZnk6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbiNidXR0b25UZXh0IHtcbiAgZ3JpZC1hcmVhOiBidXR0b25UZXh0O1xufVxuXG4jZm9ybVNwYWNlMyB7XG4gIGdyaWQtYXJlYTogZm9ybVNwYWNlMztcblxufVxuI2Zvcm1TcGFjZTQge1xuICBncmlkLWFyZWE6IGZvcm1TcGFjZTQ7XG5cbn1cblxuXG4jc3BhY2UzIHtcbiAgZ3JpZC1hcmVhOiBzcGFjZTM7XG59XG5cbiNmb290ZXIge1xuICBncmlkLWFyZWE6IGZvb3RlcjsgXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLDRDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLDBCQUEwQjs7QUFFNUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLHFEQUFxRDtFQUNyRDs7Ozs7Ozs7RUFRQTs7QUFFRjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQiwyQ0FBMkM7O0FBRTdDOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixxQ0FBcUM7RUFDckM7O0VBRUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFxQjs7QUFFdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGtDQUFrQztFQUNsQzs7RUFFQTtFQUNBLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsaUNBQWlDO0VBQ2pDLGtDQUFrQztFQUNsQzs7OztFQUlBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBb0I7O0FBRXRCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxvQkFBb0I7O0FBRXRCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlDQUFpQztFQUNqQzs7OztFQUlBO0VBQ0Esb0JBQW9CO0FBQ3RCOzs7QUFHQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsa0NBQWtDO0VBQ2xDLCtCQUErQjtFQUMvQjs7OztFQUlBOztBQUVGOztBQUVBO0VBQ0UsdUJBQXVCOztBQUV6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsK0JBQStCO0VBQy9C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ZDs7QUFFQTtFQUNFLGFBQWE7O0FBRWY7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLCtCQUErQjtFQUMvQjs7OztFQUlBO0VBQ0Esa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UscUJBQXFCOztBQUV2QjtBQUNBO0VBQ0UscUJBQXFCOztBQUV2Qjs7O0FBR0E7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsc0JBQXNCO0FBQ3hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdXZWJGb250MSc7XFxuICBzcmM6IHVybCgnLi9Sb2JvdG8tUmVndWxhci50dGYnKTtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgbWFyZ2luOiAwcHg7XFxuICBmb250LWZhbWlseTogJ1dlYkZvbnQxJztcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcblxcbn1cXG5cXG4jb3V0ZXJDb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGhlaWdodDogMTEwdmg7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwdmggNzBweCAxZnIgMjBweCAzNXB4IDkwcHggMjB2aDtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgXFxcImhlYWRlclxcXCJcXG4gIFxcXCJzcGFjZTFcXFwiXFxuICBcXFwibWFpblxcXCJcXG4gIFxcXCJzcGFjZTJcXFwiXFxuICBcXFwic3BhY2VGb3JtXFxcIlxcbiAgXFxcInNwYWNlM1xcXCJcXG4gIFxcXCJmb290ZXJcXFwiXFxuICA7XFxuXFxufVxcblxcbiNoZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICBib3gtc2hhZG93OiAwcHggNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgXFxufVxcblxcbiNzcGFjZTEge1xcbiAgZ3JpZC1hcmVhOiBzcGFjZTE7XFxufVxcblxcbiNtYWluIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWFyZWE6IG1haW47XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxMDAwcHggMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICBcXFwic2lkZVNwYWNlMSB3ZWF0aGVyT3V0ZXIgc2lkZVNwYWNlMlxcXCJcXG4gIDtcXG59XFxuXFxuI3NpZGVTcGFjZTEge1xcbiAgZ3JpZC1hcmVhOiBzaWRlU3BhY2UxO1xcblxcbn1cXG5cXG4jd2VhdGhlck91dGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWFyZWE6IHdlYXRoZXJPdXRlcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gIFxcXCJpbm5lcjEgaW5uZXJNYWluIGlubmVyMlxcXCJcXG4gIDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbiNpbm5lcjEge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXJlYTogaW5uZXIxO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzZnIgMC41ZnIgM2ZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgXFxcIi4gdXBwZXJMZWZ0IC5cXFwiXFxuICBcXFwiLiBhcnJvd0xlZnQgLlxcXCJcXG4gIFxcXCIuIGxvd2VyTGVmdCAuXFxcIlxcbiAgO1xcbn1cXG5cXG4jdXBwZXJMZWZ0IHtcXG4gIGdyaWQtYXJlYTogdXBwZXJMZWZ0O1xcblxcbn1cXG5cXG4jYXJyb3dMZWZ0IHtcXG4gIGdyaWQtYXJlYTogYXJyb3dMZWZ0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgd2lkdGg6IDY1cHg7XFxufVxcblxcbiNsb3dlckxlZnQge1xcbiAgZ3JpZC1hcmVhOiBsb3dlckxlZnQ7XFxuXFxufVxcblxcbiNpbm5lck1haW4ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDRmciAwLjVmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgXFxcIm1haW5Ub3BcXFwiXFxuICBcXFwibWFpbk1pZGRsZVxcXCJcXG4gIFxcXCJtYWluQm90dG9tXFxcIlxcbiAgO1xcbiAgZ3JpZC1hcmVhOiBpbm5lck1haW47XFxufVxcblxcblxcbiNtYWluVG9wIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWFyZWE6IG1haW5Ub3A7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgM2ZyIDJmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgXFxcInVwcGVyU2VjdGlvbiB1cHBlclNlY3Rpb24gdXBwZXJTZWN0aW9uXFxcIlxcbiAgXFxcIi4gZGF0ZVNlY3Rpb24gLlxcXCJcXG4gIFxcXCJsb3dlclNlY3Rpb24gbG93ZXJTZWN0aW9uIGxvd2VyU2VjdGlvblxcXCJcXG4gIDtcXG5cXG59XFxuXFxuI3VwcGVyU2VjdGlvbiB7XFxuICBncmlkLWFyZWE6IHVwcGVyU2VjdGlvbjtcXG5cXG59XFxuXFxuI2RhdGVTZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWFyZWE6IGRhdGVTZWN0aW9uO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgM2ZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgXFxcImRhdGVTcGFjZTFcXFwiXFxuICBcXFwiZGF0ZU1haW5cXFwiXFxuICBcXFwiZGF0ZVNwYWNlMlxcXCJcXG4gIDtcXG4gIFxcbn1cXG5cXG4jZGF0ZVNwYWNlMSB7XFxuICBncmlkLWFyZWE6IGRhdGVTcGFjZTE7XFxuICBcXG59XFxuXFxuI2RhdGVNYWluIHtcXG4gIGdyaWQtYXJlYTogZGF0ZU1haW47XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogMC41cHggc29saWQgYmxhY2s7XFxuICBib3JkZXItbGVmdDogbm9uZTtcXG4gIFxcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgXFxuICBmb250LXNpemU6IDI2cHg7XFxufVxcblxcbiNkYXRlU3BhY2UyIHtcXG4gIGdyaWQtYXJlYTogZGF0ZVNwYWNlMjtcXG4gIFxcbn1cXG5cXG4jbG93ZXJTZWN0aW9uIHtcXG4gIGdyaWQtYXJlYTogbG93ZXJTZWN0aW9uO1xcblxcbn1cXG5cXG5cXG5cXG4jbWFpbk1pZGRsZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgZ3JpZC1hcmVhOiBtYWluTWlkZGxlO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNmZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmciAxZnIgMmZyIDAuNWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICBcXFwic3BhY2VyMSBzcGFjZXIxIHNwYWNlcjEgc3BhY2VyMSBzcGFjZXIxXFxcIlxcbiAgXFxcIi4gd2VhdGhlclNlY3Rpb24gLiB3ZWF0aGVyRGF0YSAuXFxcIlxcbiAgXFxcInNwYWNlcjIgc3BhY2VyMiBzcGFjZXIyIHNwYWNlcjIgc3BhY2VyMlxcXCJcXG4gIDtcXG4gIGJvcmRlcjogMC41cHggc29saWQgYmxhY2s7XFxuICBib3gtc2hhZG93OiAwcHggMnB4IDExcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbn1cXG5cXG4jc3BhY2VyMSB7XFxuICBncmlkLWFyZWE6IHNwYWNlcjE7XFxuICBcXG59XFxuXFxuI3NwYWNlcjIge1xcbiAgZ3JpZC1hcmVhOiBzcGFjZXIyO1xcblxcbn1cXG5cXG4jd2VhdGhlclNlY3Rpb24ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogM2ZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgXFxcIndlYXRoZXJVcHBlclxcXCJcXG4gIFxcXCJ3ZWF0aGVyTG93ZXJcXFwiXFxuICA7XFxuICBncmlkLWFyZWE6IHdlYXRoZXJTZWN0aW9uO1xcbiAgXFxufVxcblxcbiN3ZWF0aGVyVXBwZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgZ3JpZC1hcmVhOiB3ZWF0aGVyVXBwZXI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDJmciAwLjVmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnIgMWZyIDJmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gIFxcXCIuIC4gLiAuIC4gXFxcIlxcbiAgXFxcIi4gd2VhdGhlckljb24gLiB3ZWF0aGVyVGVtcHMgLiBcXFwiXFxuICBcXFwiLiAuIC4gLiAuIFxcXCJcXG4gIFxcXCIuIHdlYXRoZXJMb2NhdGlvbiB3ZWF0aGVyTG9jYXRpb24gd2VhdGhlckxvY2F0aW9uIC4gXFxcIlxcbiAgO1xcbn1cXG5cXG4jd2VhdGhlckljb24ge1xcbiAgZ3JpZC1hcmVhOiB3ZWF0aGVySWNvbjtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgd2lkdGg6IDE0MHB4O1xcbn1cXG5cXG4jd2VhdGhlclRlbXBzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWFyZWE6IHdlYXRoZXJUZW1wcztcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICBcXFwidGVtcFVwcGVyXFxcIlxcbiAgXFxcInRlbXBMb3dlclxcXCJcXG4gIDtcXG59XFxuXFxuI3dlYXRoZXJMb2NhdGlvbiB7XFxuICBncmlkLWFyZWE6IHdlYXRoZXJMb2NhdGlvbjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuI3RlbXBVcHBlciB7XFxuICBncmlkLWFyZWE6IHRlbXBVcHBlcjtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG4gIGZvbnQtc2l6ZTogMzZweDtcXG4gIFxcbn1cXG5cXG4jdGVtcExvd2VyIHtcXG4gIGdyaWQtYXJlYTogdGVtcExvd2VyO1xcbiAgXFxufVxcblxcblxcbiN3ZWF0aGVyTG93ZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICBcXFwiLiB0eXBlVXBwZXIgLlxcXCJcXG4gIFxcXCIuIHdlYXRoZXJUeXBlIC5cXFwiXFxuICBcXFwiLiB0eXBlTG93ZXIgLlxcXCJcXG4gIDtcXG4gIGdyaWQtYXJlYTogd2VhdGhlckxvd2VyO1xcbn1cXG5cXG4jdHlwZVVwcGVyIHtcXG4gIGdyaWQtYXJlYTogdHlwZVVwcGVyO1xcbn1cXG5cXG4jd2VhdGhlclR5cGUge1xcbiAgZ3JpZC1hcmVhOiB3ZWF0aGVyVHlwZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItbGVmdDogbm9uZTtcXG4gIGJvcmRlci1yaWdodDogbm9uZTtcXG4gIGJvcmRlci10b3A6IG5vbmU7XFxufVxcblxcbiN0eXBlTG93ZXIge1xcbiAgZ3JpZC1hcmVhOiB0eXBlTG93ZXI7XFxuXFxufVxcblxcblxcbiN3ZWF0aGVyRGF0YSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBncmlkLWFyZWE6IHdlYXRoZXJEYXRhO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciAzZnIgMC41ZnIgM2ZyIDAuNWZyIDNmciAwLjVmciAzZnIgMC41ZnI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgXFxcInNwYWNlZDFcXFwiXFxuICBcXFwiYmxvY2sxXFxcIlxcbiAgXFxcInNwYWNlZDJcXFwiXFxuICBcXFwiYmxvY2syXFxcIlxcbiAgXFxcInNwYWNlZDNcXFwiXFxuICBcXFwiYmxvY2szXFxcIlxcbiAgXFxcInNwYWNlZDRcXFwiXFxuICBcXFwiYmxvY2s0XFxcIlxcbiAgXFxcInNwYWNlZDVcXFwiXFxuICA7XFxufVxcblxcbiNzcGFjZWQxIHtcXG4gIGdyaWQtYXJlYTogc3BhY2VkMTtcXG5cXG59XFxuI2Jsb2NrMSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hcmVhOiBibG9jazE7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gIFxcXCJibG9jazFMZWZ0IGJsb2NrMVJpZ2h0XFxcIlxcbiAgO1xcbn1cXG5cXG4jYmxvY2sxTGVmdCB7XFxuICBncmlkLWFyZWE6IGJsb2NrMUxlZnQ7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gIHBhZGRpbmctcmlnaHQ6IDVweDsgICAgXFxuICB3aWR0aDogMzVweDtcXG59XFxuXFxuI2Jsb2NrMVJpZ2h0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWFyZWE6IGJsb2NrMVJpZ2h0O1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICBcXFwiYmxvY2sxVG9wXFxcIlxcbiAgXFxcImJsb2NrMUJvdHRvbVxcXCJcXG4gIDtcXG59XFxuXFxuI2Jsb2NrMVRvcCB7XFxuICBncmlkLWFyZWE6IGJsb2NrMVRvcDtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG4jYmxvY2sxQm90dG9tIHtcXG4gIGdyaWQtYXJlYTogYmxvY2sxQm90dG9tO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4jc3BhY2VkMiB7XFxuICBncmlkLWFyZWE6IHNwYWNlZDI7XFxuICBcXG59XFxuXFxuI2Jsb2NrMiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hcmVhOiBibG9jazI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gIFxcXCJibG9jazJMZWZ0IGJsb2NrMlJpZ2h0XFxcIlxcbiAgO1xcbn1cXG5cXG4jYmxvY2syTGVmdCB7XFxuICBncmlkLWFyZWE6IGJsb2NrMkxlZnQ7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gIHBhZGRpbmctcmlnaHQ6IDVweDsgIFxcbiAgd2lkdGg6IDM1cHg7XFxuXFxufVxcblxcbiNibG9jazJSaWdodCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hcmVhOiBibG9jazJSaWdodDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgXFxcImJsb2NrMlRvcFxcXCJcXG4gIFxcXCJibG9jazJCb3R0b21cXFwiXFxuICA7XFxufVxcblxcbiNibG9jazJUb3Age1xcbiAgZ3JpZC1hcmVhOiBibG9jazJUb3A7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gIGZvbnQtc2l6ZTogMTFweDtcXG59XFxuXFxuI2Jsb2NrMkJvdHRvbSB7XFxuICBncmlkLWFyZWE6IGJsb2NrMkJvdHRvbTtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuXFxuXFxuI3NwYWNlZDMge1xcbiAgZ3JpZC1hcmVhOiBzcGFjZWQzO1xcblxcbn1cXG5cXG4jYmxvY2szIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWFyZWE6IGJsb2NrMztcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgXFxcImJsb2NrM0xlZnQgYmxvY2szUmlnaHRcXFwiXFxuICA7XFxufVxcblxcbiNibG9jazNMZWZ0IHtcXG4gIGdyaWQtYXJlYTogYmxvY2szTGVmdDtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgcGFkZGluZy1yaWdodDogNXB4O1xcbiAgd2lkdGg6IDM1cHg7XFxufVxcblxcbiNibG9jazNSaWdodCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hcmVhOiBibG9jazNSaWdodDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgXFxcImJsb2NrM1RvcFxcXCJcXG4gIFxcXCJibG9jazNCb3R0b21cXFwiXFxuICA7XFxufVxcblxcbiNibG9jazNUb3Age1xcbiAgZ3JpZC1hcmVhOiBibG9jazNUb3A7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gIGZvbnQtc2l6ZTogMTFweDtcXG59XFxuXFxuI2Jsb2NrM0JvdHRvbSB7XFxuICBncmlkLWFyZWE6IGJsb2NrM0JvdHRvbTtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuXFxuI3NwYWNlZDQge1xcbiAgZ3JpZC1hcmVhOiBzcGFjZWQ0O1xcblxcbn1cXG5cXG4jYmxvY2s0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWFyZWE6IGJsb2NrNDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgXFxcImJsb2NrNExlZnQgYmxvY2s0UmlnaHRcXFwiXFxuICA7XFxufVxcblxcbiNibG9jazRMZWZ0IHtcXG4gIGdyaWQtYXJlYTogYmxvY2s0TGVmdDtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgcGFkZGluZy1yaWdodDogOHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxufVxcblxcbiNibG9jazRSaWdodCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hcmVhOiBibG9jazRSaWdodDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgXFxcImJsb2NrNFRvcFxcXCJcXG4gIFxcXCJibG9jazRCb3R0b21cXFwiXFxuICA7XFxufVxcblxcbiNibG9jazRUb3Age1xcbiAgZ3JpZC1hcmVhOiBibG9jazRUb3A7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gIGZvbnQtc2l6ZTogMTFweDtcXG59XFxuXFxuI2Jsb2NrNEJvdHRvbSB7XFxuICBncmlkLWFyZWE6IGJsb2NrNEJvdHRvbTtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuXFxuI3NwYWNlZDUge1xcbiAgZ3JpZC1hcmVhOiBzcGFjZWQ1O1xcblxcbn1cXG5cXG5cXG4jbWFpbkJvdHRvbSB7XFxuICBncmlkLWFyZWE6IG1haW5Cb3R0b207XFxufVxcblxcblxcbiNpbm5lcjIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXJlYTogaW5uZXIyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzZnIgMC41ZnIgM2ZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgXFxcIi4gdXBwZXJSaWdodCAuXFxcIlxcbiAgXFxcIi4gYXJyb3dSaWdodCAuXFxcIlxcbiAgXFxcIi4gbG93ZXJSaWdodCAuXFxcIlxcbiAgO1xcbn1cXG5cXG4jdXBwZXJSaWdodCB7XFxuICBncmlkLWFyZWE6IHVwcGVyUmlnaHQ7XFxuXFxufVxcblxcbiNhcnJvd1JpZ2h0IHtcXG4gIGdyaWQtYXJlYTogYXJyb3dSaWdodDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdpZHRoOiA2NXB4O1xcbn1cXG5cXG4jbG93ZXJSaWdodCB7XFxuICBncmlkLWFyZWE6IGxvd2VyUmlnaHQ7XFxuXFxufVxcblxcbiNzaWRlU3BhY2UyIHtcXG4gIGdyaWQtYXJlYTogc2lkZVNwYWNlMjtcXG5cXG59XFxuXFxuXFxuI3NwYWNlMiB7XFxuICBncmlkLWFyZWE6IHNwYWNlMjtcXG5cXG59XFxuXFxuI3NwYWNlRm9ybSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hcmVhOiBzcGFjZUZvcm07XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgNDUwcHggMTVweCAxMDBweCAyZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gIFxcXCJmb3JtU3BhY2UxIGZvcm1TcGFjZTIgZm9ybUlucHV0IGZvcm1TcGFjZTMgZm9ybUJ1dHRvbiBmb3JtU3BhY2U0XFxcIlxcbiAgO1xcbn1cXG5cXG4jZm9ybVNwYWNlMSB7XFxuICBncmlkLWFyZWE6IGZvcm1TcGFjZTE7XFxuXFxufVxcbiNmb3JtU3BhY2UyIHtcXG4gIGdyaWQtYXJlYTogZm9ybVNwYWNlMjtcXG5cXG59XFxuI2Zvcm1JbnB1dCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hcmVhOiBmb3JtSW5wdXQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxOGZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgXFxcIi4gaW5wdXRJbm5lciAuXFxcIlxcbiAgO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbiNpbnB1dElubmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWFyZWE6IGlucHV0SW5uZXI7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbiNpbnB1dElubmVyOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuXFxufVxcblxcbiNmb3JtQnV0dG9uIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWFyZWE6IGZvcm1CdXR0b247XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDVweCAxZnIgNXB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAnLidcXG4gICdidXR0b25UZXh0J1xcbiAgJy4nXFxuICA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LWp1c3RpZnk6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuI2J1dHRvblRleHQge1xcbiAgZ3JpZC1hcmVhOiBidXR0b25UZXh0O1xcbn1cXG5cXG4jZm9ybVNwYWNlMyB7XFxuICBncmlkLWFyZWE6IGZvcm1TcGFjZTM7XFxuXFxufVxcbiNmb3JtU3BhY2U0IHtcXG4gIGdyaWQtYXJlYTogZm9ybVNwYWNlNDtcXG5cXG59XFxuXFxuXFxuI3NwYWNlMyB7XFxuICBncmlkLWFyZWE6IHNwYWNlMztcXG59XFxuXFxuI2Zvb3RlciB7XFxuICBncmlkLWFyZWE6IGZvb3RlcjsgXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvV2VhdGhlckFwcF9UT1AvXCI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJkYXlcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cblxuXG4vLyBGQUNUT1JZIEZVTkNUSU9OOiBUT0RPIE9CSkVDVFxuLy8gU3RvcmUgbGlzdCBpdGVtcyBpbiBvYmplY3RzXG4vKiBjb25zdCBkYXkgPSAod2VhdGhlciwgbG9jYXRpb25OYW1lLCBkYXlOYW1lLCBkYXlEYXRlLCBmZWVsc0xpa2UsIGh1bWlkaXR5LCBoaWdoVGVtcCwgbG93VGVtcCwgcmFpbkNoYW5jZSwgd2luZFNwZWVkKSA9PiB7XG4gICAgbGV0IHdlYSA9IHdlYXRoZXI7XG4gICAgbGV0IGxvY04gPSBsb2NhdGlvbk5hbWU7XG4gICAgbGV0IGRheU5hID0gZGF5TmFtZTtcbiAgICBsZXQgZGF5Tm93ID0gZGF5RGF0ZTtcbiAgICBsZXQgY3VycmVudFQgPSBmZWVsc0xpa2U7XG4gICAgbGV0IGh1bSA9IGh1bWlkaXR5O1xuICAgIGxldCBoaWdoVCA9IGhpZ2hUZW1wO1xuICAgIGxldCBsb3dUID0gbG93VGVtcDtcbiAgICBsZXQgcmFpbkMgPSByYWluQ2hhbmNlO1xuICAgIGxldCB3cyA9IHdpbmRTcGVlZDtcblxuICAgIFxuXG4gICAgXG4gICAgcmV0dXJuIHt3ZWEsIGxvY04sIGRheU5hLCBkYXlOb3csIGN1cnJlbnRULCBodW0sIGhpZ2hULCBsb3dULCByYWluQywgd3N9O1xuICB9O1xuICBcblxuZXhwb3J0IHsgZGF5IH07ICovXG5cbmNsYXNzIERheSB7XG4gIGNvbnN0cnVjdG9yKHdlYXRoZXIsIGxvY2F0aW9uTmFtZSwgZGF5TmFtZSwgZGF5RGF0ZSwgZmVlbHNMaWtlLCBodW1pZGl0eSwgaGlnaFRlbXAsIGxvd1RlbXAsIHJhaW5DaGFuY2UsIHdpbmRTcGVlZCkge1xuICAgIHRoaXMud2VhdGhlciA9IHdlYXRoZXI7XG4gICAgdGhpcy5sb2NhdGlvbk5hbWUgPSBsb2NhdGlvbk5hbWU7XG4gICAgdGhpcy5kYXlOYW1lID0gZGF5TmFtZTtcbiAgICB0aGlzLmRheURhdGUgPSBkYXlEYXRlO1xuICAgIHRoaXMuZmVlbHNMaWtlID0gZmVlbHNMaWtlO1xuICAgIHRoaXMuaHVtaWRpdHkgPSBodW1pZGl0eTtcbiAgICB0aGlzLmhpZ2hUZW1wID0gaGlnaFRlbXA7XG4gICAgdGhpcy5sb3dUZW1wID0gbG93VGVtcDtcbiAgICB0aGlzLnJhaW5DaGFuY2UgPSByYWluQ2hhbmNlO1xuICAgIHRoaXMud2luZFNwZWVkID0gd2luZFNwZWVkO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERheTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=