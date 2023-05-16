function buildding(input) {
  let floor = Number(input[0]);
  let apartmentCount = Number(input[1]);

  for (let x = floor; x > 0; x--) {
    let buff = "";
    for (let y = 0; y < apartmentCount; y++) {
      if (x === floor) {
        buff += `L${x}${y} `;
      } else if (x % 2 == 0) {
        buff += `O${x}${y} `;
      } else {
        buff += `A${x}${y} `;
      }
    }
    console.log(buff);
  }
}

buildding(["1", "4"]);
