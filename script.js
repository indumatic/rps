const getComputerChoice = function() {
    const choices = ['Rock', 'Paper', 'Scissors']
    return choices[Math.floor(Math.random() * 3)]    
}

const playRound = function(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()

    if( playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "scissors" && computerSelection === "paper" ||
        playerSelection === "paper" && computerSelection === "rock"){
        return "You win! " + playerSelection + " beats " + computerSelection
    }
    else if( playerSelection === "rock" && computerSelection === "paper" ||
            playerSelection === "scissors" && computerSelection === "rock" ||
            playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! " + computerSelection + " beats " + playerSelection
    }
    else {
        return "It's a draw!"
    }

}

console.log(playRound("rock",getComputerChoice()))