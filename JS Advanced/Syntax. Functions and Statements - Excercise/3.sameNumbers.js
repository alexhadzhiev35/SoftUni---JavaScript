function same(num) {
  let isSame = true;
  let numAsString = num.toString();
  let firstCh = numAsString[0];
  let sum = 0;

  for (let i = 0; i < numAsString.length; i++) {
    if (numAsString[i] !== firstCh) {
      isSame = false;
    }
    sum += Number(numAsString[i]);
  }

  console.log(isSame);
  console.log(sum);
}
same(2222222);
same(1234);
