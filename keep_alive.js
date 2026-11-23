const express = require('express');
const app = express();
const port = process.env.PORT || 2323;

app.get('/', (req, res) => {
  res.send('Bot aktif!');
});

app.listen(port, () => {
  console.log(`Bot ${port} portunda dinleniyor`);
});
