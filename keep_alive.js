const express = require('express');
const app = express();
const port = process.env.PORT || 10000;

app.get('/', (req, res) => {
  res.send('Bot aktif!');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Sunucu ${port} portunda dinleniyor`);
});
