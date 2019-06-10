var Word = require("./word.js")
var inquirer = require('inquirer');


var words = ["PINEAPPLE", "CHERRY", "COCONUT"];
var correctCounter;
//var letterInput = "";


var game = new Word("CHERRY PIE");
game.addLetter();


var guesses = 5;

game.toString();
playGame(guessCorrect);


function playGame(callback) {
    if (guesses > 0) {
        inquirer
            .prompt([
                {
                    name: "choice",
                    message: "Choose a letter:"
                },
            ])
            .then(answers => {
                correctCounter = game.assessLetters(answers.choice.toUpperCase());
                console.log(correctCounter + " index");
                game.toString();
                callback();
                count++;
                playGame(guessCorrect);
            });
    }
    else {
        console.log("YOUR LOSE")
    }
}




function guessCorrect(){
    console.log("guesscorrect" + correctCounter);
    if (correctCounter == false){
        guesses--;
        console.log("You have chosen poorly **" + guesses + "** remaining.")
    };
}


