function convert2(name, lastName, hairColor) {
  let myObj = {
    name,
    lastName,
    hairColor,
  };

  console.log(JSON.stringify(myObj));
}

convert2("George", "Jones", "Brown");
