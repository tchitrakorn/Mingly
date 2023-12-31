const express = require('express');
const app = express();
const port = 8080;
const db = require('./queries.js');
const mongodb = require('../database/database.js')
const connectDB = require('../database/mongoConnect')

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

// Establish database connection
connectDB()

// Retrieve all events
app.get('/events', (req, res) => {
  mongodb.getAllEvents()
    .then(results => res.status(200).send(results))
    .catch(error => res.status(500).send(error))
});

// Retrieve my events (both hosting and attending)
app.get('/myevents/:id', (req, res) => {
  let userId = req.params.id;
  mongodb.getMyEvents(userId)
    .then(results => res.status(200).send(results))
    .catch(error => res.status(500).send(error))
});

// Add a new event
app.post('/event', (req, res) => {
  mongodb.addEvent(req.body)
    .then(results => res.status(200).send(results))
    .catch(error => res.status(500).send(error));
})

// Delete an event
app.delete('/event/:id', (req, res) => {
  let eventId = req.params.id;
  mongodb.deleteEvent(eventId)
    .then(results => res.status(200).send(results))
    .catch(error => res.status(500).send(error));
})

// Join an event
app.post('/join', (req, res) => {
  let eventId = req.body.eventId;
  let userId = req.body.userId;
  mongodb.joinEvent(eventId, userId)
    .then(results => res.status(200).send(results))
    .catch(error => res.status(500).send(error));
})

// Unjoin an event
app.post('/unjoin', (req, res) => {
  let eventId = req.body.eventId;
  let userId = req.body.userId;
  mongodb.unjoinEvent(eventId, userId)
    .then(results => res.status(200).send(results))
    .catch(error => res.status(500).send(error));
})

// Update an event
app.patch('/event', (req, res) => {
  mongodb.updateEvent(req.body)
    .then(results => res.status(200).send(results))
    .catch(error => res.status(500).send(error));
})

// Verify user's credentials (log-in)
app.post('/login', (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  mongodb.getLoggedInUser(email, password)
    .then(results => res.status(200).send(results))
    .catch(error => res.status(500).send(error))
});

// Add a new user (sign-up)
app.post('/signup', (req, res) => {
  mongodb.addUser(req.body)
    .then(results => res.status(200).send(results))
    .catch(error => res.status(500).send(error))
});



// NOT UPDATED

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