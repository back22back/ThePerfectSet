const router = require('express').Router();
const {
	getBusinesses,
	postBooking,
	postFollows,
	deleteFollows,
	getBookings,
	deleteBooking,
	getFollows,
	getTourdates,
	postUser,
	getSingleUser
} = require('./controller.js');

router.get('/businesses', getBusinesses);

router.get('/booking/view', getBookings);

router.get('/follows', getFollows);

router.get('/tourdates/', getTourdates);

router.get('/user', getSingleUser);

router.post('/booking/newbooking', postBooking);

router.post('/user', postUser);

router.post('/follows', postFollows);

router.delete('/follows', deleteFollows);

router.delete('/booking/cancel', deleteBooking);

module.exports = router;
