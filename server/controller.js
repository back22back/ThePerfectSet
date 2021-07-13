const { fetchBusinesses, fetchSpecificBusiness } = require('../db/apiqueries.js');
const { addBooking, fetchBookings, fetchFollows } = require('../db/queries.js');

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
		req.body.booking_date,
		req.body.booking_type,
		req.body.business_id,
		req.body.latitude,
		req.body.longitude
	)
		.then((response) =>
			res.status(200).send(`Successfully added booking! System message:${response}`)
		)
		.catch((err) => {
			res.status(500).send(`Error adding booking: ${err}`);
			console.error(`Error adding booking: ${err}\n\n${err.stack}`);
		});
};

const getBookings = (req, res) => {
	fetchBookings()
		.then((data) => {
			const ids = data.map((business) => business.business_id);
			const types = data.map((business) => business.booking_type);

			return Promise.all(ids.map((id) => fetchSpecificBusiness(id))).then((businessData) => {
				const updatedData = businessData.map((business, i) => {
					return { ...business, type: types[i] };
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
	.then((data) => res.status(200).send(data))
	.catch((err) => {
		res.status(500).send(`Error fetching artists the fan follows: ${err}`);
		console.error(`Error fetching artists the fan follows: ${err}\n\n${err.stack}`);
	});
}

module.exports = {
	getBusinesses,
	postBooking,
	getBookings,
	getFollows,
};
