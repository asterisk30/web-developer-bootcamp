var clickMe = document.querySelector('button');
var color = document.querySelector('body');
var clicked = false;

clickMe.addEventListener('click', function() {
  if (clicked === false) {
    color.style.backgroundColor = 'purple';
    clicked = true;
  } else {
    color.style.backgroundColor = '';
    clicked = false;
  }
})