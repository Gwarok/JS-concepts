const container = document.querySelector('.container')
const resultcontainer = document.querySelector('.result')

const computerChoice=()=>{
    const choices = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * choices.length);

    const result = choices[random]
    return result
}

function determineWinner(Compchoice ,player1choice) {
    if ( player1choice === Compchoice) {
        return 'It\'s a tie!';
    } else if (
        (player1choice === 'rock' && Compchoice === 'scissors') ||
        (player1choice === 'paper' && Compchoice === 'rock') ||
        (player1choice === 'scissors' && Compchoice === 'paper')
    ) {
        return 'You win!';
    } else {
        return 'You lose!';
    }
}

container.addEventListener('click',(e)=>{
    let player1choice = e.target.innerText.toLowercase()
    resultcontainer.innerText = determineWinner(computerChoice(), player1choice)

})
