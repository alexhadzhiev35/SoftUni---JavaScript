function add(input) {
  let sumOldArray = 0;
  let sumNewArray = 0;
  let arrayLenght = input.length;

  let newArray = [];

  for (let index = 0; index < arrayLenght; index++) {
    let currentNumber = Number(input[index]);

    sumOldArray += currentNumber;
    if (currentNumber % 2 === 0) {
      currentNumber += index;
      newArray.push(currentNumber);
    } else {
      currentNumber -= index;
      newArray.push(currentNumber);
    }

    input[index] = currentNumber;
    sumNewArray += currentNumber;
  }

  console.log(input);
  console.log(sumOldArray);
  console.log(sumNewArray);
}

add([5, 15, 23, 56, 35]);
