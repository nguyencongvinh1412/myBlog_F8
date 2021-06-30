const express = require('express');
const route = express.Router();
const siteController = require('../app/controllers/site.controller');


route.get('/', siteController.index);

route.get('/search', siteController.search);

module.exports = route;