function extractText() {
  const items = Array.from(document.getElementById("items").children);
  const textArea = document.getElementById("result");

  const result = items.map((item) => item.textContent).join("\n");
  textArea.value = result;
}
