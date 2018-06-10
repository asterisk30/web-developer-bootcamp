var colors;
var winningColor;

// select html elements
var squares = document.querySelectorAll('.square');
var rgbDisplay = document.querySelector('.rgbDisplay');
var result = document.querySelector('#result');
var title = document.querySelector('#title');
var resetBtn = document.querySelector('#reset');

pageSetUp();


// Add event listeners

squares.forEach((item, index) => {
  // add click listeners
  item.addEventListener('click', () => {
    var clickedColor = item.style.backgroundColor;
    if ( clickedColor === winningColor) {
      result.textContent = 'That\'s a bingo!'
      changeAllSquare(clickedColor);
      title.style.backgroundColor = clickedColor;
    } else {
      item.style.backgroundColor = 'black';
      result.textContent = 'Try Again!'
      setTimeout(() => {
        result.textContent = '';
      }, 1000)
    }
  })
})

resetBtn.addEventListener('click', pageSetUp)

// page set up code block
function pageSetUp() {
  colors = generateCol(6);
  winningColor = pickWin();
  rgbDisplay.textContent = winningColor;
  squares.forEach((item, index) => {
    // assign original colors
    item.style.backgroundColor = colors[index];
  })
}

// change all square colors
function changeAllSquare(color) {
  squares.forEach(item => {
    item.style.backgroundColor = color;
  })
}

// generate colors
function generateCol(num) {
  var colors = [];
  for (var i = 0; i < num; i++) {
    colors.push(randomCol());
  }
  return colors;
}
// pick random number and set winning color
function pickWin() {
  var index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
// random color function
function randomCol() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}