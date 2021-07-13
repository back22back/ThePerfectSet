const axios = require('axios');

const fetchBusinesses = (location, categories) => {
  const params = {
    headers: { Authorization: `Bearer ${process.env.API_TOKEN}` },
    params: {
      location,
      categories
    }
  };

  return axios.get('https://api.yelp.com/v3/businesses/search', params)
    .then((data) => {
      const businessData = [];
      data.data.businesses.forEach((business) => {
        const businessType = business.categories.map((category) => category.title);
        const bizloc = `${business.location.address1}, ${business.location.city}, ${business.location.state} ${business.location.zip_code}`;

        businessData.push({
          id: business.id,
          name: business.name,
          address: bizloc,
          phone: business.display_phone,
          yelp_url: business.url,
          image_url: business.image_url,
          categories: businessType,
          rating: business.rating,
          price: business.price,
          latitude: business.coordinates.latitude,
          longitude: business.coordinates.longitude,
        });
      });

      return businessData;
    });
};

const fetchSpecificBusiness = (business_id) => {
  const params = {
    headers: { Authorization: `Bearer ${process.env.API_TOKEN}` },
  };

  return axios.get(`https://api.yelp.com/v3/businesses/${business_id}`, params)
    .then((data) => {
      const business = data.data;
      const businessType = business.categories.map((category) => category.title);
      const bizloc = business.location.display_address.join(',');

      return {
        id: business.id,
        name: business.name,
        address: bizloc,
        phone: business.display_phone,
        yelp_url: business.url,
        image_url: business.image_url,
        categories: businessType,
        rating: business.rating,
        price: business.price,
        latitude: business.coordinates.latitude,
        longitude: business.coordinates.longitude,
      };
    });
};

module.exports = {
  fetchBusinesses,
  fetchSpecificBusiness
};