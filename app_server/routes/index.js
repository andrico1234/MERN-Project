var express = require('express');
var router = express.Router();

var {homepageController} = require('../controllers/homepageController');

router.get('/', homepageController);

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