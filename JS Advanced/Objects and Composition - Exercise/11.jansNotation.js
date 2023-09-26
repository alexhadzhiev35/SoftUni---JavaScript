function jnotation(data) {
  let numbers = [];
  let operators = [];

  for (let el of data) {
    if (typeof el === "number") {
      numbers.push(el);
    } else {
      operators.push(el);
    }
  }

  if (numbers.length <= operators.length) {
    console.log("Error: not enough operands!");
    return;
  } else if (numbers.length - 1 > operators.length) {
    console.log("Error: too many operands!");
    return;
  }

  while (numbers.length !== 1) {
    let lastNum = numbers.pop();
    let preLastNum = numbers.pop();
    let operator = operators.shift();

    let res;

    switch (operator) {
      case "+":
        res = preLastNum + lastNum;
        break;
      case "-":
        res = preLastNum - lastNum;
        break;
      case "*":
        res = preLastNum * lastNum;
        break;
      case "/":
        res = preLastNum / lastNum;
        break;
    }

    let newNum = numbers.push(res);
  }

  console.log(numbers[0]);
}

jnotation([7, 33, 8, "-"]);

console.log("-------------");

jnotation([-1, 1, "+", 101, "*", 18, "+", 3, "/"]);
