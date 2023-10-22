function addItem() {
  const itemList = document.getElementById("items");
  const inputText = document.getElementById("newItemText");

  const newLiEl = document.createElement("li");
  newLiEl.textContent = inputText.value;
  const deleteEl = document.createElement("a");
  deleteEl.textContent = "[Delete]";
  deleteEl.href = "#";
  newLiEl.appendChild(deleteEl);

  itemList.appendChild(newLiEl);

  deleteEl.addEventListener("click", (e) => e.target.parentNode.remove());

  inputText.value = "";
}
