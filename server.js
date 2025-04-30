const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.use(express.json());

app.post('/webhook', async (req, res) => {
  const query = req.body.queryResult.queryText;

  try {
    const response = await fetch('https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=1');
    const data = await response.json();
    const card = data.cards[0].name;

    let answer = "The spirits are unclear. Ask again later.";
    if (card.toLowerCase().includes("yes")) {
      answer = "Yes";
    } else if (card.toLowerCase().includes("no")) {
      answer = "No";
    }

    res.json({
      fulfillmentText: The card drawn is: ${card}. Spirit says: ${answer}
    });
  } catch (error) {
    console.error("Error fetching tarot card:", error);
    res.json({
      fulfillmentText: "There was a problem reaching the spirits. Please try again later."
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(Server running on port ${PORT});
});
