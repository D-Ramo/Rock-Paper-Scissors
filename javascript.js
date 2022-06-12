const buttons = document.querySelectorAll("button");
let playerScore = 0 ;
let computerScore = 0 ;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        game((playerPick = button.id));
    })
})
function disableButton(){
document.querySelector("#rock").disabled = true;
document.querySelector("#scissors").disabled = true;
document.querySelector("#paper").disabled = true;

}


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
            return "you win! paper beats rock"
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
function game(playerPick) {

    



    let result = playRound(playerPick, computerPlay())



    if (result.search("you win") !== -1) {
        ++playerScore;


    }
    else if (result.search("you lose") !== -1) {
        ++computerScore;

    }

    if (computerScore == 5) {
        result = "you have lost the game"
        disableButton();
    }
    else if (playerScore == 5) {
        result = "you have won the game"
        disableButton();
    }
    let score = "<br><br>player Score: " + playerScore + " computer Score: " + computerScore;

 document.getElementById('results').innerHTML = result + score;

}
