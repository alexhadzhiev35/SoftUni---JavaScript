function sumLiters(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let heigth = Number(input[2]);
    let percent = Number(input[3]) / 100;

    let v = length * width * heigth * 0.001;
    let neededLiters = v * (1 - percent);
    console.log(neededLiters);
}

sumLiters(["85", "75", "47", "17"])