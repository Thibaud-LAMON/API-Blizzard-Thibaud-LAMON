const express = require('express');
const router = express.Router();
const characterCtrl = require('../controllers/character');
const auth = require('../middlewares/auth');

//GET
//Liste tous les persos
router.get('/', characterCtrl.getAllChar);

//POST
//ajoute un perso
router.post('/', auth, characterCtrl.createChar);

//PUT
//récupère et modifie un perso
router.put('/:pseudo/:class', auth, characterCtrl.updateChar);

//DELETE
//récupère et supprime un perso
router.delete('/:pseudo/:class', auth, characterCtrl.deleteChar);

module.exports = router;