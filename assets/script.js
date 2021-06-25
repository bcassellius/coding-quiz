
document.getElementById("start").onclick = startTimer;
function startTimer(){
    var timeLeft = 75;
    var elem = document.getElementById('timer');
    var timerId = setInterval(countdown, 1000);
    
    function countdown() {
      if (timeLeft == 0) {
        clearTimeout(timerId);
        doSomething();
      } else {
        elem.innerHTML = 'Time: ' + timeLeft ;
        timeLeft--;
      }
    }
    
}





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
//     - question
//     - answers options
//         - event listeners
//          addEventListener()
//   - End of quiz is scoreboard display
//   - Footer for "correct" or "wrong"
//     - `setTimeout`


// send strinify JSON to localStorage
// localStorage.getItem(`highscores')
// JSON.parse(localStorage.getItem(`highscores`))