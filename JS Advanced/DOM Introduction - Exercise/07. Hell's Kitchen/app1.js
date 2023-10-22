function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);
  let dataInput = document.querySelector("#inputs textarea");
  let restaurantOutput = document.querySelector("#bestRestaurant p");
  let workersOutput = document.querySelector("#workers p");

  //["Mikes - Steve 1000, Ivan 200, Paul 800", "Fleet - Maria 850, Janet 650"]

  let resObj = {};

  function onClick() {
    let input = Array.from(JSON.parse(dataInput.value));
    for (el of input) {
      let [restaurantName, workersList] = el.split(" - ");
      let workersWithSalaries = workersList.split(", ");

      for (let el of workersWithSalaries) {
        let [worker, salary] = el.split(" ");

        resObj[restaurantName] = { [`${worker}`]: salary };
      }
    }

    console.log(resObj);
  }
}
