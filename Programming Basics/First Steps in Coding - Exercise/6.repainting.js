function suma(input) {
    let nylonNeeded = Number(input[0]);
    let paintNeeded = Number(input[1]);
    let thinnerNeeded = Number(input[2]);
    let hoursOfWork = Number(input[3]);

    let nylonPrice = 1.50;
    let paintPrice = 14.50;
    let thinnerPrice = 5.00;

    let sumMaterials = (nylonNeeded + 2) * nylonPrice + paintNeeded * paintPrice * 1.1 + thinnerNeeded * thinnerPrice + 0.4;
    let sumHoursofWork = hoursOfWork * (sumMaterials * 0.3);

    let sum = sumHoursofWork + sumMaterials;
    console.log(sum);

}
suma(["5", "10", "10", "1"]);