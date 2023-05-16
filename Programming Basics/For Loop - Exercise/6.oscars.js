function oscars(input) {
  let actorName = input[0];
  let startPoints = Number(input[1]);
  let judgeCount = Number(input[2]);
  let pointsHave = 0;

  for (let i = 3; i < judgeCount + 3; i + 2) {
    let currentName = input[i].length;
    let currentPoints = Number(input[i + 1]);
    startPoints += (currentPoints * currentName) / 2;

    console.log(startPoints);

    // let pointSum = (pointsHave + startPoints).toFixed(2);
    // if (pointSum < 1250.5) {
    //   let pointNeeded = (1250.5 - pointSum).toFixed(1);
    //   console.log(`Sorry, ${actorName} you need ${pointNeeded} more!`);
    // } else {
    //   console.log(
    //     `Congratulations, ${actorName} got a nominee for leading role with ${pointSum}!`
    //   );
    //   return;
    // }
  }
}

oscars([
  "Zahari Baharov",
  "205",
  "4",
  "Johnny Depp",
  "45",
  "Will Smith",
  "29",
  "Jet Lee",
  "10",
  "Matthew Mcconaughey",
  "39",
]);
