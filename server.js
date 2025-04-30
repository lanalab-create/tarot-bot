const express = require('express');
const app = express();

app.use(express.json());

// Tarot card meanings (1-2 sentence interpretations for each card)
const tarotCards = {
  "The Fool": "A new beginning is on the horizon, but you must take a leap of faith and embrace the unknown.",
  "The Magician": "You have the tools and resources to manifest your desires, but it's up to you to take action.",
  "The High Priestess": "Trust your intuition and the wisdom that lies hidden beneath the surface.",
  "The Empress": "Abundance, creativity, and nurturing energies are present. This is a fertile time for growth.",
  "The Emperor": "You are being called to bring order, structure, and discipline into your life.",
  "The Hierophant": "Tradition, spiritual guidance, and following a wise mentor are key in your current situation.",
  "The Lovers": "A partnership or deep connection is either forming or being tested in your life.",
  "The Chariot": "Victory is within your grasp, but you must stay determined and in control of your emotions.",
  "Strength": "Inner strength and resilience will help you overcome the challenges ahead.",
  "The Hermit": "Take time to reflect and seek wisdom from within before making decisions.",
  "Wheel of Fortune": "Destiny is at play, and you are entering a new phase that will bring about positive change.",
  "Justice": "The truth will be revealed, and fairness will prevail in your situation.",
  "The Hanged Man": "Pause and reflect. There may be a need to shift your perspective before moving forward.",
  "Death": "Transformation is inevitable. Let go of what no longer serves you to make room for new beginnings.",
  "Temperance": "Balance, patience, and moderation will lead to long-term success and peace.",
  "The Devil": "You may be feeling trapped by temptation, materialism, or unhealthy attachments. Break free.",
  "The Tower": "A sudden, unexpected change or revelation may shake your foundation, but it will lead to necessary growth.",
  "The Star": "Hope, inspiration, and spiritual guidance are leading you toward a brighter future.",
  "The Moon": "Illusions, fears, and uncertainties cloud your judgment. Trust your intuition to guide you.",
  "The Sun": "Success, vitality, and joy are coming your way. Things are about to improve significantly.",
  "Judgement": "A moment of reckoning and self-reflection is here. It's time to make decisions about your future.",
  "The World": "Completion, fulfillment, and a sense of achievement. You've come full circle in your journey.",
  // Minor Arcana (brief descriptions for each)
  "Ace of Wands": "New creative energy is sparking. It's a time for new beginnings and passions.",
  "Two of Wands": "You are at a crossroads. It's time to decide which direction to take in life.",
  "Three of Wands": "Your efforts are starting to pay off, but you need patience as you await the results.",
  "Four of Wands": "Celebration, stability, and harmony are surrounding you. Enjoy the fruits of your labor.",
  "Five of Wands": "Conflict or competition may arise. Stay grounded and avoid unnecessary struggles.",
  "Six of Wands": "Victory is yours! Recognition and success are in your near future.",
  "Seven of Wands": "Stand your ground. You are being challenged, but persistence will lead to success.",
  "Eight of Wands": "Things are moving quickly. Expect fast progress and action in your life.",
  "Nine of Wands": "You're almost at the finish line, but you may feel exhausted. Keep going.",
  "Ten of Wands": "You’re carrying a heavy load. It may be time to delegate or lighten your responsibilities.",
  "Page of Wands": "Excitement and new adventures are on the horizon. Embrace your curiosity and enthusiasm.",
  "Knight of Wands": "You’re moving fast and with purpose. Chase after your goals with confidence.",
  "Queen of Wands": "Confidence, creativity, and leadership are your strengths. Own your power.",
  "King of Wands": "Visionary leadership and ambition are present. You are called to inspire others.",
  "Ace of Cups": "New emotional connections are emerging. Love and fulfillment are in your future.",
  "Two of Cups": "Partnerships and deep connections are being formed. This is a time for mutual understanding and love.",
  "Three of Cups": "Celebration and joy. You are surrounded by supportive friends and community.",
  "Four of Cups": "Discontentment or boredom. Take time to reflect on what you truly want.",
  "Five of Cups": "Grief or regret over lost opportunities. Focus on the positives that remain.",
  "Six of Cups": "Nostalgia or a return to past emotions. Revisit old memories or relationships.",
  "Seven of Cups": "Choices and illusions. Make sure you’re not distracted by false promises.",
  "Eight of Cups": "You’re walking away from something that no longer serves you. Trust in your decision.",
  "Nine of Cups": "Contentment and satisfaction. Your wishes are close to being fulfilled.",
  "Ten of Cups": "Emotional fulfillment and happiness. A happy home and family life is on the horizon.",
  "Page of Cups": "New emotions and connections are forming. Stay open to love and intuition.",
  "Knight of Cups": "Romantic or idealistic pursuits are ahead. Follow your heart in all matters.",
  "Queen of Cups": "Emotional depth and compassion guide you. Be nurturing to yourself and others.",
  "King of Cups": "Emotional balance and wisdom. Lead with your heart and mind in harmony.",
  "Ace of Swords": "Clarity and new ideas are flowing. The truth is being revealed.",
  "Two of Swords": "Indecision and difficult choices. Take time to think things through carefully.",
  "Three of Swords": "Heartbreak or emotional pain. Healing will come, but it takes time.",
  "Four of Swords": "Rest and recovery are necessary. Take a break and gather your strength.",
  "Five of Swords": "Conflict and defeat. You may have won the battle, but consider the cost.",
  "Six of Swords": "Moving on from troubled times to calmer waters. Peace is in sight.",
  "Seven of Swords": "Deception or betrayal. Be cautious of those around you.",
  "Eight of Swords": "Feeling trapped or restricted. The key to freedom lies within.",
  "Nine of Swords": "Anxiety and worry are clouding your mind. Seek help if needed.",
  "Ten of Swords": "A painful ending is here, but it clears the way for new beginnings.",
  "Page of Swords": "Curiosity and new ideas are coming your way. Be ready for action.",
  "Knight of Swords": "Fast-paced action and determination. Charge forward with focus.",
  "Queen of Swords": "Clear thinking and strong judgment. Make decisions with clarity.",
  "King of Swords": "Master of logic and intellect. Approach matters with reason and authority.",
  "Ace of Pentacles": "New opportunities for wealth and stability are on the horizon.",
  "Two of Pentacles": "Balancing priorities and managing resources. Adapt to the demands of the moment.",
  "Three of Pentacles": "Teamwork and collaboration are key to success. Work with others to achieve your goals.",
  "Four of Pentacles": "Security and control. You may be holding on too tightly—consider letting go.",
  "Five of Pentacles": "Loss and feeling left out. There is help available if you seek it.",
  "Six of Pentacles": "Generosity and balance. Be mindful of how resources are shared.",
  "Seven of Pentacles": "Patience and hard work. Results will come, but they may take time.",
  "Eight of Pentacles": "Mastery of your craft and skills. Hard work leads to success.",
  "Nine of Pentacles": "Enjoying the fruits of your labor. Self-sufficiency and luxury are yours.",
  "Ten of Pentacles": "Long-term stability and legacy. Focus on building something lasting.",
  "Page of Pentacles": "New financial opportunities and practical pursuits are ahead.",
  "Knight of Pentacles": "Slow and steady progress. Stay disciplined and committed to your goals.",
  "Queen of Pentacles": "Nurturing energy, groundedness, and a focus on material well-being.",
  "King of Pentacles": "Financial success, stability, and leadership in the material world."
};

// Function to interpret 3 tarot cards for a yes/no response
function interpretCards(cards) {
  let response = "";

  // For each card, fetch its meaning
  cards.forEach(card => {
    if (tarotCards[card]) {
      response += tarotCards[card] + " ";
    }
  });

  return response;
}

// Example API route to process tarot reading
app.post('/tarot-reading', (req, res) => {
  const { cards, answer } = req.body;

  let interpretation = interpretCards(cards);

  if (answer === "Yes") {
    res.json({
      response: Yes! The cards suggest a favorable outcome: ${interpretation}
    });
  } else {
    res.json({
      response: No. The cards suggest challenges or obstacles: ${interpretation}
    });
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
