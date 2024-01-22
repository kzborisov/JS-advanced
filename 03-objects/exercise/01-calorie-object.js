function calorieObject(data) {
  const result = {};
  data.forEach((el, i, self) => {
    if (i % 2 === 0) {
      result[el] = 0;
    } else {
      result[self[i - 1]] = Number(el);
    }
  });
  console.log(result);
}

calorieObject(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
// calorieObject(["Potato", "93", "Skyr", "63", "Cucumber", "18", "Milk", "42"]);
