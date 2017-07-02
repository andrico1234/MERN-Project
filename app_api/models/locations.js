var mongoose = require('mongoose');

var reviewsSchema = new mongoose.Schema({
    rating: Number,
    reviewerName: String,
    reviewDate: {
        type: Date,
        "default": Date.now
    },
    reviewTest: String
});

var locationSchema = new mongoose.Schema({
    address: {
        required: true,
        type: String
    },
    coords: {
        index: '2dsphere',
        type: [Number]
    },
    facilities: [{String}],
    img: String,
    openingHours: {
        monFri: String,
        sat: String,
        sun: String
    },
    rating: {
        "default": 0,
        max: 5,
        min: 0,
        type: Number
    },
    reviews: [reviewsSchema],
    sidebar: String,
    stop: Number,
    title: {
        required: true,
        type: String
    },
    twitter: String
});

mongoose.model('Location', locationSchema);