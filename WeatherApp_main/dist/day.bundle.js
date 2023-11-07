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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF5LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHFIQUF1QztBQUNuRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGNBQWMsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssWUFBWSxjQUFjLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssTUFBTSxLQUFLLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFNBQVMsS0FBSyxNQUFNLEtBQUssYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxTQUFTLEtBQUssWUFBWSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxTQUFTLE1BQU0sTUFBTSxLQUFLLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFNBQVMsTUFBTSxNQUFNLEtBQUssYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxjQUFjLGNBQWMsV0FBVyxPQUFPLEtBQUssYUFBYSxPQUFPLEtBQUssYUFBYSxTQUFTLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFNBQVMsS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLGFBQWEsT0FBTyxLQUFLLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxRQUFRLEtBQUssYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFVBQVUsS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFFBQVEsS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxXQUFXLE9BQU8sS0FBSyxhQUFhLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxTQUFTLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxhQUFhLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsZUFBZSxLQUFLLE1BQU0sS0FBSyxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFFBQVEsS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxRQUFRLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsU0FBUyxLQUFLLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsUUFBUSxLQUFLLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFFBQVEsS0FBSyxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFFBQVEsS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssYUFBYSxRQUFRLEtBQUssWUFBWSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxTQUFTLEtBQUssTUFBTSxLQUFLLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxhQUFhLE9BQU8sS0FBSyxhQUFhLFFB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O1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjs7OztBQUlyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBLFNBQVMsT0FBTzs7QUFFaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxHQUFHLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL3NyYy9kYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vUm9ib3RvLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdXZWJGb250MSc7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG5ib2R5IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtZmFtaWx5OiAnV2ViRm9udDEnO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcblxufVxuXG4jb3V0ZXJDb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBoZWlnaHQ6IDExMHZoO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwdmggNzBweCAxZnIgMjBweCAzNXB4IDkwcHggMjB2aDtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gIFwiaGVhZGVyXCJcbiAgXCJzcGFjZTFcIlxuICBcIm1haW5cIlxuICBcInNwYWNlMlwiXG4gIFwic3BhY2VGb3JtXCJcbiAgXCJzcGFjZTNcIlxuICBcImZvb3RlclwiXG4gIDtcblxufVxuXG4jaGVhZGVyIHtcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIFxufVxuXG4jc3BhY2UxIHtcbiAgZ3JpZC1hcmVhOiBzcGFjZTE7XG59XG5cbiNtYWluIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hcmVhOiBtYWluO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxMDAwcHggMWZyO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgXCJzaWRlU3BhY2UxIHdlYXRoZXJPdXRlciBzaWRlU3BhY2UyXCJcbiAgO1xufVxuXG4jc2lkZVNwYWNlMSB7XG4gIGdyaWQtYXJlYTogc2lkZVNwYWNlMTtcblxufVxuXG4jd2VhdGhlck91dGVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hcmVhOiB3ZWF0aGVyT3V0ZXI7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICBcImlubmVyMSBpbm5lck1haW4gaW5uZXIyXCJcbiAgO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4jaW5uZXIxIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hcmVhOiBpbm5lcjE7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogM2ZyIDAuNWZyIDNmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gIFwiLiB1cHBlckxlZnQgLlwiXG4gIFwiLiBhcnJvd0xlZnQgLlwiXG4gIFwiLiBsb3dlckxlZnQgLlwiXG4gIDtcbn1cblxuI3VwcGVyTGVmdCB7XG4gIGdyaWQtYXJlYTogdXBwZXJMZWZ0O1xuXG59XG5cbiNhcnJvd0xlZnQge1xuICBncmlkLWFyZWE6IGFycm93TGVmdDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogNjVweDtcbn1cblxuI2xvd2VyTGVmdCB7XG4gIGdyaWQtYXJlYTogbG93ZXJMZWZ0O1xuXG59XG5cbiNpbm5lck1haW4ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA0ZnIgMC41ZnI7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICBcIm1haW5Ub3BcIlxuICBcIm1haW5NaWRkbGVcIlxuICBcIm1haW5Cb3R0b21cIlxuICA7XG4gIGdyaWQtYXJlYTogaW5uZXJNYWluO1xufVxuXG5cbiNtYWluVG9wIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hcmVhOiBtYWluVG9wO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAzZnIgMmZyO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgXCJ1cHBlclNlY3Rpb24gdXBwZXJTZWN0aW9uIHVwcGVyU2VjdGlvblwiXG4gIFwiLiBkYXRlU2VjdGlvbiAuXCJcbiAgXCJsb3dlclNlY3Rpb24gbG93ZXJTZWN0aW9uIGxvd2VyU2VjdGlvblwiXG4gIDtcblxufVxuXG4jdXBwZXJTZWN0aW9uIHtcbiAgZ3JpZC1hcmVhOiB1cHBlclNlY3Rpb247XG5cbn1cblxuI2RhdGVTZWN0aW9uIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hcmVhOiBkYXRlU2VjdGlvbjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgM2ZyIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gIFwiZGF0ZVNwYWNlMVwiXG4gIFwiZGF0ZU1haW5cIlxuICBcImRhdGVTcGFjZTJcIlxuICA7XG4gIFxufVxuXG4jZGF0ZVNwYWNlMSB7XG4gIGdyaWQtYXJlYTogZGF0ZVNwYWNlMTtcbiAgXG59XG5cbiNkYXRlTWFpbiB7XG4gIGdyaWQtYXJlYTogZGF0ZU1haW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMC41cHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xuICBcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICBcbiAgZm9udC1zaXplOiAyNnB4O1xufVxuXG4jZGF0ZVNwYWNlMiB7XG4gIGdyaWQtYXJlYTogZGF0ZVNwYWNlMjtcbiAgXG59XG5cbiNsb3dlclNlY3Rpb24ge1xuICBncmlkLWFyZWE6IGxvd2VyU2VjdGlvbjtcblxufVxuXG5cblxuI21haW5NaWRkbGUge1xuICBkaXNwbGF5OiBncmlkO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGdyaWQtYXJlYTogbWFpbk1pZGRsZTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNmZyIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyIDFmciAyZnIgMC41ZnI7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICBcInNwYWNlcjEgc3BhY2VyMSBzcGFjZXIxIHNwYWNlcjEgc3BhY2VyMVwiXG4gIFwiLiB3ZWF0aGVyU2VjdGlvbiAuIHdlYXRoZXJEYXRhIC5cIlxuICBcInNwYWNlcjIgc3BhY2VyMiBzcGFjZXIyIHNwYWNlcjIgc3BhY2VyMlwiXG4gIDtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCBibGFjaztcbiAgYm94LXNoYWRvdzogMHB4IDJweCAxMXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cblxuI3NwYWNlcjEge1xuICBncmlkLWFyZWE6IHNwYWNlcjE7XG4gIFxufVxuXG4jc3BhY2VyMiB7XG4gIGdyaWQtYXJlYTogc3BhY2VyMjtcblxufVxuXG4jd2VhdGhlclNlY3Rpb24ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDNmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICBcIndlYXRoZXJVcHBlclwiXG4gIFwid2VhdGhlckxvd2VyXCJcbiAgO1xuICBncmlkLWFyZWE6IHdlYXRoZXJTZWN0aW9uO1xuICBcbn1cblxuI3dlYXRoZXJVcHBlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBncmlkLWFyZWE6IHdlYXRoZXJVcHBlcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciAyZnIgMC41ZnIgMWZyO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnIgMWZyIDJmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICBcIi4gLiAuIC4gLiBcIlxuICBcIi4gd2VhdGhlckljb24gLiB3ZWF0aGVyVGVtcHMgLiBcIlxuICBcIi4gLiAuIC4gLiBcIlxuICBcIi4gd2VhdGhlckxvY2F0aW9uIHdlYXRoZXJMb2NhdGlvbiB3ZWF0aGVyTG9jYXRpb24gLiBcIlxuICA7XG59XG5cbiN3ZWF0aGVySWNvbiB7XG4gIGdyaWQtYXJlYTogd2VhdGhlckljb247XG4gIGp1c3RpZnktc2VsZjogZW5kO1xuICB3aWR0aDogMTQwcHg7XG59XG5cbiN3ZWF0aGVyVGVtcHMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWFyZWE6IHdlYXRoZXJUZW1wcztcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICBcInRlbXBVcHBlclwiXG4gIFwidGVtcExvd2VyXCJcbiAgO1xufVxuXG4jd2VhdGhlckxvY2F0aW9uIHtcbiAgZ3JpZC1hcmVhOiB3ZWF0aGVyTG9jYXRpb247XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4jdGVtcFVwcGVyIHtcbiAgZ3JpZC1hcmVhOiB0ZW1wVXBwZXI7XG4gIGFsaWduLXNlbGY6IGVuZDtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBcbn1cblxuI3RlbXBMb3dlciB7XG4gIGdyaWQtYXJlYTogdGVtcExvd2VyO1xuICBcbn1cblxuXG4jd2VhdGhlckxvd2VyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gIFwiLiB0eXBlVXBwZXIgLlwiXG4gIFwiLiB3ZWF0aGVyVHlwZSAuXCJcbiAgXCIuIHR5cGVMb3dlciAuXCJcbiAgO1xuICBncmlkLWFyZWE6IHdlYXRoZXJMb3dlcjtcbn1cblxuI3R5cGVVcHBlciB7XG4gIGdyaWQtYXJlYTogdHlwZVVwcGVyO1xufVxuXG4jd2VhdGhlclR5cGUge1xuICBncmlkLWFyZWE6IHdlYXRoZXJUeXBlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICBib3JkZXItdG9wOiBub25lO1xufVxuXG4jdHlwZUxvd2VyIHtcbiAgZ3JpZC1hcmVhOiB0eXBlTG93ZXI7XG5cbn1cblxuXG4jd2VhdGhlckRhdGEge1xuICBkaXNwbGF5OiBncmlkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZ3JpZC1hcmVhOiB3ZWF0aGVyRGF0YTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciAzZnIgMC41ZnIgM2ZyIDAuNWZyIDNmciAwLjVmciAzZnIgMC41ZnI7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgXCJzcGFjZWQxXCJcbiAgXCJibG9jazFcIlxuICBcInNwYWNlZDJcIlxuICBcImJsb2NrMlwiXG4gIFwic3BhY2VkM1wiXG4gIFwiYmxvY2szXCJcbiAgXCJzcGFjZWQ0XCJcbiAgXCJibG9jazRcIlxuICBcInNwYWNlZDVcIlxuICA7XG59XG5cbiNzcGFjZWQxIHtcbiAgZ3JpZC1hcmVhOiBzcGFjZWQxO1xuXG59XG4jYmxvY2sxIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hcmVhOiBibG9jazE7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gIFwiYmxvY2sxTGVmdCBibG9jazFSaWdodFwiXG4gIDtcbn1cblxuI2Jsb2NrMUxlZnQge1xuICBncmlkLWFyZWE6IGJsb2NrMUxlZnQ7XG4gIGp1c3RpZnktc2VsZjogZW5kO1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7ICAgIFxuICB3aWR0aDogMzVweDtcbn1cblxuI2Jsb2NrMVJpZ2h0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hcmVhOiBibG9jazFSaWdodDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgXCJibG9jazFUb3BcIlxuICBcImJsb2NrMUJvdHRvbVwiXG4gIDtcbn1cblxuI2Jsb2NrMVRvcCB7XG4gIGdyaWQtYXJlYTogYmxvY2sxVG9wO1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4jYmxvY2sxQm90dG9tIHtcbiAgZ3JpZC1hcmVhOiBibG9jazFCb3R0b207XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuI3NwYWNlZDIge1xuICBncmlkLWFyZWE6IHNwYWNlZDI7XG4gIFxufVxuXG4jYmxvY2syIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hcmVhOiBibG9jazI7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gIFwiYmxvY2syTGVmdCBibG9jazJSaWdodFwiXG4gIDtcbn1cblxuI2Jsb2NrMkxlZnQge1xuICBncmlkLWFyZWE6IGJsb2NrMkxlZnQ7XG4gIGp1c3RpZnktc2VsZjogZW5kO1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7ICBcbiAgd2lkdGg6IDM1cHg7XG5cbn1cblxuI2Jsb2NrMlJpZ2h0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hcmVhOiBibG9jazJSaWdodDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgXCJibG9jazJUb3BcIlxuICBcImJsb2NrMkJvdHRvbVwiXG4gIDtcbn1cblxuI2Jsb2NrMlRvcCB7XG4gIGdyaWQtYXJlYTogYmxvY2syVG9wO1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuXG4jYmxvY2syQm90dG9tIHtcbiAgZ3JpZC1hcmVhOiBibG9jazJCb3R0b207XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuXG5cbiNzcGFjZWQzIHtcbiAgZ3JpZC1hcmVhOiBzcGFjZWQzO1xuXG59XG5cbiNibG9jazMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWFyZWE6IGJsb2NrMztcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgXCJibG9jazNMZWZ0IGJsb2NrM1JpZ2h0XCJcbiAgO1xufVxuXG4jYmxvY2szTGVmdCB7XG4gIGdyaWQtYXJlYTogYmxvY2szTGVmdDtcbiAganVzdGlmeS1zZWxmOiBlbmQ7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgd2lkdGg6IDM1cHg7XG59XG5cbiNibG9jazNSaWdodCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXJlYTogYmxvY2szUmlnaHQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gIFwiYmxvY2szVG9wXCJcbiAgXCJibG9jazNCb3R0b21cIlxuICA7XG59XG5cbiNibG9jazNUb3Age1xuICBncmlkLWFyZWE6IGJsb2NrM1RvcDtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuI2Jsb2NrM0JvdHRvbSB7XG4gIGdyaWQtYXJlYTogYmxvY2szQm90dG9tO1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cblxuI3NwYWNlZDQge1xuICBncmlkLWFyZWE6IHNwYWNlZDQ7XG5cbn1cblxuI2Jsb2NrNCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXJlYTogYmxvY2s0O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICBcImJsb2NrNExlZnQgYmxvY2s0UmlnaHRcIlxuICA7XG59XG5cbiNibG9jazRMZWZ0IHtcbiAgZ3JpZC1hcmVhOiBibG9jazRMZWZ0O1xuICBqdXN0aWZ5LXNlbGY6IGVuZDtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xuICB3aWR0aDogMzBweDtcbn1cblxuI2Jsb2NrNFJpZ2h0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hcmVhOiBibG9jazRSaWdodDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgXCJibG9jazRUb3BcIlxuICBcImJsb2NrNEJvdHRvbVwiXG4gIDtcbn1cblxuI2Jsb2NrNFRvcCB7XG4gIGdyaWQtYXJlYTogYmxvY2s0VG9wO1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuXG4jYmxvY2s0Qm90dG9tIHtcbiAgZ3JpZC1hcmVhOiBibG9jazRCb3R0b207XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuI3NwYWNlZDUge1xuICBncmlkLWFyZWE6IHNwYWNlZDU7XG5cbn1cblxuXG4jbWFpbkJvdHRvbSB7XG4gIGdyaWQtYXJlYTogbWFpbkJvdHRvbTtcbn1cblxuXG4jaW5uZXIyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hcmVhOiBpbm5lcjI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogM2ZyIDAuNWZyIDNmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gIFwiLiB1cHBlclJpZ2h0IC5cIlxuICBcIi4gYXJyb3dSaWdodCAuXCJcbiAgXCIuIGxvd2VyUmlnaHQgLlwiXG4gIDtcbn1cblxuI3VwcGVyUmlnaHQge1xuICBncmlkLWFyZWE6IHVwcGVyUmlnaHQ7XG5cbn1cblxuI2Fycm93UmlnaHQge1xuICBncmlkLWFyZWE6IGFycm93UmlnaHQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDY1cHg7XG59XG5cbiNsb3dlclJpZ2h0IHtcbiAgZ3JpZC1hcmVhOiBsb3dlclJpZ2h0O1xuXG59XG5cbiNzaWRlU3BhY2UyIHtcbiAgZ3JpZC1hcmVhOiBzaWRlU3BhY2UyO1xuXG59XG5cblxuI3NwYWNlMiB7XG4gIGdyaWQtYXJlYTogc3BhY2UyO1xuXG59XG5cbiNzcGFjZUZvcm0ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWFyZWE6IHNwYWNlRm9ybTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDQ1MHB4IDE1cHggMTAwcHggMmZyO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgXCJmb3JtU3BhY2UxIGZvcm1TcGFjZTIgZm9ybUlucHV0IGZvcm1TcGFjZTMgZm9ybUJ1dHRvbiBmb3JtU3BhY2U0XCJcbiAgO1xufVxuXG4jZm9ybVNwYWNlMSB7XG4gIGdyaWQtYXJlYTogZm9ybVNwYWNlMTtcblxufVxuI2Zvcm1TcGFjZTIge1xuICBncmlkLWFyZWE6IGZvcm1TcGFjZTI7XG5cbn1cbiNmb3JtSW5wdXQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWFyZWE6IGZvcm1JbnB1dDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMThmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICBcIi4gaW5wdXRJbm5lciAuXCJcbiAgO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4jaW5wdXRJbm5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXJlYTogaW5wdXRJbm5lcjtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4jaW5wdXRJbm5lcjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG5cbn1cblxuI2Zvcm1CdXR0b24ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWFyZWE6IGZvcm1CdXR0b247XG4gIGdyaWQtdGVtcGxhdGUtcm93czogNXB4IDFmciA1cHg7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICAnLidcbiAgJ2J1dHRvblRleHQnXG4gICcuJ1xuICA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1qdXN0aWZ5OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4jYnV0dG9uVGV4dCB7XG4gIGdyaWQtYXJlYTogYnV0dG9uVGV4dDtcbn1cblxuI2Zvcm1TcGFjZTMge1xuICBncmlkLWFyZWE6IGZvcm1TcGFjZTM7XG5cbn1cbiNmb3JtU3BhY2U0IHtcbiAgZ3JpZC1hcmVhOiBmb3JtU3BhY2U0O1xuXG59XG5cblxuI3NwYWNlMyB7XG4gIGdyaWQtYXJlYTogc3BhY2UzO1xufVxuXG4jZm9vdGVyIHtcbiAgZ3JpZC1hcmVhOiBmb290ZXI7IFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHVCQUF1QjtFQUN2Qiw0Q0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLHVCQUF1QjtFQUN2QiwwQkFBMEI7O0FBRTVCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixxREFBcUQ7RUFDckQ7Ozs7Ozs7O0VBUUE7O0FBRUY7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsMkNBQTJDOztBQUU3Qzs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YscUNBQXFDO0VBQ3JDOztFQUVBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBcUI7O0FBRXZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixrQ0FBa0M7RUFDbEM7O0VBRUE7RUFDQSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGlDQUFpQztFQUNqQyxrQ0FBa0M7RUFDbEM7Ozs7RUFJQTtBQUNGOztBQUVBO0VBQ0Usb0JBQW9COztBQUV0Qjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0Usb0JBQW9COztBQUV0Qjs7QUFFQTtFQUNF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QUFtRDtFQUNuRDs7RUFFQTtBQUNGOztBQUVBO0VBQ0UscUJBQXFCOztBQUV2QjtBQUNBO0VBQ0UscUJBQXFCOztBQUV2QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixtQ0FBbUM7RUFDbkM7O0VBRUE7RUFDQSxrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhOztBQUVmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQiwrQkFBK0I7RUFDL0I7Ozs7RUFJQTtFQUNBLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFCQUFxQjs7QUFFdkI7QUFDQTtFQUNFLHFCQUFxQjs7QUFFdkI7OztBQUdBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHNCQUFzQjtBQUN4QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnV2ViRm9udDEnO1xcbiAgc3JjOiB1cmwoJy4vUm9ib3RvLVJlZ3VsYXIudHRmJyk7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIG1hcmdpbjogMHB4O1xcbiAgZm9udC1mYW1pbHk6ICdXZWJGb250MSc7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG5cXG59XFxuXFxuI291dGVyQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBoZWlnaHQ6IDExMHZoO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMHZoIDcwcHggMWZyIDIwcHggMzVweCA5MHB4IDIwdmg7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gIFxcXCJoZWFkZXJcXFwiXFxuICBcXFwic3BhY2UxXFxcIlxcbiAgXFxcIm1haW5cXFwiXFxuICBcXFwic3BhY2UyXFxcIlxcbiAgXFxcInNwYWNlRm9ybVxcXCJcXG4gIFxcXCJzcGFjZTNcXFwiXFxuICBcXFwiZm9vdGVyXFxcIlxcbiAgO1xcblxcbn1cXG5cXG4jaGVhZGVyIHtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIFxcbn1cXG5cXG4jc3BhY2UxIHtcXG4gIGdyaWQtYXJlYTogc3BhY2UxO1xcbn1cXG5cXG4jbWFpbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMTAwMHB4IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgXFxcInNpZGVTcGFjZTEgd2VhdGhlck91dGVyIHNpZGVTcGFjZTJcXFwiXFxuICA7XFxufVxcblxcbiNzaWRlU3BhY2UxIHtcXG4gIGdyaWQtYXJlYTogc2lkZVNwYWNlMTtcXG5cXG59XFxuXFxuI3dlYXRoZXJPdXRlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hcmVhOiB3ZWF0aGVyT3V0ZXI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICBcXFwiaW5uZXIxIGlubmVyTWFpbiBpbm5lcjJcXFwiXFxuICA7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4jaW5uZXIxIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWFyZWE6IGlubmVyMTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogM2ZyIDAuNWZyIDNmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gIFxcXCIuIHVwcGVyTGVmdCAuXFxcIlxcbiAgXFxcIi4gYXJyb3dMZWZ0IC5cXFwiXFxuICBcXFwiLiBsb3dlckxlZnQgLlxcXCJcXG4gIDtcXG59XFxuXFxuI3VwcGVyTGVmdCB7XFxuICBncmlkLWFyZWE6IHVwcGVyTGVmdDtcXG5cXG59XFxuXFxuI2Fycm93TGVmdCB7XFxuICBncmlkLWFyZWE6IGFycm93TGVmdDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdpZHRoOiA2NXB4O1xcbn1cXG5cXG4jbG93ZXJMZWZ0IHtcXG4gIGdyaWQtYXJlYTogbG93ZXJMZWZ0O1xcblxcbn1cXG5cXG4jaW5uZXJNYWluIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA0ZnIgMC41ZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gIFxcXCJtYWluVG9wXFxcIlxcbiAgXFxcIm1haW5NaWRkbGVcXFwiXFxuICBcXFwibWFpbkJvdHRvbVxcXCJcXG4gIDtcXG4gIGdyaWQtYXJlYTogaW5uZXJNYWluO1xcbn1cXG5cXG5cXG4jbWFpblRvcCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hcmVhOiBtYWluVG9wO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDNmciAyZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gIFxcXCJ1cHBlclNlY3Rpb24gdXBwZXJTZWN0aW9uIHVwcGVyU2VjdGlvblxcXCJcXG4gIFxcXCIuIGRhdGVTZWN0aW9uIC5cXFwiXFxuICBcXFwibG93ZXJTZWN0aW9uIGxvd2VyU2VjdGlvbiBsb3dlclNlY3Rpb25cXFwiXFxuICA7XFxuXFxufVxcblxcbiN1cHBlclNlY3Rpb24ge1xcbiAgZ3JpZC1hcmVhOiB1cHBlclNlY3Rpb247XFxuXFxufVxcblxcbiNkYXRlU2VjdGlvbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hcmVhOiBkYXRlU2VjdGlvbjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDNmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gIFxcXCJkYXRlU3BhY2UxXFxcIlxcbiAgXFxcImRhdGVNYWluXFxcIlxcbiAgXFxcImRhdGVTcGFjZTJcXFwiXFxuICA7XFxuICBcXG59XFxuXFxuI2RhdGVTcGFjZTEge1xcbiAgZ3JpZC1hcmVhOiBkYXRlU3BhY2UxO1xcbiAgXFxufVxcblxcbiNkYXRlTWFpbiB7XFxuICBncmlkLWFyZWE6IGRhdGVNYWluO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDAuNXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICBcXG4gIGJvcmRlci1yaWdodDogbm9uZTtcXG4gIFxcbiAgZm9udC1zaXplOiAyNnB4O1xcbn1cXG5cXG4jZGF0ZVNwYWNlMiB7XFxuICBncmlkLWFyZWE6IGRhdGVTcGFjZTI7XFxuICBcXG59XFxuXFxuI2xvd2VyU2VjdGlvbiB7XFxuICBncmlkLWFyZWE6IGxvd2VyU2VjdGlvbjtcXG5cXG59XFxuXFxuXFxuXFxuI21haW5NaWRkbGUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGdyaWQtYXJlYTogbWFpbk1pZGRsZTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDZmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnIgMWZyIDJmciAwLjVmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgXFxcInNwYWNlcjEgc3BhY2VyMSBzcGFjZXIxIHNwYWNlcjEgc3BhY2VyMVxcXCJcXG4gIFxcXCIuIHdlYXRoZXJTZWN0aW9uIC4gd2VhdGhlckRhdGEgLlxcXCJcXG4gIFxcXCJzcGFjZXIyIHNwYWNlcjIgc3BhY2VyMiBzcGFjZXIyIHNwYWNlcjJcXFwiXFxuICA7XFxuICBib3JkZXI6IDAuNXB4IHNvbGlkIGJsYWNrO1xcbiAgYm94LXNoYWRvdzogMHB4IDJweCAxMXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG59XFxuXFxuI3NwYWNlcjEge1xcbiAgZ3JpZC1hcmVhOiBzcGFjZXIxO1xcbiAgXFxufVxcblxcbiNzcGFjZXIyIHtcXG4gIGdyaWQtYXJlYTogc3BhY2VyMjtcXG5cXG59XFxuXFxuI3dlYXRoZXJTZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDNmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gIFxcXCJ3ZWF0aGVyVXBwZXJcXFwiXFxuICBcXFwid2VhdGhlckxvd2VyXFxcIlxcbiAgO1xcbiAgZ3JpZC1hcmVhOiB3ZWF0aGVyU2VjdGlvbjtcXG4gIFxcbn1cXG5cXG4jd2VhdGhlclVwcGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGdyaWQtYXJlYTogd2VhdGhlclVwcGVyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciAyZnIgMC41ZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyIDFmciAyZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICBcXFwiLiAuIC4gLiAuIFxcXCJcXG4gIFxcXCIuIHdlYXRoZXJJY29uIC4gd2VhdGhlclRlbXBzIC4gXFxcIlxcbiAgXFxcIi4gLiAuIC4gLiBcXFwiXFxuICBcXFwiLiB3ZWF0aGVyTG9jYXRpb24gd2VhdGhlckxvY2F0aW9uIHdlYXRoZXJMb2NhdGlvbiAuIFxcXCJcXG4gIDtcXG59XFxuXFxuI3dlYXRoZXJJY29uIHtcXG4gIGdyaWQtYXJlYTogd2VhdGhlckljb247XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gIHdpZHRoOiAxNDBweDtcXG59XFxuXFxuI3dlYXRoZXJUZW1wcyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hcmVhOiB3ZWF0aGVyVGVtcHM7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgXFxcInRlbXBVcHBlclxcXCJcXG4gIFxcXCJ0ZW1wTG93ZXJcXFwiXFxuICA7XFxufVxcblxcbiN3ZWF0aGVyTG9jYXRpb24ge1xcbiAgZ3JpZC1hcmVhOiB3ZWF0aGVyTG9jYXRpb247XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbiN0ZW1wVXBwZXIge1xcbiAgZ3JpZC1hcmVhOiB0ZW1wVXBwZXI7XFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxuICBmb250LXNpemU6IDM2cHg7XFxuICBcXG59XFxuXFxuI3RlbXBMb3dlciB7XFxuICBncmlkLWFyZWE6IHRlbXBMb3dlcjtcXG4gIFxcbn1cXG5cXG5cXG4jd2VhdGhlckxvd2VyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgXFxcIi4gdHlwZVVwcGVyIC5cXFwiXFxuICBcXFwiLiB3ZWF0aGVyVHlwZSAuXFxcIlxcbiAgXFxcIi4gdHlwZUxvd2VyIC5cXFwiXFxuICA7XFxuICBncmlkLWFyZWE6IHdlYXRoZXJMb3dlcjtcXG59XFxuXFxuI3R5cGVVcHBlciB7XFxuICBncmlkLWFyZWE6IHR5cGVVcHBlcjtcXG59XFxuXFxuI3dlYXRoZXJUeXBlIHtcXG4gIGdyaWQtYXJlYTogd2VhdGhlclR5cGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICBib3JkZXItdG9wOiBub25lO1xcbn1cXG5cXG4jdHlwZUxvd2VyIHtcXG4gIGdyaWQtYXJlYTogdHlwZUxvd2VyO1xcblxcbn1cXG5cXG5cXG4jd2VhdGhlckRhdGEge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgZ3JpZC1hcmVhOiB3ZWF0aGVyRGF0YTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMC41ZnIgM2ZyIDAuNWZyIDNmciAwLjVmciAzZnIgMC41ZnIgM2ZyIDAuNWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gIFxcXCJzcGFjZWQxXFxcIlxcbiAgXFxcImJsb2NrMVxcXCJcXG4gIFxcXCJzcGFjZWQyXFxcIlxcbiAgXFxcImJsb2NrMlxcXCJcXG4gIFxcXCJzcGFjZWQzXFxcIlxcbiAgXFxcImJsb2NrM1xcXCJcXG4gIFxcXCJzcGFjZWQ0XFxcIlxcbiAgXFxcImJsb2NrNFxcXCJcXG4gIFxcXCJzcGFjZWQ1XFxcIlxcbiAgO1xcbn1cXG5cXG4jc3BhY2VkMSB7XFxuICBncmlkLWFyZWE6IHNwYWNlZDE7XFxuXFxufVxcbiNibG9jazEge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXJlYTogYmxvY2sxO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICBcXFwiYmxvY2sxTGVmdCBibG9jazFSaWdodFxcXCJcXG4gIDtcXG59XFxuXFxuI2Jsb2NrMUxlZnQge1xcbiAgZ3JpZC1hcmVhOiBibG9jazFMZWZ0O1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7ICAgIFxcbiAgd2lkdGg6IDM1cHg7XFxufVxcblxcbiNibG9jazFSaWdodCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hcmVhOiBibG9jazFSaWdodDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgXFxcImJsb2NrMVRvcFxcXCJcXG4gIFxcXCJibG9jazFCb3R0b21cXFwiXFxuICA7XFxufVxcblxcbiNibG9jazFUb3Age1xcbiAgZ3JpZC1hcmVhOiBibG9jazFUb3A7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuXFxuI2Jsb2NrMUJvdHRvbSB7XFxuICBncmlkLWFyZWE6IGJsb2NrMUJvdHRvbTtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuI3NwYWNlZDIge1xcbiAgZ3JpZC1hcmVhOiBzcGFjZWQyO1xcbiAgXFxufVxcblxcbiNibG9jazIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXJlYTogYmxvY2syO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICBcXFwiYmxvY2syTGVmdCBibG9jazJSaWdodFxcXCJcXG4gIDtcXG59XFxuXFxuI2Jsb2NrMkxlZnQge1xcbiAgZ3JpZC1hcmVhOiBibG9jazJMZWZ0O1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7ICBcXG4gIHdpZHRoOiAzNXB4O1xcblxcbn1cXG5cXG4jYmxvY2syUmlnaHQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXJlYTogYmxvY2syUmlnaHQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gIFxcXCJibG9jazJUb3BcXFwiXFxuICBcXFwiYmxvY2syQm90dG9tXFxcIlxcbiAgO1xcbn1cXG5cXG4jYmxvY2syVG9wIHtcXG4gIGdyaWQtYXJlYTogYmxvY2syVG9wO1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICBmb250LXNpemU6IDExcHg7XFxufVxcblxcbiNibG9jazJCb3R0b20ge1xcbiAgZ3JpZC1hcmVhOiBibG9jazJCb3R0b207XFxuICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcblxcblxcbiNzcGFjZWQzIHtcXG4gIGdyaWQtYXJlYTogc3BhY2VkMztcXG5cXG59XFxuXFxuI2Jsb2NrMyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hcmVhOiBibG9jazM7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gIFxcXCJibG9jazNMZWZ0IGJsb2NrM1JpZ2h0XFxcIlxcbiAgO1xcbn1cXG5cXG4jYmxvY2szTGVmdCB7XFxuICBncmlkLWFyZWE6IGJsb2NrM0xlZnQ7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcXG4gIHdpZHRoOiAzNXB4O1xcbn1cXG5cXG4jYmxvY2szUmlnaHQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXJlYTogYmxvY2szUmlnaHQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gIFxcXCJibG9jazNUb3BcXFwiXFxuICBcXFwiYmxvY2szQm90dG9tXFxcIlxcbiAgO1xcbn1cXG5cXG4jYmxvY2szVG9wIHtcXG4gIGdyaWQtYXJlYTogYmxvY2szVG9wO1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICBmb250LXNpemU6IDExcHg7XFxufVxcblxcbiNibG9jazNCb3R0b20ge1xcbiAgZ3JpZC1hcmVhOiBibG9jazNCb3R0b207XFxuICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcblxcbiNzcGFjZWQ0IHtcXG4gIGdyaWQtYXJlYTogc3BhY2VkNDtcXG5cXG59XFxuXFxuI2Jsb2NrNCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hcmVhOiBibG9jazQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gIFxcXCJibG9jazRMZWZ0IGJsb2NrNFJpZ2h0XFxcIlxcbiAgO1xcbn1cXG5cXG4jYmxvY2s0TGVmdCB7XFxuICBncmlkLWFyZWE6IGJsb2NrNExlZnQ7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcXG4gIHdpZHRoOiAzMHB4O1xcbn1cXG5cXG4jYmxvY2s0UmlnaHQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXJlYTogYmxvY2s0UmlnaHQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gIFxcXCJibG9jazRUb3BcXFwiXFxuICBcXFwiYmxvY2s0Qm90dG9tXFxcIlxcbiAgO1xcbn1cXG5cXG4jYmxvY2s0VG9wIHtcXG4gIGdyaWQtYXJlYTogYmxvY2s0VG9wO1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICBmb250LXNpemU6IDExcHg7XFxufVxcblxcbiNibG9jazRCb3R0b20ge1xcbiAgZ3JpZC1hcmVhOiBibG9jazRCb3R0b207XFxuICBmb250LXNpemU6IDE1cHg7XFxufVxcblxcbiNzcGFjZWQ1IHtcXG4gIGdyaWQtYXJlYTogc3BhY2VkNTtcXG5cXG59XFxuXFxuXFxuI21haW5Cb3R0b20ge1xcbiAgZ3JpZC1hcmVhOiBtYWluQm90dG9tO1xcbn1cXG5cXG5cXG4jaW5uZXIyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWFyZWE6IGlubmVyMjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogM2ZyIDAuNWZyIDNmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gIFxcXCIuIHVwcGVyUmlnaHQgLlxcXCJcXG4gIFxcXCIuIGFycm93UmlnaHQgLlxcXCJcXG4gIFxcXCIuIGxvd2VyUmlnaHQgLlxcXCJcXG4gIDtcXG59XFxuXFxuI3VwcGVyUmlnaHQge1xcbiAgZ3JpZC1hcmVhOiB1cHBlclJpZ2h0O1xcblxcbn1cXG5cXG4jYXJyb3dSaWdodCB7XFxuICBncmlkLWFyZWE6IGFycm93UmlnaHQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB3aWR0aDogNjVweDtcXG59XFxuXFxuI2xvd2VyUmlnaHQge1xcbiAgZ3JpZC1hcmVhOiBsb3dlclJpZ2h0O1xcblxcbn1cXG5cXG4jc2lkZVNwYWNlMiB7XFxuICBncmlkLWFyZWE6IHNpZGVTcGFjZTI7XFxuXFxufVxcblxcblxcbiNzcGFjZTIge1xcbiAgZ3JpZC1hcmVhOiBzcGFjZTI7XFxuXFxufVxcblxcbiNzcGFjZUZvcm0ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXJlYTogc3BhY2VGb3JtO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDQ1MHB4IDE1cHggMTAwcHggMmZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICBcXFwiZm9ybVNwYWNlMSBmb3JtU3BhY2UyIGZvcm1JbnB1dCBmb3JtU3BhY2UzIGZvcm1CdXR0b24gZm9ybVNwYWNlNFxcXCJcXG4gIDtcXG59XFxuXFxuI2Zvcm1TcGFjZTEge1xcbiAgZ3JpZC1hcmVhOiBmb3JtU3BhY2UxO1xcblxcbn1cXG4jZm9ybVNwYWNlMiB7XFxuICBncmlkLWFyZWE6IGZvcm1TcGFjZTI7XFxuXFxufVxcbiNmb3JtSW5wdXQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXJlYTogZm9ybUlucHV0O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMThmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gIFxcXCIuIGlucHV0SW5uZXIgLlxcXCJcXG4gIDtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4jaW5wdXRJbm5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hcmVhOiBpbnB1dElubmVyO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4jaW5wdXRJbm5lcjpmb2N1cyB7XFxuICBvdXRsaW5lOiBub25lO1xcblxcbn1cXG5cXG4jZm9ybUJ1dHRvbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hcmVhOiBmb3JtQnV0dG9uO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1cHggMWZyIDVweDtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgJy4nXFxuICAnYnV0dG9uVGV4dCdcXG4gICcuJ1xcbiAgO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1qdXN0aWZ5OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbiNidXR0b25UZXh0IHtcXG4gIGdyaWQtYXJlYTogYnV0dG9uVGV4dDtcXG59XFxuXFxuI2Zvcm1TcGFjZTMge1xcbiAgZ3JpZC1hcmVhOiBmb3JtU3BhY2UzO1xcblxcbn1cXG4jZm9ybVNwYWNlNCB7XFxuICBncmlkLWFyZWE6IGZvcm1TcGFjZTQ7XFxuXFxufVxcblxcblxcbiNzcGFjZTMge1xcbiAgZ3JpZC1hcmVhOiBzcGFjZTM7XFxufVxcblxcbiNmb290ZXIge1xcbiAgZ3JpZC1hcmVhOiBmb290ZXI7IFxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJkYXlcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cblxuXG4vLyBGQUNUT1JZIEZVTkNUSU9OOiBUT0RPIE9CSkVDVFxuLy8gU3RvcmUgbGlzdCBpdGVtcyBpbiBvYmplY3RzXG4vKiBjb25zdCBkYXkgPSAod2VhdGhlciwgbG9jYXRpb25OYW1lLCBkYXlOYW1lLCBkYXlEYXRlLCBmZWVsc0xpa2UsIGh1bWlkaXR5LCBoaWdoVGVtcCwgbG93VGVtcCwgcmFpbkNoYW5jZSwgd2luZFNwZWVkKSA9PiB7XG4gICAgbGV0IHdlYSA9IHdlYXRoZXI7XG4gICAgbGV0IGxvY04gPSBsb2NhdGlvbk5hbWU7XG4gICAgbGV0IGRheU5hID0gZGF5TmFtZTtcbiAgICBsZXQgZGF5Tm93ID0gZGF5RGF0ZTtcbiAgICBsZXQgY3VycmVudFQgPSBmZWVsc0xpa2U7XG4gICAgbGV0IGh1bSA9IGh1bWlkaXR5O1xuICAgIGxldCBoaWdoVCA9IGhpZ2hUZW1wO1xuICAgIGxldCBsb3dUID0gbG93VGVtcDtcbiAgICBsZXQgcmFpbkMgPSByYWluQ2hhbmNlO1xuICAgIGxldCB3cyA9IHdpbmRTcGVlZDtcblxuICAgIFxuXG4gICAgXG4gICAgcmV0dXJuIHt3ZWEsIGxvY04sIGRheU5hLCBkYXlOb3csIGN1cnJlbnRULCBodW0sIGhpZ2hULCBsb3dULCByYWluQywgd3N9O1xuICB9O1xuICBcblxuZXhwb3J0IHsgZGF5IH07ICovXG5cbmNsYXNzIERheSB7XG4gIGNvbnN0cnVjdG9yKHdlYXRoZXIsIGxvY2F0aW9uTmFtZSwgZGF5TmFtZSwgZGF5RGF0ZSwgZmVlbHNMaWtlLCBodW1pZGl0eSwgaGlnaFRlbXAsIGxvd1RlbXAsIHJhaW5DaGFuY2UsIHdpbmRTcGVlZCkge1xuICAgIHRoaXMud2VhdGhlciA9IHdlYXRoZXI7XG4gICAgdGhpcy5sb2NhdGlvbk5hbWUgPSBsb2NhdGlvbk5hbWU7XG4gICAgdGhpcy5kYXlOYW1lID0gZGF5TmFtZTtcbiAgICB0aGlzLmRheURhdGUgPSBkYXlEYXRlO1xuICAgIHRoaXMuZmVlbHNMaWtlID0gZmVlbHNMaWtlO1xuICAgIHRoaXMuaHVtaWRpdHkgPSBodW1pZGl0eTtcbiAgICB0aGlzLmhpZ2hUZW1wID0gaGlnaFRlbXA7XG4gICAgdGhpcy5sb3dUZW1wID0gbG93VGVtcDtcbiAgICB0aGlzLnJhaW5DaGFuY2UgPSByYWluQ2hhbmNlO1xuICAgIHRoaXMud2luZFNwZWVkID0gd2luZFNwZWVkO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERheTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=