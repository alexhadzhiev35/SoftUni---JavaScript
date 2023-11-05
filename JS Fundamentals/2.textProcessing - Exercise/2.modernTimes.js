function modernTimes(input) {
  let inputArray = input.split(" ");

  for (let word of inputArray) {
    if (word.startsWith("#") && word.length > 1) {
      let wordsArray = word.split("");
      wordsArray.shift();

      let wordToPrint = "";

      for (let char of wordsArray) {
        if (!isNaN(char)) {
          wordToPrint = "";
          break;
        } else {
          wordToPrint += char;
        }
      }

      if (wordToPrint.length > 0) {
        console.log(wordToPrint);
      }
    }
  }
}
modernTimes("Nowadays everyone uses # to tag a #special word in #socialMedia");
