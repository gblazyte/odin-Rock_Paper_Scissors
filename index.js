function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"];
    let answer = options[Math.floor(Math.random() * options.length)];
    return answer;
}

const computerSelection = getComputerChoice();


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

//console.log(computerSelection);

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const gameResult = document.querySelector('#gameResult');
const content = document.createElement('div');

rock.addEventListener('click', function () {
    let result = playRound('rock', computerSelection);
    content.classList.add('content');
    content.textContent = `The result is: ${result}`;
    gameResult.appendChild(content);
});
paper.addEventListener('click', function () {
    let result = playRound('paper', computerSelection);
    content.classList.add('content');
    content.textContent = `The result is: ${result}`;
    gameResult.appendChild(content);
});
scissors.addEventListener('click', function () {
    let result = playRound('scissors', computerSelection);
    content.classList.add('content');
    content.textContent = `The result is: ${result}`;
    gameResult.appendChild(content);
});

//console.log(playRound(playerSelection, computerSelection));

function game() {
    let player = 0;
    let computer = 0;
    for (let i = 0; i < 5; i++) {
        let input = prompt("Choose Rock, Paper or Scissors");
        if (playRound(input, computerSelection) == "You Win!") {
            console.log(playRound(input, computerSelection));
            player++
        } else if (playRound(input, computerSelection) == "You Lose!") {
            console.log(playRound(input, computerSelection));
            computer++
        } else {
            console.log(playRound(input, computerSelection));
            player += 0;
            computer += 0;
        }
    }

    if (player > computer) {
        return `You won with the score of ${player}`
    } else if (player < computer) {
        return `You lost with the score of ${player}`
    } else {
        return "It's a tie!"
    }

}