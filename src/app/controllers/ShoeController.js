const { mongooseToObject } = require('../../util/mongoose')
const Shoe = require('../models/Shoe')
const { storedShoes } = require('./MeController')
class ShoeController {

    //GET /shoes/:slug (biến động)
    show(req, res, next) {
            // req.params.slug
            // res.send('Shoe detail. Slug' + req.params.slug);
            Shoe.findOne({slug: req.params.slug })
                .then(shoe => { 
                    // res.json(shoe) 
                    res.render('shoes/show', { shoe: mongooseToObject(shoe)})

                })
                .catch(next)
    }

    //GET /shoes/create
    create(req, res, next) {
       res.render('shoes/create')
    }
    //POST /shoes/store
    store(req, res, next) {
        // res.json(req.body)
        const formData = req.body //const formData = {...req.body}
        const shoe = new Shoe(formData)
        shoe.save()
            .then(() => res.redirect('/me/stored/shoes'))
            .catch((err) => {   
            })
        }

    //GET /shoes/:id/edit
    edit(req, res, next) {
        Shoe.findById(req.params.id)
            .then(shoe => res.render('shoes/edit', {
                shoe: mongooseToObject(shoe)
            }))
            .catch(next)
    }

    //PUT /shoes/:id
    update(req, res, next) {
        Shoe.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('/me/stored/shoes'))
            .catch(next)
    }

    //DELETE /shoes/:id
    destroy(req, res, next){
        Shoe.delete({_id: req.params.id})
            .then(() =>res.redirect('back'))
            .catch(next)    
        }

    forceDestroy(req, res, next){
        Shoe.deleteOne({_id: req.params.id})
            .then(() =>res.redirect('back'))
            .catch(next)    
        }
    
    //PATCH /shoes/:id/restore
    restore(req, res, next){
        Shoe.restore({_id: req.params.id})
            .then(() =>res.redirect('back'))
            .catch(next)    
        }
        
    //POST /shoes/:id/restore
    handleFormAction(req, res, next) {
        switch(req.body.action) {
            case 'delete':
                Shoe.delete({_id: { $in: req.body.shoeIds}})
                    .then(() =>res.redirect('back'))
                    .catch(next)    
                break
            default:
                res.json({message: 'Action invalid'})    
        }
    }         
}
module.exports = new ShoeController();
