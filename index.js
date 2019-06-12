//imports word to be used 
var Word = require("./word.js");

//imports inquirer for the questions to the user
var inquirer = require('inquirer');

//imports color for the color
var colors = require('colors');

//array of words that are to be guessed
var words = ["PINEAPPLE UPSIDE DOWN CAKE", "CHERRY PIE", "FROZEN YOGURT", "CHEESECAKE","ICE CREAM", "CHOCOLATE CHIP COOKIES", "FUDGE", "CHOCOLATE BROWNIE", "LADYFINGER", "BANANA PUDDING", "BLACKBERRY COBBLER", "APPLE CRISP"];

//global variables
var correctCounter;
var displayStringVictory;

var game;
var guesses = 5;

//welcome message
console.log(colors.bold("Welcome to Dessert Dash. To begin choose a letter and try to guess the hidden dessert word."))


//selects first word to be guessed
wordChoice();

//runs initial play game
playGame(guessCorrect);

//this function runs the game
function playGame(callback) {
    
    //as long as the userr is not out of guesses the game will keep running
    if (guesses > 0) {
        //the user is asked to choose a letter
        inquirer
            .prompt([
                {
                    name: "choice",
                    message: "Choose a letter:"
                },
            ])
            //then with thee answer
            .then(answers => {
                //returns true or false based on if the user guessed a letter correctly 
                correctCounter = game.assessLetters(answers.choice.toUpperCase());
                
                //takes the display string from game.to string and stores it in display string victory also uns function to show string to player
                displayStringVictory = game.toString();

                //runs guess correct to tell the user if they have guessed correctly
                callback();

                //plays game again until the use is out of guesses
                playGame(guessCorrect);
            });
    }

    //if the user is out of guesses tell them that they have lost
    else {
        console.log("YOU LOSE")
    }
}



//tells user if theri guess was corect or not and updates guesses 
function guessCorrect(){
    //if incorect
    if (correctCounter == false){
        //guesses decreases by 1
        guesses--;
        //console log incorrect message
        console.log(colors.red("You have chosen poorly **" + guesses + "** remaining.\n\n"))
    }

    //if correct
    else{
        //console log correct message
        console.log(colors.green("CORRECT GUESS!!! \n\n"))
        //run victory to see if the player has won
        victory();
    };
}

//choses word to be guessed by user
function wordChoice(){

    //choses a random number between 0 and the words.length-1
    var randomNum = Math.floor(Math.random() * words.length);

    //this will show the number that has been chosen and can be used for testing.
    //console.log(words[randomNum]);

    //creates a new word object names game
    game = new Word(words[randomNum]);

    //creates lette objects from the wordchosen
    game.addLetter();

    //makes a string of the word and displays it
    game.toString();
    

}

//is run if userr guesses correctly to see if they have guessed all the letters
function victory(){
//checks to see if there are any _ left in the word being displayed if therre are not it means that all letterr have been guessed
    if(displayStringVictory.indexOf("_") == -1){
        
        //console log victory message
        console.log("You have revealed the entire word!! Commence guessing on your next word")
        ///select new word to be guessed
        wordChoice();
        
    }
}


