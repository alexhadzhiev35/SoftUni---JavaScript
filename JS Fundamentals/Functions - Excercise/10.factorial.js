function factorial(firstNum, secondNum) {
  function factoriall(number) {
    if (number === 0) {
      return 1;
    } else {
      return number * factoriall(number - 1);
    }
  }

  let firstNumFactorial = factoriall(firstNum);
  let secondNumFactorial = factoriall(secondNum);

  console.log((firstNumFactorial / secondNumFactorial).toFixed(2));
}

factorial(5, 2);
