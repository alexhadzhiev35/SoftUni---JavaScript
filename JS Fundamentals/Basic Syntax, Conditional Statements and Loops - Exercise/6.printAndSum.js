function printAndSum(n, m) {
  let sum = 0;
  let buff = "";
  for (let i = n; i <= m; i++) {
    sum += i;
    buff += `${i} `;
  }
  console.log(buff);
  console.log(`Sum: ${sum}`);
}
printAndSum(0, 26);
