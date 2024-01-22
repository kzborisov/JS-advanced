function sameNumbers(nums) {
  const numsAsString = String(nums);
  const sum = numsAsString
    .split("")
    .reduce((acc, currentValue) => Number(acc) + Number(currentValue), 0);

  const isSame = new Set(numsAsString).size > 1 ? false : true;
  console.log(isSame);
  console.log(sum);
}

sameNumbers(2222222);
sameNumbers(1234);
