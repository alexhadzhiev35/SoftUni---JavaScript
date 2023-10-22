function validate() {
  const inputEmail = document.getElementById("email");

  inputEmail.addEventListener("change", (e) => {
    const text = e.target.value;
    const regex = /[a-z]+@[a-z]+\.[a-z]{2,3}/gm;

    const valid = text.match(regex);

    if (!valid) {
      inputEmail.classList.add("error");
      return;
    }

    inputEmail.classList.remove("error");
  });
}
