function projectCreation(input) {
    let architectName = input[0];
    let projectCount = Number(input[1]);
    let hoursNeeded = projectCount * 3;
    console.log(`The architect ${architectName} will need ${hoursNeeded} hours to complete ${projectCount} project/s.`)

}
projectCreation(["Alex", "3"]);