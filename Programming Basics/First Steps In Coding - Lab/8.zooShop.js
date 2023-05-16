function sum(input) {
    let dogfoodPrice = 2.5;
    let catfoodPrice = 4;

    let dogfoodcount = Number(input[0]);
    let catfoodcount = Number(input[1]);
    let obshto = dogfoodPrice * dogfoodcount + catfoodPrice * catfoodcount

    console.log(`${obshto} lv.`)

}

sum(["13", "9"]);