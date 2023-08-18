function smallest(num1, num2, num3) {
  // function isSmaller(a, b) {
  //   if (a > b) {
  //     return b;
  //   } else {
  //     return a;
  //   }
  // }

  // console.log(isSmaller(isSmaller(num1, num2), num3));

  return Math.min(num1, num2, num3);
}
console.log(smallest(2, 5, 3));
