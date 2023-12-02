import { html } from "../../node_modules/lit-html/lit-html.js";
import { editCharacterById, getCharacterById } from "../api/data.js";

const editTamplate = (character, onSubmit) => html`<section id="edit">
  <div class="form">
    <img class="border" src="./images/border.png" alt="" />
    <h2>Edit Character</h2>
    <form class="edit-form" @submit=${onSubmit}>
      <input
        type="text"
        name="category"
        id="category"
        placeholder="Character Type"
        value="${character.category}"
      />
      <input
        type="text"
        name="image-url"
        id="image-url"
        placeholder="Image URL"
        value="${character.imageUrl}"
      />
      <textarea
        id="description"
        name="description"
        placeholder="Description"
        rows="2"
        cols="10"
      >
${character.description}</textarea
      >
      <textarea
        id="additional-info"
        name="additional-info"
        placeholder="Additional Info"
        rows="2"
        cols="10"
      >
${character.moreInfo}</textarea
      >
      <button type="submit">Edit</button>
    </form>
    <img class="border" src="./images/border.png" alt="" />
  </div>
</section>`;

export async function editPage(ctx) {
  const characterId = ctx.params.id;

  const character = await getCharacterById(characterId);
  ctx.render(editTamplate(character, onSubmit));

  async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const editCharacter = {
      category: formData.get("category").trim(),
      imageUrl: formData.get("image-url").trim(),
      description: formData.get("description").trim(),
      moreInfo: formData.get("additional-info").trim(),
    };

    if (Object.values(editCharacter).some((x) => !x)) {
      return alert("All fields are required!");
    }

    await editCharacterById(characterId, editCharacter);
    event.target.reset();
    ctx.page.redirect(`/details/${characterId}`);
  }
}
