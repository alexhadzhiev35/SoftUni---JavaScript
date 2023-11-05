function movingTarget(input) {
  let arrSeq = input.shift().split(" ");

  let index = 0;
  let command = input[index];
  index++;

  while (command != "End") {
    let [option, position, num] = command.split(" ");
    let i = Number(position);

    switch (option) {
      case "Shoot":
        let power = Number(num);
        if (arrSeq[i]) {
          arrSeq[i] -= power;
        }
        if (arrSeq[i] <= 0) {
          arrSeq.splice(i, 1);
        }
        break;
      case "Add":
        let value = Number(num);
        if (arrSeq[i]) {
          arrSeq.splice(i, 0, value);
        } else {
          console.log("Invalid placement!");
        }
        break;
      case "Strike":
        let radius = Number(num);
        let startIndex = i - radius;
        let endIndex = i + radius;
        if (startIndex < 0 || endIndex >= arrSeq.length) {
          console.log("Strike missed!");
        } else {
          arrSeq.splice(startIndex, radius * 2 + 1);
        }

        break;
    }

    command = input[index];
    index++;
  }
  console.log(arrSeq.join("|"));
}
movingTarget([
  "52 74 23 44 96 110",
  "Shoot 5 10",
  "Shoot 1 80",
  "Strike 2 1",
  "Add 1 3",
  "Add 1 5",
  "End",
]);
