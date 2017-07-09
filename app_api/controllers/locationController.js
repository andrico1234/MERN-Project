const {ObjectID} = require('mongodb');
const mongoose = require('mongoose');

const {Location} = require('../models/locations');

const locationsCreate = (req, res) => {

    let request = req.body.location;
    let location = new Location({

        title: request.title,
        address: request.address,
        coords: [parseFloat(request.lat), parseFloat(request.long)],
        facilities: request.facilities.split(", "),
        img: request.img,
        openingHours: {
            monFri: request.openingHours.monFri,
            sat: request.openingHours.sat,
            sun: request.openingHours.sun
        },
        rating: request.rating,
        sidebar: request.sidebar,
        stop: request.stop,
        twitter: request.twitter
    });

    location.save().then((doc) => {

        res.send(doc);
    }).catch((err) => {

        res.status(400).send(err);
    });
};

const locationsDeleteOne = (req, res) => {

    return 1;
};

const locationsList = (req, res) => {

    Location.find().sort({'stop': 1}).then((location) => {

        res.send({location});
    }).catch((err) => {

        res.status(404).send(err);
    });
};

const locationsReadOne = (req, res) => {

    let locationId = req.params.locationId;

    if (!ObjectID.isValid(locationId)) {

        return res.status(400).send();
    }

    Location.findOne({

        _id: locationId
    }).then((location) => {

        res.send({location});
    }).catch((err) => {

        res.status(404).send(err);
    });
};

const locationsUpdateOne = (req, res) => {

    return 1;
};

module.exports = {
    locationsCreate,
    locationsDeleteOne,
    locationsList,
    locationsReadOne,
    locationsUpdateOne,
};