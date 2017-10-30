function BlackJack(mainContainerElement) {
  var self = this;
  self.startscreen = null;
  self.gameboard = null;
  self.mainContainer = mainContainerElement;
  self.money = 100;
  self.cards = [
    // 2
    {
      name: "2 of clubs",
      img: "2_of_clubs.png",
      value: 2
    },
    {
      name: "2 of diamonds",
      img: "2_of_diamonds.png",
      value: 2
    },
    {
      name: "2 of hearts",
      img: "2_of_clubs.png",
      value: 2
    },
    {
      name: "2 of hearts",
      img: "2_of_hearts.png",
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

    // DEALERS CARDS HEADING
    var topContainer = document.createElement("containerBox");
    topContainer.setAttribute("id", "top-container");
    var dealerCardsText = document.createElement("h1");
    dealerCardsText.innerText = "Dealer's Cards";
    topContainer.appendChild(dealerCardsText);
    var bodyTag = document.getElementsByTagName("body");
    bodyTag[0].appendChild(topContainer);

    // PLAYERS CARDS HEADING
    var bottomContainer = document.createElement("containerBox");
    bottomContainer.setAttribute("id", "bottom-container");
    var playerCardText = document.createElement("h1");
    playerCardText.innerText = "Player's Cards";
    bottomContainer.appendChild(playerCardText);
    bodyTag[0].appendChild(bottomContainer);

    //CREATE NEW GAME BUTTON
    var newGameButton = document.createElement("button");
    newGameButton.innerText = "New Game";
    newGameButton.setAttribute("id", "newGameButton");
    newGameButton.addEventListener("click", self.newGame);
    bottomContainer.appendChild(newGameButton);
    console.log(bottomContainer);
  };

  //NEW GAME FUNCTION
  self.newGame = function() {
    console.log("check it out");
    //DEALERS CARDS
    var dealersCardsDiv = document.createElement("containerBox");
    var dealersCardsImage1 = document.createElement("img");
    dealersCardsImage1.src = "card_images/back.png";
    var dealersCardsImage2 = document.createElement("img");
    dealersCardsImage2.src = "card_images/back.png";
    dealersCardsDiv.appendChild(dealersCardsImage1);
    dealersCardsDiv.appendChild(dealersCardsImage2);
    var bodyTag = document.getElementsByTagName("body");
    bodyTag[0].appendChild(dealersCardsDiv);

    //PLAYERS CARDS
    var playersCardsDiv = document.createElement("containerBox");
    var playersCardsImage1 = document.createElement("img");
    playersCardsImage1.src = "card_images/back.png";
    var playersCardsImage2 = document.createElement("img");
    playersCardsImage2.src = "card_images/back.png";
    playersCardsDiv.appendChild(playersCardsImage1);
    playersCardsDiv.appendChild(playersCardsImage2);
    bodyTag[0].appendChild(playersCardsDiv);
  };
}


/*  //CREATE HIT BUTTON
var buttonContainer = document.createElement("container-box");
var hitButton = document.createElement("button");
hitButton.innerText = "Hit";
hitButton.setAttribute("id", "hitButton");
hitButton.addEventListener("click", self.hit);
buttonContainer.appendChild(hitButton);
bodyTag[0].appendChild(buttonContainer);

//CREATE STAND BUTTON
var standButton = document.createElement("button");
standButton.innerText = "Stand";
standButton.setAttribute("id", "standButton");
standButton.addEventListener("click", self.stand);
self.buttonContainer.appendChild(standButton);
*/



/*//HIT FUNCTION
self.hit = function() {
  console.log("Hit Function");
};

//STAND FUNCTION
self.stand = function() {
  console.log("Stand Function");
};
*/



/*shuffleCard = function() {
  var counter = this.cards.length;
  while (counter > 0) {
    var index = Math.floor(Math.random() * counter);
    counter -= 1;
    var temp = this.cards[counter];
    this.cards[counter] = this.cards[index];
    this.cards[index] = temp;
  }
};
*/

//var moneyOnBet= userInput;

//onclick method to start new game, build blackjack NEW game

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
