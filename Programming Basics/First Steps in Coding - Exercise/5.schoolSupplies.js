function sumBookStore(input) {
    let pricePens = 5.80;
    let priceMarkers = 7.20;
    let pricePerLChemics = 1.20;

    let countPens = Number(input[0]);
    let countMarkers = Number(input[1]);
    let countChemics = Number(input[2]);
    let discount = Number(input[3]);

    let sum = pricePens * countPens + priceMarkers * countMarkers + pricePerLChemics * countChemics;
    let latestSum = sum - discount / 100 * sum;

    console.log(latestSum)

}
sumBookStore(["4", "2", "5", "13"])