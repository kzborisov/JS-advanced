function lockedProfile() {
  const profiles = document.querySelectorAll(".profile");

  for (profile of profiles) {
    const radioButtons = profile.querySelectorAll('[type="radio"]');
    const more = profile.querySelector("div");
    const btn = profile.querySelector("button");

    btn.addEventListener("click", () => {
      if (radioButtons[0].checked) return;
      more.style.display = btn.textContent === "Show more" ? "block" : "none";
      btn.textContent =
        btn.textContent === "Show more" ? "Hide it" : "Show more";
    });
  }
}
