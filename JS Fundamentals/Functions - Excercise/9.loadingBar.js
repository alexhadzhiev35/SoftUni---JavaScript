function bar(percent) {
  let percentCounter = percent / 10;
  let dotsCounter = 10 - percentCounter;

  if (percentCounter === 10) {
    console.log("100% Complete!");
  } else {
    console.log(
      `${percent}% [${"%".repeat(percentCounter)}${".".repeat(dotsCounter)}]`
    );
    console.log(`Still loading...`);
  }
}
bar(30);
