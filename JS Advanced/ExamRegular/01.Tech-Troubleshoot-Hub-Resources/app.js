window.addEventListener("load", solution);

function solution() {
  const formEl = document.querySelector("form");
  const previewEl = document.querySelector(".preview-list");
  const pendingEl = document.querySelector(".pending-list");
  const resolvedEl = document.querySelector(".resolved-list");

  const addBtn = document.getElementById("add-btn");

  const employeeInputEl = document.getElementById("employee");
  const categorySelectEl = document.getElementById("category");
  const urgencySelectEl = document.getElementById("urgency");
  const teamSelectEl = document.getElementById("team");
  const descriptionInputEl = document.getElementById("description");

  formEl.addEventListener("submit", addHandler);

  function addHandler(e) {
    e.preventDefault();

    if (
      !employeeInputEl.value ||
      !categorySelectEl.value ||
      !urgencySelectEl.value ||
      !teamSelectEl.value ||
      !descriptionInputEl.value
    ) {
      return;
    }

    const employee = employeeInputEl.value;
    const category = categorySelectEl.value;
    const urgency = urgencySelectEl.value;
    const team = teamSelectEl.value;
    const description = descriptionInputEl.value;

    previewEl.appendChild(
      createLiItem(employee, category, urgency, team, description)
    );

    employeeInputEl.value = "";
    categorySelectEl.value = "";
    urgencySelectEl.value = "";
    teamSelectEl.value = "";
    descriptionInputEl.value = "";

    addBtn.disabled = true;
  }

  function createLiItem(employee, category, urgency, team, description) {
    let li = document.createElement("li");
    li.classList.add("problem-content");

    //Creating the elements one by one
    let article = document.createElement("article");

    let nameP = document.createElement("p");
    nameP.textContent = `From: ${employee}`;

    let categoryP = document.createElement("p");
    categoryP.textContent = `Category: ${category}`;

    let urgencyP = document.createElement("p");
    urgencyP.textContent = `Urgency: ${urgency}`;

    let teamP = document.createElement("p");
    teamP.textContent = `Assigned to: ${team}`;

    let descriptionP = document.createElement("p");
    descriptionP.textContent = `Description: ${description}`;

    let editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", editHandler);
    let continueBtn = document.createElement("button");
    continueBtn.classList.add("continue-btn");
    continueBtn.textContent = "Continue";
    continueBtn.addEventListener("click", continueHandler);

    //Appending element to the article
    article.appendChild(nameP);
    article.appendChild(categoryP);
    article.appendChild(urgencyP);
    article.appendChild(teamP);
    article.appendChild(descriptionP);

    //Appending the article and buttons to the li item
    li.appendChild(article);
    li.appendChild(editBtn);
    li.appendChild(continueBtn);

    //return the li item
    return li;
  }

  function editHandler(e) {
    paragraphs = e.target.parentElement.querySelectorAll("p");

    const employee = paragraphs[0].textContent.replace("From: ", "");
    const category = paragraphs[1].textContent.replace("Category: ", "");
    const urgency = paragraphs[2].textContent.replace("Urgency: ", "");
    const team = paragraphs[3].textContent.replace("Assigned to: ", "");
    const description = paragraphs[4].textContent.replace("Description: ", "");
    // debugger;

    employeeInputEl.value = employee;
    categorySelectEl.value = category;
    urgencySelectEl.value = urgency;
    teamSelectEl.value = team;
    descriptionInputEl.value = description;

    addBtn.disabled = false;

    e.target.parentElement.remove();
  }

  function continueHandler(e) {
    const currentLi = e.target.parentElement;
    // debugger;
    const btns = currentLi.querySelectorAll("button");

    const resolveBtn = document.createElement("button");
    resolveBtn.classList.add("resolve-btn");
    resolveBtn.textContent = "Resolved";
    resolveBtn.addEventListener("click", resolveHandler);

    e.target.parentElement.appendChild(resolveBtn);

    for (let btn of btns) {
      btn.remove();
    }

    pendingEl.appendChild(currentLi);
  }

  function resolveHandler(e) {
    const currentLi = e.target.parentElement;
    const btn = currentLi.querySelector("button");

    const clearBtn = document.createElement("button");
    clearBtn.classList.add("clear-btn");
    clearBtn.textContent = "Clear";
    clearBtn.addEventListener("click", clearHandler);

    e.target.parentElement.appendChild(clearBtn);

    btn.remove();

    resolvedEl.appendChild(currentLi);
  }

  function clearHandler(e) {
    e.target.parentElement.remove();
    addBtn.disabled = false;
  }
}
