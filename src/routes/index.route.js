const express = require('express');
const app = express();
const route = express.Router();

const siteRoute = require('./site.route');
const newsRoute = require('./news.route');
const petRoute = require('./pet.route');

route.use('/', siteRoute);
route.use('/news', newsRoute);
route.use('/pets', petRoute);

module.exports = route;