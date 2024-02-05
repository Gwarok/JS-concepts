function playerChoice(choice) {
    const choices = ['rock', 'paper', 'scissors'];
    const player2Choice = choices[Math.floor(Math.random() * 3)];

    const result = choices[random]

    displayResult(choice, player2Choice, result);
    updateScore(result);
}

function determineWinner(player1, player2) {
    if (player1 === player2) {
        return 'It\'s a tie!';
    } else if (
        (player1 === 'rock' && player2 === 'scissors') ||
        (player1 === 'paper' && player2 === 'rock') ||
        (player1 === 'scissors' && player2 === 'paper')
    ) {
        return 'Player 1 wins!';
    } else {
        return 'Player 2 wins!';
    }
}

function displayResult(player1, player2, result) {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `Player 1 chose ${player1}, Player 2 chose ${player2}. ${result}`;
}
