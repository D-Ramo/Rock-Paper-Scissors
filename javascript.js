function computerPlay() {
    let play = ['Rock', 'Paper', 'Scissors']

    return play[Math.floor(Math.random() * play.length)]
}
function playRound(player, computer) {
    if (player === "rock") {
        if (computer === "Rock") {
            return "tie"
        }
        else if (computer === "Scissors") {
            return "you win! Rock Beats Scissors"
        }
        else if (computer === "Paper") {
            return "you lose! Paper beats Rock"
        }
    }
    if (player === "paper") {
        if (computer === "Rock") {
            return "You win! paper beats rock"
        }
        else if (computer === "Scissors") {
            return "you lose! Scissors Beats paper"
        }
        else if (computer === "Paper") {
            return "tie"
        }
    }
    if (player === "scissors") {
        if (computer === "Rock") {
            return "you lose! rock beats scissors"
        }
        else if (computer === "Scissors") {
            return "tie"
        }
        else if (computer === "Paper") {
            return "you win! Scissors beats paper"
        }
    }

}
function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt("enter your choice: ")
        let result = playRound(playerChoice.toLowerCase(), computerPlay())
        console.log(result)
        if (result.search("you win") !== -1) {
            ++playerScore;
        }
        else if (result.search("you lose") !== -1) {
            ++computerScore;
        }
    }
    if (computerScore > playerScore) {
        return "you lose";
    }
    else if (computerScore === playerScore) {
        return "tie";
    }
    else {
        return "you win";
    }
}

console.log(game())