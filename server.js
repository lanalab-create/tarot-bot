// server.js
const express = require('express');
const axios = require('axios');  // Used for making requests to the OpenAI API
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
  { name: "Two of Pentacles", meaning: "indecision, balance, adaptability, priorities", response: "maybe" },
  { name: "Three of Pentacles", meaning: "teamwork, collaboration, growth", response: "yes" },
  { name: "Four of Pentacles", meaning: "control,stagnancy, security, possession", response: "maybe" },
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
  { name: "Four of Swords", meaning: "rest, recovery, silence, contemplation", response: "maybe" },
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

// Draw 3 random cards
function drawThreeCards() {
  const shuffled = tarotCards.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3);
}

// Spirits Message with OpenAI
async function generateSpiritsMessage(cards, user) {
  const header = `@${user}\n`;

  let message = "";

  // Generate the message based on the cards
  const cardNames = cards.map(c => c.name).join(', ');
  const cardMeanings = cards.map(c => c.meaning).join(' ');

  const prompt = `
    Generate a spiritual message based on the following tarot cards:
    ${cardNames}
    Meanings: ${cardMeanings}
    Message should be tailored to the user and offer guidance based on the tarot cards.
  `;

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/completions',
      {
        model: 'text-davinci-003', // or any other model that works for your use case
        prompt: prompt,
        max_tokens: 200,
        temperature: 0.7
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
        }
      }
    );

    message = response.data.choices[0].text.trim();
  } catch (error) {
    console.error('Error generating spirits message:', error);
    message = "Something went wrong while generating the message. Please try again later.";
  }

  // Ensure the message length doesn't exceed the maximum limit
  const maxLength = 400 - header.length;
  if (message.length > maxLength) {
    message = message.slice(0, maxLength - 1).trim();
    if (message.endsWith(',')) message = message.slice(0, -1);
    message += '.';
  }

  return header + message;
}

// Tarot Yes/No Route
app.get('/tarot', (req, res) => {
  const user = req.query.user || 'Seeker';
  const cards = drawThreeCards();

  const combinedMeaning = cards.map(c => c.meaning).join(', ');
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

// Spirits Route
app.get('/spirits', async (req, res) => {
  const user = req.query.user || 'Seeker';
  const cards = drawThreeCards();
  const message = await generateSpiritsMessage(cards, user);
  res.send(message);
});

// Love Route with OpenAI Integration
async function generateLoveMessage(cards, user) {
  const header = `@${user}\n`;

  let message = "";

  // Generate the message based on the cards
  const cardNames = cards.map(c => c.name).join(', ');
  const cardMeanings = cards.map(c => c.meaning).join(' ');

  const prompt = `
    Generate a love-related message based on the following tarot cards:
    ${cardNames}
    Meanings: ${cardMeanings}
    Message should be tailored to the user and offer guidance related to love and relationships.
  `;

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/completions',
      {
        model: 'text-davinci-003', // or any other model that works for your use case
        prompt: prompt,
        max_tokens: 200,
        temperature: 0.7
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
        }
      }
    );

    message = response.data.choices[0].text.trim();
  } catch (error) {
    console.error('Error generating love message:', error);
    message = "Could not reach the spirits. Please try again.";
  }

  // Ensure the message length doesn't exceed the maximum limit
  const maxLength = 400 - header.length;
  if (message.length > maxLength) {
    message = message.slice(0, maxLength - 1).trim();
    if (message.endsWith(',')) message = message.slice(0, -1);
    message += '.';
  }

  return header + message;
}

app.get('/love', async (req, res) => {
  const user = req.query.user || 'Seeker';
  const cards = drawThreeCards();
  const message = await generateLoveMessage(cards, user);
  res.send(message);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
