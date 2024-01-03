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
        window.open("https://www.wikipedia.org/wiki/Special:Random");
    }
};

//function defining the quiz
function askQuestion() {
    //add 
};

function showAnswer(){

};

// submitAnswer.textContent("Play a game?");
submitAnswer.addEventListener("click", gameQuery);

gameQuery();

console.log();