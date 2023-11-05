function maintenance(input) {
  let friendsArr = input.shift().split(", ");

  let blacklisted = 0;
  let lost = 0;

  let command = input.shift();

  let index;
  let name;

  while (command !== "Report") {
    let [option, value1, value2] = command.split(" ");

    switch (option) {
      case "Blacklist":
        name = value1;
        index = friendsArr.indexOf(name);
        if (index !== -1) {
          blacklisted++;
          friendsArr[index] = "Blacklisted";
          console.log(`${name} was blacklisted.`);
        } else {
          console.log(`${name} was not found.`);
        }
        break;
      case "Error":
        index = value1;
        name = friendsArr[index];
        if (index >= 0 && index < friendsArr.length) {
          if (
            friendsArr[index] !== "Lost" &&
            friendsArr[index] !== "Blacklisted"
          ) {
            console.log(`${name} was lost due to an error.`);
            friendsArr[index] = "Lost";
            lost++;
          }
        }
        break;
      case "Change":
        index = value1;
        oldName = friendsArr[index];
        newName = value2;
        if (index >= 0 && index < friendsArr.length) {
          friendsArr[index] = `${newName}`;
          console.log(`${oldName} changed his username to ${newName}.`);
        }
        break;
    }

    command = input.shift();
  }

  console.log(`Blacklisted names: ${blacklisted}`);
  console.log(`Lost names: ${lost}`);
  console.log(friendsArr.join(" "));
}
maintenance([
  "Mike, John, Eddie, William",

  "Blacklist Maya",

  "Error 1",

  "Change 4 George",

  "Report",
]);
