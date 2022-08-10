// This code is based on a matching game tutorial by Marina Ferreira from 
// https://marina-ferreira.github.io/projects/js/memory-game/. It has been significantly 
// adapted by me to incorporate a timer, account for number of moves and to create, manipulate
// and remove DOM elements. 

// Variables

const cards = document.querySelectorAll('.card');
const startButton = document.getElementById('start');
const time = document.getElementById('timeelapsed');
const pairs = document.getElementById('matches');
const moves = document.getElementById('movesmade');
const gameContainer = document.getElementById('gamecontainer');
const startOverlay = document.getElementById('startgameoverlay');

let cardElement = document.getElementsByClassName("card");
let hasFlippedCard = false;
let lockBoard = false;
let firstCard 
let secondCard
let count = 0;
let seconds = -1;

// Flips card on mouse click; ensures that only two cards can be turned over at a time. 
// If two cards are 'flipped', the 'checkForMatch' function is executed.

function flipCard() {
    if (lockBoard) return;
  
    if (this === firstCard) return;
    this.classList.add('flip');
  
    if (!hasFlippedCard) {
      hasFlippedCard = true;
      firstCard = this;
      return;
    }
    hasFlippedCard = false;
    secondCard = this;
    checkForMatch();
  }

  function checkForMatch() {

    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
  
    isMatch ? disableCards() : unflipCards();
    count += 1;
    moves.innerText = `${count} `;
    cardElement = Array.from(cardElement)

// Removes ability to click on cards once they have been matched.

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
  }

  // Locks the board so no more than two cards can be flipped at any one time, then waits 1 second before unflipping both cards if the
// 'isMatch' variable in the 'checkForMatch' function evaluates to false. 

function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');
  
      lockBoard = false;
    }, 1000);
  }

  // Generates random numbers which are assigned as 'order' parameters for each card. 

(function shuffle() {
    cards.forEach(card => {
      let randomPos = Math.floor(Math.random() * 100);
      card.style.order = randomPos;
    });
  })();