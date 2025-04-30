// tarot-bot/server.js

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

const tarotCardMeanings = {
  "The Fool": "New beginnings, spontaneity, and a free spirit.",
  "The Magician": "Action, willpower, and manifesting desires.",
  "The High Priestess": "Intuition, subconscious knowledge, and mystery.",
  "The Empress": "Fertility, nurturing, and abundance.",
  "The Emperor": "Authority, structure, and control.",
  "The Hierophant": "Tradition, conformity, and spiritual wisdom.",
  "The Lovers": "Love, harmony, and meaningful relationships.",
  "The Chariot": "Determination, willpower, and victory.",
  "Strength": "Courage, influence, and inner strength.",
  "The Hermit": "Soul-searching, introspection, and being alone.",
  "Wheel of Fortune": "Change, cycles, and fate.",
  "Justice": "Fairness, truth, and law.",
  "The Hanged Man": "Pause, surrender, and new perspectives.",
  "Death": "Endings, transformation, and change.",
  "Temperance": "Balance, moderation, and patience.",
  "The Devil": "Addiction, materialism, and playfulness.",
  "The Tower": "Sudden upheaval and revelation.",
  "The Star": "Hope, faith, and rejuvenation.",
  "The Moon": "Illusion, fear, and anxiety.",
  "The Sun": "Joy, success, and positivity.",
  "Judgement": "Reflection, reckoning, and awakening.",
  "The World": "Completion, travel, and accomplishment.",
  "Ace of Cups": "New love, compassion, and creativity.",
  "Two of Cups": "Unified love, partnership, and attraction.",
  "Three of Cups": "Celebration, friendship, and community.",
  "Four of Cups": "Apathy, contemplation, and reevaluation.",
  "Five of Cups": "Regret, failure, and disappointment.",
  "Six of Cups": "Reunion, nostalgia, and childhood memories.",
  "Seven of Cups": "Choices, fantasy, and illusion.",
  "Eight of Cups": "Abandonment, walking away, and introspection.",
  "Nine of Cups": "Contentment, satisfaction, and wish fulfillment.",
  "Ten of Cups": "Happiness, emotional bliss, and harmony.",
  "Page of Cups": "Creative opportunities and curiosity.",
  "Knight of Cups": "Romance, charm, and imagination.",
  "Queen of Cups": "Compassion, calm, and nurturing.",
  "King of Cups": "Emotional balance and generosity.",
  "Ace of Pentacles": "Manifestation, new financial opportunity.",
  "Two of Pentacles": "Balance, adaptability, and prioritization.",
  "Three of Pentacles": "Teamwork, collaboration, and skill.",
  "Four of Pentacles": "Control, stability, and conservation.",
  "Five of Pentacles": "Hardship, poverty, and insecurity.",
  "Six of Pentacles": "Giving, receiving, and generosity.",
  "Seven of Pentacles": "Long-term view, perseverance.",
  "Eight of Pentacles": "Apprenticeship, repetitive tasks.",
  "Nine of Pentacles": "Abundance, luxury, and self-sufficiency.",
  "Ten of Pentacles": "Wealth, inheritance, and family.",
  "Page of Pentacles": "Manifestation and study.",
  "Knight of Pentacles": "Efficiency, routine, and responsibility.",
  "Queen of Pentacles": "Practicality, creature comforts.",
  "King of Pentacles": "Security, leadership, and abundance.",
  "Ace of Swords": "Breakthroughs, clarity, and truth.",
  "Two of Swords": "Difficult decisions, weighing options.",
  "Three of Swords": "Heartbreak, sorrow, and grief.",
  "Four of Swords": "Rest, recovery, and contemplation.",
  "Five of Swords": "Conflict, defeat, and tension.",
  "Six of Swords": "Transition, change, and rite of passage.",
  "Seven of Swords": "Deception, trickery, and strategy.",
  "Eight of Swords": "Isolation, self-imposed restriction.",
  "Nine of Swords": "Anxiety, worry, and nightmares.",
  "Ten of Swords": "Painful endings, betrayal.",
  "Page of Swords": "Curiosity, communication.",
  "Knight of Swords": "Ambition, action, and impulsiveness.",
  "Queen of Swords": "Honesty, independence, and fairness.",
  "King of Swords": "Authority, truth, and intellectual power.",
  "Ace of Wands": "Inspiration, new opportunities.",
  "Two of Wands": "Planning, decisions, and progress.",
  "Three of Wands": "Expansion, foresight.",
  "Four of Wands": "Celebration, harmony.",
  "Five of Wands": "Conflict, competition.",
  "Six of Wands": "Success, recognition.",
  "Seven of Wands": "Challenge, defense.",
  "Eight of Wands": "Rapid action, movement.",
  "Nine of Wands": "Resilience, boundaries.",
  "Ten of Wands": "Burden, stress.",
  "Page of Wands": "Inspiration, exploration.",
  "Knight of Wands": "Energy, passion.",
  "Queen of Wands": "Courage, determination.",
  "King of Wands": "Leadership, vision."
};

function getResponseFromCards(cards) {
  let interpretation = "";
  cards.forEach((card) => {
    interpretation += tarotCardMeanings[card] + " ";
  });

  let outcome = "Yes";
  let response = "";
  if (outcome === "Yes") {
    response = Yes! The cards suggest a favorable outcome: ${interpretation};
  } else {
    response = No, the cards suggest that obstacles may lie ahead: ${interpretation};
  }

  return response;
}

app.post("/reading", (req, res) => {
  const { cards } = req.body;
  const result = getResponseFromCards(cards);
  res.json({ result });
});

app.listen(port, () => {
  console.log(Tarot bot server running on port ${port});
});
