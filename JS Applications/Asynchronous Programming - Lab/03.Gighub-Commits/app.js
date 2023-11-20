function loadCommits() {
  const username = document.getElementById("username");
  const repo = document.getElementById("repo");

  const list = document.getElementById("commits");

  fetch(`https://api.github.com/repos/${username.value}/${repo.value}/commits`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("No valid info");
      }
    })
    .then((data) => {
      console.log(data);

      data.forEach((element) => {
        const item = document.createElement("li");
        item.textContent = `${element.commit.author.name} : ${element.commit.message}`;
        list.appendChild(item);
      });
    })
    .catch((err) => {
      const item = document.createElement("li");
      item.textContent = `${err.status} : ${err.message}`;
      list.appendChild(item);
    });
}
