// define variables
var colors;
var winningColor;
var mode;
const squares = document.querySelectorAll('.square');
const rgbDisplay = document.querySelector('.rgbDisplay');
const result = document.querySelector('#result');
const title = document.querySelector('#title');
const resetBtn = document.querySelector('#reset');
const modeBtns = document.querySelectorAll('.mode');
// original page set up
pageSetUp(mode);

// Add event listeners
squares.forEach((item, index) => {
  // add click listeners
  item.addEventListener('click', gameRule);
})

resetBtn.addEventListener('click', () => {
  resetBtn.textContent = 'New Colors';
  result.textContent = '';
  modeBtns[0].style.display = 'inline-block';
  modeBtns[1].style.display = 'inline-block';
  pageSetUp(mode);
});

modeBtns.forEach(item => {
  item.addEventListener('click', () => {
    modeBtns[0].classList.remove('selected');
    modeBtns[1].classList.remove('selected');
    item.classList.add('selected');
    item.textContent === 'Easy' ? mode = 'easy' : mode = 'hard';
    pageSetUp(mode);
  })
})

// page set up
function pageSetUp(mode) {
  title.style.backgroundColor = '#0abab5';
  if (mode === 'easy') {
    colors = generateCol(3);
    for (var i = 0; i < 3; i++) {
      squares[i].style.backgroundColor = colors[i];
    }
    for (var i = 3; i < 6; i++) {
      squares[i].style.display = 'none';
    }
  } else {
    colors = generateCol(6);
    squares.forEach((item, index) => {
      // assign original colors
      item.style.backgroundColor = colors[index];
      item.style.display = 'block';
    })
  }
  winningColor = pickWin();
  rgbDisplay.textContent = winningColor;
}

// game rules
function gameRule() {
  var clickedColor = item.style.backgroundColor;
  if ( clickedColor === winningColor) {
    result.textContent = 'That\'s a bingo!'
    changeAllSquare(clickedColor);
    title.style.backgroundColor = clickedColor;
    resetBtn.textContent = 'Play Again?';
    modeBtns[0].style.display = 'none';
    modeBtns[1].style.display = 'none';
  } else {
    item.style.backgroundColor = 'black';
    result.textContent = 'Try Again!'
    setTimeout(() => {
      result.textContent = '';
    }, 1500)
  }
}

// change all square colors
function changeAllSquare(color) {
  squares.forEach(item => {
    item.style.backgroundColor = color;
  })
}

// generate colors
function generateCol(num) {
  let colors = [];
  for (var i = 0; i < num; i++) {
    colors.push(randomCol());
  }
  return colors;
}

// pick random number and set winning color
function pickWin() {
  let index = Math.floor(Math.random() * colors.length);
  return colors[index];
}

// random color function
function randomCol() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}