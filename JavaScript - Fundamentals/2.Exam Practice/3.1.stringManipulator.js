function manipulator(input) {
  let myStr = input.shift();

  for (let line of input) {
    if (line === "End") {
      break;
    }

    if (line.includes("Translate")) {
      let [, char, replacement] = line.split(" ");
      while (myStr.includes(char)) {
        myStr = myStr.replace(char, replacement);
      }
      console.log(myStr);
    } else if (line.includes("Includes")) {
      let [, substring] = line.split(" ");
      if (myStr.includes(substring)) {
        console.log("True");
      } else {
        console.log("False");
      }
    } else if (line.includes("Start")) {
      let [, substring] = line.split(" ");
      if (myStr.startsWith(substring)) {
        console.log("True");
      } else {
        console.log("False");
      }
    } else if (line.includes("Lowercase")) {
      myStr = myStr.toLowerCase();
      console.log(myStr);
    } else if (line.includes("FindIndex")) {
      let [, char] = line.split(" ");
      console.log(myStr.lastIndexOf(char));
    } else if (line.includes("Remove")) {
      let [, startIndex, count] = line.split(" ");
      firstHalf = myStr.substring(
        startIndex,
        Number(count) + Number(startIndex)
      );
      myStr = myStr.replace(firstHalf, "");
      console.log(myStr);
    }
  }
}

manipulator([
  "*S0ftUni is the B3St Plac3**",
  "Translate 2 o",
  "Includes best",
  "Start the",
  "Lowercase",
  "FindIndex p",
  "Remove 2 7",
  "End",
]);
