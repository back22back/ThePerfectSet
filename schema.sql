/*
Use this command line to create the database first in terminal
CREATE DATABASE artists_info WITH OWNER = <owner name> ENCODING = 'UTF8';

then run this file with the command:
psql -d artists_info -a -f schema.sql

to create the tables within that database
*/

CREATE TABLE IF NOT EXISTS bookings (
  id SERIAL PRIMARY KEY,
  booking_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  booking_type VARCHAR(50) NOT NULL,
  business_id VARCHAR(150) NOT NULL,
  latitude NUMERIC(10, 5) NOT NULL,
  longitude NUMERIC(10, 5) NOT NULL
);