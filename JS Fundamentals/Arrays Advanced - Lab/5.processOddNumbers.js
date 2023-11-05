function processOddNumbers(arr) {
  let processedArr = [];

  arr.map((el) => {
    if (arr.indexOf(el) % 2 !== 0) {
      processedArr.unshift(el * 2);
    }
  });

  console.log(processedArr.join(" "));
}
processOddNumbers([10, 15, 20, 25]);
