DROP DATABASE IF EXISTS reviews_module;

CREATE DATABASE reviews_module;

\c reviews_module;

CREATE TABLE listings (
  id INT PRIMARY KEY,
  name TEXT
);

CREATE TABLE users (
  id INT PRIMARY KEY,
  name TEXT,
  picture TEXT
);

CREATE TABLE reviews (
  created_at TEXT,
  review_text TEXT,
  accuracy_rating INT,
  communication_rating INT,
  cleanliness_rating INT,
  location_rating INT,
  check_in_rating INT,
  value_rating INT,
  is_reported BOOLEAN,
  user_id INT,
  listing_id INT
);

\copy listings FROM 'database/postgres/names.csv' DELIMITER ',';
\copy users FROM 'database/postgres/users.csv' DELIMITER ',';
\copy reviews FROM 'database/postgres/1m.csv' DELIMITER ',';
\copy reviews FROM 'database/postgres/2m.csv' DELIMITER ',';
\copy reviews FROM 'database/postgres/3m.csv' DELIMITER ',';
\copy reviews FROM 'database/postgres/4m.csv' DELIMITER ',';
\copy reviews FROM 'database/postgres/5m.csv' DELIMITER ',';
\copy reviews FROM 'database/postgres/6m.csv' DELIMITER ',';
\copy reviews FROM 'database/postgres/7m.csv' DELIMITER ',';
\copy reviews FROM 'database/postgres/8m.csv' DELIMITER ',';
\copy reviews FROM 'database/postgres/9m.csv' DELIMITER ',';
\copy reviews FROM 'database/postgres/10m.csv' DELIMITER ',';

CREATE INDEX name_idx on listings (name);
CREATE INDEX listing_idx on reviews (listing_id);
