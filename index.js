//"use strict";

function BlackJack(mainContainerElement) {
  var self = this;
  self.startscreen = null;
  self.gameboard = null;
  self.mainContainer = mainContainerElement;
  self.money = 100;
  self.betInput=10;
  self.dealersCardsDiv = null;
  self.playersCardsDiv = null;
  self.backCard = null;
  self.dealerSum = 0;
  self.playerSum = 0;
  self.playerCardArray = [];
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
      name: "2 of spades",
      img: "card_images/2_of_spades.png",
      value: 2
    },
    {
      name: "2 of hearts",
      img: "card_images/2_of_hearts.png",
      value: 2
    }, // 3
    {
      name: "3 of clubs",
      img: "card_images/3_of_clubs.png",
      value: 3
    },
    {
      name: "3 of diamonds",
      img: "card_images/3_of_diamonds.png",
      value: 3
    },
    {
      name: "3 of hearts",
      img: "card_images/3_of_hearts.png",
      value: 3
    },
    {
      name: "3 of spades",
      img: "card_images/3_of_spades.png",
      value: 3
    },

    //4
    {
      name: "4 of clubs",
      img: "card_images/4_of_clubs.png",
      value: 4
    },
    {
      name: "4 of diamonds",
      img: "card_images/4_of_diamonds.png",
      value: 4
    },
    {
      name: "4 of hearts",
      img: "card_images/4_of_hearts.png",
      value: 4
    },
    {
      name: "4 of spades",
      img: "card_images/4_of_spades.png",
      value: 4
    },
            ////// 5
    {
      name: "5 of clubs",
      img: "card_images/5_of_clubs.png",
      value: 5
    },
    {
      name: "5 of diamonds",
      img: "card_images/5_of_diamonds.png",
      value: 5
    },
    {
      name: "5 of hearts",
      img: "card_images/5_of_hearts.png",
      value: 5
    },
    {
      name: "5 of spades",
      img: "card_images/5_of_spades.png",
      value: 5
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


  self.shuffleCards = function() {

    function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;
      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }
    self.cards = shuffle(self.cards);
  }


  self.buildGameScreen = function() {
    self.shuffleCards();
    self.destroyStartScreen();

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

    //FOOTER WITH GAME STATUS
    self.footerDiv = document.createElement("div");
    self.footerDiv.setAttribute("id", "footer-div");
    var currentBalance = document.createElement("p");
    currentBalance.innerText = "Your current balance is: #" + "You bet: #";
    self.footerDiv.appendChild(currentBalance);


    //FOOTER WITH SCORE

    var scoreInfo = document.createElement("p");
    scoreInfo.innerText = "You have #. Hit or Stand?";
    self.footerDiv.appendChild(scoreInfo);
    bodyTag[0].appendChild(self.footerDiv);
  };


  ////////////      METHODS      ////////////

  //NEW GAME FUNCTION
  self.newGame = function() {

    // DEALER LOGIC
    var cardDealer1 = self.cards.pop();
    var cardDealer2 = self.cards.pop();
    self.dealerSum += cardDealer1.value + cardDealer2.value;

    // DEALER DOM MANIPULATION
    var dealerCard1 = document.createElement("img");
    var dealerCard2 = document.createElement("img");
    dealerCard1.src = cardDealer1.img; // dealerCard.style.display = "none";
    dealerCard2.src = cardDealer2.img;
    self.dealersCardsDiv.appendChild(dealerCard1); //DEALERS CARDS
    self.dealersCardsDiv.appendChild(dealerCard2);

    // PLAYER LOGIC
    var cardPlayer1 = self.cards.pop();
    var cardPlayer2 = self.cards.pop();
    self.playerSum += cardPlayer1.value + cardPlayer2.value;

    // PLAYER DOM MANIPULATION

    // var playerCard1 = document.createElement("img");
    // var playerCard2 = document.createElement("img");
    //
    //
    //
    // //create new div here - DISPLAYS dealers cards
    // self.dealersCardsDiv.appendChild(dealerCard); //DEALERS CARDS
    // self.dealersCardsDiv.appendChild(dealerCard2);
    //
    //
    // //WORK ON NEXT!!!!
    //
    // ///////////Places 2 cards for the player
    //
    // playerCard.src = cardPlayer.img; // dealerCard.style.display = "none";
    // playerCard2.src = cardPlayer2.img;
    //
    // //sums up value of cards
    // self.dealerSum += cardPlayer.value + cardPlayer2.value;
    //
    // //create new div here - DISPLAYS dealers cards
    // var playersCardArea = document.createElement("div");
    // self.playersCardsDiv.appendChild(playersCardArea);
    // playersCardArea.appendChild(cardPlayer);
    // // self.playersCardsDiv.appendChild(cardPlayer); //DEALERS CARDS
    // // self.playersCardsDiv.appendChild(cardPlayer2);
    //
    //
    //
    // //DISABLES NEW GAME BUTTON AFTER FIRST RUN
    // document.getElementById("newGameButton").disabled = true;

    //CREATE FOOTER

  };


  /*HIT FUNCTION
  Adds 1 new card (from cards array) to "YOUR CARDS".
  IF: your cards sum up to 21 call function "YOU WIN" && your cards sum > dealers sum
  IF: your cards sum up to over 21 call function "YOU LOSE"
  IF: cards sum <21 || cards.length <=5 -> YOU WIN
  */


  self.hit = function() {

    var cardPlayer = self.cards.pop();
    self.playerSum += cardPlayer.value;
    if (self.playerSum === 21) {
      console.log("You WIN!!!");
      // CALL WIN FUNCTION
    }

    if (self.playerSum>21) {
      console.log("you lose!!");
      // CALL LOSE FUNCTION
    }

    //
    // var dealerCard = document.createElement("img");
    // var playerCard = document.createElement("img");
    //
    // dealerCard.src = cardDealer.img; // dealerCard.style.display = "none";
    // dealerCard2.src = cardDealer.img;
    //
    //
    // //create new div
    // self.dealersCardsDiv.appendChild(dealerCard); //DEALERS CARDS
    // self.dealersCardsDiv.appendChild(dealerCard2);
    //
    // var newPlayerCard = document.createElement("img");
    // newPlayerCard.src = "card_images/back.png";
    // self.playersCardsDiv.appendChild(newPlayerCard); //PLAYERS CARDS



  };
  //STAND FUNCTION
  self.stand = function() {
    while(self.dealerSum < self.playerSum && self.dealerSum <20) {
      var cardDealer = self.cards.pop();
      self.dealerSum += cardDealer.value;
    }
    if((self.dealerSum < self.playerSum) || self.dealerSum > 21) {
      console.log("You win");
    } else {
      console.log("You loose")
    }





  //
  //   //DOM turn all cards around to face, one by one.
  //
  //   // first if should be looped
  //
  //
  //   for (var i=0; i<= self.playerCardArray.length; i++ ) {
  //     var cardDealer1 = self.cards.pop();
  //     if (self.dealerSum<=18) {
  //       self.dealerSum += cardDealer1.value;
  //     }
  //   }
  //
  //   if (self.dealerSum>self.playerSum && self.dealerSum <=21) {
  //     console.log("you lose!!");
  //     // DISPLAY YOU LOSE
  //   }
  //
  //   else if (self.dealerSum<self.playerSum && self.playerSum <21) {
  //     console.log("you win!");
  //   }
  //
  //   else if (self.playerSum === 21) {
  //     console.log("BLACKJACK!!!");
  //   }
  //
  //   else if (self.dealerSum === self.playerSum && self.playerSum< 21) {
  //     console.log("you lose");
  //   }
  //
  //   else if (self.playerSum < 21 && self.playerCardArray.length===5) {
  //     console.log("you win!");
  //   }
  //
  };




}
