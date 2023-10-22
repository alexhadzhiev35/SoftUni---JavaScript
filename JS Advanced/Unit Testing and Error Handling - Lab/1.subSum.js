function subSum(data, startI, endI) {
  let sum = 0;

  if (!Array.isArray(data)) {
    return NaN;
  }

  if (startI < 0) {
    startI = 0;
  }

  if (endI > data.length - 1) {
    endI = data.length - 1;
  }

  for (let i = startI; i <= endI; i++) {
    if (isNaN(data[i])) return NaN;
    sum += data[i];
  }

  return sum;
}

console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300));
console.log(subSum([10, "twenty", 30, 40], 0, 2));
console.log(subSum([], 1, 2));
