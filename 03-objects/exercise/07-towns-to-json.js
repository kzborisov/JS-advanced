function townsToJson(data) {
  data.shift();
  const result = data.map((element) => {
    let [name, latitude, longitude] = element
      .split("|")
      .filter((e) => e)
      .map((e, idx) => {
        const element = e.trim();
        return idx > 0 ? Number(Number(element).toFixed(2)) : element;
      });
    return { Town: name, Latitude: latitude, Longitude: longitude };
  });

  return JSON.stringify(result);
}

res = townsToJson([
  "| Town | Latitude | Longitude |",

  "| Veliko Turnovo | 43.0757 | 25.6172 |",

  "| Monatevideo | 34.50 | 56.11 |",
]);

console.log(res);
