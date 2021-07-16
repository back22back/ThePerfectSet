const pool = require('./index.js');

const fetchBookings = (user) => {
	const queryStr = 'SELECT * FROM bookings WHERE user_id = $1 ORDER BY booking_date, booking_time';
	return pool.query(queryStr, [user]).then((data) => data.rows);
};

const addBooking = (date, type, id, lat, lon, time, name, user) => {
	const queryStr = `INSERT INTO bookings (booking_date, booking_type, business_id, latitude, longitude, booking_time, business_name, user_id) \
                    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`;
	return pool
		.query(queryStr, [date, type, id, lat, lon, time, name, user])
		.then((response) => response);
};

const addUser = (user_name, password, is_artist, bio, portrait_url, website) => {
	const queryStr = `INSERT INTO users (user_name, user_password, is_artist, bio, portrait_url, website) VALUES ($1, $2, $3, $4, $5, $6)`;
	return pool
		.query(queryStr, [user_name, password, is_artist, bio, portrait_url, website])
		.then((response) => response);
};

const addFollow = (fan_id, artist_id) => {
	const queryStr = `INSERT INTO follows (fan_id, artist_id) VALUES ($1, $2)`;
	return pool.query(queryStr, [fan_id, artist_id]).then((response) => response);
};

const removeFollow = (fan_id, artist_id) => {
	const queryStr = `DELETE FROM follows WHERE (fan_id=$1 AND artist_id=$2)`;
	return pool.query(queryStr, [fan_id, artist_id]).then((response) => response);
};

const removeBooking = (id) => {
	const queryStr = 'DELETE FROM bookings WHERE business_id = $1';
	return pool.query(queryStr, [id]).then((response) => response);
};

const fetchFollows = (user_id) => {
	const queryStr = `
	SELECT user_name AS artist_name, bio, portrait_url, website,
    (
      SELECT json_agg(row_to_json(a))
      FROM
      (
        SELECT business_name AS location_name, booking_date AS date
        FROM bookings
        WHERE user_id=users.user_id
      ) a
    ) AS tour_dates
  FROM users WHERE user_id IN (
		SELECT artist_id FROM follows WHERE fan_id=$1
	)`;
	return pool.query(queryStr, [user_id]).then((response) => response.rows);
};

const fetchUser = (user) => {
	const queryStr = 'SELECT * FROM users WHERE user_id=$1';
	return pool.query(queryStr, [user]).then((data) => data.rows);
};

module.exports = {
	addBooking,
	fetchBookings,
	fetchFollows,
	addFollow,
	removeFollow,
	removeBooking,
	addUser,
	fetchUser
};
