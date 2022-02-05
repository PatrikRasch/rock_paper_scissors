function game () {

    // Chooses the computer's choice
    function computerPlay() {
        return Math.floor(Math.random() * 3 + 1);
    }

    // Plays a round of RPS -> Shows an alert and returns the result as -1, 0 or 1
    function playRound (playerSelection, computerSelection) {
        if (playerSelection === "rock" && computerSelection === 1) {
            alert("Rock on rock doesn't work, tie!");
            return 0;
        }
        else if (playerSelection === "rock" && computerSelection === 2) {
            alert("Paper beats rock, you lose!");
            return -1;
        }
        else if (playerSelection === "rock" && computerSelection === 3) {
            alert("Rock beats scissors, you win!");
            return 1;
        }
        else if (playerSelection === "paper" && computerSelection === 1) {
            alert("Paper beats rock, you win!");
            return 1;
        }
        else if (playerSelection === "paper" && computerSelection === 2) {
            alert("Paper on paper doesn't work, tie!");
            return 0;
        }
        else if (playerSelection === "paper" && computerSelection === 3) {
            alert("Scissors beats paper, you lose!");
            return -1;
        }
        else if (playerSelection === "scissors" && computerSelection === 1) {
            alert("Rock beats scissors, you lose!");
            return -1;
        }
        else if (playerSelection === "scissors" && computerSelection === 2) {
            alert("Scissors beats paper, you win!");
            return 1;
        }
        else if (playerSelection === "scissors" && computerSelection === 3) {
            alert("Scissors on scissors doesn't work, tie!");
            return 0;
        }
    }

    function checkChoice(wrongChoice) {
        if(!userChoices.includes(wrongChoice)) {
        alert("You must choose either rock, paper or scissors.");
        while (checkChoice !== true) {
            userInput();
            checkChoice(playerSelection);
            return;
            }
        }
        return true;
    }

    function userInput() {
    playerSelection = prompt("Rock, paper or scissors?").toLowerCase();
    }

    let userChoices = ["rock", "paper", "scissors"];

    userInput();
    checkChoice(playerSelection);

        console.log("The player's choice was: " + playerSelection)
    // Computer's choice + console logging the result
    let computerSelection = computerPlay();
        console.log("The computer's choice was: " + computerPlay())

    // playRound(playerSelection, computerSelection);
    // console.log("playRound returns: " + playRound(playerSelection, computerSelection))
    
    return playRound(playerSelection, computerSelection);
}

let user_wins = 0;
let computer_wins = 0;

for (i=1; i<=5; i++) {
    let result = game();
        if (result === 1) {
            user_wins = user_wins + 1;
                console.log("User won");
        } else if (result === -1) {
            computer_wins = computer_wins + 1;
                console.log("Computer won");
        } else {console.log("tie");}
}

console.log("============================================");
console.log("The result of the match is:");

console.log("User's score: " + user_wins);
console.log("Computer's score: " + computer_wins);

if (computer_wins > user_wins) {
    console.log("The computer won!");
    } else if (user_wins > computer_wins) {
    console.log("You won!");
    } else {console.log("It's a tie!")
}