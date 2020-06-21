const tecnico = require('../model/tecnico');

const {
	message
} = require('../utils/tools');


function GetTicketAsign(req, res) {

    const id = req.params.id

    tecnico.TicketAsign(id).then(reponse => {
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



module.exports = {
    GetTicketAsign
}