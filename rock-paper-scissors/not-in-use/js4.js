function computerPlay() {
    return Math.floor(Math.random() * 3 + 1);
}

let computerResponse = computerPlay();

function choseWrong(wrongType) {
    if(!options.includes(wrongType)) {
        alert("Did you mistype? Choose either rock, paper or scissors!");
        return false;
    }
    return true;
}

function getUserInput() {
	let playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
 	const didCHooseWrong = choseWrong(playerSelection);
  if(didCHooseWrong){
  	return;
  }
  // returnerer playerSelection siden den inneholder noe hvis didChooseWrong er false
  // jepp! If sjekekr som didChooseWrong gir mening hvis noe er false, eller true, eller at den returnerte verdien faktisk er noe!
  return playerSelection;
}

// Tanken er at getUserInput kan brukes flere steder, samt at den forklarer hva som skjer. Så er ikke scopen innad i en funksjon, men over hele koden
// getUserInput sier hva som skjer, choseWrong sjekker om du vlgte feil, computerPlay sier at brukeren gjør et valg, playRound sjekker hvem som vant

let options = ["rock", "scissors", "paper"];

//choseWrong(playerSelection);


function playRound(playerSelection, computerResponse) {
  if (playerSelection === "rock" && computerResponse === 1) {
      alert("Rock on rock doesn't work, tie!");
      return 0;
  }
  else if (playerSelection === "rock" && computerResponse === 2) {
      alert("Paper beats rock, you lose!");
      return -1;
  }
  else if (playerSelection === "rock" && computerResponse === 3) {
      alert("Rock beats scissors, you win!");
      return 1;
  }
  else if (playerSelection === "paper" && computerResponse === 1) {
      alert("Paper beats rock, you win!");
      return 1;
  }
  else if (playerSelection === "paper" && computerResponse === 2) {
      alert("Paper on paper doesn't work, tie!");
      return 0;
  }
  else if (playerSelection === "paper" && computerResponse === 3) {
      alert("Scissors beats paper, you lose!");
      return -1;
  }
  else if (playerSelection === "scissors" && computerResponse === 1) {
      alert("Rock beats scissors, you lose!");
      return -1;
  }
  else if (playerSelection === "scissors" && computerResponse === 2) {
      alert("Scissors beats paper, you win!");
      return 1;
  }
  else if (playerSelection === "scissors" && computerResponse === 3) {
      alert("Scissors on scissors doesn't work, tie!");
      return 0;
  } 
}




let computerResponse = computerPlay();

let playerSelection = getUserinput();

if(!playerSelection) {
	console.log("choose wrong");
}

// Hvis playerSelection er noe kan man bare fortsette uten noen flere sjekker.

const result = playRound(playerSelection, computerResponse);

// const playerSelection = "rock";
// const computerResponse = computerPlay();
// console.log(playRound(playerSelection, computerResponse));
