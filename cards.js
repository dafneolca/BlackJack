// NEW GAMES BUTTON

var newGameButton = document.createElement("button");
newGameButton.innerText = "New Game";
newGameButton.setAttribute("id", "newGameButton");
newGameButton.addEventListener("click", self.newGame);
self.buttonContainer.appendChild(newGameButton);





// TEMPLATE

var startButton = document.createElement("button");
startButton.innerText = "Start Game!";
startButton.setAttribute("id", "start-button");
startButton.addEventListener("click", self.buildGameScreen);
self.mainContainer.appendChild(startButton);
};

// NEW GAMES FUNCTION
self.newGame = function() {
  var dealersCardsDiv = document.createElement("containerBox");
  var dealersCardsImage1 = document.createElement("img");
  dealersCardsImage1.src = "card_images/back.png";
  var dealersCardsImage2 = document.createElement("img");
  dealersCardsImage2.src = "card_images/back.png";
  dealersCardsDiv.appendChild(dealersCardsImage1);
  dealersCardsDiv.appendChild(dealersCardsImage2);
  bodyTag[0].appendChild(dealersCardsDiv);

  var playersCardsDiv = document.createElement("containerBox");
  var playersCardsImage1 = document.createElement("img");
  playersCardsImage1.src = "card_images/back.png";
  var playersCardsImage2 = document.createElement("img");
  playersCardsImage2.src = "card_images/back.png";
  playersCardsDiv.appendChild(playersCardsImage1);
  playersCardsDiv.appendChild(playersCardsImage2);
  bodyTag[0].appendChild(playersCardsDiv);
};
