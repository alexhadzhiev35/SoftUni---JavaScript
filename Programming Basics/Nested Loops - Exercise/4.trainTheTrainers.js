function trainers(input) {
  let index = 0;

  let jury = Number(input[index]);
  index++;

  let command = input[index];
  index++;

  let sumAll = 0;
  let counterAll = 0;

  while (command !== "Finish") {
    let namePresentation = command;
    let sum = 0;

    for (let i = 0; i < jury; i++) {
      let grade = Number(input[index]);
      index++;
      sum += grade;
      sumAll += grade;
      counterAll++;
    }

    let avgGrade = sum / jury;
    console.log(`${namePresentation} - ${avgGrade.toFixed(2)}.`);

    command = input[index];
    index++;
  }

  let allAllAvg = sumAll / counterAll;
  console.log(`Student's final assessment is ${allAllAvg.toFixed(2)}.`);
}
trainers([
  "2",
  "Objects and Classes",
  "5.77",
  "4.23",
  "Dictionaries",
  "4.62",
  "5.02",
  "RegEx",
  "2.88",
  "3.42",
  "Finish",
]);
