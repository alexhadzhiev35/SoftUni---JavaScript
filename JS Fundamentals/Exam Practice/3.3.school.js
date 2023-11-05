function school(input) {
  let shelf = input.shift().split("&");
  // console.log(shelf);

  let book;
  let command = input.shift();

  while (command !== "Done") {
    let [action, firstBook, secondBook] = command.split(" | ");
    let actionArr = action.split(" ");
    let option = actionArr[0];

    switch (option) {
      case "Add":
        book = firstBook;
        if (!shelf.includes(book)) {
          shelf.unshift(book);
        }
        break;
      case "Take":
        book = firstBook;
        if (shelf.includes(book)) {
          shelf.splice(shelf.indexOf(book), 1);
        }
        break;
      case "Swap":
        let book1 = firstBook;
        let book2 = secondBook;
        if (shelf.includes(book1) && shelf.includes(book2)) {
          let index1 = shelf.indexOf(book1);
          let index2 = shelf.indexOf(book2);

          let temp = shelf[index1];
          shelf[index1] = shelf[index2];
          shelf[index2] = temp;
        }
        break;
      case "Insert":
        book = firstBook;
        if (!shelf.includes(book)) {
          shelf.push(book);
        }
        break;
      case "Check":
        let index = firstBook;
        if (index >= 0 && index < shelf.length) {
          console.log(`${shelf[index]}`);
        }
        break;
    }

    command = input.shift();
  }

  console.log(shelf.join(", "));
}
school([
  "Don Quixote&The Great Gatsby&Moby Dick",

  "Add Book | Ulysses",

  "Take Book | Don Quixote",

  "Insert Book | Alice's Adventures in Wonderland",
  "Done",
]);
