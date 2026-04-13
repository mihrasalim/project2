const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from Node.js backend 🚀' });
});

app.listen(3000, '0.0.0.0', () => {
  console.log('Server running on port 3000');
});
