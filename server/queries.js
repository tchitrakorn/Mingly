const db = require('../database/connect.js');

module.exports = {
  getEvents: (userId) => {
    // let queryString = 'SELECT * FROM "events"';
    let queryString = 'SELECT * FROM events LEFT JOIN usersEvents ON events.id = usersEvents.eventId WHERE usersEvents.userId != $1';
    let values = [userId];
    return db.client
      .query(queryString, values)
      .then(results => results.rows)
      .catch(error => error);
  },
  getUser: (email, password) => {
    let queryString = 'SELECT id, name FROM users WHERE users.email = $1 AND users.password = $2';
    let values = [email, password];
    return db.client 
      .query(queryString, values)
      .then(results => results.rows)
      .catch(error => error);
  },
  postUser: (name, email, password) => {
    let queryString = 'INSERT INTO users (name, email, password) VALUES ($1, $2, $3)';
    let values = [name, email, password];
    return db.client
      .query(queryString, values)
      .then(results => results.rows)
      .catch(error => error);
  },
  getAttendingEvents: (userId) => {
    let queryString = 'SELECT * FROM events LEFT JOIN usersEvents ON events.id = usersEvents.eventId WHERE usersEvents.userId = $1';
    let values = [userId];
    return db.client
      .query(queryString, values)
      .then(results => results.rows)
      .catch(error => error);
  },
  getHostingEvents: (userId) => {
    let queryString = 'SELECT * FROM events WHERE events.host = $1';
    let values = [userId];
    return db.client
      .query(queryString, values)
      .then(results => results.rows)
      .catch(error => error);
  },
  postJoinEvent: (userId, eventId) => {
    let queryString = 'INSERT INTO usersEvents (userId, eventId) VALUES ($1, $2)';
    let queryString2 = 'UPDATE events SET joined = joined + 1 WHERE events.id = $2';
    let values = [userId, eventId];
    return Promise.all([
      db.client.query(queryString, values),
      db.client.query(queryString2, values)])
      .then(results => results)
      .catch(error => error);
  },
  // getJoinableEvents: (userId, eventId) => {
  //   let queryString = 'SELECT * FROM events LEFT JOIN usersEvents ON events.id = usersEvents.eventId WHERE usersEvents.userId = $1';
  //   let values = [userId];
  //   return db.client
  //     .query(queryString, values)
  //     .then(results => results.rows)
  //     .catch(error => error);
  // }
}