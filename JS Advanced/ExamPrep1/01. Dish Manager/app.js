window.addEventListener("load", solve);

function solve() {
  const firstNameInput = document.getElementById("first-name");
  const lastNameInput = document.getElementById("last-name");
  const ageInput = document.getElementById("age");
  const dishDescriptionInput = document.getElementById("task");
  const genderSelect = document.getElementById("genderSelect");

  const form = document.getElementsByTagName("form")[0];
  const formBtn = document.getElementById("form-btn");
  const clearBtn = document.getElementById("clear-btn");
  const inProgressSection = document.getElementById("in-progress");
  const finishedSection = document.getElementById("finished");
  const progressCount = document.getElementById("progress-count");

  formBtn.addEventListener("click", submitHandler);
  clearBtn.addEventListener("click", clearHandler);

  function submitHandler(e) {
    e.preventDefault();
    if (
      !firstNameInput.value &&
      !lastNameInput.value &&
      !ageInput.value &&
      !dishDescriptionInput.value
    ) {
      return;
    }

    const template = `
    <article>
    <h4>${firstNameInput.value} ${lastNameInput.value}</h4>
    <p>${genderSelect.value}, ${ageInput.value}</p>
    <p>Dish description: ${dishDescriptionInput.value}</p>
    </article>
    <button class="edit-btn">Edit</button>
    <button class="complete-btn">Mark as complete</button>`;

    const liEl = document.createElement("li");
    liEl.innerHTML = template;
    liEl.className = "each-line";

    inProgressSection.appendChild(liEl);
    const editBtn = liEl.querySelector(".edit-btn");
    const completeBtn = liEl.querySelector(".complete-btn");

    editBtn.addEventListener("click", editHandler);
    completeBtn.addEventListener("click", completeHandler);

    firstNameInput.value = "";
    lastNameInput.value = "";
    ageInput.value = "";
    dishDescriptionInput.value = "";
    // genderSelect.value = "Male";
    progressCount.textContent = Number(progressCount.textContent) + 1;
  }

  function editHandler(e) {
    e.preventDefault();
    const listItem = e.target.parentElement;
    const [fName, lName] = listItem.querySelector("h4").textContent.split(" ");
    const [gender, age] = listItem
      .querySelectorAll("p")[0]
      .textContent.split(", ");
    const description = listItem
      .querySelectorAll("p")[1]
      .textContent.replace("Dish description: ", "");

    firstNameInput.value = fName;
    lastNameInput.value = lName;
    genderSelect.value = gender;
    ageInput.value = age;
    dishDescriptionInput.value = description;
    e.target.parentElement.remove();
    // debugger;
    progressCount.textContent = Number(progressCount.textContent) - 1;
  }

  function completeHandler(e) {
    e.preventDefault();
    const liEl = e.target.parentElement;

    finishedSection.appendChild(liEl);
    progressCount.textContent = Number(progressCount.textContent) - 1;

    const btns = liEl.querySelectorAll("button");
    for (let btn of btns) {
      btn.remove();
    }
  }

  function clearHandler(e) {
    let liELs = e.target.parentElement.querySelectorAll("li");
    if (!liELs) return;
    for (let el of liELs) {
      el.remove();
    }
    // debugger;
  }

  // const editBtns = document.querySelectorAll(".edit-btn");
  // for (let btn of editBtns) {
  //   btn.addEventListener("click", editHandler);
  // }
}
