const express = require('express');
const dotenv = require('dotenv');

const app = express();
// Load the .env file
dotenv.config();

const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  // Get the timeout duration from the request's query parameter
  // If not provided, use a default value of 1 seconds
  const timeoutDuration = parseInt(req.query.timeout) || 1000;

  setTimeout(() => {
    res.send(
      `This is a timeout test with ${
        timeoutDuration / 1000
      } seconds! Use the query parameter "timeout" to change the timeout duration (ie. URL?timeout=5000 for 5 seconds))`
    );
  }, timeoutDuration);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
