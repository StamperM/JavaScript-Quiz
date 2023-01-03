var scoreElement = document.querySelector('#score');
var startQuizElement = document.querySelector('#startQuizButton');
var quizSectionElement = document.querySelector('#quizSection');
var startQuizSectionElement = document.querySelector('#startQuizSection');
var setTimer = 6000;
var score = 60;
var question1Element = document.querySelector('#quizQuestion1');
var questions = [
    {
        title: "put question here",
        answers: ['answer1', 'answer2','answer3','answer4'],
        correct: 'answer3'
    },
    {
        title: "put question here",
        answers: ['answer1', 'answer2','answer3','answer4'],
        correct: 'answer3'  
    },
    {
        title: "put question here",
        answers: ['answer1', 'answer2','answer3','answer4'],
        correct: 'answer3'
    },
    {
        title: "put question here",
        answers: ['answer1', 'answer2','answer3','answer4'],
        correct: 'answer3'
    }
]
var currentIndex = 0;



// score will count down from 60 seconds
function scoreboardFun(){
  let scoreboard = setInterval(function () {
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

function startQuiz(){
    console.log('startquiz');
    document.getElementById('startQuizSection').style.display='none';
    document.getElementById('quizQuestionContainer').style.display='block';
    displayQuestion(currentIndex);
}

function addQuestion1() {
    const question1 = document.createElement
}



function endOfGame (params) {
    
}

function displayQuestion(index){
document.getElementById('question').textContent = questions[index].title;
document.getElementById('answer1').textContent = questions[index].answers[0];
// added other answers
}

function 