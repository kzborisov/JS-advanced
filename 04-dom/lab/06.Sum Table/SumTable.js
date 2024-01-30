function sumTable() {
  const rows = document.querySelectorAll("table tbody tr");
  const total = document.getElementById("sum");
  let sum = 0;

  for (let i = 1; i < rows.length - 1; i++) {
    sum += Number(rows[i].children[1].textContent);
  }

  total.textContent = Number(sum);
}
