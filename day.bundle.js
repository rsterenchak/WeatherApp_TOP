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
  /* position:relative + z-index:0 makes this a stacking context so the
     #skyCanvas child (z-index:-1) paints OVER the sky gradient but UNDER the
     app content. */
  position: relative;
  z-index: 0;
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

/* Animated per-condition particle field (sky.js). Absolutely positioned so it
   never becomes a grid item, behind the app content, and click-through. */
#skyCanvas {
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
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
  /* Frosted card: a translucent white pane blurring the animated sky behind it.
     #weatherUpper carries no background and #weatherData drops its white below,
     so they inherit the frost instead of punching opaque holes through it. */
  background: rgba(255, 255, 255, 0.58);
  backdrop-filter: blur(11px) saturate(1.15);
  -webkit-backdrop-filter: blur(11px) saturate(1.15);
  grid-area: mainMiddle;
  grid-template-rows: 1fr 6fr 1fr;
  grid-template-columns: minmax(0, 1fr) minmax(0, 5fr) minmax(0, 1fr) minmax(0, 2fr) minmax(0, 0.5fr);
  grid-template-areas:
  "spacer1 spacer1 spacer1 spacer1 spacer1"
  ". weatherSection . weatherData ."
  "spacer2 spacer2 spacer2 spacer2 spacer2"
  ;
  border: 0.5px solid rgba(255, 255, 255, 0.75);
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
  /* No background: inherit the frosted #mainMiddle card rather than punching an
     opaque white block through the frost. */
  background: transparent;
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
  font-size: 18px;
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
  font-size: 12px;
}

#block2Bottom {
  grid-area: block2Bottom;
  font-size: 18px;
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
  font-size: 12px;
}

#block3Bottom {
  grid-area: block3Bottom;
  font-size: 18px;
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
  padding-right: 5px;
  width: 35px;
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
  font-size: 12px;
}

#block4Bottom {
  grid-area: block4Bottom;
  font-size: 18px;
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


/* Per-weather accent as a custom property so the active swipe dot can pick it
   up (var(--accent)). Mirrors the accent colours used on #footer/#formButton. */
#outerContainer.weather-neutral  { --accent: #6b7883; }
#outerContainer.weather-rain     { --accent: #3c5561; }
#outerContainer.weather-snow     { --accent: #5f82a6; }
#outerContainer.weather-hail     { --accent: #495663; }
#outerContainer.weather-partly   { --accent: #3f79b3; }
#outerContainer.weather-sunny    { --accent: #e39a1c; }
#outerContainer.weather-fog      { --accent: #77828a; }
#outerContainer.weather-overcast { --accent: #5a646b; }


/* Three-dot day indicator. Hidden on desktop (the ‹ › arrows are the
   affordance there); shown under the card at <=480px where swipe takes over. */
#dayDots {
  display: none;
  justify-content: center;
  gap: 10px;
  padding: 10px 0;
}

#dayDots .dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.18);
  transition: background 200ms ease;
}

#dayDots .dot.active {
  background: var(--accent, #6b7883);
}


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
  /* Centre the whole layout in the viewport instead of parking it below the
     top edge. dvh (not vh) so iOS Safari's dynamic URL bar doesn't push the
     bottom under the toolbar. Header/footer rows and the main row drop to
     content height so align-content actually has slack to centre. */
  #outerContainer {
    min-height: 100dvh;
    align-content: center;
    grid-template-rows: auto 70px auto 20px 35px 90px auto;
  }

  /* Drop the footer accent fill; it reads as a stray bar on mobile. */
  #footer {
    background-color: transparent;
  }

  /* Reveal the three-dot day indicator now that the arrows are swiped away. */
  #dayDots {
    display: flex;
  }

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

  /* Hide the arrows in favour of swipe. visibility (never src='' or display)
     so they keep their 44px gutters — that's what the card and Submit align to.
     !important because updateArrows() toggles visibility inline per day, and an
     inline style would otherwise re-show them here. */
  #arrowLeft,
  #arrowRight {
    width: 32px;
    visibility: hidden !important;
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

  /* Collapse the spacer rows to content height so they stop absorbing the slack
     that floated the card below the top edge; align-content:center on
     #outerContainer now handles vertical centring instead. */
  #mainTop {
    grid-template-rows: auto auto auto;
  }

  #innerMain {
    grid-template-rows: auto auto auto;
  }

  /* 44px horizontal inset matches #mainMiddle's position inside #weatherOuter's
     44px | 1fr | 44px gutters, so Submit no longer renders wider than the card
     above it. */
  #spaceForm {
    grid-template-columns: 1fr;
    grid-template-areas:
    "formInput"
    "formButton"
    ;
    gap: 10px;
    padding: 0px 44px;
  }

  #formSpace1,
  #formSpace2,
  #formSpace3,
  #formSpace4 {
    display: none;
  }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: 'WebFont1';\n  src: url('./Roboto-Regular.ttf');\n}\n\nbody {\n  display: grid;\n  margin: 0px;\n  font-family: 'WebFont1';\n  grid-template-columns: 1fr;\n\n}\n\n#outerContainer {\n  display: grid;\n  /* position:relative + z-index:0 makes this a stacking context so the\n     #skyCanvas child (z-index:-1) paints OVER the sky gradient but UNDER the\n     app content. */\n  position: relative;\n  z-index: 0;\n  min-height: 110vh;\n  grid-template-rows: 10vh 70px 1fr 20px 35px 90px 20vh;\n  grid-template-areas:\n  \"header\"\n  \"space1\"\n  \"main\"\n  \"space2\"\n  \"spaceForm\"\n  \"space3\"\n  \"footer\"\n  ;\n  transition: background 400ms ease;\n\n}\n\n/* Animated per-condition particle field (sky.js). Absolutely positioned so it\n   never becomes a grid item, behind the app content, and click-through. */\n#skyCanvas {\n  position: absolute;\n  inset: 0;\n  z-index: -1;\n  pointer-events: none;\n}\n\n#header {\n  grid-area: header;\n  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);\n  \n}\n\n#space1 {\n  grid-area: space1;\n}\n\n#main {\n  display: grid;\n  grid-area: main;\n  grid-template-columns: 1fr 1000px 1fr;\n  grid-template-areas: \n  \"sideSpace1 weatherOuter sideSpace2\"\n  ;\n}\n\n#sideSpace1 {\n  grid-area: sideSpace1;\n\n}\n\n#weatherOuter {\n  display: grid;\n  grid-area: weatherOuter;\n  grid-template-columns: 1fr 4fr 1fr;\n  grid-template-areas: \n  \"inner1 innerMain inner2\"\n  ;\n  border-radius: 10px;\n}\n\n#inner1 {\n  display: grid;\n  grid-area: inner1;\n  grid-template-rows: 3fr 0.5fr 3fr;\n  grid-template-columns: 1fr 2fr 1fr;\n  grid-template-areas: \n  \". upperLeft .\"\n  \". arrowLeft .\"\n  \". lowerLeft .\"\n  ;\n}\n\n#upperLeft {\n  grid-area: upperLeft;\n\n}\n\n#arrowLeft {\n  grid-area: arrowLeft;\n  cursor: pointer;\n  width: 65px;\n}\n\n#lowerLeft {\n  grid-area: lowerLeft;\n\n}\n\n#innerMain {\n  display: grid;\n  grid-template-rows: 1fr 4fr 0.5fr;\n  grid-template-areas: \n  \"mainTop\"\n  \"mainMiddle\"\n  \"mainBottom\"\n  ;\n  grid-area: innerMain;\n}\n\n\n#mainTop {\n  display: grid;\n  grid-area: mainTop;\n  grid-template-columns: 1fr 2fr 1fr;\n  grid-template-rows: 1fr 3fr 2fr;\n  grid-template-areas: \n  \"upperSection upperSection upperSection\"\n  \". dateSection .\"\n  \"lowerSection lowerSection lowerSection\"\n  ;\n\n}\n\n#upperSection {\n  grid-area: upperSection;\n\n}\n\n#dateSection {\n  display: grid;\n  grid-area: dateSection;\n  grid-template-rows: 1fr 3fr 1fr;\n  grid-template-areas: \n  \"dateSpace1\"\n  \"dateMain\"\n  \"dateSpace2\"\n  ;\n  \n}\n\n#dateSpace1 {\n  grid-area: dateSpace1;\n  \n}\n\n#dateMain {\n  grid-area: dateMain;\n  text-align: center;\n  background-color: white;\n  border: 0.5px solid black;\n  border-left: none;\n  \n  border-right: none;\n  \n  font-size: 26px;\n}\n\n#dateSpace2 {\n  grid-area: dateSpace2;\n  \n}\n\n#lowerSection {\n  grid-area: lowerSection;\n\n}\n\n\n\n#mainMiddle {\n  display: grid;\n  border-radius: 8px;\n  /* Frosted card: a translucent white pane blurring the animated sky behind it.\n     #weatherUpper carries no background and #weatherData drops its white below,\n     so they inherit the frost instead of punching opaque holes through it. */\n  background: rgba(255, 255, 255, 0.58);\n  backdrop-filter: blur(11px) saturate(1.15);\n  -webkit-backdrop-filter: blur(11px) saturate(1.15);\n  grid-area: mainMiddle;\n  grid-template-rows: 1fr 6fr 1fr;\n  grid-template-columns: minmax(0, 1fr) minmax(0, 5fr) minmax(0, 1fr) minmax(0, 2fr) minmax(0, 0.5fr);\n  grid-template-areas:\n  \"spacer1 spacer1 spacer1 spacer1 spacer1\"\n  \". weatherSection . weatherData .\"\n  \"spacer2 spacer2 spacer2 spacer2 spacer2\"\n  ;\n  border: 0.5px solid rgba(255, 255, 255, 0.75);\n  box-shadow: 0px 2px 11px rgba(0, 0, 0, 0.3);\n}\n\n#spacer1 {\n  grid-area: spacer1;\n  \n}\n\n#spacer2 {\n  grid-area: spacer2;\n\n}\n\n#weatherSection {\n  display: grid;\n  grid-template-rows: 3fr 1fr;\n  grid-template-areas: \n  \"weatherUpper\"\n  \"weatherLower\"\n  ;\n  grid-area: weatherSection;\n  \n}\n\n#weatherUpper {\n  display: grid;\n  /* White comes from the #mainMiddle card so the rounded corners frame white,\n     not a hard square edge over the page gradient. */\n  grid-area: weatherUpper;\n  grid-template-rows: 0.5fr 2fr 0.5fr 1fr;\n  grid-template-columns: minmax(0, 1fr) minmax(0, 4fr) minmax(0, 1fr) minmax(0, 2fr) minmax(0, 1fr);\n  grid-template-areas: \n  \". . . . . \"\n  \". weatherIcon . weatherTemps . \"\n  \". . . . . \"\n  \". weatherLocation weatherLocation weatherLocation . \"\n  ;\n}\n\n#weatherIcon {\n  grid-area: weatherIcon;\n  justify-self: end;\n  width: 140px;\n}\n\n#weatherTemps {\n  display: grid;\n  grid-area: weatherTemps;\n  grid-template-rows: 1fr 1fr;\n  grid-template-areas:\n  \"tempUpper\"\n  \"tempLower\"\n  ;\n}\n\n#weatherLocation {\n  grid-area: weatherLocation;\n  text-align: center;\n  font-size: 24px;\n}\n\n#tempUpper {\n  grid-area: tempUpper;\n  align-self: end;\n  font-size: 36px;\n  \n}\n\n#tempLower {\n  grid-area: tempLower;\n  \n}\n\n\n#weatherLower {\n  display: grid;\n  grid-template-columns: 1fr 5fr 1fr;\n  grid-template-rows: 1fr 2fr 1fr;\n  grid-template-areas: \n  \". typeUpper .\"\n  \". weatherType .\"\n  \". typeLower .\"\n  ;\n  grid-area: weatherLower;\n}\n\n#typeUpper {\n  grid-area: typeUpper;\n}\n\n#weatherType {\n  grid-area: weatherType;\n  background-color: white;\n  text-align: center;\n  font-size: 24px;\n  border: 1px solid black;\n  border-left: none;\n  border-right: none;\n  border-top: none;\n}\n\n#typeLower {\n  grid-area: typeLower;\n\n}\n\n\n#weatherData {\n  display: grid;\n  /* No background: inherit the frosted #mainMiddle card rather than punching an\n     opaque white block through the frost. */\n  background: transparent;\n  grid-area: weatherData;\n  grid-template-rows: 0.5fr 3fr 0.5fr 3fr 0.5fr 3fr 0.5fr 3fr 0.5fr;\n  grid-template-columns: 1fr;\n  grid-template-areas: \n  \"spaced1\"\n  \"block1\"\n  \"spaced2\"\n  \"block2\"\n  \"spaced3\"\n  \"block3\"\n  \"spaced4\"\n  \"block4\"\n  \"spaced5\"\n  ;\n}\n\n#spaced1 {\n  grid-area: spaced1;\n\n}\n#block1 {\n  display: grid;\n  grid-area: block1;\n  grid-template-columns: 1fr 1fr;\n  grid-template-areas: \n  \"block1Left block1Right\"\n  ;\n}\n\n#block1Left {\n  grid-area: block1Left;\n  justify-self: end;\n  padding-right: 5px;    \n  width: 35px;\n}\n\n#block1Right {\n  display: grid;\n  grid-area: block1Right;\n  grid-template-rows: 1fr 2fr;\n  grid-template-areas: \n  \"block1Top\"\n  \"block1Bottom\"\n  ;\n}\n\n#block1Top {\n  grid-area: block1Top;\n  text-align: start;\n  font-size: 12px;\n}\n\n#block1Bottom {\n  grid-area: block1Bottom;\n  font-size: 18px;\n}\n\n#spaced2 {\n  grid-area: spaced2;\n  \n}\n\n#block2 {\n  display: grid;\n  grid-area: block2;\n  grid-template-columns: 1fr 1fr;\n  grid-template-areas: \n  \"block2Left block2Right\"\n  ;\n}\n\n#block2Left {\n  grid-area: block2Left;\n  justify-self: end;\n  padding-right: 5px;  \n  width: 35px;\n\n}\n\n#block2Right {\n  display: grid;\n  grid-area: block2Right;\n  grid-template-rows: 1fr 2fr;\n  grid-template-areas: \n  \"block2Top\"\n  \"block2Bottom\"\n  ;\n}\n\n#block2Top {\n  grid-area: block2Top;\n  text-align: start;\n  font-size: 12px;\n}\n\n#block2Bottom {\n  grid-area: block2Bottom;\n  font-size: 18px;\n}\n\n\n\n#spaced3 {\n  grid-area: spaced3;\n\n}\n\n#block3 {\n  display: grid;\n  grid-area: block3;\n  grid-template-columns: 1fr 1fr;\n  grid-template-areas: \n  \"block3Left block3Right\"\n  ;\n}\n\n#block3Left {\n  grid-area: block3Left;\n  justify-self: end;\n  padding-right: 5px;\n  width: 35px;\n}\n\n#block3Right {\n  display: grid;\n  grid-area: block3Right;\n  grid-template-rows: 1fr 2fr;\n  grid-template-areas: \n  \"block3Top\"\n  \"block3Bottom\"\n  ;\n}\n\n#block3Top {\n  grid-area: block3Top;\n  text-align: start;\n  font-size: 12px;\n}\n\n#block3Bottom {\n  grid-area: block3Bottom;\n  font-size: 18px;\n}\n\n\n#spaced4 {\n  grid-area: spaced4;\n\n}\n\n#block4 {\n  display: grid;\n  grid-area: block4;\n  grid-template-columns: 1fr 1fr;\n  grid-template-areas: \n  \"block4Left block4Right\"\n  ;\n}\n\n#block4Left {\n  grid-area: block4Left;\n  justify-self: end;\n  padding-right: 5px;\n  width: 35px;\n}\n\n#block4Right {\n  display: grid;\n  grid-area: block4Right;\n  grid-template-rows: 1fr 2fr;\n  grid-template-areas: \n  \"block4Top\"\n  \"block4Bottom\"\n  ;\n}\n\n#block4Top {\n  grid-area: block4Top;\n  text-align: start;\n  font-size: 12px;\n}\n\n#block4Bottom {\n  grid-area: block4Bottom;\n  font-size: 18px;\n}\n\n#spaced5 {\n  grid-area: spaced5;\n\n}\n\n\n#mainBottom {\n  grid-area: mainBottom;\n}\n\n\n#inner2 {\n  display: grid;\n  grid-area: inner2;\n  grid-template-rows: 3fr 0.5fr 3fr;\n  grid-template-columns: 1fr 2fr 1fr;\n  grid-template-areas: \n  \". upperRight .\"\n  \". arrowRight .\"\n  \". lowerRight .\"\n  ;\n}\n\n#upperRight {\n  grid-area: upperRight;\n\n}\n\n#arrowRight {\n  grid-area: arrowRight;\n  cursor: pointer;\n  width: 65px;\n}\n\n#lowerRight {\n  grid-area: lowerRight;\n\n}\n\n#sideSpace2 {\n  grid-area: sideSpace2;\n\n}\n\n\n#space2 {\n  grid-area: space2;\n\n}\n\n#spaceForm {\n  display: grid;\n  grid-area: spaceForm;\n  grid-template-columns: 1fr 1fr 450px 15px 100px 2fr;\n  grid-template-areas: \n  \"formSpace1 formSpace2 formInput formSpace3 formButton formSpace4\"\n  ;\n}\n\n#formSpace1 {\n  grid-area: formSpace1;\n\n}\n#formSpace2 {\n  grid-area: formSpace2;\n\n}\n#formInput {\n  display: grid;\n  grid-area: formInput;\n  grid-template-columns: 1fr 18fr 1fr;\n  grid-template-areas: \n  \". inputInner .\"\n  ;\n  border-radius: 6px;\n  border: 1px solid black;\n}\n\n#inputInner {\n  display: grid;\n  grid-area: inputInner;\n  border: none;\n  font-size: 16px;\n}\n\n#inputInner:focus {\n  outline: none;\n\n}\n\n#formButton {\n  display: grid;\n  grid-area: formButton;\n  grid-template-rows: 5px 1fr 5px;\n  grid-template-areas: \n  '.'\n  'buttonText'\n  '.'\n  ;\n  text-align: center;\n  text-justify: center;\n  background-color: #ccc;\n  cursor: pointer;\n  border-radius: 6px;\n  font-size: 16px;\n  border: 1px solid black;\n}\n\n#buttonText {\n  grid-area: buttonText;\n}\n\n#formSpace3 {\n  grid-area: formSpace3;\n\n}\n#formSpace4 {\n  grid-area: formSpace4;\n\n}\n\n\n#space3 {\n  grid-area: space3;\n}\n\n#footer {\n  grid-area: footer;\n  background-color: #ccc;\n}\n\n\n/* Hover treatments (moved out of index.js so they never persist as inline\n   styles that would override the themed accent). */\n#arrowLeft:hover,\n#arrowRight:hover {\n  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);\n  border: 1px solid black;\n}\n\n#formButton:hover {\n  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);\n  filter: brightness(0.9);\n}\n\n\n/* Per-weather theming. adjustWeather() in indexChanges.js sets a\n   weather-{...} class on #outerContainer; the class drives a vertical sky\n   gradient plus a matching accent on the two underline rules (#dateMain,\n   #weatherType), #footer and #formButton. The white cards stay white. */\n#outerContainer.weather-neutral  { background: linear-gradient(180deg, #8fa3b0, #c3ced5); }\n#outerContainer.weather-rain     { background: linear-gradient(180deg, #46606e, #8199a4); }\n#outerContainer.weather-snow     { background: linear-gradient(180deg, #8fb0cc, #dce8f2); }\n#outerContainer.weather-hail     { background: linear-gradient(180deg, #566573, #9aa8b5); }\n#outerContainer.weather-partly   { background: linear-gradient(180deg, #5b90c4, #afd0ea); }\n#outerContainer.weather-sunny    { background: linear-gradient(180deg, #4a94dd, #cdeafa); }\n#outerContainer.weather-fog      { background: linear-gradient(180deg, #97a1a9, #d2d8dd); }\n#outerContainer.weather-overcast { background: linear-gradient(180deg, #6b757d, #a7b0b7); }\n\n#outerContainer.weather-neutral #footer,\n#outerContainer.weather-neutral #formButton { background-color: #6b7883; }\n#outerContainer.weather-neutral #dateMain,\n#outerContainer.weather-neutral #weatherType { border-color: #6b7883; }\n\n#outerContainer.weather-rain #footer,\n#outerContainer.weather-rain #formButton { background-color: #3c5561; }\n#outerContainer.weather-rain #dateMain,\n#outerContainer.weather-rain #weatherType { border-color: #3c5561; }\n\n#outerContainer.weather-snow #footer,\n#outerContainer.weather-snow #formButton { background-color: #5f82a6; }\n#outerContainer.weather-snow #dateMain,\n#outerContainer.weather-snow #weatherType { border-color: #5f82a6; }\n\n#outerContainer.weather-hail #footer,\n#outerContainer.weather-hail #formButton { background-color: #495663; }\n#outerContainer.weather-hail #dateMain,\n#outerContainer.weather-hail #weatherType { border-color: #495663; }\n\n#outerContainer.weather-partly #footer,\n#outerContainer.weather-partly #formButton { background-color: #3f79b3; }\n#outerContainer.weather-partly #dateMain,\n#outerContainer.weather-partly #weatherType { border-color: #3f79b3; }\n\n#outerContainer.weather-sunny #footer,\n#outerContainer.weather-sunny #formButton { background-color: #e39a1c; }\n#outerContainer.weather-sunny #dateMain,\n#outerContainer.weather-sunny #weatherType { border-color: #e39a1c; }\n\n#outerContainer.weather-fog #footer,\n#outerContainer.weather-fog #formButton { background-color: #77828a; }\n#outerContainer.weather-fog #dateMain,\n#outerContainer.weather-fog #weatherType { border-color: #77828a; }\n\n#outerContainer.weather-overcast #footer,\n#outerContainer.weather-overcast #formButton { background-color: #5a646b; }\n#outerContainer.weather-overcast #dateMain,\n#outerContainer.weather-overcast #weatherType { border-color: #5a646b; }\n\n\n/* Per-weather accent as a custom property so the active swipe dot can pick it\n   up (var(--accent)). Mirrors the accent colours used on #footer/#formButton. */\n#outerContainer.weather-neutral  { --accent: #6b7883; }\n#outerContainer.weather-rain     { --accent: #3c5561; }\n#outerContainer.weather-snow     { --accent: #5f82a6; }\n#outerContainer.weather-hail     { --accent: #495663; }\n#outerContainer.weather-partly   { --accent: #3f79b3; }\n#outerContainer.weather-sunny    { --accent: #e39a1c; }\n#outerContainer.weather-fog      { --accent: #77828a; }\n#outerContainer.weather-overcast { --accent: #5a646b; }\n\n\n/* Three-dot day indicator. Hidden on desktop (the ‹ › arrows are the\n   affordance there); shown under the card at <=480px where swipe takes over. */\n#dayDots {\n  display: none;\n  justify-content: center;\n  gap: 10px;\n  padding: 10px 0;\n}\n\n#dayDots .dot {\n  width: 9px;\n  height: 9px;\n  border-radius: 50%;\n  background: rgba(0, 0, 0, 0.18);\n  transition: background 200ms ease;\n}\n\n#dayDots .dot.active {\n  background: var(--accent, #6b7883);\n}\n\n\n/* Tablet: collapse #main to a single weatherOuter column and shrink the search form */\n@media (max-width: 768px) {\n  #main {\n    grid-template-columns: 1fr;\n    grid-template-areas:\n    \"weatherOuter\"\n    ;\n  }\n\n  #sideSpace1,\n  #sideSpace2 {\n    display: none;\n  }\n\n  #spaceForm {\n    grid-template-columns: 1fr 1fr 280px 15px 100px 2fr;\n  }\n\n  /* Stack the weather graphic above the stats so #weatherData no longer\n     clips inside the 2fr column. */\n  #mainMiddle {\n    grid-template-columns: 1fr;\n    grid-template-rows: auto auto auto auto;\n    grid-template-areas:\n    \"spacer1\"\n    \"weatherSection\"\n    \"weatherData\"\n    \"spacer2\"\n    ;\n  }\n\n  /* Lay the four stats out as a 2×2 grid. */\n  #weatherData {\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: auto auto;\n    grid-template-areas:\n    \"block1 block2\"\n    \"block3 block4\"\n    ;\n    gap: 8px;\n    padding: 12px 0;\n  }\n\n  #spaced1,\n  #spaced2,\n  #spaced3,\n  #spaced4,\n  #spaced5 {\n    display: none;\n  }\n}\n\n\n/* Mobile: keep the arrows flanking the content (rather than stranding them\n   above/below), and stack the search form into a single column. */\n@media (max-width: 480px) {\n  /* Centre the whole layout in the viewport instead of parking it below the\n     top edge. dvh (not vh) so iOS Safari's dynamic URL bar doesn't push the\n     bottom under the toolbar. Header/footer rows and the main row drop to\n     content height so align-content actually has slack to centre. */\n  #outerContainer {\n    min-height: 100dvh;\n    align-content: center;\n    grid-template-rows: auto 70px auto 20px 35px 90px auto;\n  }\n\n  /* Drop the footer accent fill; it reads as a stray bar on mobile. */\n  #footer {\n    background-color: transparent;\n  }\n\n  /* Reveal the three-dot day indicator now that the arrows are swiped away. */\n  #dayDots {\n    display: flex;\n  }\n\n  /* Fixed narrow gutters so the arrow pair flanks the content and never clips\n     against the viewport edges. */\n  #weatherOuter {\n    grid-template-columns: 44px 1fr 44px;\n  }\n\n  /* Zero the spacer rows so each arrow centres vertically on the content. */\n  #inner1,\n  #inner2 {\n    grid-template-rows: 0fr 1fr 0fr;\n  }\n\n  /* Hide the arrows in favour of swipe. visibility (never src='' or display)\n     so they keep their 44px gutters — that's what the card and Submit align to.\n     !important because updateArrows() toggles visibility inline per day, and an\n     inline style would otherwise re-show them here. */\n  #arrowLeft,\n  #arrowRight {\n    width: 32px;\n    visibility: hidden !important;\n  }\n\n  /* Shrink the graphic/temperature so #weatherUpper's tracks fit inside the\n     narrow single column rather than pushing #mainMiddle past the edge. */\n  #weatherIcon {\n    width: 88px;\n  }\n\n  #tempUpper {\n    font-size: 28px;\n  }\n\n  /* Keep the date on one line so it still reads as a rule. */\n  #dateMain {\n    font-size: 18px;\n    white-space: nowrap;\n  }\n\n  /* Collapse the spacer rows to content height so they stop absorbing the slack\n     that floated the card below the top edge; align-content:center on\n     #outerContainer now handles vertical centring instead. */\n  #mainTop {\n    grid-template-rows: auto auto auto;\n  }\n\n  #innerMain {\n    grid-template-rows: auto auto auto;\n  }\n\n  /* 44px horizontal inset matches #mainMiddle's position inside #weatherOuter's\n     44px | 1fr | 44px gutters, so Submit no longer renders wider than the card\n     above it. */\n  #spaceForm {\n    grid-template-columns: 1fr;\n    grid-template-areas:\n    \"formInput\"\n    \"formButton\"\n    ;\n    gap: 10px;\n    padding: 0px 44px;\n  }\n\n  #formSpace1,\n  #formSpace2,\n  #formSpace3,\n  #formSpace4 {\n    display: none;\n  }\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF5LmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHFIQUF1QztBQUNuRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7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WSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFNBQVMsS0FBSyxNQUFNLEtBQUssYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxTQUFTLEtBQUssWUFBWSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxTQUFTLE1BQU0sTUFBTSxLQUFLLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFNBQVMsTUFBTSxNQUFNLEtBQUssYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxjQUFjLGNBQWMsV0FBVyxPQUFPLEtBQUssYUFBYSxPQUFPLEtBQUssYUFBYSxTQUFTLEtBQUssVUFBVSxZQUFZLE9BQU8sT0FBTyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxTQUFTLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxhQUFhLE9BQU8sS0FBSyxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksUUFBUSxLQUFLLGFBQWEsT0FBTyxLQUFLLFVBQVUsS0FBSyxPQUFPLGFBQWEsYUFBYSxhQUFhLFVBQVUsS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFFBQVEsS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxXQUFXLE9BQU8sS0FBSyxhQUFhLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxTQUFTLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxhQUFhLFFBQVEsS0FBSyxVQUFVLEtBQUssT0FBTyxhQUFhLGFBQWEsYUFBYSxhQUFhLGVBQWUsS0FBSyxNQUFNLEtBQUssYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxRQUFRLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsUUFBUSxLQUFLLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFNBQVMsS0FBSyxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFFBQVEsS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxRQUFRLEtBQUssYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxRQUFRLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLGFBQWEsUUFBUSxLQUFLLFlBQVksUUFBUSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsU0FBUyxLQUFLLE1BQU0sS0FBSyxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssYUFBYSxPQUFPLEtBQUssYUFBYSxRQUFRLEtBQUssYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLE1BQU0sS0FBSyxhQUFhLE1BQU0sS0FBSyxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFB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QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztVQ2JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1dDQUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCOzs7O0FBSXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUEsU0FBUyxPQUFPOztBQUVoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLEdBQUcsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwX21haW4vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYXRoZXJhcHBfbWFpbi93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcF9tYWluLy4vc3JjL2RheS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9Sb2JvdG8tUmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ1dlYkZvbnQxJztcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbmJvZHkge1xuICBkaXNwbGF5OiBncmlkO1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1mYW1pbHk6ICdXZWJGb250MSc7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuXG59XG5cbiNvdXRlckNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIC8qIHBvc2l0aW9uOnJlbGF0aXZlICsgei1pbmRleDowIG1ha2VzIHRoaXMgYSBzdGFja2luZyBjb250ZXh0IHNvIHRoZVxuICAgICAjc2t5Q2FudmFzIGNoaWxkICh6LWluZGV4Oi0xKSBwYWludHMgT1ZFUiB0aGUgc2t5IGdyYWRpZW50IGJ1dCBVTkRFUiB0aGVcbiAgICAgYXBwIGNvbnRlbnQuICovXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMDtcbiAgbWluLWhlaWdodDogMTEwdmg7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTB2aCA3MHB4IDFmciAyMHB4IDM1cHggOTBweCAyMHZoO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICBcImhlYWRlclwiXG4gIFwic3BhY2UxXCJcbiAgXCJtYWluXCJcbiAgXCJzcGFjZTJcIlxuICBcInNwYWNlRm9ybVwiXG4gIFwic3BhY2UzXCJcbiAgXCJmb290ZXJcIlxuICA7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgNDAwbXMgZWFzZTtcblxufVxuXG4vKiBBbmltYXRlZCBwZXItY29uZGl0aW9uIHBhcnRpY2xlIGZpZWxkIChza3kuanMpLiBBYnNvbHV0ZWx5IHBvc2l0aW9uZWQgc28gaXRcbiAgIG5ldmVyIGJlY29tZXMgYSBncmlkIGl0ZW0sIGJlaGluZCB0aGUgYXBwIGNvbnRlbnQsIGFuZCBjbGljay10aHJvdWdoLiAqL1xuI3NreUNhbnZhcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaW5zZXQ6IDA7XG4gIHotaW5kZXg6IC0xO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuI2hlYWRlciB7XG4gIGdyaWQtYXJlYTogaGVhZGVyO1xuICBib3gtc2hhZG93OiAwcHggNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBcbn1cblxuI3NwYWNlMSB7XG4gIGdyaWQtYXJlYTogc3BhY2UxO1xufVxuXG4jbWFpbiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXJlYTogbWFpbjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMTAwMHB4IDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gIFwic2lkZVNwYWNlMSB3ZWF0aGVyT3V0ZXIgc2lkZVNwYWNlMlwiXG4gIDtcbn1cblxuI3NpZGVTcGFjZTEge1xuICBncmlkLWFyZWE6IHNpZGVTcGFjZTE7XG5cbn1cblxuI3dlYXRoZXJPdXRlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXJlYTogd2VhdGhlck91dGVyO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnIgMWZyO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgXCJpbm5lcjEgaW5uZXJNYWluIGlubmVyMlwiXG4gIDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuI2lubmVyMSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXJlYTogaW5uZXIxO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDNmciAwLjVmciAzZnI7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICBcIi4gdXBwZXJMZWZ0IC5cIlxuICBcIi4gYXJyb3dMZWZ0IC5cIlxuICBcIi4gbG93ZXJMZWZ0IC5cIlxuICA7XG59XG5cbiN1cHBlckxlZnQge1xuICBncmlkLWFyZWE6IHVwcGVyTGVmdDtcblxufVxuXG4jYXJyb3dMZWZ0IHtcbiAgZ3JpZC1hcmVhOiBhcnJvd0xlZnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDY1cHg7XG59XG5cbiNsb3dlckxlZnQge1xuICBncmlkLWFyZWE6IGxvd2VyTGVmdDtcblxufVxuXG4jaW5uZXJNYWluIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNGZyIDAuNWZyO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgXCJtYWluVG9wXCJcbiAgXCJtYWluTWlkZGxlXCJcbiAgXCJtYWluQm90dG9tXCJcbiAgO1xuICBncmlkLWFyZWE6IGlubmVyTWFpbjtcbn1cblxuXG4jbWFpblRvcCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXJlYTogbWFpblRvcDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgM2ZyIDJmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gIFwidXBwZXJTZWN0aW9uIHVwcGVyU2VjdGlvbiB1cHBlclNlY3Rpb25cIlxuICBcIi4gZGF0ZVNlY3Rpb24gLlwiXG4gIFwibG93ZXJTZWN0aW9uIGxvd2VyU2VjdGlvbiBsb3dlclNlY3Rpb25cIlxuICA7XG5cbn1cblxuI3VwcGVyU2VjdGlvbiB7XG4gIGdyaWQtYXJlYTogdXBwZXJTZWN0aW9uO1xuXG59XG5cbiNkYXRlU2VjdGlvbiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXJlYTogZGF0ZVNlY3Rpb247XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDNmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICBcImRhdGVTcGFjZTFcIlxuICBcImRhdGVNYWluXCJcbiAgXCJkYXRlU3BhY2UyXCJcbiAgO1xuICBcbn1cblxuI2RhdGVTcGFjZTEge1xuICBncmlkLWFyZWE6IGRhdGVTcGFjZTE7XG4gIFxufVxuXG4jZGF0ZU1haW4ge1xuICBncmlkLWFyZWE6IGRhdGVNYWluO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDAuNXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgXG4gIGJvcmRlci1yaWdodDogbm9uZTtcbiAgXG4gIGZvbnQtc2l6ZTogMjZweDtcbn1cblxuI2RhdGVTcGFjZTIge1xuICBncmlkLWFyZWE6IGRhdGVTcGFjZTI7XG4gIFxufVxuXG4jbG93ZXJTZWN0aW9uIHtcbiAgZ3JpZC1hcmVhOiBsb3dlclNlY3Rpb247XG5cbn1cblxuXG5cbiNtYWluTWlkZGxlIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAvKiBGcm9zdGVkIGNhcmQ6IGEgdHJhbnNsdWNlbnQgd2hpdGUgcGFuZSBibHVycmluZyB0aGUgYW5pbWF0ZWQgc2t5IGJlaGluZCBpdC5cbiAgICAgI3dlYXRoZXJVcHBlciBjYXJyaWVzIG5vIGJhY2tncm91bmQgYW5kICN3ZWF0aGVyRGF0YSBkcm9wcyBpdHMgd2hpdGUgYmVsb3csXG4gICAgIHNvIHRoZXkgaW5oZXJpdCB0aGUgZnJvc3QgaW5zdGVhZCBvZiBwdW5jaGluZyBvcGFxdWUgaG9sZXMgdGhyb3VnaCBpdC4gKi9cbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU4KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDExcHgpIHNhdHVyYXRlKDEuMTUpO1xuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMXB4KSBzYXR1cmF0ZSgxLjE1KTtcbiAgZ3JpZC1hcmVhOiBtYWluTWlkZGxlO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA2ZnIgMWZyO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgwLCAxZnIpIG1pbm1heCgwLCA1ZnIpIG1pbm1heCgwLCAxZnIpIG1pbm1heCgwLCAyZnIpIG1pbm1heCgwLCAwLjVmcik7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gIFwic3BhY2VyMSBzcGFjZXIxIHNwYWNlcjEgc3BhY2VyMSBzcGFjZXIxXCJcbiAgXCIuIHdlYXRoZXJTZWN0aW9uIC4gd2VhdGhlckRhdGEgLlwiXG4gIFwic3BhY2VyMiBzcGFjZXIyIHNwYWNlcjIgc3BhY2VyMiBzcGFjZXIyXCJcbiAgO1xuICBib3JkZXI6IDAuNXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XG4gIGJveC1zaGFkb3c6IDBweCAycHggMTFweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG5cbiNzcGFjZXIxIHtcbiAgZ3JpZC1hcmVhOiBzcGFjZXIxO1xuICBcbn1cblxuI3NwYWNlcjIge1xuICBncmlkLWFyZWE6IHNwYWNlcjI7XG5cbn1cblxuI3dlYXRoZXJTZWN0aW9uIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzZnIgMWZyO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgXCJ3ZWF0aGVyVXBwZXJcIlxuICBcIndlYXRoZXJMb3dlclwiXG4gIDtcbiAgZ3JpZC1hcmVhOiB3ZWF0aGVyU2VjdGlvbjtcbiAgXG59XG5cbiN3ZWF0aGVyVXBwZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICAvKiBXaGl0ZSBjb21lcyBmcm9tIHRoZSAjbWFpbk1pZGRsZSBjYXJkIHNvIHRoZSByb3VuZGVkIGNvcm5lcnMgZnJhbWUgd2hpdGUsXG4gICAgIG5vdCBhIGhhcmQgc3F1YXJlIGVkZ2Ugb3ZlciB0aGUgcGFnZSBncmFkaWVudC4gKi9cbiAgZ3JpZC1hcmVhOiB3ZWF0aGVyVXBwZXI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMC41ZnIgMmZyIDAuNWZyIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMCwgMWZyKSBtaW5tYXgoMCwgNGZyKSBtaW5tYXgoMCwgMWZyKSBtaW5tYXgoMCwgMmZyKSBtaW5tYXgoMCwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gIFwiLiAuIC4gLiAuIFwiXG4gIFwiLiB3ZWF0aGVySWNvbiAuIHdlYXRoZXJUZW1wcyAuIFwiXG4gIFwiLiAuIC4gLiAuIFwiXG4gIFwiLiB3ZWF0aGVyTG9jYXRpb24gd2VhdGhlckxvY2F0aW9uIHdlYXRoZXJMb2NhdGlvbiAuIFwiXG4gIDtcbn1cblxuI3dlYXRoZXJJY29uIHtcbiAgZ3JpZC1hcmVhOiB3ZWF0aGVySWNvbjtcbiAganVzdGlmeS1zZWxmOiBlbmQ7XG4gIHdpZHRoOiAxNDBweDtcbn1cblxuI3dlYXRoZXJUZW1wcyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXJlYTogd2VhdGhlclRlbXBzO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gIFwidGVtcFVwcGVyXCJcbiAgXCJ0ZW1wTG93ZXJcIlxuICA7XG59XG5cbiN3ZWF0aGVyTG9jYXRpb24ge1xuICBncmlkLWFyZWE6IHdlYXRoZXJMb2NhdGlvbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbiN0ZW1wVXBwZXIge1xuICBncmlkLWFyZWE6IHRlbXBVcHBlcjtcbiAgYWxpZ24tc2VsZjogZW5kO1xuICBmb250LXNpemU6IDM2cHg7XG4gIFxufVxuXG4jdGVtcExvd2VyIHtcbiAgZ3JpZC1hcmVhOiB0ZW1wTG93ZXI7XG4gIFxufVxuXG5cbiN3ZWF0aGVyTG93ZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnIgMWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnIgMWZyO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgXCIuIHR5cGVVcHBlciAuXCJcbiAgXCIuIHdlYXRoZXJUeXBlIC5cIlxuICBcIi4gdHlwZUxvd2VyIC5cIlxuICA7XG4gIGdyaWQtYXJlYTogd2VhdGhlckxvd2VyO1xufVxuXG4jdHlwZVVwcGVyIHtcbiAgZ3JpZC1hcmVhOiB0eXBlVXBwZXI7XG59XG5cbiN3ZWF0aGVyVHlwZSB7XG4gIGdyaWQtYXJlYTogd2VhdGhlclR5cGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIGJvcmRlci10b3A6IG5vbmU7XG59XG5cbiN0eXBlTG93ZXIge1xuICBncmlkLWFyZWE6IHR5cGVMb3dlcjtcblxufVxuXG5cbiN3ZWF0aGVyRGF0YSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIC8qIE5vIGJhY2tncm91bmQ6IGluaGVyaXQgdGhlIGZyb3N0ZWQgI21haW5NaWRkbGUgY2FyZCByYXRoZXIgdGhhbiBwdW5jaGluZyBhblxuICAgICBvcGFxdWUgd2hpdGUgYmxvY2sgdGhyb3VnaCB0aGUgZnJvc3QuICovXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBncmlkLWFyZWE6IHdlYXRoZXJEYXRhO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDNmciAwLjVmciAzZnIgMC41ZnIgM2ZyIDAuNWZyIDNmciAwLjVmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICBcInNwYWNlZDFcIlxuICBcImJsb2NrMVwiXG4gIFwic3BhY2VkMlwiXG4gIFwiYmxvY2syXCJcbiAgXCJzcGFjZWQzXCJcbiAgXCJibG9jazNcIlxuICBcInNwYWNlZDRcIlxuICBcImJsb2NrNFwiXG4gIFwic3BhY2VkNVwiXG4gIDtcbn1cblxuI3NwYWNlZDEge1xuICBncmlkLWFyZWE6IHNwYWNlZDE7XG5cbn1cbiNibG9jazEge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWFyZWE6IGJsb2NrMTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgXCJibG9jazFMZWZ0IGJsb2NrMVJpZ2h0XCJcbiAgO1xufVxuXG4jYmxvY2sxTGVmdCB7XG4gIGdyaWQtYXJlYTogYmxvY2sxTGVmdDtcbiAganVzdGlmeS1zZWxmOiBlbmQ7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDsgICAgXG4gIHdpZHRoOiAzNXB4O1xufVxuXG4jYmxvY2sxUmlnaHQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWFyZWE6IGJsb2NrMVJpZ2h0O1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnI7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICBcImJsb2NrMVRvcFwiXG4gIFwiYmxvY2sxQm90dG9tXCJcbiAgO1xufVxuXG4jYmxvY2sxVG9wIHtcbiAgZ3JpZC1hcmVhOiBibG9jazFUb3A7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbiNibG9jazFCb3R0b20ge1xuICBncmlkLWFyZWE6IGJsb2NrMUJvdHRvbTtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4jc3BhY2VkMiB7XG4gIGdyaWQtYXJlYTogc3BhY2VkMjtcbiAgXG59XG5cbiNibG9jazIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWFyZWE6IGJsb2NrMjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgXCJibG9jazJMZWZ0IGJsb2NrMlJpZ2h0XCJcbiAgO1xufVxuXG4jYmxvY2syTGVmdCB7XG4gIGdyaWQtYXJlYTogYmxvY2syTGVmdDtcbiAganVzdGlmeS1zZWxmOiBlbmQ7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDsgIFxuICB3aWR0aDogMzVweDtcblxufVxuXG4jYmxvY2syUmlnaHQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWFyZWE6IGJsb2NrMlJpZ2h0O1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnI7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICBcImJsb2NrMlRvcFwiXG4gIFwiYmxvY2syQm90dG9tXCJcbiAgO1xufVxuXG4jYmxvY2syVG9wIHtcbiAgZ3JpZC1hcmVhOiBibG9jazJUb3A7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbiNibG9jazJCb3R0b20ge1xuICBncmlkLWFyZWE6IGJsb2NrMkJvdHRvbTtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG5cblxuI3NwYWNlZDMge1xuICBncmlkLWFyZWE6IHNwYWNlZDM7XG5cbn1cblxuI2Jsb2NrMyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXJlYTogYmxvY2szO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICBcImJsb2NrM0xlZnQgYmxvY2szUmlnaHRcIlxuICA7XG59XG5cbiNibG9jazNMZWZ0IHtcbiAgZ3JpZC1hcmVhOiBibG9jazNMZWZ0O1xuICBqdXN0aWZ5LXNlbGY6IGVuZDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xuICB3aWR0aDogMzVweDtcbn1cblxuI2Jsb2NrM1JpZ2h0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hcmVhOiBibG9jazNSaWdodDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgXCJibG9jazNUb3BcIlxuICBcImJsb2NrM0JvdHRvbVwiXG4gIDtcbn1cblxuI2Jsb2NrM1RvcCB7XG4gIGdyaWQtYXJlYTogYmxvY2szVG9wO1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4jYmxvY2szQm90dG9tIHtcbiAgZ3JpZC1hcmVhOiBibG9jazNCb3R0b207XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuXG4jc3BhY2VkNCB7XG4gIGdyaWQtYXJlYTogc3BhY2VkNDtcblxufVxuXG4jYmxvY2s0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hcmVhOiBibG9jazQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gIFwiYmxvY2s0TGVmdCBibG9jazRSaWdodFwiXG4gIDtcbn1cblxuI2Jsb2NrNExlZnQge1xuICBncmlkLWFyZWE6IGJsb2NrNExlZnQ7XG4gIGp1c3RpZnktc2VsZjogZW5kO1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIHdpZHRoOiAzNXB4O1xufVxuXG4jYmxvY2s0UmlnaHQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWFyZWE6IGJsb2NrNFJpZ2h0O1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnI7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICBcImJsb2NrNFRvcFwiXG4gIFwiYmxvY2s0Qm90dG9tXCJcbiAgO1xufVxuXG4jYmxvY2s0VG9wIHtcbiAgZ3JpZC1hcmVhOiBibG9jazRUb3A7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbiNibG9jazRCb3R0b20ge1xuICBncmlkLWFyZWE6IGJsb2NrNEJvdHRvbTtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4jc3BhY2VkNSB7XG4gIGdyaWQtYXJlYTogc3BhY2VkNTtcblxufVxuXG5cbiNtYWluQm90dG9tIHtcbiAgZ3JpZC1hcmVhOiBtYWluQm90dG9tO1xufVxuXG5cbiNpbm5lcjIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWFyZWE6IGlubmVyMjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzZnIgMC41ZnIgM2ZyO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMWZyO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgXCIuIHVwcGVyUmlnaHQgLlwiXG4gIFwiLiBhcnJvd1JpZ2h0IC5cIlxuICBcIi4gbG93ZXJSaWdodCAuXCJcbiAgO1xufVxuXG4jdXBwZXJSaWdodCB7XG4gIGdyaWQtYXJlYTogdXBwZXJSaWdodDtcblxufVxuXG4jYXJyb3dSaWdodCB7XG4gIGdyaWQtYXJlYTogYXJyb3dSaWdodDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB3aWR0aDogNjVweDtcbn1cblxuI2xvd2VyUmlnaHQge1xuICBncmlkLWFyZWE6IGxvd2VyUmlnaHQ7XG5cbn1cblxuI3NpZGVTcGFjZTIge1xuICBncmlkLWFyZWE6IHNpZGVTcGFjZTI7XG5cbn1cblxuXG4jc3BhY2UyIHtcbiAgZ3JpZC1hcmVhOiBzcGFjZTI7XG5cbn1cblxuI3NwYWNlRm9ybSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXJlYTogc3BhY2VGb3JtO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgNDUwcHggMTVweCAxMDBweCAyZnI7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICBcImZvcm1TcGFjZTEgZm9ybVNwYWNlMiBmb3JtSW5wdXQgZm9ybVNwYWNlMyBmb3JtQnV0dG9uIGZvcm1TcGFjZTRcIlxuICA7XG59XG5cbiNmb3JtU3BhY2UxIHtcbiAgZ3JpZC1hcmVhOiBmb3JtU3BhY2UxO1xuXG59XG4jZm9ybVNwYWNlMiB7XG4gIGdyaWQtYXJlYTogZm9ybVNwYWNlMjtcblxufVxuI2Zvcm1JbnB1dCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtYXJlYTogZm9ybUlucHV0O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxOGZyIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gIFwiLiBpbnB1dElubmVyIC5cIlxuICA7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbiNpbnB1dElubmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hcmVhOiBpbnB1dElubmVyO1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuI2lucHV0SW5uZXI6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuXG59XG5cbiNmb3JtQnV0dG9uIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hcmVhOiBmb3JtQnV0dG9uO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDVweCAxZnIgNXB4O1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgJy4nXG4gICdidXR0b25UZXh0J1xuICAnLidcbiAgO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtanVzdGlmeTogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuI2J1dHRvblRleHQge1xuICBncmlkLWFyZWE6IGJ1dHRvblRleHQ7XG59XG5cbiNmb3JtU3BhY2UzIHtcbiAgZ3JpZC1hcmVhOiBmb3JtU3BhY2UzO1xuXG59XG4jZm9ybVNwYWNlNCB7XG4gIGdyaWQtYXJlYTogZm9ybVNwYWNlNDtcblxufVxuXG5cbiNzcGFjZTMge1xuICBncmlkLWFyZWE6IHNwYWNlMztcbn1cblxuI2Zvb3RlciB7XG4gIGdyaWQtYXJlYTogZm9vdGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xufVxuXG5cbi8qIEhvdmVyIHRyZWF0bWVudHMgKG1vdmVkIG91dCBvZiBpbmRleC5qcyBzbyB0aGV5IG5ldmVyIHBlcnNpc3QgYXMgaW5saW5lXG4gICBzdHlsZXMgdGhhdCB3b3VsZCBvdmVycmlkZSB0aGUgdGhlbWVkIGFjY2VudCkuICovXG4jYXJyb3dMZWZ0OmhvdmVyLFxuI2Fycm93UmlnaHQ6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDZweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuI2Zvcm1CdXR0b246aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDZweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45KTtcbn1cblxuXG4vKiBQZXItd2VhdGhlciB0aGVtaW5nLiBhZGp1c3RXZWF0aGVyKCkgaW4gaW5kZXhDaGFuZ2VzLmpzIHNldHMgYVxuICAgd2VhdGhlci17Li4ufSBjbGFzcyBvbiAjb3V0ZXJDb250YWluZXI7IHRoZSBjbGFzcyBkcml2ZXMgYSB2ZXJ0aWNhbCBza3lcbiAgIGdyYWRpZW50IHBsdXMgYSBtYXRjaGluZyBhY2NlbnQgb24gdGhlIHR3byB1bmRlcmxpbmUgcnVsZXMgKCNkYXRlTWFpbixcbiAgICN3ZWF0aGVyVHlwZSksICNmb290ZXIgYW5kICNmb3JtQnV0dG9uLiBUaGUgd2hpdGUgY2FyZHMgc3RheSB3aGl0ZS4gKi9cbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLW5ldXRyYWwgIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzhmYTNiMCwgI2MzY2VkNSk7IH1cbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLXJhaW4gICAgIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzQ2NjA2ZSwgIzgxOTlhNCk7IH1cbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLXNub3cgICAgIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzhmYjBjYywgI2RjZThmMik7IH1cbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLWhhaWwgICAgIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzU2NjU3MywgIzlhYThiNSk7IH1cbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLXBhcnRseSAgIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzViOTBjNCwgI2FmZDBlYSk7IH1cbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLXN1bm55ICAgIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzRhOTRkZCwgI2NkZWFmYSk7IH1cbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLWZvZyAgICAgIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzk3YTFhOSwgI2QyZDhkZCk7IH1cbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLW92ZXJjYXN0IHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzZiNzU3ZCwgI2E3YjBiNyk7IH1cblxuI291dGVyQ29udGFpbmVyLndlYXRoZXItbmV1dHJhbCAjZm9vdGVyLFxuI291dGVyQ29udGFpbmVyLndlYXRoZXItbmV1dHJhbCAjZm9ybUJ1dHRvbiB7IGJhY2tncm91bmQtY29sb3I6ICM2Yjc4ODM7IH1cbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLW5ldXRyYWwgI2RhdGVNYWluLFxuI291dGVyQ29udGFpbmVyLndlYXRoZXItbmV1dHJhbCAjd2VhdGhlclR5cGUgeyBib3JkZXItY29sb3I6ICM2Yjc4ODM7IH1cblxuI291dGVyQ29udGFpbmVyLndlYXRoZXItcmFpbiAjZm9vdGVyLFxuI291dGVyQ29udGFpbmVyLndlYXRoZXItcmFpbiAjZm9ybUJ1dHRvbiB7IGJhY2tncm91bmQtY29sb3I6ICMzYzU1NjE7IH1cbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLXJhaW4gI2RhdGVNYWluLFxuI291dGVyQ29udGFpbmVyLndlYXRoZXItcmFpbiAjd2VhdGhlclR5cGUgeyBib3JkZXItY29sb3I6ICMzYzU1NjE7IH1cblxuI291dGVyQ29udGFpbmVyLndlYXRoZXItc25vdyAjZm9vdGVyLFxuI291dGVyQ29udGFpbmVyLndlYXRoZXItc25vdyAjZm9ybUJ1dHRvbiB7IGJhY2tncm91bmQtY29sb3I6ICM1ZjgyYTY7IH1cbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLXNub3cgI2RhdGVNYWluLFxuI291dGVyQ29udGFpbmVyLndlYXRoZXItc25vdyAjd2VhdGhlclR5cGUgeyBib3JkZXItY29sb3I6ICM1ZjgyYTY7IH1cblxuI291dGVyQ29udGFpbmVyLndlYXRoZXItaGFpbCAjZm9vdGVyLFxuI291dGVyQ29udGFpbmVyLndlYXRoZXItaGFpbCAjZm9ybUJ1dHRvbiB7IGJhY2tncm91bmQtY29sb3I6ICM0OTU2NjM7IH1cbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLWhhaWwgI2RhdGVNYWluLFxuI291dGVyQ29udGFpbmVyLndlYXRoZXItaGFpbCAjd2VhdGhlclR5cGUgeyBib3JkZXItY29sb3I6ICM0OTU2NjM7IH1cblxuI291dGVyQ29udGFpbmVyLndlYXRoZXItcGFydGx5ICNmb290ZXIsXG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1wYXJ0bHkgI2Zvcm1CdXR0b24geyBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y3OWIzOyB9XG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1wYXJ0bHkgI2RhdGVNYWluLFxuI291dGVyQ29udGFpbmVyLndlYXRoZXItcGFydGx5ICN3ZWF0aGVyVHlwZSB7IGJvcmRlci1jb2xvcjogIzNmNzliMzsgfVxuXG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1zdW5ueSAjZm9vdGVyLFxuI291dGVyQ29udGFpbmVyLndlYXRoZXItc3VubnkgI2Zvcm1CdXR0b24geyBiYWNrZ3JvdW5kLWNvbG9yOiAjZTM5YTFjOyB9XG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1zdW5ueSAjZGF0ZU1haW4sXG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1zdW5ueSAjd2VhdGhlclR5cGUgeyBib3JkZXItY29sb3I6ICNlMzlhMWM7IH1cblxuI291dGVyQ29udGFpbmVyLndlYXRoZXItZm9nICNmb290ZXIsXG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1mb2cgI2Zvcm1CdXR0b24geyBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc4MjhhOyB9XG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1mb2cgI2RhdGVNYWluLFxuI291dGVyQ29udGFpbmVyLndlYXRoZXItZm9nICN3ZWF0aGVyVHlwZSB7IGJvcmRlci1jb2xvcjogIzc3ODI4YTsgfVxuXG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1vdmVyY2FzdCAjZm9vdGVyLFxuI291dGVyQ29udGFpbmVyLndlYXRoZXItb3ZlcmNhc3QgI2Zvcm1CdXR0b24geyBiYWNrZ3JvdW5kLWNvbG9yOiAjNWE2NDZiOyB9XG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1vdmVyY2FzdCAjZGF0ZU1haW4sXG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1vdmVyY2FzdCAjd2VhdGhlclR5cGUgeyBib3JkZXItY29sb3I6ICM1YTY0NmI7IH1cblxuXG4vKiBQZXItd2VhdGhlciBhY2NlbnQgYXMgYSBjdXN0b20gcHJvcGVydHkgc28gdGhlIGFjdGl2ZSBzd2lwZSBkb3QgY2FuIHBpY2sgaXRcbiAgIHVwICh2YXIoLS1hY2NlbnQpKS4gTWlycm9ycyB0aGUgYWNjZW50IGNvbG91cnMgdXNlZCBvbiAjZm9vdGVyLyNmb3JtQnV0dG9uLiAqL1xuI291dGVyQ29udGFpbmVyLndlYXRoZXItbmV1dHJhbCAgeyAtLWFjY2VudDogIzZiNzg4MzsgfVxuI291dGVyQ29udGFpbmVyLndlYXRoZXItcmFpbiAgICAgeyAtLWFjY2VudDogIzNjNTU2MTsgfVxuI291dGVyQ29udGFpbmVyLndlYXRoZXItc25vdyAgICAgeyAtLWFjY2VudDogIzVmODJhNjsgfVxuI291dGVyQ29udGFpbmVyLndlYXRoZXItaGFpbCAgICAgeyAtLWFjY2VudDogIzQ5NTY2MzsgfVxuI291dGVyQ29udGFpbmVyLndlYXRoZXItcGFydGx5ICAgeyAtLWFjY2VudDogIzNmNzliMzsgfVxuI291dGVyQ29udGFpbmVyLndlYXRoZXItc3VubnkgICAgeyAtLWFjY2VudDogI2UzOWExYzsgfVxuI291dGVyQ29udGFpbmVyLndlYXRoZXItZm9nICAgICAgeyAtLWFjY2VudDogIzc3ODI4YTsgfVxuI291dGVyQ29udGFpbmVyLndlYXRoZXItb3ZlcmNhc3QgeyAtLWFjY2VudDogIzVhNjQ2YjsgfVxuXG5cbi8qIFRocmVlLWRvdCBkYXkgaW5kaWNhdG9yLiBIaWRkZW4gb24gZGVza3RvcCAodGhlIOKAuSDigLogYXJyb3dzIGFyZSB0aGVcbiAgIGFmZm9yZGFuY2UgdGhlcmUpOyBzaG93biB1bmRlciB0aGUgY2FyZCBhdCA8PTQ4MHB4IHdoZXJlIHN3aXBlIHRha2VzIG92ZXIuICovXG4jZGF5RG90cyB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cblxuI2RheURvdHMgLmRvdCB7XG4gIHdpZHRoOiA5cHg7XG4gIGhlaWdodDogOXB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xOCk7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMjAwbXMgZWFzZTtcbn1cblxuI2RheURvdHMgLmRvdC5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQsICM2Yjc4ODMpO1xufVxuXG5cbi8qIFRhYmxldDogY29sbGFwc2UgI21haW4gdG8gYSBzaW5nbGUgd2VhdGhlck91dGVyIGNvbHVtbiBhbmQgc2hyaW5rIHRoZSBzZWFyY2ggZm9ybSAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICNtYWluIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgIFwid2VhdGhlck91dGVyXCJcbiAgICA7XG4gIH1cblxuICAjc2lkZVNwYWNlMSxcbiAgI3NpZGVTcGFjZTIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAjc3BhY2VGb3JtIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMjgwcHggMTVweCAxMDBweCAyZnI7XG4gIH1cblxuICAvKiBTdGFjayB0aGUgd2VhdGhlciBncmFwaGljIGFib3ZlIHRoZSBzdGF0cyBzbyAjd2VhdGhlckRhdGEgbm8gbG9uZ2VyXG4gICAgIGNsaXBzIGluc2lkZSB0aGUgMmZyIGNvbHVtbi4gKi9cbiAgI21haW5NaWRkbGUge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIGF1dG8gYXV0bztcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgIFwic3BhY2VyMVwiXG4gICAgXCJ3ZWF0aGVyU2VjdGlvblwiXG4gICAgXCJ3ZWF0aGVyRGF0YVwiXG4gICAgXCJzcGFjZXIyXCJcbiAgICA7XG4gIH1cblxuICAvKiBMYXkgdGhlIGZvdXIgc3RhdHMgb3V0IGFzIGEgMsOXMiBncmlkLiAqL1xuICAjd2VhdGhlckRhdGEge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgIFwiYmxvY2sxIGJsb2NrMlwiXG4gICAgXCJibG9jazMgYmxvY2s0XCJcbiAgICA7XG4gICAgZ2FwOiA4cHg7XG4gICAgcGFkZGluZzogMTJweCAwO1xuICB9XG5cbiAgI3NwYWNlZDEsXG4gICNzcGFjZWQyLFxuICAjc3BhY2VkMyxcbiAgI3NwYWNlZDQsXG4gICNzcGFjZWQ1IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cblxuLyogTW9iaWxlOiBrZWVwIHRoZSBhcnJvd3MgZmxhbmtpbmcgdGhlIGNvbnRlbnQgKHJhdGhlciB0aGFuIHN0cmFuZGluZyB0aGVtXG4gICBhYm92ZS9iZWxvdyksIGFuZCBzdGFjayB0aGUgc2VhcmNoIGZvcm0gaW50byBhIHNpbmdsZSBjb2x1bW4uICovXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLyogQ2VudHJlIHRoZSB3aG9sZSBsYXlvdXQgaW4gdGhlIHZpZXdwb3J0IGluc3RlYWQgb2YgcGFya2luZyBpdCBiZWxvdyB0aGVcbiAgICAgdG9wIGVkZ2UuIGR2aCAobm90IHZoKSBzbyBpT1MgU2FmYXJpJ3MgZHluYW1pYyBVUkwgYmFyIGRvZXNuJ3QgcHVzaCB0aGVcbiAgICAgYm90dG9tIHVuZGVyIHRoZSB0b29sYmFyLiBIZWFkZXIvZm9vdGVyIHJvd3MgYW5kIHRoZSBtYWluIHJvdyBkcm9wIHRvXG4gICAgIGNvbnRlbnQgaGVpZ2h0IHNvIGFsaWduLWNvbnRlbnQgYWN0dWFsbHkgaGFzIHNsYWNrIHRvIGNlbnRyZS4gKi9cbiAgI291dGVyQ29udGFpbmVyIHtcbiAgICBtaW4taGVpZ2h0OiAxMDBkdmg7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byA3MHB4IGF1dG8gMjBweCAzNXB4IDkwcHggYXV0bztcbiAgfVxuXG4gIC8qIERyb3AgdGhlIGZvb3RlciBhY2NlbnQgZmlsbDsgaXQgcmVhZHMgYXMgYSBzdHJheSBiYXIgb24gbW9iaWxlLiAqL1xuICAjZm9vdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuXG4gIC8qIFJldmVhbCB0aGUgdGhyZWUtZG90IGRheSBpbmRpY2F0b3Igbm93IHRoYXQgdGhlIGFycm93cyBhcmUgc3dpcGVkIGF3YXkuICovXG4gICNkYXlEb3RzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG5cbiAgLyogRml4ZWQgbmFycm93IGd1dHRlcnMgc28gdGhlIGFycm93IHBhaXIgZmxhbmtzIHRoZSBjb250ZW50IGFuZCBuZXZlciBjbGlwc1xuICAgICBhZ2FpbnN0IHRoZSB2aWV3cG9ydCBlZGdlcy4gKi9cbiAgI3dlYXRoZXJPdXRlciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0NHB4IDFmciA0NHB4O1xuICB9XG5cbiAgLyogWmVybyB0aGUgc3BhY2VyIHJvd3Mgc28gZWFjaCBhcnJvdyBjZW50cmVzIHZlcnRpY2FsbHkgb24gdGhlIGNvbnRlbnQuICovXG4gICNpbm5lcjEsXG4gICNpbm5lcjIge1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMGZyIDFmciAwZnI7XG4gIH1cblxuICAvKiBIaWRlIHRoZSBhcnJvd3MgaW4gZmF2b3VyIG9mIHN3aXBlLiB2aXNpYmlsaXR5IChuZXZlciBzcmM9Jycgb3IgZGlzcGxheSlcbiAgICAgc28gdGhleSBrZWVwIHRoZWlyIDQ0cHggZ3V0dGVycyDigJQgdGhhdCdzIHdoYXQgdGhlIGNhcmQgYW5kIFN1Ym1pdCBhbGlnbiB0by5cbiAgICAgIWltcG9ydGFudCBiZWNhdXNlIHVwZGF0ZUFycm93cygpIHRvZ2dsZXMgdmlzaWJpbGl0eSBpbmxpbmUgcGVyIGRheSwgYW5kIGFuXG4gICAgIGlubGluZSBzdHlsZSB3b3VsZCBvdGhlcndpc2UgcmUtc2hvdyB0aGVtIGhlcmUuICovXG4gICNhcnJvd0xlZnQsXG4gICNhcnJvd1JpZ2h0IHtcbiAgICB3aWR0aDogMzJweDtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgfVxuXG4gIC8qIFNocmluayB0aGUgZ3JhcGhpYy90ZW1wZXJhdHVyZSBzbyAjd2VhdGhlclVwcGVyJ3MgdHJhY2tzIGZpdCBpbnNpZGUgdGhlXG4gICAgIG5hcnJvdyBzaW5nbGUgY29sdW1uIHJhdGhlciB0aGFuIHB1c2hpbmcgI21haW5NaWRkbGUgcGFzdCB0aGUgZWRnZS4gKi9cbiAgI3dlYXRoZXJJY29uIHtcbiAgICB3aWR0aDogODhweDtcbiAgfVxuXG4gICN0ZW1wVXBwZXIge1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgfVxuXG4gIC8qIEtlZXAgdGhlIGRhdGUgb24gb25lIGxpbmUgc28gaXQgc3RpbGwgcmVhZHMgYXMgYSBydWxlLiAqL1xuICAjZGF0ZU1haW4ge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB9XG5cbiAgLyogQ29sbGFwc2UgdGhlIHNwYWNlciByb3dzIHRvIGNvbnRlbnQgaGVpZ2h0IHNvIHRoZXkgc3RvcCBhYnNvcmJpbmcgdGhlIHNsYWNrXG4gICAgIHRoYXQgZmxvYXRlZCB0aGUgY2FyZCBiZWxvdyB0aGUgdG9wIGVkZ2U7IGFsaWduLWNvbnRlbnQ6Y2VudGVyIG9uXG4gICAgICNvdXRlckNvbnRhaW5lciBub3cgaGFuZGxlcyB2ZXJ0aWNhbCBjZW50cmluZyBpbnN0ZWFkLiAqL1xuICAjbWFpblRvcCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gYXV0bztcbiAgfVxuXG4gICNpbm5lck1haW4ge1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIGF1dG87XG4gIH1cblxuICAvKiA0NHB4IGhvcml6b250YWwgaW5zZXQgbWF0Y2hlcyAjbWFpbk1pZGRsZSdzIHBvc2l0aW9uIGluc2lkZSAjd2VhdGhlck91dGVyJ3NcbiAgICAgNDRweCB8IDFmciB8IDQ0cHggZ3V0dGVycywgc28gU3VibWl0IG5vIGxvbmdlciByZW5kZXJzIHdpZGVyIHRoYW4gdGhlIGNhcmRcbiAgICAgYWJvdmUgaXQuICovXG4gICNzcGFjZUZvcm0ge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgXCJmb3JtSW5wdXRcIlxuICAgIFwiZm9ybUJ1dHRvblwiXG4gICAgO1xuICAgIGdhcDogMTBweDtcbiAgICBwYWRkaW5nOiAwcHggNDRweDtcbiAgfVxuXG4gICNmb3JtU3BhY2UxLFxuICAjZm9ybVNwYWNlMixcbiAgI2Zvcm1TcGFjZTMsXG4gICNmb3JtU3BhY2U0IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLDRDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLDBCQUEwQjs7QUFFNUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2I7O21CQUVpQjtFQUNqQixrQkFBa0I7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K0I7RUFDakM7O0VBRUE7OztzREFHb0Q7RUFDcEQ7O0lBRUUsV0FBVztJQUNYLDZCQUE2QjtFQUMvQjs7RUFFQTswRUFDd0U7RUFDeEU7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBLDJEQUEyRDtFQUMzRDtJQUNFLGVBQWU7SUFDZixtQkFBbUI7RUFDckI7O0VBRUE7OzZEQUUyRDtFQUMzRDtJQUNFLGtDQUFrQztFQUNwQzs7RUFFQTtJQUNFLGtDQUFrQztFQUNwQzs7RUFFQTs7Z0JBRWM7RUFDZDtJQUNFLDBCQUEwQjtJQUMxQjs7O0lBR0E7SUFDQSxTQUFTO0lBQ1QsaUJBQWlCO0VBQ25COztFQUVBOzs7O0lBSUUsYUFBYTtFQUNmO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1dlYkZvbnQxJztcXG4gIHNyYzogdXJsKCcuL1JvYm90by1SZWd1bGFyLnR0ZicpO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBtYXJnaW46IDBweDtcXG4gIGZvbnQtZmFtaWx5OiAnV2ViRm9udDEnO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuXFxufVxcblxcbiNvdXRlckNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgLyogcG9zaXRpb246cmVsYXRpdmUgKyB6LWluZGV4OjAgbWFrZXMgdGhpcyBhIHN0YWNraW5nIGNvbnRleHQgc28gdGhlXFxuICAgICAjc2t5Q2FudmFzIGNoaWxkICh6LWluZGV4Oi0xKSBwYWludHMgT1ZFUiB0aGUgc2t5IGdyYWRpZW50IGJ1dCBVTkRFUiB0aGVcXG4gICAgIGFwcCBjb250ZW50LiAqL1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMDtcXG4gIG1pbi1oZWlnaHQ6IDExMHZoO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMHZoIDcwcHggMWZyIDIwcHggMzVweCA5MHB4IDIwdmg7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgXFxcImhlYWRlclxcXCJcXG4gIFxcXCJzcGFjZTFcXFwiXFxuICBcXFwibWFpblxcXCJcXG4gIFxcXCJzcGFjZTJcXFwiXFxuICBcXFwic3BhY2VGb3JtXFxcIlxcbiAgXFxcInNwYWNlM1xcXCJcXG4gIFxcXCJmb290ZXJcXFwiXFxuICA7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDQwMG1zIGVhc2U7XFxuXFxufVxcblxcbi8qIEFuaW1hdGVkIHBlci1jb25kaXRpb24gcGFydGljbGUgZmllbGQgKHNreS5qcykuIEFic29sdXRlbHkgcG9zaXRpb25lZCBzbyBpdFxcbiAgIG5ldmVyIGJlY29tZXMgYSBncmlkIGl0ZW0sIGJlaGluZCB0aGUgYXBwIGNvbnRlbnQsIGFuZCBjbGljay10aHJvdWdoLiAqL1xcbiNza3lDYW52YXMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaW5zZXQ6IDA7XFxuICB6LWluZGV4OiAtMTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIFxcbn1cXG5cXG4jc3BhY2UxIHtcXG4gIGdyaWQtYXJlYTogc3BhY2UxO1xcbn1cXG5cXG4jbWFpbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMTAwMHB4IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgXFxcInNpZGVTcGFjZTEgd2VhdGhlck91dGVyIHNpZGVTcGFjZTJcXFwiXFxuICA7XFxufVxcblxcbiNzaWRlU3BhY2UxIHtcXG4gIGdyaWQtYXJlYTogc2lkZVNwYWNlMTtcXG5cXG59XFxuXFxuI3dlYXRoZXJPdXRlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hcmVhOiB3ZWF0aGVyT3V0ZXI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICBcXFwiaW5uZXIxIGlubmVyTWFpbiBpbm5lcjJcXFwiXFxuICA7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4jaW5uZXIxIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWFyZWE6IGlubmVyMTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogM2ZyIDAuNWZyIDNmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gIFxcXCIuIHVwcGVyTGVmdCAuXFxcIlxcbiAgXFxcIi4gYXJyb3dMZWZ0IC5cXFwiXFxuICBcXFwiLiBsb3dlckxlZnQgLlxcXCJcXG4gIDtcXG59XFxuXFxuI3VwcGVyTGVmdCB7XFxuICBncmlkLWFyZWE6IHVwcGVyTGVmdDtcXG5cXG59XFxuXFxuI2Fycm93TGVmdCB7XFxuICBncmlkLWFyZWE6IGFycm93TGVmdDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdpZHRoOiA2NXB4O1xcbn1cXG5cXG4jbG93ZXJMZWZ0IHtcXG4gIGdyaWQtYXJlYTogbG93ZXJMZWZ0O1xcblxcbn1cXG5cXG4jaW5uZXJNYWluIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA0ZnIgMC41ZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gIFxcXCJtYWluVG9wXFxcIlxcbiAgXFxcIm1haW5NaWRkbGVcXFwiXFxuICBcXFwibWFpbkJvdHRvbVxcXCJcXG4gIDtcXG4gIGdyaWQtYXJlYTogaW5uZXJNYWluO1xcbn1cXG5cXG5cXG4jbWFpblRvcCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hcmVhOiBtYWluVG9wO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDNmciAyZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gIFxcXCJ1cHBlclNlY3Rpb24gdXBwZXJTZWN0aW9uIHVwcGVyU2VjdGlvblxcXCJcXG4gIFxcXCIuIGRhdGVTZWN0aW9uIC5cXFwiXFxuICBcXFwibG93ZXJTZWN0aW9uIGxvd2VyU2VjdGlvbiBsb3dlclNlY3Rpb25cXFwiXFxuICA7XFxuXFxufVxcblxcbiN1cHBlclNlY3Rpb24ge1xcbiAgZ3JpZC1hcmVhOiB1cHBlclNlY3Rpb247XFxuXFxufVxcblxcbiNkYXRlU2VjdGlvbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hcmVhOiBkYXRlU2VjdGlvbjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDNmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gIFxcXCJkYXRlU3BhY2UxXFxcIlxcbiAgXFxcImRhdGVNYWluXFxcIlxcbiAgXFxcImRhdGVTcGFjZTJcXFwiXFxuICA7XFxuICBcXG59XFxuXFxuI2RhdGVTcGFjZTEge1xcbiAgZ3JpZC1hcmVhOiBkYXRlU3BhY2UxO1xcbiAgXFxufVxcblxcbiNkYXRlTWFpbiB7XFxuICBncmlkLWFyZWE6IGRhdGVNYWluO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDAuNXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICBcXG4gIGJvcmRlci1yaWdodDogbm9uZTtcXG4gIFxcbiAgZm9udC1zaXplOiAyNnB4O1xcbn1cXG5cXG4jZGF0ZVNwYWNlMiB7XFxuICBncmlkLWFyZWE6IGRhdGVTcGFjZTI7XFxuICBcXG59XFxuXFxuI2xvd2VyU2VjdGlvbiB7XFxuICBncmlkLWFyZWE6IGxvd2VyU2VjdGlvbjtcXG5cXG59XFxuXFxuXFxuXFxuI21haW5NaWRkbGUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIC8qIEZyb3N0ZWQgY2FyZDogYSB0cmFuc2x1Y2VudCB3aGl0ZSBwYW5lIGJsdXJyaW5nIHRoZSBhbmltYXRlZCBza3kgYmVoaW5kIGl0LlxcbiAgICAgI3dlYXRoZXJVcHBlciBjYXJyaWVzIG5vIGJhY2tncm91bmQgYW5kICN3ZWF0aGVyRGF0YSBkcm9wcyBpdHMgd2hpdGUgYmVsb3csXFxuICAgICBzbyB0aGV5IGluaGVyaXQgdGhlIGZyb3N0IGluc3RlYWQgb2YgcHVuY2hpbmcgb3BhcXVlIGhvbGVzIHRocm91Z2ggaXQuICovXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTgpO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDExcHgpIHNhdHVyYXRlKDEuMTUpO1xcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTFweCkgc2F0dXJhdGUoMS4xNSk7XFxuICBncmlkLWFyZWE6IG1haW5NaWRkbGU7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA2ZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMCwgMWZyKSBtaW5tYXgoMCwgNWZyKSBtaW5tYXgoMCwgMWZyKSBtaW5tYXgoMCwgMmZyKSBtaW5tYXgoMCwgMC41ZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gIFxcXCJzcGFjZXIxIHNwYWNlcjEgc3BhY2VyMSBzcGFjZXIxIHNwYWNlcjFcXFwiXFxuICBcXFwiLiB3ZWF0aGVyU2VjdGlvbiAuIHdlYXRoZXJEYXRhIC5cXFwiXFxuICBcXFwic3BhY2VyMiBzcGFjZXIyIHNwYWNlcjIgc3BhY2VyMiBzcGFjZXIyXFxcIlxcbiAgO1xcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xcbiAgYm94LXNoYWRvdzogMHB4IDJweCAxMXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG59XFxuXFxuI3NwYWNlcjEge1xcbiAgZ3JpZC1hcmVhOiBzcGFjZXIxO1xcbiAgXFxufVxcblxcbiNzcGFjZXIyIHtcXG4gIGdyaWQtYXJlYTogc3BhY2VyMjtcXG5cXG59XFxuXFxuI3dlYXRoZXJTZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDNmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gIFxcXCJ3ZWF0aGVyVXBwZXJcXFwiXFxuICBcXFwid2VhdGhlckxvd2VyXFxcIlxcbiAgO1xcbiAgZ3JpZC1hcmVhOiB3ZWF0aGVyU2VjdGlvbjtcXG4gIFxcbn1cXG5cXG4jd2VhdGhlclVwcGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICAvKiBXaGl0ZSBjb21lcyBmcm9tIHRoZSAjbWFpbk1pZGRsZSBjYXJkIHNvIHRoZSByb3VuZGVkIGNvcm5lcnMgZnJhbWUgd2hpdGUsXFxuICAgICBub3QgYSBoYXJkIHNxdWFyZSBlZGdlIG92ZXIgdGhlIHBhZ2UgZ3JhZGllbnQuICovXFxuICBncmlkLWFyZWE6IHdlYXRoZXJVcHBlcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMC41ZnIgMmZyIDAuNWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDAsIDFmcikgbWlubWF4KDAsIDRmcikgbWlubWF4KDAsIDFmcikgbWlubWF4KDAsIDJmcikgbWlubWF4KDAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gIFxcXCIuIC4gLiAuIC4gXFxcIlxcbiAgXFxcIi4gd2VhdGhlckljb24gLiB3ZWF0aGVyVGVtcHMgLiBcXFwiXFxuICBcXFwiLiAuIC4gLiAuIFxcXCJcXG4gIFxcXCIuIHdlYXRoZXJMb2NhdGlvbiB3ZWF0aGVyTG9jYXRpb24gd2VhdGhlckxvY2F0aW9uIC4gXFxcIlxcbiAgO1xcbn1cXG5cXG4jd2VhdGhlckljb24ge1xcbiAgZ3JpZC1hcmVhOiB3ZWF0aGVySWNvbjtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgd2lkdGg6IDE0MHB4O1xcbn1cXG5cXG4jd2VhdGhlclRlbXBzIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWFyZWE6IHdlYXRoZXJUZW1wcztcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICBcXFwidGVtcFVwcGVyXFxcIlxcbiAgXFxcInRlbXBMb3dlclxcXCJcXG4gIDtcXG59XFxuXFxuI3dlYXRoZXJMb2NhdGlvbiB7XFxuICBncmlkLWFyZWE6IHdlYXRoZXJMb2NhdGlvbjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuI3RlbXBVcHBlciB7XFxuICBncmlkLWFyZWE6IHRlbXBVcHBlcjtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG4gIGZvbnQtc2l6ZTogMzZweDtcXG4gIFxcbn1cXG5cXG4jdGVtcExvd2VyIHtcXG4gIGdyaWQtYXJlYTogdGVtcExvd2VyO1xcbiAgXFxufVxcblxcblxcbiN3ZWF0aGVyTG93ZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICBcXFwiLiB0eXBlVXBwZXIgLlxcXCJcXG4gIFxcXCIuIHdlYXRoZXJUeXBlIC5cXFwiXFxuICBcXFwiLiB0eXBlTG93ZXIgLlxcXCJcXG4gIDtcXG4gIGdyaWQtYXJlYTogd2VhdGhlckxvd2VyO1xcbn1cXG5cXG4jdHlwZVVwcGVyIHtcXG4gIGdyaWQtYXJlYTogdHlwZVVwcGVyO1xcbn1cXG5cXG4jd2VhdGhlclR5cGUge1xcbiAgZ3JpZC1hcmVhOiB3ZWF0aGVyVHlwZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItbGVmdDogbm9uZTtcXG4gIGJvcmRlci1yaWdodDogbm9uZTtcXG4gIGJvcmRlci10b3A6IG5vbmU7XFxufVxcblxcbiN0eXBlTG93ZXIge1xcbiAgZ3JpZC1hcmVhOiB0eXBlTG93ZXI7XFxuXFxufVxcblxcblxcbiN3ZWF0aGVyRGF0YSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgLyogTm8gYmFja2dyb3VuZDogaW5oZXJpdCB0aGUgZnJvc3RlZCAjbWFpbk1pZGRsZSBjYXJkIHJhdGhlciB0aGFuIHB1bmNoaW5nIGFuXFxuICAgICBvcGFxdWUgd2hpdGUgYmxvY2sgdGhyb3VnaCB0aGUgZnJvc3QuICovXFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGdyaWQtYXJlYTogd2VhdGhlckRhdGE7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDNmciAwLjVmciAzZnIgMC41ZnIgM2ZyIDAuNWZyIDNmciAwLjVmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICBcXFwic3BhY2VkMVxcXCJcXG4gIFxcXCJibG9jazFcXFwiXFxuICBcXFwic3BhY2VkMlxcXCJcXG4gIFxcXCJibG9jazJcXFwiXFxuICBcXFwic3BhY2VkM1xcXCJcXG4gIFxcXCJibG9jazNcXFwiXFxuICBcXFwic3BhY2VkNFxcXCJcXG4gIFxcXCJibG9jazRcXFwiXFxuICBcXFwic3BhY2VkNVxcXCJcXG4gIDtcXG59XFxuXFxuI3NwYWNlZDEge1xcbiAgZ3JpZC1hcmVhOiBzcGFjZWQxO1xcblxcbn1cXG4jYmxvY2sxIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWFyZWE6IGJsb2NrMTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgXFxcImJsb2NrMUxlZnQgYmxvY2sxUmlnaHRcXFwiXFxuICA7XFxufVxcblxcbiNibG9jazFMZWZ0IHtcXG4gIGdyaWQtYXJlYTogYmxvY2sxTGVmdDtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgcGFkZGluZy1yaWdodDogNXB4OyAgICBcXG4gIHdpZHRoOiAzNXB4O1xcbn1cXG5cXG4jYmxvY2sxUmlnaHQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXJlYTogYmxvY2sxUmlnaHQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAyZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gIFxcXCJibG9jazFUb3BcXFwiXFxuICBcXFwiYmxvY2sxQm90dG9tXFxcIlxcbiAgO1xcbn1cXG5cXG4jYmxvY2sxVG9wIHtcXG4gIGdyaWQtYXJlYTogYmxvY2sxVG9wO1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbiNibG9jazFCb3R0b20ge1xcbiAgZ3JpZC1hcmVhOiBibG9jazFCb3R0b207XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbiNzcGFjZWQyIHtcXG4gIGdyaWQtYXJlYTogc3BhY2VkMjtcXG4gIFxcbn1cXG5cXG4jYmxvY2syIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWFyZWE6IGJsb2NrMjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgXFxcImJsb2NrMkxlZnQgYmxvY2syUmlnaHRcXFwiXFxuICA7XFxufVxcblxcbiNibG9jazJMZWZ0IHtcXG4gIGdyaWQtYXJlYTogYmxvY2syTGVmdDtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgcGFkZGluZy1yaWdodDogNXB4OyAgXFxuICB3aWR0aDogMzVweDtcXG5cXG59XFxuXFxuI2Jsb2NrMlJpZ2h0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWFyZWE6IGJsb2NrMlJpZ2h0O1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICBcXFwiYmxvY2syVG9wXFxcIlxcbiAgXFxcImJsb2NrMkJvdHRvbVxcXCJcXG4gIDtcXG59XFxuXFxuI2Jsb2NrMlRvcCB7XFxuICBncmlkLWFyZWE6IGJsb2NrMlRvcDtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG4jYmxvY2syQm90dG9tIHtcXG4gIGdyaWQtYXJlYTogYmxvY2syQm90dG9tO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG5cXG5cXG4jc3BhY2VkMyB7XFxuICBncmlkLWFyZWE6IHNwYWNlZDM7XFxuXFxufVxcblxcbiNibG9jazMge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXJlYTogYmxvY2szO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICBcXFwiYmxvY2szTGVmdCBibG9jazNSaWdodFxcXCJcXG4gIDtcXG59XFxuXFxuI2Jsb2NrM0xlZnQge1xcbiAgZ3JpZC1hcmVhOiBibG9jazNMZWZ0O1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxuICB3aWR0aDogMzVweDtcXG59XFxuXFxuI2Jsb2NrM1JpZ2h0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWFyZWE6IGJsb2NrM1JpZ2h0O1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICBcXFwiYmxvY2szVG9wXFxcIlxcbiAgXFxcImJsb2NrM0JvdHRvbVxcXCJcXG4gIDtcXG59XFxuXFxuI2Jsb2NrM1RvcCB7XFxuICBncmlkLWFyZWE6IGJsb2NrM1RvcDtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG4jYmxvY2szQm90dG9tIHtcXG4gIGdyaWQtYXJlYTogYmxvY2szQm90dG9tO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG5cXG4jc3BhY2VkNCB7XFxuICBncmlkLWFyZWE6IHNwYWNlZDQ7XFxuXFxufVxcblxcbiNibG9jazQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXJlYTogYmxvY2s0O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICBcXFwiYmxvY2s0TGVmdCBibG9jazRSaWdodFxcXCJcXG4gIDtcXG59XFxuXFxuI2Jsb2NrNExlZnQge1xcbiAgZ3JpZC1hcmVhOiBibG9jazRMZWZ0O1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxuICB3aWR0aDogMzVweDtcXG59XFxuXFxuI2Jsb2NrNFJpZ2h0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWFyZWE6IGJsb2NrNFJpZ2h0O1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICBcXFwiYmxvY2s0VG9wXFxcIlxcbiAgXFxcImJsb2NrNEJvdHRvbVxcXCJcXG4gIDtcXG59XFxuXFxuI2Jsb2NrNFRvcCB7XFxuICBncmlkLWFyZWE6IGJsb2NrNFRvcDtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG4jYmxvY2s0Qm90dG9tIHtcXG4gIGdyaWQtYXJlYTogYmxvY2s0Qm90dG9tO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4jc3BhY2VkNSB7XFxuICBncmlkLWFyZWE6IHNwYWNlZDU7XFxuXFxufVxcblxcblxcbiNtYWluQm90dG9tIHtcXG4gIGdyaWQtYXJlYTogbWFpbkJvdHRvbTtcXG59XFxuXFxuXFxuI2lubmVyMiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hcmVhOiBpbm5lcjI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDNmciAwLjVmciAzZnI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICBcXFwiLiB1cHBlclJpZ2h0IC5cXFwiXFxuICBcXFwiLiBhcnJvd1JpZ2h0IC5cXFwiXFxuICBcXFwiLiBsb3dlclJpZ2h0IC5cXFwiXFxuICA7XFxufVxcblxcbiN1cHBlclJpZ2h0IHtcXG4gIGdyaWQtYXJlYTogdXBwZXJSaWdodDtcXG5cXG59XFxuXFxuI2Fycm93UmlnaHQge1xcbiAgZ3JpZC1hcmVhOiBhcnJvd1JpZ2h0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgd2lkdGg6IDY1cHg7XFxufVxcblxcbiNsb3dlclJpZ2h0IHtcXG4gIGdyaWQtYXJlYTogbG93ZXJSaWdodDtcXG5cXG59XFxuXFxuI3NpZGVTcGFjZTIge1xcbiAgZ3JpZC1hcmVhOiBzaWRlU3BhY2UyO1xcblxcbn1cXG5cXG5cXG4jc3BhY2UyIHtcXG4gIGdyaWQtYXJlYTogc3BhY2UyO1xcblxcbn1cXG5cXG4jc3BhY2VGb3JtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWFyZWE6IHNwYWNlRm9ybTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciA0NTBweCAxNXB4IDEwMHB4IDJmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgXFxcImZvcm1TcGFjZTEgZm9ybVNwYWNlMiBmb3JtSW5wdXQgZm9ybVNwYWNlMyBmb3JtQnV0dG9uIGZvcm1TcGFjZTRcXFwiXFxuICA7XFxufVxcblxcbiNmb3JtU3BhY2UxIHtcXG4gIGdyaWQtYXJlYTogZm9ybVNwYWNlMTtcXG5cXG59XFxuI2Zvcm1TcGFjZTIge1xcbiAgZ3JpZC1hcmVhOiBmb3JtU3BhY2UyO1xcblxcbn1cXG4jZm9ybUlucHV0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWFyZWE6IGZvcm1JbnB1dDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDE4ZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICBcXFwiLiBpbnB1dElubmVyIC5cXFwiXFxuICA7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuI2lucHV0SW5uZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXJlYTogaW5wdXRJbm5lcjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuI2lucHV0SW5uZXI6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG5cXG59XFxuXFxuI2Zvcm1CdXR0b24ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXJlYTogZm9ybUJ1dHRvbjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNXB4IDFmciA1cHg7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICcuJ1xcbiAgJ2J1dHRvblRleHQnXFxuICAnLidcXG4gIDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtanVzdGlmeTogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4jYnV0dG9uVGV4dCB7XFxuICBncmlkLWFyZWE6IGJ1dHRvblRleHQ7XFxufVxcblxcbiNmb3JtU3BhY2UzIHtcXG4gIGdyaWQtYXJlYTogZm9ybVNwYWNlMztcXG5cXG59XFxuI2Zvcm1TcGFjZTQge1xcbiAgZ3JpZC1hcmVhOiBmb3JtU3BhY2U0O1xcblxcbn1cXG5cXG5cXG4jc3BhY2UzIHtcXG4gIGdyaWQtYXJlYTogc3BhY2UzO1xcbn1cXG5cXG4jZm9vdGVyIHtcXG4gIGdyaWQtYXJlYTogZm9vdGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG59XFxuXFxuXFxuLyogSG92ZXIgdHJlYXRtZW50cyAobW92ZWQgb3V0IG9mIGluZGV4LmpzIHNvIHRoZXkgbmV2ZXIgcGVyc2lzdCBhcyBpbmxpbmVcXG4gICBzdHlsZXMgdGhhdCB3b3VsZCBvdmVycmlkZSB0aGUgdGhlbWVkIGFjY2VudCkuICovXFxuI2Fycm93TGVmdDpob3ZlcixcXG4jYXJyb3dSaWdodDpob3ZlciB7XFxuICBib3gtc2hhZG93OiAwIDZweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbiNmb3JtQnV0dG9uOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDAgNnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45KTtcXG59XFxuXFxuXFxuLyogUGVyLXdlYXRoZXIgdGhlbWluZy4gYWRqdXN0V2VhdGhlcigpIGluIGluZGV4Q2hhbmdlcy5qcyBzZXRzIGFcXG4gICB3ZWF0aGVyLXsuLi59IGNsYXNzIG9uICNvdXRlckNvbnRhaW5lcjsgdGhlIGNsYXNzIGRyaXZlcyBhIHZlcnRpY2FsIHNreVxcbiAgIGdyYWRpZW50IHBsdXMgYSBtYXRjaGluZyBhY2NlbnQgb24gdGhlIHR3byB1bmRlcmxpbmUgcnVsZXMgKCNkYXRlTWFpbixcXG4gICAjd2VhdGhlclR5cGUpLCAjZm9vdGVyIGFuZCAjZm9ybUJ1dHRvbi4gVGhlIHdoaXRlIGNhcmRzIHN0YXkgd2hpdGUuICovXFxuI291dGVyQ29udGFpbmVyLndlYXRoZXItbmV1dHJhbCAgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjOGZhM2IwLCAjYzNjZWQ1KTsgfVxcbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLXJhaW4gICAgIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzQ2NjA2ZSwgIzgxOTlhNCk7IH1cXG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1zbm93ICAgICB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICM4ZmIwY2MsICNkY2U4ZjIpOyB9XFxuI291dGVyQ29udGFpbmVyLndlYXRoZXItaGFpbCAgICAgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjNTY2NTczLCAjOWFhOGI1KTsgfVxcbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLXBhcnRseSAgIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzViOTBjNCwgI2FmZDBlYSk7IH1cXG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1zdW5ueSAgICB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICM0YTk0ZGQsICNjZGVhZmEpOyB9XFxuI291dGVyQ29udGFpbmVyLndlYXRoZXItZm9nICAgICAgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjOTdhMWE5LCAjZDJkOGRkKTsgfVxcbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLW92ZXJjYXN0IHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzZiNzU3ZCwgI2E3YjBiNyk7IH1cXG5cXG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1uZXV0cmFsICNmb290ZXIsXFxuI291dGVyQ29udGFpbmVyLndlYXRoZXItbmV1dHJhbCAjZm9ybUJ1dHRvbiB7IGJhY2tncm91bmQtY29sb3I6ICM2Yjc4ODM7IH1cXG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1uZXV0cmFsICNkYXRlTWFpbixcXG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1uZXV0cmFsICN3ZWF0aGVyVHlwZSB7IGJvcmRlci1jb2xvcjogIzZiNzg4MzsgfVxcblxcbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLXJhaW4gI2Zvb3RlcixcXG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1yYWluICNmb3JtQnV0dG9uIHsgYmFja2dyb3VuZC1jb2xvcjogIzNjNTU2MTsgfVxcbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLXJhaW4gI2RhdGVNYWluLFxcbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLXJhaW4gI3dlYXRoZXJUeXBlIHsgYm9yZGVyLWNvbG9yOiAjM2M1NTYxOyB9XFxuXFxuI291dGVyQ29udGFpbmVyLndlYXRoZXItc25vdyAjZm9vdGVyLFxcbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLXNub3cgI2Zvcm1CdXR0b24geyBiYWNrZ3JvdW5kLWNvbG9yOiAjNWY4MmE2OyB9XFxuI291dGVyQ29udGFpbmVyLndlYXRoZXItc25vdyAjZGF0ZU1haW4sXFxuI291dGVyQ29udGFpbmVyLndlYXRoZXItc25vdyAjd2VhdGhlclR5cGUgeyBib3JkZXItY29sb3I6ICM1ZjgyYTY7IH1cXG5cXG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1oYWlsICNmb290ZXIsXFxuI291dGVyQ29udGFpbmVyLndlYXRoZXItaGFpbCAjZm9ybUJ1dHRvbiB7IGJhY2tncm91bmQtY29sb3I6ICM0OTU2NjM7IH1cXG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1oYWlsICNkYXRlTWFpbixcXG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1oYWlsICN3ZWF0aGVyVHlwZSB7IGJvcmRlci1jb2xvcjogIzQ5NTY2MzsgfVxcblxcbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLXBhcnRseSAjZm9vdGVyLFxcbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLXBhcnRseSAjZm9ybUJ1dHRvbiB7IGJhY2tncm91bmQtY29sb3I6ICMzZjc5YjM7IH1cXG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1wYXJ0bHkgI2RhdGVNYWluLFxcbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLXBhcnRseSAjd2VhdGhlclR5cGUgeyBib3JkZXItY29sb3I6ICMzZjc5YjM7IH1cXG5cXG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1zdW5ueSAjZm9vdGVyLFxcbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLXN1bm55ICNmb3JtQnV0dG9uIHsgYmFja2dyb3VuZC1jb2xvcjogI2UzOWExYzsgfVxcbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLXN1bm55ICNkYXRlTWFpbixcXG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1zdW5ueSAjd2VhdGhlclR5cGUgeyBib3JkZXItY29sb3I6ICNlMzlhMWM7IH1cXG5cXG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1mb2cgI2Zvb3RlcixcXG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1mb2cgI2Zvcm1CdXR0b24geyBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc4MjhhOyB9XFxuI291dGVyQ29udGFpbmVyLndlYXRoZXItZm9nICNkYXRlTWFpbixcXG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1mb2cgI3dlYXRoZXJUeXBlIHsgYm9yZGVyLWNvbG9yOiAjNzc4MjhhOyB9XFxuXFxuI291dGVyQ29udGFpbmVyLndlYXRoZXItb3ZlcmNhc3QgI2Zvb3RlcixcXG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1vdmVyY2FzdCAjZm9ybUJ1dHRvbiB7IGJhY2tncm91bmQtY29sb3I6ICM1YTY0NmI7IH1cXG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1vdmVyY2FzdCAjZGF0ZU1haW4sXFxuI291dGVyQ29udGFpbmVyLndlYXRoZXItb3ZlcmNhc3QgI3dlYXRoZXJUeXBlIHsgYm9yZGVyLWNvbG9yOiAjNWE2NDZiOyB9XFxuXFxuXFxuLyogUGVyLXdlYXRoZXIgYWNjZW50IGFzIGEgY3VzdG9tIHByb3BlcnR5IHNvIHRoZSBhY3RpdmUgc3dpcGUgZG90IGNhbiBwaWNrIGl0XFxuICAgdXAgKHZhcigtLWFjY2VudCkpLiBNaXJyb3JzIHRoZSBhY2NlbnQgY29sb3VycyB1c2VkIG9uICNmb290ZXIvI2Zvcm1CdXR0b24uICovXFxuI291dGVyQ29udGFpbmVyLndlYXRoZXItbmV1dHJhbCAgeyAtLWFjY2VudDogIzZiNzg4MzsgfVxcbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLXJhaW4gICAgIHsgLS1hY2NlbnQ6ICMzYzU1NjE7IH1cXG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1zbm93ICAgICB7IC0tYWNjZW50OiAjNWY4MmE2OyB9XFxuI291dGVyQ29udGFpbmVyLndlYXRoZXItaGFpbCAgICAgeyAtLWFjY2VudDogIzQ5NTY2MzsgfVxcbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLXBhcnRseSAgIHsgLS1hY2NlbnQ6ICMzZjc5YjM7IH1cXG4jb3V0ZXJDb250YWluZXIud2VhdGhlci1zdW5ueSAgICB7IC0tYWNjZW50OiAjZTM5YTFjOyB9XFxuI291dGVyQ29udGFpbmVyLndlYXRoZXItZm9nICAgICAgeyAtLWFjY2VudDogIzc3ODI4YTsgfVxcbiNvdXRlckNvbnRhaW5lci53ZWF0aGVyLW92ZXJjYXN0IHsgLS1hY2NlbnQ6ICM1YTY0NmI7IH1cXG5cXG5cXG4vKiBUaHJlZS1kb3QgZGF5IGluZGljYXRvci4gSGlkZGVuIG9uIGRlc2t0b3AgKHRoZSDigLkg4oC6IGFycm93cyBhcmUgdGhlXFxuICAgYWZmb3JkYW5jZSB0aGVyZSk7IHNob3duIHVuZGVyIHRoZSBjYXJkIGF0IDw9NDgwcHggd2hlcmUgc3dpcGUgdGFrZXMgb3Zlci4gKi9cXG4jZGF5RG90cyB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxuICBwYWRkaW5nOiAxMHB4IDA7XFxufVxcblxcbiNkYXlEb3RzIC5kb3Qge1xcbiAgd2lkdGg6IDlweDtcXG4gIGhlaWdodDogOXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjE4KTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMjAwbXMgZWFzZTtcXG59XFxuXFxuI2RheURvdHMgLmRvdC5hY3RpdmUge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LCAjNmI3ODgzKTtcXG59XFxuXFxuXFxuLyogVGFibGV0OiBjb2xsYXBzZSAjbWFpbiB0byBhIHNpbmdsZSB3ZWF0aGVyT3V0ZXIgY29sdW1uIGFuZCBzaHJpbmsgdGhlIHNlYXJjaCBmb3JtICovXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAjbWFpbiB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwid2VhdGhlck91dGVyXFxcIlxcbiAgICA7XFxuICB9XFxuXFxuICAjc2lkZVNwYWNlMSxcXG4gICNzaWRlU3BhY2UyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gICNzcGFjZUZvcm0ge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMjgwcHggMTVweCAxMDBweCAyZnI7XFxuICB9XFxuXFxuICAvKiBTdGFjayB0aGUgd2VhdGhlciBncmFwaGljIGFib3ZlIHRoZSBzdGF0cyBzbyAjd2VhdGhlckRhdGEgbm8gbG9uZ2VyXFxuICAgICBjbGlwcyBpbnNpZGUgdGhlIDJmciBjb2x1bW4uICovXFxuICAjbWFpbk1pZGRsZSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byBhdXRvIGF1dG87XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJzcGFjZXIxXFxcIlxcbiAgICBcXFwid2VhdGhlclNlY3Rpb25cXFwiXFxuICAgIFxcXCJ3ZWF0aGVyRGF0YVxcXCJcXG4gICAgXFxcInNwYWNlcjJcXFwiXFxuICAgIDtcXG4gIH1cXG5cXG4gIC8qIExheSB0aGUgZm91ciBzdGF0cyBvdXQgYXMgYSAyw5cyIGdyaWQuICovXFxuICAjd2VhdGhlckRhdGEge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwiYmxvY2sxIGJsb2NrMlxcXCJcXG4gICAgXFxcImJsb2NrMyBibG9jazRcXFwiXFxuICAgIDtcXG4gICAgZ2FwOiA4cHg7XFxuICAgIHBhZGRpbmc6IDEycHggMDtcXG4gIH1cXG5cXG4gICNzcGFjZWQxLFxcbiAgI3NwYWNlZDIsXFxuICAjc3BhY2VkMyxcXG4gICNzcGFjZWQ0LFxcbiAgI3NwYWNlZDUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5cXG5cXG4vKiBNb2JpbGU6IGtlZXAgdGhlIGFycm93cyBmbGFua2luZyB0aGUgY29udGVudCAocmF0aGVyIHRoYW4gc3RyYW5kaW5nIHRoZW1cXG4gICBhYm92ZS9iZWxvdyksIGFuZCBzdGFjayB0aGUgc2VhcmNoIGZvcm0gaW50byBhIHNpbmdsZSBjb2x1bW4uICovXFxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxuICAvKiBDZW50cmUgdGhlIHdob2xlIGxheW91dCBpbiB0aGUgdmlld3BvcnQgaW5zdGVhZCBvZiBwYXJraW5nIGl0IGJlbG93IHRoZVxcbiAgICAgdG9wIGVkZ2UuIGR2aCAobm90IHZoKSBzbyBpT1MgU2FmYXJpJ3MgZHluYW1pYyBVUkwgYmFyIGRvZXNuJ3QgcHVzaCB0aGVcXG4gICAgIGJvdHRvbSB1bmRlciB0aGUgdG9vbGJhci4gSGVhZGVyL2Zvb3RlciByb3dzIGFuZCB0aGUgbWFpbiByb3cgZHJvcCB0b1xcbiAgICAgY29udGVudCBoZWlnaHQgc28gYWxpZ24tY29udGVudCBhY3R1YWxseSBoYXMgc2xhY2sgdG8gY2VudHJlLiAqL1xcbiAgI291dGVyQ29udGFpbmVyIHtcXG4gICAgbWluLWhlaWdodDogMTAwZHZoO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byA3MHB4IGF1dG8gMjBweCAzNXB4IDkwcHggYXV0bztcXG4gIH1cXG5cXG4gIC8qIERyb3AgdGhlIGZvb3RlciBhY2NlbnQgZmlsbDsgaXQgcmVhZHMgYXMgYSBzdHJheSBiYXIgb24gbW9iaWxlLiAqL1xcbiAgI2Zvb3RlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgfVxcblxcbiAgLyogUmV2ZWFsIHRoZSB0aHJlZS1kb3QgZGF5IGluZGljYXRvciBub3cgdGhhdCB0aGUgYXJyb3dzIGFyZSBzd2lwZWQgYXdheS4gKi9cXG4gICNkYXlEb3RzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gIH1cXG5cXG4gIC8qIEZpeGVkIG5hcnJvdyBndXR0ZXJzIHNvIHRoZSBhcnJvdyBwYWlyIGZsYW5rcyB0aGUgY29udGVudCBhbmQgbmV2ZXIgY2xpcHNcXG4gICAgIGFnYWluc3QgdGhlIHZpZXdwb3J0IGVkZ2VzLiAqL1xcbiAgI3dlYXRoZXJPdXRlciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDRweCAxZnIgNDRweDtcXG4gIH1cXG5cXG4gIC8qIFplcm8gdGhlIHNwYWNlciByb3dzIHNvIGVhY2ggYXJyb3cgY2VudHJlcyB2ZXJ0aWNhbGx5IG9uIHRoZSBjb250ZW50LiAqL1xcbiAgI2lubmVyMSxcXG4gICNpbm5lcjIge1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDBmciAxZnIgMGZyO1xcbiAgfVxcblxcbiAgLyogSGlkZSB0aGUgYXJyb3dzIGluIGZhdm91ciBvZiBzd2lwZS4gdmlzaWJpbGl0eSAobmV2ZXIgc3JjPScnIG9yIGRpc3BsYXkpXFxuICAgICBzbyB0aGV5IGtlZXAgdGhlaXIgNDRweCBndXR0ZXJzIOKAlCB0aGF0J3Mgd2hhdCB0aGUgY2FyZCBhbmQgU3VibWl0IGFsaWduIHRvLlxcbiAgICAgIWltcG9ydGFudCBiZWNhdXNlIHVwZGF0ZUFycm93cygpIHRvZ2dsZXMgdmlzaWJpbGl0eSBpbmxpbmUgcGVyIGRheSwgYW5kIGFuXFxuICAgICBpbmxpbmUgc3R5bGUgd291bGQgb3RoZXJ3aXNlIHJlLXNob3cgdGhlbSBoZXJlLiAqL1xcbiAgI2Fycm93TGVmdCxcXG4gICNhcnJvd1JpZ2h0IHtcXG4gICAgd2lkdGg6IDMycHg7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgLyogU2hyaW5rIHRoZSBncmFwaGljL3RlbXBlcmF0dXJlIHNvICN3ZWF0aGVyVXBwZXIncyB0cmFja3MgZml0IGluc2lkZSB0aGVcXG4gICAgIG5hcnJvdyBzaW5nbGUgY29sdW1uIHJhdGhlciB0aGFuIHB1c2hpbmcgI21haW5NaWRkbGUgcGFzdCB0aGUgZWRnZS4gKi9cXG4gICN3ZWF0aGVySWNvbiB7XFxuICAgIHdpZHRoOiA4OHB4O1xcbiAgfVxcblxcbiAgI3RlbXBVcHBlciB7XFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXG4gIH1cXG5cXG4gIC8qIEtlZXAgdGhlIGRhdGUgb24gb25lIGxpbmUgc28gaXQgc3RpbGwgcmVhZHMgYXMgYSBydWxlLiAqL1xcbiAgI2RhdGVNYWluIHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgfVxcblxcbiAgLyogQ29sbGFwc2UgdGhlIHNwYWNlciByb3dzIHRvIGNvbnRlbnQgaGVpZ2h0IHNvIHRoZXkgc3RvcCBhYnNvcmJpbmcgdGhlIHNsYWNrXFxuICAgICB0aGF0IGZsb2F0ZWQgdGhlIGNhcmQgYmVsb3cgdGhlIHRvcCBlZGdlOyBhbGlnbi1jb250ZW50OmNlbnRlciBvblxcbiAgICAgI291dGVyQ29udGFpbmVyIG5vdyBoYW5kbGVzIHZlcnRpY2FsIGNlbnRyaW5nIGluc3RlYWQuICovXFxuICAjbWFpblRvcCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIGF1dG87XFxuICB9XFxuXFxuICAjaW5uZXJNYWluIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gYXV0bztcXG4gIH1cXG5cXG4gIC8qIDQ0cHggaG9yaXpvbnRhbCBpbnNldCBtYXRjaGVzICNtYWluTWlkZGxlJ3MgcG9zaXRpb24gaW5zaWRlICN3ZWF0aGVyT3V0ZXInc1xcbiAgICAgNDRweCB8IDFmciB8IDQ0cHggZ3V0dGVycywgc28gU3VibWl0IG5vIGxvbmdlciByZW5kZXJzIHdpZGVyIHRoYW4gdGhlIGNhcmRcXG4gICAgIGFib3ZlIGl0LiAqL1xcbiAgI3NwYWNlRm9ybSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwiZm9ybUlucHV0XFxcIlxcbiAgICBcXFwiZm9ybUJ1dHRvblxcXCJcXG4gICAgO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDBweCA0NHB4O1xcbiAgfVxcblxcbiAgI2Zvcm1TcGFjZTEsXFxuICAjZm9ybVNwYWNlMixcXG4gICNmb3JtU3BhY2UzLFxcbiAgI2Zvcm1TcGFjZTQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvV2VhdGhlckFwcF9UT1AvXCI7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJkYXlcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cblxuXG4vLyBGQUNUT1JZIEZVTkNUSU9OOiBUT0RPIE9CSkVDVFxuLy8gU3RvcmUgbGlzdCBpdGVtcyBpbiBvYmplY3RzXG4vKiBjb25zdCBkYXkgPSAod2VhdGhlciwgbG9jYXRpb25OYW1lLCBkYXlOYW1lLCBkYXlEYXRlLCBmZWVsc0xpa2UsIGh1bWlkaXR5LCBoaWdoVGVtcCwgbG93VGVtcCwgcmFpbkNoYW5jZSwgd2luZFNwZWVkKSA9PiB7XG4gICAgbGV0IHdlYSA9IHdlYXRoZXI7XG4gICAgbGV0IGxvY04gPSBsb2NhdGlvbk5hbWU7XG4gICAgbGV0IGRheU5hID0gZGF5TmFtZTtcbiAgICBsZXQgZGF5Tm93ID0gZGF5RGF0ZTtcbiAgICBsZXQgY3VycmVudFQgPSBmZWVsc0xpa2U7XG4gICAgbGV0IGh1bSA9IGh1bWlkaXR5O1xuICAgIGxldCBoaWdoVCA9IGhpZ2hUZW1wO1xuICAgIGxldCBsb3dUID0gbG93VGVtcDtcbiAgICBsZXQgcmFpbkMgPSByYWluQ2hhbmNlO1xuICAgIGxldCB3cyA9IHdpbmRTcGVlZDtcblxuICAgIFxuXG4gICAgXG4gICAgcmV0dXJuIHt3ZWEsIGxvY04sIGRheU5hLCBkYXlOb3csIGN1cnJlbnRULCBodW0sIGhpZ2hULCBsb3dULCByYWluQywgd3N9O1xuICB9O1xuICBcblxuZXhwb3J0IHsgZGF5IH07ICovXG5cbmNsYXNzIERheSB7XG4gIGNvbnN0cnVjdG9yKHdlYXRoZXIsIGxvY2F0aW9uTmFtZSwgZGF5TmFtZSwgZGF5RGF0ZSwgZmVlbHNMaWtlLCBodW1pZGl0eSwgaGlnaFRlbXAsIGxvd1RlbXAsIHJhaW5DaGFuY2UsIHdpbmRTcGVlZCkge1xuICAgIHRoaXMud2VhdGhlciA9IHdlYXRoZXI7XG4gICAgdGhpcy5sb2NhdGlvbk5hbWUgPSBsb2NhdGlvbk5hbWU7XG4gICAgdGhpcy5kYXlOYW1lID0gZGF5TmFtZTtcbiAgICB0aGlzLmRheURhdGUgPSBkYXlEYXRlO1xuICAgIHRoaXMuZmVlbHNMaWtlID0gZmVlbHNMaWtlO1xuICAgIHRoaXMuaHVtaWRpdHkgPSBodW1pZGl0eTtcbiAgICB0aGlzLmhpZ2hUZW1wID0gaGlnaFRlbXA7XG4gICAgdGhpcy5sb3dUZW1wID0gbG93VGVtcDtcbiAgICB0aGlzLnJhaW5DaGFuY2UgPSByYWluQ2hhbmNlO1xuICAgIHRoaXMud2luZFNwZWVkID0gd2luZFNwZWVkO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERheTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=