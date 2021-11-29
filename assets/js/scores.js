var goBack = document.querySelector('#go-back');
var clearScores = document.querySelector('#clear-scores');
var tableEl = document.querySelector('#highScores');

initScore();

function initScore() {
  // either get scores from localstorage or set to empty array
  highScores = JSON.parse(window.localStorage.getItem('scores')) || [];

  if (highScores !== null) {
    scoreList = highScores;
  }
  // run function when page loads
  printHighScores();
}

function printHighScores() {
  if (highScores !== null) {
    // sort highscores by score property in descending order
    scoreList.sort(function (a, b) {
      return b.newScore - a.newScore;
    });

    for (i = 0; i < scoreList.length; i++) {
      var scoreListItem = scoreList[i];
      // create tr tag for each high score
      var trEl = document.createElement('tr');
      var nameEl = document.createElement('td');
      var nameText = document.createTextNode(scoreListItem.name);
      var scoreEl = document.createElement('td');
      var scoreNum = document.createTextNode(scoreListItem.newScore);

      trEl.setAttribute('tr-index', i);
      // display on the page
      tableEl.appendChild(trEl);
      trEl.appendChild(nameEl);
      nameEl.appendChild(nameText);
      trEl.appendChild(scoreEl);
      scoreEl.appendChild(scoreNum);
    }
  }
}

function clearHighScores() {
  window.localStorage.clear();
}

clearScores.addEventListener('click', function () {
  clearHighScores();
  window.location.href = 'scores.html';
});
