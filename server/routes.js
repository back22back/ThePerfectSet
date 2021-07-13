const router = require('express').Router();
const { getBusinesses, postBooking, getBookings } = require('./controller.js');

router.get('/businesses', getBusinesses);

router.get('/booking/view', getBookings);

router.post('/booking/newbooking', postBooking);

module.exports = router;