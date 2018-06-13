// selecting DOM elements
const list = document.querySelectorAll('li');
const deleteBtn = document.querySelectorAll('.delete-item');



// add event listeners

list.forEach(item => {
  item.addEventListener('click', e => {
    e.target.classList.toggle('done');
  })
})


deleteBtn.forEach(item => {
  item.addEventListener('click', e => {
    e.target.parentElement.classList.add('fadeOut');
    setTimeout(() => {
      e.target.parentElement.remove()
    }, 990);
    e.stopPropagation();
  })
})
