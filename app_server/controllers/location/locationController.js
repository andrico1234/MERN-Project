const request = require('request');
const server = process.env.NODE_ENV === 'production' ? 'https://brockley-mern.herokuapp.com/' : 'http://localhost:3000';

const apiOptions = {
    server
};

const locationController = (req, res) => {

    res.render('location-detail', {
        address: '340 Brockley Road, SE4 2BT',
        coords: {
            lat: 51.455703,
            long: -0.036580
        },
        description: 'get from google',
        facilities: [{facility: 'Coffee'}, {facility: 'Baby Chairs'}, {facility: 'WiFi'}],
        img: '/arlopic',
        openingHours: {
            monFri: '7am - 7pm',
            sat: '9am - 10pm',
            sun: 'Closed'
        },
        rating: 4.7,
        reviews: [{
            rating: 5,
            reviewerName: 'Pablo',
            reviewDate: '12/04/1993',
            reviewText: 'excellent shit dawg'
        }, {
            rating: 4,
            reviewerName: 'Pietro',
            reviewDate: '12/04/1993',
            reviewText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua`
        }, {
            rating: 5,
            reviewerName: 'Peter',
            reviewDate: '12/04/1993',
            reviewText: 'excellent shit dawg'
        }],
        sidebar: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        stop: 2,
        title: 'Arlo and Moe',
        twitter: '/twitterlink'
    });
};

module.exports = {
    locationController
};