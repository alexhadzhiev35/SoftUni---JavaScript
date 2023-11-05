function sumEvenNumbers(input) {
  let sum = 0;

  for (let i = 0; i < input.length; i++) {
    let curNum = Number(input[i]);
    if (curNum % 2 === 0) {
      sum += curNum;
    }
  }

  console.log(sum);
}

sumEvenNumbers(["2", "4", "6", "8", "10"]);
