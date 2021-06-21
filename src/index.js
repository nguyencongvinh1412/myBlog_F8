const path = require('path')
const express = require('express');
const handlebars  = require('express-handlebars');
const morgan = require('morgan');

const app = express();
const port = 3000;

// logger url
app.use(morgan("combined"))

// static files
app.use(express.static(path.join(__dirname, 'public')));

// template engine
app.engine('hbs', handlebars({
    // thay đổi đuôi mở rộng file handlebars 
    extname: ".hbs"
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'))

// routing
app.get('/', (req, res) => res.render('home'))

app.listen(port, (req, res) => {
    console.log("Listening on port: " + port);
})