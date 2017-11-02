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
  self.scoreInfo = null;
  self.currentBalanceP = null;
  self.dealerSum = 0;
  self.dealerSumStand = 0;
  self.playerSum = 0;
  self.playerCardArray = [];
  self.shuffledCards = [];
  self.cards = [
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
    },

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
    {
     name: "6 of clubs",
     img: "card_images/6_of_clubs.png",
     value: 6
    },
    {
     name: "6 of diamonds",
     img: "card_images/6_of_diamonds.png",
     value: 6
    },
    {
     name: "6 of hearts",
     img: "card_images/6_of_hearts.png",
     value: 6
    },
    {
     name: "6 of spades",
     img: "card_images/6_of_spades.png",
     value: 6
    },
    {
     name: "7 of clubs",
     img: "card_images/7_of_clubs.png",
     value: 7
    },
    {
     name: "7 of diamonds",
     img: "card_images/7_of_diamonds.png",
     value: 7
    },
    {
     name: "7 of hearts",
     img: "card_images/7_of_hearts.png",
     value: 7
    },
    {
     name: "7 of spades",
     img: "card_images/7_of_spades.png",
     value: 7
    },
    {
     name: "8 of clubs",
     img: "card_images/8_of_clubs.png",
     value: 8
    },
    {
     name: "8 of diamonds",
     img: "card_images/8_of_diamonds.png",
     value: 8
    },
    {
     name: "8 of hearts",
     img: "card_images/8_of_hearts.png",
     value: 8
    },
    {
     name: "8 of spades",
     img: "card_images/8_of_spades.png",
     value: 8
    },
    {
      name: "9 of clubs",
      img: "card_images/9_of_clubs.png",
      value: 9
    },
    {
      name: "9 of diamonds",
      img: "card_images/9_of_diamonds.png",
      value: 9
    },
    {
      name: "9 of hearts",
      img: "card_images/9_of_hearts.png",
      value: 9
    },
    {
      name: "9 of spades",
      img: "card_images/9_of_spades.png",
      value: 9
    },
    {
      name: "10 of clubs",
      img: "card_images/10_of_clubs.png",
      value: 10
    },
    {
      name: "10 of diamonds",
      img: "card_images/10_of_diamonds.png",
      value: 10
    },
    {
      name: "10 of hearts",
      img: "card_images/10_of_hearts.png",
      value: 10
    },
    {
      name: "10 of spades",
      img: "card_images/10_of_spades.png",
      value: 10
    },
    {
      name: "ace of clubs",
      img: "card_images/ace_of_clubs.png",
      value: 1
    },
    {
      name: "ace  of diamonds",
      img: "card_images/ace_of_diamonds.png",
      value: 1
    },
    {
      name: "ace  of hearts",
      img: "card_images/ace_of_hearts.png",
      value: 1
    },
    {
      name: "ace  of spades",
      img: "card_images/ace_of_spades.png",
      value: 1
    },
    {
      name: "jack of clubs",
      img: "card_images/jack_of_clubs.png",
      value: 10
    },
    {
      name: "jack of diamonds",
      img: "card_images/jack_of_diamonds.png",
      value: 10
    },
    {
      name: "jack of hearts",
      img: "card_images/jack_of_hearts.png",
      value: 10
    },
    {
      name: "jack of spades",
      img: "card_images/jack_of_spades.png",
      value: 10
    },
    {
    name: "king of clubs",
    img: "card_images/king_of_clubs.png",
    value: 10
    },
    {
      name: "king  of diamonds",
      img: "card_images/king_of_diamonds.png",
      value: 10
    },
    {
      name: "king  of hearts",
      img: "card_images/king_of_hearts.png",
      value: 10
    },
    {
      name: "king  of spades",
      img: "card_images/king_of_spades.png",
      value: 10
    },

    {
      name: "queen of clubs",
      img: "card_images/queen_of_clubs.png",
      value: 10
    },
    {
      name: "queen of diamonds",
      img: "card_images/queen_of_diamonds.png",
      value: 10
    },
    {
      name: "queen  of hearts",
      img: "card_images/queen_of_hearts.png",
      value: 10
    },
    {
      name: "queen of spades",
      img: "card_images/queen_of_spades.png",
      value: 10
    }
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
    self.mainContainer.remove();
  };

  self.shuffleCards = function() {
    function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;
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
    self.shuffledCards = shuffle(self.cards);
  };

  self.buildGameScreen = function() {
    self.shuffleCards();
    self.destroyStartScreen();
    // DEALERS CARDS HEADING
    self.dealersCardsDiv = document.createElement("div");
    self.dealersCardsDiv.setAttribute("id", "top-container");
    var dealerCardsText = document.createElement("h1");
    dealerCardsText.innerText = "Dealer's Cards";
    var bodyTag = document.getElementsByTagName("body");
    bodyTag[0].appendChild(dealerCardsText);
    bodyTag[0].appendChild(self.dealersCardsDiv);
    // PLAYERS CARDS HEADING
    self.playersCardsDiv = document.createElement("div");
    self.playersCardsDiv.setAttribute("id", "bottom-container");
    var playerCardText = document.createElement("h1");
    playerCardText.innerText = "Player's Cards";
    bodyTag[0].appendChild(playerCardText);
    bodyTag[0].appendChild(self.playersCardsDiv);
    ////////////      BUTTONS      ////////////
    //BUTTON NEW GAME
    var newGameButton = document.createElement("button");
    var buttonDiv = document.createElement("div");
    newGameButton.innerText = "New Game";
    newGameButton.setAttribute("id", "newGameButton");
    buttonDiv.setAttribute("id", "buttonDiv");
    newGameButton.addEventListener("click", self.newGame);
    bodyTag[0].appendChild(buttonDiv);
    buttonDiv.appendChild(newGameButton);
    //BUTTON HIT
    var hitButton = document.createElement("button");
    hitButton.innerText = "Hit";
    hitButton.setAttribute("id", "hitButton");
    hitButton.addEventListener("click", self.hit);
    buttonDiv.appendChild(hitButton);
    //BUTTON STAND
    var standButton = document.createElement("button");
    standButton.innerText = "Stand";
    standButton.setAttribute("id", "standButton");
    standButton.addEventListener("click", self.stand);
    buttonDiv.appendChild(standButton);
    //FOOTER WITH GAME STATUS
    self.footerDiv = document.createElement("div");
    self.footerDiv.setAttribute("id", "footer-div");
    self.currentBalanceP = document.createElement("p");
    self.currentBalanceP.innerText = "Your current balance is: " + self.money + ". You bet: " + self.betInput;
    self.footerDiv.appendChild(self.currentBalanceP);
    ///////// CHECK
    self.scoreInfo = document.createElement("p");
    self.scoreInfo.innerText = "You have #. Hit or Stand?";
    self.footerDiv.appendChild(self.scoreInfo);
    // var bodyTag = document.getElementsByTagName("body");
    bodyTag[0].appendChild(self.footerDiv);
  };

  ////////////      METHODS      ////////////

  //NEW GAME FUNCTION
  self.newGame = function() {
    document.getElementById("hitButton").disabled = false;
    document.getElementById("standButton").disabled = false;
    if (self.shuffledCards.length <10) {
      self.shuffleCards();
    }
    // CLEAR SUMS
    self.dealerSum = 0;
    self.playerSum = 0;
    self.dealerSumStand=0;
    // REMOVE CARDS FROM DOM
    self.dealersCardsDiv.innerText = "";
    self.playersCardsDiv.innerText = "";
    // DEALER LOGIC
    var cardDealer1 = self.shuffledCards.pop();
    var cardDealer2 = self.shuffledCards.pop();
    self.dealerSum += cardDealer1.value + cardDealer2.value;
    // DEALER DOM MANIPULATION
    var dealerCard1 = document.createElement("img");
    var dealerCard2 = document.createElement("img");
    dealerCard2.setAttribute("id", "hidden-card2");
    dealerCard1.src = cardDealer1.img; // dealerCard.style.display = "none";
    dealerCard2.src = cardDealer2.img;
    self.dealersCardsDiv.appendChild(dealerCard1); //DEALERS CARDS
    self.dealersCardsDiv.appendChild(dealerCard2);
    document.getElementById("hidden-card2").style.visibility ="hidden";
    // PLAYER LOGIC
    var cardPlayer1 = self.shuffledCards.pop();
    var cardPlayer2 = self.shuffledCards.pop();
    self.playerSum += cardPlayer1.value + cardPlayer2.value;
    // PLAYER DOM MANIPULATION
    var playerCard1 = document.createElement("img");
    var playerCard2 = document.createElement("img");
    playerCard1.src = cardPlayer1.img;
    playerCard2.src = cardPlayer2.img;
    self.playersCardsDiv.appendChild(playerCard1);
    self.playersCardsDiv.appendChild(playerCard2);
    document.getElementById("newGameButton").disabled = true;
    self.updateDOMScore();
  };

  self.updateDOMScore = function() {
    if ((self.playerSum < 20) && (self.dealerSumStand < self.playerSum)) {
      self.scoreInfo.innerText = "You have " + self.playerSum + ". Hit or Stand?";
    }
    else if(self.playerSum === 21) {
      self.scoreInfo.innerText = "You have " + self.playerSum +". Dealer has "+self.dealerSum+". BLACKJACK! You win!";
      document.getElementById("hidden-card2").style.visibility ="visible";
      self.money += self.betInput;
      self.buttonEnable();
    }
    else if(self.dealerSumStand >= self.playerSum && self.dealerSumStand <= 21){
      self.scoreInfo.innerText = "You have " + self.playerSum +". Dealer has "+self.dealerSumStand+". YOU LOOSE!!";
      document.getElementById("hidden-card2").style.visibility ="visible";
      self.money -= self.betInput;
      self.buttonEnable();
    }
    else if(self.playerSum > 21) {
      self.scoreInfo.innerText = "You have " + self.playerSum +". Dealer has "+self.dealerSum+". YOU LOOSE!!";
      document.getElementById("hidden-card2").style.visibility ="visible";
      self.money -= self.betInput;
      self.buttonEnable();
    }
    else if(self.dealerSumStand > 21) {
      document.getElementById("hidden-card2").style.visibility ="visible";
      self.scoreInfo.innerText = "You have " + self.playerSum +". Dealer has "+self.dealerSumStand+". YOU WIN!";
      self.money += self.betInput;
      self.buttonEnable();
    }
  };


  self.buttonEnable = function() {
    document.getElementById("hitButton").disabled = true;
    document.getElementById("standButton").disabled = true;
    document.getElementById("newGameButton").disabled = false;
    self.currentBalanceP.innerText = "Your current balance is: " + self.money + ". You bet: " + self.betInput;
  };

  // HIT FUNCTION
  self.hit = function() {
    // PLAYER LOGIC
    var cardPlayer = self.shuffledCards.pop();
    self.playerSum += cardPlayer.value;

    // PLAYER DOM MANIPULATION
    var playerCard = document.createElement("img");
    playerCard.src = cardPlayer.img;
    self.playersCardsDiv.appendChild(playerCard);
    self.updateDOMScore();
  };

  //STAND FUNCTION
  self.stand = function() {
    self.dealerSumStand = self.dealerSum;
    while(self.dealerSumStand <20 && self.dealerSumStand<self.playerSum) {
      var cardDealer = self.shuffledCards.pop();
      self.dealerSumStand += cardDealer.value;
      var dealerCard = document.createElement("img");//DEALER DOM MANIPULATION
      dealerCard.src = cardDealer.img;
      self.dealersCardsDiv.appendChild(dealerCard);
    }
    self.updateDOMScore();
  };
}
