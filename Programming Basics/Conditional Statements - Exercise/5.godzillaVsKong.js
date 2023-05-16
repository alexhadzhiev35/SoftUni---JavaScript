function isBudgetEnought(input) {
    let budget = Number(input[0]);
    let statisticianCount = Number(input[1]);
    let priceClothing = Number(input[2]);
    let decorPrice = budget * 0.1;


    if (statisticianCount >= 150) {
        priceClothing = priceClothing * 0.9;
    }

    let moneyNeeded = statisticianCount * priceClothing + decorPrice;

    if (moneyNeeded > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(moneyNeeded - budget).toFixed(2)} leva more.`)
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - moneyNeeded).toFixed(2)} leva left.`)
    }
}

isBudgetEnought(["9587.88", "222", "55.68"]);