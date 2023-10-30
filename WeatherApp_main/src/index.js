import _ from 'lodash';
import printMe from './logic.js';
import './style.css';
import Icon from './icon.png';

// import Data from './data.xml';
// import Notes from './data.csv';

function component() {
    const element = document.createElement('div');
  
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
  
    return element;
  }
  
  document.body.appendChild(component());