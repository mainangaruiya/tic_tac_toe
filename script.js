// Game state
let board = [['', '', ''], ['', '', ''], ['', '', '']];
let currentPlayer = 'X';
let gameOver = false;

// Function to make a move
function makeMove(row, col) {
  // Check if the cell is already occupied or the game is over
  if (board[row][col] !== '' || gameOver) {
    return;
  }

  // Update the board and display the move
  board[row][col] = currentPlayer;
  event.target.textContent = currentPlayer;

  // Check for a winner or a tie
  if (checkWinner(currentPlayer)) {
    document.getElementById('message').textContent = 'Player ' + currentPlayer + ' wins!';
    gameOver = true;
  } else if (checkTie()) {
    document.getElementById('message').textContent = 'It\'s a tie!';
    gameOver = true;
  }

  // Switch to the next player
  currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
}

// Function to check for a winner
function checkWinner(player) {
  // Check rows
  for (let i = 0; i < 3; i++) {
    if (board[i][0] === player && board[i][1] === player && board[i][2] === player) {
      return true;
    }
  }

  // Check columns
  for (let j = 0; j < 3; j++) {
    if (board[0][j] === player && board[1][j] === player && board[2][j] === player) {
      return true;
    }
  }

  // Check diagonals
  if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
    return true;
  }
  if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
    return true;
  }

  return false;
}

// Function to check for a tie
function checkTie() {
  for (let row of board) {
    if (row.includes('')) {
      return false;
    }
  }
  return true;
}

