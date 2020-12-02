let pScore = 0;
let cScore = 0;
let playerSelection;
let computerSelection;

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const div = document.querySelector('div');


rock.addEventListener('click', () =>{
    playerSelection = 'rock';
    console.log(playerSelection);
    computerSelection = computerPlay();
    console.log(computerSelection);
    playRound(playerSelection, computerSelection);
});

paper.addEventListener('click', () =>{
    playerSelection = 'paper';
    console.log(playerSelection);
    computerSelection = computerPlay();
    console.log(computerSelection);
    playRound(playerSelection, computerSelection);
});

scissors.addEventListener('click', () =>{
    playerSelection = 'scissors';
    console.log(playerSelection);
    computerSelection = computerPlay();
    console.log(computerSelection);
    playRound(playerSelection, computerSelection);
});

function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

const result = document.querySelector('.results');
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        result.textContent = 'TIE'; //TODO: make it so that it also displays the choice of player and computer 
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log('ROCK VS SCISSORS: YOU WIN');
        result.textContent = 'ROCK VS SCISSORS: YOU WIN';
        pScore++;
        updateScore();
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log('PAPER VS ROCK: YOU WIN');
        result.textContent = 'PAPER VS ROCK: YOU WIN';
        pScore++;
        updateScore();
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log('SCISSORS BEATS PAPER YOU WIN');
        result.textContent = 'SCISSORS VS PAPER: YOU WIN';
        pScore++;
        updateScore();
    } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
        console.log('ROCK BEATS SCISSORS YOU LOSE');
        result.textContent = 'ROCK BEATS SCISSORS: YOU LOSE';
        cScore++;
        updateScore();
    } else if (computerSelection === 'paper' && playerSelection === 'rock') {
        console.log('PAPER BEATS ROCK YOU LOSE');
        result.textContent = 'PAPER BEATS ROCK: YOU LOSE';
        cScore++;
        updateScore();
    } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
        console.log('SCISSORS BEATS PAPER YOU LOSE');
        result.textContent = 'SCISSORS BEATS PAPER: YOU LOSE';
        cScore++;
        updateScore();
    }
}

function updateScore() {
    const playerScore = document.querySelector('#user-score');
    const computerScore = document.querySelector('#computer-score');
    playerScore.textContent = 'Your Score: ' + pScore;
    computerScore.textContent = 'Computer Score: ' + cScore;
}

if (pScore === 5) {
    alert('YOU WIN');
} else if (cScore === 5) {
    alert('COMPUTER WINS');
}



