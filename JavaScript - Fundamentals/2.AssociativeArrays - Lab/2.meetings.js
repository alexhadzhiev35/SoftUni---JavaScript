function meetings(input) {
  let meetingObj = {};

  for (let el of input) {
    let [weekday, person] = el.split(" ");

    if (!meetingObj.hasOwnProperty(weekday)) {
      meetingObj[weekday] = person;
      console.log(`Scheduled for ${weekday}`);
    } else {
      console.log(`Conflict on ${weekday}!`);
    }
  }

  for (let day in meetingObj) {
    console.log(`${day} -> ${meetingObj[day]}`);
  }
}

meetings(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
