function intOr(a, b, c) {
  let sum = a + b + c;
  let isInteger = sum % 1 === 0;

  if (isInteger) {
    console.log(`${sum} - Integer`);
  } else {
    console.log(`${sum} - Float`);
  }
}
intOr(100, 200, 303);
