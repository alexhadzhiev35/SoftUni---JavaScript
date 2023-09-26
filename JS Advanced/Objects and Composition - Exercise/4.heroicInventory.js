function heroicInventory(data) {
  let heroArr = [];

  for (let el of data) {
    let [name, level, items] = el.split(" / ");
    level = Number(level);
    items = items ? items.split(", ") : [];

    heroArr.push({
      name,
      level,
      items,
    });
  }

  console.log(JSON.stringify(heroArr));
}
heroicInventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
