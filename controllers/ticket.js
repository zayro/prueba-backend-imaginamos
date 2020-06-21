const ticket = require('../model/ticket');

const {
    message
} = require('../utils/tools');


function GenerateTicket(req, res) {

    const data = {};

    ticket.create().then(reponse => {
        if (reponse) {
            return res.status(201).send({
                success: true,
                data: reponse
            });
        } else {
            return res.status(500).send(message(false, 'ocurrio un problema'));
        }
    });



}

function GenerateTransaction(req, res) {

    const data = {};


    ticket.transacction().then(response => {

        console.log('transacction',response)

        return res.status(201).send({
            success: true,
            data: 'se ha creado ticket'
        });

    }).catch(error => {

        console.log('error',error)

        return res.status(500).send({
            success: false,
            data: 'ocurrio un problema'
        });

    });


}


module.exports = {
    GenerateTicket,
    GenerateTransaction
}