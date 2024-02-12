function attachGradientEvents() {
  const box = document.getElementById("gradient-box");
  const result = document.getElementById("result");

  box.addEventListener("mousemove", (e) => {
    result.textContent =
      Math.floor((e.offsetX / e.target.clientWidth) * 100) + "%";
  });
}
