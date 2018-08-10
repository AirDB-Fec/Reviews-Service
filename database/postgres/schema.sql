DROP DATABASE IF EXISTS reviewsmodule;

CREATE DATABASE reviewsmodule;

\c reviewsmodule;

CREATE TABLE reviews (
  room_id INT NOT NULL,
  room_name TEXT NOT NULL,
  user_name TEXT NOT NULL,
  created_at TEXT NOT NULL,
  review_text TEXT NOT NULL,
  image_url TEXT NOT NULL,
  accuracy_rating INT NOT NULL,
  communication_rating INT NOT NULL,
  cleanliness_rating INT NOT NULL,
  location_rating INT NOT NULL,
  check_in_rating INT NOT NULL,
  value_rating INT NOT NULL,
  is_reported BOOLEAN NOT NULL
);

\copy reviews (room_id, room_name, user_name, created_at, review_text, image_url, accuracy_rating, communication_rating, cleanliness_rating, location_rating, check_in_rating, value_rating, is_reported) FROM 'database/postgres/1mil.csv' DELIMITER ',';
\copy reviews (room_id, room_name, user_name, created_at, review_text, image_url, accuracy_rating, communication_rating, cleanliness_rating, location_rating, check_in_rating, value_rating, is_reported) FROM 'database/postgres/2mil.csv' DELIMITER ',';
\copy reviews (room_id, room_name, user_name, created_at, review_text, image_url, accuracy_rating, communication_rating, cleanliness_rating, location_rating, check_in_rating, value_rating, is_reported) FROM 'database/postgres/3mil.csv' DELIMITER ',';
\copy reviews (room_id, room_name, user_name, created_at, review_text, image_url, accuracy_rating, communication_rating, cleanliness_rating, location_rating, check_in_rating, value_rating, is_reported) FROM 'database/postgres/4mil.csv' DELIMITER ',';
\copy reviews (room_id, room_name, user_name, created_at, review_text, image_url, accuracy_rating, communication_rating, cleanliness_rating, location_rating, check_in_rating, value_rating, is_reported) FROM 'database/postgres/5mil.csv' DELIMITER ',';
\copy reviews (room_id, room_name, user_name, created_at, review_text, image_url, accuracy_rating, communication_rating, cleanliness_rating, location_rating, check_in_rating, value_rating, is_reported) FROM 'database/postgres/6mil.csv' DELIMITER ',';
\copy reviews (room_id, room_name, user_name, created_at, review_text, image_url, accuracy_rating, communication_rating, cleanliness_rating, location_rating, check_in_rating, value_rating, is_reported) FROM 'database/postgres/7mil.csv' DELIMITER ',';
\copy reviews (room_id, room_name, user_name, created_at, review_text, image_url, accuracy_rating, communication_rating, cleanliness_rating, location_rating, check_in_rating, value_rating, is_reported) FROM 'database/postgres/8mil.csv' DELIMITER ',';
\copy reviews (room_id, room_name, user_name, created_at, review_text, image_url, accuracy_rating, communication_rating, cleanliness_rating, location_rating, check_in_rating, value_rating, is_reported) FROM 'database/postgres/9mil.csv' DELIMITER ',';
\copy reviews (room_id, room_name, user_name, created_at, review_text, image_url, accuracy_rating, communication_rating, cleanliness_rating, location_rating, check_in_rating, value_rating, is_reported) FROM 'database/postgres/10mil.csv' DELIMITER ',';

CREATE INDEX on reviews (room_id, room_name);
