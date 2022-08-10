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