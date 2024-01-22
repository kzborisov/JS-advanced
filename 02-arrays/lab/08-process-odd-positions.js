function processOddPosition(arr) {
  console.log(
    arr
      .filter((c, i) => i % 2)
      .map((el) => el * 2)
      .reverse()
      .join(" ")
  );
}

processOddPosition([10, 15, 20, 25]);

processOddPosition([3, 0, 10, 4, 7, 3]);
