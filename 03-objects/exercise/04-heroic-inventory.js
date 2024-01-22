function heroicInventory(data) {
  const heroesList = [];
  data.forEach((heroData) => {
    let [name, level, items] = heroData.split(" / ");
    level = Number(level);
    items = items ? items.split(", ") : [];
    heroesList.push({ name, level, items });
  });

  return JSON.stringify(heroesList);
}

const res = heroicInventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);

console.log(res);
