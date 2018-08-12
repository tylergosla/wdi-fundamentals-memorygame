


var cards = [
    {
        rank: 'queen',
        suit: 'hearts',
        cardImage: 'images/queen-of-hearts.png'
    },
    {
        rank: 'queen',
        suit: 'diamonds',
        cardImage: 'images/queen-of-diamonds.png'
    },
    {
        rank: 'king',
        suit: 'hearts',
        cardImage: 'images/king-of-hearts.png'
    },
    {
        rank: 'king',
        suit: 'diamonds',
        cardImage: 'images/king-of-diamonds.png'
    }
];

 cardsInPlay = []


// run when called and there are 2 cards in the cardsInPlay array
function checkForMatch() {

	if (cardsInPlay[0] === cardsInPlay[1]) { // if the first card and the second card match
        alert('you found a match');
    } else { // if the first and second card dont match
        alert('sorry, try again');
        createBoard(); // runs the createBoard function
        cardsInPlay = []; // sets the cardsInPlay array back to an empty array
    };

}

// runs when a card is clicked
function flipCard(cardId) {
    cardsInPlay.push(cards[cardId].rank) // pushes the card rank of the clicked card into the cardsInPlay array
    document.getElementById(cardId).setAttribute('src', cards[cardId].cardImage); // takes the card that was click and sets the img attribute src to the cardImage property of the card in the cards array
    console.log("User flipped" + " " + cards[cardId].rank);
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);
    if (cardsInPlay.length === 2) { // this runs only if there are 2 cards in the cardsInPlay array
		checkForMatch(); // runs the checkForMatch function
    }
}
 
// creates game board
function createBoard() {
    const gameBoard = document.getElementById('game-board'); // gets the game board element by its id
    gameBoard.innerHTML = ''; // sets the inner html of the gameboard element to nothing
    for (let i = 0; i < cards.length; i++) { // loops through the four objects in the cards array
        var newListItem = document.createElement('img'); // makes a new image element ->  <img>
        newListItem.setAttribute('src', 'images/back.png'); // adds the src attribute  ->  <img src="images/back.png">
        newListItem.setAttribute('id', i); // adds the id attribute with the value of i (so if i was 0) ->  <img src="images/back.png" id="0">
        newListItem.addEventListener('click', function() { // <img src="images/back.png" id="0" onclick="flipcard(0)">
            flipCard(i);
        });
        gameBoard.appendChild(newListItem); // this adds the img element we created inside the game board element <gameboard><img src="images/back.png" id="0"></gameboard>
    }
}

createBoard();