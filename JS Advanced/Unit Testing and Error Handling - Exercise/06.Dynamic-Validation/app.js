function validate() {
  const emailRef = document.getElementById("email");
  const emailRegExp = /[\w]+@[a-z]+\.[a-z]{2,3}/gm;

  emailRef.addEventListener("change", validateEmail);

  function validateEmail() {
    if (!emailRef.value.match(emailRegExp)) {
      emailRef.classList.add("error");
    } else {
      emailRef.classList.remove("error");
    }
  }
}
