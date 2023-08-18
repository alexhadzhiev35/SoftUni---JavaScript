function storeProvision(firstArray, secondArray) {
  let localStoreStorage = {};

  for (let index = 0; index < firstArray.length; index += 2) {
    let product = firstArray[index];
    let quantity = Number(firstArray[index + 1]);
    localStoreStorage[product] = quantity;
  }

  for (let index = 0; index < secondArray.length; index += 2) {
    let product = secondArray[index];

    if (!localStoreStorage.hasOwnProperty(product)) {
      localStoreStorage[product] = 0;
    }
    localStoreStorage[product] += Number(secondArray[index + 1]);
  }

  //   console.table(localStoreStorage);

  for (const productKey in localStoreStorage) {
    console.log(`${productKey} -> ${localStoreStorage[productKey]}`);
  }
}

storeProvision(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
