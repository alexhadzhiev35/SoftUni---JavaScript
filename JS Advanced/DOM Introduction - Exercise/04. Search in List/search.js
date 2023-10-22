function search() {
  let towns = document.querySelectorAll("#towns li");
  let searchText = document.getElementById("searchText").value;
  let result = document.getElementById("result");
  let sum = 0;

  for (let town of towns) {
    town.innerHTML = town.textContent;
  }

  for (let town of towns) {
    if (town.textContent.includes(searchText)) {
      town.innerHTML = ` <u><b>${town.textContent}</b></u>`;
      sum += 1;
    }

    //  console.log(town);
  }

  result.textContent = `${sum} matches found`;
}
