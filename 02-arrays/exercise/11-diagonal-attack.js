function diagonalAttack(input) {
  const printMatrix = (matrix) => {
    for (const row of matrix) {
      console.log(row.join(" "));
    }
  };

  let main = 0;
  let secondary = 0;
  const matrix = input.map((row) => row.split(" ").map((el) => Number(el)));

  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    main += row[i];
    secondary += row[row.length - 1 - i];
  }

  if (main == secondary) {
    for (let i = 0; i < matrix.length; i++) {
      const row = matrix[i];
      for (let j = 0; j < row.length; j++) {
        if (i === j || j === row.length - 1 - i) {
          continue;
        }
        matrix[i][j] = main;
      }
    }
  }

  printMatrix(matrix);
}
diagonalAttack([
  "5 3 12 3 1",
  "11 4 23 2 5",
  "101 12 3 21 10",
  "1 4 5 2 2",
  "5 22 33 11 1",
]);

diagonalAttack(["1 1 1", "1 1 1", "1 1 0"]);
