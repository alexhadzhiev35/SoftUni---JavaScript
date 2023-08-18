function calculator(num1, sign, num2) {
  result = 0;
  if (sign === "+") {
    console.log((num1 + num2).toFixed(2));
  } else if (sign === "-") {
    console.log((num1 - num2).toFixed(2));
  } else if (sign === "/") {
    console.log((num1 / num2).toFixed(2));
  } else if (sign === "*") {
    console.log((num1 * num2).toFixed(2));
  }
}
calculator(2, "*", 3);
