function equal(arr) {
  let leftSum = 0;
  let rightSum = 0;
  let isEqual = false;
  let arrayLength = arr.length;

  for (let currentI = 0; currentI < arrayLength; currentI++) {
    for (let i = 0; i < arrayLength; i++) {
      if (i !== currentI) {
        let num = Number(arr[i]);
        if (i < currentI) {
          leftSum += num;
        } else if (i > currentI) {
          rightSum += num;
        }
      }
    }
    if (currentI === 0) {
      leftSum = 0;
    } else if (currentI === arrayLength - 1) {
      rightSum = 0;
    }

    if (leftSum === rightSum) {
      console.log(currentI);
      isEqual = true;
    } else {
      leftSum = 0;
      rightSum = 0;
    }
  }

  if (!isEqual) {
    console.log("no");
  }
}
equal([1, 2, 3, 3]);
