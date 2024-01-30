function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    const rows = document.querySelectorAll("table tbody tr");
    const search = document.getElementById("searchField");

    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      row.classList.remove("select");
      for (const element of Array.from(row.children)) {
        if (element.textContent.match(search.value)) {
          console.log(row);
          row.classList.add("select");
        }
      }
    }

    search.value = "";
  }
}
