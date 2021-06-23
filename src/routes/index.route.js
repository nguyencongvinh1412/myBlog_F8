const express = require('express');
const app = express();
const route = express.Router();

const siteRoute = require('./site.route');
const newsRoute = require('./news.route');

route.use('/', siteRoute);
route.use('/news', newsRoute);

module.exports = route;