class NewController {
    //GET news
    index(req, res) {
        res.render('news');
    }

    //GET /news/:slug (biến động)
    show(req, res) {
        {
            res.send('new detail. Slug');
        }
    }
}

module.exports = new NewController();
