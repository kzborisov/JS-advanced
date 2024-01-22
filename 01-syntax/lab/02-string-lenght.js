function stringLength(firstStr, secondStr, thirdStr) {
  const lengthSum = firstStr.length + secondStr.length + thirdStr.length;
  const averageLength = lengthSum / 3;
  console.log(lengthSum);
  console.log(Math.floor(averageLength));
}

stringLength("chocolate", "ice cream", "cake");
stringLength("pasta", "5", "22.3");
