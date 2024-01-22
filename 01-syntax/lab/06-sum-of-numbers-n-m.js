function sumOfNumber(n, m) {
  let result = 0;
  const start = Number(n);
  const finish = Number(m);

  for (let i = start; i <= finish; i++) {
    result += i;
  }
  return result;
}

console.log(sumOfNumber("1", "5"));
console.log(sumOfNumber("-8", "20"));
