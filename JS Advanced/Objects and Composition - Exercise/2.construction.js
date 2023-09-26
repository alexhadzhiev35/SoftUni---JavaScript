function construction(worker) {
  function hydrate(w) {
    const required = 0.1 * w.experience * w.weight;
    w.levelOfHydrated += required;
  }

  if (worker.dizziness === true) {
    hydrate(worker);
  }

  return worker;
}

console.log(
  construction({
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true,
  })
);
