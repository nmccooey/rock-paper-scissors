// List of possible choices - rock, paper, or scissors.
function computerPlay() {
    let playList = ["rock", "paper", "scissors"];
    return playList[getRandomIntInclusive(0, 2)];
}

// Geneterates a random number between min and max inclusive.
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
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
function startGame() {
    
    let playerSelection;
    let computerSelection;

    rockButton.addEventListener("click", function(){
        playerSelection = "rock";
        computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        gameStatus.textContent = (result);
        if (result.includes("Win")) {
            playerScore++;
        } else if (result.includes("Lose")) {
            computerScore++;
        }
        scoreStatus.textContent = (`Your Score: ${playerScore} Computer Score: ${computerScore}`);
        return;
    });

    paperButton.addEventListener("click", function(){
        playerSelection = "paper";
        computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        gameStatus.textContent = (result);
        if (result.includes("Win")) {
            playerScore++;
        } else if (result.includes("Lose")) {
            computerScore++;
        }
        scoreStatus.textContent = (`Your Score: ${playerScore} Computer Score: ${computerScore}`);
        return;
    });

    scissorsButton.addEventListener("click", function(){
        playerSelection = "scissors";
        computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        gameStatus.textContent = (result);
        if (result.includes("Win")) {
            playerScore++;
        } else if (result.includes("Lose")) {
            computerScore++;
        }
        scoreStatus.textContent = (`Your Score: ${playerScore} Computer Score: ${computerScore}`);
        return;
    });
}

let playerScore = 0;
let computerScore = 0;

const mainContainer = document.querySelector(".main-container");
const gameStatus = document.createElement("p");
const scoreStatus = document.createElement("p");
const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");

gameStatus.textContent = "Rock, Paper, or Scissors?";
gameStatus.classList.add("status");

scoreStatus.textContent = "Your Score: 0 Computer Score: 0";
scoreStatus.classList.add("status");

rockButton.textContent = "Rock";
rockButton.classList.add("rock", "button");

paperButton.textContent = "Paper";
paperButton.classList.add("paper", "button");

scissorsButton.textContent = "Scissors";
scissorsButton.classList.add("scissors", "button");

const playButton = document.querySelector(".play-game");
playButton.addEventListener("click", function(){
    mainContainer.appendChild(gameStatus);
    mainContainer.appendChild(scoreStatus);
    mainContainer.appendChild(rockButton);
    mainContainer.appendChild(paperButton);
    mainContainer.appendChild(scissorsButton);
    startGame();
});