var clickMe = document.querySelector('button');
var color = document.querySelector('body');
var clicked = false;

//  use click and a boolean

// clickMe.addEventListener('click', function() {
//   if (!clicked) {
//     color.style.backgroundColor = 'purple';
//   } else {
//     color.style.backgroundColor = '';
//   }
//   clicked = !clicked;
// })

// use classList.toggle

clickMe.addEventListener('click', function() {
  color.classList.toggle('purple');
})