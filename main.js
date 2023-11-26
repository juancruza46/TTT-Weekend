// Define required constants
const colors  = {
    '1': 'purple' ,
    '-1': 'pink', 
    'null': 'white'
};

//Possible winning combinations: vertical, horizontal, diagonal
const winningCombonations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

// Define required variables used to track the state of the game
let board;
let playersTurn;
let winner;

// Store elements on the page that will be accessed in code more than once in variables to make code more concise, readable and performant.
const text = document.querySelector('h1');
const buttonNewGame = document.querySelector('button');

// Upon loading the app should wait for users interaction
document.getElementById('gameBoard').addEventListener('click', handleMove);
buttonNewGame.addEventListener('click', begin);
  

// Handle a player clicking a square


// Handle a player clicking the replay button