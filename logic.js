import './style.css';
import Day from './day.js';
import { changeWeatherInfo, validInput, invalidInput } from './indexChanges.js';

//  3 day forecast - http://api.weatherapi.com/v1/forecast.json?key=39c28f85ab034521b9921705232710&q=98052&days=3&aqi=no&alerts=no

let currentForecast = '';
let lastResponse = '';

export const forecastLogic = (function () {

  let pulledResponse = [];


  let day1 = 'day1';
  let day2 = 'day2';
  let day3 = 'day3';

  // store days as individual objects with required information to be displayed in UI

  // Property elements
  let weather = "";
  let locationName = '';
  let dayName = '';
  let dayDate = '';
  let feelsLike = '';
  let humidity = 1;
  let highTemp = 0;  
  let lowTemp = 0;
  let rainChance = 0;
  let windSpeed = 0;
  


  const alldays = {
    
    // new array properties would be stored here

  }; 


  initialAPICall(); // Calls default 'Redmond' Weather

  
  function initialAPICall(){

    let forecastJSON = pullForecast('98052');
    fulfillPromise(forecastJSON);

  }

  function futureAPICalls(value){

    let forecastJSON = pullForecast(value);
    fulfillPromise(forecastJSON);

  }

  function fulfillPromise(forecastJSON){
    forecastJSON.then((resolvedValue) => {

      return resolvedValue;

    })
    .then((result) => {

      // places new Day object array elements into the allDays object
      storeForecastDay(day1, 0, result.forecast.forecastday[0], result.location.name);
      storeForecastDay(day2, 1, result.forecast.forecastday[1], result.location.name);
      storeForecastDay(day3, 2, result.forecast.forecastday[2], result.location.name);

      // call DOM function to display day1 information on web page
      changeWeatherInfo(alldays);

    })
    ;

  }


  function getCurrentTime(epoch) {

    let hourDigit = 0;

    let currentDateTime = '';

    // Unix timestamp in seconds
    const unixTimestamp = epoch;

    // Convert to milliseconds
    const milliseconds = unixTimestamp * 1000;

    // Create a new Date object
    const date = new Date(milliseconds);

    // Print the date in the desired format
    currentDateTime = date.toUTCString();

    hourDigit = parseInt(currentDateTime.substring(17,19));


    return hourDigit;

  }

  function getDayName(epoch) {
    
    const week = {
      Sun: 'Sunday',
      Mon: 'Monday',
      Tue: 'Tuesday',
      Wed: 'Wednesday',
      Thu: 'Thurday',
      Fri: 'Friday',
      Sat: 'Saturday',
    };


    let dayKey = '';

    let currentDateTime = '';

    // Unix timestamp in seconds
    const unixTimestamp = epoch;

    // Convert to milliseconds
    const milliseconds = unixTimestamp * 1000;

    // Create a new Date object
    const date = new Date(milliseconds);

    // Print the date in the desired format
    currentDateTime = date.toUTCString();

    dayKey = currentDateTime.substring(0,3);

    return week[dayKey];

  }


  // converts response and stores information into three seperate objects, place those into 'allDays'
  function storeForecastDay(day, num, json, location) {

    let currentTime = getCurrentTime(json.date_epoch); // returns digit

    let currentDay = getDayName(json.date_epoch);


    // get parameter information and store into variables
    weather = json.day.condition.text;
    locationName = location;
    dayName = currentDay;
    dayDate = json.date;
    feelsLike = json.hour[currentTime].temp_c;
    humidity = json.hour[currentTime].humidity;
    highTemp = json.day.maxtemp_c;  
    lowTemp = json.day.mintemp_c;
    rainChance = json.day.daily_chance_of_rain;
    windSpeed = json.day.maxwind_kph;


    // call new day object with set variables
    let dayForecast = new Day(weather, locationName, dayName, dayDate, feelsLike, humidity, highTemp, lowTemp, rainChance, windSpeed);

    // console.log(dayForecast); // *** IT WORKS ***

    // place new day as new parameter under alldays
    alldays[day] = [];

    alldays[day].push(dayForecast);

  }

  //  Next -> set up so it takes in a value to be appended to the API Call
  async function pullForecast(value) {
    let url = 'https://api.weatherapi.com/v1/forecast.json?key=39c28f85ab034521b9921705232710&q=' + value + '&days=3&aqi=no&alerts=no';


    // issue getting new fetch calls

    try {
      let response = await fetch(url, {mode: 'cors'});
    

      if(!response.ok){
      
        throw new Error(`HTTP error! Status: ${response.status}`);
      
      }


      let forecast = await response.json();

      currentForecast = forecast;
      
      lastResponse = currentForecast;

      validInput();
      // changeWeatherInfo(alldays).validInput();

      return currentForecast;

        } 
    catch(err) {
      // catches errors both in fetch and response.json
      
      // need function call to indexChanges that signals invalid input to user
      invalidInput();
      // changeWeatherInfo(alldays).invalidInput();

      // alert(err);
      console.log(err);

      return lastResponse;

    }

  }

  return { 
    pullForecast,
    futureAPICalls
    
  };





})(); // ends forecastLogic function