const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    rating: {
        required: true,
        type: Number
    },
    reviewerName: {
        required: true,
        type: String
    },
    reviewBody: String,
    reviewDate: {
        type: Date,
        "default": Date.now
    }
});

const locationSchema = new mongoose.Schema({
    address: {
        required: true,
        type: String
    },
    coords: {
        index: '2dsphere',
        required: true,
        type: [Number]
    },
    facilities: [String],
    img: String,
    openingHours: {
        monFri: {
            type: String,
            "default": '9-5'
        },
        sat: {
            type: String,
            'default': '9-5'
        },
        sun: {
            type: String,
            'default': '9-5'
        }
    },
    rating: {
        "default": 0,
        max: 5,
        min: 0,
        type: Number
    },
    reviews: [reviewSchema],
    sidebar: String,
    stop: {
        required: true,
        type: Number
    },
    title: {
        required: true,
        type: String
    },
    twitter: String
});

const Location = mongoose.model('Location', locationSchema);
const Review = mongoose.model('Review', reviewSchema);

module.exports = {
    Location,
    Review
};