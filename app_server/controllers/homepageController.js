var homepageController = (req, res) => {

    res.render('index', {title: 'Express'});
};

module.exports = {
    homepageController
};