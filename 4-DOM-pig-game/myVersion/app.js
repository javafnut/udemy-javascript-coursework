/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

Summary:
- How to create fundamental game variables;
- How to generate a random number;
- How to manipulate the DOM
- How to change CSS Styles
*/


let scores, roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

init();



// create an anonymous function
document.querySelector('.btn-roll').addEventListener('click',function(){

    let  dice = (Math.floor(Math.random() * 6) + 1);

    let diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice +  '.png';


    if (dice != 1){
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        nextPlayer();
    }

});

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;


    document.querySelector('current-0').textContent = 0;
    document.querySelector('current-0').textContent = 0;

    document.querySelector('')


}

function init() {

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
}

//document.querySelector('#current-' + activePlayer).textContent = dice;


