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
cardArray.sort((a, b) => 0.5 - Math.random());

const grid = document.querySelector(".grid");
cardArray.forEach((cards, i) => {
  let card = document.createElement(`img`);
  card.setAttribute("src", "images/blank.png");
  card.setAttribute("data-id", i);
  //Przenosimy do HTML
  grid.appendChild(card);
});
