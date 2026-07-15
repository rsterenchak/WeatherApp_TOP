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
  background-color: white;
  grid-area: mainMiddle;
  grid-template-rows: 1fr 6fr 1fr;
  grid-template-columns: minmax(0, 1fr) minmax(0, 5fr) minmax(0, 1fr) minmax(0, 2fr) minmax(0, 0.5fr);
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
  /* White comes from the #mainMiddle card so the rounded corners frame white,
     not a hard square edge over the page gradient. */
  grid-area: weatherUpper;
  grid-template-rows: 0.5fr 2fr 0.5fr 1fr;
  grid-template-columns: minmax(0, 1fr) minmax(0, 4fr) minmax(0, 1fr) minmax(0, 2fr) minmax(0, 1fr);
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
  /* Fixed narrow gutters so the arrow pair flanks the content and never clips
     against the viewport edges. */
  #weatherOuter {
    grid-template-columns: 44px 1fr 44px;
  }

  /* Zero the spacer rows so each arrow centres vertically on the content. */
  #inner1,
  #inner2 {
    grid-template-rows: 0fr 1fr 0fr;
  }

  #arrowLeft,
  #arrowRight {
    width: 32px;
  }

  /* Shrink the graphic/temperature so #weatherUpper's tracks fit inside the
     narrow single column rather than pushing #mainMiddle past the edge. */
  #weatherIcon {
    width: 88px;
  }

  #tempUpper {
    font-size: 28px;
  }

  /* Keep the date on one line so it still reads as a rule. */
  #dateMain {
    font-size: 18px;
    white-space: nowrap;
  }

  /* Collapse the empty vertical spacer rows that otherwise absorb the height
     freed by the min-height layout and open large gaps around the card. */
  #mainTop {
    grid-template-rows: 0fr 1fr 0fr;
  }

  #innerMain {
    grid-template-rows: auto auto auto;
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: 'WebFont1';\n  src: url('./Roboto-Regular.ttf');\n}\n\nbody {\n  display: grid;\n  margin: 0px;\n  font-family: 'WebFont1';\n  grid-template-columns: 1fr;\n\n}\n\n#outerContainer {\n  display: grid;\n  min-height: 110vh;\n  grid-template-rows: 10vh 70px 1fr 20px 35px 90px 20vh;\n  grid-template-areas:\n  \"header\"\n  \"space1\"\n  \"main\"\n  \"space2\"\n  \"spaceForm\"\n  \"space3\"\n  \"footer\"\n  ;\n  transition: background 400ms ease;\n\n}\n\n#header {\n  grid-area: header;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);\n  \n}\n\n#space1 {\n  grid-area: space1;\n}\n\n#main {\n  display: grid;\n  grid-area: main;\n  grid-template-columns: 1fr 1000px 1fr;\n  grid-template-areas: \n  \"sideSpace1 weatherOuter sideSpace2\"\n  ;\n}\n\n#sideSpace1 {\n  grid-area: sideSpace1;\n\n}\n\n#weatherOuter {\n  display: grid;\n  grid-area: weatherOuter;\n  grid-template-columns: 1fr 4fr 1fr;\n  grid-template-areas: \n  \"inner1 innerMain inner2\"\n  ;\n  border-radius: 10px;\n}\n\n#inner1 {\n  display: grid;\n  grid-area: inner1;\n  grid-template-rows: 3fr 0.5fr 3fr;\n  grid-template-columns: 1fr 2fr 1fr;\n  grid-template-areas: \n  \". upperLeft .\"\n  \". arrowLeft .\"\n  \". lowerLeft .\"\n  ;\n}\n\n#upperLeft {\n  grid-area: upperLeft;\n\n}\n\n#arrowLeft {\n  grid-area: arrowLeft;\n  cursor: pointer;\n  width: 65px;\n}\n\n#lowerLeft {\n  grid-area: lowerLeft;\n\n}\n\n#innerMain {\n  display: grid;\n  grid-template-rows: 1fr 4fr 0.5fr;\n  grid-template-areas: \n  \"mainTop\"\n  \"mainMiddle\"\n  \"mainBottom\"\n  ;\n  grid-area: innerMain;\n}\n\n\n#mainTop {\n  display: grid;\n  grid-area: mainTop;\n  grid-template-columns: 1fr 2fr 1fr;\n  grid-template-rows: 1fr 3fr 2fr;\n  grid-template-areas: \n  \"upperSection upperSection upperSection\"\n  \". dateSection .\"\n  \"lowerSection lowerSection lowerSection\"\n  ;\n\n}\n\n#upperSection {\n  grid-area: upperSection;\n\n}\n\n#dateSection {\n  display: grid;\n  grid-area: dateSection;\n  grid-template-rows: 1fr 3fr 1fr;\n  grid-template-areas: \n  \"dateSpace1\"\n  \"dateMain\"\n  \"dateSpace2\"\n  ;\n  \n}\n\n#dateSpace1 {\n  grid-area: dateSpace1;\n  \n}\n\n#dateMain {\n  grid-area: dateMain;\n  text-align: center;\n  background-color: white;\n  border: 0.5px solid black;\n  border-left: none;\n  \n  border-right: none;\n  \n  font-size: 26px;\n}\n\n#dateSpace2 {\n  grid-area: dateSpace2;\n  \n}\n\n#lowerSection {\n  grid-area: lowerSection;\n\n}\n\n\n\n#mainMiddle {\n  display: grid;\n  border-radius: 8px;\n  background-color: white;\n  grid-area: mainMiddle;\n  grid-template-rows: 1fr 6fr 1fr;\n  grid-template-columns: minmax(0, 1fr) minmax(0, 5fr) minmax(0, 1fr) minmax(0, 2fr) minmax(0, 0.5fr);\n  grid-template-areas: \n  \"spacer1 spacer1 spacer1 spacer1 spacer1\"\n  \". weatherSection . weatherData .\"\n  \"spacer2 spacer2 spacer2 spacer2 spacer2\"\n  ;\n  border: 0.5px solid black;\n  box-shadow: 0px 2px 11px rgba(0, 0, 0, 0.3);\n}\n\n#spacer1 {\n  grid-area: spacer1;\n  \n}\n\n#spacer2 {\n  grid-area: spacer2;\n\n}\n\n#weatherSection {\n  display: grid;\n  grid-template-rows: 3fr 1fr;\n  grid-template-areas: \n  \"weatherUpper\"\n  \"weatherLower\"\n  ;\n  grid-area: weatherSection;\n  \n}\n\n#weatherUpper {\n  display: grid;\n  /* White comes from the #mainMiddle card so the rounded corners frame white,\n     not a hard square edge over the page gradient. */\n  grid-area: weatherUpper;\n  grid-template-rows: 0.5fr 2fr 0.5fr 1fr;\n  grid-template-columns: minmax(0, 1fr) minmax(0, 4fr) minmax(0, 1fr) minmax(0, 2fr) minmax(0, 1fr);\n  grid-template-areas: \n  \". . . . . \"\n  \". weatherIcon . weatherTemps . \"\n  \". . . . . \"\n  \". weatherLocation weatherLocation weatherLocation . \"\n  ;\n}\n\n#weatherIcon {\n  grid-area: weatherIcon;\n  justify-self: end;\n  width: 140px;\n}\n\n#weatherTemps {\n  display: grid;\n  grid-area: weatherTemps;\n  grid-template-rows: 1fr 1fr;\n  grid-template-areas:\n  \"tempUpper\"\n  \"tempLower\"\n  ;\n}\n\n#weatherLocation {\n  grid-area: weatherLocation;\n  text-align: center;\n  font-size: 24px;\n}\n\n#tempUpper {\n  grid-area: tempUpper;\n  align-self: end;\n  font-size: 36px;\n  \n}\n\n#tempLower {\n  grid-area: tempLower;\n  \n}\n\n\n#weatherLower {\n  display: grid;\n  grid-template-columns: 1fr 5fr 1fr;\n  grid-template-rows: 1fr 2fr 1fr;\n  grid-template-areas: \n  \". typeUpper .\"\n  \". weatherType .\"\n  \". typeLower .\"\n  ;\n  grid-area: weatherLower;\n}\n\n#typeUpper {\n  grid-area: typeUpper;\n}\n\n#weatherType {\n  grid-area: weatherType;\n  background-color: white;\n  text-align: center;\n  font-size: 24px;\n  border: 1px solid black;\n  border-left: none;\n  border-right: none;\n  border-top: none;\n}\n\n#typeLower {\n  grid-area: typeLower;\n\n}\n\n\n#weatherData {\n  display: grid;\n  background-color: white;\n  grid-area: weatherData;\n  grid-template-rows: 0.5fr 3fr 0.5fr 3fr 0.5fr 3fr 0.5fr 3fr 0.5fr;\n  grid-template-columns: 1fr;\n  grid-template-areas: \n  \"spaced1\"\n  \"block1\"\n  \"spaced2\"\n  \"block2\"\n  \"spaced3\"\n  \"block3\"\n  \"spaced4\"\n  \"block4\"\n  \"spaced5\"\n  ;\n}\n\n#spaced1 {\n  grid-area: spaced1;\n\n}\n#block1 {\n  display: grid;\n  grid-area: block1;\n  grid-template-columns: 1fr 1fr;\n  grid-template-areas: \n  \"block1Left block1Right\"\n  ;\n}\n\n#block1Left {\n  grid-area: block1Left;\n  justify-self: end;\n  padding-right: 5px;    \n  width: 35px;\n}\n\n#block1Right {\n  display: grid;\n  grid-area: block1Right;\n  grid-template-rows: 1fr 2fr;\n  grid-template-areas: \n  \"block1Top\"\n  \"block1Bottom\"\n  ;\n}\n\n#block1Top {\n  grid-area: block1Top;\n  text-align: start;\n  font-size: 12px;\n}\n\n#block1Bottom {\n  grid-area: block1Bottom;\n  font-size: 20px;\n}\n\n#spaced2 {\n  grid-area: spaced2;\n  \n}\n\n#block2 {\n  display: grid;\n  grid-area: block2;\n  grid-template-columns: 1fr 1fr;\n  grid-template-areas: \n  \"block2Left block2Right\"\n  ;\n}\n\n#block2Left {\n  grid-area: block2Left;\n  justify-self: end;\n  padding-right: 5px;  \n  width: 35px;\n\n}\n\n#block2Right {\n  display: grid;\n  grid-area: block2Right;\n  grid-template-rows: 1fr 2fr;\n  grid-template-areas: \n  \"block2Top\"\n  \"block2Bottom\"\n  ;\n}\n\n#block2Top {\n  grid-area: block2Top;\n  text-align: start;\n  font-size: 11px;\n}\n\n#block2Bottom {\n  grid-area: block2Bottom;\n  font-size: 24px;\n}\n\n\n\n#spaced3 {\n  grid-area: spaced3;\n\n}\n\n#block3 {\n  display: grid;\n  grid-area: block3;\n  grid-template-columns: 1fr 1fr;\n  grid-template-areas: \n  \"block3Left block3Right\"\n  ;\n}\n\n#block3Left {\n  grid-area: block3Left;\n  justify-self: end;\n  padding-right: 5px;\n  width: 35px;\n}\n\n#block3Right {\n  display: grid;\n  grid-area: block3Right;\n  grid-template-rows: 1fr 2fr;\n  grid-template-areas: \n  \"block3Top\"\n  \"block3Bottom\"\n  ;\n}\n\n#block3Top {\n  grid-area: block3Top;\n  text-align: start;\n  font-size: 11px;\n}\n\n#block3Bottom {\n  grid-area: block3Bottom;\n  font-size: 24px;\n}\n\n\n#spaced4 {\n  grid-area: spaced4;\n\n}\n\n#block4 {\n  display: grid;\n  grid-area: block4;\n  grid-template-columns: 1fr 1fr;\n  grid-template-areas: \n  \"block4Left block4Right\"\n  ;\n}\n\n#block4Left {\n  grid-area: block4Left;\n  justify-self: end;\n  padding-right: 8px;\n  width: 30px;\n}\n\n#block4Right {\n  display: grid;\n  grid-area: block4Right;\n  grid-template-rows: 1fr 2fr;\n  grid-template-areas: \n  \"block4Top\"\n  \"block4Bottom\"\n  ;\n}\n\n#block4Top {\n  grid-area: block4Top;\n  text-align: start;\n  font-size: 11px;\n}\n\n#block4Bottom {\n  grid-area: block4Bottom;\n  font-size: 15px;\n}\n\n#spaced5 {\n  grid-area: spaced5;\n\n}\n\n\n#mainBottom {\n  grid-area: mainBottom;\n}\n\n\n#inner2 {\n  display: grid;\n  grid-area: inner2;\n  grid-template-rows: 3fr 0.5fr 3fr;\n  grid-template-columns: 1fr 2fr 1fr;\n  grid-template-areas: \n  \". upperRight .\"\n  \". arrowRight .\"\n  \". lowerRight .\"\n  ;\n}\n\n#upperRight {\n  grid-area: upperRight;\n\n}\n\n#arrowRight {\n  grid-area: arrowRight;\n  cursor: pointer;\n  width: 65px;\n}\n\n#lowerRight {\n  grid-area: lowerRight;\n\n}\n\n#sideSpace2 {\n  grid-area: sideSpace2;\n\n}\n\n\n#space2 {\n  grid-area: space2;\n\n}\n\n#spaceForm {\n  display: grid;\n  grid-area: spaceForm;\n  grid-template-columns: 1fr 1fr 450px 15px 100px 2fr;\n  grid-template-areas: \n  \"formSpace1 formSpace2 formInput formSpace3 formButton formSpace4\"\n  ;\n}\n\n#formSpace1 {\n  grid-area: formSpace1;\n\n}\n#formSpace2 {\n  grid-area: formSpace2;\n\n}\n#formInput {\n  display: grid;\n  grid-area: formInput;\n  grid-template-columns: 1fr 18fr 1fr;\n  grid-template-areas: \n  \". inputInner .\"\n  ;\n  border-radius: 6px;\n  border: 1px solid black;\n}\n\n#inputInner {\n  display: grid;\n  grid-area: inputInner;\n  border: none;\n  font-size: 16px;\n}\n\n#inputInner:focus {\n  outline: none;\n\n}\n\n#formButton {\n  display: grid;\n  grid-area: formButton;\n  grid-template-rows: 5px 1fr 5px;\n  grid-template-areas: \n  '.'\n  'buttonText'\n  '.'\n  ;\n  text-align: center;\n  text-justify: center;\n  background-color: #ccc;\n  cursor: pointer;\n  border-radius: 6px;\n  font-size: 16px;\n  border: 1px solid black;\n}\n\n#buttonText {\n  grid-area: buttonText;\n}\n\n#formSpace3 {\n  grid-area: formSpace3;\n\n}\n#formSpace4 {\n  grid-area: formSpace4;\n\n}\n\n\n#space3 {\n  grid-area: space3;\n}\n\n#footer {\n  grid-area: footer;\n  background-color: #ccc;\n}\n\n\n/* Hover treatments (moved out of index.js so they never persist as inline\n   styles that would override the themed accent). */\n#arrowLeft:hover,\n#arrowRight:hover {\n  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);\n  border: 1px solid black;\n}\n\n#formButton:hover {\n  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);\n  filter: brightness(0.9);\n}\n\n\n/* Per-weather theming. adjustWeather() in indexChanges.js sets a\n   weather-{...} class on #outerContainer; the class drives a vertical sky\n   gradient plus a matching accent on the two underline rules (#dateMain,\n   #weatherType), #footer and #formButton. The white cards stay white. */\n#outerContainer.weather-neutral  { background: linear-gradient(180deg, #8fa3b0, #c3ced5); }\n#outerContainer.weather-rain     { background: linear-gradient(180deg, #46606e, #8199a4); }\n#outerContainer.weather-snow     { background: linear-gradient(180deg, #8fb0cc, #dce8f2); }\n#outerContainer.weather-hail     { background: linear-gradient(180deg, #566573, #9aa8b5); }\n#outerContainer.weather-partly   { background: linear-gradient(180deg, #5b90c4, #afd0ea); }\n#outerContainer.weather-sunny    { background: linear-gradient(180deg, #4a94dd, #cdeafa); }\n#outerContainer.weather-fog      { background: linear-gradient(180deg, #97a1a9, #d2d8dd); }\n#outerContainer.weather-overcast { background: linear-gradient(180deg, #6b757d, #a7b0b7); }\n\n#outerContainer.weather-neutral #footer,\n#outerContainer.weather-neutral #formButton { background-color: #6b7883; }\n#outerContainer.weather-neutral #dateMain,\n#outerContainer.weather-neutral #weatherType { border-color: #6b7883; }\n\n#outerContainer.weather-rain #footer,\n#outerContainer.weather-rain #formButton { background-color: #3c5561; }\n#outerContainer.weather-rain #dateMain,\n#outerContainer.weather-rain #weatherType { border-color: #3c5561; }\n\n#outerContainer.weather-snow #footer,\n#outerContainer.weather-snow #formButton { background-color: #5f82a6; }\n#outerContainer.weather-snow #dateMain,\n#outerContainer.weather-snow #weatherType { border-color: #5f82a6; }\n\n#outerContainer.weather-hail #footer,\n#outerContainer.weather-hail #formButton { background-color: #495663; }\n#outerContainer.weather-hail #dateMain,\n#outerContainer.weather-hail #weatherType { border-color: #495663; }\n\n#outerContainer.weather-partly #footer,\n#outerContainer.weather-partly #formButton { background-color: #3f79b3; }\n#outerContainer.weather-partly #dateMain,\n#outerContainer.weather-partly #weatherType { border-color: #3f79b3; }\n\n#outerContainer.weather-sunny #footer,\n#outerContainer.weather-sunny #formButton { background-color: #e39a1c; }\n#outerContainer.weather-sunny #dateMain,\n#outerContainer.weather-sunny #weatherType { border-color: #e39a1c; }\n\n#outerContainer.weather-fog #footer,\n#outerContainer.weather-fog #formButton { background-color: #77828a; }\n#outerContainer.weather-fog #dateMain,\n#outerContainer.weather-fog #weatherType { border-color: #77828a; }\n\n#outerContainer.weather-overcast #footer,\n#outerContainer.weather-overcast #formButton { background-color: #5a646b; }\n#outerContainer.weather-overcast #dateMain,\n#outerContainer.weather-overcast #weatherType { border-color: #5a646b; }\n\n\n/* Tablet: collapse #main to a single weatherOuter column and shrink the search form */\n@media (max-width: 768px) {\n  #main {\n    grid-template-columns: 1fr;\n    grid-template-areas:\n    \"weatherOuter\"\n    ;\n  }\n\n  #sideSpace1,\n  #sideSpace2 {\n    display: none;\n  }\n\n  #spaceForm {\n    grid-template-columns: 1fr 1fr 280px 15px 100px 2fr;\n  }\n\n  /* Stack the weather graphic above the stats so #weatherData no longer\n     clips inside the 2fr column. */\n  #mainMiddle {\n    grid-template-columns: 1fr;\n    grid-template-rows: auto auto auto auto;\n    grid-template-areas:\n    \"spacer1\"\n    \"weatherSection\"\n    \"weatherData\"\n    \"spacer2\"\n    ;\n  }\n\n  /* Lay the four stats out as a 2×2 grid. */\n  #weatherData {\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: auto auto;\n    grid-template-areas:\n    \"block1 block2\"\n    \"block3 block4\"\n    ;\n    gap: 8px;\n    padding: 12px 0;\n  }\n\n  #spaced1,\n  #spaced2,\n  #spaced3,\n  #spaced4,\n  #spaced5 {\n    display: none;\n  }\n}\n\n\n/* Mobile: keep the arrows flanking the content (rather than stranding them\n   above/below), and stack the search form into a single column. */\n@media (max-width: 480px) {\n  /* Fixed narrow gutters so the arrow pair flanks the content and never clips\n     against the viewport edges. */\n  #weatherOuter {\n    grid-template-columns: 44px 1fr 44px;\n  }\n\n  /* Zero the spacer rows so each arrow centres vertically on the content. */\n  #inner1,\n  #inner2 {\n    grid-template-rows: 0fr 1fr 0fr;\n  }\n\n  #arrowLeft,\n  #arrowRight {\n    width: 32px;\n  }\n\n  /* Shrink the graphic/temperature so #weatherUpper's tracks fit inside the\n     narrow single column rather than pushing #mainMiddle past the edge. */\n  #weatherIcon {\n    width: 88px;\n  }\n\n  #tempUpper {\n    font-size: 28px;\n  }\n\n  /* Keep the date on one line so it still reads as a rule. */\n  #dateMain {\n    font-size: 18px;\n    white-space: nowrap;\n  }\n\n  /* Collapse the empty vertical spacer rows that otherwise absorb the height\n     freed by the min-height layout and open large gaps around the card. */\n  #mainTop {\n    grid-template-rows: 0fr 1fr 0fr;\n  }\n\n  #innerMain {\n    grid-template-rows: auto auto auto;\n  }\n\n  #spaceForm {\n    grid-template-columns: 1fr;\n    grid-template-areas:\n    \"formInput\"\n    \"formButton\"\n    ;\n    gap: 10px;\n    padding: 0px 15px;\n  }\n\n  #formSpace1,\n  #formSpace2,\n  #formSpace3,\n  #formSpace4 {\n    display: none;\n  }\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF5LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHFIQUF1QztBQUNuRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsWUFBWSxLQUFLLDBCQUEwQjtBQUMzQztBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DLG1DQUFtQztBQUNuQyxtQ0FBbUM7QUFDbkMsbUNBQW1DO0FBQ25DLG1DQUFtQztBQUNuQyxtQ0FBbUM7QUFDbkMsbUNBQW1DO0FBQ25DLG1DQUFtQzs7QUFFbkM7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQSwrQ0FBK0M7O0FBRS9DO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0EsNENBQTRDOztBQUU1QztBQUNBLDJDQUEyQztBQUMzQztBQUNBLDRDQUE0Qzs7QUFFNUM7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQSw0Q0FBNEM7O0FBRTVDO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0EsOENBQThDOztBQUU5QztBQUNBLDRDQUE0QztBQUM1QztBQUNBLDZDQUE2Qzs7QUFFN0M7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQSwyQ0FBMkM7O0FBRTNDO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0EsZ0RBQWdEOzs7QUFHaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxjQUFjLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLEtBQUssYUFBYSxPQUFPLEtBQUssWUFBWSxjQUFjLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssTUFBTSxLQUFLLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFNBQVMsS0FBSyxNQUFNLEtBQUssYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxTQUFTLEtBQUssWUFBWSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxTQUFTLE1BQU0sTUFBTSxLQUFLLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFNBQVMsTUFBTSxNQUFNLEtBQUssYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxjQUFjLGNBQWMsV0FBVyxPQUFPLEtBQUssYUFBYSxPQUFPLEtBQUssYUFBYSxTQUFTLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsU0FBUyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssYUFBYSxPQUFPLEtBQUssYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFFBQVEsS0FBSyxhQUFhLE9BQU8sS0FBSyxVQUFVLEtBQUssT0FBTyxhQUFhLGFBQWEsYUFBYSxVQUFVLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxRQUFRLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsV0FBVyxPQUFPLEtBQUssYUFBYSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsU0FBUyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssYUFBYSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGVBQWUsS0FBSyxNQUFNLEtBQUssYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxRQUFRLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsUUFBUSxLQUFLLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFNBQVMsS0FBSyxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFFBQVEsS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxRQUFRLEtBQUssYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxRQUFRLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZ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Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1dDQUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCOzs7O0FBSXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUEsU0FBUyxPQUFPOztBQUVoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLEdBQUcsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vc3JjL2RheS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9Sb2JvdG8tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1dlYkZvbnQxJztcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbmJvZHkge1xuICBkaXNwbGF5OiBncmlkO1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1mYW1pbHk6ICdXZWJGb250MSc7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuXG59XG5cbiNvdXRlckNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIG1pbi1oZWlnaHQ6IDExMHZoO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwdmggNzBweCAxZnIgMjBweCAzNXB4IDkwcHggMjB2aDtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgXCJoZWFkZXJcIlxuICBcInNwYWNlMVwiXG4gIFwibWFpblwiXG4gIFwic3BhY2UyXCJcbiAgXCJzcGFjZUZvcm1cIlxuICBcInNwYWNlM1wiXG4gIFwiZm9vdGVyXCJcbiAgO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDQwMG1zIGVhc2U7XG5cbn1cblxuI2hlYWRlciB7XG4gIGdyaWQtYXJlYTogaGVhZGVyO1xuICBib3gtc2hhZG93OiAwcHggNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBcbn1cblxuI3NwYWNlMSB7XG4gIGdyaWQtYXJlYTogc3BhY2UxO1xufVxuXG4jbWFpbiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXJlYTogbWFpbjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMTAwMHB4IDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gIFwic2lkZVNwYWNlMSB3ZWF0aGVyT3V0ZXIgc2lkZVNwYWNlMlwiXG4gIDtcbn1cblxuI3NpZGVTcGFjZTEge1xuICBncmlkLWFyZWE6IHNpZGVTcGFjZTE7XG5cbn1cblxuI3dlYXRoZXJPdXRlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXJlYTogd2VhdGhlck91dGVyO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnIgMWZyO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgXCJpbm5lcjEgaW5uZXJNYWluIGlubmVyMlwiXG4gIDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuI2lubmVyMSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXJlYTogaW5uZXIxO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDNmciAwLjVmciAzZnI7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICBcIi4gdXBwZXJMZWZ0IC5cIlxuICBcIi4gYXJyb3dMZWZ0IC5cIlxuICBcIi4gbG93ZXJMZWZ0IC5cIlxuICA7XG59XG5cbiN1cHBlckxlZnQge1xuICBncmlkLWFyZWE6IHVwcGVyTGVmdDtcblxufVxuXG4jYXJyb3dMZWZ0IHtcbiAgZ3JpZC1hcmVhOiBhcnJvd0xlZnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDY1cHg7XG59XG5cbiNsb3dlckxlZnQge1xuICBncmlkLWFyZWE6IGxvd2VyTGVmdDtcblxufVxuXG4jaW5uZXJNYWluIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNGZyIDAuNWZyO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgXCJtYWluVG9wXCJcbiAgXCJtYWluTWlkZGxlXCJcbiAgXCJtYWluQm90dG9tXCJcbiAgO1xuICBncmlkLWFyZWE6IGlubmVyTWFpbjtcbn1cblxuXG4jbWFpblRvcCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXJlYTogbWFpblRvcDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgM2ZyIDJmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gIFwidXBwZXJTZWN0aW9uIHVwcGVyU2VjdGlvbiB1cHBlclNlY3Rpb25cIlxuICBcIi4gZGF0ZVNlY3Rpb24gLlwiXG4gIFwibG93ZXJTZWN0aW9uIGxvd2VyU2VjdGlvbiBsb3dlclNlY3Rpb25cIlxuICA7XG5cbn1cblxuI3VwcGVyU2VjdGlvbiB7XG4gIGdyaWQtYXJlYTogdXBwZXJTZWN0aW9uO1xuXG59XG5cbiNkYXRlU2VjdGlvbiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXJlYTogZGF0ZVNlY3Rpb247XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDNmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICBcImRhdGVTcGFjZTFcIlxuICBcImRhdGVNYWluXCJcbiAgXCJkYXRlU3BhY2UyXCJcbiAgO1xuICBcbn1cblxuI2RhdGVTcGFjZTEge1xuICBncmlkLWFyZWE6IGRhdGVTcGFjZTE7XG4gIFxufVxuXG4jZGF0ZU1haW4ge1xuICBncmlkLWFyZWE6IGRhdGVNYWluO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDAuNXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgXG4gIGJvcmRlci1yaWdodDogbm9uZTtcbiAgXG4gIGZvbnQtc2l6ZTogMjZweDtcbn1cblxuI2RhdGVTcGFjZTIge1xuICBncmlkLWFyZWE6IGRhdGVTcGFjZTI7XG4gIFxufVxuXG4jbG93ZXJTZWN0aW9uIHtcbiAgZ3JpZC1hcmVhOiBsb3dlclNlY3Rpb247XG5cbn1cblxuXG5cbiNtYWluTWlkZGxlIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZ3JpZC1hcmVhOiBtYWluTWlkZGxlO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA2ZnIgMWZyO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgwLCAxZnIpIG1pbm1heCgwLCA1ZnIpIG1pbm1heCgwLCAxZnIpIG1pbm1heCgwLCAyZnIpIG1pbm1heCgwLCAwLjVmcik7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICBcInNwYWNlcjEgc3BhY2VyMSBzcGFjZXIxIHNwYWNlcjEgc3BhY2VyMVwiXG4gIFwiLiB3ZWF0aGVyU2VjdGlvbiAuIHdlYXRoZXJEYXRhIC5cIlxuICBcInNwYWNlcjIgc3BhY2VyMiBzcGFjZXIyIHNwYWNlcjIgc3BhY2VyMlwiXG4gIDtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCBibGFjaztcbiAgYm94LXNoYWRvdzogMHB4IDJweCAxMXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cblxuI3NwYWNlcjEge1xuICBncmlkLWFyZWE6IHNwYWNlcjE7XG4gIFxufVxuXG4jc3BhY2VyMiB7XG4gIGdyaWQtYXJlYTogc3BhY2VyMjtcblxufVxuXG4jd2VhdGhlclNlY3Rpb24ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDNmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICBcIndlYXRoZXJVcHBlclwiXG4gIFwid2VhdGhlckxvd2VyXCJcbiAgO1xuICBncmlkLWFyZWE6IHdlYXRoZXJTZWN0aW9uO1xuICBcbn1cblxuI3dlYXRoZXJVcHBlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIC8qIFdoaXRlIGNvbWVzIGZyb20gdGhlICNtYWluTWlkZGxlIGNhcmQgc28gdGhlIHJvdW5kZWQgY29ybmVycyBmcmFtZSB3aGl0ZSxcbiAgICAgbm90IGEgaGFyZCBzcXVhcmUgZWRnZSBvdmVyIHRoZSBwYWdlIGdyYWRpZW50LiAqL1xuICBncmlkLWFyZWE6IHdlYXRoZXJVcHBlcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciAyZnIgMC41ZnIgMWZyO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgwLCAxZnIpIG1pbm1heCgwLCA0ZnIpIG1pbm1heCgwLCAxZnIpIG1pbm1heCgwLCAyZnIpIG1pbm1heCgwLCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgXCIuIC4gLiAuIC4gXCJcbiAgXCIuIHdlYXRoZXJJY29uIC4gd2VhdGhlclRlbXBzIC4gXCJcbiAgXCIuIC4gLiAuIC4gXCJcbiAgXCIuIHdlYXRoZXJMb2NhdGlvbiB3ZWF0aGVyTG9jYXRpb24gd2VhdGhlckxvY2F0aW9uIC4gXCJcbiAgO1xufVxuXG4jd2VhdGhlckljb24ge1xuICBncmlkLWFyZWE6IHdlYXRoZXJJY29uO1xuICBqdXN0aWZ5LXNlbGY6IGVuZDtcbiAgd2lkdGg6IDE0MHB4O1xufVxuXG4jd2VhdGhlclRlbXBzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hcmVhOiB3ZWF0aGVyVGVtcHM7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgXCJ0ZW1wVXBwZXJcIlxuICBcInRlbXBMb3dlclwiXG4gIDtcbn1cblxuI3dlYXRoZXJMb2NhdGlvbiB7XG4gIGdyaWQtYXJlYTogd2VhdGhlckxvY2F0aW9uO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuI3RlbXBVcHBlciB7XG4gIGdyaWQtYXJlYTogdGVtcFVwcGVyO1xuICBhbGlnbi1zZWxmOiBlbmQ7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgXG59XG5cbiN0ZW1wTG93ZXIge1xuICBncmlkLWFyZWE6IHRlbXBMb3dlcjtcbiAgXG59XG5cblxuI3dlYXRoZXJMb3dlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICBcIi4gdHlwZVVwcGVyIC5cIlxuICBcIi4gd2VhdGhlclR5cGUgLlwiXG4gIFwiLiB0eXBlTG93ZXIgLlwiXG4gIDtcbiAgZ3JpZC1hcmVhOiB3ZWF0aGVyTG93ZXI7XG59XG5cbiN0eXBlVXBwZXIge1xuICBncmlkLWFyZWE6IHR5cGVVcHBlcjtcbn1cblxuI3dlYXRoZXJUeXBlIHtcbiAgZ3JpZC1hcmVhOiB3ZWF0aGVyVHlwZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbiAgYm9yZGVyLXRvcDogbm9uZTtcbn1cblxuI3R5cGVMb3dlciB7XG4gIGdyaWQtYXJlYTogdHlwZUxvd2VyO1xuXG59XG5cblxuI3dlYXRoZXJEYXRhIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGdyaWQtYXJlYTogd2VhdGhlckRhdGE7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMC41ZnIgM2ZyIDAuNWZyIDNmciAwLjVmciAzZnIgMC41ZnIgM2ZyIDAuNWZyO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gIFwic3BhY2VkMVwiXG4gIFwiYmxvY2sxXCJcbiAgXCJzcGFjZWQyXCJcbiAgXCJibG9jazJcIlxuICBcInNwYWNlZDNcIlxuICBcImJsb2NrM1wiXG4gIFwic3BhY2VkNFwiXG4gIFwiYmxvY2s0XCJcbiAgXCJzcGFjZWQ1XCJcbiAgO1xufVxuXG4jc3BhY2VkMSB7XG4gIGdyaWQtYXJlYTogc3BhY2VkMTtcblxufVxuI2Jsb2NrMSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXJlYTogYmxvY2sxO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICBcImJsb2NrMUxlZnQgYmxvY2sxUmlnaHRcIlxuICA7XG59XG5cbiNibG9jazFMZWZ0IHtcbiAgZ3JpZC1hcmVhOiBibG9jazFMZWZ0O1xuICBqdXN0aWZ5LXNlbGY6IGVuZDtcbiAgcGFkZGluZy1yaWdodDogNXB4OyAgICBcbiAgd2lkdGg6IDM1cHg7XG59XG5cbiNibG9jazFSaWdodCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXJlYTogYmxvY2sxUmlnaHQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gIFwiYmxvY2sxVG9wXCJcbiAgXCJibG9jazFCb3R0b21cIlxuICA7XG59XG5cbiNibG9jazFUb3Age1xuICBncmlkLWFyZWE6IGJsb2NrMVRvcDtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuI2Jsb2NrMUJvdHRvbSB7XG4gIGdyaWQtYXJlYTogYmxvY2sxQm90dG9tO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbiNzcGFjZWQyIHtcbiAgZ3JpZC1hcmVhOiBzcGFjZWQyO1xuICBcbn1cblxuI2Jsb2NrMiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXJlYTogYmxvY2syO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICBcImJsb2NrMkxlZnQgYmxvY2syUmlnaHRcIlxuICA7XG59XG5cbiNibG9jazJMZWZ0IHtcbiAgZ3JpZC1hcmVhOiBibG9jazJMZWZ0O1xuICBqdXN0aWZ5LXNlbGY6IGVuZDtcbiAgcGFkZGluZy1yaWdodDogNXB4OyAgXG4gIHdpZHRoOiAzNXB4O1xuXG59XG5cbiNibG9jazJSaWdodCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXJlYTogYmxvY2syUmlnaHQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gIFwiYmxvY2syVG9wXCJcbiAgXCJibG9jazJCb3R0b21cIlxuICA7XG59XG5cbiNibG9jazJUb3Age1xuICBncmlkLWFyZWE6IGJsb2NrMlRvcDtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuI2Jsb2NrMkJvdHRvbSB7XG4gIGdyaWQtYXJlYTogYmxvY2syQm90dG9tO1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cblxuXG4jc3BhY2VkMyB7XG4gIGdyaWQtYXJlYTogc3BhY2VkMztcblxufVxuXG4jYmxvY2szIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hcmVhOiBibG9jazM7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gIFwiYmxvY2szTGVmdCBibG9jazNSaWdodFwiXG4gIDtcbn1cblxuI2Jsb2NrM0xlZnQge1xuICBncmlkLWFyZWE6IGJsb2NrM0xlZnQ7XG4gIGp1c3RpZnktc2VsZjogZW5kO1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIHdpZHRoOiAzNXB4O1xufVxuXG4jYmxvY2szUmlnaHQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWFyZWE6IGJsb2NrM1JpZ2h0O1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnI7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICBcImJsb2NrM1RvcFwiXG4gIFwiYmxvY2szQm90dG9tXCJcbiAgO1xufVxuXG4jYmxvY2szVG9wIHtcbiAgZ3JpZC1hcmVhOiBibG9jazNUb3A7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBmb250LXNpemU6IDExcHg7XG59XG5cbiNibG9jazNCb3R0b20ge1xuICBncmlkLWFyZWE6IGJsb2NrM0JvdHRvbTtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG5cbiNzcGFjZWQ0IHtcbiAgZ3JpZC1hcmVhOiBzcGFjZWQ0O1xuXG59XG5cbiNibG9jazQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWFyZWE6IGJsb2NrNDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgXCJibG9jazRMZWZ0IGJsb2NrNFJpZ2h0XCJcbiAgO1xufVxuXG4jYmxvY2s0TGVmdCB7XG4gIGdyaWQtYXJlYTogYmxvY2s0TGVmdDtcbiAganVzdGlmeS1zZWxmOiBlbmQ7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgd2lkdGg6IDMwcHg7XG59XG5cbiNibG9jazRSaWdodCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXJlYTogYmxvY2s0UmlnaHQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gIFwiYmxvY2s0VG9wXCJcbiAgXCJibG9jazRCb3R0b21cIlxuICA7XG59XG5cbiNibG9jazRUb3Age1xuICBncmlkLWFyZWE6IGJsb2NrNFRvcDtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuI2Jsb2NrNEJvdHRvbSB7XG4gIGdyaWQtYXJlYTogYmxvY2s0Qm90dG9tO1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbiNzcGFjZWQ1IHtcbiAgZ3JpZC1hcmVhOiBzcGFjZWQ1O1xuXG59XG5cblxuI21haW5Cb3R0b20ge1xuICBncmlkLWFyZWE6IG1haW5Cb3R0b207XG59XG5cblxuI2lubmVyMiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXJlYTogaW5uZXIyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDNmciAwLjVmciAzZnI7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICBcIi4gdXBwZXJSaWdodCAuXCJcbiAgXCIuIGFycm93UmlnaHQgLlwiXG4gIFwiLiBsb3dlclJpZ2h0IC5cIlxuICA7XG59XG5cbiN1cHBlclJpZ2h0IHtcbiAgZ3JpZC1hcmVhOiB1cHBlclJpZ2h0O1xuXG59XG5cbiNhcnJvd1JpZ2h0IHtcbiAgZ3JpZC1hcmVhOiBhcnJvd1JpZ2h0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdpZHRoOiA2NXB4O1xufVxuXG4jbG93ZXJSaWdodCB7XG4gIGdyaWQtYXJlYTogbG93ZXJSaWdodDtcblxufVxuXG4jc2lkZVNwYWNlMiB7XG4gIGdyaWQtYXJlYTogc2lkZVNwYWNlMjtcblxufVxuXG5cbiNzcGFjZTIge1xuICBncmlkLWFyZWE6IHNwYWNlMjtcblxufVxuXG4jc3BhY2VGb3JtIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hcmVhOiBzcGFjZUZvcm07XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciA0NTBweCAxNXB4IDEwMHB4IDJmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gIFwiZm9ybVNwYWNlMSBmb3JtU3BhY2UyIGZvcm1JbnB1dCBmb3JtU3BhY2UzIGZvcm1CdXR0b24gZm9ybVNwYWNlNFwiXG4gIDtcbn1cblxuI2Zvcm1TcGFjZTEge1xuICBncmlkLWFyZWE6IGZvcm1TcGFjZTE7XG5cbn1cbiNmb3JtU3BhY2UyIHtcbiAgZ3JpZC1hcmVhOiBmb3JtU3BhY2UyO1xuXG59XG4jZm9ybUlucHV0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hcmVhOiBmb3JtSW5wdXQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDE4ZnIgMWZyO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgXCIuIGlucHV0SW5uZXIgLlwiXG4gIDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuI2lucHV0SW5uZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWFyZWE6IGlucHV0SW5uZXI7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4jaW5wdXRJbm5lcjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG5cbn1cblxuI2Zvcm1CdXR0b24ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWFyZWE6IGZvcm1CdXR0b247XG4gIGdyaWQtdGVtcGxhdGUtcm93czogNXB4IDFmciA1cHg7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICAnLidcbiAgJ2J1dHRvblRleHQnXG4gICcuJ1xuICA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1qdXN0aWZ5OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4jYnV0dG9uVGV4dCB7XG4gIGdyaWQtYXJlYTogYnV0dG9uVGV4dDtcbn1cblxuI2Zvcm1TcGFjZTMge1xuICBncmlkLWFyZWE6IGZvcm1TcGFjZTM7XG5cbn1cbiNmb3JtU3BhY2U0IHtcbiAgZ3JpZC1hcmVhOiBmb3JtU3BhY2U0O1xuXG59XG5cblxuI3NwYWNlMyB7XG4gIGdyaWQtYXJlYTogc3BhY2UzO1xufVxuXG4jZm9vdGVyIHtcbiAgZ3JpZC1hcmVhOiBmb290ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG59XG5cblxuLyogSG92ZXIgdHJlYXRtZW50cyAobW92ZWQgb3V0IG9mIGluZGV4LmpzIHNvIHRoZXkgbmV2ZXIgcGVyc2lzdCBhcyBpbmxpbmVcbiAgIHN0eWxlcyB0aGF0IHdvdWxkIG92ZXJyaWRlIHRoZSB0aGVtZWQgYWNjZW50KS4gKi9cbiNhcnJvd0xlZnQ6aG92ZXIsXG4jYXJyb3dSaWdodDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgNnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4jZm9ybUJ1dHRvbjpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgNnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwLjkpO1xufVxuXG5cbi8qIFBlci13ZWF0aGVyIHRoZW1pbmcuIGFkanVzdFdlYXRoZXIoKSBpbiBpbmRleENoYW5nZXMuanMgc2V0cyBhXG4gICB3ZWF0aGVyLXsuLi59IGNsYXNzIG9uICNvdXRlckNvbnRhaW5lcjsgdGhlIGNsYXNzIGRyaXZlcyBhIHZlcnRpY2FsIHNreVxuICAgZ3JhZGllbnQgcGx1cyBhIG1hdGNoaW5nIGFjY2VudCBvbiB0aGUgdHdvIHVuZGVybGluZSBydWxlcyAoI2RhdGVNYWluLFxuICAgI3dlYXRoZXJUeXBlKSwgI2Zvb3RlciBhbmQgI2Zvcm1CdXR0b24uIFRoZSB3aGl0ZSBjYXJkcyBzdGF5IHdoaXRlLiAqL1xuI291dGVyQ29udGFpbmVyLndlYXRoZXItbmV1dHJhbCAgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjOGZhM2IwLCAjYzNjZWQ1KTsgfVxuI291dGVyQ29udGFpbmVyLndlYXRoZXItcmFpbiAgICAgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjNDY2MDZlLCAjODE5OWE0KTsgfVxuI291dGVyQ29udGFpbmVyLndlYXRoZXItc25vdyAgICAgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjOGZiMGNjLCAjZGNlOGYyKTsgfVxuI291dGVyQ29udGFpbmVyLndlYXRoZXItaGFpbCAgICAgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjNTY2NTczLCAjOWFhOGI1KTsgfVxuI291dGVyQ29udGFpbmVyLndlYXRoZXItcGFydGx5ICAgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjNWI5MGM0LCAjYWZkMGVhKTsgfVxuI291dGVyQ29udGFpbmVyLndlYXRoZXItc3VubnkgICAgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjNGE5NGRkLCAjY2RlYWZhKTsgfVxuI291dGVyQ29udGFpbmVyLndlYXRoZXItZm9nICAgICAgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjOTdhMWE5LCAjZDJkOGRkKTsgfVxuI291dGVyQ29udGFpbmVyLndlYXRoZXItb3ZlcmNhc3QgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjNmI3NTdkLCAjYTdiMGI3KTsgfVxuXG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1uZXV0cmFsICNmb290ZXIsXG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1uZXV0cmFsICNmb3JtQnV0dG9uIHsgYmFja2dyb3VuZC1jb2xvcjogIzZiNzg4MzsgfVxuI291dGVyQ29udGFpbmVyLndlYXRoZXItbmV1dHJhbCAjZGF0ZU1haW4sXG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1uZXV0cmFsICN3ZWF0aGVyVHlwZSB7IGJvcmRlci1jb2xvcjogIzZiNzg4MzsgfVxuXG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1yYWluICNmb290ZXIsXG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1yYWluICNmb3JtQnV0dG9uIHsgYmFja2dyb3VuZC1jb2xvcjogIzNjNTU2MTsgfVxuI291dGVyQ29udGFpbmVyLndlYXRoZXItcmFpbiAjZGF0ZU1haW4sXG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1yYWluICN3ZWF0aGVyVHlwZSB7IGJvcmRlci1jb2xvcjogIzNjNTU2MTsgfVxuXG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1zbm93ICNmb290ZXIsXG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1zbm93ICNmb3JtQnV0dG9uIHsgYmFja2dyb3VuZC1jb2xvcjogIzVmODJhNjsgfVxuI291dGVyQ29udGFpbmVyLndlYXRoZXItc25vdyAjZGF0ZU1haW4sXG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1zbm93ICN3ZWF0aGVyVHlwZSB7IGJvcmRlci1jb2xvcjogIzVmODJhNjsgfVxuXG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1oYWlsICNmb290ZXIsXG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1oYWlsICNmb3JtQnV0dG9uIHsgYmFja2dyb3VuZC1jb2xvcjogIzQ5NTY2MzsgfVxuI291dGVyQ29udGFpbmVyLndlYXRoZXItaGFpbCAjZGF0ZU1haW4sXG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1oYWlsICN3ZWF0aGVyVHlwZSB7IGJvcmRlci1jb2xvcjogIzQ5NTY2MzsgfVxuXG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1wYXJ0bHkgI2Zvb3RlcixcbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLXBhcnRseSAjZm9ybUJ1dHRvbiB7IGJhY2tncm91bmQtY29sb3I6ICMzZjc5YjM7IH1cbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLXBhcnRseSAjZGF0ZU1haW4sXG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1wYXJ0bHkgI3dlYXRoZXJUeXBlIHsgYm9yZGVyLWNvbG9yOiAjM2Y3OWIzOyB9XG5cbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLXN1bm55ICNmb290ZXIsXG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1zdW5ueSAjZm9ybUJ1dHRvbiB7IGJhY2tncm91bmQtY29sb3I6ICNlMzlhMWM7IH1cbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLXN1bm55ICNkYXRlTWFpbixcbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLXN1bm55ICN3ZWF0aGVyVHlwZSB7IGJvcmRlci1jb2xvcjogI2UzOWExYzsgfVxuXG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1mb2cgI2Zvb3RlcixcbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLWZvZyAjZm9ybUJ1dHRvbiB7IGJhY2tncm91bmQtY29sb3I6ICM3NzgyOGE7IH1cbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLWZvZyAjZGF0ZU1haW4sXG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1mb2cgI3dlYXRoZXJUeXBlIHsgYm9yZGVyLWNvbG9yOiAjNzc4MjhhOyB9XG5cbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLW92ZXJjYXN0ICNmb290ZXIsXG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1vdmVyY2FzdCAjZm9ybUJ1dHRvbiB7IGJhY2tncm91bmQtY29sb3I6ICM1YTY0NmI7IH1cbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLW92ZXJjYXN0ICNkYXRlTWFpbixcbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLW92ZXJjYXN0ICN3ZWF0aGVyVHlwZSB7IGJvcmRlci1jb2xvcjogIzVhNjQ2YjsgfVxuXG5cbi8qIFRhYmxldDogY29sbGFwc2UgI21haW4gdG8gYSBzaW5nbGUgd2VhdGhlck91dGVyIGNvbHVtbiBhbmQgc2hyaW5rIHRoZSBzZWFyY2ggZm9ybSAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICNtYWluIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgIFwid2VhdGhlck91dGVyXCJcbiAgICA7XG4gIH1cblxuICAjc2lkZVNwYWNlMSxcbiAgI3NpZGVTcGFjZTIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAjc3BhY2VGb3JtIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMjgwcHggMTVweCAxMDBweCAyZnI7XG4gIH1cblxuICAvKiBTdGFjayB0aGUgd2VhdGhlciBncmFwaGljIGFib3ZlIHRoZSBzdGF0cyBzbyAjd2VhdGhlckRhdGEgbm8gbG9uZ2VyXG4gICAgIGNsaXBzIGluc2lkZSB0aGUgMmZyIGNvbHVtbi4gKi9cbiAgI21haW5NaWRkbGUge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIGF1dG8gYXV0bztcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgIFwic3BhY2VyMVwiXG4gICAgXCJ3ZWF0aGVyU2VjdGlvblwiXG4gICAgXCJ3ZWF0aGVyRGF0YVwiXG4gICAgXCJzcGFjZXIyXCJcbiAgICA7XG4gIH1cblxuICAvKiBMYXkgdGhlIGZvdXIgc3RhdHMgb3V0IGFzIGEgMsOXMiBncmlkLiAqL1xuICAjd2VhdGhlckRhdGEge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgIFwiYmxvY2sxIGJsb2NrMlwiXG4gICAgXCJibG9jazMgYmxvY2s0XCJcbiAgICA7XG4gICAgZ2FwOiA4cHg7XG4gICAgcGFkZGluZzogMTJweCAwO1xuICB9XG5cbiAgI3NwYWNlZDEsXG4gICNzcGFjZWQyLFxuICAjc3BhY2VkMyxcbiAgI3NwYWNlZDQsXG4gICNzcGFjZWQ1IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cblxuLyogTW9iaWxlOiBrZWVwIHRoZSBhcnJvd3MgZmxhbmtpbmcgdGhlIGNvbnRlbnQgKHJhdGhlciB0aGFuIHN0cmFuZGluZyB0aGVtXG4gICBhYm92ZS9iZWxvdyksIGFuZCBzdGFjayB0aGUgc2VhcmNoIGZvcm0gaW50byBhIHNpbmdsZSBjb2x1bW4uICovXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLyogRml4ZWQgbmFycm93IGd1dHRlcnMgc28gdGhlIGFycm93IHBhaXIgZmxhbmtzIHRoZSBjb250ZW50IGFuZCBuZXZlciBjbGlwc1xuICAgICBhZ2FpbnN0IHRoZSB2aWV3cG9ydCBlZGdlcy4gKi9cbiAgI3dlYXRoZXJPdXRlciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0NHB4IDFmciA0NHB4O1xuICB9XG5cbiAgLyogWmVybyB0aGUgc3BhY2VyIHJvd3Mgc28gZWFjaCBhcnJvdyBjZW50cmVzIHZlcnRpY2FsbHkgb24gdGhlIGNvbnRlbnQuICovXG4gICNpbm5lcjEsXG4gICNpbm5lcjIge1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMGZyIDFmciAwZnI7XG4gIH1cblxuICAjYXJyb3dMZWZ0LFxuICAjYXJyb3dSaWdodCB7XG4gICAgd2lkdGg6IDMycHg7XG4gIH1cblxuICAvKiBTaHJpbmsgdGhlIGdyYXBoaWMvdGVtcGVyYXR1cmUgc28gI3dlYXRoZXJVcHBlcidzIHRyYWNrcyBmaXQgaW5zaWRlIHRoZVxuICAgICBuYXJyb3cgc2luZ2xlIGNvbHVtbiByYXRoZXIgdGhhbiBwdXNoaW5nICNtYWluTWlkZGxlIHBhc3QgdGhlIGVkZ2UuICovXG4gICN3ZWF0aGVySWNvbiB7XG4gICAgd2lkdGg6IDg4cHg7XG4gIH1cblxuICAjdGVtcFVwcGVyIHtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gIH1cblxuICAvKiBLZWVwIHRoZSBkYXRlIG9uIG9uZSBsaW5lIHNvIGl0IHN0aWxsIHJlYWRzIGFzIGEgcnVsZS4gKi9cbiAgI2RhdGVNYWluIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgfVxuXG4gIC8qIENvbGxhcHNlIHRoZSBlbXB0eSB2ZXJ0aWNhbCBzcGFjZXIgcm93cyB0aGF0IG90aGVyd2lzZSBhYnNvcmIgdGhlIGhlaWdodFxuICAgICBmcmVlZCBieSB0aGUgbWluLWhlaWdodCBsYXlvdXQgYW5kIG9wZW4gbGFyZ2UgZ2FwcyBhcm91bmQgdGhlIGNhcmQuICovXG4gICNtYWluVG9wIHtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDBmciAxZnIgMGZyO1xuICB9XG5cbiAgI2lubmVyTWFpbiB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gYXV0bztcbiAgfVxuXG4gICNzcGFjZUZvcm0ge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgXCJmb3JtSW5wdXRcIlxuICAgIFwiZm9ybUJ1dHRvblwiXG4gICAgO1xuICAgIGdhcDogMTBweDtcbiAgICBwYWRkaW5nOiAwcHggMTVweDtcbiAgfVxuXG4gICNmb3JtU3BhY2UxLFxuICAjZm9ybVNwYWNlMixcbiAgI2Zvcm1TcGFjZTMsXG4gICNmb3JtU3BhY2U0IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLDRDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLDBCQUEwQjs7QUFFNUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLHFEQUFxRDtFQUNyRDs7Ozs7Ozs7RUFRQTtFQUNBLGlDQUFpQzs7QUFFbkM7O0FBRUE7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QUMxQztJQUNFLDhCQUE4QjtJQUM5Qiw2QkFBNkI7SUFDN0I7OztJQUdBO0lBQ0EsUUFBUTtJQUNSLGVBQWU7RUFDakI7O0VBRUE7Ozs7O0lBS0UsYUFBYTtFQUNmO0FBQ0Y7OztBQUdBO2tFQUNrRTtBQUNsRTtFQUNFO2tDQUNnQztFQUNoQztJQUNFLG9DQUFvQztFQUN0Qzs7RUFFQSwwRUFBMEU7RUFDMUU7O0lBRUUsK0JBQStCO0VBQ2pDOztFQUVBOztJQUVFLFdBQVc7RUFDYjs7RUFFQTswRUFDd0U7RUFDeEU7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBLDJEQUEyRDtFQUMzRDtJQUNFLGVBQWU7SUFDZixtQkFBbUI7RUFDckI7O0VBRUE7MEVBQ3dFO0VBQ3hFO0lBQ0UsK0JBQStCO0VBQ2pDOztFQUVBO0lBQ0Usa0NBQWtDO0VBQ3BDOztFQUVBO0lBQ0UsMEJBQTBCO0lBQzFCOzs7SUFHQTtJQUNBLFNBQVM7SUFDVCxpQkFBaUI7RUFDbkI7O0VBRUE7Ozs7SUFJRSxhQUFhO0VBQ2Y7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnV2ViRm9udDEnO1xcbiAgc3JjOiB1cmwoJy4vUm9ib3RvLVJlZ3VsYXIudHRmJyk7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIG1hcmdpbjogMHB4O1xcbiAgZm9udC1mYW1pbHk6ICdXZWJGb250MSc7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG5cXG59XFxuXFxuI291dGVyQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBtaW4taGVpZ2h0OiAxMTB2aDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTB2aCA3MHB4IDFmciAyMHB4IDM1cHggOTBweCAyMHZoO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gIFxcXCJoZWFkZXJcXFwiXFxuICBcXFwic3BhY2UxXFxcIlxcbiAgXFxcIm1haW5cXFwiXFxuICBcXFwic3BhY2UyXFxcIlxcbiAgXFxcInNwYWNlRm9ybVxcXCJcXG4gIFxcXCJzcGFjZTNcXFwiXFxuICBcXFwiZm9vdGVyXFxcIlxcbiAgO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCA0MDBtcyBlYXNlO1xcblxcbn1cXG5cXG4jaGVhZGVyIHtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIFxcbn1cXG5cXG4jc3BhY2UxIHtcXG4gIGdyaWQtYXJlYTogc3BhY2UxO1xcbn1cXG5cXG4jbWFpbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMTAwMHB4IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgXFxcInNpZGVTcGFjZTEgd2VhdGhlck91dGVyIHNpZGVTcGFjZTJcXFwiXFxuICA7XFxufVxcblxcbiNzaWRlU3BhY2UxIHtcXG4gIGdyaWQtYXJlYTogc2lkZVNwYWNlMTtcXG5cXG59XFxuXFxuI3dlYXRoZXJPdXRlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hcmVhOiB3ZWF0aGVyT3V0ZXI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICBcXFwiaW5uZXIxIGlubmVyTWFpbiBpbm5lcjJcXFwiXFxuICA7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4jaW5uZXIxIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWFyZWE6IGlubmVyMTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogM2ZyIDAuNWZyIDNmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gIFxcXCIuIHVwcGVyTGVmdCAuXFxcIlxcbiAgXFxcIi4gYXJyb3dMZWZ0IC5cXFwiXFxuICBcXFwiLiBsb3dlckxlZnQgLlxcXCJcXG4gIDtcXG59XFxuXFxuI3VwcGVyTGVmdCB7XFxuICBncmlkLWFyZWE6IHVwcGVyTGVmdDtcXG5cXG59XFxuXFxuI2Fycm93TGVmdCB7XFxuICBncmlkLWFyZWE6IGFycm93TGVmdDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdpZHRoOiA2NXB4O1xcbn1cXG5cXG4jbG93ZXJMZWZ0IHtcXG4gIGdyaWQtYXJlYTogbG93ZXJMZWZ0O1xcblxcbn1cXG5cXG4jaW5uZXJNYWluIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA0ZnIgMC41ZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gIFxcXCJtYWluVG9wXFxcIlxcbiAgXFxcIm1haW5NaWRkbGVcXFwiXFxuICBcXFwibWFpbkJvdHRvbVxcXCJcXG4gIDtcXG4gIGdyaWQtYXJlYTogaW5uZXJNYWluO1xcbn1cXG5cXG5cXG4jbWFpblRvcCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hcmVhOiBtYWluVG9wO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDNmciAyZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gIFxcXCJ1cHBlclNlY3Rpb24gdXBwZXJTZWN0aW9uIHVwcGVyU2VjdGlvblxcXCJcXG4gIFxcXCIuIGRhdGVTZWN0aW9uIC5cXFwiXFxuICBcXFwibG93ZXJTZWN0aW9uIGxvd2VyU2VjdGlvbiBsb3dlclNlY3Rpb25cXFwiXFxuICA7XFxuXFxufVxcblxcbiN1cHBlclNlY3Rpb24ge1xcbiAgZ3JpZC1hcmVhOiB1cHBlclNlY3Rpb247XFxuXFxufVxcblxcbiNkYXRlU2VjdGlvbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hcmVhOiBkYXRlU2VjdGlvbjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDNmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gIFxcXCJkYXRlU3BhY2UxXFxcIlxcbiAgXFxcImRhdGVNYWluXFxcIlxcbiAgXFxcImRhdGVTcGFjZTJcXFwiXFxuICA7XFxuICBcXG59XFxuXFxuI2RhdGVTcGFjZTEge1xcbiAgZ3JpZC1hcmVhOiBkYXRlU3BhY2UxO1xcbiAgXFxufVxcblxcbiNkYXRlTWFpbiB7XFxuICBncmlkLWFyZWE6IGRhdGVNYWluO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDAuNXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICBcXG4gIGJvcmRlci1yaWdodDogbm9uZTtcXG4gIFxcbiAgZm9udC1zaXplOiAyNnB4O1xcbn1cXG5cXG4jZGF0ZVNwYWNlMiB7XFxuICBncmlkLWFyZWE6IGRhdGVTcGFjZTI7XFxuICBcXG59XFxuXFxuI2xvd2VyU2VjdGlvbiB7XFxuICBncmlkLWFyZWE6IGxvd2VyU2VjdGlvbjtcXG5cXG59XFxuXFxuXFxuXFxuI21haW5NaWRkbGUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgZ3JpZC1hcmVhOiBtYWluTWlkZGxlO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNmZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDAsIDFmcikgbWlubWF4KDAsIDVmcikgbWlubWF4KDAsIDFmcikgbWlubWF4KDAsIDJmcikgbWlubWF4KDAsIDAuNWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgXFxcInNwYWNlcjEgc3BhY2VyMSBzcGFjZXIxIHNwYWNlcjEgc3BhY2VyMVxcXCJcXG4gIFxcXCIuIHdlYXRoZXJTZWN0aW9uIC4gd2VhdGhlckRhdGEgLlxcXCJcXG4gIFxcXCJzcGFjZXIyIHNwYWNlcjIgc3BhY2VyMiBzcGFjZXIyIHNwYWNlcjJcXFwiXFxuICA7XFxuICBib3JkZXI6IDAuNXB4IHNvbGlkIGJsYWNrO1xcbiAgYm94LXNoYWRvdzogMHB4IDJweCAxMXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG59XFxuXFxuI3NwYWNlcjEge1xcbiAgZ3JpZC1hcmVhOiBzcGFjZXIxO1xcbiAgXFxufVxcblxcbiNzcGFjZXIyIHtcXG4gIGdyaWQtYXJlYTogc3BhY2VyMjtcXG5cXG59XFxuXFxuI3dlYXRoZXJTZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDNmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gIFxcXCJ3ZWF0aGVyVXBwZXJcXFwiXFxuICBcXFwid2VhdGhlckxvd2VyXFxcIlxcbiAgO1xcbiAgZ3JpZC1hcmVhOiB3ZWF0aGVyU2VjdGlvbjtcXG4gIFxcbn1cXG5cXG4jd2VhdGhlclVwcGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICAvKiBXaGl0ZSBjb21lcyBmcm9tIHRoZSAjbWFpbk1pZGRsZSBjYXJkIHNvIHRoZSByb3VuZGVkIGNvcm5lcnMgZnJhbWUgd2hpdGUsXFxuICAgICBub3QgYSBoYXJkIHNxdWFyZSBlZGdlIG92ZXIgdGhlIHBhZ2UgZ3JhZGllbnQuICovXFxuICBncmlkLWFyZWE6IHdlYXRoZXJVcHBlcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMC41ZnIgMmZyIDAuNWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDAsIDFmcikgbWlubWF4KDAsIDRmcikgbWlubWF4KDAsIDFmcikgbWlubWF4KDAsIDJmcikgbWlubWF4KDAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gIFxcXCIuIC4gLiAuIC4gXFxcIlxcbiAgXFxcIi4gd2VhdGhlckljb24gLiB3ZWF0aGVyVGVtcHMgLiBcXFwiXFxuICBcXFwiLiAuIC4gLiAuIFxcXCJcXG4gIFxcXCIuIHdlYXRoZXJMb2NhdGlvbiB3ZWF0aGVyTG9jYXRpb24gd2VhdGhlckxvY2F0aW9uIC4gXFxcIlxcbiAgO1xcbn1cXG5cXG4jd2VhdGhlckljb24ge1xcbiAgZ3JpZC1hcmVhOiB3ZWF0aGVySWNvbjtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgd2lkdGg6IDE0MHB4O1xcbn1cXG5cXG4jd2VhdGhlclRlbXBzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWFyZWE6IHdlYXRoZXJUZW1wcztcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICBcXFwidGVtcFVwcGVyXFxcIlxcbiAgXFxcInRlbXBMb3dlclxcXCJcXG4gIDtcXG59XFxuXFxuI3dlYXRoZXJMb2NhdGlvbiB7XFxuICBncmlkLWFyZWE6IHdlYXRoZXJMb2NhdGlvbjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuI3RlbXBVcHBlciB7XFxuICBncmlkLWFyZWE6IHRlbXBVcHBlcjtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG4gIGZvbnQtc2l6ZTogMzZweDtcXG4gIFxcbn1cXG5cXG4jdGVtcExvd2VyIHtcXG4gIGdyaWQtYXJlYTogdGVtcExvd2VyO1xcbiAgXFxufVxcblxcblxcbiN3ZWF0aGVyTG93ZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICBcXFwiLiB0eXBlVXBwZXIgLlxcXCJcXG4gIFxcXCIuIHdlYXRoZXJUeXBlIC5cXFwiXFxuICBcXFwiLiB0eXBlTG93ZXIgLlxcXCJcXG4gIDtcXG4gIGdyaWQtYXJlYTogd2VhdGhlckxvd2VyO1xcbn1cXG5cXG4jdHlwZVVwcGVyIHtcXG4gIGdyaWQtYXJlYTogdHlwZVVwcGVyO1xcbn1cXG5cXG4jd2VhdGhlclR5cGUge1xcbiAgZ3JpZC1hcmVhOiB3ZWF0aGVyVHlwZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItbGVmdDogbm9uZTtcXG4gIGJvcmRlci1yaWdodDogbm9uZTtcXG4gIGJvcmRlci10b3A6IG5vbmU7XFxufVxcblxcbiN0eXBlTG93ZXIge1xcbiAgZ3JpZC1hcmVhOiB0eXBlTG93ZXI7XFxuXFxufVxcblxcblxcbiN3ZWF0aGVyRGF0YSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBncmlkLWFyZWE6IHdlYXRoZXJEYXRhO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciAzZnIgMC41ZnIgM2ZyIDAuNWZyIDNmciAwLjVmciAzZnIgMC41ZnI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgXFxcInNwYWNlZDFcXFwiXFxuICBcXFwiYmxvY2sxXFxcIlxcbiAgXFxcInNwYWNlZDJcXFwiXFxuICBcXFwiYmxvY2syXFxcIlxcbiAgXFxcInNwYWNlZDNcXFwiXFxuICBcXFwiYmxvY2szXFxcIlxcbiAgXFxcInNwYWNlZDRcXFwiXFxuICBcXFwiYmxvY2s0XFxcIlxcbiAgXFxcInNwYWNlZDVcXFwiXFxuICA7XFxufVxcblxcbiNzcGFjZWQxIHtcXG4gIGdyaWQtYXJlYTogc3BhY2VkMTtcXG5cXG59XFxuI2Jsb2NrMSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hcmVhOiBibG9jazE7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gIFxcXCJibG9jazFMZWZ0IGJsb2NrMVJpZ2h0XFxcIlxcbiAgO1xcbn1cXG5cXG4jYmxvY2sxTGVmdCB7XFxuICBncmlkLWFyZWE6IGJsb2NrMUxlZnQ7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gIHBhZGRpbmctcmlnaHQ6IDVweDsgICAgXFxuICB3aWR0aDogMzVweDtcXG59XFxuXFxuI2Jsb2NrMVJpZ2h0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWFyZWE6IGJsb2NrMVJpZ2h0O1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICBcXFwiYmxvY2sxVG9wXFxcIlxcbiAgXFxcImJsb2NrMUJvdHRvbVxcXCJcXG4gIDtcXG59XFxuXFxuI2Jsb2NrMVRvcCB7XFxuICBncmlkLWFyZWE6IGJsb2NrMVRvcDtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG4jYmxvY2sxQm90dG9tIHtcXG4gIGdyaWQtYXJlYTogYmxvY2sxQm90dG9tO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4jc3BhY2VkMiB7XFxuICBncmlkLWFyZWE6IHNwYWNlZDI7XFxuICBcXG59XFxuXFxuI2Jsb2NrMiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hcmVhOiBibG9jazI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gIFxcXCJibG9jazJMZWZ0IGJsb2NrMlJpZ2h0XFxcIlxcbiAgO1xcbn1cXG5cXG4jYmxvY2syTGVmdCB7XFxuICBncmlkLWFyZWE6IGJsb2NrMkxlZnQ7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gIHBhZGRpbmctcmlnaHQ6IDVweDsgIFxcbiAgd2lkdGg6IDM1cHg7XFxuXFxufVxcblxcbiNibG9jazJSaWdodCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hcmVhOiBibG9jazJSaWdodDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgXFxcImJsb2NrMlRvcFxcXCJcXG4gIFxcXCJibG9jazJCb3R0b21cXFwiXFxuICA7XFxufVxcblxcbiNibG9jazJUb3Age1xcbiAgZ3JpZC1hcmVhOiBibG9jazJUb3A7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gIGZvbnQtc2l6ZTogMTFweDtcXG59XFxuXFxuI2Jsb2NrMkJvdHRvbSB7XFxuICBncmlkLWFyZWE6IGJsb2NrMkJvdHRvbTtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuXFxuXFxuI3NwYWNlZDMge1xcbiAgZ3JpZC1hcmVhOiBzcGFjZWQzO1xcblxcbn1cXG5cXG4jYmxvY2szIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWFyZWE6IGJsb2NrMztcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgXFxcImJsb2NrM0xlZnQgYmxvY2szUmlnaHRcXFwiXFxuICA7XFxufVxcblxcbiNibG9jazNMZWZ0IHtcXG4gIGdyaWQtYXJlYTogYmxvY2szTGVmdDtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgcGFkZGluZy1yaWdodDogNXB4O1xcbiAgd2lkdGg6IDM1cHg7XFxufVxcblxcbiNibG9jazNSaWdodCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hcmVhOiBibG9jazNSaWdodDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgXFxcImJsb2NrM1RvcFxcXCJcXG4gIFxcXCJibG9jazNCb3R0b21cXFwiXFxuICA7XFxufVxcblxcbiNibG9jazNUb3Age1xcbiAgZ3JpZC1hcmVhOiBibG9jazNUb3A7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gIGZvbnQtc2l6ZTogMTFweDtcXG59XFxuXFxuI2Jsb2NrM0JvdHRvbSB7XFxuICBncmlkLWFyZWE6IGJsb2NrM0JvdHRvbTtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuXFxuI3NwYWNlZDQge1xcbiAgZ3JpZC1hcmVhOiBzcGFjZWQ0O1xcblxcbn1cXG5cXG4jYmxvY2s0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWFyZWE6IGJsb2NrNDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgXFxcImJsb2NrNExlZnQgYmxvY2s0UmlnaHRcXFwiXFxuICA7XFxufVxcblxcbiNibG9jazRMZWZ0IHtcXG4gIGdyaWQtYXJlYTogYmxvY2s0TGVmdDtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgcGFkZGluZy1yaWdodDogOHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxufVxcblxcbiNibG9jazRSaWdodCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hcmVhOiBibG9jazRSaWdodDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgXFxcImJsb2NrNFRvcFxcXCJcXG4gIFxcXCJibG9jazRCb3R0b21cXFwiXFxuICA7XFxufVxcblxcbiNibG9jazRUb3Age1xcbiAgZ3JpZC1hcmVhOiBibG9jazRUb3A7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gIGZvbnQtc2l6ZTogMTFweDtcXG59XFxuXFxuI2Jsb2NrNEJvdHRvbSB7XFxuICBncmlkLWFyZWE6IGJsb2NrNEJvdHRvbTtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuXFxuI3NwYWNlZDUge1xcbiAgZ3JpZC1hcmVhOiBzcGFjZWQ1O1xcblxcbn1cXG5cXG5cXG4jbWFpbkJvdHRvbSB7XFxuICBncmlkLWFyZWE6IG1haW5Cb3R0b207XFxufVxcblxcblxcbiNpbm5lcjIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXJlYTogaW5uZXIyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzZnIgMC41ZnIgM2ZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgXFxcIi4gdXBwZXJSaWdodCAuXFxcIlxcbiAgXFxcIi4gYXJyb3dSaWdodCAuXFxcIlxcbiAgXFxcIi4gbG93ZXJSaWdodCAuXFxcIlxcbiAgO1xcbn1cXG5cXG4jdXBwZXJSaWdodCB7XFxuICBncmlkLWFyZWE6IHVwcGVyUmlnaHQ7XFxuXFxufVxcblxcbiNhcnJvd1JpZ2h0IHtcXG4gIGdyaWQtYXJlYTogYXJyb3dSaWdodDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdpZHRoOiA2NXB4O1xcbn1cXG5cXG4jbG93ZXJSaWdodCB7XFxuICBncmlkLWFyZWE6IGxvd2VyUmlnaHQ7XFxuXFxufVxcblxcbiNzaWRlU3BhY2UyIHtcXG4gIGdyaWQtYXJlYTogc2lkZVNwYWNlMjtcXG5cXG59XFxuXFxuXFxuI3NwYWNlMiB7XFxuICBncmlkLWFyZWE6IHNwYWNlMjtcXG5cXG59XFxuXFxuI3NwYWNlRm9ybSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hcmVhOiBzcGFjZUZvcm07XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgNDUwcHggMTVweCAxMDBweCAyZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gIFxcXCJmb3JtU3BhY2UxIGZvcm1TcGFjZTIgZm9ybUlucHV0IGZvcm1TcGFjZTMgZm9ybUJ1dHRvbiBmb3JtU3BhY2U0XFxcIlxcbiAgO1xcbn1cXG5cXG4jZm9ybVNwYWNlMSB7XFxuICBncmlkLWFyZWE6IGZvcm1TcGFjZTE7XFxuXFxufVxcbiNmb3JtU3BhY2UyIHtcXG4gIGdyaWQtYXJlYTogZm9ybVNwYWNlMjtcXG5cXG59XFxuI2Zvcm1JbnB1dCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hcmVhOiBmb3JtSW5wdXQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxOGZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgXFxcIi4gaW5wdXRJbm5lciAuXFxcIlxcbiAgO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbiNpbnB1dElubmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWFyZWE6IGlucHV0SW5uZXI7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbiNpbnB1dElubmVyOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuXFxufVxcblxcbiNmb3JtQnV0dG9uIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWFyZWE6IGZvcm1CdXR0b247XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDVweCAxZnIgNXB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAnLidcXG4gICdidXR0b25UZXh0J1xcbiAgJy4nXFxuICA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LWp1c3RpZnk6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuI2J1dHRvblRleHQge1xcbiAgZ3JpZC1hcmVhOiBidXR0b25UZXh0O1xcbn1cXG5cXG4jZm9ybVNwYWNlMyB7XFxuICBncmlkLWFyZWE6IGZvcm1TcGFjZTM7XFxuXFxufVxcbiNmb3JtU3BhY2U0IHtcXG4gIGdyaWQtYXJlYTogZm9ybVNwYWNlNDtcXG5cXG59XFxuXFxuXFxuI3NwYWNlMyB7XFxuICBncmlkLWFyZWE6IHNwYWNlMztcXG59XFxuXFxuI2Zvb3RlciB7XFxuICBncmlkLWFyZWE6IGZvb3RlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxufVxcblxcblxcbi8qIEhvdmVyIHRyZWF0bWVudHMgKG1vdmVkIG91dCBvZiBpbmRleC5qcyBzbyB0aGV5IG5ldmVyIHBlcnNpc3QgYXMgaW5saW5lXFxuICAgc3R5bGVzIHRoYXQgd291bGQgb3ZlcnJpZGUgdGhlIHRoZW1lZCBhY2NlbnQpLiAqL1xcbiNhcnJvd0xlZnQ6aG92ZXIsXFxuI2Fycm93UmlnaHQ6aG92ZXIge1xcbiAgYm94LXNoYWRvdzogMCA2cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4jZm9ybUJ1dHRvbjpob3ZlciB7XFxuICBib3gtc2hhZG93OiAwIDZweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOSk7XFxufVxcblxcblxcbi8qIFBlci13ZWF0aGVyIHRoZW1pbmcuIGFkanVzdFdlYXRoZXIoKSBpbiBpbmRleENoYW5nZXMuanMgc2V0cyBhXFxuICAgd2VhdGhlci17Li4ufSBjbGFzcyBvbiAjb3V0ZXJDb250YWluZXI7IHRoZSBjbGFzcyBkcml2ZXMgYSB2ZXJ0aWNhbCBza3lcXG4gICBncmFkaWVudCBwbHVzIGEgbWF0Y2hpbmcgYWNjZW50IG9uIHRoZSB0d28gdW5kZXJsaW5lIHJ1bGVzICgjZGF0ZU1haW4sXFxuICAgI3dlYXRoZXJUeXBlKSwgI2Zvb3RlciBhbmQgI2Zvcm1CdXR0b24uIFRoZSB3aGl0ZSBjYXJkcyBzdGF5IHdoaXRlLiAqL1xcbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLW5ldXRyYWwgIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzhmYTNiMCwgI2MzY2VkNSk7IH1cXG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1yYWluICAgICB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICM0NjYwNmUsICM4MTk5YTQpOyB9XFxuI291dGVyQ29udGFpbmVyLndlYXRoZXItc25vdyAgICAgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjOGZiMGNjLCAjZGNlOGYyKTsgfVxcbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLWhhaWwgICAgIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzU2NjU3MywgIzlhYThiNSk7IH1cXG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1wYXJ0bHkgICB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICM1YjkwYzQsICNhZmQwZWEpOyB9XFxuI291dGVyQ29udGFpbmVyLndlYXRoZXItc3VubnkgICAgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjNGE5NGRkLCAjY2RlYWZhKTsgfVxcbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLWZvZyAgICAgIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzk3YTFhOSwgI2QyZDhkZCk7IH1cXG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1vdmVyY2FzdCB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICM2Yjc1N2QsICNhN2IwYjcpOyB9XFxuXFxuI291dGVyQ29udGFpbmVyLndlYXRoZXItbmV1dHJhbCAjZm9vdGVyLFxcbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLW5ldXRyYWwgI2Zvcm1CdXR0b24geyBiYWNrZ3JvdW5kLWNvbG9yOiAjNmI3ODgzOyB9XFxuI291dGVyQ29udGFpbmVyLndlYXRoZXItbmV1dHJhbCAjZGF0ZU1haW4sXFxuI291dGVyQ29udGFpbmVyLndlYXRoZXItbmV1dHJhbCAjd2VhdGhlclR5cGUgeyBib3JkZXItY29sb3I6ICM2Yjc4ODM7IH1cXG5cXG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1yYWluICNmb290ZXIsXFxuI291dGVyQ29udGFpbmVyLndlYXRoZXItcmFpbiAjZm9ybUJ1dHRvbiB7IGJhY2tncm91bmQtY29sb3I6ICMzYzU1NjE7IH1cXG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1yYWluICNkYXRlTWFpbixcXG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1yYWluICN3ZWF0aGVyVHlwZSB7IGJvcmRlci1jb2xvcjogIzNjNTU2MTsgfVxcblxcbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLXNub3cgI2Zvb3RlcixcXG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1zbm93ICNmb3JtQnV0dG9uIHsgYmFja2dyb3VuZC1jb2xvcjogIzVmODJhNjsgfVxcbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLXNub3cgI2RhdGVNYWluLFxcbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLXNub3cgI3dlYXRoZXJUeXBlIHsgYm9yZGVyLWNvbG9yOiAjNWY4MmE2OyB9XFxuXFxuI291dGVyQ29udGFpbmVyLndlYXRoZXItaGFpbCAjZm9vdGVyLFxcbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLWhhaWwgI2Zvcm1CdXR0b24geyBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk1NjYzOyB9XFxuI291dGVyQ29udGFpbmVyLndlYXRoZXItaGFpbCAjZGF0ZU1haW4sXFxuI291dGVyQ29udGFpbmVyLndlYXRoZXItaGFpbCAjd2VhdGhlclR5cGUgeyBib3JkZXItY29sb3I6ICM0OTU2NjM7IH1cXG5cXG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1wYXJ0bHkgI2Zvb3RlcixcXG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1wYXJ0bHkgI2Zvcm1CdXR0b24geyBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y3OWIzOyB9XFxuI291dGVyQ29udGFpbmVyLndlYXRoZXItcGFydGx5ICNkYXRlTWFpbixcXG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1wYXJ0bHkgI3dlYXRoZXJUeXBlIHsgYm9yZGVyLWNvbG9yOiAjM2Y3OWIzOyB9XFxuXFxuI291dGVyQ29udGFpbmVyLndlYXRoZXItc3VubnkgI2Zvb3RlcixcXG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1zdW5ueSAjZm9ybUJ1dHRvbiB7IGJhY2tncm91bmQtY29sb3I6ICNlMzlhMWM7IH1cXG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1zdW5ueSAjZGF0ZU1haW4sXFxuI291dGVyQ29udGFpbmVyLndlYXRoZXItc3VubnkgI3dlYXRoZXJUeXBlIHsgYm9yZGVyLWNvbG9yOiAjZTM5YTFjOyB9XFxuXFxuI291dGVyQ29udGFpbmVyLndlYXRoZXItZm9nICNmb290ZXIsXFxuI291dGVyQ29udGFpbmVyLndlYXRoZXItZm9nICNmb3JtQnV0dG9uIHsgYmFja2dyb3VuZC1jb2xvcjogIzc3ODI4YTsgfVxcbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLWZvZyAjZGF0ZU1haW4sXFxuI291dGVyQ29udGFpbmVyLndlYXRoZXItZm9nICN3ZWF0aGVyVHlwZSB7IGJvcmRlci1jb2xvcjogIzc3ODI4YTsgfVxcblxcbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLW92ZXJjYXN0ICNmb290ZXIsXFxuI291dGVyQ29udGFpbmVyLndlYXRoZXItb3ZlcmNhc3QgI2Zvcm1CdXR0b24geyBiYWNrZ3JvdW5kLWNvbG9yOiAjNWE2NDZiOyB9XFxuI291dGVyQ29udGFpbmVyLndlYXRoZXItb3ZlcmNhc3QgI2RhdGVNYWluLFxcbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLW92ZXJjYXN0ICN3ZWF0aGVyVHlwZSB7IGJvcmRlci1jb2xvcjogIzVhNjQ2YjsgfVxcblxcblxcbi8qIFRhYmxldDogY29sbGFwc2UgI21haW4gdG8gYSBzaW5nbGUgd2VhdGhlck91dGVyIGNvbHVtbiBhbmQgc2hyaW5rIHRoZSBzZWFyY2ggZm9ybSAqL1xcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgI21haW4ge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcIndlYXRoZXJPdXRlclxcXCJcXG4gICAgO1xcbiAgfVxcblxcbiAgI3NpZGVTcGFjZTEsXFxuICAjc2lkZVNwYWNlMiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAjc3BhY2VGb3JtIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDI4MHB4IDE1cHggMTAwcHggMmZyO1xcbiAgfVxcblxcbiAgLyogU3RhY2sgdGhlIHdlYXRoZXIgZ3JhcGhpYyBhYm92ZSB0aGUgc3RhdHMgc28gI3dlYXRoZXJEYXRhIG5vIGxvbmdlclxcbiAgICAgY2xpcHMgaW5zaWRlIHRoZSAyZnIgY29sdW1uLiAqL1xcbiAgI21haW5NaWRkbGUge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gYXV0byBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwic3BhY2VyMVxcXCJcXG4gICAgXFxcIndlYXRoZXJTZWN0aW9uXFxcIlxcbiAgICBcXFwid2VhdGhlckRhdGFcXFwiXFxuICAgIFxcXCJzcGFjZXIyXFxcIlxcbiAgICA7XFxuICB9XFxuXFxuICAvKiBMYXkgdGhlIGZvdXIgc3RhdHMgb3V0IGFzIGEgMsOXMiBncmlkLiAqL1xcbiAgI3dlYXRoZXJEYXRhIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcImJsb2NrMSBibG9jazJcXFwiXFxuICAgIFxcXCJibG9jazMgYmxvY2s0XFxcIlxcbiAgICA7XFxuICAgIGdhcDogOHB4O1xcbiAgICBwYWRkaW5nOiAxMnB4IDA7XFxuICB9XFxuXFxuICAjc3BhY2VkMSxcXG4gICNzcGFjZWQyLFxcbiAgI3NwYWNlZDMsXFxuICAjc3BhY2VkNCxcXG4gICNzcGFjZWQ1IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG59XFxuXFxuXFxuLyogTW9iaWxlOiBrZWVwIHRoZSBhcnJvd3MgZmxhbmtpbmcgdGhlIGNvbnRlbnQgKHJhdGhlciB0aGFuIHN0cmFuZGluZyB0aGVtXFxuICAgYWJvdmUvYmVsb3cpLCBhbmQgc3RhY2sgdGhlIHNlYXJjaCBmb3JtIGludG8gYSBzaW5nbGUgY29sdW1uLiAqL1xcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xcbiAgLyogRml4ZWQgbmFycm93IGd1dHRlcnMgc28gdGhlIGFycm93IHBhaXIgZmxhbmtzIHRoZSBjb250ZW50IGFuZCBuZXZlciBjbGlwc1xcbiAgICAgYWdhaW5zdCB0aGUgdmlld3BvcnQgZWRnZXMuICovXFxuICAjd2VhdGhlck91dGVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0NHB4IDFmciA0NHB4O1xcbiAgfVxcblxcbiAgLyogWmVybyB0aGUgc3BhY2VyIHJvd3Mgc28gZWFjaCBhcnJvdyBjZW50cmVzIHZlcnRpY2FsbHkgb24gdGhlIGNvbnRlbnQuICovXFxuICAjaW5uZXIxLFxcbiAgI2lubmVyMiB7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMGZyIDFmciAwZnI7XFxuICB9XFxuXFxuICAjYXJyb3dMZWZ0LFxcbiAgI2Fycm93UmlnaHQge1xcbiAgICB3aWR0aDogMzJweDtcXG4gIH1cXG5cXG4gIC8qIFNocmluayB0aGUgZ3JhcGhpYy90ZW1wZXJhdHVyZSBzbyAjd2VhdGhlclVwcGVyJ3MgdHJhY2tzIGZpdCBpbnNpZGUgdGhlXFxuICAgICBuYXJyb3cgc2luZ2xlIGNvbHVtbiByYXRoZXIgdGhhbiBwdXNoaW5nICNtYWluTWlkZGxlIHBhc3QgdGhlIGVkZ2UuICovXFxuICAjd2VhdGhlckljb24ge1xcbiAgICB3aWR0aDogODhweDtcXG4gIH1cXG5cXG4gICN0ZW1wVXBwZXIge1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICB9XFxuXFxuICAvKiBLZWVwIHRoZSBkYXRlIG9uIG9uZSBsaW5lIHNvIGl0IHN0aWxsIHJlYWRzIGFzIGEgcnVsZS4gKi9cXG4gICNkYXRlTWFpbiB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIH1cXG5cXG4gIC8qIENvbGxhcHNlIHRoZSBlbXB0eSB2ZXJ0aWNhbCBzcGFjZXIgcm93cyB0aGF0IG90aGVyd2lzZSBhYnNvcmIgdGhlIGhlaWdodFxcbiAgICAgZnJlZWQgYnkgdGhlIG1pbi1oZWlnaHQgbGF5b3V0IGFuZCBvcGVuIGxhcmdlIGdhcHMgYXJvdW5kIHRoZSBjYXJkLiAqL1xcbiAgI21haW5Ub3Age1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDBmciAxZnIgMGZyO1xcbiAgfVxcblxcbiAgI2lubmVyTWFpbiB7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIGF1dG87XFxuICB9XFxuXFxuICAjc3BhY2VGb3JtIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJmb3JtSW5wdXRcXFwiXFxuICAgIFxcXCJmb3JtQnV0dG9uXFxcIlxcbiAgICA7XFxuICAgIGdhcDogMTBweDtcXG4gICAgcGFkZGluZzogMHB4IDE1cHg7XFxuICB9XFxuXFxuICAjZm9ybVNwYWNlMSxcXG4gICNmb3JtU3BhY2UyLFxcbiAgI2Zvcm1TcGFjZTMsXFxuICAjZm9ybVNwYWNlNCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9XZWF0aGVyQXBwX1RPUC9cIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImRheVwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuXG5cbi8vIEZBQ1RPUlkgRlVOQ1RJT046IFRPRE8gT0JKRUNUXG4vLyBTdG9yZSBsaXN0IGl0ZW1zIGluIG9iamVjdHNcbi8qIGNvbnN0IGRheSA9ICh3ZWF0aGVyLCBsb2NhdGlvbk5hbWUsIGRheU5hbWUsIGRheURhdGUsIGZlZWxzTGlrZSwgaHVtaWRpdHksIGhpZ2hUZW1wLCBsb3dUZW1wLCByYWluQ2hhbmNlLCB3aW5kU3BlZWQpID0+IHtcbiAgICBsZXQgd2VhID0gd2VhdGhlcjtcbiAgICBsZXQgbG9jTiA9IGxvY2F0aW9uTmFtZTtcbiAgICBsZXQgZGF5TmEgPSBkYXlOYW1lO1xuICAgIGxldCBkYXlOb3cgPSBkYXlEYXRlO1xuICAgIGxldCBjdXJyZW50VCA9IGZlZWxzTGlrZTtcbiAgICBsZXQgaHVtID0gaHVtaWRpdHk7XG4gICAgbGV0IGhpZ2hUID0gaGlnaFRlbXA7XG4gICAgbGV0IGxvd1QgPSBsb3dUZW1wO1xuICAgIGxldCByYWluQyA9IHJhaW5DaGFuY2U7XG4gICAgbGV0IHdzID0gd2luZFNwZWVkO1xuXG4gICAgXG5cbiAgICBcbiAgICByZXR1cm4ge3dlYSwgbG9jTiwgZGF5TmEsIGRheU5vdywgY3VycmVudFQsIGh1bSwgaGlnaFQsIGxvd1QsIHJhaW5DLCB3c307XG4gIH07XG4gIFxuXG5leHBvcnQgeyBkYXkgfTsgKi9cblxuY2xhc3MgRGF5IHtcbiAgY29uc3RydWN0b3Iod2VhdGhlciwgbG9jYXRpb25OYW1lLCBkYXlOYW1lLCBkYXlEYXRlLCBmZWVsc0xpa2UsIGh1bWlkaXR5LCBoaWdoVGVtcCwgbG93VGVtcCwgcmFpbkNoYW5jZSwgd2luZFNwZWVkKSB7XG4gICAgdGhpcy53ZWF0aGVyID0gd2VhdGhlcjtcbiAgICB0aGlzLmxvY2F0aW9uTmFtZSA9IGxvY2F0aW9uTmFtZTtcbiAgICB0aGlzLmRheU5hbWUgPSBkYXlOYW1lO1xuICAgIHRoaXMuZGF5RGF0ZSA9IGRheURhdGU7XG4gICAgdGhpcy5mZWVsc0xpa2UgPSBmZWVsc0xpa2U7XG4gICAgdGhpcy5odW1pZGl0eSA9IGh1bWlkaXR5O1xuICAgIHRoaXMuaGlnaFRlbXAgPSBoaWdoVGVtcDtcbiAgICB0aGlzLmxvd1RlbXAgPSBsb3dUZW1wO1xuICAgIHRoaXMucmFpbkNoYW5jZSA9IHJhaW5DaGFuY2U7XG4gICAgdGhpcy53aW5kU3BlZWQgPSB3aW5kU3BlZWQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGF5OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==