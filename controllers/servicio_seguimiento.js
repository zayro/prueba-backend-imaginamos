const servicioSeguimiento = require('../model/servicio_seguimiento');

const {
	message
} = require('../utils/tools');


function getAll(req, res) {

    servicioSeguimiento.select().then(reponse => {
        return res.status(200).send({
            success: true,
            data: reponse
        });
    }).catch(error => {
        return res.status(500).send({
            success: false,
            message: error
        });
    })

}

function getOne(req, res) {

	const id = req.params.id

	servicioSeguimiento.search(id).then(reponse => {
		if (reponse) {
			return res.status(200).send({
				success: true,
				data: reponse
			});
		} else {
			return res.status(200).send(message(false, 'no se encontraron registros'));
		}
	});

}


module.exports = {
    getAll,
    getOne
}