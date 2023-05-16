function christmasPrep(input) {
  let paperPrice = 5.8;
  let platPrice = 7.2;
  let gluePrice = 1.2;

  let paperCount = Number(input[0]);
  let platCount = Number(input[1]);
  let glueLiter = Number(input[2]);
  let discount = Number(input[3]);

  let wholePrice =
    paperCount * paperPrice + platCount * platPrice + glueLiter * gluePrice;

  discountedPrice = wholePrice - (wholePrice * discount) / 100;

  console.log(discountedPrice.toFixed(3));
}
christmasPrep(["4", "2", "5", "13"]);
