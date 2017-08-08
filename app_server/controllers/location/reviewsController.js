const {getLocationInfo} = require('../../services/getLocationInfo');

const addReview = (req, res) => {

    getLocationInfo(req, res, (req, res, data) => {

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
    addReview
};