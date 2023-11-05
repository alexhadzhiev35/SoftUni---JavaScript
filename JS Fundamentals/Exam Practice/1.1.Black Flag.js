function blackFlag(input) {
  let days = Number(input[0]);
  let dailyPlunder = Number(input[1]);
  let expectedPlunder = Number(input[2]);

  let sumPlunder = 0;

  for (let i = 1; i <= days; i++) {
    sumPlunder += dailyPlunder;

    if (i % 3 === 0) {
      sumPlunder += dailyPlunder / 2;
    }

    if (i % 5 === 0) {
      sumPlunder *= 0.7;
    }
  }

  let percentage = (sumPlunder / expectedPlunder) * 100;

  if (sumPlunder >= expectedPlunder) {
    console.log(`Ahoy! ${sumPlunder.toFixed(2)} plunder gained.`);
  } else {
    console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
  }
}
blackFlag(["10", "20", "380"]);
