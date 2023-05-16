function timeForReading(input) {
    let pageCount = Number(input[0]);
    let pagesForHour = Number(input[1]);
    let daysNeeded = Number(input[2]);

    let hoursNeededDaily = (pageCount / pagesForHour) / daysNeeded;

    console.log(hoursNeededDaily);
}

timeForReading(["432", "15", "4"]);