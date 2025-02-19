// game.js
const cardDeck = [
    { color: 'red', number: 1 },
    { color: 'blue', number: 2 },
    { color: 'green', number: 3 },
    { color: 'yellow', number: 4 },
    { color: 'red', number: 5 },
    { color: 'blue', number: 6 },
    { color: 'green', number: 7 },
    { color: 'yellow', number: 8 },
    { color: 'red', number: 9 },
    { color: 'blue', number: 10 },
    // Add more cards as needed
  ];
  
  let playerHand = [];
  let currentCard = null;
  
  function shuffleDeck(deck) {
    return deck.sort(() => Math.random() - 0.5);
  }
  
  function drawCard() {
    if (cardDeck.length > 0) {
      const card = cardDeck.pop();
      playerHand.push(card);
      updatePlayerHand();
    } else {
      alert('No more cards left!');
    }
  }
  
  function updatePlayerHand() {
    const playerHandElement = document.getElementById('player-hand');
    playerHandElement.innerHTML = ''; // Clear current cards
    playerHand.forEach(card => {
      const cardElement = document.createElement('div');
      cardElement.className = 'card';
      cardElement.style.backgroundColor = card.color;
      cardElement.innerText = card.number;
      playerHandElement.appendChild(cardElement);
    });
  }
  
  function passTurn() {
    alert('Turn passed!');
  }
  
  function initGame() {
    // Shuffle deck and deal first card
    shuffleDeck(cardDeck);
    drawCard(); // Draw first card for the player
    // Optionally, draw the first card for the current card in play
    currentCard = cardDeck.pop();
    updateCurrentCard();
  }
  
  // Update the card currently in play
  function updateCurrentCard() {
    const currentCardElement = document.getElementById('current-card');
    if (currentCard) {
      currentCardElement.style.backgroundColor = currentCard.color;
      currentCardElement.innerText = currentCard.number;
    }
  }
  
  // Event listeners for buttons
  document.getElementById('draw-button').addEventListener('click', drawCard);
  document.getElementById('pass-button').addEventListener('click', passTurn);
  
  // Initialize the game
  initGame();
  