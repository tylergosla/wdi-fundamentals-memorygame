


var cards = ["queen", "queen", "king", "king"];
//create emoty array named cardsInPlay
var cardsInPlay = [];

var checkForMatch = function () {

	if (cardsInPlay[0] === cardsInPlay[1]) {
        alert('you found a match');
    } else {
        alert('sorry, try again')
    };

}

var flipCard = function (cardId) {
	cardsInPlay.push(cards[cardId])
    console.log("User flipped" + " " + cards[cardId]);
    if (cardsInPlay.length === 2) {
		checkForMatch();
    }
};

flipCard(0);
flipCard(2);