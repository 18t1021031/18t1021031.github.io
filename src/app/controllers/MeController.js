const Shoe = require('../models/Shoe')
const { mutipleMongooseToObject } = require('../../util/mongoose')
class MeController {

    //GET /me//stored/shoes
    storedShoes(req, res, next) {
        Promise.all([Shoe.find({}), Shoe.countDocumentsDeleted()])
            .then(([shoes, deletedCount]) => 
                res.render('me/stored-shoes', {
                deletedCount: deletedCount,
                shoes : mutipleMongooseToObject(shoes)
                })
            )
            .catch(next)
        
    }

    trashShoes(req, res, next) {
        Shoe.findDeleted({})
        .then(shoes => res.render('me/trash-shoes', {
            shoes : mutipleMongooseToObject(shoes)
        }))
        .catch(next)
    }
}

module.exports = new MeController();
