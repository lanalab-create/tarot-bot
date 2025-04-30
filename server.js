const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const tarotCardMeanings = {
  "The Fool": "New beginnings, spontaneity, free spirit.",
  "The Magician": "Manifestation, resourcefulness, power, inspired action.",
  "The High Priestess": "Intuition, sacred knowledge, divine feminine.",
  "The Empress": "Femininity, beauty, nature, nurturing, abundance.",
  "The Emperor": "Authority, structure, control, fatherhood.",
  "The Hierophant": "Tradition, spiritual wisdom, conformity.",
  "The Lovers": "Love, harmony, relationships, choices.",
  "The Chariot": "Control, willpower, success, action.",
  "Strength": "Courage, influence, compassion, inner strength.",
  "The Hermit": "Soul-searching, introspection, inner guidance.",
  "Wheel of Fortune": "Luck, karma, destiny, turning point.",
  "Justice": "Fairness, truth, law, accountability.",
  "The Hanged Man": "Pause, surrender, letting go, new perspective.",
  "Death": "Endings, transformation, transition.",
  "Temperance": "Balance, moderation, patience, purpose.",
  "The Devil": "Addiction, materialism, playfulness or bondage.",
  "The Tower": "Sudden change, upheaval, revelation.",
  "The Star": "Hope, faith, purpose, renewal, spirituality.",
  "The Moon": "Illusion, intuition, confusion, subconscious.",
  "The Sun": "Positivity, fun, warmth, success, vitality.",
  "Judgement": "Reflection, reckoning, inner calling.",
  "The World": "Completion, achievement, travel, celebration.",

  "Ace of Cups": "New feelings, spirituality, intuition.",
  "Two of Cups": "Unified love, partnership, mutual attraction.",
  "Three of Cups": "Celebration, friendship, creativity.",
  "Four of Cups": "Meditation, apathy, contemplation.",
  "Five of Cups": "Regret, failure, disappointment.",
  "Six of Cups": "Reunion, nostalgia, childhood memories.",
  "Seven of Cups": "Choices, imagination, illusion.",
  "Eight of Cups": "Disappointment, withdrawal, escapism.",
  "Nine of Cups": "Contentment, satisfaction, gratitude.",
  "Ten of Cups": "Harmony, marriage, happiness, alignment.",
  "Page of Cups": "Creative opportunities, curiosity, possibility.",
  "Knight of Cups": "Romance, charm, imagination, idealism.",
  "Queen of Cups": "Compassion, calm, comfort, emotional security.",
  "King of Cups": "Emotional balance, diplomacy, generosity.",

  "Ace of Pentacles": "New financial or career opportunity.",
  "Two of Pentacles": "Balance, multitasking, adaptability.",
  "Three of Pentacles": "Teamwork, collaboration, learning.",
  "Four of Pentacles": "Saving, control, security, conservatism.",
  "Five of Pentacles": "Poverty, insecurity, hardship.",
  "Six of Pentacles": "Giving, receiving, sharing wealth.",
  "Seven of Pentacles": "Vision, perseverance, profit.",
  "Eight of Pentacles": "Apprenticeship, repetitive tasks, mastery.",
  "Nine of Pentacles": "Luxury, self-sufficiency, financial independence.",
  "Ten of Pentacles": "Wealth, legacy, long-term success.",
  "Page of Pentacles": "Manifestation, new financial opportunity.",
  "Knight of Pentacles": "Efficiency, hard work, responsibility.",
  "Queen of Pentacles": "Nurturing, practicality, providing financially.",
  "King of Pentacles": "Abundance, security, leadership.",

  "Ace of Wands": "Inspiration, new opportunities, growth.",
  "Two of Wands": "Planning, decisions, leaving comfort zone.",
  "Three of Wands": "Progress, foresight, expansion.",
  "Four of Wands": "Celebration, harmony, homecoming.",
  "Five of Wands": "Conflict, tension, competition.",
  "Six of Wands": "Victory, success, public recognition.",
  "Seven of Wands": "Challenge, competition, perseverance.",
  "Eight of Wands": "Rapid action, movement, quick decisions.",
  "Nine of Wands": "Resilience, courage, persistence.",
  "Ten of Wands": "Burden, responsibility, stress.",
  "Page of Wands": "Inspiration, discovery, free spirit.",
  "Knight of Wands": "Energy, passion, inspired action.",
  "Queen of Wands": "Confidence, independence, determination.",
  "King of Wands": "Natural leader, vision, honor.",

  "Ace of Swords": "Breakthrough, clarity, new ideas.",
  "Two of Swords": "Difficult decisions, weighing options.",
  "Three of Swords": "Heartbreak, grief, emotional pain.",
  "Four of Swords": "Rest, recovery, contemplation.",
  "Five of Swords": "Conflict, defeat, mind games.",
  "Six of Swords": "Transition, change, rite of passage.",
  "Seven of Swords": "Deception, betrayal, strategy.",
  "Eight of Swords": "Imprisonment, limitation, fear.",
  "Nine of Swords": "Anxiety, worry, nightmares.",
  "Ten of Swords": "Endings, betrayal, loss.",
  "Page of Swords": "Curiosity, restlessness, mental energy.",
  "Knight of Swords": "Ambition, action, drive.",
  "Queen of Swords": "Independence, perception, clear communication.",
  "King of Swords": "Intellectual power, authority, truth."
};

// Main function to interpret a tarot draw
function getResponseFromCards(cards) {
  let interpretation = "";

  cards.forEach((card) => {
    interpretation += tarotCardMeanings[card] + " ";
  });

  let outcome = "Yes"; // This logic can be expanded

  let response = "";
  if (outcome === "Yes") {
    response = Yes! The cards suggest a favorable outcome: ${interpretation};
  } else {
    response = No. The cards suggest obstacles: ${interpretation};
  }

  return response;
}

app.post("/reading", (req, res) => {
  const { cards } = req.body;
  if (!cards || !Array.isArray(cards)) {
    return res.status(400).json({ error: "Invalid cards array" });
  }

  const response = getResponseFromCards(cards);
  res.json({ result: response });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(Server is running on port ${PORT});
});
