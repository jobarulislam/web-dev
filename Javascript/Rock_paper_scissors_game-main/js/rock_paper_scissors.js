let score = JSON.parse(localStorage.getItem('score'));
let computerMove ='';
let playerMove = '';
let result = '';
if (!score) {
    score = {
        wins: 0,
        losses: 0,
        ties: 0,
        totalplay: 0
    };
}
let isautoplaying = false;
let intervalId;

document.querySelector('.js-R-button').addEventListener('click', ()=>{
    playGame('rock');
});

document.querySelector('.js-P-button').addEventListener('click', ()=>{
    playGame('paper');
});

document.querySelector('.js-S-button').addEventListener('click', ()=>{
    playGame('scissors');
});

document.querySelector('.restart').addEventListener('click', ()=>{
    restart();
});

document.querySelector('.autoplay').addEventListener('click', () => {
    autoplay();
});

document.body.addEventListener('keypress',(event) => {
 if(event.key === 'r' ){
    playGame('rock');
 }
 else if(event.key === 'p'){
    playGame('paper');
 }
 else if(event.key === 's'){
    playGame('scissors');
 }
} );
function autoplay(){
    if (!isautoplaying){
intervalId = setInterval(
        () => {
            const moves = ['rock', 'paper', 'scissors'];
            const randomMove = moves[Math.floor(Math.random() * 3)];
            playGame(randomMove);
        }, 300
    );
    isautoplaying =true;
    }
    else{
        clearInterval(intervalId);
        isautoplaying = false;
    }
    
}

function pickComputerMove()
{
     const randomNumber = Math.random();
        
        if (randomNumber >= 0 && randomNumber <1/3)
        {
            computerMove = 'rock';
        }
        else if(randomNumber >= 1 /3 && randomNumber < 2/ 3 && randomNumber < 1)
        {
            computerMove ='paper';
        }
        else if (randomNumber >= 2/3 && randomNumber < 1)
        {
            computerMove = 'scissors';
        }
}

function playGame(Move)
{   playerMove = Move;
    pickComputerMove();
    if (playerMove === 'rock')
    {
        if (computerMove === 'rock')
        {
            result = 'Tie.';
        }
        else if (computerMove === 'paper')
        {
            result = 'Lose.';
        }
        else if (computerMove === 'scissors')
        {
            result = 'Win.';
        }
    }
    else if (playerMove === 'paper')
    {
        if (computerMove === 'rock')
        {
            result = 'Win.';
        }
        else if (computerMove === 'paper')
        {
            result = 'Tie.';
        }
        else if (computerMove === 'scissors')
        {
            result = 'Lose.';
        }
    }
    else if ( playerMove === 'scissors')
    {
        if (computerMove === 'rock')
        {
            result = 'Lose.';
        }
        else if (computerMove === 'paper')
        {
            result = 'Win.';
        }
        else if (computerMove === 'scissors')
        {
            result = 'Tie.';
        }
    }
    scores();
    UpdateScore();

}
function scores(){
if(result === 'You win.')
{
    score.wins += 1;
}
else if (result === 'You lose.')
{
    score.losses += 1;
}
else if (result === 'Tie.')
{
    score.ties += 1;
}
score.totalplay = score.wins + score.losses + score.ties ;
 localStorage.setItem('score' , JSON.stringify(score));
}

function restart()
{
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    score.totalplay = 0;
    localStorage.setItem('score', JSON.stringify(score));
    UpdateScore();
}
function UpdateScore() {
    document.querySelector('.outcome').innerHTML = result;

    document.querySelector('.playerMove').innerHTML = `
        You
        <img class="img" src="../rock-paper-scissor_img/${playerMove}-emoji.png">
    `;

    document.querySelector('.computerMove').innerHTML = `
        Computer
        <img class="img" src="../rock-paper-scissor_img/${computerMove}-emoji.png">
    `;

    document.querySelector('.score').innerHTML = `
        win : ${score.wins}. losses : ${score.losses}. tie : ${score.ties}.
        total Play : ${score.totalplay}.
    `;
}

