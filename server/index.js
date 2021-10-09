const express = require('express');
const app = express();
const port = 8080;
const db = require('./queries.js');

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.get('/events', (req, res) => {
  db.getEvents()
    .then(results => res.status(200).send(results))
    .catch(error => res.status(500).send(error))
});

app.post('/login', (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  db.getUser(email, password)
    .then(results => res.status(200).send(results))
    .catch(error => res.status(500).send(error))
});

app.post('/signup', (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let password = req.body.password;
  db.postUser(name, email, password)
    .then(results => res.status(200).send(results))
    .catch(error => res.status(500).send(error));
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});