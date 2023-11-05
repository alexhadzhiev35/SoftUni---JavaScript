function evenOdd(input) {
  let sumEven = 0;
  let sumOdd = 0;

  for (let i = 0; i < input.length; i++) {
    let curNum = input[i];
    if (curNum % 2 === 0) {
      sumEven += curNum;
    } else {
      sumOdd += curNum;
    }
  }

  console.log(sumEven - sumOdd);
}
evenOdd([2, 4, 6, 8, 10]);
