const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  // Get the timeout duration from the request's query parameter
  // If not provided, use a default value of 10 seconds
  const timeoutDuration = parseInt(req.query.timeout) || 10000;

  setTimeout(() => {
    res.send(`This is a timeout test with ${timeoutDuration / 1000} seconds!`);
  }, timeoutDuration);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
