const tecnico = require('../model/tecnico');

const {
	message
} = require('../utils/tools');


function GetTicketAsign(req, res) {

    const id = req.params.id

    tecnico.TicketAsign(id).then(reponse => {
        return res.status(200).send(message(true,'respuesta exitosa',reponse));
    }).catch(error => {
        return res.status(500).send({
            success: false,
            message: error
        });
    })

}

function getAll(req, res) {

    tecnico.select().then(reponse => {
        return res.status(200).send(message(true,'respuesta exitosa',reponse));
    }).catch(error => {
        return res.status(500).send({
            success: false,
            message: error
        });
    })

}

function getOne(req, res) {

	const id = req.params.id

	tecnico.search(id).then(reponse => {
		if (reponse) {
			return res.status(200).send(message(true,'respuesta exitosa',reponse));
		} else {
			return res.status(200).send(message(false, 'no se encontraron registros'));
		}
	});

}


module.exports = {
    getAll,
    getOne,
    GetTicketAsign
}