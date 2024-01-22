function circleArea(num) {
  const inputType = typeof num;
  if (inputType !== "number") {
    return `We can not calculate the circle area, because we receive a ${inputType}.`;
  }

  const area = Math.PI * Math.pow(num, 2);
  return area.toFixed(2);
}

console.log(circleArea(5));
console.log(circleArea("name"));
