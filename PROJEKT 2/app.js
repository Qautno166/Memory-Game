"use strict";
const cardArray = [
  { name: "fries", img: "images/1.png" },
  { name: "pizza", img: "images/2.png" },
  { name: "shake", img: "images/3.png" },
  { name: "ice", img: "images/4.png" },
  { name: "hotdog", img: "images/5.png" },
  { name: "fries", img: "images/1.png" },
  { name: "pizza", img: "images/2.png" },
  { name: "shake", img: "images/3.png" },
  { name: "ice", img: "images/4.png" },
  { name: "hotdog", img: "images/5.png" },
];
//Generuje
let flipCard = [];
let flipCardId = [];
console.log(cardArray);

const result = document.querySelector(".result");
let displayResult = [0];
cardArray.sort((a, b) => 0.5 - Math.random());

const grid = document.querySelector(".grid");

function createBoard() {
  cardArray.forEach((cards, i) => {
    let card = document.createElement(`img`);
    card.setAttribute("src", "images/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", getFlip);
    //Przenosimy do HTML
    grid.appendChild(card);
  });
}
createBoard();

function checkMatch() {
  result.innerHTML = displayResult.length - 1;
  const cards = document.querySelectorAll("img");
  const optionOneId = flipCardId[0];
  const optionTwoId = flipCardId[1];
  if (displayResult.length >= 6) alert("Congrat's you Win");
  if (flipCardId.length < 2) {
    return;
  }
  //OKKkkkkkk
  if (flipCardId[0] === flipCardId[1]) {
    cards[optionOneId].setAttribute("src", "images/blank.png");
    cards[optionTwoId].setAttribute("src", "images/blank.png");
    alert("You have chosen the same cart");
    flipCard = [];
    flipCardId = [];
    return getFlip;
  }
  if (flipCard[0] === flipCard[1]) {
    alert("You found Match");
    cards[optionOneId].setAttribute("src", "images/white.png");
    cards[optionTwoId].setAttribute("src", "images/white.png");
    //Blokada karty odkrytej
    cards[optionOneId].removeEventListener("click", getFlip);
    cards[optionTwoId].removeEventListener("click", getFlip);

    displayResult.push(1);
    result.innerHTML = displayResult.length - 1;
    if (displayResult.length >= 6) alert("Congrat's you Win");
  } else {
    cards[optionOneId].setAttribute("src", "images/blank.png");
    cards[optionTwoId].setAttribute("src", "images/blank.png");

    alert("Sorry, try again");
  }

  flipCard = [];
  flipCardId = [];
}

function getFlip() {
  console.log(getFlip);
  let cardId = this.getAttribute("data-id");
  console.log(cardId);
  console.log(cardArray[cardId].img);
  flipCard.push(cardArray[cardId].name);
  flipCardId.push(cardId);
  console.log(flipCard);
  console.log(flipCardId);
  this.setAttribute("src", cardArray[cardId].img);
  if (flipCard.length < 2) {
    return;
  } else {
    setTimeout(checkMatch, 500);
  }
}
console.log(displayResult);
result.innerHTML = displayResult;
