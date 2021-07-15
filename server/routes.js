const router = require('express').Router();
const { getBusinesses, postBooking, postFollows, deleteFollows, getBookings, deleteBooking, getFollows, getTourdates, postUser } = require('./controller.js');


router.get('/businesses', getBusinesses);

router.get('/booking/view', getBookings);

router.get('/follows', getFollows);

router.get('/tourdates/', getTourdates);

router.post('/booking/newbooking', postBooking);

router.post('/user', postUser);

router.post('/follows', postFollow);

router.delete('/follows', deleteFollow);

router.delete('/booking/cancel', deleteBooking);

module.exports = router;
