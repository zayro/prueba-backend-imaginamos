 // the connection!
const knex = require('../db')

module.exports = {
  async select() {
    //return knex('sticker');
    return await knex.select('*').from('cliente')
  },
  async search(id) {
    //return knex('cliente').where('id_cliente', id).first();
    return await knex.select('*').from('cliente').where('id_cliente', id).first();
  },
  insert(sticker) {
    return knex('cliente').insert(sticker, '*');
  },
  update(id, sticker) {
    return knex('cliente').where('id', id).update(sticker, '*');
  },
  delete(id) {
    return knex('cliente').where('id', id).del();
  }
}