function range(firstChar, secondChar) {
  let startChar = Math.min(firstChar.charCodeAt(), secondChar.charCodeAt());
  let endChar = Math.max(firstChar.charCodeAt(), secondChar.charCodeAt());

  let charArray = [];

  for (let curChar = startChar + 1; curChar < endChar; curChar++) {
    charArray.push(String.fromCharCode(curChar));
  }

  return charArray.join(" ");
}
range("a", "d");
