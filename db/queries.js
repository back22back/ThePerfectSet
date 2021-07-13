const pool = require('./index.js');

const fetchBookings = () => {
  const queryStr = 'SELECT business_id, booking_type FROM bookings';
  return pool.query(queryStr)
    .then((data) => data.rows);
};

const addBooking = (type, id, lat, lon) => {
  const queryStr = `INSERT INTO bookings (booking_type, business_id, latitude, longitude) \
                    VALUES ($1, $2, $3, $4)`;
  return pool.query(queryStr, [type, id, lat, lon])
    .then((response) => response);
};

module.exports = {
  addBooking,
  fetchBookings
};