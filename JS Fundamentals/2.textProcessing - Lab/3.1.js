function censored(text, word) {
  let result = text.split(word);
  let last = result.join("*".repeat(word.length));

  console.log(last);
}
censored("A small sentence with some words", "small");
