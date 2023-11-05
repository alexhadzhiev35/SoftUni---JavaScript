function matchFullName(input) {
  let pattern = /\b[A-Z][a-z]+[ ][A-Z][a-z]+\b/g;

  let text = input;

  let validNames = [];

  let match = pattern.exec(text);

  while (match) {
    validNames.push(match[0]);
    match = pattern.exec(text);
  }

  console.log(validNames.join(" "));
}

matchFullName(
  "Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan   Ivanov"
);
