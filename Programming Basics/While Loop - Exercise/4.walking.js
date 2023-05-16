function walking(input) {
  index = 0;

  let command = input[index];
  index++;

  let totalSteps = 0;
  while (command !== "Going home") {
    let steps = Number(command);

    totalSteps += steps;

    if (totalSteps >= 10000) {
      let stepsMore = totalSteps - 10000;
      console.log("Goal reached! Good job!");
      console.log(`${stepsMore} steps over the goal!`);
      break;
    }

    command = input[index];
    index++;
  }

  if (command === "Going home") {
    let steps = Number(input[index]);
    totalSteps += steps;
    if (totalSteps >= 10000) {
      let stepsMore = totalSteps - 10000;
      console.log("Goal reached! Good job!");
      console.log(`${stepsMore} steps over the goal!`);
    } else {
      let stepsNeeded = 10000 - totalSteps;
      console.log(`${stepsNeeded} more steps to reach goal.`);
    }
  }
}

walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"]);
