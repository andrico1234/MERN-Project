const {ObjectID} = require('mongodb');

const {Location, Review} = require('../models/locations');

const addReview = (req, res, location) => {

    if (location.reviews.length < 0) {

        res.status(404).send('Reviews not found');
    }

    let newReview = new Review({
        rating: req.body.rating,
        reviewBody: req.body.reviewBody,
        reviewerName: req.body.reviewerName
    });

    location.reviews.push(newReview);

    let thisReview;

    location.save().then((locationRes) => {

        updateAverageRating(location._id);
        thisReview = locationRes.reviews[locationRes.reviews.length - 1];
        res.status(201).send(thisReview);
    }).catch((err) => {

        res.status(404).send(err);
    });
};

const reviewsCreate = (req, res) => {

    let locationId = req.params.locationId;

    if (!ObjectID.isValid(locationId)) {

        return res.status(400).send({'message': 'location ID was incorrect'});
    }

    Location.findById({
        _id: locationId
    }).select('reviews').then((reviews) => {

        addReview(req, res, reviews);
    }).catch((err) => {

        res.status(404).send(err);
    });
};

const reviewsDeleteOne = (req, res) => {

    return 1;
};

const reviewsFind = (req, res) => {

    let locationId = req.params.locationId;
    let reviewId = req.params.reviewId;

    if (!ObjectID.isValid(locationId) || !ObjectID.isValid(reviewId)) {

        return res.status(400).send({'message': 'ids were incorrect'});
    }

    Location.findOne({_id: locationId}).select('name reviews').then((location) => {

        let review;

        if (location.reviews.length > 0) {

            review = location.reviews.id(reviewId);

            if (!review) {

                res.status(404).send({'message': 'review not found'});
            } else {

                res.send({
                    location: {
                        name: location.name,
                        id: locationId,
                        review: review
                    }
                });
            }
        } else {

            res.status(404).send({'message': 'no reviews for this location'});
        }
    }).catch((err) => {

        return res.status(404).send(err);
    });
};

const reviewsUpdateOne = (res, req) => {

    return 1;
};

const updateAverageRating = (id) => {

    Location.findById(id).select('rating reviews').then((location) => {

        let ratingAverage, ratingTotal, reviewCount;

        if (location.reviews && location.reviews.length > 0) {

            reviewCount = location.reviews.length;
            ratingTotal = 0;

            for (let i = 0; i < reviewCount; i++) {

                ratingTotal = ratingTotal + location.reviews[i].rating;
            }

            ratingAverage = Math.round((ratingTotal / reviewCount) * 10) / 10;
            location.rating = ratingAverage;
            location.save().then(() => {

                console.log("Average rating updated to", ratingAverage);
            }).catch((err) => {

                console.log(err);
            });
        }
    }).catch((err) => {

        console.log('error setting average', err);
    });
};

module.exports = {
    reviewsCreate,
    reviewsDeleteOne,
    reviewsFind,
    reviewsUpdateOne
};