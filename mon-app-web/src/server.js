const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World! Bienvenue sur mon application web Dockerisée!');
});

app.listen(port, () => {
  console.log(`L'application s'exécute sur
  http://localhost:${port}`);
});