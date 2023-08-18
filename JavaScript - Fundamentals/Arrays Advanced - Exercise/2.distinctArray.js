function distinctArray(input) {
  //   uniqueInput = input.filter((el, index) => {
  //     return input.indexOf(el) === index;
  //   });

  //   console.log(uniqueInput.join(" "));

  let uniqueInput = [];

  for (number of input) {
    if (!uniqueInput.includes(number)) {
      uniqueInput.push(number);
    }
  }

  console.log(uniqueInput.join(" "));
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
