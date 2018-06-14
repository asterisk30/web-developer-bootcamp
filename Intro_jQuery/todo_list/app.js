// selecting DOM elements
const ul = document.querySelector('ul');
const input = document.querySelector('#new-todo');
const plus = document.querySelector('.fa-plus');
console.log(plus)
// add event listeners

ul.addEventListener('click', removeTodo);

input.addEventListener('keypress', addTodo);

plus.addEventListener('click', toggleForm);

// declare and define functions

function removeTodo(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    e.target.parentElement.parentElement.classList.add('fadeOut');
  setTimeout(() => {
    e.target.parentElement.parentElement.remove()
  }, 990);
    e.stopPropagation();
  } else if (e.target.tagName = 'li') {
    e.target.classList.toggle('done');
  }
}

function addTodo(e) {
  if (e.which === 13) {
    var newTodo = e.target.value;
    var li = document.createElement('li');
    li.innerHTML = `<span class="delete-item"><i class="fas fa-trash-alt"></i></span> ${newTodo}`;
    ul.appendChild(li);
    e.target.value = '';
  }
}

function toggleForm() {
  if (input.classList.contains('fadeOut')) {
    input.classList.remove('fadeOut');
    input.classList.add('fadeIn');
  } else {
    input.classList.remove('fadeIn');
    input.classList.add('fadeOut');
  }
}