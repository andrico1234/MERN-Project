var locationController = (req, res) => {

    res.render('location-detail', {
        address: '317 Brockley Road',
        description: 'get from google',
        img: '/orchardpic',
        locationMap: '',
        openingHours: '10am-10pm',
        reviews: [{
          rating: 5,
            reviewerName: 'Pablo',
            reviewData: '12/04/1993',
            reviewText: 'excellent shit dawg'
        }],
        stop: 1,
        title: 'The Orchard',
        twitter: '/twitterlink'
    });
};

module.exports = {
    locationController
};