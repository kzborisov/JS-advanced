function addItem() {
  const list = document.getElementById("items");
  const input = document.getElementById("newItemText");

  if (!input.value) {
    return;
  }

  const liElement = document.createElement("li");
  liElement.textContent = input.value;

  const deleteElement = document.createElement("a");
  deleteElement.href = "#";
  deleteElement.textContent = "[Delete]";

  deleteElement.addEventListener("click", (e) => {
    e.target.parentElement.remove();
  });

  liElement.appendChild(deleteElement);
  list.appendChild(liElement);
  input.value = "";
}
