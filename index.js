import _ from 'lodash';
import { forecastLogic } from './logic.js';
import './style.css';
import rightArrow from './arrowRight.svg';
import leftArrow from './arrowLeft.svg';
import rainCloud from './rain-cloud.svg';
import thermometer from './thermometer.svg';
import wind from './wind.svg';
import drop from './water-drop.svg';
import snowing from './snowing.svg';
import Icon from './icon.png';



function component() {
  
  
  // elements
  const outerContainer = document.createElement('div');
  let header = document.createElement('div');
  let space1 = document.createElement('div');
  let main = document.createElement('div'); // main info section
  let space2 = document.createElement('div');
  let spaceForm = document.createElement('form'); // form, submit button location
  let space3 = document.createElement('div');
  let footer = document.createElement('div');

  // main section elements
  let sideSpace1 = document.createElement('div'); // left space
  let weatherOuter = document.createElement('div'); // middle info element
  let sideSpace2 = document.createElement('div'); // right space

  let formSpace1 = document.createElement('div'); // form space 1
  let formSpace2 = document.createElement('div'); // form space 2

  let formInput = document.createElement('div'); // form input
  let inputInner = document.createElement('input');
  
  let formButton = document.createElement('div'); // form button
  let buttonText = document.createElement('div'); //  button submit text
  let formSpace3 = document.createElement('div'); // form space 3
  let formSpace4 = document.createElement('div'); // form space 4

  let inner1 = document.createElement('div');
  let innerMain = document.createElement('div');
  let inner2 = document.createElement('div');

  // Weather section elements
  let upperLeft = document.createElement('div');
  let arrowLeft = document.createElement('img');
  let lowerLeft = document.createElement('div');

  let upperRight = document.createElement('div');
  let arrowRight = document.createElement('img');
  let lowerRight = document.createElement('div');

  let mainTop = document.createElement('div');
  let mainMiddle = document.createElement('div'); // weather date block
  let mainBottom = document.createElement('div');  

  let upperSection = document.createElement('div');
  
  let dateSection = document.createElement('div');

  let dateSpace1 =  document.createElement('div');
  let dateMain =  document.createElement('div');
  let dateSpace2 =  document.createElement('div');

  let lowerSection = document.createElement('div');

  
  let weatherSection = document.createElement('div');
  let weatherData = document.createElement('div');
  
  let spacer1 = document.createElement('div');
  let spacer2 = document.createElement('div');


  let weatherUpper = document.createElement('div');
  let weatherIcon = document.createElement('img');
  let weatherTemps = document.createElement('div');
  let weatherLocation = document.createElement('div');

  let tempUpper = document.createElement('div');
  let tempLower = document.createElement('div');

  let weatherLower = document.createElement('div');

  let typeUpper = document.createElement('div');
  let weatherType = document.createElement('div'); // weather description
  let typeLower = document.createElement('div');

  let spaced1 = document.createElement('div');

  let block1 = document.createElement('div');
  let block1Left = document.createElement('img');
  let block1Right = document.createElement('div');
  let block1Top = document.createElement('div');
  let block1Bottom = document.createElement('div');
  
  let spaced2 = document.createElement('div');
  
  let block2 = document.createElement('div');
  let block2Left = document.createElement('img');
  let block2Right = document.createElement('div');
  let block2Top = document.createElement('div');
  let block2Bottom = document.createElement('div');
    
  
  let spaced3 = document.createElement('div');
  
  let block3 = document.createElement('div');
  let block3Left = document.createElement('img');
  let block3Right = document.createElement('div');
  let block3Top = document.createElement('div');
  let block3Bottom = document.createElement('div');
    
  
  let spaced4 = document.createElement('div');
  
  let block4 = document.createElement('div');
  let block4Left = document.createElement('img');
  let block4Right = document.createElement('div');
  let block4Top = document.createElement('div');
  let block4Bottom = document.createElement('div');
    
  
  let spaced5 = document.createElement('div');


  // id assignments
  outerContainer.id = "outerContainer";
  header.id = "header";
  space1.id = "space1";
  main.id = "main";
  space2.id = "space2";
  spaceForm.id = "spaceForm";
  space3.id = "space3";
  footer.id = "footer";

  sideSpace1.id = "sideSpace1";
  weatherOuter.id = "weatherOuter";
  sideSpace2.id = "sideSpace2";

  formSpace1.id = "formSpace1";
  formSpace2.id = "formSpace2";
  formInput.id = "formInput";
  inputInner.id = "inputInner"
  formButton.id = "formButton";
  buttonText.id = 'buttonText';
  formSpace3.id = "formSpace3";
  formSpace4.id = "formSpace4";

  inner1.id = "inner1";
  innerMain.id = "innerMain";
  inner2.id = "inner2";

  upperLeft.id = "upperLeft";
  arrowLeft.id = "arrowLeft";
  lowerLeft.id = "lowerLeft";

  upperRight.id = "upperRight";
  arrowRight.id = "arrowRight";
  lowerRight.id = "lowerRight";  

  mainTop.id = "mainTop";
  mainMiddle.id = "mainMiddle";
  mainBottom.id = "mainBottom";

  upperSection.id = "upperSection";
  dateSection.id = "dateSection";
  lowerSection.id = "lowerSection";

  weatherSection.id = "weatherSection";
  weatherData.id = "weatherData";

  spacer1.id = "spacer1";
  spacer2.id = "spacer2";

  weatherUpper.id = "weatherUpper";
  weatherIcon.id = "weatherIcon";
  weatherTemps.id = "weatherTemps";
  weatherLocation.id = "weatherLocation";

  tempUpper.id = "tempUpper";
  tempLower.id = "tempLower";

  weatherLower.id = "weatherLower";

  typeUpper.id = "typeUpper";
  weatherType.id = "weatherType";
  typeLower.id = "typeLower";

  spaced1.id = "spaced1";
  block1.id = "block1";
  spaced2.id = "spaced2";
  block2.id = "block2";
  spaced3.id = "spaced3";
  block3.id = "block3";
  spaced4.id = "spaced4";
  block4.id = "block4";
  spaced5.id = "spaced5";

  dateSpace1.id = "dateSpace1";
  dateMain.id = "dateMain";
  dateSpace2.id = "dateSpace2";


  block1Left.id = "block1Left";
  block1Right.id = "block1Right";
  block1Top.id = "block1Top";
  block1Bottom.id = "block1Bottom";

  block2Left.id = "block2Left";
  block2Right.id = "block2Right";
  block2Top.id = "block2Top";
  block2Bottom.id = "block2Bottom";

  block3Left.id = "block3Left";
  block3Right.id = "block3Right";
  block3Top.id = "block3Top";
  block3Bottom.id = "block3Bottom";

  block4Left.id = "block4Left";
  block4Right.id = "block4Right";
  block4Top.id = "block4Top";
  block4Bottom.id = "block4Bottom";


  // stylings

  dateMain.textContent = "Friday, 3rd Nov '23";

  inputInner.placeholder = "Search Location";

  arrowRight.src = rightArrow;
  arrowLeft.src = leftArrow;

  weatherIcon.src = snowing;

  // weatherLocation.textContent = "Snowing"
  // weatherType.textContent = "Honolulu, HI";


  // tempUpper.textContent = "21°C"
  // tempLower.textContent = "10 °C"

  block1Top.textContent = "Feels Like";
  block1Bottom.textContent = "21°";
  block1Left.src = thermometer;

  block2Top.textContent = "Humidity";
  block2Bottom.textContent = "61%";
  block2Left.src = drop;

  block3Top.textContent = "Chance of Rain";
  block3Bottom.textContent = "2%";
  block3Left.src = rainCloud;


  block4Top.textContent = "Wind Speed";
  block4Bottom.textContent = "20.4 km/h";
  block4Left.src = wind;


  buttonText.textContent = "Submit"

  // child appends - within body
  outerContainer.appendChild(header);
  outerContainer.appendChild(space1);
  outerContainer.appendChild(main);
  outerContainer.appendChild(space2);
  outerContainer.appendChild(spaceForm);
  outerContainer.appendChild(space3);
  outerContainer.appendChild(footer);


  // child appends - within main
  main.appendChild(sideSpace1);
  main.appendChild(weatherOuter);
  main.appendChild(sideSpace2);
  
  // child appends - within weatherOuter
  weatherOuter.appendChild(inner1); // left arrow section
  weatherOuter.appendChild(innerMain); // center section
  weatherOuter.appendChild(inner2); // right arrow section

  //  child appends - within form element 
  spaceForm.appendChild(formSpace1);
  spaceForm.appendChild(formSpace2);
  spaceForm.appendChild(formInput);
  spaceForm.appendChild(formSpace3);
  spaceForm.appendChild(formButton);
  spaceForm.appendChild(formSpace4);

  formButton.appendChild(buttonText);

  // child appends - withing formInput element
  formInput.appendChild(inputInner);

  // child appends - within inner1 element
  inner1.appendChild(upperLeft);
  inner1.appendChild(arrowLeft);
  inner1.appendChild(lowerLeft);

  inner2.appendChild(upperRight);
  inner2.appendChild(arrowRight);
  inner2.appendChild(lowerRight);

  innerMain.appendChild(mainTop); // date located
  innerMain.appendChild(mainMiddle); // main weather block
  innerMain.appendChild(mainBottom);

  mainTop.appendChild(upperSection);

  mainTop.appendChild(dateSection);
  
  dateSection.appendChild(dateSpace1);
  dateSection.appendChild(dateMain);
  dateSection.appendChild(dateSpace2);

  mainTop.appendChild(lowerSection);

  mainMiddle.appendChild(spacer1);
  mainMiddle.appendChild(weatherSection); // weather graphic block 1
  mainMiddle.appendChild(weatherData);  // weather data block 1
  mainMiddle.appendChild(spacer2);

  weatherSection.appendChild(weatherUpper);
  weatherSection.appendChild(weatherLower); // contains small weather description block

  weatherUpper.appendChild(weatherIcon);
  weatherUpper.appendChild(weatherTemps);
  weatherUpper.appendChild(weatherLocation);

  weatherTemps.appendChild(tempUpper);
  weatherTemps.appendChild(tempLower);

  weatherLower.appendChild(typeUpper);
  weatherLower.appendChild(weatherType); // Weather type description
  weatherLower.appendChild(typeLower);

  weatherData.appendChild(spaced1);
  weatherData.appendChild(block1);
  weatherData.appendChild(spaced2);
  weatherData.appendChild(block2);
  weatherData.appendChild(spaced3);
  weatherData.appendChild(block3);
  weatherData.appendChild(spaced4);
  weatherData.appendChild(block4);
  weatherData.appendChild(spaced5);

  block1.appendChild(block1Left);
  block1.appendChild(block1Right);

  block1Right.appendChild(block1Top);
  block1Right.appendChild(block1Bottom);

  block2.appendChild(block2Left);
  block2.appendChild(block2Right);

  block2Right.appendChild(block2Top);
  block2Right.appendChild(block2Bottom);

  block3.appendChild(block3Left);
  block3.appendChild(block3Right);

  block3Right.appendChild(block3Top);
  block3Right.appendChild(block3Bottom);

  block4.appendChild(block4Left);
  block4.appendChild(block4Right);

  block4Right.appendChild(block4Top);
  block4Right.appendChild(block4Bottom);






  // Event Listeners

  arrowLeft.addEventListener("mouseenter", function() {
    this.style.boxShadow = "0 6px 8px rgba(0, 0, 0, 0.2)"; 
    this.style.border = "1px solid black";
  });
  
  arrowLeft.addEventListener("mouseleave", function() {
    this.style.boxShadow = "none";
    this.style.border = "none";
  });  

  arrowRight.addEventListener("mouseenter", function() {
    this.style.boxShadow = "0 6px 8px rgba(0, 0, 0, 0.2)";
    this.style.border = "1px solid black"; 
  });
  
  arrowRight.addEventListener("mouseleave", function() {
    this.style.boxShadow = "none";
    this.style.border = "none";
  });   



  formButton.addEventListener("mouseenter", function() {
    this.style.boxShadow = "0 6px 8px rgba(0, 0, 0, 0.2)";
    this.style.background = "#919191"; 
  });
  
  formButton.addEventListener("mouseleave", function() {
    this.style.boxShadow = "none";
    this.style.background = "#ccc";  
  });   



  return outerContainer;
}


document.body.appendChild(component());




