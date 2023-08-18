function reverse(input) {
  let arr = input;
  let output = "";

  for (let i = arr.length - 1; i >= 0; i--) {
    output += `${arr[i]} `;
  }

  console.log(output);
}
reverse(["abc", "def", "hig", "klm", "nop"]);
