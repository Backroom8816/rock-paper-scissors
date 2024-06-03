// game.js

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);

    switch (computerChoice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors"
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Choose one: rock, paper or scissors", "").toLowerCase();

    switch (humanChoice) {
        case "rock":
        case "paper":
        case "scissors":
            return humanChoice;
        default:
            alert("Bad input. Try again.")
            return getHumanChoice();
    }
}

function playGame() {
    
    let computerScore = 0;
    let humanScore = 0;
    let countRound = 0;

    function playRound(humanChoice, computerChoice) {

        if (humanChoice == "rock" && computerChoice == "rock") {

            alert("The round ended with a draw");
            countRound++;

        } else if (humanChoice == "paper" && computerChoice == "paper") {

            alert("The round ended with a draw");
            countRound++;

        } else if (humanChoice == "scissors" && computerChoice == "scissors") {

            alert("The round ended with a draw");
            countRound++;

        } else if (humanChoice == "rock" && computerChoice == "paper") {

            alert("You lose! Paper beats Rock.");
            alert("Computer scores +1 point.");
            computerScore++;
            countRound++;

        } else if (humanChoice == "rock" && computerChoice == "scissors") {

            alert("You win! Rock beats Scissors.");
            alert("Human scores +1 point.");
            humanScore++;
            countRound++;

        } else if (humanChoice == "paper" && computerChoice == "rock") {

            alert("You win! Paper beats rock.");
            alert("Human scores +1 point.");
            humanScore++;
            countRound++;

        } else if (humanChoice == "paper" && computerChoice == "scissors") {

            alert("You lose! Scissors beats Paper.");
            alert("Computer scores +1 point.");
            computerScore++;
            countRound++;

        } else if (humanChoice == "scissors" && computerChoice == "rock") {

            alert("You lose! Rock beats Scissors.");
            alert("Computer scores +1 point.");
            computerScore++;
            countRound++;

        } else {

            alert("You win! Scissors beats Paper.");
            alert("Human scores +1 point.");
            humanScore++;
            countRound++;

        }

    }

    function round1(){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);

    }

    function round2(){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    function round3(){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    function round4(){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    function round5(){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    round1();
    round2();
    round3();
    round4();
    round5();

    if (computerScore > humanScore) {
        return alert("The game winner is: Computer.");
    } else if (computerScore < humanScore) {
        return alert("The game winner is: Human.");
    } else {
        return alert("The game ended with a draw.");
    }

}

playGame();