const router = require('express').Router();
const { getBusinesses, postBooking, getBookings, getFollows } = require('./controller.js');

router.get('/businesses', getBusinesses);

router.get('/booking/view', getBookings);

router.post('/booking/newbooking', postBooking);

router.get('/follows/', getFollows);

module.exports = router;