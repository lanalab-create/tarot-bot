const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

const tarotCardMeanings = {
  "The Fool": "New beginnings, spontaneity, and a free spirit.",
  "The Magician": "Manifestation, resourcefulness, power, inspired action.",
  "The High Priestess": "Intuition, unconscious knowledge, mystery.",
  "The Empress": "Fertility, beauty, nature, nurturing.",
  "The Emperor": "Authority, structure, control, fatherhood.",
  "The Hierophant": "Tradition, spiritual wisdom, religious beliefs.",
  "The Lovers": "Love, harmony, relationships, choices.",
  "The Chariot": "Control, willpower, victory, determination.",
  "Strength": "Courage, persuasion, influence, compassion.",
  "The Hermit": "Soul-searching, introspection, being alone.",
  "Wheel of Fortune": "Good luck, karma, life cycles, destiny.",
  "Justice": "Fairness, truth, law, cause and effect.",
  "The Hanged Man": "Pause, surrender, letting go, new perspectives.",
  "Death": "Endings, transformation, transition.",
  "Temperance": "Balance, moderation, patience, purpose.",
  "The Devil": "Addiction, materialism, playfulness or bondage.",
  "The Tower": "Sudden upheaval, chaos, revelation, awakening.",
  "The Star": "Hope, faith, purpose, renewal.",
  "The Moon": "Illusion, fear, anxiety, subconscious.",
  "The Sun": "Positivity, fun, warmth, success.",
  "Judgement": "Reflection, reckoning, awakening.",
  "The World": "Completion, integration, accomplishment, travel.",
  "Ace of Wands": "Inspiration, new opportunities, growth.",
  "Two of Wands": "Future planning, decisions, progress.",
  "Three of Wands": "Expansion, foresight, overseas opportunities.",
  "Four of Wands": "Celebration, harmony, homecoming.",
  "Five of Wands": "Conflict, disagreements, competition.",
  "Six of Wands": "Success, public recognition, progress.",
  "Seven of Wands": "Challenge, competition, protection.",
  "Eight of Wands": "Movement, fast-paced change, action.",
  "Nine of Wands": "Resilience, courage, persistence.",
  "Ten of Wands": "Burden, responsibility, hard work.",
  "Page of Wands": "Exploration, excitement, freedom.",
  "Knight of Wands": "Energy, passion, inspired action.",
  "Queen of Wands": "Courage, determination, joy.",
  "King of Wands": "Natural leader, vision, entrepreneur.",
  "Ace of Cups": "Love, new feelings, spirituality.",
  "Two of Cups": "Partnership, attraction, connection.",
  "Three of Cups": "Friendship, celebration, creativity.",
  "Four of Cups": "Meditation, apathy, reevaluation.",
  "Five of Cups": "Loss, grief, disappointment.",
  "Six of Cups": "Nostalgia, reunion, innocence.",
  "Seven of Cups": "Opportunities, choices, illusion.",
  "Eight of Cups": "Disappointment, withdrawal, change.",
  "Nine of Cups": "Contentment, satisfaction, gratitude.",
  "Ten of Cups": "Happiness, family, fulfillment.",
  "Page of Cups": "Imagination, possibilities, sensitivity.",
  "Knight of Cups": "Romance, charm, idealism.",
  "Queen of Cups": "Compassion, calm, comfort.",
  "King of Cups": "Emotional balance, diplomacy.",
  "Ace of Swords": "Breakthroughs, clarity, new ideas.",
  "Two of Swords": "Indecision, stalemate, choices.",
  "Three of Swords": "Heartbreak, sorrow, grief.",
  "Four of Swords": "Rest, contemplation, recovery.",
  "Five of Swords": "Conflict, defeat, betrayal.",
  "Six of Swords": "Transition, change, moving on.",
  "Seven of Swords": "Deception, trickery, strategy.",
  "Eight of Swords": "Imprisonment, self-victimization.",
  "Nine of Swords": "Anxiety, despair, nightmares.",
  "Ten of Swords": "Ruin, failure, betrayal.",
  "Page of Swords": "Curiosity, vigilance, ideas.",
  "Knight of Swords": "Action, speed, assertiveness.",
  "Queen of Swords": "Perceptive, independent, direct.",
  "King of Swords": "Intellectual, clear thinking, truth.",
  "Ace of Pentacles": "Prosperity, opportunity, abundance.",
  "Two of Pentacles": "Balance, adaptability, time management.",
  "Three of Pentacles": "Teamwork, collaboration, learning.",
  "Four of Pentacles": "Control, saving, security.",
  "Five of Pentacles": "Poverty, isolation, worry.",
  "Six of Pentacles": "Giving, receiving, generosity.",
  "Seven of Pentacles": "Investment, patience, results.",
  "Eight of Pentacles": "Skill, development, craftsmanship.",
  "Nine of Pentacles": "Luxury, self-sufficiency, independence.",
  "Ten of Pentacles": "Wealth, family, legacy.",
  "Page of Pentacles": "Ambition, goal setting, study.",
  "Knight of Pentacles": "Hard work, responsibility, routine.",
  "Queen of Pentacles": "Nurturing, practicality, security.",
  "King of Pentacles": "Abundance, prosperity, leadership."
};

function getResponseFromCards(cards) {
  let interpretation = cards.map(card => tarotCardMeanings[card] || "Unknown meaning.").join(" ");

  // Simple placeholder logic for Yes/No response
  let outcome = "Yes"; // You can customize this logic based on card types later.

  let response = "";
  if (outcome === "Yes") {
    response = Yes! The cards suggest a favorable outcome: ${interpretation};
  } else {
    response = No, the cards suggest obstacles may lie ahead: ${interpretation};
  }

  return response;
}

app.post("/tarot", (req, res) => {
  const { cards } = req.body;

  if (!Array.isArray(cards) || cards.length === 0) {
    return res.status(400).json({ error: "Please provide an array of card names." });
  }

  const result = getResponseFromCards(cards);
  res.json({ result });
});

app.listen(port, () => {
  console.log(Tarot bot server running on port ${port});
});
