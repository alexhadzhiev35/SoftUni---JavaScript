function barIncome(input) {
  let pattern =
    /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<quantity>\d+)\|[^|$%.0-9]*(?<price>[\d]+.?\d*)\$/g;

  let newPattern =
    /%(?<name>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<quantity>\d+)[^|$%.]*\|(?<price>[\d]+.?\d*)\$/;

  let i = 0;
  currentLine = input[i];

  let totalSum = 0;

  while (currentLine !== "end of shift") {
    let currentPurchase = currentLine.match(newPattern);

    let clientName = currentPurchase.groups.name;
    let productName = currentPurchase.groups.product;
    let price = Number(currentPurchase.groups.price);
    let quantity = Number(currentPurchase.groups.quantity);
    let overallPrice = price * quantity;

    totalSum += overallPrice;

    console.log(`${clientName}: ${productName} - ${overallPrice.toFixed(2)}`);

    i++;
    currentLine = input[i];
  }

  console.log(`Total income: ${totalSum.toFixed(2)}`);
}

barIncome([
  "%George%<Croissant>|2|10.3$",
  "%Peter%<Gum>|1|1.3$",
  "%Maria%<Cola>|1|2.4$",
  "end of shift",
]);
