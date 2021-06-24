const User = require('../models/pets');

class siteController {
    index(req, res, next) {

        User.find({})
            .then((pets) => {
                pets = pets.map((pet) => pet.toObject());
                res.render('home', {
                    pets
                })
            })
            .catch((err) => next(err));
    }

    search(req, res) {
        res.render('search');
    }
}

module.exports = new siteController;