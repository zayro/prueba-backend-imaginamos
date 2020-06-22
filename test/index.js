//apiTest.js
const request = require('supertest');
const app = require('../app');
const expect = require('chai').expect;


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

describe('GET /cliente', function () {
    it('respond with json containing a list of all cliente', function (done) {
        request(app)
            .post('/cliente')
            .set('Accept', 'application/json')
            .send({
                "nombre": "pepito",
                "identificacion": "10200343"
            })
            .expect('Content-Type', /json/)
            .expect(200, done());
    });
});

describe('GET /tecnico', function () {
    it('respond with json containing a list of all tecnico', function (done) {
        request(app)
            .get('/cliente')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done());
    });
});

/*
describe('POST /ticket/CrearTicket',  () => {
    it('respond with json containing to create support ticket', async (done) => {
       await request(app)
            .post('/ticket/CrearTicket')
            .send({
                "identificacion_clientea": "102030",
                "descripcione": "arrego del tv"
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(500)
            
    });
});

*/