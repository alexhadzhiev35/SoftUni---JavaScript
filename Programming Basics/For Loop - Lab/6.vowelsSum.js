function vowelsSum(input) {
  let text = input[0];
  let summ = 0;

  for (i = 0; i < text.length; i++) {
    let ch = text[i];
    switch (ch) {
      case "a":
        summ += 1;
        break;
      case "e":
        summ += 2;
        break;
      case "i":
        summ += 3;
        break;
      case "o":
        summ += 4;
        break;
      case "u":
        summ += 5;
        break;
    }
  }
  console.log(summ);
}

vowelsSum(["hello"]);
