function depositCalc(input) {
    let depositedSum = Number(input[0]);
    let depositPeriod = Number(input[1]);
    let annualInterestPercent = Number(input[2]);

    let latestSum = depositedSum + depositPeriod * ((depositedSum * annualInterestPercent / 100) / 12);

    console.log(latestSum);
}

depositCalc(["200", "3", "5.7"]);