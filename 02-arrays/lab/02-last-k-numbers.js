function lastKNumbers(n, k) {
  const result = [1];

  for (let idx = 1; idx < n; idx++) {
    const nextElement = result
      .slice(-k)
      .reduce((acc, currentValue) => acc + currentValue, 0);

    result.push(nextElement);
  }

  return result;
}

console.log(lastKNumbers(6, 3));
console.log(lastKNumbers(8, 2));
