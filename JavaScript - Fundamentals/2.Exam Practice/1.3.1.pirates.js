function pirates(data) {
  let target = [];

  for (let line of data) {
    if (line === "Sail") {
      break;
    }

    let [city, population, gold] = line.split("||");
    population = Number(population);
    gold = Number(gold);
    let currentCity = target.find((x) => x.city === city);
    if (!currentCity) {
      let newTarget = {
        city,
        population: population,
        gold: gold,
      };
      target.push(newTarget);
    } else {
      currentCity.population += population;
      currentCity.gold += gold;
    }
  }

  let index = data.indexOf("Sail") + 1;
  let command = data[index];
  index++;

  while (command !== "End") {
    let tokens = command.split("=>");
    let action = tokens[0];
    let city = tokens[1];
    let population;
    let gold;

    let indexCurrentCity;

    let currentCity = target.find((x, i) => {
      if (x.city === city) {
        indexCurrentCity = i;
        return true;
      }
      return false;
    });

    switch (action) {
      case "Plunder":
        if (!currentCity) {
          break;
        }

        population = Number(tokens[2]);
        gold = Number(tokens[3]);

        currentCity.population -= population;
        currentCity.gold -= gold;

        console.log(
          `${city} plundered! ${gold} gold stolen, ${population} citizens killed.`
        );

        if (currentCity.population <= 0 || currentCity.gold <= 0) {
          target.splice(indexCurrentCity, 1);
          console.log(`${city} has been wiped off the map!`);
        }

        break;
      case "Prosper":
        if (!currentCity) {
          break;
        }

        gold = Number(tokens[2]);

        if (gold < 0) {
          console.log("Gold added cannot be a negative number!");
          break;
        }

        currentCity.gold += gold;
        console.log(
          `${gold} gold added to the city treasury. ${city} now has ${currentCity.gold} gold.`
        );

        break;
    }

    command = data[index];
    index++;
  }

  if (target.length > 0) {
    console.log(
      `Ahoy, Captain! There are ${target.length} wealthy sttlements to go to:`
    );
    for (let el of target) {
      console.log(
        `${el.city} -> Populationm: ${el.population} citizens, Gold: ${el.gold} kg`
      );
    }
  } else {
    console.log(
      `Ahoy, Captain! All targets have been plundered and destroyed!`
    );
  }
}

pirates([
  "Tortuga||345000||1250",
  "Santo Domingo||240000||630",
  "Havana||410000||1100",
  "Sail",
  "Plunder=>Tortuga=>75000=>380",
  "Prosper=>Santo Domingo=>180",
  "End",
]);
