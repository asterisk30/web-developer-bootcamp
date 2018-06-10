// define variables
var colors;
var winningColor;
var mode;
const squares = document.querySelectorAll('.square');
const rgbDisplay = document.querySelector('.rgbDisplay');
const result = document.querySelector('#result');
const title = document.querySelector('#title');
const resetBtn = document.querySelector('#reset');
const easyBtn = document.querySelector('#easy');
const hardBtn = document.querySelector('#hard');

// original page set up
pageSetUp(mode);

// Add event listeners
squares.forEach((item, index) => {
  // add click listeners
  item.addEventListener('click', () => {
    var clickedColor = item.style.backgroundColor;
    if ( clickedColor === winningColor) {
      result.textContent = 'That\'s a bingo!'
      changeAllSquare(clickedColor);
      title.style.backgroundColor = clickedColor;
      resetBtn.textContent = 'Play Again?';
      easyBtn.style.display = 'none';
      hardBtn.style.display = 'none';
    } else {
      item.style.backgroundColor = 'black';
      result.textContent = 'Try Again!'
      setTimeout(() => {
        result.textContent = '';
      }, 1000)
    }
  });
})

resetBtn.addEventListener('click', () => {
  resetBtn.textContent = 'New Colors';
  result.textContent = '';
  easyBtn.style.display = 'inline-block';
  hardBtn.style.display = 'inline-block';
  pageSetUp(mode);
});

easyBtn.addEventListener('click', () => {
  hardBtn.classList.remove('selected');
  easyBtn.classList.add('selected');
  mode = 'easy';
  pageSetUp(mode);
});

hardBtn.addEventListener('click', () => {
  easyBtn.classList.remove('selected');
  hardBtn.classList.add('selected');
  mode = 'hard';
  pageSetUp(mode);
});

// page set up
function pageSetUp(mode) {
  title.style.backgroundColor = '#0abab5';
  if (mode === 'easy') {
    colors = generateCol(3);
    winningColor = pickWin();
    rgbDisplay.textContent = winningColor;
    for (var i = 0; i < 3; i++) {
      squares[i].style.backgroundColor = colors[i];
    }
    for (var i = 3; i < 6; i++) {
      squares[i].style.display = 'none';
    }
  } else {
    colors = generateCol(6);
    winningColor = pickWin();
    rgbDisplay.textContent = winningColor;
    squares.forEach((item, index) => {
      // assign original colors
      item.style.backgroundColor = colors[index];
      item.style.display = 'block';
    })
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