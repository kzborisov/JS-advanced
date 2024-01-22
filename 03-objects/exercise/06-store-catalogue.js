function storeCatalogue(data) {
  const catalogue = {};

  data.forEach((product) => {
    let [name, price] = product.split(" : ");
    price = Number(price);
    const key = name[0].toUpperCase();

    if (key in catalogue) {
      catalogue[key].push({ name, price });
      return;
    }
    catalogue[key] = [{ name, price }];
  });

  const orderedCatalogue = Object.keys(catalogue)
    .sort((a, b) => a.localeCompare(b))
    .reduce((obj, key) => {
      const products = catalogue[key];
      obj[key] = products.sort((a, b) => a.name.localeCompare(b.name));
      return obj;
    }, {});

  for (const key in orderedCatalogue) {
    console.log(key);
    orderedCatalogue[key].forEach((product) => {
      console.log(`  ${product.name}: ${product.price}`);
    });
  }
}

storeCatalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
