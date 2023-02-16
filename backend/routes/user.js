const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user')

//POST
//connecter un utilisateur
router.post('/login', userCtrl.login);

module.exports = router