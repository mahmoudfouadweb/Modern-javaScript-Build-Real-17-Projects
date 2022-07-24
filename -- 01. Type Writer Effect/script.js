'use strict';

const words = ['Designer', 'Developer', 'Officer', 'Creator'];
let i = 0;
let count = 0;
let letter = '';
let current = '';

(function looper() {
  if (count === words.length) count = 0;
  current = words[count];
  letter = current.slice(0, i++);
  document.querySelector('.text-type').textContent = letter;
  if (letter.length === current.length) {
    count++;
    i = 0;
  }
  setTimeout(looper, 300);
})();
