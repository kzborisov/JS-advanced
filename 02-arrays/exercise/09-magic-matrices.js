function magicMatrices(matrix) {
  let magicSum = Number.MIN_SAFE_INTEGER;

  for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
    let rowSum = 0;
    let colSum = 0;

    for (let colIndex = 0; colIndex < matrix.length; colIndex++) {
      rowSum += matrix[rowIndex][colIndex];
      colSum += matrix[colIndex][rowIndex];
    }

    if (magicSum === Number.MIN_SAFE_INTEGER) {
      magicSum = rowSum;
    }

    if (rowSum !== magicSum) {
      return false;
    }
  }

  return true;
}

console.log(
  magicMatrices([
    [0, 0],
    [0, 0],
  ])
);

console.log(
  magicMatrices([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1],
  ])
);

console.log(
  magicMatrices([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0],
  ])
);
