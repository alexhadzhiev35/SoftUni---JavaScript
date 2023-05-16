function sumPrimeAndNonPrimeNumbers(input) {
  let primeSum = 0;
  let nonPrimeSum = 0;
  let i = 0;

  while (input[i] !== "stop") {
    const num = parseInt(input[i]);
    if (!isNaN(num)) {
      if (num < 0) {
        console.log("Number is negative.");
        i++;
        continue;
      }
      let isPrime = true;
      if (num < 2) {
        isPrime = false;
      } else {
        for (let j = 2; j < num; j++) {
          if (num % j === 0) {
            isPrime = false;
            break;
          }
        }
      }
      if (isPrime) {
        primeSum += num;
      } else {
        nonPrimeSum += num;
      }
    }
    i++;
  }

  console.log("Sum of all prime numbers is:", primeSum);
  console.log("Sum of all non prime numbers is:", nonPrimeSum);
}
sumPrimeAndNonPrimeNumbers(["3", "9", "0", "7", "19", "4", "stop"]);
