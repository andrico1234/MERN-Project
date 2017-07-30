const expect = require('expect');
const request = require('supertest');
const {ObjectID} = require('mongodb');

const {app} = require('../../app');
const {locations, populateLocations} = require('../seed/seed.js');

beforeEach(populateLocations);

describe('POST /locations', () => {

    let newLocation = {
        address: "456 Faux Pass",
        title: "The Gantry",
        long: 51.507351,
        lat: -0.127758,
        openingHours: {
            monFri: "10-10"
        },
        _id: "597c9923995acf3a1c17cb6c",
        reviews: [],
        rating: 0,
        stop: 5,
        facilities: ""
    };

    it('should post a new location', (done) => {

        request(app)
            .post('/api/locations')
            .send({location: newLocation})
            .expect(200)
            .expect((res) => {
                expect(res.body.title).toEqual(newLocation.title);
            })
            .end(done);
    });

    it('should send a 500 request if invalid data is sent', (done) => {

        request(app)
            .post('/api/locations')
            .send({location: 'rubbish'})
            .expect(500)
            .end(done);
    });
});

describe('GET /locations', () => {

    it('should retrieve the locations', (done) => {

        request(app)
            .get('/api/locations')
            .expect(200)
            .expect((res) => {
                expect(res.body.location.length).toBe(2);
            })
            .end(done);
    });
});

describe('GET /locations/:locationId', () => {

    it('should retrieve a single location', (done) => {

        request(app)
            .get(`/api/locations/${locations[0]._id}`)
            .expect(200)
            .expect((res) => {
                expect(res.body.location._id).toEqual(locations[0]._id);
            })
            .end(done);
    });

    it('should send 400 request if ID doesn\t exist', (done) => {

        request(app)
            .get(`/api/locations/1234`)
            .expect(400)
            .end(done);
    });

    it('should send a 404 request if location cannot be found', (done) => {

        request(app)
            .get(`/api/locations/${new ObjectID}`)
            .expect(404)
            .end(done);
    });
});

describe('PATCH /locations/:locationId', () => {

    it('should update a single location', (done) => {

        let body = {
            location: {
                title: 'The Brockley Mess'
            }
        };

        request(app)
            .patch(`/api/locations/${locations[0]._id}`)
            .send(body)
            .expect(200)
            .expect((res) => {
                expect(res.body.location._id).toEqual(locations[0]._id);
                expect(res.body.location.title).toEqual(body.location.title);
            })
            .end(done);
    });

    it('should return 400 for invalid id', (done) => {

        request(app)
            .patch(`/api/locations/1234`)
            .expect(400)
            .end(done);
    });

    it('should return 404 if location doesn\'t exist', (done) => {

        request(app)
            .patch(`/api/locations/${new ObjectID}`)
            .expect(400)
            .end(done);
    });
});

describe('DELETE /locations/:locationId', () => {

    it('should delete a single location', (done) => {

        request(app)
            .delete(`/api/locations/${locations[0]._id}`)
            .expect(200)
            .expect((res) => {
                expect(res.body.location._id).toEqual(locations[0]._id);
            })
            .end(done);
    });

    it('should send 400 request if ID doesn\t exist', (done) => {

        request(app)
            .delete(`/api/locations/1234`)
            .expect(400)
            .end(done);
    });

    it('should send a 404 request if location cannot be found', (done) => {

        request(app)
            .delete(`/api/locations/${new ObjectID}`)
            .expect(404)
            .end(done);
    });
});