/*
Use this command line to create the database first in terminal
CREATE DATABASE artists_info WITH OWNER = <owner name> ENCODING = 'UTF8';

then run this file with the command:
psql -d artists_info -a -f schema.sql

to create the tables within that database
*/

CREATE TABLE IF NOT EXISTS users (
  user_id SERIAL PRIMARY KEY,
  user_name VARCHAR (150) NOT NULL,
  user_password VARCHAR (50) NOT NULL,
  is_artist BOOLEAN NOT NULL DEFAULT false,
  bio TEXT,
  portrait_url TEXT,
  website TEXT
);

CREATE TABLE IF NOT EXISTS bookings (
  booking_id SERIAL PRIMARY KEY,
  booking_date DATE NOT NULL,
  booking_time TIME NOT NULL,
  booking_type VARCHAR(50) NOT NULL,
  business_id VARCHAR(150) NOT NULL,
  business_name TEXT NOT NULL,
  price VARCHAR(5),
  rating NUMERIC(5,2),
  latitude NUMERIC(10, 5) NOT NULL,
  longitude NUMERIC(10, 5) NOT NULL,
  user_id INT NOT NULL
  FOREIGN KEY (user_id) REFERENCES users (user_id)
);

CREATE TABLE IF NOT EXISTS follows (
  follow_id SERIAL PRIMARY KEY,
  fan_id INT NOT NULL,
  artist_id INT NOT NULL
  FOREIGN KEY (fan_id) REFERENCES users (user_id)
  FOREIGN KEY (artist_id) REFERENCES users (user_id)
);

