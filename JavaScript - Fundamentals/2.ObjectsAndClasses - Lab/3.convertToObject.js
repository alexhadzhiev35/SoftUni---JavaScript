function convert(jsonText) {
  let jsonObj = JSON.parse(jsonText);

  for (let [key, value] of Object.entries(jsonObj)) {
    console.log(`${key}: ${value}`);
  }
}

convert('{"name": "Peter", "age": 35, "town": "Plovdiv"}');
