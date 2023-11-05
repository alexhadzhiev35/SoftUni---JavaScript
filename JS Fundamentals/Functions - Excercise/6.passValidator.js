function passValidator(password) {
  let isValidPass = true;
  let isInvalidLength = password.length < 6 || password.length > 10;

  if (isInvalidLength) {
    isValidPass = false;
    console.log("Password must be between 6 and 10 characters");
  }

  let isOnlyLettersAndDigits = true;
  let digitsCounter = 0;

  for (let i = 0; i < password.length; i++) {
    let currentCode = password.charCodeAt(i);
    let isNotNumber = currentCode < 48 || currentCode > 57;
    let isNumber = currentCode >= 48 && currentCode <= 57;
    let isNotSmallLetter = currentCode < 97 || currentCode > 122;
    let isNotBigLetter = currentCode < 65 || currentCode > 90;

    if (isNumber) {
      digitsCounter++;
    }

    if (isNotBigLetter && isNotSmallLetter && isNotNumber) {
      isValidPass = false;
      isOnlyLettersAndDigits = false;
    }
  }

  if (!isOnlyLettersAndDigits) {
    console.log("Password must consist only of letters and digits");
  }

  if (!(digitsCounter >= 2)) {
    isValidPass = false;
    console.log("Password must have at least 2 digits");
  }

  if (isValidPass) {
    console.log("Password is valid");
  }
}
passValidator("Picture");
