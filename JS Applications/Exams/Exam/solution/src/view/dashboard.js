import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllCharacters } from "../api/data.js";

const dashboardTemplate = (characters) => html`<h2>Characters</h2>
  <section id="characters">
    ${characters.length == 0
      ? html`<h2>No added Heroes yet.</h2>`
      : characters.map(
          (p) => html`<div class="character">
            <img src="${p.imageUrl}" alt="example1" />
            <div class="hero-info">
              <h3 class="category">${p.category}</h3>
              <p class="description">${p.description}</p>
              <a class="details-btn" href="details/${p._id}">More Info</a>
            </div>
          </div>`
        )}
  </section>`;

// const neshto = (p) => html`<div class="character">
//   <img src="${p.imageUrl}" alt="example1" />
//   <div class="hero-info">
//     <h3 class="category">${p.category}</h3>
//     <p class="description">${p.description}</p>
//     <a class="details-btn" href="detail/${p._id}">More Info</a>
//   </div>
// </div>`;

export async function dashboardPage(ctx) {
  const characters = await getAllCharacters();
  ctx.render(dashboardTemplate(characters));
}
