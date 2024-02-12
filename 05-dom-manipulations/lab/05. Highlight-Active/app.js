function focused() {
  const inputs = Array.from(document.querySelectorAll('[type="text"]'));

  inputs.forEach((input) => {
    input.addEventListener("focus", (e) => {
      const div = e.target.parentElement;
      div.classList.add("focused");
    });

    input.addEventListener("blur", (e) => {
      const div = e.target.parentElement;
      div.classList.remove("focused");
    });
  });
}
