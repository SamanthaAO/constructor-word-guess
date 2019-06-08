var Letter = require("./letter.js")

//var chosenWord = "CHERRY";
//console.log(chosenWord.split(""))

function Word(chosenWord) {
    this.chosenWord = chosenWord;
    this.letters = [];

    this.toString = function(){
        var displayArray = [];
        for(var i=0; i<this.letters.length; i++){
            displayArray.push(this.letters[i].replace()); 
            }

            console.log(displayArray.join(" "));
        
    }

    this.assessLetters = function () {
        for(var i=0; i<this.letters.length; i++){
            this.letters[i].guess();   
            }
    }

    this.addLetter = function(){
        var toBeLetters = chosenWord.split("");
        for(var i=0; i<toBeLetters.length; i++){
            value = toBeLetters[i];
            this.letters.push(new Letter(value, false))
        }
        console.log(this.letters);
        
    }

}

var game = new Word("CHERRY");

game.addLetter();
game.assessLetters();
game.toString();



//module.exports = Word;