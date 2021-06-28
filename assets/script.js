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
var timeLeft = 75;

let currentQuestionIndex 
let ansCorrect = 0

$startButton.addEventListener("click", startQuiz);
$startButton.onclick=startTimer;


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
            timeLeft--
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
    $questionContainer.classList.add('hide')
    $highScoreForm.classList.remove('hide')
    $submit.classList.remove('hide')
    alert('we made it to the finish line')
    
    let finalScore = parseInt(ansCorrect) + (timeLeft)
    alert( 'Your final score is ' + finalScore);
    var urscore = document.getElementById('urscore');
    urscore.innerHTML = 'Your Final Score is ' + finalScore ;
    // save score to localStorate
    localStorage.setItem("finalScore", JSON.stringify(urscore.textContent, finalScore));
    displayHighScores()
}

function displayHighScores(){
    document.getElementById("submit").onclick = function(){
        location.href = "./high-scores.html"
    }
    // $submit.addEventListener('click', function(){location.href = "./high-scores.html"})
    // // $submit.onclick=function(){
        //     //     location.href = "./high-scores.html";
        
        //     $submit.onclick=function(){
            //         location.href = "./high-scores.html";
            // }
            console.log('I broke it! It was going to the high score page but now it is not. Argh!')
        }
        
        function startQuiz(){
            $startButton.classList.add('hide')
            $answerbtn.classList.remove('hide')
            console.log('start quiz was started')
            currentQuestionIndex = 0;
            displayNextQuestion();
    // console.log(question);
    
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
    // console.log(e.target.dataset.correct);
    let button = e.target
    if (e.target.dataset.correct === e.target.textContent) {
        ansCorrect = ansCorrect + 1
        //correct
        // add a point to score
        alert('you did it!')
    } else {
        // wrong
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
answers: ["chicken", "cheese", "cherries", "chocolate"],
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