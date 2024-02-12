function deleteByEmail() {
  const tableRows = Array.from(document.querySelectorAll("table tbody tr"));
  const input = document.querySelector('[name="email"]');
  const output = document.getElementById("result");
  let isFound = false;

  for (const row of tableRows) {
    if (row.children[1].textContent == input.value) {
      row.remove();
      isFound = true;
      input.value = "";
    }
  }

  if (isFound) {
    output.textContent = "Deleted.";
  } else {
    output.textContent = "Not found.";
  }
}
