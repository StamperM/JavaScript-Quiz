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

// startQuiz will start the timer countdown,  will hide the start page, and show the first question

function startQuiz() {
  scoreboardFun();
  document.getElementById("startQuizSection").style.display = "none";
  document.getElementById("quizQuestionContainer").style.display = "block";
  displayQuestion(currentIndex);
  
}

// displayQuestion () will populate and display the question of the index it is at. Calling the answerTheQuestions() 
function displayQuestion(index) {
  console.log("hello");
  question1Element.textContent = questions[index].title;
  console.log(answerOne);
  answerOne.textContent = questions[index].answers[0];
  answerTwo.textContent = questions[index].answers[1];
  answerThree.textContent = questions[index].answers[2];
  answerFour.textContent = questions[index].answers[3];
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
    currentIndex++;
    console.log(currentIndex);
    displayNextQuestion();
  } else {
    document.getElementById("notifyUser").textContent = "Wrong";
    score -= 10;
    currentIndex++;
    displayNextQuestion();
  }
}
// displayNext Question will cont to display questions until it reaches the greater than the questions array length.
function displayNextQuestion() {
  if (currentIndex < questions.length) {
    displayQuestion(currentIndex);
  } else {
    return endOfGame();
  }
}

// runTheScore down says that if score is greater than zero it will log the score/timer down by one. Once the score = 0 the game will end.

function runTheScore() {
  if (score >= 0) {
    scoreElement.textContent = "Score: " + score;
    score--;
  } else {
    scoreElement.contextContent = "Score: " + score;
    
    endOfGame();
  }
}

// This function is to uses setInterval method to have our time count down my 1 every second.
function scoreboardFun() {
  let scoreboard = setInterval(runTheScore, setTimer);
}
//  ToDo: For All Done unhide #lastSection and Hide #quizQuestions Container user score will be pulled from the score element and be written to totalScore. userInitals will need to be a user input and stored to local storage.
function endOfGame() {
  document.getElementById("quizQuestionContainer").style.display = "none";
  document.getElementById("lastSection").style.display = "block";
  document.getElementById("allDone").textContent = "All Done";
  document.getElementById("totalScore").textContent = `Your final score is ${score}`;
  saveScores();
  
}

function saveScores() {
  var leaderBoardString = window.localStorage.getItem("leaderBoardInfo");
  var scores = [];
  if (leaderBoardString) {
    scores = JSON.parse(leaderBoardString);
  }
  scores.push({
    Player: document.getElementById("userinputInitals").value,
    playerScore: score,
  });
  localStorage.setItem("leaderBoardInfo", JSON.stringify(scores));
}

// Todo: High Scores Unhide Leaderboard &hide Last section. Create <li> to store the userIntials and Score scores in #leaderBoardList.
function displayScoresOnBoard() {
  var scores = JSON.parse(localStorage.getItem("leaderBoardInfo"));
  if (scores) {
    var sortedscores = scores.sort((a, b) => {
      a.playerScore > b.playerScore;
    });
    sortedscores.forEach((score) => {
      score.Player;
      score.playerScore;
    });
    sortedscores.forEach(function (item) {
      let li = document.createElement("li");
      li.innerText = item;
      list.appendChild(li);
    });
   
    
  }
}

function displayLeaderBoard(){
  document.getElementById("leaderBoard").style.display = "block";
  document.getElementById("quizQuestionContainer").style.display = "none";
  document.getElementById("lastSection").style.display = "none";
  document.getElementById("startQuizSection").style.display = "none";
  
}
// Todo: Return user to start quiz #returnToQuiz

// Todo: clear the scores off the board. May need to look at how to clear local storage?
function clearLeaderBoard(){
  var leaderList = document.getElementById("leaderBoardList")
  leaderList = "";
}