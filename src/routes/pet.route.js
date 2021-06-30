const express = require('express');
const route = express.Router();
const petsController = require('../app/controllers/pets.controller');
const sortMiddleware = require('../middlewares/sort.middleware');

route.get('/create', petsController.createGet);
route.post('/create', petsController.createPost);
route.get('/posted', sortMiddleware.sortMiddleware, petsController.petsPosted);
route.get('/update/:id', petsController.edit);
route.post('/update/:id', petsController.update);
route.post('/delete/:id', petsController.delete);
route.get('/trash', petsController.trashGet);
route.get('/restore/:id', petsController.restore);
route.post('/forcedelete/:id', petsController.forcedelete);
route.post('/deleteMulty', petsController.deleteMulty);

// luôn để dưới cùng
route.get('/:name', petsController.detail);

module.exports = route;