function sort(input) {
  let sortedArray = input.sort((a, b) => b - a);
  let result = [];

  let sortedLength = sortedArray.length;

  for (let i = 0; i < sortedLength / 2; i++) {
    let curNum = sortedArray.shift();
    let lastNum = sortedArray.pop();

    result.push(curNum);
    result.push(lastNum);
  }

  console.log(result.join(" "));
}

sort([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
