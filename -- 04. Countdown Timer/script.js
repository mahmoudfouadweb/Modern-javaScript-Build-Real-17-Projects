'use strict';
const timeConainer = document.querySelectorAll('.time-container');
const day = document.querySelector('.days');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

const newYearTime = new Date(`august 24 ${new Date().getFullYear()} 00:00:00`);

// update countdown time
function updateCountdownTime() {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;
  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor((diff / 1000 / 60 / 60) % 24);
  const m = Math.floor((diff / 1000 / 60) % 60);
  const s = Math.floor((diff / 1000) % 60);
  day.textContent = d;
  hours.textContent = h;
  minutes.textContent = m;
  seconds.textContent = s;
}
setInterval(updateCountdownTime, 1000);
