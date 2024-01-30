function toggle() {
  const button = document.getElementsByClassName("button")[0];
  const text = document.getElementById("extra");

  if (button.textContent === "Less") {
    button.textContent = "More";
    text.style.display = "none";
  } else {
    button.textContent = "Less";
    text.style.display = "block";
  }
}
