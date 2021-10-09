const express = require('express');
const app = express();
const port = 8080;
const db = require('./queries.js');

app.use(express.static('public'));

app.get('/events', (req, res) => {
  db.getEvents()
    .then(results => res.status(200).send(results))
    .catch(error => res.status(500).send(error))
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});