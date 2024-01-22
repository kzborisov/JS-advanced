function sortArray(arr) {
  const sortingFunction = (a, b) => {
    if (a.length > b.length) return 1;
    if (a.length < b.length) return -1;

    return a.localeCompare(b);
  };
  arr.sort((a, b) =>
    a.length === b.length ? a.localeCompare(b) : a.length - b.length
  );
  console.log(arr.sort(sortingFunction).join("\n"));
}

sortArray(["alpha", "beta", "gamma"]);
sortArray(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
sortArray(["test", "Deny", "omen", "Default"]);
