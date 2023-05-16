function equipment(input) {
    let annualTax = Number(input[0]);

    let shoes = annualTax - annualTax * 0.4;
    let equip = shoes - shoes * 0.2;
    let ball = equip / 4;
    let accessories = ball / 5;

    let sum = annualTax + shoes + equip + ball + accessories;
    console.log(sum)

}

equipment(["365"]);