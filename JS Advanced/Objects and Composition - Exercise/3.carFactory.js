function factory(data) {
  let res = {
    model: data.model,
  };

  let power = data.power;
  if (power <= 90) {
    res.engine = { power: 90, volume: 1800 };
  } else if (power <= 120) {
    res.engine = { power: 120, volume: 2400 };
  } else {
    res.engine = { power: 200, volume: 3500 };
  }

  let carriage = data.carriage;

  if (carriage === "hatchback") {
    res.carriage = { type: "hatchback", color: data.color };
  } else {
    res.carriage = { type: "coupe", color: data.color };
  }

  let wheelsize = data.wheelsize;
  if (wheelsize % 2 === 0) {
    wheelsize -= 1;
  }

  res.wheels = [wheelsize, wheelsize, wheelsize, wheelsize];

  console.log(res);
  return res;
}

factory({
  model: "Ferrari",
  power: 200,
  color: "red",
  carriage: "coupe",
  wheelsize: 21,
});
