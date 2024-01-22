function townPopulation(data) {
  const result = {};
  data.forEach((el) => {
    const [name, population] = el.split(" <-> ");
    if (name in result) {
      result[name] += Number(population);
      return;
    }
    result[name] = Number(population);
  });

  for (const town in result) {
    console.log(`${town} : ${result[town]}`);
  }
}

townPopulation([
  "Sofia <-> 1200000",
  "Montana <-> 20000",
  "New York <-> 10000000",
  "Washington <-> 2345000",
  "Las Vegas <-> 1000000",
]);

console.log("------------");
townPopulation([
  "Istanbul <-> 100000",
  "Honk Kong <-> 2100004",
  "Jerusalem <-> 2352344",
  "Mexico City <-> 23401925",
  "Istanbul <-> 1000",
]);
