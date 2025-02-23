const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist/browser/kahoot')));

// Redirect all traffic to index.html
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/kahoot/browser/index.html'));
});

// Start the app by listening on the default Heroku port or 8080
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
