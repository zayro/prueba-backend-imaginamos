const express = require('express');


//const knex = require('../db')

const api = express.Router();

const cliente = require('../controllers/cliente');
const ticket = require('../controllers/ticket');
const tecnico = require('../controllers/tecnico');
const calificacion = require('../controllers/calificacion');
const servicioSeguimiento = require('../controllers/servicio_seguimiento');



/** 
 * Metodos de consulta 
 */


api.get('/', (req, res) => {

	return res.status(200).send({
		message: "Welcome to Api Imaginamos "
	});

});

api.get('/cliente', cliente.getAll);
api.get('/cliente/:id', cliente.getOne);
api.post('/cliente', cliente.save);
api.put('/cliente/:id', cliente.update);
api.delete('/cliente/:id', cliente.destroy);


api.get('/ticket/insecure', ticket.GenerateTicket);
api.post('/ticket/CrearTicket', ticket.GenerateTransaction);


api.get('/tecnico/', tecnico.getAll);
api.get('/tecnico/:id', tecnico.getOne);
api.get('/tecnico/ticket/:id', tecnico.GetTicketAsign);


api.get('/servicio_seguimiento', servicioSeguimiento.getAll);
api.get('/servicio_seguimiento/:id', servicioSeguimiento.getOne);

api.get('/calificacion', calificacion.getAll);
api.get('/calificacion/:id', calificacion.getOne);
api.put('/calificacion/:id', calificacion.update);

module.exports = api;