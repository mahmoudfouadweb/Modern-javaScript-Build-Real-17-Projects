'use strict';

const form = document.querySelector('.form');
const input = document.querySelector('.input');
const todosUl = document.querySelector('.todos');
///////////////////////////////////////////////
///////////////////////////////////////////////
// update UI
// const todos = JSON.parse(localStorage.getItem('todos'));
// if (todos) {
//   console.log('todos from LS', todos);
//   addTodo(todos);
//   updateLS();
// }
// console.log(todos);

///////////////////////////////////////////////
// form control
form.addEventListener('submit', e => {
  e.preventDefault();
  addTodo();
  // updateLS();
  form.reset();
});

///////////////////////////////////////////////
// add new todo

function addTodo(todo) {
  let inputTodo = input.value;
  // if (todo) {
  if (inputTodo) {
    inputTodo = inputTodo;
    const li = document.createElement('li');
    li.textContent = inputTodo;
    todosUl.insertAdjacentElement('beforeend', li);
  }
  // }
}
///////////////////////////////////////////////
// update UI
// function updateLS() {
//   const lis = document.querySelectorAll('li');
//   const todoArr = [];
//   lis.forEach(li => {
//     todoArr.push({
//       textTodo: li.textContent,
//       isCompleted: li.classList.contains('completed'),
//     });
//   });
//   console.log(todoArr);
//   localStorage.setItem('todos', JSON.stringify(todoArr));
// }
