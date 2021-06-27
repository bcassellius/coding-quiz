// GLOBAL VARIABLES
// get all the html elements we need as js
var $question = document.getElementById('question');
var $choice0 = document.getElementById('choice-0')
var $choice1 = document.getElementById('choice-1')
var $choice2 = document.getElementById('choice-2')
var $choice3 = document.getElementById('choice-3')
//start button is important to capture for our event listener
var $startButton = document.getElementById('start');
var $highScoreForm = document.getElementById('high-score-form');
var $questionContainer = document.getElementById("questionContainer");
var quizEl = document.getElementById("question")
var optionsEl= document.getElementsByClassName("choice"); // i think returns an array of elements
var questionContainerEl = document.getElementById('questionContainer')
var go = document.getElementById('start');

let currentQuestionIndex 

go.addEventListener("click", startQuiz);
go.onclick=startTimer;

function startTimer(){
    var timeLeft = 75;
    var elem = document.getElementById('timer');
    var timerId = setInterval(countdown, 1000);
    go.classList.add(`hide`);
    function countdown() {
        if (timeLeft == 0) {
            clearTimeout(timerId);
        } else {
            elem.innerHTML = "Time: " + timeLeft ;
            timeLeft--;
        }    
    }      
}    

function displayNextQuestion(){
    console.log('display next question function invoked. reset happend and now next question should appear')
    console.log('question being passed to show question')
    var i = currentQuestionIndex
    console.log(i)
    console.log(questions[i])
    showQuestion(questions[i])
}        
function endQuiz(){
}

function startQuiz(){
    console.log('start quiz was started')
    go.classList.add('hide');
    currentQuestionIndex = 0;
    displayNextQuestion();
    console.log(question);
    
}

function showQuestion(question){
    // console.log('heres the question', question);
    $question.textContent = question.question;
    $choice0.textContent = question.answers[0];
    $choice0.setAttribute('data-correct', question.correctAnswer)
    $choice1.textContent = question.answers[1];
    $choice1.setAttribute('data-correct', question.correctAnswer)
    $choice2.textContent = question.answers[2];
    $choice2.setAttribute('data-correct', question.correctAnswer)
    $choice3.textContent = question.answers[3];
    $choice3.setAttribute('data-correct', question.correctAnswer)
}

function handleAnswerSubmission(e) {
    e.preventDefault();
    console.log(e.target.dataset.correct);
    if (e.target.dataset.correct === e.target.textContent) {
        //correct

        alert('you did it!')
    } else {
        // incorrect
        alert('wrong')
    }
    // move onto next question

}
function selectAnswer(){
    console.log("you clicked me")
    
    button.addEventListener ('click', $choice0.textContent )
        if (answers[i] === correctAnswer){
            // correct
            // add point to score
        }
        else{
            // wrong
        }
    button.addEventListener ('click', $choice1.textContent )
    button.addEventListener ('click', $choice2.textContent )
    button.addEventListener ('click', $choice3.textContent )
}

var questions = [
{ question: "This is question 1!" , 
answers: ["hamsterWheel", "hamster", "choice3", "choice4"],
correctAnswer: 'hamster'  
},
{ question: "This is question 2!" , 
answers: ["choice1", "cheese", "choice3", "choice4"],
correctAnswer: "cheese"
},
{ question: "This is question 3!" , 
answers: ["choice1", "choice2", "choice3", "choice4"],
correctAnswer: 3
},
{ question: "This is question 4!" , 
answers: ["choice1", "choice2", "choice3", "choice4"],
correctAnswer: 1  
},
{ question: "This is question 5!" , 
answers: ["choice1", "choice2", "choice3", "choice4"],
correctAnswer: 3
},
{ question: "This is question 6!" , 
answers: ["choice1", "choice2", "choice3", "choice4"],
correctAnswer: 2
},
{ question: "This is question 7!" , 
answers: ["choice1", "choice2", "choice3", "choice4"],
correctAnswer: 2  
},
{ question: "This is question 8!" , 
answers: ["choice1", "choice2", "choice3", "choice4"],
correctAnswer: 0
},
{ question: "This is question 9!" , 
answers: ["choice1", "choice2", "choice3", "choice4"],
correctAnswer: 1
},
{ question: "This is question 10!" , 
answers: ["choice1", "choice2", "choice3", "choice4"],
correctAnswer: 0  
},]

$choice0.addEventListener('click', handleAnswerSubmission);
$choice1.addEventListener('click', handleAnswerSubmission);
$choice2.addEventListener('click', handleAnswerSubmission);
$choice3.addEventListener('click', handleAnswerSubmission);