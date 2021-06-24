const express = require('express');
const route = express.Router();
const petsController = require('../app/controllers/pets.controller');

route.get('/create', petsController.createGet);
route.post('/create', petsController.createPost);
route.get('/posted', petsController.petsPosted);
route.get('/update/:id', petsController.edit);
route.post('/update/:id', petsController.update);
route.get('/:name', petsController.detail);

module.exports = route;