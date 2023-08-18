function shoppingList(commands) {
  let list = commands.shift().split("!");
  //   console.log(list);
  //   console.log(commands);

  let command = commands.shift();

  while (command !== "Go Shopping!") {
    let [option, item, newItem] = command.split(" ");

    switch (option) {
      case "Urgent":
        if (list.indexOf(item) === -1) {
          list.unshift(item);
        }
        break;
      case "Unnecessary":
        if (list.indexOf(item) !== -1) {
          list.splice(list.indexOf(item), 1);
        }
        break;
      case "Correct":
        if (list.indexOf(item) !== -1) {
          list.splice(list.indexOf(item), 1, newItem);
        }
        break;
      case "Rearrange":
        if (list.includes(item)) {
          theItem = list.splice(list.indexOf(item), 1);
          list.push(...theItem);
        }
        break;
    }

    command = commands.shift();
  }

  console.log(list.join(", "));
}
shoppingList([
  "Tomatoes!Potatoes!Bread",
  "Unnecessary Milk",
  "Urgent Tomatoes",
  "Go Shopping!",
]);
