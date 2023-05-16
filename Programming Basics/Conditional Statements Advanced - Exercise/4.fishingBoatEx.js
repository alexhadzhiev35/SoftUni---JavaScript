function fishingBoat(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let fishermenCount = Number(input[2]);
  let rentPrice;
  let discountPrice = 0;
  let totalPrice;

  switch (season) {
    case "Spring":
      rentPrice = 3000;
      break;
    case "Summer":
    case "Autumn":
      rentPrice = 4200;
      break;
    case "Winter":
      rentPrice = 2600;
      break;
  }

  if (fishermenCount <= 6) {
    discountPrice += 0.1;
  } else if (fishermenCount >= 7 && fishermenCount <= 11) {
    discountPrice += 0.15;
  } else if (fishermenCount >= 12) {
    discountPrice += 0.25;
  }

  totalPrice = rentPrice - rentPrice * discountPrice;

  if (fishermenCount % 2 === 0 && season !== "Autumn") {
    totalPrice *= 0.95;
  }

  if (budget >= totalPrice) {
    let moneyLeft = budget - totalPrice;
    console.log(`Yes! You have ${moneyLeft.toFixed(2)} leva left.`);
  } else {
    let moneyNeeded = totalPrice - budget;
    console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
  }
}
fishingBoat(["3000", "Autumn", "12"]);
