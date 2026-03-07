const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
  res.json({
    message: 'Hello from Kong + AKS!',
    timestamp: new Date().toISOString()
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(3000, () => {
  console.log('API running on port 3000');
});
