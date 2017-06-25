var reviewController = (req, res) => {

    res.render('location-review-form', {
        title: 'The Orchard'
    });
};

module.exports = {
    reviewController
};