var locationController = (req, res) => {

    res.render('location', {
        address: '317 Brockley Road',
        facilities: 'Wifi',
        img: '/orchardpic',
        name: 'The Orchard',
        stop: 1,
        title: 'Home',
        twitter: '/twitterlink'
    });
};

module.exports = {
    locationController
};