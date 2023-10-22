function addItem() {
  const list = document.getElementById("items");
  const textInput = document.getElementById("newItemText");

  const newListItem = document.createElement("li");
  newListItem.textContent = textInput.value;

  list.appendChild(newListItem);
  textInput.value = "";
}
