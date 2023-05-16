function sum(input) {
  let sumPrimeNumbers = 0;
  let sumNonPrimeNumbers = 0;

  let index = 0;
  let command = input[index];
  index++;

  while (command !== "stop") {
    let curNum = Number(command);

    if (curNum < 0) {
      console.log(`Number is negative.`);
      command = input[index];
      index++;
      continue;
    }

    let isPrime = true;

    for (let divisor = 2; divisor < curNum; divisor++) {
      if (curNum % divisor === 0) {
        isPrime = false;
      }
    }

    if (isPrime === true) {
      sumPrimeNumbers += curNum;
    } else {
      sumNonPrimeNumbers += curNum;
    }
    command = input[index];
    index++;
  }

  console.log(`Sum of all prime numbers is: ${sumPrimeNumbers}`);
  console.log(`Sum of all non prime numbers is: ${sumNonPrimeNumbers}`);
}
sum(["3", "9", "0", "7", "19", "4", "stop"]);
sum(["30", "83", "33", "-1", "20", "stop"]);
