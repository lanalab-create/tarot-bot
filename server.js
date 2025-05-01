const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Tarot cards
const cards = [
    "The Fool", "The Magician", "The High Priestess", "The Empress", "The Emperor", "The Hierophant", "The Lovers",
    "The Chariot", "Strength", "The Hermit", "Wheel of Fortune", "Justice", "The Hanged Man", "Death", "Temperance",
    "The Devil", "The Tower", "The Star", "The Moon", "The Sun", "Judgement", "The World",
    "Ace of Cups", "Two of Cups", "Three of Cups", "Four of Cups", "Five of Cups", "Six of Cups", "Seven of Cups", "Eight of Cups", "Nine of Cups", "Ten of Cups",
    "Page of Cups", "Knight of Cups", "Queen of Cups", "King of Cups",
    "Ace of Swords", "Two of Swords", "Three of Swords", "Four of Swords", "Five of Swords", "Six of Swords", "Seven of Swords", "Eight of Swords", "Nine of Swords", "Ten of Swords",
    "Page of Swords", "Knight of Swords", "Queen of Swords", "King of Swords",
    "Ace of Wands", "Two of Wands", "Three of Wands", "Four of Wands", "Five of Wands", "Six of Wands", "Seven of Wands", "Eight of Wands", "Nine of Wands", "Ten of Wands",
    "Page of Wands", "Knight of Wands", "Queen of Wands", "King of Wands",
    "Ace of Pentacles", "Two of Pentacles", "Three of Pentacles", "Four of Pentacles", "Five of Pentacles", "Six of Pentacles", "Seven of Pentacles", "Eight of Pentacles", "Nine of Pentacles", "Ten of Pentacles",
    "Page of Pentacles", "Knight of Pentacles", "Queen of Pentacles", "King of Pentacles"
];

// Basic interpretation function for "Yes"/"No" logic
const isYesCard = (card) => {
    const yesCards = ["The Sun", "The World", "The Star", "The Lovers", "Ace of Cups", "Ten of Cups", "Four of Wands"];
    const noCards = ["Ten of Swords", "Three of Swords", "The Tower", "Five of Cups", "Eight of Swords", "Death"];
    if (yesCards.includes(card)) return "yes";
    if (noCards.includes(card)) return "no";
    return "maybe";
};

// Tarot reading function with interpretation of 3 cards
const tarotReading = (question) => {
    const picked = [];
    while (picked.length < 3) {
        const card = cards[Math.floor(Math.random() * cards.length)];
        if (!picked.includes(card)) picked.push(card);
    }

    const interpretations = picked.map(card => {
        if (isYesCard(card) === "yes") {
            return ${card} suggests a positive outcome.;
        } else if (isYesCard(card) === "no") {
            return ${card} suggests a negative outcome.;
        } else {
            return ${card} represents ambiguity, and suggests uncertainty in the situation.;
        }
    });

    const yesCount = picked.map(isYesCard).filter(r => r === "yes").length;
    const noCount = picked.map(isYesCard).filter(r => r === "no").length;

    let tendency;
    if (yesCount >= 2) tendency = "The overall energy suggests a positive outcome.";
    else if (noCount >= 2) tendency = "The overall energy suggests a negative outcome.";
    else tendency = "The cards indicate mixed signals, and the outcome remains uncertain.";

    const joinedCards = picked.join(", ");
    const interpretationSummary = interpretations.join(" ");

    const finalResponse = ${interpretationSummary} Based on the combined meanings of the cards, ${tendency};
  
    if (question.toLowerCase().includes("spirit")) {
        return You received a message of guidance: the cards drawn were ${joinedCards}. Reflect on their meaning for your path.;
    }

    return finalResponse;
};

// Dialogflow-compatible webhook endpoint
app.post('/webhook', (req, res) => {
    console.log("Webhook request received");

    const userQuestion = req.body.queryResult?.queryText || "No question received";
    const tarotResult = tarotReading(userQuestion);

    console.log("Response generated:", tarotResult);

    res.json({
        fulfillmentText: tarotResult
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
