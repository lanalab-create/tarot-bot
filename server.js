const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Use body parser middleware to parse JSON
app.use(bodyParser.json());

// Define card meanings for all 78 Tarot cards
const cardMeanings = {
  "The Fool": "The Fool represents new beginnings, innocence, and taking a leap of faith.",
  "The Magician": "The Magician represents willpower, resourcefulness, and the ability to manifest your goals.",
  "The High Priestess": "The High Priestess symbolizes intuition, mystery, and hidden knowledge.",
  "The Empress": "The Empress represents fertility, abundance, and nurturing energy.",
  "The Emperor": "The Emperor symbolizes authority, structure, and control.",
  "The Hierophant": "The Hierophant represents tradition, wisdom, and spiritual guidance.",
  "The Lovers": "The Lovers card signifies relationships, choices, and harmony.",
  "The Chariot": "The Chariot symbolizes determination, focus, and overcoming challenges through hard work.",
  "Strength": "Strength signifies courage, patience, and inner strength.",
  "The Hermit": "The Hermit represents introspection, solitude, and seeking inner guidance.",
  "Wheel of Fortune": "The Wheel of Fortune signifies cycles, change, and destiny.",
  "Justice": "Justice represents fairness, balance, and truth.",
  "The Hanged Man": "The Hanged Man signifies suspension, letting go, and seeing things from a new perspective.",
  "Death": "Death symbolizes transformation, endings, and new beginnings.",
  "Temperance": "Temperance represents balance, moderation, and harmony.",
  "The Devil": "The Devil signifies temptation, materialism, and being trapped in negative patterns.",
  "The Tower": "The Tower symbolizes sudden change, upheaval, and destruction of false structures.",
  "The Star": "The Star represents hope, inspiration, and renewal.",
  "The Moon": "The Moon symbolizes illusion, deception, and the unconscious mind.",
  "The Sun": "The Sun signifies joy, success, and clarity.",
  "Judgment": "Judgment represents resurrection, rebirth, and reflecting on past actions.",
  "The World": "The World signifies completion, achievement, and fulfillment.",
  // ... All remaining 56 minor arcana cards as you had before
};

// Function to interpret the drawn cards
function interpretCards(cards) {
  return cards.map(card => cardMeanings[card] || "Card interpretation not found.").join(" ");
}

// Core tarot logic used in both API and webhook
function generateTarotResponse(cards, question) {
  const interpretation = interpretCards(cards);
  const lowerQuestion = question.toLowerCase();

  let response = "";

  if (lowerQuestion.includes("will") || lowerQuestion.includes("should")) {
    if (interpretation.includes("willpower") || interpretation.includes("focus") || interpretation.includes("new opportunities")) {
      response = `Yes. The cards suggest a favorable outcome: ${interpretation}`;
    } else if (interpretation.includes("challenges") || interpretation.includes("obstacles") || interpretation.includes("conflict")) {
      response = `No. The cards suggest challenges or obstacles: ${interpretation}`;
    } else {
      response = `You have received a guidance message: ${interpretation}`;
    }
  } else {
    response = `Your reading is as follows: ${interpretation}`;
  }

  return response;
}

// API endpoint for manual requests
app.post('/tarot-reading', (req, res) => {
  const { cards, question } = req.body;
  const response = generateTarotResponse(cards, question);
  res.json({ response });
});

// Dialogflow webhook endpoint
app.post('/webhook', (req, res) => {
  const queryResult = req.body.queryResult;
  const cards = queryResult.parameters.cards || [];
  const question = queryResult.parameters.question || "What do the spirits want to say?";

  const responseText = generateTarotResponse(cards, question);

  res.json({
    fulfillmentMessages: [
      {
        text: {
          text: [responseText]
        }
      }
    ]
  });
});

// Start the server
app.listen(3000, () => {
  console.log("Tarot bot is running on port 3000");
});
