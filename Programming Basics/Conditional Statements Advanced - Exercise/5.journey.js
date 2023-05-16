function journey(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let destination = "";
  let cost = 0;
  let tripType = "";

  if (budget <= 100) {
    destination = "Bulgaria";
    if (season === "summer") {
      cost = budget * 0.3;
      tripType = "Camp";
    } else if (season === "winter") {
      cost = budget * 0.7;
      tripType = "Hotel";
    }
  } else if (budget > 100 && budget <= 1000) {
    destination = "Balkans";
    if (season === "summer") {
      cost = budget * 0.4;
      tripType = "Camp";
    } else if (season === "winter") {
      cost = budget * 0.8;
      tripType = "Hotel";
    }
  } else if (budget > 1000) {
    destination = "Europe";
    cost = budget * 0.9;
    tripType = "Hotel";
  }

  console.log(`Somewhere in ${destination}`);
  console.log(`${tripType} - ${cost.toFixed(2)}`);
}
journey(["75", "winter"]);
