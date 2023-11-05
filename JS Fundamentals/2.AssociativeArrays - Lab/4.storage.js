function storage(input) {
  let storage = new Map();

  for (let el of input) {
    let [item, quantity] = el.split(" ");

    quantity = Number(quantity);

    if (!storage.has(item)) {
      storage.set(item, quantity);
    } else {
      storage.set(item, storage.get(item, quantity) + quantity);
    }
  }

  for (let [key, value] of storage) {
    console.log(`${key} -> ${value}`);
  }
}
storage(["apple 50", "apple 61", "coffee 115", "coffee 40"]);
