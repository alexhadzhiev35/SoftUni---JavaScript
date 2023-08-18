function bomb(numSeq, bomb) {
  let bombNum = bomb[0];
  let bombPower = bomb[1];
  let sum = 0;

  while (numSeq.includes(bombNum)) {
    let index = numSeq.indexOf(bombNum);
    let elementsToRemove = bombPower * 2 + 1;
    let startIndex = index - bombPower;

    if (startIndex < 0) {
      elementsToRemove += startIndex;
      startIndex = 0;
    }

    numSeq.splice(startIndex, elementsToRemove);
  }

  numSeq.forEach((element) => {
    sum += element;
  });

  console.log(sum);
}

bomb([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
