const router = require('express').Router();
const { getBusinesses, postBooking, getBookings, deleteBooking } = require('./controller.js');

router.get('/businesses', getBusinesses);

router.get('/booking/view', getBookings);

router.post('/booking/newbooking', postBooking);

router.delete('/booking/cancel', deleteBooking);

module.exports = router;
