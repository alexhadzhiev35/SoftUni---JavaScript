function areaOfFigures(input) {
    let form = input[0];

    if (form === "square") {
        let side = Number(input[1]);
        let result = Math.pow(side, 2);
        console.log(result.toFixed(3));
    } else if (form === "rectangle") {
        let sideA = Number(input[1]);
        let sideB = Number(input[2]);
        let result = sideA * sideB;
        console.log(result.toFixed(3));
    } else if (form === "circle") {
        let radius = Number(input[1]);
        let result = Math.PI * Math.pow(radius, 2);
        console.log(result.toFixed(3));
    } else if (form === "triangle") {
        let side = Number(input[1]);
        let height = Number(input[2]);
        let result = (side * height) / 2;
        console.log(result.toFixed(3));
    }

}

areaOfFigures(["circle", "6"]);