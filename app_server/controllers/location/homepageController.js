const request = require('request');
const server = process.env.NODE_ENV === 'production' ? 'https://brockley-mern.herokuapp.com/' : 'http://localhost:3000';

const apiOptions = {
    server
};

const homepageList = (req, res) => {

    const path = '/api/locations';
    const requestOptions = {
        json: {},
        method: 'GET',
        url: apiOptions.server + path
    };

    request(requestOptions, (err, response, body) => {

        renderHomepage(req, res, body.location);
    });
};

const renderHomepage = (req, res, body) => {

    let message = '';

    if (!(body instanceof Array)) {

        message = 'API lookup error';
        body = [];
    } else if (!body.length) {

        message = 'No places found';
    }

    res.render('locations-list', {
        locations: body,
        message,
        sidebar: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        subtitle: 'Crawl through Brockley\'s best independent Cafes',
        title: 'Home'
    });
};

module.exports = {
    homepageList
};