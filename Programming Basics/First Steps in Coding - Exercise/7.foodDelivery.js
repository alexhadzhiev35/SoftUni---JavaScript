function delivery(input) {
    let chickenMenu = 10.35;
    let fishMenu = 12.40;
    let vegeteranianMenu = 8.15;
    let deliveryFee = 2.5;

    let chickenMenuCount = Number(input[0]);
    let fishMenuCount = Number(input[1]);
    let vegeteranianMenuCount = Number(input[2]);

    let sum = chickenMenuCount * chickenMenu + fishMenuCount * fishMenu + vegeteranianMenuCount * vegeteranianMenu;
    let dessertPrice = sum * 0.2;

    let latestSum = sum + dessertPrice + deliveryFee;
    console.log(latestSum);

}
delivery(["9", "2", "6"]);