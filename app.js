console.log("linked")
  // visual html elements
// const columnOne = document.querySelector(".one")
// console.log(columnOne)
// const c1c1 = document.getElementById("c1c1")
// console.log(c1c1)
// columnOne.innerHTML = "<div class = 'card theHighPriestess'></div>"
// c1c1.classList.add("theHighPriestess")

const startButton = document.getElementById('start-button');

const reading = {
  badCards: 0,
  goodCards: 0,
}

startButton.addEventListener('click', () => {

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

for (let i = tarotCards.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [tarotCards[i], tarotCards[j]] = [tarotCards[j], tarotCards[i]];
}

const pickedCards = tarotCards.slice(0, 10);

console.log(pickedCards)
const cards = document.querySelectorAll('.card');
cards.forEach((card, index) => {
  console.log(pickedCards[index])
  card.setAttribute("class", `card ${pickedCards[index]}`);
  const num = getRandomNum (0, 2) 
  console.log(num)
  if (num === 0) {
    card.classList.add("flipped")
    reading.badCards += 1
  }
});

});

function getRandomNum (min, max) {
  return Math.floor(Math.random() * (max - min) + min); 
  // return a number between a min and a max
}