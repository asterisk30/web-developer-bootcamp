var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 250, 0)",
  "rgb(255, 0, 250)",
  "rgb(250, 50, 0)",
  "rgb(0, 50, 50)",
  "rgb(25, 50, 50)",
]

// select squares and assign hard coded colors
var squares = document.querySelectorAll('.square');
squares.forEach((item, index) => {
  item.style.backgroundColor = colors[index];
})
