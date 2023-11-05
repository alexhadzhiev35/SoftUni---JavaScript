function right(guess, char, right) {
  let res = guess.replace("_", char);
  if (res === right) {
    console.log("Matched");
  } else {
    console.log("Not Matched");
  }
}
right("Str_ng", "i", "String");
