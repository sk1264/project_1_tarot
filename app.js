// jQuery utilized to fade out text in the html after reading button is clicked 
console.log($)
        $(document).ready(function(){
          $("#reading-button").click(function(){
            $(".test").fadeOut();
            $(".test").fadeOut("fast");
          });
        });

// jQuery utilized to fade out player name after reading button is clicked
        $(document).ready(function(){
          $("#reading-button").click(function(){
            $("#player-name-display").fadeOut();
          });
        });

//-----------------------------VISUAL HTML ELEMENTS------👀-
// Starter screen for user to enter name for beginning of game
const startButton = document.getElementById("start-button");
const introScreen = document.querySelector(".introScreen");
const gameScreen = document.getElementById("game-screen");
const playerNameInput = document.getElementById("player-name-input");
const playerNameDisplay = document.getElementById("player-name-display");
const lifeEvent = document.querySelector(".lifeEvent");
const messageVisual = document.querySelector(".message");
const readingResult = document.querySelector(".readingResult");
const nextButton = document.querySelector(".nextReading");
const readingButton = document.getElementById('reading-button');
const interpretation = document.querySelector(".interpretation");
const interpItems = document.querySelector("#interpItems");
const eventImage = document.querySelector(".eventImage");
const destinyButton = document.querySelector(".destinyResult");
  
//-------------ATTACHING EVENT LISTENERS-----💥
nextButton.addEventListener("click", nextLifeEvent);
startButton.addEventListener("click", startGame);
readingButton.addEventListener('click', produceReading);
//destinyButton.addEventListener('click', destinyResult);
interpretation.addEventListener("click",()=>{
  interpItems.classList.toggle("hidden");
})
destinyButton.addEventListener("click", ()=>{
  destinyReading.classList.toggle("hidden")});


// function that dictates player name for the game, hides intro screen, shows game screen, and displays first life event
function startGame() {
  const playerName = playerNameInput.value; //collecting player's name
  playerNameDisplay.textContent = `Hello, ${playerName}.`;
  introScreen.classList.toggle("hidden");
  gameScreen.classList.toggle("hidden");
  // gameScreen.classList.toggle("gameScreen");
  eventImage.setAttribute("class", eventImages[state.currentLifeEvent]);
  lifeEvent.innerText = lifeEvents[state.currentLifeEvent]; //<---- staring our 
}
//button to start shuffled deck reading displayed on browser



// array for life events
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

const eventImages = [
  "college",
  "date",
  "interview",
  "career",
  "wedding",
  "home",
  "baby",
  "health",
  "crisis",
  "retirement",
]

// array for tarot cards
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

// object with three properties of reading, lifePoints, and currentLifeEvent
const state = {
  reading: {
    badCards: 0,
    goodCards: 0,
  },
    lifePoints: 0,
    currentLifeEvent: 0
}

// toggles the hidden class on the readingResult element
// increments the currentLifeEvent property of the state object by 1, tracks current life event number
function nextLifeEvent(){
    readingResult.classList.toggle("hidden"); //hiding the result popup
    state.currentLifeEvent += 1; //inciment the life event index

    //inject next life event TEXT
    //inject next life event image
    eventImage.classList.toggle(eventImages[state.currentLifeEvent])
    lifeEvent.innerText = lifeEvents[state.currentLifeEvent];//<---- staring our 
  }
// -----------------------------------------------------------------------

// -----------------------------------------------------------------------
// for loop iterates through the tarotDeck array

function shuffleCards(tarotDeck) {
    for (let i = tarotDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [tarotDeck[i], tarotDeck[j]] = [tarotDeck[j], tarotDeck[i]];
  }
    const pickedCards = tarotDeck.slice(0, 10);
    console.log(pickedCards)
    return pickedCards
}

// ---------------------------------------------------------------------------
function renderCardsToScreen(pickedCards){
    const cards = document.querySelectorAll('.card'); //grabbing an array of html elements 
    const goodCardsMin = 6;
    const badCardsMin = 6;
    let message = "";

  //looping over card divs to assign them flipped/bad and background images
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


if(state.reading.badCards >= 5) {
  message = "You got 6 or more bad cards. You lose this round!";
  console.log(message);
} else {
  message = "You got 6 or more good cards. You win this round!";
  console.log(message);
}

if (state.currentLifeEvent === 9) {
  message = "Click for your destiny.";
  console.log(message);
}

//finished looping through cards and counting which are good or bad

setTimeout(() => {
    messageVisual.innerText = message;
    console.log(messageVisual)
    readingResult.classList.toggle("hidden");
    }, 1000);
   } //end of function---------------------------------------------

function produceReading() {
  state.reading.badCards = 0; //resetting the reading values since we are starting a NEW reading.
  state.reading.goodCards = 0;

  const pickedCards = shuffleCards(tarotCards) //shuffled deck and grabbed 10 cards
  renderCardsToScreen(pickedCards)
}

// ----------------------------------------------------------- <3


// return a number between a min and a max relating to looping over the cards to assign thems
function getRandomNum (min, max) {
    return Math.floor(Math.random() * (max - min) + min); 
}