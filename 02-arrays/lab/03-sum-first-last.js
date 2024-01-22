function sumFirstLast(arr) {
  return Number(arr[arr.length - 1]) + Number(arr[0]);
}

console.log(sumFirstLast(["20", "30", "40"]));
console.log(sumFirstLast(["5", "10"]));
