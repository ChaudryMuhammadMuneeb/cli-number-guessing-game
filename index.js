import inquirer from "inquirer";
const randNumber = Math.floor(Math.random() * 10 + 1);
const userInput = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-10: ",
    }
]);
if (userInput.userGuessedNumber === randNumber) {
    console.log("Congratulations! You guessed the right number.");
}
else {
    console.log("Opps! You guessed the wrong number.");
}
