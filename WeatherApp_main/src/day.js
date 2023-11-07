import './style.css';



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

export default Day;