var mongoose = require('mongoose');
var Loc = mongoose.model('Location');

var sendResponse = function(res, status, content) {

    res.status(status);
    res.json(content);
};

var locationsListByDistance = function(req, res) {

    sendResponse(res, 200, {"status": "success"});
};

var locationsCreate = function(req, res) {

    sendResponse(res, 200, {"status": "success"});
};

module.exports = {
    locationsCreate,
    locationsListByDistance
};