const db = require('../database/connect.js');

module.exports = {
  getEvents: () => {
    let queryString = 'SELECT * FROM "events"';
    return db.client
      .query(queryString)
      .then(results => results.rows)
      .catch(error => error);
  },
  getUser: (email, password) => {
    let queryString = 'SELECT id FROM users WHERE users.email = $1 AND users.password = $2';
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
  }
}