function cardTrigger(card) {
  switch (card.className) {
    default:
      let expandedCards = document.getElementsByClassName(
        "card container expanded"
      );
      for (let [key, value] of Object.entries(expandedCards)) {
        value.setAttribute("class", "card container collapsed");
      }

      card.setAttribute("class", "card container expanded");
      console.log("collapsed");
      break;

    case "card container expanded":
      card.setAttribute("class", "card container collapsed");
      console.log("expanded");
      break;
  }
}
