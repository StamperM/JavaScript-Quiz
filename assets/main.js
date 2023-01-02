var startQuizElement = document.getElementById("startQuizSection");
var questionElement = document.querySelector("#quizSection");

var timerEl = document.querySelector("#timer");
console.log(timerEl);
var score = 60;
var timeForTimer = 60000;
var questionIndex = 0;


function startQuiz() {
    console.log('Quiz starting');
    console.log(questionElement);
    questionElement.removeAttribute('hidden');
    startQuizElement.setAttribute('hidden', true)
    getQuestion();
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

function gameTimer() {
  var timerCountdown = setInterval(function () {
    timeForTimer--;
    timerEl.textContent = "Timer" + score;
  },timeForTimer);


  if (timerEl.textContent ==='0'){
    clearInterval(timerCountdown);
    // clear setInterval 
  }
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


