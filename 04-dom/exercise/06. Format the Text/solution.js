function solve() {
  const text = document
    .getElementById("input")
    .value.split(". ")
    .filter((sentence) => sentence);
  const output = document.getElementById("output");
  output.innerHTML = "";

  while (text.length > 0) {
    const sentence = text.splice(0, 3).join(". ");
    output.innerHTML += `<p>${sentence}.</p>`;
  }
}
