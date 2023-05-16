function equal(input) {
  let startNum = input[0];
  let endNum = input[1];
  let buff = "";

  for (let curNum = startNum; curNum <= endNum; curNum++) {
    let evenPositionSum = 0;
    let oddPositionSum = 0;

    let curNumAsStr = String(curNum);

    for (let i = 0; i < curNumAsStr.length; i++) {
      let curDigit = Number(curNumAsStr[i]);
      let position = i + 1;

      if (position % 2 === 0) {
        evenPositionSum += curDigit;
      } else {
        oddPositionSum += curDigit;
      }
    }

    if (evenPositionSum === oddPositionSum) {
      buff += curNumAsStr + " ";
    }
  }
  console.log(buff);
}

equal(["123456", "124000"]);
