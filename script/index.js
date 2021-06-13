import catsJSON from "./cards/cats.js";

// FORMAT:
//<div class="card container">
//  <div class="card-face container">
//    <h1 class="card-header"></h1>
//
//    <div class="card-imageHolder">
//      <img src="g" class="card-image" />
//    </div>
//
//    <div class="card-footer">FIND OUT MORE!</div>
//  </div>
//
//  <div class="card-description"></div>
//</div>
//
//PLACEHOLDER CARDS:
//<div class="card container placeholder"></div>
function createCard(header, imgSource, description, id) {
  // CREATE ELEMENT
  const card = document.createElement("div");
  const cardFace = document.createElement("div");
  const cardHeader = document.createElement("h1");
  const cardImageHolder = document.createElement("div");
  const cardImage = document.createElement("img");
  const cardFooter = document.createElement("div");
  const cardDescription = document.createElement("div");

  // SET ELEMENT INNERHTML
  cardHeader.innerHTML = header;
  cardDescription.innerHTML = description;
  cardFooter.innerHTML = "FIND OUT MORE!";

  // SET ELEMENT ATTRIBUTE
  card.setAttribute("class", "card container");
  card.setAttribute("id", id);
  cardFace.setAttribute("class", "card-face container");
  cardHeader.setAttribute("class", "card-header");
  cardImageHolder.setAttribute("class", "card-imageHolder");
  cardImage.setAttribute("src", imgSource);
  cardImage.setAttribute("class", "card-image");
  cardFooter.setAttribute("class", "card-footer");
  cardFooter.setAttribute("onclick", `cardTrigger(${id})`);
  cardDescription.setAttribute("class", "card-description");

  // BUILD CARD
  card.append(cardFace);
  card.append(cardDescription);
  cardFace.append(cardHeader);
  cardFace.append(cardImageHolder);
  cardFace.append(cardFooter);
  cardImageHolder.append(cardImage);

  return card;
}

function appendCard(card) {
  let prop = document.getElementsByClassName("webApp-applicationWindow");
  setTimeout(() => {
    const applicationWindow = prop.item(0);

    applicationWindow.append(card);
  }, 0);
}

for (let [key, value] of Object.entries(catsJSON)) {
  appendCard(
    createCard(value.header, value.imgSource, value.description, value.id)
  );
}

for (let index = 0; index < 3; index++) {
  let placeholder = document.createElement("div");
  placeholder.setAttribute("class", "card container placeholder");

  appendCard(placeholder);
}
