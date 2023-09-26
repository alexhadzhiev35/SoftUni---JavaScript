function pies(pies, startFlavor, endFlavor) {
  const start = pies.indexOf(startFlavor);
  const end = pies.indexOf(endFlavor);

  const res = pies.slice(start, end + 1);

  return res;
}
pies(
  [
    "Pumpkin Pie",
    "Key Lime Pie",
    "Cherry Pie",
    "Lemon Meringue Pie",
    "Sugar Cream Pie",
  ],
  "Key Lime Pie",
  "Lemon Meringue Pie"
);
