
let playerScore = 0;
let computerScore = 0;

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

function playSingleRound(player, playerScore, computerScore){

    let computer = getComputerChoice();

    if (player === computer) {
        return["It's a tie",playerScore, computerScore, player, computer];
    }else if(player === 'ROCK' && computer === 'PAPER'){
        return['CPU WIN',playerScore, ++computerScore, player, computer];
    }else if(player === 'ROCK' && computer === 'SCISSORS'){
        return['PLAYER WIN',++playerScore, computerScore, player, computer];
    }else if(player === 'PAPER' && computer === 'ROCK'){
        return['PLAYER WIN',++playerScore, computerScore, player, computer];
    }else if (player === 'PAPER' && computer === 'SCISSORS'){
        return['CPU WIN',playerScore, ++computerScore, player, computer];
    }else if (player === 'SCISSORS' && computer === 'ROCK'){
        return['CPU WIN',playerScore, ++computerScore, player, computer];
    }else{
        return['PLAYER WIN',++playerScore, computerScore, player, computer];
    }
}


/*
const rock_btn = document.querySelector('#rock_btn');
rock_btn.addEventListener('click', function () {
    console.log("Player choose Rock");
 });

 const paper_btn = document.querySelector('#paper_btn');
paper_btn.addEventListener('click', function () {
    console.log("Player choose Paper");
 });
 
 const scissors_btn = document.querySelector('#scissors_btn');
scissors_btn.addEventListener('click', function () {
    console.log("Player choose Scissors");
 });
 */

 const div_btn = document.querySelector('.btn_div');
 div_btn.addEventListener('click', function (event) {
    if(event.target.textContent === 'ROCK'){
        array_results = playSingleRound('ROCK',playerScore, computerScore);
        gameResults(array_results);
    }else if(event.target.textContent === 'PAPER'){
        array_results =  playSingleRound('PAPER',playerScore, computerScore);
        gameResults(array_results);
    }else if(event.target.textContent === 'SCISSORS'){
        array_results =  playSingleRound('SCISSORS',playerScore, computerScore);
        gameResults(array_results);
    }
 })

const body_dom = document.querySelector('body');
const game_div = document.querySelector('.game_div');
const description = document.createElement('p');
description.classList.add('description');
const result = document.createElement('p');
const player_score = document.createElement('p');
const cpu_score = document.createElement('p');




game_div.appendChild(description);

const info_div = document.createElement('div');
info_div.classList.add('info_div');
game_div.insertBefore(info_div,div_btn);

info_div.appendChild(cpu_score);
info_div.appendChild(result);
info_div.appendChild(player_score);




function gameResults(array_results){
    console.log(array_results[0]);
    playerScore = array_results[1];
    computerScore = array_results[2];
    result.textContent = array_results[0];
    description.textContent = ('Player choose ' + array_results[3] + ' and CPU choose: ' + array_results[4]);
    player_score.textContent = ("Player Score: " + playerScore );
    cpu_score.textContent = ("CPU Score: " + computerScore);
    
}

