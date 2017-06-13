var homepageController = (req, res) => {

    res.render('locations-list', {
        address: '317 Brockley Road',
        facilities: 'Wifi',
        img: '/orchardpic',
        name: 'The Orchard',
        stop: 1,
        title: 'Home',
        twitter: '/twitterlink'
    });};

module.exports = {
    homepageController
};