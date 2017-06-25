var express = require('express');
var router = express.Router();

var {genericPageController} = require('../controllers/about/genericPageController'), {homepageController} = require('../controllers/location/homepageController'), {locationController} = require('../controllers/location/locationController'), {reviewController} = require('../controllers/location/reviewController');

router.get('/', homepageController);
router.get('/about', genericPageController);
router.get('/location/', locationController);
router.get('/location/review/new', reviewController);

router.get('/error', (req, res) => {
    res.render('error', {
        error: {
            status: 404,
            stack: ''
        },
        message: 'There was an error'
    });
});

module.exports = router;