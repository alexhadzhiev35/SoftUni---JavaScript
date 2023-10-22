function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    let searchedString = document.getElementById("searchField");
    let columns = document.querySelectorAll("tbody tr td");
    let rows = document.querySelectorAll("tbody tr");

    for (let row of rows) {
      row.classList.remove("select");
    }

    for (let col of columns) {
      if (col.textContent.includes(searchedString.value)) {
        col.parentElement.classList.add("select");
      }
    }

    searchedString.value = "";
  }
}
