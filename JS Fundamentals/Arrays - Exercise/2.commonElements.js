function commonElement(firstArray, secondArray) {
  for (let index = 0; index < firstArray.length; index++) {
    let currentElement = firstArray[index];
    if (secondArray.includes(currentElement)) {
      console.log(currentElement);
    }
  }
}
commonElement(
  ["Hey", "hello", 2, 4, "Peter", "e"],
  ["Petar", 10, "hey", 4, "hello", "2"]
);
