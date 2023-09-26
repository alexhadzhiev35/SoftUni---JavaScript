function sort(arr) {
  let arrLength = arr.length;
  let newArr = [];

  arr.sort((a, b) => a - b);

  for (let i = 0; i < arrLength / 2; i++) {
    newArr.push(arr.shift());
    newArr.push(arr.pop());
  }

  return newArr;
}

sort([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
