function cookingByNumbers(start, ...rest) {
  let result = Number(start);
  const cookingMap = {
    chop: () => (result *= 0.5),
    dice: () => (result = Math.sqrt(result)),
    spice: () => (result += 1),
    bake: () => (result *= 3),
    fillet: () => (result *= 0.8),
  };

  for (const cmd of rest) {
    cookingMap[cmd]();
    console.log(result);
  }
}

cookingByNumbers("9", "dice", "spice", "chop", "bake", "fillet");
