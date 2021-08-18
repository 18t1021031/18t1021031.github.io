
const Shoe = require('../models/Shoe')
const { mutipleMongooseToObject } = require('../../util/mongoose')

class SiteController {
    //GET /
    index(req, res, next) {

        Shoe.find({})
            
             .then(shoes => {
                //  
                // shoes = shoes.map(shoes => shoes.toObject())
                res.render('home',{
                    shoes: mutipleMongooseToObject(shoes)
                })
             })
            .catch(error => next(error)) //.catch(next)
    }

    //GET /search
    search(req, res) {
        {
            res.render('search');
        }
    }
}

module.exports = new SiteController();
