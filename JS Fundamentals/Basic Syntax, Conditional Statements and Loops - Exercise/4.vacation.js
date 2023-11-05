function vacation(count, type, day) {
  price = 0;
  sum = 0;

  switch (type) {
    case "Students":
      if (day === "Friday") {
        price = 8.45;
      } else if (day === "Saturday") {
        price = 9.8;
      } else if (day === "Sunday") {
        price = 10.46;
      }

      if (count >= 30) {
        sum = count * price * 0.85;
      } else sum = count * price;
      break;
    case "Business":
      if (day === "Friday") {
        price = 10.9;
      } else if (day === "Saturday") {
        price = 15.6;
      } else if (day === "Sunday") {
        price = 16;
      }

      if (count >= 100) {
        sum = (count - 10) * price;
      } else sum = count * price;
      break;
    case "Regular":
      if (day === "Friday") {
        price = 15;
      } else if (day === "Saturday") {
        price = 20;
      } else if (day === "Sunday") {
        price = 22.5;
      }

      if (count >= 10 && count <= 20) {
        sum = count * price * 0.95;
      } else sum = count * price;
      break;
  }

  console.log(`Total price: ${sum.toFixed(2)}`);
}
vacation(40, "Regular", "Saturday");
