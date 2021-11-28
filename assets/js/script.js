// DOM Elements
var choice1 = document.querySelector('#choice1');
var choice2 = document.querySelector('#choice2');
var choice3 = document.querySelector('#choice3');
var choice4 = document.querySelector('#choice4');
var timer = document.querySelector('#time');
var messageEl = document.querySelector('#message');

// Quiz state variables
var currentQuestionIndex = 0;
var score = 0;
var seconds = 60;
var storedScores;
var scoreList = [];

function startQuiz() {
  var timerInterval = setInterval(function () {
    seconds--;
    timer.textContent = 'Timer: ' + seconds;

    if (seconds === 0) {
      clearInterval(timerInterval);
      quizEnd();
    } else if (currentQuestionIndex === questions.length) {
      clearInterval(timerInterval);
    }
  }, 1000);
  return score;
}
