var reviewController = (req, res) => {

    res.render('location-review-form', {title: 'Add review'});
};

module.exports = {
    reviewController
};