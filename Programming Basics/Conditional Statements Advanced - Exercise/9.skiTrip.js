function skiTrip(input) {
  let daysCount = Number(input[0]);
  let roomType = input[1];
  let feedback = input[2];
  let roomPrice = 0;
  let nightsCount = daysCount - 1;

  switch (roomType) {
    case "room for one person":
      roomPrice = 18;
      break;
    case "apartment":
      roomPrice = 25;
      break;
    case "president apartment":
      roomPrice = 35;
      break;
  }

  if (daysCount < 10) {
    if (roomType === "apartment") {
      roomPrice *= 0.7; //30%discount
    } else if (roomType === "president apartment") {
      roomPrice *= 0.9; //10%discount
    }
  } else if (daysCount >= 10 && daysCount <= 15) {
    if (roomType === "apartment") {
      roomPrice *= 0.65; //35%discount
    } else if (roomType === "president apartment") {
      roomPrice *= 0.85; //15%discount
    }
  } else if (daysCount > 15) {
    if (roomType === "apartment") {
      roomPrice *= 0.5; //50%discount
    } else if (roomType === "president apartment") {
      roomPrice *= 0.8; //20%discount
    }
  }

  let sum = roomPrice * nightsCount;

  if (feedback === "positive") {
    console.log((sum * 1.25).toFixed(2));
  } else if (feedback === "negative") {
    console.log((sum * 0.9).toFixed(2));
  }
}
skiTrip(["30", "president apartment", "negative"]);
