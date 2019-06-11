var Word = require("./word.js")
var inquirer = require('inquirer');


var words = ["PINEAPPLE UPSIDE DOWN CAKE", "CHERRY PIE", "FROZEN YOGURT", "CHEESECAKE","ICE CREAM", "CHOCOLATE CHIP COOKIES", "FUDGE", "CHOCOLATE BROWNIE", "LADYFINGER", "BANANA PUDDING", "BLACKBERRY COBBLER", "APPLE CRISP"];
var correctCounter;
var displayStringVictory;
//var letterInput = "";


var game;

wordChoice();
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
                //console.log(correctCounter + " index");
                displayStringVictory = game.toString();
                callback();
                
                playGame(guessCorrect);
            });
    }
    else {
        console.log("YOUR LOSE")
    }
}




function guessCorrect(){
    //console.log("guesscorrect" + correctCounter);
    if (correctCounter == false){
        guesses--;
        console.log("You have chosen poorly **" + guesses + "** remaining.")
    }
    else{
        console.log("CORRECT!!!")
        victory();
    };
}

function wordChoice(){
    var randomNum = Math.floor(Math.random() * words.length);
    console.log(words[randomNum]);
    game = new Word(words[randomNum]) ;

}

function victory(){
//console.log(displayStringVictory.indexOf("_"));
    if(displayStringVictory.indexOf("_") == -1){
        console.log("You got it correct!! Here is your next word")
        ///this will change to select new word and then play game
        playGame(guessCorrect);
    }
}


