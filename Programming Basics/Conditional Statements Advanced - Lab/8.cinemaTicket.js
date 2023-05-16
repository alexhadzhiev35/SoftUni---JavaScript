function cinemaTicket(input) {
  let dayOfWeek = input[0];

  if (
    dayOfWeek === "Monday" ||
    dayOfWeek === "Tuesday" ||
    dayOfWeek === "Friday"
  ) {
    console.log("12");
  } else if (dayOfWeek === "Sunday" || dayOfWeek === "Saturday") {
    console.log("16");
  } else if (dayOfWeek === "Thursday" || dayOfWeek === "Wednesday") {
    console.log("14");
  }
}

cinemaTicket([]);
