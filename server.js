const tarotCardMeanings = {
  "The Fool": "The Fool represents new beginnings, spontaneity, and a free spirit.",
  "The Magician": "The Magician is about action, willpower, and the ability to manifest one's desires.",
  "The High Priestess": "The High Priestess symbolizes intuition, hidden knowledge, and spiritual insight.",
  "The Empress": "The Empress signifies fertility, nurturing, and abundance.",
  "The Emperor": "The Emperor represents authority, structure, and control.",
  "The Hierophant": "The Hierophant is about tradition, spiritual guidance, and conformity.",
  "The Lovers": "The Lovers card signifies deep connection, love, and important decisions.",
  "The Chariot": "The Chariot symbolizes determination, willpower, and victory over obstacles.",
  "Strength": "Strength represents inner courage, patience, and resilience.",
  "The Hermit": "The Hermit is about introspection, solitude, and seeking inner wisdom.",
  "Wheel of Fortune": "The Wheel of Fortune represents fate, cycles, and turning points.",
  "Justice": "Justice signifies fairness, truth, and the law of cause and effect.",
  "The Hanged Man": "The Hanged Man symbolizes surrender, new perspectives, and letting go.",
  "Death": "Death signifies transformation, endings, and the start of something new.",
  "Temperance": "Temperance represents balance, moderation, and harmony.",
  "The Devil": "The Devil indicates temptation, materialism, and unhealthy attachments.",
  "The Tower": "The Tower symbolizes sudden change, chaos, and revelation.",
  "The Star": "The Star represents hope, inspiration, and spiritual guidance.",
  "The Moon": "The Moon speaks of illusion, intuition, and the unconscious.",
  "The Sun": "The Sun symbolizes joy, success, and vitality.",
  "Judgement": "Judgement is about rebirth, evaluation, and higher calling.",
  "The World": "The World represents completion, achievement, and wholeness.",
  "Ace of Wands": "The Ace of Wands brings inspiration, new projects, and creative energy.",
  "Two of Wands": "The Two of Wands represents planning, choices, and future vision.",
  "Three of Wands": "The Three of Wands signifies progress, expansion, and foresight.",
  "Four of Wands": "The Four of Wands is about celebration, homecoming, and harmony.",
  "Five of Wands": "The Five of Wands suggests conflict, competition, or tension.",
  "Six of Wands": "The Six of Wands signifies victory, recognition, and pride.",
  "Seven of Wands": "The Seven of Wands represents defense, standing ground, and challenge.",
  "Eight of Wands": "The Eight of Wands signals speed, action, and communication.",
  "Nine of Wands": "The Nine of Wands is about resilience, persistence, and caution.",
  "Ten of Wands": "The Ten of Wands shows burden, responsibility, and hard work.",
  "Page of Wands": "The Page of Wands is enthusiastic, curious, and ready for adventure.",
  "Knight of Wands": "The Knight of Wands is bold, passionate, and impulsive.",
  "Queen of Wands": "The Queen of Wands is confident, determined, and magnetic.",
  "King of Wands": "The King of Wands is visionary, inspiring, and a natural leader.",
  "Ace of Cups": "The Ace of Cups symbolizes love, new emotions, and spiritual awakening.",
  "Two of Cups": "The Two of Cups represents connection, unity, and partnership.",
  "Three of Cups": "The Three of Cups signifies celebration, friendship, and community.",
  "Four of Cups": "The Four of Cups shows contemplation, apathy, and reevaluation.",
  "Five of Cups": "The Five of Cups indicates grief, regret, and emotional loss.",
  "Six of Cups": "The Six of Cups suggests nostalgia, childhood, and good memories.",
  "Seven of Cups": "The Seven of Cups represents choices, illusion, and fantasy.",
  "Eight of Cups": "The Eight of Cups shows walking away, emotional detachment, and seeking more.",
  "Nine of Cups": "The Nine of Cups is about contentment, wishes fulfilled, and satisfaction.",
  "Ten of Cups": "The Ten of Cups signifies happiness, harmony, and emotional fulfillment.",
  "Page of Cups": "The Page of Cups is creative, intuitive, and emotionally open.",
  "Knight of Cups": "The Knight of Cups is romantic, charming, and idealistic.",
  "Queen of Cups": "The Queen of Cups is compassionate, nurturing, and intuitive.",
  "King of Cups": "The King of Cups is emotionally balanced, diplomatic, and wise.",
  "Ace of Swords": "The Ace of Swords represents clarity, truth, and mental breakthroughs.",
  "Two of Swords": "The Two of Swords shows indecision, stalemate, and difficult choices.",
  "Three of Swords": "The Three of Swords indicates heartbreak, sorrow, and betrayal.",
  "Four of Swords": "The Four of Swords is about rest, recovery, and contemplation.",
  "Five of Swords": "The Five of Swords represents conflict, tension, and hollow victories.",
  "Six of Swords": "The Six of Swords symbolizes transition, moving on, and healing.",
  "Seven of Swords": "The Seven of Swords indicates deceit, strategy, or running away.",
  "Eight of Swords": "The Eight of Swords shows restriction, fear, and feeling trapped.",
  "Nine of Swords": "The Nine of Swords is about anxiety, worry, and sleepless nights.",
  "Ten of Swords": "The Ten of Swords represents painful endings and rock bottom.",
  "Page of Swords": "The Page of Swords is curious, intelligent, and watchful.",
  "Knight of Swords": "The Knight of Swords is direct, ambitious, and assertive.",
  "Queen of Swords": "The Queen of Swords is perceptive, independent, and clear-minded.",
  "King of Swords": "The King of Swords is analytical, ethical, and a strong communicator.",
  "Ace of Pentacles": "The Ace of Pentacles represents new opportunities, prosperity, and abundance.",
  "Two of Pentacles": "The Two of Pentacles shows balance, adaptability, and juggling priorities.",
  "Three of Pentacles": "The Three of Pentacles symbolizes teamwork, skill, and collaboration.",
  "Four of Pentacles": "The Four of Pentacles suggests control, security, and holding on tightly.",
  "Five of Pentacles": "The Five of Pentacles shows hardship, financial struggle, and feeling left out.",
  "Six of Pentacles": "The Six of Pentacles is about generosity, giving and receiving.",
  "Seven of Pentacles": "The Seven of Pentacles represents patience, growth, and long-term investment.",
  "Eight of Pentacles": "The Eight of Pentacles symbolizes hard work, dedication, and mastery.",
  "Nine of Pentacles": "The Nine of Pentacles shows self-sufficiency, luxury, and confidence.",
  "Ten of Pentacles": "The Ten of Pentacles signifies legacy, inheritance, and long-term stability.",
  "Page of Pentacles": "The Page of Pentacles is diligent, grounded, and focused on goals.",
  "Knight of Pentacles": "The Knight of Pentacles is responsible, practical, and steady.",
  "Queen of Pentacles": "The Queen of Pentacles is nurturing, resourceful, and financially savvy.",
  "King of Pentacles": "The King of Pentacles is successful, reliable, and abundant."
};

// Function to generate an interpretation and basic yes/no (placeholder logic)
function getResponseFromCards(cards) {
  let interpretation = cards.map(card => tarotCardMeanings[card]).join(" ");

  // For now, we just say "Yes" as default — real logic can use suit/type later
  let outcome = "Yes";

  let response = "";

  if (outcome === "Yes") {
    response = Yes. ${interpretation};
  } else {
    response = No. ${interpretation};
  }

  return response;
}

// Example draw
const cards = ["The High Priestess", "The Star", "Knight of Cups"];

const finalResponse = getResponseFromCards(cards);

console.log(finalResponse);
