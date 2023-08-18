function pirates(data) {
  let townsObj = {};
  let command = data.shift();

  while (command != "Sail") {
    let [town, people, gold] = command.split("||");

    if (Number(people) >= 0 && Number(gold) >= 0) {
      if (!townsObj.hasOwnProperty(town)) {
        townsObj[town] = [Number(people), Number(gold)];
      } else {
        townsObj[town][0] += Number(people);
        townsObj[town][1] += Number(gold);
      }
    }

    command = data.shift();
  }

  command = data.shift();

  while (command != "End") {
    let cmd = command.split("=>");

    if (cmd[0] === "Plunder") {
      let town = cmd[1];
      let people = cmd[2];
      let gold = cmd[3];

      if (gold >= townsObj[town][1]) {
        gold = townsObj[town][1];
      }
      if (people >= townsObj[town][0]) {
        people = townsObj[town][0];
      }

      townsObj[town][0] -= people;
      townsObj[town][1] -= gold;

      console.log(
        `${town} plundered! ${gold} gold stolen, ${people} citizens killed.`
      );
      if (townsObj[town][0] === 0 || townsObj[town][1] === 0) {
        delete townsObj[town];
        console.log(`${town} has been wiped off the map!`);
      }
    } else if (cmd[0] === "Prosper") {
      let town = cmd[1];
      let gold = Number(cmd[2]);

      if (gold > 0) {
        townsObj[town][1] += gold;
        console.log(
          `${gold} gold added to the city treasury. ${town} now has ${townsObj[town][1]} gold.`
        );
      } else if (gold < 0) {
        console.log(`Gold added cannot be a negative number!`);
      }
    }

    command = data.shift();
  }

  if (Object.keys(townsObj).length !== 0) {
    console.log(
      `Ahoy, Captain! There are ${
        Object.keys(townsObj).length
      } wealthy settlements to go to:`
    );
    for (let town in townsObj) {
      console.log(
        `${town} -> Population: ${townsObj[town][0]} citizens, Gold: ${townsObj[town][1]} kg`
      );
    }
  } else {
    console.log(
      `Ahoy, Captain! All targets have been plundered and destroyed!`
    );
  }

  //   console.table(townsObj);
}

pirates([
  "Nassau||95000||1000",
  "San Juan||930000||1250",
  "Campeche||270000||690",
  "Port Royal||320000||1000",
  "Port Royal||100000||2000",
  "Sail",
  "Prosper=>Port Royal=>-200",
  "Plunder=>Nassau=>94000=>750",
  "Plunder=>Nassau=>1000=>150",
  "Plunder=>Campeche=>150000=>690",
  "End",
]);
