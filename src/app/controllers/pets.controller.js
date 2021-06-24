const db = require('../models/pets');

class newsController {

    detail(req, res, next) {
        const name = req.params.name.toString();

        db.findOne({name: name})
            .then(pets => {
                res.render('pets/petDetail', {pets: pets.toObject()});
            })
            .catch((err) => next(err));

        // res.send('petDetail ' +  name );
    }

    createGet(req, res, next) {
        res.render('pets/create');
    }

    createPost(req, res, next) {
        const data = req.body;
        const newPet = new db(data);
        newPet.save()
            .then(() => {
                res.redirect('/');
            })
            .catch((err) => next(err));
    }

    petsPosted(req, res, next) {
        const data = db.find({})
            .then(pets => {
                pets = pets.map(pet => pet.toObject());
                res.render('me/petPosted', {pets});
            })
            .catch((err) => next(err));
    }

    edit(req, res, next) {
        const id = req.params.id;
        db.findById({_id: id})
            .then(pet => {
                pet = pet.toObject();
                res.render('pets/update', {pet});
            })
            .catch((err) => next(err));
    }
    update(req, res, next) {
        const id = req.params.id;
        const data = req.body;
        db.findByIdAndUpdate({_id: id}, data)
            .then(() => {
                res.redirect('/pets/posted');
            })
            .catch((err) => next(err));
    }
}

module.exports = new newsController;