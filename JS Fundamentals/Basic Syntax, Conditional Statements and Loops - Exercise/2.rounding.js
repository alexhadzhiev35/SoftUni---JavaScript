function rounding(num, precision) {
  let curNum = num;
  let dot = precision;

  if (dot > 15) dot = 15;

  console.log(`${parseFloat(curNum.toFixed(dot))}`);
}
rounding(10.5, 3);
