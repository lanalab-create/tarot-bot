// Tarot card meanings
const tarotCardMeanings = {
  "The Fool": "The Fool represents new beginnings, innocence, and adventure.",
  "The Magician": "The Magician is about action, willpower, and the ability to manifest one's desires.",
  "The High Priestess": "The High Priestess symbolizes intuition, secrets, and spiritual wisdom.",
  "The Empress": "The Empress signifies fertility, creativity, and nurturing energy.",
  "The Emperor": "The Emperor represents structure, authority, and leadership.",
  "The Hierophant": "The Hierophant symbolizes tradition, spirituality, and guidance from higher sources.",
  "The Lovers": "The Lovers is about relationships, love, and choices in partnerships.",
  "The Chariot": "The Chariot symbolizes determination, willpower, and victory over obstacles.",
  "Strength": "Strength represents inner strength, courage, and resilience.",
  "The Hermit": "The Hermit signifies introspection, solitude, and seeking inner truth.",
  "Wheel of Fortune": "The Wheel of Fortune indicates cycles, luck, and destiny.",
  "Justice": "Justice represents fairness, truth, and legal matters.",
  "The Hanged Man": "The Hanged Man symbolizes suspension, letting go, and seeing things from a new perspective.",
  "Death": "Death signifies transformation, endings, and new beginnings.",
  "Temperance": "Temperance represents balance, moderation, and harmony.",
  "The Devil": "The Devil symbolizes temptation, addiction, and being trapped in unhealthy patterns.",
  "The Tower": "The Tower indicates sudden change, destruction, and the breaking down of old structures.",
  "The Star": "The Star represents hope, inspiration, and healing.",
  "The Moon": "The Moon symbolizes illusions, intuition, and the subconscious mind.",
  "The Sun": "The Sun represents positivity, joy, and success.",
  "Judgment": "Judgment signifies awakening, renewal, and the calling of your higher self.",
  "The World": "The World represents completion, wholeness, and achievement.",
  "Ace of Wands": "The Ace of Wands symbolizes new opportunities, inspiration, and creative energy.",
  "Two of Wands": "The Two of Wands represents planning, future vision, and taking the first steps.",
  "Three of Wands": "The Three of Wands signifies expansion, growth, and looking towards the horizon.",
  "Four of Wands": "The Four of Wands signifies celebration, harmony, and successful completion.",
  "Five of Wands": "The Five of Wands symbolizes conflict, competition, and challenges.",
  "Six of Wands": "The Six of Wands represents victory, success, and public recognition.",
  "Seven of Wands": "The Seven of Wands signifies standing your ground, defense, and overcoming challenges.",
  "Eight of Wands": "The Eight of Wands symbolizes rapid progress, swift movement, and communication.",
  "Nine of Wands": "The Nine of Wands represents perseverance, endurance, and guarding against challenges.",
  "Ten of Wands": "The Ten of Wands signifies burdens, responsibility, and the weight of obligations.",
  "Page of Wands": "The Page of Wands represents enthusiasm, exploration, and creative opportunities.",
  "Knight of Wands": "The Knight of Wands symbolizes action, passion, and pursuing goals with energy.",
  "Queen of Wands": "The Queen of Wands represents confidence, creativity, and nurturing energy.",
  "King of Wands": "The King of Wands signifies leadership, vision, and entrepreneurship.",
  "Ace of Cups": "The Ace of Cups symbolizes new emotional beginnings, love, and spiritual connection.",
  "Two of Cups": "The Two of Cups represents partnership, union, and mutual attraction.",
  "Three of Cups": "The Three of Cups signifies celebration, friendship, and social gatherings.",
  "Four of Cups": "The Four of Cups symbolizes contemplation, apathy, and reevaluating emotional connections.",
  "Five of Cups": "The Five of Cups represents loss, regret, and focusing on what’s gone instead of what remains.",
  "Six of Cups": "The Six of Cups signifies nostalgia, childhood memories, and reconnection with the past.",
  "Seven of Cups": "The Seven of Cups represents illusions, daydreams, and the need for clarity.",
  "Eight of Cups": "The Eight of Cups signifies emotional withdrawal, leaving something behind for growth.",
  "Nine of Cups": "The Nine of Cups represents emotional contentment, satisfaction, and fulfillment.",
  "Ten of Cups": "The Ten of Cups symbolizes happiness, family, and emotional harmony.",
  "Page of Cups": "The Page of Cups represents emotional exploration, intuition, and creativity.",
  "Knight of Cups": "The Knight of Cups symbolizes romance, idealism, and following one’s heart.",
  "Queen of Cups": "The Queen of Cups signifies emotional maturity, compassion, and nurturing energy.",
  "King of Cups": "The King of Cups represents emotional control, wisdom, and diplomacy.",
  "Ace of Swords": "The Ace of Swords symbolizes mental clarity, truth, and new ideas.",
  "Two of Swords": "The Two of Swords represents indecision, blocked emotions, and facing difficult choices.",
  "Three of Swords": "The Three of Swords signifies heartbreak, betrayal, and emotional pain.",
  "Four of Swords": "The Four of Swords represents rest, recuperation, and mental clarity after hardship.",
  "Five of Swords": "The Five of Swords symbolizes conflict, tension, and the need for resolution.",
  "Six of Swords": "The Six of Swords represents transition, moving forward, and finding peace.",
  "Seven of Swords": "The Seven of Swords signifies deception, theft, and the need for honesty.",
  "Eight of Swords": "The Eight of Swords symbolizes restriction, fear, and feeling trapped by circumstances.",
  "Nine of Swords": "The Nine of Swords represents anxiety, fear, and sleepless nights.",
  "Ten of Swords": "The Ten of Swords symbolizes painful endings, betrayal, and the worst being over.",
  "Page of Swords": "The Page of Swords represents curiosity, communication, and gathering information.",
  "Knight of Swords": "The Knight of Swords symbolizes action, determination, and fast-moving energy.",
  "Queen of Swords": "The Queen of Swords represents intellect, independence, and clear communication.",
  "King of Swords": "The King of Swords symbolizes authority, truth, and analytical thinking.",
  "Ace of Pentacles": "The Ace of Pentacles symbolizes new financial opportunities, prosperity, and growth.",
  "Two of Pentacles": "The Two of Pentacles represents balance, juggling multiple tasks, and adaptability.",
  "Three of Pentacles": "The Three of Pentacles signifies teamwork, collaboration, and skill-building.",
  "Four of Pentacles": "The Four of Pentacles represents security, stability, and holding on tightly.",
  "Five of Pentacles": "The Five of Pentacles symbolizes financial loss, hardship, and feeling left out.",
  "Six of Pentacles": "The Six of Pentacles represents generosity, balance, and giving/receiving.",
  "Seven of Pentacles": "The Seven of Pentacles signifies patience, evaluation, and long-term planning.",
  "Eight of Pentacles": "The Eight of Pentacles represents hard work, dedication, and honing skills.",
  "Nine of Pentacles": "The Nine of Pentacles symbolizes self-sufficiency, luxury, and financial stability.",
  "Ten of Pentacles": "The Ten of Pentacles signifies family wealth, legacy, and long-term prosperity.",
  "Page of Pentacles": "The Page of Pentacles represents new opportunities, learning, and practical efforts.",
  "Knight of Pentacles": "The Knight of Pentacles symbolizes responsibility, hard work, and steady progress.",
  "Queen of Pentacles": "The Queen of Pentacles represents nurturing, home, and financial stability.",
  "King of Pentacles": "The King of Pentacles symbolizes wealth, abundance, and successful leadership."
};

// Function to interpret the cards pulled
function getResponseFromCards(cards) {
  let interpretation = "";

  // Loop through each card and get the interpretation
  cards.forEach((card) => {
    interpretation += tarotCardMeanings[card] + " ";
  });

  // Example logic for Yes/No outcome based on the cards pulled
  let outcome = "Yes"; // Default outcome (modify as needed)
  
  // Simple check (you can improve this logic)
  if (cards.includes("The Devil") || cards.includes("The Tower")) {
    outcome = "No";  // If cards like 'The Devil' or 'The Tower' are drawn, outcome can be "No"
  }

  // Create response
  let response = ${outcome}. The cards suggest: ${interpretation};

  return response;
}

// Example cards drawn
const cards = ["The Magician", "The Lovers", "The Sun"];

// Get the response
const finalResponse = getResponseFromCards(cards);

console.log(finalResponse);
