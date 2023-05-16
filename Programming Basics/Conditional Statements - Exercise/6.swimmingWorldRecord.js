function worldRecord(input) {
    let recInSec = Number(input[0]);
    let meters = Number(input[1]);
    let meterInSec = Number(input[2]);

    let time = meters * meterInSec;
    let slowing = (Math.floor(meters / 15)) * 12.5;
    let timeNeeded = time + slowing;

    if (timeNeeded < recInSec) {
        console.log(`Yes, he succeeded! The new world record is ${timeNeeded.toFixed(2)} seconds.`)
    } else {
        console.log(`No, he failed! He was ${(timeNeeded - recInSec).toFixed(2)} seconds slower.`)
    }

}

worldRecord(["55555.67", "3017", "5.03"]);