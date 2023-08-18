function oddAndEvenSum(num) {
  let numAsString = num.toString();
  let oddSum = 0;
  let evenSum = 0;
  let numAsStringLength = numAsString.length;

  for (let i = 0; i < numAsStringLength; i++) {
    let curNumber = Number(numAsString[i]);

    if (curNumber % 2 === 0) {
      evenSum += curNumber;
    } else {
      oddSum += curNumber;
    }
  }

  return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
}
oddAndEvenSum(1000435);
