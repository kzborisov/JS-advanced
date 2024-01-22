function evenPositionElement(arr) {
  console.log(arr.filter((_, idx) => idx % 2 === 0).join(" "));
}

evenPositionElement(["20", "30", "40", "50", "60"]);
evenPositionElement(["5", "10", "20", "40"]);
