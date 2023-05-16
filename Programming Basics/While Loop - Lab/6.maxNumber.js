function maxNumber(input) {
  let index = 0;
  let command = input[index];
  index++;

  let maxNum = Number.MIN_SAFE_INTEGER;

  while (command !== "Stop") {
    let currentNumber = Number(command);
    if (currentNumber > maxNum) {
      maxNum = currentNumber;
    }

    command = input[index];
    index++;
  }
  console.log(maxNum);
}
maxNumber(["-1", "-2", "Stop"]);
