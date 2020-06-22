const calificacion = require('../model/calificacion');
const general = require('../model/general');

const {
	message
} = require('../utils/tools');


function getAll(req, res) {

    calificacion.select().then(reponse => {
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

	calificacion.search(id).then(reponse => {
		if (reponse) {
			return res.status(200).send(message(true,'respuesta exitosa',reponse));
		} else {
			return res.status(200).send(message(false, 'no se encontraron registros'));
		}
	});

}

async function update(req, res){

    const id = req.params.id;

    const data = {
        calificacion: req.body.calificacion
    };

    console.log('update calificacion',data);

    calificacion.update(id, data).then(reponse => {
		if (reponse) {
			return res.status(200).send(message(true,'respuesta exitosa',reponse));
		} else {
			return res.status(200).send(message(false, 'no se encontraron registros'));
		}
	}).catch(error => {
        return res.status(200).send(message(false, error));
    });
    
}

module.exports = {
    getAll,
    getOne,
    update
}