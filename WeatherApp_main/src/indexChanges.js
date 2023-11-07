import _ from 'lodash';
import './style.css';
import { forecastLogic } from './logic.js';
import rightArrow from './arrowRight.svg';
import leftArrow from './arrowLeft.svg';
import snowing from './snowing.svg';
import rainCloud from './rain-cloud.svg';
import hail from './hail.svg';
import partly from './partly.svg';
import sunny from './sunny.svg';
import foggy from './foggy.svg';


export function changeWeatherInfo(dayArray){

  let dayCounter = 1; // keeps track of which day we should be on

  // left and right arrow references
  let leftArrowIcon = document.getElementById('arrowLeft');
  let rightArrowIcon = document.getElementById('arrowRight');

  let submitForm = document.getElementById('formButton');
  let formValue = document.getElementById('inputInner');

  leftArrowIcon.style.pointerEvents = "none";
  leftArrowIcon.src = '';

  let weatherIcon = document.getElementById('weatherIcon');



  let dateMain = document.getElementById('dateMain');
  let weatherType = document.getElementById('weatherLocation');
  let weatherLocation = document.getElementById('weatherType');
  let tempUpper = document.getElementById('tempUpper');
  let tempLower = document.getElementById('tempLower');
  let block1Bottom = document.getElementById('block1Bottom');
  let block2Bottom = document.getElementById('block2Bottom');
  let block3Bottom = document.getElementById('block3Bottom');
  let block4Bottom = document.getElementById('block4Bottom');

  day1Call(); // initial call for UI Display


  function day1Call(){

    let dayName = dayArray.day1[0].dayName;
    let dayDate = dayArray.day1[0].dayDate;
    let weather = dayArray.day1[0].weather;

    let selHeaderText = createDateHeader(dayName, dayDate);
    adjustWeather(weather);

    dateMain.textContent = selHeaderText;
    block1Bottom.textContent = dayArray.day1[0].feelsLike  + ' °C';
    block2Bottom.textContent = dayArray.day1[0].humidity  + '%';
    block3Bottom.textContent = dayArray.day1[0].rainChance  + '%';
    block4Bottom.textContent = dayArray.day1[0].windSpeed  + ' km/h';

    tempLower.textContent = dayArray.day1[0].lowTemp + ' °C';
    tempUpper.textContent = dayArray.day1[0].highTemp + '°C';
    weatherLocation.textContent = dayArray.day1[0].locationName;
    weatherType.textContent = weather;
    
  }



  // *** Functions ***

  // create function that based on the weather, we change the weatherIcon to reflect accordingly  
  function adjustWeather(weather){

    const currentWeather = weather;

    const rainRegex = /rain/g;
    const snowRegex = /snow/g;
    const hailRegex = /hail/g;
    const partlyRegex = /partly/g;
    const sunnyRegex = /sunny/g;
    const fogRegex = /fog/g;
    const overcastRegex = /overcast/g;


    // adjust for rain
    if(currentWeather.match(rainRegex)){

      weatherIcon.src = rainCloud;
    }

    // adjust for snow
    if(currentWeather.match(snowRegex)){
      weatherIcon.src = snowing;
    }    

    // adjust for hail
    if(currentWeather.match(hailRegex)){
      weatherIcon.src = hail;
    }    
    
    // adjust for partly cloudy
    if(currentWeather.match(partlyRegex)){
      weatherIcon.src = partly;
    }    

    // adjust for sunny
    if(currentWeather.match(sunnyRegex)){
      weatherIcon.src = sunny;
    }    

    // adjust for fog
    if(currentWeather.match(fogRegex)){
      weatherIcon.src = foggy;
    }    

    // adjust for overcast
    if(currentWeather.match(overcastRegex)){
      weatherIcon.src = foggy;      
    }    



  }

  // create function that constructs string for changing date header
  function createDateHeader(day, date){
    const dateString = date;
    const parts = dateString.split('-');

    const startIndex = dateString.lastIndexOf('-') + 1;

    const extractedDay = dateString.substring(startIndex);

    const extractedValue = parseInt(parts[1]);

    const months = {
      1: 'Jan',
      2: 'Feb',
      3: 'Mar',
      4: 'Apr',
      5: 'May',
      6: 'Jun',
      7: 'Jul',
      8: 'Aug',
      9: 'Sept',
      10: 'Oct',
      11: 'Nov',
      12: 'Dec',

    }

    let targetMonth = months[extractedValue];
    let targetDay = extractedDay;
    let targetYear = dateString.substring(0, 4);
    let targetName = day;

    let dateHeaderText = targetName + ', ' + targetDay + ' ' + targetMonth + ' ' + targetYear;
    return dateHeaderText;

  }
  
  function offLeftArrow(){

    leftArrowIcon.style.pointerEvents = "none";
    leftArrowIcon.src = '';

  }

  function onLeftArrow(){
    
    leftArrowIcon.style.pointerEvents = "auto";
    leftArrowIcon.src = leftArrow;

  }

  function offRightArrow(){

    rightArrowIcon.style.pointerEvents = "none";
    rightArrowIcon.src = '';

  }

  function onRightArrow(){
    
    rightArrowIcon.style.pointerEvents = "auto";
    rightArrowIcon.src = rightArrow;

  }

  function day2Call(){

    let dayName = dayArray.day2[0].dayName;
    let dayDate = dayArray.day2[0].dayDate;
    let weather = dayArray.day2[0].weather;

    let selHeaderText = createDateHeader(dayName, dayDate);
    adjustWeather(weather);

    dateMain.textContent = selHeaderText;
    block1Bottom.textContent = dayArray.day2[0].feelsLike  + ' °C';
    block2Bottom.textContent = dayArray.day2[0].humidity  + '%';
    block3Bottom.textContent = dayArray.day2[0].rainChance  + '%';
    block4Bottom.textContent = dayArray.day2[0].windSpeed  + ' km/h';

    tempLower.textContent = dayArray.day2[0].lowTemp + ' °C';
    tempUpper.textContent = dayArray.day2[0].highTemp + '°C';
    weatherLocation.textContent = dayArray.day2[0].locationName;
    weatherType.textContent = weather;
    
  }

  function day3Call(){

    let dayName = dayArray.day3[0].dayName;
    let dayDate = dayArray.day3[0].dayDate;
    let weather = dayArray.day3[0].weather;

    let selHeaderText = createDateHeader(dayName, dayDate);
    adjustWeather(weather);

    dateMain.textContent = selHeaderText;
    block1Bottom.textContent = dayArray.day3[0].feelsLike  + ' °C';
    block2Bottom.textContent = dayArray.day3[0].humidity  + '%';
    block3Bottom.textContent = dayArray.day3[0].rainChance  + '%';
    block4Bottom.textContent = dayArray.day3[0].windSpeed  + ' km/h';

    tempLower.textContent = dayArray.day3[0].lowTemp + ' °C';
    tempUpper.textContent = dayArray.day3[0].highTemp + '°C';
    weatherLocation.textContent = dayArray.day3[0].locationName;
    weatherType.textContent = weather;
    
  }




  // *** Click Listeners ***

  // create click listeners for arrow to determine click interactions

  rightArrowIcon.addEventListener("click", function(){  
       
    if(dayCounter < 3){
      dayCounter++;
    }

    if(dayCounter === 1){
      offLeftArrow();
      day1Call();

    }
    if(dayCounter === 2){
      onLeftArrow();
      onRightArrow();
      day2Call();

    }
    if(dayCounter === 3){
      offRightArrow();
      day3Call();

    }    


  });

  leftArrowIcon.addEventListener("click", function(){  
       
    if(dayCounter > 1){
      dayCounter--;
    }

    if(dayCounter === 1){
      offLeftArrow();
      day1Call();

    }
    if(dayCounter === 2){
      onLeftArrow();
      onRightArrow();      
      day2Call();

    }
    if(dayCounter === 3){
      offRightArrow();
      day3Call();

    }    


  });

  submitForm.addEventListener("click", function(){ 


    forecastLogic.futureAPICalls(formValue.value);

  });


}



export function validInput(){

  let formInput = document.getElementById('formInput');

  formInput.style.borderColor = 'black';

}

export function invalidInput(){

  let formInput = document.getElementById('formInput');

    formInput.style.borderColor = 'red';

  }

