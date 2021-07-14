const pool = require('./index.js');

const fetchBookings = () => {
	const queryStr = 'SELECT business_id, booking_type FROM bookings';
	return pool.query(queryStr).then((data) => data.rows);
};

const addBooking = (date, type, id, lat, lon) => {
	const queryStr = `INSERT INTO bookings (booking_date, booking_type, business_id, latitude, longitude) \
                    VALUES ($1, $2, $3, $4, $5)`;
	return pool.query(queryStr, [date, type, id, lat, lon]).then((response) => response);
};

const fetchFollows = (user_id) => {
	const queryStr = `SELECT json_agg(artist_id) FROM follows WHERE fan_id=$1`;
	return pool.query(queryStr, [user_id]).then((response) => response);
};

const fetchTourdates = (artist_id, start_date, end_date) => {
	const queryStr = `SELECT user_name AS artist_name, bio, portrait_url, website,
	  (
			SELECT json_agg(row_to_json(a))
			FROM
			(
				SELECT business_name AS location_name, booking_date AS date
				FROM bookings
				WHERE user_id=$1 AND booking_date>=$2 AND booking_date<=$3
			) a
		) AS tour_dates
		FROM users WHERE user_id=$1`;
		return pool.query(queryStr, [artist_id, start_date, end_date]).then((response) => response);
}

module.exports = {
	addBooking,
	fetchBookings,
	fetchFollows,
	fetchTourdates
};
