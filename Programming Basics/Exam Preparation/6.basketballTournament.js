function basketballTournament(input) {
  let index = 0;

  let command = input[index];
  index++;

  let wins = 0;
  let loses = 0;
  let total = 0;

  while (command !== "End of tournaments") {
    let tournamentsName = command;
    let gameNumber = Number(input[index]);
    index++;

    for (let i = 0; i < gameNumber; i++) {
      total++;
      let teamA = Number(input[index]);
      index++;
      let teamB = Number(input[index]);
      index++;

      if (teamA > teamB) {
        console.log(
          `Game ${i + 1} of tournament ${tournamentsName}: win with ${
            teamA - teamB
          } points.`
        );
        wins++;
      } else {
        console.log(
          `Game ${i + 1} of tournament ${tournamentsName}: lost with ${
            teamB - teamA
          } points.`
        );
        loses++;
      }
    }

    command = input[index];
    index++;
  }

  //   let total = wins + total;
  let winsP = (wins / total) * 100;
  let lossesP = (loses / total) * 100;

  console.log(`${winsP.toFixed(2)}% matches win`);
  console.log(`${lossesP.toFixed(2)}% matches lost`);
}
basketballTournament([
  "Dunkers",
  "2",
  "75",
  "65",
  "56",
  "73",
  "Fire Girls",
  "3",
  "67",
  "34",
  "83",
  "98",
  "66",
  "45",
  "End of tournaments",
]);
