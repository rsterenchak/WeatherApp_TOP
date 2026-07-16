import './style.css';
import './logic.js'; // defines forecastLogic (no fetch fires at import — see initFavourites)
import { wireEvents } from './indexChanges.js';
import { buildRibbon } from './ribbon.js';
import { initFavourites } from './favourites.js';

// The whole UI is built here with document.createElement (there is no HTML source
// file — html-webpack-plugin generates an empty document). The forecast is one
// continuous temperature ribbon across all three days, a readout beneath it, and
// a search box: no cards, no arrows, no per-condition theme, no day navigation.

// A desktop-only prev/next chevron flanking the saved-location dots. Inline SVG
// so CSS can recolour the stroke via currentColor (idle muted, brighter on
// hover). favourites.js wires the clicks to rotate(); the pair is hidden with
// the dots below two locations, and hidden entirely at ≤480px where swipe rules.
function navArrow(id, dir, label) {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.id = id;
  btn.className = 'arrow';
  btn.setAttribute('aria-label', label);
  const points = dir < 0 ? '13,3 7,7 13,11' : '7,3 13,7 7,11';
  btn.innerHTML =
    '<svg width="20" height="14" viewBox="0 0 20 14" fill="none" ' +
    'stroke="currentColor" stroke-width="2" stroke-linecap="round" ' +
    'stroke-linejoin="round" aria-hidden="true">' +
    '<polyline points="' + points + '"></polyline></svg>';
  return btn;
}

// One option in the segmented C/F unit switch. The buttons carry no logic here —
// indexChanges.js wires the clicks once in wireEvents() and owns both the active
// state and the display-only Celsius→Fahrenheit conversion.
function unitOpt(unit) {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'unitOpt';
  btn.dataset.unit = unit;
  btn.textContent = '°' + unit;
  return btn;
}

function stat(id, label) {
  const cell = document.createElement('div');
  cell.className = 'stat';

  const labelEl = document.createElement('div');
  labelEl.className = 'stat-label';
  labelEl.textContent = label;

  const valueEl = document.createElement('div');
  valueEl.className = 'stat-value';
  valueEl.id = id;
  valueEl.textContent = '—';

  cell.appendChild(labelEl);
  cell.appendChild(valueEl);
  return cell;
}

function component() {
  const app = document.createElement('div');
  app.id = 'app';

  // Ribbon panel — the SVG curve is mounted into #ribbonWrap by buildRibbon().
  const ribbonWrap = document.createElement('div');
  ribbonWrap.id = 'ribbonWrap';

  // Readout: location, current temperature, condition, and a four-up stat row.
  const readout = document.createElement('div');
  readout.id = 'readout';

  // Location name paired with a compact C/F unit switch on one row. The switch
  // flips the temperature readouts (current + feels like) between °C and °F for
  // display only; the raw Celsius still flows to ribbon.js unchanged.
  const locationRow = document.createElement('div');
  locationRow.id = 'locationRow';

  const locationName = document.createElement('div');
  locationName.id = 'locationName';
  locationName.textContent = '—';

  const unitSwitch = document.createElement('div');
  unitSwitch.id = 'unitSwitch';
  unitSwitch.appendChild(unitOpt('C'));
  unitSwitch.appendChild(unitOpt('F'));

  locationRow.appendChild(locationName);
  locationRow.appendChild(unitSwitch);

  // Saved-location indicator: one dot per saved location, the current one filled.
  // Populated by favourites.js. The dots sit inside a .navRow between two
  // desktop-only prev/next arrows; favourites.js gates the whole row's
  // visibility (hidden until two or more locations are saved).
  const navRow = document.createElement('div');
  navRow.className = 'navRow hidden';

  const dotRow = document.createElement('div');
  dotRow.id = 'dotRow';

  navRow.appendChild(navArrow('navPrev', -1, 'Previous location'));
  navRow.appendChild(dotRow);
  navRow.appendChild(navArrow('navNext', 1, 'Next location'));

  const currentTemp = document.createElement('div');
  currentTemp.id = 'currentTemp';
  currentTemp.textContent = '—';

  const currentCondition = document.createElement('div');
  currentCondition.id = 'currentCondition';
  currentCondition.textContent = '—';

  const statRow = document.createElement('div');
  statRow.id = 'statRow';
  statRow.appendChild(stat('feelsVal', 'FEELS LIKE'));
  statRow.appendChild(stat('humidityVal', 'HUMIDITY'));
  statRow.appendChild(stat('rainVal', 'RAIN'));
  statRow.appendChild(stat('windVal', 'WIND'));

  readout.appendChild(locationRow);
  readout.appendChild(navRow);
  readout.appendChild(currentTemp);
  readout.appendChild(currentCondition);
  readout.appendChild(statRow);

  // The ribbon and its readout are wrapped in one card so they slide together as
  // a single unit on a committed mobile swipe (favourites.js drives the
  // direction-aware slide via #weatherCard.slide-* in style.css). It's a plain
  // flex column at every width — the wrapping is transparent to the layout.
  const weatherCard = document.createElement('div');
  weatherCard.id = 'weatherCard';
  weatherCard.appendChild(ribbonWrap);
  weatherCard.appendChild(readout);

  // Search form. A real <form> + submit button so Enter and click share one
  // submit event (wired once in wireEvents()).
  const searchForm = document.createElement('form');
  searchForm.id = 'searchForm';

  // The input and its autocomplete dropdown share a relatively-positioned wrapper
  // so #suggestions can hang beneath #searchInput (top: 100%) and align to its
  // edges, instead of becoming a third flex child of the row.
  const searchInputWrap = document.createElement('div');
  searchInputWrap.id = 'searchInputWrap';

  const searchInput = document.createElement('input');
  searchInput.id = 'searchInput';
  searchInput.type = 'text';
  searchInput.placeholder = 'Search location';
  searchInput.setAttribute('autocomplete', 'off');

  // City-suggestion dropdown. Populated by a debounced lookup wired once in
  // wireEvents(); hidden until there are matches to show.
  const suggestions = document.createElement('div');
  suggestions.id = 'suggestions';
  suggestions.className = 'hidden';
  suggestions.setAttribute('role', 'listbox');

  const searchButton = document.createElement('button');
  searchButton.id = 'searchButton';
  searchButton.type = 'submit';
  searchButton.textContent = 'Submit';

  searchInputWrap.appendChild(searchInput);
  searchInputWrap.appendChild(suggestions);

  searchForm.appendChild(searchInputWrap);
  searchForm.appendChild(searchButton);

  app.appendChild(weatherCard);
  app.appendChild(searchForm);

  return app;
}

document.body.appendChild(component());

// Build the SVG scaffold now that #ribbonWrap exists, then register listeners
// exactly once. Both run off the render path, so nothing multiplies across
// fetches. initFavourites() loads the saved locations, wires the swipe/dot
// gestures once, draws the dots, and fires the single initial fetch (the first
// saved location, or the default when none are saved), which resolves
// afterwards and renders into this scaffold.
buildRibbon(document.getElementById('ribbonWrap'));
wireEvents();
initFavourites();
