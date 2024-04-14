"use strict";

const playerScoreDisplay = document.querySelector("#playerScore");
const computerScoreDisplay = document.querySelector("#computerScore");
const resultDisplay = document.querySelector("#result");

let playerScore = 0;
let computerScore = 0;

function computerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function updateScore() {
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    resultDisplay.textContent = "Ничья";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    resultDisplay.textContent = "Ты победил!";
    playerScore++;
  } else {
    resultDisplay.textContent = "Ты проиграл!";
    computerScore++;
  }
  updateScore();
}

document.querySelector("#rock").addEventListener("click", () => {
  const computerSelection = computerChoice();
  playRound("rock", computerSelection);
});

document.querySelector("#paper").addEventListener("click", () => {
  const computerSelection = computerChoice();
  playRound("paper", computerSelection);
});

document.querySelector("#scissors").addEventListener("click", () => {
  const computerSelection = computerChoice();
  playRound("scissors", computerSelection);
});
