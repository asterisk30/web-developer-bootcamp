var p1 = document.getElementById('p1');
var p2 = document.getElementById('p2');
var reset = document.getElementById('reset');
var maxNumDisplay = document.getElementById('maxNumDisplay');
var maxNum = document.getElementById('maxNum');
var topScore;
var gameOver = false;
// add event listeners

maxNum.addEventListener('input', () => {
  resetPage();
  topScore = Number(maxNum.value);
  if (topScore < 0) {
    alert('Please input a positive integer.')
  } else {
    maxNumDisplay.textContent = topScore;
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

reset.addEventListener('click', resetPage);


// define callback functions
function showScore(id) {
  maxNum.value = '';
  var score = document.getElementById(id).textContent;
  if (topScore === 0) {
    alert('please input a number.')
  } else if (score < topScore) {
    score++;
    document.getElementById(id).textContent = score;
    if (score === topScore) {
      document.getElementById(id).classList.add('green');
      gameOver = true;
    }
  }
}

function resetPage() {
  document.getElementById('score1').textContent = 0;
  document.getElementById('score1').classList.remove('green');
  document.getElementById('score2').textContent = 0;
  document.getElementById('score2').classList.remove('green');
  maxNumDisplay.textContent = '';
}