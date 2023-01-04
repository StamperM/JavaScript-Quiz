var scoreElement = document.querySelector('#score');
var startQuizElement = document.querySelector('#startQuizButton');
var quizSectionElement = document.querySelector('#quizSection');
var startQuizSectionElement = document.querySelector('#startQuizSection');
var setTimer = 1000;
var score = 60;
var question1Element = document.getElementById('question')
var answerOne = document.getElementById('answer1');
var answerTwo = document.getElementById('answer2');
var answerThree = document.getElementById('answer3');
var answerFour = document.getElementById('answer4');
var userInputAnswer = '';
var questions = [
    {
        title: "Which of the following is not a type of JavaScript",
        answers: ['string', 'Boolean','Object','This'],
        correct: 'This'
    },
    {
        title: "_______ variables are available throughout the length of the code and it has no scope.",
        answers: ['Function', 'Global','Defined','Scoped'],
        correct: 'Global'  
    },
    {
        title: "A box that allows the user to enter input by providing a text box.",
        answers: ['Alert', 'Prompt','Confirm','Answer'],
        correct: 'Prompt'
    },
    {
        title: "What does DOM stand for?",
        answers: ['Database Object Model', 'Document Object Model','Data Obstacle Model','Document Override Model'],
        correct: 'Document Object Model'
    }
]
var currentIndex = 0;



// score will count down from 60 seconds


function startQuiz(){
    scoreboardFun();
    console.log('startquiz');
    document.getElementById('startQuizSection').style.display='none';
    document.getElementById('quizQuestionContainer').style.display='block';
    displayQuestion(currentIndex);
    console.log(scoreboardFun);
    
}




// function endOfGame (params) {
    
// }
// displayQuestion () will display the question of the index it is at. 
function displayQuestion(index){
    console.log('hello')
question1Element.textContent=questions[index].title;
console.log(answerOne);
answerOne.textContent=questions[index].answers[0];
answerTwo.textContent=questions[index].answers[1];
answerThree.textContent=questions[index].answers[2];
answerFour.textContent=questions[index].answers[3];
console.log(document.querySelectorAll('.userAnswer'))
document.querySelectorAll('.userAnswer').forEach(answer=>{
    answer.addEventListener('click', event=>{
        userInputAnswer= event.target.textContent
        answerTheQuestions();
    })
   
})

}

// // need to add eventListener on the answers. 
// document.querySelectorEach('.userAnswer').addEventListener('click', displayQuestion());


// document.querySelectorAll('#userAnswer').forEach(answer=>{
//     answer.addEventListener('click', event=>{
//         console.log(answer);
//         console.log(event);
//     })
// })
// answerTwo.addEventListener('click', function(event){
//     console.log(event);
//     console.log('the sucks');
//    return answerTheQuestions();
// });

// swerThree.addEventListener('click', function selectAnswer3(){
//     if (answerThree === questions.correct){
//     document.getElementById('notifyUser').textContent= "Correct";
//     return displayQuestion(currentIndex++);
// } else {
//     return incorrectAnswer();
// }
// });
// answerFour.addEventListener('click', function selectAnswer2(){
//     if (answerFour === questions.correct){
//     document.getElementById('notifyUser').textContent= "Correct";
//     return displayQuestion(currentIndex++);
// } else {
//     return incorrectAnswer();
// }
// });

// || answerTwo === questions.correct || answerThree === questions.correct || answerFour ===questions.correct 


// function incorrectAnswer() {
//     score - 10;
//     document.getElementById('notifyUser').textContent= "Wrong";
//     displayQuestion(currentIndex);
// }



// answerTheQuestions should take the users answer and compare it to the correct answer. If it's correct it will display correct at the bottom and the go to the next question. If it is in correct it wil notfiy the user they were worng, reduce the score by 10 and then show the next question. 
function answerTheQuestions(){
    
    if(userInputAnswer=== questions[currentIndex].correct){
        document.getElementById('notifyUser').textContent= "Correct";  
    } else{
        document.getElementById('notifyUser').textContent= "Wrong";
        score -=10; 
    }
    currentIndex++; 
    if(currentIndex < questions.length){
    displayQuestion(currentIndex)

}else{
    endOfGame()
}
}

function scoreboardFun(){
    let scoreboard = setInterval(function () {
      if (score > 0){
          scoreElement.textContent =  'Score: ' + score;
          score --;
      } else {
          scoreElement.contextContent = "Score: " + score;
          clearInterval(scoreboard);
          endOfGame();
      }
  },setTimer);
  }