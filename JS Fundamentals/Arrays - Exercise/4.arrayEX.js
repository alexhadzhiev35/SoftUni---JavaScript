function rotation(array, rotations) {
  for (let index = 0; index < rotations; index++) {
    // let curElement = Number(array[index]);
    let cueElement = array.shift();
    array.push(cueElement);
  }
  console.log(array.join(" "));
}
rotation([51, 47, 32, 61, 21], 2);
