function newHouseEx(input) {
  // - "Roses", "Dahlias", "Tulips", "Narcissus", "Gladiolus"
  // 5	3.80	2.80	3	2.50

  let flowerType = input[0];
  let flowerCount = Number(input[1]);
  let budget = Number(input[2]);
  let wholePrice;

  switch (flowerType) {
    case "Roses":
      if (flowerCount > 80) {
        wholePrice = flowerCount * 5 * 0.9;
      } else {
        wholePrice = flowerCount * 5;
      }
      break;
    case "Dahlias":
      if (flowerCount > 90) {
        wholePrice = flowerCount * 3.8 * 0.85;
      } else {
        wholePrice = flowerCount * 3.8;
      }
      break;
    case "Tulips":
      if (flowerCount > 80) {
        wholePrice = flowerCount * 2.8 * 0.85;
      } else {
        wholePrice = flowerCount * 2.8;
      }
      break;
    case "Narcissus":
      if (flowerCount < 120) {
        wholePrice = flowerCount * 3 * 1.15;
      } else {
        wholePrice = flowerCount * 3;
      }
      break;
    case "Gladiolus":
      if (flowerCount < 80) {
        wholePrice = flowerCount * 2.5 * 1.2;
      } else {
        wholePrice = flowerCount * 2.5;
      }
      break;
  }

  if (wholePrice <= budget) {
    console.log(
      `Hey, you have a great garden with ${flowerCount} ${flowerType} and ${(
        budget - wholePrice
      ).toFixed(2)} leva left.`
    );
  } else {
    console.log(
      `Not enough money, you need ${(wholePrice - budget).toFixed(
        2
      )} leva more.`
    );
  }
}

newHouseEx(["Narcissus", "119", "360"]);
