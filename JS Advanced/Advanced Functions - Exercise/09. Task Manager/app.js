function solve() {
  const formRef = document.querySelector("form");

  const taskRef = document.getElementById("task");
  const descriptionRef = document.getElementById("description");
  const dateRef = document.getElementById("date");

  const sectionRef = document.querySelectorAll("section");
  const openRef = sectionRef[1].children[1];
  const inProgressRef = sectionRef[2].children[1];
  const completeRef = sectionRef[3].children[1];

  formRef.addEventListener("submit", onSubmit);

  function onSubmit(event) {
    event.preventDefault();

    const taskValue = taskRef.value;
    const descriptionValue = descriptionRef.value;
    const dateValue = dateRef.value;

    if (!taskValue || !descriptionValue || !dateValue) {
      return;
    }

    let myArticle = createArticle(taskValue, descriptionValue, dateValue);
    openRef.appendChild(myArticle);

    taskRef.value = "";
    descriptionRef.value = "";
    dateRef.value = "";
  }

  function createArticle(name, desc, date) {
    let article = document.createElement("article");
    article.innerHTML = `
    <h3>${name}</h3>
    <p>Description: ${desc}</p>
    <p>Due Date: ${date}</p>
    <div class="flex">
        <button class="green">Start</button>
        <button class="red">Delete</button>
    </div>
    `;

    const buttons = article.querySelectorAll("button");
    let startBtn = buttons[0];
    let deleteBtn = buttons[1];

    deleteBtn.addEventListener("click", onDelete);

    startBtn.addEventListener("click", moveArticle);

    return article;
  }

  function moveArticle(event) {
    const article = event.target.parentElement.parentElement;
    const btns = article.querySelectorAll("button");
    const deleteBtn = btns[0];
    const finishBtn = btns[1];

    deleteBtn.removeEventListener("click", moveArticle);
    deleteBtn.addEventListener("click", onDelete);
    finishBtn.removeEventListener("click", onDelete);
    finishBtn.addEventListener("click", onFinish);

    deleteBtn.textContent = "Delete";
    deleteBtn.classList.remove("green");
    deleteBtn.classList.add("red");

    finishBtn.textContent = "Finish";
    finishBtn.classList.remove("red");
    finishBtn.classList.add("orange");

    inProgressRef.appendChild(article);
  }

  function onDelete(event) {
    event.preventDefault();
    event.target.parentElement.parentElement.remove();
  }

  function onFinish(event) {
    event.preventDefault();
    const article = event.target.parentElement.parentElement;

    completeRef.appendChild(article);
    event.target.parentElement.remove();
  }
}
