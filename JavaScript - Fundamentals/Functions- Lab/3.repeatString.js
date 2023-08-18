function repeatString(string, times) {
  let buff = "";

  for (let i = 0; i < times; i++) {
    buff += string;
  }

  return buff;
}
console.log(repeatString("String", 2));
