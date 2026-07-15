import _ from 'lodash';
import './style.css';
import { forecastLogic } from './logic.js';
import { setSkyCategory } from './sky.js';
import rightArrow from './arrowRight.svg';
import leftArrow from './arrowLeft.svg';
import snowing from './snowing.svg';
import rainCloud from './rain-cloud.svg';
import hail from './hail.svg';
import partly from './partly.svg';
import sunny from './sunny.svg';
import foggy from './foggy.svg';


// dayCounter is hoisted to module scope so the render path, the arrow
// listeners, and any future navigation all read one source of truth. Each call
// to the old changeWeatherInfo() created a private `let dayCounter = 1`, so
// every stacked listener generation incremented its own counter and the ‹ ›
// pair stopped tracking the day on screen.
let dayCounter = 1;

// The most recently rendered day set. renderDay() records it so the arrow
// listeners can re-render a different day without needing a fresh fetch.
let latestDays = null;

// Guard so wireEvents() only ever registers one set of listeners.
let eventsWired = false;

// Cached DOM references, populated once by cacheDom(). Left null until the
// first renderDay()/wireEvents() call, both of which run after index.js has
// appended the DOM.
let leftArrowIcon, rightArrowIcon, submitForm, formValue, weatherIcon,
  outerContainer, dateMain, weatherConditionText, locationText,
  tempUpper, tempLower, block1Bottom, block2Bottom, block3Bottom, block4Bottom,
  mainMiddle, dayDots;


function cacheDom(){

  if(leftArrowIcon){ return; } // already cached

  leftArrowIcon = document.getElementById('arrowLeft');
  rightArrowIcon = document.getElementById('arrowRight');

  submitForm = document.getElementById('formButton');
  formValue = document.getElementById('inputInner');

  weatherIcon = document.getElementById('weatherIcon');
  outerContainer = document.getElementById('outerContainer');

  dateMain = document.getElementById('dateMain');

  // The element ids are intentionally the reverse of what they render:
  // #weatherLocation shows the weather condition, #weatherType shows the
  // location name (see CLAUDE.md "Known fragile areas"). These variables are
  // named for what they DISPLAY, so the write sites in renderDay() read the way
  // they look. Don't rename one side without the other.
  weatherConditionText = document.getElementById('weatherLocation');
  locationText = document.getElementById('weatherType');

  tempUpper = document.getElementById('tempUpper');
  tempLower = document.getElementById('tempLower');
  block1Bottom = document.getElementById('block1Bottom');
  block2Bottom = document.getElementById('block2Bottom');
  block3Bottom = document.getElementById('block3Bottom');
  block4Bottom = document.getElementById('block4Bottom');

  // Swipe target + the three-dot indicator (mobile day navigation).
  mainMiddle = document.getElementById('mainMiddle');
  dayDots = document.querySelectorAll('#dayDots .dot');

}


// Pure render path. fulfillPromise() in logic.js calls this on every resolved
// API response; it registers NO listeners, so it is safe to call repeatedly.
// `n` selects which loaded day (1-3) to display. A fresh fetch renders day 1,
// which resets the ‹ › navigation for the new location.
export function renderDay(dayArray, n){

  cacheDom();

  latestDays = dayArray;
  dayCounter = n;

  const info = dayArray['day' + n][0];

  updateArrows(n);
  updateDots(n);

  let selHeaderText = createDateHeader(info.dayName, info.dayDate);
  adjustWeather(info.weather);

  dateMain.textContent = selHeaderText;
  block1Bottom.textContent = info.feelsLike + ' °C';
  block2Bottom.textContent = info.humidity + '%';
  block3Bottom.textContent = info.rainChance + '%';
  block4Bottom.textContent = info.windSpeed + ' km/h';

  tempLower.textContent = info.lowTemp + ' °C';
  tempUpper.textContent = info.highTemp + '°C';

  locationText.textContent = info.locationName;
  weatherConditionText.textContent = info.weather;

}


// Registers the arrow + submit listeners EXACTLY ONCE for the life of the page.
// index.js calls this at bootstrap, after the DOM is appended. Kept off the
// render path so listeners never multiply across fetches (one fetch per submit
// click, exactly one listener per element).
export function wireEvents(){

  if(eventsWired){ return; }

  cacheDom();
  eventsWired = true;

  // Both arrows and (below 480px) swipe funnel through navigate(), so they
  // drive the single module-scope dayCounter and can never diverge.
  rightArrowIcon.addEventListener("click", function(){
    navigate(1);
  });

  leftArrowIcon.addEventListener("click", function(){
    navigate(-1);
  });

  submitForm.addEventListener("click", function(){

    forecastLogic.futureAPICalls(formValue.value);

  });

  // Swipe navigation. Below 480px the arrows are hidden and a horizontal swipe
  // across the card pages between days. We commit only past ~50px of travel and
  // only when the gesture is more horizontal than vertical (|dx| > |dy|), so a
  // vertical page scroll is never hijacked. The listeners are passive (no
  // preventDefault) and route through the same navigate() the arrows use.
  let touchStartX = 0, touchStartY = 0;

  mainMiddle.addEventListener("touchstart", function(e){
    const t = e.changedTouches[0];
    touchStartX = t.clientX;
    touchStartY = t.clientY;
  }, { passive: true });

  mainMiddle.addEventListener("touchend", function(e){
    const t = e.changedTouches[0];
    const dx = t.clientX - touchStartX;
    const dy = t.clientY - touchStartY;

    if(Math.abs(dx) < 50){ return; }          // not far enough to count
    if(Math.abs(dx) <= Math.abs(dy)){ return; } // vertical scroll, leave it alone

    navigate(dx < 0 ? 1 : -1); // swipe left -> next day, swipe right -> previous
  }, { passive: true });

}

// Shared day-change path for the arrows and swipe. Clamps to the loaded 1-3
// range and re-renders through the pure render path.
function navigate(delta){

  if(!latestDays){ return; }

  let target = dayCounter + delta;

  if(target < 1){ target = 1; }
  if(target > 3){ target = 3; }

  if(target === dayCounter){ return; }

  renderDay(latestDays, target);

}


// *** Functions ***

// Show/hide the ‹ › arrows for the day being displayed: no left arrow on day 1,
// no right arrow on day 3. Uses visibility (not src='') so a disabled arrow
// doesn't render a broken-image placeholder box now that #outerContainer has a
// background.
function updateArrows(n){

  if(n <= 1){
    offLeftArrow();
  } else {
    onLeftArrow();
  }

  if(n >= 3){
    offRightArrow();
  } else {
    onRightArrow();
  }

}

// Mark the dot for the day on screen active (filled with the weather accent via
// the CSS var(--accent)); the others stay muted. Runs on every render so it
// tracks arrow + swipe navigation.
function updateDots(n){

  if(!dayDots){ return; }

  for(let i = 0; i < dayDots.length; i++){
    dayDots[i].classList.toggle('active', i === (n - 1));
  }

}

// create function that based on the weather, we change the weatherIcon to reflect accordingly
function adjustWeather(weather){

  const currentWeather = weather;

  // condition text comes back Title Case ("Sunny", "Partly cloudy", "Overcast",
  // "Fog"), so the match must be case-insensitive or most branches never fire.
  const rainRegex = /rain/i;
  const snowRegex = /snow/i;
  const hailRegex = /hail/i;
  const partlyRegex = /partly/i;
  const sunnyRegex = /sunny/i;
  const fogRegex = /fog/i;
  const overcastRegex = /overcast/i;

  // theme class follows the matched condition; anything that matches nothing
  // ("Cloudy", "Mist", "Clear", ...) falls back to the neutral theme.
  let themeClass = 'weather-neutral';


  // adjust for rain
  if(currentWeather.match(rainRegex)){

    weatherIcon.src = rainCloud;
    themeClass = 'weather-rain';
  }

  // adjust for snow
  if(currentWeather.match(snowRegex)){
    weatherIcon.src = snowing;
    themeClass = 'weather-snow';
  }

  // adjust for hail
  if(currentWeather.match(hailRegex)){
    weatherIcon.src = hail;
    themeClass = 'weather-hail';
  }

  // adjust for partly cloudy
  if(currentWeather.match(partlyRegex)){
    weatherIcon.src = partly;
    themeClass = 'weather-partly';
  }

  // adjust for sunny
  if(currentWeather.match(sunnyRegex)){
    weatherIcon.src = sunny;
    themeClass = 'weather-sunny';
  }

  // adjust for fog
  if(currentWeather.match(fogRegex)){
    weatherIcon.src = foggy;
    themeClass = 'weather-fog';
  }

  // adjust for overcast
  if(currentWeather.match(overcastRegex)){
    weatherIcon.src = foggy;
    themeClass = 'weather-overcast';
  }

  // apply the per-weather theme to the outer container (drives the sky
  // gradient + accents); this follows the ‹ › day navigation for free.
  outerContainer.classList.remove(
    'weather-neutral', 'weather-rain', 'weather-snow', 'weather-hail',
    'weather-partly', 'weather-sunny', 'weather-fog', 'weather-overcast'
  );
  outerContainer.classList.add(themeClass);

  // Drive the animated sky with the same resolved category (strip the
  // 'weather-' prefix so 'weather-sunny' -> 'sunny'). This follows the ‹ › day
  // navigation for free, exactly like the gradient theme.
  setSkyCategory(themeClass.replace('weather-', ''));

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

  // Hide via visibility (not src='') so the disabled arrow doesn't render a
  // broken-image placeholder box now that #outerContainer has a background.
  // index.js sets the src once; we never touch it again.
  leftArrowIcon.style.pointerEvents = "none";
  leftArrowIcon.style.visibility = "hidden";

}

function onLeftArrow(){

  leftArrowIcon.style.pointerEvents = "auto";
  leftArrowIcon.style.visibility = "visible";

}

function offRightArrow(){

  rightArrowIcon.style.pointerEvents = "none";
  rightArrowIcon.style.visibility = "hidden";

}

function onRightArrow(){

  rightArrowIcon.style.pointerEvents = "auto";
  rightArrowIcon.style.visibility = "visible";

}


export function validInput(){

  let formInput = document.getElementById('formInput');

  formInput.style.borderColor = 'black';

}

export function invalidInput(){

  let formInput = document.getElementById('formInput');

    formInput.style.borderColor = 'red';

  }
