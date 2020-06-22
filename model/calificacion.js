 // the connection!
const knex = require('../db')

module.exports = {
  async select() {
    //return knex('sticker');
    return await knex.select('*').from('servicio_calificacion');
  },
  async search(id) {
    //return knex('cliente').where('id_cliente', id).first();
    return await knex.select('*').from('servicio_calificacion').where('id_servicio_calificacion', id).first();
  },
  update(id, data) {
    return knex('servicio_calificacion').where('id_servicio_calificacion', id).update(data, '*');
  }
}