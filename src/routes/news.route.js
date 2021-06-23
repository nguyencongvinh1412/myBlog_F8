const express = require('express');
const route = express.Router();
const newsController = require('../app/controllers/news.controller');

route.get('/', newsController.index);

module.exports = route;