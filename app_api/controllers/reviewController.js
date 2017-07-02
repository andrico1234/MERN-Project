var mongoose = require('mongoose');
var Loc = mongoose.model('Location')

var sendResponse = function(res, status, content) {

    res.status(status);
    res.json(content);
};

var reviewCreate = function(req, res) {

    sendResponse(res, 200, {"status": "success"});
};

module.exports = {
    reviewCreate
};