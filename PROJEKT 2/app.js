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
const result = document.querySelector(".result");
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
  const cards = document.querySelectorAll("img");
  const optionOneId = flipCardId[0];
  const optionTwoId = flipCardId[1];
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
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);
  } else {
    cards[optionOneId].setAttribute("src", "images/blank.png");
    cards[optionTwoId].setAttribute("src", "images/blank.png");

    alert("Sorry, try again");
  }

  flipCard = [];
  flipCardId = [];
}

function getFlip() {
  let cardId = this.getAttribute("data-id");
  console.log(cardId);
  console.log(cardArray[cardId].img);
  flipCard.push(cardArray[cardId].img);
  flipCardId.push(cardId);
  console.log(flipCard);
  console.log(flipCardId);
  this.setAttribute("src", cardArray[cardId].img);
  if (flipCard.length < 2) {
    return getFlip;
  } else {
    checkMatch();
  }
}
