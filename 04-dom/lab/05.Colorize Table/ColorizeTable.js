function colorize() {
  const table = document.querySelectorAll("table tr");

  for (let idx = 1; idx < table.length; idx += 2) {
    table[idx].style.background = "teal";
  }
}
