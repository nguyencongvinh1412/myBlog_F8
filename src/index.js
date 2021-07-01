const path = require('path')
const express = require('express');
const handlebars  = require('express-handlebars');
const morgan = require('morgan');

// helpler function of handlebars
const helperHandlebar = require('./helpers/sum.handlebars');

//require index.route file
const route = require('./routes/index.route');

// database 
const db = require('./config/db/connect');
const { type } = require('os');
db.connect();

const app = express();
const port = process.env.PORT || 3000;

// body 
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded



// logger url
app.use(morgan("combined"))

// static files
app.use(express.static(path.join(__dirname, 'public')));

// template engine
app.engine('hbs', handlebars({
    // thay đổi đuôi mở rộng file handlebars 
    extname: ".hbs",
    helpers: {
        sum: helperHandlebar.sum,
        sort: helperHandlebar.sort,
    }
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'))

// routing
app.use('/', route);

app.listen(port, (req, res) => {
    console.log("Listening on port: " + port);
})