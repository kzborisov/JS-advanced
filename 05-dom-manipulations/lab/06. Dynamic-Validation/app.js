function validate() {
  const emailField = document.getElementById("email");
  const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;

  emailField.addEventListener("change", (e) => {
    if (pattern.test(e.target.value)) {
      e.target.classList.remove("error");
    } else {
      e.target.classList.add("error");
    }
  });
}
