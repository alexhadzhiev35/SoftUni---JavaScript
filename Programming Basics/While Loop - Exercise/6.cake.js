function cake(input) {
  let index = 0;

  let length = Number(input[index]);
  index++;
  let height = Number(input[index]);
  index++;

  let maxCount = length * height;
  let command = input[index];
  index++;

  while (command !== "STOP") {
    pieces = Number(command);
    maxCount -= pieces;

    if (maxCount < 0) {
      break;
    }

    command = input[index];
    index++;
  }

  if (maxCount > 0) {
    console.log(`${maxCount} pieces are left.`);
  } else {
    console.log(
      `No more cake left! You need ${Math.abs(maxCount)} pieces more.`
    );
  }
}
cake(["10", "10", "20", "20", "20", "20", "21"]);
