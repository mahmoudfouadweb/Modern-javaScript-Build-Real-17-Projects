'use strict';
///////////////////////////////////////////////////
// Demo 'copy me'

///////////////////////////////////////////////////
//General Variables setting
const iconEl = document.querySelector('.weather-icon');
const tempEl = document.querySelector('.temperature-value p');
const descEl = document.querySelector('.temperature-description p');
const locationEl = document.querySelector('.location p');
const notificationEl = document.querySelector('.notification');

// App
const weather = {};
weather.temperature = {
  unit: 'celsius',
};
let icon = document.querySelector();
const key = '8e7d106695f8821e7a6da4304ae71e30';
///////////////////////////////////////////////////
// check if browser support localization
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
      console.log(data);
    });
}
