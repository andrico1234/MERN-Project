const {apiOptions} = require('../../services/requestService');
const {getLocationInfo} = require('../../services/getLocationInfo');

const locationCall = (req, res) => {

    const path = '/api/locations/' + req.params.locationId;
    const requestOptions = {
        json: {},
        method: 'GET',
        url: apiOptions.server + path
    };

    getLocationInfo(req, res, requestOptions, (req, res, data) => {

        if (data.title) {

            renderReviewForm(req, res, data);

        } else {

            showError(req, res, data);
        }
    });
};

const renderReviewForm = (req, res, location) => {

    res.render('location-detail', location);
};

const showError = (req, res, data) => {

    res.status(data.status);
    res.render('error', {
        error: {
            status: data.status
        },
        message: data.message
    });
};

module.exports = {
    locationCall
};