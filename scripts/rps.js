const playButton = document.querySelector(".play-game");
const gameStatus = document.querySelector(".game-status");
const scoreStatus = document.querySelector(".score-status");
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");

let playerScore;
let computerScore;
let computerSelection;
let result;
let round;

function originalGameState() {
    playButton.disabled = false;
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;

    playerScore = 0;
    computerScore = 0;
    computerSelection = "";
    result = "";
    round = 0;
    gameStatus.textContent = "";
    scoreStatus.textContent = (`Your Score: ${playerScore} Computer Score: ${computerScore}`);
    playButton.addEventListener("click", startGame);
}

function startGame() {
    playButton.disabled = true;
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;

    rockButton.addEventListener("click", function(){
        computerChoice();
        result = playRound("rock");
        updateUI();
    });

    paperButton.addEventListener("click", function(){
        computerChoice();
        result = playRound("paper");
        updateUI();
    });

    scissorsButton.addEventListener("click", function(){
        computerChoice();
        result = playRound("scissors");
        updateUI();
    });
}

function computerChoice() {
    let choices = ["rock", "paper", "scissors"];
    computerSelection = choices[getRandomIntInclusive(0, 2)];
}

// Determines who is the winner and returns the information on who won.
function playRound(playerSelection) {
    let endRoundMessage = "";

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

function updateUI() {
    let winner = "";

    if (result.includes("Win!")) {
        playerScore++;
        gameStatus.textContent = result;
        scoreStatus.textContent = (`Your Score: ${playerScore} Computer Score: ${computerScore}`);
    } else if (result.includes("Lose!")) {
        computerScore++;
        gameStatus.textContent = result;
        scoreStatus.textContent = (`Your Score: ${playerScore} Computer Score: ${computerScore}`);
    } else if (result.includes("Tie")) {
        gameStatus.textContent = result;
    }

    if (playerScore == 5 && computerScore == 5) {
        winner = "tie";
        gameOver("tie");
    } else if (playerScore == 5) {
        winner = "player";
        gameOver(winner);
    } else if (computerScore == 5) {
        winner = "computer";
        gameOver(winner);
    }
}

function gameOver(winner) {
    if (winner == "player") {
        gameStatus.textContent = "You Win the Game!"
    } else if (winner == "computer") {
        gameStatus.textContent = "You Lose the Game."
    } else if (winner = "tie") {
        gameStatus.textContent = "The Game is a Tie."
    }

    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
    playButton.disabled = false;

    playButton.textContent = "Play Again"
    playButton.addEventListener("click", function(){
        location.reload();
    });
}

// Geneterates a random number between min and max inclusive.
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }

originalGameState();