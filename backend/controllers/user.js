const axios = require('axios');
const fs = require('fs');
const event = require('../events/creerFichier');

exports.login = (req, res, next) => {

    axios.post('https://backend-tp-final-nodejs.agence-pixi.fr/wow/compte/check',
        req.body
    )
        .then(response => res.status(200).json(response.data))
        .catch(() => {


            event.emit('appendFichier', { fileName: 'echecConnect.txt', message: new Date().toLocaleString('fr-FR') + `tentative de connexion invalide! \n` })

            error => res.status(400).json({ error })
        });
}