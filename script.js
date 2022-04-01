console.log('Hello world');

const playerScore = document.querySelector('.player-score');

const computerScore = document.querySelector('.computer-score');

const winColumn = document.createElement('div');

const scissorsBtn = document.querySelector('#scissors');

const rockBtn = document.querySelector('#rock');

const paperBtn = document.querySelector('#paper');

const content = document.querySelector('.container');

const winMessage = document.createElement('win-message');

const lossMessage = document.createElement('loss-message');

const header = document.querySelector('.header-container');

winMessage.textContent = 'Congratulations, you win!';

lossMessage.textContent = 'Sorry, you lose';

winMessage.style.borderStyle = 'solid';

winMessage.style.borderWidth = '1px';

winMessage.style.color = 'red';

lossMessage.style.borderStyle = 'solid';

lossMessage.style.borderWidth = '1px';

lossMessage.style.color = 'red';

function computerPlay(warray) {
    let random = Math.floor(Math.random() * warray.length);
    return warray[random];
}

const options = ['rock', 'paper', 'scissors'];



/* Declare wins and losses variables to track game outcomes */

let wins = 0;

let losses = 0;

let playerSelection = ' ';

const scissors = 'scissors';

const rock = 'rock';

const paper = 'paper';

/* checkWins helper function updates scoreboard after every round */

function checkWins(wins, losses) {
    if (wins === 5) {
        document.getElementById('player-wins').innerHTML = '5';
        content.insertBefore(winMessage, header);
    }

    else if (losses === 5) {
        document.getElementById('computer-wins').innerHTML = '5';
        content.insertBefore(lossMessage, header);
        
   }
    else if (wins === 4) {
        document.getElementById('player-wins').innerHTML = '4';
    }
    else if (losses === 4) {
        document.getElementById('computer-wins').innerHTML = '4';

    }
    else if (wins === 3) {
        document.getElementById('player-wins').innerHTML = '3';
    }
    else if (losses === 3) {
        document.getElementById('computer-wins').innerHTML = '3';

    }   
    else if (wins === 2) {
        document.getElementById('player-wins').innerHTML = '2';
    }
    else if (losses === 2) {
        document.getElementById('computer-wins').innerHTML = '2';

    }
    else if (wins === 1) {
        document.getElementById('player-wins').innerHTML = '1';
    }
    else if (losses === 1) {
        document.getElementById('computer-wins').innerHTML = '1';

    }
   
}

function playRound(playerSelection) {
    let computerSelection = computerPlay(options);
    console.log(playerSelection);
    console.log(computerSelection);
    if (playerSelection === 'scissors' && computerSelection === 'rock') {
        losses = losses + 1;
        checkWins(wins, losses);
        return 'You lose! Rock beats scissors!'
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        wins = wins + 1
        checkWins(wins, losses);
        return 'You win! Scissors beat paper!'
    }

    else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return 'It\'s a draw! Both players chose scissors!'
    }

    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        wins = wins + 1
        checkWins(wins, losses);
        return 'You win! Rock beats scissors'
    }

    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        losses = losses + 1
        checkWins(wins, losses);
        return 'You lose! Paper beats rock!'
    }

    else if (playerSelection === 'rock' && computerSelection === 'rock') {
        return 'It\'s a draw! Both players chose rock!'
    }

    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        wins = wins + 1
        checkWins(wins, losses);
        return 'You win! Paper beats rock'
    }

    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        losses = losses + 1
        checkWins(wins, losses);
        return 'You lose! Scissors beats paper'
    }

    else {
        return 'It\'s a draw! Both players chose paper'
    }
}

scissorsBtn.addEventListener('click', () => {
    playRound(scissors);
});

paperBtn.addEventListener('click', () => {
    playRound(paper);
});

rockBtn.addEventListener('click', () => {
    playRound(rock);
});
