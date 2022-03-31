console.log('Hello world');



function computerPlay(warray) {
    let random = Math.floor(Math.random() * warray.length);
    return warray[random];
}

const options = ['rock', 'paper', 'scissors'];



let playerSelection = ' ';



let computerSelection = computerPlay(options);

/* Declare wins and losses variables to track game outcomes */

let wins = 0;

let losses = 0;

/* Declare function playRound that declares winner of round from playerSelection and computerSelection variables */

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'scissors' && computerSelection === 'rock') {
        losses = losses + 1
        return 'You lose! Rock beats scissors!'
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        wins = wins + 1
        return 'You win! Scissors beat paper!'
    }

    else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return 'It\'s a draw! Both players chose scissors!'
    }

    else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        wins = wins + 1
        return 'You win! Rock beats scissors'
    }

    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        losses = losses + 1
        return 'You lose! Paper beats rock!'
    }

    else if (playerSelection === 'rock' && computerSelection === 'rock') {
        return 'It\'s a draw! Both players chose rock!'
    }

    else if (playerSelection === 'paper' && computerSelection === 'rock') {
        wins = wins + 1
        return 'You win! Paper beats rock'
    }

    else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        losses = losses + 1
        return 'You lose! Scissors beats paper'
    }

    else {
        return 'It\'s a draw! Both players chose paper'
    }
}

function whoWins(wins, losses) {
    if (wins > losses) {
        console.log('You win the game!')
    }
    
    else if (wins < losses) {
        console.log('Sorry, you lose.')
    }

    else {
        console.log('It\'s a draw! Both players have the same score')
    }
}


function game() {
    for (let i = 0; i < 5; i++) {
        playerSelection = ((prompt('Pick rock, paper, or scissors', ' ')).toLowerCase());
        playRound(playerSelection, computerSelection);
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();

whoWins(wins, losses);
