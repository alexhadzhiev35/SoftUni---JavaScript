function calorieObject(data) {
  let myObj = {};

  for (let i = 0; i < data.length; i += 2) {
    let key = data[i];
    let value = +data[i + 1];

    myObj[key] = value;
  }

  console.log(myObj);
}

calorieObject(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
