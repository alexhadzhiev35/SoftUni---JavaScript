function movieStars(input) {
  let index = 0;
  let budget = Number(input[index]);
  index++;

  let command = input[index];
  index++;
  let isEnough = true;

  while (command !== "ACTION") {
    let actorName = command;

    let actorSallary = 0;

    if (actorName.length > 15) {
      actorSallary = budget * 0.2;
      budget -= actorSallary;
      //   index++;
    } else {
      actorSallary = Number(input[index]);
      budget -= actorSallary;
      index++;
    }

    if (budget < 0) {
      console.log(
        `We need ${Math.abs(budget).toFixed(2)} leva for our actors.`
      );
      isEnough = false;
      break;
    }
    command = input[index];
    index++;
  }
  if (isEnough) {
    console.log(`We are left with ${budget.toFixed(2)} leva.`);
  }
}
movieStars([
  "170000",
  "Ben Affleck",
  "40000.50",
  "Zahari Baharov",
  "80000",
  "Tom Hanks",
  "2000.99",
  "ACTION",
]);
