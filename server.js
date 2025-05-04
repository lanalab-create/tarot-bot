// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const tarotCards = [
  { name: "The Fool", meaning: "new beginnings, spontaneity, innocence", response: "maybe" },
  { name: "The Magician", meaning: "manifestation, resourcefulness, power", response: "yes" },
  { name: "The High Priestess", meaning: "intuition, mystery, the subconscious", response: "maybe" },
  { name: "The Empress", meaning: "abundance, nurturing, fertility", response: "yes" },
  { name: "The Emperor", meaning: "authority, structure, control", response: "maybe" },
  { name: "The Hierophant", meaning: "tradition, conformity, morality", response: "maybe" },
  { name: "The Lovers", meaning: "partnership, choices, harmony", response: "yes" },
  { name: "The Chariot", meaning: "determination, victory, control", response: "yes" },
  { name: "Strength", meaning: "courage, patience, compassion", response: "yes" },
  { name: "The Hermit", meaning: "soul-searching, introspection, solitude", response: "maybe" },
  { name: "Wheel of Fortune", meaning: "fate, change, luck", response: "maybe" },
  { name: "Justice", meaning: "truth, fairness, law", response: "maybe" },
  { name: "The Hanged Man", meaning: "sacrifice, release, perspective", response: "maybe" },
  { name: "Death", meaning: "endings, transformation, transition", response: "no" },
  { name: "Temperance", meaning: "balance, moderation, purpose", response: "yes" },
  { name: "The Devil", meaning: "addiction, materialism, bondage", response: "no" },
  { name: "The Tower", meaning: "disaster, upheaval, sudden change", response: "no" },
  { name: "The Star", meaning: "hope, inspiration, renewal", response: "yes" },
  { name: "The Moon", meaning: "illusion, fear, anxiety", response: "maybe" },
  { name: "The Sun", meaning: "success, positivity, vitality", response: "yes" },
  { name: "Judgement", meaning: "rebirth, inner calling, absolution", response: "yes" },
  { name: "The World", meaning: "completion, achievement, travel", response: "yes" },
  { name: "Ace of Cups", meaning: "love, compassion, creativity", response: "yes" },
  { name: "Two of Cups", meaning: "connection, unity, attraction", response: "yes" },
  { name: "Three of Cups", meaning: "celebration, friendship, community", response: "yes" },
  { name: "Four of Cups", meaning: "apathy, contemplation, reevaluation", response: "maybe" },
  { name: "Five of Cups", meaning: "loss, grief, disappointment", response: "no" },
  { name: "Six of Cups", meaning: "nostalgia, reunion, innocence", response: "yes" },
  { name: "Seven of Cups", meaning: "choices, illusion, fantasy", response: "maybe" },
  { name: "Eight of Cups", meaning: "walking away, withdrawal, introspection", response: "maybe" },
  { name: "Nine of Cups", meaning: "contentment, satisfaction, gratitude", response: "yes" },
  { name: "Ten of Cups", meaning: "happiness, harmony, emotional fulfillment", response: "yes" },
  { name: "Page of Cups", meaning: "imagination, curiosity, sensitivity", response: "yes" },
  { name: "Knight of Cups", meaning: "romance, charm, imagination", response: "yes" },
  { name: "Queen of Cups", meaning: "compassion, calm, comfort", response: "yes" },
  { name: "King of Cups", meaning: "control, balance, generosity", response: "yes" },
  { name: "Ace of Pentacles", meaning: "opportunity, prosperity, abundance", response: "yes" },
  { name: "Two of Pentacles", meaning: "balance, adaptability, priorities", response: "maybe" },
  { name: "Three of Pentacles", meaning: "teamwork, collaboration, growth", response: "yes" },
  { name: "Four of Pentacles", meaning: "control, security, possession", response: "maybe" },
  { name: "Five of Pentacles", meaning: "poverty, hardship, isolation", response: "no" },
  { name: "Six of Pentacles", meaning: "generosity, charity, giving", response: "yes" },
  { name: "Seven of Pentacles", meaning: "patience, investment, long-term view", response: "maybe" },
  { name: "Eight of Pentacles", meaning: "apprenticeship, dedication, skill", response: "yes" },
  { name: "Nine of Pentacles", meaning: "self-sufficiency, luxury, independence", response: "yes" },
  { name: "Ten of Pentacles", meaning: "wealth, family, legacy", response: "yes" },
  { name: "Page of Pentacles", meaning: "ambition, diligence, opportunity", response: "yes" },
  { name: "Knight of Pentacles", meaning: "efficiency, responsibility, routine", response: "maybe" },
  { name: "Queen of Pentacles", meaning: "nurturing, practicality, security", response: "yes" },
  { name: "King of Pentacles", meaning: "abundance, leadership, security", response: "yes" },
  { name: "Ace of Swords", meaning: "clarity, truth, breakthrough", response: "yes" },
  { name: "Two of Swords", meaning: "indecision, choices, stalemate", response: "maybe" },
  { name: "Three of Swords", meaning: "heartbreak, sorrow, grief", response: "no" },
  { name: "Four of Swords", meaning: "rest, recovery, contemplation", response: "maybe" },
  { name: "Five of Swords", meaning: "conflict, tension, defeat", response: "no" },
  { name: "Six of Swords", meaning: "transition, change, rite of passage", response: "maybe" },
  { name: "Seven of Swords", meaning: "betrayal, deception, strategy", response: "no" },
  { name: "Eight of Swords", meaning: "restriction, limitation, fear", response: "no" },
  { name: "Nine of Swords", meaning: "anxiety, fear, nightmares", response: "no" },
  { name: "Ten of Swords", meaning: "painful endings, betrayal, loss", response: "no" },
  { name: "Page of Swords", meaning: "curiosity, communication, mental energy", response: "maybe" },
  { name: "Knight of Swords", meaning: "action, ambition, assertiveness", response: "maybe" },
  { name: "Queen of Swords", meaning: "independence, perception, fairness", response: "maybe" },
  { name: "King of Swords", meaning: "authority, intellect, truth", response: "maybe" },
  { name: "Ace of Wands", meaning: "inspiration, new opportunities, growth", response: "yes" },
  { name: "Two of Wands", meaning: "planning, progress, discovery", response: "maybe" },
  { name: "Three of Wands", meaning: "expansion, foresight, overseas travel", response: "yes" },
  { name: "Four of Wands", meaning: "celebration, harmony, home", response: "yes" },
  { name: "Five of Wands", meaning: "conflict, competition, disagreement", response: "no" },
  { name: "Six of Wands", meaning: "victory, success, recognition", response: "yes" },
  { name: "Seven of Wands", meaning: "challenge, competition, defense", response: "maybe" },
  { name: "Eight of Wands", meaning: "movement, speed, action", response: "yes" },
  { name: "Nine of Wands", meaning: "resilience, boundaries, persistence", response: "maybe" },
  { name: "Ten of Wands", meaning: "burden, responsibility, stress", response: "no" },
  { name: "Page of Wands", meaning: "exploration, excitement, freedom", response: "yes" },
  { name: "Knight of Wands", meaning: "passion, adventure, energy", response: "yes" },
  { name: "Queen of Wands", meaning: "confidence, independence, warmth", response: "yes" },
  { name: "King of Wands", meaning: "leadership, vision, boldness", response: "yes" }
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

function yesOrNoFromCards(cards) {
  const yes = cards.filter(c => c.response === "yes").length;
  const no = cards.filter(c => c.response === "no").length;
  if (yes > no) return "Yes";
  if (no > yes) return "No";
  return "Maybe";
}

function generateSpiritMessage(cards) {
  const [c1, c2, c3] = cards;
  const themes = [c1.meaning, c2.meaning, c3.meaning];
  const poeticMessage = [
    `You pulled ${c1.name}, ${c2.name}, and ${c3.name}.`,
    `A cycle is unfolding: ${themes[0]}, followed by ${themes[1]}, and finally ${themes[2]}.`,
    `Let this journey speak: from ${themes[0]} to ${themes[1]}, your spirit grows into ${themes[2]}.`,
    `Each card holds a whisper — ${c1.name} teaches you ${themes[0]}, ${c2.name} encourages ${themes[1]}, and ${c3.name} completes it with ${themes[2]}.`
  ];
  return poeticMessage[Math.floor(Math.random() * poeticMessage.length)];
}

app.get('/tarot', (req, res) => {
  const question = req.query.question || '';
  const user = req.query.user || 'friend';
  const spirit = req.query.message === 'spirit' || req.query.command === '!spirits';
  const cards = drawCards();

  if (spirit) {
    const message = generateSpiritMessage(cards);
    return res.send(`@${user} ${message}`);
  }

  const answer = yesOrNoFromCards(cards);
  const reading = `${cards[0].name} speaks of ${cards[0].meaning}, ${cards[1].name} brings ${cards[1].meaning}, and ${cards[2].name} reflects ${cards[2].meaning}.`;
  let response = `${answer}. ${reading}`;

  if (answer === "Maybe") {
    const msg = generateSpiritMessage(cards);
    response += `\n✨ ${msg}`;
  }

  res.send(response);
});

app.get('/spirits', (req, res) => {
  const user = req.query.user || 'friend';
  const cards = drawCards();
  const message = generateSpiritMessage(cards);
  res.send(`@${user} ${message}`);
});

app.listen(PORT, () => {
  console.log(`Tarot bot running on port ${PORT}`);
});
