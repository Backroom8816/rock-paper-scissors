// game.js
console.log("Hello World");

// Does my program have a user interface? No
// What inputs has the program? One, user input (Rock, Paper, Scissor)
// What is the desired output? Number of rounds played and the final result

// Get computer choice
// Get user choice (input)
// Compare user's choice vs. computer's choice
// Decide round winner
// Increase score for round winner
// Print round winner's score
// Increase round counter
// Print number of round
// While round counter is smaller than 5, continue game
// Otherwise stop game

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
        return "scissor";
    }
}

console.log(getComputerChoice())

// Get user choice (input)
    // Ask user to choose between rock, paper or scissor
    // What if the user inputs an unvalid string?
        // Make input always lowercase

function getHumanChoice() {
    let humanChoice = prompt("Choose one: rock, paper or scissor");
    return humanChoice;
}

console.log(getHumanChoice());
