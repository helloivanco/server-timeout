const express = require('express');
const http = require('http');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  const timeoutDuration = parseInt(req.query.timeout) || 1000;

  setTimeout(() => {
    res.send(
      `This is a timeout test with ${
        timeoutDuration / 1000
      } seconds! Use the query parameter "timeout" to change the timeout duration (ie. URL?timeout=5000 for 5 seconds))`
    );
  }, timeoutDuration);
});

const server = http.createServer(app);
server.setTimeout(10 * 60 * 1000); // Set the server timeout to 10 minutes (600000 ms)

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
