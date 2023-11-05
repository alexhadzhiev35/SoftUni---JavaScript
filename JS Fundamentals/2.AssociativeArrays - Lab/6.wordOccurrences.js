function wordOcc(input) {
  let myMap = new Map();

  for (el of input) {
    if (myMap.has(el)) {
      myMap.set(el, myMap.get(el) + 1);
    } else {
      myMap.set(el, 1);
    }
  }

  let sorted = Array.from(myMap).sort((a, b) => b[1] - a[1]);

  for (let [item, quantity] of sorted) {
    console.log(`${item} -> ${quantity} times`);
  }
}
wordOcc([
  "Here",
  "is",
  "the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "sentence",
  "And",
  "finally",
  "the",
  "third",
  "sentence",
]);
