const express = require('express');
const app = express();
const port = 8080;
const db = require('./queries.js');
const bcrypt = require("bcrypt");
const saltRounds = 10;

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.get('/events', (req, res) => {
  let userId = req.query.userId;
  db.getEvents(userId)
    .then(results => res.status(200).send(results))
    .catch(error => res.status(500).send(error))
});

app.post('/login', (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let storedHash = db.getHash(email, password)
    .then(results => results)
    .catch(error => console.log(error));
  bcrypt.compare(password, storedHash)
    .then(result => {
      db.getUser(email, password)
        .then(results => res.status(200).send(results))
        .catch(error => res.status(500).send(error))
    })
    .catch(error => console.log(error))
});

app.post('/signup', (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let password = req.body.password;
  bcrypt
    .hash(password, saltRounds)
    .then(hash => {
      db.postUser(name, email, hash)
        .then(results => res.status(200).send(results))
        .catch(error => res.status(500).send(error));
    })
    .catch(error => res.status(500).send(error))
})

app.post('/formsubmit', (req, res) => {
  let host = req.body.host;
  let title = req.body.title;
  let description = req.body.description;
  let location = req.body.location;
  let date = req.body.date;
  let time = req.body.time;
  let groupSize = req.body.groupSize;
  let mode = req.body.mode;
  // console.log('host: ', host);
  // console.log('title: ', title);
  // console.log('description: ', description);
  // console.log('location: ', location);
  // console.log('date: ', date);
  // console.log('time: ', time);
  // console.log('groupSize: ', groupSize);
  // console.log('mode: ', mode);
  db.addEvent(host, title, description, location, date, time, groupSize, mode)
    .then(results => res.status(200).send(results))
    .catch(error => res.status(500).send(error));
})

app.get('/usersEvents', (req, res) => {
  let userId = req.query.userId;
  db.getAttendingEvents(userId)
    .then(results => {
      console.log('results: ', results);
      res.status(200).send(results)
    })
    .catch(error => res.status(500).send(error));
});

app.get('/hostingEvents', (req, res) => {
  let userId = req.query.userId;
  db.getHostingEvents(userId)
    .then(results => res.status(200).send(results))
    .catch(error => res.status(500).send(error));
});

app.post('/joinEvent', (req, res) => {
  let userId = req.body.userId;
  let eventId = req.body.eventId;
  db.postJoinEvent(userId, eventId)
    .then(results => res.status(200).send(results))
    .catch(error => res.status(500).send(error));
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});