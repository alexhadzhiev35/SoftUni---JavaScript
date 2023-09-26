function extract(data) {
  //   let result = [];
  //   let biggestOne = data.shift();
  //   result.push(biggestOne);

  //   data.forEach((x) => {
  //     if (x >= biggestOne) {
  //       result.push(x);
  //       biggestOne = x;
  //     }
  //   });

  let biggestOne = Number.MIN_SAFE_INTEGER;

  return data.reduce((acc, el) => {
    if (el >= biggestOne) {
      biggestOne = el;
      acc.push(el);
    }
    return acc;
  }, []);
}

console.log(extract([1, 3, 8, 4, 10, 12, 3, 2, 24]));
