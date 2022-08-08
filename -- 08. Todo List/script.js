'use strict';

const form = document.querySelector('.form');
const input = document.querySelector('.input');
const todosUl = document.querySelector('.todos');

///////////////////////////////////////////////
///////////////////////////////////////////////

///////////////////////////////////////////////
// get saved Data
const todos = JSON.parse(localStorage.getItem('todos'));
if (todos)
  todos.forEach(todo => {
    addTodo(todo);
  });

////////////////////////////////////////////
// form control
form.addEventListener('submit', e => {
  e.preventDefault();
  addTodo();
  updateUI();
});

////////////////////////////////////////////
// new todo
function addTodo(todo) {
  let todoText = input.value;
  if (todo) todoText = todo.text;
  if (todoText) {
    // Build Todo
    const li = document.createElement('li');
    li.textContent = todoText;
    if (todo && todo.completed) li.classList.add('completed');
    // mark completed todo
    li.addEventListener('click', e => {
      e.target.classList.toggle('completed');
      updateUI();
    });
    // Delete Completed Todo
    li.addEventListener('contextmenu', e => {
      e.preventDefault();
      e.target.remove();
      updateUI();
    });
    // show todo to UI
    todosUl.insertAdjacentElement('beforeend', li);
    input.value = '';
    updateUI();
  }
}

function updateUI() {
  const lis = document.querySelectorAll('li');
  const todos = [];
  lis.forEach(li => {
    todos.push({
      text: li.textContent,
      completed: li.classList.contains('completed'),
    });
  });
  localStorage.setItem('todos', JSON.stringify(todos));
}
