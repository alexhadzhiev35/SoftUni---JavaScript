function wordTracker(input) {
  let map = new Map();
  let wordsToCheck = input.shift().split(" ");

  wordsToCheck.forEach((word) => {
    map.set(word, 0);
  });

  for (let el of input) {
    if (map.has(el)) {
      map.set(el, map.get(el) + 1);
    }
  }

  let sorted = Array.from(map).sort((a, b) => b[1] - a[1]);

  for (let [word, count] of sorted) {
    console.log(`${word} - ${count}`);
  }
}

wordTracker([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurrences",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);
