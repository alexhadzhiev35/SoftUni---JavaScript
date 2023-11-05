function extractFile(input) {
  let lastSlashIndex = input.lastIndexOf("\\");
  let lastDotIndex = input.lastIndexOf(".");

  let fileName = input.substring(lastSlashIndex + 1, lastDotIndex);
  let extension = input.substring(lastDotIndex + 1);
  console.log(`File name: ${fileName}`);
  console.log(`File extension: ${extension}`);
}

extractFile("C:\\Internal\\training-internal\\Template.pptx");
