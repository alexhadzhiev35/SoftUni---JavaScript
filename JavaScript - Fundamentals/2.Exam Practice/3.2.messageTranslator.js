function message(data) {
  let inputsCount = data.shift();

  let regex = /!(?<command>[A-Z][a-z]{2,})!:\[(?<string>[A-Za-z]{8,})\]/;

  for (el of data) {
    if (regex.test(el)) {
      let command = el.match(regex).groups.command;
      let string = el.match(regex).groups.string;
      let buff = "";

      for (let i = 0; i < string.length; i++) {
        buff += ` ${string.charCodeAt(i)}`;
      }

      console.log(`${command}:${buff}`);
    } else {
      console.log("The message is invalid");
    }
  }
}
message(["2", "!Send!:[IvanisHere]", "*Time@:[Itis5amAlready"]);
