function addOr(arr) {
  let initValue = 1;
  let newArr = [];

  for (command of arr) {
    switch (command) {
      case "add":
        newArr.push(initValue);
        break;
      case "remove":
        newArr.pop(initValue);

        break;
    }
    initValue++;
  }

  console.log(newArr.length > 0 ? newArr.join("\n") : "Empty");
}

addOr(["add", "add", "remove", "add", "add"]);
