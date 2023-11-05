function manipi(commands) {
  let arr = commands.shift().split(" ").map(Number);

  for (let i = 0; i < commands.length; i++) {
    let [command, firstNum, secondNum] = commands[i].split(" ");

    firstNum = Number(firstNum);
    secondNum = Number(secondNum);

    switch (command) {
      case "Add":
        num = firstNum;
        arr.push(num);
        break;
      case "Remove":
        num = firstNum;
        arr = arr.filter((el) => el !== num);
        break;
      case "RemoveAt":
        index = firstNum;
        arr.splice(index, 1);
        break;
      case "Insert":
        num = firstNum;
        index = secondNum;
        arr.splice(index, 0, num);
        break;
    }
  }

  console.log(arr.join(" "));
}
manipi(["6 12 2 65 6 42", "Add 8", "Remove 12", "RemoveAt 3", "Insert 6 2"]);
