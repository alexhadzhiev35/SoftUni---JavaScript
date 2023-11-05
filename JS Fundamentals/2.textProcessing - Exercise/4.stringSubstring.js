function substring(word, text) {
  let textArr = text.split(" ");

  let isFound = false;

  for (let el of textArr) {
    if (word.toLowerCase() === el.toLowerCase()) {
      isFound = true;
      break;
    }
  }

  if (isFound) {
    console.log(word);
  } else {
    console.log(`${word} not found!`);
  }
}
substring("javascript", "JavaScript is the best programming language");
substring("python", "JavaScript is the best programming language");
