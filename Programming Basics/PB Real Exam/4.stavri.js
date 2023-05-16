function rakia(input) {
  let index = 0;
  let days = Number(input[index]);
  index++;
  let sumRakiaL = 0;
  let sumDegrees = 0;

  for (let day = 0; day < days; day++) {
    let rakiaL = Number(input[index]);
    index++;
    let degrees = Number(input[index]);
    index++;
    let sumRakia = rakiaL * degrees;

    sumRakiaL += rakiaL;
    sumDegrees += sumRakia;
  }

  let degreeAvg = sumDegrees / sumRakiaL;

  console.log(`Liter: ${sumRakiaL.toFixed(2)}`);
  console.log(`Degrees: ${degreeAvg.toFixed(2)}`);

  if (degreeAvg > 42) {
    console.log("Dilution with distilled water!");
  } else if (degreeAvg >= 38) {
    console.log("Super!");
  } else if (degreeAvg < 38) {
    console.log("Not good, you should baking!");
  }
}
rakia(["3", "100", "45", "50", "55", "150", "36"]);
