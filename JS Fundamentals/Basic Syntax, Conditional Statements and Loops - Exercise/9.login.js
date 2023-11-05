function login(input) {
  function reverse(str) {
    return str.split("").reverse().join("");
  }

  let index = 0;

  let username = input[index];
  index++;

  let password = reverse(username);
  let failsCounter = 0;
  let curPassword = input[index];
  index++;

  while (curPassword !== password && failsCounter < 3) {
    failsCounter++;
    console.log("Incorrect password. Try again.");
    curPassword = input[index];
    index++;
  }

  if (curPassword === password) {
    console.log(`User ${username} logged in.`);
  } else {
    console.log(`User ${username} blocked!`);
  }
}

login(["momo", "omom"]);
