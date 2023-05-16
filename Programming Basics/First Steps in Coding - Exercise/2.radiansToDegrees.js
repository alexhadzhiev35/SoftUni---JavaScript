function radiansToDegrees(input) {
    let radians = Number(input[0]);
    let Degrees = radians * (180 / Math.PI);

    console.log(Degrees);
}

radiansToDegrees([]);