function ticTacToe(moves) {
  const checkWinner = (board) => {
    for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
      // check rows
      if (
        board[rowIndex][0] === board[rowIndex][1] &&
        board[rowIndex][1] === board[rowIndex][2] &&
        board[rowIndex][0] !== false
      ) {
        return board[rowIndex][0];
      }

      // check primary diagonal
      if (
        board[0][0] === board[1][1] &&
        board[1][1] === board[2][2] &&
        board[0][0] !== false
      ) {
        return board[0][0];
      }

      // Check secondary diagonal
      if (
        board[0][2] === board[1][1] &&
        board[1][1] === board[2][0] &&
        board[0][2] !== false
      ) {
        return board[0][2];
      }

      //   Check cols
      if (
        board[0][rowIndex] === board[1][rowIndex] &&
        board[1][rowIndex] === board[2][rowIndex] &&
        board[0][rowIndex] !== false
      ) {
        return board[0][rowIndex];
      }

      return false;
    }
  };

  const switchPlayer = (currentPlayer) => (currentPlayer === "X" ? "O" : "X");

  const board = [
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ];
  let player = "X";
  let winner = checkWinner(board);

  for (const move of moves) {
    // check if board is full
    if (board.flat().every((el) => el)) {
      break;
    }
    const [row, col] = move.split(" ");

    if (board[row][col] !== false) {
      console.log("This place is already taken. Please choose another!");
      continue;
    }

    board[row][col] = player;
    winner = checkWinner(board);

    if (winner) {
      break;
    }
    player = switchPlayer(player);
  }

  if (!winner) {
    console.log("The game ended! Nobody wins :(");
  } else {
    console.log(`Player ${winner} wins!`);
  }

  for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
    console.log(
      `${board[rowIndex][0]}\t${board[rowIndex][1]}\t${board[rowIndex][2]}`
    );
  }
}

ticTacToe([
  "0 1",
  "0 0",
  "0 2",
  "2 0",
  "1 0",
  "1 1",
  "1 2",
  "2 2",
  "2 1",
  "0 0",
]);
console.log("----------------");

ticTacToe([
  "0 0",
  "0 0",
  "1 1",
  "0 1",
  "1 2",
  "0 2",
  "2 2",
  "1 2",
  "2 2",
  "2 1",
]);

console.log("----------------");
ticTacToe([
  "0 1",
  "0 0",
  "0 2",
  "2 0",
  "1 0",
  "1 2",
  "1 1",
  "2 1",
  "2 2",
  "0 0",
]);
