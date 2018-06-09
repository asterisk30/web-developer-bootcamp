var items = document.querySelectorAll('li');

items.forEach(element => {
  element.addEventListener('mouseover', () => {
    element.classList.add('view');
  })

  element.addEventListener('mouseout', () => {
    element.classList.remove('view');
  })

  element.addEventListener('click', () => {
    element.classList.toggle('done');
  })
})