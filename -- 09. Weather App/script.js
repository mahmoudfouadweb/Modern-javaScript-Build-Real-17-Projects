'use strict';
///////////////////////////////////////////////////
// Demo 'copy me'
///////////////////////////////////////////////////
//Weather General Variables setting
const iconEl = document.querySelector('.icon');
const tempEl = document.querySelector('.temperature-value p');
const descEl = document.querySelector('.temperature-description p');
const locationEl = document.querySelector('.location p');
const notificationEl = document.querySelector('.notification');
///////////////////////////////////////////////////
//Country General Variables setting
const countryName = document.querySelector('.name p');
const neighborName = document.querySelector('.nameN p');
const population = document.querySelector('.population p');
const neighborPopulation = document.querySelector('.populationN p');
const currencies = document.querySelector('.currenciesN p');
const neighborCurrencies = document.querySelector('.currencies p');
const bordersData = document.querySelector('.borders p');
const bordersNeighbor = document.querySelector('.bordersData p');
const neighborBorders = document.querySelector('.bordersN');
const flag = document.querySelector('.flagIcon');
const flagN = document.querySelector('.flagNIcon');
// App
const kelvin = 273.15;
const weather = {};
const countryData = {};
const neighborData = {};
weather.unit = 'C';
console.log(bordersData.querySelectorAll('span'));
///////////////////////////////////////////////////
// Weather Private Key
const key = '8e7d106695f8821e7a6da4304ae71e30';
///////////////////////////////////////////////////
// check if browser support localization
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(getLocalCoords, errorMessage);
} else {
  notificationEl.style.display = `block`;
  notificationEl.textContent = `Your Browser Not Support Localization `;
}
///////////////////////////////////////////////////
// get Coordinate Longitude and
function getLocalCoords(position) {
  // Get Coordinates
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  // Get Data from API
  let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;
  ///////////////////////////////////////////////////
  // Get Weather Data
  fetch(api)
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      weather.temperature = Math.round(data.main.temp - kelvin);
      weather.status = `${data.weather[0].main} and ${data.weather[0].description}`;
      weather.icon = data.weather[0].icon;
      weather.locationName = `${data.sys.country}, ${data.name}`;
      country(data.sys.country.toLowerCase());
    })
    .then(() => {
      updateUI();
    });
}
///////////////////////////////////////////////////
// show errors to user
function errorMessage(message) {
  console.log(message);
}
///////////////////////////////////////////////////
// country
function country(countryCode) {
  const countryApi = `https://restcountries.com/v3.1/alpha?codes=${countryCode}`;
  // console.log(countryApi);
  fetch(countryApi)
    .then(res => res.json())
    .then(data => {
      // countryUI function
      countryUI(data[0], countryData, bordersData);
      // countryUI(data[0], neighborData, bordersNeighbor);
      // For Development
      console.log(data[0]);
      return data[0];
    })
    .then(() => {
      updateUI();
    });
}
///////////////////////////////////////////////////
// Update data to UI

function updateUI() {
  // weather UI
  iconEl.src = `https://openweathermap.org/img/wn/${weather.icon}@2x.png`;
  tempEl.innerHTML = `<p>${weather.temperature}°<span>${weather.unit}</span></p> `;
  // location Link style
  locationEl.textContent = weather.locationName;
  locationEl.addEventListener(
    'mouseover',
    e => (e.target.style.color = `#3bc9db`)
  );
  locationEl.addEventListener('mouseout', e => (e.target.style.color = `#222`));
  locationEl.style.transition = `all 0.3s`;
  locationEl.style.cursor = `pointer`;
  descEl.textContent = weather.status;
  // country
  countryName.textContent = countryData.countryName;
  neighborName.textContent = neighborData.countryName;
  // population
  population.textContent = `population is: ${Math.round(
    countryData.population / 1000000
  )} Million`;
  neighborPopulation.textContent = `population is: ${Math.round(
    neighborData.population / 1000000
  )} Million`;
  // currencies
  currencies.textContent = `currency is: ${countryData.currencies}`;
  neighborCurrencies.textContent = `currency is: ${neighborData.currencies}`;
  // Flag
  flag.src = countryData.flag;
  flagN.src = neighborData.flag;
}
console.log('countryData', countryData);
console.log('neighborData', neighborData);
///////////////////////////////////////////////////
// Update Neighbors data to UI
function Neighbors(neighbors) {
  const fetchNeighbor = fetch(
    `https://restcountries.com/v3.1/alpha?codes=${neighbors}`
  )
    .then(res => res.json())
    .then(dataN => console.log('fetchNeighbor', dataN[0]));
  if (neighbors.borders) {
    const spanN = document.createElement('span');
    neighbors.borders.forEach(border => {
      spanN.textContent = border;
      bordersNeighbor.insertAdjacentElement('beforeend', spanN);
      console.log(border);
    });
  }
}
Neighbors('lby');

/*
neighborName
neighborPopulation
neighborCurrencies
bordersNeighbor
flagN
 */
function countryUI(data, object, borderEl) {
  object.countryName = `${data.name.official}, ${data.capital[0]}`;
  object.population = data.population;
  object.currencies = `${
    data.currencies[Object.keys(data.currencies)[0]].name
  } , ${data.currencies[Object.keys(data.currencies)[0]].symbol}`;
  object.flag = data.flags.png;
  console.log(data.flags.png);
  // borders
  data.borders.forEach(border => {
    if (border) {
      const span = document.createElement('span');
      span.textContent = border.toLowerCase();
      borderEl.insertAdjacentElement('beforeend', span);
    } else {
      borderEl.textContent = 'No Neighbors Found';
    }
  });
  // Selecting Neighbors
  borderEl.addEventListener('click', e => {
    const clicked = e.target;
    if (!clicked.classList.contains('data')) {
      console.log('success');
      console.log(clicked.textContent);
      country(clicked.textContent);
    }
  });
}
