const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001; // You can use any port

// Enable CORS for all requests
app.use(cors());

// Route for greeting
app.get('/api/greeting', (req, res) => {
  res.json({ message: 'Welcome to 100 MERN' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
