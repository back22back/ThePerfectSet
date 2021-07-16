const { fetchBusinesses, fetchSpecificBusiness } = require('../db/apiqueries.js');
const {
	addBooking,
	addUser,
	fetchBookings,
	fetchFollows,
	removeBooking,
	addFollow,
	removeFollow,
	fetchUser
} = require('../db/queries.js');

const getBusinesses = (req, res) => {
	fetchBusinesses(req.query.location, req.query.categories)
		.then((data) => res.status(200).send(data))
		.catch((err) => {
			res.status(500).send(`Error fetching businesses: ${err}`);
			console.error(`Error fetching businesses: ${err}\n\n${err.stack}`);
		});
};

const postBooking = (req, res) => {
	addBooking(
		req.query.booking_date,
		req.query.booking_type,
		req.query.business_id,
		req.query.latitude,
		req.query.longitude,
		req.query.booking_time,
		req.query.business_name,
		req.query.user_id
	)
		.then((response) =>
			res.status(200).send(`Successfully added booking! System message:${response}`)
		)
		.catch((err) => {
			res.status(500).send(`Error adding booking: ${err}`);
			console.error(`Error adding booking: ${err}\n\n${err.stack}`);
		});
};

const postUser = (req, res) => {
	console.log(req.query);
	console.log(req.body);
	addUser(
		req.body.user_name,
		req.body.password,
		req.body.is_artist,
		req.body.bio,
		req.body.portrait_url,
		req.body.website
	)
		.then((response) =>
			res.status(200).send(`Successfully added user! System message: ${response}`)
		)
		.catch((err) => {
			res.status(500).send(`Error adding user: ${err}`);
			console.error(`Error adding user: ${err}\n\n${err.stack}`);
		});
};

const postFollows = (req, res) => {
	addFollow(req.query.fan_id, req.query.artist_id)
		.then((response) =>
			res.status(200).send(`Successfully added follow! System message: ${response}`)
		)
		.catch((err) => {
			res.status(500).send(`Error adding follow: ${err}`);
			console.error(`Error adding follow: ${err}\n\n${err.stack}`);
		});
};

const deleteFollows = (req, res) => {
	removeFollow(req.query.fan_id, req.query.artist_id)
		.then((response) =>
			res.status(200).send(`Successfully removed follow! System message: ${response}`)
		)
		.catch((err) => {
			res.status(500).send(`Error removing follow: ${err}`);
			console.error(`Error removing follow: ${err}\n\n${err.stack}`);
		});
};

const getBookings = (req, res) => {
	fetchBookings(req.query.user_id)
		.then((data) => {
			const ids = data.map((business) => business.business_id);
			const types = data.map((business) => business.booking_type);
			const dates = data.map((business) => JSON.stringify(business.booking_date).slice(1, 11));
			const times = data.map((business) => business.booking_time);

			return Promise.all(ids.map((id) => fetchSpecificBusiness(id))).then((businessData) => {
				const updatedData = businessData.map((business, i) => {
					return { ...business, type: types[i], date: dates[i], time: times[i] };
				});

				res.status(200).send(updatedData);
			});
		})
		.catch((err) => {
			res.status(500).send(`Error fetching bookings: ${err}`);
			console.error(`Error fetching bookings: ${err}\n\n${err.stack}`);
		});
};

const getFollows = (req, res) => {
	fetchFollows(req.query.user_id)
		.then((data) => {
			res.status(200).send(data)})
		.catch((err) => {
			res.status(500).send(`Error fetching artists the fan follows: ${err}`);
			console.error(`Error fetching artists the fan follows: ${err}\n\n${err.stack}`);
		});
};

const deleteBooking = (req, res) => {
	removeBooking(req.query.business_id)
		.then((response) =>
			res.status(200).send(`Successfully canceled booking! System message:${response}`)
		)
		.catch((err) => {
			res.status(500).send(`Error canceling booking: ${err}`);
			console.error(`Error canceling booking: ${err}\n\n${err.stack}`);
		});
};

const getSingleUser = (req, res) => {
	console.log('got here', )
	fetchUser(req.query.user_id)
		.then((data) => res.status(200).send(data))
		.catch((err) => {
			res.status(500).send(`Error fetching user: ${err}`);
			console.error(`Error fetching user: ${err}\n\n${err.stack}`);
		});
};

module.exports = {
	getBusinesses,
	postBooking,
	postUser,
	getBookings,
	getFollows,
	postFollows,
	deleteFollows,
	deleteBooking,
	getSingleUser
};
