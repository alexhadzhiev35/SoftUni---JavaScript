function tradeCommission(input) {
  let town = input[0];
  let quantity = input[1];

  if (quantity >= 0 && quantity <= 500) {
    switch (town) {
      case "Sofia":
        console.log((quantity * 0.05).toFixed(2));
        break;
      case "Plovdiv":
        console.log((quantity * 0.055).toFixed(2));
        break;
      case "Varna":
        console.log((quantity * 0.045).toFixed(2));
        break;
      default:
        console.log("error");
        break;
    }
  } else if (quantity > 500 && quantity <= 1000) {
    switch (town) {
      case "Sofia":
        console.log((quantity * 0.07).toFixed(2));
        break;
      case "Plovdiv":
        console.log((quantity * 0.08).toFixed(2));
        break;
      case "Varna":
        console.log((quantity * 0.075).toFixed(2));
        break;
      default:
        console.log("error");
        break;
    }
  } else if (quantity > 1000 && quantity <= 10000) {
    switch (town) {
      case "Sofia":
        console.log((quantity * 0.08).toFixed(2));
        break;
      case "Plovdiv":
        console.log((quantity * 0.12).toFixed(2));
        break;
      case "Varna":
        console.log((quantity * 0.1).toFixed(2));
        break;
      default:
        console.log("error");
        break;
    }
  } else if (quantity > 10000) {
    switch (town) {
      case "Sofia":
        console.log((quantity * 0.12).toFixed(2));
        break;
      case "Plovdiv":
        console.log((quantity * 0.145).toFixed(2));
        break;
      case "Varna":
        console.log((quantity * 0.13).toFixed(2));
        break;
      default:
        console.log("error");
        break;
    }
  } else {
    console.log("error");
  }
}

tradeCommission(["Varna", "3874.50"]);
