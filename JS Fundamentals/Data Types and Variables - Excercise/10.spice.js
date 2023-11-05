function spice(yield) {
  let days = 0;
  let consumeFromCrewDaily = 26;

  let totalYield = 0;

  while (yield >= 100) {
    days++;
    totalYield += yield - consumeFromCrewDaily;
    yield -= 10;
  }

  if (totalYield >= consumeFromCrewDaily) {
    totalYield -= consumeFromCrewDaily;
  }
  console.log(days);
  console.log(totalYield);
}

spice(450);
