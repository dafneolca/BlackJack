function init() {
  var mainContainer = document.getElementById('main');
  var blackjack = new BlackJack(mainContainer);
  blackjack.buildStartScreen();

}

document.addEventListener("DOMContentLoaded", init);
