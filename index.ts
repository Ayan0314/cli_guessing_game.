#! /usr/bin/env node

import inquirer from "inquirer";

// 1) Computer will generate a random number

// 2) User input for getting number

// 3) Compare user input with computer generated number and show result

const randomnumber = Math.floor(Math.random() * 6 + 1);

const answer = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: "Please guess a number between 1-10: ",
  },
]);

if (answer.userGuessedNumber === randomnumber) {
  console.log("Congratulations! you guessed right number.");
} else {
  console.log("You guessed wrong number");
}
