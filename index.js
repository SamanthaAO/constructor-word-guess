var Word = require("./word.js")
var inquirer = require('inquirer');


var words = ["PINEAPPLE", "CHERRY", "COCONUT"];
//var letterInput = "";


var game = new Word("CHERRY PIE");
game.addLetter();

var count = 0;

playGame();


function playGame() {
    if (count < 2) {
        inquirer
            .prompt([
                {
                    name: "choice",
                    message: "Choose a letter:"
                },
            ])
            .then(answers => {
                game.assessLetters(answers.choice);
                game.toString();
                count++;
                playGame();
            });
    }
    else {
        console.log("YOUR LOSE")
    }
}


