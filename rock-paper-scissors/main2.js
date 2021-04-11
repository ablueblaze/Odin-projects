let playerWins = 0;
let computerWins = 0;
let ties = 0;

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
        console.log('whoWins error')
    }
}


function compyResponse(theWinner, compyPlay, playerPlay) {
    if (theWinner == 'computer') {
        return `Ha, Meat bag! ${compyPlay} beats ${playerPlay}! I win!!!`;
    } else if (theWinner == 'player'){
        return `Damn you! ${playerPlay} beats ${compyPlay}! I lose!`;
    // } else if (theWinner == 'mistake'){
    //     return `What the crap is ${playerPlay}? learn to spell!`
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

function score(player, computer, ties){
    document.getElementById("playerScore").innerHTML = player;
    document.getElementById("computerScore").innerHTML = computer;
    document.getElementById("ties").innerHTML = ties;
}

function playRound(player) {
    score(playerWins, computerWins, ties);
    theWinner(playerWins, computerWins);
    let computerSelection = Math.floor(Math.random() * 3) + 1;
    let compy = convertCompyPlay(computerSelection);
    let winner = whoWins(player, compy);
    winnerCounter(winner);
    
    
    console.log(compyResponse(winner, compy, player));
    if (playerWins == 5 || computerWins == 5){
        console.log(`Final score: Player: ${playerWins}, Computer ${computerWins}, Ties: ${ties}`);
    }

}




const playRock = document.getElementById("rock");
playRock.addEventListener('click', function (event) {
    playRound('rock');
})
    
    
    const playPaper = document.getElementById("paper");
playPaper.addEventListener('click', function (event) {
    playRound('paper');
})

const playScissors = document.getElementById("scissors");
playScissors.addEventListener('click', function (event) {
    playRound('scissors');
})
   
    





// const playPaper = document.getElementById("paper");

// playPaper.addEventListener('click', function (event){
//     test(   );
// })
// const scissors = document.querySelector('scissors');

// document.onClick = function() {
//     document.getElementsById('rock') playRound('rock') };

// scissors.addEventListener('click', {
//     handleEvent: function (event) {
//         playRound(scissors);
//     }
// })

