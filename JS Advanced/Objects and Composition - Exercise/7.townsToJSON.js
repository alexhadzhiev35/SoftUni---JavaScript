function towns(input) {
  let [, ...data] = input;
  let resArr = [];

  for (let el of data) {
    el = el.slice(2, -2);

    let [town, latitude, longitude] = el.split(" | ");
    latitude = Number(latitude).toFixed(2);
    longitude = Number(longitude).toFixed(2);

    resArr.push({
      Town: town,
      Latitude: +latitude,
      Longitude: +longitude,
    });
  }

  console.log(JSON.stringify(resArr));
}

towns([
  "| Town | Latitude | Longitude |",
  "| Sofia | 42.696552 | 23.32601 |",
  "| Beijing | 39.913818 | 116.363625 |",
]);
