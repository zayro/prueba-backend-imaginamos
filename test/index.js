//apiTest.js
const request = require('supertest');
const app = require('../routes');


//==================== user API test ====================

/**
 * Testing get all user endpoint
 */
describe('GET /cliente', function () {
    it('respond with json containing a list of all cliente', function (done) {
        request(app)
            .get('/cliente')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done());
    });
});