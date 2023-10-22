function checker(x1, y1, x2, y2) {
  function isInt(num) {
    if (num - Math.floor(num) === 0) {
      return true;
    } else {
      return false;
    }
  }

  comp1 = isInt(Math.sqrt(Math.pow(0 - x1, 2) + Math.pow(0 - y1, 2)));
  comp2 = isInt(Math.sqrt(Math.pow(0 - x2, 2) + Math.pow(0 - y2, 2)));
  comp3 = isInt(Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)));

  console.log(`{${x1}, ${y1}} to {0, 0} is ${comp1 ? "valid" : "invalid"}`);
  console.log(`{${x2}, ${y2}} to {0, 0} is ${comp2 ? "valid" : "invalid"}`);
  console.log(
    `{${x1}, ${y1}} to {${x2}, ${y2}} is ${comp3 ? "valid" : "invalid"}`
  );
}

checker(2, 1, 1, 1);
