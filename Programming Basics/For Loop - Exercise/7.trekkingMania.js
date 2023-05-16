function trekkingMania(input) {
  let groupsCount = Number(input[0]);
  let peopleCount = 0;

  let range1Count = 0;
  let range2Count = 0;
  let range3Count = 0;
  let range4Count = 0;
  let range5Count = 0;

  for (let i = 1; i < input.length; i++) {
    let peopleInGroup = Number(input[i]);
    peopleCount += peopleInGroup;

    if (peopleInGroup < 6) {
      range1Count += peopleInGroup;
    } else if (peopleInGroup <= 12) {
      range2Count += peopleInGroup;
    } else if (peopleInGroup <= 25) {
      range3Count += peopleInGroup;
    } else if (peopleInGroup <= 40) {
      range4Count += peopleInGroup;
    } else {
      range5Count += peopleInGroup;
    }
  }
  let range1Percent = (range1Count / peopleCount) * 100;
  let range2Percent = (range2Count / peopleCount) * 100;
  let range3Percent = (range3Count / peopleCount) * 100;
  let range4Percent = (range4Count / peopleCount) * 100;
  let range5Percent = (range5Count / peopleCount) * 100;

  console.log(`${range1Percent.toFixed(2)}%`);
  console.log(`${range2Percent.toFixed(2)}%`);
  console.log(`${range3Percent.toFixed(2)}%`);
  console.log(`${range4Percent.toFixed(2)}%`);
  console.log(`${range5Percent.toFixed(2)}%`);
}
trekkingMania([
  "10",
  "10",
  "5",
  "1",
  "100",
  "12",
  "26",
  "17",
  "37",
  "40",
  "78",
]);
