/*
Use this command line to create the database first in terminal
CREATE DATABASE dev_perfectset WITH OWNER = hrvy ENCODING = 'UTF8';

then run this file with the command:
psql -d dev_yelp_data -a -f schema.sql

to create the tables within that database
*/

CREATE TABLE IF NOT EXISTS bookings (
  id SERIAL PRIMARY KEY,
  booking_date DATE NOT NULL,
  booking_type VARCHAR(50) NOT NULL,
  business_id SMALLINT NOT NULL,
  latitute NUMERIC(10, 5),
  longitude NUMERIC(10, 5)
);