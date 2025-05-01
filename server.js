const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// List of all 78 cards (simplified for this example, you can expand it)
const tarotCards = [
  "The Fool", "The Magician", "The High Priestess", "The Empress", "The Emperor",
  "The Hierophant", "The Lovers", "The Chariot", "Strength", "The Hermit",
  "Wheel of Fortune", "Justice", "The Hanged Man", "Death", "Temperance",
  "The Devil", "The Tower", "The Star", "The Moon", "The Sun",
  "Judgement", "The World", "Ace of Cups", "Two of Cups", "Three of Cups",
  "Four of Cups", "Five of Cups", "Six of Cups", "Seven of Cups", "Eight of Cups",
  "Nine of Cups", "Ten of Cups", "Page of Cups", "Knight of Cups", "Queen of Cups", "King of Cups",
  "Ace of Swords", "Two of Swords", "Three of Swords", "Four of Swords", "Five of Swords",
  "Six of Swords", "Seven of Swords", "Eight of Swords", "Nine of Swords", "Ten of Swords",
  "Page of Swords", "Knight of Swords", "Queen of Swords", "King of Swords",
  "Ace of Pentacles", "Two of Pentacles", "Three of Pentacles", "Four of Pentacles", "Five of Pentacles",
  "Six of Pentacles", "Seven of Pentacles", "Eight of Pentacles", "Nine of Pentacles", "Ten of Pentacles",
  "Page of Pentacles", "Knight of Pentacles", "Queen of Pentacles", "King of Pentacles",
  "Ace of Wands", "Two of Wands", "Three of Wands", "Four of Wands", "Five of Wands",
  "Six of Wands", "Seven of Wands", "Eight of Wands", "Nine of Wands", "Ten of Wands",
  "Page of Wands", "Knight of Wands", "Queen of Wands", "King of Wands"
];

function drawCards() {
  const drawn = [];
  while (drawn.length < 3) {
    const card = tarotCards[Math.floor(Math.random() * tarotCards.length)];
    if (!drawn.includes(card)) drawn.push(card);
  }
  return drawn;
}

function interpretYesNo(cards) {
  const positive = ["The Sun", "The Star", "The World", "The Lovers", "The Chariot"];
  const negative = ["The Tower", "Death", "Ten of Swords", "Five of Cups", "The Devil"];
  const neutral = ["The Moon", "The Hanged Man", "Justice", "Temperance"];

  let score = 0;
  cards.forEach(card => {
    if (positive.includes(card)) score += 1;
    else if (negative.includes(card)) score -= 1;
  });

  let outcome = "Maybe";
  if (score > 0) outcome = "Yes";
  else if (score < 0) outcome = "No";

  const summary = The cards drawn are ${cards.join(", ")}.;
  const advice = outcome === "Maybe"
    ? "You received a message of guidance for your situation: Trust the process and observe what unfolds."
    : "";

  return ${outcome}. ${summary} ${advice};
}

app.post('/webhook', (req, res) => {
  const userQuestion = req.body.queryResult.queryText.toLowerCase();

  const cards = drawCards();
  let response;

  if (userQuestion.includes("message") || userQuestion.includes("spiritual")) {
    response = You received a message of guidance: ${cards.join(", ")}. Reflect on what they mean for you.;
  } else {
    response = interpretYesNo(cards);
  }

  res.json({ fulfillmentText: response });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
