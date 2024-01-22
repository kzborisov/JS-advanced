function fruit(fruitType, weightInGr, pricePerKg) {
  const weightInKg = weightInGr / 1000;
  const price = weightInKg * pricePerKg;
  return `I need $${price.toFixed(2)} to buy ${weightInKg.toFixed(
    2
  )} kilograms ${fruitType}.`;
}

console.log(fruit("orange", 2500, 1.8));

console.log(fruit("apple", 1563, 2.35));
