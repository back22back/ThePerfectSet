/*
Use this command line to create the database first in terminal
CREATE DATABASE dev_perfectset WITH OWNER = hrvy ENCODING = 'UTF8';

then run this file with the command:
psql -d dev_yelp_data -a -f schema.sql

to create the tables within that database
*/

CREATE TABLE IF NOT EXISTS businesses (
  id SERIAL PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  rating NUMERIC(5, 2) NOT NULL,
  price VARCHAR(5) NOT NULL,
  phone VARCHAR(15) NOT NULL,
  address TEXT NOT NULL,
  distance SMALLINT NOT NULL,
  latitude NUMERIC(15, 5) NOT NULL,
  longitude NUMERIC(15, 5) NOT NULL,
  image_url TEXT NOT NULL,
  yelp_url TEXT NOT NULL,
  yelp_id VARCHAR(150) NOT NULL,
  category TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS bookings (
  id SERIAL PRIMARY KEY,
  booking_date DATE NOT NULL,
  booking_type VARCHAR(50) NOT NULL,
  business_id SMALLINT NOT NULL,
  CONSTRAINT fk_businesses
    FOREIGN KEY(business_id)
      REFERENCES businesses(id)
);