function library(input) {
  let books = input.shift().split("&");
  let command = input.shift();
  let book;

  while (command !== "Done") {
    let [action, book1, book2] = command.split(" | ");

    let bookName = book1 && book1.toString().trimStart();
    let bookName2 = book2 && book2.toString().trimStart();

    let com = action.split(" ")[0];

    let isHere = (b) => {
      return books.indexOf(b) !== -1;
    };
    let index = (b) => {
      return books.indexOf(b);
    };

    switch (com) {
      case "Add":
        if (!isHere(bookName)) {
          books.unshift(bookName);
        }
        break;
      case "Take":
        if (isHere(bookName)) {
          books.splice(index(bookName), 1);
        }
        break;
      case "Swap":
        if (isHere(bookName) && isHere(bookName2)) {
          let index1 = index(bookName);
          let index2 = index(bookName2);

          let temp = books[index1];
          books[index1] = books[index2];
          books[index2] = temp;
        }
        break;
      case "Insert":
        if (!isHere(bookName)) {
          books.push(bookName);
        }
        break;
      case "Check":
        let bookIndex = bookName;

        if (index(bookIndex)) {
          console.log(books[bookIndex]);
        }

        break;
    }

    command = input.shift();
  }

  console.log(books.join(", "));
}
library([
  "Anna Karenina&Heart of Darkness&Catch-22&The Stranger",

  "Add Book | Catch-22",

  "Swap Books | Anna Karenina | Catch-22",

  "Take Book | David Copperfield",

  "Done",
]);
