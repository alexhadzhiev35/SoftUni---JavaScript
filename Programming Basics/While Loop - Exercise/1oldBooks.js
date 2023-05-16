function oldBooks(input) {
  let index = 0;

  let searchedBook = input[index];
  index++;

  let found = false;

  let i = 0;

  let command = input[index];
  index++;

  let isFound = false;

  while (command !== "No More Books") {
    let currentBook = command;
    if (searchedBook === currentBook) {
      isFound = true;
      break;
    }
    command = input[index];
    index++;
    i++;
  }

  if (!isFound) {
    console.log("The book you search is not here!");
    console.log(`You checked ${i} books.`);
  } else {
    console.log(`You checked ${i} books and found it.`);
  }
}
oldBooks([
  "The Spot",
  "Hunger Games",
  "Harry Potter",
  "Torronto",
  "Spotify",
  "No More Books",
]);

oldBooks(["Troy", "Stronger", "Life Style", "Troy"]);
