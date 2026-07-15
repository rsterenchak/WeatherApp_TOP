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
  min-height: 110vh;
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
  transition: background 400ms ease;

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
  font-size: 16px;
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
}


/* Hover treatments (moved out of index.js so they never persist as inline
   styles that would override the themed accent). */
#arrowLeft:hover,
#arrowRight:hover {
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
  border: 1px solid black;
}

#formButton:hover {
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
  filter: brightness(0.9);
}


/* Per-weather theming. adjustWeather() in indexChanges.js sets a
   weather-{...} class on #outerContainer; the class drives a vertical sky
   gradient plus a matching accent on the two underline rules (#dateMain,
   #weatherType), #footer and #formButton. The white cards stay white. */
#outerContainer.weather-neutral  { background: linear-gradient(180deg, #8fa3b0, #c3ced5); }
#outerContainer.weather-rain     { background: linear-gradient(180deg, #46606e, #8199a4); }
#outerContainer.weather-snow     { background: linear-gradient(180deg, #8fb0cc, #dce8f2); }
#outerContainer.weather-hail     { background: linear-gradient(180deg, #566573, #9aa8b5); }
#outerContainer.weather-partly   { background: linear-gradient(180deg, #5b90c4, #afd0ea); }
#outerContainer.weather-sunny    { background: linear-gradient(180deg, #4a94dd, #cdeafa); }
#outerContainer.weather-fog      { background: linear-gradient(180deg, #97a1a9, #d2d8dd); }
#outerContainer.weather-overcast { background: linear-gradient(180deg, #6b757d, #a7b0b7); }

#outerContainer.weather-neutral #footer,
#outerContainer.weather-neutral #formButton { background-color: #6b7883; }
#outerContainer.weather-neutral #dateMain,
#outerContainer.weather-neutral #weatherType { border-color: #6b7883; }

#outerContainer.weather-rain #footer,
#outerContainer.weather-rain #formButton { background-color: #3c5561; }
#outerContainer.weather-rain #dateMain,
#outerContainer.weather-rain #weatherType { border-color: #3c5561; }

#outerContainer.weather-snow #footer,
#outerContainer.weather-snow #formButton { background-color: #5f82a6; }
#outerContainer.weather-snow #dateMain,
#outerContainer.weather-snow #weatherType { border-color: #5f82a6; }

#outerContainer.weather-hail #footer,
#outerContainer.weather-hail #formButton { background-color: #495663; }
#outerContainer.weather-hail #dateMain,
#outerContainer.weather-hail #weatherType { border-color: #495663; }

#outerContainer.weather-partly #footer,
#outerContainer.weather-partly #formButton { background-color: #3f79b3; }
#outerContainer.weather-partly #dateMain,
#outerContainer.weather-partly #weatherType { border-color: #3f79b3; }

#outerContainer.weather-sunny #footer,
#outerContainer.weather-sunny #formButton { background-color: #e39a1c; }
#outerContainer.weather-sunny #dateMain,
#outerContainer.weather-sunny #weatherType { border-color: #e39a1c; }

#outerContainer.weather-fog #footer,
#outerContainer.weather-fog #formButton { background-color: #77828a; }
#outerContainer.weather-fog #dateMain,
#outerContainer.weather-fog #weatherType { border-color: #77828a; }

#outerContainer.weather-overcast #footer,
#outerContainer.weather-overcast #formButton { background-color: #5a646b; }
#outerContainer.weather-overcast #dateMain,
#outerContainer.weather-overcast #weatherType { border-color: #5a646b; }


/* Tablet: collapse #main to a single weatherOuter column and shrink the search form */
@media (max-width: 768px) {
  #main {
    grid-template-columns: 1fr;
    grid-template-areas:
    "weatherOuter"
    ;
  }

  #sideSpace1,
  #sideSpace2 {
    display: none;
  }

  #spaceForm {
    grid-template-columns: 1fr 1fr 280px 15px 100px 2fr;
  }

  /* Stack the weather graphic above the stats so #weatherData no longer
     clips inside the 2fr column. */
  #mainMiddle {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto auto;
    grid-template-areas:
    "spacer1"
    "weatherSection"
    "weatherData"
    "spacer2"
    ;
  }

  /* Lay the four stats out as a 2×2 grid. */
  #weatherData {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    grid-template-areas:
    "block1 block2"
    "block3 block4"
    ;
    gap: 8px;
    padding: 12px 0;
  }

  #spaced1,
  #spaced2,
  #spaced3,
  #spaced4,
  #spaced5 {
    display: none;
  }
}


/* Mobile: keep the arrows flanking the content (rather than stranding them
   above/below), and stack the search form into a single column. */
@media (max-width: 480px) {
  /* Narrow the arrow columns so the pair hugs the content instead of eating
     a full 1fr each. */
  #weatherOuter {
    grid-template-columns: 0.7fr 6fr 0.7fr;
  }

  /* Zero the spacer rows so each arrow centres vertically on the content. */
  #inner1,
  #inner2 {
    grid-template-rows: 0fr 1fr 0fr;
  }

  #arrowLeft,
  #arrowRight {
    width: 42px;
  }

  #spaceForm {
    grid-template-columns: 1fr;
    grid-template-areas:
    "formInput"
    "formButton"
    ;
    gap: 10px;
    padding: 0px 15px;
  }

  #formSpace1,
  #formSpace2,
  #formSpace3,
  #formSpace4 {
    display: none;
  }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: 'WebFont1';\n  src: url('./Roboto-Regular.ttf');\n}\n\nbody {\n  display: grid;\n  margin: 0px;\n  font-family: 'WebFont1';\n  grid-template-columns: 1fr;\n\n}\n\n#outerContainer {\n  display: grid;\n  min-height: 110vh;\n  grid-template-rows: 10vh 70px 1fr 20px 35px 90px 20vh;\n  grid-template-areas:\n  \"header\"\n  \"space1\"\n  \"main\"\n  \"space2\"\n  \"spaceForm\"\n  \"space3\"\n  \"footer\"\n  ;\n  transition: background 400ms ease;\n\n}\n\n#header {\n  grid-area: header;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);\n  \n}\n\n#space1 {\n  grid-area: space1;\n}\n\n#main {\n  display: grid;\n  grid-area: main;\n  grid-template-columns: 1fr 1000px 1fr;\n  grid-template-areas: \n  \"sideSpace1 weatherOuter sideSpace2\"\n  ;\n}\n\n#sideSpace1 {\n  grid-area: sideSpace1;\n\n}\n\n#weatherOuter {\n  display: grid;\n  grid-area: weatherOuter;\n  grid-template-columns: 1fr 4fr 1fr;\n  grid-template-areas: \n  \"inner1 innerMain inner2\"\n  ;\n  border-radius: 10px;\n}\n\n#inner1 {\n  display: grid;\n  grid-area: inner1;\n  grid-template-rows: 3fr 0.5fr 3fr;\n  grid-template-columns: 1fr 2fr 1fr;\n  grid-template-areas: \n  \". upperLeft .\"\n  \". arrowLeft .\"\n  \". lowerLeft .\"\n  ;\n}\n\n#upperLeft {\n  grid-area: upperLeft;\n\n}\n\n#arrowLeft {\n  grid-area: arrowLeft;\n  cursor: pointer;\n  width: 65px;\n}\n\n#lowerLeft {\n  grid-area: lowerLeft;\n\n}\n\n#innerMain {\n  display: grid;\n  grid-template-rows: 1fr 4fr 0.5fr;\n  grid-template-areas: \n  \"mainTop\"\n  \"mainMiddle\"\n  \"mainBottom\"\n  ;\n  grid-area: innerMain;\n}\n\n\n#mainTop {\n  display: grid;\n  grid-area: mainTop;\n  grid-template-columns: 1fr 2fr 1fr;\n  grid-template-rows: 1fr 3fr 2fr;\n  grid-template-areas: \n  \"upperSection upperSection upperSection\"\n  \". dateSection .\"\n  \"lowerSection lowerSection lowerSection\"\n  ;\n\n}\n\n#upperSection {\n  grid-area: upperSection;\n\n}\n\n#dateSection {\n  display: grid;\n  grid-area: dateSection;\n  grid-template-rows: 1fr 3fr 1fr;\n  grid-template-areas: \n  \"dateSpace1\"\n  \"dateMain\"\n  \"dateSpace2\"\n  ;\n  \n}\n\n#dateSpace1 {\n  grid-area: dateSpace1;\n  \n}\n\n#dateMain {\n  grid-area: dateMain;\n  text-align: center;\n  background-color: white;\n  border: 0.5px solid black;\n  border-left: none;\n  \n  border-right: none;\n  \n  font-size: 26px;\n}\n\n#dateSpace2 {\n  grid-area: dateSpace2;\n  \n}\n\n#lowerSection {\n  grid-area: lowerSection;\n\n}\n\n\n\n#mainMiddle {\n  display: grid;\n  border-radius: 8px;\n  grid-area: mainMiddle;\n  grid-template-rows: 1fr 6fr 1fr;\n  grid-template-columns: 1fr 5fr 1fr 2fr 0.5fr;\n  grid-template-areas: \n  \"spacer1 spacer1 spacer1 spacer1 spacer1\"\n  \". weatherSection . weatherData .\"\n  \"spacer2 spacer2 spacer2 spacer2 spacer2\"\n  ;\n  border: 0.5px solid black;\n  box-shadow: 0px 2px 11px rgba(0, 0, 0, 0.3);\n}\n\n#spacer1 {\n  grid-area: spacer1;\n  \n}\n\n#spacer2 {\n  grid-area: spacer2;\n\n}\n\n#weatherSection {\n  display: grid;\n  grid-template-rows: 3fr 1fr;\n  grid-template-areas: \n  \"weatherUpper\"\n  \"weatherLower\"\n  ;\n  grid-area: weatherSection;\n  \n}\n\n#weatherUpper {\n  display: grid;\n  background-color: white;\n  grid-area: weatherUpper;\n  grid-template-rows: 0.5fr 2fr 0.5fr 1fr;\n  grid-template-columns: 1fr 4fr 1fr 2fr 1fr;\n  grid-template-areas: \n  \". . . . . \"\n  \". weatherIcon . weatherTemps . \"\n  \". . . . . \"\n  \". weatherLocation weatherLocation weatherLocation . \"\n  ;\n}\n\n#weatherIcon {\n  grid-area: weatherIcon;\n  justify-self: end;\n  width: 140px;\n}\n\n#weatherTemps {\n  display: grid;\n  grid-area: weatherTemps;\n  grid-template-rows: 1fr 1fr;\n  grid-template-areas:\n  \"tempUpper\"\n  \"tempLower\"\n  ;\n}\n\n#weatherLocation {\n  grid-area: weatherLocation;\n  text-align: center;\n  font-size: 24px;\n}\n\n#tempUpper {\n  grid-area: tempUpper;\n  align-self: end;\n  font-size: 36px;\n  \n}\n\n#tempLower {\n  grid-area: tempLower;\n  \n}\n\n\n#weatherLower {\n  display: grid;\n  grid-template-columns: 1fr 5fr 1fr;\n  grid-template-rows: 1fr 2fr 1fr;\n  grid-template-areas: \n  \". typeUpper .\"\n  \". weatherType .\"\n  \". typeLower .\"\n  ;\n  grid-area: weatherLower;\n}\n\n#typeUpper {\n  grid-area: typeUpper;\n}\n\n#weatherType {\n  grid-area: weatherType;\n  background-color: white;\n  text-align: center;\n  font-size: 24px;\n  border: 1px solid black;\n  border-left: none;\n  border-right: none;\n  border-top: none;\n}\n\n#typeLower {\n  grid-area: typeLower;\n\n}\n\n\n#weatherData {\n  display: grid;\n  background-color: white;\n  grid-area: weatherData;\n  grid-template-rows: 0.5fr 3fr 0.5fr 3fr 0.5fr 3fr 0.5fr 3fr 0.5fr;\n  grid-template-columns: 1fr;\n  grid-template-areas: \n  \"spaced1\"\n  \"block1\"\n  \"spaced2\"\n  \"block2\"\n  \"spaced3\"\n  \"block3\"\n  \"spaced4\"\n  \"block4\"\n  \"spaced5\"\n  ;\n}\n\n#spaced1 {\n  grid-area: spaced1;\n\n}\n#block1 {\n  display: grid;\n  grid-area: block1;\n  grid-template-columns: 1fr 1fr;\n  grid-template-areas: \n  \"block1Left block1Right\"\n  ;\n}\n\n#block1Left {\n  grid-area: block1Left;\n  justify-self: end;\n  padding-right: 5px;    \n  width: 35px;\n}\n\n#block1Right {\n  display: grid;\n  grid-area: block1Right;\n  grid-template-rows: 1fr 2fr;\n  grid-template-areas: \n  \"block1Top\"\n  \"block1Bottom\"\n  ;\n}\n\n#block1Top {\n  grid-area: block1Top;\n  text-align: start;\n  font-size: 12px;\n}\n\n#block1Bottom {\n  grid-area: block1Bottom;\n  font-size: 20px;\n}\n\n#spaced2 {\n  grid-area: spaced2;\n  \n}\n\n#block2 {\n  display: grid;\n  grid-area: block2;\n  grid-template-columns: 1fr 1fr;\n  grid-template-areas: \n  \"block2Left block2Right\"\n  ;\n}\n\n#block2Left {\n  grid-area: block2Left;\n  justify-self: end;\n  padding-right: 5px;  \n  width: 35px;\n\n}\n\n#block2Right {\n  display: grid;\n  grid-area: block2Right;\n  grid-template-rows: 1fr 2fr;\n  grid-template-areas: \n  \"block2Top\"\n  \"block2Bottom\"\n  ;\n}\n\n#block2Top {\n  grid-area: block2Top;\n  text-align: start;\n  font-size: 11px;\n}\n\n#block2Bottom {\n  grid-area: block2Bottom;\n  font-size: 24px;\n}\n\n\n\n#spaced3 {\n  grid-area: spaced3;\n\n}\n\n#block3 {\n  display: grid;\n  grid-area: block3;\n  grid-template-columns: 1fr 1fr;\n  grid-template-areas: \n  \"block3Left block3Right\"\n  ;\n}\n\n#block3Left {\n  grid-area: block3Left;\n  justify-self: end;\n  padding-right: 5px;\n  width: 35px;\n}\n\n#block3Right {\n  display: grid;\n  grid-area: block3Right;\n  grid-template-rows: 1fr 2fr;\n  grid-template-areas: \n  \"block3Top\"\n  \"block3Bottom\"\n  ;\n}\n\n#block3Top {\n  grid-area: block3Top;\n  text-align: start;\n  font-size: 11px;\n}\n\n#block3Bottom {\n  grid-area: block3Bottom;\n  font-size: 24px;\n}\n\n\n#spaced4 {\n  grid-area: spaced4;\n\n}\n\n#block4 {\n  display: grid;\n  grid-area: block4;\n  grid-template-columns: 1fr 1fr;\n  grid-template-areas: \n  \"block4Left block4Right\"\n  ;\n}\n\n#block4Left {\n  grid-area: block4Left;\n  justify-self: end;\n  padding-right: 8px;\n  width: 30px;\n}\n\n#block4Right {\n  display: grid;\n  grid-area: block4Right;\n  grid-template-rows: 1fr 2fr;\n  grid-template-areas: \n  \"block4Top\"\n  \"block4Bottom\"\n  ;\n}\n\n#block4Top {\n  grid-area: block4Top;\n  text-align: start;\n  font-size: 11px;\n}\n\n#block4Bottom {\n  grid-area: block4Bottom;\n  font-size: 15px;\n}\n\n#spaced5 {\n  grid-area: spaced5;\n\n}\n\n\n#mainBottom {\n  grid-area: mainBottom;\n}\n\n\n#inner2 {\n  display: grid;\n  grid-area: inner2;\n  grid-template-rows: 3fr 0.5fr 3fr;\n  grid-template-columns: 1fr 2fr 1fr;\n  grid-template-areas: \n  \". upperRight .\"\n  \". arrowRight .\"\n  \". lowerRight .\"\n  ;\n}\n\n#upperRight {\n  grid-area: upperRight;\n\n}\n\n#arrowRight {\n  grid-area: arrowRight;\n  cursor: pointer;\n  width: 65px;\n}\n\n#lowerRight {\n  grid-area: lowerRight;\n\n}\n\n#sideSpace2 {\n  grid-area: sideSpace2;\n\n}\n\n\n#space2 {\n  grid-area: space2;\n\n}\n\n#spaceForm {\n  display: grid;\n  grid-area: spaceForm;\n  grid-template-columns: 1fr 1fr 450px 15px 100px 2fr;\n  grid-template-areas: \n  \"formSpace1 formSpace2 formInput formSpace3 formButton formSpace4\"\n  ;\n}\n\n#formSpace1 {\n  grid-area: formSpace1;\n\n}\n#formSpace2 {\n  grid-area: formSpace2;\n\n}\n#formInput {\n  display: grid;\n  grid-area: formInput;\n  grid-template-columns: 1fr 18fr 1fr;\n  grid-template-areas: \n  \". inputInner .\"\n  ;\n  border-radius: 6px;\n  border: 1px solid black;\n}\n\n#inputInner {\n  display: grid;\n  grid-area: inputInner;\n  border: none;\n  font-size: 16px;\n}\n\n#inputInner:focus {\n  outline: none;\n\n}\n\n#formButton {\n  display: grid;\n  grid-area: formButton;\n  grid-template-rows: 5px 1fr 5px;\n  grid-template-areas: \n  '.'\n  'buttonText'\n  '.'\n  ;\n  text-align: center;\n  text-justify: center;\n  background-color: #ccc;\n  cursor: pointer;\n  border-radius: 6px;\n  font-size: 16px;\n  border: 1px solid black;\n}\n\n#buttonText {\n  grid-area: buttonText;\n}\n\n#formSpace3 {\n  grid-area: formSpace3;\n\n}\n#formSpace4 {\n  grid-area: formSpace4;\n\n}\n\n\n#space3 {\n  grid-area: space3;\n}\n\n#footer {\n  grid-area: footer;\n  background-color: #ccc;\n}\n\n\n/* Hover treatments (moved out of index.js so they never persist as inline\n   styles that would override the themed accent). */\n#arrowLeft:hover,\n#arrowRight:hover {\n  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);\n  border: 1px solid black;\n}\n\n#formButton:hover {\n  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);\n  filter: brightness(0.9);\n}\n\n\n/* Per-weather theming. adjustWeather() in indexChanges.js sets a\n   weather-{...} class on #outerContainer; the class drives a vertical sky\n   gradient plus a matching accent on the two underline rules (#dateMain,\n   #weatherType), #footer and #formButton. The white cards stay white. */\n#outerContainer.weather-neutral  { background: linear-gradient(180deg, #8fa3b0, #c3ced5); }\n#outerContainer.weather-rain     { background: linear-gradient(180deg, #46606e, #8199a4); }\n#outerContainer.weather-snow     { background: linear-gradient(180deg, #8fb0cc, #dce8f2); }\n#outerContainer.weather-hail     { background: linear-gradient(180deg, #566573, #9aa8b5); }\n#outerContainer.weather-partly   { background: linear-gradient(180deg, #5b90c4, #afd0ea); }\n#outerContainer.weather-sunny    { background: linear-gradient(180deg, #4a94dd, #cdeafa); }\n#outerContainer.weather-fog      { background: linear-gradient(180deg, #97a1a9, #d2d8dd); }\n#outerContainer.weather-overcast { background: linear-gradient(180deg, #6b757d, #a7b0b7); }\n\n#outerContainer.weather-neutral #footer,\n#outerContainer.weather-neutral #formButton { background-color: #6b7883; }\n#outerContainer.weather-neutral #dateMain,\n#outerContainer.weather-neutral #weatherType { border-color: #6b7883; }\n\n#outerContainer.weather-rain #footer,\n#outerContainer.weather-rain #formButton { background-color: #3c5561; }\n#outerContainer.weather-rain #dateMain,\n#outerContainer.weather-rain #weatherType { border-color: #3c5561; }\n\n#outerContainer.weather-snow #footer,\n#outerContainer.weather-snow #formButton { background-color: #5f82a6; }\n#outerContainer.weather-snow #dateMain,\n#outerContainer.weather-snow #weatherType { border-color: #5f82a6; }\n\n#outerContainer.weather-hail #footer,\n#outerContainer.weather-hail #formButton { background-color: #495663; }\n#outerContainer.weather-hail #dateMain,\n#outerContainer.weather-hail #weatherType { border-color: #495663; }\n\n#outerContainer.weather-partly #footer,\n#outerContainer.weather-partly #formButton { background-color: #3f79b3; }\n#outerContainer.weather-partly #dateMain,\n#outerContainer.weather-partly #weatherType { border-color: #3f79b3; }\n\n#outerContainer.weather-sunny #footer,\n#outerContainer.weather-sunny #formButton { background-color: #e39a1c; }\n#outerContainer.weather-sunny #dateMain,\n#outerContainer.weather-sunny #weatherType { border-color: #e39a1c; }\n\n#outerContainer.weather-fog #footer,\n#outerContainer.weather-fog #formButton { background-color: #77828a; }\n#outerContainer.weather-fog #dateMain,\n#outerContainer.weather-fog #weatherType { border-color: #77828a; }\n\n#outerContainer.weather-overcast #footer,\n#outerContainer.weather-overcast #formButton { background-color: #5a646b; }\n#outerContainer.weather-overcast #dateMain,\n#outerContainer.weather-overcast #weatherType { border-color: #5a646b; }\n\n\n/* Tablet: collapse #main to a single weatherOuter column and shrink the search form */\n@media (max-width: 768px) {\n  #main {\n    grid-template-columns: 1fr;\n    grid-template-areas:\n    \"weatherOuter\"\n    ;\n  }\n\n  #sideSpace1,\n  #sideSpace2 {\n    display: none;\n  }\n\n  #spaceForm {\n    grid-template-columns: 1fr 1fr 280px 15px 100px 2fr;\n  }\n\n  /* Stack the weather graphic above the stats so #weatherData no longer\n     clips inside the 2fr column. */\n  #mainMiddle {\n    grid-template-columns: 1fr;\n    grid-template-rows: auto auto auto auto;\n    grid-template-areas:\n    \"spacer1\"\n    \"weatherSection\"\n    \"weatherData\"\n    \"spacer2\"\n    ;\n  }\n\n  /* Lay the four stats out as a 2×2 grid. */\n  #weatherData {\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: auto auto;\n    grid-template-areas:\n    \"block1 block2\"\n    \"block3 block4\"\n    ;\n    gap: 8px;\n    padding: 12px 0;\n  }\n\n  #spaced1,\n  #spaced2,\n  #spaced3,\n  #spaced4,\n  #spaced5 {\n    display: none;\n  }\n}\n\n\n/* Mobile: keep the arrows flanking the content (rather than stranding them\n   above/below), and stack the search form into a single column. */\n@media (max-width: 480px) {\n  /* Narrow the arrow columns so the pair hugs the content instead of eating\n     a full 1fr each. */\n  #weatherOuter {\n    grid-template-columns: 0.7fr 6fr 0.7fr;\n  }\n\n  /* Zero the spacer rows so each arrow centres vertically on the content. */\n  #inner1,\n  #inner2 {\n    grid-template-rows: 0fr 1fr 0fr;\n  }\n\n  #arrowLeft,\n  #arrowRight {\n    width: 42px;\n  }\n\n  #spaceForm {\n    grid-template-columns: 1fr;\n    grid-template-areas:\n    \"formInput\"\n    \"formButton\"\n    ;\n    gap: 10px;\n    padding: 0px 15px;\n  }\n\n  #formSpace1,\n  #formSpace2,\n  #formSpace3,\n  #formSpace4 {\n    display: none;\n  }\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF5LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHFIQUF1QztBQUNuRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxZQUFZLEtBQUssMEJBQTBCO0FBQzNDO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkMsbUNBQW1DO0FBQ25DLG1DQUFtQztBQUNuQyxtQ0FBbUM7QUFDbkMsbUNBQW1DO0FBQ25DLG1DQUFtQztBQUNuQyxtQ0FBbUM7QUFDbkMsbUNBQW1DOztBQUVuQztBQUNBLDhDQUE4QztBQUM5QztBQUNBLCtDQUErQzs7QUFFL0M7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQSw0Q0FBNEM7O0FBRTVDO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0EsNENBQTRDOztBQUU1QztBQUNBLDJDQUEyQztBQUMzQztBQUNBLDRDQUE0Qzs7QUFFNUM7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQSw4Q0FBOEM7O0FBRTlDO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsNkNBQTZDOztBQUU3QztBQUNBLDBDQUEwQztBQUMxQztBQUNBLDJDQUEyQzs7QUFFM0M7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQSxnREFBZ0Q7OztBQUdoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxjQUFjLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLEtBQUssYUFBYSxPQUFPLEtBQUssWUFBWSxjQUFjLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssTUFBTSxLQUFLLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFNBQVMsS0FBSyxNQUFNLEtBQUssYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxTQUFTLEtBQUssWUFBWSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxTQUFTLE1BQU0sTUFBTSxLQUFLLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFNBQVMsTUFBTSxNQUFNLEtBQUssYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxjQUFjLGNBQWMsV0FBVyxPQUFPLEtBQUssYUFBYSxPQUFPLEtBQUssYUFBYSxTQUFTLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFNBQVMsS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLGFBQWEsT0FBTyxLQUFLLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxRQUFRLEtBQUssYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFVBQVUsS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFFBQVEsS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxXQUFXLE9BQU8sS0FBSyxhQUFhLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxTQUFTLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxhQUFhLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsZUFBZSxLQUFLLE1BQU0sS0FBSyxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFFBQVEsS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxRQUFRLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsU0FBUyxLQUFLLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsUUFBUSxLQUFLLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFFBQVEsS0FBSyxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFFBQVEsS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssYUFBYSxRQUFRLEtBQUssWUFBWSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxTQUFTLEtBQUssTUFBTSxLQUFLLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxhQUFhLE9BQU8sS0FBSyxhQUFhLFFBQVEsS0FBSyxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssTUFBTSxLQUFLLGFBQWEsTUFBTSxLQUFLLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFNBQVMsS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxhQUFhLE1BQU0sS0FBSyxhQUFhLFFBQVEsS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsUUFBUSxLQUFLLE9BQU8sT0FBTyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxRQUFRLE9BQU8sT0FBTyx5QkFBeUIseUJBQXlCLHlCQUF5Qix5QkFBeUIseUJBQXlCLHlCQUF5Qix5QkFBeUIsMEJBQTBCLE1BQU0sbUJBQW1CLE1BQU0sb0JBQW9CLE1BQU0sbUJBQW1CLE1BQU0sb0JBQW9CLE1BQU0sbUJBQW1CLE1BQU0sb0JBQW9CLE1BQU0sbUJBQW1CLE1BQU0sb0JBQW9CLE1BQU0sbUJBQW1CLE1BQU0sb0JBQW9CLE1BQU0sbUJBQW1CLE1BQU0sb0JBQW9CLE1BQU0sbUJBQW1CLE1BQU0sb0JBQW9CLE1BQU0sbUJBQW1CLE1BQU0scUJBQXFCLGFBQWEsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLE1BQU0sTUFBTSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxhQUFhLFVBQVUsS0FBSyxNQUFNLFlBQVksTUFBTSxZQUFZLGFBQWEsUUFBUSxLQUFLLFVBQVUsVUFBVSxPQUFPLFNBQVMsVUFBVSxLQUFLLE9BQU8sS0FBSyxPQUFPLE1BQU0sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLFlBQVksT0FBTyxZQUFZLE9BQU8sTUFBTSxVQUFVLE1BQU0sS0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsR0FBRyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vLi9zcmMvZGF5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL1JvYm90by1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnV2ViRm9udDEnO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuYm9keSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LWZhbWlseTogJ1dlYkZvbnQxJztcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG5cbn1cblxuI291dGVyQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgbWluLWhlaWdodDogMTEwdmg7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTB2aCA3MHB4IDFmciAyMHB4IDM1cHggOTBweCAyMHZoO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICBcImhlYWRlclwiXG4gIFwic3BhY2UxXCJcbiAgXCJtYWluXCJcbiAgXCJzcGFjZTJcIlxuICBcInNwYWNlRm9ybVwiXG4gIFwic3BhY2UzXCJcbiAgXCJmb290ZXJcIlxuICA7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgNDAwbXMgZWFzZTtcblxufVxuXG4jaGVhZGVyIHtcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIFxufVxuXG4jc3BhY2UxIHtcbiAgZ3JpZC1hcmVhOiBzcGFjZTE7XG59XG5cbiNtYWluIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hcmVhOiBtYWluO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxMDAwcHggMWZyO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgXCJzaWRlU3BhY2UxIHdlYXRoZXJPdXRlciBzaWRlU3BhY2UyXCJcbiAgO1xufVxuXG4jc2lkZVNwYWNlMSB7XG4gIGdyaWQtYXJlYTogc2lkZVNwYWNlMTtcblxufVxuXG4jd2VhdGhlck91dGVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hcmVhOiB3ZWF0aGVyT3V0ZXI7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICBcImlubmVyMSBpbm5lck1haW4gaW5uZXIyXCJcbiAgO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4jaW5uZXIxIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hcmVhOiBpbm5lcjE7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogM2ZyIDAuNWZyIDNmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gIFwiLiB1cHBlckxlZnQgLlwiXG4gIFwiLiBhcnJvd0xlZnQgLlwiXG4gIFwiLiBsb3dlckxlZnQgLlwiXG4gIDtcbn1cblxuI3VwcGVyTGVmdCB7XG4gIGdyaWQtYXJlYTogdXBwZXJMZWZ0O1xuXG59XG5cbiNhcnJvd0xlZnQge1xuICBncmlkLWFyZWE6IGFycm93TGVmdDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogNjVweDtcbn1cblxuI2xvd2VyTGVmdCB7XG4gIGdyaWQtYXJlYTogbG93ZXJMZWZ0O1xuXG59XG5cbiNpbm5lck1haW4ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA0ZnIgMC41ZnI7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICBcIm1haW5Ub3BcIlxuICBcIm1haW5NaWRkbGVcIlxuICBcIm1haW5Cb3R0b21cIlxuICA7XG4gIGdyaWQtYXJlYTogaW5uZXJNYWluO1xufVxuXG5cbiNtYWluVG9wIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hcmVhOiBtYWluVG9wO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAzZnIgMmZyO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgXCJ1cHBlclNlY3Rpb24gdXBwZXJTZWN0aW9uIHVwcGVyU2VjdGlvblwiXG4gIFwiLiBkYXRlU2VjdGlvbiAuXCJcbiAgXCJsb3dlclNlY3Rpb24gbG93ZXJTZWN0aW9uIGxvd2VyU2VjdGlvblwiXG4gIDtcblxufVxuXG4jdXBwZXJTZWN0aW9uIHtcbiAgZ3JpZC1hcmVhOiB1cHBlclNlY3Rpb247XG5cbn1cblxuI2RhdGVTZWN0aW9uIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hcmVhOiBkYXRlU2VjdGlvbjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgM2ZyIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gIFwiZGF0ZVNwYWNlMVwiXG4gIFwiZGF0ZU1haW5cIlxuICBcImRhdGVTcGFjZTJcIlxuICA7XG4gIFxufVxuXG4jZGF0ZVNwYWNlMSB7XG4gIGdyaWQtYXJlYTogZGF0ZVNwYWNlMTtcbiAgXG59XG5cbiNkYXRlTWFpbiB7XG4gIGdyaWQtYXJlYTogZGF0ZU1haW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMC41cHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xuICBcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICBcbiAgZm9udC1zaXplOiAyNnB4O1xufVxuXG4jZGF0ZVNwYWNlMiB7XG4gIGdyaWQtYXJlYTogZGF0ZVNwYWNlMjtcbiAgXG59XG5cbiNsb3dlclNlY3Rpb24ge1xuICBncmlkLWFyZWE6IGxvd2VyU2VjdGlvbjtcblxufVxuXG5cblxuI21haW5NaWRkbGUge1xuICBkaXNwbGF5OiBncmlkO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGdyaWQtYXJlYTogbWFpbk1pZGRsZTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNmZyIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyIDFmciAyZnIgMC41ZnI7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICBcInNwYWNlcjEgc3BhY2VyMSBzcGFjZXIxIHNwYWNlcjEgc3BhY2VyMVwiXG4gIFwiLiB3ZWF0aGVyU2VjdGlvbiAuIHdlYXRoZXJEYXRhIC5cIlxuICBcInNwYWNlcjIgc3BhY2VyMiBzcGFjZXIyIHNwYWNlcjIgc3BhY2VyMlwiXG4gIDtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCBibGFjaztcbiAgYm94LXNoYWRvdzogMHB4IDJweCAxMXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cblxuI3NwYWNlcjEge1xuICBncmlkLWFyZWE6IHNwYWNlcjE7XG4gIFxufVxuXG4jc3BhY2VyMiB7XG4gIGdyaWQtYXJlYTogc3BhY2VyMjtcblxufVxuXG4jd2VhdGhlclNlY3Rpb24ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDNmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICBcIndlYXRoZXJVcHBlclwiXG4gIFwid2VhdGhlckxvd2VyXCJcbiAgO1xuICBncmlkLWFyZWE6IHdlYXRoZXJTZWN0aW9uO1xuICBcbn1cblxuI3dlYXRoZXJVcHBlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBncmlkLWFyZWE6IHdlYXRoZXJVcHBlcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciAyZnIgMC41ZnIgMWZyO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnIgMWZyIDJmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICBcIi4gLiAuIC4gLiBcIlxuICBcIi4gd2VhdGhlckljb24gLiB3ZWF0aGVyVGVtcHMgLiBcIlxuICBcIi4gLiAuIC4gLiBcIlxuICBcIi4gd2VhdGhlckxvY2F0aW9uIHdlYXRoZXJMb2NhdGlvbiB3ZWF0aGVyTG9jYXRpb24gLiBcIlxuICA7XG59XG5cbiN3ZWF0aGVySWNvbiB7XG4gIGdyaWQtYXJlYTogd2VhdGhlckljb247XG4gIGp1c3RpZnktc2VsZjogZW5kO1xuICB3aWR0aDogMTQwcHg7XG59XG5cbiN3ZWF0aGVyVGVtcHMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWFyZWE6IHdlYXRoZXJUZW1wcztcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICBcInRlbXBVcHBlclwiXG4gIFwidGVtcExvd2VyXCJcbiAgO1xufVxuXG4jd2VhdGhlckxvY2F0aW9uIHtcbiAgZ3JpZC1hcmVhOiB3ZWF0aGVyTG9jYXRpb247XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4jdGVtcFVwcGVyIHtcbiAgZ3JpZC1hcmVhOiB0ZW1wVXBwZXI7XG4gIGFsaWduLXNlbGY6IGVuZDtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBcbn1cblxuI3RlbXBMb3dlciB7XG4gIGdyaWQtYXJlYTogdGVtcExvd2VyO1xuICBcbn1cblxuXG4jd2VhdGhlckxvd2VyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gIFwiLiB0eXBlVXBwZXIgLlwiXG4gIFwiLiB3ZWF0aGVyVHlwZSAuXCJcbiAgXCIuIHR5cGVMb3dlciAuXCJcbiAgO1xuICBncmlkLWFyZWE6IHdlYXRoZXJMb3dlcjtcbn1cblxuI3R5cGVVcHBlciB7XG4gIGdyaWQtYXJlYTogdHlwZVVwcGVyO1xufVxuXG4jd2VhdGhlclR5cGUge1xuICBncmlkLWFyZWE6IHdlYXRoZXJUeXBlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICBib3JkZXItdG9wOiBub25lO1xufVxuXG4jdHlwZUxvd2VyIHtcbiAgZ3JpZC1hcmVhOiB0eXBlTG93ZXI7XG5cbn1cblxuXG4jd2VhdGhlckRhdGEge1xuICBkaXNwbGF5OiBncmlkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZ3JpZC1hcmVhOiB3ZWF0aGVyRGF0YTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciAzZnIgMC41ZnIgM2ZyIDAuNWZyIDNmciAwLjVmciAzZnIgMC41ZnI7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgXCJzcGFjZWQxXCJcbiAgXCJibG9jazFcIlxuICBcInNwYWNlZDJcIlxuICBcImJsb2NrMlwiXG4gIFwic3BhY2VkM1wiXG4gIFwiYmxvY2szXCJcbiAgXCJzcGFjZWQ0XCJcbiAgXCJibG9jazRcIlxuICBcInNwYWNlZDVcIlxuICA7XG59XG5cbiNzcGFjZWQxIHtcbiAgZ3JpZC1hcmVhOiBzcGFjZWQxO1xuXG59XG4jYmxvY2sxIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hcmVhOiBibG9jazE7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gIFwiYmxvY2sxTGVmdCBibG9jazFSaWdodFwiXG4gIDtcbn1cblxuI2Jsb2NrMUxlZnQge1xuICBncmlkLWFyZWE6IGJsb2NrMUxlZnQ7XG4gIGp1c3RpZnktc2VsZjogZW5kO1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7ICAgIFxuICB3aWR0aDogMzVweDtcbn1cblxuI2Jsb2NrMVJpZ2h0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hcmVhOiBibG9jazFSaWdodDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgXCJibG9jazFUb3BcIlxuICBcImJsb2NrMUJvdHRvbVwiXG4gIDtcbn1cblxuI2Jsb2NrMVRvcCB7XG4gIGdyaWQtYXJlYTogYmxvY2sxVG9wO1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4jYmxvY2sxQm90dG9tIHtcbiAgZ3JpZC1hcmVhOiBibG9jazFCb3R0b207XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuI3NwYWNlZDIge1xuICBncmlkLWFyZWE6IHNwYWNlZDI7XG4gIFxufVxuXG4jYmxvY2syIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hcmVhOiBibG9jazI7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gIFwiYmxvY2syTGVmdCBibG9jazJSaWdodFwiXG4gIDtcbn1cblxuI2Jsb2NrMkxlZnQge1xuICBncmlkLWFyZWE6IGJsb2NrMkxlZnQ7XG4gIGp1c3RpZnktc2VsZjogZW5kO1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7ICBcbiAgd2lkdGg6IDM1cHg7XG5cbn1cblxuI2Jsb2NrMlJpZ2h0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hcmVhOiBibG9jazJSaWdodDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgXCJibG9jazJUb3BcIlxuICBcImJsb2NrMkJvdHRvbVwiXG4gIDtcbn1cblxuI2Jsb2NrMlRvcCB7XG4gIGdyaWQtYXJlYTogYmxvY2syVG9wO1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuXG4jYmxvY2syQm90dG9tIHtcbiAgZ3JpZC1hcmVhOiBibG9jazJCb3R0b207XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuXG5cbiNzcGFjZWQzIHtcbiAgZ3JpZC1hcmVhOiBzcGFjZWQzO1xuXG59XG5cbiNibG9jazMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWFyZWE6IGJsb2NrMztcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgXCJibG9jazNMZWZ0IGJsb2NrM1JpZ2h0XCJcbiAgO1xufVxuXG4jYmxvY2szTGVmdCB7XG4gIGdyaWQtYXJlYTogYmxvY2szTGVmdDtcbiAganVzdGlmeS1zZWxmOiBlbmQ7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgd2lkdGg6IDM1cHg7XG59XG5cbiNibG9jazNSaWdodCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXJlYTogYmxvY2szUmlnaHQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gIFwiYmxvY2szVG9wXCJcbiAgXCJibG9jazNCb3R0b21cIlxuICA7XG59XG5cbiNibG9jazNUb3Age1xuICBncmlkLWFyZWE6IGJsb2NrM1RvcDtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuI2Jsb2NrM0JvdHRvbSB7XG4gIGdyaWQtYXJlYTogYmxvY2szQm90dG9tO1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cblxuI3NwYWNlZDQge1xuICBncmlkLWFyZWE6IHNwYWNlZDQ7XG5cbn1cblxuI2Jsb2NrNCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXJlYTogYmxvY2s0O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICBcImJsb2NrNExlZnQgYmxvY2s0UmlnaHRcIlxuICA7XG59XG5cbiNibG9jazRMZWZ0IHtcbiAgZ3JpZC1hcmVhOiBibG9jazRMZWZ0O1xuICBqdXN0aWZ5LXNlbGY6IGVuZDtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xuICB3aWR0aDogMzBweDtcbn1cblxuI2Jsb2NrNFJpZ2h0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hcmVhOiBibG9jazRSaWdodDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgXCJibG9jazRUb3BcIlxuICBcImJsb2NrNEJvdHRvbVwiXG4gIDtcbn1cblxuI2Jsb2NrNFRvcCB7XG4gIGdyaWQtYXJlYTogYmxvY2s0VG9wO1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuXG4jYmxvY2s0Qm90dG9tIHtcbiAgZ3JpZC1hcmVhOiBibG9jazRCb3R0b207XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuI3NwYWNlZDUge1xuICBncmlkLWFyZWE6IHNwYWNlZDU7XG5cbn1cblxuXG4jbWFpbkJvdHRvbSB7XG4gIGdyaWQtYXJlYTogbWFpbkJvdHRvbTtcbn1cblxuXG4jaW5uZXIyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hcmVhOiBpbm5lcjI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogM2ZyIDAuNWZyIDNmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gIFwiLiB1cHBlclJpZ2h0IC5cIlxuICBcIi4gYXJyb3dSaWdodCAuXCJcbiAgXCIuIGxvd2VyUmlnaHQgLlwiXG4gIDtcbn1cblxuI3VwcGVyUmlnaHQge1xuICBncmlkLWFyZWE6IHVwcGVyUmlnaHQ7XG5cbn1cblxuI2Fycm93UmlnaHQge1xuICBncmlkLWFyZWE6IGFycm93UmlnaHQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDY1cHg7XG59XG5cbiNsb3dlclJpZ2h0IHtcbiAgZ3JpZC1hcmVhOiBsb3dlclJpZ2h0O1xuXG59XG5cbiNzaWRlU3BhY2UyIHtcbiAgZ3JpZC1hcmVhOiBzaWRlU3BhY2UyO1xuXG59XG5cblxuI3NwYWNlMiB7XG4gIGdyaWQtYXJlYTogc3BhY2UyO1xuXG59XG5cbiNzcGFjZUZvcm0ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWFyZWE6IHNwYWNlRm9ybTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDQ1MHB4IDE1cHggMTAwcHggMmZyO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgXCJmb3JtU3BhY2UxIGZvcm1TcGFjZTIgZm9ybUlucHV0IGZvcm1TcGFjZTMgZm9ybUJ1dHRvbiBmb3JtU3BhY2U0XCJcbiAgO1xufVxuXG4jZm9ybVNwYWNlMSB7XG4gIGdyaWQtYXJlYTogZm9ybVNwYWNlMTtcblxufVxuI2Zvcm1TcGFjZTIge1xuICBncmlkLWFyZWE6IGZvcm1TcGFjZTI7XG5cbn1cbiNmb3JtSW5wdXQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWFyZWE6IGZvcm1JbnB1dDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMThmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICBcIi4gaW5wdXRJbm5lciAuXCJcbiAgO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4jaW5wdXRJbm5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXJlYTogaW5wdXRJbm5lcjtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbiNpbnB1dElubmVyOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcblxufVxuXG4jZm9ybUJ1dHRvbiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXJlYTogZm9ybUJ1dHRvbjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1cHggMWZyIDVweDtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gICcuJ1xuICAnYnV0dG9uVGV4dCdcbiAgJy4nXG4gIDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LWp1c3RpZnk6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbiNidXR0b25UZXh0IHtcbiAgZ3JpZC1hcmVhOiBidXR0b25UZXh0O1xufVxuXG4jZm9ybVNwYWNlMyB7XG4gIGdyaWQtYXJlYTogZm9ybVNwYWNlMztcblxufVxuI2Zvcm1TcGFjZTQge1xuICBncmlkLWFyZWE6IGZvcm1TcGFjZTQ7XG5cbn1cblxuXG4jc3BhY2UzIHtcbiAgZ3JpZC1hcmVhOiBzcGFjZTM7XG59XG5cbiNmb290ZXIge1xuICBncmlkLWFyZWE6IGZvb3RlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbn1cblxuXG4vKiBIb3ZlciB0cmVhdG1lbnRzIChtb3ZlZCBvdXQgb2YgaW5kZXguanMgc28gdGhleSBuZXZlciBwZXJzaXN0IGFzIGlubGluZVxuICAgc3R5bGVzIHRoYXQgd291bGQgb3ZlcnJpZGUgdGhlIHRoZW1lZCBhY2NlbnQpLiAqL1xuI2Fycm93TGVmdDpob3ZlcixcbiNhcnJvd1JpZ2h0OmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCA2cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbiNmb3JtQnV0dG9uOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCA2cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOSk7XG59XG5cblxuLyogUGVyLXdlYXRoZXIgdGhlbWluZy4gYWRqdXN0V2VhdGhlcigpIGluIGluZGV4Q2hhbmdlcy5qcyBzZXRzIGFcbiAgIHdlYXRoZXItey4uLn0gY2xhc3Mgb24gI291dGVyQ29udGFpbmVyOyB0aGUgY2xhc3MgZHJpdmVzIGEgdmVydGljYWwgc2t5XG4gICBncmFkaWVudCBwbHVzIGEgbWF0Y2hpbmcgYWNjZW50IG9uIHRoZSB0d28gdW5kZXJsaW5lIHJ1bGVzICgjZGF0ZU1haW4sXG4gICAjd2VhdGhlclR5cGUpLCAjZm9vdGVyIGFuZCAjZm9ybUJ1dHRvbi4gVGhlIHdoaXRlIGNhcmRzIHN0YXkgd2hpdGUuICovXG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1uZXV0cmFsICB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICM4ZmEzYjAsICNjM2NlZDUpOyB9XG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1yYWluICAgICB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICM0NjYwNmUsICM4MTk5YTQpOyB9XG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1zbm93ICAgICB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICM4ZmIwY2MsICNkY2U4ZjIpOyB9XG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1oYWlsICAgICB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICM1NjY1NzMsICM5YWE4YjUpOyB9XG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1wYXJ0bHkgICB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICM1YjkwYzQsICNhZmQwZWEpOyB9XG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1zdW5ueSAgICB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICM0YTk0ZGQsICNjZGVhZmEpOyB9XG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1mb2cgICAgICB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICM5N2ExYTksICNkMmQ4ZGQpOyB9XG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1vdmVyY2FzdCB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICM2Yjc1N2QsICNhN2IwYjcpOyB9XG5cbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLW5ldXRyYWwgI2Zvb3RlcixcbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLW5ldXRyYWwgI2Zvcm1CdXR0b24geyBiYWNrZ3JvdW5kLWNvbG9yOiAjNmI3ODgzOyB9XG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1uZXV0cmFsICNkYXRlTWFpbixcbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLW5ldXRyYWwgI3dlYXRoZXJUeXBlIHsgYm9yZGVyLWNvbG9yOiAjNmI3ODgzOyB9XG5cbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLXJhaW4gI2Zvb3RlcixcbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLXJhaW4gI2Zvcm1CdXR0b24geyBiYWNrZ3JvdW5kLWNvbG9yOiAjM2M1NTYxOyB9XG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1yYWluICNkYXRlTWFpbixcbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLXJhaW4gI3dlYXRoZXJUeXBlIHsgYm9yZGVyLWNvbG9yOiAjM2M1NTYxOyB9XG5cbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLXNub3cgI2Zvb3RlcixcbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLXNub3cgI2Zvcm1CdXR0b24geyBiYWNrZ3JvdW5kLWNvbG9yOiAjNWY4MmE2OyB9XG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1zbm93ICNkYXRlTWFpbixcbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLXNub3cgI3dlYXRoZXJUeXBlIHsgYm9yZGVyLWNvbG9yOiAjNWY4MmE2OyB9XG5cbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLWhhaWwgI2Zvb3RlcixcbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLWhhaWwgI2Zvcm1CdXR0b24geyBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk1NjYzOyB9XG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1oYWlsICNkYXRlTWFpbixcbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLWhhaWwgI3dlYXRoZXJUeXBlIHsgYm9yZGVyLWNvbG9yOiAjNDk1NjYzOyB9XG5cbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLXBhcnRseSAjZm9vdGVyLFxuI291dGVyQ29udGFpbmVyLndlYXRoZXItcGFydGx5ICNmb3JtQnV0dG9uIHsgYmFja2dyb3VuZC1jb2xvcjogIzNmNzliMzsgfVxuI291dGVyQ29udGFpbmVyLndlYXRoZXItcGFydGx5ICNkYXRlTWFpbixcbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLXBhcnRseSAjd2VhdGhlclR5cGUgeyBib3JkZXItY29sb3I6ICMzZjc5YjM7IH1cblxuI291dGVyQ29udGFpbmVyLndlYXRoZXItc3VubnkgI2Zvb3RlcixcbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLXN1bm55ICNmb3JtQnV0dG9uIHsgYmFja2dyb3VuZC1jb2xvcjogI2UzOWExYzsgfVxuI291dGVyQ29udGFpbmVyLndlYXRoZXItc3VubnkgI2RhdGVNYWluLFxuI291dGVyQ29udGFpbmVyLndlYXRoZXItc3VubnkgI3dlYXRoZXJUeXBlIHsgYm9yZGVyLWNvbG9yOiAjZTM5YTFjOyB9XG5cbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLWZvZyAjZm9vdGVyLFxuI291dGVyQ29udGFpbmVyLndlYXRoZXItZm9nICNmb3JtQnV0dG9uIHsgYmFja2dyb3VuZC1jb2xvcjogIzc3ODI4YTsgfVxuI291dGVyQ29udGFpbmVyLndlYXRoZXItZm9nICNkYXRlTWFpbixcbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLWZvZyAjd2VhdGhlclR5cGUgeyBib3JkZXItY29sb3I6ICM3NzgyOGE7IH1cblxuI291dGVyQ29udGFpbmVyLndlYXRoZXItb3ZlcmNhc3QgI2Zvb3RlcixcbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLW92ZXJjYXN0ICNmb3JtQnV0dG9uIHsgYmFja2dyb3VuZC1jb2xvcjogIzVhNjQ2YjsgfVxuI291dGVyQ29udGFpbmVyLndlYXRoZXItb3ZlcmNhc3QgI2RhdGVNYWluLFxuI291dGVyQ29udGFpbmVyLndlYXRoZXItb3ZlcmNhc3QgI3dlYXRoZXJUeXBlIHsgYm9yZGVyLWNvbG9yOiAjNWE2NDZiOyB9XG5cblxuLyogVGFibGV0OiBjb2xsYXBzZSAjbWFpbiB0byBhIHNpbmdsZSB3ZWF0aGVyT3V0ZXIgY29sdW1uIGFuZCBzaHJpbmsgdGhlIHNlYXJjaCBmb3JtICovXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgI21haW4ge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgXCJ3ZWF0aGVyT3V0ZXJcIlxuICAgIDtcbiAgfVxuXG4gICNzaWRlU3BhY2UxLFxuICAjc2lkZVNwYWNlMiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gICNzcGFjZUZvcm0ge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAyODBweCAxNXB4IDEwMHB4IDJmcjtcbiAgfVxuXG4gIC8qIFN0YWNrIHRoZSB3ZWF0aGVyIGdyYXBoaWMgYWJvdmUgdGhlIHN0YXRzIHNvICN3ZWF0aGVyRGF0YSBubyBsb25nZXJcbiAgICAgY2xpcHMgaW5zaWRlIHRoZSAyZnIgY29sdW1uLiAqL1xuICAjbWFpbk1pZGRsZSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gYXV0byBhdXRvO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgXCJzcGFjZXIxXCJcbiAgICBcIndlYXRoZXJTZWN0aW9uXCJcbiAgICBcIndlYXRoZXJEYXRhXCJcbiAgICBcInNwYWNlcjJcIlxuICAgIDtcbiAgfVxuXG4gIC8qIExheSB0aGUgZm91ciBzdGF0cyBvdXQgYXMgYSAyw5cyIGdyaWQuICovXG4gICN3ZWF0aGVyRGF0YSB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgXCJibG9jazEgYmxvY2syXCJcbiAgICBcImJsb2NrMyBibG9jazRcIlxuICAgIDtcbiAgICBnYXA6IDhweDtcbiAgICBwYWRkaW5nOiAxMnB4IDA7XG4gIH1cblxuICAjc3BhY2VkMSxcbiAgI3NwYWNlZDIsXG4gICNzcGFjZWQzLFxuICAjc3BhY2VkNCxcbiAgI3NwYWNlZDUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuXG4vKiBNb2JpbGU6IGtlZXAgdGhlIGFycm93cyBmbGFua2luZyB0aGUgY29udGVudCAocmF0aGVyIHRoYW4gc3RyYW5kaW5nIHRoZW1cbiAgIGFib3ZlL2JlbG93KSwgYW5kIHN0YWNrIHRoZSBzZWFyY2ggZm9ybSBpbnRvIGEgc2luZ2xlIGNvbHVtbi4gKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAvKiBOYXJyb3cgdGhlIGFycm93IGNvbHVtbnMgc28gdGhlIHBhaXIgaHVncyB0aGUgY29udGVudCBpbnN0ZWFkIG9mIGVhdGluZ1xuICAgICBhIGZ1bGwgMWZyIGVhY2guICovXG4gICN3ZWF0aGVyT3V0ZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC43ZnIgNmZyIDAuN2ZyO1xuICB9XG5cbiAgLyogWmVybyB0aGUgc3BhY2VyIHJvd3Mgc28gZWFjaCBhcnJvdyBjZW50cmVzIHZlcnRpY2FsbHkgb24gdGhlIGNvbnRlbnQuICovXG4gICNpbm5lcjEsXG4gICNpbm5lcjIge1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMGZyIDFmciAwZnI7XG4gIH1cblxuICAjYXJyb3dMZWZ0LFxuICAjYXJyb3dSaWdodCB7XG4gICAgd2lkdGg6IDQycHg7XG4gIH1cblxuICAjc3BhY2VGb3JtIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgIFwiZm9ybUlucHV0XCJcbiAgICBcImZvcm1CdXR0b25cIlxuICAgIDtcbiAgICBnYXA6IDEwcHg7XG4gICAgcGFkZGluZzogMHB4IDE1cHg7XG4gIH1cblxuICAjZm9ybVNwYWNlMSxcbiAgI2Zvcm1TcGFjZTIsXG4gICNmb3JtU3BhY2UzLFxuICAjZm9ybVNwYWNlNCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHVCQUF1QjtFQUN2Qiw0Q0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLHVCQUF1QjtFQUN2QiwwQkFBMEI7O0FBRTVCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixxREFBcUQ7RUFDckQ7Ozs7Ozs7O0VBUUE7RUFDQSxpQ0FBaUM7O0FBRW5DOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLDJDQUEyQzs7QUFFN0M7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLHFDQUFxQztFQUNyQzs7RUFFQTtBQUNGOztBQUVBO0VBQ0UscUJBQXFCOztBQUV2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsa0NBQWtDO0VBQ2xDOztFQUVBO0VBQ0EsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixpQ0FBaUM7RUFDakMsa0NBQWtDO0VBQ2xDOzs7O0VBSUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFvQjs7QUFFdEI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLFdBQVc7QUFDYjs7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bnQxJztcXG4gIHNyYzogdXJsKCcuL1JvYm90by1SZWd1bGFyLnR0ZicpO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBtYXJnaW46IDBweDtcXG4gIGZvbnQtZmFtaWx5OiAnV2ViRm9udDEnO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuXFxufVxcblxcbiNvdXRlckNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgbWluLWhlaWdodDogMTEwdmg7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwdmggNzBweCAxZnIgMjBweCAzNXB4IDkwcHggMjB2aDtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICBcXFwiaGVhZGVyXFxcIlxcbiAgXFxcInNwYWNlMVxcXCJcXG4gIFxcXCJtYWluXFxcIlxcbiAgXFxcInNwYWNlMlxcXCJcXG4gIFxcXCJzcGFjZUZvcm1cXFwiXFxuICBcXFwic3BhY2UzXFxcIlxcbiAgXFxcImZvb3RlclxcXCJcXG4gIDtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgNDAwbXMgZWFzZTtcXG5cXG59XFxuXFxuI2hlYWRlciB7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICBcXG59XFxuXFxuI3NwYWNlMSB7XFxuICBncmlkLWFyZWE6IHNwYWNlMTtcXG59XFxuXFxuI21haW4ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXJlYTogbWFpbjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEwMDBweCAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gIFxcXCJzaWRlU3BhY2UxIHdlYXRoZXJPdXRlciBzaWRlU3BhY2UyXFxcIlxcbiAgO1xcbn1cXG5cXG4jc2lkZVNwYWNlMSB7XFxuICBncmlkLWFyZWE6IHNpZGVTcGFjZTE7XFxuXFxufVxcblxcbiN3ZWF0aGVyT3V0ZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXJlYTogd2VhdGhlck91dGVyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgXFxcImlubmVyMSBpbm5lck1haW4gaW5uZXIyXFxcIlxcbiAgO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuI2lubmVyMSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hcmVhOiBpbm5lcjE7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDNmciAwLjVmciAzZnI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICBcXFwiLiB1cHBlckxlZnQgLlxcXCJcXG4gIFxcXCIuIGFycm93TGVmdCAuXFxcIlxcbiAgXFxcIi4gbG93ZXJMZWZ0IC5cXFwiXFxuICA7XFxufVxcblxcbiN1cHBlckxlZnQge1xcbiAgZ3JpZC1hcmVhOiB1cHBlckxlZnQ7XFxuXFxufVxcblxcbiNhcnJvd0xlZnQge1xcbiAgZ3JpZC1hcmVhOiBhcnJvd0xlZnQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB3aWR0aDogNjVweDtcXG59XFxuXFxuI2xvd2VyTGVmdCB7XFxuICBncmlkLWFyZWE6IGxvd2VyTGVmdDtcXG5cXG59XFxuXFxuI2lubmVyTWFpbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNGZyIDAuNWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICBcXFwibWFpblRvcFxcXCJcXG4gIFxcXCJtYWluTWlkZGxlXFxcIlxcbiAgXFxcIm1haW5Cb3R0b21cXFwiXFxuICA7XFxuICBncmlkLWFyZWE6IGlubmVyTWFpbjtcXG59XFxuXFxuXFxuI21haW5Ub3Age1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXJlYTogbWFpblRvcDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAzZnIgMmZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICBcXFwidXBwZXJTZWN0aW9uIHVwcGVyU2VjdGlvbiB1cHBlclNlY3Rpb25cXFwiXFxuICBcXFwiLiBkYXRlU2VjdGlvbiAuXFxcIlxcbiAgXFxcImxvd2VyU2VjdGlvbiBsb3dlclNlY3Rpb24gbG93ZXJTZWN0aW9uXFxcIlxcbiAgO1xcblxcbn1cXG5cXG4jdXBwZXJTZWN0aW9uIHtcXG4gIGdyaWQtYXJlYTogdXBwZXJTZWN0aW9uO1xcblxcbn1cXG5cXG4jZGF0ZVNlY3Rpb24ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXJlYTogZGF0ZVNlY3Rpb247XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAzZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICBcXFwiZGF0ZVNwYWNlMVxcXCJcXG4gIFxcXCJkYXRlTWFpblxcXCJcXG4gIFxcXCJkYXRlU3BhY2UyXFxcIlxcbiAgO1xcbiAgXFxufVxcblxcbiNkYXRlU3BhY2UxIHtcXG4gIGdyaWQtYXJlYTogZGF0ZVNwYWNlMTtcXG4gIFxcbn1cXG5cXG4jZGF0ZU1haW4ge1xcbiAgZ3JpZC1hcmVhOiBkYXRlTWFpbjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgXFxuICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICBcXG4gIGZvbnQtc2l6ZTogMjZweDtcXG59XFxuXFxuI2RhdGVTcGFjZTIge1xcbiAgZ3JpZC1hcmVhOiBkYXRlU3BhY2UyO1xcbiAgXFxufVxcblxcbiNsb3dlclNlY3Rpb24ge1xcbiAgZ3JpZC1hcmVhOiBsb3dlclNlY3Rpb247XFxuXFxufVxcblxcblxcblxcbiNtYWluTWlkZGxlIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBncmlkLWFyZWE6IG1haW5NaWRkbGU7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA2ZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyIDFmciAyZnIgMC41ZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gIFxcXCJzcGFjZXIxIHNwYWNlcjEgc3BhY2VyMSBzcGFjZXIxIHNwYWNlcjFcXFwiXFxuICBcXFwiLiB3ZWF0aGVyU2VjdGlvbiAuIHdlYXRoZXJEYXRhIC5cXFwiXFxuICBcXFwic3BhY2VyMiBzcGFjZXIyIHNwYWNlcjIgc3BhY2VyMiBzcGFjZXIyXFxcIlxcbiAgO1xcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCBibGFjaztcXG4gIGJveC1zaGFkb3c6IDBweCAycHggMTFweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxufVxcblxcbiNzcGFjZXIxIHtcXG4gIGdyaWQtYXJlYTogc3BhY2VyMTtcXG4gIFxcbn1cXG5cXG4jc3BhY2VyMiB7XFxuICBncmlkLWFyZWE6IHNwYWNlcjI7XFxuXFxufVxcblxcbiN3ZWF0aGVyU2VjdGlvbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICBcXFwid2VhdGhlclVwcGVyXFxcIlxcbiAgXFxcIndlYXRoZXJMb3dlclxcXCJcXG4gIDtcXG4gIGdyaWQtYXJlYTogd2VhdGhlclNlY3Rpb247XFxuICBcXG59XFxuXFxuI3dlYXRoZXJVcHBlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBncmlkLWFyZWE6IHdlYXRoZXJVcHBlcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMC41ZnIgMmZyIDAuNWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmciAxZnIgMmZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgXFxcIi4gLiAuIC4gLiBcXFwiXFxuICBcXFwiLiB3ZWF0aGVySWNvbiAuIHdlYXRoZXJUZW1wcyAuIFxcXCJcXG4gIFxcXCIuIC4gLiAuIC4gXFxcIlxcbiAgXFxcIi4gd2VhdGhlckxvY2F0aW9uIHdlYXRoZXJMb2NhdGlvbiB3ZWF0aGVyTG9jYXRpb24gLiBcXFwiXFxuICA7XFxufVxcblxcbiN3ZWF0aGVySWNvbiB7XFxuICBncmlkLWFyZWE6IHdlYXRoZXJJY29uO1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICB3aWR0aDogMTQwcHg7XFxufVxcblxcbiN3ZWF0aGVyVGVtcHMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXJlYTogd2VhdGhlclRlbXBzO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gIFxcXCJ0ZW1wVXBwZXJcXFwiXFxuICBcXFwidGVtcExvd2VyXFxcIlxcbiAgO1xcbn1cXG5cXG4jd2VhdGhlckxvY2F0aW9uIHtcXG4gIGdyaWQtYXJlYTogd2VhdGhlckxvY2F0aW9uO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4jdGVtcFVwcGVyIHtcXG4gIGdyaWQtYXJlYTogdGVtcFVwcGVyO1xcbiAgYWxpZ24tc2VsZjogZW5kO1xcbiAgZm9udC1zaXplOiAzNnB4O1xcbiAgXFxufVxcblxcbiN0ZW1wTG93ZXIge1xcbiAgZ3JpZC1hcmVhOiB0ZW1wTG93ZXI7XFxuICBcXG59XFxuXFxuXFxuI3dlYXRoZXJMb3dlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gIFxcXCIuIHR5cGVVcHBlciAuXFxcIlxcbiAgXFxcIi4gd2VhdGhlclR5cGUgLlxcXCJcXG4gIFxcXCIuIHR5cGVMb3dlciAuXFxcIlxcbiAgO1xcbiAgZ3JpZC1hcmVhOiB3ZWF0aGVyTG93ZXI7XFxufVxcblxcbiN0eXBlVXBwZXIge1xcbiAgZ3JpZC1hcmVhOiB0eXBlVXBwZXI7XFxufVxcblxcbiN3ZWF0aGVyVHlwZSB7XFxuICBncmlkLWFyZWE6IHdlYXRoZXJUeXBlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgYm9yZGVyLXRvcDogbm9uZTtcXG59XFxuXFxuI3R5cGVMb3dlciB7XFxuICBncmlkLWFyZWE6IHR5cGVMb3dlcjtcXG5cXG59XFxuXFxuXFxuI3dlYXRoZXJEYXRhIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGdyaWQtYXJlYTogd2VhdGhlckRhdGE7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDNmciAwLjVmciAzZnIgMC41ZnIgM2ZyIDAuNWZyIDNmciAwLjVmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICBcXFwic3BhY2VkMVxcXCJcXG4gIFxcXCJibG9jazFcXFwiXFxuICBcXFwic3BhY2VkMlxcXCJcXG4gIFxcXCJibG9jazJcXFwiXFxuICBcXFwic3BhY2VkM1xcXCJcXG4gIFxcXCJibG9jazNcXFwiXFxuICBcXFwic3BhY2VkNFxcXCJcXG4gIFxcXCJibG9jazRcXFwiXFxuICBcXFwic3BhY2VkNVxcXCJcXG4gIDtcXG59XFxuXFxuI3NwYWNlZDEge1xcbiAgZ3JpZC1hcmVhOiBzcGFjZWQxO1xcblxcbn1cXG4jYmxvY2sxIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWFyZWE6IGJsb2NrMTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgXFxcImJsb2NrMUxlZnQgYmxvY2sxUmlnaHRcXFwiXFxuICA7XFxufVxcblxcbiNibG9jazFMZWZ0IHtcXG4gIGdyaWQtYXJlYTogYmxvY2sxTGVmdDtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgcGFkZGluZy1yaWdodDogNXB4OyAgICBcXG4gIHdpZHRoOiAzNXB4O1xcbn1cXG5cXG4jYmxvY2sxUmlnaHQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXJlYTogYmxvY2sxUmlnaHQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gIFxcXCJibG9jazFUb3BcXFwiXFxuICBcXFwiYmxvY2sxQm90dG9tXFxcIlxcbiAgO1xcbn1cXG5cXG4jYmxvY2sxVG9wIHtcXG4gIGdyaWQtYXJlYTogYmxvY2sxVG9wO1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbiNibG9jazFCb3R0b20ge1xcbiAgZ3JpZC1hcmVhOiBibG9jazFCb3R0b207XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbiNzcGFjZWQyIHtcXG4gIGdyaWQtYXJlYTogc3BhY2VkMjtcXG4gIFxcbn1cXG5cXG4jYmxvY2syIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWFyZWE6IGJsb2NrMjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgXFxcImJsb2NrMkxlZnQgYmxvY2syUmlnaHRcXFwiXFxuICA7XFxufVxcblxcbiNibG9jazJMZWZ0IHtcXG4gIGdyaWQtYXJlYTogYmxvY2syTGVmdDtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgcGFkZGluZy1yaWdodDogNXB4OyAgXFxuICB3aWR0aDogMzVweDtcXG5cXG59XFxuXFxuI2Jsb2NrMlJpZ2h0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWFyZWE6IGJsb2NrMlJpZ2h0O1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICBcXFwiYmxvY2syVG9wXFxcIlxcbiAgXFxcImJsb2NrMkJvdHRvbVxcXCJcXG4gIDtcXG59XFxuXFxuI2Jsb2NrMlRvcCB7XFxuICBncmlkLWFyZWE6IGJsb2NrMlRvcDtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgZm9udC1zaXplOiAxMXB4O1xcbn1cXG5cXG4jYmxvY2syQm90dG9tIHtcXG4gIGdyaWQtYXJlYTogYmxvY2syQm90dG9tO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG5cXG5cXG4jc3BhY2VkMyB7XFxuICBncmlkLWFyZWE6IHNwYWNlZDM7XFxuXFxufVxcblxcbiNibG9jazMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXJlYTogYmxvY2szO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICBcXFwiYmxvY2szTGVmdCBibG9jazNSaWdodFxcXCJcXG4gIDtcXG59XFxuXFxuI2Jsb2NrM0xlZnQge1xcbiAgZ3JpZC1hcmVhOiBibG9jazNMZWZ0O1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxuICB3aWR0aDogMzVweDtcXG59XFxuXFxuI2Jsb2NrM1JpZ2h0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWFyZWE6IGJsb2NrM1JpZ2h0O1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICBcXFwiYmxvY2szVG9wXFxcIlxcbiAgXFxcImJsb2NrM0JvdHRvbVxcXCJcXG4gIDtcXG59XFxuXFxuI2Jsb2NrM1RvcCB7XFxuICBncmlkLWFyZWE6IGJsb2NrM1RvcDtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgZm9udC1zaXplOiAxMXB4O1xcbn1cXG5cXG4jYmxvY2szQm90dG9tIHtcXG4gIGdyaWQtYXJlYTogYmxvY2szQm90dG9tO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG5cXG4jc3BhY2VkNCB7XFxuICBncmlkLWFyZWE6IHNwYWNlZDQ7XFxuXFxufVxcblxcbiNibG9jazQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXJlYTogYmxvY2s0O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICBcXFwiYmxvY2s0TGVmdCBibG9jazRSaWdodFxcXCJcXG4gIDtcXG59XFxuXFxuI2Jsb2NrNExlZnQge1xcbiAgZ3JpZC1hcmVhOiBibG9jazRMZWZ0O1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XFxuICB3aWR0aDogMzBweDtcXG59XFxuXFxuI2Jsb2NrNFJpZ2h0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWFyZWE6IGJsb2NrNFJpZ2h0O1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICBcXFwiYmxvY2s0VG9wXFxcIlxcbiAgXFxcImJsb2NrNEJvdHRvbVxcXCJcXG4gIDtcXG59XFxuXFxuI2Jsb2NrNFRvcCB7XFxuICBncmlkLWFyZWE6IGJsb2NrNFRvcDtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgZm9udC1zaXplOiAxMXB4O1xcbn1cXG5cXG4jYmxvY2s0Qm90dG9tIHtcXG4gIGdyaWQtYXJlYTogYmxvY2s0Qm90dG9tO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbn1cXG5cXG4jc3BhY2VkNSB7XFxuICBncmlkLWFyZWE6IHNwYWNlZDU7XFxuXFxufVxcblxcblxcbiNtYWluQm90dG9tIHtcXG4gIGdyaWQtYXJlYTogbWFpbkJvdHRvbTtcXG59XFxuXFxuXFxuI2lubmVyMiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hcmVhOiBpbm5lcjI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDNmciAwLjVmciAzZnI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICBcXFwiLiB1cHBlclJpZ2h0IC5cXFwiXFxuICBcXFwiLiBhcnJvd1JpZ2h0IC5cXFwiXFxuICBcXFwiLiBsb3dlclJpZ2h0IC5cXFwiXFxuICA7XFxufVxcblxcbiN1cHBlclJpZ2h0IHtcXG4gIGdyaWQtYXJlYTogdXBwZXJSaWdodDtcXG5cXG59XFxuXFxuI2Fycm93UmlnaHQge1xcbiAgZ3JpZC1hcmVhOiBhcnJvd1JpZ2h0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgd2lkdGg6IDY1cHg7XFxufVxcblxcbiNsb3dlclJpZ2h0IHtcXG4gIGdyaWQtYXJlYTogbG93ZXJSaWdodDtcXG5cXG59XFxuXFxuI3NpZGVTcGFjZTIge1xcbiAgZ3JpZC1hcmVhOiBzaWRlU3BhY2UyO1xcblxcbn1cXG5cXG5cXG4jc3BhY2UyIHtcXG4gIGdyaWQtYXJlYTogc3BhY2UyO1xcblxcbn1cXG5cXG4jc3BhY2VGb3JtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWFyZWE6IHNwYWNlRm9ybTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciA0NTBweCAxNXB4IDEwMHB4IDJmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgXFxcImZvcm1TcGFjZTEgZm9ybVNwYWNlMiBmb3JtSW5wdXQgZm9ybVNwYWNlMyBmb3JtQnV0dG9uIGZvcm1TcGFjZTRcXFwiXFxuICA7XFxufVxcblxcbiNmb3JtU3BhY2UxIHtcXG4gIGdyaWQtYXJlYTogZm9ybVNwYWNlMTtcXG5cXG59XFxuI2Zvcm1TcGFjZTIge1xcbiAgZ3JpZC1hcmVhOiBmb3JtU3BhY2UyO1xcblxcbn1cXG4jZm9ybUlucHV0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWFyZWE6IGZvcm1JbnB1dDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDE4ZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICBcXFwiLiBpbnB1dElubmVyIC5cXFwiXFxuICA7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuI2lucHV0SW5uZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXJlYTogaW5wdXRJbm5lcjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuI2lucHV0SW5uZXI6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG5cXG59XFxuXFxuI2Zvcm1CdXR0b24ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXJlYTogZm9ybUJ1dHRvbjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNXB4IDFmciA1cHg7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICcuJ1xcbiAgJ2J1dHRvblRleHQnXFxuICAnLidcXG4gIDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtanVzdGlmeTogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4jYnV0dG9uVGV4dCB7XFxuICBncmlkLWFyZWE6IGJ1dHRvblRleHQ7XFxufVxcblxcbiNmb3JtU3BhY2UzIHtcXG4gIGdyaWQtYXJlYTogZm9ybVNwYWNlMztcXG5cXG59XFxuI2Zvcm1TcGFjZTQge1xcbiAgZ3JpZC1hcmVhOiBmb3JtU3BhY2U0O1xcblxcbn1cXG5cXG5cXG4jc3BhY2UzIHtcXG4gIGdyaWQtYXJlYTogc3BhY2UzO1xcbn1cXG5cXG4jZm9vdGVyIHtcXG4gIGdyaWQtYXJlYTogZm9vdGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG59XFxuXFxuXFxuLyogSG92ZXIgdHJlYXRtZW50cyAobW92ZWQgb3V0IG9mIGluZGV4LmpzIHNvIHRoZXkgbmV2ZXIgcGVyc2lzdCBhcyBpbmxpbmVcXG4gICBzdHlsZXMgdGhhdCB3b3VsZCBvdmVycmlkZSB0aGUgdGhlbWVkIGFjY2VudCkuICovXFxuI2Fycm93TGVmdDpob3ZlcixcXG4jYXJyb3dSaWdodDpob3ZlciB7XFxuICBib3gtc2hhZG93OiAwIDZweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbiNmb3JtQnV0dG9uOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDAgNnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45KTtcXG59XFxuXFxuXFxuLyogUGVyLXdlYXRoZXIgdGhlbWluZy4gYWRqdXN0V2VhdGhlcigpIGluIGluZGV4Q2hhbmdlcy5qcyBzZXRzIGFcXG4gICB3ZWF0aGVyLXsuLi59IGNsYXNzIG9uICNvdXRlckNvbnRhaW5lcjsgdGhlIGNsYXNzIGRyaXZlcyBhIHZlcnRpY2FsIHNreVxcbiAgIGdyYWRpZW50IHBsdXMgYSBtYXRjaGluZyBhY2NlbnQgb24gdGhlIHR3byB1bmRlcmxpbmUgcnVsZXMgKCNkYXRlTWFpbixcXG4gICAjd2VhdGhlclR5cGUpLCAjZm9vdGVyIGFuZCAjZm9ybUJ1dHRvbi4gVGhlIHdoaXRlIGNhcmRzIHN0YXkgd2hpdGUuICovXFxuI291dGVyQ29udGFpbmVyLndlYXRoZXItbmV1dHJhbCAgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjOGZhM2IwLCAjYzNjZWQ1KTsgfVxcbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLXJhaW4gICAgIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzQ2NjA2ZSwgIzgxOTlhNCk7IH1cXG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1zbm93ICAgICB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICM4ZmIwY2MsICNkY2U4ZjIpOyB9XFxuI291dGVyQ29udGFpbmVyLndlYXRoZXItaGFpbCAgICAgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjNTY2NTczLCAjOWFhOGI1KTsgfVxcbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLXBhcnRseSAgIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzViOTBjNCwgI2FmZDBlYSk7IH1cXG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1zdW5ueSAgICB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICM0YTk0ZGQsICNjZGVhZmEpOyB9XFxuI291dGVyQ29udGFpbmVyLndlYXRoZXItZm9nICAgICAgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjOTdhMWE5LCAjZDJkOGRkKTsgfVxcbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLW92ZXJjYXN0IHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzZiNzU3ZCwgI2E3YjBiNyk7IH1cXG5cXG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1uZXV0cmFsICNmb290ZXIsXFxuI291dGVyQ29udGFpbmVyLndlYXRoZXItbmV1dHJhbCAjZm9ybUJ1dHRvbiB7IGJhY2tncm91bmQtY29sb3I6ICM2Yjc4ODM7IH1cXG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1uZXV0cmFsICNkYXRlTWFpbixcXG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1uZXV0cmFsICN3ZWF0aGVyVHlwZSB7IGJvcmRlci1jb2xvcjogIzZiNzg4MzsgfVxcblxcbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLXJhaW4gI2Zvb3RlcixcXG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1yYWluICNmb3JtQnV0dG9uIHsgYmFja2dyb3VuZC1jb2xvcjogIzNjNTU2MTsgfVxcbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLXJhaW4gI2RhdGVNYWluLFxcbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLXJhaW4gI3dlYXRoZXJUeXBlIHsgYm9yZGVyLWNvbG9yOiAjM2M1NTYxOyB9XFxuXFxuI291dGVyQ29udGFpbmVyLndlYXRoZXItc25vdyAjZm9vdGVyLFxcbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLXNub3cgI2Zvcm1CdXR0b24geyBiYWNrZ3JvdW5kLWNvbG9yOiAjNWY4MmE2OyB9XFxuI291dGVyQ29udGFpbmVyLndlYXRoZXItc25vdyAjZGF0ZU1haW4sXFxuI291dGVyQ29udGFpbmVyLndlYXRoZXItc25vdyAjd2VhdGhlclR5cGUgeyBib3JkZXItY29sb3I6ICM1ZjgyYTY7IH1cXG5cXG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1oYWlsICNmb290ZXIsXFxuI291dGVyQ29udGFpbmVyLndlYXRoZXItaGFpbCAjZm9ybUJ1dHRvbiB7IGJhY2tncm91bmQtY29sb3I6ICM0OTU2NjM7IH1cXG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1oYWlsICNkYXRlTWFpbixcXG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1oYWlsICN3ZWF0aGVyVHlwZSB7IGJvcmRlci1jb2xvcjogIzQ5NTY2MzsgfVxcblxcbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLXBhcnRseSAjZm9vdGVyLFxcbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLXBhcnRseSAjZm9ybUJ1dHRvbiB7IGJhY2tncm91bmQtY29sb3I6ICMzZjc5YjM7IH1cXG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1wYXJ0bHkgI2RhdGVNYWluLFxcbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLXBhcnRseSAjd2VhdGhlclR5cGUgeyBib3JkZXItY29sb3I6ICMzZjc5YjM7IH1cXG5cXG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1zdW5ueSAjZm9vdGVyLFxcbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLXN1bm55ICNmb3JtQnV0dG9uIHsgYmFja2dyb3VuZC1jb2xvcjogI2UzOWExYzsgfVxcbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLXN1bm55ICNkYXRlTWFpbixcXG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1zdW5ueSAjd2VhdGhlclR5cGUgeyBib3JkZXItY29sb3I6ICNlMzlhMWM7IH1cXG5cXG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1mb2cgI2Zvb3RlcixcXG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1mb2cgI2Zvcm1CdXR0b24geyBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc4MjhhOyB9XFxuI291dGVyQ29udGFpbmVyLndlYXRoZXItZm9nICNkYXRlTWFpbixcXG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1mb2cgI3dlYXRoZXJUeXBlIHsgYm9yZGVyLWNvbG9yOiAjNzc4MjhhOyB9XFxuXFxuI291dGVyQ29udGFpbmVyLndlYXRoZXItb3ZlcmNhc3QgI2Zvb3RlcixcXG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1vdmVyY2FzdCAjZm9ybUJ1dHRvbiB7IGJhY2tncm91bmQtY29sb3I6ICM1YTY0NmI7IH1cXG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1vdmVyY2FzdCAjZGF0ZU1haW4sXFxuI291dGVyQ29udGFpbmVyLndlYXRoZXItb3ZlcmNhc3QgI3dlYXRoZXJUeXBlIHsgYm9yZGVyLWNvbG9yOiAjNWE2NDZiOyB9XFxuXFxuXFxuLyogVGFibGV0OiBjb2xsYXBzZSAjbWFpbiB0byBhIHNpbmdsZSB3ZWF0aGVyT3V0ZXIgY29sdW1uIGFuZCBzaHJpbmsgdGhlIHNlYXJjaCBmb3JtICovXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAjbWFpbiB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwid2VhdGhlck91dGVyXFxcIlxcbiAgICA7XFxuICB9XFxuXFxuICAjc2lkZVNwYWNlMSxcXG4gICNzaWRlU3BhY2UyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gICNzcGFjZUZvcm0ge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMjgwcHggMTVweCAxMDBweCAyZnI7XFxuICB9XFxuXFxuICAvKiBTdGFjayB0aGUgd2VhdGhlciBncmFwaGljIGFib3ZlIHRoZSBzdGF0cyBzbyAjd2VhdGhlckRhdGEgbm8gbG9uZ2VyXFxuICAgICBjbGlwcyBpbnNpZGUgdGhlIDJmciBjb2x1bW4uICovXFxuICAjbWFpbk1pZGRsZSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byBhdXRvIGF1dG87XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJzcGFjZXIxXFxcIlxcbiAgICBcXFwid2VhdGhlclNlY3Rpb25cXFwiXFxuICAgIFxcXCJ3ZWF0aGVyRGF0YVxcXCJcXG4gICAgXFxcInNwYWNlcjJcXFwiXFxuICAgIDtcXG4gIH1cXG5cXG4gIC8qIExheSB0aGUgZm91ciBzdGF0cyBvdXQgYXMgYSAyw5cyIGdyaWQuICovXFxuICAjd2VhdGhlckRhdGEge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwiYmxvY2sxIGJsb2NrMlxcXCJcXG4gICAgXFxcImJsb2NrMyBibG9jazRcXFwiXFxuICAgIDtcXG4gICAgZ2FwOiA4cHg7XFxuICAgIHBhZGRpbmc6IDEycHggMDtcXG4gIH1cXG5cXG4gICNzcGFjZWQxLFxcbiAgI3NwYWNlZDIsXFxuICAjc3BhY2VkMyxcXG4gICNzcGFjZWQ0LFxcbiAgI3NwYWNlZDUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5cXG5cXG4vKiBNb2JpbGU6IGtlZXAgdGhlIGFycm93cyBmbGFua2luZyB0aGUgY29udGVudCAocmF0aGVyIHRoYW4gc3RyYW5kaW5nIHRoZW1cXG4gICBhYm92ZS9iZWxvdyksIGFuZCBzdGFjayB0aGUgc2VhcmNoIGZvcm0gaW50byBhIHNpbmdsZSBjb2x1bW4uICovXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxuICAvKiBOYXJyb3cgdGhlIGFycm93IGNvbHVtbnMgc28gdGhlIHBhaXIgaHVncyB0aGUgY29udGVudCBpbnN0ZWFkIG9mIGVhdGluZ1xcbiAgICAgYSBmdWxsIDFmciBlYWNoLiAqL1xcbiAgI3dlYXRoZXJPdXRlciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC43ZnIgNmZyIDAuN2ZyO1xcbiAgfVxcblxcbiAgLyogWmVybyB0aGUgc3BhY2VyIHJvd3Mgc28gZWFjaCBhcnJvdyBjZW50cmVzIHZlcnRpY2FsbHkgb24gdGhlIGNvbnRlbnQuICovXFxuICAjaW5uZXIxLFxcbiAgI2lubmVyMiB7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMGZyIDFmciAwZnI7XFxuICB9XFxuXFxuICAjYXJyb3dMZWZ0LFxcbiAgI2Fycm93UmlnaHQge1xcbiAgICB3aWR0aDogNDJweDtcXG4gIH1cXG5cXG4gICNzcGFjZUZvcm0ge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcImZvcm1JbnB1dFxcXCJcXG4gICAgXFxcImZvcm1CdXR0b25cXFwiXFxuICAgIDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAwcHggMTVweDtcXG4gIH1cXG5cXG4gICNmb3JtU3BhY2UxLFxcbiAgI2Zvcm1TcGFjZTIsXFxuICAjZm9ybVNwYWNlMyxcXG4gICNmb3JtU3BhY2U0IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1dlYXRoZXJBcHBfVE9QL1wiOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiZGF5XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5cblxuLy8gRkFDVE9SWSBGVU5DVElPTjogVE9ETyBPQkpFQ1Rcbi8vIFN0b3JlIGxpc3QgaXRlbXMgaW4gb2JqZWN0c1xuLyogY29uc3QgZGF5ID0gKHdlYXRoZXIsIGxvY2F0aW9uTmFtZSwgZGF5TmFtZSwgZGF5RGF0ZSwgZmVlbHNMaWtlLCBodW1pZGl0eSwgaGlnaFRlbXAsIGxvd1RlbXAsIHJhaW5DaGFuY2UsIHdpbmRTcGVlZCkgPT4ge1xuICAgIGxldCB3ZWEgPSB3ZWF0aGVyO1xuICAgIGxldCBsb2NOID0gbG9jYXRpb25OYW1lO1xuICAgIGxldCBkYXlOYSA9IGRheU5hbWU7XG4gICAgbGV0IGRheU5vdyA9IGRheURhdGU7XG4gICAgbGV0IGN1cnJlbnRUID0gZmVlbHNMaWtlO1xuICAgIGxldCBodW0gPSBodW1pZGl0eTtcbiAgICBsZXQgaGlnaFQgPSBoaWdoVGVtcDtcbiAgICBsZXQgbG93VCA9IGxvd1RlbXA7XG4gICAgbGV0IHJhaW5DID0gcmFpbkNoYW5jZTtcbiAgICBsZXQgd3MgPSB3aW5kU3BlZWQ7XG5cbiAgICBcblxuICAgIFxuICAgIHJldHVybiB7d2VhLCBsb2NOLCBkYXlOYSwgZGF5Tm93LCBjdXJyZW50VCwgaHVtLCBoaWdoVCwgbG93VCwgcmFpbkMsIHdzfTtcbiAgfTtcbiAgXG5cbmV4cG9ydCB7IGRheSB9OyAqL1xuXG5jbGFzcyBEYXkge1xuICBjb25zdHJ1Y3Rvcih3ZWF0aGVyLCBsb2NhdGlvbk5hbWUsIGRheU5hbWUsIGRheURhdGUsIGZlZWxzTGlrZSwgaHVtaWRpdHksIGhpZ2hUZW1wLCBsb3dUZW1wLCByYWluQ2hhbmNlLCB3aW5kU3BlZWQpIHtcbiAgICB0aGlzLndlYXRoZXIgPSB3ZWF0aGVyO1xuICAgIHRoaXMubG9jYXRpb25OYW1lID0gbG9jYXRpb25OYW1lO1xuICAgIHRoaXMuZGF5TmFtZSA9IGRheU5hbWU7XG4gICAgdGhpcy5kYXlEYXRlID0gZGF5RGF0ZTtcbiAgICB0aGlzLmZlZWxzTGlrZSA9IGZlZWxzTGlrZTtcbiAgICB0aGlzLmh1bWlkaXR5ID0gaHVtaWRpdHk7XG4gICAgdGhpcy5oaWdoVGVtcCA9IGhpZ2hUZW1wO1xuICAgIHRoaXMubG93VGVtcCA9IGxvd1RlbXA7XG4gICAgdGhpcy5yYWluQ2hhbmNlID0gcmFpbkNoYW5jZTtcbiAgICB0aGlzLndpbmRTcGVlZCA9IHdpbmRTcGVlZDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9