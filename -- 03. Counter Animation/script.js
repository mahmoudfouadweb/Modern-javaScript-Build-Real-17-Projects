'use strict';

// const counter = document.querySelectorAll('.counter');

// counter.forEach(count => {
//   count.textContent = '0';

//   function updateCounter() {
//     const target = +count.dataset.target;
//     console.log(target);
//     let c = +count.textContent;
//     let increment = target / 250;
//     if (c < target) {
//       count.textContent = Math.ceil(c + increment);
//       setTimeout(updateCounter, 1);
//     }

//     console.log(typeof target, target);
//   }
//   updateCounter();
// });
///////////////////////////////////////////////
///////////////////////////////////////////////
setInterval(() => {
  document.querySelectorAll('.counter').forEach(count => {
    count.textContent = 0;

    const countClass = count
      .closest('.counter__container')
      .querySelector('.icon');
    if (countClass.getAttribute('name') === 'logo-facebook') {
      countClass.style.color = 'blue';
    } else if (countClass.getAttribute('name') === 'logo-youtube') {
      countClass.style.color = 'red';
    } else {
      countClass.style.color = 'aqua';
    }
    function updateUI() {
      const target = +count.dataset.target;
      let textUI = +count.textContent;
      let i = Math.floor(target / 250);
      if (textUI < target) {
        count.textContent = i + textUI;
        setTimeout(updateUI, 1);
      }
    }
    updateUI();
  });
}, 3000);

setInterval(() => {
  const timeNow = new Date();
  let amPm = 'am';
  let h = timeNow.getHours();
  let m = timeNow.getMinutes();
  let s = timeNow.getSeconds();
  if (h > 12) {
    h = h - 12;
    amPm = 'pm';
  } else {
    amPm = 'am';
  }

  console.log('the time is:- ', h, m, s, amPm);
}, 1000);
