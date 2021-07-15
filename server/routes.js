const router = require('express').Router();
const {
	getBusinesses,
	postBooking,
	getBookings,
	deleteBooking,
	getFollows,
	getTourdates
} = require('./controller.js');

router.get('/businesses', getBusinesses);

router.get('/booking/view', getBookings);

router.post('/booking/newbooking', postBooking);

router.get('/follows/', getFollows);

router.get('/tourdates/', getTourdates);

router.delete('/booking/cancel', deleteBooking);

module.exports = router;
