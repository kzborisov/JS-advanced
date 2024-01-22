function sortingNumber(arr) {
  const result = [];
  const inputCopy = arr.slice();

  while (inputCopy.length !== 0) {
    let num = Number.NEGATIVE_INFINITY;

    if (result.length % 2 === 0) {
      num = Math.min(...inputCopy);
    } else {
      num = Math.max(...inputCopy);
    }
    inputCopy.splice(inputCopy.indexOf(num), 1);
    result.push(num);
  }
  return result;
}

console.log(sortingNumber([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
