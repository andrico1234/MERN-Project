const {ObjectID} = require('mongodb');
const {Location} = require('../models/locations');

let reviews = [{
    _id: new ObjectID,
    rating: 5,
    reviewerName: 'Rico'
}, {
    _id: new ObjectID,
    rating: 3,
    reviewerName: 'James'
}];

const locations = [{
    _id: new ObjectID,
    address: '123 Fake Street',
    coords: [2, 3],
    reviews: reviews[0],
    stop: 1,
    title: 'Arlo and Moe'
}, {
    _id: new ObjectID,
    address: '456 Faux Pass',
    coords: [4, 6],
    reviews: [],
    stop: 2,
    title: 'The Gantry'
}];

const populateLocations = (done) => {

    Location.remove({}).then(() => {

        return Location.insertMany(locations);
    }).then(() => {
        done();
    });
};

module.exports = {
    locations,
    populateLocations
};