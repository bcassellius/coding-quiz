
var sBtn= document.getElementById("start");
sBtn.onclick=startTimer;
function startTimer(){
    var timeLeft = 75;
    var elem = document.getElementById('timer');
    var timerId = setInterval(countdown, 1000);
    sBtn.classList.add("hide");
    function countdown() {
      if (timeLeft == 0) {
        clearTimeout(timerId);
      } else {
        elem.innerHTML = "Time: " + timeLeft ;
        timeLeft--;
      }
    }
    
}

var question = [
    { question: "This is question 1!" , 
    answers: ["answer 1", "answer 2", "answer 3", "answer 4"],
    correctAnswer: 0  
    }
]






// var loadScores = function() {
//     scores = JSON.parse(localStorage.getItem("scores"));
  
//     // if nothing in localStorage, create a new object to track all task status arrays
//     if (!scores) {
//       scores = {
//         highscores: [],
//       };
//     }
  
//     // loop over object properties
//     $.each(scores, function(list, arr) {
//       // then loop over sub-array
//       arr.forEach(function(scores) {
//         createTask(scores.text, list);
//       });
//     });
//   };
// var saveTasks = function() {
//     localStorage.setItem("scores", JSON.stringify(scores));
//   };

//   // remove all scores
// $("#remove-scores").on("click", function() {
//     for (var key in scores) {
//       scores[key].length = 0;
//       $("#scores" + key).empty();
//     }
//     saveScores();
//   });
  
//   // load scores for the first time
//   loadScores();




// Start Quiz

// End Quiz - When timer runs out or quiz is done

// Enter Initials

// Save in localStorage

// call from localStorage




// # TODOs

// ## Top level componenets
//  ### Timer
//  - `setInterval`
//  - `clearInterval`
//  - connect to quiz

//  ### Highscores page
//  It's just a link to a new page!
//  - `localStorage`
//  - Clear storage button
//  - Back to `index.html`

//  ### Main quiz
//   - Timer stars at 75s
//     - Time out ends quiz
//   - Components
// global variable to keep track of question that we're on
//     - question
//     - answers options
//         - event listeners
//          addEventListener() - checks for truth
//   - End of quiz is scoreboard display
//   - Footer for "correct" or "wrong"
//     - `setTimeout`


// send strinify JSON to localStorage
// localStorage.getItem(`highscores')
// JSON.parse(localStorage.getItem(`highscores`))