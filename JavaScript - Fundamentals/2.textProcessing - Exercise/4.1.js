function substring(word, text) {
  let textArr = text.toLowerCase().split(" ");
  let isFound = false;

  for (el of textArr) {
    if (textArr.includes(word)) {
      isFound = true;
      break;
    }
  }

  if (isFound) {
    console.log(`${word}`);
  } else {
    console.log(`${word} not found!`);
  }
}
substring("javascript", "JavaScript is the best programming language");
substring("python", "JavaScript is the best programming language");
