function loadRepos() {
  const textField = document.getElementById("username");
  const reposList = document.getElementById("repos");

  const user = textField.value;
  let items = [];

  fetch(`https://api.github.com/users/${user}/repos`)
    .then((res) => res.json())
    .then((data) =>
      data.forEach((element) => {
        let listItem = document.createElement("li");
        listItem.innerHTML = `<li>
		<a href="${element.html_url}">
			${element.full_name}
		</a>
	</li>`;
        reposList.appendChild(listItem);
      })
    )
    .catch((err) => console.log(err));
}
