const request = require('request');

const {apiOptions} = require('../../services/requestService');
const {getLocationInfo} = require('../../services/getLocationInfo');

const addReview = (req, res) => {

    const path = '/api/locations/' + req.params.locationId + '/reviews';
    const postData = {
        name: req.body.name,
        rating: req.body.rating,
        reviewerName: req.body.review
    };

    const requestOptions = {
        json: postData,
        method: 'POST',
        url: apiOptions.server + path
    };

    getLocationInfo(req, res, requestOptions, (req, res, data) => {

        if (data._id) {

            res.redirect('/location/' + req.params.locationId);

        } else {

            showError(req, res, data);
        }
    });
};

const locationReviewCall = (req, res) => {

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

    res.render('location-review-form', location);
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
    addReview,
    locationReviewCall
};