function max(arr) {
  let result = "";
  let arrLength = arr.length;

  for (let index = 1; index <= arrLength; index++) {
    let isMax = true;
    let curNumber = Number(arr[index - 1]);

    for (let j = index; j < arr.length; j++) {
      let nextNumber = Number(arr[j]);

      if (nextNumber >= curNumber) {
        isMax = false;
        break;
      }
    }

    if (isMax) {
      result += `${curNumber} `;
    }
  }
  console.log(result);
}
max([1, 4, 3, 2]);
