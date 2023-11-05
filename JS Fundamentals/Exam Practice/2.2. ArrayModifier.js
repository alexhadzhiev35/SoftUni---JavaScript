function modifier(input) {
  let initArr = input.shift().split(" ").map(Number);

  let index = 0;
  let command = input[index];
  index++;

  while (command !== "end") {
    let [option, i1, i2] = command.split(" ");

    switch (option) {
      case "swap":
        let temp = initArr[i1];
        initArr[i1] = initArr[i2];
        initArr[i2] = temp;
        break;
      case "multiply":
        let product = initArr[i1] * initArr[i2];
        initArr[i1] = product;
        break;
      case "decrease":
        initArr = initArr.map((el) => el - 1);
        break;
    }

    command = input[index];
    index++;
  }

  console.log(initArr.join(", "));
}
modifier([
  "23 -2 321 87 42 90 -123",
  "swap 1 3",
  "swap 3 6",
  "swap 1 0",
  "multiply 1 2",
  "multiply 2 1",
  "decrease",
  "end",
]);
