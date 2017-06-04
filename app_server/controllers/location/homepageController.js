var homepageController = (req, res) => {

    res.render('index', {title: 'Brockley Cafe Crawl'});
};

module.exports = {
    homepageController
};