let userscore = 0;
let compscore = 0;
const userscore_span = document.getElementById('user-score');
const compscore_span = document.getElementById('comp-score');
const result_p = document.querySelector('.result > p');
const scoreboard_div = document.querySelector('.score-board');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');

function getcomputerchoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function win(userchoice, computerchoice) {
    userscore++;
    userscore_span.innerHTML = userscore;
    compscore_span.innerHTML = compscore;
    result_p.innerHTML = userchoice + '  beats ' + computerchoice + '  you win.';
}



function lose(userchoice, computerchoice) {
    compscore++;
    userscore_span.innerHTML = userscore;
    compscore_span.innerHTML = compscore;
    result_p.innerHTML = computerchoice + '  beats ' + userchoice + '  you lose.';
}

function draw(userchoice, computerchoice) {
    result_p.innerHTML = computerchoice + '  equals ' + userchoice + '  its a draw.'
   
}

function Game(userchoice) {
    const computerchoice = getcomputerchoice();
    switch (userchoice + computerchoice) {
        case 'rockscissors':
        case 'scissorspaper':
        case 'paperrock':
        win(userchoice, computerchoice);
    
            break;

        case 'scissorsrock':
        case 'paperscissors':
        case 'rockpaper':
        lose(userchoice, computerchoice);
           break;
          
        case 'rockrock' :
        case 'paperpaper':
        case 'scissorsscissors':
        draw(userchoice, computerchoice);
            break;
    }

}

Game();



function main() {
rock_div.addEventListener('click', function(){
    Game('rock');
})

paper_div.addEventListener('click', function(){
    Game('paper'); 
})

scissors_div.addEventListener('click', function(){
    Game('scissors');
})

}

main ();

