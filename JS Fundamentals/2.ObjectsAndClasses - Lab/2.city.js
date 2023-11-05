function city(myObj) {
  for (let key of Object.keys(myObj)) {
    console.log(`${key} -> ${myObj[key]}`);
  }
}

city({
  name: "Sofia",
  area: "492",
  population: "1238438",
  country: "Bulgaria",
  postCode: "1000",
});
