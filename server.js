//TODO....create cart.html

// Include the necessary modules
const express = require('express');
const path = require('path');

// Initialize the Express app
const app = express();

// Allows Express to receive and parse requests that send JSON (middleware)
// JSON is a data type similar looking to a Javascript object but keys must have quotes around them
// Example - { "name": "Albert", "age": 34 } compared to { name: "Albert", age: 34 } (JS Object)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON
app.use(express.json());

// Receive and parse request URL string in properly encoded formats
// https://www.geeksforgeeks.org/express-js-express-urlencoded-function/
app.use(express.urlencoded());

// Custom middleware example - logging for every application request
app.use((req, res, next) => {
  console.log('custom middleware application level - log');
  // Next is provided so you can continue to execute middlewares and so on to the final function
  next();
});

// Define the GET Home page route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

// Define the GET Store/cart page route
app.get('/store', (req, res) => {
  res.sendFile(path.join(__dirname, '/cart.html'));
});

// Define the POST checkout route
app.post('/checkout', (req, res) => {
  // The code for processing the checkout data goes here
  res.send('Checkout successful!');
});

// Set the port number for the server to listen on
const PORT = process.env.PORT || 9000;

// Start the server and log on startup
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
