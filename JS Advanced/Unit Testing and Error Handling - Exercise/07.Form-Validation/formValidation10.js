function validate() {
  const usernameRegExp = /^[a-zA-Z0-9]{3,20}$/gm;
  const passwordRegExp = /^\w+$/gm;
  const emailRegExp = /[\w]+@[a-z]+\.[a-z]{2,3}/gm;

  const usernameInput = document.getElementById("username");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirm-password");

  const companyNumberInput = document.getElementById("companyNumber");
  const companyCheckbox = document.getElementById("company");

  const validBoxRef = document.getElementById("valid");
  const companyBoxRef = document.getElementById("companyInfo");
  const formRef = document.getElementById("registerForm");

  companyCheckbox.addEventListener("change", () => {
    if (companyCheckbox.checked) {
      companyBoxRef.style.display = "block";
    } else {
      companyBoxRef.style.display = "none";
    }
  });

  formRef.addEventListener("submit", checkValidity);

  function checkValidity(event) {
    event.preventDefault();

    isValid(usernameInput, usernameRegExp);
    isValid(emailInput, emailRegExp);
    isValid(passwordInput, passwordRegExp);
    if (passwordInput.value === confirmPasswordInput.value) {
      isValid(confirmPasswordInput, passwordRegExp);
    } else {
      confirmPasswordInput.style.borderColor = "red";
    }

    if (companyBoxRef.style.display === "block") {
      //   if (
      //     Number(companyNumberInput.value) >= 1000 &&
      //     Number(companyNumberInput.value) <= 9999
      //   ) {
      //     companyNumberInput.style.border = "none";
      //   } else {
      //     companyNumberInput.style.borderColor = "red";
      //   }
      isValid(companyNumberInput);

      if (
        isValid(usernameInput, usernameRegExp) &&
        isValid(emailInput, emailRegExp) &&
        isValid(passwordInput, passwordRegExp) &&
        isValid(confirmPasswordInput, passwordRegExp) &&
        isValid(companyNumberInput)
      ) {
        validBoxRef.style.display = "block";
      } else {
        validBoxRef.style.display = "none";
      }
    }

    if (
      isValid(usernameInput, usernameRegExp) &&
      isValid(emailInput, emailRegExp) &&
      isValid(passwordInput, passwordRegExp) &&
      isValid(confirmPasswordInput, passwordRegExp)
    ) {
      validBoxRef.style.display = "block";
    } else {
      validBoxRef.style.display = "none";
    }
  }

  function isValid(ref, regex) {
    if (regex) {
      if (!ref.value.match(regex)) {
        ref.style.borderColor = "red";
        return false;
      } else {
        ref.style.border = "none";
        return true;
      }
    }

    if (!regex) {
      if (Number(ref.value) >= 1000 && Number(ref.value) <= 9999) {
        ref.style.border = "none";
        return true;
      } else {
        ref.style.borderColor = "red";
        return false;
      }
    }
  }
}
