 // the connection!
 const knex = require('../db')

 module.exports = {

   async create() {

     // crea solicitud del servicio
     let id_servicio_solicitud = await knex('servicio_solicitud').max('id_servicio_solicitud');
     id_servicio_solicitud = id_servicio_solicitud[0].max + 1;

     await knex('servicio_solicitud').insert({
       id_servicio_solicitud: id_servicio_solicitud,
       id_cliente: 1
     });

     // crea ticket de servicio y asocia el ticket a un tecnico
     let id_servicio_ticket = await knex('servicio_ticket').max('id_servicio_ticket');
     id_servicio_ticket = id_servicio_ticket[0].max + 1;


     let id_tecnico = await knex.select(knex.raw('id_tecnico from tecnico order by random() limit 1'));
     id_tecnico = id_tecnico[0].id_tecnico;

     await knex('servicio_ticket').insert({
       id_servicio_solicitud: id_servicio_solicitud,
       id_servicio_ticket: id_servicio_ticket,
       id_tecnico: id_tecnico
     });

     // crea link de seguimiento
     let id_servicio_calificacion = await knex('servicio_calificacion').max('id_servicio_calificacion');
     id_servicio_calificacion = id_servicio_calificacion[0].max + 1;


     await knex('servicio_calificacion').insert({
       id_servicio_solicitud: id_servicio_solicitud,
       id_servicio_calificacion: id_servicio_calificacion
     });


     // crea link calificacion
     let id_servicio_seguimiento = await knex('servicio_seguimiento').max('id_servicio_seguimiento');
     id_servicio_seguimiento = id_servicio_seguimiento[0].max + 1;


     await knex('servicio_seguimiento').insert({
       id_servicio_solicitud: id_servicio_solicitud,
       id_servicio_seguimiento: id_servicio_seguimiento,
       estado: 'inicial'
     });



   },

   async transacction() {


       await knex.transaction(async trx => {

           // crea solicitud del servicio
           let id_servicio_solicitud = await knex('servicio_solicitud').max('id_servicio_solicitud').transacting(trx);
           id_servicio_solicitud = id_servicio_solicitud[0].max + 1;

           await knex('servicio_solicitud').insert({
             id_servicio_solicitud: id_servicio_solicitud,
             id_cliente: 1
           }).transacting(trx);

           // crea ticket de servicio y asocia el ticket a un tecnico
           let id_servicio_ticket = await knex('servicio_ticket').max('id_servicio_ticket').transacting(trx);
           id_servicio_ticket = id_servicio_ticket[0].max + 1;


           let id_tecnico = await knex.select(knex.raw('id_tecnico from tecnico order by random() limit 1')).transacting(trx);
           id_tecnico = id_tecnico[0].id_tecnico;

           await knex('servicio_ticket').insert({
             id_servicio_solicitud: id_servicio_solicitud,
             id_servicio_ticket: id_servicio_ticket,
             id_tecnico: id_tecnico
           }).transacting(trx);

           // crea link de seguimiento
           let id_servicio_calificacion = await knex('servicio_calificacion').max('id_servicio_calificacion').transacting(trx);
           id_servicio_calificacion = id_servicio_calificacion[0].max + 1;


           await knex('servicio_calificacion').insert({
             id_servicio_solicitud: id_servicio_solicitud,
             id_servicio_calificacion: id_servicio_calificacion
           }).transacting(trx);


           // crea link calificacion
           let id_servicio_seguimiento = await knex('servicio_seguimiento').max('id_servicio_seguimiento').transacting(trx);
           id_servicio_seguimiento = id_servicio_seguimiento[0].max + 1;


           await knex('servicio_seguimiento').insert({
             id_servicio_solicitud: id_servicio_solicitud,
             id_servicio_seguimiento: id_servicio_seguimiento,
             estado: 'inicial'
           }).transacting(trx);

         })


     
   }
 }