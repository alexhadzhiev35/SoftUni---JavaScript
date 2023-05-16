function passwordGuess(input) {
    let pass = "s3cr3t!P@ssw0rd";
    let pas = input[0]
    if (pass === pas) {
        console.log("Welcome");
    } else {
        console.log("Wrong password!")
    }
}

passwordGuess(["s3cr3t!P@sd"]);