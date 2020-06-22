const ticket = require('../model/ticket');
const general = require('../model/general');

const {
    message
} = require('../utils/tools');


function GenerateTicket(req, res) {

    const data = {};

    ticket.create().then(reponse => {
        if (reponse) {
            return res.status(201).send(message(true, 'respuesta exitosa', reponse));
        } else {
            return res.status(500).send(message(false, 'ocurrio un problema'));
        }
    });



}

async function GenerateTransaction(req, res) {

    const id_servicio_solicitud = await general.max('servicio_solicitud', 'id_servicio_solicitud');

    const data = {
        id_servicio_solicitud: id_servicio_solicitud + 1,
        identificacion_cliente: req.body.identificacion_cliente,
        descripcion: req.body.descripcion
    };


    ticket.transacction(data).then(response => {

        console.log('transacction', response)

        return res.status(201).send({
            success: true,
            data: 'se ha creado ticket'
        });

    }).catch(error => {

        console.log('error', error)

        return res.status(500).send(message(false, 'ocurrio un problema', error));

    });


}

module.exports = {
    GenerateTicket,
    GenerateTransaction
}