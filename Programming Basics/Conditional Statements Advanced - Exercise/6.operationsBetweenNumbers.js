function operations(input) {
  let n1 = Number(input[0]);
  let n2 = Number(input[1]);
  let op = input[2];
  let result = 0;
  let isEvenOrOdd;

  switch (op) {
    case "+":
      result = n1 + n2;
      // console.log(`${n1} ${op} ${n2} = ${result} - ${isEvenOrOdd}`);
      break;
    case "-":
      result = n1 - n2;
      // console.log(`${n1} ${op} ${n2} = ${result} - ${isEvenOrOdd}`);
      break;
    case "*":
      result = n1 * n2;
      // console.log(`${n1} ${op} ${n2} = ${result} - ${isEvenOrOdd}`);
      break;
    case "/":
      result = n1 / n2;
      // if (n2 !== 0) {
      //   console.log(`${n1} ${op} ${n2} = ${result.toFixed(2)}`);
      // } else {
      //   console.log(`Cannot divide ${n1} by zero`);
      // }
      break;
    case "%":
      result = n1 % n2;
      // if (n2 !== 0) {
      //   console.log(`${n1} ${op} ${n2} = ${result}`);
      // } else {
      //   console.log(`Cannot divide ${n1} by zero`);
      // }
      break;
  }

  if (result % 2 === 0) {
    isEvenOrOdd = "even";
  } else {
    isEvenOrOdd = "odd";
  }

  if (op === "+" || op === "-" || op === "*") {
    console.log(`${n1} ${op} ${n2} = ${result} - ${isEvenOrOdd}`);
  } else if (op === "/") {
    if (n2 !== 0) {
      console.log(`${n1} ${op} ${n2} = ${result.toFixed(2)}`);
    } else {
      console.log(`Cannot divide ${n1} by zero`);
    }
  } else if (op === "%") {
    if (n2 !== 0) {
      console.log(`${n1} ${op} ${n2} = ${result}`);
    } else {
      console.log(`Cannot divide ${n1} by zero`);
    }
  }
}
operations(["10", "1", "-"]);
