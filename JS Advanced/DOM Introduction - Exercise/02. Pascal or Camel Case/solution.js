function solve() {
  let textInput = document.getElementById("text").value;
  let caseInput = document.getElementById("naming-convention").value;
  let result = document.getElementById("result");

  if (caseInput === "Camel Case") {
    let wordArr = textInput.toLowerCase().split(" ");
    firstWord = wordArr.shift();

    let newArr = wordArr.map((el) => el[0].toUpperCase() + el.slice(1));
    newArr.unshift(firstWord);

    result.textContent = newArr.join("");
  } else if (caseInput === "Pascal Case") {
    let wordArr = textInput.toLowerCase().split(" ");
    let newArr = wordArr.map((el) => el[0].toUpperCase() + el.slice(1));

    result.textContent = newArr.join("");
  } else {
    result.textContent = "Error!";
  }
}
