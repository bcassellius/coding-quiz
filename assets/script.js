// GLOBAL VARIABLES
// quiz questions and answers
var $question = document.getElementById('question');
var $choice0 = document.getElementById('choice-0')
var $choice1 = document.getElementById('choice-1')
var $choice2 = document.getElementById('choice-2')
var $choice3 = document.getElementById('choice-3')
//start button is important to capture for our event listener
var $startButton = document.getElementById('start');
var $highScoreForm = document.getElementById('high-score-form');
var $questionContainer = document.getElementById("questionContainer");
var optionsEl= document.getElementsByClassName("choice"); // returns an array of elements
var $answerbtn = document.getElementById("answer-btn")
var $submit = document.getElementById("submit")

let currentQuestionIndex 
let ansCorrect = 0
let finalScore = parseInt(ansCorrect) + (timeLeft)

$startButton.addEventListener("click", startQuiz);
$startButton.onclick=startTimer;

var timeLeft = 75;

function startTimer(){
    timeLeft = 75;
    var elem = document.getElementById('timer');
    var timerId = setInterval(countdown, 1000);
    $startButton.classList.add(`hide`);
    function countdown() {
        if (timeLeft <= 0) {
            clearTimeout(timerId);
            endQuiz();

        } else {
            elem.innerHTML = "Time: " + timeLeft ;
            timeLeft--;
        }    
    }      
}    

function displayNextQuestion(){
    // console.log('display next question function invoked. reset happend and now next question should appear')
    // console.log('question being passed to show question')
    var i = currentQuestionIndex
    if (i < questions.length){
        showQuestion(questions[i])
    }else{
        endQuiz()
    }
}        

function endQuiz(){
    $answerbtn.classList.add('hide')
    $highScoreForm.classList.remove('hide')
    $startButton.classList.add('hide')
    $questionContainer.classList.add('hide')
    $submit.classList.remove('hide')
    alert('we made it to the finish line')

    alert( 'Your final score is ' + finalScore);
    var urscore = document.getElementById('urscore');
    urscore.innerHTML = 'Your Final Score is ' + finalScore ;
    saveScores()
    displayHighScores()
    
}

function displayHighScores(){
    document.getElementById("submit").onclick=function(){
        var winner = parseInt("urscore");
        location.href = "./high-scores.html";
    // put the object into local storage
    // localStorage.setItem('highScores', JSON.stringify(highScores));

    }
}
var saveScores = function() {
    localStorage.setItem("finalScore", JSON.stringify(finalScore));
}

function startQuiz(){
    console.log('start quiz was started')
    $startButton.classList.add('hide');
    $answerbtn.classList.remove('hide')
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
    let button = e.target
    if (e.target.dataset.correct === e.target.textContent) {
        ansCorrect = ansCorrect + 1
        //correct
        // add a point to score
        // button.classList.add(".correct")
        alert('you did it!')
    } else {
        // wrong
        // button.classList.add(".wrong")
        timeLeft = timeLeft - 10;
        alert('wrong')
    }
    // move onto next question
    displayNextQuestion(currentQuestionIndex++)
}

var questions = [
{ question: "This is question 1!" , 
answers: ["hamsterWheel", "hamster", "bulldozer", "love"],
correctAnswer: 'hamster'  
},
{ question: "This is question 2!" , 
answers: ["chicken", "cheese", "cherries"],
correctAnswer: "cheese"
},
{ question: "This is question 3!" , 
answers: ["monopoly", "trouble", "jenga", "chutes and ladders"],
correctAnswer: "jenga"
},
{ question: "This is question 4!" , 
answers: ["choice1", "choice2", "choice3", "choice4"],
correctAnswer: "choice1"  
},
{ question: "This is question 5!" , 
answers: ["choice1", "choice2", "choice3", "choice4"],
correctAnswer: "choice3"
},
{ question: "This is question 6!" , 
answers: ["choice1", "choice2", "choice3", "choice4"],
correctAnswer: "choice2"
},
{ question: "This is question 7!" , 
answers: ["choice1", "choice2", "choice3", "choice4"],
correctAnswer: "choice2"  
},
{ question: "This is question 8!" , 
answers: ["choice1", "choice2", "choice3", "choice4"],
correctAnswer: "choice0"
},
{ question: "This is question 9!" , 
answers: ["choice1", "choice2", "choice3", "choice4"],
correctAnswer: "choice2"
},
{ question: "This is question 10!" , 
answers: ["choice1", "choice2", "choice3", "choice4"],
correctAnswer: "choice0"  
},]

$choice0.addEventListener('click', handleAnswerSubmission);
$choice1.addEventListener('click', handleAnswerSubmission);
$choice2.addEventListener('click', handleAnswerSubmission);
$choice3.addEventListener('click', handleAnswerSubmission);