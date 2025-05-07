// server.js
const express = require('express');
const app = express();
const loveTarotCards = require('./loveTarotCards');
const PORT = process.env.PORT || 3000;

const tarotCards = [
  {
    name: "The Fool",
    keywords: "beginnings, innocence, spontaneity",
    sentence: "You're on the verge of something new, filled with possibility.",
    response: "yes"
  },
  {
    name: "The Magician",
    keywords: "manifestation, resourcefulness, power",
    sentence: "You have all the tools you need to bring your vision to life.",
    response: "yes"
  },
  {
    name: "The High Priestess",
    keywords: "intuition, secrets, mystery",
    sentence: "Your inner voice holds the truth you're seeking.",
    response: "maybe"
  },
  {
    name: "The Empress",
    keywords: "abundance, nurturing, fertility",
    sentence: "Love, beauty, and growth surround you now.",
    response: "yes"
  },
  {
    name: "The Emperor",
    keywords: "authority, structure, stability",
    sentence: "Take control and stand firm in your power.",
    response: "yes"
  },
  {
    name: "The Hierophant",
    keywords: "tradition, spiritual wisdom, conformity",
    sentence: "You are being guided by higher knowledge or tradition.",
    response: "maybe"
  },
  {
    name: "The Lovers",
    keywords: "love, union, choices",
    sentence: "A meaningful connection or important choice lies ahead.",
    response: "yes"
  },
  {
    name: "The Chariot",
    keywords: "willpower, victory, determination",
    sentence: "Your determination is moving you quickly toward success.",
    response: "yes"
  },
  {
    name: "Strength",
    keywords: "courage, patience, control",
    sentence: "You are stronger and more resilient than you realize.",
    response: "yes"
  },
  {
    name: "The Hermit",
    keywords: "soul-searching, solitude, inner guidance",
    sentence: "Solitude is helping you hear your inner truth.",
    response: "maybe"
  },
  {
    name: "Wheel of Fortune",
    keywords: "fate, luck, cycles",
    sentence: "Change is in motion — trust the turning of the wheel.",
    response: "yes"
  },
  {
    name: "Justice",
    keywords: "truth, fairness, law",
    sentence: "Balance and accountability are being restored.",
    response: "maybe"
  },
  {
    name: "The Hanged Man",
    keywords: "sacrifice, release, new perspective",
    sentence: "Letting go will reveal the insight you’ve been waiting for.",
    response: "maybe"
  },
  {
    name: "Death",
    keywords: "endings, transformation, transition",
    sentence: "Something is ending so something new can begin.",
    response: "no"
  },
  {
    name: "Temperance",
    keywords: "balance, moderation, harmony",
    sentence: "Peace comes from choosing the middle path.",
    response: "yes"
  },
  {
    name: "The Devil",
    keywords: "addiction, materialism, bondage",
    sentence: "Be careful of what is keeping you trapped or tempted.",
    response: "no"
  },
  {
    name: "The Tower",
    keywords: "sudden change, upheaval, chaos",
    sentence: "A shake-up is clearing the way for something better.",
    response: "no"
  },
  {
    name: "The Star",
    keywords: "hope, inspiration, renewal",
    sentence: "You are being guided by hope and healing energy.",
    response: "yes"
  },
  {
    name: "The Moon",
    keywords: "illusion, fear, subconscious",
    sentence: "Not everything is clear — trust your instincts.",
    response: "maybe"
  },
  {
    name: "The Sun",
    keywords: "joy, success, vitality",
    sentence: "Happiness and clarity are shining down on you.",
    response: "yes"
  },
  {
    name: "Judgement",
    keywords: "rebirth, awakening, reckoning",
    sentence: "It’s time to rise and answer your true calling.",
    response: "yes"
  },
  {
    name: "The World",
    keywords: "completion, wholeness, accomplishment",
    sentence: "You’ve reached a fulfilling milestone in your journey.",
    response: "yes"
  },
  {
    name: "Ace of Cups",
    keywords: "new love, compassion, creativity",
    sentence: "A fresh emotional experience is ready to blossom.",
    response: "yes"
  },
  {
    name: "Two of Cups",
    keywords: "partnership, connection, unity",
    sentence: "A soul connection is coming into focus now.",
    response: "yes"
  },
  {
    name: "Three of Cups",
    keywords: "celebration, friendship, joy",
    sentence: "A time to celebrate and share joy with those you love.",
    response: "yes"
  },
  {
    name: "Four of Cups",
    keywords: "boredom, contemplation, apathy",
    sentence: "You're focusing on what you lack rather than what's available.",
    response: "maybe"
  },
  {
    name: "Five of Cups",
    keywords: "regret, disappointment, loss",
    sentence: "You're grieving past losses, but remember that not all is lost.",
    response: "no"
  },
  {
    name: "Six of Cups",
    keywords: "nostalgia, past, innocence",
    sentence: "Memories from the past are surfacing, bringing joy or healing.",
    response: "maybe"
  },
  {
    name: "Seven of Cups",
    keywords: "choices, illusion, fantasy",
    sentence: "Many options are available, but not all of them are real or right.",
    response: "maybe"
  },
  {
    name: "Eight of Cups",
    keywords: "moving on, walking away, searching",
    sentence: "You're leaving behind something that no longer serves your growth.",
    response: "no"
  },
  {
    name: "Nine of Cups",
    keywords: "satisfaction, fulfillment, contentment",
    sentence: "You're nearing a point of emotional contentment and success.",
    response: "yes"
  },
  {
    name: "Ten of Cups",
    keywords: "harmony, family, happiness",
    sentence: "You’re experiencing deep emotional fulfillment and happiness.",
    response: "yes"
  },
  {
    name: "Page of Cups",
    keywords: "intuition, creativity, messages",
    sentence: "A message of love or creative inspiration is arriving soon.",
    response: "yes"
  },
  {
    name: "Knight of Cups",
    keywords: "romance, idealism, charm",
    sentence: "A romantic proposal or a pursuit of your dreams is on the horizon.",
    response: "yes"
  },
  {
    name: "Queen of Cups",
    keywords: "compassion, emotional balance, intuition",
    sentence: "You’re nurturing yourself and others with compassion and wisdom.",
    response: "yes"
  },
  {
    name: "King of Cups",
    keywords: "emotional maturity, stability, wisdom",
    sentence: "You have mastered your emotions and now offer wisdom to others.",
    response: "yes"
  },
  {
    name: "Ace of Swords",
    keywords: "clarity, truth, breakthrough",
    sentence: "A moment of clarity and truth will open the way forward.",
    response: "yes"
  },
  {
    name: "Two of Swords",
    keywords: "indecision, choice, stalemate",
    sentence: "A decision is needed, but the choice is not clear yet.",
    response: "maybe"
  },
  {
    name: "Three of Swords",
    keywords: "heartbreak, sorrow, betrayal",
    sentence: "A painful heartbreak or emotional wound is in focus right now.",
    response: "no"
  },
  {
    name: "Four of Swords",
    keywords: "rest, recuperation, retreat",
    sentence: "A time of rest is needed to heal and restore your strength.",
    response: "maybe"
  },
  {
    name: "Five of Swords",
    keywords: "conflict, defeat, betrayal",
    sentence: "You may be facing conflict, but victory will come at a cost.",
    response: "no"
  },
  {
    name: "Six of Swords",
    keywords: "transition, moving on, healing",
    sentence: "You’re transitioning toward a calmer, more peaceful future.",
    response: "yes"
  },
  {
    name: "Seven of Swords",
    keywords: "deception, strategy, stealth",
    sentence: "Beware of deceit or a need to act with caution and strategy.",
    response: "no"
  },
  {
    name: "Eight of Swords",
    keywords: "restriction, isolation, limitation",
    sentence: "You're feeling trapped, but there is always a way out.",
    response: "maybe"
  },
  {
    name: "Nine of Swords",
    keywords: "anxiety, fear, nightmares",
    sentence: "Anxiety or fears are weighing on you more than they should.",
    response: "no"
  },
  {
    name: "Ten of Swords",
    keywords: "painful endings, betrayal, loss",
    sentence: "A painful cycle has come to an end, bringing a difficult but necessary closure.",
    response: "no"
  },
  {
    name: "Page of Swords",
    keywords: "curiosity, intelligence, observation",
    sentence: "A new idea or curiosity is sparking your interest, requiring attention.",
    response: "yes"
  },
  {
    name: "Knight of Swords",
    keywords: "action, haste, determination",
    sentence: "A quick decision or action is necessary now, but caution is key.",
    response: "maybe"
  },
  {
    name: "Queen of Swords",
    keywords: "clarity, truth, intellect",
    sentence: "Your mind is sharp, and clarity will guide you through.",
    response: "yes"
  },
  {
    name: "King of Swords",
    keywords: "authority, intellect, truth",
    sentence: "You possess great wisdom and intellectual authority in the current situation.",
    response: "yes"
  },
  {
    name: "Ace of Pentacles",
    keywords: "prosperity, new beginnings, opportunity",
    sentence: "A new financial or material opportunity is opening up for you.",
    response: "yes"
  },
  {
    name: "Two of Pentacles",
    keywords: "balance, adaptability, juggling",
    sentence: "You are managing multiple priorities, but balance is essential.",
    response: "maybe"
  },
  {
    name: "Three of Pentacles",
    keywords: "teamwork, collaboration, skill",
    sentence: "Collaboration and teamwork will lead to the success you seek.",
    response: "yes"
  },
  {
  name: "Four of Pentacles",
  keywords: "security, control, holding on",
  sentence: "You're clinging to stability, but true security comes from trust.",
  response: "maybe"
},

  {
    name: "Five of Pentacles",
    keywords: "loss, hardship, struggle",
    sentence: "Financial or emotional hardship is a concern, but help is available.",
    response: "no"
  },
  {
    name: "Six of Pentacles",
    keywords: "generosity, balance, charity",
    sentence: "A time to give and receive, ensuring fairness and balance in your relationships.",
    response: "yes"
  },
  {
    name: "Seven of Pentacles",
    keywords: "patience, evaluation, growth",
    sentence: "You're assessing the progress of your efforts and deciding what to do next.",
    response: "maybe"
  },
  {
    name: "Eight of Pentacles",
    keywords: "focus, craftsmanship, diligence",
    sentence: "Your hard work and attention to detail will pay off soon.",
    response: "yes"
  },
  {
    name: "Nine of Pentacles",
    keywords: "self-sufficiency, luxury, independence",
    sentence: "You're enjoying the fruits of your labor, feeling independent and successful.",
    response: "yes"
  },
  {
    name: "Ten of Pentacles",
    keywords: "legacy, wealth, family",
    sentence: "A time of stability and abundance for your family and future generations.",
    response: "yes"
  },
  {
    name: "Page of Pentacles",
    keywords: "ambition, study, manifestation",
    sentence: "A new opportunity to learn or grow is about to present itself.",
    response: "yes"
  },
  {
    name: "Knight of Pentacles",
    keywords: "hard work, dedication, responsibility",
    sentence: "Steady progress and diligence will lead to eventual success.",
    response: "yes"
  },
  {
    name: "Queen of Pentacles",
    keywords: "nurturing, practicality, abundance",
    sentence: "You're creating a stable and nurturing environment for yourself and others.",
    response: "yes"
  },
  {
    name: "King of Pentacles",
    keywords: "wealth, stability, success",
    sentence: "You are mastering the material world, achieving success and security.",
    response: "yes"
  },
  {
    name: "Ace of Wands",
    keywords: "inspiration, new beginnings, creativity",
    sentence: "A burst of energy is sparking a new creative venture.",
    response: "yes"
  },
  {
    name: "Two of Wands",
    keywords: "planning, future vision, decisions",
    sentence: "A decision is required to move forward toward your goals.",
    response: "maybe"
  },
  {
    name: "Three of Wands",
    keywords: "expansion, progress, foresight",
    sentence: "Your efforts are starting to pay off — progress is on the way.",
    response: "yes"
  },
  {
    name: "Four of Wands",
    keywords: "celebration, stability, harmony",
    sentence: "A period of celebration and stable foundations is near.",
    response: "yes"
  },
  {
    name: "Five of Wands",
    keywords: "competition, conflict, challenge",
    sentence: "Challenges may arise, but they will lead to growth and learning.",
    response: "no"
  },
  {
    name: "Six of Wands",
    keywords: "victory, recognition, success",
    sentence: "Victory and public recognition are on the horizon for you.",
    response: "yes"
  },
  {
    name: "Seven of Wands",
    keywords: "defense, perseverance, competition",
    sentence: "Stay strong and defend your position with courage and resilience.",
    response: "maybe"
  },
  {
    name: "Eight of Wands",
    keywords: "swift movement, progress, rapid action",
    sentence: "Things are moving fast — be ready for quick changes and action.",
    response: "yes"
  },
  {
    name: "Nine of Wands",
    keywords: "resilience, perseverance, guarding against adversity",
    sentence: "You are standing strong after adversity, but stay cautious.",
    response: "maybe"
  },
  {
    name: "Ten of Wands",
    keywords: "burden, responsibility, overwhelm",
    sentence: "You may be carrying too much — it's time to lighten your load.",
    response: "no"
  },
  {
    name: "Page of Wands",
    keywords: "exploration, enthusiasm, creativity",
    sentence: "An exciting new opportunity is on the horizon, full of potential.",
    response: "yes"
  },
  {
    name: "Knight of Wands",
    keywords: "adventure, action, passion",
    sentence: "Prepare for a burst of energetic action and passionate pursuits.",
    response: "yes"
  },
  {
    name: "Queen of Wands",
    keywords: "confidence, independence, creativity",
    sentence: "Your energy and confidence will inspire others around you.",
    response: "yes"
  },
  {
    name: "King of Wands",
    keywords: "leadership, vision, entrepreneurship",
    sentence: "Take charge and lead with your vision and determination.",
    response: "yes"
  }
];

module.exports = tarotCards;



// Draw 3 random cards
function drawThreeCards() {
  const shuffled = tarotCards.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3);
}

function generateSpiritsMessage(cards, user) {
  const header = `@${user}\n`;

  const combos = [
    {
      cards: ["The Fool", "The Star", "The Empress"],
      message: "You're being called to step forward with hope, trust, and confidence. Embrace the possibilities that the universe is offering you. Let the nurturing energy of The Empress guide you in nurturing your own dreams. It's time to take the first step towards manifesting your deepest desires."
    },
    {
      cards: ["The Lovers", "The Moon", "Strength"],
      message: "Right now, you're facing decisions of the heart, and there may be moments of confusion. The Moon brings uncertainty, but Strength offers you the inner courage to confront these shadows. Trust your intuition and have faith in your ability to overcome doubts. Your heart knows the way."
    },
    {
      cards: ["The Magician", "The Tower", "The Hierophant"],
      message: "Change is upon you, but it’s not something to fear. The Tower may bring disruption, but The Magician reminds you that you have the power to rebuild. With the guidance of The Hierophant, this could be a time of spiritual awakening or deeper understanding of your path. Trust the process of transformation."
    },
    {
      cards: ["The Hermit", "The High Priestess", "The Wheel of Fortune"],
      message: "A time of introspection and spiritual growth is upon you. The Hermit calls for you to retreat within, while The High Priestess guides you to trust your intuition and uncover hidden truths. The Wheel of Fortune signals that change is on the horizon—embrace it with openness and wisdom."
    }
  ];

  // Try matching specific combos
  let message = "";
  for (const combo of combos) {
    if (combo.cards.every(name => cards.some(card => card.name === name))) {
      message = combo.message;
      break;
    }
  }

  // Default message
  if (!message) {
    const interpretation = `${cards[0].sentence}. ${cards[1].sentence.toLowerCase()}. ${cards[2].sentence.toLowerCase()}.`;
    message = interpretation.charAt(0).toUpperCase() + interpretation.slice(1);
  }

  // Limit message length (400 chars max including @user)
  const maxLength = 400 - header.length;
  if (message.length > maxLength) {
    const cutPoint = message.lastIndexOf('.', maxLength);
    if (cutPoint !== -1) {
      message = message.slice(0, cutPoint + 1);
    } else {
      const fallbackCut = message.lastIndexOf(' ', maxLength);
      message = message.slice(0, fallbackCut !== -1 ? fallbackCut : maxLength).trim() + '.';
    }
  }

  return header + message;
}


function generateLoveReading(user) {
  const shuffled = loveTarotCards.sort(() => 0.5 - Math.random());
  const cards = shuffled.slice(0, 3);
  const loveLines = cards.map(card => card.sentence);

  // Create a 3-line romantic message
  const message = `@${user}\n${loveLines[0]} ${loveLines[1]} ${loveLines[2]}`;

  // Trim to 400 characters max
  return message.length > 400 ? message.slice(0, 397) + '...' : message;
}


// Tarot Yes/No Route
app.get('/tarot', (req, res) => {
  const user = req.query.user || 'Seeker';
  const cards = drawThreeCards();

  const combinedMeaning = cards.map(c => c.keywords).join(', ');
  const yesCount = cards.filter(c => c.response === 'yes').length;
  const noCount = cards.filter(c => c.response === 'no').length;

  let result;
  if (yesCount >= 2) {
    result = "Yes";
  } else if (noCount >= 2) {
    result = "No";
  } else {
    result = "Maybe";
  }

  res.send(`@${user}\n${result} — ${cards.map(c => c.name).join(', ')}.\n${combinedMeaning}`);
});

app.get('/spirits', (req, res) => {
  const user = req.query.user || 'Seeker';
  try {
    const cards = drawThreeCards();
    if (!cards || cards.length !== 3) {
      throw new Error("Could not reach the spirits. Please try again.");
    }
    const message = generateSpiritsMessage(cards, user);
    res.send(message);
  } catch (error) {
    res.status(500).send("Something went wrong: " + error.message);
  }
});


app.get('/love', (req, res) => {
  const user = req.query.user || 'Seeker';
  const message = generateLoveReading(user);
  res.send(message);
});





app.listen(PORT, () => {
  console.log(`Tarot API running on port ${PORT}`);
});
