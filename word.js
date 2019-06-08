var Letter = require("./letter.js")

function Word() {
    this.letters = [];

    this.letters.toString = function(){
        return this.letters
    }

    this.assessLetters = function () {
        this.guess
    }

    this.addLetter = function(value, guessed){
        this.letters.push(new Letter(value, guessed))
    }

}





module.exports = Word;