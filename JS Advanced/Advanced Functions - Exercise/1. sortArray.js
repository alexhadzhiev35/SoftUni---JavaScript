function sortArray(arr, option) {
  if (option === "asc") {
    arr.sort((a, b) => a - b);
  } else if (option === "desc") {
    arr.sort((a, b) => b - a);
  }

  return arr;
}
sortArray([14, 7, 17, 6, 8], "desc");
