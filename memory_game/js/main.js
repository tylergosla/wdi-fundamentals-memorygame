var cards = ["queen", "queen", "king", "king"];
//create emoty array named cardsInPlay
var cardsInPlay = [];

var cardOne = cards[0];
//move a card to cardsInPlay array
cardsInPlay.push('queen');
// show in the console that a card was flipped
console.log("User flipped " + cardOne);
//move another card to cardsInPlay array
var cardTwo = cards[2]

cardsInPlay.push('king');
// show in the console that a card was flipped
console.log("User flipped " + cardTwo);

if (cardsInPlay.length === 2) {

	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert('you found a match');
	} else {
		alert('sorry, try again')
	}

}