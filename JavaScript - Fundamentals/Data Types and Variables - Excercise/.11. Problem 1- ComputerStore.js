function comp(input) {
  let customerType = input[input.length - 1];
  let lastPartIndex = input.length - 2;
  let allPartsPrice = 0;

  for (let i = 0; i <= lastPartIndex; i++) {
    let curPartPrice = Number(input[i]);

    if (curPartPrice < 0) {
      console.log("Invalid price!");
    } else {
      allPartsPrice += curPartPrice;
    }
  }

  let priceAfterTaxes = allPartsPrice * 1.2;
  let taxes = priceAfterTaxes - allPartsPrice;

  if (customerType === "special") {
    priceAfterTaxes * 0.9;
  }

  if (priceAfterTaxes === 0) {
    console.log("Invalid order!");
  } else {
    console.log("Congrutalations you've just bought a new computer");
    console.log(`Price without tax: ${allPartsPrice.toFixed(2)}$`);
    console.log(`Taxes: ${taxes.toFixed(2)}$`);
    console.log("---------------------------");
    console.log(`Total price: ${priceAfterTaxes.toFixed(2)}$`);
  }
}

comp(["1050", "200", "450", "2", "18.50", "16.86", "special"]);
