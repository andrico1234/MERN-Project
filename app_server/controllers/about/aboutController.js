var aboutController = (req, res) => {

    res.render('index', {title: 'About'});
};

module.exports = {
    aboutController
};