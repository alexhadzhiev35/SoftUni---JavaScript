function solve() {
  const generateTextArea = document.getElementsByTagName("textarea")[0];
  const checkoutTextArea = document.getElementsByTagName("textarea")[1];

  const generateBtn = document.getElementsByTagName("button")[0];
  const buyBtn = document.getElementsByTagName("button")[1];

  generateBtn.addEventListener("click", addItemHandler);
  buyBtn.addEventListener("click", buyItems);

  function addItemHandler() {
    const itemsArr = JSON.parse(generateTextArea.value);

    itemsArr.forEach((item) => {
      let newRow = document.createElement("tr");

      let tdimg = document.createElement("td");
      let img = document.createElement("img");
      img.src = item.img;
      tdimg.appendChild(img);
      newRow.appendChild(tdimg);

      let tdname = document.createElement("td");
      let paraName = document.createElement("p");
      paraName.textContent = item.name;
      tdname.appendChild(paraName);
      newRow.appendChild(tdname);

      let tdprice = document.createElement("td");
      let paraPrice = document.createElement("p");
      paraPrice.textContent = item.price;
      tdprice.appendChild(paraPrice);
      newRow.appendChild(tdprice);

      let tddeco = document.createElement("td");
      let paraDeco = document.createElement("p");
      paraDeco.textContent = item.decFactor;
      tddeco.appendChild(paraDeco);
      newRow.appendChild(tddeco);

      let tdcheck = document.createElement("td");
      let inputCheck = document.createElement("input");
      inputCheck.type = "checkbox";
      tdcheck.appendChild(inputCheck);
      newRow.appendChild(tdcheck);

      // let htmlTemplate = `
      // <td>
      // <img
      // src=${item.img}>
      // </td>
      // <td>
      // <p>${item.name}</p>
      // </td>
      // <td>
      // <p>${item.price}</p>
      // </td>
      // <td>
      // <p>${item.decFactor}</p>
      // </td>
      // <td>
      // <input type="checkbox"  />
      // </td>
      // `;

      // newRow.innerHTML = htmlTemplate;
      document.querySelector("tbody").appendChild(newRow);
    });

    generateTextArea.value = "";
  }

  function buyItems() {
    const checkBoxes = [...document.querySelectorAll("input[type=checkbox]")];
    let text = "";
    const cart = [];
    let sum = 0;
    const dec = [];

    checkBoxes.forEach((box) => {
      if (box.checked === true) {
        debugger;
        const row = box.parentElement.parentElement;
        const para = row.getElementsByTagName("p");

        const name = para[0].textContent;
        const price = Number(para[1].textContent);
        const decFactor = Number(para[2].textContent);

        cart.push(name);
        sum += price;
        dec.push(decFactor);
      }
    });

    const decSum = dec.reduce((acc, curNum) => acc + curNum, 0);
    const decAverage = decSum / dec.length;

    text += `Bought furniture: ${cart.join(", ")}\n`;
    text += `Total price: ${sum.toFixed(2)}\n`;
    text += `Average decoration factor: ${decAverage}`;

    checkoutTextArea.value = text;
  }
}
