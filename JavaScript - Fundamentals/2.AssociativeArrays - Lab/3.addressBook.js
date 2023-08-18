function addressBook(input) {
  let addrBook = {};

  for (let line of input) {
    let [name, address] = line.split(":");

    addrBook[name] = address;
  }

  let sortArr = Object.keys(addrBook).sort((a, b) => a.localeCompare(b));

  for (let key of sortArr) {
    console.log(`${key} -> ${addrBook[key]}`);
  }
}

addressBook([
  "Bob:Huxley Rd",
  "John:Milwaukee Crossing",
  "Peter:Fordem Ave",
  "Bob:Redwing Ave",
  "George:Mesta Crossing",
  "Ted:Gateway Way",
  "Bill:Gateway Way",
  "John:Grover Rd",
  "Peter:Huxley Rd",
  "Jeff:Gateway Way",
  "Jeff:Huxley Rd",
]);
