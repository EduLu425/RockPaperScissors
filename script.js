console.log('Hello world');

/* computerPlay function randomly chooses rock, paper, or scissors from an array of strings*/

function computerPlay(warray) {
    let random = Math.floor(Math.random() * warray.length);
    return warray[random];
}

/* Declare variable options that contains an array of strings rock, paper, scissors */

let options = ['rock', 'paper', 'scissors'];

/* Declare playerSelection variable that stores rock, paper, or scissors input from player */

let playerSelection = ' ';

/* Declare computerSelection variable that stores random choice from computerPlay function */

let computerSelection = computerPlay(options);
/* Declare wins variable that tracks how many wins the player has */

let wins = 0;

/* Declare losses variable that counts the player's losses */

let losses = 0;
/* Declare function playRound that declares winner from playerSelection and computerSelection variables */

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

    else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        losses = losses + 1
        return 'You lose! Scissors beats paper'
    }

    else {
        return 'It\'s a draw! Both players chose paper'
    }
}
/* Declare whoWins function that determines winner */
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
/* Declare game function  that runs playRound function 5 times */

function game() {
    for (let i = 0; i < 5; i++) {
        playerSelection = ((prompt('Pick rock, paper, or scissors', ' ')).toLowerCase());
        playRound(playerSelection, computerSelection);
        console.log(playRound(playerSelection, computerSelection));
    }
}


/* Run the game function */

game();

/* Declare a winner with whoWins */

whoWins(wins, losses);
