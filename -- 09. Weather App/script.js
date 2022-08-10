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
const population = document.querySelector('.population p');
const currencies = document.querySelector('.currencies p');
const borders = document.querySelector('.borders p');
const bordersData = document.querySelector('.bordersData');
// App
const kelvin = 273.15;
const weather = {};
const countryData = {};
weather.unit = 'C';
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
  population.textContent = `population is: ${Math.round(
    countryData.population / 1000000
  )} Million`;
  currencies.textContent = `currency is: ${countryData.currencies}`;
  // borders.textContent = `borders: ${countryData.borders}`;
}
///////////////////////////////////////////////////
// country
function country(countryCode) {
  const countryApi = `https://restcountries.com/v3.1/alpha?codes=eg`;
  // console.log(countryApi);
  fetch(countryApi)
    .then(res => res.json())
    .then(data => {
      countryData.countryName = `${data[0].name.official}, ${data[0].capital[0]}`;
      countryData.population = data[0].population;
      countryData.currencies = `${data[0].currencies.EGP.name} , ${data[0].currencies.EGP.symbol}`;
      const borders = [...data[0].borders].toString();
      countryData.borders = borders;
      // const finalBorder = data[0].borders.forEach(border => {
      //   const span = document.createElement('span');
      //   span.textContent = border;
      //   bordersData.insertAdjacentElement('beforeend', span);
      //   console.log(border);
      // });

      // console.log(finalBorder);
      console.log(data[0]);
    })
    .then(() => {
      updateUI();
    });
}
console.log('countryData', countryData);
///////////////////////////////////////////////////
/*
countryName
population
currencies
borders
 */
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
// check if browser support localization
/*
if ('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition(setPosition, showError);
} else {
  notificationEl.style.display = 'block';
  notificationEl.innerHTML = `<p>your Browser not support Localization</p>`;
}

///////////////////////////////////////////////////
// set user position 'a function has one parameter'
function setPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  getWeather(latitude, longitude);
}

///////////////////////////////////////////////////
// Errors Handle to UI
function showError(error) {
  notificationEl.style.display = 'block';
  notificationEl.innerHTML = `<p> ${error.message}`;
}

///////////////////////////////////////////////////
// Get Weather from API Provider
function getWeather(latitude, longitude) {
  let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&lang=ar`;
  fetch(api)
    .then(res => res.json())
    .then(data => {
      weather.temperature.value = Math.floor(data.main.temp - kelvin);
      weather.countryCode = data.sys.country;
      weather.locationName = data.name;
      weather.description = data.weather[0].description;
      weather.mainDescription = data.weather[0].main;
      weather.icon = data.weather[0].icon;
      console.log('data', data);
    })
    .then(() => {
      updateUI();
    });
}

///////////////////////////////////////////////////
// show data to user's
function updateUI() {
  iconEl.src = `https://openweathermap.org/img/wn/${weather.icon}@2x.png`;
  tempEl.innerHTML = `<p> ° ${weather.temperature.value} <span>${weather.temperature.unit}</span>`;
  descEl.textContent = `${weather.mainDescription}, ${weather.description}`;
  locationEl.textContent = ` ${weather.countryCode},${weather.locationName}`;
}
console.log('weather', weather);
*/
