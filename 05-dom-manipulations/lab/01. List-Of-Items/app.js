function addItem() {
  const list = document.getElementById("items");
  const input = document.getElementById("newItemText");

  if (!input.value) {
    return;
  }

  const liElement = document.createElement("li");
  liElement.textContent = input.value;
  list.appendChild(liElement);

  input.value = "";
}
