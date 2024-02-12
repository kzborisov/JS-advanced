function create(words) {
  const content = document.getElementById("content");

  for (let word of words) {
    const p = document.createElement("p");
    p.textContent = word;
    p.style.display = "none";
    const div = document.createElement("div");
    div.appendChild(p);
    content.appendChild(div);

    div.addEventListener("click", () => {
      p.style.display = "block";
    });
  }
}
