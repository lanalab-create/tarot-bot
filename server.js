const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Simulate the tarot reading process
const tarotReading = () => {
    // Your tarot logic here (replace this with the actual tarot card selection logic)
    const outcome = "Yes"; // Example outcome
    const interpretation = "The cards suggest a favorable outcome."; // Example interpretation
    return outcome + ". The cards suggest: " + interpretation;
};

// Define the tarot endpoint
app.post('/tarot', (req, res) => {
    console.log("Request received");

    // Get the tarot reading result
    const response = tarotReading();
    
    // Log the response for debugging
    console.log("Response generated:", response);

    // Send the response back to the client
    res.send(response);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
