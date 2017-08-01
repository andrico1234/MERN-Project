const moment = require('moment');
const request = require('request');

const {apiOptions} = require('../../services/requestService');

const locationCall = (req, res) => {

    const path = '/api/locations/' + req.params.locationId;
    const requestOptions = {
        json: {},
        method: 'GET',
        url: apiOptions.server + path
    };

    request(requestOptions, (err, response, body) => {

        if (response.statusCode === 200) {
            body.location.reviews.forEach((review) => {

                review.reviewDate = moment(review.reviewDate).format('LLL');
            });

            renderDetailPage(req, res, body.location);
        } else {

            showError(req, res, response.statusCode)
        }
    });
};

const renderDetailPage = (req, res, locationInfo) => {

    res.render('location-detail', locationInfo);
};

const showError = (req, res, status) => {

    let message;

    if (status === 404) {

        message = '404, page could not be found'
    } else {

        message = 'I\'m afraid something\'s gone wrong'
    }

    res.status(status);
    res.render('error', {
        error: {
            status
        },
        message
    })
};

module.exports = {
    locationCall
};