// Express = Node framework for building server applications
// You will likely be on version 4.x.x but 5 is (supposedly) coming
// Make sure when you read documentation you are reading the correct version
const express = require('express');
const cors = require('cors');

// After importing packages, initialize a new Express app when this file runs
const app = express();

// 8080 is a common port for servers and 3000 for frontend
const SERVER_PORT = 8080;

app.listen(SERVER_PORT, () => {
  console.log(`Server started on localhost:${SERVER_PORT}`);
});
