function addItem() {
  const newItemText = document.getElementById("newItemText");
  const newItemValue = document.getElementById("newItemValue");
  const select = document.getElementById("menu");

  const optionElement = document.createElement("option");
  optionElement.textContent = newItemText.value;
  optionElement.value = newItemValue.value;

  select.appendChild(optionElement);
  console.log(optionElement);

  newItemText.value = "";
  newItemValue.value = "";
}
