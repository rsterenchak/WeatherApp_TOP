import './style.css';
import './logic.js'; // defines forecastLogic (no fetch fires at import — see initFavourites)
import { wireEvents } from './indexChanges.js';
import { buildRibbon } from './ribbon.js';
import { initFavourites } from './favourites.js';

// The whole UI is built here with document.createElement (there is no HTML source
// file — html-webpack-plugin generates an empty document). The forecast is one
// continuous temperature ribbon across all three days, a readout beneath it, and
// a search box: no cards, no arrows, no per-condition theme, no day navigation.

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

  const locationName = document.createElement('div');
  locationName.id = 'locationName';
  locationName.textContent = '—';

  // Saved-location indicator: one dot per saved location, the current one filled.
  // Populated by favourites.js; hidden until two or more locations are saved.
  const dotRow = document.createElement('div');
  dotRow.id = 'dotRow';
  dotRow.className = 'hidden';

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

  readout.appendChild(locationName);
  readout.appendChild(dotRow);
  readout.appendChild(currentTemp);
  readout.appendChild(currentCondition);
  readout.appendChild(statRow);

  // Search form. A real <form> + submit button so Enter and click share one
  // submit event (wired once in wireEvents()).
  const searchForm = document.createElement('form');
  searchForm.id = 'searchForm';

  const searchInput = document.createElement('input');
  searchInput.id = 'searchInput';
  searchInput.type = 'text';
  searchInput.placeholder = 'Search location';
  searchInput.setAttribute('autocomplete', 'off');

  const searchButton = document.createElement('button');
  searchButton.id = 'searchButton';
  searchButton.type = 'submit';
  searchButton.textContent = 'Submit';

  searchForm.appendChild(searchInput);
  searchForm.appendChild(searchButton);

  app.appendChild(ribbonWrap);
  app.appendChild(readout);
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
