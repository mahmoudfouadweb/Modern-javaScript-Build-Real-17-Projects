'use strict';

///////////////////////////////////////////////
// Setting General Variables
const form = document.querySelector('.form');
const input = document.querySelector('.input');
const todosUl = document.querySelector('.todos');

///////////////////////////////////////////////
// Update User Interface
function updateUI() {
  let els = document.querySelectorAll('li');
  const todos = [];
  els.forEach(el => {
    todos.push({
      text: el.textContent,
      done: el.classList.contains('completed'),
    });
  });
  localStorage.setItem('todos', JSON.stringify(todos));
}

///////////////////////////////////////////////
// Get Saved Todos
const todos = JSON.parse(localStorage.getItem('todos'));

if (todos)
  todos.forEach(todo => {
    addTodo(todo);
  });

///////////////////////////////////////////////
// Todo Factory Good Luck🤞
function addTodo(todo) {
  let text = input.value;
  if (todo) text = todo.text;
  if (text) {
    // create new Todo
    const li = document.createElement('li');
    if (todo && todo.done) li.classList.add('completed');
    li.textContent = text;

    // Delete a Completed Todo
    li.addEventListener('contextmenu', e => {
      e.preventDefault();
      e.target.remove();
      updateUI();
    });
    // Mark a Completed Todo
    li.addEventListener('click', e => {
      e.target.classList.toggle('completed');
      updateUI();
    });
    //Add todo to User Interface
    todosUl.insertAdjacentElement('beforeend', li);
    // Clear Input Field
    input.value = '';
    updateUI();
  }
}

///////////////////////////////////////////////
// Form Control
form.addEventListener('submit', e => {
  e.preventDefault();
  addTodo();
});
