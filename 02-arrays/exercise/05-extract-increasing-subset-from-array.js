function extractSubset(arr) {
  let biggest = arr[0];
  const result = [];

  for (const el of arr) {
    if (el < biggest) {
      continue;
    }

    biggest = el;
    result.push(biggest);
  }
  return result;
}

console.log(extractSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]));
console.log(extractSubset([1, 2, 3, 4]));
