class newsController {

    index(req, res) {
        res.render('news');
    }
}

module.exports = new newsController;