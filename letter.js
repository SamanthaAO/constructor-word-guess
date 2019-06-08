
//var letterInput = process.argv[2].toUpperCase();
//var wordArray = ["C", "A", "T"];
var displayArray =[];

//console.log(letterInput);

function Letter(value, guessed) {
    this.value = value;
    //guessed is a boolean
    this.guessed = guessed;
    this.guess = function () {
        for (var i = 0; i < displayArray.length; i++) {
            if (letterInput === displayArray[i]){
                this.guessed = true;
            }
            else{
                this.guessed = false;
            }
        }
    }
    //need this to properly be replaced and not just pushed
    this.replace = function (){
        if(this.guessed){
            return this.value;
        }
        else{
            return "_";
        }
    }
}

var letterInput = new Letter(process.argv[2].toUpperCase(), false);
//var a = new Letter("A", false);

console.log(letterInput.guessed);
letterInput.replace();
console.log(displayArray);
letterInput.guess();
console.log(letterInput.guessed = true);
letterInput.replace();
console.log(displayArray);


