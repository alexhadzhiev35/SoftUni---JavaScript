function subtract() {
  let num1 = document.getElementById("firstNumber");
  let num2 = document.getElementById("secondNumber");
  let resultBox = document.getElementById("result");

  let result = +num1.value - +num2.value;

  console.log(result);

  resultBox.textContent = result;
}
