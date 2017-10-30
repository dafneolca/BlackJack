function BlackJack(mainContainerElement) {
  var self = this;
  self.startscreen = null;
  self.gameboard = null;
  self.mainContainer = mainContainerElement;

  self.cards = {
    hearts: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10],
    spades: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10],
    diamonds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10],
    clubs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]
  };
  self.money = 100;



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
    self.mainContainer.remove(); // WORK
  };

  self.buildGameScreen = function() {
    self.destroyStartScreen(); /// WORKS


    // CREATE DEALERS CARDS HEADING ->    WORKS
    var topContainer = document.createElement("containerBox");
    var dealerCardsText = document.createElement("h1");
    dealerCardsText.innerText = "Dealer's Cards";
    topContainer.appendChild(dealerCardsText);
    var bodyTag = document.getElementsByTagName("body");
    bodyTag[0].appendChild(topContainer);


    // CREATE DEALERS CARDS HEADING
    var bottomContainer = document.createElement("containerBox");
    var playerCardText = document.createElement("h1");
    playerCardText.innerText = "Player's Cards";
    bottomContainer.appendChild(playerCardText);
    console.log(playerCardText);
    bodyTag[1].appendChild(bottomContainer);



  };









  shuffleCard = function() {
    var counter = this.cards.length;
    while (counter > 0) {
      var index = Math.floor(Math.random() * counter);
      counter -= 1;
      var temp = this.cards[counter];
      this.cards[counter] = this.cards[index];
      this.cards[index] = temp;
    }
  };
}





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
