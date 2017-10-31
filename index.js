//"use strict";

function BlackJack(mainContainerElement) {
  var self = this;
  self.startscreen = null;
  self.gameboard = null;
  self.mainContainer = mainContainerElement;
  self.money = 100;
  self.dealersCardsDiv = null;
  self.playersCardsDiv = null;
  self.backCard = null;
  self.cards = [
    // 2
    {
      name: "2 of clubs",
      img: "card_images/2_of_clubs.png",
      value: 2
    },
    {
      name: "2 of diamonds",
      img: "card_images/2_of_diamonds.png",
      value: 2
    },
    {
      name: "2 of hearts",
      img: "card_images/2_of_clubs.png",
      value: 2
    },
    {
      name: "2 of hearts",
      img: "card_images/2_of_hearts.png",
      value: 2
    },
  ];

  self.buildStartScreen = function() {
    var title = document.createElement("h1");
    title.innerText = "Welcome to BlackJack";
    self.mainContainer.appendChild(title);
    var startButton = document.createElement("button");
    startButton.innerText = "Start Game!";
    startButton.setAttribute("id", "start-button");
    startButton.addEventListener("click", self.buildGameScreen);
    self.mainContainer.appendChild(startButton);
  };

  self.destroyStartScreen = function() {
    self.mainContainer.remove(); // WORKS
  };

  self.buildGameScreen = function() {
    self.destroyStartScreen(); /// WORKS

    ////////////      HEADINGS    ////////////
    // DEALERS CARDS HEADING
    self.dealersCardsDiv = document.createElement("div");
    self.dealersCardsDiv.setAttribute("id", "top-container");
    var dealerCardsText = document.createElement("h1");
    dealerCardsText.innerText = "Dealer's Cards";
    self.dealersCardsDiv.appendChild(dealerCardsText);
    var bodyTag = document.getElementsByTagName("body");
    bodyTag[0].appendChild(self.dealersCardsDiv);

    // PLAYERS CARDS HEADING
    self.playersCardsDiv = document.createElement("div");
    self.playersCardsDiv.setAttribute("id", "bottom-container");
    var playerCardText = document.createElement("h1");
    playerCardText.innerText = "Player's Cards";
    self.playersCardsDiv.appendChild(playerCardText);
    bodyTag[0].appendChild(self.playersCardsDiv);

    // SCORE SECTION IN FOOTER




    ////////////      BUTTONS      ////////////
    //BUTTON NEW GAME
    var newGameButton = document.createElement("button");
    newGameButton.innerText = "New Game";
    newGameButton.setAttribute("id", "newGameButton");
    newGameButton.addEventListener("click", self.newGame);
    bodyTag[0].appendChild(newGameButton);

    //BUTTON HIT
    var hitButton = document.createElement("button");
    hitButton.innerText = "Hit";
    hitButton.setAttribute("id", "hitButton");
    hitButton.addEventListener("click", self.hit);
    bodyTag[0].appendChild(hitButton);

    //BUTTON STAND
    var standButton = document.createElement("button");
    standButton.innerText = "Stand";
    standButton.setAttribute("id", "standButton");
    standButton.addEventListener("click", self.stand);
    bodyTag[0].appendChild(standButton);

    //FOOTER WITH SCORE
    self.footerDiv = document.createElement("div");
    self.footerDiv.setAttribute("id", "footer-div");
    var scoreInfo = document.createElement("p");
    scoreInfo.innerText = "You have #. Hit or Stand?";
    self.footerDiv.appendChild(scoreInfo);
    bodyTag[0].appendChild(self.footerDiv);
  };


  ////////////      METHODS      ////////////
  //NEW GAME FUNCTION
  self.newGame = function() {
    var dealerCard = document.createElement("img");
    var playerCard = document.createElement("img");
    var dealerCard2 = document.createElement("img");
    var playerCard2 = document.createElement("img");
    dealerCard.src = "card_images/back.png";
    playerCard.src = "card_images/back.png";
    dealerCard2.src = "card_images/back.png";
    playerCard2.src = "card_images/back.png";
    self.dealersCardsDiv.appendChild(dealerCard); //DEALERS CARDS
    self.playersCardsDiv.appendChild(playerCard); //PLAYERS CARDS
    self.dealersCardsDiv.appendChild(dealerCard2); //DEALERS CARDS
    self.playersCardsDiv.appendChild(playerCard2); //PLAYERS CARDS
    document.getElementById("newGameButton").disabled = true;

    //CREATE FOOTER

  };


  //HIT FUNCTION
  self.hit = function() {
    var newPlayerCard = document.createElement("img");
    newPlayerCard.src = "card_images/back.png";
    self.playersCardsDiv.appendChild(newPlayerCard); //PLAYERS CARDS



  };
  //STAND FUNCTION
  self.stand = function() {
    console.log("Stand Button works");
    self.randomCardGenerator();

  };

  //RANDOM CARD GENERATOR FUNCTION
  self.randomCardGenerator = function() {
    var randomCard = Math.floor(Math.random() * self.cards.length);
    console.log(self.cards[randomCard].name);
  };

  //CARD SHUFFLE FUNCTION
  /*  self.shuffleCard = function() {
      let counter = self.cards.length;
      while (counter > 0) {
        var ix = Math.floor(Math.random() * counter);
        counter -= 1;
        var temp = self.cards[counter];
        self.cards[counter] = self.cards[index];
        self.cards[index] = temp;
      }
    }; */


}




//var moneyOnBet= userInput;



/*FUNCTION Hit:
Adds 1 new card to "YOUR CARDS".
IF: your cards sum up to 21 call function "YOU WIN"
IF: your cards sum up to over 21 call function "YOU LOSE"
*/

/*FUNCTION Stand:
Reveals all cards of dealer
Adds a new card to DEALER until sum >=21
Compares the sum of dealers cards and players cards.
IF SUM OF PLAYERSCARDS > SUM OF dearlercards AND <=21 ->
              call function "YOU WIN"
            + Call function "MONEY WON"
else
        call function "YOU LOSE"
        + call function "MONEY LOST"
*/

/*FUNCTION You Win:
Reveals all dealer cards
    call function "MONEY WON"
*/

/*FUNCTION You lose:
Reveals all dealer cards
    call function "MONEY LOST"

*/

//FUNCTION Money won:
// money += moneyOnBet

//FUNCTION Money lost:
// money -= moneyOnBet
