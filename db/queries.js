const pool = require('./index.js');

const fetchBookings = () => {
	const queryStr = 'SELECT business_id, booking_type FROM bookings';
	return pool.query(queryStr).then((data) => data.rows);
};

const addBooking = (date, type, id, lat, lon, time, name) => {
	const queryStr = `INSERT INTO bookings (booking_date, booking_type, business_id, latitude, longitude, booking_time, business_name) \
                    VALUES ($1, $2, $3, $4, $5, $6, $7)`;
	return pool.query(queryStr, [date, type, id, lat, lon, time, name]).then((response) => response);
};

const removeBooking = (id) => {
	const queryStr = 'DELETE FROM bookings WHERE business_id = $1';
	return pool.query(queryStr, [id]).then((response) => response);
};

module.exports = {
	addBooking,
	fetchBookings,
	removeBooking
};
