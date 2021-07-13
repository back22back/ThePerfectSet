const pool = require('./index.js');

const fetchBookings = () => {
	const queryStr = 'SELECT business_id, booking_type FROM bookings';
	return pool.query(queryStr).then((data) => data.rows);
};

const addBooking = (date, type, id, lat, lon, time) => {
	const queryStr = `INSERT INTO bookings (booking_date, booking_type, business_id, latitude, longitude, booking_time) \
                    VALUES ($1, $2, $3, $4, $5, $6)`;
	return pool.query(queryStr, [date, type, id, lat, lon]).then((response) => response);
};

module.exports = {
	addBooking,
	fetchBookings
};
