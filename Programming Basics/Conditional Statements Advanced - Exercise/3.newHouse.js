function newHouse(input) {
  let flower = input[0];
  let flowerCount = Number(input[1]);
  let budget = Number(input[2]);
  rosesPrice = 5;
  dahliasPrice = 3.8;
  tulipsPrice = 2.8;
  narcissusPrice = 3;
  gladiolusPrice = 2.5;
  let wholePrice;

  switch (flower) {
    case "Roses":
      if (flowerCount >= 80) {
        wholePrice = rosesPrice * flowerCount * 0.9;
      } else {
        wholePrice = rosesPrice * flowerCount;
      }
      break;
    case "Dahlias":
      if (flowerCount >= 90) {
        wholePrice = dahliasPrice * flowerCount * 0.85;
      } else {
        wholePrice = dahliasPrice * flowerCount;
      }
      break;
    case "Tulips":
      if (flowerCount >= 80) {
        wholePrice = tulipsPrice * flowerCount * 0.85;
      } else {
        wholePrice = tulipsPrice * flowerCount;
      }
      break;
    case "Narcissus":
      if (flowerCount < 120) {
        wholePrice = narcissusPrice * flowerCount * 1.15;
      } else {
        wholePrice = narcissusPrice * flowerCount;
      }
      break;
    case "Gladiolus":
      if (flowerCount < 80) {
        wholePrice = gladiousPrice * flowerCount * 1.2;
      } else {
        wholePrice = gladiousPrice * flowerCount;
      }
      break;
  }

  if (wholePrice <= budget) {
    overPrice = budget - wholePrice;
    console.log(
      `Hey, you have a great garden with ${flowerCount} ${flower} and ${overPrice.toFixed(
        2
      )} leva left.`
    );
  } else {
    overPrice = wholePrice - budget;
    console.log(
      `Not enough money, you need ${overPrice.toFixed(2)} leva more.`
    );
  }
}
newHouse(["Dahlias", "1312431", "40000412"]);
