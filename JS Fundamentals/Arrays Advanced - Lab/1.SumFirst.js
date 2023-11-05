function sum(arr) {
  let sum = Number(arr.shift()) + Number(arr.pop());
  console.log(sum);
}

sum(["20", "30", "40"]);
