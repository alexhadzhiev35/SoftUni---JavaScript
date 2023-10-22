function deleteByEmail() {
  const emailInput = document.getElementsByTagName("input")[0];
  const emails = document.querySelectorAll("#customers tr td:nth-child(2)");

  for (let email of emails) {
    if (email.textContent == emailInput.value) {
      let row = email.parentNode;
      row.parentNode.removeChild(row);
      document.getElementById("result").textContent = "Deleted";
      return;
    }
    document.getElementById("result").textContent = "Not found.";
  }

  console.log(emails);
  console.log(emailInput.value);
}
