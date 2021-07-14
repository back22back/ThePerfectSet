const { fetchBusinesses, fetchSpecificBusiness } = require('../db/apiqueries.js');
const { addBooking, fetchBookings, removeBooking } = require('../db/queries.js');

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
		req.query.booking_time
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

module.exports = {
	getBusinesses,
	postBooking,
	getBookings,
	deleteBooking
};
