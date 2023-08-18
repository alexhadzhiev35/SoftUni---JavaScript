function followers(input) {
  let followersObj = {};

  for (let line of input) {
    if (line.includes("Log out")) {
      break;
    }

    let [command, username, count] = line.split(": ");

    // if (line.includes("New follower")) {

    // } else if (line.includes("Like")) {
    // } else if (line.includes("Comment")) {
    // } else if (line.includes("Blocked")) {
    // }

    switch (command) {
      case "New follower":
        if (!followersObj.hasOwnProperty(username)) {
          followersObj[username] = [0, 0];
        }

        break;
      case "Like":
        if (!followersObj.hasOwnProperty(username)) {
          followersObj[username] = [+count, 0];
        } else {
          followersObj[username][1] += Number(count);
        }

        break;
      case "Comment":
        if (!followersObj.hasOwnProperty(username)) {
          followersObj[username] = [0, 1];
        } else {
          followersObj[username][1] += 1;
        }
        break;
      case "Blocked":
        if (followersObj.hasOwnProperty(username)) {
          delete followersObj[username];
        } else {
          console.log(`${username} doesn't exist.`);
        }
        break;
    }
  }

  console.log(`${Object.keys(followersObj).length} followers`);

  for (let follower in followersObj) {
    console.log(
      `${follower}: ${followersObj[follower][0] + followersObj[follower][1]}`
    );
  }
}

followers([
  "Like: Katy: 3",

  "Comment: Katy",

  "New follower: Amy",

  "Like: Tom: 5",

  "Like: Ellie: 5",

  "Log out",
]);
