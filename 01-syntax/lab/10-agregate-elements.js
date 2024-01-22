function aggregateElements(inputArr) {
  const arrSum = inputArr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  const inverseSum = inputArr.reduce(
    (accumulator, currentValue) => accumulator + 1 / currentValue,
    0
  );

  const concatArr = inputArr.join("");

  console.log(arrSum);
  console.log(inverseSum);
  console.log(concatArr);
}

aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);
