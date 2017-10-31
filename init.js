var blackjack = null;

function init() {
  var mainContainer = document.getElementById('main');
  blackjack = new BlackJack(mainContainer);
  blackjack.buildStartScreen();

}

document.addEventListener("DOMContentLoaded", init);
