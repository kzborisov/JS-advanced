function equalNeighbors(matrix) {
  let pairsCount = 0;

  for (let row = 0; row < matrix.length - 1; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === matrix[row + 1][col]) {
        pairsCount++;
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length - 1; j++) {
      if (matrix[i][j] === matrix[i][j + 1]) {
        pairsCount++;
      }
    }
  }

  return pairsCount;
}

console.log(
  equalNeighbors([
    ["2", "2", "5", "7", "4"],
    ["2", "0", "8", "3", "1"],
    ["3", "2", "1", "3", "1"],
  ])
);
// console.log(
//   equalNeighbors([
//     ["4", "0", "5", "3", "4"],
//     ["2", "3", "5", "4", "2"],
//     ["9", "8", "7", "5", "4"],
//   ])
// );

// console.log(
//   equalNeighbors([
//     ["test", "yes", "yo", "ho"],
//     ["well", "done", "yo", "6"],
//     ["not", "done", "yet", "5"],
//   ])
// );
