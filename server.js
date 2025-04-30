// server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

const tarotCardMeanings = {
  "The Fool": "New beginnings, spontaneity, and a free spirit.",
  "The Magician": "Manifestation, resourcefulness, and inspired action.",
  "The High Priestess": "Intuition, sacred knowledge, and the subconscious mind.",
  "The Empress": "Femininity, beauty, nature, nurturing, and abundance.",
  "The Emperor": "Authority, structure, control, and fatherhood.",
  "The Hierophant": "Spiritual wisdom, tradition, and conformity.",
  "The Lovers": "Love, harmony, partnerships, and choices.",
  "The Chariot": "Control, willpower, victory, and determination.",
  "Strength": "Courage, persuasion, influence, and compassion.",
  "The Hermit": "Soul-searching, introspection, and inner guidance.",
  "Wheel of Fortune": "Good luck, karma, life cycles, destiny.",
  "Justice": "Fairness, truth, and law.",
  "The Hanged Man": "Pause, surrender, letting go, and new perspectives.",
  "Death": "Endings, change, transformation, and transition.",
  "Temperance": "Balance, moderation, and patience.",
  "The Devil": "Shadow self, attachment, and restriction.",
  "The Tower": "Sudden change, upheaval, chaos, revelation.",
  "The Star": "Hope, faith, rejuvenation, and purpose.",
  "The Moon": "Illusion, fear, anxiety, and subconscious.",
  "The Sun": "Positivity, fun, warmth, and success.",
  "Judgement": "Reflection, reckoning, and awakening.",
  "The World": "Completion, accomplishment, and travel.",
  // Minor Arcana example
  "Ace of Wands": "Inspiration, new opportunities, growth.",
  "Two of Wands": "Future planning, progress, decisions.",
  "Three of Wands": "Expansion, foresight, overseas opportunities.",
  "Four of Wands": "Celebration, harmony, homecoming.",
  "Five of Wands": "Conflict, disagreements, competition.",
  "Six of Wands": "Success, public recognition, progress.",
  "Seven of Wands": "Challenge, competition, perseverance.",
  "Eight of Wands": "Movement, fast-paced change, action.",
  "Nine of Wands": "Resilience, persistence, boundaries.",
  "Ten of Wands": "Burden, extra responsibility, hard work.",
  "Page of Wands": "Inspiration, ideas, discovery, potential.",
  "Knight of Wands": "Energy, passion, inspired action.",
  "Queen of Wands": "Courage, determination, joy.",
  "King of Wands": "Natural leader, vision, entrepreneur.",
  "Ace of Cups": "Love, new relationships, compassion.",
  "Two of Cups": "Unified love, partnership, attraction.",
  "Three of Cups": "Celebration, friendship, creativity.",
  "Four of Cups": "Meditation, contemplation, apathy.",
  "Five of Cups": "Regret, failure, disappointment.",
  "Six of Cups": "Revisiting the past, childhood memories.",
  "Seven of Cups": "Opportunities, choices, illusion.",
  "Eight of Cups": "Disappointment, withdrawal, escapism.",
  "Nine of Cups": "Contentment, satisfaction, gratitude.",
  "Ten of Cups": "Divine love, harmony, alignment.",
  "Page of Cups": "Creative opportunities, intuitive messages.",
  "Knight of Cups": "Romance, charm, imagination.",
  "Queen of Cups": "Compassionate, caring, emotionally stable.",
  "King of Cups": "Emotionally balanced, diplomatic, generous.",
  "Ace of Swords": "Breakthroughs, clarity, sharp mind.",
  "Two of Swords": "Difficult decisions, weighing options.",
  "Three of Swords": "Heartbreak, emotional pain, sorrow.",
  "Four of Swords": "Rest, restoration, contemplation.",
  "Five of Swords": "Conflict, disagreements, competition.",
  "Six of Swords": "Transition, change, rite of passage.",
  "Seven of Swords": "Deception, trickery, strategy.",
  "Eight of Swords": "Imprisonment, victim mentality.",
  "Nine of Swords": "Anxiety, worry, fear.",
  "Ten of Swords": "Painful endings, betrayal.",
  "Page of Swords": "Curiosity, mental energy.",
  "Knight of Swords": "Action, impulsiveness.",
  "Queen of Swords": "Perceptive, clear-minded.",
  "King of Swords": "Mental clarity, authority.",
  "Ace of Pentacles": "Manifestation, new financial opportunity.",
  "Two of Pentacles": "Balance, adaptability, time management.",
  "Three of Pentacles": "Teamwork, collaboration.",
  "Four of Pentacles": "Saving money, security.",
  "Five of Pentacles": "Financial loss, isolation.",
  "Six of Pentacles": "Giving, receiving, generosity.",
  "Seven of Pentacles": "Long-term view, investment.",
  "Eight of Pentacles": "Apprenticeship, skill development.",
  "Nine of Pentacles": "Luxury, self-sufficiency.",
  "Ten of Pentacles": "Legacy, inheritance.",
  "Page of Pentacles": "Ambition, desire, diligence.",
  "Knight of Pentacles": "Hard work, productivity.",
  "Queen of Pentacles": "Nurturing, practical, providing.",
  "King of Pentacles": "Wealth, business, leadership."
};

function getResponseFromCards(cards) {
  let interpretation = "";
  cards.forEach((card) => {
    interpretation += tarotCardMeanings[card] + " ";
  });

  let outcome = "Yes"; // Simple logic for demo
  let response = "";

  if (outcome === "Yes") {
    response = Yes. ${interpretation};
  } else {
    response = No. ${interpretation};
  }

  return response;
}

app.post("/tarot", (req, res) => {
  const cards = req.body.cards;
  if (!cards || !Array.isArray(cards)) {
    return res.status(400).json({ error: "Invalid cards input." });
  }

  const reading = getResponseFromCards(cards);
  res.json({ reading });
});

app.listen(PORT, () => {
  console.log(Server running on port ${PORT});
});
