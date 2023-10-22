function solve() {
  let cartProducts = [];
  let cartPrice = 0;

  const products = document.querySelectorAll(".product");
  const textArea = document.getElementsByTagName("textarea")[0];
  const checkoutBtn = document.querySelector(".checkout");
  const addBtns = Array.from(document.querySelectorAll(".add-product"));

  for (let product of products) {
    const productName = product.children[1].children[0].textContent;
    const productPrice = Number(product.children[3].textContent);

    const btnAdd = product.children[2].children[0];
    btnAdd.addEventListener("click", () => {
      if (cartProducts.indexOf(productName) === -1) {
        cartProducts.push(productName);
      }
      cartPrice += productPrice;

      textArea.value += `Added ${productName} for ${productPrice.toFixed(
        2
      )} to the cart.\n`;
    });
  }

  checkoutBtn.addEventListener("click", () => {
    textArea.value += `You bought ${cartProducts.join(
      ", "
    )} for ${cartPrice.toFixed(2)}.`;
    checkoutBtn.setAttribute("disabled", "");
    addBtns.forEach((btn) => btn.setAttribute("disabled", ""));
  });
}
