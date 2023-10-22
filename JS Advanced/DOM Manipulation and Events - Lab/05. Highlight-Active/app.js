function focused() {
  const inputFields = document.querySelectorAll("input");

  console.log(inputFields);

  for (let inputField of inputFields) {
    inputField.addEventListener("focus", (e) => {
      parentDiv = e.target.parentNode;
      parentDiv.classList.add("focused");
    });

    inputField.addEventListener("blur", (e) => {
      parentDiv = e.target.parentNode;
      parentDiv.classList.remove("focused");
    });
  }
}
