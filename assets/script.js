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
    { question: "What is coding?" , 
    answers: ["communicating with a computer", "finding a winter coat", "learning about making a website", "moving through a computer without a mouse"],
    correctAnswer: 'communicating with a computer'  
    },
    { question: "What can the terminal be used for?" , 
    answers: ["creating files", "creating folders", "commit a repo", "all of these"],
    correctAnswer: "all of these"
    },
    { question: "What language is used to structure a web page?" , 
    answers: ["Javascript", "html", "css", "markdown"],
    correctAnswer: "html"
    },
    { question: "What happens if your syntax is incorrect?" , 
    answers: ["the code will load a virus to your computer", "the code will run backward", "the code will not compile", "the code will run just fine"],
    correctAnswer: "the code will not compile"
    },
    { question: "what does an <a> tag do?" , 
    answers: ["defines a hyperlink", "defines the first thing on the website", "defines the color of text", "allows you to write notes in your code"],
    correctAnswer: "defines a hyperlink"  
    },
    { question: "How do you create an object?" , 
    answers: ["curly braces", "new Object()", "both of them", "neither of them"],
    correctAnswer: "both of them"
    },
    { question: "What is the DOM" , 
    answers: ["Deleting Object Mechanisms", "Document Object Model", "the format for decorating wibsites", "directions to clone code"],
    correctAnswer: "Document Object Model"
    },
    { question: "Where can you test code before deploying?" , 
    answers: ["on Google", "in html documentation", "Developer Tools on a webpage", "in Visual Code"],
    correctAnswer: "Developer Tools on a webpage"  
    },
    { question: "What is the name of a commonly used website that has pre-built css framework?" , 
    answers: ["tailwind", "materialize", "bootstrap", "all of the above"],
    correctAnswer: "all of the above"
    },
    { question: "In Javascript, what symbols do you use when you call a function?" , 
    answers: ["." , "()" , "@" , "!"],
    correctAnswer: "()"  
    },]

$choice0.addEventListener('click', handleAnswerSubmission);
$choice1.addEventListener('click', handleAnswerSubmission);
$choice2.addEventListener('click', handleAnswerSubmission);
$choice3.addEventListener('click', handleAnswerSubmission);