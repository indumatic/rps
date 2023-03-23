const buttons =  document.querySelectorAll('button')
const playerScoreElement = document.querySelector('#player-score')
const computerScoreElement = document.querySelector('#computer-score')

let playerScore = 0
let computerScore = 0

const getComputerChoice = function() {
    const choices = ['Rock', 'Paper', 'Scissors']
    return choices[Math.floor(Math.random() * 3)]    
}

const playRound = function(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()

    const result = document.querySelector("#result")
    let message = ""

    if( playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "scissors" && computerSelection === "paper" ||
        playerSelection === "paper" && computerSelection === "rock"){
        message = "You win! " + playerSelection + " beats " + computerSelection
        playerScore ++
    }
    else if( playerSelection === "rock" && computerSelection === "paper" ||
            playerSelection === "scissors" && computerSelection === "rock" ||
            playerSelection === "paper" && computerSelection === "scissors") {
        message =  "You lose! " + computerSelection + " beats " + playerSelection
        computerScore ++
    }
    else {
        message =  "It's a draw!"
    }

    result.textContent = message

    playerScoreElement.textContent = "Player score: " + playerScore
    computerScoreElement.textContent = "Computer score: " + computerScore

}

buttons.forEach( (button) => {
    addEventListener('click', () => {
        playRound(getComputerChoice(), button.id)
    })
})



