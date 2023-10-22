function deleteByEmail() {
  const emails = document.querySelectorAll("tbody tr td");
  const emailInput = document.getElementsByTagName("input")[0];
  const resultEl = document.getElementById("result");

  emails.forEach((email) => {
    if (email.textContent === emailInput.value) {
      const emailParent = email.parentNode;
      emailParent.parentNode.removeChild(emailParent);
      resultEl.textContent = "Deleted.";
      return;
    }

    resultEl.textContent = "Not found.";
  });
}
