function heartDelivery(input) {
  let neighborhood = input.shift().split("@").map(Number);
  let command = input.shift();
  let curPosition = 0;

  while (command !== "Love!") {
    let step = command.split(" ");
    curPosition += Number(step[1]);

    if (curPosition > neighborhood.length - 1) {
      curPosition = 0;
    }

    if (neighborhood[curPosition] === 0) {
      console.log(`Place ${curPosition} already had Valentine's day.`);
    } else {
      neighborhood[curPosition] = neighborhood[curPosition] - 2;
      if (neighborhood[curPosition] === 0) {
        console.log(`Place ${curPosition} has Valentine's day.`);
      }
    }

    command = input.shift();
  }

  console.log(`Cupid's last position was ${curPosition}.`);

  let resultArr = [];
  let resultFlag = true;

  neighborhood.forEach((element) => {
    if (element !== 0) {
      resultFlag = false;
      resultArr.push(element);
    }
  });

  if (resultFlag) {
    console.log("Mission was successful");
  } else {
    console.log(`Cupid has failed ${resultArr.length} places.`);
  }
}
heartDelivery([
  "4@2@4@2",
  "Jump 1",
  "Jump 2",
  "Jump 1",
  "Jump 2",
  "Jump 2",
  "Jump 2",
  "Love!",
]);
