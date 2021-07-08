const express = require('express');

const app = express();
const PUERTO = 8080;

app.get('/', (req, res) => {
  res.send('hello world!');
});

app.listen(PUERTO, () => {
  console.log(`Escuchando requests en https://localhost:${PUERTO}`);
});
