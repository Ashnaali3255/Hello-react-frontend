const express = require('express');
const app = express();

// Define a list of random greetings
const randomGreetings = [
  'Asalam-o-Alikum',
  'Hello',
  'Hi',
  'Bonjour',
  'Hola',
  'Guten Tag',
  'Ciao',
  'Namaste',
];

// Route to get a random greeting
app.get('/http://127.0.0.1:3000/api/v1/messages/random', (req, res) => {
  const randomIndex = Math.floor(Math.random() * randomGreetings.length);
  const randomGreeting = randomGreetings[randomIndex];
  res.json({ message: randomGreeting });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
