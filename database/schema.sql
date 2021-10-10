DROP DATABASE IF EXISTS justchillindb;
CREATE DATABASE justchillindb;
\c justchillindb;

DROP TABLE IF EXISTS usersEvents;
DROP TABLE IF EXISTS events;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id          SERIAL      UNIQUE      PRIMARY KEY,
    name        VARCHAR     NOT NULL,
    email       VARCHAR     NOT NULL,
    password    VARCHAR     NOT NULL
);

CREATE TABLE events (
    id          SERIAL      UNIQUE      PRIMARY KEY,
    host        INT         NOT NULL    REFERENCES users(id),
    title       VARCHAR     NOT NULL,
    description VARCHAR     NOT NULL,
    location    VARCHAR     NOT NULL,
    date        DATE        NOT NULL,
    time        TIME        NOT NULL,
    groupSize   INT         NOT NULL,
    joined      INT         DEFAULT 0,
    mode        VARCHAR     NOT NULL
);

CREATE TABLE usersEvents (
    id          SERIAL      UNIQUE      PRIMARY KEY,
    userId      INT         NOT NULL    REFERENCES users(id),
    eventId     INT         NOT NULL    REFERENCES events(id)
);

\COPY users(name, email, password) FROM 'data/users.csv' DELIMITER ',' CSV HEADER;
\COPY events(host, title, description, location, date, time, groupSize, joined, mode) FROM 'data/events.csv' DELIMITER ',' CSV HEADER;
\COPY usersEvents(userId, eventId) FROM 'data/usersEvents.csv' DELIMITER ',' CSV HEADER;
