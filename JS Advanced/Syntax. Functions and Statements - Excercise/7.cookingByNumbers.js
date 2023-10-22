function cooking(startNum, ...operations) {
  let initNum = Number(startNum);

  operations.forEach((op) => {
    switch (op) {
      case "chop":
        initNum = initNum / 2;
        console.log(initNum);
        break;

      case "dice":
        initNum = Math.sqrt(initNum);
        console.log(initNum);

        break;

      case "spice":
        initNum += 1;
        console.log(initNum);

        break;

      case "bake":
        initNum *= 3;
        console.log(initNum);

        break;

      case "fillet":
        initNum = initNum - initNum * 0.2;
        console.log(initNum);

        break;
    }
  });
}
cooking("9", "dice", "spice", "chop", "bake", "fillet");
