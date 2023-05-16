function hotelRoom(input) {
  let month = input[0];
  let nightsCount = Number(input[1]);
  let studioPrice = 0;
  let apartmentPrice = 0;

  switch (month) {
    case "May":
    case "October":
      studioPrice = 50;
      apartmentPrice = 65;
      break;
    case "June":
    case "September":
      studioPrice = 75.2;
      apartmentPrice = 68.7;
      break;
    case "July":
    case "August":
      studioPrice = 76;
      apartmentPrice = 77;
      break;
  }

  let studioSum = nightsCount * studioPrice;
  let apartmentSum = nightsCount * apartmentPrice;

  if (nightsCount > 14) {
    apartmentSum *= 0.9; //10%discount
    if (month === "May" || month === "October") {
      studioSum *= 0.7; //30%discount
    } else if (month === "June" || month === "September") {
      studioSum *= 0.8; //20%discount
    }
  } else if (nightsCount > 7) {
    if (month === "May" || month === "October") {
      studioSum *= 0.95; //5%discount
    }
  }

  console.log(`Apartment: ${apartmentSum.toFixed(2)} lv.`);
  console.log(`Studio: ${studioSum.toFixed(2)} lv.`);
}
hotelRoom(["June", "14"]);
