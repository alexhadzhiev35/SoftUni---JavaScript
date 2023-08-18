function searchNumber(numbersArr, commandsArr) {
  let numbersToTake = commandsArr[0];
  let numbersToDelete = commandsArr[1];
  let searchedNumber = commandsArr[2];

  let newArr = numbersArr.slice(0, numbersToTake);
  newArr.splice(0, numbersToDelete);

  let numberCounter = newArr.filter((e) => e === searchedNumber).length;

  console.log(`Number ${searchedNumber} occurs ${numberCounter} times.`);
}
searchNumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
