function canI(input) {
  let name = input[0];
  let lengthS = Number(input[1]);
  let lengthB = Number(input[2]);

  let eating = lengthB / 8;
  let chill = lengthB / 4;
  let timeLeft = lengthB - (eating + chill);

  if (timeLeft >= lengthS) {
    console.log(
      `You have enough time to watch ${name} and left with ${Math.ceil(
        timeLeft - lengthS
      )} minutes free time.`
    );
  } else {
    console.log(
      `You don't have enough time to watch ${name}, you need ${Math.ceil(
        lengthS - timeLeft
      )} more minutes.`
    );
  }
}

canI(["Game of Thrones", "60", "96"]);
0;
