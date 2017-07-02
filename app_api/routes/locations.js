var express = require('express');
var router = express.Router();
var locationController = require('../controllers/locationController');
var reviewController = require('../controllers/reviewController');

// locations
router.get('/locations', locationController.locationsListByDistance);
router.post('/locations', locationController.locationsCreate);
//router.get('/locations/:locationId', locationController.locationsReadOne);
//router.put('/locations/:locationId', locationController.locationsUpdateOne);
//router.delete('/locations/:locationId', locationController.locationsDeleteOne);

// reviews
//router.post('/locations/:locationId/reviews', reviewController.reviewsCreate);
//router.get('/locations/:locationId/reviews/:reviewId', reviewController.reviewsReadOne);
//router.put('/locations/:locationId/reviews/:reviewId', reviewController.reviewsUpdateOne);
//router.delete('/locations/:locationId/reviews/:reviewId', reviewController.reviewsDeleteOne);

module.exports = router;