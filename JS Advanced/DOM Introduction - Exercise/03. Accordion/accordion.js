function toggle() {
  let button = document.querySelector(".button");
  let textField = document.getElementById("extra");

  button.textContent = button.textContent === "More" ? "Less" : "More";

  if (textField.style.display == "") {
    textField.style.display = "none";
  }

  textField.style.display =
    textField.style.display === "none" ? "block" : "none";
}
