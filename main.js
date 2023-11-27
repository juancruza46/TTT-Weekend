//Define required constants
const colors = {
    '1': 'purple' ,
   '-1': 'pink',
    'null': 'white'
  };
  
  let board;
  let playersTurn;
  let winner;
   
  //Possible winning combinations: vertical, horizontal, diagonal
  const possibleCombonations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  
  //Store elements on the page that will be accessed in code more than once in variables to make code more concise, readable and performant.
  const text = document.querySelector('h1');
  const playButton = document.querySelector('button');

  //Event Listeners
  document.getElementById('board').addEventListener('click', handleMove);
  playButton.addEventListener('click', initialize);
  
  //Add functions to recieve game results
  initialize();
  
  function initialize() {
    board = new Array(9).fill(null);
    playersTurn = 1;
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
    board[idx] = playersTurn;
    playersTurn *= -1;
    winner = winnerResults();
    render();
  }
  //Render results
  function winnerResults() {
    for (let winArr of possibleCombonations) {
      if (Math.abs(board[winArr[0]] + board[winArr[1]] + board[winArr[2]]) === 3) return board[winArr[0]];
    }
    if (board.includes(null)) return null;
    return 'T';
  }
  
  // Visualize all state and info in the DOM
  function render() {
    renderBoard();
    renderText();
    playButton.disabled = !winner;
  }
  
  function renderBoard() {
    board.forEach(function(sqVal, idx) {
      const squareEl = document.getElementById(`sq-${idx}`);
      squareEl.style.backgroundColor = colors[sqVal];
      squareEl.className = !sqVal ? 'avail' : '';
    });
  }
  
  function renderText() {
    if (winner === 'T') {
      text.innerHTML = 'STALEMATE';
    } else if (winner) {
      text.innerHTML = `WINNER WINNER CHICKEN DINNER CONGRATS <span style="color: ${colors[winner]}">${colors[winner].toUpperCase()}</span>!`;
    } else {
      text.innerHTML = `<span style="color: ${colors[playersTurn]}">${colors[playersTurn].toUpperCase()}</span>'s Turn`;
    }
  }
  