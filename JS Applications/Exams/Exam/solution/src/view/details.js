import { html } from "../../node_modules/lit-html/lit-html.js";
import {
  deleteCharacterById,
  getCharacterById,
  getTotalLikes,
  didUserLiked,
  like,
} from "../api/data.js";

// const detailsTamplate = (
//   product,
//   isOwner,
//   onDelete,
//   isLoggedIn,
//   totalBuysCount,
//   onClickBuy,
//   didUserBuy
// ) => html`
//   <section id="details">
//     <div id="details-wrapper">
//       <img id="details-img" src="${product.imageUrl}" alt="example1" />
//       <p id="details-title">${product.name}</p>
//       <p id="details-category">
//         Category: <span id="categories">${product.category}</span>
//       </p>
//       <p id="details-price">
//         Price: <span id="price-number">${product.price}</span>$
//       </p>
//       <div id="info-wrapper">
//         <div id="details-description">
//           <h4>Bought:<span id="buys">${totalBuysCount}</span> times.</h4>
//           <span>${product.description}</span>
//         </div>
//         <div id="action-buttons">
//           ${isOwner
//             ? html`<a href="/edit/${product._id}" id="edit-btn">Edit</a>
//                 <a href="javascript:void(0)" id="delete-btn" @click=${onDelete}
//                   >Delete</a
//                 >`
//             : ""}
//           ${(() => {
//             if (didUserBuy == 0) {
//               if (isLoggedIn && !isOwner) {
//                 return html`<a
//                   href="javascript:void(0)"
//                   @click=${onClickBuy}
//                   id="buy-btn"
//                   >Buy</a
//                 >`;
//               }
//             }
//           })()}
//         </div>
//       </div>
//     </div>
//   </section>
// `;

const detailsTamplate = (
  character,
  isOwner,
  onDelete,
  isLoggedIn,
  totalLikesCount,
  onClickLike,
  didUserLike
) => html`<section id="details">
  <div id="details-wrapper">
    <img id="details-img" src="${character.imageUrl}" alt="example1" />
    <div>
      <p id="details-category">${character.category}</p>
      <div id="info-wrapper">
        <div id="details-description">
          <p id="description">${character.description}</p>
          <p id="more-info">${character.moreInfo}</p>
        </div>
      </div>
      <h3>Is This Useful:<span id="likes">${totalLikesCount}</span></h3>

      <!--Edit and Delete are only for creator-->
      <div id="action-buttons">
        ${isOwner
          ? html`<a href="/edit/${character._id}" id="edit-btn">Edit</a>
              <a href="javascript:void(0)" id="delete-btn" @click=${onDelete}
                >Delete</a
              >`
          : ""}
        ${(() => {
          if (didUserLike == 0) {
            if (isLoggedIn && !isOwner) {
              return html`<a
                href="javascript:void(0)"
                @click=${onClickLike}
                id="like-btn"
                >Like</a
              >`;
            }
          }
        })()}
        <!-- <a href="" id="edit-btn">Edit</a>
        <a href="" id="delete-btn">Delete</a> -->

        <!--Bonus - Only for logged-in users ( not authors )-->
        <!-- <a href="" id="like-btn">Like</a> -->
      </div>
    </div>
  </div>
</section>`;

export async function detailsPage(ctx) {
  const characterId = ctx.params.id;
  const character = await getCharacterById(characterId);
  const user = ctx.user;

  let userId;
  let totalLikesCount;
  let didUserLike;

  if (user != null) {
    userId = user._id;
    didUserLike = await didUserLiked(characterId, userId);
  }

  const isOwner = user && character._ownerId == user._id;
  const isLoggedIn = user !== undefined;

  totalLikesCount = await getTotalLikes(characterId);
  ctx.render(
    detailsTamplate(
      character,
      isOwner,
      onDelete,
      isLoggedIn,
      totalLikesCount,
      onClickLike,
      didUserLike
    )
  );

  async function onClickLike() {
    const donation = {
      characterId,
    };
    await like(donation);

    totalLikesCount = await getTotalLikes(characterId);
    console.log(totalLikesCount);
    didUserLike = await didUserLiked(characterId, userId);
    ctx.render(
      detailsTamplate(
        character,
        isOwner,
        onDelete,
        isLoggedIn,
        totalLikesCount,
        onClickLike,
        didUserLiked
      )
    );
  }

  async function onDelete() {
    const confirmed = confirm("Are you sure?");
    if (confirmed) {
      await deleteCharacterById(characterId);
      ctx.page.redirect("/dashboard");
    }
  }
}
