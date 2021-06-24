const express = require('express');
const route = express.Router();
const petsController = require('../app/controllers/pets.controller');

route.get('/create', petsController.createGet);
route.get('/:name', petsController.detail);
route.post('/create', petsController.createPost);

module.exports = route;