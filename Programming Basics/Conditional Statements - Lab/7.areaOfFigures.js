function areaOfFigures(input) {
    let form = input[0];
    let side = input[1];
    let height = input[2];
    let area = 0;
    if (form === "square") {
        area = side * side;
        console.log(area.toFixed(3));
    } else if (form === "rectangle") {
        area = side * height;
        console.log(area.toFixed(3));
    } else if (form === "circle") {
        area = Math.PI * side * side;
        console.log(area.toFixed(3));
    } else if (form === "triangle") {
        area = (side * height) / 2
        console.log(area.toFixed(3));
    }


}

areaOfFigures(["circle", "6"]);