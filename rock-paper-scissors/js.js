// Declare all game buttons. Used in endGame for disabling.
rockbtn = document.querySelector("#rock");
scissorsbtn = document.querySelector("#scissors");
paperbtn = document.querySelector("#paper");

// Declare all game buttons from same class, used for looping through the nodelist using forEach in buttomsToChooseFrom.
const buttonsToChooseFrom = document.querySelectorAll(".buttonGame");

// Declare userPoints. Displays the score of the user. userScore holds the points.
const userPoints = document.querySelector(".userPoints");
let userScore = 0;
document.querySelector(".userPoints").style.fontFamily = "Helvetica, Arial, Sanf-serif";
document.querySelector(".computerPoints").style.fontFamily = "Helvetica, Arial, Sanf-serif";
document.querySelector(".winOrLose").style.fontFamily = "Helvetica, Arial, Sanf-serif";


// Declare computerPoints. Displays the score of the computer. computerPoints holds the points.
const computerPoints = document.querySelector(".computerPoints");
let computerScore = 0;

// Declare winOrLose. Used for checking who won and displaying it.
const winOrLose = document.querySelector(".winOrLose");

// Declare the reset button.
const resetGame = document.querySelector(".reset");

resetGame.disabled = true;

// All the logic for the 3 game buttons.
buttonsToChooseFrom.forEach((buttonGame) => {
    buttonGame.addEventListener("click", (e) => {
        let computerChoice = computerPlay();
        let playRoundResult = playRound(buttonGame.id, computerChoice)

        if (playRoundResult === "win") {
            userPoints.textContent = ++userScore;
            winOrLose.textContent = "You won!";
            endGame(userPoints.textContent, computerPoints.textContent);
            return "win";
        } else if (playRoundResult === "tie") {
            winOrLose.textContent = "Tie!";
            return "tie";
        } else if (playRoundResult === "lose") {
            computerPoints.textContent = ++computerScore;
            winOrLose.textContent = "You lost!";
            endGame(userPoints.textContent, computerPoints.textContent);
            return "lose";
        }
    });
})

// Function that determines who won an individual round.
function playRound(playerSelection, computerSelection) {
    if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")) {
        return "win";
    } else if (playerSelection === computerSelection) {
        return "tie";
    } else {
        return "lose";
    }
}

// Function that determines what the computer chooses.
function computerPlay() {
    if (Math.floor(Math.random() * 3 + 1) === 1) {
        return "rock";
    } else if (Math.floor(Math.random() * 3 + 1) === 2) {
        return "paper";
    } else if (Math.floor(Math.random() * 3 + 1) === 3) {
        return "scissors";
    }
}

// Function that determines if the game is over and what to do if it is.
function endGame(userScore, computerScore) {
    if (userScore === "5") {
        rockbtn.disabled = true;
        scissorsbtn.disabled = true;
        paperbtn.disabled = true;
        winOrLose.textContent = "You won the game!";
        resetGame.disabled = false;
    }
    else if (computerScore === "5") {
        rockbtn.disabled = true;
        scissorsbtn.disabled = true;
        paperbtn.disabled = true;
        winOrLose.textContent = "The computer beat you!";
        resetGame.disabled = false;
    }
    else {
        resetGame.disabled = true;
    }
}

// Listener for the reset button. When clicked resets the entire game back to start.
resetGame.addEventListener("click", (e) => {
    rockbtn.disabled = false;
    scissorsbtn.disabled = false;
    paperbtn.disabled = false;
    userScore = 0;
    userPoints.textContent = 0;
    computerScore = 0;
    computerPoints.textContent = 0;
    winOrLose.textContent = "Let's Play!";
    resetGame.disabled = true;

})