function previousDay(year, month, day) {
  let curDay = new Date(year, month - 1, day);

  curDay.setDate(curDay.getDate() - 1);

  console.log(
    `${curDay.getFullYear()}-${curDay.getMonth() + 1}-${curDay.getDate()}`
  );
}
previousDay(2016, 9, 30);
