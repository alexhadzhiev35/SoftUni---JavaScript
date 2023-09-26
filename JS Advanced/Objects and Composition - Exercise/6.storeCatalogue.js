function storeCatalogue(data) {
  let productsObj = {};

  for (let el of data) {
    let [product, price] = el.split(" : ");
    price = Number(price);

    productsObj[product] = price;
  }

  const orderedProductsObj = Object.keys(productsObj)
    .sort()
    .reduce((obj, key) => {
      obj[key] = productsObj[key];
      return obj;
    }, {});

  let curLetter;
  for (let key in orderedProductsObj) {
    if (!curLetter) {
      curLetter = key.charAt(0);
      console.log(curLetter);
    }

    if (!key.startsWith(curLetter)) {
      curLetter = key.charAt(0);
      console.log(curLetter);
      console.log(`  ${key}: ${orderedProductsObj[key]}`);
      continue;
    }

    console.log(`  ${key}: ${orderedProductsObj[key]}`);
  }
}
storeCatalogue([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
