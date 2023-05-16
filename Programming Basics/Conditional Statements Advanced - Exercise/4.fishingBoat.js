function fishingBoat(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let fishermen = Number(input[2]);
  let rent;
  let isEven;
  if (fishermen % 2 === 0) {
    isEven = true;
  }

  switch (season) {
    case "Spring":
      rent = 3000;
      break;
    case "Summer":
    case "Autumn":
      rent = 4200;
      break;
    case "Winter":
      rent = 2600;
      break;
  }

  if (fishermen <= 6) {
    rent = rent * 0.9;
  } else if (fishermen <= 6 && isEven && season !== "Autumn") {
    rent = rent * 0.85;
  } else if (fishermen >= 7 && fishermen <= 11) {
    rent = rent * 0.85;
  } else if (
    fishermen >= 7 &&
    fishermen <= 11 &&
    isEven &&
    season !== "Autumn"
  ) {
    rent = rent * 0.8;
  } else if (fishermen >= 12) {
    rent = rent * 0.75;
  } else if (fishermen >= 12 && isEven && season !== "Autumn") {
    rent = rent * 0.7;
  }

  if (budget >= rent) {
    console.log(`Yes! You have ${(budget - rent).toFixed(2)} leva left.`);
  } else {
    console.log(
      `Not enough money! You need ${(rent - budget).toFixed(2)} leva.`
    );
  }
}
fishingBoat(["3600", "Autumn", "6"]);
