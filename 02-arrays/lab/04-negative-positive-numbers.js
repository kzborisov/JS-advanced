function negativePositiveNumbers(arr) {
  const sorted = arr.sort((a, b) => (a - b ? a : b));
  console.log(sorted.join("\n"));
}

negativePositiveNumbers([7, -2, 8, 9]);
negativePositiveNumbers([3, -2, 0, -1]);
