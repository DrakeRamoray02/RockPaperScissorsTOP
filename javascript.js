/*
function add7(number) {
    return number + 7;
}

let add7_2 = n => n+7;
let number = 45;

let add7_3 = function(n){
    console.log("I am in a function expression")
    return number+7;
}

function multiply (number1, number2) {
    return number1 * number2;
}

function capitalize(string) {
     string = string.toLowerCase();
     let char = string.charAt(0).toUpperCase();
     string = char + string.substring(1);
     return string;
}

function lastLetter(string) {
    return string.charAt(string.length - 1);
}

let isDivisibleThree = n => n%3===0;
let isDivisibleFive = n => n%5===0;
for (let i = 1; i<=100; i++){
    if(isDivisibleThree(i)){
        if(isDivisibleFive(i)){
            console.log("Fizz buzz")
        }else{
            console.log("Fizz");
        }
    }else if(isDivisibleFive(i)){
        console.log("Buzz");
    }else{
        console.log(i);
    }
}
console.log("\n");
console.log("The choosen number is " 
+ number + " the function declaration add7 returns " + add7(number));

console.log("The choosen number is " 
+ number + " the arrow function add7_2 returns " + add7_2(number));

console.log("The choosen number is " 
+ number + " the function expression add7_3 returns " + add7_3(number));


let number1 = 5;
let number2= 8;

console.log("The choosen numbers are " 
+ number1 + " and " + number2 + 
" the function expression multiply returns their product that is: " 
+ multiply(number1,number2));

let string = "riQuELMe";
console.log("The word " + string + 
" will have the first letter capitalized and the rest of the letters in lowercase with the function capitalize(): "
 + capitalize(string));

 let string1 = "maracanA";
 console.log("The last letter of the word is: " + lastLetter(string1));



numbers = [21,12,45,678,24,10,3,111,145,0,401,232];
let max_number1 = -99999;
let max_number2 = -99999;
let max_number3 = 0;
for (let i = 0; i < numbers.length; i++){
    if(numbers[i] > max_number1){
        max_number3 = max_number2;
        max_number2 = max_number1;
        max_number1 = numbers[i];
    } else if(numbers[i] > max_number2){
        max_number3 = max_number2;
        max_number2 = numbers[i];
    } else if(numbers[i] > max_number3){
        max_number3 = numbers[i];
    }
}
console.log("The third higher number of the array is: " + max_number3);

*/

const prompt = require('prompt-sync')();

function getComputerChoice(){
    let opponent = Math.round(Math.random()*2)+1;
    switch(opponent) {
        case 1:
            return 'ROCK';
        case 2:
            return 'PAPER';
        case 3:
            return 'SCISSORS';
    }
}

function playSingleRound(computer,player){
    if (player === computer) {
        console.log('Its a tie')
        computer = getComputerChoice();
        player = (prompt("Rock Paper or Scissors: ")).toUpperCase();
        playSingleRound(computer,player);
    }else if(player === 'ROCK' && computer === 'PAPER'){
        return("CPU WIN");
    }else if(player === 'ROCK' && computer === 'SCISSORS'){
        return('PLAYER WIN');
    }else if(player === 'PAPER' && computer === 'ROCK'){
        return("PLAYER WIN");
    }else if (player === 'PAPER' && computer === 'SCISSORS'){
        return('CPU WIN');
    }else if (player === 'SCISSORS' && computer === 'ROCK'){
        return('CPU WIN');
    }else{
        return('PLAYER WIN');
    }
}

function verifiedValue(playerSelection){
    if (playerSelection !== 'ROCK' && playerSelection !== 'PAPER' && playerSelection !== 'SCISSORS'){
        console.log("Invalid Value");
        playerSelection = (prompt("Rock Paper or Scissors: ")).toUpperCase();
        verifiedValue(playerSelection);
    }
}


function game(){
    let playerScore = 0;
    let computerScore = 0;
    let playerSelection = '';
    let result = '';
    while (playerScore !== 3 && computerScore !== 3){
        playerSelection = (prompt("Rock Paper or Scissors: ")).toUpperCase();
        verifiedValue(playerSelection);
        result = playSingleRound(getComputerChoice(),playerSelection);
        if (result === 'PLAYER WIN'){
            playerScore++;
        }else{
            computerScore++;
        }
        console.log("Player: " + playerScore + ' | ' + 'Computer: ' + computerScore);
    }
    if(playerScore === 3){
        console.log("PLAYER WINS");
    }else{
        console.log('CPU WINS');
    }
}

game();

