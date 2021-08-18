// const newsRouter = require('./news');
const shoeRouter = require('./shoes');
const siteRouter = require('./site');
const meRouter = require('./me');

function route(app) {
    //   app.get('/news', (req, res) => {
    //     res.render('news');
    //   })
    // app.use('/news', newsRouter);
    app.use('/', siteRouter);
    app.use('/shoes', shoeRouter);
    app.use('/me', meRouter);

}

module.exports = route;
