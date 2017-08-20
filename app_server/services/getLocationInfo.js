const moment = require('moment');
const request = require('request');

const getLocationInfo = ((req, res, requestOptions, callback) => {

    request(requestOptions, (err, response, body) => {

        if (response.statusCode === 200) {

            body.location.reviews.forEach((review) => {

                review.reviewDate = moment(review.reviewDate).format('LLL');
            });

            callback(req, res, body.location);

        } else if (response.statusCode === 201) {

            callback(req, res, body);

        } else {

            const errorResponse = showError(req, res, response.statusCode);
            callback(errorResponse.req, errorResponse.res, errorResponse.body);
        }
    });
});

const showError = (req, res, status) => {

    let message;

    if (status === 404) {

        message = '404, page could not be found'

    } else {

        message = 'I\'m afraid something\'s gone wrong'
    }

    return {
        req,
        res,
        body: {
            message,
            status
        }
    };
};

module.exports = {
    getLocationInfo
};