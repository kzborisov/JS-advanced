function search() {
  const rows = Array.from(document.getElementById("towns").children);
  const search = document.getElementById("searchText").value;
  const result = document.getElementById("result");
  let matches = 0;

  for (const row of rows) {
    if (row.textContent.match(search)) {
      row.style.textDecoration = "underline";
      row.style.fontWeight = "bold";
      matches++;
    } else {
      row.style.textDecoration = "initial";
      row.style.fontWeight = "initial";
    }
  }

  result.textContent = `${matches} matches found`;
}
