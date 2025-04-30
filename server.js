const express = require('express');
const fetch = require('node-fetch');
const app = express();
app.use(express.json());

app.post('/webhook', async (req, res) => {
  const query = req.body.queryResult.queryText; // ✅ FIXED

  const tarotResponse = await fetch('https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=1');
  const data = await tarotResponse.json();
  const card = data.cards[0].name;

  let answer = "The spirits are unclear. Ask again later.";
  if (card.toLowerCase().includes("yes")) answer = "Yes";
  else if (card.toLowerCase().includes("no")) answer = "No";

  res.json({
    fulfillmentText: The card drawn is: ${card}. Spirit says: ${answer}
  });
});

app.listen(3000, () => console.log('Server is running on port 3000'));
