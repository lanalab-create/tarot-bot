const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

const tarotCards = [
  { name: "The Fool", meaning: "new beginnings, spontaneity, and adventures" },
  { name: "The Magician", meaning: "skill, resourcefulness, and power" },
  { name: "The High Priestess", meaning: "intuition, secrets, and the subconscious mind" },
  { name: "The Empress", meaning: "fertility, nurturing, and abundance" },
  { name: "The Emperor", meaning: "authority, structure, and control" },
  { name: "The Hierophant", meaning: "tradition, conformity, and spiritual wisdom" },
  { name: "The Lovers", meaning: "love, harmony, and choices" },
  { name: "The Chariot", meaning: "determination, victory, and control" },
  { name: "Strength", meaning: "courage, patience, and inner strength" },
  { name: "The Hermit", meaning: "soul-searching, solitude, and guidance" },
  { name: "Wheel of Fortune", meaning: "change, destiny, and cycles" },
  { name: "Justice", meaning: "truth, fairness, and law" },
  { name: "The Hanged Man", meaning: "pause, surrender, and new perspectives" },
  { name: "Death", meaning: "endings, transformation, and transition" },
  { name: "Temperance", meaning: "balance, moderation, and purpose" },
  { name: "The Devil", meaning: "addiction, materialism, and bondage" },
  { name: "The Tower", meaning: "sudden upheaval, chaos, and revelation" },
  { name: "The Star", meaning: "hope, inspiration, and serenity" },
  { name: "The Moon", meaning: "illusion, fear, and intuition" },
  { name: "The Sun", meaning: "joy, success, and vitality" },
  { name: "Judgement", meaning: "rebirth, inner calling, and absolution" },
  { name: "The World", meaning: "completion, achievement, and travel" },
  { name: "Ace of Cups", meaning: "new feelings, love, and intuition" },
  { name: "Two of Cups", meaning: "partnership, attraction, and unity" },
  { name: "Three of Cups", meaning: "celebration, friendship, and community" },
  { name: "Four of Cups", meaning: "contemplation, apathy, and reevaluation" },
  { name: "Five of Cups", meaning: "loss, grief, and disappointment" },
  { name: "Six of Cups", meaning: "nostalgia, memories, and childhood" },
  { name: "Seven of Cups", meaning: "choices, illusion, and wishful thinking" },
  { name: "Eight of Cups", meaning: "walking away, withdrawal, and introspection" },
  { name: "Nine of Cups", meaning: "contentment, satisfaction, and wishes" },
  { name: "Ten of Cups", meaning: "harmony, marriage, and happiness" },
  { name: "Page of Cups", meaning: "creative opportunities, curiosity, and messages" },
  { name: "Knight of Cups", meaning: "romance, charm, and imagination" },
  { name: "Queen of Cups", meaning: "compassion, calm, and comfort" },
  { name: "King of Cups", meaning: "emotional balance, diplomacy, and generosity" },
  { name: "Ace of Pentacles", meaning: "prosperity, opportunity, and manifestation" },
  { name: "Two of Pentacles", meaning: "balance, adaptability, and time management" },
  { name: "Three of Pentacles", meaning: "teamwork, learning, and collaboration" },
  { name: "Four of Pentacles", meaning: "control, security, and materialism" },
  { name: "Five of Pentacles", meaning: "poverty, insecurity, and hardship" },
  { name: "Six of Pentacles", meaning: "generosity, charity, and sharing" },
  { name: "Seven of Pentacles", meaning: "patience, investment, and growth" },
  { name: "Eight of Pentacles", meaning: "skill, development, and hard work" },
  { name: "Nine of Pentacles", meaning: "abundance, luxury, and self-sufficiency" },
  { name: "Ten of Pentacles", meaning: "legacy, inheritance, and family" },
  { name: "Page of Pentacles", meaning: "ambition, diligence, and new ventures" },
  { name: "Knight of Pentacles", meaning: "efficiency, routine, and responsibility" },
  { name: "Queen of Pentacles", meaning: "nurturing, practicality, and security" },
  { name: "King of Pentacles", meaning: "wealth, discipline, and leadership" },
  { name: "Ace of Swords", meaning: "clarity, truth, and breakthroughs" },
  { name: "Two of Swords", meaning: "indecision, choices, and blocked emotions" },
  { name: "Three of Swords", meaning: "heartbreak, sorrow, and grief" },
  { name: "Four of Swords", meaning: "rest, recovery, and contemplation" },
  { name: "Five of Swords", meaning: "conflict, betrayal, and loss" },
  { name: "Six of Swords", meaning: "transition, moving on, and healing" },
  { name: "Seven of Swords", meaning: "deception, strategy, and stealth" },
  { name: "Eight of Swords", meaning: "restriction, fear, and helplessness" },
  { name: "Nine of Swords", meaning: "anxiety, nightmares, and worry" },
  { name: "Ten of Swords", meaning: "betrayal, endings, and rock bottom" },
  { name: "Page of Swords", meaning: "curiosity, vigilance, and communication" },
  { name: "Knight of Swords", meaning: "action, speed, and ambition" },
  { name: "Queen of Swords", meaning: "perception, independence, and honesty" },
  { name: "King of Swords", meaning: "intellect, authority, and clarity" },
  { name: "Ace of Wands", meaning: "inspiration, growth, and potential" },
  { name: "Two of Wands", meaning: "planning, decisions, and progress" },
  { name: "Three of Wands", meaning: "expansion, foresight, and confidence" },
  { name: "Four of Wands", meaning: "celebration, home, and community" },
  { name: "Five of Wands", meaning: "competition, conflict, and tension" },
  { name: "Six of Wands", meaning: "victory, recognition, and success" },
  { name: "Seven of Wands", meaning: "defense, courage, and persistence" },
  { name: "Eight of Wands", meaning: "speed, momentum, and communication" },
  { name: "Nine of Wands", meaning: "resilience, fatigue, and determination" },
  { name: "Ten of Wands", meaning: "burden, responsibility, and stress" },
  { name: "Page of Wands", meaning: "enthusiasm, discovery, and exploration" },
  { name: "Knight of Wands", meaning: "passion, adventure, and impulsiveness" },
  { name: "Queen of Wands", meaning: "confidence, independence, and warmth" },
  { name: "King of Wands", meaning: "leadership, vision, and honor" }
];

function drawCards(n = 3) {
  const deck = [...tarotCards];
  const selected = [];
  for (let i = 0; i < n; i++) {
    const index = Math.floor(Math.random() * deck.length);
    selected.push(deck.splice(index, 1)[0]);
  }
  return selected;
}

function yesOrNo() {
  const responses = ["Yes", "No", "Maybe"];
  return responses[Math.floor(Math.random() * responses.length)];
}

app.get('/tarot', (req, res) => {
  const question = req.query.question || '';
  const wantSpirit = req.query.message === 'spirit';

  const cards = drawCards();
  const answer = yesOrNo();

  let responseText = `${answer}, ${cards[0].name} is about ${cards[0].meaning}. ${cards[1].name} is about ${cards[1].meaning}. ${cards[2].name} is about ${cards[2].meaning}.`;

  if (wantSpirit || answer === 'Maybe') {
    const spiritMessages = [
      "Trust your intuition.",
      "Let go of what no longer serves you.",
      "Change is coming, embrace it.",
      "Focus on what truly matters.",
      "This is a time for healing and clarity.",
      "Spirit encourages you to be patient.",
      "Look inward for the answer you seek.",
      "The universe is guiding you forward."
    ];
    const message = spiritMessages[Math.floor(Math.random() * spiritMessages.length)];
    responseText += ` Spirits' Message: ${message}`;
  }

  res.send(responseText);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
