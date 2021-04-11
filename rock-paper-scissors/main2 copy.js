
function convertCompyPlay(compy) {
    // This will convert the number the computer generated into a usable string
    switch (compy) {
        case 1:
            return "rock";
            break;
            case 2:
                return "paper";
                break;
                case 3:
            return "scissors";
        }
    }
    
function whoWins(playerPlay, compyPlay) {
    // Return who won
    // Structure: player play, player win, player lose
    console.log(compyPlay)
    if (playerPlay == compyPlay){
        return 'tie';
    } else if (playerPlay == 'rock') {
        if (compyPlay == 'scissors'){
            return 'player';
        } else {
            return 'computer';
        }
    } else if (playerPlay == 'paper') {
        if (compyPlay == 'rock') {
            return 'player';
        } else {
            return 'computer';
        }
    } else if (playerPlay == 'scissors') {
        if (compyPlay == 'paper') {
            return 'player';
        } else {
            return 'computer';
        }
    } else {
        return 'mistake'
    }
}

function properGrammer(string) {
    // this will return the string with a capitalized first letter.
    let firstHalf = string.slice(0, 1).toUpperCase();
    let secondHalf = string.slice(1).toLowerCase();
    return firstHalf + secondHalf; 
}

function compyResponse(theWinner, compyPlay, playerPlay) {
    if (theWinner == 'computer') {
        return `Ha, Meat bag! ${properGrammer(compyPlay)} beats ${playerPlay}! I win!!!`;
    } else if (theWinner == 'player'){
        return `Damn you! ${properGrammer(playerPlay)} beats ${compyPlay}! I lose!`;
    } else if (theWinner == 'mistake'){
        return `What the crap is ${playerPlay}? learn to spell!`
    } else {
        return 'A tie... we shall meet again hairless monkey!';
    }
}

function winnerCounter(winner) {
    if (winner == 'player'){
        return playerWins++;
    }else if (winner == 'computer'){
        return computerWins++;
    }else if (winner == 'tie'){
        return ties++;
    }else {  
    } 
}

function theWinner(player, compy) {
    if (player == 5 || compy == 5){
        if (player == 5){
            console.log('Player Wins!')
        } else {
            console.log('Computer Wins!')
        }
    }
}



let playerWins = 0;
let computerWins = 0;
let ties = 0;

while (true){
    theWinner(playerWins, computerWins);
    if (playerWins == 5 || computerWins == 5){
        console.log(`Final score: Player: ${playerWins}, Computer ${computerWins}, Ties: ${ties}`);
        break;
    }
    console.log(`Current score: Player: ${playerWins}, Computer: ${computerWins}, Ties: ${ties}`);
    let playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
    let computerSelection = Math.floor(Math.random() * 3) + 1;
    let compy = convertCompyPlay(computerSelection);
    let winner = whoWins(playerSelection, compy);
    winnerCounter(winner);
    console.log(compyResponse(winner, compy, playerSelection));

}