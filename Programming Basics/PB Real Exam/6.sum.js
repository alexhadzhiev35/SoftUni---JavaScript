function findNumber(input) {
  const n = Number(input[0]);
  let foundNumber = null;

  for (let a = 1; a <= 9; a++) {
    for (let b = 9; b >= a; b--) {
      for (let c = 0; c <= 9; c++) {
        for (let d = 9; d >= c; --d) {
          const sum = a + b + c + d;
          const product = a * b * c * d;

          if (sum === product && n % 10 === 5) {
            foundNumber = `${a}${b}${c}${d}`;
            break;
          } else if (Math.trunc(product / sum) === 3 && n % 3 === 0) {
            foundNumber = `${d}${c}${b}${a}`;
            break;
          }
        }
        if (foundNumber) break;
      }
      if (foundNumber) break;
    }
    if (foundNumber) break;
  }

  if (foundNumber) {
    console.log(foundNumber);
  } else {
    console.log("Nothing found");
  }
}

findNumber(["123"]);
