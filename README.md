# Memory Card Game Readme
This is a simple Memory Card Game built using HTML, CSS, and JavaScript. 
The game randomly generates a set of cards with images of different food items,
and the player has to match pairs of cards with the same image by flipping them over one at a time.

# How to Play
Click on a card to flip it over and reveal the image.
Click on another card to reveal its image.
If the two cards match, they will stay flipped over.
If the two cards do not match, they will be flipped back over, and you can try again.
Keep playing until you have matched all the pairs of cards and won the game.

#Code Overview
The code uses strict mode, which enforces more strict rules for JavaScript code and 
helps to avoid common mistakes.

The cardArray array holds an array of objects, each representing a card with a name and an image.

The createBoard function creates the game board by looping through the cardArray,
creating an img element for each card, and appending it to the grid element in the HTML.
Each card has a data-id attribute that corresponds to its index in the cardArray, 
and an event listener that calls the getFlip function when clicked.

The getFlip function is called when a card is clicked, and it stores the name and 
index of the clicked card in the flipCard and flipCardId arrays. If two cards have been flipped,
the checkMatch function is called after a short delay using the setTimeout method.

The checkMatch function checks if the two flipped cards match, and updates the display accordingly. 
If the two cards match, they are locked in the flipped position, and their event listeners 
are removed to prevent further clicks. If they do not match, they are flipped back over. 
The displayResult array keeps track of the number of matches found, and the result 
element in the HTML is updated to show the current score.

If all pairs of cards have been matched, a congratulatory message is displayed.

#Conclusion
This is a simple implementation of a memory card game that demonstrates the use of JavaScript to create
interactivity in web applications. It can be modified and expanded upon to create more complex 
games or other interactive web applications.
