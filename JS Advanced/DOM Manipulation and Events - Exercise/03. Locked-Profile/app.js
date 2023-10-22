function lockedProfile() {
  const btns = document.querySelectorAll(".profile button");

  for (const btn of btns) {
    btn.addEventListener("click", showHide);
  }

  function showHide(e) {
    const btn = e.target;
    const profile = btn.parentNode;
    const moreInfo = profile.getElementsByTagName("div")[0];
    const lockStatus = profile.querySelector(
      'input[type="radio"]:checked'
    ).value;

    if (lockStatus === "unlock") {
      if (btn.textContent === "Show more") {
        moreInfo.style.display = "inline-block";
        btn.textContent = "Hide it";
      } else if (btn.textContent === "Hide it") {
        moreInfo.style.display = "none";
        btn.textContent = "Show more";
      }
    }
  }
}
