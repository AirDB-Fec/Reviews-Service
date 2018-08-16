DROP KEYSPACE IF EXISTS reviews;

CREATE KEYSPACE reviews
WITH replication = {'class': 'SimpleStrategy', 'replication_factor' : 2};

USE reviews;

CREATE TABLE reviewsbyid (
  room_id INT,
  room_name TEXT,
  user_name TEXT,
  created_at TEXT,
  review_text TEXT,
  image_url TEXT,
  accuracy_rating INT,
  communication_rating INT,
  cleanliness_rating INT,
  location_rating INT,
  check_in_rating INT,
  value_rating INT,
  is_reported BOOLEAN,
  PRIMARY KEY (room_id, user_name)
);

CREATE TABLE reviewsbyname (
  room_id INT,
  room_name TEXT,
  user_name TEXT,
  created_at TEXT,
  review_text TEXT,
  image_url TEXT,
  accuracy_rating INT,
  communication_rating INT,
  cleanliness_rating INT,
  location_rating INT,
  check_in_rating INT,
  value_rating INT,
  is_reported BOOLEAN,
  PRIMARY KEY (room_name, user_name)
);

COPY reviewsbyid (room_id, room_name, user_name, created_at, review_text, image_url, accuracy_rating, communication_rating, cleanliness_rating, location_rating, check_in_rating, value_rating, is_reported) FROM 'database/postgres/1mil.csv' WITH DELIMITER=',';
COPY reviewsbyid (room_id, room_name, user_name, created_at, review_text, image_url, accuracy_rating, communication_rating, cleanliness_rating, location_rating, check_in_rating, value_rating, is_reported) FROM 'database/postgres/2mil.csv' WITH DELIMITER=',';
COPY reviewsbyid (room_id, room_name, user_name, created_at, review_text, image_url, accuracy_rating, communication_rating, cleanliness_rating, location_rating, check_in_rating, value_rating, is_reported) FROM 'database/postgres/3mil.csv' WITH DELIMITER=',';
COPY reviewsbyid (room_id, room_name, user_name, created_at, review_text, image_url, accuracy_rating, communication_rating, cleanliness_rating, location_rating, check_in_rating, value_rating, is_reported) FROM 'database/postgres/4mil.csv' WITH DELIMITER=',';
COPY reviewsbyid (room_id, room_name, user_name, created_at, review_text, image_url, accuracy_rating, communication_rating, cleanliness_rating, location_rating, check_in_rating, value_rating, is_reported) FROM 'database/postgres/5mil.csv' WITH DELIMITER=',';
COPY reviewsbyid (room_id, room_name, user_name, created_at, review_text, image_url, accuracy_rating, communication_rating, cleanliness_rating, location_rating, check_in_rating, value_rating, is_reported) FROM 'database/postgres/6mil.csv' WITH DELIMITER=',';
COPY reviewsbyid (room_id, room_name, user_name, created_at, review_text, image_url, accuracy_rating, communication_rating, cleanliness_rating, location_rating, check_in_rating, value_rating, is_reported) FROM 'database/postgres/7mil.csv' WITH DELIMITER=',';
COPY reviewsbyid (room_id, room_name, user_name, created_at, review_text, image_url, accuracy_rating, communication_rating, cleanliness_rating, location_rating, check_in_rating, value_rating, is_reported) FROM 'database/postgres/8mil.csv' WITH DELIMITER=',';
COPY reviewsbyid (room_id, room_name, user_name, created_at, review_text, image_url, accuracy_rating, communication_rating, cleanliness_rating, location_rating, check_in_rating, value_rating, is_reported) FROM 'database/postgres/9mil.csv' WITH DELIMITER=',';
COPY reviewsbyid (room_id, room_name, user_name, created_at, review_text, image_url, accuracy_rating, communication_rating, cleanliness_rating, location_rating, check_in_rating, value_rating, is_reported) FROM 'database/postgres/10mil.csv' WITH DELIMITER=',';

COPY reviewsbyname (room_id, room_name, user_name, created_at, review_text, image_url, accuracy_rating, communication_rating, cleanliness_rating, location_rating, check_in_rating, value_rating, is_reported) FROM 'database/postgres/1mil.csv' WITH DELIMITER=',';
COPY reviewsbyname (room_id, room_name, user_name, created_at, review_text, image_url, accuracy_rating, communication_rating, cleanliness_rating, location_rating, check_in_rating, value_rating, is_reported) FROM 'database/postgres/2mil.csv' WITH DELIMITER=',';
COPY reviewsbyname (room_id, room_name, user_name, created_at, review_text, image_url, accuracy_rating, communication_rating, cleanliness_rating, location_rating, check_in_rating, value_rating, is_reported) FROM 'database/postgres/3mil.csv' WITH DELIMITER=',';
COPY reviewsbyname (room_id, room_name, user_name, created_at, review_text, image_url, accuracy_rating, communication_rating, cleanliness_rating, location_rating, check_in_rating, value_rating, is_reported) FROM 'database/postgres/4mil.csv' WITH DELIMITER=',';
COPY reviewsbyname (room_id, room_name, user_name, created_at, review_text, image_url, accuracy_rating, communication_rating, cleanliness_rating, location_rating, check_in_rating, value_rating, is_reported) FROM 'database/postgres/5mil.csv' WITH DELIMITER=',';
COPY reviewsbyname (room_id, room_name, user_name, created_at, review_text, image_url, accuracy_rating, communication_rating, cleanliness_rating, location_rating, check_in_rating, value_rating, is_reported) FROM 'database/postgres/6mil.csv' WITH DELIMITER=',';
COPY reviewsbyname (room_id, room_name, user_name, created_at, review_text, image_url, accuracy_rating, communication_rating, cleanliness_rating, location_rating, check_in_rating, value_rating, is_reported) FROM 'database/postgres/7mil.csv' WITH DELIMITER=',';
COPY reviewsbyname (room_id, room_name, user_name, created_at, review_text, image_url, accuracy_rating, communication_rating, cleanliness_rating, location_rating, check_in_rating, value_rating, is_reported) FROM 'database/postgres/8mil.csv' WITH DELIMITER=',';
COPY reviewsbyname (room_id, room_name, user_name, created_at, review_text, image_url, accuracy_rating, communication_rating, cleanliness_rating, location_rating, check_in_rating, value_rating, is_reported) FROM 'database/postgres/9mil.csv' WITH DELIMITER=',';
COPY reviewsbyname (room_id, room_name, user_name, created_at, review_text, image_url, accuracy_rating, communication_rating, cleanliness_rating, location_rating, check_in_rating, value_rating, is_reported) FROM 'database/postgres/10mil.csv' WITH DELIMITER=',';
