const expect = require('expect');
const request = require('supertest');
const {ObjectID} = require('mongodb');

const {app} = require('../../app');
const {Location} = require('../models/locations');
const {locations, populateLocations} = require('../seed/seed.js');

beforeEach(populateLocations);

xdescribe('POST /locations', () => {

    let newLocation = new Location({
        address: '456 Faux Pass',
        coords: [4, 6],
        reviews: [],
        stop: 2,
        title: 'The Gantry'
    });

    it('should post a new location', (done) => {

        request(app)
            .post('/api/locations')
            .send({location: newLocation})
            .expect(200)
            .expect((res) => {
            })
            .end(done);
    });

    xit('should send a 404 request', (done) => {
        request(app)
            .post('/api/locations')
            .send({pointless: 'rubbish'})
            .expect(404)
            .expect((res) => {

            })
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

xdescribe('PATCH /locations/:locationId', () => {

    it('should update a single location', () => {


    });
});

xdescribe('DELETE /locations/:locationId', () => {

    it('should delete a single location', () => {


    });
});