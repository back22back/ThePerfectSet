const router = require('express').Router();
const { getBusinesses, postBooking, getBookings, getFollows, getTourdates } = require('./controller.js');

router.get('/businesses', getBusinesses);

router.get('/booking/view', getBookings);

router.post('/booking/newbooking', postBooking);

router.get('/follows/', getFollows);

router.get('/tourdates/', getTourdates);

module.exports = router;