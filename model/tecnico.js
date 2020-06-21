 // the connection!
const knex = require('../db')

module.exports = {

  async TicketAsign(id) {
    //return knex('cliente').where('id_cliente', id).first();
    return await knex.select('*').from('ticket_soporte').where('id_tecnico', id).first();
  }
}