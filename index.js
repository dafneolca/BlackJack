

var introText = document.getElementById('introduction');
introText.innerHTML="Blackjack";

var startButton=document.getElementById('start-button');


startButton.onclick = function () {
  //var introHeader=document.getElementById('start-button');
  introText.removeAttribute('Id');
  console.log('are you SURE??');
};





function BlackJack () {

}


var cards = {
  hearts: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10],
  spades: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10],
  diamonds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10],
  clubs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]
};

var money = 100;

BlackJack.prototype.shuffleCard = function() {
  let counter = this.cards.length;
  while (counter > 0) {
    const index = Math.floor(Math.random() * counter);
    counter -= 1;
    const temp = this.cards[counter];
    this.cards[counter] = this.cards[index];
    this.cards[index] = temp;
  }
};
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
