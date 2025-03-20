const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Test Route
app.get('/', (req, res) => {
  res.send('Server is running...');
});

app.use(express.json()); // Middleware to parse JSON request body

app.post("/submit", (req, res) => {
  const formData = req.body; // Capture form data from frontend
  console.log("Received Form Data:", formData);

  // TODO: Here is where we will later process the data (e.g., send it to AI)
  
  res.json({ message: "Form submitted successfully!", receivedData: formData });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
