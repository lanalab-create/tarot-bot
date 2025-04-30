const express = require("express");
const fetch = require("node-fetch");
const app = express();

app.use(express.json());

const spiritMessages = [
  "Trust what you cannot see.",
  "A new path is opening for you.",
  "The past has served its purpose.",
  "Healing is happening.",
  "Listen to the quiet signs."
];

app.post("/webhook", async (req, res) => {
  try {
    const response = await fetch("https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=1");
    const data = await response.json();
    const card = data.cards[0];

    const spiritMessage = spiritMessages[Math.floor(Math.random() * spiritMessages.length)];

    const result = Card: ${card.name} - ${card.meaning_up}. Spirit says: ${spiritMessage};
    
    res.json({
      fulfillmentText: result
    });
  } catch (error) {
    console.error(error);
    res.json({
      fulfillmentText: "The spirits are silent right now. Please try again later."
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(Server running on port ${PORT});
});
