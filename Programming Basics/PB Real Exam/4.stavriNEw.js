function rakia(input) {
  let days = Number(input[0]);
  let sumRakiaL = 0;
  let sumDegrees = 0;

  for (let i = 1; i < input.length; i += 2) {
    let rakiaL = Number(input[i]);
    let degrees = Number(input[i + 1]);
    let sumRakia = rakiaL * degrees;

    sumRakiaL += rakiaL;
    sumDegrees += sumRakia;
  }

  let degreeAvg = sumDegrees / sumRakiaL;

  console.log(`Liter: ${sumRakiaL.toFixed(2)}`);
  console.log(`Degrees: ${degreeAvg.toFixed(2)}`);

  // if (degreeAvg > 42) {
  //   console.log("Dilution with distilled water!");
  // } else if (degreeAvg >= 38) {
  //   console.log("Super!");
  // } else {
  //   ("Not good, you should baking!");
  // }

  if (degreeAvg < 38) {
  }
}
rakia(["3", "100", "45", "50", "55", "150", "36"]);
