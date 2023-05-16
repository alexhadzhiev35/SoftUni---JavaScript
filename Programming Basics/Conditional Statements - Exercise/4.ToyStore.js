function toyStore(input) {
    let puzzlePrice = 2.6;
    let dollsPrice = 3;
    let bearsPrice = 4.1;
    let minionsPrice = 8.2;
    let kamazPrice = 2;

    let tripPrice = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let dollsCount = Number(input[2]);
    let bearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let kamazCount = Number(input[5]);

    let allCount = puzzleCount + dollsCount + bearsCount + minionsCount + kamazCount;
    let allSum = puzzleCount * puzzlePrice + dollsCount * dollsPrice + bearsCount * bearsPrice + minionsCount * minionsPrice + kamazCount * kamazPrice;
    let disSum = 0;
    if (allCount >= 50) {
        disSum = allSum - allSum * 0.25;
    } else {
        disSum = allSum;
    }

    aRentSum = disSum - disSum * 0.1;

    if (aRentSum >= tripPrice) {
        console.log(`Yes! ${(aRentSum - tripPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(tripPrice - aRentSum).toFixed(2)} lv needed.`)
    }

}


toyStore(["320", "8", "2", "5", "5", "1"]);