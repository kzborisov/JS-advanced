function spiralMatrix(width, height) {
  const matrix = Array(width)
    .fill(1)
    .map(() => Array(height).fill(1));

  let counter = 1;
  let startRow = 0;
  let endRow = width - 1;
  let startCol = 0;
  let endCol = height - 1;

  while (startCol <= endCol && startRow <= endRow) {
    for (let i = startCol; i <= endCol; i++) {
      matrix[startRow][i] = counter;
      counter++;
    }
    startRow++;

    for (let i = startRow; i <= endRow; i++) {
      matrix[i][endCol] = counter;
      counter++;
    }
    endCol--;

    for (let i = endCol; i >= startCol; i--) {
      matrix[endRow][i] = counter;
      counter++;
    }

    endRow--;

    for (let i = endRow; i >= startRow; i--) {
      matrix[i][startCol] = counter;
      counter++;
    }
    startCol++;
  }

  matrix.forEach((row) => console.log(row.join(" ")));
}

spiralMatrix(3, 3);
spiralMatrix(5, 5);
