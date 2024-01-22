function listOfNames(arr) {
  console.log(
    arr
      .sort((a, b) => a.localeCompare(b))
      .map((el, idx) => `${idx + 1}.${el}`)
      .join("\n")
  );
}

listOfNames(["John", "Bob", "Christina", "Ema"]);
