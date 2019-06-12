//imports letter
var Letter = require("./letter.js")

//constructor used for each word once chosen
function Word(chosenWord) {
    //stores the word
    this.chosenWord = chosenWord;

    //breaks the word into an array of letters
    this.letters = [];

    //creates a string to be displayed to the user
    this.toString = function(){

        //letters in the letter array are taken in and then a new aray is created whith each letters response from replace letter
        var displayArray = this.letters.map(letter => letter.replaceLetter());
        
        //the array is made into a string
        var displayString = displayArray.join(" ");

        //the string is displayed to the user
        console.log(displayString);

        //display string is returned so that it can be used to create displayStringVictory
        return displayString;
        
    }

    //compares letter input to letters in letteers array
    this.assessLetters = function (letterInput) {
        
        //initially sets  is any correct to false becuase it will only be changed if a correct letter is guessed
        var isAnyCorrect = false;

        //cycles through every letter in the array
        for(var i=0; i<this.letters.length; i++){

            //runs guess on each letter and and if guess returns true then isAnyCorrect becomes true
            if (this.letters[i].guess(letterInput)){
                isAnyCorrect = true;
            }

        }
        //returns is any correct to be used in guessCorrect in index.js
        return isAnyCorrect;
        
    }

    //adds letter objects from the word chosen to the letters array
    this.addLetter = function(){
        
        //splits chosen word into array of letters
        var toBeLetters = chosenWord.split("");

        //goes through each letter
        for(var i=0; i<toBeLetters.length; i++){

            //assigns that letter to a value
            value = toBeLetters[i];

            //creates a letter object with that value and sets it being guessed to false
            this.letters.push(new Letter(value, false))
        } 
    }
}

//exports word so that it can be used in index
module.exports = Word;