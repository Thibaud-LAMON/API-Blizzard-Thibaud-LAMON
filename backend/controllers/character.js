const Character = require("../models/Character");
const bodyParser = require("body-parser");

exports.getAllChar = (req, res, next) => {

    Character.find()
        .then(characters => res.status(200).json(characters))
        .catch(error => res.status(400).json({ error }));

};

exports.createChar = (req, res, next) => {

    const character = new Character({

        pseudo: req.body.pseudo,
        class: req.body.class,
        level: req.body.level,
        userId: req.auth.userId
    })

    character.save()
        .then(res.status(201).json({ message: "Nouveau personnage créé !!" }))
        .catch(error => { console.log(error); res.status(400).json({ error }); });


    bodyParser.urlencoded({ extended: false })

};

exports.updateChar = (req, res, next) => {
    const character = new Character({
        ...req.body
    });
    Character.updateOne({ _id: req.params.id }, character)
        .then(() => { res.status(201).json({ message: 'Information du personnage mises à jour!' }); })
        .catch((error) => { res.status(400).json({ error: error }); });

};

exports.deleteChar = (req, res, next) => {
    Thing.deleteOne({ _id: req.params.id })
        .then(() => { res.status(200).json({ message: 'Personnage supprimé!' }); })
        .catch((error) => { res.status(400).json({ error: error }); });

};