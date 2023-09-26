function solve(input) {
  let result = [];

  let parser = {
    "+": function sum(num1, num2) {
      result.push(num1 + num2);
    },
    "-": function subtract(num1, num2) {
      result.push(num1 - num2);
    },
    "*": function multiply(num1, num2) {
      result.push(num1 * num2);
    },
    "/": function divide(num1, num2) {
      result.push(num1 / num2);
    },
  };

  for (const el of input) {
    if (typeof el === "number") {
      result.push(el);
    } else {
      let lastNumber = result.pop();
      let secondLast = result.pop();
      if (lastNumber && secondLast) {
        parser[el](secondLast, lastNumber);
      } else {
        return "Error: not enough operands!";
      }
    }
  }

  if (result.length > 1) {
    return "Error: too many operands!";
  } else {
    return result[0];
  }
}

console.log(solve([-1, 1, "+", 101, "*", 18, "+", 3, "/"]));
