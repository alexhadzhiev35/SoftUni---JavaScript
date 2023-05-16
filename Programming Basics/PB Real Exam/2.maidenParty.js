function party(input) {
  let messagePrice = 0.6;
  let rosePrice = 7.2;
  let keyPrice = 3.6;
  let caricaPrice = 18.2;
  let surprisePrice = 22;

  let wholePrice = Number(input[0]);
  let messageCount = Number(input[1]);
  let roseCount = Number(input[2]);
  let keyCount = Number(input[3]);
  let caricaCount = Number(input[4]);
  let surpriseCount = Number(input[5]);

  let sumNeeded =
    messageCount * messagePrice +
    roseCount * rosePrice +
    keyPrice * keyCount +
    caricaPrice * caricaCount +
    surpriseCount * surprisePrice;

  let articulsCount =
    messageCount + roseCount + keyCount + caricaCount + surpriseCount;

  if (articulsCount > 25) {
    sumNeeded -= sumNeeded * 0.35;
    sumNeeded -= sumNeeded * 0.1;
  } else {
    sumNeeded -= sumNeeded * 0.1;
  }

  if (sumNeeded > wholePrice) {
    console.log(`Yes! ${(sumNeeded - wholePrice).toFixed(2)} lv left.`);
  } else
    console.log(
      `Not enough money! ${(wholePrice - sumNeeded).toFixed(2)} lv needed.`
    );
}
party(["320", "8", "2", "5", "5", "1"]);
