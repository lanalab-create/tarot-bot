const express = require('express');
const app = express();

app.use(express.json());

const tarotCards = [
  "The Fool", "The Magician", "The High Priestess", "The Empress", "The Emperor", "The Hierophant", "The Lovers",
  "The Chariot", "Strength", "The Hermit", "Wheel of Fortune", "Justice", "The Hanged Man", "Death",
  "Temperance", "The Devil", "The Tower", "The Star", "The Moon", "The Sun", "Judgement", "The World",
  "Ace of Wands", "Two of Wands", "Three of Wands", "Four of Wands", "Five of Wands", "Six of Wands",
  "Seven of Wands", "Eight of Wands", "Nine of Wands", "Ten of Wands", "Page of Wands", "Knight of Wands",
  "Queen of Wands", "King of Wands", "Ace of Cups", "Two of Cups", "Three of Cups", "Four of Cups",
  "Five of Cups", "Six of Cups", "Seven of Cups", "Eight of Cups", "Nine of Cups", "Ten of Cups",
  "Page of Cups", "Knight of Cups", "Queen of Cups", "King of Cups", "Ace of Swords",
  "Two of Swords", "Three of Swords", "Four of Swords", "Five of Swords", "Six of Swords",
  "Seven of Swords", "Eight of Swords", "Nine of Swords", "Ten of Swords", "Page of Swords",
  "Knight of Swords", "Queen of Swords", "King of Swords", "Ace of Pentacles", "Two of Pentacles",
  "Three of Pentacles", "Four of Pentacles", "Five of Pentacles", "Six of Pentacles", "Seven of Pentacles",
  "Eight of Pentacles", "Nine of Pentacles", "Ten of Pentacles", "Page of Pentacles", "Knight of Pentacles",
  "Queen of Pentacles", "King of Pentacles"
];

// Draw 3 cards randomly
function drawCards() {
  const shuffled = [...tarotCards].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3);
}

// Interpret the cards based on the question
function interpret(cards, question) {
  const joined = cards.join(" - ").toLowerCase();

  // Check if the question is asking for a "spirit message"
  if (question.toLowerCase().includes("spirits message") || question.toLowerCase().includes("spirit's message")) {
    return { type: "Spirits' Message", message: "Trust the journey ahead." };
  }

  // Check if we have any "Yes" or "No" cards based on the drawn cards
  if (joined.includes("sun") || joined.includes("world") || joined.includes("ace of cups")) {
    return { type: "Yes", message: "The energy is favorable." };
  } else if (joined.includes("tower") || joined.includes("ten of swords") || joined.includes("five of cups")) {
    return { type: "No", message: "The path is blocked for now." };
  } else {
    // For unclear answers, give guidance message
    return { type: "Spirits' Message", message: "You have gotten a guidance message for your situation." };
  }
}

app.post('/webhook', (req, res) => {
  const queryText = req.body.queryResult.queryText; // User's question
  const cards = drawCards();
  const result = interpret(cards, queryText); // Interpret the cards based on the question

  res.json({
    fulfillmentText: 'Cards: ' + cards.join(" - ") + '. Answer: ' + result.type + '. ' + result.message
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});
