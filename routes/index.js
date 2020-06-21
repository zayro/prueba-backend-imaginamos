const express = require('express');


//const knex = require('../db')

const api = express.Router();

const cliente = require('../controllers/cliente');
const ticket = require('../controllers/ticket');
const tecnico = require('../controllers/tecnico');



/** 
 * Metodos de consulta 
 */


api.get('/', (req, res) => {

	return res.status(200).send({
		message: "Welcome to Api Imaginemsos "
	});

});

api.get('/cliente', cliente.getAll);
api.get('/cliente/:id', cliente.getOne);

api.get('/ticket', ticket.GenerateTicket);
api.get('/ticket/secure', ticket.GenerateTransaction);


api.get('/tecnico/ticket/:id', tecnico.GetTicketAsign);


module.exports = api;