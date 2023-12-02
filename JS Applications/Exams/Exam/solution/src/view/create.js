import { html } from "../../node_modules/lit-html/lit-html.js";
import { addCharacter } from "../api/data.js";

const createTamplate = (onSubmit) => html` <section id="create">
  <div class="form">
    <img class="border" src="./images/border.png" alt="" />
    <h2>Add Character</h2>
    <form class="create-form" @submit=${onSubmit}>
      <input
        type="text"
        name="category"
        id="category"
        placeholder="Character Type"
      />
      <input
        type="text"
        name="image-url"
        id="image-url"
        placeholder="Image URL"
      />
      <textarea
        id="description"
        name="description"
        placeholder="Description"
        rows="2"
        cols="10"
      ></textarea>
      <textarea
        id="additional-info"
        name="additional-info"
        placeholder="Additional Info"
        rows="2"
        cols="10"
      ></textarea>
      <button type="submit">Add Character</button>
    </form>
    <img class="border" src="./images/border.png" alt="" />
  </div>
</section>`;

export async function createPage(ctx) {
  ctx.render(createTamplate(onSubmit));

  async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const character = {
      category: formData.get("category").trim(),
      imageUrl: formData.get("image-url").trim(),
      description: formData.get("description").trim(),
      moreInfo: formData.get("additional-info").trim(),
    };

    if (Object.values(character).some((x) => !x)) {
      return alert("All fields are required!");
    }

    await addCharacter(character);
    event.target.reset();
    ctx.page.redirect("/dashboard");
  }
}
