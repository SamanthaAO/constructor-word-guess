var Letter = require("./letter.js")


//var chosenWord = "CHERRY";
//console.log(chosenWord.split(""))

function Word(chosenWord) {
    this.chosenWord = chosenWord;
    this.letters = [];

    this.toString = function(){
        var displayArray = this.letters.map(letter => letter.replaceLetter());
        // for(var i=0; i<this.letters.length; i++){
        //     displayArray.push(this.letters[i].replaceLetter()); 
        //     }

            console.log(displayArray.join(" "));
        
    }

    this.assessLetters = function (letterInput) {
        var isAnyCorrect = false;
        for(var i=0; i<this.letters.length; i++){
            if (this.letters[i].guess(letterInput)){
                isAnyCorrect = true;
            }

        }
        console.log(isAnyCorrect + " word");
        return isAnyCorrect;
        
    }

    this.addLetter = function(){
        var toBeLetters = chosenWord.split("");
        for(var i=0; i<toBeLetters.length; i++){
            value = toBeLetters[i];
            this.letters.push(new Letter(value, false))
        }
        //console.log(this.letters);
        
    }

}





module.exports = Word;