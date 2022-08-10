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

// Checks if two flipped cards match: if so, it keeps them flipped and disables cards using 'disableCards' function. 
// If not, it will unflip the cards using 'unflipCards' function.
// At the same, every time the function is carried out, the 'count' variable will be increased by 1.
// This function also checks if all cards are flipped: if so, it will stop the game timer and create HTML elements
// that make up the overlay. 

  function checkForMatch() {

    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
  
    isMatch ? disableCards() : unflipCards();
    count += 1;
    moves.innerText = `${count} `;
    cardElement = Array.from(cardElement)
  
    let check = cardElement.every((item) => {
      return item.classList.contains("flip")
    })
    if (check) {
      clearInterval(GameTimer);
      setTimeout(() => {
  
        let overlay = document.createElement('div');
        overlay.setAttribute('id', 'wingameoverlay');
        gameContainer.appendChild(overlay);
    
          overlay.innerHTML = `<p class="winheader">Mission accomplished, Space Cadet!</p><br><p class="wintext">It only took you <strong>${seconds}</strong> Seconds and <strong>${count}</strong> Moves to match all the cards!</p><br><button id="replay" onClick="window.location.reload()" role="button" aria-label="This button will reload the page so the game begins again!">Play Again?</button>`;
    
      }, 1000);
    }
  }

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

  // Adds 'click' ability to cards and executes functions to start timer and remove the initial overlay and start button.

function allowClicks() {
    cards.forEach(card => card.addEventListener('click', flipCard));
    GameTimer = setInterval(startTimer, 1000);
    removeStartOverlay();
    startTimer();
  }
  
  // Sets timer parameters and outputs increments to DOM.
  
  function startTimer() {
    seconds += 1;
    time.innerText = `${seconds} `;
  }
  
  // Removes the initial overlay and start button from the DOM.

function removeStartOverlay() {
    startOverlay.parentNode.removeChild(startOverlay);
  }

  // Adds eventlistener to start button and starts the game when clicked.

startButton.addEventListener("click", allowClicks);