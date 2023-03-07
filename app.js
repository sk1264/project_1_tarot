console.log("linked")
  // visual html elements
// const columnOne = document.querySelector(".one")
// console.log(columnOne)
// const c1c1 = document.getElementById("c1c1")
// console.log(c1c1)
// columnOne.innerHTML = "<div class = 'card theHighPriestess'></div>"
// c1c1.classList.add("theHighPriestess")

// Starter screen for user to enter name for beginning of game
const firstButton = document.getElementById("first-button");
const introScreen = document.getElementById("intro-screen");
const gameScreen = document.getElementById("game-screen");
const playerNameInput = document.getElementById("player-name-input");
const playerNameDisplay = document.getElementById("player-name-display");

// function that dictates player name for the game
function startGame() {
  const playerName = playerNameInput.value;
  playerNameDisplay.textContent = `Welcome ${playerName}!`;
  introScreen.style.display = "none";
  gameScreen.style.display = "block";
}

firstButton.addEventListener("click", startGame);


// BELOW CODE: code for button to start shuffled deck reading displayed on browser
const startButton = document.getElementById('start-button');

// BELOW CODE: used to keep track of the number of "bad" and "good" cards that appear during a reading.
const reading = {
  badCards: 0,
  goodCards: 0,
}

startButton.addEventListener('click', () => {

// variable for the tarot cards array in the deck
const tarotCards = [
  "theHighPriestess",
  "theEmpress",
  "theEmperor",
  "theHierophant",
  "theLovers",
  "theChariot",
  "strength",
  "theHermit",
  "wheelOfFortune",
  "justice",
  "theHangedMan",
  "death",
  "temperance",
  "theDevil",
  "theTower",
  "theStar",
  "theMoon",
  "theSun",
  "judgement",
  "theWorld",
  "aceOfWands",
  "twoOfWands",
  "threeOfWands",
  "fourOfWands",
  "fiveOfWands",
  "sixOfWands",
  "sevenOfWands",
  "eightOfWands",
  "nineOfWands",
  "tenOfWands",
  "pageOfWands",
  "knightOfWands",
  "queenOfWands",
  "kingOfWands",
  "aceOfCups",
  "twoOfCups",
  "threeOfCups",
  "fourOfCups",
  "fiveOfCups",
  "sixOfCups",
  "sevenOfCups",
  "eightOfCups",
  "nineOfCups",
  "tenOfCups",
  "pageOfCups",
  "knightOfCups",
  "queenOfCups",
  "kingOfCups",
  "aceOfSwords",
  "twoOfSwords",
  "threeOfSwords",
  "fourOfSwords",
  "fiveOfSwords",
  "sixOfSwords",
  "sevenOfSwords",
  "eightOfSwords",
  "nineOfSwords",
  "tenOfSwords",
  "pageOfSwords",
  "knightOfSwords",
  "queenOfSwords",
  "kingOfSwords",
  "aceOfPentacles",
  "twoOfPentacles",
  "threeOfPentacles",
  "fourOfPentacles",
  "fiveOfPentacles",
  "sixOfPentacles",
  "sevenOfPentacles",
  "eightOfPentacles",
  "nineOfPentacles",
  "tenOfPentacles",
  "pageOfPentacles",
  "knightOfPentacles",
  "queenOfPentacles",
  "kingOfPentacles",
]

// for loop utilized to shuffle the array
for (let i = tarotCards.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [tarotCards[i], tarotCards[j]] = [tarotCards[j], tarotCards[i]];
}

// new array that contains the first 10 cards of tarotCards
const pickedCards = tarotCards.slice(0, 10);

console.log(pickedCards)

const cards = document.querySelectorAll('.card');

//BELOW:
//SetAttribute (a method) calls on the current card element to set its class attribute to a string containing "card",
//and the value of the corresponding element in the pickedCards array.
//Now the card image will be displayed on the page.

cards.forEach((card, index) => {
  console.log(pickedCards[index])
  card.setAttribute("class", `card ${pickedCards[index]}`);
  const num = getRandomNum (0, 2) 
  console.log(num)
  if (num === 0) {
    card.classList.add("flipped")
    reading.badCards += 1
    // Bad card, so it counts as a negative point in the reading
    if (reading.badCards > reading.goodCards) {
      console.log("You got a bad card!")
    }
  } else {
    // Good card, so it counts as a positive point in the reading
    reading.goodCards += 1
    if (reading.goodCards > reading.badCards) {
      console.log("You got a good card!")
    }
  }
});

});

function getRandomNum (min, max) {
  return Math.floor(Math.random() * (max - min) + min); 
  // return a number between a min and a max
}