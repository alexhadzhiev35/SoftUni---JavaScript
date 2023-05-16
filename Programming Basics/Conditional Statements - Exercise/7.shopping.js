function shopping(input) {
    let budget = Number(input[0]);
    let cardsCount = Number(input[1]);
    let processorCount = Number(input[2]);
    let ramCount = Number(input[3]);

    let cardPrice = 250;
    let cardSum = cardPrice * cardsCount;
    let processorPrice = cardSum * 0.35;
    let ramPrice = cardSum * 0.1;

    let sum = cardSum + processorCount * processorPrice + ramCount * ramPrice;

    if (cardsCount > processorCount) {
        sum = sum * 0.85;
    }

    if (sum > budget) {
        console.log(`Not enough money! You need ${(sum - budget).toFixed(2)} leva more!`)
    } else {
        console.log(`You have ${(budget - sum).toFixed(2)} leva left!`)
    }

}

shopping(["920.45", "3", "1", "1"]);