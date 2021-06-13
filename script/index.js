import * as fs from "fs";

// FORMAT:
//<div class="card container">
//  <h1 class="card-header">SIAMESE CAT</h1>
//  <div class="card-imageHolder">
//    <img src="" class="card-image"/>
//  </div>
//  <div class="card-footer">FIND OUT MORE!</div>
//</div>
//
//PLACEHOLDER CARDS:
//<div class="card container placeholder"></div>
function createCard(header, imgSource, description) {
  // CREATE ELEMENT
  const card = document.createElement("div");
  const cardHeader = document.createElement("h1");
  const cardImageHolder = document.createElement("div");
  const cardImage = document.createElement("img");
  const cardFooter = document.createElement("div");

  // SET ELEMENT INNERHTML
  cardHeader.innerHTML = header;
  cardFooter.innerHTML = "FIND OUT MORE!";

  // SET ELEMENT ATTRIBUTE
  card.setAttribute("class", "card container");
  cardHeader.setAttribute("class", "card-header");
  cardImageHolder.setAttribute("class", "card-imageHolder");
  cardImage.setAttribute("src", imgSource);
  cardImage.setAttribute("class", "card-image");
  cardFooter.setAttribute("class", "card-footer");

  // BUILD CARD
  card.append(cardHeader);
  card.append(cardImageHolder);
  card.append(cardFooter);
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
