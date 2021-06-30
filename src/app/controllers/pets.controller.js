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
        let data = db.find({});

        //to sort data
        if(req.query.hasOwnProperty('sort')) {
            data.sort({
                [res.locals._sort.column]: res.locals._sort.type
            })
        }
        
        data.then(pets => {
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

    delete(req, res, next) {
        const id = req.params.id;
        db.delete({_id: id})
            .then(() => res.redirect('back'))
            .catch(err => next(err));
    }

    trashGet(req, res, next) {
        db.findDeleted({})
            .then(pets => {
                pets = pets.map(pet => pet.toObject());
                res.render('me/petsTrash', {pets});
            })
            .catch((err) => next(err));
    }

    restore(req, res, next) {
        const id = req.params.id;
        db.restore({_id: id})
            .then(() => res.redirect('back'))
            .catch((err) => next(err));
    }

    forcedelete(req, res, next) {
        const id = req.params.id;
        db.deleteOne({_id: id})
            .then(() => res.redirect('back'))
            .catch(err => next(err));
    }

    deleteMulty(req, res, next) {
        var data = req.body;

        switch(data.selectAction) {
            case 'delete':
                db.delete({_id: data.checkboxItem})
                    .then(() => res.redirect('back'))
                    .catch(err => next(err));
                break;
            default: 
                res.json({message: 'Action is invalid'});
        }
    }
}

module.exports = new newsController;