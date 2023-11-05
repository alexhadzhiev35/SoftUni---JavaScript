function occurrences(text, word) {
  let str = text.split(" ");
  let count = 0;

  for (el of str) {
    if (el === word) {
      count++;
    }
  }

  console.log(count);
}
occurrences("This is a word and it also is a sentence", "is");
