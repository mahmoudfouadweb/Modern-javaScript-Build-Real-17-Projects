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

  setInterval(function () {
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
  }, 1500);
});
