var homepageController = (req, res) => {

    res.render('locations-list', {
        locations: [{
            address: '317 Brockley Road',
            facilities: [{facility: 'Coffee'}, {facility: 'Cakes'}, {facility: 'WiFi'}],
            img: '/orchardpic',
            name: 'The Orchard',
            stop: 1,
            twitter: '/twitterlink'
        }, {
            address: '317 Brockley Road',
            facilities: [{facility: 'Coffee'}, {facility: 'Cakes'}, {facility: 'WiFi'}],
            img: '/orchardpic',
            name: 'The Orchard',
            stop: 1,
            twitter: '/twitterlink'
        }, {
            address: '317 Brockley Road',
            facilities: [{facility: 'Coffee'}, {facility: 'Cakes'}, {facility: 'WiFi'}],
            img: '/orchardpic',
            name: 'The Orchard',
            stop: 1,
            twitter: '/twitterlink'
        }],
        sidebar: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        subtitle: 'Crawl through Brockley\'s best independent Cafes',
        title: 'Home',
    });
};

module.exports = {
    homepageController
};