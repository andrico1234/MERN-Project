const {ObjectID} = require('mongodb');

const {Location} = require('../models/locations');

const locationsCreate = (req, res) => {

    const request = req.body.location;
    const location = new Location({

        address: request.address,
        coords: [parseFloat(request.lat), parseFloat(request.long)],
        facilities: request.facilities.split(' '),
        img: request.img,
        openingHours: {
            monFri: request.openingHours.monFri,
            sat: request.openingHours.sat,
            sun: request.openingHours.sun
        },
        rating: request.rating,
        sidebar: request.sidebar,
        stop: request.stop,
        title: request.title,
        twitter: request.twitter
    });

    location.save().then((doc) => {

        res.send(doc);

    }).catch((err) => {

        res.status(400).send(err);
    });
};

const locationsDeleteOne = (req, res) => {

    const locationId = req.params.locationId;

    if (!ObjectID.isValid(locationId)) {

        return res.status(400).send({});
    }

    Location.findOneAndRemove({
        _id: locationId
    }).then((location) => {

        if (!location) {

            return res.status(404).send();
        }

        res.send({location});

    }).catch((err) => {

        res.status(404).send(err);
    });
};

const locationsList = (req, res) => {

    Location.find().sort({'stop': 1}).then((location) => {

        res.send({location});

    }).catch((err) => {

        res.status(400).send(err);
    });
};

const locationsReadOne = (req, res) => {

    const locationId = req.params.locationId;

    if (!ObjectID.isValid(locationId)) {

        return res.status(400).send({});
    }

    Location.findOne({
        _id: locationId
    }).then((location) => {

        if (!location) {

            return res.status(404).send();
        }

        res.send({location});

    }).catch((err) => {

        res.status(404).send(err);
    });
};

const locationsUpdateOne = (req, res) => {

    const locationId = req.params.locationId;
    const body = req.body.location;

    if (!ObjectID.isValid(locationId)) {

        return res.status(400).send({error: 'invalidId'});
    }

    Location.findOneAndUpdate({
        _id: locationId
    }, {
        $set: body
    }, {
        new: true
    }).then((location) => {

        res.send({location});

    }).catch(() => {

        res.status(400).send();
    });
};

module.exports = {
    locationsCreate,
    locationsDeleteOne,
    locationsList,
    locationsReadOne,
    locationsUpdateOne
};