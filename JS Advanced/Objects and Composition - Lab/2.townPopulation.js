function population(data) {
  let obj = {};
  data.forEach((city) => {
    let [curCity, curPopu] = city.split(" <-> ");
    if (!obj[curCity]) {
      obj[curCity] = +curPopu;
    } else {
      obj[curCity] += +curPopu;
    }
  });

  for (city in obj) {
    console.log(`${city} : ${obj[city]}`);
  }
}

population([
  "Istanbul <-> 100000",
  "Honk Kong <-> 2100004",
  "Jerusalem <-> 2352344",
  "Mexico City <-> 23401925",
  "Istanbul <-> 1000",
]);

population([
  "Sofia <-> 1200000",
  "Montana <-> 20000",
  "New York <-> 10000000",
  "Washington <-> 2345000",
  "Las Vegas <-> 1000000",
]);
