// DOM Elements
var choice1 = document.querySelector('#choice1');
var choice2 = document.querySelector('#choice2');
var choice3 = document.querySelector('#choice3');
var choice4 = document.querySelector('#choice4');
var timer = document.querySelector('#time');
var messageEl = document.querySelector('#message');
var startBtnEl = document.querySelector('#startBtn');
var questionEl = document.querySelector('#question');

// Quiz state variables
var currentQuestionIndex = 0;
var score = 0;
var seconds = 60;
var panalty = 10;
var highScores;
var scoreList = [];

function startQuiz() {
  var timerInterval = setInterval(function () {
    seconds--;
    timer.textContent = 'Timer: ' + seconds;
    // time checker
    if (seconds <= 0) {
      clearInterval(timerInterval);
      quizEnd();
      timer.textContent = 'OOOPS! OUT OF TIME!';
    }
  }, 1000);
  return score;
}

function getQuestion() {
  startBtnEl.hidden = true;
  if (currentQuestionIndex === questions.length) {
    quizEnd();
  } else {
    questionEl.textContent = questions[currentQuestionIndex]['title'];
    choice1.textContent = questions[currentQuestionIndex]['choices'][0];
    choice2.textContent = questions[currentQuestionIndex]['choices'][1];
    choice3.textContent = questions[currentQuestionIndex]['choices'][2];
    choice4.textContent = questions[currentQuestionIndex]['choices'][3];
  }
}

function quizEnd() {
  var scoreTag = document.createElement('h2');
  scoreTag.id = 'score';
  var inputTag = document.createElement('input');
  inputTag.id = 'input-field';
  var submitBtn = document.createElement('button');

  // hide question section
  choice1.remove();
  choice2.remove();
  choice3.remove();
  choice4.remove();
  // hide message
  message.remove();

  questionEl.textContent = 'All Done!';
  document.body.appendChild(scoreTag);
  scoreTag.textContent = 'Your final score: ' + score;
  document.body.appendChild(inputTag);
  submitBtn.textContent = 'Submit';
  document.body.appendChild(submitBtn);

  submitBtn.addEventListener('click', function (event) {
    event.preventDefault();
    var highScoreText = new Object();
    highScoreText.name = inputTag.value.trim();
    highScoreText.newScore = score;
    saveHighScore(highScoreText);
    window.location.href = 'scores.html';
  });
}

function saveHighScore(highScoreText) {
  tempArray = JSON.parse(localStorage.getItem('scores'));
  if (tempArray === null) {
    scoreList.push(highScoreText);
    localStorage.setItem('scores', JSON.stringify(scoreList));
  } else {
    tempArray.push(highScoreText);
    localStorage.setItem('scores', JSON.stringify(tempArray));
  }
}

choice1.addEventListener('click', function () {
  // check if user answer is correct or wrong
  if (
    questions[currentQuestionIndex]['choices'][0] ===
    questions[currentQuestionIndex]['answer']
  ) {
    messageEl.textContent = 'Correct';
    score++;
  } else {
    messageEl.textContent = 'Wrong!';
    // penalize time
    seconds = seconds - panalty;
  }
  // next question
  currentQuestionIndex++;
  getQuestion();
});

choice2.addEventListener('click', function () {
  // check if user answer is correct or wrong
  if (
    questions[currentQuestionIndex]['choices'][1] ===
    questions[currentQuestionIndex]['answer']
  ) {
    messageEl.textContent = 'Correct!';
    score++;
  } else {
    messageEl.textContent = 'Wrong!';
    // penalize time
    seconds = seconds - panalty;
  }
  // next question
  currentQuestionIndex++;
  getQuestion();
});

choice3.addEventListener('click', function () {
  // check if user answer is correct or wrong
  if (
    questions[currentQuestionIndex]['choices'][2] ===
    questions[currentQuestionIndex]['answer']
  ) {
    messageEl.textContent = 'Correct!';
    score++;
  } else {
    messageEl.textContent = 'Wrong!';
    // penalize time
    seconds = seconds - panalty;
  }
  // next question
  currentQuestionIndex++;
  getQuestion();
});

choice4.addEventListener('click', function () {
  // check if user answer is correct or wrong
  if (
    questions[currentQuestionIndex]['choices'][3] ===
    questions[currentQuestionIndex]['answer']
  ) {
    messageEl.textContent = 'Correct!';
    score++;
  } else {
    messageEl.textContent = 'Wrong!';
    // penalize time
    seconds = seconds - panalty;
  }
  // next question
  currentQuestionIndex++;
  getQuestion();
});

// hide start screen
startBtnEl.addEventListener('click', function () {
  messageEl.textContent = '';
});

// quiz starts
startBtnEl.addEventListener('click', startQuiz);

// display questions
startBtnEl.addEventListener('click', getQuestion);
