const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const gameResult = document.querySelector('#gameResult');
const finalResult = document.querySelector('#finalResult');
const playerDisplayScore = document.querySelector('#playerDisplayScore');
const computerDisplayScore = document.querySelector('#computerDisplayScore');
let player = 0;
let computer = 0;

function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"];
    let answer = options[Math.floor(Math.random() * options.length)];
    return answer;
}

//const computerSelection = getComputerChoice();


function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") {
        return "You Lose!"
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
        return "You Win!"
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
        return "You Win!"
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors") {
        return "You Lose!"
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock") {
        return "You Lose!"
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
        return "You Win!"
    } else (playerSelection.toLowerCase() === computerSelection.toLowerCase())
    return "It's a tie!"

}

function resetGame() {
    player = 0;
    computer = 0;
    playerDisplayScore.textContent = "";
    computerDisplayScore.textContent = "";
}

function game(e) {
    let round = playRound(this.id, getComputerChoice());

    if (round == "You Win!") {
        player++;
        computer += 0;
        gameResult.textContent = '+1 to you!';

    } else if (round == "You Lose!") {
        computer++;
        player += 0;
        gameResult.textContent = '+1 for the computer!';
    } else {
        player += 0;
        computer += 0;
        gameResult.textContent = `${round} No point for either of you!`;
    }

    playerDisplayScore.textContent = `The player score: ${player}`;
    computerDisplayScore.textContent = `The computer score: ${computer}`;


    if (player == 5 || computer == 5) {
        if (player > computer) {
            gameResult.textContent = `You won with the score of ${player}! Congratulations :)`
        } else if (player < computer) {
            gameResult.textContent = `You lost with the score of ${player}! Better luck next time :)`

        }
        resetGame();
    }

}

rock.addEventListener('click', game);
paper.addEventListener('click', game);
scissors.addEventListener('click', game);
