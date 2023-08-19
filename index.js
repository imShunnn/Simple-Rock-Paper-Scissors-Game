const buttons = document.querySelectorAll('button');

const resultEl = document.getElementById("result");

const playerScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score");

let playerScore = 0;
let computerScore = 0;

buttons.forEach(button =>{
    button.addEventListener('click',() => {
        // console.log("user choice!", button.id, "computer choice!", computerPlay());
        const result = playRound(button.id, computerPlay());
        resultEl.textContent = result
    });
});

function computerPlay(){
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore++;
        playerScoreEl.textContent = playerScore;
        return "You win!! " + "Computer picked " + computerSelection + " and you chose " + playerSelection; 
    } else {
        computerScore++;
        computerScoreEl.textContent = computerScore;
        return "You Lose! " + "Computer picked " + computerSelection + " and you chose " + playerSelection +" haha noob skill issues ";
    }
}