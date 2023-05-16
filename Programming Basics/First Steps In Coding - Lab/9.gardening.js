function neededSum(input) {
    let squareMeterPrice = 7.61;
    let squareMeter = Number(input[0]);

    let wholePrice = squareMeter * squareMeterPrice;
    let discount = wholePrice * 0.18;
    let latestPrice = wholePrice - discount;

    console.log(`The final price is: ${latestPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`)
}

neededSum(["550"]);