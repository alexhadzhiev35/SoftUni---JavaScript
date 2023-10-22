function encodeAndDecodeMessages() {
  const encodeTextArea = document.querySelectorAll("textarea")[0];
  const decodeTextArea = document.querySelectorAll("textarea")[1];

  const encodeButton = document.querySelectorAll("button")[0];
  const decodeButton = document.querySelectorAll("button")[1];

  encodeButton.addEventListener("click", encode);
  decodeButton.addEventListener("click", decode);

  function encode() {
    const text = encodeTextArea.value;
    let encodedText = "";

    text.split("").forEach((letter) => {
      newChar = letter.charCodeAt() + 1;
      String.fromCharCode(newChar);
      encodedText += String.fromCharCode(newChar);
    });

    encodeTextArea.value = "";
    decodeTextArea.value = encodedText;
  }

  function decode() {
    const text = decodeTextArea.value;
    let decodedText = "";

    text.split("").forEach((letter) => {
      newChar = letter.charCodeAt() - 1;
      String.fromCharCode(newChar);
      decodedText += String.fromCharCode(newChar);
    });

    // decodeTextArea.value = "";
    decodeTextArea.value = decodedText;
  }
}
