function pesonalTitles(input) {
  let age = Number(input[0]);
  let title = input[1];

  if (title === "m") {
    if (age >= 16) {
      console.log("Mr.");
    } else {
      console.log("Master");
    }
  } else if (title === "f") {
    if (age >= 16) {
      console.log("Ms.");
    } else {
      console.log("Miss");
    }
  }
}
pesonalTitles([]);
