var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 250, 0)",
  "rgb(255, 0, 250)",
  "rgb(250, 50, 0)",
  "rgb(0, 50, 50)",
  "rgb(25, 50, 50)",
]

// select html elements
var squares = document.querySelectorAll('.square');
var rgbDisplay = document.querySelector('.rgbDisplay');


squares.forEach((item, index) => {
  // assign original colors
  item.style.backgroundColor = colors[index];
  // add click listeners
  item.addEventListener('click', () => {
    var clickedColor = item.style.backgroundColor;
    if ( clickedColor === winningColor) {
      alert('You win!!!')
    } else {
      alert('try again')
    }
  })
})

// assign winning color and display on html
var winningColor = colors[3];
rgbDisplay.textContent = winningColor;