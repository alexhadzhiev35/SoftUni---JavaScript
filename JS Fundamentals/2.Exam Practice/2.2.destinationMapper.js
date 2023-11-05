function mapper(str) {
  let pattern = /(=|\/)(?<dest>[A-Z][A-Za-z]{2,})\1/gm;

  let points = 0;
  let destinations = [];

  let foundDestinations = [...str.matchAll(pattern)];

  for (el of foundDestinations) {
    let curDestination = el.groups.dest;
    destinations.push(curDestination);
    points += curDestination.length;
  }

  console.log(`Destinations: ${destinations ? destinations.join(", ") : ""}`);
  console.log(`Travel Points: ${points}`);
}

mapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
