function getLowestPrices(data) {
  const lowestPrices = {};
  debugger;
  data.forEach((townData) => {
    let [townName, product, price] = townData.split(" | ");
    price = Number(price);

    if (product in lowestPrices) {
      if (price < lowestPrices[product].price) {
        lowestPrices[product] = { price, townName };
      }
    } else {
      lowestPrices[product] = { price, townName };
    }
  });

  for (const product in lowestPrices) {
    console.log(
      `${product} -> ${lowestPrices[product].price} (${lowestPrices[product].townName})`
    );
  }
}

// getLowestPrices([
//   "Sample Town | Sample Product | 1000",
//   "Sample Town | Orange | 2",
//   "Sample Town | Peach | 1",
//   "Sofia | Orange | 3",
//   "Sofia | Peach | 2",
//   "New York | Sample Product | 1000.1",
//   "New York | Burger | 10",
// ]);

getLowestPrices([
  "Sofia City | Audi | 100000",
  "Sofia City | BMW | 100000",
  "Sofia City | Mitsubishi | 10000",
  "Sofia City | Mercedes | 10000",
  "Sofia City | NoOffenseToCarLovers | 0",
  "Mexico City | Audi | 1000",
  "Mexico City | BMW | 99999",
  "Mexico City | Mitsubishi | 10000",
  "New York City | Mitsubishi | 1000",
  "Washington City | Mercedes | 1000",
]);
