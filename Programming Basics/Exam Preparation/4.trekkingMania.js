function trekking(input) {
  let groupsCount = Number(input[0]);

  let rangeMusalaCount = 0;
  let rangeMonblanCount = 0;
  let rangeKilimanjaroCount = 0;
  let rangeK2Count = 0;
  let rangeEverestCount = 0;

  let sumPeople = 0;

  for (let i = 1; i <= groupsCount; i++) {
    let curGroupCount = Number(input[i]);
    sumPeople += curGroupCount;
    if (curGroupCount >= 41) {
      rangeEverestCount += curGroupCount;
    } else if (curGroupCount >= 26) {
      rangeK2Count += curGroupCount;
    } else if (curGroupCount >= 13) {
      rangeKilimanjaroCount += curGroupCount;
    } else if (curGroupCount >= 6) {
      rangeMonblanCount += curGroupCount;
    } else {
      rangeMusalaCount += curGroupCount;
    }
  }

  let musalaP = ((rangeMusalaCount / sumPeople) * 100).toFixed(2);
  let monblanP = ((rangeMonblanCount / sumPeople) * 100).toFixed(2);
  let kilimanjaroP = ((rangeKilimanjaroCount / sumPeople) * 100).toFixed(2);
  let k2P = ((rangeK2Count / sumPeople) * 100).toFixed(2);
  let everestP = ((rangeEverestCount / sumPeople) * 100).toFixed(2);

  console.log(sumPeople);
  console.log(musalaP);
  console.log(monblanP);
  console.log(kilimanjaroP);
  console.log(k2P);
  console.log(everestP);
}
trekking(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"]);
