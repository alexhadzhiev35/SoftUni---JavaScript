function solution(...arguments) {
  let argumentObj = {};

  for (let argument of arguments) {
    const argumentType = typeof argument;
    console.log(`${argumentType}: ${argument}`);

    if (!argumentObj[argumentType]) {
      argumentObj[argumentType] = 0;
    }

    argumentObj[argumentType] += 1;
  }

  const sortRes = Object.entries(argumentObj).sort((a, b) => b[1] - a[1]);

  for (let [key, count] of sortRes) {
    console.log(`${key} = ${count}`);
  }
}

solution("cat", 42, function () {
  console.log("Hello world!");
});
