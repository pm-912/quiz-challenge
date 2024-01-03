let submitAnswer = document.querySelector("#button");
const quizBox = document.getElementById("#quiz");

const questions = [
    {
        question: ""
    },
    {
        question: ""
    },
    {
        question: ""
    },
    {
        question: ""
    },
    {
        question: ""
    },
];
//run a function asking if the user wants to play, if not redirect them
function gameQuery(){
    let playGame = confirm("Do you want to play a quiz game?");
    if (playGame) {
        askQuestion() // run the quiz game
    } else {
        alert("How about you go read an article then!");
        window.location.href = "https://en.wikipedia.org/wiki/JavaScript";
    }
};

//function defining the quiz
function askQuestion() {
    submitAnswer.textContent = "Submit";
    quizBox.textContent = "";
    //start a timer that decreases in one second increments

    //pull a question/answer selection from the array

    //answer set up as multiple choice buttons?

    //if correct, show user they got it correct and open next question

    //if wrong, show user they got it wrong, subtract 5 seconds from the timer and open next question

    //when quiz ends, time remaining is score

    //prompt user to input name

    //add name and time remaining to local storage


}

// function showAnswer(){

// };

submitAnswer.textContent = "Play a game?";
submitAnswer.addEventListener("click", gameQuery);
