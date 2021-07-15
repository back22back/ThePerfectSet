const router = require('express').Router();
const { getBusinesses, postBooking, getBookings, deleteBooking, getFollows, getTourdates, postUser } = require('./controller.js');


router.get('/businesses', getBusinesses);

router.get('/booking/view', getBookings);

router.get('/follows/', getFollows);

router.get('/tourdates/', getTourdates);

router.post('/booking/newbooking', postBooking);

router.post('/user', postUser);

router.delete('/booking/cancel', deleteBooking);

module.exports = router;
