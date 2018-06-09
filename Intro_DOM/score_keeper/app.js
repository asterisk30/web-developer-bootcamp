var p1 = document.getElementById('p1');
var p2 = document.getElementById('p2');
var reset = document.getElementById('reset');
var maxNumDisplay = document.getElementById('maxNumDisplay');
var maxNum = document.getElementById('maxNum');
var gameOver = false;
// add event listeners

maxNum.addEventListener('keyup', () => {
  if (typeof maxNum.value === "number" && maxNum.value <= 0) {
    alert('Please input a positive integer.')
  } else {
    maxNumDisplay.textContent = maxNum.value;
    gameOver = false;
  }
})

p1.addEventListener('click', () => {
  if (!gameOver) {
    showScore("score1");
  }
});

p2.addEventListener('click', () => {
  if (!gameOver) {
    showScore("score2");
  }
});

reset.addEventListener('click', () => {
  window.location.reload(true);
});


// define callback functions
function showScore(id) {
  maxNum.value = '';
  var score = document.getElementById(id).textContent;
  var topScore = maxNumDisplay.textContent;
  if (topScore === '') {
    alert('Please input a number.')
  } else if (score < topScore) {
    score++;
    document.getElementById(id).textContent = score;
    if (score == topScore) {
      document.getElementById(id).classList.add('green');
      gameOver = true;
    }
  }
}