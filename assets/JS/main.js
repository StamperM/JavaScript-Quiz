var scoreElement = document.querySelector("#score");
var startQuizElement = document.querySelector("#startQuizButton");
var quizSectionElement = document.querySelector("#quizSection");
var startQuizSectionElement = document.querySelector("#startQuizSection");
var setTimer = 1000;
var score = 60;
var question1Element = document.getElementById("question");
var answerOne = document.getElementById("answer1");
var answerTwo = document.getElementById("answer2");
var answerThree = document.getElementById("answer3");
var answerFour = document.getElementById("answer4");
var userInputAnswer = "";
var questions = [
  {
    title: "Which of the following is not a type of JavaScript",
    answers: ["string", "Boolean", "Object", "This"],
    correct: "This",
  },
  {
    title:
      "_______ variables are available throughout the length of the code and it has no scope.",
    answers: ["Function", "Global", "Defined", "Scoped"],
    correct: "Global",
  },
  {
    title: "A box that allows the user to enter input by providing a text box.",
    answers: ["Alert", "Prompt", "Confirm", "Answer"],
    correct: "Prompt",
  },
  {
    title: "What does DOM stand for?",
    answers: [
      "Database Object Model",
      "Document Object Model",
      "Data Obstacle Model",
      "Document Override Model",
    ],
    correct: "Document Object Model",
  },
];
var currentIndex = 0;

// score will count down from 60 seconds

function startQuiz() {
  scoreboardFun();
  document.getElementById("startQuizSection").style.display = "none";
  document.getElementById("quizQuestionContainer").style.display = "block";
  displayQuestion(currentIndex);
  console.log(scoreboardFun);
}

// displayQuestion () will display the question of the index it is at.
function displayQuestion(index) {
  console.log("hello");
  question1Element.textContent = questions[index].title;
  console.log(answerOne);
  answerOne.textContent = questions[index].answers[0];
  answerTwo.textContent = questions[index].answers[1];
  answerThree.textContent = questions[index].answers[2];
  answerFour.textContent = questions[index].answers[3];
  console.log(document.querySelectorAll(".userAnswer"));
  document.querySelectorAll(".userAnswer").forEach((answer) => {
    answer.addEventListener("click", (event) => {
      userInputAnswer = event.target.textContent;
      answerTheQuestions();
    });
  });
}

// answerTheQuestions should take the users answer and compare it to the correct answer. If it's correct it will display correct at the bottom and the go to the next question. If it is in correct it wil notify the user they were wrong, reduce the score by 10 and then show the next question.
function answerTheQuestions() {
  if (userInputAnswer === questions[currentIndex].correct) {
    document.getElementById("notifyUser").textContent = "Correct";
    displayNextQuestion();
  } else {
    document.getElementById("notifyUser").textContent = "Wrong";
    score -= 10;
    displayNextQuestion();
  }
  // return endOfGame();
}
function displayNextQuestion() {
  currentIndex++;
  if (currentIndex < questions.length) {
    displayQuestion(currentIndex);
  }
}

//

function runTheScore() {
  if (score >= 0) {
    scoreElement.textContent = "Score: " + score;
    score--;
  } else {
    scoreElement.contextContent = "Score: " + score;
    clearInterval(scoreboardFun);
  }
}
function scoreboardFun() {
  let scoreboard = setInterval(runTheScore, setTimer);
  endOfGame();
}

//  ToDo: For All Done unhide #lastSection and Hide #quizQuestions Container user score will be pulled from the score element and be written to totalScore. userInitals will need to be a user input and stored to local storage.
function endOfGame() {
  document.getElementById("quizQuestionContainer").style.display = "none";
  document.getElementById("lastSection").style.display = "block";
  document.getElementById('allDone').textContent = "All Done"
  document.getElementById("totalScore").textContent = `Your final score is ${score}`;

 
 saveScore();
 
}
function saveScore(){
  var leaderBoardInfo ={
    Player: document.getElementById('userinputInitals'),
    playerScore: score
  };
  localStorage.setItem("leaderboardInfo.player","leaderBoardInfo.playerScore"),JSON.stringify(leaderBoardInfo);
}
 


// Todo: High Scores Unhide Leaderboard &hide Last section. Create <li> to store the userIntials and Score scores in #leaderBoardList.
function displayScoresOnBoard(){
  var recentScore = JSON.parse(localStorage.getitem('leaderBoardInfo'))
}
// Todo: Return user to start quiz #returnToQuiz

// Todo: clear the scores off the board. May need to look at how to clear local storage?
