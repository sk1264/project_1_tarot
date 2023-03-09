console.log($)
        $(document).ready(function(){
          $("#reading-button").click(function(){
            $(".test").fadeOut();
            $(".test").fadeOut("fast");
          });
        });

        $(document).ready(function() {
        $("#first-event").hide();
        $("#second-event").hide();
        $("#third-event").hide();
        $("#fourth-event").hide();
        $("#fifth-event").hide();
        $("#sixth-event").hide();
        $("#seventh-event").hide();
        $("#eighth-event").hide();
        $("#ninth-event").hide();
        $("#tenth-event").hide();
        $("#reading-button").click(function() {
            $("#first-event").show();
        });
        });

        $("#reading-button").click(function() {
        $("#first-event").hide();
        $("#second-event").show();
         });


console.log("linked")
  // visual html elements
// const columnOne = document.querySelector(".one")
// console.log(columnOne)
// const c1c1 = document.getElementById("c1c1")
// console.log(c1c1)
// columnOne.innerHTML = "<div class = 'card theHighPriestess'></div>"
// c1c1.classList.add("theHighPriestess")

// Starter screen for user to enter name for beginning of game
const startButton = document.getElementById("start-button");
const introScreen = document.getElementById("intro-screen");
const gameScreen = document.getElementById("game-screen");
const playerNameInput = document.getElementById("player-name-input");
const playerNameDisplay = document.getElementById("player-name-display");
const lifeEvent = document.querySelector(".lifeEvent");
const messageVisual = document.querySelector(".message");
const readingResult = document.querySelector(".readingResult")


// function that dictates player name for the game
function startGame() {
  const playerName = playerNameInput.value;
  playerNameDisplay.textContent = `Hello, ${playerName}.`;
  introScreen.style.display = "none";
  gameScreen.style.display = "block";
  lifeEvent.innerText = lifeEvents[state.currentLifeEvent];
}

// BELOW CODE: code for button to start shuffled deck reading displayed on browser

startButton.addEventListener("click", startGame);
const readingButton = document.getElementById('reading-button');

// BELOW CODE: used to keep track of the number of "bad" and "good" cards that appear during a state.reading.

const lifeEvents = [
  "College is the first step into our journey. Will you graduate on good or bad terms?",
  "Next, you are about to go on a date with your dream person. Is love on the horizon?",
  "You just landed an interview for your first adult job! Will it go well?",
  "Now let's check on your career trajectory - are you climbing the ladder or stuck trying to move up?",
  "I hear wedding bells! Does it look like a good future for the two of you?",
  "It's about that time for your very first home purchase. Did you make the right decision?",
  "First baby is on the way! Does the future look bright and healthy for your family?",
  "Oh no! It's your first major health scare. Do the cards suspect something terrible?",
  "Looks like you're experiencing a mid-life crisis (don't worry we all have one). How's it going for you?",
  "Lastly, it's time for retirement and beyond. How is it looking for you?",
]


const state = {
  reading: {
    badCards: 0,
    goodCards: 0,
  },
  lifePoints: 0,
  currentLifeEvent: 0
}

function nextLifeEvent(){
  readingResult.classList.toggle("hidden");
  state.currentLifeEvent += 1;
}
  // hide the reading result div by toggling hidden class
  // set state.currentLifeEvent to += 1


readingButton.addEventListener('click', () => {

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

// const placement = [
//   "1",
//   "2",
//   "3",
//   "4",
//   "5",
//   "6",
//   "7",
//   "8",
//   "9",
//   "10"
// ]

// for loop utilized to shuffle the array
for (let i = tarotCards.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [tarotCards[i], tarotCards[j]] = [tarotCards[j], tarotCards[i]];
}

// new array that contains the first 10 cards of tarotCards
const pickedCards = tarotCards.slice(0, 10);

console.log(pickedCards)

// returns elements in html i.e. the card images
const cards = document.querySelectorAll('.card');

//BELOW:
//SetAttribute (a method) calls on the current card element to set its class attribute to a string containing "card",
//and the value of the corresponding element in the pickedCards array.
//Now the card image will be displayed on the page.

const goodCardsMin = 6;
const badCardsMin = 6;
let message = "";

cards.forEach((card, index) => {
  console.log(pickedCards[index]);
  card.setAttribute("class", `card ${pickedCards[index]}`);
  const num = getRandomNum(0, 2);
  console.log(num);
  if (num === 0) {
    card.classList.add("flipped");
    state.reading.badCards += 1;
    // Bad card, so it counts as a negative point in the reading
    console.log("You got a bad card.")
  }
  else {
    state.reading.goodCards += 1;
    console.log("You got a good card.")
  }
});
//finished looping through cards and counting which are good or bad

if (state.reading.badCards >= badCardsMin) {
  message = "You got 6 or more bad cards. You lose this round!";
  console.log(message);
} else if (state.reading.goodCards >= goodCardsMin) {
  message = "You got 6 or more good cards. You win this round!";
  console.log(message);
}

setTimeout(() => {
messageVisual.innerText = message;
readingResult.classList.toggle("hidden");
}, "2000");

// return a number between a min and a max
function getRandomNum (min, max) {
  return Math.floor(Math.random() * (max - min) + min); 
  
}})