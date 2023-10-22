function attachGradientEvents() {
  const gradient = document.getElementById("gradient");
  const resultBox = document.getElementById("result");

  gradient.addEventListener("mousemove", gradientMove);
  gradient.addEventListener("mouseout", gradientOut);

  function gradientMove(event) {
    const gradientBoxWidth = event.target.clientWidth;
    const positionOfTheMouse = event.offsetX / (gradientBoxWidth - 1);
    const percentage = Math.trunc(positionOfTheMouse * 100);
    resultBox.textContent = percentage + "%";
  }
  function gradientOut() {
    resultBox.textContent = "";
  }
}
