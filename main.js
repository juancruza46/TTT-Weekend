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
document.getElementById('board').addEventListener('click', handleMove);
buttonNewGame.addEventListener('click', begin);

//function post clicked
begin();

function begin() {
    board = new Array(9).fill(null);
    turn = 1;
    winner = null;
    render();
}

//Update variables interacted with
function handleMove(evt) {
    const idx = parseInt(evt.target.id.replace('sq-', ''));
    if (
        isNaN(idx) ||
        board[idx] ||
        winner
    ) return;

//Update state + render
board[idx]= playersTurn;
playersTurn *= -1;
winner = getWinner();
render();
}
//Render results

function getWinner () {
    for (let winArr of winningCombonations){
        if(Math.abs(board[winArr[0]] + board[winArr[1]] + board[winArr[2]]) === 3)
        return board[winArr[0]];
    }

    if (board.includes(null)) return null;
    return 'T';
}
  

// Handle a player clicking a square


// Handle a player clicking the replay button