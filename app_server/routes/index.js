const express = require('express');
const router = express.Router();

const {genericPageController} = require('../controllers/about/genericPageController'), {homepageController} = require('../controllers/location/homepageController'), {locationController} = require('../controllers/location/locationController'), {reviewController} = require('../controllers/location/reviewsController');

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