function solve(arr) {
  numCount = arr.shift();

  console.log(arr.slice(0, numCount).join(" "));
  console.log(arr.slice(-numCount).join(" "));
}
solve([2, 7, 8, 9]);
