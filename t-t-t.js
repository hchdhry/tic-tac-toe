const cell = document.querySelectorAll(".cell");

const gameboard = {
  board: Array(9).fill(''),    
};

const player = (symbol, value) => {
  function populate(player, index) {
    gameboard.board[index] = player;
  }

  return { symbol, value, populate };
};

const playerOne = player("X", 1);
const playerTwo = player("O", 2);

let currentPlayer = playerOne;

cell.forEach((div) => {
  div.addEventListener("click", () => {
    const index = parseInt(div.id);
    if (gameboard.board[index] === "") {
      currentPlayer.populate(currentPlayer.symbol, index);
      div.innerHTML = currentPlayer.symbol;
      currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;

      const winner = checkWinner(gameboard.board);
      if (winner) {
        console.log("Winner: ", winner);
      }
    }
  });
});

function checkWinner(board) {
  // check rows
  for (let i = 0; i < 9; i += 3) {
    if (board[i] !== '' && board[i] === board[i + 1] && board[i] === board[i + 2]) {
      return board[i];
     
    }
  }
  // check columns
  for (let i = 0; i < 3; i++) {
    if (board[i] !== '' && board[i] === board[i + 3] && board[i] === board[i + 6]) {
      return board[i];
  
    }
  }
  // check diagonals
  if (board[0] !== '' && board[0] === board[4] && board[0] === board[8]) {
    return board[0];
   
  }
  if (board[2] !== '' && board[2] === board[4] && board[2] === board[6]) {
    return board[2];
  
  }
  // no winner
  return null;
}