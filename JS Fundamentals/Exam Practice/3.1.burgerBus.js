function bus(input) {
  let cityCount = Number(input.shift());
  let totalSum = 0;

  for (let i = 1; i <= cityCount; i++) {
    let curCity = input.shift();
    let curIncome = Number(input.shift());
    let curExpenses = Number(input.shift());

    if (i % 3 === 0 && i % 5 !== 0) {
      curExpenses *= 1.5;
    }

    if (i % 5 === 0) {
      curIncome *= 0.9;
    }

    let curProfit = curIncome - curExpenses;
    totalSum += curProfit;
    console.log(
      `In ${curCity} Burger Bus earned ${curProfit.toFixed(2)} leva.`
    );
  }

  console.log(`Burger Bus total profit: ${totalSum.toFixed(2)} leva.`);
}
bus([
  "3",
  "Sofia",
  "895.67",
  "213.50",
  "Plovdiv",
  "2563.20",
  "890.26",
  "Burgas",
  "2360.55",
  "600.00",
]);
