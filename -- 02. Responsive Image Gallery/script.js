'use strict';
const container = document.querySelector('.container');
const panel = document.querySelectorAll('.panel');

// panel.forEach(img => {
//   img.addEventListener('click', e => {
//     console.log(e.target);
//     const target = e.target;

//     if (target) img.classList.add('active');
//     if (!target) img.classList.remove('active');
//   });
// });

container.addEventListener('click', e => {
  const img = e.target;
  // remove Active
  img
    .closest('.container')
    .querySelectorAll('.panel')
    .forEach(el => {
      el.classList.remove('active');
    });
  if (!img) return;
  if (img) {
    img.classList.add('active');
  }
});
