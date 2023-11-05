function minerTask(input) {
  let resources = {};

  for (let i = 0; i < input.length; i += 2) {
    let resource = input[i];
    let quantity = Number(input[i + 1]);

    if (resources[resource]) {
      resources[resource] += quantity;
    } else {
      resources[resource] = quantity;
    }
  }

  for (const resource in resources) {
    console.log(`${resource} -> ${resources[resource]}`);
  }
}

minerTask(["gold", "155", "silver", "10", "copper", "17", "gold", "15"]);
