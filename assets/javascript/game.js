// list array of shows 
var showsArray = ["ARTHUR", "POKEMON", "GARGOYLES", "RECESS", "CATDOG", "RUGRATS", "DOUG", "ANIMANIACS", "THUNDERCATS", "SNORKS"];
var underscores= [];
var tempUnderscore = "-";

// randomly chooses show from array
var random = Math.floor(Math.random()*showsArray.length);
var chosenShow = showsArray[random];

// how many letters are in the chosen show
var wordLength = chosenShow.length;
console.log(chosenShow)

// Number variables
var attempts = 10;
var wins = 0;
var userLetters = [];
var uguess = [];

// creates blank spaces for each letter of chosen show
document.getElementById("underscores").innerHTML = tempUnderscore.repeat(wordLength);
underscores = tempUnderscore.repeat(wordLength).split('');

// replaces letter when the user types a correct letter
document.onkeyup = function(event) { 

if (attempts > 0) {
    var userGuess = event.keyCode;

    var userLetters = String.fromCharCode(userGuess).toUpperCase();
    for  (i = 0; i < wordLength; i++) {
        if (userLetters === chosenShow[i]){
            underscores[i] = userLetters;
        }
        console.log(userGuess)
    }

    document.getElementById("underscores").innerHTML = underscores.toString().replace(/,/g, '');
    }

if (attempts <= 0) {
    alert("Game Over!")
}

var winning= true;

for (var i = 0; i < wordLength; ++i){
    if (underscores[i]!= chosenShow[i]){
        winning = false;
    }
}

if (winning) {
    wins++;
    alert("You Won!");
    document.getElementById("wins").textContent = wins;
    reset();
}
};

function reset(){
    attempts = 10;
    userLetters = [];
    underscores= [];
    chosenShow = showsArray[Math.floor(Math.random()*showsArray.length)];
    wordLength = chosenShow.length;
}

