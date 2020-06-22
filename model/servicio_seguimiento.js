 // the connection!
const knex = require('../db')

module.exports = {

  async select() {
    //return knex('sticker');
    return await knex.select('*').from('servicio_seguimiento');
  },
  async search(id) {
    //return knex('cliente').where('id_cliente', id).first();
    return await knex.select('*').from('servicio_seguimiento').where('id_servicio_seguimiento', id).first();
  }

}