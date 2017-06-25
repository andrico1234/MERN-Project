var locationController = (req, res) => {

    res.render('location-detail', {
        address: '317 Brockley Road, SE4 2QZ',
        description: 'get from google',
        facilities: [{facility: 'Coffee'}, {facility: 'Cakes'}, {facility: 'WiFi'}],
        img: '/orchardpic',
        locationMap: 'https://www.google.co.uk/maps/embed/v1/place?key=AIzaSyBE9cgGx0m_7Us1rJSjyLUmzEk8TZWnKqY&q=The+Orchard',
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
        stop: 1,
        title: 'The Orchard',
        twitter: '/twitterlink'
    });
};

module.exports = {
    locationController
};