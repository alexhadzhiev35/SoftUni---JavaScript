function employees(arr) {
  for (let name of arr) {
    let person = {
      namePerson: name,
      numberPerson: name.length,
    };
    console.log(
      `Name: ${person.namePerson} -- Personal Number: ${person.numberPerson}`
    );
  }
}

employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
