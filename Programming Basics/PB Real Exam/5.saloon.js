function saloon(input) {
  let index = 0;

  let goalMoney = Number(input[index]);
  index++;

  let command = input[index];
  index++;

  let sumMoney = 0;
  let isReached = false;

  while (command !== "closed") {
    let service = command;
    // index++;

    if (service === "haircut") {
      let sex = input[index];
      index++;
      switch (sex) {
        case "mens":
          sumMoney += 15;
          break;
        case "ladies":
          sumMoney += 20;
          break;
        case "kids":
          sumMoney += 10;
      }
    } else if (service === "color") {
      let type = input[index];
      index++;
      switch (type) {
        case "touch up":
          sumMoney += 20;
          break;
        case "full color":
          sumMoney += 30;
      }
    }

    if (sumMoney >= goalMoney) {
      isReached = true;
      console.log(`You have reached your target for the day!`);
      break;
    }

    command = input[index];
    index++;
  }
  if (!isReached) {
    console.log(
      `Target not reached! You need ${goalMoney - sumMoney}lv. more.`
    );
  }
  console.log(`Earned money: ${sumMoney}lv.`);
}
saloon([
  "300",
  "haircut",
  "ladies",
  "haircut",
  "kids",
  "color",
  "touch up",
  "closed",
]);
