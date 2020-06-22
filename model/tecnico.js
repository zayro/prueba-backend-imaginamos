 // the connection!
const knex = require('../db')

module.exports = {

  async TicketAsign(id) {
    //return knex('cliente').where('id_cliente', id).first();
    return await knex.select('*').from('ticket_soporte').where('id_tecnico', id).first();
  },

  async select() {
    //return knex('sticker');
    return await knex.select('*').from('tecnico');
  },
  async search(id) {
    //return knex('cliente').where('id_cliente', id).first();
    return await knex.select('*').from('tecnico').where('id_tecnico', id).first();
  }, 
}