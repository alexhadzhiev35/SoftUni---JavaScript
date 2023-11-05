function oddOccurences(input) {
  let elements = input.toLowerCase().split(" ");

  let obj = {};
  let strArr = [];

  for (let el of elements) {
    if (!obj[el]) {
      obj[el] = 0;
    }

    obj[el] += 1;
  }

  for (let [el, count] of Object.entries(obj)) {
    if (Number(count) % 2 !== 0) {
      strArr.push(el);
    }
  }

  sortedArr = strArr.sort((a, b) => b[1] - a[1]);

  console.log(sortedArr);
}

oddOccurences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
