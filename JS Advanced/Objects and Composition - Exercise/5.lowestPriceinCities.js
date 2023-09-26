function lowest(data) {
  let res = {};

  for (let line of data) {
    let [townName, productName, productPrice] = line.split(" | ");
    productPrice = Number(productPrice);

    if (!res.hasOwnProperty(productName)) {
      res[productName] = {};
    }

    if (
      res[productName]["productLowestPrice"] === undefined ||
      res[productName]["productLowestPrice"] > productPrice
    ) {
      res[productName]["townName"] = townName;
      res[productName]["productLowestPrice"] = productPrice;
    }
  }

  for (let [product, productData] of Object.entries(res)) {
    console.log(
      `${product} -> ${productData.productLowestPrice} (${productData.townName})`
    );
  }
}

lowest([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);
