const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Simulate the tarot reading process
const tarotReading = (question) => {
    // Here you would add logic to generate 3 tarot cards and interpret them
    const outcome = "Yes"; // This would be your logic result
    const interpretation = "The cards suggest a favorable outcome."; // Your logic
    return outcome + ". The cards suggest: " + interpretation;
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
