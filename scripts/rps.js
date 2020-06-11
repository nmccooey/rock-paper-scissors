// List of possible choices - rock, paper, or scissors.
function computerPlay() {
    let playList = ["rock", "paper", "scissors"];
    return playList[getRandomIntInclusive(0, 2)];
}

// Geneterates a random number between min and max inclusive.
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }

// Determines who is the winner and returns the information on who won.
function playRound(playerSelection, computerSelection) {
    let endRoundMessage = "";
    playerSelection.toLowerCase();
    
    if (computerSelection === "rock") {
        switch (playerSelection) {
            case "rock":
                endRoundMessage = "It's a Tie!";
                break;
            case "paper":
                endRoundMessage = "You Win! Paper beats Rock.";
                break;
            case "scissors":
                endRoundMessage = "You Lose! Rock beats Scissors.";
                break;
        }
    } else if (computerSelection === "paper") {
        switch (playerSelection) {
            case "rock":
                endRoundMessage = "You Lose! Paper beats Rock.";
                break;
            case "paper":
                endRoundMessage = "It's a Tie!"
                break;
            case "scissors":
                endRoundMessage = "You Win! Scissors beats Paper.";
                break;
        }
    } else if (computerSelection === "scissors") {
        switch (playerSelection) {
            case "rock":
                endRoundMessage = "You Win! Rock beats Scissors.";
                break;
            case "paper":
                endRoundMessage = "You Lose! Scissors beats Paper.";
                break;
            case "scissors":
                endRoundMessage = "It's a Tie!";
                break;
        }
    }
    return endRoundMessage;
}

// Setup for a 5 round game.
function game() {
    let playerSelection;
    let computerSelection;
    let round = 1;

    while (round <= 5) {
        playerSelection = prompt("Rock, paper, or scissors?")
        computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        round++;
    }
}

game();