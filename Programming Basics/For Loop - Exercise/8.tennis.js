function tennis(input) {
  let tournamentsCount = Number(input[0]);
  let startingPoints = Number(input[1]);
  let pointsWon = 0;
  let tournamentsWon = 0;

  for (let i = 2; i < tournamentsCount + 2; i++) {
    let tournamentResult = input[i];
    if (tournamentResult === "W") {
      pointsWon += 2000;
      tournamentsWon++;
    } else if (tournamentResult === "F") {
      pointsWon += 1200;
    } else if (tournamentResult === "SF") {
      pointsWon += 720;
    }
  }

  console.log(`Final points: ${startingPoints + pointsWon}`);

  avgPoints = Math.floor(pointsWon / tournamentsCount);
  console.log(`Average points: ${avgPoints}`);

  let tournamentWonPercent = (tournamentsWon / tournamentsCount) * 100;
  console.log(`${tournamentWonPercent.toFixed(2)}%`);
}
tennis(["5", "1400", "F", "SF", "W", "W", "SF"]);
