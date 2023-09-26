function listOfNumber(arrName) {
  let sortedName = arrName.sort((a, b) => a.localeCompare(b));

  for (let i = 0; i < sortedName.length; i++) {
    console.log(`${i + 1}.${sortedName[i]}`);
  }
}
