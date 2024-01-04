const quizBox = document.getElementById("quiz");
const submitAnswer = document.querySelector("button");
const timer = document.getElementById("timer");
let timeLeft = 60;

const questions = [
    {
        question: "What does the event stopPropogation method accomplish?",
        choices: [
            "Stops the webpage from loading to view processes one by one", 
            "Prevents further instances of the event from occuring, AKA bubbling", 
            "Disables pop up windows for the current page",
            "Finishes a for loop and returns the result"
            ],
        answer: 1
    },
    {
        question: "Variables created inside of a function are...",
        choices: [
            "Disposable", 
            "Global", 
            "Undefinable",
            "Local"
            ],
        answer: 3
    },
    {
        question: "Where should you define global variables?",
        choices: [
            "At the top of the page", 
            "At the bottom of the page", 
            "After the function that calls them",
            "On the HTML page"
            ],
        answer: 0
    },
    {
        question: "What method would you use to add a string to an array?",
        choices: [
            "Splice", 
            "Push", 
            "Sort",
            "Shift"
            ],
        answer: 1
    },
    {
        question: "Strict equality is shown as what?",
        choices: [
            "==", 
            "+=", 
            "=~",
            "==="
            ],
        answer: 3
    },
];



//run a function asking if the user wants to play, if not redirect them
function gameQuery(){
    let playGame = confirm("Do you want to play a JavaScript quiz game?");
    if (playGame) {
        askQuestion() // run the quiz game
    } else {
        alert("How about you go read an article then!");
        window.location.href = "https://en.wikipedia.org/wiki/JavaScript";
    }
};

//start a timer that decreases in one second increments - setinterval
function countdown() {
    const timeInterval = setInterval(function () {
        timeLeft--;
        timer.textcontent = timeLeft + " seconds remaining,";
        
        if(timeLeft === 0){
          alert("Game over!");
          clearInterval(timeInterval);
          timer.textContent = " ";
        }
    },1000);
};

//function defining the quiz
function askQuestion() {
    submitAnswer.textContent = "Submit";
    timer.textContent = "timeLeft"
    quizBox.textContent = "";
    // hidden box now shows?
    quizBox.hidden = false;
    
    //pull a question/answer selection from the array
    //answer set up as multiple choice buttons
    
    //if correct, show user they got it correct and open next question
    //if wrong, show user they got it wrong, subtract 5 seconds from the timer and open next question

    // if ansVal() {

        //message in green 'Correct!' that fades after 2 seconds
    // } else {
        //message in red 'Incorrect!' -5 that fades after 2 seconds
        //timer loses five seconds
    // }
    
    //when quiz ends, time remaining is score

    //or if timer runs out, game over

    //prompt user to input name
    //form input, 
    //add name and time remaining to local storage
    countdown();
};

function saveAnswer(){

};

submitAnswer.textContent = "Play a game?";
submitAnswer.addEventListener("click", gameQuery);
