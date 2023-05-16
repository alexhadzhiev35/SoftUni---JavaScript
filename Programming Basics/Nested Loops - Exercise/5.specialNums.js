function specialNum(input) {
  let n = input[0];
  result = "";

  for (let i = 1111; i <= 9999; i++) {
    let curNumStr = i.toString();
    let isSpecial = true;

    for (let index = 0; index < curNumStr.length; index++) {
      let curDigit = Number(curNumStr[index]);

      if (n % curDigit !== 0) {
        isSpecial = false;
        break;
      }
    }

    if (isSpecial === true) {
      result += `${curNumStr} `;
    }
  }

  console.log(result);
}
specialNum(["16"]);
