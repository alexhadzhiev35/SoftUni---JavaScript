function solve(char) {
  let toLower = char.toLowerCase();

  if (toLower === char) {
    console.log("lower-case");
  } else {
    console.log("upper-case");
  }
}
solve("C");
