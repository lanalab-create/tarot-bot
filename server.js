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

function isYes(card) {
  const yesCards = ["The Sun", "The World", "The Star", "The Empress", "The Lovers", "Ace of Cups", "Ten of Cups", "Six of Wands", "Nine of Cups", "Judgement"];
  return yesCards.includes(card.name);
}

function isNo(card) {
  const noCards = ["The Tower", "The Devil", "Ten of Swords", "Three of Swords", "Five of Pentacles", "Eight of Swords", "Nine of Swords", "Death"];
  return noCards.includes(card.name);
}

function yesOrNoFromCards(cards) {
  const yes = cards.filter(isYes).length;
  const no = cards.filter(isNo).length;
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

  const randomIndex = Math.floor(Math.random() * poeticMessage.length);
  return poeticMessage[randomIndex];
}

app.get('/tarot', (req, res) => {
  const question = req.query.question || '';
  const user = req.query.user || 'friend';
  const spirit = req.query.message === 'spirit' || req.query.command === '!spirits';

  if (spirit) {
    const cards = drawCards();
    const message = generateSpiritMessage(cards);
    res.send(`@${user} ${message}`);
  } else {
    const cards = drawCards();
    const answer = yesOrNoFromCards(cards);

    let reading = `${cards[0].name} speaks of ${cards[0].meaning}, ${cards[1].name} brings ${cards[1].meaning}, and ${cards[2].name} reflects ${cards[2].meaning}.`;
    let response = `${answer}. ${reading}`;

    if (answer === "Maybe") {
      const msg = generateSpiritMessage(cards);
      response += `\n✨ ${msg}`;
    }

    res.send(response);
  }
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
