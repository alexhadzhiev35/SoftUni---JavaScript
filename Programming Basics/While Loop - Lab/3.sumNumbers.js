function sumNumber(input) {
  let index = 0;

  let number = input[index];
  index++;

  let sum = 0;

  while (sum < number) {
    let currNumber = Number(input[index]);
    index++;
    sum += currNumber;
  }
  console.log(sum);
}
sumNumber(["20", "1", "2", "3", "4", "5", "6"]);
