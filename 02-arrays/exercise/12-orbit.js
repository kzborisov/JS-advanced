function orbit(input) {
  const [width, height, x, y] = input;

  const matrix = Array(width)
    .fill()
    .map(() => Array(height).fill());

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      matrix[i][j] = Math.max(Math.abs(i - x), Math.abs(j - y)) + 1;
    }
  }

  matrix.forEach((row) => console.log(row.join(" ")));
}

orbit([4, 4, 0, 0]);
console.log("--------------- SEPARATOR -------------------");
orbit([5, 5, 2, 2]);
console.log("--------------- SEPARATOR -------------------");
orbit([3, 3, 2, 2]);
