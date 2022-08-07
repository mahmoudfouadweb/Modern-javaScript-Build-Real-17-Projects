'use strict';

const form = document.querySelector('.form');
const input = document.querySelector('.input');
const todos = document.querySelector('.todos');

///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////

function addTodo() {
  let userText = input.value;
  const htmlTag = document.createElement('li');
  htmlTag.textContent = htmlTag;
  todos.insertAdjacentHTML('beforeend', htmlTag);
  form.reset();
}

// function update() {
//   todos.querySelectorAll('li').forEach(el => {
//     el.addEventListener('click', e => {
//       const clicked = e.target;
//       if (clicked && clicked.classList.contains('completed')) {
//         clicked.classList.remove('completed');
//       } else {
//         clicked.classList.add('completed');
//       }
//     });
//     el.addEventListener('contextmenu', e => {
//       e.preventDefault();
//       const clicked = e.target;
//       if (clicked) {
//         clicked.style.display = 'none';
//       }
//       console.log(e.target);
//     });
//   });
// }

// form.addEventListener('submit', e => {
//   e.preventDefault();
//   addTodo();
//   update();
// });
