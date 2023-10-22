function create(words) {
  const content = document.getElementById("content");

  for (let word of words) {
    const box = document.createElement("div");
    const paragraph = document.createElement("p");
    paragraph.textContent = word;
    paragraph.style.display = "none";
    box.appendChild(paragraph);

    box.addEventListener("click", () => {
      paragraph.style.display = "block";
    });

    content.appendChild(box);
  }
}
