function playingCards(face, suit) {
  const cardFaces = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];

  const cardSuits = { S: "\u2660", H: "\u2665", D: "\u2666", C: "\u2663" };

  const isCardFaceValid = cardFaces.includes(face);
  const isCardSuitValid = Object.keys(cardSuits).includes(suit);

  if (isCardFaceValid && isCardSuitValid) {
    return {
      face,
      suit,
      toString() {
        return `${face}${cardSuits[suit]}`;
      },
    };
  } else {
    throw new Error("Error");
  }
}

const card = playingCards("1", "C");
