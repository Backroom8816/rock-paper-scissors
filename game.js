// game.js
// Does my program have a user interface? No
// What inputs has the program? One, user input (Rock, Paper, Scissor)
// What is the desired output? Number of rounds played and the final result

// Get computer choice
// Get user choice (input)
// Compare user's choice vs. computer's choice
// Increase score for round winner
// Print round winner's score
// Increase round counter
// Print number of round
// While round counter is smaller than 5, continue game
// Otherwise stop game

// Declare the player score variables

let computerScore = 0;
let humanScore = 0;

// Get computer choice
    // Math.random() returns a random number between 0 and 0.99
    // Multiply the generated number by 3 the range is expanded
    // from 0 to 2,97
    // then Math.floor rounds down the numbers and returns
    // the largest integers (0, 1, 2), getting 3 choices

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice == 0) {
        return "rock";
    } else if (computerChoice == 1) {
        return "paper";
    } else if (computerChoice == 2) {
        return "scissors";
    }
}


// Get user choice (input)
    // Ask user to choose between rock, paper or scissor
    // What if the user inputs an unvalid string?
        // Make input always lowercase?

function getHumanChoice() {
    let humanChoice = prompt("Choose one: rock, paper or scissor", "");
    return humanChoice.toLowerCase();
}

// Logic to play a single round
    // Compare user's choice vs. computer's choice
    // Increase score for round winner

function playRound(humanChoice, computerChoice) {

    if (humanChoice == "rock" && computerChoice == "rock") {

        alert("The round ended with a draw");

    } else if (humanChoice == "paper" && computerChoice == "paper") {

        alert("The round ended with a draw");

    } else if (humanChoice == "scissors" && computerChoice == "scissors") {

        alert("The round ended with a draw");

    } else if (humanChoice == "rock" && computerChoice == "paper") {

        computerScore++;
        alert("You lose! Paper beats Rock");
        alert("Computer scores +1 point");

    } else if (humanChoice == "rock" && computerChoice == "scissors") {

        humanScore++;
        alert("You win! Rock beats Scissors");
        alert("Human scores +1 point");

    } else if (humanChoice == "paper" && computerChoice == "rock") {

        humanScore++;
        alert("You win! Paper beats rock");
        alert("Human scores +1 point");

    } else if (humanChoice == "paper" && computerChoice == "scissors") {

        computerScore++;
        alert("You lose! Scissors beats Paper");
        alert("Computer scores +1 point");

    } else if (humanChoice == "scissors" && computerChoice == "rock") {

        computerScore++;
        alert("You lose! Rock beats Scissors");
        alert("Computer scores +1 point");

    } else {

        humanScore++;
        alert("You win! Scissors beats Paper");
        alert("Human scores +1 point");

    }

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);