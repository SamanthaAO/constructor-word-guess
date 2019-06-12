
//constructor used for each letter inthe word
function Letter(value, guessed) {
    //this is where the actual letter value is stored
    this.value = value;

    //guessed is a boolean
    this.guessed = guessed;

    //this function changes the boolean in guessed for the letter if it has been guessed by the player
    this.guess = function (letterInput) {
        
        //compares player input to the value of the letter
            if (letterInput === this.value){
                this.guessed = true;
                
                // this true is returned becuase this being true also trriggers the booleean in assesLetters for isAnyCorrect
                return true;
                
            }
           
            
    }
    //diplays letter or _ depending on guessed
    this.replaceLetter = function (){

        //shows letter if has been guessed
        if(this.guessed){
            return this.value;
        }
        
        //shows " " for " "s
        else if(this.value == " "){
            return " ";
        }

        //shows _ if the letter has not been guessed
        else{
            return "_";
        }
    }
}


//exports letter to be used in word
module.exports = Letter;

