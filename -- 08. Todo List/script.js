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

function addTodo(todo) {
  let todoText = input.value;
  if (todo) {
    todoText = todo.text;
  }
  // Build todo item
  if (todoText) {
    const todoEl = document.createElement('li');
    if (todo && todo.completed) {
      todoEl.classList.toggle('completed');
    }
  }
}

function localStorage(todo) {
  localStorage.setItem('todo', JSON.stringify(todo));
}

form.addEventListener('submit', e => {
  e.preventDefault();
  addTodo();
});
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
