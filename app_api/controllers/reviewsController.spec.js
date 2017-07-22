const expect = require('expect');
const request = require('supertest');
const {ObjectID} = require('mongodb');

const {app} = require('../../app');
const {Review} = require('../models/locations');
const {locations, populateLocations} = require('../seed/seed');

beforeEach(populateLocations);

describe('POST /locations/:locationId/reviews', () => {

    let newReview = new Review({
        rating: 5,
        reviewBody: '4334',
        reviewerName: 'Rico'
    });

    it('should post a new review', (done) => {

        request(app)
            .post(`/api/locations/${locations[0]._id}/reviews`)
            .send(newReview)
            .expect(201)
            .expect((res) => {
                expect(res.body.reviewerName).toBe(newReview.reviewerName);
            })
            .end(done);
    });

    it('should send a 400 request if ID is incorrect', (done) => {

        request(app)
            .post(`/api/locations/1234/reviews`)
            .send(newReview)
            .expect(400)
            .end(done);
    });

    it('should return a 404 error review cannot be posted', (done) => {

        let fuckedReview = new Review({
            rating: 5,
            reviewBody: '4334',
        });

        request(app)
            .post(`/api/locations/${locations[0]._id}/reviews`)
            .send(fuckedReview)
            .expect(404)
            .end(done)
    });
});

describe('GET /locations/:locationId/reviews/:reviewId', () => {

    let locationId = locations[0]._id;
    let reviewId = locations[0].reviews._id;

    it('should get a specific review', (done) => {

        request(app)
            .get(`/api/locations/${locationId}/reviews/${reviewId}`)
            .expect(200)
            .expect((res) => {
                expect(res.body.location.review._id).toEqual(reviewId);
            })
            .end(done);
    });

    it('should send a 400 if id is incorrect', (done) => {

        request(app)
            .get(`/api/locations/${locationId}/reviews/2020`)
            .expect(400)
            .end(done);
    });

    it('should send 404 if specific review is not found', (done) => {

        request(app)
            .get(`/api/locations/${locationId}/reviews/${new ObjectID}`)
            .expect(404)
            .end(done);
    });
});

xdescribe('PATCH /locations/:locationId/reviews/reviewId', () => {

    it('should update a specific review', () => {


    });
});

xdescribe('DELETE /locations/:locationId/reviews/reviewId', () => {

    it('should delete a specific review', () => {


    });
});