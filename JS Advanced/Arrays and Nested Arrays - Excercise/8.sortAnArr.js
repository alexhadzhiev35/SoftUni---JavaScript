function sort(data) {
  data.sort((a, b) => {
    if (a.length !== b.length) {
      return a.length - b.length;
    }
    return a.localeCompare(b);
  });

  console.log(data.join("\n"));
}
sort(["alpha", "beta", "gamma"]);
sort(["test", "Deny", "omen", "Default"]);
