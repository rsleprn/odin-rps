const getComputerChoice = () => {
    const randomNumber = Math.random();
    let computerChoice;
    if (randomNumber > 0.66) {
        computerChoice = 'rock';
    } else if (randomNumber > 0.33) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }
    console.log('Computer chooses ' + computerChoice);

    return computerChoice;
}

const getHumanChoice = () => {
    const humanChoice = prompt('Enter your choise (rock, paper, scissors): ');
    return humanChoice.toLowerCase();
}

const playGame = () => {
    let humanScore = 0;
    let computerScore = 0;

    const playRound = (humanChoice, computerChoice) => {
        if (humanChoice === computerChoice) {
            console.log('Draw! Try again');
        } else if (humanChoice === 'rock' && computerChoice === 'scissors' || humanChoice === 'paper' && computerChoice === 'rock' || humanChoice === 'sissors' && computerChoice === 'paper') {
            console.log('Point to human!');
            humanScore++;
        } else {
            console.log('Point to computer :(');
            computerScore++;
        }
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log('Final score is : ');
    console.log('Human: ' + humanScore);
    console.log('Computer: ' + computerScore);
}

playGame();

