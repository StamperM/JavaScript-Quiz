var startQuizElement = document.getElementById("startQuizSection");
var questionElement = document.querySelector("#quizSection");

var timerEl = document.querySelector("#timer");
console.log(timerEl);
var setTimer = 6000;
var score = 60;
var questionIndex = 0;
var 


function startQuiz() {
    console.log('Quiz starting');
    console.log(questionElement);
    questionElement.removeAttribute('hidden');
    startQuizElement.setAttribute('hidden', false);
    getQuestion();
    gameTimer();
    
}

function getQuestion(){
    console.log('getting question')
    var currentQuestion = questions[questionIndex];
    console.table(currentQuestion);

    for (let i = 0; i < currentQuestion.answers.length; i++) {
        const answer = currentQuestion.answers[i];
        console.log(answer);
        var btn = document.createElement('button');
        btn.textContent = answer;
        questionElement.appendChild(btn);
        
    }
}
function gameTimer(){
var scoreboard = setInterval(function () {
  if (score> 0){
      scoreElement.textContent =  'Score: ' + score;
      score --;
  } else {
      scoreElement.contextContent = "Score: " + score;
      clearInterval(scoreboard);
      endOfGame();
  }
},setTimer);
}
// Line 1 associates timeEl with #timer on the HTML.
// gameTimer() uses time set interval to reduce the time that is
// the score.

function scoreBasedOnAnswer() {
  if (answer === false) {
    return score - 15;
  } else {
    return score;
  }
}

// function scoreBasedOnAnswer should reduce the score by 15 each time the answer is incorrect.


