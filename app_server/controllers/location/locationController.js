const {getLocationInfo} = require('../../services/getLocationInfo');

const locationCall = (req, res) => {

    getLocationInfo(req, res, (req, res, data) => {

        if (data.title) {

            renderDetailPage(req, res, data);
        } else {

            showError(req, res, data);
        }
    });
};

const renderDetailPage = (req, res, locationInfo) => {

    res.render('location-detail', locationInfo);
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