let playerPoints = 0;
let computerPoints = 0;
let roundsPlayed = 0;

function startGame() {
    playerPoints = 0;
    computerPoints = 0;
    roundsPlayed = 0;
    document.getElementById("result").innerHTML = '';
    document.getElementById("playGameButton").style.display = "none";
    document.getElementById("gameButtons").style.display = "block";
    document.getElementById("resetButton").style.display = "none";
}

function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    const winner = checkWinner(playerChoice, computerChoice);
    updatePoints(winner);
    displayResult(playerChoice, computerChoice, winner);
    roundsPlayed++;
    if (playerPoints === 5 || computerPoints === 5) {
        endGame();
    }
}

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function checkWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'Tie';
    } else if (
        (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
        (playerChoice === 'Paper' && computerChoice === 'Rock') ||
        (playerChoice === 'Scissors' && computerChoice === 'Paper')
    ) {
        return 'Player';
    } else {
        return 'Computer';
    }
}

function updatePoints(winner) {
    if (winner === 'Player') {
        playerPoints++;
    } else if (winner === 'Computer') {
        computerPoints++;
    }
}

function displayResult(playerChoice, computerChoice, winner) {
    document.getElementById("result").innerHTML = `
        <p>You chose ${playerChoice}, Computer chose ${computerChoice}.</p>
        <p>${winner} wins this round!</p>
        <p>Player Points: ${playerPoints}</p>
        <p>Computer Points: ${computerPoints}</p>
    `;
}

function endGame() {
    document.getElementById("gameButtons").style.display = "none";
    document.getElementById("resetButton").style.display = "block";
    document.getElementById("result").innerHTML += `<p>Game over! ${playerPoints === 5 ? 'Player' : 'Computer'} wins!</p>`;
}

function resetGame() {
    document.getElementById("playGameButton").style.display = "block";
    document.getElementById("resetButton").style.display = "none";
    startGame();
}