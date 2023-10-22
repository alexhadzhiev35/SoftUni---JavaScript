function upper(text) {
  let regex = /[A-Za-z0-9]+/gm;

  let matchedWords = text.match(regex);
  let upper = matchedWords.map((el) => (el = el.toUpperCase()));

  console.log(upper.join(", "));
}
upper("Hi, how are you?");
