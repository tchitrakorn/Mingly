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

app.post('/formsubmit', (req, res) => {
  let host = req.body.host;
  let title = req.body.title;
  let description = req.body.description;
  let location = req.body.location;
  let date = req.body.date;
  let time = req.body.time;
  let groupSize = req.body.groupSize;
  let mode = req.body.mode;
  console.log('host: ', host);
  console.log('title: ', title);
  console.log('description: ', description);
  console.log('location: ', location);
  console.log('date: ', date);
  console.log('time: ', time);
  console.log('groupSize: ', groupSize);
  console.log('mode: ', mode);
  res.status(200).send('done!');
})

app.get('/usersEvents', (req, res) => {
  let userId = req.query.userId;
  db.getAttendingEvents(userId)
    .then(results => res.status(200).send(results))
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
  console.log('userId: ', userId);
  console.log('eventId: ', eventId);
  res.status(200).send('done!');
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});