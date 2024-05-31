// game.js
// Does my program have a user interface? No
// What inputs has the program? One, user input (Rock, Paper, Scissor)
// What is the desired output? Number of rounds played and the final result

    // Get computer choice
        // Math.random() returns a random number between 0 and 0.99
        // Multiply the generated number by 3 the range is expanded
        // from 0 to 2,97
        // then Math.floor rounds down the numbers and returns
        // the largest integers (0, 1, 2), getting 3 choices

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

// Get user choice (input)
    // Ask user to choose between rock, paper or scissor
    // What if the user inputs an unvalid string?
        // Make input always lowercase

function getHumanChoice() {
    let humanChoice = prompt("Choose one: rock, paper or scissors", "").toLowerCase();

    switch (humanChoice) {
        case "rock":
        case "paper":
        case "scissors":
            return humanChoice;
        default:
            alert("Bad input. Try again.")
            return getHumanChoice(); // Return result of recursive call
    }
}

// Logic to play the entire game
    // While the sum of player scores is less than 5, continue game
    // Otherwise stop game

function playGame() {
    
    // Declare the player's score variables
    let computerScore = 0;
    let humanScore = 0;

    // Declare round count variable
    let countRound = 0;

    // Logic to play a single round
        // Compare user's choice vs. computer's choice
        // Increase score for round winner

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