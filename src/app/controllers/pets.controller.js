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
}

module.exports = new newsController;