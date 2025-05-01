const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(bodyParser.json());

// All 78 tarot card meanings
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
  "Ace of Wands": "Ace of Wands represents inspiration, new opportunities, and creative potential.",
  "Two of Wands": "Two of Wands signifies planning, decisions, and progress.",
  "Three of Wands": "Three of Wands represents expansion, foresight, and growth.",
  "Four of Wands": "Four of Wands indicates celebration, harmony, and stability, often related to home or relationships.",
  "Five of Wands": "Five of Wands signifies conflict, competition, and challenges.",
  "Six of Wands": "Six of Wands represents victory, recognition, and success.",
  "Seven of Wands": "Seven of Wands symbolizes defense, standing your ground, and perseverance.",
  "Eight of Wands": "Eight of Wands indicates swift movement, progress, and action.",
  "Nine of Wands": "Nine of Wands represents resilience, persistence, and protecting what you've built.",
  "Ten of Wands": "Ten of Wands signifies burden, responsibility, and feeling overwhelmed.",
  "Page of Wands": "Page of Wands symbolizes enthusiasm, exploration, and new ideas.",
  "Knight of Wands": "Knight of Wands represents action, adventure, and pursuing one's passions.",
  "Queen of Wands": "Queen of Wands signifies confidence, charisma, and creative energy.",
  "King of Wands": "King of Wands symbolizes leadership, vision, and ambition.",
  "Ace of Cups": "Ace of Cups represents new emotional beginnings, love, and spiritual growth.",
  "Two of Cups": "Two of Cups signifies partnership, unity, and mutual attraction.",
  "Three of Cups": "Three of Cups represents celebration, friendship, and community.",
  "Four of Cups": "Four of Cups signifies introspection, boredom, and contemplation.",
  "Five of Cups": "Five of Cups represents grief, regret, and focusing on the negative.",
  "Six of Cups": "Six of Cups symbolizes nostalgia, childhood memories, and innocence.",
  "Seven of Cups": "Seven of Cups represents choices, illusions, and dreams.",
  "Eight of Cups": "Eight of Cups signifies leaving behind what no longer serves you and seeking deeper fulfillment.",
  "Nine of Cups": "Nine of Cups represents emotional contentment, wishes fulfilled, and happiness.",
  "Ten of Cups": "Ten of Cups symbolizes emotional fulfillment, harmony, and happiness in relationships.",
  "Page of Cups": "Page of Cups represents creativity, intuition, and emotional exploration.",
  "Knight of Cups": "Knight of Cups signifies romance, idealism, and following one's heart.",
  "Queen of Cups": "Queen of Cups represents emotional intelligence, compassion, and nurturing energy.",
  "King of Cups": "King of Cups symbolizes emotional control, wisdom, and balance in relationships.",
  "Ace of Swords": "Ace of Swords represents mental clarity, new ideas, and breakthroughs.",
  "Two of Swords": "Two of Swords signifies difficult decisions, stalemates, and inner conflict.",
  "Three of Swords": "Three of Swords represents heartbreak, sorrow, and emotional pain.",
  "Four of Swords": "Four of Swords symbolizes rest, recovery, and contemplation.",
  "Five of Swords": "Five of Swords represents conflict, defeat, and the need for resolution.",
  "Six of Swords": "Six of Swords signifies transition, moving on, and leaving the past behind.",
  "Seven of Swords": "Seven of Swords symbolizes deception, strategy, and secrecy.",
  "Eight of Swords": "Eight of Swords represents restriction, mental entrapment, and self-imposed limitations.",
  "Nine of Swords": "Nine of Swords signifies anxiety, worry, and sleepless nights.",
  "Ten of Swords": "Ten of Swords represents betrayal, painful endings, and hitting rock bottom.",
  "Page of Swords": "Page of Swords signifies curiosity, intellect, and a thirst for knowledge.",
  "Knight of Swords": "Knight of Swords represents fast action, assertiveness, and decisive moves.",
  "Queen of Swords": "Queen of Swords symbolizes clarity, independence, and intellect.",
  "King of Swords": "King of Swords represents intellect, authority, and strong decision-making.",
  "Ace of Pentacles": "Ace of Pentacles represents new opportunities for wealth, success, and material gain.",
  "Two of Pentacles": "Two of Pentacles signifies balance, adaptability, and juggling priorities.",
  "Three of Pentacles": "Three of Pentacles represents collaboration, teamwork, and building something together.",
  "Four of Pentacles": "Four of Pentacles symbolizes security, stability, and holding onto resources.",
  "Five of Pentacles": "Five of Pentacles signifies financial loss, hardship, and feeling excluded.",
  "Six of Pentacles": "Six of Pentacles represents generosity, balance, and giving/receiving support.",
  "Seven of Pentacles": "Seven of Pentacles signifies patience, hard work, and waiting for results.",
  "Eight of Pentacles": "Eight of Pentacles represents skill development, dedication, and craftsmanship.",
  "Nine of Pentacles": "Nine of Pentacles symbolizes luxury, self-sufficiency, and financial independence.",
  "Ten of Pentacles": "Ten of Pentacles signifies long-term success, family wealth, and legacy.",
  "Page of Pentacles": "Page of Pentacles represents ambition, practicality, and new beginnings in finances.",
  "Knight of Pentacles": "Knight of Pentacles symbolizes hard work, responsibility, and reliability.",
  "Queen of Pentacles": "Queen of Pentacles represents nurturing, practicality, and financial security.",
  "King of Pentacles": "King of Pentacles signifies success, wealth, and material mastery."
};

// Card interpretation logic
function interpretCards(cards) {
  return cards.map(card => cardMeanings[card] || `No meaning found for ${card}.`).join(" ");
}

// Tarot logic to determine response
function generateTarotResponse(cards, question) {
  const interpretation = interpretCards(cards).trim();

  const questionLower = question.toLowerCase();
  if (questionLower.includes("will") || questionLower.includes("should") || questionLower.startsWith("is") || questionLower.startsWith("can")) {
    if (interpretation.includes("success") || interpretation.includes("joy") || interpretation.includes("victory") || interpretation.includes("opportunities")) {
      return `Yes. The cards suggest a favorable outcome: ${interpretation}`;
    } else if (interpretation.includes("conflict") || interpretation.includes("challenges") || interpretation.includes("loss") || interpretation.includes("hardship")) {
      return `No. The cards suggest obstacles or setbacks: ${interpretation}`;
    } else {
      return `You received a message of guidance: ${interpretation}`;
    }
  }

  // General question
  return `Here is your message: ${interpretation}`;
}

// Dialogflow webhook
app.post('/webhook', (req, res) => {
  try {
    const queryResult = req.body.queryResult;

    if (!queryResult || !queryResult.parameters) {
      throw new Error("Missing parameters.");
    }

    const cards = queryResult.parameters.cards || [];
    const question = queryResult.parameters.question || "";

    if (!Array.isArray(cards) || cards.length === 0) {
      throw new Error("Card list is empty or not provided.");
    }

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
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: err.message });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Tarot bot is running on port ${PORT}`);
});
